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
a[c]=function(){a[c]=function(){A.vb(b)}
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
if(a[b]!==s)A.pP(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.nD(b)
return new s(c,this)}:function(){if(s===null)s=A.nD(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.nD(a).prototype
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
a(hunkHelpers,v,w,$)}var J={
nJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mF(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.nH==null){A.uY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.lj("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ma
if(o==null)o=$.ma=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.v3(a)
if(p!=null)return p
if(typeof a=="function")return B.cw
s=Object.getPrototypeOf(a)
if(s==null)return B.bE
if(s===Object.prototype)return B.bE
if(typeof q=="function"){o=$.ma
if(o==null)o=$.ma=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aC,enumerable:false,writable:true,configurable:true})
return B.aC}return B.aC},
ov(a,b){if(a<0||a>4294967295)throw A.e(A.an(a,0,4294967295,"length",null))
return J.ow(new Array(a),b)},
az(a,b){if(a<0||a>4294967295)throw A.e(A.an(a,0,4294967295,"length",null))
return J.ow(new Array(a),b)},
eB(a,b){if(a<0)throw A.e(A.d8("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.m("D<0>"))},
n0(a,b){return A.b(new Array(a),b.m("D<0>"))},
ow(a,b){return J.n1(A.b(a,b.m("D<0>")),b)},
n1(a,b){a.fixed$length=Array
return a},
ox(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ox(r))break;++b}return b},
qX(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ox(q))break}return b},
d5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eC.prototype
return J.hD.prototype}if(typeof a=="string")return J.dH.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.hC.prototype
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
if(typeof a=="symbol")return J.dJ.prototype
if(typeof a=="bigint")return J.dI.prototype
return a}if(a instanceof A.Q)return a
return J.mF(a)},
aa(a){if(typeof a=="string")return J.dH.prototype
if(a==null)return a
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
if(typeof a=="symbol")return J.dJ.prototype
if(typeof a=="bigint")return J.dI.prototype
return a}if(a instanceof A.Q)return a
return J.mF(a)},
ac(a){if(a==null)return a
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
if(typeof a=="symbol")return J.dJ.prototype
if(typeof a=="bigint")return J.dI.prototype
return a}if(a instanceof A.Q)return a
return J.mF(a)},
uT(a){if(typeof a=="number")return J.dG.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.cW.prototype
return a},
d6(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
if(typeof a=="symbol")return J.dJ.prototype
if(typeof a=="bigint")return J.dI.prototype
return a}if(a instanceof A.Q)return a
return J.mF(a)},
nG(a){if(a==null)return a
if(!(a instanceof A.Q))return J.cW.prototype
return a},
bd(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d5(a).R(a,b)},
d7(a,b){if(typeof b==="number")if(Array.isArray(a)||A.v0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).l(a,b)},
F(a,b,c){return J.ac(a).h(a,b,c)},
qb(a,b,c,d){return J.d6(a).kc(a,b,c,d)},
qc(a,b,c,d){return J.d6(a).e3(a,b,c,d)},
qd(a,b,c){return J.nG(a).fH(a,b,c)},
qe(a,b){return J.ac(a).a7(a,b)},
nW(a,b){return J.nG(a).fL(a,b)},
nX(a,b){return J.ac(a).dh(a,b)},
bC(a,b,c,d){return J.ac(a).aL(a,b,c,d)},
nY(a,b){return J.d6(a).ag(a,b)},
qf(a){return J.nG(a).gJ(a)},
c3(a){return J.d5(a).gC(a)},
qg(a){return J.aa(a).gaR(a)},
bD(a){return J.ac(a).gG(a)},
qh(a){return J.d6(a).gbk(a)},
c4(a){return J.aa(a).gn(a)},
qi(a){return J.d5(a).gaC(a)},
nZ(a,b,c){return J.d6(a).ha(a,b,c)},
o_(a,b){return J.ac(a).eh(a,b)},
k0(a,b,c){return J.ac(a).bd(a,b,c)},
mR(a){return J.uT(a).i(a)},
qj(a){return J.ac(a).cd(a)},
e5(a){return J.d5(a).A(a)},
qk(a,b){return J.ac(a).cf(a,b)},
ex:function ex(){},
hC:function hC(){},
eD:function eD(){},
d:function d(){},
cb:function cb(){},
i5:function i5(){},
cW:function cW(){},
bM:function bM(){},
dI:function dI(){},
dJ:function dJ(){},
D:function D(a){this.$ti=a},
kr:function kr(a){this.$ti=a},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dG:function dG(){},
eC:function eC(){},
hD:function hD(){},
dH:function dH(){}},A={n2:function n2(){},
n4(a){return new A.cC("Field '"+a+"' has not been initialized.")},
bS(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l9(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e4(a,b,c){return a},
nI(a){var s,r
for(s=$.b0.length,r=0;r<s;++r)if(a===$.b0[r])return!0
return!1},
nl(a,b,c,d){A.io(b,"start")
if(c!=null){A.io(c,"end")
if(b>c)A.ad(A.an(b,0,c,"start",null))}return new A.f5(a,b,c,d.m("f5<0>"))},
r1(a,b,c,d){return new A.ef(a,b,c.m("@<0>").au(d).m("ef<1,2>"))},
qU(){return new A.dU("No element")},
ou(){return new A.dU("Too few elements")},
cC:function cC(a){this.a=a},
be:function be(a){this.a=a},
mM:function mM(){},
l0:function l0(){},
ee:function ee(){},
bu:function bu(){},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cD:function cD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
ef:function ef(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(){},
ce:function ce(){},
dW:function dW(){},
pQ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
v0(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.e5(a)
return s},
eX(a){var s,r=$.oO
if(r==null)r=$.oO=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kS(a){return A.r8(a)},
r8(a){var s,r,q,p
if(a instanceof A.Q)return A.aQ(A.ai(a),null)
s=J.d5(a)
if(s===B.cu||s===B.cx||t.cx.b(a)){r=B.aG(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aQ(A.ai(a),null)},
rg(a){if(typeof a=="number"||A.d1(a))return J.e5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.c8)return a.A(0)
return"Instance of '"+A.kS(a)+"'"},
oN(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
rh(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ak)(a),++r){q=a[r]
if(!A.fE(q))throw A.e(A.c1(q))
if(q<=65535)B.c.H(p,q)
else if(q<=1114111){B.c.H(p,55296+(B.a.j(q-65536,10)&1023))
B.c.H(p,56320+(q&1023))}else throw A.e(A.c1(q))}return A.oN(p)},
oP(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fE(q))throw A.e(A.c1(q))
if(q<0)throw A.e(A.c1(q))
if(q>65535)return A.rh(a)}return A.oN(a)},
ri(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
a1(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.e(A.an(a,0,1114111,null,null))},
rj(a,b,c,d,e,f,g,h){var s,r=b-1
if(a<100){a+=400
r-=4800}s=Date.UTC(a,r,c,d,e,f,g)
if(isNaN(s)||s<-864e13||s>864e13)return null
return s},
aZ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rf(a){return a.b?A.aZ(a).getUTCFullYear()+0:A.aZ(a).getFullYear()+0},
rd(a){return a.b?A.aZ(a).getUTCMonth()+1:A.aZ(a).getMonth()+1},
r9(a){return a.b?A.aZ(a).getUTCDate()+0:A.aZ(a).getDate()+0},
ra(a){return a.b?A.aZ(a).getUTCHours()+0:A.aZ(a).getHours()+0},
rc(a){return a.b?A.aZ(a).getUTCMinutes()+0:A.aZ(a).getMinutes()+0},
re(a){return a.b?A.aZ(a).getUTCSeconds()+0:A.aZ(a).getSeconds()+0},
rb(a){return a.b?A.aZ(a).getUTCMilliseconds()+0:A.aZ(a).getMilliseconds()+0},
bc(a){throw A.e(A.c1(a))},
a(a,b){if(a==null)J.c4(a)
throw A.e(A.mD(a,b))},
mD(a,b){var s,r="index"
if(!A.fE(b))return new A.bq(!0,b,r,null)
s=A.t(J.c4(a))
if(b<0||b>=s)return A.a6(b,s,a,r)
return new A.f0(null,null,!0,b,r,"Value not in range")},
uL(a,b,c){if(a<0||a>c)return A.an(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.an(b,a,c,"end",null)
return new A.bq(!0,b,"end",null)},
c1(a){return new A.bq(!0,a,null,null)},
uF(a){if(!A.fE(a))throw A.e(A.c1(a))
return a},
e(a){return A.pJ(new Error(),a)},
pJ(a,b){var s
if(b==null)b=new A.bT()
a.dartException=b
s=A.vc
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
vc(){return J.e5(this.dartException)},
ad(a){throw A.e(a)},
nL(a,b){throw A.pJ(b,a)},
ak(a){throw A.e(A.bG(a))},
bU(a){var s,r,q,p,o,n
a=A.v9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.lh(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
li(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
oX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
n3(a,b){var s=b==null,r=s?null:b.method
return new A.hH(a,r,s?null:b.receiver)},
aS(a){var s
if(a==null)return new A.kN(a)
if(a instanceof A.eh){s=a.a
return A.cl(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cl(a,a.dartException)
return A.ux(a)},
cl(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ux(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.cl(a,A.n3(A.B(s)+" (Error "+q+")",null))
case 445:case 5007:A.B(s)
return A.cl(a,new A.eN())}}if(a instanceof TypeError){p=$.pU()
o=$.pV()
n=$.pW()
m=$.pX()
l=$.q_()
k=$.q0()
j=$.pZ()
$.pY()
i=$.q2()
h=$.q1()
g=p.bB(s)
if(g!=null)return A.cl(a,A.n3(A.av(s),g))
else{g=o.bB(s)
if(g!=null){g.method="call"
return A.cl(a,A.n3(A.av(s),g))}else if(n.bB(s)!=null||m.bB(s)!=null||l.bB(s)!=null||k.bB(s)!=null||j.bB(s)!=null||m.bB(s)!=null||i.bB(s)!=null||h.bB(s)!=null){A.av(s)
return A.cl(a,new A.eN())}}return A.cl(a,new A.iI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.f3()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cl(a,new A.bq(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.f3()
return a},
aR(a){var s
if(a instanceof A.eh)return a.b
if(a==null)return new A.fw(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fw(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nK(a){if(a==null)return J.c3(a)
if(typeof a=="object")return A.eX(a)
return J.c3(a)},
uG(a){if(typeof a=="number")return B.b.gC(a)
if(a instanceof A.jI)return A.eX(a)
return A.nK(a)},
pH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
u6(a,b,c,d,e,f){t.gY.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.lX("Unsupported number of arguments for wrapped closure"))},
d3(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.uH(a,b)
a.$identity=s
return s},
uH(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.u6)},
qv(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iu().constructor.prototype):Object.create(new A.d9(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.o6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.qr(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.o6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
qr(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.qm)}throw A.e("Error in functionType of tearoff")},
qs(a,b,c,d){var s=A.o5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
o6(a,b,c,d){var s,r
if(c)return A.qu(a,b,d)
s=b.length
r=A.qs(s,d,a,b)
return r},
qt(a,b,c,d){var s=A.o5,r=A.qn
switch(b?-1:a){case 0:throw A.e(new A.iq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
qu(a,b,c){var s,r
if($.o3==null)$.o3=A.o2("interceptor")
if($.o4==null)$.o4=A.o2("receiver")
s=b.length
r=A.qt(s,c,a,b)
return r},
nD(a){return A.qv(a)},
qm(a,b){return A.mp(v.typeUniverse,A.ai(a.a),b)},
o5(a){return a.a},
qn(a){return a.b},
o2(a){var s,r,q,p=new A.d9("receiver","interceptor"),o=J.n1(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.d8("Field name "+a+" not found.",null))},
jV(a){if(a==null)A.uz("boolean expression must not be null")
return a},
uz(a){throw A.e(new A.iT(a))},
vb(a){throw A.e(new A.j_(a))},
uU(a){return v.getIsolateTag(a)},
eG(a,b,c){var s=new A.aW(a,b,c.m("aW<0>"))
s.c=a.e
return s},
x3(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
v3(a){var s,r,q,p,o,n=A.av($.pI.$1(a)),m=$.mE[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nz($.pC.$2(a,n))
if(q!=null){m=$.mE[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.mL(s)
$.mE[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.mJ[n]=s
return s}if(p==="-"){o=A.mL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pL(a,s)
if(p==="*")throw A.e(A.lj(n))
if(v.leafTags[n]===true){o=A.mL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pL(a,s)},
pL(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.nJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mL(a){return J.nJ(a,!1,null,!!a.$iI)},
v5(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.mL(s)
else return J.nJ(s,c,null,null)},
uY(){if(!0===$.nH)return
$.nH=!0
A.uZ()},
uZ(){var s,r,q,p,o,n,m,l
$.mE=Object.create(null)
$.mJ=Object.create(null)
A.uX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pM.$1(o)
if(n!=null){m=A.v5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
uX(){var s,r,q,p,o,n,m=B.c5()
m=A.e3(B.c6,A.e3(B.c7,A.e3(B.aH,A.e3(B.aH,A.e3(B.c8,A.e3(B.c9,A.e3(B.ca(B.aG),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.pI=new A.mG(p)
$.pC=new A.mH(o)
$.pM=new A.mI(n)},
e3(a,b){return a(b)||b},
uK(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
v9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
eb:function eb(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
lh:function lh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eN:function eN(){},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
kN:function kN(a){this.a=a},
eh:function eh(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a
this.b=null},
c8:function c8(){},
fS:function fS(){},
fT:function fT(){},
ix:function ix(){},
iu:function iu(){},
d9:function d9(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
iq:function iq(a){this.a=a},
iT:function iT(a){this.a=a},
bi:function bi(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kx:function kx(a){this.a=a},
kw:function kw(a){this.a=a},
kC:function kC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bj:function bj(a,b){this.a=a
this.$ti=b},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eE:function eE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mG:function mG(a){this.a=a},
mH:function mH(a){this.a=a},
mI:function mI(a){this.a=a},
c(a){A.nL(new A.cC("Field '"+a+"' has not been initialized."),new Error())},
nM(a){A.nL(new A.cC("Field '"+a+"' has already been initialized."),new Error())},
pP(a){A.nL(new A.cC("Field '"+a+"' has been assigned during initialization."),new Error())},
p8(a){var s=new A.lT(a)
return s.b=s},
lT:function lT(a){this.a=a
this.b=null},
c_(a,b,c){},
H(a){var s,r,q
if(t.iy.b(a))return a
s=J.aa(a)
r=A.aj(s.gn(a),null,!1,t.z)
for(q=0;q<s.gn(a);++q)B.c.h(r,q,s.l(a,q))
return r},
r2(a){return new Float32Array(a)},
r3(a,b,c){A.c_(a,b,c)
c=B.a.U(a.byteLength-b,4)
return new Float32Array(a,b,c)},
r4(a){return new Int32Array(a)},
oC(a){return new Int8Array(a)},
oD(a,b,c){A.c_(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
r5(a){return new Uint16Array(a)},
r6(a,b,c){A.c_(a,b,c)
c=B.a.U(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
r7(a){return new Uint32Array(a)},
aY(a,b,c){A.c_(a,b,c)
c=B.a.U(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
kL(a){return new Uint8Array(a)},
N(a,b,c){A.c_(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bZ(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.mD(b,a))},
bn(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.e(A.uL(a,b,c))
if(b==null)return c
return b},
dK:function dK(){},
af:function af(){},
hT:function hT(){},
ar:function ar(){},
cc:function cc(){},
aX:function aX(){},
hU:function hU(){},
eI:function eI(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
cG:function cG(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
oS(a,b){var s=b.c
return s==null?b.c=A.ny(a,b.y,!0):s},
ni(a,b){var s=b.c
return s==null?b.c=A.fB(a,"b1",[b.y]):s},
rm(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
oT(a){var s=a.x
if(s===6||s===7||s===8)return A.oT(a.y)
return s===12||s===13},
rl(a){return a.at},
ah(a){return A.jJ(v.typeUniverse,a,!1)},
cj(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.cj(a,s,a0,a1)
if(r===s)return b
return A.pk(a,r,!0)
case 7:s=b.y
r=A.cj(a,s,a0,a1)
if(r===s)return b
return A.ny(a,r,!0)
case 8:s=b.y
r=A.cj(a,s,a0,a1)
if(r===s)return b
return A.pj(a,r,!0)
case 9:q=b.z
p=A.fH(a,q,a0,a1)
if(p===q)return b
return A.fB(a,b.y,p)
case 10:o=b.y
n=A.cj(a,o,a0,a1)
m=b.z
l=A.fH(a,m,a0,a1)
if(n===o&&l===m)return b
return A.nw(a,n,l)
case 12:k=b.y
j=A.cj(a,k,a0,a1)
i=b.z
h=A.ur(a,i,a0,a1)
if(j===k&&h===i)return b
return A.pi(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.fH(a,g,a0,a1)
o=b.y
n=A.cj(a,o,a0,a1)
if(f===g&&n===o)return b
return A.nx(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.fM("Attempted to substitute unexpected RTI kind "+c))}},
fH(a,b,c,d){var s,r,q,p,o=b.length,n=A.mr(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cj(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
us(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.mr(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cj(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ur(a,b,c,d){var s,r=b.a,q=A.fH(a,r,c,d),p=b.b,o=A.fH(a,p,c,d),n=b.c,m=A.us(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.j9()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
pE(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.uW(r)
s=a.$S()
return s}return null},
v_(a,b){var s
if(A.oT(b))if(a instanceof A.c8){s=A.pE(a)
if(s!=null)return s}return A.ai(a)},
ai(a){if(a instanceof A.Q)return A.q(a)
if(Array.isArray(a))return A.aO(a)
return A.nB(J.d5(a))},
aO(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.nB(a)},
nB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.u5(a,s)},
u5(a,b){var s=a instanceof A.c8?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.tM(v.typeUniverse,s.name)
b.$ccache=r
return r},
uW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
uV(a){return A.d4(A.q(a))},
uq(a){var s=a instanceof A.c8?A.pE(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.qi(a).a
if(Array.isArray(a))return A.aO(a)
return A.ai(a)},
d4(a){var s=a.w
return s==null?a.w=A.pr(a):s},
pr(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.jI(a)
s=A.jJ(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.pr(s):r},
bp(a){return A.d4(A.jJ(v.typeUniverse,a,!1))},
u4(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.c0(m,a,A.ub)
if(!A.c2(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.c0(m,a,A.uf)
s=m.x
if(s===7)return A.c0(m,a,A.u2)
if(s===1)return A.c0(m,a,A.pv)
r=s===6?m.y:m
q=r.x
if(q===8)return A.c0(m,a,A.u7)
if(r===t.p)p=A.fE
else if(r===t.V||r===t.cZ)p=A.ua
else if(r===t.N)p=A.ud
else p=r===t.v?A.d1:null
if(p!=null)return A.c0(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.v2)){m.r="$i"+o
if(o==="k")return A.c0(m,a,A.u9)
return A.c0(m,a,A.ue)}}else if(q===11){n=A.uK(r.y,r.z)
return A.c0(m,a,n==null?A.pv:n)}return A.c0(m,a,A.u0)},
c0(a,b,c){a.b=c
return a.b(b)},
u3(a){var s,r=this,q=A.u_
if(!A.c2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.tV
else if(r===t.K)q=A.tU
else{s=A.fI(r)
if(s)q=A.u1}r.a=q
return r.a(a)},
jU(a){var s,r=a.x
if(!A.c2(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)if(!(r===6&&A.jU(a.y)))s=r===8&&A.jU(a.y)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
u0(a){var s=this
if(a==null)return A.jU(s)
return A.v1(v.typeUniverse,A.v_(a,s),s)},
u2(a){if(a==null)return!0
return this.y.b(a)},
ue(a){var s,r=this
if(a==null)return A.jU(r)
s=r.r
if(a instanceof A.Q)return!!a[s]
return!!J.d5(a)[s]},
u9(a){var s,r=this
if(a==null)return A.jU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.Q)return!!a[s]
return!!J.d5(a)[s]},
u_(a){var s,r=this
if(a==null){s=A.fI(r)
if(s)return a}else if(r.b(a))return a
A.ps(a,r)},
u1(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ps(a,s)},
ps(a,b){throw A.e(A.tB(A.p9(a,A.aQ(b,null))))},
p9(a,b){return A.eg(a)+": type '"+A.aQ(A.uq(a),null)+"' is not a subtype of type '"+b+"'"},
tB(a){return new A.fz("TypeError: "+a)},
aC(a,b){return new A.fz("TypeError: "+A.p9(a,b))},
u7(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.ni(v.typeUniverse,r).b(a)},
ub(a){return a!=null},
tU(a){if(a!=null)return a
throw A.e(A.aC(a,"Object"))},
uf(a){return!0},
tV(a){return a},
pv(a){return!1},
d1(a){return!0===a||!1===a},
tQ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.aC(a,"bool"))},
wW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.aC(a,"bool"))},
wV(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.aC(a,"bool?"))},
tR(a){if(typeof a=="number")return a
throw A.e(A.aC(a,"double"))},
wY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.aC(a,"double"))},
wX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.aC(a,"double?"))},
fE(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.aC(a,"int"))},
wZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.aC(a,"int"))},
mt(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.aC(a,"int?"))},
ua(a){return typeof a=="number"},
tS(a){if(typeof a=="number")return a
throw A.e(A.aC(a,"num"))},
x_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.aC(a,"num"))},
tT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.aC(a,"num?"))},
ud(a){return typeof a=="string"},
av(a){if(typeof a=="string")return a
throw A.e(A.aC(a,"String"))},
x0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.aC(a,"String"))},
nz(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.aC(a,"String?"))},
pz(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aQ(a[q],b)
return s},
ui(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.pz(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aQ(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
pt(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.c.H(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.t.b9(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.aQ(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.aQ(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.aQ(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.aQ(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.aQ(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aQ(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.aQ(a.y,b)
return s}if(l===7){r=a.y
s=A.aQ(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.aQ(a.y,b)+">"
if(l===9){p=A.uw(a.y)
o=a.z
return o.length>0?p+("<"+A.pz(o,b)+">"):p}if(l===11)return A.ui(a,b)
if(l===12)return A.pt(a,b,null)
if(l===13)return A.pt(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
uw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tN(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
tM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jJ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fC(a,5,"#")
q=A.mr(s)
for(p=0;p<s;++p)q[p]=r
o=A.fB(a,b,q)
n[b]=o
return o}else return m},
tK(a,b){return A.pl(a.tR,b)},
tJ(a,b){return A.pl(a.eT,b)},
jJ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.pf(A.pd(a,null,b,c))
r.set(b,s)
return s},
mp(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.pf(A.pd(a,b,c,!0))
q.set(c,r)
return r},
tL(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.nw(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
bY(a,b){b.a=A.u3
b.b=A.u4
return b},
fC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b8(null,null)
s.x=b
s.at=c
r=A.bY(a,s)
a.eC.set(c,r)
return r},
pk(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.tG(a,b,r,c)
a.eC.set(r,s)
return s},
tG(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c2(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.b8(null,null)
q.x=6
q.y=b
q.at=c
return A.bY(a,q)},
ny(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.tF(a,b,r,c)
a.eC.set(r,s)
return s},
tF(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.c2(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.fI(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.fI(q.y))return q
else return A.oS(a,b)}}p=new A.b8(null,null)
p.x=7
p.y=b
p.at=c
return A.bY(a,p)},
pj(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.tD(a,b,r,c)
a.eC.set(r,s)
return s},
tD(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.fB(a,"b1",[b])
else if(b===t.P||b===t.u)return t.gK}q=new A.b8(null,null)
q.x=8
q.y=b
q.at=c
return A.bY(a,q)},
tH(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b8(null,null)
s.x=14
s.y=b
s.at=q
r=A.bY(a,s)
a.eC.set(q,r)
return r},
fA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
tC(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
fB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b8(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.bY(a,r)
a.eC.set(p,q)
return q},
nw(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.fA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b8(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.bY(a,o)
a.eC.set(q,n)
return n},
tI(a,b,c){var s,r,q="+"+(b+"("+A.fA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.b8(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.bY(a,s)
a.eC.set(q,r)
return r},
pi(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.tC(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.b8(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.bY(a,p)
a.eC.set(r,o)
return o},
nx(a,b,c,d){var s,r=b.at+("<"+A.fA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.tE(a,b,c,r,d)
a.eC.set(r,s)
return s},
tE(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.mr(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.cj(a,b,r,0)
m=A.fH(a,c,r,0)
return A.nx(a,n,m,c!==m)}}l=new A.b8(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.bY(a,l)},
pd(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
pf(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.tv(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.pe(a,r,l,k,!1)
else if(q===46)r=A.pe(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ci(a.u,a.e,k.pop()))
break
case 94:k.push(A.tH(a.u,k.pop()))
break
case 35:k.push(A.fC(a.u,5,"#"))
break
case 64:k.push(A.fC(a.u,2,"@"))
break
case 126:k.push(A.fC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.tx(a,k)
break
case 38:A.tw(a,k)
break
case 42:p=a.u
k.push(A.pk(p,A.ci(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.ny(p,A.ci(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.pj(p,A.ci(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.tu(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.pg(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.tz(a.u,a.e,o)
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
return A.ci(a.u,a.e,m)},
tv(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
pe(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.tN(s,o.y)[p]
if(n==null)A.ad('No "'+p+'" in "'+A.rl(o)+'"')
d.push(A.mp(s,o,n))}else d.push(p)
return m},
tx(a,b){var s,r=a.u,q=A.pc(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fB(r,p,q))
else{s=A.ci(r,a.e,p)
switch(s.x){case 12:b.push(A.nx(r,s,q,a.n))
break
default:b.push(A.nw(r,s,q))
break}}},
tu(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.pc(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.ci(m,a.e,l)
o=new A.j9()
o.a=q
o.b=s
o.c=r
b.push(A.pi(m,p,o))
return
case-4:b.push(A.tI(m,b.pop(),q))
return
default:throw A.e(A.fM("Unexpected state under `()`: "+A.B(l)))}},
tw(a,b){var s=b.pop()
if(0===s){b.push(A.fC(a.u,1,"0&"))
return}if(1===s){b.push(A.fC(a.u,4,"1&"))
return}throw A.e(A.fM("Unexpected extended operation "+A.B(s)))},
pc(a,b){var s=b.splice(a.p)
A.pg(a.u,a.e,s)
a.p=b.pop()
return s},
ci(a,b,c){if(typeof c=="string")return A.fB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ty(a,b,c)}else return c},
pg(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ci(a,b,c[s])},
tz(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ci(a,b,c[s])},
ty(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.e(A.fM("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.e(A.fM("Bad index "+c+" for "+b.A(0)))},
v1(a,b,c){var s,r=A.rm(b),q=r.get(c)
if(q!=null)return q
s=A.a9(a,b,null,c,null)
r.set(c,s)
return s},
a9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.c2(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.c2(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.a9(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.u
if(s){if(p===8)return A.a9(a,b,c,d.y,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.a9(a,b.y,c,d,e)
if(r===6)return A.a9(a,b.y,c,d,e)
return r!==7}if(r===6)return A.a9(a,b.y,c,d,e)
if(p===6){s=A.oS(a,d)
return A.a9(a,b,c,s,e)}if(r===8){if(!A.a9(a,b.y,c,d,e))return!1
return A.a9(a,A.ni(a,b),c,d,e)}if(r===7){s=A.a9(a,t.P,c,d,e)
return s&&A.a9(a,b.y,c,d,e)}if(p===8){if(A.a9(a,b,c,d.y,e))return!0
return A.a9(a,b,c,A.ni(a,d),e)}if(p===7){s=A.a9(a,b,c,t.P,e)
return s||A.a9(a,b,c,d.y,e)}if(q)return!1
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
if(!A.a9(a,j,c,i,e)||!A.a9(a,i,e,j,c))return!1}return A.pu(a,b.y,c,d.y,e)}if(p===12){if(b===t.et)return!0
if(s)return!1
return A.pu(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.u8(a,b,c,d,e)}if(o&&p===11)return A.uc(a,b,c,d,e)
return!1},
pu(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a9(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.a9(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a9(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a9(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a9(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
u8(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.mp(a,b,r[o])
return A.pm(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.pm(a,n,null,c,m,e)},
pm(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.a9(a,r,d,q,f))return!1}return!0},
uc(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.a9(a,r[s],c,q[s],e))return!1
return!0},
fI(a){var s,r=a.x
if(!(a===t.P||a===t.u))if(!A.c2(a))if(r!==7)if(!(r===6&&A.fI(a.y)))s=r===8&&A.fI(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
v2(a){var s
if(!A.c2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c2(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.O},
pl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
mr(a){return a>0?new Array(a):v.typeUniverse.sEA},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
j9:function j9(){this.c=this.b=this.a=null},
jI:function jI(a){this.a=a},
j4:function j4(){},
fz:function fz(a){this.a=a},
tl(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.uA()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.d3(new A.lP(q),1)).observe(s,{childList:true})
return new A.lO(q,s,r)}else if(self.setImmediate!=null)return A.uB()
return A.uC()},
tm(a){self.scheduleImmediate(A.d3(new A.lQ(t.M.a(a)),0))},
tn(a){self.setImmediate(A.d3(new A.lR(t.M.a(a)),0))},
to(a){t.M.a(a)
A.tA(0,a)},
tA(a,b){var s=new A.ml()
s.hK(a,b)
return s},
pw(a){return new A.iU(new A.U($.X,a.m("U<0>")),a.m("iU<0>"))},
pp(a,b){a.$2(0,null)
b.b=!0
return b.a},
mu(a,b){A.tW(a,b)},
po(a,b){b.dg(0,a)},
pn(a,b){b.e6(A.aS(a),A.aR(a))},
tW(a,b){var s,r,q=new A.mv(b),p=new A.mw(b)
if(a instanceof A.U)a.fm(q,p,t.z)
else{s=t.z
if(a instanceof A.U)a.ed(q,p,s)
else{r=new A.U($.X,t.c)
r.a=8
r.c=a
r.fm(q,p,s)}}},
pB(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.X.fW(new A.mz(s),t.Y,t.p,t.z)},
ph(a,b,c){return 0},
k2(a,b){var s=A.e4(a,"error",t.K)
return new A.e9(s,b==null?A.o0(a):b)},
o0(a){var s
if(t.fz.b(a)){s=a.gcV()
if(s!=null)return s}return B.cd},
pa(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.d8()
b.d_(a)
A.e0(b,q)}else{q=t.F.a(b.c)
b.fh(a)
a.e_(q)}},
tp(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.fh(o)
p.a.e_(q)
return}if((r&16)===0&&b.c==null){b.d_(o)
return}b.a^=2
A.d2(null,null,b.b,t.M.a(new A.m0(p,b)))},
e0(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.mx(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.e0(c.a,b)
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
A.mx(i.a,i.b)
return}f=$.X
if(f!==g)$.X=g
else f=null
b=b.c
if((b&15)===8)new A.m7(p,c,m).$0()
else if(n){if((b&1)!==0)new A.m6(p,i).$0()}else if((b&2)!==0)new A.m5(c,p).$0()
if(f!=null)$.X=f
b=p.c
if(b instanceof A.U){o=p.a.$ti
o=o.m("b1<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.d9(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.pa(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.d9(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
uj(a,b){var s
if(t.U.b(a))return b.fW(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.e(A.mS(a,"onError",u.c))},
uh(){var s,r
for(s=$.e2;s!=null;s=$.e2){$.fG=null
r=s.b
$.e2=r
if(r==null)$.fF=null
s.a.$0()}},
up(){$.nC=!0
try{A.uh()}finally{$.fG=null
$.nC=!1
if($.e2!=null)$.nP().$1(A.pD())}},
pA(a){var s=new A.iV(a),r=$.fF
if(r==null){$.e2=$.fF=s
if(!$.nC)$.nP().$1(A.pD())}else $.fF=r.b=s},
uo(a){var s,r,q,p=$.e2
if(p==null){A.pA(a)
$.fG=$.fF
return}s=new A.iV(a)
r=$.fG
if(r==null){s.b=p
$.e2=$.fG=s}else{q=r.b
s.b=q
$.fG=r.b=s
if(q==null)$.fF=s}},
va(a){var s,r=null,q=$.X
if(B.p===q){A.d2(r,r,B.p,a)
return}s=!1
if(s){A.d2(r,r,q,t.M.a(a))
return}A.d2(r,r,q,t.M.a(q.fA(a)))},
wj(a,b){A.e4(a,"stream",t.K)
return new A.jw(b.m("jw<0>"))},
mx(a,b){A.uo(new A.my(a,b))},
px(a,b,c,d,e){var s,r=$.X
if(r===c)return d.$0()
$.X=c
s=r
try{r=d.$0()
return r}finally{$.X=s}},
py(a,b,c,d,e,f,g){var s,r=$.X
if(r===c)return d.$1(e)
$.X=c
s=r
try{r=d.$1(e)
return r}finally{$.X=s}},
uk(a,b,c,d,e,f,g,h,i){var s,r=$.X
if(r===c)return d.$2(e,f)
$.X=c
s=r
try{r=d.$2(e,f)
return r}finally{$.X=s}},
d2(a,b,c,d){t.M.a(d)
if(B.p!==c)d=c.fA(d)
A.pA(d)},
lP:function lP(a){this.a=a},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a){this.a=a},
lR:function lR(a){this.a=a},
ml:function ml(){},
mm:function mm(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=!1
this.$ti=b},
mv:function mv(a){this.a=a},
mw:function mw(a){this.a=a},
mz:function mz(a){this.a=a},
d0:function d0(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
d_:function d_(a,b){this.a=a
this.$ti=b},
e9:function e9(a,b){this.a=a
this.b=b},
iX:function iX(){},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
U:function U(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lY:function lY(a,b){this.a=a
this.b=b},
m4:function m4(a,b){this.a=a
this.b=b},
m1:function m1(a){this.a=a},
m2:function m2(a){this.a=a},
m3:function m3(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b){this.a=a
this.b=b},
m_:function m_(a,b){this.a=a
this.b=b},
lZ:function lZ(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function m8(a){this.a=a},
m6:function m6(a,b){this.a=a
this.b=b},
m5:function m5(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a
this.b=null},
f4:function f4(){},
l6:function l6(a,b){this.a=a
this.b=b},
l7:function l7(a,b){this.a=a
this.b=b},
jw:function jw(a){this.$ti=a},
fD:function fD(){},
my:function my(a,b){this.a=a
this.b=b},
jq:function jq(){},
mf:function mf(a,b){this.a=a
this.b=b},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
qZ(a,b){return new A.bi(a.m("@<0>").au(b).m("bi<1,2>"))},
oA(a,b,c){return b.m("@<0>").au(c).m("n5<1,2>").a(A.pH(a,new A.bi(b.m("@<0>").au(c).m("bi<1,2>"))))},
a0(a,b){return new A.bi(a.m("@<0>").au(b).m("bi<1,2>"))},
r_(a){return new A.fj(a.m("fj<0>"))},
nu(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hM(a,b,c){var s=A.qZ(b,c)
a.ag(0,new A.kD(s,b,c))
return s},
n7(a){var s,r={}
if(A.nI(a))return"{...}"
s=new A.cU("")
try{B.c.H($.b0,a)
s.a+="{"
r.a=!0
J.nY(a,new A.kG(r,s))
s.a+="}"}finally{if(0>=$.b0.length)return A.a($.b0,-1)
$.b0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
fj:function fj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jf:function jf(a){this.a=a
this.b=null},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
P:function P(){},
kG:function kG(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
dS:function dS(){},
ft:function ft(){},
rw(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.rx(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
rx(a,b,c,d){var s=a?$.q4():$.q3()
if(s==null)return null
if(0===c&&d===b.length)return A.oZ(s,b)
return A.oZ(s,b.subarray(c,A.b7(c,d,b.length)))},
oZ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
oz(a,b,c){return new A.eF(a,b)},
tY(a){return a.lO()},
ts(a,b){return new A.mc(a,[],A.uI())},
tt(a,b,c){var s,r=new A.cU(""),q=A.ts(r,b)
q.dq(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
tP(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
tO(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
ll:function ll(){},
lk:function lk(){},
mo:function mo(){},
mn:function mn(){},
co:function co(){},
fX:function fX(){},
h6:function h6(){},
eF:function eF(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hI:function hI(){},
kz:function kz(a){this.b=a},
md:function md(){},
me:function me(a,b){this.a=a
this.b=b},
mc:function mc(a,b,c){this.c=a
this.a=b
this.b=c},
hK:function hK(){},
kB:function kB(){},
kA:function kA(a){this.a=a},
iL:function iL(){},
iM:function iM(a){this.a=a},
mq:function mq(a){this.a=a
this.b=16
this.c=0},
qA(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.A(0)
throw a
throw A.e("unreachable")},
aj(a,b,c,d){var s,r=c?J.eB(a,d):J.ov(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hN(a,b,c){var s,r=A.b([],c.m("D<0>"))
for(s=J.bD(a);s.E();)B.c.H(r,c.a(s.gJ(s)))
if(b)return r
return J.n1(r,c)},
z(a,b,c){var s=A.r0(a,c)
return s},
r0(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.m("D<0>"))
s=A.b([],b.m("D<0>"))
for(r=J.bD(a);r.E();)B.c.H(s,r.gJ(r))
return s},
n6(a,b,c){var s,r=J.eB(a,c)
for(s=0;s<a;++s)B.c.h(r,s,b.$1(s))
return r},
kE(a,b){var s=A.hN(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
l8(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.b7(b,c,r)
return A.oP(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.ri(a,b,A.b7(b,c,a.length))
return A.rp(a,b,c)},
rp(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.e(A.an(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.e(A.an(c,b,a.length,o,o))
r=J.bD(a)
for(q=0;q<b;++q)if(!r.E())throw A.e(A.an(b,0,q,o,o))
p=[]
if(s)for(;r.E();)p.push(r.gJ(r))
else for(q=b;q<c;++q){if(!r.E())throw A.e(A.an(c,b,q,o,o))
p.push(r.gJ(r))}return A.oP(p)},
oV(a,b,c){var s=J.bD(b)
if(!s.E())return a
if(c.length===0){do a+=A.B(s.gJ(s))
while(s.E())}else{a+=A.B(s.gJ(s))
for(;s.E();)a=a+c+A.B(s.gJ(s))}return a},
bz(){return A.aR(new Error())},
qx(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.ad(A.d8("DateTime is outside valid range: "+a,null))
A.e4(!0,"isUtc",t.v)
return new A.bH(a,!0)},
qy(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qz(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
h1(a){if(a>=10)return""+a
return"0"+a},
o8(a){return new A.h5(1000*a)},
eg(a){if(typeof a=="number"||A.d1(a)||a==null)return J.e5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.rg(a)},
qB(a,b){A.e4(a,"error",t.K)
A.e4(b,"stackTrace",t.l)
A.qA(a,b)},
fM(a){return new A.e8(a)},
d8(a,b){return new A.bq(!1,null,b,a)},
mS(a,b,c){return new A.bq(!0,a,b,c)},
an(a,b,c,d,e){return new A.f0(b,c,!0,a,d,"Invalid value")},
b7(a,b,c){if(0>a||a>c)throw A.e(A.an(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.an(b,a,c,"end",null))
return b}return c},
io(a,b){if(a<0)throw A.e(A.an(a,0,null,b,null))
return a},
a6(a,b,c,d){return new A.hm(b,!0,a,d,"Index out of range")},
M(a){return new A.iJ(a)},
lj(a){return new A.iH(a)},
l3(a){return new A.dU(a)},
bG(a){return new A.fW(a)},
oc(a,b,c){return new A.he(a,b,c)},
qV(a,b,c){var s,r
if(A.nI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.c.H($.b0,a)
try{A.ug(a,s)}finally{if(0>=$.b0.length)return A.a($.b0,-1)
$.b0.pop()}r=A.oV(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
n_(a,b,c){var s,r
if(A.nI(a))return b+"..."+c
s=new A.cU(b)
B.c.H($.b0,a)
try{r=s
r.a=A.oV(r.a,a,", ")}finally{if(0>=$.b0.length)return A.a($.b0,-1)
$.b0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ug(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.E())return
s=A.B(l.gJ(l))
B.c.H(b,s)
k+=s.length+2;++j}if(!l.E()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gJ(l);++j
if(!l.E()){if(j<=4){B.c.H(b,A.B(p))
return}r=A.B(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gJ(l);++j
for(;l.E();p=o,o=n){n=l.gJ(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.H(b,"...")
return}}q=A.B(p)
r=A.B(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.H(b,m)
B.c.H(b,q)
B.c.H(b,r)},
n8(a,b,c,d){var s
if(B.W===c){s=B.b.gC(a)
b=B.b.gC(b)
return A.l9(A.bS(A.bS($.k_(),s),b))}if(B.W===d){s=B.b.gC(a)
b=B.b.gC(b)
c=J.c3(c)
return A.l9(A.bS(A.bS(A.bS($.k_(),s),b),c))}s=B.b.gC(a)
b=B.b.gC(b)
c=J.c3(c)
d=J.c3(d)
d=A.l9(A.bS(A.bS(A.bS(A.bS($.k_(),s),b),c),d))
return d},
r(a){var s,r,q=$.k_()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ak)(a),++r)q=A.bS(q,J.c3(a[r]))
return A.l9(q)},
bH:function bH(a,b){this.a=a
this.b=b},
h5:function h5(a){this.a=a},
lU:function lU(){},
W:function W(){},
e8:function e8(a){this.a=a},
bT:function bT(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iJ:function iJ(a){this.a=a},
iH:function iH(a){this.a=a},
dU:function dU(a){this.a=a},
fW:function fW(a){this.a=a},
i0:function i0(){},
f3:function f3(){},
lX:function lX(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(){},
a8:function a8(){},
Q:function Q(){},
jz:function jz(){},
cU:function cU(a){this.a=a},
lV(a,b,c,d,e){var s=A.uy(new A.lW(c),t.fq)
if(s!=null&&!0)J.qc(a,b,s,!1)
return new A.fh(a,b,s,!1,e.m("fh<0>"))},
uy(a,b){var s=$.X
if(s===B.p)return a
return s.kr(a,b)},
w:function w(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
c6:function c6(){},
br:function br(){},
fY:function fY(){},
S:function S(){},
dm:function dm(){},
k8:function k8(){},
aw:function aw(){},
bf:function bf(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
dn:function dn(){},
h2:function h2(){},
ec:function ec(){},
ed:function ed(){},
h3:function h3(){},
h4:function h4(){},
v:function v(){},
o:function o(){},
j:function j(){},
aF:function aF(){},
dr:function dr(){},
hc:function hc(){},
hd:function hd(){},
aG:function aG(){},
hg:function hg(){},
cs:function cs(){},
dy:function dy(){},
hO:function hO(){},
hP:function hP(){},
bO:function bO(){},
cF:function cF(){},
hQ:function hQ(){},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
hR:function hR(){},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
aH:function aH(){},
hS:function hS(){},
J:function J(){},
eM:function eM(){},
aI:function aI(){},
i6:function i6(){},
ip:function ip(){},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
ir:function ir(){},
dT:function dT(){},
aJ:function aJ(){},
is:function is(){},
aK:function aK(){},
it:function it(){},
aL:function aL(){},
iv:function iv(){},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
at:function at(){},
aM:function aM(){},
au:function au(){},
iy:function iy(){},
iz:function iz(){},
iD:function iD(){},
aN:function aN(){},
iE:function iE(){},
iF:function iF(){},
iK:function iK(){},
iQ:function iQ(){},
ch:function ch(){},
iY:function iY(){},
fg:function fg(){},
ja:function ja(){},
fn:function fn(){},
ju:function ju(){},
jB:function jB(){},
mU:function mU(a){this.$ti=a},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fh:function fh(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
lW:function lW(a){this.a=a},
x:function x(){},
em:function em(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
iZ:function iZ(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j7:function j7(){},
j8:function j8(){},
jb:function jb(){},
jc:function jc(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jo:function jo(){},
jp:function jp(){},
jr:function jr(){},
fu:function fu(){},
fv:function fv(){},
js:function js(){},
jt:function jt(){},
jv:function jv(){},
jC:function jC(){},
jD:function jD(){},
fx:function fx(){},
fy:function fy(){},
jE:function jE(){},
jF:function jF(){},
jK:function jK(){},
jL:function jL(){},
jM:function jM(){},
jN:function jN(){},
jO:function jO(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
pq(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d1(a))return a
if(A.pK(a))return A.ck(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.pq(a[q]));++q}return r}return a},
ck(a){var s,r,q,p,o,n
if(a==null)return null
s=A.a0(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.ak)(r),++p){o=r[p]
n=o
n.toString
s.h(0,n,A.pq(a[o]))}return s},
pK(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
mi:function mi(){},
mj:function mj(a,b){this.a=a
this.b=b},
mk:function mk(a,b){this.a=a
this.b=b},
lM:function lM(){},
lN:function lN(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b
this.c=!1},
v7(a,b){var s=new A.U($.X,b.m("U<0>")),r=new A.cZ(s,b.m("cZ<0>"))
a.then(A.d3(new A.mN(r,b),1),A.d3(new A.mO(r),1))
return s},
mN:function mN(a,b){this.a=a
this.b=b},
mO:function mO(a){this.a=a},
kM:function kM(a){this.a=a},
b2:function b2(){},
hL:function hL(){},
b3:function b3(){},
hZ:function hZ(){},
ia:function ia(){},
iw:function iw(){},
ba:function ba(){},
iG:function iG(){},
jd:function jd(){},
je:function je(){},
jm:function jm(){},
jn:function jn(){},
jx:function jx(){},
jy:function jy(){},
jG:function jG(){},
jH:function jH(){},
fN:function fN(){},
fO:function fO(){},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
fP:function fP(){},
c5:function c5(){},
i_:function i_(){},
iW:function iW(){},
e6(a){return new A.k1(a,null,null)},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
cB(a,b,c,d){var s,r
if(t.jv.b(a))s=A.N(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.hN(t.R.a(a),!0,t.p)
r=new A.ho(s,d,d,b)
r.e=c==null?s.length:c
return r},
hp:function hp(){},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
kP(a,b){var s=b==null?32768:b
return new A.kO(a,new Uint8Array(s))},
kQ:function kQ(){},
kO:function kO(a,b){this.a=0
this.b=a
this.c=b},
ms:function ms(){},
o7(a,b,c,d){var s,r=b*2,q=a.length
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
nt(){return new A.m9()},
tq(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
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
n=A.tr(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
tr(a,b){var s,r=0
do{s=A.aP(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.aP(r,1)},
pb(a){var s
if(a<256){if(!(a>=0))return A.a(B.ad,a)
s=B.ad[a]}else{s=256+A.aP(a,7)
if(!(s<512))return A.a(B.ad,s)
s=B.ad[s]}return s},
nv(a,b,c,d,e){return new A.mh(a,b,c,d,e)},
aP(a,b){if(a>=0)return B.a.aN(a,b)
else return B.a.aN(a,b)+B.a.O(2,(~b>>>0)+65536&65535)},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
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
_.b4=_.b3=_.bJ=_.bU=_.bI=_.aQ=_.bh=_.aP=_.y2=_.y1=$},
bb:function bb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m9:function m9(){this.c=this.b=this.a=$},
mh:function mh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dt(a){var s=new A.kh()
s.ht(a)
return s},
kh:function kh(){this.a=$
this.b=0
this.c=2147483647},
or(a){var s=A.dt(B.b8),r=A.dt(B.bi)
r=new A.hn(A.cB(a,0,null,0),A.kP(0,null),s,r)
r.b=!0
r.eW()
return r},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
lK:function lK(){},
lJ:function lJ(){},
lL:function lL(){},
k7:function k7(a,b){this.a=a
this.b=b},
Z:function Z(a){this.a=-1
this.b=a},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
dk:function dk(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
qw(a,b,c,d){var s=new A.ea(new Uint8Array(4))
s.ho(a,b,c,d)
return s},
bF:function bF(a){this.a=a},
fU:function fU(a){this.a=a},
ea:function ea(a){this.a=a},
nF(a,b,c){var s
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
case 1:return B.a.j(A.t(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.t(a),6)
case 2:return B.a.j(A.t(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.t(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.t(a),14)
case 2:return B.a.j(A.t(a),12)
case 3:return B.a.j(A.t(a),8)
case 4:return a
case 5:return A.t(a)<<8>>>0
case 6:return B.a.j(A.t(a),9)
case 7:return B.a.j(A.t(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.t(a),30)
case 2:return B.a.j(A.t(a),28)
case 3:return B.a.j(A.t(a),24)
case 4:return B.a.j(A.t(a),16)
case 5:return a
case 6:return B.a.j(A.t(a),25)
case 7:return B.a.j(A.t(a),17)
case 8:return B.a.j(A.t(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.t(a),5)
case 2:return a<=0?0:B.a.j(A.t(a),3)
case 3:return a<=0?0:A.t(a)<<1>>>0
case 4:return a<=0?0:A.t(a)*516
case 5:return a<=0?0:A.t(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.t(a),15)
case 2:return a<=0?0:B.a.j(A.t(a),11)
case 3:return a<=0?0:B.a.j(A.t(a),7)
case 4:return a<=0?0:A.t(a)<<1>>>0
case 5:return a<=0?0:A.t(a)*131076
case 6:return B.a.j(A.t(a),8)
case 7:return a
case 8:return A.t(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.t(a),29)
case 2:return a<=0?0:B.a.j(A.t(a),27)
case 3:return a<=0?0:B.a.j(A.t(a),23)
case 4:return a<=0?0:B.a.j(A.t(a),16)
case 5:return a<=0?0:A.t(a)<<1>>>0
case 6:return B.a.j(A.t(a),24)
case 7:return B.a.j(A.t(a),16)
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
ay:function ay(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
ei(a){var s=new A.dp(A.a0(t.N,t.a))
s.hu(a)
return s},
dp:function dp(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
h(a,b,c){return new A.h7(a,b)},
h7:function h7(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
kk:function kk(a){this.a=a},
oh(a){var s=new A.bt(A.a0(t.p,t.r),new A.bK(A.a0(t.N,t.a)))
s.kD(a)
return s},
bt:function bt(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
oo(a,b){var s=new A.cA(new Uint16Array(b))
s.hz(a,b)
return s},
oj(a,b){var s=new A.cv(new Uint32Array(b))
s.hw(a,b)
return s},
ok(a,b){var s,r=J.n0(b,t.i)
for(s=0;s<b;++s)r[s]=new A.dR(a.k(),a.k())
return new A.cw(r)},
on(a,b){var s=new A.cz(new Int16Array(b))
s.hy(a,b)
return s},
ol(a,b){var s=new A.cx(new Int32Array(b))
s.hx(a,b)
return s},
om(a,b){var s,r,q,p,o=J.n0(b,t.i)
for(s=0;s<b;++s){r=a.k()
q=$.Y()
q[0]=r
r=$.al()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.k()
o[s]=new A.dR(p,r[0])}return new A.cy(o)},
op(a,b){var s=new A.dw(new Float32Array(b))
s.hA(a,b)
return s},
oi(a,b){var s=new A.dv(new Float64Array(b))
s.hv(a,b)
return s},
as:function as(a,b){this.a=a
this.b=b},
ae:function ae(){},
bJ:function bJ(a){this.a=a},
cu:function cu(a){this.a=a},
cA:function cA(a){this.a=a},
cv:function cv(a){this.a=a},
cw:function cw(a){this.a=a},
ca:function ca(a){this.a=a},
cz:function cz(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a){this.a=a},
dw:function dw(a){this.a=a},
dv:function dv(a){this.a=a},
dx:function dx(a){this.a=a},
o1(a){var s,r,q=new A.k6()
if(!A.mT(a))A.ad(A.p("Not a bitmap file."))
a.d+=2
s=a.k()
r=$.Y()
r[0]=s
s=$.al()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.k()
q.b=s[0]
return q},
mT(a){if(a.c-a.d<2)return!1
return A.u(a,null,0).p()===19778},
ql(a,b){var s,r,q,p,o=b==null?A.o1(a):b,n=a.d,m=a.k(),l=a.k(),k=$.Y()
k[0]=l
l=$.al()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.k()
l=l[0]
r=a.p()
q=a.p()
p=a.k()
if(!(p<14))return A.a(B.a8,p)
p=B.a8[p]
a.k()
k[0]=a.k()
k[0]=a.k()
k=a.k()
a.k()
n=new A.bE(o,s,l,m,r,q,p,k,n)
n.ek(a,b)
return n},
ap:function ap(a,b){this.a=a
this.b=b},
k6:function k6(){this.b=$},
bE:function bE(a,b,c,d,e,f,g,h,i){var _=this
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
fR:function fR(a){this.a=$
this.b=null
this.c=a},
k5:function k5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kb:function kb(a){this.a=$
this.b=null
this.c=a},
k9:function k9(){},
kc:function kc(){},
h8:function h8(){},
ey:function ey(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
dq:function dq(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
h9:function h9(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
o9(a,b,c,d){var s,r
switch(a.a){case 1:return new A.hv(c,b)
case 2:return new A.ez(c,d==null?1:d,b)
case 3:return new A.ez(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.ht(c,s,b)
r.hD(b,c,s)
return r
case 5:return new A.hu(c,d==null?16:d,b)
case 6:return new A.ey(c,d==null?32:d,!1,b)
case 7:return new A.ey(c,d==null?32:d,!0,b)
default:throw A.e(A.p("Invalid compression type: "+a.A(0)))}},
bg:function bg(a,b){this.a=a
this.b=b},
bI:function bI(){},
hr:function hr(){},
qF(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.e(A.p("Incomplete huffman data"))
return}s=a.d
r=a.k()
q=a.k()
a.d+=4
p=a.k()
if(r<65537)o=q>=65537
else o=!0
if(o)throw A.e(A.p("Invalid huffman table size"))
a.d+=4
n=A.aj(65537,0,!1,t.p)
m=J.az(16384,t.ho)
for(l=0;l<16384;++l)m[l]=new A.ha()
A.qG(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.e(A.p("Error in header for Huffman-encoded data (invalid number of bits)."))
A.qC(n,r,q,m)
A.qE(n,m,a,p,q,d,c)},
qE(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.b([0,0],t.t),h=c.d+B.a.U(d+7,8)
for(s=b.length,r=0;c.d<h;){A.mV(i,c)
for(;q=i[1],q>=14;){p=B.a.aN(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.mW(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.e(A.p(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.mV(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.aN(i[0],q)&B.a.O(1,m)-1)>>>0){B.c.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.mW(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.e(A.p(j))}}}k=8-d&7
B.c.h(i,0,B.a.j(i[0],k))
B.c.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.W(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.mW(o.b,e,i,c,g,r,f)}else throw A.e(A.p(j))}if(r!==f)throw A.e(A.p("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
mW(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.mV(c,d)
B.c.h(c,1,c[1]-8)
s=B.a.aN(c[0],c[1])&255
if(f+s>g)throw A.e(A.p(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(;o=s-1,s>0;s=o,f=n){n=f+1
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){n=f+1
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.e(A.p(m))
f=n}return f},
qC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.a4(o,n)!==0)throw A.e(A.p(i))
if(n>14){p=B.a.Z(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.e(A.p(i))
p=++m.b
l=m.c
if(l!=null){m.sfS(A.aj(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.h(p,k,l[k])}}else m.sfS(A.b([0],r))
p=m.c
p.toString
B.c.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.W(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.W(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.e(A.p(i))
m.a=n
m.b=b}}}},
qG(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.b([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.e(A.p(n))
r=A.oa(6,k,a)
B.c.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.e(A.p(n))
q=A.oa(8,k,a)+6
if(c+q>s)throw A.e(A.p(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.e(A.p(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}}A.qD(e)},
qD(a){var s,r,q,p,o,n=A.aj(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.h(n,o,r+1)
B.c.h(a,s,(o|r<<6)>>>0)}}},
mV(a,b){B.c.h(a,0,((a[0]<<8|b.B())&-1)>>>0)
B.c.h(a,1,(a[1]+8&-1)>>>0)},
oa(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.c.h(b,0,((s<<8|r[q])&-1)>>>0)
B.c.h(b,1,(b[1]+8&-1)>>>0)}B.c.h(b,1,s-a)
return(B.a.aN(b[0],b[1])&B.a.O(1,a)-1)>>>0},
ha:function ha(){this.b=this.a=0
this.c=null},
qH(a){var s=A.A(a,!1,null,0)
if(s.k()!==20000630)return!1
if(s.B()!==2)return!1
if((s.bo()&4294967289)>>>0!==0)return!1
return!0},
hb:function hb(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
os(a,b,c){var s=new A.hs(a,A.b([],t.a_),A.a0(t.N,t.iW),B.aO,b)
s.hr(a,b,c,{})
return s},
ej:function ej(){},
ke:function ke(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e){var _=this
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
ht:function ht(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
fs:function fs(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
hu:function hu(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
hv:function hv(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
ez:function ez(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
kd:function kd(){this.a=null},
od(a){var s=new Uint8Array(a*3)
return new A.en(A.qO(a),a,null,new A.b5(s,a,3))},
qN(a){return new A.en(a.a,a.b,a.c,A.oE(a.d))},
qO(a){var s
for(s=1;s<=8;++s)if(B.a.O(1,s)>=a)return s
return 0},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(){},
hw:function hw(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=!0
_.x=$},
ep:function ep(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
kg:function kg(){var _=this
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
og(a){var s,r,q,p,o,n,m,l
if(a.p()!==0)return null
s=a.p()
if(s>=3)return null
if(B.fi[s]===B.aP)return null
r=a.p()
q=J.n0(r,t.aw)
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
q[p]=new A.hk(a.k(),a.k())}return new A.hj(r,q)},
du:function du(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.d=a
this.e=b},
hk:function hk(a,b){this.d=a
this.e=b},
hi:function hi(a,b,c,d,e,f,g,h,i){var _=this
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
kj:function kj(){this.b=this.a=null},
fV:function fV(a,b,c){this.e=a
this.f=b
this.r=c},
c9:function c9(){},
ct:function ct(a){this.a=a},
eq:function eq(a){this.a=a},
ks:function ks(){this.d=null},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
oy(){var s=A.aj(4,null,!1,t.jH),r=A.b([],t.gU),q=t.iM,p=J.eB(0,q)
q=J.eB(0,q)
return new A.kt(new A.dp(A.a0(t.N,t.a)),s,r,p,q,A.b([],t.an))},
kt:function kt(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
ku:function ku(a,b){this.a=a
this.b=b},
e1:function e1(a){this.a=a
this.b=0},
hF:function hF(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
kv:function kv(){this.r=this.f=$},
hG:function hG(a,b,c,d,e,f,g,h){var _=this
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
hE:function hE(){},
dM:function dM(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
eW:function eW(){},
hx:function hx(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ot(){var s=t.N
return new A.hy(A.a0(s,s),A.b([],t.fi),A.b([],t.t))},
cd:function cd(a,b){this.a=a
this.b=b},
i9:function i9(){},
hy:function hy(a,b,c){var _=this
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
i7:function i7(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
i8:function i8(a,b){this.a=a
this.b=b},
kR:function kR(a,b){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null},
ib:function ib(){this.a=null},
ic:function ic(){this.a=null},
bv:function bv(){},
ig:function ig(){this.a=null},
ih:function ih(){this.a=null},
ij:function ij(){this.a=null},
ik:function ik(){this.a=null},
eZ:function eZ(a){this.b=a},
ii:function ii(){},
kT:function kT(){var _=this
_.w=_.r=_.f=_.e=$},
cT:function cT(a){this.a=a
this.c=$},
oQ(a){var s=new A.id(A.a0(t.p,t.ok))
s.hF(a)
return s},
nd(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.i(B.b.I((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
kV(a,b){if(b===0)return 0
return B.b.i(B.a.I(B.b.i(255*(1-(1-a/255)/(b/255))),0,255))},
kX(a,b){return B.b.i(B.a.I(a+b-255,0,255))},
nf(a,b){return B.b.i(B.a.I(255-(255-b)*(255-a),0,255))},
kW(a,b){if(b===255)return 255
return B.b.i(B.b.I(a/255/(1-b/255)*255,0,255))},
ng(a,b){var s=a/255,r=b/255,q=1-r
return B.b.bL(255*(q*r*s+r*(1-q*(1-s))))},
nb(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.bL(510*s*r)
else return B.b.bL(255*(1-2*(1-s)*(1-r)))},
nh(a,b){if(b<128)return A.kV(a,2*b)
else return A.kW(a,2*(b-128))},
nc(a,b){var s
if(b<128)return A.kX(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
ne(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
na(a,b){return B.b.bL(b+a-2*b*a/255)},
oR(c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="data",c1=A.a0(t.p,t.dS)
for(s=c6.length,r=0;q=c6.length,r<q;c6.length===s||(0,A.ak)(c6),++r){p=c6[r]
c1.h(0,p.a,p)}if(c3===8)o=1
else o=c3===16?2:-1
n=A.a4(b9,b9,B.e,0,B.h,c5,b9,0,q,b9,c4,!1)
if(o===-1)throw A.e(A.p("PSD: unsupported bit depth: "+A.B(c3)))
m=c1.l(0,0)
l=c1.l(0,1)
k=c1.l(0,2)
j=c1.l(0,-1)
i=-o
for(s=n.a,s=s.gG(s),h=q>=5,g=o===1,f=q===4,e=q>=2,q=q>=4;s.E();){d=s.gJ(s)
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
b4=A.pF(255-b6,255-b7,255-a5,255-b8)
d.sq(0,b4[0])
d.st(b4[1])
d.sv(0,b4[2])
d.su(0,a3)
break
default:throw A.e(A.p("Unhandled color mode: "+A.B(c2)))}}return n},
bl:function bl(a,b){this.a=a
this.b=b},
id:function id(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=a
_.ay=_.ax=_.at=_.as=$},
ie:function ie(){},
eY:function eY(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=$
_.cy=c},
rk(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.k()
if(s>=12){if(b.ac(4)!=="8BIM")A.ad(A.p("Invalid key in layer additional data"))
b.ac(4)}if(s>=16)b.k()
return new A.ii()
default:return new A.eZ(b)}},
dN:function dN(){},
kU:function kU(){this.a=null},
il:function il(){},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
dP:function dP(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
f_:function f_(){this.y=this.b=this.a=0},
bP(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.O,r)
r=B.O[r]
s=b>>>8
if(!(s<256))return A.a(B.O,s)
return(r<<17|B.O[s]<<16|B.O[a&255]<<1|B.O[b&255])>>>0},
b6:function b6(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
kY:function kY(){this.b=this.a=null},
f7:function f7(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
aB:function aB(a,b){this.a=a
this.b=b},
la:function la(){this.a=null
this.b=$},
lc:function lc(a){this.a=a
this.c=this.b=0},
iA:function iA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
nm(a,b,c){var s=new A.le(b,a),r=t.E
s.sea(A.aj(b,null,!1,r))
s.se7(A.aj(b,null,!1,r))
return s},
le:function le(a,b){var _=this
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
iB:function iB(a,b,c,d){var _=this
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
cV:function cV(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
iC:function iC(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
oB(){return new A.kF(new Uint8Array(4096))},
kF:function kF(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
ld:function ld(){this.a=null
this.c=$},
np(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.aj(8,null,!1,t.nX),n=A.aj(4,null,!1,t.nk)
return new A.lm(a,b,new A.ls(),new A.lw(),new A.lo(s,r),new A.ly(q,p),o,n,new Uint8Array(4))},
p2(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
lm:function lm(a,b,c,d,e,f,g,h,i){var _=this
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
_.aP=$
_.bh=null
_.bI=_.aQ=$
_.bU=null
_.bJ=$},
lz:function lz(){},
p_(a){var s=new A.f9(a)
s.b=254
s.c=0
s.d=-8
return s},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
L(a,b,c){return B.a.ar(B.a.j(a+2*b+c+2,2),32)},
rJ(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
l+=-31
if(!(l>=0&&l<j))return A.a(m,l)
l=A.L(k,s,m[l])
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
s=A.L(k,r,m[s])
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
r=A.L(k,q,m[r])
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
o=A.b([l,s,r,A.L(k,p,m[q])],t.t)
for(n=0;n<4;++n)a.bV(n*32,4,o)},
rB(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
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
o=p.cN()
m=A.L(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.cN()
s=A.L(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.cN()
r=A.L(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.cN()
n=A.L(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
rz(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.j(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.bC(s,r,r+4,p)}},
nq(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.aT()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
if(!(m>=0&&m<766))return A.a(l,m)
J.F(k,n+(r+o),l[m])}r+=32}},
rH(a){A.nq(a,4)},
rI(a){A.nq(a,8)},
rG(a){A.nq(a,16)},
rF(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
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
a.h(0,96,A.L(s,r,q))
r=A.L(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.L(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.L(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.L(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.L(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.L(k,m,n))},
rE(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,0,A.L(k,s,r))
s=A.L(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.L(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.L(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.L(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.L(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.L(n,l,l))},
rL(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
a.h(0,96,A.L(r,s,k))
a.h(0,64,A.L(s,k,q))
k=A.L(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.L(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.L(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.L(o,n,l))},
rK(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,32,A.L(k,s,r))
s=A.L(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.L(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.L(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.L(p,o,n))
a.h(0,99,A.L(o,n,l))},
rC(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
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
a.h(0,1,A.L(o,s,r))
s=A.L(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.L(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
rA(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
a.h(0,3,A.L(o,n,l))
a.h(0,2,A.L(p,o,n))
o=A.L(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.L(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.L(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.L(q,r,s))},
rW(a){var s
for(s=0;s<16;++s)a.bl(s*32,16,a,-32)},
rU(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bC(q,p,p+16,q[o])
s+=32}},
lq(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bC(r,q,q+16,a)}},
rM(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.lq(B.a.j(p,5),a)},
rO(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lq(B.a.j(p,4),a)},
rN(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lq(B.a.j(p,4),a)},
rP(a){A.lq(128,a)},
rX(a){var s
for(s=0;s<8;++s)a.bl(s*32,8,a,-32)},
rV(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bC(q,p,p+8,q[o])
s+=32}},
lr(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bC(r,q,q+8,a)}},
rQ(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.lr(B.a.j(p,4),a)},
rR(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lr(B.a.j(p,3),a)},
rS(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lr(B.a.j(p,3),a)},
rT(a){A.lr(128,a)},
cf(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.j(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
lp(a,b,c,d,e){A.cf(a,0,0,b,c+d)
A.cf(a,0,1,b,c+e)
A.cf(a,0,2,b,c-e)
A.cf(a,0,3,b,c-d)},
rD(){var s,r,q
if(!$.p0){for(s=-255;s<=255;++s){r=$.jY()
q=255+s
r[q]=s<0?-s:s
$.mP()[q]=B.a.j(r[q],1)}for(s=-1020;s<=1020;++s){r=$.mQ()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.jZ()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.aT()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.p0=!0}},
ln:function ln(){},
ry(){var s,r=J.az(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.f8(r)},
tb(){var s,r,q,p,o=new Uint8Array(3),n=J.az(4,t.ac)
for(s=t.e9,r=0;r<4;++r){q=J.az(8,s)
for(p=0;p<8;++p)q[p]=A.ry()
n[r]=q}B.k.aL(o,0,3,255)
return new A.lx(o,n)},
ls:function ls(){this.d=$},
lw:function lw(){},
ly:function ly(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
f8:function f8(a){this.a=a},
lx:function lx(a,b){this.a=a
this.b=b},
lo:function lo(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bV:function bV(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
fb:function fb(){this.b=this.a=0},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
nr(a,b){var s,r=A.b([],t.nK),q=A.b([],t.ip),p=new Uint32Array(2),o=new A.iN(a,p)
p=o.d=A.N(p.buffer,0,null)
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
return new A.fa(o,b,r,q)},
cg(a,b){return B.a.j(a+B.a.O(1,b)-1,b)},
fa:function fa(a,b,c,d){var _=this
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
hz:function hz(a,b,c,d){var _=this
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
iN:function iN(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
lt:function lt(a,b){this.a=a
this.b=b},
lu(a,b,c){var s
if(!(b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
bW(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
cY(a){if(a<0)return 0
if(a>255)return 255
return a},
lv(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
rY(a,b,c){return 4278190080},
rZ(a,b,c){return b},
t3(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
t4(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
t5(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
t6(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bW(A.bW(b,a[r]),s)},
t7(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.bW(b,a[s])},
t8(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.bW(b,a[c])},
t9(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.bW(s,a[c])},
ta(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bW(s,a[r])},
t_(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.bW(A.bW(b,q),A.bW(s,r))},
t0(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.lv(s>>>24,b>>>24,r>>>24)+A.lv(s>>>16&255,b>>>16&255,r>>>16&255)+A.lv(s>>>8&255,b>>>8&255,r>>>8&255)+A.lv(s&255,b&255,r&255)<=0?s:b},
t1(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.cY((b>>>24)+(s>>>24)-(r>>>24))<<24|A.cY((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.cY((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.cY((b&255)+(s&255)-(r&255)))>>>0},
t2(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.bW(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.cY(s+B.a.U(s-(r>>>24),2))<<24|A.cY(n+B.a.U(n-(r>>>16&255),2))<<16|A.cY(p+B.a.U(p-(r>>>8&255),2))<<8|A.cY(o+B.a.U(o-(r&255),2)))>>>0},
cX:function cX(a,b){this.a=a
this.b=b},
iO:function iO(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
lA:function lA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
fe:function fe(){},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
oe(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.hh(s,r,new Int16Array(128))
s.dR(0)
return s},
qP(){var s,r=J.az(5,t.gP)
for(s=0;s<5;++s)r[s]=A.oe()
return new A.ds(r)},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
ds:function ds(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
eA:function eA(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
lB:function lB(){this.b=this.a=null},
of(a){return new A.er(a.a,a.b,B.k.hg(a.c,0))},
ki:function ki(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
a4(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=new A.bL(null,null,null,a,h,e,d,0)
B.c.H(r.gaq(),r)
if(i<1||i>4)A.ad(A.p("Invalid number of channels for image "+i+". Must be between 1 and 4."))
r.c=g
if(b!=null)r.e=A.ei(b)
if(j==null)if(l)s=r.gF()===B.v||r.gF()===B.w||r.gF()===B.x||r.gF()===B.e
else s=!1
else s=!1
r.eA(k,f,c,i,s?r.il(B.e,i):j)
return r},
hl(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.ei(o)
s=a.c
s=s==null?p:A.of(s)
r=a.w
q=a.r
o=new A.bL(p,s,o,p,q,r,a.y,a.z)
o.hC(a,b,c,d)
return o},
bh(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.bg(0,c)
s=a.e
s=s==null?o:A.ei(s)
r=a.c
r=r==null?o:A.of(r)
q=a.w
p=a.r
n=new A.bL(n,r,s,o,p,q,a.y,a.z)
n.hB(a,b,c)
return n},
hf:function hf(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d,e,f,g,h){var _=this
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
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(){},
am:function am(){},
qQ(a,b,c){return new A.dz(new Uint16Array(a*b*c),a,b,c)},
dz:function dz(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
qR(a,b,c){return new A.dA(new Float32Array(a*b*c),a,b,c)},
dA:function dA(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
es:function es(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
et:function et(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eu:function eu(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ev:function ev(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dB:function dB(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
ew:function ew(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dC:function dC(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
qS(a,b,c){return new A.dD(new Uint32Array(a*b*c),a,b,c)},
dD:function dD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dE:function dE(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
oq(a,b,c){return new A.dF(new Uint8Array(a*b*c),null,a,b,c)},
dF:function dF(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
hB:function hB(a,b){this.a=a
this.b=b},
b4:function b4(){},
eO:function eO(a,b,c){this.c=a
this.a=b
this.b=c},
eP:function eP(a,b,c){this.c=a
this.a=b
this.b=c},
eQ:function eQ(a,b,c){this.c=a
this.a=b
this.b=c},
eR:function eR(a,b,c){this.c=a
this.a=b
this.b=c},
eS:function eS(a,b,c){this.c=a
this.a=b
this.b=c},
eT:function eT(a,b,c){this.c=a
this.a=b
this.b=c},
eU:function eU(a,b,c){this.c=a
this.a=b
this.b=c},
dL:function dL(a,b,c){this.c=a
this.a=b
this.b=c},
oE(a){return new A.b5(new Uint8Array(A.H(a.c)),a.a,a.b)},
b5:function b5(a,b,c){this.c=a
this.a=b
this.b=c},
oF(a){return new A.cH(-1,0,-a.c,a)},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG(a){return new A.cI(-1,0,-a.c,a)},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oH(a){return new A.cJ(-1,0,-a.c,a)},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI(a){return new A.cK(-1,0,-a.c,a)},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oJ(a){return new A.cL(-1,0,-a.c,a)},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK(a){return new A.cM(-1,0,-a.c,a)},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2(a){return new A.cN(-1,0,0,-1,0,a)},
cN:function cN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oL(a){return new A.cO(-1,0,-a.c,a)},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3(a){return new A.cP(-1,0,0,-2,0,a)},
cP:function cP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oM(a){return new A.cQ(-1,0,-a.c,a)},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4(a){return new A.cR(-1,0,0,-(a.c<<2>>>0),a)},
cR:function cR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n9(a){return new A.cS(-1,0,-a.c,a)},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(){},
uO(a,b){switch(b.a){case 0:A.jX(a)
break
case 1:A.uQ(a)
break
case 2:A.uP(a)
break}return a},
uQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gaq().length
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
if(g==null)g=new A.O()
o=p.a
f=o==null?d:o.K(h,j,d)
if(f==null)f=new A.O()
e=g.gL(g)
g.sL(0,f.gL(f))
f.sL(0,e)}else for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.K(h,i,d)
if(g==null)g=new A.O()
o=p.a
f=o==null?d:o.K(h,j,d)
if(f==null)f=new A.O()
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
jX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gaq().length
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
if(f==null)f=new A.O()
o=p.a
e=o==null?c:o.K(h,i,c)
if(e==null)e=new A.O()
d=f.gL(f)
f.sL(0,e.gL(e))
e.sL(0,d)}else for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.K(g,i,c)
if(f==null)f=new A.O()
o=p.a
e=o==null?c:o.K(h,i,c)
if(e==null)e=new A.O()
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
uP(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.gaq().length
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
if(e==null)e=new A.O()
o=p.a
d=o==null?b:o.K(g,j,b)
if(d==null)d=new A.O()
c=e.gL(e)
e.sL(0,d.gL(d))
d.sL(0,c)}else for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.K(f,h,b)
if(e==null)e=new A.O()
o=p.a
d=o==null?b:o.K(g,j,b)
if(d==null)d=new A.O()
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
kf:function kf(a,b){this.a=a
this.b=b},
p(a){return new A.kn(a)},
kn:function kn(a){this.a=a},
A(a,b,c,d){return new A.aq(a,d,c==null?a.length:d+c,d,b)},
u(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.aq(s,q,p,r,a.e)},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hY:function hY(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
bk(a,b){return new A.i1(a,new Uint8Array(b))},
i1:function i1(a,b){this.a=0
this.b=a
this.c=b},
im:function im(){},
dR:function dR(a,b){this.a=a
this.b=b},
uE(a,b,c){var s,r,q,p,o,n=A.l2()
$.bx!=null
n.c=c
s=new MessageChannel()
r=new A.lH(A.a0(t.p,t.kF),new A.lF(new A.mA(s),A.a0(t.N,t.e)))
q=s.port1
q.toString
p=t.m1
o=t.d
A.lV(q,"message",p.a(A.qY(r)),!1,o)
q=self
q.toString
A.lV(t.h.a(q),"message",p.a(new A.mB(r,s,a)),!1,o)},
mA:function mA(a){this.a=a},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(){},
fi:function fi(a){this.a=a},
mb:function mb(a){this.a=a},
qY(a){return new A.ky(a)},
ky:function ky(a){this.a=a},
c7:function c7(a,b,c){var _=this
_.e=a
_.f=0
_.a=b
_.b=c
_.d=_.c=null},
lf:function lf(){this.a=0},
lF:function lF(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.d=null
_.e=b
_.f=null
_.r=0},
lG:function lG(a){this.a=a},
lH:function lH(a,b){this.a=a
this.b=b},
lI:function lI(){},
bQ(a,b){var s
A.nk("SquadronError: "+a)
s=new A.f1(a,b)
s.hH(a,b)
return s},
f1:function f1(a,b){this.a=a
this.b=b},
f2(a,b){var s,r,q=null
if(a instanceof A.f1)return a
else if(a instanceof A.e_){s=A.p4(a,q)
s.c=null
return A.p4(s,q)}else if(a instanceof A.f6){s=a.a
r=new A.f6(a.x,s,q,q,q)
r.du(s,q,q,q)
return r}else return A.ns(J.e5(a),q,b,q)},
bR:function bR(){},
ns(a,b,c,d){var s=new A.e_(a,c,d,b)
s.du(a,b,c,d)
return s},
qq(a,b,c,d){var s=b==null?"The task has been cancelled":b,r=new A.da(s,c,d,a)
r.du(s,a,c,d)
return r},
p4(a,b){a.d=b
return a},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.b=c
_.c=d
_.d=e},
l2(){var s=$.bx
if(s==null){s=new A.l1(A.b([],t.t))
s.d=$.nj
$.bx=s}return s},
oU(){var s=$.bx
s=s==null?null:s.d
return s==null?$.nj:s},
nk(a){$.bx!=null
return null},
l1:function l1(a){var _=this
_.a=2000
_.b=a
_.c=null
_.d=!1
_.f=_.e=null},
qp(a){var s
if(a==null)return null
s=J.ac(a)
return new A.cn(A.nz(s.l(a,1)),A.av(s.l(a,0)))},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
tj(a,b,c,d,e){var s,r,q,p,o,n={}
n.a=null
s=new A.U($.X,t.c)
r=new A.lE(n,a,new A.cZ(s,t.jk))
q=t.M
q.a(r)
p=++d.r
o=d.f
if(o==null){q=A.a0(t.p,q)
d.skk(q)}else q=o
q.h(0,p,r)
if(e.e)e.hh(0,r)
c.$1(p)
A.ti(a)
q=b.$ti
q.m("~(1)?").a(c)
t.Z.a(r)
n.a=A.lV(b.a,b.b,c,!1,q.c)
return s.h2(new A.lD(d,e,p))},
ti(a){return new A.lC(a)},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a){this.a=a},
v4(){return A.uE(new A.mK(),null,null)},
mK:function mK(){},
dV:function dV(){this.a=$},
lb:function lb(a){this.a=a},
ru(a){throw A.e(A.M("Uint64List not supported on the web."))},
qT(a,b,c){A.c_(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
oY(a,b){var s
A.c_(a,b,null)
s=B.a.U(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
qL(a){var s
A.c_(a,0,null)
s=B.a.U(a.byteLength-0,4)
return new Float32Array(a,0,s)},
qM(a){return a.lM(0,0,null)},
v6(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
uR(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.a2(r,65521)
q=B.a.a2(q,65521)}return(q<<16|r)>>>0},
bB(a,b){var s,r,q,p=J.aa(a),o=p.gn(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bc(q)
b=B.z[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
pG(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k=b.gX(b),j=b.gM(b),i=a.gX(a)<b.gX(b)?a.gX(a):b.gX(b),h=a.gM(a)<b.gM(b)?a.gM(a):b.gM(b)
if(a.gbi())a.kB(a.gbm())
if(typeof h!=="number")return A.bc(h)
s=j/h
if(typeof i!=="number")return A.bc(i)
r=k/i
q=t.p
p=J.az(h,q)
for(o=0;o<h;++o)p[o]=B.b.i(o*s)
n=J.az(i,q)
for(m=0;m<i;++m)n[m]=B.b.i(m*r)
if(c===B.ah)A.tZ(b,a,d,e,i,h,n,p,l,B.aM)
else A.tX(b,a,d,e,i,h,n,p,c,!1,l,B.aM)
return a},
tZ(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.K(m,l,q)
if(q==null)q=new A.O()
b.bO(c+n,o,q)}},
tX(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.K(m,l,q)
if(q==null)q=new A.O()
A.uM(b,c+n,o,q,i,!1,a0,a1)}},
uM(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.fM(a7,a8))return a6
if(b0===B.ah||a6.gbi())if(a6.fM(a7,a8)){a6.aJ(a7,a8).ae(0,a9)
return a6}s=a9.ga8()
r=a9.ga0()
q=a9.ga5()
p=a9.gn(a9)<4?1:a9.ga9()
if(typeof p!=="number")return p.ds()
if(p===0)return a6
o=a6.aJ(a7,a8)
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
qI(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
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
A.ek(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.ek(a,a6[b],q)
a2=q[0]
a3=q[1]
A.ek(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.ek(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.el(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.el(a,a6[b],q)
a2=q[0]
a3=q[1]
A.el(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.el(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.ek(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.el(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.ek(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.el(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
ek(a,b,c){var s,r,q,p,o=$.aD()
o[0]=a
s=$.aU()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.j(q,1)
B.c.h(c,0,p)
B.c.h(c,1,p-q)},
el(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.h(c,1,s)
B.c.h(c,0,b+s-32768&65535)},
uN(a){var s,r,q,p,o,n,m,l,k,j=null
if(A.oy().lC(a))return new A.hE()
s=new A.i7(A.ot())
if(s.dk(a))return s
r=new A.kg()
r.f=A.A(a,!1,j,0)
r.a=new A.ep(A.b([],t.b))
if(r.eO())return r
q=new A.lB()
if(q.dk(a))return q
p=new A.ld()
if(p.fb(A.A(a,!1,j,0))!=null)return p
if(A.oQ(a).c===943870035)return new A.kU()
if(A.qH(a))return new A.kd()
if(A.mT(A.A(a,!1,j,0)))return new A.fR(!1)
o=new A.la()
n=A.A(a,!1,j,0)
m=o.a=new A.f7(B.ae)
m.cc(0,n)
if(m.fP())return o
l=new A.kj()
m=A.A(a,!1,j,0)
l.a=m
m=A.og(m)
l.b=m
if(m!=null)return l
k=new A.kY()
if(k.bb(a)!=null)return k
return j},
v8(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.nA==null){s=$.nA=new Uint8Array(768)
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
a7[o]=a2-d}for(s=$.nA,r=0;r<64;++r){s.toString
q=B.a.j(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
uS(e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3=null,e4="ifd0",e5=e6.r
if(e5.l(0,e4).a.aK(0,274)){s=e5.l(0,e4)
s=s.gc1(s)
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
m=A.a4(e3,e3,B.e,0,B.h,n,e3,0,3,e3,o,!1)
m.e=A.ei(e5)
m.gbT().l(0,e4).sc1(0,e3)
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
if(q==null)throw A.e(A.p("Unsupported color mode (4 components)"))
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
default:throw A.e(A.p("Unsupported color mode"))}return m},
tg(a,b,c,d,e,f){A.td(f,a,b,c,d,e,!0,f)},
th(a,b,c,d,e,f){A.te(f,a,b,c,d,e,!0,f)},
tf(a,b,c,d,e,f){A.tc(f,a,b,c,d,e,!0,f)},
dX(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.F(c.a,c.d+s,q+p)}},
td(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.A(a,!1,q,p),m=A.A(a,!1,q,p),l=A.u(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.dX(A.u(n,q,1),l,A.u(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.dX(n,A.u(l,q,s),m,1,!0)
A.dX(A.u(n,q,1),l,A.u(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
te(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.A(a,!1,q,p),m=A.A(h,!1,q,p),l=A.u(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.dX(A.u(n,q,1),l,A.u(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.dX(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
tc(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.A(a,!1,i,h),e=A.A(a4,!1,i,h),d=A.u(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.dX(A.u(f,i,1),d,A.u(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.dX(f,A.u(d,i,s),e,1,!0)
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
J.F(e.a,e.d+q,p+j)}++a1
d.d+=a0
f.d+=a0
e.d+=a0}},
uD(a){var s,r="ifd0",q=A.bh(a,!1,!1)
if(a.gbT().l(0,r).a.aK(0,274)){s=a.gbT().l(0,r)
s=s.gc1(s)===1}else s=!0
if(s)return q
q.e=A.ei(a.gbT())
q.gbT().l(0,r).sc1(0,null)
s=a.gbT().l(0,r)
switch(s.gc1(s)){case 2:return A.jX(q)
case 3:return A.uO(q,B.cq)
case 4:return A.jX(A.jW(q,180))
case 5:return A.jX(A.jW(q,90))
case 6:return A.jW(q,90)
case 7:return A.jX(A.jW(q,-90))
case 8:return A.jW(q,-90)}return q},
uJ(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
a.gbi()
if(a.gbT().l(0,"ifd0").a.aK(0,274)){s=a.gbT().l(0,"ifd0")
s=s.gc1(s)!==1}else s=!1
if(s)a=A.uD(a)
if(b<=0)b=B.b.bL(a0*(a.gM(a)/a.gX(a)))
if(a0<=0)a0=B.b.bL(b*(a.gX(a)/a.gM(a)))
if(a0===a.gX(a)&&b===a.gM(a))return A.bh(a,!1,!1)
r=new Int32Array(a0)
q=a.gX(a)/a0
for(p=0;p<a0;++p){s=B.b.i(p*q)
if(!(p<a0))return A.a(r,p)
r[p]=s}o=a.gaq().length
for(s=t.g,n=c,m=0;m<o;++m){l=a.x
if(l===$){l=A.b([],s)
a.sbP(l)}if(!(m<l.length))return A.a(l,m)
k=l[m]
j=A.hl(k,b,!0,a0)
i=n==null
if(!i)n.aH(j)
if(i)n=j
i=k.a
h=i==null
g=h?c:i.b
f=(g==null?0:g)/b
if((h?c:i.gP())!=null)for(e=0;e<b;++e){d=B.b.i(e*f)
for(i=0+e,p=0;p<a0;++p){if(!(p<a0))return A.a(r,p)
h=r[p]
g=k.a
if(g==null)h=c
else{h=g.aJ(h,d)
h=B.b.i(h.gL(h))}if(h==null)h=0
g=j.a
if(g!=null)g.aE(0+p,i,h)}}else for(e=0;e<b;++e){d=B.b.i(e*f)
for(i=0+e,p=0;p<a0;++p){if(!(p<a0))return A.a(r,p)
h=r[p]
g=k.a
h=g==null?c:g.K(h,d,c)
if(h==null)h=new A.O()
j.bO(0+p,i,h)}}}n.toString
return n},
jW(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=B.a.a2(a9,360)
a8.gbi()
if(B.a.a2(a7,90)===0)switch(B.a.U(a7,90)){case 1:return A.un(a8)
case 2:return A.ul(a8)
case 3:return A.um(a8)
default:return A.bh(a8,!1,!1)}s=a7*3.141592653589793/180
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
c=o?a6:g.df()
if(c==null){b=B.b.i(n)
c=A.hl(a8,B.b.i(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gG(o);o.E();){a=o.gJ(o)
a0=a.gaS(a)
a1=a.gaT(a)
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
if(b)c.bO(a0,a1,d.h7(a3,a4,B.cv))}}g.toString
return g},
un(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ak)(s),++p){o=s[p]
n=q==null
m=n?f:q.df()
if(m==null){l=o.a
k=l==null
j=k?f:l.b
if(j==null)j=0
l=k?f:l.a
m=A.hl(o,l==null?0:l,!0,j)}if(n)q=m
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
m.bO(g,h,n==null?new A.O():n);++g}++h}}q.toString
return q},
ul(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ak)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?f:n.a
k=(l==null?0:l)-1
n=m?f:n.b
j=(n==null?0:n)-1
n=q==null
i=n?f:q.df()
if(i==null)i=A.bh(o,!0,!0)
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
i.bO(g,h,m==null?new A.O():m);++g}++h}}q.toString
return q},
um(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ak)(s),++p){o=s[p]
n=a.a
n=n==null?f:n.a
m=(n==null?0:n)-1
n=q==null
l=n?f:q.df()
if(l==null){k=o.a
j=k==null
i=j?f:k.b
if(i==null)i=0
k=j?f:k.a
l=A.hl(o,k==null?0:k,!0,i)}if(n)q=l
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
l.bO(g,h,k==null?new A.O():k);++g}++h}}q.toString
return q},
mC(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
vd(a){$.nS().h(0,0,a)
return $.qa().l(0,0)},
pN(a,b,c,d){return(B.a.I(a,0,255)|B.a.I(b,0,255)<<8|B.a.I(c,0,255)<<16|B.a.I(d,0,255)<<24)>>>0},
bo(a,b,c){var s,r,q,p,o=b.gn(b),n=b.gF(),m=a.gP(),l=m==null?null:m.gF()
if(l==null)l=a.gF()
s=a.gn(a)
if(o===1){r=a.gn(a)>2?a.gah():a.l(0,0)
b.h(0,0,A.nF(A.fE(a.l(0,0))?B.b.dj(r):r,l,n))}else if(o<=s)for(q=0;q<o;++q)b.h(0,q,A.nF(a.l(0,q),l,n))
else{for(q=0;q<s;++q)b.h(0,q,A.nF(a.l(0,q),l,n))
p=s===1?b.l(0,0):0
for(q=s;q<o;++q)b.h(0,q,q===3?c:p)}return b},
nE(a,b,c,d,e){var s,r,q=a.gP(),p=q==null?null:q.gF()
if(p==null)p=a.gF()
q=e==null
s=q?null:e.gF()
c=s==null?c:s
if(c==null)c=a.gF()
s=q?null:e.gn(e)
d=s==null?d:s
if(d==null)d=a.gn(a)
if(b==null)b=0
if(c===p&&d===a.gn(a)){if(q)return a.N(0)
e.ae(0,a)
return e}switch(c.a){case 3:if(q)r=new A.bF(new Uint8Array(d))
else r=e
return A.bo(a,r,b)
case 0:return A.bo(a,q?new A.dh(d,0):e,b)
case 1:return A.bo(a,q?new A.dj(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.dl(d,new Uint8Array(q))}else r=e
return A.bo(a,r,b)
case 4:if(q)r=new A.di(new Uint16Array(d))
else r=e
return A.bo(a,r,b)
case 5:if(q)r=new A.dk(new Uint32Array(d))
else r=e
return A.bo(a,r,b)
case 6:if(q)r=new A.dg(new Int8Array(d))
else r=e
return A.bo(a,r,b)
case 7:if(q)r=new A.de(new Int16Array(d))
else r=e
return A.bo(a,r,b)
case 8:if(q)r=new A.df(new Int32Array(d))
else r=e
return A.bo(a,r,b)
case 9:if(q)r=new A.db(new Uint16Array(d))
else r=e
return A.bo(a,r,b)
case 10:if(q)r=new A.dc(new Float32Array(d))
else r=e
return A.bo(a,r,b)
case 11:if(q)r=new A.dd(new Float64Array(d))
else r=e
return A.bo(a,r,b)}},
ab(a){return 0.299*a.gq(a)+0.587*a.gt()+0.114*a.gv(a)},
pF(a,b,c,d){var s=1-d/255
return A.b([B.b.bL(255*(1-a/255)*s),B.b.bL(255*(1-b/255)*s),B.b.bL(255*(1-c/255)*s)],t.t)},
T(a){var s,r,q,p
$.nQ()[0]=a
s=$.q8()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
if($.a_==null)A.a3()
q=r>>>23&511
s=$.ob.cu()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.qJ(r)},
qJ(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.aN(o+(B.a.W(1,s-1)-1)+(B.a.Z(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
a3(){var s,r,q,p,o,n=$.a_
if(n!=null)return n
s=new Uint32Array(65536)
$.a_=A.r3(s.buffer,0,null)
n=new Uint16Array(512)
$.ob.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.qK(r)
n=$.a_
n.toString
return n},
qK(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
rs(a){return a==null||typeof a=="string"||typeof a=="number"||A.d1(a)},
nn(a){if(a==null||typeof a=="string"||typeof a=="number"||A.d1(a))return!0
if(t.bF.b(a)||t.oT.b(a)||t.cq.b(a))return!0
if(t.j.b(a)&&J.nX(a,A.uv()))return!0
return!1},
rt(a){return!A.nn(a)},
lg(a,b){return new A.d_(A.rr(a,b),t.iD)},
rr(a,b){return function(){var s=a,r=b
var q=0,p=1,o,n,m,l,k
return function $async$lg(c,d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=J.qk(s,A.uu()),n=n.gG(n),m=t.K
case 2:if(!n.E()){q=3
break}l=n.gJ(n)
q=!r.bG(0,l)?4:5
break
case 4:k=l==null
r.H(0,k?m.a(l):l)
q=6
return c.b=k?m.a(l):l,1
case 6:case 5:q=2
break
case 3:return 0
case 1:return c.c=o,3}}}},
oW(a,b){return new A.d_(A.rq(a,b),t.iD)},
rq(a,b){return function(){var s=a,r=b
var q=0,p=2,o,n,m,l,k,j,i,h
return function $async$oW(c,d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:if(A.nn(s)){q=1
break}n=A.lg(s,r)
m=A.z(n,!0,n.$ti.m("f.E"))
n=t.R,l=t.f,k=0
case 3:if(!(k<m.length)){q=5
break}j=k+1
i=m[k]
q=l.b(i)?6:8
break
case 6:h=J.d6(i)
if(!J.nX(h.gbk(i),A.ut()))A.ad(A.bQ("Map keys must be strings, numbers or booleans.",A.bz()))
B.c.de(m,A.lg(h.gbD(i),r))
q=7
break
case 8:q=n.b(i)?9:11
break
case 9:B.c.de(m,A.lg(i,r))
q=10
break
case 11:q=12
return c.b=i,1
case 12:case 10:case 7:case 4:k=j
q=3
break
case 5:case 1:return 0
case 2:return c.c=o,3}}}},
pO(a){var s,r,q
try{if(a!=null)a.$0()}catch(r){s=A.aS(r)
A.B(a)
A.B(s)
q=$.bx
q!=null}},
tk(a){return A.t(J.d7(a,2))},
p5(a){var s,r=J.ac(a),q=r.l(a,1)
r.h(a,1,q==null?null:new A.fi(t.oA.a(q)))
r.h(a,4,A.qp(t.lH.a(r.l(a,4))))
if(r.l(a,7)==null)r.h(a,7,!1)
if(r.l(a,3)==null)r.h(a,3,B.bp)
s=r.l(a,0)
if(s!=null)r.h(a,0,A.o8(new A.bH(Date.now(),!1).h0().a-$.nT().a).a-A.t(s))},
p6(a){var s,r
if(1>=a.length)return A.a(a,1)
s=a[1]
if(!t.j.b(s)&&t.R.b(s))B.c.h(a,1,J.qj(s))
if(2>=a.length)return A.a(a,2)
r=t.dD.a(a[2])
B.c.h(a,2,r==null?null:r.c2())
if(A.oU())B.c.h(a,0,A.o8(new A.bH(Date.now(),!1).h0().a-$.nT().a).a)}},B={}
var w=[A,J,B]
var $={}
A.n2.prototype={}
J.ex.prototype={
R(a,b){return a===b},
gC(a){return A.eX(a)},
A(a){return"Instance of '"+A.kS(a)+"'"},
gaC(a){return A.d4(A.nB(this))}}
J.hC.prototype={
A(a){return String(a)},
gC(a){return a?519018:218159},
gaC(a){return A.d4(t.v)},
$iV:1,
$iao:1}
J.eD.prototype={
R(a,b){return null==b},
A(a){return"null"},
gC(a){return 0},
$iV:1,
$ia8:1}
J.d.prototype={$in:1}
J.cb.prototype={
gC(a){return 0},
A(a){return String(a)}}
J.i5.prototype={}
J.cW.prototype={}
J.bM.prototype={
A(a){var s=a[$.pS()]
if(s==null)return this.hn(a)
return"JavaScript function for "+J.e5(s)},
$icq:1}
J.dI.prototype={
gC(a){return 0},
A(a){return String(a)}}
J.dJ.prototype={
gC(a){return 0},
A(a){return String(a)}}
J.D.prototype={
H(a,b){A.aO(a).c.a(b)
if(!!a.fixed$length)A.ad(A.M("add"))
a.push(b)},
cK(a,b){var s
if(!!a.fixed$length)A.ad(A.M("remove"))
for(s=0;s<a.length;++s)if(J.bd(a[s],b)){a.splice(s,1)
return!0}return!1},
cf(a,b){var s=A.aO(a)
return new A.b_(a,s.m("ao(1)").a(b),s.m("b_<1>"))},
de(a,b){var s,r,q
A.aO(a).m("f<1>").a(b)
if(!!a.fixed$length)A.ad(A.M("addAll"))
for(s=b.$ti,r=new A.d0(b.a(),s.m("d0<1>")),s=s.c;r.E();){q=r.b
if(q==null)q=s.a(q)
a.push(q)}},
eh(a,b){return A.nl(a,b,null,A.aO(a).c)},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bd(a,b,c){if(b<0||b>a.length)throw A.e(A.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.e(A.an(c,b,a.length,"end",null))
if(b===c)return A.b([],A.aO(a))
return A.b(a.slice(b,c),A.aO(a))},
gfQ(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.qU())},
aj(a,b,c,d,e){var s,r,q,p,o
A.aO(a).m("f<1>").a(d)
if(!!a.immutable$list)A.ad(A.M("setRange"))
A.b7(b,c,a.length)
s=c-b
if(s===0)return
A.io(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.o_(d,e).b6(0,!1)
q=0}p=J.aa(r)
if(q+s>p.gn(r))throw A.e(A.ou())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
aL(a,b,c,d){var s
A.aO(a).m("1?").a(d)
if(!!a.immutable$list)A.ad(A.M("fill range"))
A.b7(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
dh(a,b){var s,r
A.aO(a).m("ao(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.jV(b.$1(a[r])))return!1
if(a.length!==s)throw A.e(A.bG(a))}return!0},
bG(a,b){var s
for(s=0;s<a.length;++s)if(J.bd(a[s],b))return!0
return!1},
gaR(a){return a.length===0},
gfN(a){return a.length!==0},
A(a){return A.n_(a,"[","]")},
b6(a,b){var s=A.b(a.slice(0),A.aO(a))
return s},
cd(a){return this.b6(a,!0)},
gG(a){return new J.e7(a,a.length,A.aO(a).m("e7<1>"))},
gC(a){return A.eX(a)},
gn(a){return a.length},
sn(a,b){if(!!a.fixed$length)A.ad(A.M("set length"))
if(b<0)throw A.e(A.an(b,0,null,"newLength",null))
if(b>a.length)A.aO(a).c.a(null)
a.length=b},
l(a,b){if(!(b>=0&&b<a.length))throw A.e(A.mD(a,b))
return a[b]},
h(a,b,c){A.aO(a).c.a(c)
if(!!a.immutable$list)A.ad(A.M("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.mD(a,b))
a[b]=c},
$iG:1,
$if:1,
$ik:1}
J.kr.prototype={}
J.e7.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ak(q)
throw A.e(q)}s=r.c
if(s>=p){r.seB(null)
return!1}r.seB(q[s]);++r.c
return!0},
seB(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
J.dG.prototype={
e5(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ge9(b)
if(this.ge9(a)===s)return 0
if(this.ge9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ge9(a){return a===0?1/a<0:a<0},
i(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.M(""+a+".toInt()"))},
b1(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.M(""+a+".ceil()"))},
dj(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.M(""+a+".floor()"))},
bL(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.M(""+a+".round()"))},
I(a,b,c){if(this.e5(b,c)>0)throw A.e(A.c1(b))
if(this.e5(a,b)<0)return b
if(this.e5(a,c)>0)return c
return a},
cM(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.e(A.an(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.ad(A.M("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.t.ds("0",o)},
A(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC(a){var s,r,q,p,o=a|0
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
aA(a,b){A.tS(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fl(a,b)},
U(a,b){return(a|0)===a?a/b|0:this.fl(a,b)},
fl(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.M("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
W(a,b){if(b<0)throw A.e(A.c1(b))
return b>31?0:a<<b>>>0},
O(a,b){return b>31?0:a<<b>>>0},
aN(a,b){var s
if(b<0)throw A.e(A.c1(b))
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
Z(a,b){if(0>b)throw A.e(A.c1(b))
return this.a4(a,b)},
a4(a,b){return b>31?0:a>>>b},
gaC(a){return A.d4(t.cZ)},
$iR:1,
$il:1}
J.eC.prototype={
ar(a,b){var s=this.W(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaC(a){return A.d4(t.p)},
$iV:1,
$ii:1}
J.hD.prototype={
gaC(a){return A.d4(t.V)},
$iV:1}
J.dH.prototype={
b9(a,b){return a+b},
cX(a,b,c){return a.substring(b,A.b7(b,c,a.length))},
lA(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.qW(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.qX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ds(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.cb)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ld(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ds(c,s)+a},
A(a){return a},
gC(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaC(a){return A.d4(t.N)},
gn(a){return a.length},
$iG:1,
$iV:1,
$iC:1}
A.cC.prototype={
A(a){return"LateInitializationError: "+this.a}}
A.be.prototype={
gn(a){return this.a.length},
l(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.mM.prototype={
$0(){var s=new A.U($.X,t.av)
s.dz(null)
return s},
$S:21}
A.l0.prototype={}
A.ee.prototype={}
A.bu.prototype={
gG(a){var s=this
return new A.cD(s,s.gn(s),A.q(s).m("cD<bu.E>"))},
gaR(a){return this.gn(this)===0},
dh(a,b){var s,r,q=this
A.q(q).m("ao(bu.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(!A.jV(b.$1(q.a7(0,r))))return!1
if(s!==q.gn(q))throw A.e(A.bG(q))}return!0},
cf(a,b){return this.hm(0,A.q(this).m("ao(bu.E)").a(b))},
b6(a,b){return A.z(this,!0,A.q(this).m("bu.E"))},
cd(a){return this.b6(a,!0)}}
A.f5.prototype={
giV(){var s=J.c4(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkj(){var s=J.c4(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.c4(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.bc()
return s-q},
a7(a,b){var s=this,r=s.gkj()+b
if(b<0||r>=s.giV())throw A.e(A.a6(b,s.gn(s),s,"index"))
return J.qe(s.a,r)},
b6(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aa(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.eB(0,n):J.ov(0,n)}r=A.aj(s,m.a7(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.c.h(r,q,m.a7(n,o+q))
if(m.gn(n)<l)throw A.e(A.bG(p))}return r},
cd(a){return this.b6(a,!0)}}
A.cD.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.aa(q),o=p.gn(q)
if(r.b!==o)throw A.e(A.bG(q))
s=r.c
if(s>=o){r.scj(null)
return!1}r.scj(p.a7(q,s));++r.c
return!0},
scj(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.eH.prototype={
gG(a){var s=A.q(this)
return new A.cE(J.bD(this.a),this.b,s.m("@<1>").au(s.z[1]).m("cE<1,2>"))},
gn(a){return J.c4(this.a)}}
A.ef.prototype={}
A.cE.prototype={
E(){var s=this,r=s.b
if(r.E()){s.scj(s.c.$1(r.gJ(r)))
return!0}s.scj(null)
return!1},
gJ(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
scj(a){this.a=this.$ti.m("2?").a(a)},
$iK:1}
A.b_.prototype={
gG(a){return new A.ff(J.bD(this.a),this.b,this.$ti.m("ff<1>"))}}
A.ff.prototype={
E(){var s,r
for(s=this.a,r=this.b;s.E();)if(A.jV(r.$1(s.gJ(s))))return!0
return!1},
gJ(a){var s=this.a
return s.gJ(s)},
$iK:1}
A.ax.prototype={}
A.ce.prototype={
h(a,b,c){A.q(this).m("ce.E").a(c)
throw A.e(A.M("Cannot modify an unmodifiable list"))},
aj(a,b,c,d,e){A.q(this).m("f<ce.E>").a(d)
throw A.e(A.M("Cannot modify an unmodifiable list"))},
by(a,b,c,d){return this.aj(a,b,c,d,0)}}
A.dW.prototype={}
A.eb.prototype={
gaR(a){return this.gn(this)===0},
A(a){return A.n7(this)},
$ia7:1}
A.cr.prototype={
cr(){var s,r=this,q=r.$map
if(q==null){s=r.$ti
q=new A.eE(s.m("@<1>").au(s.z[1]).m("eE<1,2>"))
A.pH(r.a,q)
r.$map=q}return q},
l(a,b){return this.cr().l(0,b)},
ag(a,b){this.$ti.m("~(1,2)").a(b)
this.cr().ag(0,b)},
gbk(a){var s=this.cr()
return new A.bj(s,A.q(s).m("bj<1>"))},
gbD(a){var s=this.cr()
return s.gbD(s)},
gn(a){return this.cr().a}}
A.lh.prototype={
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
A.eN.prototype={
A(a){return"Null check operator used on a null value"}}
A.hH.prototype={
A(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iI.prototype={
A(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kN.prototype={
A(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eh.prototype={}
A.fw.prototype={
A(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iby:1}
A.c8.prototype={
A(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.pQ(r==null?"unknown":r)+"'"},
$icq:1,
glG(){return this},
$C:"$1",
$R:1,
$D:null}
A.fS.prototype={$C:"$0",$R:0}
A.fT.prototype={$C:"$2",$R:2}
A.ix.prototype={}
A.iu.prototype={
A(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.pQ(s)+"'"}}
A.d9.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gC(a){return(A.nK(this.a)^A.eX(this.$_target))>>>0},
A(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kS(this.a)+"'")}}
A.j_.prototype={
A(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.iq.prototype={
A(a){return"RuntimeError: "+this.a}}
A.iT.prototype={
A(a){return"Assertion failed: "+A.eg(this.a)}}
A.bi.prototype={
gn(a){return this.a},
gaR(a){return this.a===0},
gbk(a){return new A.bj(this,A.q(this).m("bj<1>"))},
gbD(a){var s=A.q(this)
return A.r1(new A.bj(this,s.m("bj<1>")),new A.kx(this),s.c,s.z[1])},
aK(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.l0(b)},
l0(a){var s=this.d
if(s==null)return!1
return this.cF(s[this.cE(a)],a)>=0},
de(a,b){A.q(this).m("a7<1,2>").a(b).ag(0,new A.kw(this))},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.l1(b)},
l1(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cE(a)]
r=this.cF(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.em(s==null?q.b=q.dT():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.em(r==null?q.c=q.dT():r,b,c)}else q.l3(b,c)},
l3(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.dT()
r=o.cE(a)
q=s[r]
if(q==null)s[r]=[o.dU(a,b)]
else{p=o.cF(q,a)
if(p>=0)q[p].b=b
else q.push(o.dU(a,b))}},
li(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.m("2()").a(c)
if(q.aK(0,b)){s=q.l(0,b)
return s==null?p.z[1].a(s):s}r=c.$0()
q.h(0,b,r)
return r},
cK(a,b){var s=this
if(typeof b=="string")return s.fd(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fd(s.c,b)
else return s.l2(b)},
l2(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cE(a)
r=n[s]
q=o.cF(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fp(p)
if(r.length===0)delete n[s]
return p.b},
ag(a,b){var s,r,q=this
A.q(q).m("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.bG(q))
s=s.c}},
em(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.dU(b,c)
else s.b=c},
fd(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fp(s)
delete a[b]
return s.b},
f2(){this.r=this.r+1&1073741823},
dU(a,b){var s=this,r=A.q(s),q=new A.kC(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.f2()
return q},
fp(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.f2()},
cE(a){return J.c3(a)&1073741823},
cF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bd(a[r].a,b))return r
return-1},
A(a){return A.n7(this)},
dT(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$in5:1}
A.kx.prototype={
$1(a){var s=this.a,r=A.q(s)
s=s.l(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.q(this.a).m("2(1)")}}
A.kw.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.h(0,r.c.a(a),r.z[1].a(b))},
$S(){return A.q(this.a).m("~(1,2)")}}
A.kC.prototype={}
A.bj.prototype={
gn(a){return this.a.a},
gaR(a){return this.a.a===0},
gG(a){var s=this.a,r=new A.aW(s,s.r,this.$ti.m("aW<1>"))
r.c=s.e
return r}}
A.aW.prototype={
gJ(a){return this.d},
E(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.bG(q))
s=r.c
if(s==null){r.sel(null)
return!1}else{r.sel(s.a)
r.c=s.c
return!0}},
sel(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.eE.prototype={
cE(a){return A.uG(a)&1073741823},
cF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bd(a[r].a,b))return r
return-1}}
A.mG.prototype={
$1(a){return this.a(a)},
$S:17}
A.mH.prototype={
$2(a,b){return this.a(a,b)},
$S:30}
A.mI.prototype={
$1(a){return this.a(A.av(a))},
$S:39}
A.lT.prototype={
cu(){var s=this.b
if(s===this)throw A.e(A.n4(this.a))
return s}}
A.dK.prototype={
gaC(a){return B.jG},
$iV:1,
$idK:1}
A.af.prototype={
jg(a,b,c,d){var s=A.an(b,0,c,d,null)
throw A.e(s)},
ew(a,b,c,d){if(b>>>0!==b||b>c)this.jg(a,b,c,d)},
$iaf:1,
$ia5:1}
A.hT.prototype={
gaC(a){return B.jH},
$iV:1}
A.ar.prototype={
gn(a){return a.length},
fi(a,b,c,d,e){var s,r,q=a.length
this.ew(a,b,q,"start")
this.ew(a,c,q,"end")
if(b>c)throw A.e(A.an(b,0,c,null,null))
s=c-b
if(e<0)throw A.e(A.d8(e,null))
r=d.length
if(r-e<s)throw A.e(A.l3("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iG:1,
$iI:1}
A.cc.prototype={
l(a,b){A.bZ(b,a,a.length)
return a[b]},
h(a,b,c){A.tR(c)
A.bZ(b,a,a.length)
a[b]=c},
aj(a,b,c,d,e){t.id.a(d)
if(t.dQ.b(d)){this.fi(a,b,c,d,e)
return}this.ej(a,b,c,d,e)},
by(a,b,c,d){return this.aj(a,b,c,d,0)},
$if:1,
$ik:1}
A.aX.prototype={
h(a,b,c){A.t(c)
A.bZ(b,a,a.length)
a[b]=c},
aj(a,b,c,d,e){t.fm.a(d)
if(t.aj.b(d)){this.fi(a,b,c,d,e)
return}this.ej(a,b,c,d,e)},
by(a,b,c,d){return this.aj(a,b,c,d,0)},
$if:1,
$ik:1}
A.hU.prototype={
gaC(a){return B.jI},
bd(a,b,c){return new Float32Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$imX:1}
A.eI.prototype={
gaC(a){return B.jJ},
bd(a,b,c){return new Float64Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$imY:1}
A.hV.prototype={
gaC(a){return B.jK},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int16Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$ikq:1}
A.hW.prototype={
gaC(a){return B.jL},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int32Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$ihq:1}
A.hX.prototype={
gaC(a){return B.jM},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int8Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$imZ:1}
A.eJ.prototype={
gaC(a){return B.jO},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint16Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$ino:1}
A.eK.prototype={
gaC(a){return B.jP},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint32Array(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1,
$ibA:1}
A.eL.prototype={
gaC(a){return B.jQ},
gn(a){return a.length},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.bn(b,c,a.length)))},
$iV:1}
A.cG.prototype={
gaC(a){return B.jR},
gn(a){return a.length},
l(a,b){A.bZ(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint8Array(a.subarray(b,A.bn(b,c,a.length)))},
hg(a,b){return this.bd(a,b,null)},
$iV:1,
$icG:1,
$ibm:1}
A.fo.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.b8.prototype={
m(a){return A.mp(v.typeUniverse,this,a)},
au(a){return A.tL(v.typeUniverse,this,a)}}
A.j9.prototype={}
A.jI.prototype={
A(a){return A.aQ(this.a,null)}}
A.j4.prototype={
A(a){return this.a}}
A.fz.prototype={$ibT:1}
A.lP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.lO.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.lQ.prototype={
$0(){this.a.$0()},
$S:8}
A.lR.prototype={
$0(){this.a.$0()},
$S:8}
A.ml.prototype={
hK(a,b){if(self.setTimeout!=null)self.setTimeout(A.d3(new A.mm(this,b),0),a)
else throw A.e(A.M("`setTimeout()` not found."))}}
A.mm.prototype={
$0(){this.b.$0()},
$S:1}
A.iU.prototype={
dg(a,b){var s,r=this,q=r.$ti
q.m("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.dz(b)
else{s=r.a
if(q.m("b1<1>").b(b))s.ev(b)
else s.dE(b)}},
e6(a,b){var s=this.a
if(this.b)s.co(a,b)
else s.eq(a,b)}}
A.mv.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.mw.prototype={
$2(a,b){this.a.$2(1,new A.eh(a,t.l.a(b)))},
$S:40}
A.mz.prototype={
$2(a,b){this.a(A.t(a),b)},
$S:41}
A.d0.prototype={
gJ(a){var s=this.b
return s==null?this.$ti.c.a(s):s},
kd(a,b){var s,r,q
a=A.t(a)
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
E(){var s,r,q,p,o=this,n=null,m=null,l=0
for(;!0;){s=o.d
if(s!=null)try{if(s.E()){o.sdw(J.qf(s))
return!0}else o.sdS(n)}catch(r){m=r
l=1
o.sdS(n)}q=o.kd(l,m)
if(1===q)return!0
if(0===q){o.sdw(n)
p=o.e
if(p==null||p.length===0){o.a=A.ph
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
l=0
m=null
continue}if(2===q){l=0
m=null
continue}if(3===q){m=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.sdw(n)
o.a=A.ph
throw m
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
l=1
continue}throw A.e(A.l3("sync*"))}return!1},
lL(a){var s,r,q=this
if(a instanceof A.d_){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.c.H(r,q.a)
q.a=s
return 2}else{q.sdS(J.bD(a))
return 2}},
sdw(a){this.b=this.$ti.m("1?").a(a)},
sdS(a){this.d=this.$ti.m("K<1>?").a(a)},
$iK:1}
A.d_.prototype={
gG(a){return new A.d0(this.a(),this.$ti.m("d0<1>"))}}
A.e9.prototype={
A(a){return A.B(this.a)},
$iW:1,
gcV(){return this.b}}
A.iX.prototype={
e6(a,b){var s
A.e4(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.e(A.l3("Future already completed"))
if(b==null)b=A.o0(a)
s.eq(a,b)},
fE(a){return this.e6(a,null)}}
A.cZ.prototype={
dg(a,b){var s,r=this.$ti
r.m("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.e(A.l3("Future already completed"))
s.dz(r.m("1/").a(b))},
kx(a){return this.dg(a,null)}}
A.bX.prototype={
l5(a){if((this.c&15)!==6)return!0
return this.b.b.ec(t.nU.a(this.d),a.a,t.v,t.K)},
kX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.U.b(q))p=l.lu(q,m,a.b,o,n,t.l)
else p=l.ec(t.x.a(q),m,o,n)
try{o=r.$ti.m("2/").a(p)
return o}catch(s){if(t.do.b(A.aS(s))){if((r.c&1)!==0)throw A.e(A.d8("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.d8("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.U.prototype={
fh(a){this.a=this.a&1|4
this.c=a},
ed(a,b,c){var s,r,q,p=this.$ti
p.au(c).m("1/(2)").a(a)
s=$.X
if(s===B.p){if(b!=null&&!t.U.b(b)&&!t.x.b(b))throw A.e(A.mS(b,"onError",u.c))}else{c.m("@<0/>").au(p.c).m("1(2)").a(a)
if(b!=null)b=A.uj(b,s)}r=new A.U(s,c.m("U<0>"))
q=b==null?1:3
this.cY(new A.bX(r,q,a,b,p.m("@<1>").au(c).m("bX<1,2>")))
return r},
lx(a,b){return this.ed(a,null,b)},
fm(a,b,c){var s,r=this.$ti
r.au(c).m("1/(2)").a(a)
s=new A.U($.X,c.m("U<0>"))
this.cY(new A.bX(s,19,a,b,r.m("@<1>").au(c).m("bX<1,2>")))
return s},
h2(a){var s,r
t.mY.a(a)
s=this.$ti
r=new A.U($.X,s)
this.cY(new A.bX(r,8,a,null,s.m("@<1>").au(s.c).m("bX<1,2>")))
return r},
kg(a){this.a=this.a&1|16
this.c=a},
d_(a){this.a=a.a&30|this.a&1
this.c=a.c},
cY(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.cY(a)
return}r.d_(s)}A.d2(null,null,r.b,t.M.a(new A.lY(r,a)))}},
e_(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.e_(a)
return}m.d_(n)}l.a=m.d9(a)
A.d2(null,null,m.b,t.M.a(new A.m4(l,m)))}},
d8(){var s=t.F.a(this.c)
this.c=null
return this.d9(s)},
d9(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ih(a){var s,r,q,p=this
p.a^=2
try{a.ed(new A.m1(p),new A.m2(p),t.P)}catch(q){s=A.aS(q)
r=A.aR(q)
A.va(new A.m3(p,s,r))}},
dE(a){var s,r=this
r.$ti.c.a(a)
s=r.d8()
r.a=8
r.c=a
A.e0(r,s)},
co(a,b){var s
t.l.a(b)
s=this.d8()
this.kg(A.k2(a,b))
A.e0(this,s)},
dz(a){var s=this.$ti
s.m("1/").a(a)
if(s.m("b1<1>").b(a)){this.ev(a)
return}this.i6(a)},
i6(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.d2(null,null,s.b,t.M.a(new A.m_(s,a)))},
ev(a){var s=this.$ti
s.m("b1<1>").a(a)
if(s.b(a)){A.tp(a,this)
return}this.ih(a)},
eq(a,b){this.a^=2
A.d2(null,null,this.b,t.M.a(new A.lZ(this,a,b)))},
$ib1:1}
A.lY.prototype={
$0(){A.e0(this.a,this.b)},
$S:1}
A.m4.prototype={
$0(){A.e0(this.b,this.a.a)},
$S:1}
A.m1.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.dE(p.$ti.c.a(a))}catch(q){s=A.aS(q)
r=A.aR(q)
p.co(s,r)}},
$S:14}
A.m2.prototype={
$2(a,b){this.a.co(t.K.a(a),t.l.a(b))},
$S:42}
A.m3.prototype={
$0(){this.a.co(this.b,this.c)},
$S:1}
A.m0.prototype={
$0(){A.pa(this.a.a,this.b)},
$S:1}
A.m_.prototype={
$0(){this.a.dE(this.b)},
$S:1}
A.lZ.prototype={
$0(){this.a.co(this.b,this.c)},
$S:1}
A.m7.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fX(t.mY.a(q.d),t.z)}catch(p){s=A.aS(p)
r=A.aR(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.k2(s,r)
o.b=!0
return}if(l instanceof A.U&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(l instanceof A.U){n=m.b.a
q=m.a
q.c=l.lx(new A.m8(n),t.z)
q.b=!1}},
$S:1}
A.m8.prototype={
$1(a){return this.a},
$S:20}
A.m6.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ec(o.m("2/(1)").a(p.d),m,o.m("2/"),n)}catch(l){s=A.aS(l)
r=A.aR(l)
q=this.a
q.c=A.k2(s,r)
q.b=!0}},
$S:1}
A.m5.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.l5(s)&&p.a.e!=null){p.c=p.a.kX(s)
p.b=!1}}catch(o){r=A.aS(o)
q=A.aR(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.k2(r,q)
n.b=!0}},
$S:1}
A.iV.prototype={}
A.f4.prototype={
gn(a){var s,r,q=this,p={},o=new A.U($.X,t.hy)
p.a=0
s=q.$ti
r=s.m("~(1)?").a(new A.l6(p,q))
t.Z.a(new A.l7(p,o))
A.lV(q.a,q.b,r,!1,s.c)
return o}}
A.l6.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.m("~(1)")}}
A.l7.prototype={
$0(){var s=this.b,r=s.$ti,q=r.m("1/").a(this.a.a),p=s.d8()
r.c.a(q)
s.a=8
s.c=q
A.e0(s,p)},
$S:1}
A.jw.prototype={}
A.fD.prototype={$ip7:1}
A.my.prototype={
$0(){A.qB(this.a,this.b)},
$S:1}
A.jq.prototype={
lv(a){var s,r,q
t.M.a(a)
try{if(B.p===$.X){a.$0()
return}A.px(null,null,this,a,t.Y)}catch(q){s=A.aS(q)
r=A.aR(q)
A.mx(t.K.a(s),t.l.a(r))}},
lw(a,b,c){var s,r,q
c.m("~(0)").a(a)
c.a(b)
try{if(B.p===$.X){a.$1(b)
return}A.py(null,null,this,a,b,t.Y,c)}catch(q){s=A.aS(q)
r=A.aR(q)
A.mx(t.K.a(s),t.l.a(r))}},
fA(a){return new A.mf(this,t.M.a(a))},
kr(a,b){return new A.mg(this,b.m("~(0)").a(a),b)},
fX(a,b){b.m("0()").a(a)
if($.X===B.p)return a.$0()
return A.px(null,null,this,a,b)},
ec(a,b,c,d){c.m("@<0>").au(d).m("1(2)").a(a)
d.a(b)
if($.X===B.p)return a.$1(b)
return A.py(null,null,this,a,b,c,d)},
lu(a,b,c,d,e,f){d.m("@<0>").au(e).au(f).m("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.X===B.p)return a.$2(b,c)
return A.uk(null,null,this,a,b,c,d,e,f)},
fW(a,b,c,d){return b.m("@<0>").au(c).au(d).m("1(2,3)").a(a)}}
A.mf.prototype={
$0(){return this.a.lv(this.b)},
$S:1}
A.mg.prototype={
$1(a){var s=this.c
return this.a.lw(this.b,s.a(a),s)},
$S(){return this.c.m("~(0)")}}
A.fj.prototype={
gG(a){var s=this,r=new A.fk(s,s.r,s.$ti.m("fk<1>"))
r.c=s.e
return r},
gn(a){return this.a},
bG(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.W.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.W.a(r[b])!=null}else return this.ii(b)},
ii(a){var s=this.d
if(s==null)return!1
return this.eK(s[J.c3(a)&1073741823],a)>=0},
H(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ex(s==null?q.b=A.nu():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ex(r==null?q.c=A.nu():r,b)}else return q.i2(0,b)},
i2(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.nu()
r=J.c3(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.dD(b)]
else{if(p.eK(q,b)>=0)return!1
q.push(p.dD(b))}return!0},
ex(a,b){this.$ti.c.a(b)
if(t.W.a(a[b])!=null)return!1
a[b]=this.dD(b)
return!0},
dD(a){var s=this,r=new A.jf(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
eK(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bd(a[r].a,b))return r
return-1}}
A.jf.prototype={}
A.fk.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.bG(q))
else if(r==null){s.sck(null)
return!1}else{s.sck(s.$ti.m("1?").a(r.a))
s.c=r.b
return!0}},
sck(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.kD.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:12}
A.m.prototype={
gG(a){return new A.cD(a,this.gn(a),A.ai(a).m("cD<m.E>"))},
a7(a,b){return this.l(a,b)},
gfN(a){return this.gn(a)!==0},
bG(a,b){var s,r=this.gn(a)
for(s=0;s<r;++s){if(J.bd(this.l(a,s),b))return!0
if(r!==this.gn(a))throw A.e(A.bG(a))}return!1},
dh(a,b){var s,r
A.ai(a).m("ao(m.E)").a(b)
s=this.gn(a)
for(r=0;r<s;++r){if(!A.jV(b.$1(this.l(a,r))))return!1
if(s!==this.gn(a))throw A.e(A.bG(a))}return!0},
cf(a,b){var s=A.ai(a)
return new A.b_(a,s.m("ao(m.E)").a(b),s.m("b_<m.E>"))},
eh(a,b){return A.nl(a,b,null,A.ai(a).m("m.E"))},
b6(a,b){var s,r,q,p,o=this
if(o.gn(a)===0){s=J.eB(0,A.ai(a).m("m.E"))
return s}r=o.l(a,0)
q=A.aj(o.gn(a),r,!0,A.ai(a).m("m.E"))
for(p=1;p<o.gn(a);++p)B.c.h(q,p,o.l(a,p))
return q},
cd(a){return this.b6(a,!0)},
bd(a,b,c){var s,r=this.gn(a)
A.b7(b,c,r)
A.b7(b,c,this.gn(a))
s=A.ai(a).m("m.E")
return A.hN(A.nl(a,b,c,s),!0,s)},
aL(a,b,c,d){var s
A.ai(a).m("m.E?").a(d)
A.b7(b,c,this.gn(a))
for(s=b;s<c;++s)this.h(a,s,d)},
aj(a,b,c,d,e){var s,r,q,p,o=A.ai(a)
o.m("f<m.E>").a(d)
A.b7(b,c,this.gn(a))
s=c-b
if(s===0)return
A.io(e,"skipCount")
if(o.m("k<m.E>").b(d)){r=e
q=d}else{q=J.o_(d,e).b6(0,!1)
r=0}o=J.aa(q)
if(r+s>o.gn(q))throw A.e(A.ou())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.l(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.l(q,r+p))},
by(a,b,c,d){return this.aj(a,b,c,d,0)},
ha(a,b,c){A.ai(a).m("f<m.E>").a(c)
this.by(a,b,b+c.length,c)},
A(a){return A.n_(a,"[","]")},
$if:1,
$ik:1}
A.P.prototype={
ag(a,b){var s,r,q,p=A.ai(a)
p.m("~(P.K,P.V)").a(b)
for(s=J.bD(this.gbk(a)),p=p.m("P.V");s.E();){r=s.gJ(s)
q=this.l(a,r)
b.$2(r,q==null?p.a(q):q)}},
gn(a){return J.c4(this.gbk(a))},
gaR(a){return J.qg(this.gbk(a))},
gbD(a){var s=A.ai(a)
return new A.fl(a,s.m("@<P.K>").au(s.m("P.V")).m("fl<1,2>"))},
A(a){return A.n7(a)},
$ia7:1}
A.kG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:11}
A.fl.prototype={
gn(a){return J.c4(this.a)},
gG(a){var s=this.a,r=this.$ti
return new A.fm(J.bD(J.qh(s)),s,r.m("@<1>").au(r.z[1]).m("fm<1,2>"))}}
A.fm.prototype={
E(){var s=this,r=s.a
if(r.E()){s.sck(J.d7(s.b,r.gJ(r)))
return!0}s.sck(null)
return!1},
gJ(a){var s=this.c
return s==null?this.$ti.z[1].a(s):s},
sck(a){this.c=this.$ti.m("2?").a(a)},
$iK:1}
A.dS.prototype={
b6(a,b){return A.z(this,!0,this.$ti.c)},
cd(a){return this.b6(a,!0)},
A(a){return A.n_(this,"{","}")},
cf(a,b){var s=this.$ti
return new A.b_(this,s.m("ao(1)").a(b),s.m("b_<1>"))},
$if:1}
A.ft.prototype={}
A.ll.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:13}
A.lk.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:13}
A.mo.prototype={
c0(a){var s,r,q=a.length,p=A.b7(0,null,q)-0,o=new Uint8Array(p)
for(s=0;s<p;++s){if(!(s<q))return A.a(a,s)
r=a.charCodeAt(s)
if((r&4294967040)!==0)throw A.e(A.mS(a,"string","Contains invalid characters."))
if(!(s<p))return A.a(o,s)
o[s]=r}return o}}
A.mn.prototype={
c0(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.b7(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.e(A.oc("Invalid value in input: "+p,null,null))
return this.ik(a,0,r)}}return A.l8(a,0,r)},
ik(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.a1((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.co.prototype={}
A.fX.prototype={}
A.h6.prototype={}
A.eF.prototype={
A(a){var s=A.eg(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hJ.prototype={
A(a){return"Cyclic error in JSON stringify"}}
A.hI.prototype={
fK(a,b){var s=A.tt(a,this.gkQ().b,null)
return s},
gkQ(){return B.cy}}
A.kz.prototype={}
A.md.prototype={
h4(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.t.cX(a,r,q)
r=q+1
s.a+=A.a1(92)
s.a+=A.a1(117)
s.a+=A.a1(100)
o=p>>>8&15
s.a+=A.a1(o<10?48+o:87+o)
o=p>>>4&15
s.a+=A.a1(o<10?48+o:87+o)
o=p&15
s.a+=A.a1(o<10?48+o:87+o)}}continue}if(p<32){if(q>r)s.a+=B.t.cX(a,r,q)
r=q+1
s.a+=A.a1(92)
switch(p){case 8:s.a+=A.a1(98)
break
case 9:s.a+=A.a1(116)
break
case 10:s.a+=A.a1(110)
break
case 12:s.a+=A.a1(102)
break
case 13:s.a+=A.a1(114)
break
default:s.a+=A.a1(117)
s.a+=A.a1(48)
s.a+=A.a1(48)
o=p>>>4&15
s.a+=A.a1(o<10?48+o:87+o)
o=p&15
s.a+=A.a1(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=B.t.cX(a,r,q)
r=q+1
s.a+=A.a1(92)
s.a+=A.a1(p)}}if(r===0)s.a+=a
else if(r<m)s.a+=B.t.cX(a,r,m)},
dB(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.hJ(a,null))}B.c.H(s,a)},
dq(a){var s,r,q,p,o=this
if(o.h3(a))return
o.dB(a)
try{s=o.b.$1(a)
if(!o.h3(s)){q=A.oz(a,null,o.gf7())
throw A.e(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.aS(p)
q=A.oz(a,r,o.gf7())
throw A.e(q)}},
h3(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.A(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.h4(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dB(a)
q.lE(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dB(a)
r=q.lF(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
lE(a){var s,r,q=this.c
q.a+="["
s=J.aa(a)
if(s.gfN(a)){this.dq(s.l(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.dq(s.l(a,r))}}q.a+="]"},
lF(a){var s,r,q,p,o,n=this,m={},l=J.aa(a)
if(l.gaR(a)){n.c.a+="{}"
return!0}s=l.gn(a)*2
r=A.aj(s,null,!1,t.O)
q=m.a=0
m.b=!0
l.ag(a,new A.me(m,r))
if(!m.b)return!1
l=n.c
l.a+="{"
for(p='"';q<s;q+=2,p=',"'){l.a+=p
n.h4(A.av(r[q]))
l.a+='":'
o=q+1
if(!(o<s))return A.a(r,o)
n.dq(r[o])}l.a+="}"
return!0}}
A.me.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.h(s,r.a++,a)
B.c.h(s,r.a++,b)},
$S:11}
A.mc.prototype={
gf7(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hK.prototype={
bS(a,b){var s
t.L.a(b)
s=B.cz.c0(b)
return s}}
A.kB.prototype={}
A.kA.prototype={}
A.iL.prototype={
kG(a,b,c){t.L.a(b)
return(c===!0?B.bS:B.jS).c0(b)}}
A.iM.prototype={
c0(a){var s,r
t.L.a(a)
s=this.a
r=A.rw(s,a,0,null)
if(r!=null)return r
return new A.mq(s).kC(a,0,null,!0)}}
A.mq.prototype={
kC(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.b7(b,c,a.length)
if(b===s)return""
r=A.tO(a,b,s)
q=n.dF(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.tP(p)
n.b=0
throw A.e(A.oc(o,a,b+n.c))}return q},
dF(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.U(b+c,2)
r=q.dF(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dF(a,s,c,d)}return q.kK(a,b,c,d)},
kK(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.cU(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){e.a+=A.a1(f)
if(d===a0)break $label0$0
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:e.a+=A.a1(h)
break
case 65:e.a+=A.a1(h);--d
break
default:p=e.a+=A.a1(h)
e.a=p+A.a1(h)
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break $label0$0
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){while(!0){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
e.a+=A.a1(a[l])}else e.a+=A.l8(a,d,n)
if(n===a0)break $label0$0
d=o}else d=o}if(a1&&g>32)if(r)e.a+=A.a1(h)
else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.bH.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.bH&&this.a===b.a&&this.b===b.b},
gC(a){var s=this.a
return(s^B.a.j(s,30))&1073741823},
h0(){if(this.b)return this
return A.qx(this.a,!0)},
A(a){var s=this,r=A.qy(A.rf(s)),q=A.h1(A.rd(s)),p=A.h1(A.r9(s)),o=A.h1(A.ra(s)),n=A.h1(A.rc(s)),m=A.h1(A.re(s)),l=A.qz(A.rb(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.h5.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.h5&&this.a===b.a},
gC(a){return B.a.gC(this.a)},
A(a){var s,r,q,p,o,n=this.a,m=B.a.U(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.U(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.U(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.t.ld(B.a.A(n%1e6),6,"0")}}
A.lU.prototype={
A(a){return this.ai()}}
A.W.prototype={
gcV(){return A.aR(this.$thrownJsError)}}
A.e8.prototype={
A(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eg(s)
return"Assertion failed"}}
A.bT.prototype={}
A.bq.prototype={
gdK(){return"Invalid argument"+(!this.a?"(s)":"")},
gdJ(){return""},
A(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.B(p),n=s.gdK()+q+o
if(!s.a)return n
return n+s.gdJ()+": "+A.eg(s.ge8())},
ge8(){return this.b}}
A.f0.prototype={
ge8(){return A.tT(this.b)},
gdK(){return"RangeError"},
gdJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.hm.prototype={
ge8(){return A.t(this.b)},
gdK(){return"RangeError"},
gdJ(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.iJ.prototype={
A(a){return"Unsupported operation: "+this.a}}
A.iH.prototype={
A(a){return"UnimplementedError: "+this.a}}
A.dU.prototype={
A(a){return"Bad state: "+this.a}}
A.fW.prototype={
A(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eg(s)+"."}}
A.i0.prototype={
A(a){return"Out of Memory"},
gcV(){return null},
$iW:1}
A.f3.prototype={
A(a){return"Stack Overflow"},
gcV(){return null},
$iW:1}
A.lX.prototype={
A(a){return"Exception: "+this.a}}
A.he.prototype={
A(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.B(q)+")"):r}}
A.f.prototype={
cf(a,b){var s=A.q(this)
return new A.b_(this,s.m("ao(f.E)").a(b),s.m("b_<f.E>"))},
dh(a,b){var s
A.q(this).m("ao(f.E)").a(b)
for(s=this.gG(this);s.E();)if(!A.jV(b.$1(s.gJ(s))))return!1
return!0},
b6(a,b){return A.z(this,!0,A.q(this).m("f.E"))},
cd(a){return this.b6(a,!0)},
gn(a){var s,r=this.gG(this)
for(s=0;r.E();)++s
return s},
gaR(a){return!this.gG(this).E()},
a7(a,b){var s,r
A.io(b,"index")
s=this.gG(this)
for(r=b;s.E();){if(r===0)return s.gJ(s);--r}throw A.e(A.a6(b,b-r,this,"index"))},
A(a){return A.qV(this,"(",")")}}
A.a8.prototype={
gC(a){return A.Q.prototype.gC.call(this,this)},
A(a){return"null"}}
A.Q.prototype={$iQ:1,
R(a,b){return this===b},
gC(a){return A.eX(this)},
A(a){return"Instance of '"+A.kS(this)+"'"},
gaC(a){return A.uV(this)},
toString(){return this.A(this)}}
A.jz.prototype={
A(a){return""},
$iby:1}
A.cU.prototype={
gn(a){return this.a.length},
A(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iro:1}
A.w.prototype={}
A.fJ.prototype={
gn(a){return a.length}}
A.fK.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.fL.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.c6.prototype={$ic6:1}
A.br.prototype={
gn(a){return a.length}}
A.fY.prototype={
gn(a){return a.length}}
A.S.prototype={$iS:1}
A.dm.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.k8.prototype={}
A.aw.prototype={}
A.bf.prototype={}
A.fZ.prototype={
gn(a){return a.length}}
A.h_.prototype={
gn(a){return a.length}}
A.h0.prototype={
gn(a){return a.length}}
A.dn.prototype={$idn:1}
A.h2.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.ec.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.q.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.ed.prototype={
A(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.B(r)+", "+A.B(s)+") "+A.B(this.gX(a))+" x "+A.B(this.gM(a))},
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
if(s===r){s=J.d6(b)
s=this.gX(a)===s.gX(b)&&this.gM(a)===s.gM(b)}else s=!1}else s=!1}else s=!1
return s},
gC(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.n8(r,s,this.gX(a),this.gM(a))},
geT(a){return a.height},
gM(a){var s=this.geT(a)
s.toString
return s},
gfu(a){return a.width},
gX(a){var s=this.gfu(a)
s.toString
return s},
$ibw:1}
A.h3.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){A.av(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.h4.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.v.prototype={
A(a){var s=a.localName
s.toString
return s}}
A.o.prototype={$io:1}
A.j.prototype={
e3(a,b,c,d){t.y.a(c)
if(c!=null)this.i3(a,b,c,!1)},
i3(a,b,c,d){return a.addEventListener(b,A.d3(t.y.a(c),1),!1)},
kc(a,b,c,d){return a.removeEventListener(b,A.d3(t.y.a(c),1),!1)},
$ij:1}
A.aF.prototype={$iaF:1}
A.dr.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.dY.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1,
$idr:1}
A.hc.prototype={
gn(a){return a.length}}
A.hd.prototype={
gn(a){return a.length}}
A.aG.prototype={$iaG:1}
A.hg.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.cs.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.dy.prototype={$idy:1}
A.hO.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.hP.prototype={
gn(a){return a.length}}
A.bO.prototype={$ibO:1}
A.cF.prototype={
e3(a,b,c,d){t.y.a(c)
if(b==="message")a.start()
this.hk(a,b,c,!1)},
fT(a,b,c){t.nW.a(c)
if(c!=null){this.jE(a,new A.jA([],[]).bN(b),c)
return}a.postMessage(new A.jA([],[]).bN(b))
return},
le(a,b){return this.fT(a,b,null)},
jE(a,b,c){return a.postMessage(b,t.ez.a(c))},
$icF:1}
A.hQ.prototype={
l(a,b){return A.ck(a.get(A.av(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ck(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.kH(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.kI(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaR(a){var s=a.size
s.toString
return s===0},
$ia7:1}
A.kH.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.kI.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.hR.prototype={
l(a,b){return A.ck(a.get(A.av(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ck(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.kJ(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.kK(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaR(a){var s=a.size
s.toString
return s===0},
$ia7:1}
A.kJ.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.kK.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.aH.prototype={$iaH:1}
A.hS.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ib.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.J.prototype={
A(a){var s=a.nodeValue
return s==null?this.hl(a):s},
$iJ:1}
A.eM.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.aI.prototype={
gn(a){return a.length},
$iaI:1}
A.i6.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.d8.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.ip.prototype={
l(a,b){return A.ck(a.get(A.av(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ck(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.kZ(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.l_(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaR(a){var s=a.size
s.toString
return s===0},
$ia7:1}
A.kZ.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.l_.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.ir.prototype={
gn(a){return a.length}}
A.dT.prototype={$idT:1}
A.aJ.prototype={$iaJ:1}
A.is.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ls.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.aK.prototype={$iaK:1}
A.it.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.cA.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.aL.prototype={
gn(a){return a.length},
$iaL:1}
A.iv.prototype={
l(a,b){return a.getItem(A.av(b))},
ag(a,b){var s,r,q
t.bm.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.l4(s))
return s},
gbD(a){var s=A.b([],t.s)
this.ag(a,new A.l5(s))
return s},
gn(a){var s=a.length
s.toString
return s},
gaR(a){return a.key(0)==null},
$ia7:1}
A.l4.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:15}
A.l5.prototype={
$2(a,b){return B.c.H(this.a,b)},
$S:15}
A.at.prototype={$iat:1}
A.aM.prototype={$iaM:1}
A.au.prototype={$iau:1}
A.iy.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.gJ.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.iz.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.dR.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.iD.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.aN.prototype={$iaN:1}
A.iE.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ki.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.iF.prototype={
gn(a){return a.length}}
A.iK.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.iQ.prototype={
gn(a){return a.length}}
A.ch.prototype={}
A.iY.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.d5.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.fg.prototype={
A(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.B(p)+", "+A.B(s)+") "+A.B(r)+" x "+A.B(q)},
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
r=J.d6(b)
if(s===r.gX(b)){s=a.height
s.toString
r=s===r.gM(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gC(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.n8(p,s,r,q)},
geT(a){return a.height},
gM(a){var s=a.height
s.toString
return s},
gfu(a){return a.width},
gX(a){var s=a.width
s.toString
return s}}
A.ja.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
return a[b]},
h(a,b,c){t.ef.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.fn.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.ju.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.hI.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.jB.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.e(A.a6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ll.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iG:1,
$iI:1,
$if:1,
$ik:1}
A.mU.prototype={}
A.j5.prototype={}
A.fh.prototype={
e4(a){var s,r=this,q=r.b
if(q==null)return $.nV()
s=r.d
if(s!=null)J.qb(q,r.c,t.y.a(s),!1)
r.b=null
r.sjq(null)
return $.nV()},
sjq(a){this.d=t.y.a(a)},
$irn:1}
A.lW.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:22}
A.x.prototype={
gG(a){return new A.em(a,this.gn(a),A.ai(a).m("em<x.E>"))},
aj(a,b,c,d,e){A.ai(a).m("f<x.E>").a(d)
throw A.e(A.M("Cannot setRange on immutable List."))},
by(a,b,c,d){return this.aj(a,b,c,d,0)},
aL(a,b,c,d){A.ai(a).m("x.E?").a(d)
throw A.e(A.M("Cannot modify an immutable List."))}}
A.em.prototype={
E(){var s=this,r=s.c+1,q=s.b
if(r<q){s.seV(J.d7(s.a,r))
s.c=r
return!0}s.seV(null)
s.c=q
return!1},
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
seV(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.iZ.prototype={}
A.j0.prototype={}
A.j1.prototype={}
A.j2.prototype={}
A.j3.prototype={}
A.j7.prototype={}
A.j8.prototype={}
A.jb.prototype={}
A.jc.prototype={}
A.jg.prototype={}
A.jh.prototype={}
A.ji.prototype={}
A.jj.prototype={}
A.jk.prototype={}
A.jl.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.jr.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.js.prototype={}
A.jt.prototype={}
A.jv.prototype={}
A.jC.prototype={}
A.jD.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.jE.prototype={}
A.jF.prototype={}
A.jK.prototype={}
A.jL.prototype={}
A.jM.prototype={}
A.jN.prototype={}
A.jO.prototype={}
A.jP.prototype={}
A.jQ.prototype={}
A.jR.prototype={}
A.jS.prototype={}
A.jT.prototype={}
A.mi.prototype={
cb(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.c.H(r,a)
B.c.H(this.b,null)
return q},
bN(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(A.d1(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.bH)return new Date(a.a)
if(t.dY.b(a))return a
if(t.fj.b(a))return a
if(t.kL.b(a))return a
if(t.ad.b(a))return a
if(t.hH.b(a)||t.hX.b(a)||t.oA.b(a)||t.kI.b(a))return a
if(t.f.b(a)){s=o.cb(a)
r=o.b
if(!(s<r.length))return A.a(r,s)
q=n.a=r[s]
if(q!=null)return q
q={}
n.a=q
B.c.h(r,s,q)
J.nY(a,new A.mj(n,o))
return n.a}if(t.j.b(a)){s=o.cb(a)
n=o.b
if(!(s<n.length))return A.a(n,s)
q=n[s]
if(q!=null)return q
return o.kE(a,s)}if(t.bp.b(a)){s=o.cb(a)
r=o.b
if(!(s<r.length))return A.a(r,s)
q=n.b=r[s]
if(q!=null)return q
p={}
p.toString
n.b=p
B.c.h(r,s,p)
o.kV(a,new A.mk(n,o))
return n.b}throw A.e(A.lj("structured clone of other type"))},
kE(a,b){var s,r=J.aa(a),q=r.gn(a),p=new Array(q)
p.toString
B.c.h(this.b,b,p)
for(s=0;s<q;++s)B.c.h(p,s,this.bN(r.l(a,s)))
return p}}
A.mj.prototype={
$2(a,b){this.a.a[a]=this.b.bN(b)},
$S:12}
A.mk.prototype={
$2(a,b){this.a.b[a]=this.b.bN(b)},
$S:23}
A.lM.prototype={
cb(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.c.H(r,a)
B.c.H(this.b,null)
return q},
bN(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.d1(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.ad(A.d8("DateTime is outside valid range: "+s,null))
A.e4(!0,"isUtc",t.v)
return new A.bH(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.e(A.lj("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.v7(a,t.z)
if(A.pK(a)){q=j.cb(a)
s=j.b
if(!(q<s.length))return A.a(s,q)
p=s[q]
if(p!=null)return p
r=t.z
o=A.a0(r,r)
B.c.h(s,q,o)
j.kU(a,new A.lN(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
q=j.cb(s)
r=j.b
if(!(q<r.length))return A.a(r,q)
p=r[q]
if(p!=null)return p
n=J.aa(s)
m=n.gn(s)
if(j.c){l=new Array(m)
l.toString
p=l}else p=s
B.c.h(r,q,p)
for(r=J.ac(p),k=0;k<m;++k)r.h(p,k,j.bN(n.l(s,k)))
return p}return a},
fG(a,b){this.c=!0
return this.bN(a)}}
A.lN.prototype={
$2(a,b){var s=this.a.bN(b)
this.b.h(0,a,s)
return s},
$S:24}
A.jA.prototype={
kV(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.iS.prototype={
kU(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.mN.prototype={
$1(a){return this.a.dg(0,this.b.m("0/?").a(a))},
$S:5}
A.mO.prototype={
$1(a){if(a==null)return this.a.fE(new A.kM(a===undefined))
return this.a.fE(a)},
$S:5}
A.kM.prototype={
A(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.b2.prototype={$ib2:1}
A.hL.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.e(A.a6(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.kT.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$if:1,
$ik:1}
A.b3.prototype={$ib3:1}
A.hZ.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.e(A.a6(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.ai.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$if:1,
$ik:1}
A.ia.prototype={
gn(a){return a.length}}
A.iw.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.e(A.a6(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){A.av(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$if:1,
$ik:1}
A.ba.prototype={$iba:1}
A.iG.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.e(A.a6(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.hk.a(c)
throw A.e(A.M("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$if:1,
$ik:1}
A.jd.prototype={}
A.je.prototype={}
A.jm.prototype={}
A.jn.prototype={}
A.jx.prototype={}
A.jy.prototype={}
A.jG.prototype={}
A.jH.prototype={}
A.fN.prototype={
gn(a){return a.length}}
A.fO.prototype={
l(a,b){return A.ck(a.get(A.av(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ck(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.k3(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.k4(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaR(a){var s=a.size
s.toString
return s===0},
$ia7:1}
A.k3.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.k4.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.fP.prototype={
gn(a){return a.length}}
A.c5.prototype={}
A.i_.prototype={
gn(a){return a.length}}
A.iW.prototype={}
A.k1.prototype={}
A.hp.prototype={}
A.ho.prototype={
gn(a){var s=this.e
s===$&&A.c("_length")
return s-(this.b-this.c)},
gcG(){var s=this.b,r=this.e
r===$&&A.c("_length")
return s>=this.c+r},
B(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
ab(a){var s,r,q,p=this,o=p.c,n=p.b-o+o
if(a<0){s=p.e
s===$&&A.c("_length")
r=s-(n-o)}else r=a
q=A.cB(p.a,p.d,r,n)
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
return A.N(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.H(J.k0(m,s,q>p?p:q)))}}
A.kQ.prototype={}
A.kO.prototype={
V(a){var s,r,q=this
if(q.a===q.c.length)q.jr()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
dn(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(a)
if(b==null)b=a.length
for(;s=k.a,r=s+b,q=k.c,p=q.length,r>p;)k.dV(r-p)
if(b===1){if(0>=a.length)return A.a(a,0)
o=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=o}else if(b===2){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
o=a[1]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===3){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
o=a[2]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===4){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
o=a[3]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===5){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
o=a[4]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===6){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
o=a[5]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===7){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
o=a[6]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===8){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
o=a[7]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===9){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
m=a[7]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+8
if(8>=o)return A.a(a,8)
o=a[8]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===10){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
m=a[7]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+8
if(8>=o)return A.a(a,8)
n=a[8]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+9
if(9>=o)return A.a(a,9)
o=a[9]
if(!(n<p))return A.a(q,n)
q[n]=o}else for(o=a.length,l=0;l<b;++l,++s){if(!(l<o))return A.a(a,l)
n=a[l]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n}k.a=r},
b8(a){return this.dn(a,null)},
lD(a){var s,r,q,p,o=this,n=a.c
while(!0){s=o.a
r=a.e
r===$&&A.c("_length")
r=s+(r-(a.b-n))
q=o.c
p=q.length
if(!(r>p))break
o.dV(r-p)}B.k.aj(q,s,s+a.gn(a),a.a,a.b)
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
ei(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.N(s.c.buffer,a,b-a)},
af(a){return this.ei(a,null)},
dV(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.k.by(p,0,q,r)
this.c=p},
jr(){return this.dV(null)},
gn(a){return this.a}}
A.ms.prototype={
cB(a,b){var s,r,q,p,o=a.B(),n=a.B(),m=o&8
B.a.j(o,3)
if(m!==8)throw A.e(A.e6("Only DEFLATE compression supported: "+m))
if(B.a.a2((o<<8>>>0)+n,31)!==0)throw A.e(A.e6("Invalid FCHECK"))
if((n>>>5&1)!==0){a.k()
throw A.e(A.e6("FDICT Encoding not currently supported"))}s=A.dt(B.b8)
r=A.dt(B.bi)
q=A.kP(0,null)
r=new A.hn(a,q,s,r)
r.b=!0
r.eW()
p=t.L.a(A.N(q.c.buffer,0,q.a))
a.k()
return p}}
A.ka.prototype={
iN(a){var s,r,q,p,o=this
if(a>4||!1)throw A.e(A.e6("Invalid Deflate Parameter"))
s=o.x
s===$&&A.c("_pending")
if(s!==0)o.d4()
if(o.c.gcG()){s=o.k3
s===$&&A.c("_lookAhead")
if(s===0)s=a!==0&&o.e!==666
else s=!0}else s=!0
if(s){switch($.bs.cu().e){case 0:r=o.iQ(a)
break
case 1:r=o.iO(a)
break
case 2:r=o.iP(a)
break
default:r=-1
break}s=r===2
if(s||r===3)o.e=666
if(r===0||s)return 0
if(r===1){if(a===1){o.aw(2,3)
o.ca(256,B.a5)
o.fz()
s=o.bJ
s===$&&A.c("_lastEOBLen")
q=o.b4
q===$&&A.c("_numValidBits")
if(1+s+10-q<9){o.aw(2,3)
o.ca(256,B.a5)
o.fz()}o.bJ=7}else{o.fn(0,0,!1)
if(a===3){s=o.db
s===$&&A.c("_hashSize")
q=o.cx
p=0
for(;p<s;++p){q===$&&A.c("_head")
if(!(p<q.length))return A.a(q,p)
q[p]=0}}}o.d4()}}if(a!==4)return 0
return 1},
jl(){var s,r,q,p=this,o=p.as
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
o.aP=o.bU=o.aQ=o.bI=0},
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
p=A.o7(a,p,n[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(n,r)
if(A.o7(a,s,n[r],q))break
p=n[r]
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=r<<1>>>0
b=r
r=o}if(!(b>=0&&b<573))return A.a(n,b)
n[b]=s},
ff(a,b){var s,r,q,p,o,n,m,l,k,j="_bitLengthTree",i=a.length
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
i9(){var s,r,q=this,p=q.p2
p===$&&A.c("_dynamicLengthTree")
s=q.R8.b
s===$&&A.c("maxCode")
q.ff(p,s)
s=q.p3
s===$&&A.c("_dynamicDistTree")
p=q.RG.b
p===$&&A.c("maxCode")
q.ff(s,p)
q.rx.dA(q)
for(p=q.p4,r=18;r>=3;--r){p===$&&A.c("_bitLengthTree")
s=B.a4[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.aQ
p===$&&A.c("_optimalLen")
q.aQ=p+(3*(r+1)+5+5+4)
return r},
kf(a,b,c){var s,r,q,p,o=this
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
o.fg(q,a-1)
q=o.p3
q===$&&A.c("_dynamicDistTree")
o.fg(q,s)},
fg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_bitLengthTree",e=a.length
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
jL(a,b,c){var s,r,q,p,o,n
if(c===0)return
s=this.x
s===$&&A.c("_pending")
r=this.f
q=a.length
p=s
o=0
for(;o<c;++o,++p){r===$&&A.c("_pendingBuffer")
n=o+b
if(!(n>=0&&n<q))return A.a(a,n)
n=a[n]
if(!(p>=0&&p<r.length))return A.a(r,p)
r[p]=n}this.x=s+c},
be(a){var s,r=this.f
r===$&&A.c("_pendingBuffer")
s=this.x
s===$&&A.c("_pending")
this.x=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
ca(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.aw(q&65535,b[s]&65535)},
aw(a,b){var s,r=this,q="_bitBuffer",p=r.b4
p===$&&A.c("_numValidBits")
s=r.b3
if(p>16-b){s===$&&A.c(q)
p=r.b3=(s|B.a.W(a,p)&65535)>>>0
r.be(p)
r.be(A.aP(p,8))
r.b3=A.aP(a,16-r.b4)
r.b4=r.b4+(b-16)}else{s===$&&A.c(q)
r.b3=(s|B.a.W(a,p)&65535)>>>0
r.b4=p+b}},
cw(a,b){var s,r,q,p,o,n=this,m="_dynamicLengthTree",l="_matches",k="_dynamicDistTree",j=n.f
j===$&&A.c("_pendingBuffer")
s=n.bh
s===$&&A.c("_dbuf")
r=n.aP
r===$&&A.c("_lastLit")
r=s+r*2
s=A.aP(a,8)
if(!(r<j.length))return A.a(j,r)
j[r]=s
s=n.f
r=n.bh
j=n.aP
r=r+j*2+1
q=s.length
if(!(r<q))return A.a(s,r)
s[r]=a
r=n.y1
r===$&&A.c("_lbuf")
r+=j
if(!(r<q))return A.a(s,r)
s[r]=b
n.aP=j+1
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
j=A.pb(a-1)*2
if(!(j<122))return A.a(s,j)
s[j]=s[j]+1}j=n.aP
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
p+=r[q]*(5+B.S[o])}p=A.aP(p,3)
r=n.bU
r===$&&A.c(l)
q=n.aP
if(r<q/2&&p<(j-s)/2)return!0
j=q}s=n.y2
s===$&&A.c("_litBufferSize")
return j===s-1},
ey(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.aP
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
if(o===0)k.ca(n,a)
else{m=B.ao[n]
k.ca(m+256+1,a)
if(!(m<29))return A.a(B.au,m)
l=B.au[m]
if(l!==0)k.aw(n-B.hv[m],l);--o
m=A.pb(o)
k.ca(m,b)
if(!(m<30))return A.a(B.S,m)
l=B.S[m]
if(l!==0)k.aw(o-B.hn[m],l)}}while(s<k.aP)}k.ca(256,a)
if(513>=a.length)return A.a(a,513)
k.bJ=a[513]},
hb(){var s,r,q,p,o,n="_dynamicLengthTree"
for(s=this.p2,r=0,q=0;r<7;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}for(;r<256;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.aP(o,2)?0:1},
fz(){var s=this,r="_bitBuffer",q=s.b4
q===$&&A.c("_numValidBits")
if(q===16){q=s.b3
q===$&&A.c(r)
s.be(q)
s.be(A.aP(q,8))
s.b4=s.b3=0}else if(q>=8){q=s.b3
q===$&&A.c(r)
s.be(q)
s.b3=A.aP(s.b3,8)
s.b4=s.b4-8}},
er(){var s=this,r="_bitBuffer",q=s.b4
q===$&&A.c("_numValidBits")
if(q>8){q=s.b3
q===$&&A.c(r)
s.be(q)
s.be(A.aP(q,8))}else if(q>0){q=s.b3
q===$&&A.c(r)
s.be(q)}s.b4=s.b3=0},
bQ(a){var s,r,q,p,o,n=this,m=n.fx
m===$&&A.c("_blockStart")
if(m>=0)s=m
else s=-1
r=n.k1
r===$&&A.c("_strStart")
m=r-m
r=n.ok
r===$&&A.c("_level")
if(r>0){if(n.y===2)n.hb()
n.R8.dA(n)
n.RG.dA(n)
q=n.i9()
r=n.aQ
r===$&&A.c("_optimalLen")
p=A.aP(r+3+7,3)
r=n.bI
r===$&&A.c("_staticLen")
o=A.aP(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.fn(s,m,a)
else if(o===p){n.aw(2+(a?1:0),3)
n.ey(B.a5,B.bg)}else{n.aw(4+(a?1:0),3)
m=n.R8.b
m===$&&A.c("maxCode")
s=n.RG.b
s===$&&A.c("maxCode")
n.kf(m+1,s+1,q+1)
s=n.p2
s===$&&A.c("_dynamicLengthTree")
m=n.p3
m===$&&A.c("_dynamicDistTree")
n.ey(s,m)}n.eX()
if(a)n.er()
n.fx=n.k1
n.d4()},
iQ(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.c("_pendingBufferSize")
s=m-5
s=65535>s?s:65535
for(m=a===0;!0;){r=n.k3
r===$&&A.c("_lookAhead")
if(r<=1){n.dM()
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
fn(a,b,c){var s,r=this
r.aw(c?1:0,3)
r.er()
r.bJ=8
r.be(b)
r.be(A.aP(b,8))
s=(~b>>>0)+65536&65535
r.be(s)
r.be(A.aP(s,8))
s=r.ay
s===$&&A.c("_window")
r.jL(s,a,b)},
dM(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_windowSize",f=h.c
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
B.k.aj(r,0,s,r,s)
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
p+=o}}if(f.gcG())return
s=h.ay
s===$&&A.c("_window")
m=h.jO(s,h.k1+h.k3,p)
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
h.cy=((i^q&255)&r)>>>0}}while(s<262&&!f.gcG())},
iO(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_insertHash",f="_hashShift",e="_window",d="_strStart",c="_hashMask",b="_windowMask"
for(s=a===0,r=$.bs.a,q=0;!0;){p=h.k3
p===$&&A.c("_lookAhead")
if(p<262){h.dM()
p=h.k3
if(p<262&&s)return 0
if(p===0)break}if(p>=3){p=h.cy
p===$&&A.c(g)
o=h.fr
o===$&&A.c(f)
o=B.a.W(p,o)
p=h.ay
p===$&&A.c(e)
n=h.k1
n===$&&A.c(d)
m=n+2
if(!(m>=0&&m<p.length))return A.a(p,m)
m=p[m]
p=h.dy
p===$&&A.c(c)
p=((o^m&255)&p)>>>0
h.cy=p
m=h.cx
m===$&&A.c("_head")
if(!(p<m.length))return A.a(m,p)
o=m[p]
q=o&65535
l=h.CW
l===$&&A.c("_prev")
k=h.ax
k===$&&A.c(b)
k=(n&k)>>>0
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=o
m[p]=n}if(q!==0){p=h.k1
p===$&&A.c(d)
o=h.as
o===$&&A.c("_windowSize")
o=(p-q&65535)<=o-262
p=o}else p=!1
if(p){p=h.p1
p===$&&A.c("_strategy")
if(p!==2)h.fy=h.f1(q)}p=h.fy
p===$&&A.c("_matchLength")
o=h.k1
if(p>=3){o===$&&A.c(d)
j=h.cw(o-h.k2,p-3)
p=h.k3
o=h.fy
p-=o
h.k3=p
n=$.bs.b
if(n===$.bs)A.ad(A.n4(r))
if(o<=n.b&&p>=3){p=h.fy=o-1
do{o=h.k1=h.k1+1
n=h.cy
n===$&&A.c(g)
m=h.fr
m===$&&A.c(f)
m=B.a.W(n,m)
n=h.ay
n===$&&A.c(e)
l=o+2
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=h.dy
n===$&&A.c(c)
n=((m^l&255)&n)>>>0
h.cy=n
l=h.cx
l===$&&A.c("_head")
if(!(n<l.length))return A.a(l,n)
m=l[n]
q=m&65535
k=h.CW
k===$&&A.c("_prev")
i=h.ax
i===$&&A.c(b)
i=(o&i)>>>0
if(!(i>=0&&i<k.length))return A.a(k,i)
k[i]=m
l[n]=o}while(p=h.fy=p-1,p!==0)
h.k1=o+1}else{p=h.k1=h.k1+o
h.fy=0
o=h.ay
o===$&&A.c(e)
n=o.length
if(!(p>=0&&p<n))return A.a(o,p)
m=o[p]&255
h.cy=m
l=h.fr
l===$&&A.c(f)
l=B.a.W(m,l);++p
if(!(p<n))return A.a(o,p)
p=o[p]
o=h.dy
o===$&&A.c(c)
h.cy=((l^p&255)&o)>>>0}}else{p=h.ay
p===$&&A.c(e)
o===$&&A.c(d)
if(!(o>=0&&o<p.length))return A.a(p,o)
j=h.cw(0,p[o]&255)
h.k3=h.k3-1
h.k1=h.k1+1}if(j)h.bQ(!1)}s=a===4
h.bQ(s)
return s?3:1},
iP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_insertHash",e="_hashShift",d="_window",c="_strStart",b="_hashMask",a="_windowMask",a0="_matchAvailable"
for(s=a1===0,r=$.bs.a,q=0;!0;){p=g.k3
p===$&&A.c("_lookAhead")
if(p<262){g.dM()
p=g.k3
if(p<262&&s)return 0
if(p===0)break}if(p>=3){p=g.cy
p===$&&A.c(f)
o=g.fr
o===$&&A.c(e)
o=B.a.W(p,o)
p=g.ay
p===$&&A.c(d)
n=g.k1
n===$&&A.c(c)
m=n+2
if(!(m>=0&&m<p.length))return A.a(p,m)
m=p[m]
p=g.dy
p===$&&A.c(b)
p=((o^m&255)&p)>>>0
g.cy=p
m=g.cx
m===$&&A.c("_head")
if(!(p<m.length))return A.a(m,p)
o=m[p]
q=o&65535
l=g.CW
l===$&&A.c("_prev")
k=g.ax
k===$&&A.c(a)
k=(n&k)>>>0
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=o
m[p]=n}p=g.fy
p===$&&A.c("_matchLength")
g.k4=p
g.go=g.k2
g.fy=2
if(q!==0){o=$.bs.b
if(o===$.bs)A.ad(A.n4(r))
if(p<o.b){p=g.k1
p===$&&A.c(c)
o=g.as
o===$&&A.c("_windowSize")
o=(p-q&65535)<=o-262
p=o}else p=!1}else p=!1
if(p){p=g.p1
p===$&&A.c("_strategy")
if(p!==2){p=g.f1(q)
g.fy=p}else p=2
if(p<=5)if(g.p1!==1)if(p===3){o=g.k1
o===$&&A.c(c)
o=o-g.k2>4096}else o=!1
else o=!0
else o=!1
if(o){g.fy=2
p=2}}else p=2
o=g.k4
if(o>=3&&p<=o){p=g.k1
p===$&&A.c(c)
j=p+g.k3-3
i=g.cw(p-1-g.go,o-3)
o=g.k3
p=g.k4
g.k3=o-(p-1)
p=g.k4=p-2
do{o=g.k1=g.k1+1
if(o<=j){n=g.cy
n===$&&A.c(f)
m=g.fr
m===$&&A.c(e)
m=B.a.W(n,m)
n=g.ay
n===$&&A.c(d)
l=o+2
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=g.dy
n===$&&A.c(b)
n=((m^l&255)&n)>>>0
g.cy=n
l=g.cx
l===$&&A.c("_head")
if(!(n<l.length))return A.a(l,n)
m=l[n]
q=m&65535
k=g.CW
k===$&&A.c("_prev")
h=g.ax
h===$&&A.c(a)
h=(o&h)>>>0
if(!(h>=0&&h<k.length))return A.a(k,h)
k[h]=m
l[n]=o}}while(p=g.k4=p-1,p!==0)
g.id=0
g.fy=2
g.k1=o+1
if(i)g.bQ(!1)}else{p=g.id
p===$&&A.c(a0)
if(p!==0){p=g.ay
p===$&&A.c(d)
o=g.k1
o===$&&A.c(c);--o
if(!(o>=0&&o<p.length))return A.a(p,o)
if(g.cw(0,p[o]&255))g.bQ(!1)
g.k1=g.k1+1
g.k3=g.k3-1}else{g.id=1
p=g.k1
p===$&&A.c(c)
g.k1=p+1
g.k3=g.k3-1}}}s=g.id
s===$&&A.c(a0)
if(s!==0){s=g.ay
s===$&&A.c(d)
r=g.k1
r===$&&A.c(c);--r
if(!(r>=0&&r<s.length))return A.a(s,r)
g.cw(0,s[r]&255)
g.id=0}s=a1===4
g.bQ(s)
return s?3:1},
f1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.bs.cu().d,a=c.k1
a===$&&A.c("_strStart")
s=c.k4
s===$&&A.c("_prevLength")
r=c.as
r===$&&A.c("_windowSize")
r-=262
q=a>r?a-r:0
p=$.bs.cu().c
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
if(c.k4>=$.bs.cu().a)b=b>>>2
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
jO(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gcG())return 0
s=o.c.ab(c)
r=s.gn(s)
if(r===0)return 0
q=s.a_()
p=q.length
if(r>p)r=p
B.k.by(a,b,b+r,q)
o.b+=r
o.a=A.bB(q,o.a)
return r},
d4(){var s,r=this,q=r.x
q===$&&A.c("_pending")
s=r.f
s===$&&A.c("_pendingBuffer")
r.d.dn(s,q)
s=r.w
s===$&&A.c("_pendingOut")
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
j8(a){switch(a){case 0:return new A.bb(0,0,0,0,0)
case 1:return new A.bb(4,4,8,4,1)
case 2:return new A.bb(4,5,16,8,1)
case 3:return new A.bb(4,6,32,32,1)
case 4:return new A.bb(4,4,16,16,2)
case 5:return new A.bb(8,16,32,32,2)
case 6:return new A.bb(8,16,128,128,2)
case 7:return new A.bb(8,32,128,256,2)
case 8:return new A.bb(32,128,258,1024,2)
case 9:return new A.bb(32,258,258,4096,2)}throw A.e(A.e6("Invalid Deflate parameter"))}}
A.bb.prototype={}
A.m9.prototype={
j6(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="_optimalLen",a3=a1.a
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
f=a4.aQ
f===$&&A.c(a2)
a4.aQ=f+b*(n+c)
if(l){f=a4.bI
f===$&&A.c("_staticLen")
if(!(e<r.length))return A.a(r,e)
a4.bI=f+b*(r[e]+c)}}if(h===0)return
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
if(f!==n){e=a4.aQ
e===$&&A.c(a2)
if(!(l>=0&&l<j))return A.a(a3,l)
a4.aQ=e+(n-f)*a3[l]
a3[k]=n}--g}}},
dA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
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
if(!(j>=0))return A.a(o,j)
o[j]=0
i=a.aQ
i===$&&A.c("_optimalLen")
a.aQ=i-1
if(l){i=a.bI
i===$&&A.c("_staticLen");++k
if(!(k<r.length))return A.a(r,k)
a.bI=i-r[k]}}d.b=m
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
d.j6(a)
A.tq(c,m,a.ry)}}
A.mh.prototype={}
A.kh.prototype={
ht(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.b
if(typeof r!=="number")return r.lH()
if(r>q)h.sl6(r)
if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.c
if(typeof r!=="number")return r.h9()
if(r<q)h.sla(r)}p=B.a.W(1,h.b)
h.a=new Uint32Array(p)
for(o=1,n=0,m=2;o<=h.b;){for(r=o<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(J.bd(a[s],o)){for(l=n,k=0,j=0;j<o;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(q=h.a,i=(r|s)>>>0,j=k;j<p;j+=m){if(!(j>=0&&j<q.length))return A.a(q,j)
q[j]=i}++n}}++o
n=n<<1>>>0
m=m<<1>>>0}},
sl6(a){this.b=A.t(a)},
sla(a){this.c=A.t(a)}}
A.hn.prototype={
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
if(!o.jt())break}},
jt(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.gcG())return!1
s=r.bf(3)
switch(B.a.j(s,1)){case 0:if(r.jD()===-1)return!1
break
case 1:if(r.eE(r.r,r.w)===-1)return!1
break
case 2:if(r.ju()===-1)return!1
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
e0(a){var s,r,q,p,o,n,m,l=this,k=a.a
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
jD(){var s,r,q=this
q.e=q.d=0
s=q.bf(16)
r=q.bf(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
r=q.a
r===$&&A.c("input")
if(s>r.gn(r))return-1
q.c.lD(r.ab(s))
return 0},
ju(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bf(5)
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
q[n]=o}m=A.dt(q)
n=h+s
l=new Uint8Array(n)
k=A.N(l.buffer,0,h)
j=A.N(l.buffer,h,s)
if(i.im(n,m,l)===-1)return-1
return i.eE(A.dt(k),A.dt(j))},
eE(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.e0(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.V(r&255)
continue}q=r-257
if(!(q>=0&&q<29))return A.a(B.bl,q)
p=B.bl[q]+l.bf(B.dj[q])
o=l.e0(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.ba,o)
n=B.ba[o]+l.bf(B.S[o])
for(m=-n;p>n;){s.b8(s.af(m))
p-=n}if(p===n)s.b8(s.af(m))
else s.b8(s.ei(m,p-n))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
s===$&&A.c("input")
if(--s.b<0)s.b=0}return 0},
im(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.e0(b)
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
A.lK.prototype={}
A.lJ.prototype={}
A.lL.prototype={
fJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=t.L
g.a(a)
s=A.kP(1,32768)
s.V(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.V(q)
p=A.uR(a)
o=A.cB(a,1,null,0)
q=A.nt()
n=A.nt()
m=A.nt()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.kP(0,32768)
l=new A.ka(o,i,q,n,m,l,k,j)
if(b==null||b===-1)b=6
if(typeof b!=="number")return b.h9()
if(b<=9)k=!1
else k=!0
if(k)A.ad(A.e6("Invalid Deflate parameter"))
$.bs.b=l.j8(b)
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
l.ok=A.t(b)
l.w=l.x=l.p1=0
l.e=113
l.a=0
q.a=k
q.c=$.q7()
n.a=j
n.c=$.q6()
m.a=h
m.c=$.q5()
l.b4=l.b3=0
l.bJ=8
l.eX()
l.jl()
l.iN(4)
l.d4()
s.b8(g.a(A.N(i.c.buffer,0,i.a)))
s.aD(p)
g=A.N(s.c.buffer,0,s.a)
return g},
kO(a){return this.fJ(a,null)}}
A.k7.prototype={
ai(){return"Channel."+this.b}}
A.Z.prototype={
E(){var s=this.b
return++this.a<s.gn(s)},
gJ(a){return this.b.l(0,this.a)},
$iK:1}
A.db.prototype={
N(a){return new A.db(new Uint16Array(A.H(this.a)))},
gF(){return B.A},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.T(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gL(a){return this.gq(this)},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gt(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gv(a){var s,r=this.a
if(r.length>2){r=r[2]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gu(a){var s,r=this.a
if(r.length>3){r=r[3]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=A.T(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=A.T(s)
s=b.gv(b)
if(q>2)r[2]=A.T(s)
s=b.gu(b)
if(q>3)r[3]=A.T(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dc.prototype={
N(a){return new A.dc(new Float32Array(A.H(this.a)))},
gF(){return B.E},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=s
s=b.gv(b)
if(q>2)r[2]=s
s=b.gu(b)
if(q>3)r[3]=s},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dd.prototype={
N(a){return new A.dd(new Float64Array(A.H(this.a)))},
gF(){return B.H},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=s
s=b.gv(b)
if(q>2)r[2]=s
s=b.gu(b)
if(q>3)r[3]=s},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.de.prototype={
N(a){return new A.de(new Int16Array(A.H(this.a)))},
gF(){return B.J},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.df.prototype={
N(a){return new A.df(new Int32Array(A.H(this.a)))},
gF(){return B.K},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){A.t(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dg.prototype={
N(a){return new A.dg(new Int8Array(A.H(this.a)))},
gF(){return B.I},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dh.prototype={
N(a){var s=this.b
s===$&&A.c("data")
return new A.dh(this.a,s)},
gF(){return B.v},
gP(){return null},
c3(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.Z(s,7-a)&1}else s=0
return s},
cl(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.c("data")
this.b=b!==0?(s|B.a.W(1,a))>>>0:(s&~(B.a.W(1,a)&255))>>>0},
l(a,b){return this.c3(b)},
h(a,b,c){return this.cl(b,c)},
gL(a){return this.c3(0)},
gq(a){return this.c3(0)},
gt(){return this.c3(1)},
gv(a){return this.c3(2)},
gu(a){return this.c3(3)},
gah(){return A.ab(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cl(0,a)
s.cl(1,b)
s.cl(2,c)
s.cl(3,d)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1,
gn(a){return this.a}}
A.di.prototype={
N(a){return new A.di(new Uint16Array(A.H(this.a)))},
gF(){return B.y},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dj.prototype={
N(a){var s=this.b
s===$&&A.c("data")
return new A.dj(this.a,s)},
gF(){return B.w},
gP(){return null},
c4(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.Z(s,6-(a<<1>>>0))&3}else s=0
return s},
cm(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.b5,a)
s=B.b5[a]
r=B.b.i(b)
q=this.b
q===$&&A.c("data")
this.b=(q&s|B.a.W(r&3,6-(a<<1>>>0)))>>>0},
l(a,b){return this.c4(b)},
h(a,b,c){return this.cm(b,c)},
gL(a){return this.c4(0)},
gq(a){return this.c4(0)},
gt(){return this.c4(1)},
gv(a){return this.c4(2)},
gu(a){return this.c4(3)},
gah(){return A.ab(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cm(0,a)
s.cm(1,b)
s.cm(2,c)
s.cm(3,d)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1,
gn(a){return this.a}}
A.dk.prototype={
N(a){return new A.dk(new Uint32Array(A.H(this.a)))},
gF(){return B.F},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.dl.prototype={
N(a){return new A.dl(this.a,new Uint8Array(A.H(this.b)))},
gF(){return B.x},
gP(){return null},
c5(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.Z(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.Z(s[1],4-((a&1)<<2))&15}}return s},
cn(a,b){var s,r,q
if(a>=this.a)return
s=B.a.I(B.b.i(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&240|s)>>>0}},
l(a,b){return this.c5(b)},
h(a,b,c){return this.cn(b,c)},
gL(a){return this.c5(0)},
gq(a){return this.c5(0)},
gt(){return this.c5(1)},
gv(a){return this.c5(2)},
gu(a){return this.c5(3)},
gah(){return A.ab(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cn(0,a)
s.cn(1,b)
s.cn(2,c)
s.cn(3,d)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1,
gn(a){return this.a}}
A.bF.prototype={
ho(a,b,c,d){var s=this.a,r=s.length
if(0>=r)return A.a(s,0)
s[0]=a
if(1>=r)return A.a(s,1)
s[1]=b
if(2>=r)return A.a(s,2)
s[2]=c
if(3>=r)return A.a(s,3)
s[3]=d},
N(a){return new A.bF(new Uint8Array(A.H(this.a)))},
gF(){return B.e},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
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
gah(){return A.ab(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gG(a){return new A.Z(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gC(b)===A.r(A.z(this,!0,A.q(this).m("f.E")))},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iE:1}
A.fU.prototype={}
A.ea.prototype={}
A.ay.prototype={
ai(){return"Format."+this.b}}
A.fQ.prototype={
ai(){return"BlendMode."+this.b}}
A.dp.prototype={
cT(a){var s=$.nU()
if(!s.aK(0,a))return"<unknown>"
return s.l(0,a).a},
A(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=A.eG(s,s.r,A.q(s).c),q=t.p,p=t.r,o=t.N,n=t.a,m="";r.E();){l=r.d
m+=l+"\n"
k=s.l(0,l)
for(l=k.a,j=new A.aW(l,l.r,A.q(l).m("aW<1>")),j.c=l.e;j.E();){l=j.d
i=k.l(0,l)
m=i==null?m+("\t"+e.cT(l)+"\n"):m+("\t"+e.cT(l)+": "+i.A(0)+"\n")}for(l=k.b.a,j=new A.aW(l,l.r,A.q(l).m("aW<1>")),j.c=l.e;j.E();){h=j.d
m+=h+"\n"
if(!l.aK(0,h))l.h(0,h,new A.bt(A.a0(q,p),new A.bK(A.a0(o,n))))
g=l.l(0,h)
for(h=g.a,f=new A.aW(h,h.r,A.q(h).m("aW<1>")),f.c=h.e;f.E();){h=f.d
i=g.l(0,h)
m=i==null?m+("\t"+e.cT(h)+"\n"):m+("\t"+e.cT(h)+": "+i.A(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
cc(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="Length must be a non-negative integer: ",a6=a8.e
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
i=new A.bt(A.a0(n,m),new A.bK(A.a0(l,k)))
h=a8.p()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.fa(a8,s)
for(e=g.length,d=0;d<g.length;g.length===e||(0,A.ak)(g),++d){c=g[d]
b=c.b
if(b!=null)i.h(0,c.a,b)}p.h(0,"ifd"+j,i);++j
q=a8.k()}for(p=p.gbD(p),e=A.q(p),e=e.m("@<1>").au(e.z[1]),p=new A.cE(J.bD(p.a),p.b,e.m("cE<1,2>")),e=e.z[1];p.E();){b=p.a
if(b==null)b=e.a(b)
for(a=B.ax.gbk(B.ax),a=a.gG(a),a0=b.a,a1=b.b.a;a.E();){a2=a.gJ(a)
if(a0.aK(0,a2)){a8.d=s+b.l(0,a2).i(0)
i=new A.bt(A.a0(n,m),new A.bK(A.a0(l,k)))
h=a8.p()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.fa(a8,s)
for(a3=g.length,d=0;d<g.length;g.length===a3||(0,A.ak)(g),++d){c=g[d]
a4=c.b
if(a4!=null)i.h(0,c.a,a4)}a2=B.ax.l(0,a2)
a2.toString
a1.h(0,a2,i)}}}a8.e=a6
return!1},
fa(a,b){var s,r,q,p,o=a.p(),n=a.p(),m=a.k(),l=new A.j6(o,null)
if(n>13)return l
if(!(n<13))return A.a(B.a0,n)
s=B.a0[n]
r=m*B.a3[n]
q=a.d
if((r>4?a.d=a.k()+b:q)+r>a.c)return l
p=a.ab(r)
switch(s.a){case 0:break
case 6:l.b=new A.ca(new Int8Array(A.H(A.oD(p.a_().buffer,0,m))))
break
case 1:l.b=new A.bJ(new Uint8Array(A.H(p.ab(m).a_())))
break
case 7:l.b=new A.dx(new Uint8Array(A.H(p.ab(m).a_())))
break
case 2:l.b=new A.cu(m===0?"":p.ac(m-1))
break
case 3:l.b=A.oo(p,m)
break
case 4:l.b=A.oj(p,m)
break
case 5:l.b=A.ok(p,m)
break
case 10:l.b=A.om(p,m)
break
case 8:l.b=A.on(p,m)
break
case 9:l.b=A.ol(p,m)
break
case 11:l.b=A.op(p,m)
break
case 12:l.b=A.oi(p,m)
break}a.d=q+4
return l}}
A.j6.prototype={}
A.h7.prototype={}
A.bK.prototype={
hu(a){a.a.ag(0,new A.kk(this))},
l(a,b){var s=this.a
if(!s.aK(0,b))s.h(0,b,new A.bt(A.a0(t.p,t.r),new A.bK(A.a0(t.N,t.a))))
s=s.l(0,b)
s.toString
return s}}
A.kk.prototype={
$2(a,b){var s
A.av(a)
s=A.oh(t.a.a(b))
this.a.a.h(0,a,s)
return s},
$S:16}
A.bt.prototype={
kD(a){a.a.ag(0,new A.kl(this))
a.b.a.ag(0,new A.km(this))},
l(a,b){var s=this.a.l(0,b)
return s},
h(a,b,c){this.a.h(0,b,c)},
gc1(a){var s=this.a.l(0,274)
return s==null?null:J.mR(s)},
sc1(a,b){this.a.cK(0,274)}}
A.kl.prototype={
$2(a,b){var s
A.t(a)
s=t.r.a(b).N(0)
this.a.a.h(0,a,s)
return s},
$S:25}
A.km.prototype={
$2(a,b){var s
A.av(a)
s=A.oh(t.a.a(b))
this.a.b.a.h(0,a,s)
return s},
$S:16}
A.as.prototype={
ai(){return"IfdValueType."+this.b}}
A.ae.prototype={
ad(a,b){A.t(b)
return 0},
i(a){return this.ad(a,0)},
bu(){return new Uint8Array(0)},
A(a){return""},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.ae&&s.gb7(s)===b.gb7(b)&&s.gn(s)===b.gn(b)&&s.gC(s)===b.gC(b)},
gC(a){return 0}}
A.bJ.prototype={
N(a){return new A.bJ(new Uint8Array(A.H(this.a)))},
gb7(a){return B.aQ},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bJ){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return this.a},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cu.prototype={
N(a){return new A.cu(this.a)},
gb7(a){return B.i},
gn(a){return this.a.length+1},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cu){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.t.gC(s)===B.t.gC(r)}else s=!1
return s},
gC(a){return B.t.gC(this.a)},
bu(){return new Uint8Array(A.H(new A.be(this.a)))},
A(a){return this.a}}
A.cA.prototype={
hz(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.p()
if(!(q<r))return A.a(s,q)
s[q]=p}},
N(a){return new A.cA(new Uint16Array(A.H(this.a)))},
gb7(a){return B.f},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cA){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cv.prototype={
hw(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
if(!(q<r))return A.a(s,q)
s[q]=p}},
N(a){return new A.cv(new Uint32Array(A.H(this.a)))},
gb7(a){return B.m},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cv){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cw.prototype={
N(a){return new A.cw(A.hN(this.a,!0,t.i))},
gb7(a){return B.o},
gn(a){return this.a.length},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return J.mR(s[b])},
i(a){return this.ad(a,0)},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cw){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gC(a){return A.r(this.a)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.B(s[0])}else s=A.B(s)
return s}}
A.ca.prototype={
N(a){return new A.ca(new Int8Array(A.H(this.a)))},
gb7(a){return B.aU},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.ca){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cz.prototype={
hy(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
N(a){return new A.cz(new Int16Array(A.H(this.a)))},
gb7(a){return B.aV},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cz){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cx.prototype={
hx(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
N(a){return new A.cx(new Int32Array(A.H(this.a)))},
gb7(a){return B.aW},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cx){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.B(s)
return s}}
A.cy.prototype={
N(a){return new A.cy(A.hN(this.a,!0,t.i))},
gb7(a){return B.aR},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cy){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gC(a){return A.r(this.a)},
ad(a,b){var s
A.t(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return J.mR(s[b])},
i(a){return this.ad(a,0)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.B(s[0])}else s=A.B(s)
return s}}
A.dw.prototype={
hA(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
$.Y()[0]=p
p=$.cm()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
N(a){return new A.dw(new Float32Array(A.H(this.a)))},
gb7(a){return B.aS},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dw){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.B(s[0])}else s=A.B(s)
return s}}
A.dv.prototype={
hv(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.j0.h(s,r,a.dl())},
N(a){return new A.dv(new Float64Array(A.H(this.a)))},
gb7(a){return B.aT},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dv){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
bu(){return A.N(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.B(s[0])}else s=A.B(s)
return s}}
A.dx.prototype={
N(a){return new A.dx(new Uint8Array(A.H(this.a)))},
gb7(a){return B.L},
gn(a){return this.a.length},
bu(){return this.a},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dx){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gC(a){return A.r(this.a)},
A(a){return"<data>"}}
A.ap.prototype={
ai(){return"BmpCompression."+this.b}}
A.k6.prototype={}
A.bE.prototype={
ek(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.ai||s===B.aj}else s=!0
if(s){s=l.as=a.k()
r=A.mC(s)
l.CW=r
q=B.a.Z(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.k()
p=A.mC(r)
l.cy=p
o=B.a.Z(r,p)
l.db=s?255/o:0
r=l.ax=a.k()
p=A.mC(r)
l.dx=p
n=B.a.Z(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.aj){j=l.ay=a.k()
s=A.mC(j)
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
if(l.f<=8)l.ll(a)},
gcD(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.c("alphaMask")
s=s===0}else s=!1
else s=!0
return s},
gM(a){return Math.abs(this.c)},
ll(a){var s,r,q,p,o,n,m,l=this,k=l.z
if(k===0)k=B.a.O(1,l.f)
l.ch=new A.b5(new Uint8Array(k*3),k,3)
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
l.ch.cU(s,n,p,q,m)}},
kL(a2,a3){var s,r,q,p,o,n,m,l,k,j=this,i="_redShift",h="_redScale",g="greenMask",f="_greenShift",e="_greenScale",d="blueMask",c="_blueShift",b="_blueScale",a="alphaMask",a0="_alphaShift",a1="_alphaScale"
t.jO.a(a3)
if(j.ch!=null){s=j.f
if(s===1){r=a2.B()
for(q=7;q>=0;--q)a3.$4(B.a.aN(r,q)&1,0,0,0)
return}else if(s===2){r=a2.B()
for(q=6;q>=0;q-=2)a3.$4(B.a.aN(r,q)&2,0,0,0)}else if(s===4){r=a2.B()
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
if(j.gcD())k=255
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
return a3.$4(n,m,l,j.gcD()?255:k)}else if(o===24){l=a2.B()
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
if(j.gcD())k=255
else{s=j.ay
s===$&&A.c(a)
o=j.fr
o===$&&A.c(a0)
o=B.a.Z((p&s)>>>0,o)
s=j.fx
s===$&&A.c(a1)
k=B.b.i(o*s)}return a3.$4(n,m,l,k)}else throw A.e(A.p("Unsupported bitsPerPixel ("+o+") or compression ("+s.A(0)+")."))}},
$ia2:1}
A.fR.prototype={
bb(a){var s,r=null
if(!A.mT(A.A(a,!1,r,0)))return r
s=A.A(a,!1,r,0)
this.a=s
return this.b=A.ql(s,r)},
ap(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bL(a,a,a,a,0,B.h,0,0)
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
k=A.a4(a,a,m,0,B.h,a0.gM(a0),a,0,o,l,r,!1)
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
if(c==null)c=new A.O()
for(;i.a<d;)a0.kL(f,new A.k5(i,b,d,a0,c))}return k},
b2(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)}}
A.k5.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a3(s.ch.aW(a),s.ch.aV(a),s.ch.aU(a),s.ch.br(a))}else r.a3(a,b,c,d)
r.E();++p.a}},
$S:27}
A.kb.prototype={}
A.k9.prototype={}
A.kc.prototype={}
A.h8.prototype={}
A.ey.prototype={
cH(){return this.w},
bq(a,b,c,d,e){throw A.e(A.p("B44 compression not yet supported."))},
ce(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.B(this.r)+" "+this.x}}
A.dq.prototype={
ai(){return"ExrChannelType."+this.b}}
A.cp.prototype={
ai(){return"ExrChannelName."+this.b}}
A.h9.prototype={
gkF(){var s=this.c
s===$&&A.c("dataType")
return s},
hp(a){var s=this,r=a.cJ()
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
s.b=B.ce}else if(r==="G"){s.w=!0
s.b=B.cf}else if(r==="B"){s.w=!0
s.b=B.cg}else if(r==="A"){s.w=!0
s.b=B.ch}else{s.w=!1
s.b=B.ci}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break
default:throw A.e(A.p("EXR Invalid pixel type: "+s.gkF().A(0)))}}}
A.bg.prototype={
ai(){return"ExrCompressorType."+this.b}}
A.bI.prototype={
bq(a,b,c,d,e){throw A.e(A.p("Unsupported compression type"))},
ce(a,b,c){return this.bq(a,b,c,null,null)}}
A.hr.prototype={}
A.ha.prototype={
sfS(a){this.c=t.T.a(a)}}
A.hb.prototype={
hq(a){var s,r,q,p,o=this,n=A.A(a,!1,null,0)
if(n.k()!==20000630)throw A.e(A.p("File is not an OpenEXR image file."))
s=o.d=n.B()
if(s!==2)throw A.e(A.p("Cannot read version "+s+" image files."))
s=o.e=n.bo()
if((s&4294967289)>>>0!==0)throw A.e(A.p("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.os(r.length,(s&2)!==0,n)
if(q.w>0)B.c.H(r,q)}else for(s=o.c;!0;){q=A.os(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.H(s,q)}s=o.c
r=s.length
if(r===0)throw A.e(A.p("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.ak)(s),++p)s[p].lk(n)
o.jX(n)},
jX(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q){p=s[q]
o.sX(0,Math.max(o.a,p.w))
o.sM(0,Math.max(o.b,p.x))
if(p.db)o.k9(p,a)
else o.k8(p,a)}},
k9(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.e
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
if(s)if(p.k()!==n)throw A.e(A.p("Invalid Image Data"))
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
a0=new A.aq(g,0,a,0,!1)
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
a=$.a_
a=a!=null?a:A.a3()
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
if(b2==null)b2=new A.O()
g=a8.b
g===$&&A.c("nameType")
b2.h(0,g.a,b1)}else{g=a8.a
g===$&&A.c("name")
a=b4.b
g=a!=null?a.l(0,g):b3
if(g!=null)g.S(a9,b,b1,0,0)}}}++a6;++b}++f;++h}++i}++j;++l}++m}},
k8(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=this.e
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
if(s)if(n.k()!==3.141592653589793)throw A.e(A.p("Invalid Image Data"))
i=n.k()
h=$.Y()
h[0]=i
i=$.al()
if(0>=i.length)return A.a(i,0)
h[0]=n.k()
g=n.af(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.ce(g,0,k)
f=new A.aq(i,0,i.length,0,!1)}else f=g
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
h=$.a_
h=h!=null?h:A.a3()
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
if(a4==null)a4=new A.O()
i=a0.b
i===$&&A.c("nameType")
a4.h(0,i.a,a3)}else{i=a0.a
i===$&&A.c("name")
h=a6.b
i=h!=null?h.l(0,i):a5
if(i!=null)i.S(a2,k,a3,0,0)}}}++c;++k}}},
sX(a,b){this.a=A.t(b)},
sM(a,b){this.b=A.t(b)},
$ia2:1}
A.ej.prototype={
hr(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4="dataType",a5="dataWindow",a6=A.a0(t.N,t.X)
for(s=a2.e,r=t.t,q=t.L,p=a2.c,o=B.A;!0;){n=a9.cJ()
if(n.length===0)break
a9.cJ()
m=a9.af(a9.k())
a9.d=a9.d+(m.c-m.d)
s.h(0,n,new A.h8())
switch(n){case"channels":for(;!0;){l=new A.h9()
l.hp(m)
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
a6.h(0,k,new A.dz(new Uint16Array(j*i),j,i,1))}else if(j===B.al){j=a2.w
i=a2.x
a6.h(0,k,new A.dA(new Float32Array(j*i),j,i,1))}else if(j===B.aN){j=a2.w
i=a2.x
a6.h(0,k,new A.dD(new Uint32Array(j*i),j,i,1))}}B.c.H(p,l)}break
case"chromaticities":k=new Float32Array(8)
a2.at=k
j=m.k()
i=$.Y()
i[0]=j
j=$.cm()
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
j=$.Y()
j[0]=k
k=$.al()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.shL(q.a(A.b([i,h,g,k[0]],r)))
k=a2.r
k===$&&A.c(a5)
a2.w=k[2]-k[0]+1
a2.x=k[3]-k[1]+1
break
case"displayWindow":k=m.k()
j=$.Y()
j[0]=k
k=$.al()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.skN(A.b([i,h,g,k[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":k=m.k()
$.Y()[0]=k
k=$.cm()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.k()
j=$.Y()
j[0]=k
k=$.cm()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
break
case"screenWindowWidth":k=m.k()
$.Y()[0]=k
k=$.cm()
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
case"type":f=m.cJ()
if(f!=="deepscanline")if(f!=="deeptile")throw A.e(A.p("EXR Invalid type: "+f))
break
default:break}}s=a2.w
a2.b=A.a4(a3,a3,o,0,B.h,a2.x,a3,0,a2.d,a3,s,!1)
for(s=A.eG(a6,a6.r,a6.$ti.c);s.E();){r=s.d
q=a2.b
q.toString
k=a6.l(0,r)
k.toString
q.hc(r,k)}if(a2.db){s=a2.r
s===$&&A.c(a5)
a2.id=a2.ie(s[0],s[2],s[1],s[3])
s=a2.r
a2.k1=a2.ig(s[0],s[2],s[1],s[3])
if(a2.fr!==2)a2.k1=1
s=a2.id
s.toString
r=a2.r
a2.sjo(a2.eu(s,r[0],r[2],a2.dx,a2.fx))
r=a2.k1
r.toString
s=a2.r
a2.sjp(a2.eu(r,s[1],s[3],a2.dy,a2.fx))
s=a2.ic()
a2.k2=s
r=a2.dx
r.toString
r=s*r
a2.k3=r
a2.CW=A.o9(a2.ax,a2,r,a2.dy)
b0.a=b0.b=0
r=a2.id
r.toString
s=a2.k1
s.toString
a2.sf6(A.n6(r*s,new A.ke(b0,a2),t.mC))}else{s=a2.x
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
s=A.o9(a2.ax,a2,a,a3)
a2.CW=s
s=a2.cx=s.cH()
r=a2.ch
q=r.length
p=new Uint32Array(q)
a2.cy=p
for(--q,a0=0,a1=0;a1<=q;++a1){if(B.a.a2(a1,s)===0)a0=0
p[a1]=a0
a0+=r[a1]}s=B.a.aA(a2.x+s,s)
a2.sf6(A.b([new Uint32Array(s-1)],t.mD))}},
ie(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.t(r)
s=(q===0?o.d3(r):o.cZ(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.d3(p):o.cZ(p))+1
break
default:throw A.e(A.p("Unknown LevelMode format."))}return s},
ig(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.t(r)
s=(q===0?o.d3(r):o.cZ(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.d3(p):o.cZ(p))+1
break
default:throw A.e(A.p("Unknown LevelMode format."))}return s},
d3(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
cZ(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
ic(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.c("dataSize")
q+=o}return q},
eu(a,b,c,d,e){var s,r,q,p,o,n,m=J.az(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.O(1,q)
o=B.a.aA(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.aA(n+d-1,d)}return m},
skN(a){t.T.a(a)},
shL(a){this.r=t.L.a(a)},
sf6(a){this.ay=t.kX.a(a)},
sjo(a){this.fy=t.k.a(a)},
sjp(a){this.go=t.k.a(a)}}
A.ke.prototype={
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
$S:28}
A.hs.prototype={
lk(a){var s,r,q,p,o,n=this
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
A.ht.prototype={
hD(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.az(o,t.nA)
for(s=0;s<o;++s)n[s]=new A.fs()
p.shM(t.a3.a(n))
r=p.w
r.toString
q=B.a.U(r*p.x,2)
p.z=new Uint16Array(q)},
cH(){return this.x},
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
if(e>=8192)throw A.e(A.p("Error in header for PIZ-compressed data (invalid bitmap size)."))
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
a3=a5.ke(d,a2)
A.qF(a7,a7.k(),a5.z,m)
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
A.qI(p,g+a,a1,q,a4,a1*q,a3);++a}}q=a5.z
q.toString
a5.i5(a2,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.bk(!1,q*a5.x+73728)}q.a=0
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
q.dr(p[g])}}q=a5.r
return A.N(q.c.buffer,0,q.a)},
ce(a,b,c){return this.bq(a,b,c,null,null)},
i5(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
ke(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
shM(a){this.y=t.a3.a(a)}}
A.fs.prototype={}
A.hu.prototype={
cH(){return this.x},
bq(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.R.cB(A.cB(t.L.a(a4.a_()),1,null,0),!1),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.bk(!1,a1.x*a3)}a3.a=0
s=A.b([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.N(r.buffer,0,null)
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
return A.N(a3.c.buffer,0,a3.a)},
ce(a,b,c){return this.bq(a,b,c,null,null)}}
A.hv.prototype={
cH(){return 1},
bq(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bk(!1,(b-a0.d)*2)
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
$.aE()[0]=q
q=$.aV()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.V(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.V(q[p])}}l=A.N(a.c.buffer,0,a.a)
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
ce(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.B(this.w)}}
A.ez.prototype={
cH(){return this.x},
bq(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.R.cB(A.cB(t.L.a(a.a_()),1,null,0),!1)
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
ce(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.B(this.w)}}
A.kd.prototype={
ap(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
b2(a,b,c){var s=new A.hb(A.b([],t.lv))
s.hq(b)
this.a=s
return this.ap(0)}}
A.en.prototype={
ee(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.b5(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aW(p)
n=s.aV(p)
m=s.aU(p)
q.cU(p,o,n,m,p===l.c?0:255)}return q}}
A.eo.prototype={
hs(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.p()
k.b=a.p()
k.c=a.p()
k.d=a.p()
s=a.B()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.od(B.a.O(1,(s&7)+1))
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
q.d.aX(r,o,n,l)}}k.x=a.d-a.b}}
A.hw.prototype={}
A.ep.prototype={$ia2:1}
A.kg.prototype={
bb(a){var s,r,q,p,o,n,m,l,k,j=this
j.f=A.A(a,!1,null,0)
j.a=new A.ep(A.b([],t.b))
if(!j.eO())return null
try{for(;p=j.f,o=p.d,o<p.c;){n=p.a
m=p.d=o+1
l=n.length
if(!(o>=0&&o<l))return A.a(n,o)
s=n[o]
switch(s){case 44:r=j.fk()
if(r==null){p=j.a
return p}p=r
p.r=j.e
p.w=j.c===2
if(j.b!==0){if(r.f==null&&j.a.e!=null){p=j.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.en(o,n,m,new A.b5(new Uint8Array(A.H(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=j.d}B.c.H(j.a.r,r)
break
case 33:p.d=m+1
if(!(m>=0&&m<l))return A.a(n,m)
q=n[m]
if(J.bd(q,255)){p=j.f
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
if(n===3&&m===1)j.r=p.p()}else j.da()}else if(J.bd(q,249)){p=j.f
p.toString
j.jT(p)}else j.da()
break
case 59:p=j.a
return p
default:break}}}catch(k){}return j.a},
jT(a){var s,r,q,p,o=this
a.B()
s=a.B()
o.e=a.p()
o.d=a.B()
a.B()
o.c=B.a.j(s,2)&7
o.b=s&1
r=a.cW(1,0)
q=r.a
r=r.d
if(!(r>=0&&r<q.length))return A.a(q,r)
if(q[r]===44){++a.d
p=o.fk()
if(p==null)return
p.r=o.e
p.w=o.c===2
if(o.b!==0){r=p.f
if(r==null&&o.a.e!=null){r=o.a.e
r.toString
r=p.f=A.qN(r)}if(r!=null)r.c=o.d}B.c.H(o.a.r,p)}},
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
return p.iB(q)},
b2(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
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
s=A.a4(b,b,B.e,0,B.h,n,b,0,1,i.ee(),p,!1)
p=c.a.c.a
n=p.length
if(n!==0){if(0>=n)return A.a(p,0)
p=p[0]}else p=0
n=i.d
h=n.aW(p)
g=n.aV(p)
f=n.aU(p)
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
if(n!=null)n.aG(0,new A.bF(p))}else s=A.bh(s,!1,!1)
s.y=o.y
for(p=o.a,p=p.gG(p);p.E();){d=p.gJ(p)
if(d.gu(d)!==0){n=d.gaS(d)
m=a1.a
m===$&&A.c("x")
l=d.gaT(d)
k=a1.b
k===$&&A.c("y")
s.bO(n+m,l+k,d)}}r.aH(s)}return r},
fk(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.hw()
s.hs(r);++this.f.d
this.da()
return s},
iB(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
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
n=A.a4(h,h,B.e,0,B.h,r,h,0,1,o.ee(),s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.c("interlaced")
if(s){s=a.b
s===$&&A.c("y")
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.cK[l];j<r;j+=B.dx[l],++k){if(!i.eP(m))return n
i.fq(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.eP(m))return n
i.fq(n,j,o,m)}return n},
fq(a,b,c,d){var s,r,q,p=d.length
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
s.c=new A.bF(new Uint8Array(A.H(A.b([j.f.B()],t.t))));++j.f.d
if((r&128)!==0){s=j.a
s.toString
s.e=A.od(B.a.O(1,(r&7)+1))
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
s.d.aX(q,n,m,k)}}j.a.toString
return!0},
eP(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.iM(a))return!1
if(s.as===0)s.da()
return!0},
da(){var s,r,q,p=this.f
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
iM(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_stack",f="_suffix",e=h.ay
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
for(;r<s;){o=h.ch=h.iL()
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
p=h.dQ(e,o,p)
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
k[m]=h.dQ(p,e,j)}else{k===$&&A.c(f)
l.toString
k[m]=h.dQ(p,l,j)}}e=h.ch
e.toString
h.CW=e}}return!0},
iL(){var s,r,q,p,o=this
if(o.cy>12)return null
for(;s=o.ax,r=o.cy,s<r;){s=o.i8()
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
dQ(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
i8(){var s,r,q=this,p=q.w,o=p[0]
if(o===0){p[0]=q.f.B()
p=q.w
o=p[0]
if(o===0)return null
B.k.by(p,1,1+o,q.f.ab(o).a_())
p=q.w
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.du.prototype={
ai(){return"IcoType."+this.b}}
A.hj.prototype={$ia2:1}
A.hk.prototype={}
A.hi.prototype={
gM(a){return B.a.U(A.bE.prototype.gM.call(this,this),2)},
gcD(){return!(this.d===40&&this.f===32)&&A.bE.prototype.gcD.call(this)}}
A.kj.prototype={
b2(a,b,c){var s,r,q,p=this,o=A.A(b,!1,null,0)
p.a=o
s=p.b=A.og(o)
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
p=J.k0(s,a8,a8+q)
o=new A.i7(A.ot())
t.D.a(p)
if(o.dk(p))return o.bS(0,p)
n=A.bk(!1,14)
n.dr(19778)
n.aD(q)
n.aD(0)
n.aD(0)
a8=A.A(p,!1,a7,0)
s=A.o1(A.A(A.N(n.c.buffer,0,n.a),!1,a7,0))
q=a8.d
m=a8.k()
l=a8.k()
k=$.Y()
k[0]=l
l=$.al()
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
f=new A.hi(s,j,l,m,i,h,g,k,q)
f.ek(a8,s)
if(m!==40&&i!==1)return a7
e=k===0&&h<=8?40+4*B.a.O(1,h):40+4*k
s.b=e
n.a-=4
n.aD(e)
d=A.A(p,!1,a7,0)
c=new A.kb(!0)
c.a=d
c.b=f
b=c.ap(0)
if(h>=32)return b
a=32-B.a.a2(j,32)
a0=B.a.U(a===32?j:j+a,8)
for(a8=1/l<0,s=l<0,l=l===0,a1=0;a1<B.a.U(A.bE.prototype.gM.call(f,f),2);++a1){if(!(l?a8:s))a2=a1
else{q=b.a
q=q==null?a7:q.b
a2=(q==null?0:q)-1-a1}a3=d.af(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a7:q.K(0,a2,a7)
if(a4==null)a4=new A.O()
for(a5=0;a5<j;){q=a3.a
m=a3.d++
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
a6=7
while(!0){if(!(a6>-1&&a5<j))break
if((m&B.a.W(1,a6))>>>0!==0)a4.su(0,0)
a4.E();++a5;--a6}}}return b}}
A.fV.prototype={}
A.c9.prototype={}
A.ct.prototype={}
A.eq.prototype={}
A.ks.prototype={}
A.bN.prototype={
shN(a){this.r=t.hK.a(a)},
shP(a){this.w=t.A.a(a)},
shO(a){this.x=t.A.a(a)}}
A.kt.prototype={
lC(a){var s,r,q,p,o,n,m,l=this,k=A.A(t.L.a(a),!0,null,0)
l.a=k
s=k.cW(2,0)
k=s.a
r=s.d
q=k.length
if(!(r>=0&&r<q))return A.a(k,r)
if(k[r]===255){++r
if(!(r<q))return A.a(k,r)
r=k[r]!==216
k=r}else k=!0
if(k)return!1
if(l.c8()!==216)return!1
p=l.c8()
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
break}p=l.c8()}return o&&n},
cc(a,b){var s,r,q,p,o,n,m,l,k=this
k.a=A.A(t.L.a(b),!0,null,0)
k.jM()
if(k.x.length!==1)throw A.e(A.p("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.l(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.ia(p,o)
q=q===1&&n===2?1:0
B.c.H(s,new A.fV(p,q,m===1&&l===2?1:0))}},
jM(){var s,r,q,p,o,n,m,l,k=this
if(k.c8()!==216)throw A.e(A.p("Start Of Image marker not found."))
s=k.c8()
while(!0){if(s!==217){r=k.a
r===$&&A.c("input")
r=r.d<r.c}else r=!1
if(!r)break
r=k.a
r===$&&A.c("input")
q=r.p()
if(q<2)A.ad(A.p("Invalid Block"))
r=k.a
p=r.af(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:k.jN(s,p)
break
case 219:k.jQ(p)
break
case 192:case 193:case 194:k.jS(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.e(A.p("Unhandled frame type "+B.a.cM(s,16)))
case 196:k.jP(p)
break
case 221:k.e=p.p()
break
case 218:k.k7(p)
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
break}if(s!==0)throw A.e(A.p("Unknown JPEG marker "+B.a.cM(s,16)))
break}s=k.c8()}},
c8(){var s,r=this,q=r.a
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
jR(a){if(a.k()!==1165519206)return
if(a.p()!==0)return
this.r.cc(0,a)},
jN(a,b){var s,r,q,p,o,n=b
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
if(s){s=new A.kv()
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
n.cW(14+3*q*r,14)}}else if(a===225)this.jR(n)
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
if(s){s=new A.ks()
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
s.d=r[q]}}else if(a===254)try{n.ln()}catch(o){A.aR(o)}},
jQ(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o=B.a.j(q,4)
n=q&15
if(n>=4)throw A.e(A.p("Invalid number of quantization tables"))
if(r[n]==null)B.c.h(r,n,new Int16Array(64))
m=r[n]
for(q=o!==0,l=0;l<64;++l){if(q)k=a.p()
else{p=a.a
j=a.d++
if(!(j>=0&&j<p.length))return A.a(p,j)
k=p[j]}m.toString
p=B.G[l]
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.e(A.p("Bad length for DQT block"))},
jS(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.e(A.p("Duplicate JPG frame data found."))
s=j.d=new A.hF(A.a0(t.p,t.e7),A.b([],t.t))
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
j.d.y.h(0,o,new A.bN(k&15,n&15,s,l))}j.d.lg()
B.c.H(j.x,j.d)},
jP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
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
B.c.h(g,m,this.ib(l,h))}},
k7(a){var s,r,q,p,o,n,m,l=this,k=a.B()
if(k<1||k>4)throw A.e(A.p("Invalid SOS block"))
s=A.n6(k,new A.ku(l,a),t.e7)
r=a.B()
q=a.B()
p=a.B()
o=B.a.j(p,4)
n=l.a
n===$&&A.c("input")
m=l.d
o=new A.hG(n,m,s,l.e,r,q,o&15,p&15)
n=m.w
n===$&&A.c("mcusPerLine")
o.f=n
o.r=m.b
o.bH(0)},
ib(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.b([],t.kv),g=16
while(!0){if(!(g>0&&a[g-1]===0))break;--g}s=t.dj
B.c.H(h,new A.e1(A.b([],s)))
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
B.c.h(m,l,new A.eq(b[p]))
for(;m=r.b,m>0;){if(0>=h.length)return A.a(h,-1)
r=h.pop()}r.b=m+1
B.c.H(h,r)
for(;h.length<=o;r=j){m=A.b([],s)
j=new A.e1(m)
B.c.H(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.ct(m))}++p}++o
if(o<g){m=A.b([],s)
j=new A.e1(m)
B.c.H(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.ct(m))
r=j}}if(0>=h.length)return A.a(h,0)
return h[0].a},
ia(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.e
a2===$&&A.c("blocksPerLine")
s=a4.f
s===$&&A.c("blocksPerColumn")
r=a2<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.aj(o,null,!1,t.nh)
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
A.v8(e,d[f],p,q)
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
A.ku.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.B(),l=n.B()
n=this.a
if(!n.d.y.aK(0,m))throw A.e(A.p("Invalid Component in SOS block"))
s=n.d.y.l(0,m)
s.toString
r=B.a.j(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.shP(t.A.a(p))}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.shO(t.A.a(n))}return s},
$S:29}
A.e1.prototype={}
A.hF.prototype={
lg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.q(s).c,q=A.eG(s,s.r,r);q.E();){p=s.l(0,q.d)
a.sl7(Math.max(a.f,p.a))
a.sl8(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.b.b1(q/8/a.f)
q=a.d
q.toString
a.x=B.b.b1(q/8/a.r)
for(r=A.eG(s,s.r,r),q=t.hK,o=t.bW,n=t.kn;r.E();){m=s.l(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.b1(B.b.b1(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.b1(B.b.b1(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.az(f,n)
for(d=0;d<f;++d){c=J.az(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.shN(q.a(e))}},
sl7(a){this.f=A.t(a)},
sl8(a){this.r=A.t(a)}}
A.kv.prototype={}
A.hG.prototype={
bH(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.y,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.Q===0)s=a0.at===0?a0.gix():a0.giz()
else s=a0.at===0?a0.gio():a0.giq()
else s=a0.giu()
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
for(r=a0.a,q=t.m,o=0;o<p;){for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
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
for(f=0;f<g;++f)for(e=0;e<h;++e)a0.iC(m,s,o,f,e)}++o;++l}}a0.ch=0
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
bZ(){var s,r,q=this,p=q.ch
if(p>0){--p
q.ch=p
return B.a.aN(q.ay,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.B()
q.ay=s
if(s===255){r=p.B()
if(r!==0)throw A.e(A.p("unexpected marker: "+B.a.cM((q.ay<<8|r)>>>0,16)))}q.ch=7
return B.a.j(q.ay,7)&1},
ct(a){var s,r,q=new A.ct(t.A.a(a))
for(;s=this.bZ(),s!=null;){if(q instanceof A.ct){r=q.a
if(s>>>0!==s||s>=r.length)return A.a(r,s)
q=r[s]}if(q instanceof A.eq)return q.a}return null},
e1(a){var s,r
for(s=0;a>0;){r=this.bZ()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
cv(a){var s
if(a===1)return this.bZ()===1?1:-1
a.toString
s=this.e1(a)
s.toString
if(s>=B.a.W(1,a-1))return s
return s+B.a.O(-1,a)+1},
iv(a,b){var s,r,q,p,o,n,m,l=this
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=l.ct(s)
q=r===0?0:l.cv(r)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.c("huffmanTableAC")
s=l.ct(s)
s.toString
o=s&15
n=s>>>4
if(o===0){if(n<15)break
p+=16
continue}p+=n
o=l.cv(o)
if(!(p>=0&&p<80))return A.a(B.G,p)
m=B.G[p]
if(!(m<64))return A.a(b,m)
b[m]=o;++p}},
iy(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=this.ct(s)
q=r===0?0:B.a.O(this.cv(r),this.ax)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s},
iA(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.bZ()
r.toString
b[0]=(s|B.a.O(r,this.ax))>>>0},
ip(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.c("huffmanTableAC")
p=k.ct(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.e1(n)
s.toString
k.CW=s+B.a.O(1,n)-1
break}r+=16
continue}r+=n
if(!(r>=0&&r<80))return A.a(B.G,r)
m=B.G[r]
p=k.cv(o)
l=B.a.O(1,s)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
ir(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
$label0$1:for(q=j.ax,p=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.G,s)
o=B.G[s]
n=j.cx
switch(n){case 0:n=a.x
n===$&&A.c("huffmanTableAC")
m=j.ct(n)
if(m==null)throw A.e(A.p("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){n=j.e1(p)
n.toString
j.CW=n+B.a.O(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.e(A.p("invalid ACn encoding"))
j.cy=j.cv(l)
j.cx=p!==0?2:3}continue $label0$1
case 1:case 2:if(!(o<64))return A.a(b,o)
k=b[o]
if(k!==0){n=j.bZ()
n.toString
n=B.a.O(n,q)
if(!(o<64))return A.a(b,o)
b[o]=k+n}else{--p
if(p===0)j.cx=n===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.bZ()
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
if(n!==0){k=j.bZ()
k.toString
k=B.a.O(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
iC(a,b,c,d,e){var s,r,q,p,o
t.m.a(b)
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
A.hE.prototype={
b2(a,b,c){var s=A.oy()
s.cc(0,b)
if(s.x.length!==1)throw A.e(A.p("only single frame JPEGs supported"))
return A.uS(s)},
bS(a,b){return this.b2(a,b,null)}}
A.dM.prototype={
ai(){return"PngDisposeMode."+this.b}}
A.eV.prototype={
ai(){return"PngBlendMode."+this.b}}
A.eW.prototype={}
A.hx.prototype={}
A.cd.prototype={
ai(){return"PngFilterType."+this.b}}
A.i9.prototype={
sP(a){this.w=t.k.a(a)},
slz(a){this.x=t.T.a(a)},
$ia2:1}
A.hy.prototype={}
A.i7.prototype={
dk(a){var s,r,q,p,o,n=A.A(a,!0,null,0).ab(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.bm[p])return!1}return!0},
bb(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.A(b5,!0,b3,0)
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
m.h(0,B.aJ.bS(0,new Uint8Array(g.subarray(0,A.bn(0,p,f)))),B.aJ.bS(0,new Uint8Array(g.subarray(l,A.bn(l,b3,f)))))
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
switch(b){case 0:if(!B.c.bG(A.b([1,2,4,8,16],q),b4.c))return b3
break
case 2:if(!B.c.bG(A.b([8,16],q),b4.c))return b3
break
case 3:if(!B.c.bG(A.b([1,2,4,8],q),b4.c))return b3
break
case 4:if(!B.c.bG(A.b([8,16],q),b4.c))return b3
break
case 6:if(!B.c.bG(A.b([8,16],q),b4.c))return b3
break}if(b2.d.k()!==A.bB(n.a(d),A.bB(new A.be(i),0)))throw A.e(A.p("Invalid "+i+" checksum"))
break
case"PLTE":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
b4.sP(h.a_())
if(b2.d.k()!==A.bB(n.a(n.a(b4.w)),A.bB(new A.be(i),0)))throw A.e(A.p("Invalid "+i+" checksum"))
break
case"tRNS":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
b4.slz(h.a_())
a1=b2.d.k()
l=b4.x
l.toString
if(a1!==A.bB(n.a(l),A.bB(new A.be(i),0)))throw A.e(A.p("Invalid "+i+" checksum"))
break
case"IEND":b2.d.d+=4
break
case"gAMA":if(j!==4)throw A.e(A.p("Invalid gAMA chunk"))
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
B.c.H(r,new A.hx(A.b([],q),l,c,b,a,a0,a2,a5,a6))
b2.d.d+=4
break
case"fdAT":b2.d.k()
B.c.H(B.c.gfQ(r).y,k)
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
if(c!=null){l=B.k.bG(c,l)?0:255
c=new Uint8Array(4)
c[0]=a9
c[1]=b0
c[2]=b1
c[3]=l
b4.z=new A.ea(c)}else{l=new Uint8Array(3)
l[0]=a9
l[1]=b0
l[2]=b1
b4.z=new A.fU(l)}}else if(l===0||l===4){b2.d.p()
j-=2}else if(l===2||l===6){l=b2.d
l.p()
l.p()
l.p()
j-=24}if(j>0)b2.d.d+=j
b2.d.d+=4
break
case"iCCP":l=b2.d.cJ()
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
if(b5.d.k()!==A.bB(c2.a(j),A.bB(new A.be(l),0)))throw A.e(A.p("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.ak)(r),++h){j=r[h]
J.nZ(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.e(A.p("Invalid Frame Number: "+c3))
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
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.ak)(r),++h){j=r[h]
J.nZ(b7,i,j)
i+=j.length}}c1=b8.d
if(c1===3)f=1
else if(c1===0)f=1
else{if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.R.cB(A.cB(t.L.a(b7),1,b6,0),!1)}catch(e){return b6}d=A.A(s,!0,b6,0)
b5.c=b5.b=0
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
c=c2/3|0
b=b8.x
n=b!=null
a=n?b.length:0
a0=n?4:3
a1=new A.b5(new Uint8Array(c*a0),c,a0)
for(n=a0===4,o=0,a2=0;o<c;++o,a2+=3){if(n&&o<a){if(!(o<b.length))return A.a(b,o)
a3=b[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
a1.cU(o,a4,a5,c1[a6],a3)}}else a1=b6}else a1=b6
if(b8.d===0&&b8.x!=null&&a1==null&&b8.c<=8){b=b8.x
a7=b.length
c1=b8.c
c=B.a.W(1,c1)
a1=new A.b5(new Uint8Array(c*4),c,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<c;++o){a9=o*a8
a1.cU(o,a9,a9,a9,255)}for(c1=a1.b,c2=3<c1,n=a1.c,a4=n.length,o=0;o<a7;o+=2){a5=b[o]
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
b2=A.a4(b6,b6,b1,0,B.h,c0,b6,0,c2===2&&b8.x!=null?4:f,a1,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.bY(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.bY(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.bY(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.bY(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.bY(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.bY(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.bY(d,b2,0,1,1,2,b9,c0>>>1)}else b5.jG(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.er(b8.Q,B.am,c1)
b8=b8.ax
if(b8.a!==0)b2.kq(b8)
return b2},
b2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
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
if(g===B.bH){q=A.bh(q,!1,!1)
m=s.z
l=q.a
if(l!=null)l.aG(0,m)}else q=g===B.bI?A.bh(q,!1,!1):A.bh(q,!1,!1)
m=c.f
q.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
m=c.x===B.bG?B.aE:B.ah
A.pG(q,n,m,c.d,c.e)
p.aH(q)}return p},
bS(a,b){return this.b2(a,b,null)},
bY(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
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
a1.fo(h,q,f,e)
a1.c=a1.b=0
d=new A.aq(f,0,f.length,0,!0)
for(a3=m<=1,c=a6,b=0;b<b0;++b,c+=a8){a1.fc(d,n)
i=a5.a
i=i==null?null:i.K(c,l,null)
a1.e2(i==null?new A.O():i,n)
if(!a3||a2)for(a=0;a<a8;++a)for(i=l+a,a0=0;a0<m;++a0)a1.e2(a5.ak(c+a0,i),n)}}},
jG(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.j(q*r+7,3)
n=B.a.j(r+7,3)
m=A.aj(o,0,!1,t.p)
l=A.b([m,m],t.S)
k=A.b([0,0,0,0],t.t)
a=a2.a
j=a.gG(a)
j.E()
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
b.fo(g,n,l[h],l[e])
b.c=b.b=0
a0=l[h]
a=a0.length
d=new A.aq(a0,0,a,0,!0)
for(c=0;c<q;++c){b.fc(d,k)
b.e2(j.gJ(j),k)
j.E()}}},
fo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.ac(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
n=c[n]
if(typeof o!=="number")return o.b9()
if(typeof n!=="number")return A.bc(n)
r.h(c,q,o+n&255)}break
case 2:for(r=J.ac(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
if(typeof o!=="number")return o.b9()
r.h(c,q,o+m&255)}break
case 3:for(r=J.ac(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
n=B.a.j(l+m,1)
if(typeof o!=="number")return o.b9()
r.h(c,q,o+n&255)}break
case 4:for(r=J.ac(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
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
default:throw A.e(A.p("Invalid filter value: "+a.A(0)))}},
bs(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.B()
if(b===16)return a.p()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.e(A.p("Invalid PNG data."))
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
fc(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.h(b,0,q.bs(a,s.c))
return
case 2:B.c.h(b,0,q.bs(a,s.c))
B.c.h(b,1,q.bs(a,s.c))
B.c.h(b,2,q.bs(a,s.c))
return
case 3:B.c.h(b,0,q.bs(a,s.c))
return
case 4:B.c.h(b,0,q.bs(a,s.c))
B.c.h(b,1,q.bs(a,s.c))
return
case 6:B.c.h(b,0,q.bs(a,s.c))
B.c.h(b,1,q.bs(a,s.c))
B.c.h(b,2,q.bs(a,s.c))
B.c.h(b,3,q.bs(a,s.c))
return}throw A.e(A.p("Invalid color type: "+r+"."))},
e2(a,b){var s,r,q,p,o,n,m,l,k,j,i
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
return}throw A.e(A.p("Invalid color type: "+r+"."))}}
A.i8.prototype={
ai(){return"PngFilter."+this.b}}
A.kR.prototype={
aH(a){var s,r,q,p,o,n,m,l,k,j=this,i=8192,h=a.a
h=h==null?null:h.gbj()
if(!(h===!0&&a.gF()!==B.y))h=a.gaF()<8&&!a.gbi()&&a.gbm()>1
else h=!0
if(h)a=a.kA(B.e)
if(j.w==null){h=A.bk(!0,i)
j.w=h
h.b8(A.b([137,80,78,71,13,10,26,10],t.t))
s=A.bk(!0,i)
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
j.bt(h,"IHDR",A.N(s.c.buffer,0,s.a))
h=a.c
if(h!=null){s=A.bk(!0,i)
s.b8(new A.be(h.a))
s.V(0)
s.V(0)
s.b8(h.ky())
h=j.w
h.toString
j.bt(h,"iCCP",A.N(s.c.buffer,0,s.a))}if(a.gbi()){h=j.a
if(h!=null){h=h.a
h===$&&A.c("palette")
j.fw(h)}else{h=a.a
h=h==null?null:h.gP()
h.toString
j.fw(h)}}if(j.r){s=A.bk(!0,i)
h=j.e
h===$&&A.c("_frames")
s.aD(h)
s.aD(j.c)
h=j.w
h.toString
j.bt(h,"acTL",A.N(s.c.buffer,0,s.a))}}r=a.gbi()?1:a.gbm()
q=a.gF()===B.y?2:1
h=a.gX(a)
p=a.gM(a)
o=a.gM(a)
n=new Uint8Array(h*p*r*q+o)
j.iZ(0,a,n)
m=B.aL.fJ(n,j.d)
h=a.d
if(h!=null)for(h=A.eG(h,h.r,A.q(h).c);h.E();){p=h.d
o=a.d.l(0,p)
o.toString
A.av(o)
s=new A.i1(!0,new Uint8Array(8192))
s.b8(B.aK.c0(p))
s.V(0)
s.b8(B.aK.c0(o))
p=j.w
p.toString
o=s.c.buffer
l=s.a
o=new Uint8Array(o,0,l)
j.bt(p,"tEXt",o)}if(j.r){s=A.bk(!0,i)
s.aD(j.f)
s.aD(a.gX(a))
s.aD(a.gM(a))
s.aD(0)
s.aD(0)
s.dr(a.y)
s.dr(1000)
s.V(1)
s.V(0)
h=j.w
h.toString
j.bt(h,"fcTL",A.N(s.c.buffer,0,s.a));++j.f}if(j.f<=1){h=j.w
h.toString
j.bt(h,"IDAT",m)}else{k=A.bk(!0,i)
k.aD(j.f)
k.b8(m)
h=j.w
h.toString
j.bt(h,"fdAT",A.N(k.c.buffer,0,k.a));++j.f}},
kT(a){var s,r=this,q=r.w
if(q==null)return null
r.bt(q,"IEND",A.b([],t.t))
r.f=0
q=r.w
s=A.N(q.c.buffer,0,q.a)
r.w=null
return s},
kP(a,b){var s,r,q,p,o,n,m=this
if(a.gaq().length<=1||!1){m.r=!1
m.aH(a)}else{m.r=!0
m.e=a.gaq().length
m.c=a.r
if(a.gbi()){s=new A.hY(new Int32Array(256))
s.jf(256)
s.ko(a)
m.a=s
for(r=a.gaq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.ak)(r),++p){o=r[p]
if(o!==a){s.f0(o)
s.eL()
s.f_()
s.ez()}}}for(r=a.gaq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.ak)(r),++p){o=r[p]
n=m.a
if(n!=null)m.aH(n.h5(o))
else m.aH(o)}}r=m.kT(0)
r.toString
return r},
fw(a){var s,r,q,p=this
if(a.gF()===B.e&&a.b===3&&a.a===256){s=p.w
s.toString
p.bt(s,"PLTE",A.N(a.ga6(a),0,null))}else{s=a.a
r=A.bk(!0,s*3)
for(q=0;q<s;++q){r.V(B.b.i(a.aW(q)))
r.V(B.b.i(a.aV(q)))
r.V(B.b.i(a.aU(q)))}s=p.w
s.toString
p.bt(s,"PLTE",A.N(r.c.buffer,0,r.a))}if(a.b===4){s=a.a
r=A.bk(!0,s)
for(q=0;q<s;++q)r.V(B.b.i(a.br(q)))
s=p.w
s.toString
p.bt(s,"tRNS",A.N(r.c.buffer,0,r.a))}},
bt(a,b,c){t.L.a(c)
a.aD(c.length)
a.b8(new A.be(b))
a.b8(c)
a.aD(A.bB(c,A.bB(new A.be(b),0)))},
iZ(a,b,c){var s,r,q=this,p=b.gbi()?B.j8:q.b,o=b.ga6(b),n=b.a.gbp(),m=b.gbi()?1:b.gbm(),l=B.a.j(m*b.gaF()+7,3),k=b.gaF()+7>>>3,j=p.a,i=0,h=0,g=null,f=0
while(!0){s=b.a
s=s==null?null:s.b
if(!(f<(s==null?0:s)))break
r=new Uint8Array(o,h,n)
h+=n
switch(j){case 1:i=q.j3(r,k,l,c,i)
break
case 2:i=q.j4(r,g,k,c,i)
break
case 3:i=q.j_(r,g,k,l,c,i)
break
case 4:i=q.j1(r,g,k,l,c,i)
break
default:i=q.j0(r,k,c,i)
break}++f
g=r}},
fv(a,b,c,d,e){var s,r,q,p;--a
for(s=b.length,r=d.length;a>=0;e=q){q=e+1
p=c+a
if(!(p<s))return A.a(b,p)
p=b[p]
if(!(e<r))return A.a(d,e)
d[e]=p;--a}return e},
j0(a,b,c,d){var s,r,q,p=d+1,o=c.length
if(!(d<o))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<o))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.fv(b,a,r,c,d)
return d},
j3(a,b,c,d,e){var s,r,q,p,o,n,m,l=e+1,k=d.length
if(!(e<k))return A.a(d,e)
d[e]=1
for(e=l,s=0;s<c;s+=b)e=this.fv(b,a,s,d,e)
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
j4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=e+1,j=d.length
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
j_(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=f+1,g=e.length
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
js(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
j1(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2+1,d=a1.length
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
f=this.js(k,i,h)
e=a2+1
if(!(a2>=0&&a2<d))return A.a(a1,a2)
a1[a2]=g-f&255}return a2}}
A.ib.prototype={
skY(a){t.T.a(a)},
shd(a,b){t.T.a(b)},
slo(a){t.T.a(a)},
slp(a){t.T.a(a)}}
A.ic.prototype={
sbF(a,b){t.T.a(b)},
sbK(a){t.T.a(a)}}
A.bv.prototype={}
A.ig.prototype={
sbF(a,b){t.T.a(b)},
sbK(a){t.T.a(a)}}
A.ih.prototype={
sbF(a,b){t.T.a(b)},
sbK(a){t.T.a(a)}}
A.ij.prototype={
sbF(a,b){t.T.a(b)},
sbK(a){t.T.a(a)}}
A.ik.prototype={
sbF(a,b){t.T.a(b)},
sbK(a){t.T.a(a)}}
A.eZ.prototype={}
A.ii.prototype={}
A.kT.prototype={
hE(a){var s,r,q,p,o=this
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
A.cT.prototype={
fV(a,b,c,d,e,f,g){if(e==null)e=a.p()
switch(e){case 0:d.toString
this.k6(a,b,c,d)
break
case 1:if(f==null)f=this.k_(a,c)
d.toString
this.k5(a,b,c,d,f,g)
break
default:throw A.e(A.p("Unsupported compression: "+e))}},
lm(a,b,c,d){return this.fV(a,b,c,d,null,null,0)},
k_(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.p()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
k6(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.k.aL(s,0,r,255)
return}this.c=a.ab(r).a_()},
k5(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
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
this.iH(m,this.c,p)
p+=b}},
iH(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.aE()[0]=q
q=$.aV()
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
A.bl.prototype={
ai(){return"PsdColorMode."+this.b}}
A.id.prototype={
hF(a){var s,r,q=this
q.as=A.A(a,!0,null,0)
q.jJ()
if(q.c!==943870035)return
s=q.as.k()
q.as.ab(s)
s=q.as.k()
q.at=q.as.ab(s)
s=q.as.k()
q.ax=q.as.ab(s)
r=q.as
q.ay=r.ab(r.c-r.d)},
bH(a){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.c("_input")
s=s==null}else s=!0
if(s)return!1
r.jY()
r.jZ()
r.k0()
r.ay=r.ax=r.at=r.as=null
return!0},
fI(){if(!this.bH(0))return null
return this.lr()},
lr(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.a4(a0,a0,B.e,0,B.h,a.b,a0,0,4,a0,a1,!1)
a.y=a1
a1.kt(0)
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
if(h==null)h=new A.O()
g=B.b.i(h.gq(h))
f=B.b.i(h.gt())
e=B.b.i(h.gv(h))
d=B.b.i(h.gu(h))
k.toString
if(k>=0&&k<a.a&&o&&n<a.b){i=r.b
i.toString
c=a.y.a
b=c==null?a0:c.K(i+j,l,a0)
if(b==null)b=new A.O()
a.i7(B.b.i(b.gq(b)),B.b.i(b.gt()),B.b.i(b.gv(b)),B.b.i(b.gu(b)),g,f,e,d,p,q,b)}++j;++k}++m;++n}}++s}a1=a.y
a1.toString
return a1},
i7(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
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
case 1768188278:p=A.kV(a,e)
q=A.kV(b,f)
r=A.kV(c,g)
s=h
break
case 1818391150:p=A.kX(a,e)
q=A.kX(b,f)
r=A.kX(c,g)
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
case 1935897198:p=A.nf(a,e)
q=A.nf(b,f)
r=A.nf(c,g)
s=h
break
case 1684633120:p=A.kW(a,e)
q=A.kW(b,f)
r=A.kW(c,g)
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
case 1870030194:p=A.nd(a,e,d,h)
q=A.nd(b,f,d,h)
r=A.nd(c,g,d,h)
s=h
break
case 1934387572:p=A.ng(a,e)
q=A.ng(b,f)
r=A.ng(c,g)
s=h
break
case 1749838196:p=A.nb(a,e)
q=A.nb(b,f)
r=A.nb(c,g)
s=h
break
case 1984719220:p=A.nh(a,e)
q=A.nh(b,f)
r=A.nh(c,g)
s=h
break
case 1816947060:p=A.nc(a,e)
q=A.nc(b,f)
r=A.nc(c,g)
s=h
break
case 1884055924:p=A.ne(a,e)
q=A.ne(b,f)
r=A.ne(c,g)
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
case 1936553316:p=A.na(a,e)
q=A.na(b,f)
r=A.na(c,g)
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
jJ(){var s,r,q,p,o,n=this,m=n.as
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
jY(){var s,r,q,p,o,n,m,l=this,k=l.at
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
if(r===943868237)k.h(0,q,new A.ie())}},
jZ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h===$&&A.c("_layerAndMaskData")
h.d=h.b
s=h.k()
if((s&1)!==0)++s
r=i.ax.ab(s)
h=t.k9
i.shU(t.f0.a(A.b([],h)))
if(s>0){q=r.p()
$.aD()[0]=q
q=$.aU()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.mi,n=t.na,m=0;m<p;++m){l=new A.eY(A.a0(q,o),A.b([],h),A.b([],n))
l.hG(r)
k=i.w
k===$&&A.c("layers")
B.c.H(k,l)}}m=0
while(!0){h=i.w
h===$&&A.c("layers")
if(!(m<h.length))break
h[m].lj(r,i);++m}s=i.ax.k()
j=i.ax.ab(s)
if(s>0){j.p()
j.p()
j.p()
j.p()
j.p()
j.p()
j.B()}},
k0(){var s,r,q,p,o,n,m,l,k=this,j="channels",i="mergeImageChannels",h=k.ay
h===$&&A.c("_imageData")
h.d=h.b
s=h.p()
if(s===1){h=k.b
r=k.e
r===$&&A.c(j)
q=h*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=k.ay.p()}else p=null
k.shV(t.I.a(A.b([],t.mS)))
o=0
while(!0){h=k.e
h===$&&A.c(j)
if(!(o<h))break
h=k.x
h===$&&A.c(i)
r=k.ay
r.toString
n=o===3?-1:o
n=new A.cT(n)
n.fV(r,k.a,k.b,k.f,s,p,o)
B.c.H(h,n);++o}h=k.r
r=k.f
n=k.a
m=k.b
l=k.x
l===$&&A.c(i)
k.y=A.oR(h,r,n,m,l)},
shU(a){this.w=t.f0.a(a)},
shV(a){this.x=t.I.a(a)},
$ia2:1}
A.ie.prototype={}
A.eY.prototype={
hG(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.k(),a6=$.Y()
a6[0]=a5
a5=$.al()
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
a4.shW(t.I.a(A.b([],t.mS)))
s=a7.p()
for(r=0;r<s;++r){a5=a7.p()
$.aD()[0]=a5
a5=$.aU()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.k()
a5=a4.as
a5===$&&A.c("channels")
B.c.H(a5,new A.cT(q))}p=a7.k()
if(p!==943868237)throw A.e(A.p("Invalid PSD layer signature: "+B.a.cM(p,16)))
a4.r=a7.k()
a4.w=a7.B()
a7.B()
a4.y=a7.B()
if(a7.B()!==0)throw A.e(A.p("Invalid PSD layer data"))
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
if(o>0)new A.kT().hE(n.ab(o))
o=n.B()
n.ac(o)
l=4-B.a.a2(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.ay,k=a4.cy,j=t.t,i=t.dM;n.d<a5;){p=n.k()
if(p!==943868237)throw A.e(A.p("PSD invalid signature for layer additional data: "+B.a.cM(p,16)))
h=n.ac(4)
o=n.k()
g=n.af(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.rk(h,g))
if(h==="lrFX"){e=A.u(i.a(a6.l(0,"lrFX")).b,null,0)
e.p()
d=e.p()
for(c=0;c<d;++c){e.ac(4)
b=e.ac(4)
a=e.k()
if(b==="dsdw"){a0=new A.ic()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbF(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
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
a0.sbK(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="isdw"){a0=new A.ih()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbF(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
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
a0.sbK(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="oglw"){a0=new A.ij()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbF(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ac(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.sbK(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="iglw"){a0=new A.ig()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbF(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
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
a0.sbK(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="bevl"){a0=new A.ib()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.ac(8)
e.ac(8)
a0.skY(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.shd(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
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
if(a0.a===2){a0.slo(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.slp(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="sofi"){a0=new A.ik()
B.c.H(k,a0)
a0.a=e.k()
e.ac(4)
a0.sbF(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.sbK(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else e.d+=a}}}}},
lj(a,b){var s,r,q,p,o,n=this,m=0
while(!0){s=n.as
s===$&&A.c("channels")
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.c("width")
q=n.f
q===$&&A.c("height")
s.lm(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.c("width")
o=n.f
o===$&&A.c("height")
n.cx=A.oR(r,q,p,o,s)},
shW(a){this.as=t.I.a(a)}}
A.dN.prototype={}
A.kU.prototype={
b2(a,b,c){var s,r,q,p=null,o=A.oQ(b)
this.a=o
s=1
if(s===1||!1){o=o.fI()
return o}for(r=p,q=0;q<s;++q){o=this.a
c=o==null?p:o.fI()
if(c==null)continue
if(r==null){c.w=B.cr
r=c}else r.aH(c)}return r}}
A.il.prototype={}
A.dQ.prototype={}
A.aA.prototype={
b9(a,b){var s=this
return new A.aA(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.dO.prototype={$ia2:1,
gM(a){return this.b}}
A.dP.prototype={$ia2:1,
gM(a){return this.f}}
A.f_.prototype={$ia2:1,
gM(a){return this.b}}
A.b6.prototype={
scz(a){var s=this.a,r=this.b+1
if(!(r<s.length))return A.a(s,r)
s[r]=a},
cP(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.n,s)
return new A.dQ(B.n[s],B.n[q>>>4&31],B.q[q&15])}else return new A.dQ(B.q[q>>>7&15],B.q[q>>>3&15],B.a7[q&7])},
cR(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.n,s)
return new A.aA(B.n[s],B.n[q>>>4&31],B.q[q&15],255)}else return new A.aA(B.q[q>>>7&15],B.q[q>>>3&15],B.a7[q&7],B.a7[q>>>11&7])},
cQ(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.n,s)
return new A.dQ(B.n[s],B.n[q>>>5&31],B.n[q&31])}else return new A.dQ(B.q[q>>>8&15],B.q[q>>>4&15],B.q[q&15])},
cS(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.n,s)
return new A.aA(B.n[s],B.n[q>>>5&31],B.n[q&31],255)}else return new A.aA(B.q[q>>>8&15],B.q[q>>>4&15],B.q[q&15],B.a7[q>>>12&7])},
cq(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
bA(a){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.scz(r.cq())
r.d=s>>>1&16383
r.scz(r.cq())
r.e=(s>>>15&1)===1
r.scz(r.cq())
r.f=s>>>16&32767
r.scz(r.cq())
r.r=(s>>>31&1)===1
r.scz(r.cq())}}
A.kY.prototype={
bb(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.it(a)
if(s!=null){r.a=a
return r.b=s}}s=r.iG(a)
if(s!=null){r.a=a
return r.b=s}s=r.iE(a)
if(s!=null){r.a=a
return r.b=s}return null},
iG(a){var s,r,q=A.A(a,!1,null,0)
if(q.k()!==52)return null
if(q.k()!==55727696)return null
s=A.b([0,0,0,0],t.t)
r=new A.dP(s)
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
iE(a){var s,r,q=A.A(a,!1,null,0)
if(q.k()!==52)return null
s=new A.dO()
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
it(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.A(a,!1,m,0)
if(k.k()!==0)return m
s=new A.f_()
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
if(p instanceof A.f_){p=p.a
s=q.b
s=s.gM(s)
r=q.a
r.toString
return q.dI(p,s,r)}else if(p instanceof A.dO){p=q.a
p.toString
return q.iD(p)}else if(p instanceof A.dP){p=q.a
p.toString
return q.iF(p)}return null},
b2(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)},
iD(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.length
if(f<52||h.b==null)return g
s=h.b
s.toString
t.fF.a(s)
r=A.A(a,!1,g,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return g
p=s.a
o=s.b
if(p*o*s.f/8>f-52)return g
switch(s.d&255){case 16:n=A.a4(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
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
case 17:n=A.a4(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
j=r.p()
i=(j&1)!==0?255:0
m.sq(0,j>>>8&248)
m.st(j>>>3&248)
m.sv(0,(j&62)<<2)
m.su(0,i)}return n
case 18:n=A.a4(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
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
case 19:n=A.a4(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
j=r.p()
m.sq(0,j>>>8&248)
m.st(j>>>3&252)
m.sv(0,(j&31)<<3)}return n
case 20:n=A.a4(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
j=r.p()
m.sq(0,(j&31)<<3)
m.st(j>>>2&248)
m.sv(0,j>>>7&248)}return n
case 21:n=A.a4(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
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
case 22:n=A.a4(g,g,B.e,0,B.h,o,g,0,1,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sq(0,p[o])}return n
case 23:n=A.a4(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gG(s);s.E();){m=s.gJ(s)
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
case 25:return s.y===0?h.eH(p,o,r.a_()):h.dI(p,o,r.a_())}return g},
iF(a){var s,r,q=this.b
if(!(q instanceof A.dP))return null
s=A.A(a,!1,null,0)
r=s.d+=52
s.d=r+q.Q
if(q.c[0]===0)switch(q.b){case 2:return this.eH(q.r,q.f,s.a_())
case 3:return this.dI(q.r,q.f,s.a_())}return null},
eH(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.a4(b6,b6,B.e,0,B.h,c7,b6,0,3,b6,c6,!1),b8=c6/4|0,b9=b8-1,c0=A.aY(c8.buffer,0,b6),c1=new A.b6(c0),c2=new A.b6(A.aY(c8.buffer,0,b6)),c3=new A.b6(A.aY(c8.buffer,0,b6)),c4=new A.b6(A.aY(c8.buffer,0,b6)),c5=new A.b6(A.aY(c8.buffer,0,b6))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.bP(p,r)<<1>>>0
c1.bA(0)
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.bP(f,i)<<1>>>0
c2.bA(0)
c3.b=A.bP(e,i)<<1>>>0
c3.bA(0)
c4.b=A.bP(f,h)<<1>>>0
c4.bA(0)
c5.b=A.bP(e,h)<<1>>>0
c5.bA(0)
d=c2.cP()
if(!(k>=0&&k<16))return A.a(B.l,k)
c=B.l[k][0]
b=c3.cP()
a=B.l[k][1]
a0=c4.cP()
a1=B.l[k][2]
a2=c5.cP()
a3=B.l[k][3]
a4=c2.cQ()
a5=B.l[k][0]
a6=c3.cQ()
a7=B.l[k][1]
a8=c4.cQ()
a9=B.l[k][2]
b0=c5.cQ()
b1=B.l[k][3]
b2=B.b6[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.S(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
dI(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.a4(a4,a4,B.e,0,B.h,b5,a4,0,4,a4,b4,!1),a6=b4/4|0,a7=a6-1,a8=A.aY(b6.buffer,0,a4),a9=new A.b6(a8),b0=new A.b6(A.aY(b6.buffer,0,a4)),b1=new A.b6(A.aY(b6.buffer,0,a4)),b2=new A.b6(A.aY(b6.buffer,0,a4)),b3=new A.b6(A.aY(b6.buffer,0,a4))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.bP(p,r)<<1>>>0
a9.bA(0)
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.bP(f,i)<<1>>>0
b0.bA(0)
b1.b=A.bP(e,i)<<1>>>0
b1.bA(0)
b2.b=A.bP(f,h)<<1>>>0
b2.bA(0)
b3.b=A.bP(e,h)<<1>>>0
b3.bA(0)
d=b0.cR()
if(!(k>=0&&k<16))return A.a(B.l,k)
c=B.l[k][0]
b=b1.cR()
a=B.l[k][1]
a=new A.aA(d.a*c,d.b*c,d.c*c,d.d*c).b9(0,new A.aA(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.cR()
c=B.l[k][2]
c=a.b9(0,new A.aA(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.cR()
a=B.l[k][3]
a0=c.b9(0,new A.aA(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.cS()
b=B.l[k][0]
c=b1.cS()
d=B.l[k][1]
d=new A.aA(a.a*b,a.b*b,a.c*b,a.d*b).b9(0,new A.aA(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cS()
b=B.l[k][2]
b=d.b9(0,new A.aA(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.cS()
d=B.l[k][3]
a1=b.b9(0,new A.aA(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.b6[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.al(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.f7.prototype={
cc(a,b){var s,r,q=this
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
fP(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.C||r===B.D){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$ia2:1}
A.aB.prototype={
ai(){return"TgaImageType."+this.b}}
A.la.prototype={
b2(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)},
bb(a){var s,r,q,p,o=this
o.a=new A.f7(B.ae)
s=A.A(a,!1,null,0)
o.b=s
r=s.ab(18)
o.a.cc(0,r)
if(!o.a.fP())return null
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
else if(r===B.bN||r===B.D)return s.iI()
else if(r===B.C)return s.eG()
return null},
eC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.A(a,!1,null,0),e=g.a.f
if(e===16){e=g.b
e===$&&A.c("input")
s=e.p()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<g.a.e;++n){b.bz(n,r)
b.bx(n,q)
b.bw(n,p)
b.bv(n,o)}}else{m=e===32
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
b.bx(n,k)
b.bw(n,l)
b.bv(n,o)}}},
iI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.a,a0=a.z,a1=a0===16,a2=a1||a0===32,a3=a.x,a4=a.y,a5=a2?4:3
a=a.c
s=A.a4(b,b,B.e,0,B.h,a4,b,0,a5,b,a3,a===B.C||a===B.D)
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
m=A.a4(c,c,B.e,0,B.h,o,c,0,n,c,q,s===B.C||s===B.D)
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
A.lc.prototype={
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
q=B.a.aN(q,p)
if(!(a<9))return A.a(B.u,a)
r=s+(q&B.u[a])
n.c=p}return r}}
A.iA.prototype={
A(a){var s=this,r=s.a,q=$.nU().l(0,r)
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
switch(r.a){case 1:return o.e=new A.bJ(new Uint8Array(A.H(p.ab(s).a_())))
case 2:return o.e=new A.cu(s===0?"":p.ac(s-1))
case 7:return o.e=new A.bJ(new Uint8Array(A.H(p.ab(s).a_())))
case 3:return o.e=A.oo(p,s)
case 4:return o.e=A.oj(p,s)
case 5:return o.e=A.ok(p,s)
case 11:return o.e=A.op(p,s)
case 12:return o.e=A.oi(p,s)
case 6:return o.e=new A.ca(new Int8Array(A.H(A.oD(p.a_().buffer,0,s))))
case 8:return o.e=A.on(p,s)
case 9:return o.e=A.ol(p,s)
case 10:return o.e=A.om(p,s)
case 0:return null}}}
A.le.prototype={
kI(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.U(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dH(a,r,c)
r+=s}},
dH(a,b,c){var s,r,q,p,o,n,m,l=this
l.d=0
for(s=l.a,r=!0;c<s;){for(;r;){q=l.bR(10)
if(!(q<1024))return A.a(B.ac,q)
p=B.ac[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|l.aO(2))>>>0
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
l.az(4-(n&7))}else if(o===0)throw A.e(A.p("TIFFFaxDecoder0"))
else if(o===15)throw A.e(A.p("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
l.az(10-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!1}}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}for(;!r;){q=l.aO(4)
if(!(q<16))return A.a(B.a9,q)
p=B.a9[q]
m=p>>>5&2047
if(m===100){q=l.bR(9)
if(!(q<512))return A.a(B.a6,q)
p=B.a6[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){l.az(5)
q=l.aO(4)
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
l.b0(a,b,c,m)
c+=m
l.az(4-(n&7))}else if(o===15)throw A.e(A.p("TIFFFaxDecoder2"))
else{l.b0(a,b,c,m)
c+=m
l.az(9-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!0}}}else{if(m===200){q=l.aO(2)
if(!(q<4))return A.a(B.Y,q)
p=B.Y[q]
m=p>>>5&2047
l.b0(a,b,c,m)
c+=m
l.az(2-(p>>>1&15))
B.c.h(l.f,l.d++,c)}else{l.b0(a,b,c,m)
c+=m
l.az(4-(p>>>1&15))
B.c.h(l.f,l.d++,c)}r=!0}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}}B.c.h(l.f,l.d++,c)},
kJ(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.U(s+7,8)
q=A.aj(2,null,!1,t.E)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.f9()!==1)throw A.e(A.p("TIFFFaxDecoder3"))
a0.dH(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.f9()===0){n=a0.e
a0.sea(a0.f)
a0.se7(n)
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
g=a0.aO(7)
if(!(g<128))return A.a(B.Z,g)
g=B.Z[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.b0(a1,p,m,h-m)}a0.az(7-e)
m=h
l=m}else if(f===1){a0.az(7-e)
d=j+1
c=d+1
if(k){m+=a0.d1()
B.c.h(a0.f,j,m)
b=a0.d0()
a0.b0(a1,p,m,b)
m+=b
B.c.h(a0.f,d,m)}else{b=a0.d0()
a0.b0(a1,p,m,b)
m+=b
B.c.h(a0.f,j,m)
m+=a0.d1()
B.c.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.h(a0.f,j,a)
k=!k
if(k)a0.b0(a1,p,m,a-m)
a0.az(7-e)}else throw A.e(A.p("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.h(a0.f,j,m)
a0.d=j+1}else a0.dH(a1,p,a3)
p+=r}},
kM(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
s=a3.a
r=B.a.U(s+7,8)
q=A.aj(2,null,!1,t.E)
p=a3.f
a3.d=0
a3.d=1
B.c.h(p,0,s)
B.c.h(p,a3.d++,s)
for(o=0,n=0;n<a7;++n){m=a3.e
a3.sea(a3.f)
a3.se7(m)
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
f=a3.aO(7)
if(!(f<128))return A.a(B.Z,f)
f=B.Z[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a3.b0(a4,o,l,g-l)}a3.az(7-d)
l=g
k=l}else if(e===1){a3.az(7-d)
c=i+1
b=c+1
if(j){l+=a3.d1()
B.c.h(m,i,l)
a=a3.d0()
a3.b0(a4,o,l,a)
l+=a
B.c.h(m,c,l)}else{a=a3.d0()
a3.b0(a4,o,l,a)
l+=a
B.c.h(m,i,l)
l+=a3.d1()
B.c.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.h(m,i,a0)
j=!j
if(j)a3.b0(a4,o,l,a0-l)
a3.az(7-d)
l=a0
i=c
k=l}else if(e===11){if(a3.aO(3)!==7)throw A.e(A.p("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.aO(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
if(a3.aO(1)===0){if(!j){c=i+1
B.c.h(m,i,l)
i=c}j=!0}else{if(j){c=i+1
B.c.h(m,i,l)
i=c}j=!1}a2=!0}if(a1===5){if(!j){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
j=!0}else{l+=a1
c=i+1
B.c.h(m,i,l)
a3.b0(a4,o,l,1);++l
i=c
j=!1}}}else throw A.e(A.p("TIFFFaxDecoder5 "+e))}B.c.h(m,i,l)
a3.d=i+1
o+=r}},
d1(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.bR(10)
if(!(q<1024))return A.a(B.ac,q)
p=B.ac[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.aO(2))>>>0
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.az(4-(n&7))}else if(o===0)throw A.e(A.p("TIFFFaxDecoder0"))
else if(o===15)throw A.e(A.p("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.az(10-o)
if((p&1)===0)r=!1}}return s},
d0(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.aO(4)
if(!(q<16))return A.a(B.a9,q)
p=B.a9[q]
o=p>>>5&2047
if(o===100){q=l.bR(9)
if(!(q<512))return A.a(B.a6,q)
p=B.a6[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.az(5)
q=l.aO(4)
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.az(4-(m&7))}else if(n===15)throw A.e(A.p("TIFFFaxDecoder2"))
else{s+=m&2047
l.az(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.aO(2)
if(!(q<4))return A.a(B.Y,q)
p=B.Y[q]
s+=p>>>5&2047
l.az(2-(p>>>1&15))}else{s+=o
l.az(4-(p>>>1&15))}r=!0}}return s},
f9(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.bR(12)!==1)throw A.e(A.p("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.bR(s)!==0)throw A.e(A.p(p))
if(s<4)if(q.bR(8)!==0)throw A.e(A.p(p))
for(;r=q.bR(8),r!==1;)if(r!==0)throw A.e(A.p(p))}if(q.at===0)return 1
else return q.aO(1)},
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
b0(a,b,c,d){var s,r,q,p,o,n=8*b+A.t(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.W(1,7-k)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
while(!0){if(!(s>0&&n<m))break
p=(p|s)>>>0
s=s>>>1;++n}a.h(0,l,p)}l=B.a.j(n,3)
for(r=m-7;n<r;l=o){o=l+1
J.F(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.j(n,3)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
J.F(r,q,(r[q]|B.a.W(1,7-(n&7)))>>>0);++n}},
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
l=B.M[c[s]&255]}}}else throw A.e(A.p("TIFFFaxDecoder7"))
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
aO(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r
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
m=B.M[g[s]&255]}}else throw A.e(A.p("TIFFFaxDecoder7"))
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
sea(a){this.e=t.k.a(a)},
se7(a){this.f=t.k.a(a)}}
A.iB.prototype={
hI(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=A.u(a2,a,0),a1=a2.p()
for(s=b.a,r=0;r<a1;++r){q=a2.p()
p=a2.p()
if(!(p<13))return A.a(B.a0,p)
o=B.a0[p]
n=B.a3[p]
m=a2.k()
if(m*n>4)l=a2.k()
else{l=a2.d
a2.d=l+4}k=new A.iA(q,o,m,l,a0)
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
if(i!=null){j=i.bu().buffer
g=B.a.U(j.byteLength-0,2)
b.skv(new Uint16Array(j,0,g))
b.id=0
j=b.go.length/3|0
b.k1=j
b.k2=j*2}}}f=b.go
j=f!=null
if(j&&b.d===B.aB)b.r=1
if(b.b===0||b.c===0)return
if(j&&b.f===8){e=f.length
for(r=0;r<e;++r)f[r]=f[r]>>>8}if(b.d===B.az)b.y=!0
if(s.aK(0,324)){b.ax=b.c9(322)
b.ay=b.c9(323)
b.sfZ(b.d7(324))
b.sfY(b.d7(325))}else{b.ax=b.d6(322,b.b)
if(!s.aK(0,278))b.ay=b.d6(323,b.c)
else{d=b.c9(278)
if(d===-1)b.ay=b.c
else b.ay=d}b.sfZ(b.d7(273))
b.sfY(b.d7(279))}j=b.b
c=b.ax
b.cx=B.a.aA(j+c-1,c)
c=b.c
j=b.ay
b.cy=B.a.aA(c+j-1,j)
b.dx=b.d6(266,1)
b.dy=b.c9(292)
b.fr=b.c9(293)
b.c9(338)
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
else{if(s.aK(0,530)){i=s.l(0,530).bn(0)
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
p=A.a4(d,d,s,0,B.h,e.c,d,0,q,d,c,r)
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
c.aX(l,k,j,o[i])}}h=0
g=0
while(!0){c=e.cy
c===$&&A.c("tilesY")
if(!(h<c))break
f=0
while(!0){c=e.cx
c===$&&A.c("tilesX")
if(!(f<c))break
e.iJ(a1,p,f,h);++f;++g}++h}return p},
iJ(b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null
if(b2.x===B.ay){b2.iw(b4,b5,b6,b7)
return}p=b2.cx
p===$&&A.c("tilesX")
o=b7*p+b6
p=b2.ch
if(!(o>=0&&o<p.length))return A.a(p,o)
b4.sfR(0,p[o])
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
else if(p===5){r=A.A(new Uint8Array(j),!1,b3,0)
q=A.oB()
try{J.qd(q,A.u(b4,s,0),r.a)}catch(i){}if(b2.z===2)for(h=0;h<b2.ay;++h){g=b2.r
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
J.F(m,p,k+b[c]);++f}}}else if(p===32773){r=A.A(new Uint8Array(j),!1,b3,0)
b2.eF(b4,j,r.a)}else if(p===32946){p=A.or(b4.cL(0,0,s)).c
r=A.A(t.L.a(A.N(p.c.buffer,0,p.a)),!1,b3,0)}else if(p===8)r=A.A(B.R.cB(A.cB(t.L.a(b4.cL(0,0,s)),1,b3,0),!1),!1,b3,0)
else if(p===6){b2.jj(new A.hE().bS(0,t.D.a(b4.cL(0,0,s))),b5,n,l,b2.ax,b2.ay)
return}else throw A.e(A.p("Unsupported Compression Type: "+p))
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
$.Y()[0]=p
p=$.cm()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else if(p===64)a3=r.dl()
else if(p===16){p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a3=m[p]}else a3=0
p=b5.a
if(p!=null)p.aE(a1,a,a3)}else{m=b2.f
if(m===8)if(p===B.j){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.aE()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a3=m[p]}else if(m===16)if(p===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.p()
else if(m===32)if(p===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a6=m[p]}}else if(p===16){if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.p()}else if(p===32){if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()}else{a5=0
a6=0}p=b5.a
if(p!=null)p.S(a1,a,a5,a6,0)}else if(p===3){p=b2.w
if(p===B.U){p=b2.f
if(p===32){p=r.k()
m=$.Y()
m[0]=p
p=$.cm()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]}else if(p===64){a7=r.dl()
a8=0
a9=0}else if(p===16){p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.p()
m=$.a_
m=m!=null?m:A.a3()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a9=m[p]}}else if(m===16){if(p===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.p()}else if(m===32){if(p===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()}else{a7=0
a8=0
a9=0}p=b5.a
if(p!=null)p.S(a1,a,a7,a8,a9)}}else if(p>=4){p=b2.w
if(p===B.U){p=b2.f
if(p===32){p=r.k()
m=$.Y()
m[0]=p
p=$.cm()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]
m[0]=r.k()
b0=p[0]}else if(p===64){a7=r.dl()
a8=0
a9=0
b0=0}else if(p===16){p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.p()
m=$.a_
m=m!=null?m:A.a3()
if(!(p<m.length))return A.a(m,p)
a9=m[p]
p=r.p()
m=$.a_
m=m!=null?m:A.a3()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=m
m=$.aV()
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
$.aE()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
b0=m[p]}}else if(m===16){if(p===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.p()
if(b2.w===B.j){p=r.p()
$.aD()[0]=p
p=$.aU()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.p()}else if(m===32){if(p===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()
if(b2.w===B.j){p=r.k()
$.Y()[0]=p
p=$.al()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.k()}else{a7=0
a8=0
a9=0
b0=0}if(b2.d===B.bR){b1=A.pF(a7,a8,a9,b0)
a7=b1[0]
a8=b1[1]
a9=b1[2]
p=b5.a
b0=p==null?b3:p.gD()
if(b0==null)b0=0}p=b5.a
if(p!=null)p.al(a1,a,a7,a8,a9,b0)}}++a2;++a1}++a0;++a}}else throw A.e(A.p("Unsupported bitsPerSample: "+p))},
jj(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.K(q,s,null)
if(p==null)p=new A.O()
b.bO(q+c,r,p)}},
iw(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.cx
a6===$&&A.c("tilesX")
r=b0*a6+a9
a6=a4.ch
if(!(r>=0&&r<a6.length))return A.a(a6,r)
a7.sfR(0,a6[r])
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
s=A.A(new Uint8Array(a6*p),!1,a5,0)
a4.eF(a7,l,s.a)}else if(n===5){s=A.A(new Uint8Array(a6*p),!1,a5,0)
A.oB().fH(0,A.u(a7,m,0),s.a)
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
J.F(n,a6,h+f[p]);++i}}}else if(n===2){s=A.A(new Uint8Array(a6*p),!1,a5,0)
try{A.nm(a4.dx,a6,p).kI(s,a7,0,a4.ay)}catch(e){}}else if(n===3){s=A.A(new Uint8Array(a6*p),!1,a5,0)
try{A.nm(a4.dx,a6,p).kJ(s,a7,0,a4.ay,a4.dy)}catch(e){}}else if(n===4){s=A.A(new Uint8Array(a6*p),!1,a5,0)
try{A.nm(a4.dx,a6,p).kM(s,a7,0,a4.ay,a4.fr)}catch(e){}}else if(n===8)s=A.A(B.R.cB(A.cB(t.L.a(a7.cL(0,0,m)),1,a5,0),!1),!1,a5,0)
else if(n===32946){a6=A.or(a7.cL(0,0,m)).c
s=A.A(t.L.a(A.N(a6.c.buffer,0,a6.a)),!1,a5,0)}else if(n===1)s=a7
else throw A.e(A.p("Unsupported Compression Type: "+n))
d=new A.lc(s)
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
for(s=J.ac(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.aE()[0]=m
m=$.aV()
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
d6(a,b){var s=this.a
if(!s.aK(0,a))return b
s=s.l(0,a).bn(0)
s=s==null?null:s.i(0)
return s==null?0:s},
c9(a){return this.d6(a,0)},
d7(a){var s,r=this.a
if(!r.aK(0,a))return null
s=r.l(0,a)
r=s.bn(0)
r.toString
return A.n6(s.c,r.gbM(r),t.p)},
sfZ(a){this.ch=t.T.a(a)},
sfY(a){this.CW=t.T.a(a)},
skv(a){this.go=t.T.a(a)}}
A.cV.prototype={
ai(){return"TiffFormat."+this.b}}
A.ag.prototype={
ai(){return"TiffPhotometricType."+this.b}}
A.b9.prototype={
ai(){return"TiffImageType."+this.b}}
A.iC.prototype={$ia2:1}
A.kF.prototype={
fH(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="_out",i="_bufferLength"
t.L.a(c)
k.shQ(c)
s=c.length
k.w=0
r=t.D.a(b.a)
k.e=r
q=k.f=r.length
k.b=b.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.e(A.p("Invalid LZW Data"))
k.eY()
k.d=k.c=0
p=k.dP()
r=k.x
o=0
while(!0){if(!(p!==257&&k.w<s))break
if(p===256){k.eY()
p=k.dP()
k.as=0
if(p===257)break
q=k.r
q===$&&A.c(j)
J.F(q,k.w++,p)
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
J.F(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.en(o,r[q])}else{k.eR(o)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.F(q,m,r[n])}q=k.r
q===$&&A.c(j)
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.F(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.en(o,r[l])}o=p}p=k.dP()}},
en(a,b){var s,r=this,q=r.y
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
dP(){var s,r,q,p,o=this,n=o.b,m=o.f
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
shQ(a){this.r=t.L.a(a)}}
A.ld.prototype={
ap(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.c("_input")
r=q.bS(0,s)
return r},
b2(a,b,c){var s=this,r=A.A(b,!1,null,0)
s.c=r
r=s.fb(r)
s.a=r
if(r==null)return null
return s.ap(0)},
fb(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.b([],t.fZ),g=new A.iC(h),f=a.p()
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
try{m=new A.iB(A.a0(q,n),B.aA,B.bP,B.js)
m.hI(s)
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
A.lm.prototype={
cC(){var s,r=this.a,q=r.bo()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bo()!==2752925)return!1
s=this.b
s.a=r.p()
s.b=r.p()
return!0},
bH(a){var s,r,q=this,p=null
if(!q.j9())return p
s=q.b
r=s.a
q.d=A.a4(p,p,B.e,0,B.h,s.b,p,0,4,p,r,!1)
q.je()
if(!q.jw())return p
return q.d},
j9(){var s,r,q,p,o=this
if(!o.cC())return!1
o.fr=A.tb()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.h(s,r,new A.iP(q,p,new Int32Array(2)))}o.y=o.Q=0
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
p=A.p_(s.af(p))
o.c=p
s.d+=q.d
p.Y(1)
o.c.Y(1)
o.jC(o.x,o.fr)
o.jv()
if(!o.jy(s))return!1
o.jA()
o.c.Y(1)
o.jz()
return!0},
jC(a,b){var s,r,q,p=this,o=p.c
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
jv(){var s,r,q,p=this,o=p.w,n=p.c
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
jy(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=this.c
g===$&&A.c("br")
g=B.a.O(1,g.Y(2))
this.cy=g
s=g-1
r=s*3
if(h<r)return!1
for(g=this.db,q=0,p=0;p<s;++p,r=i){o=a.cW(3,q)
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
n=new A.f9(a.bX(i-r,r))
n.b=254
n.c=0
n.d=-8
B.c.h(g,p,n)
q+=3}B.c.h(g,s,A.p_(a.bX(h-r,a.d-a.b+r)))
return r<h},
jA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.c("br")
s=e.Y(7)
r=f.c.Y(1)!==0?f.c.ci(4):0
q=f.c.Y(1)!==0?f.c.ci(4):0
p=f.c.Y(1)!==0?f.c.ci(4):0
o=f.c.Y(1)!==0?f.c.ci(4):0
n=f.c.Y(1)!==0?f.c.ci(4):0
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
jz(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.c("br")
n=o.a1(B.dK[s][r][q][p])!==0?m.c.Y(8):B.i5[s][r][q][p]
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
jF(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.bh
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.aQ
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
je(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.bU=e
s=J.az(4,t.jz)
for(e=t.by,r=0;r<4;++r)s[r]=A.b([new A.bV(),new A.bV()],e)
h.shZ(t.mL.a(s))
e=h.at
e.toString
s=J.az(e,t.ij)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.fd(p,o,new Uint8Array(8))}h.si1(t.f4.a(s))
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
h.p1=A.A(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.A(new Uint8Array(p),!1,g,k)
h.p3=A.A(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.A(new Uint8Array(f),!1,g,0)
j=f+1>>>1
h.rx=A.A(new Uint8Array(j),!1,g,0)
h.ry=A.A(new Uint8Array(j),!1,g,0)
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
s=J.az(i,t.f_)
for(q=0;q<i;++q)s[q]=new A.fb()
h.si0(t.jt.a(s))
f=h.at
f.toString
s=J.az(f,t.h2)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.fc(e,new Uint8Array(16))}h.si_(t.as.a(s))
f=h.at
f.toString
h.shY(t.kb.a(A.aj(f,g,!1,t.fA)))
h.jF()
A.rD()
h.e=new A.ln()
return!0},
jw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="isIntra4x4"
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
k=e.aP
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
e.jx()
if(!h)h=e.jB(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.c(d)
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.bh
p.toString
if(p>0){p=e.k4
p===$&&A.c("_fInfo")
o=e.y1
m=e.aQ
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
e.kb()
p=e.bh
p.toString
if(p>0){p=e.y2
o=e.ch
o===$&&A.c("_tlMbY")
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}else f=!1}else f=!1
if(!e.j5(f))return!1
p=++e.y2}return!0},
kb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="_dsp",a6=a3.y2,a7=a3.ok
a7===$&&A.c("_yuvBlock")
s=A.A(a7,!1,a4,40)
r=A.A(a7,!1,a4,584)
q=A.A(a7,!1,a4,600)
a7=a6>0
p=0
while(!0){o=a3.at
o.toString
if(!(p<o))break
o=a3.aP
o===$&&A.c("_mbData")
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bl(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bl(l,4,r,o)
q.bl(l,4,q,o)}}else{for(m=0;m<16;++m)J.F(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.F(r.a,r.d+o,129)
J.F(q.a,q.d+o,129)}if(a7){J.F(q.a,q.d+-33,129)
J.F(r.a,r.d+-33,129)
J.F(s.a,s.d+-33,129)}}o=a3.k2
o===$&&A.c("_yuvT")
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.bV(-32,16,k.a)
r.bV(-32,8,k.b)
q.bV(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bC(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bC(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bC(o,l,l+9,127)}o=n.b
o===$&&A.c("isIntra4x4")
if(o){h=A.u(s,a4,-16)
g=h.cN()
if(a7){o=a3.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bC(l,f,f+4,o)}else{o=a3.k2
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
a3.eI(i,new A.aq(j,l,384,l,!1),c)}}else{o=A.p2(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.bb,o)
B.bb[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.u(s,a4,B.bq[d])
i.toString
o=d*16
a3.eI(i,new A.aq(j,o,384,o,!1),c)}}o=n.f
o===$&&A.c("nonZeroUV")
l=A.p2(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.an,l)
B.an[l].$1(r)
B.an[l].$1(q)
b=new A.aq(j,256,384,256,!1)
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bC(b,r)
l.bC(A.u(b,a4,16),A.u(r,a4,4))
f=A.u(b,a4,32)
a=A.u(r,a4,128)
l.bC(f,a)
l.bC(A.u(f,a4,16),A.u(a,a4,4))}else{l===$&&A.c(a5)
l.h1(b,r)}}a0=new A.aq(j,320,384,320,!1)
o=o>>>8
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bC(a0,q)
l.bC(A.u(a0,a4,16),A.u(q,a4,4))
o=A.u(a0,a4,32)
f=A.u(q,a4,128)
l.bC(o,f)
l.bC(A.u(o,a4,16),A.u(f,a4,4))}else{l===$&&A.c(a5)
l.h1(a0,q)}}o=a3.ax
o.toString
if(a6<o-1){B.k.aj(k.a,0,16,s.a_(),480)
B.k.aj(k.b,0,8,r.a_(),224)
B.k.aj(k.c,0,8,q.a_(),224)}a1=p*16
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
s.ly(0,b,c,!1)
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
A.lp(c,0,p+n,l,m)
A.lp(c,1,p+o,l,m)
A.lp(c,2,p-o,l,m)
A.lp(c,3,p-n,l,m)
break
case 1:s=this.e
s===$&&A.c(k)
s.cO(b,c)
break
default:break}},
iS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=h.k4
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
s.he(r,e,p)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
s.eg(r,e,p+4)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.hf(r,e,p)}}else{o=h.R8
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
s.c7(r,1,e,16,n,q,k)
o.toString
s.c7(m,1,o,8,n,q,k)
s.c7(l,1,o,8,n,q,k)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.kW(r,e,p,q,k)
o.toString
j=A.u(m,g,4)
i=A.u(l,g,4)
s.c6(j,1,o,8,p,q,k)
s.c6(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.c7(r,e,1,16,n,q,k)
o.toString
s.c7(m,o,1,8,n,q,k)
s.c7(l,o,1,8,n,q,k)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.lB(r,e,p,q,k)
o.toString
s=4*o
j=A.u(m,g,s)
i=A.u(l,g,s)
d.c6(j,o,1,8,p,q,k)
d.c6(i,o,1,8,p,q,k)}}},
j2(){var s,r=this,q=r.ay
q===$&&A.c("_tlMbX")
s=q
while(!0){q=r.CW
q.toString
if(!(s<q))break
r.iS(s,r.y2);++s}},
j5(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.bh
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
if(a1)b.j2()
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
if(b.bU!=null&&j<i){h=b.xr=b.iK(j,i-j)
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
b.jK(0,j-g,h-c,i-j)}if(a0){a0=b.p1
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
jK(a,b,c,d){if(c<=0||d<=0)return!1
this.iU(b,c,d)
this.iT(b,c,d)
return!0},
dC(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
dd(a,b,c,d){var s=19077*a
d.h(0,0,this.dC(s+26149*c+-3644112))
d.h(0,1,this.dC(s-6419*b-13320*c+2229552))
d.h(0,2,this.dC(s+33050*b+-4527440))},
dc(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.lz(),a2=b4-1,a3=B.a.j(a2,1),a4=a8.a,a5=a8.d
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
a.dd(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.j(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.dd(s,p&255,p>>>16,b3)
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
J.F(d.a,d.d,b)
f=g-6419*a5-13320*f+2229552
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.F(d.a,d.d+1,b)
a5=g+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.F(d.a,d.d+2,b)
J.F(d.a,d.d+3,255)
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
J.F(a5.a,a5.d,b)
d=f-6419*g-13320*d+2229552
if((d&-4194304)>>>0===0)b=B.a.j(d,14)
else b=d<0?0:255
J.F(a5.a,a5.d+1,b)
g=f+33050*g+-4527440
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.F(a5.a,a5.d+2,b)
J.F(a5.a,a5.d+3,255)
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
J.F(e.a,e.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.F(e.a,e.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.F(e.a,e.d+2,b)
J.F(e.a,e.d+3,255)
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
J.F(s.a,s.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.F(s.a,s.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.F(s.a,s.d+2,b)
J.F(s.a,s.d+3,255)}}if((b4&1)===0){p=B.a.j(3*r+q+131074,2)
a5=a6.a
s=a6.d+a2
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a2*4
n=A.u(b2,a0,a5)
a.dd(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.j(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.u(b3,a0,a5)
a.dd(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
iT(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
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
m=m==null?null:m.K(n,p,null);(m==null?new A.O():m).su(0,l)}s.d=s.d+j.a}},
iU(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.N(c.ga6(c),0,d)
c=e.b.a
s=A.A(b,!1,d,a*c*4)
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
if(a===0){e.dc(q,d,p,o,p,o,s,d,a0)
i=a1}else{c=e.RG
c===$&&A.c("_tmpY")
e.dc(c,q,k,j,p,o,A.u(s,d,-l),s,a0)
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
e.dc(A.u(q,d,-g),q,k,j,p,o,A.u(s,d,r),s,a0)}c=q.d
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
e.ry.bV(0,m,o);--i}else if((n&1)===0)e.dc(q,d,p,o,p,o,A.u(s,d,l),d,a0)
return i},
iK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_alphaPlane",f=i.b,e=f.a,d=f.b
if(a<0||b<=0||a+b>d)return h
if(a===0){f=e*d
i.bJ=new Uint8Array(f)
s=i.bU
r=new A.lA(s,e,d)
q=s.B()
r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.gfO()){p=r.d
if(p===0){if(s.c-s.d<f)r.r=1}else if(p===1){o=new A.dZ(B.V,A.b([],t.J))
o.a=e
o.b=d
f=A.b([],t.nK)
p=A.b([],t.ip)
n=new Uint32Array(2)
m=new A.iN(s,n)
n=m.d=A.N(n.buffer,0,h)
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
p=new A.hz(m,o,f,p)
p.db=e
r.x=p
p.cp(e,d,!0)
f=r.x
s=f.ax
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
f=s[0].a===B.bU&&f.ji()}else f=!1
if(f){r.y=!0
f=r.x
s=f.c
j=s.a*s.b
f.cx=0
s=B.a.a2(j,4)
s=new Uint8Array(j+(4-s))
f.CW=s
f.ch=A.aY(s.buffer,0,h)}else{r.y=!1
r.x.eo()}}else r.r=1}i.bI=r}f=i.bI
f===$&&A.c("_alpha")
if(!f.w){s=i.bJ
s===$&&A.c(g)
if(!f.kH(0,a,b,s))return h}f=i.bJ
f===$&&A.c(g)
return A.A(f,!1,h,a*e)},
jB(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.fr.b,a5=a3.dy,a6=a3.k1
a6===$&&A.c("_segment")
if(!(a6<4))return A.a(a5,a6)
s=a5[a6]
a6=a3.aP
a6===$&&A.c("_mbData")
a5=a3.y1
if(!(a5<a6.length))return A.a(a6,a5)
r=a6[a5]
q=A.A(r.a,!1,null,0)
a5=a3.k3
a5===$&&A.c("_mbInfo")
if(0>=a5.length)return A.a(a5,0)
p=a5[0]
q.l9(0,q.c-q.d,0)
a5=r.b
a5===$&&A.c("isIntra4x4")
if(!a5){o=A.A(new Int16Array(16),!1,null,0)
a5=a7.b
a6=p.b
if(1>=a4.length)return A.a(a4,1)
n=a3.dO(a8,a4[1],a5+a6,s.b,0,o)
a7.b=p.b=n>0?1:0
if(n>1)a3.kl(o,q)
else{a5=o.a
a6=o.d
if(!(a6>=0&&a6<a5.length))return A.a(a5,a6)
m=B.a.j(a5[a6]+3,3)
for(l=0;l<256;l+=16)J.F(q.a,q.d+l,m)}k=a4[0]
j=1}else{if(3>=a4.length)return A.a(a4,3)
k=a4[3]
j=0}i=a7.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a3.dO(a8,k,e+(i&1),s.a,j,q)
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
n=a3.dO(a8,a4[2],e+(i&1),s.c,0,q)
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
kl(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
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
J.F(a0.a,a0.d+d,r)
r=B.a.j(e+f,3)
J.F(a0.a,a0.d+(d+16),r)
r=B.a.j(l-g,3)
J.F(a0.a,a0.d+(d+32),r)
r=B.a.j(e-f,3)
J.F(a0.a,a0.d+(d+48),r)
d+=64}},
ja(a,b){var s,r,q,p,o,n,m
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
dO(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
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
n=1}else{n=this.ja(a,q)
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
J.F(f.a,f.d+r,m*j)}return 16},
jx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.aP
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
B.k.aj(q,p,j,f,g)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a1(142)===0)h=0
else if(i.c.a1(114)===0)h=2
else h=i.c.a1(183)!==0?1:3
s.d=h},
si1(a){this.k2=t.f4.a(a)},
si0(a){this.k3=t.jt.a(a)},
shY(a){this.k4=t.kb.a(a)},
si_(a){this.aP=t.as.a(a)},
shZ(a){this.aQ=t.mL.a(a)}}
A.lz.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:43}
A.f9.prototype={
Y(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.W(this.a1(128),r))>>>0
return s},
ci(a){var s=this.Y(a)
return this.Y(1)===1?-s:s},
a1(a){var s,r=this,q=r.b
q===$&&A.c("_range")
s=r.es(B.a.j(q*a,8))
if(r.b<=126)r.kh()
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
if(B.a.aN(l,o)>a){s=n.b
s===$&&A.c("_range")
r=a+1
n.b=s-r
n.c=l-B.a.W(r,o)
return 1}else{n.b=a
return 0}},
kh(){var s,r=this,q=r.b
q===$&&A.c("_range")
if(!(q>=0&&q<128))return A.a(B.a_,q)
s=B.a_[q]
r.b=B.bk[q]
q=r.d
q===$&&A.c("_bits")
r.d=q-s}}
A.ln.prototype={
eg(a,b,c){var s,r=A.u(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.f3(r,b,c))this.d2(r,b)}},
ef(a,b,c){var s,r=A.u(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.f3(r,1,c))this.d2(r,1)}},
hf(a,b,c){var s,r,q=A.u(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.eg(q,b,c)}},
he(a,b,c){var s,r=A.u(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.ef(r,b,c)}},
lB(a,b,c,d,e){var s,r,q=A.u(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.c6(q,b,1,16,c,d,e)}},
kW(a,b,c,d,e){var s,r=A.u(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.c6(r,1,b,16,c,d,e)}},
c7(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.u(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.f4(a0,a2,a5,a6))if(this.eU(a0,a2,a7))this.d2(a0,a2)
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
k=$.mQ()
e=1020+i-f
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
e=$.aT()
j=255+j+a
if(!(j>=0&&j<766))return A.a(e,j)
J.F(n,l,e[j])
j=$.aT()
i=255+i+b
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.F(a0.a,a0.d+r,i)
i=$.aT()
h=255+h+c
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.F(a0.a,a0.d+q,h)
h=$.aT()
g=255+g-c
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.F(a0.a,a0.d,g)
g=$.aT()
f=255+f-b
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.F(a0.a,a0.d+a2,f)
f=$.aT()
m=255+m-a
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.F(a0.a,a0.d+p,m)}a0.d+=a3}},
c6(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.u(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.f4(d,b,a1,a2))if(this.eU(d,b,a3))this.d2(d,b)
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
m=$.jZ()
h=B.a.j(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.j(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.j(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.aT()
l=255+l+e
if(!(l>=0&&l<766))return A.a(h,l)
J.F(p,n,h[l])
l=$.aT()
k=255+k+f
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.F(d.a,d.d+r,k)
k=$.aT()
j=255+j-g
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.F(d.a,d.d,j)
j=$.aT()
o=255+o-e
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.F(d.a,d.d+b,o)}d.d+=c}},
d2(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
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
m=$.mQ()
l=1020+k-l
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.jZ()
m=112+B.a.ar(B.a.j(p+4,3),32)
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.jZ()
l=112+B.a.ar(B.a.j(p+3,3),32)
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.aT()
r=255+r+n
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.aT()
q=255+q-o
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
q=$.jY()
s=255+o-s
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
f3(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
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
q=$.jY()
r=255+s-r
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.mP()
p=255+o-p
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
f4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
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
j=$.jY()
g=255+q-p
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.mP()
l=255+r
k=l-o
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
A.cf(a0,d,0,0,k+f)
A.cf(a0,d,1,0,j+g)
A.cf(a0,d,2,0,j-g)
A.cf(a0,d,3,0,k-f);++o
d+=32}},
ly(a,b,c,d){this.bC(b,c)
if(d)this.bC(A.u(b,null,16),A.u(c,null,4))},
cO(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.cf(b,0,q,r,s)},
h1(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cO(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cO(A.u(a,r,16),A.u(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cO(A.u(a,r,32),A.u(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cO(A.u(a,r,48),A.u(b,r,132))}}
A.ls.prototype={}
A.lw.prototype={}
A.ly.prototype={}
A.f8.prototype={}
A.lx.prototype={}
A.lo.prototype={}
A.bV.prototype={}
A.fb.prototype={}
A.iP.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fa.prototype={
cC(){var s,r=this.b
if(r.aa(8)!==47)return!1
s=this.c
s.f=B.ag
s.a=r.aa(14)+1
s.b=r.aa(14)+1
s.d=r.aa(1)!==0
if(r.aa(3)!==0)return!1
return!0},
bH(a){var s,r,q,p=this,o=null
p.e=0
if(!p.cC())return o
s=p.c
p.cp(s.a,s.b,!0)
p.eo()
r=s.a
p.d=A.a4(o,o,B.e,0,B.h,s.b,o,0,4,o,r,!1)
r=p.ch
r.toString
q=s.a
s=s.b
if(!p.dG(r,q,s,s,p.gjH()))return o
return p.d},
eo(){var s,r=this,q=r.c,p=q.a
q=p*q.b+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=A.N(s.buffer,0,null)
r.cx=q
return!0},
ka(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.aa(2)
q=l.ay
p=B.a.O(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.iO(B.bT)
B.c.H(l.ax,o)
if(!(r<4))return A.a(B.bt,r)
q=B.bt[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.aa(3)+2
o.e=s
o.d=l.cp(A.cg(o.b,s),A.cg(o.c,o.e),!1)
break
case 3:n=s.aa(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.h(a,0,A.cg(o.b,m))
o.e=m
o.d=l.cp(n,1,!1)
l.iX(n,o)
break
case 2:break
default:throw A.e(A.p("Invalid WebP transform type: "+r))}return!0},
cp(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c){for(s=k.b,r=t.t,q=b,p=a;s.aa(1)!==0;){o=A.b([p,q],r)
if(!k.ka(o))throw A.e(A.p("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.aa(1)!==0){n=s.aa(4)
if(!(n>=1&&n<=11))throw A.e(A.p("Invalid Color Cache"))}else n=0
if(!k.jW(p,q,n,c))throw A.e(A.p("Invalid Huffman Codes"))
if(n>0){s=B.a.O(1,n)
k.r=s
k.w=new A.lt(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.cg(p,m)
k.x=m===0?4294967295:B.a.O(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.dG(l,p,q,q,null))throw A.e(A.p("Failed to decode image data."))
k.e=0
return l},
dG(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
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
if((q&j)>>>0===0){d=b0.cs(b0.Q,b0.z,b0.y,q,r)
f=b0.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.c_()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].bW(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].bW(i)
if(i.a>=32)i.c_()
if(2>=e)return A.a(f,2)
a=f[2].bW(i)
if(3>=e)return A.a(f,3)
a0=A.pN(a,c,b,f[3].bW(i))
if(!(o>=0&&o<s))return A.a(b1,o)
b1[o]=a0;++o;++q
if(q>=b2){++r
if(B.a.a2(r,16)===0&&h)b5.$1(r)
if(k!=null)for(f=k.b,e=k.a,a1=e.length;g<o;){if(!(g>=0))return A.a(b1,g)
a2=b1[g]
a3=B.a.Z(a2*506832829>>>0,f)
if(!(a3<a1))return A.a(e,a3)
e[a3]=a2;++g}q=0}}else if(c<280){a4=b0.d5(c-256)
if(4>=e)return A.a(f,4)
a5=f[4].bW(i)
if(i.a>=32)i.c_()
a6=b0.f8(b2,b0.d5(a5))
if(o<a6||n-o<a4)return!1
else{a7=o-a6
for(a8=0;a8<a4;++a8){f=o+a8
e=a7+a8
if(!(e>=0&&e<s))return A.a(b1,e)
e=b1[e]
if(!(f>=0&&f<s))return A.a(b1,f)
b1[f]=e}o+=a4}q+=a4
for(;q>=b2;){q-=b2;++r
if(B.a.a2(r,16)===0&&h)b5.$1(r)}if(o<m){if((q&j)>>>0!==0){d=b0.cs(b0.Q,b0.z,b0.y,q,r)
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
ji(){var s,r,q,p,o,n
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
iY(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
i.ep(g,s.a*h)
r=s.a
q=r*g
p=r*i.f
s=i.ch
s.toString
h=i.cx
h.toString
o=A.A(s,!1,null,h)
for(h=i.cy,s=o.a,n=o.d,m=s.length,l=0;l<q;++l){h.toString
k=p+l
j=n+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.j(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
is(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.aA(g,a1),e=B.a.a2(g,a1),d=i.eN(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.cs(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.c_()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].bW(g)
if(p<256){s=i.CW
s===$&&A.c(h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.a2(f,16)===0)i.dL(f)
e=0}}else if(p<280){o=i.d5(p-256)
if(4>=q)return A.a(s,4)
n=s[4].bW(g)
if(g.a>=32)g.c_()
m=i.f8(a1,i.d5(n))
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
if(B.a.a2(f,16)===0)i.dL(f)}if(c<a&&(e&a0)>>>0!==0){r=i.cs(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.dL(f)
i.e=c
return!0},
dL(a){var s,r,q,p=this,o=p.f,n=a-o,m=p.CW
m===$&&A.c("_pixels8")
s=A.A(m,!1,null,p.c.a*o)
if(n>0){m=p.cy
m.toString
r=p.db
r.toString
q=A.A(m,!1,null,r*o)
r=p.ax
if(0>=r.length)return A.a(r,0)
r[0].ku(o,o+n,s,q)}p.f=a},
jI(a){var s,r,q,p,o,n=this,m=n.c,l=m.a,k=n.f,j=a-k
if(j<=0)return
n.ep(j,l*k)
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
ep(a,b){var s,r,q,p=this,o=p.ax,n=o.length,m=p.c.a,l=p.f,k=l+a,j=p.cx
j.toString
s=p.ch
s.toString
B.Q.aj(s,j,j+m*a,s,b)
for(r=b;q=n-1,n>0;r=j,n=q){if(!(q>=0&&q<o.length))return A.a(o,q)
m=o[q]
s=p.ch
s.toString
m.l4(l,k,s,r,s,j)}},
jW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.aa(1)!==0){s=e.b.aa(3)+2
r=A.cg(a,s)
q=A.cg(b,s)
p=r*q
o=e.cp(r,q,!1)
e.y=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.az(n,t.co)
for(j=0;j<n;++j)k[j]=A.qP()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.dO[h]
if(h===0&&i)g+=B.a.O(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.jU(g,f[h]))return!1}e.Q=o
e.as=n
e.sjc(k)
return!0},
jU(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
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
B.c.h(p,1,s)}n=b.ks(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.aa(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.hi[k]
j=i.aa(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.jV(m,a,p)
if(n)n=b.fC(p,a)}return n},
jV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.oe()
if(!s.fC(a,19))return!1
e=this.b
if(e.aa(1)!==0){r=2+e.aa(2+2*e.aa(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.c_()
m=s.bW(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.b0,k)
j=B.b0[k]
i=B.d5[k]
h=e.aa(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
d5(a){var s
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
iX(a,b){var s,r,q,p,o,n=B.a.O(1,B.a.a4(8,b.e)),m=new Uint32Array(n),l=A.N(b.d.buffer,0,null),k=A.N(m.buffer,0,null),j=b.d
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
cs(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
eN(a,b){var s=this,r=s.cs(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
sjc(a){this.at=t.kk.a(a)}}
A.hz.prototype={
kS(a){return this.iY(a)}}
A.iN.prototype={
fU(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.Z(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.T,p)
q=r+((s&B.T[p])>>>0)*(B.T[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.Z(s[1],p-32)}return q},
aa(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.fU()
if(!(a<33))return A.a(B.T,a)
s=B.T[a]
r.a+=a
r.c_()
return(q&s)>>>0}else throw A.e(A.p("Not enough data in input."))},
c_(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
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
A.lt.prototype={}
A.cX.prototype={
ai(){return"VP8LImageTransformType."+this.b}}
A.iO.prototype={
l4(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.kn(e,f,f+(b-a)*n)
break
case 0:o.lf(a,b,e,f)
if(b!==o.c){s=f-n
B.Q.aj(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.kw(a,b,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.cg(n,o.e)
p=f+r*n-q
B.Q.aj(e,p,p+q,c,f)
o.fD(a,b,c,p,e,f)}else o.fD(a,b,c,d,e,f)
break}},
ku(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a4(8,m),k=this.b,j=this.d
if(l<8){s=B.a.O(1,m)-1
r=B.a.O(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
p=m[n]
c.d=n+1}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.F(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
c.d=n+1
if(m>>>0!==m||m>=j.length)return A.a(j,m)
m=j[m]
J.F(d.a,d.d,m>>>8&255);++d.d}},
fD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a4(8,j),h=this.b,g=this.d
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
kw(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.b,a0=b.e,a1=B.a.O(1,a0)-1,a2=A.cg(a,a0),a3=B.a.j(a4,b.e)*a2
for(a0=a6.length,s=a4;s<a5;){r=new Uint8Array(3)
for(q=a3,p=0;p<a;++p){if((p&a1)>>>0===0){o=b.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a7+p
if(!(o<a0))return A.a(a6,o)
m=a6[o]
l=m>>>8&255
k=r[0]
j=$.aE()
j[0]=k
k=$.aV()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=l
h=k[0]
g=$.nR()
g[0]=i*h
f=$.q9()
if(0>=f.length)return A.a(f,0)
e=(m>>>16&255)+(f[0]>>>5)>>>0&255
j[0]=r[1]
i=k[0]
j[0]=l
g[0]=i*k[0]
d=f[0]
j[0]=r[2]
i=k[0]
j[0]=e
g[0]=i*k[0]
c=f[0]
a6[o]=(m&4278255360|e<<16|((m&255)+(d>>>5)>>>0)+(c>>>5)>>>0&255)>>>0}a7+=a;++s
if((s&a1)>>>0===0)a3+=a2}},
lf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.lu(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p<r))return A.a(c,p)
A.lu(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.O(1,s)-1
n=A.cg(g,s)
m=B.a.j(a,h.e)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.lu(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.p1[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.p1[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p<s))return A.a(c,p)
A.lu(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
kn(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.lA.prototype={
gfO(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
kH(a,b,c,d){var s,r,q,p,o,n,m=this
if(!m.gfO())return!1
s=m.e
if(!(s<4))return A.a(B.bj,s)
r=B.bj[s]
if(m.d===0){s=m.b
q=b*s
p=m.a
B.k.aj(d,q,c*s,p.a,p.d-p.b+q)}else{s=b+c
p=m.x
p===$&&A.c("_vp8l")
p.cy=d
o=p.c
if(m.y)s=p.is(o.a,o.b,s)
else{n=p.ch
n.toString
p=p.dG(n,o.a,o.b,s,t.lt.a(p.gkR()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,b,c,d)}if(m.f===1)if(!m.iR(d,m.b,m.c,b,c))return!1
if(b+c===m.c)m.w=!0
return!0},
iR(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.fe.prototype={
hJ(a,b){var s=this,r=a.B()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.hA.prototype={}
A.hh.prototype={
dR(a){var s,r,q=this
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
fC(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.dR(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.dv(q,0,0)}o=new Int32Array(b)
if(!m.jd(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.dv(p,o[p],n))return!1}return m.f===m.e},
ks(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.dR(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.dv(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
bW(a){var s,r,q,p=this,o=a.fU(),n=a.a,m=o&127,l=p.a[m]
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
dv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(c<=7){s=g.fe(b,c)
for(r=B.a.W(1,7-c),q=g.b,p=g.a,o=0;o<r;++o){n=(s|B.a.W(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=g.fe(B.a.aN(b,c-7),7)
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
l+=p[j]+(B.a.aN(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(g.jm(l))g.jn(l,0)
else if(g.f5(l))return!1
r=g.d
r===$&&A.c("tree")
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
fe(a,b){var s=B.av[a&15],r=B.a.j(a,4)
if(!(r<16))return A.a(B.av,r)
return B.a.Z((s<<4|B.av[r])>>>0,8-b)},
jn(a,b){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
r[s]=b},
f5(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]!==0},
jm(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]<0},
jd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
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
A.ds.prototype={}
A.dY.prototype={
ai(){return"WebPFormat."+this.b}}
A.dZ.prototype={$ia2:1}
A.eA.prototype={}
A.lB.prototype={
dk(a){var s=A.A(t.L.a(a),!1,null,0)
this.b=s
if(!this.eM(s))return!1
return!0},
bb(a){var s,r=this,q=null,p=A.A(t.L.a(a),!1,q,0)
r.b=p
if(!r.eM(p))return q
p=new A.eA(B.V,A.b([],t.J))
r.a=p
s=r.b
s.toString
if(!r.ft(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.nr(s,p).cC())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.np(s,p).cC())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.e(A.p("Unknown format for WebP"))}},
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
return A.nr(p,n).bH(0)}else if(r===B.aD){n.toString
p=n.bX(s.ch,s.ay)
n=o.a
n.toString
return A.np(p,n).bH(0)}return null},
b2(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=null
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
l=l==null?j:l.gF()
r=A.a4(j,j,l==null?B.e:l,0,B.h,p,j,0,m,j,n,!1)
s=r}else{s=A.bh(s,!1,!1)
p=c.f
p===$&&A.c("clearFrame")
if(p){p=s.a
if(p!=null)p.aG(0,j)}}A.pG(s,o,B.aE,c.a,c.b)
r.aH(s)}return r},
eD(a,b){var s,r,q,p=null,o=A.b([],t.J),n=new A.eA(B.V,o)
if(!this.ft(a,n))return p
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
if(o===B.ag)return A.nr(q,n).bH(0)
else if(o===B.aD)return A.np(q,n).bH(0)}return p},
eM(a){if(a.ac(4)!=="RIFF")return!1
a.k()
if(a.ac(4)!=="WEBP")return!1
return!0},
ft(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.ac(4)
r=a.k()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.jb(a,b))return!1
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
n=new A.aq(n,0,l,0,m)
b.at=n
n.d=p
a.d+=q
break
case"ANIM":b.f=B.jV
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
case"ANMF":if(!this.j7(a,b,r))return!1
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
jb(a,b){var s,r,q,p,o=a.B()
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
j7(a,b,c){var s,r=a.bo(),q=a.bo()
a.bo()
a.bo()
s=new A.hA(r*2,q*2,a.bo())
s.hJ(a,c)
if(s.r!==0)return!1
B.c.H(b.z,s)
return!0}}
A.ki.prototype={
ai(){return"IccProfileCompression."+this.b}}
A.er.prototype={
ky(){var s,r=this
if(r.b===B.am)return r.c
s=t.D.a(B.aL.kO(r.c))
r.c=s
r.b=B.am
return s}}
A.hf.prototype={
ai(){return"FrameType."+this.b}}
A.bL.prototype={
gaq(){var s=this.x
if(s===$){s=A.b([],t.g)
this.sbP(s)}return s},
hC(a,b,c,d){var s,r,q,p=this,o=a.gF(),n=a.gbm(),m=a.a
p.eA(d,b,o,n,m==null?null:m.gP())
o=a.b
if(o!=null)p.sdi(A.hM(o,t.N,t.X))
o=a.d
if(o!=null){n=t.N
p.sdm(A.hM(o,n,n))}B.c.H(p.gaq(),p)
if(!c){s=a.gaq().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$){q=A.b([],o)
a.sbP(q)}if(!(r<q.length))return A.a(q,r)
p.aH(A.hl(q[r],b,!1,d))}}},
hB(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.sdi(A.hM(n,t.N,t.X))
n=a.d
if(n!=null){s=t.N
o.sdm(A.hM(n,s,s))}B.c.H(o.gaq(),o)
if(!b&&a.gaq().length>1){r=a.gaq().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$){p=A.b([],n)
a.sbP(p)}if(!(q<p.length))return A.a(p,q)
o.aH(A.bh(p[q],!1,!1))}}},
aH(a){var s=this
if(a==null)a=A.bh(s,!0,!0)
a.z=s.gaq().length
if(B.c.gfQ(s.gaq())!==a)B.c.H(s.gaq(),a)
return a},
df(){return this.aH(null)},
eA(a,b,c,d,e){var s,r,q=this
switch(c.a){case 0:if(e==null){s=B.b.b1(a*d/8)
r=new A.dB($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b1(a/8)
r=new A.dB($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.b1(a*(d<<1>>>0)/8)
r=new A.dC($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b1(a/4)
r=new A.dC($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.b1(a*1.5):B.b.b1(a/2)
r=new A.dE($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b1(a/2)
r=new A.dE($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.oq(a,b,d)
else q.a=new A.dF(new Uint8Array(a*b),e,a,b,1)
break
case 4:q.a=new A.ew(new Uint16Array(a*b*d),a,b,d)
break
case 5:q.a=A.qS(a,b,d)
break
case 6:q.a=new A.ev(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.et(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.eu(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.qQ(a,b,d)
break
case 10:q.a=A.qR(a,b,d)
break
case 11:q.a=new A.es(new Float64Array(a*b*4*d),a,b,d)
break}},
A(a){var s=this
return"Image("+s.gX(s)+", "+s.gM(s)+", "+s.gF().b+", "+s.gbm()+")"},
gX(a){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gM(a){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gF(){var s=this.a
s=s==null?null:s.gF()
return s==null?B.e:s},
gbT(){var s=this.e
return s==null?this.e=new A.dp(A.a0(t.N,t.a)):s},
hc(a,b){var s=this
if(s.b==null)s.sdi(A.a0(t.N,t.X))
s.b.h(0,a,b)
if(s.b.a===0)s.sdi(null)},
gG(a){var s=this.a
return s.gG(s)},
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
fM(a,b){var s=this
return a>=0&&b>=0&&a<s.gX(s)&&b<s.gM(s)},
aI(a,b,c,d){var s=this.a
s=s==null?null:s.aI(a,b,c,d)
if(s==null)s=new A.bF(new Uint8Array(0))
return s},
K(a,b,c){var s=this.a
s=s==null?null:s.K(a,b,c)
return s==null?new A.O():s},
aJ(a,b){return this.K(a,b,null)},
ak(a,b){var s=this
if(a<0||a>=s.gX(s)||b<0||b>=s.gM(s))return new A.O()
return s.K(a,b,null)},
h7(a,b,c){switch(c.a){case 0:return this.ak(B.b.i(a),B.b.i(b))
case 1:case 3:return this.h8(a,b)
case 2:return this.h6(a,b)}},
h8(a,b){var s,r,q,p,o,n,m=this,l=B.b.i(a),k=l-(a>=0?0:1),j=k+1
l=B.b.i(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.kp(a-k,b-s)
q=m.ak(k,s)
p=r>=m.gM(m)?q:m.ak(k,r)
o=j>=m.gX(m)?q:m.ak(j,s)
n=j>=m.gX(m)||r>=m.gM(m)?q:m.ak(j,r)
return m.aI(l.$4(q.gq(q),o.gq(o),p.gq(p),n.gq(n)),l.$4(q.gt(),o.gt(),p.gt(),n.gt()),l.$4(q.gv(q),o.gv(o),p.gv(p),n.gv(n)),l.$4(q.gu(q),o.gu(o),p.gu(p),n.gu(n)))},
h6(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.i(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.i(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.ko()
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
return c6.aI(B.b.i(c2),B.b.i(c3),B.b.i(c4),B.b.i(c5))},
bO(a,b,c){var s
if(t.mK.b(c))if(c.gb5(c).gP()!=null)if(this.gbi()){s=this.a
if(s!=null)s.S(a,b,c.gL(c),0,0)
return}s=this.a
if(s!=null)s.al(a,b,c.gq(c),c.gt(),c.gv(c),c.gu(c))},
gD(){var s=this.a
s=s==null?null:s.gD()
return s==null?0:s},
aG(a,b){var s=this.a
return s==null?null:s.aG(0,b)},
kt(a){return this.aG(a,null)},
fF(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a7==null)a7=a5.gF()
if(a8==null)a8=a5.gbm()
s=B.bC.l(0,a7)
if(a7.a<3)a5.gF()
if(a7===a5.gF())if(a8===a5.gbm()){r=a5.a
r=(r==null?a6:r.gP())==null
if(!r)r=!1
else r=!0}else r=!1
else r=!1
if(r)return A.bh(a5,!1,!1)
for(r=a5.gaq(),q=r.length,p=t.N,o=t.p,n=a6,m=0;m<r.length;r.length===q||(0,A.ak)(r),++m,n=d){l=r[m]
k=l.a
j=k==null
i=j?a6:k.a
if(i==null)i=0
k=j?a6:k.b
if(k==null)k=0
j=l.e
j=j==null?a6:A.ei(j)
h=l.c
if(h==null)h=a6
else{g=h.a
f=h.b
h=h.c
h=new A.er(g,f,new Uint8Array(h.subarray(0,A.bn(0,a6,h.length))))}g=l.w
f=l.r
e=A.a4(a6,j,a7,l.y,g,k,h,f,a8,a6,i,!1)
k=l.d
e.sdm(k!=null?A.hM(k,p,p):a6)
if(n!=null){n.aH(e)
d=n}else d=e
k=e.a
c=k==null?a6:k.gP()
k=e.a
k=k==null?a6:k.gP()
b=k==null?a6:k.gF()
if(b==null)b=a7
k=l.a
if(c!=null){a=A.a0(o,o)
a0=k==null?a6:k.K(0,0,a6)
if(a0==null)a0=new A.O()
for(k=e.a,k=k.gG(k),a1=a6,a2=0;k.E();){a3=k.gJ(k)
a4=A.pN(B.b.dj(a0.ga8()*255),B.b.dj(a0.ga0()*255),B.b.dj(a0.ga5()*255),0)
if(a.aK(0,a4)){j=a.l(0,a4)
j.toString
a3.sL(0,j)}else{a.h(0,a4,a2)
a3.sL(0,a2)
a1=A.nE(a0,s,b,a8,a1)
c.aX(a2,a1.gq(a1),a1.gt(),a1.gv(a1));++a2}a0.E()}}else{a0=k==null?a6:k.K(0,0,a6)
if(a0==null)a0=new A.O()
for(k=e.a,k=k.gG(k);k.E();){A.nE(a0,s,a6,a6,k.gJ(k))
a0.E()}}}n.toString
return n},
kA(a){return this.fF(a,null)},
kB(a){return this.fF(null,a)},
kq(a){var s,r,q,p
t.je.a(a)
if(this.d==null){s=t.N
this.sdm(A.a0(s,s))}for(s=A.eG(a,a.r,A.q(a).c);s.E();){r=s.d
q=this.d
q.toString
p=a.l(0,r)
p.toString
q.h(0,r,p)}},
gbE(){var s,r=this
if(r.gF()===B.v)s=2
else if(r.gF()===B.w)s=4
else if(r.gF()===B.x)s=16
else s=r.gF()===B.e?256:0
return s},
il(a,b){var s,r=this
switch(a.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=r.gbE()
return new A.b5(new Uint8Array(s*b),s,b)
case 4:s=r.gbE()
return new A.eU(new Uint16Array(s*b),s,b)
case 5:s=r.gbE()
return new A.dL(new Uint32Array(s*b),s,b)
case 6:s=r.gbE()
return new A.eT(new Int8Array(s*b),s,b)
case 7:s=r.gbE()
return new A.eR(new Int16Array(s*b),s,b)
case 8:s=r.gbE()
return new A.eS(new Int32Array(s*b),s,b)
case 9:s=r.gbE()
return new A.eO(new Uint16Array(s*b),s,b)
case 10:s=r.gbE()
return new A.eP(new Float32Array(s*b),s,b)
case 11:s=r.gbE()
return new A.eQ(new Float64Array(s*b),s,b)}},
sdi(a){this.b=t.hL.a(a)},
sdm(a){this.d=t.lG.a(a)},
sbP(a){this.x=t.aL.a(a)}}
A.kp.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:31}
A.ko.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:32}
A.am.prototype={
gP(){return null}}
A.dz.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.H(r))
return new A.dz(r,s.a,s.b,s.c)},
gF(){return B.A},
ga6(a){return this.d.buffer},
gaF(){return 16},
gbp(){return this.a*this.c*2},
gG(a){return A.oF(this)},
gn(a){return this.d.byteLength},
gD(){return 1},
gbj(){return!0},
aI(a,b,c,d){var s=new Uint16Array(4),r=new A.db(s),q=A.T(a)
if(0>=4)return A.a(s,0)
s[0]=q
q=A.T(b)
if(1>=4)return A.a(s,1)
s[1]=q
q=A.T(c)
if(2>=4)return A.a(s,2)
s[2]=q
q=A.T(d)
if(3>=4)return A.a(s,3)
s[3]=q
s=r
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cH)||c.d!==this)c=A.oF(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.T(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.T(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.T(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.T(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.T(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.T(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.T(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.T(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.dA.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Float32Array(r.length)
else r=new Float32Array(A.H(r))
return new A.dA(r,s.a,s.b,s.c)},
gF(){return B.E},
ga6(a){return this.d.buffer},
gaF(){return 32},
gG(a){return A.oG(this)},
gn(a){return this.d.byteLength},
gD(){return 1},
gbp(){return this.a*this.c*4},
gbj(){return!0},
aI(a,b,c,d){var s=new Float32Array(4),r=new A.dc(s)
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
if(c==null||!(c instanceof A.cI)||c.d!==this)c=A.oG(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.es.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Float64Array(r.length)
else r=new Float64Array(A.H(r))
return new A.es(r,s.a,s.b,s.c)},
gF(){return B.H},
ga6(a){return this.d.buffer},
gn(a){return this.d.byteLength},
gaF(){return 64},
gG(a){return A.oH(this)},
gD(){return 1},
gbp(){return this.a*this.c*8},
gbj(){return!0},
aI(a,b,c,d){var s=new Float64Array(4),r=new A.dd(s)
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
if(c==null||!(c instanceof A.cJ)||c.d!==this)c=A.oH(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.et.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int16Array(r.length)
else r=new Int16Array(A.H(r))
return new A.et(r,s.a,s.b,s.c)},
gF(){return B.J},
ga6(a){return this.d.buffer},
gG(a){return A.oI(this)},
gn(a){return this.d.byteLength},
gD(){return 32767},
gbj(){return!0},
gaF(){return 16},
gbp(){return this.a*this.c*2},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int16Array(4),n=new A.de(o)
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
if(c==null||!(c instanceof A.cK)||c.d!==this)c=A.oI(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.eu.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int32Array(r.length)
else r=new Int32Array(A.H(r))
return new A.eu(r,s.a,s.b,s.c)},
gF(){return B.K},
ga6(a){return this.d.buffer},
gaF(){return 32},
gbp(){return this.a*this.c*4},
gG(a){return A.oJ(this)},
gn(a){return this.d.byteLength},
gD(){return 2147483647},
gbj(){return!0},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int32Array(4),n=new A.df(o)
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
if(c==null||!(c instanceof A.cL)||c.d!==this)c=A.oJ(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.ev.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int8Array(r.length)
else r=new Int8Array(A.H(r))
return new A.ev(r,s.a,s.b,s.c)},
gF(){return B.I},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c},
gG(a){return A.oK(this)},
gn(a){return this.d.byteLength},
gD(){return 127},
gbj(){return!0},
gaF(){return 8},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int8Array(4),n=new A.dg(o)
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
if(c==null||!(c instanceof A.cM)||c.d!==this)c=A.oK(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.dB.prototype={
lI(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nM("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.H(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dB(q,r.e,s,r.a,r.b,r.c)},
gF(){return B.v},
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
gG(a){return A.i2(this)},
aI(a,b,c,d){var s=new A.dh(4,0)
s.a3(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
K(a,b,c){if(c==null||!(c instanceof A.cN)||c.f!==this)c=A.i2(this)
c.aM(0,a,b)
return c},
aJ(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i2(r):s).aM(0,a,b)
r.r.am(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i2(r):s).aM(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i2(r):s).aM(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.ew.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.H(r))
return new A.ew(r,s.a,s.b,s.c)},
gF(){return B.y},
ga6(a){return this.d.buffer},
gaF(){return 16},
gD(){return 65535},
gbp(){return this.a*this.c*2},
gG(a){return A.oL(this)},
gn(a){return this.d.byteLength},
gbj(){return!0},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint16Array(4),n=new A.di(o)
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
if(c==null||!(c instanceof A.cO)||c.d!==this)c=A.oL(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.dC.prototype={
lJ(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nM("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.H(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dC(q,r.e,s,r.a,r.b,r.c)},
gF(){return B.w},
gaF(){return 2},
ga6(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gG(a){return A.i3(this)},
gn(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?3:s},
gbj(){return!1},
aI(a,b,c,d){var s=new A.dj(4,0)
s.a3(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
K(a,b,c){if(c==null||!(c instanceof A.cP)||c.f!==this)c=A.i3(this)
c.aM(0,a,b)
return c},
aJ(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i3(r):s).aM(0,a,b)
r.r.an(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i3(r):s).aM(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i3(r):s).aM(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.dD.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint32Array(r.length)
else r=new Uint32Array(A.H(r))
return new A.dD(r,s.a,s.b,s.c)},
gF(){return B.F},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c*4},
gaF(){return 32},
gD(){return 4294967295},
gG(a){return A.oM(this)},
gn(a){return this.d.byteLength},
gbj(){return!0},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint32Array(4),n=new A.dk(o)
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
if(c==null||!(c instanceof A.cQ)||c.d!==this)c=A.oM(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
A.dE.prototype={
lK(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nM("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.H(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dE(q,r.e,s,r.a,r.b,r.c)},
gF(){return B.x},
ga6(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gG(a){return A.i4(this)},
gn(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?15:s},
gbj(){return!1},
gaF(){return 4},
aI(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new A.dl(4,new Uint8Array(2))
o.a3(s,r,q,p)
s=o
return s},
K(a,b,c){if(c==null||!(c instanceof A.cR)||c.e!==this)c=A.i4(this)
c.aM(0,a,b)
return c},
aJ(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i4(r):s).aM(0,a,b)
r.r.ao(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i4(r):s).aM(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i4(r):s).aM(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.dF.prototype={
bg(a,b){var s,r=this,q=r.d
if(b)q=new Uint8Array(q.length)
else q=new Uint8Array(A.H(q))
s=r.e
s=s==null?null:s.N(0)
return new A.dF(q,s,r.a,r.b,r.c)},
gF(){return B.e},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c},
gaF(){return 8},
gG(a){return A.n9(this)},
gn(a){return this.d.byteLength},
gD(){var s=this.e
s=s==null?null:s.gD()
return s==null?255:s},
gbj(){return!1},
aI(a,b,c,d){var s=A.qw(B.b.i(B.b.I(a,0,255)),B.b.i(B.b.I(b,0,255)),B.b.i(B.b.I(c,0,255)),B.b.i(B.b.I(d,0,255)))
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cS)||c.d!==this)c=A.n9(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aJ(a,b){return this.K(a,b,null)},
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
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=b==null?e:A.nE(b,e,B.e,e,e),c=f.c
if(c===1){s=d==null?0:B.a.I(A.t(d.gq(d)),0,255)
c=f.d
B.k.aL(c,0,c.length,s)}else if(c===2){c=d==null
s=c?0:B.a.I(A.t(d.gq(d)),0,255)
r=c?0:B.a.I(A.t(d.gt()),0,255)
q=A.r6(f.d.buffer,0,e)
B.j1.aL(q,0,q.length,(r<<8|s)>>>0)}else if(c===4){c=d==null
s=c?0:B.a.I(A.t(d.gq(d)),0,255)
r=c?0:B.a.I(A.t(d.gt()),0,255)
p=c?0:B.a.I(A.t(d.gv(d)),0,255)
o=c?0:B.a.I(A.t(d.gu(d)),0,255)
n=A.aY(f.d.buffer,0,e)
B.Q.aL(n,0,n.length,(o<<24|p<<16|r<<8|s)>>>0)}else{c=d==null
s=c?0:B.a.I(A.t(d.gq(d)),0,255)
r=c?0:B.a.I(A.t(d.gt()),0,255)
p=c?0:B.a.I(A.t(d.gv(d)),0,255)
for(m=A.n9(f),c=m.d,l=c.c,k=l>2,j=l>1,l=l>0,c=c.d,i=c.length;m.E();){if(l){h=m.c
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
A.hB.prototype={
ai(){return"Interpolation."+this.b}}
A.b4.prototype={}
A.eO.prototype={
N(a){return new A.eO(new Uint16Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.A},
gD(){return 1},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=A.T(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.T(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.T(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.T(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aW(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.a_
s=s!=null?s:A.a3()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eP.prototype={
N(a){return new A.eP(new Float32Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.E},
gD(){return 1},
T(a,b,c,d){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=d}},
aX(a,b,c,d){var s,r,q,p=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eQ.prototype={
N(a){return new A.eQ(new Float64Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.H},
gD(){return 1},
T(a,b,c,d){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=d}},
aX(a,b,c,d){var s,r,q,p=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eR.prototype={
N(a){return new A.eR(new Int16Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.J},
gD(){return 32767},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eS.prototype={
N(a){return new A.eS(new Int32Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.K},
gD(){return 2147483647},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eT.prototype={
N(a){return new A.eT(new Int8Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.I},
gD(){return 127},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.eU.prototype={
N(a){return new A.eU(new Uint16Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.y},
gD(){return 65535},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.dL.prototype={
N(a){return new A.dL(new Uint32Array(A.H(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gF(){return B.F},
gD(){return 4294967295},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.b.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
aW(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aV(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.b5.prototype={
N(a){return A.oE(this)},
ga6(a){return this.c.buffer},
gF(){return B.e},
gD(){return 255},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aX(a,b,c,d){var s,r,q,p,o=this.b
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
cU(a,b,c,d,e){var s,r,q,p,o=this.b
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
aW(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aV(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aU(a){var s,r,q=this.b
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
bx(a,b){return this.T(0,a,1,b)},
bw(a,b){return this.T(0,a,2,b)},
bv(a,b){return this.T(0,a,3,b)}}
A.cH.prototype={
N(a){var s=this
return new A.cH(s.a,s.b,s.c,s.d)},
gF(){return B.A},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.T(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.T(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.T(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=A.T(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.a_
r=r!=null?r:A.a3()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q,p=this.d
if(p.c>3){s=this.gt()
p=p.d
r=this.c+3
q=A.T(s)
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
gah(){return A.ab(this)},
ae(a,b){var s=this
if(s.d.c>0){s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))}},
aB(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.T(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.T(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+2
s=A.T(c)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.T(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.T(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){s=p.c+2
r=A.T(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>3){n=p.c+3
s=A.T(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cH)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cI.prototype={
N(a){var s=this
return new A.cI(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gF(){return B.E},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cI)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cJ.prototype={
N(a){var s=this
return new A.cJ(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gF(){return B.H},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cJ)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cK.prototype={
N(a){var s=this
return new A.cK(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 32767},
gF(){return B.J},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cK)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cL.prototype={
N(a){var s=this
return new A.cL(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 2147483647},
gF(){return B.K},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cL)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cM.prototype={
N(a){var s=this
return new A.cM(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 127},
gF(){return B.I},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cM)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cN.prototype={
N(a){var s=this
return new A.cN(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.f.f},
gD(){return this.f.gD()},
gF(){return B.v},
gaS(a){return this.a},
gaT(a){return this.b},
aM(a,b,c){var s,r,q=this
q.a=b
q.b=c
s=q.f
r=c*s.e
q.e=r
s=b*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gJ(a){return this},
E(){var s,r=this,q=++r.a,p=r.f
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
dW(a,b){var s,r,q=this.c,p=7-(this.d+b)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.c("data")
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.Z(s[q],p)&1},
aZ(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dW(0,a):0
else s=r.ba(0,this.dW(0,0),a)
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
l(a,b){return this.aZ(b)},
h(a,b,c){return this.am(b,c)},
gL(a){return this.dW(0,0)},
sL(a,b){this.am(0,b)},
gq(a){return this.aZ(0)},
sq(a,b){this.am(0,b)},
gt(){return this.aZ(1)},
st(a){this.am(1,a)},
gv(a){return this.aZ(2)},
sv(a,b){this.am(2,b)},
gu(a){return this.aZ(3)},
su(a,b){this.am(3,b)},
ga8(){return this.aZ(0)/this.f.gD()},
sa8(a){this.am(0,a*this.f.gD())},
ga0(){return this.aZ(1)/this.f.gD()},
sa0(a){this.am(1,a*this.f.gD())},
ga5(){return this.aZ(2)/this.f.gD()},
sa5(a){this.am(2,a*this.f.gD())},
ga9(){return this.aZ(3)/this.f.gD()},
sa9(a){this.am(3,a*this.f.gD())},
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cN)return A.r(A.z(p,!0,A.q(p).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.aa(b)
if(s.gn(b)!==q)return!1
if(p.aZ(0)!==s.l(b,0))return!1
if(q>1){if(p.aZ(1)!==s.l(b,1))return!1
if(q>2){if(p.aZ(2)!==s.l(b,2))return!1
if(q>3)if(p.aZ(3)!==s.l(b,3))return!1}}return!0}return!1},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.f}}
A.cO.prototype={
N(a){var s=this
return new A.cO(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 65535},
gF(){return B.y},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cO)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cP.prototype={
N(a){var s=this
return new A.cP(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.f.f},
gD(){return this.f.gD()},
gF(){return B.w},
gfB(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gaS(a){return this.a},
gaT(a){return this.b},
aM(a,b,c){var s,r,q,p=this
p.a=b
p.b=c
s=p.gfB()
r=p.b*p.f.e
p.e=r
q=p.a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gJ(a){return this},
E(){var s,r,q=this,p=q.f
if(++q.a===p.a){q.a=0
s=++q.b
q.d=0;++q.c
q.e=q.e+p.e
return s<p.b}if(p.f!=null||p.c===1){s=q.d+=2
if(s>7){q.d=0;++q.c}}else{r=q.gfB()
s=q.a*r
q.d=s&7
q.c=q.e+B.a.j(s,3)}s=q.c
p=p.d
p===$&&A.c("data")
return s<p.length},
dX(a,b){var s,r=this.c,q=6-(this.d+(b<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.Z(s[r],q)&3},
b_(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dX(0,a):0
else s=r.ba(0,this.dX(0,0),a)
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
l(a,b){return this.b_(b)},
h(a,b,c){return this.an(b,c)},
gL(a){return this.dX(0,0)},
sL(a,b){this.an(0,b)},
gq(a){return this.b_(0)},
sq(a,b){this.an(0,b)},
gt(){return this.b_(1)},
st(a){this.an(1,a)},
gv(a){return this.b_(2)},
sv(a,b){this.an(2,b)},
gu(a){return this.b_(3)},
su(a,b){this.an(3,b)},
ga8(){return this.b_(0)/this.f.gD()},
sa8(a){this.an(0,a*this.f.gD())},
ga0(){return this.b_(1)/this.f.gD()},
sa0(a){this.an(1,a*this.f.gD())},
ga5(){return this.b_(2)/this.f.gD()},
sa5(a){this.an(2,a*this.f.gD())},
ga9(){return this.b_(3)/this.f.gD()},
sa9(a){this.an(3,a*this.f.gD())},
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cP)return A.r(A.z(p,!0,A.q(p).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.aa(b)
if(s.gn(b)!==q)return!1
if(p.b_(0)!==s.l(b,0))return!1
if(q>1){if(p.b_(1)!==s.l(b,1))return!1
if(q>2){if(p.b_(2)!==s.l(b,2))return!1
if(q>3)if(p.b_(3)!==s.l(b,3))return!1}}return!0}return!1},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.f}}
A.cQ.prototype={
N(a){var s=this
return new A.cQ(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 4294967295},
gF(){return B.F},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
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
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cQ)return A.r(A.z(n,!0,A.q(n).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=J.aa(b)
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
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.cR.prototype={
N(a){var s=this
return new A.cR(s.a,s.b,s.c,s.d,s.e)},
gn(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.e.f},
gD(){return this.e.gD()},
gF(){return B.x},
gaS(a){return this.a},
gaT(a){return this.b},
aM(a,b,c){var s,r,q,p=this
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
E(){var s,r,q,p=this,o=p.e
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
dN(a,b){var s,r=this.c,q=4-(this.d+(b<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.Z(s[r],q)&15},
aY(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dN(0,a):0
else s=r.ba(0,this.dN(0,0),a)
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
l(a,b){return this.aY(b)},
h(a,b,c){return this.ao(b,c)},
gL(a){return this.dN(0,0)},
sL(a,b){this.ao(0,b)},
gq(a){return this.aY(0)},
sq(a,b){this.ao(0,b)},
gt(){return this.aY(1)},
st(a){this.ao(1,a)},
gv(a){return this.aY(2)},
sv(a,b){this.ao(2,b)},
gu(a){return this.aY(3)},
su(a,b){this.ao(3,b)},
ga8(){return this.aY(0)/this.e.gD()},
sa8(a){this.ao(0,a*this.e.gD())},
ga0(){return this.aY(1)/this.e.gD()},
sa0(a){this.ao(1,a*this.e.gD())},
ga5(){return this.aY(2)/this.e.gD()},
sa5(a){this.ao(2,a*this.e.gD())},
ga9(){return this.aY(3)/this.e.gD()},
sa9(a){this.ao(3,a*this.e.gD())},
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q=this
if(b==null)return!1
if(b instanceof A.cR)return A.r(A.z(q,!0,A.q(q).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=q.e.c
r=J.aa(b)
if(r.gn(b)!==s)return!1
if(q.aY(0)!==r.l(b,0))return!1
if(s>1){if(q.aY(1)!==r.l(b,1))return!1
if(s>2){if(q.aY(2)!==r.l(b,2))return!1
if(s>3)if(q.aY(3)!==r.l(b,3))return!1}}return!0}return!1},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.e}}
A.cS.prototype={
N(a){var s=this
return new A.cS(s.a,s.b,s.c,s.d)},
gn(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.d.e},
gD(){return this.d.gD()},
gF(){return B.e},
gaS(a){return this.a},
gaT(a){return this.b},
gJ(a){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
cg(a,b){var s,r=this.d,q=r.e
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
l(a,b){return this.cg(0,b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(B.b.I(c,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
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
s=q.aW(r[s])
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
s=q.aV(r[s])
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
s=q.aU(r[s])
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
gah(){return A.ab(this)},
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
gG(a){return new A.Z(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cS)return A.r(A.z(p,!0,A.q(p).m("f.E")))===A.r(A.z(b,!0,A.q(b).m("f.E")))
if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.aa(b)
if(s.gn(b)!==q)return!1
if(p.cg(0,0)!==s.l(b,0))return!1
if(q>1){if(p.cg(0,1)!==s.l(b,1))return!1
if(q>2){if(p.cg(0,2)!==s.l(b,2))return!1
if(q>3)if(p.cg(0,3)!==s.l(b,3))return!1}}return!0}return!1},
gC(a){return A.r(A.z(this,!0,A.q(this).m("f.E")))},
$iK:1,
$iE:1,
$iy:1,
gb5(a){return this.d}}
A.O.prototype={
N(a){return new A.O()},
gb5(a){return $.pT()},
gaS(a){return 0},
gaT(a){return 0},
gn(a){return 0},
gD(){return 0},
gF(){return B.e},
gP(){return null},
l(a,b){return 0},
h(a,b,c){},
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
E(){return!1},
R(a,b){if(b==null)return!1
return b instanceof A.O},
gC(a){return 0},
gG(a){return new A.Z(this)},
$iK:1,
$iE:1,
$iy:1}
A.kf.prototype={
ai(){return"FlipDirection."+this.b}}
A.kn.prototype={
A(a){return"ImageException: "+this.a}}
A.aq.prototype={
gn(a){return this.c-this.d},
h(a,b,c){J.F(this.a,this.d+b,c)
return c},
bl(a,b,c,d){var s=this.a,r=J.ac(s),q=this.d+a
if(c instanceof A.aq)r.aj(s,q,q+b,c.a,c.d+d)
else r.aj(s,q,q+b,t.L.a(c),d)},
bV(a,b,c){return this.bl(a,b,c,0)},
l9(a,b,c){var s=this.a,r=this.d+a
J.bC(s,r,r+b,c)},
dt(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.A(s.a,s.e,a,r+b)},
af(a){return this.dt(a,0,null)},
bX(a,b){return this.dt(a,0,b)},
cW(a,b){return this.dt(a,b,null)},
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
if(q===0)return A.l8(s,0,null)
B.c.H(s,q)}throw A.e(A.p("EOF reached without finding string terminator (length: "+A.B(a)+")"))}return A.l8(o.ab(a).a_(),0,null)},
cJ(){return this.ac(null)},
ln(){var s,r,q,p=this,o=A.b([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.bS.c0(o)}B.c.H(o,r)}return B.cc.kG(0,o,!0)},
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
dl(){return A.vd(this.eb())},
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
cL(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.h_(b,c)
s=r.b+b+b
return J.k0(q,s,c<=0?r.c:s+c)},
h_(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.N(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.k0(p,s,s+q)
return new Uint8Array(A.H(s))},
a_(){return this.h_(0,null)},
cN(){var s=this.a
if(t.D.b(s))return A.aY(s.buffer,s.byteOffset+this.d,null)
return A.aY(this.a_().buffer,0,null)},
sa6(a,b){this.a=t.L.a(b)},
sfR(a,b){this.d=A.t(b)}}
A.hY.prototype={
ko(a){var s=this
s.f0(a)
s.eL()
s.f_()
s.ez()},
jf(a){var s,r,q,p,o,n,m,l,k=this
k.slb(Math.max(a,4))
s=k.c
k.f=s-k.d
k.r=s-1
r=B.a.U(s,8)
k.w=r
k.x=r*256
k.Q=new A.dL(new Uint32Array(1024),256,4)
k.a=new A.b5(new Uint8Array(768),256,3)
k.d=3
k.e=2
r=B.a.j(s,3)
k.y=new Int32Array(r)
r=t.V
q=t.H
k.shT(q.a(A.aj(s*3,0,!1,r)))
k.shR(q.a(A.aj(k.c,0,!1,r)))
k.shS(q.a(A.aj(k.c,0,!1,r)))
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
r.aX(s,Math.abs(o),Math.abs(n),Math.abs(q))}},
jh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="_palette",h=this.as
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
if(typeof p!=="number")return A.bc(p)
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
f_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
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
fs(a,b){var s,r,q,p
for(s=this.y,r=a*a,q=0;q<a;++q){s===$&&A.c("_radiusPower")
p=B.b.i(b*((r-q*q)*256/r))
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
f0(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="_network",a5=a3.x
a5===$&&A.c("initBiasRadius")
s=30+B.a.U(a3.b-1,3)
r=a6.gX(a6)*a6.gM(a6)
q=B.a.aA(r,a3.b)
p=Math.max(B.a.U(q,100),1)
if(p===0)p=1
o=B.a.j(a5,8)
if(o<=1)o=0
a3.fs(o,1024)
if(r<1509)n=a3.b=1
else if(B.a.a2(r,499)!==0)n=499
else if(B.a.a2(r,491)!==0)n=491
else n=B.a.a2(r,487)!==0?487:503
m=a6.gX(a6)
l=a6.gM(a6)
for(k=a5,j=1024,i=0,h=0,g=0,f=0;f<q;){a5=a6.a
e=a5==null?null:a5.K(h,g,null)
if(e==null)e=new A.O()
d=e.gq(e)
c=e.gt()
b=e.gv(e)
if(f===0){a5=a3.z
a5===$&&A.c(a4)
a=a3.e
a===$&&A.c("bgColor")
B.c.h(a5,a*3,b)
B.c.h(a3.z,a3.e*3+1,c)
B.c.h(a3.z,a3.e*3+2,d)}a0=a3.ki(b,c,d)
if(a0<0)a0=a3.ij(b,c,d)
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
if(o>0)a3.i4(a1,o,a0,b,c,d)}i+=n
h+=n
for(;h>m;){h-=m;++g}for(;i>=r;){i-=r
g-=l}++f
if(B.a.a2(f,p)===0){j-=B.a.aA(j,s)
k-=B.a.U(k,30)
o=B.a.j(k,8)
if(o<=1)o=0
a3.fs(o,j)}}},
i4(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_network",f=c-b,e=h.d-1
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
ij(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1e30
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
ki(a,b,c){var s,r,q,p,o=this
for(s=0,r=0;s<o.d;++s){q=o.z
q===$&&A.c("_network")
p=r+1
if(!(r<q.length))return A.a(q,r)
if(J.bd(q[r],a)){q=o.z
r=p+1
if(!(p<q.length))return A.a(q,p)
if(J.bd(q[p],b)){q=o.z
p=r+1
if(!(r<q.length))return A.a(q,r)
q=J.bd(q[r],c)
r=p}else q=!1}else{r=p
q=!1}if(q)return s}return-1},
slb(a){this.c=A.t(a)},
shT(a){this.z=t.H.a(a)},
shR(a){this.at=t.H.a(a)},
shS(a){this.ax=t.H.a(a)}}
A.i1.prototype={
V(a){var s,r,q=this
if(q.a===q.c.length)q.iW()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
dn(a,b){var s,r,q,p,o=this
t.L.a(a)
b=J.c4(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.eJ(r-p)
B.k.by(q,s,r,a)
o.a+=b},
b8(a){return this.dn(a,null)},
dr(a){var s=this
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
B.k.by(p,0,q,r)
this.c=p},
iW(){return this.eJ(null)},
gn(a){return this.a}}
A.im.prototype={
h5(a){var s,r,q,p,o,n,m=a.gX(a),l=a.gM(a),k=this.a
k===$&&A.c("palette")
s=A.a4(null,null,B.e,0,B.h,l,null,0,1,k,m,!1)
m=s.a
r=m.gG(m)
r.E()
s.z=a.z
s.w=a.w
s.y=a.y
for(m=a.a,m=m.gG(m);m.E();){q=m.gJ(m)
p=r.gJ(r)
o=B.b.i(q.gq(q))
n=B.b.i(q.gt())
p.h(0,0,this.jh(B.b.i(q.gv(q)),n,o))
r.E()}return s}}
A.dR.prototype={
i(a){var s=this.b
return s===0?0:B.a.aA(this.a,s)},
R(a,b){if(b==null)return!1
return b instanceof A.dR&&this.a===b.a&&this.b===b.b},
gC(a){return A.n8(this.a,this.b,B.W,B.W)},
A(a){return""+this.a+"/"+this.b}}
A.mA.prototype={
$0(){$.bx!=null
var s=this.a
s.port1.close()
s.port2.close()
s=self
s.toString
t.h.a(s).close()},
$S:1}
A.mB.prototype={
$1(a){var s=t.lH.a(new A.iS([],[]).fG(t.d.a(a).data,!0)),r=this.b.port2
r.toString
this.a.cA(s,r,this.c)},
$S:19}
A.lS.prototype={
dY(a){var s,r,q,p
A.p6(a)
try{B.bD.le(this.a,a)}catch(q){s=A.aS(q)
r=A.aR(q)
A.nk("failed to post response "+A.B(a)+": error "+A.B(s))
p=A.f2(s,r)
throw A.e(p)}},
eZ(a){var s,r,q,p
A.p6(a)
try{q=A.oW(a,A.r_(t.K))
B.bD.fT(this.a,a,A.z(q,!0,q.$ti.m("f.E")))}catch(p){s=A.aS(p)
r=A.aR(p)
A.nk("failed to post response "+A.B(a)+": error "+A.B(s))
q=A.f2(s,r)
throw A.e(q)}}}
A.fi.prototype={
lt(a,b){return this.dY([null,b,null,null,null])},
l_(a){return this.eZ([null,a,null,null,null])},
fL(a,b){var s
if(A.oU()){s=new A.mb(b).$0()
A.v6("[DEBUG] "+A.B(s))}this.dY([null,null,A.f2(b,null),null,null])},
$ip3:1}
A.mb.prototype={
$0(){return"replying with error: "+this.a.A(0)},
$S:33}
A.ky.prototype={
$1(a){return this.a.cI(t.j.a(new A.iS([],[]).fG(t.d.a(a).data,!0)))},
$S:19}
A.c7.prototype={}
A.lf.prototype={}
A.lF.prototype={
eS(a){return a==null?$.pR():this.e.li(0,a.b,new A.lG(a))},
km(a){},
fj(){var s=this.km(this.d),r=this.a
if(s instanceof A.U)s.h2(r)
else r.$0()},
skk(a){this.f=t.fC.a(a)}}
A.lG.prototype={
$0(){var s=this.a.b,r=++$.nO().a,q=$.bx
q=q==null?null:q.e
q=new A.c7(!0,null,""+r+"@"+A.B(q))
q.b=s
return q},
$S:34}
A.lH.prototype={
cA(a,b,c){return this.kz(a,b,t.f8.a(c))},
kz(a0,a1,a2){var s=0,r=A.pw(t.z),q=1,p,o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$cA=A.pB(function(a3,a4){if(a3===1){p=a4
s=q}while(true)switch(s){case 0:b=a0==null
if(!b)A.p5(a0)
n=b?null:t.iu.a(J.d7(a0,1))
if(b)throw A.e(A.bQ("connection request expected",A.bz()))
else if(n==null)throw A.e(A.bQ("missing client for connection request",A.bz()))
q=3
b=J.ac(a0)
if(A.t(b.l(a0,2))!==-1){b=A.bQ("connection request expected",A.bz())
throw A.e(b)}else{g=o.a
if(g.a!==0){b=A.bQ("already connected",A.bz())
throw A.e(b)}}f=A.nz(b.l(a0,6))
f.toString
e=A.l2()
if(e.e==null){d=B.t.lA(f)
if(d.length!==0)e.e=d}f=A.l2()
if(f.f==null)f.f=n
f=A.mt(b.l(a0,5))
f.toString
e=A.l2()
e.a=f
b=A.mt(b.l(a0,0))!=null
$.nj=b
f=$.bx
if(f!=null)f.d=b
m=null
l=a2.$1(a0)
s=l instanceof A.U?6:8
break
case 6:b=l
if(!t.aO.b(b)){t.e6.a(b)
f=new A.U($.X,t.it)
f.a=8
f.c=b
b=f}s=9
return A.mu(b,$async$cA)
case 9:m=a4
s=7
break
case 8:m=l
case 7:k=m.glc()
b=k
f=A.ai(b).m("bj<1>")
f=new A.b_(new A.bj(b,f),f.m("ao(f.E)").a(new A.lI()),f.m("b_<f.E>"))
if(!f.gaR(f)){b=A.bQ("invalid command identifier in service operations map; command ids must be > 0",A.bz())
throw A.e(b)}g.de(0,k)
t.e6.a(m)
j=null
s=j instanceof A.U?10:11
break
case 10:s=12
return A.mu(j,$async$cA)
case 12:case 11:n.eZ([null,a1,null,null,null])
q=1
s=5
break
case 3:q=2
a=p
i=A.aS(a)
h=A.aR(a)
J.nW(n,A.f2(i,h))
s=5
break
case 2:s=1
break
case 5:return A.po(null,r)
case 1:return A.pn(p,r)}})
return A.pp($async$cA,r)},
cI(a){return this.lh(a)},
lh(a2){var s=0,r=A.pw(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cI=A.pB(function(a3,a4){if(a3===1){o=a4
s=p}while(true)switch(s){case 0:A.p5(a2)
e=J.ac(a2)
d=t.iu
l=d.a(e.l(a2,1))
if(A.t(e.l(a2,2))===-4){e=m.b
if(e.c===0)e.fj()
else e.b=!0
q=null
s=1
break}else if(A.t(e.l(a2,2))===-3){e=t.iv.a(e.l(a2,4))
e.toString
e=m.b.eS(e)
if(e.e)e.hi(0)
q=null
s=1
break}else if(A.t(e.l(a2,2))===-2){e=A.mt(e.l(a2,5))
e.toString
d=m.b.f
if(d==null)e=null
else{e=d.l(0,e)
e=e==null?null:e.$0()}q=e
s=1
break}else if(l==null)throw A.e(A.bQ("missing client for request: "+A.B(a2),A.bz()))
c=m.b;++c.c
b=t.iv
a=c.eS(b.a(e.l(a2,4)))
if(a.e){++a.f
if(b.a(e.l(a2,4))==null||b.a(e.l(a2,4)).b!==a.b)A.ad(A.bQ("cancellation token mismatch",A.bz()))
e.h(a2,4,a)}else if(b.a(e.l(a2,4))!=null)A.ad(A.bQ("Token reference mismatch",A.bz()))
k=a
p=4
if(A.t(e.l(a2,2))===-1){e=A.bQ("unexpected connection request: "+A.B(a2),A.bz())
throw A.e(e)}else{b=m.a
if(b.a===0){e=A.ns("worker service is not ready",null,null,null)
throw A.e(e)}}j=b.l(0,A.t(e.l(a2,2)))
if(j==null){e=A.ns("unknown command: "+A.tk(a2),null,null,null)
throw A.e(e)}i=j.$1(a2)
s=i instanceof A.U?7:8
break
case 7:s=9
return A.mu(i,$async$cI)
case 9:i=a4
case 8:if(A.tQ(e.l(a2,7))){e=d.a(e.l(a2,1))
e=e==null?null:e.gkZ()}else{e=d.a(e.l(a2,1))
e=e==null?null:e.gls(e)}e.toString
h=e
if(i instanceof A.j5){t.fw.a(i)
e=!0}else e=!1
s=e?10:12
break
case 10:s=13
return A.mu(A.tj(l,i,h,c,k),$async$cI)
case 13:s=11
break
case 12:h.$1(i)
case 11:n.push(6)
s=5
break
case 4:p=3
a1=o
g=A.aS(a1)
f=A.aR(a1)
J.nW(l,A.f2(g,f))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
e=t.e.a(k)
if(e.e)--e.f
if(e.f===0&&e.c==null)c.e.cK(0,e.b)
e=--c.c
if(c.b&&e===0)c.fj()
s=n.pop()
break
case 6:case 1:return A.po(q,r)
case 2:return A.pn(o,r)}})
return A.pp($async$cI,r)}}
A.lI.prototype={
$1(a){return A.t(a)<=0},
$S:35}
A.f1.prototype={
hH(a,b){},
c2(){var s=this.b.A(0)
return A.kE([-1,this.a,s],t.z)},
A(a){return B.aI.fK(this.c2(),null)},
$ibR:1}
A.bR.prototype={
A(a){return B.aI.fK(this.c2(),null)}}
A.e_.prototype={
du(a,b,c,d){var s
if(this.b==null)try{this.b=A.bz()}catch(s){}},
c2(){var s=this,r=s.b
r=r==null?null:r.A(0)
return A.kE([-2,s.a,r,s.c,s.d],t.z)}}
A.da.prototype={
c2(){var s=this,r=s.b
r=r==null?null:r.A(0)
return A.kE([-3,s.a,r,s.c,s.d],t.z)}}
A.f6.prototype={
c2(){var s,r,q,p=this,o=p.b
o=o==null?null:o.A(0)
s=p.c
r=p.d
q=p.x.glN()
return A.kE([-4,p.a,o,s,r,q],t.z)}}
A.l1.prototype={}
A.cn.prototype={
kp(a,b){var s
t.M.a(b)
if(this.c!=null)A.pO(b)
else{s=this.d
if(s==null){s=A.b([],t.f7)
this.sjk(s)}B.c.H(s,b)}},
e4(a){var s,r,q,p,o=this
if(o.c==null){s=A.qq(null,o.a,null,null)
o.c=s}s=o.d
if(s==null)s=B.bp
r=s.length
q=t.Z
p=0
for(;p<s.length;s.length===r||(0,A.ak)(s),++p)A.pO(q.a(s[p]))},
lq(a,b){var s
t.M.a(b)
s=this.d
return s==null?null:B.c.cK(s,b)},
sjk(a){this.d=t.gm.a(a)}}
A.lE.prototype={
$0(){this.b.dY([null,null,null,!0,null])
var s=this.a.a
if(s!=null)s.e4(0)
this.c.kx(0)},
$S:1}
A.lD.prototype={
$0(){var s=this.a,r=this.b,q=this.c,p=s.f,o=p==null?null:p.l(0,q)
if(o!=null){t.M.a(o)
if(r.e)r.hj(0,o)
s=s.f
if(s!=null)s.cK(0,q)}},
$S:8}
A.lC.prototype={
$2(a,b){return this.a.fL(0,A.f2(a,b))},
$S:36}
A.mK.prototype={
$1(a){return new A.dV()},
$S:37}
A.dV.prototype={
glc(){var s,r=this,q=r.a
if(q===$){s=A.oA([1,new A.lb(r)],t.p,t.kF)
r.a!==$&&A.pP("operations")
r.shX(s)
q=s}return q},
shX(a){this.a=t.lq.a(a)},
$iiR:1}
A.lb.prototype={
$1(a){var s,r,q,p,o=t.j
o.a(a)
s=J.ac(a)
A.mt(s.l(a,0))
$.bx!=null
r=t.D.a(J.d7(o.a(s.l(a,3)),0))
q=A.t(J.d7(o.a(s.l(a,3)),1))
s=A.t(J.d7(o.a(s.l(a,3)),2))
p=A.uN(r)
o=p==null?null:p.b2(0,r,null)
o.toString
return new Uint8Array(A.H(new A.kR(B.j9,6).kP(A.uJ(o,s,q),!1)))},
$S:38};(function aliases(){var s=J.ex.prototype
s.hl=s.A
s=J.cb.prototype
s.hn=s.A
s=A.m.prototype
s.ej=s.aj
s=A.f.prototype
s.hm=s.cf
s=A.j.prototype
s.hk=s.e3
s=A.cn.prototype
s.hh=s.kp
s.hi=s.e4
s.hj=s.lq})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_1u,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1i
s(A,"uA","tm",10)
s(A,"uB","tn",10)
s(A,"uC","to",10)
r(A,"pD","up",1)
s(A,"uI","tY",17)
q(A.ae.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.bJ.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cA.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cv.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cw.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.ca.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cz.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cx.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
q(A.cy.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
var l
p(l=A.hG.prototype,"giu","iv",6)
p(l,"gix","iy",6)
p(l,"giz","iA",6)
p(l,"gio","ip",6)
p(l,"giq","ir",6)
s(A,"vn","rJ",0)
s(A,"vg","rB",0)
s(A,"ve","rz",0)
s(A,"vl","rH",0)
s(A,"vm","rI",0)
s(A,"vk","rG",0)
s(A,"vj","rF",0)
s(A,"vi","rE",0)
s(A,"vp","rL",0)
s(A,"vo","rK",0)
s(A,"vh","rC",0)
s(A,"vf","rA",0)
s(A,"vA","rW",0)
s(A,"vy","rU",0)
s(A,"vq","rM",0)
s(A,"vs","rO",0)
s(A,"vr","rN",0)
s(A,"vt","rP",0)
s(A,"vB","rX",0)
s(A,"vz","rV",0)
s(A,"vu","rQ",0)
s(A,"vv","rR",0)
s(A,"vw","rS",0)
s(A,"vx","rT",0)
o(A.fa.prototype,"gjH","jI",18)
o(A.hz.prototype,"gkR","kS",18)
n(A,"nN",3,null,["$3"],["rY"],2,0)
n(A,"vC",3,null,["$3"],["rZ"],2,0)
n(A,"vH",3,null,["$3"],["t3"],2,0)
n(A,"vI",3,null,["$3"],["t4"],2,0)
n(A,"vJ",3,null,["$3"],["t5"],2,0)
n(A,"vK",3,null,["$3"],["t6"],2,0)
n(A,"vL",3,null,["$3"],["t7"],2,0)
n(A,"vM",3,null,["$3"],["t8"],2,0)
n(A,"vN",3,null,["$3"],["t9"],2,0)
n(A,"vO",3,null,["$3"],["ta"],2,0)
n(A,"vD",3,null,["$3"],["t_"],2,0)
n(A,"vE",3,null,["$3"],["t0"],2,0)
n(A,"vF",3,null,["$3"],["t1"],2,0)
n(A,"vG",3,null,["$3"],["t2"],2,0)
m(l=A.fi.prototype,"gls","lt",5)
o(l,"gkZ","l_",5)
n(A,"vQ",6,null,["$6"],["tg"],7,0)
n(A,"vR",6,null,["$6"],["th"],7,0)
n(A,"vP",6,null,["$6"],["tf"],7,0)
s(A,"ut","rs",9)
s(A,"uv","nn",9)
s(A,"uu","rt",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.Q,null)
q(A.Q,[A.n2,J.ex,J.e7,A.W,A.m,A.c8,A.l0,A.f,A.cD,A.cE,A.ff,A.ax,A.ce,A.eb,A.lh,A.kN,A.eh,A.fw,A.P,A.kC,A.aW,A.lT,A.b8,A.j9,A.jI,A.ml,A.iU,A.d0,A.e9,A.iX,A.bX,A.U,A.iV,A.f4,A.jw,A.fD,A.dS,A.jf,A.fk,A.fm,A.fX,A.co,A.md,A.mq,A.bH,A.h5,A.lU,A.i0,A.f3,A.lX,A.he,A.a8,A.jz,A.cU,A.k8,A.mU,A.fh,A.x,A.em,A.mi,A.lM,A.kM,A.hp,A.kQ,A.lK,A.ka,A.bb,A.m9,A.mh,A.kh,A.hn,A.lJ,A.lL,A.Z,A.bK,A.j6,A.h7,A.bt,A.ae,A.k6,A.bE,A.k9,A.kc,A.h8,A.bI,A.h9,A.ha,A.hb,A.ej,A.fs,A.en,A.eo,A.ep,A.hj,A.hk,A.fV,A.c9,A.ks,A.bN,A.kt,A.e1,A.hF,A.kv,A.hG,A.eW,A.i9,A.bv,A.dN,A.kT,A.cT,A.id,A.ie,A.eY,A.il,A.dO,A.dP,A.f_,A.b6,A.f7,A.lc,A.iA,A.le,A.iB,A.iC,A.kF,A.lm,A.f9,A.ln,A.ls,A.lw,A.ly,A.f8,A.lx,A.lo,A.bV,A.fb,A.iP,A.fc,A.fd,A.fa,A.iN,A.lt,A.iO,A.lA,A.fe,A.hh,A.ds,A.dZ,A.er,A.b4,A.kn,A.aq,A.im,A.i1,A.dR,A.lS,A.cn,A.lf,A.lF,A.lH,A.f1,A.bR,A.l1,A.dV])
q(J.ex,[J.hC,J.eD,J.d,J.dI,J.dJ,J.dG,J.dH])
q(J.d,[J.cb,J.D,A.dK,A.af,A.j,A.fJ,A.c6,A.bf,A.S,A.iZ,A.aw,A.h0,A.h2,A.j0,A.ed,A.j2,A.h4,A.o,A.j7,A.aG,A.hg,A.jb,A.dy,A.hO,A.hP,A.jg,A.jh,A.aH,A.ji,A.jk,A.aI,A.jo,A.jr,A.dT,A.aK,A.js,A.aL,A.jv,A.at,A.jC,A.iD,A.aN,A.jE,A.iF,A.iK,A.jK,A.jM,A.jO,A.jQ,A.jS,A.b2,A.jd,A.b3,A.jm,A.ia,A.jx,A.ba,A.jG,A.fN,A.iW])
q(J.cb,[J.i5,J.cW,J.bM])
r(J.kr,J.D)
q(J.dG,[J.eC,J.hD])
q(A.W,[A.cC,A.bT,A.hH,A.iI,A.j_,A.iq,A.e8,A.j4,A.eF,A.bq,A.iJ,A.iH,A.dU,A.fW])
r(A.dW,A.m)
r(A.be,A.dW)
q(A.c8,[A.fS,A.fT,A.ix,A.kx,A.mG,A.mI,A.lP,A.lO,A.mv,A.m1,A.m8,A.l6,A.mg,A.lW,A.mN,A.mO,A.k5,A.ke,A.ku,A.kp,A.ko,A.mB,A.ky,A.lI,A.mK,A.lb])
q(A.fS,[A.mM,A.lQ,A.lR,A.mm,A.lY,A.m4,A.m3,A.m0,A.m_,A.lZ,A.m7,A.m6,A.m5,A.l7,A.my,A.mf,A.ll,A.lk,A.mA,A.mb,A.lG,A.lE,A.lD])
q(A.f,[A.ee,A.eH,A.b_,A.d_,A.db,A.dc,A.dd,A.de,A.df,A.dg,A.dh,A.di,A.dj,A.dk,A.dl,A.bF,A.bL,A.am,A.cH,A.cI,A.cJ,A.cK,A.cL,A.cM,A.cN,A.cO,A.cP,A.cQ,A.cR,A.cS,A.O])
q(A.ee,[A.bu,A.bj,A.fl])
r(A.f5,A.bu)
r(A.ef,A.eH)
r(A.cr,A.eb)
r(A.eN,A.bT)
q(A.ix,[A.iu,A.d9])
r(A.iT,A.e8)
r(A.bi,A.P)
q(A.fT,[A.kw,A.mH,A.mw,A.mz,A.m2,A.kD,A.kG,A.me,A.kH,A.kI,A.kJ,A.kK,A.kZ,A.l_,A.l4,A.l5,A.mj,A.mk,A.lN,A.k3,A.k4,A.kk,A.kl,A.km,A.lz,A.lC])
r(A.eE,A.bi)
q(A.af,[A.hT,A.ar])
q(A.ar,[A.fo,A.fq])
r(A.fp,A.fo)
r(A.cc,A.fp)
r(A.fr,A.fq)
r(A.aX,A.fr)
q(A.cc,[A.hU,A.eI])
q(A.aX,[A.hV,A.hW,A.hX,A.eJ,A.eK,A.eL,A.cG])
r(A.fz,A.j4)
r(A.cZ,A.iX)
r(A.jq,A.fD)
r(A.ft,A.dS)
r(A.fj,A.ft)
q(A.fX,[A.mo,A.mn,A.kz,A.iM])
q(A.co,[A.h6,A.hI])
r(A.hJ,A.eF)
r(A.mc,A.md)
q(A.h6,[A.hK,A.iL])
r(A.kB,A.mo)
r(A.kA,A.mn)
q(A.bq,[A.f0,A.hm])
q(A.j,[A.J,A.ch,A.hc,A.cF,A.aJ,A.fu,A.aM,A.au,A.fx,A.iQ,A.fP,A.c5])
q(A.J,[A.v,A.br])
r(A.w,A.v)
q(A.w,[A.fK,A.fL,A.hd,A.ir])
r(A.fY,A.bf)
r(A.dm,A.iZ)
q(A.aw,[A.fZ,A.h_])
r(A.dn,A.ch)
r(A.j1,A.j0)
r(A.ec,A.j1)
r(A.j3,A.j2)
r(A.h3,A.j3)
r(A.aF,A.c6)
r(A.j8,A.j7)
r(A.dr,A.j8)
r(A.jc,A.jb)
r(A.cs,A.jc)
r(A.bO,A.o)
r(A.hQ,A.jg)
r(A.hR,A.jh)
r(A.jj,A.ji)
r(A.hS,A.jj)
r(A.jl,A.jk)
r(A.eM,A.jl)
r(A.jp,A.jo)
r(A.i6,A.jp)
r(A.ip,A.jr)
r(A.fv,A.fu)
r(A.is,A.fv)
r(A.jt,A.js)
r(A.it,A.jt)
r(A.iv,A.jv)
r(A.jD,A.jC)
r(A.iy,A.jD)
r(A.fy,A.fx)
r(A.iz,A.fy)
r(A.jF,A.jE)
r(A.iE,A.jF)
r(A.jL,A.jK)
r(A.iY,A.jL)
r(A.fg,A.ed)
r(A.jN,A.jM)
r(A.ja,A.jN)
r(A.jP,A.jO)
r(A.fn,A.jP)
r(A.jR,A.jQ)
r(A.ju,A.jR)
r(A.jT,A.jS)
r(A.jB,A.jT)
r(A.j5,A.f4)
r(A.jA,A.mi)
r(A.iS,A.lM)
r(A.je,A.jd)
r(A.hL,A.je)
r(A.jn,A.jm)
r(A.hZ,A.jn)
r(A.jy,A.jx)
r(A.iw,A.jy)
r(A.jH,A.jG)
r(A.iG,A.jH)
r(A.fO,A.iW)
r(A.i_,A.c5)
r(A.k1,A.he)
r(A.ho,A.hp)
r(A.kO,A.kQ)
r(A.ms,A.lK)
q(A.lU,[A.k7,A.ay,A.fQ,A.as,A.ap,A.dq,A.cp,A.bg,A.du,A.dM,A.eV,A.cd,A.i8,A.bl,A.aB,A.cV,A.ag,A.b9,A.cX,A.dY,A.ki,A.hf,A.hB,A.kf])
q(A.bF,[A.fU,A.ea])
r(A.dp,A.bK)
q(A.ae,[A.bJ,A.cu,A.cA,A.cv,A.cw,A.ca,A.cz,A.cx,A.cy,A.dw,A.dv,A.dx])
q(A.k9,[A.fR,A.kd,A.kg,A.kj,A.hE,A.i7,A.kU,A.kY,A.la,A.ld,A.lB])
r(A.kb,A.fR)
r(A.hr,A.bI)
q(A.hr,[A.ey,A.ht,A.hu,A.hv,A.ez])
r(A.hs,A.ej)
r(A.hw,A.eo)
r(A.hi,A.bE)
q(A.c9,[A.ct,A.eq])
r(A.hx,A.eW)
r(A.hy,A.i9)
r(A.kR,A.kc)
q(A.bv,[A.ib,A.ic,A.ig,A.ih,A.ij,A.ik])
q(A.dN,[A.eZ,A.ii])
q(A.il,[A.dQ,A.aA])
r(A.hz,A.fa)
r(A.hA,A.fe)
r(A.eA,A.dZ)
q(A.am,[A.dz,A.dA,A.es,A.et,A.eu,A.ev,A.dB,A.ew,A.dC,A.dD,A.dE,A.dF])
q(A.b4,[A.eO,A.eP,A.eQ,A.eR,A.eS,A.eT,A.eU,A.dL,A.b5])
r(A.hY,A.im)
r(A.fi,A.lS)
r(A.c7,A.cn)
r(A.e_,A.bR)
r(A.da,A.e_)
r(A.f6,A.da)
s(A.dW,A.ce)
s(A.fo,A.m)
s(A.fp,A.ax)
s(A.fq,A.m)
s(A.fr,A.ax)
s(A.iZ,A.k8)
s(A.j0,A.m)
s(A.j1,A.x)
s(A.j2,A.m)
s(A.j3,A.x)
s(A.j7,A.m)
s(A.j8,A.x)
s(A.jb,A.m)
s(A.jc,A.x)
s(A.jg,A.P)
s(A.jh,A.P)
s(A.ji,A.m)
s(A.jj,A.x)
s(A.jk,A.m)
s(A.jl,A.x)
s(A.jo,A.m)
s(A.jp,A.x)
s(A.jr,A.P)
s(A.fu,A.m)
s(A.fv,A.x)
s(A.js,A.m)
s(A.jt,A.x)
s(A.jv,A.P)
s(A.jC,A.m)
s(A.jD,A.x)
s(A.fx,A.m)
s(A.fy,A.x)
s(A.jE,A.m)
s(A.jF,A.x)
s(A.jK,A.m)
s(A.jL,A.x)
s(A.jM,A.m)
s(A.jN,A.x)
s(A.jO,A.m)
s(A.jP,A.x)
s(A.jQ,A.m)
s(A.jR,A.x)
s(A.jS,A.m)
s(A.jT,A.x)
s(A.jd,A.m)
s(A.je,A.x)
s(A.jm,A.m)
s(A.jn,A.x)
s(A.jx,A.m)
s(A.jy,A.x)
s(A.jG,A.m)
s(A.jH,A.x)
s(A.iW,A.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",R:"double",l:"num",C:"String",ao:"bool",a8:"Null",k:"List"},mangledNames:{},types:["~(aq)","~()","i(bA,i,i)","i([i])","~(C,@)","~(@)","~(bN,k<i>)","~(i,i,i,i,i,bm)","a8()","ao(@)","~(~())","~(Q?,Q?)","~(@,@)","@()","a8(@)","~(C,C)","~(C,bt)","@(@)","~(i)","~(bO)","U<@>(@)","b1<a8>()","~(o)","a8(@,@)","@(@,@)","~(i,ae)","a8(~())","~(l,l,l,l)","bA(i)","bN(i)","@(@,C)","l(l,l,l,l)","l(l,l,l,l,l)","C()","c7()","ao(i)","~(Q,by)","dV(k<@>)","bm/(k<@>)","@(C)","a8(@,by)","~(i,@)","a8(Q,by)","i(i,i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.tK(v.typeUniverse,JSON.parse('{"i5":"cb","cW":"cb","bM":"cb","wa":"d","wb":"d","vU":"d","vS":"o","w7":"o","vV":"c5","vT":"j","we":"j","wh":"j","wc":"v","vW":"w","wd":"w","w8":"J","w6":"J","wD":"au","wi":"ch","vY":"br","wk":"br","w9":"cs","w_":"S","w1":"bf","w3":"at","w4":"aw","w0":"aw","w2":"aw","hC":{"ao":[],"V":[]},"eD":{"a8":[],"V":[]},"d":{"n":[]},"cb":{"n":[]},"D":{"k":["1"],"n":[],"f":["1"],"G":["1"]},"kr":{"D":["1"],"k":["1"],"n":[],"f":["1"],"G":["1"]},"e7":{"K":["1"]},"dG":{"R":[],"l":[]},"eC":{"R":[],"i":[],"l":[],"V":[]},"hD":{"R":[],"l":[],"V":[]},"dH":{"C":[],"G":["@"],"V":[]},"cC":{"W":[]},"be":{"m":["i"],"ce":["i"],"k":["i"],"f":["i"],"m.E":"i","ce.E":"i"},"ee":{"f":["1"]},"bu":{"f":["1"]},"f5":{"bu":["1"],"f":["1"],"f.E":"1","bu.E":"1"},"cD":{"K":["1"]},"eH":{"f":["2"],"f.E":"2"},"ef":{"eH":["1","2"],"f":["2"],"f.E":"2"},"cE":{"K":["2"]},"b_":{"f":["1"],"f.E":"1"},"ff":{"K":["1"]},"dW":{"m":["1"],"ce":["1"],"k":["1"],"f":["1"]},"eb":{"a7":["1","2"]},"cr":{"eb":["1","2"],"a7":["1","2"]},"eN":{"bT":[],"W":[]},"hH":{"W":[]},"iI":{"W":[]},"fw":{"by":[]},"c8":{"cq":[]},"fS":{"cq":[]},"fT":{"cq":[]},"ix":{"cq":[]},"iu":{"cq":[]},"d9":{"cq":[]},"j_":{"W":[]},"iq":{"W":[]},"iT":{"W":[]},"bi":{"P":["1","2"],"n5":["1","2"],"a7":["1","2"],"P.K":"1","P.V":"2"},"bj":{"f":["1"],"f.E":"1"},"aW":{"K":["1"]},"eE":{"bi":["1","2"],"P":["1","2"],"n5":["1","2"],"a7":["1","2"],"P.K":"1","P.V":"2"},"dK":{"n":[],"V":[]},"af":{"n":[],"a5":[]},"hT":{"af":[],"n":[],"a5":[],"V":[]},"ar":{"af":[],"I":["1"],"n":[],"a5":[],"G":["1"]},"cc":{"m":["R"],"ar":["R"],"k":["R"],"af":[],"I":["R"],"n":[],"a5":[],"G":["R"],"f":["R"],"ax":["R"]},"aX":{"m":["i"],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"]},"hU":{"cc":[],"m":["R"],"mX":[],"ar":["R"],"k":["R"],"af":[],"I":["R"],"n":[],"a5":[],"G":["R"],"f":["R"],"ax":["R"],"V":[],"m.E":"R"},"eI":{"cc":[],"m":["R"],"mY":[],"ar":["R"],"k":["R"],"af":[],"I":["R"],"n":[],"a5":[],"G":["R"],"f":["R"],"ax":["R"],"V":[],"m.E":"R"},"hV":{"aX":[],"m":["i"],"kq":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"hW":{"aX":[],"m":["i"],"hq":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"hX":{"aX":[],"m":["i"],"mZ":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"eJ":{"aX":[],"m":["i"],"no":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"eK":{"aX":[],"m":["i"],"bA":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"eL":{"aX":[],"m":["i"],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"cG":{"aX":[],"m":["i"],"bm":[],"ar":["i"],"k":["i"],"af":[],"I":["i"],"n":[],"a5":[],"G":["i"],"f":["i"],"ax":["i"],"V":[],"m.E":"i"},"j4":{"W":[]},"fz":{"bT":[],"W":[]},"U":{"b1":["1"]},"d0":{"K":["1"]},"d_":{"f":["1"],"f.E":"1"},"e9":{"W":[]},"cZ":{"iX":["1"]},"fD":{"p7":[]},"jq":{"fD":[],"p7":[]},"fj":{"dS":["1"],"f":["1"]},"fk":{"K":["1"]},"m":{"k":["1"],"f":["1"]},"P":{"a7":["1","2"]},"fl":{"f":["2"],"f.E":"2"},"fm":{"K":["2"]},"dS":{"f":["1"]},"ft":{"dS":["1"],"f":["1"]},"h6":{"co":["C","k<i>"]},"eF":{"W":[]},"hJ":{"W":[]},"hI":{"co":["Q?","C"]},"hK":{"co":["C","k<i>"]},"iL":{"co":["C","k<i>"]},"R":{"l":[]},"i":{"l":[]},"k":{"f":["1"]},"e8":{"W":[]},"bT":{"W":[]},"bq":{"W":[]},"f0":{"W":[]},"hm":{"W":[]},"iJ":{"W":[]},"iH":{"W":[]},"dU":{"W":[]},"fW":{"W":[]},"i0":{"W":[]},"f3":{"W":[]},"jz":{"by":[]},"cU":{"ro":[]},"S":{"n":[]},"o":{"n":[]},"aF":{"c6":[],"n":[]},"aG":{"n":[]},"bO":{"o":[],"n":[]},"aH":{"n":[]},"J":{"j":[],"n":[]},"aI":{"n":[]},"aJ":{"j":[],"n":[]},"aK":{"n":[]},"aL":{"n":[]},"at":{"n":[]},"aM":{"j":[],"n":[]},"au":{"j":[],"n":[]},"aN":{"n":[]},"w":{"J":[],"j":[],"n":[]},"fJ":{"n":[]},"fK":{"J":[],"j":[],"n":[]},"fL":{"J":[],"j":[],"n":[]},"c6":{"n":[]},"br":{"J":[],"j":[],"n":[]},"fY":{"n":[]},"dm":{"n":[]},"aw":{"n":[]},"bf":{"n":[]},"fZ":{"n":[]},"h_":{"n":[]},"h0":{"n":[]},"dn":{"j":[],"n":[]},"h2":{"n":[]},"ec":{"m":["bw<l>"],"x":["bw<l>"],"k":["bw<l>"],"I":["bw<l>"],"n":[],"f":["bw<l>"],"G":["bw<l>"],"x.E":"bw<l>","m.E":"bw<l>"},"ed":{"bw":["l"],"n":[]},"h3":{"m":["C"],"x":["C"],"k":["C"],"I":["C"],"n":[],"f":["C"],"G":["C"],"x.E":"C","m.E":"C"},"h4":{"n":[]},"v":{"J":[],"j":[],"n":[]},"j":{"n":[]},"dr":{"m":["aF"],"x":["aF"],"k":["aF"],"I":["aF"],"n":[],"f":["aF"],"G":["aF"],"x.E":"aF","m.E":"aF"},"hc":{"j":[],"n":[]},"hd":{"J":[],"j":[],"n":[]},"hg":{"n":[]},"cs":{"m":["J"],"x":["J"],"k":["J"],"I":["J"],"n":[],"f":["J"],"G":["J"],"x.E":"J","m.E":"J"},"dy":{"n":[]},"hO":{"n":[]},"hP":{"n":[]},"cF":{"j":[],"n":[]},"hQ":{"P":["C","@"],"n":[],"a7":["C","@"],"P.K":"C","P.V":"@"},"hR":{"P":["C","@"],"n":[],"a7":["C","@"],"P.K":"C","P.V":"@"},"hS":{"m":["aH"],"x":["aH"],"k":["aH"],"I":["aH"],"n":[],"f":["aH"],"G":["aH"],"x.E":"aH","m.E":"aH"},"eM":{"m":["J"],"x":["J"],"k":["J"],"I":["J"],"n":[],"f":["J"],"G":["J"],"x.E":"J","m.E":"J"},"i6":{"m":["aI"],"x":["aI"],"k":["aI"],"I":["aI"],"n":[],"f":["aI"],"G":["aI"],"x.E":"aI","m.E":"aI"},"ip":{"P":["C","@"],"n":[],"a7":["C","@"],"P.K":"C","P.V":"@"},"ir":{"J":[],"j":[],"n":[]},"dT":{"n":[]},"is":{"m":["aJ"],"x":["aJ"],"k":["aJ"],"j":[],"I":["aJ"],"n":[],"f":["aJ"],"G":["aJ"],"x.E":"aJ","m.E":"aJ"},"it":{"m":["aK"],"x":["aK"],"k":["aK"],"I":["aK"],"n":[],"f":["aK"],"G":["aK"],"x.E":"aK","m.E":"aK"},"iv":{"P":["C","C"],"n":[],"a7":["C","C"],"P.K":"C","P.V":"C"},"iy":{"m":["au"],"x":["au"],"k":["au"],"I":["au"],"n":[],"f":["au"],"G":["au"],"x.E":"au","m.E":"au"},"iz":{"m":["aM"],"x":["aM"],"k":["aM"],"j":[],"I":["aM"],"n":[],"f":["aM"],"G":["aM"],"x.E":"aM","m.E":"aM"},"iD":{"n":[]},"iE":{"m":["aN"],"x":["aN"],"k":["aN"],"I":["aN"],"n":[],"f":["aN"],"G":["aN"],"x.E":"aN","m.E":"aN"},"iF":{"n":[]},"iK":{"n":[]},"iQ":{"j":[],"n":[]},"ch":{"j":[],"n":[]},"iY":{"m":["S"],"x":["S"],"k":["S"],"I":["S"],"n":[],"f":["S"],"G":["S"],"x.E":"S","m.E":"S"},"fg":{"bw":["l"],"n":[]},"ja":{"m":["aG?"],"x":["aG?"],"k":["aG?"],"I":["aG?"],"n":[],"f":["aG?"],"G":["aG?"],"x.E":"aG?","m.E":"aG?"},"fn":{"m":["J"],"x":["J"],"k":["J"],"I":["J"],"n":[],"f":["J"],"G":["J"],"x.E":"J","m.E":"J"},"ju":{"m":["aL"],"x":["aL"],"k":["aL"],"I":["aL"],"n":[],"f":["aL"],"G":["aL"],"x.E":"aL","m.E":"aL"},"jB":{"m":["at"],"x":["at"],"k":["at"],"I":["at"],"n":[],"f":["at"],"G":["at"],"x.E":"at","m.E":"at"},"j5":{"f4":["1"]},"fh":{"rn":["1"]},"em":{"K":["1"]},"b2":{"n":[]},"b3":{"n":[]},"ba":{"n":[]},"hL":{"m":["b2"],"x":["b2"],"k":["b2"],"n":[],"f":["b2"],"x.E":"b2","m.E":"b2"},"hZ":{"m":["b3"],"x":["b3"],"k":["b3"],"n":[],"f":["b3"],"x.E":"b3","m.E":"b3"},"ia":{"n":[]},"iw":{"m":["C"],"x":["C"],"k":["C"],"n":[],"f":["C"],"x.E":"C","m.E":"C"},"iG":{"m":["ba"],"x":["ba"],"k":["ba"],"n":[],"f":["ba"],"x.E":"ba","m.E":"ba"},"fN":{"n":[]},"fO":{"P":["C","@"],"n":[],"a7":["C","@"],"P.K":"C","P.V":"@"},"fP":{"j":[],"n":[]},"c5":{"j":[],"n":[]},"i_":{"j":[],"n":[]},"ho":{"hp":[]},"Z":{"K":["l"]},"db":{"E":[],"f":["l"],"f.E":"l"},"dc":{"E":[],"f":["l"],"f.E":"l"},"dd":{"E":[],"f":["l"],"f.E":"l"},"de":{"E":[],"f":["l"],"f.E":"l"},"df":{"E":[],"f":["l"],"f.E":"l"},"dg":{"E":[],"f":["l"],"f.E":"l"},"dh":{"E":[],"f":["l"],"f.E":"l"},"di":{"E":[],"f":["l"],"f.E":"l"},"dj":{"E":[],"f":["l"],"f.E":"l"},"dk":{"E":[],"f":["l"],"f.E":"l"},"dl":{"E":[],"f":["l"],"f.E":"l"},"bF":{"E":[],"f":["l"],"f.E":"l"},"fU":{"E":[],"f":["l"],"f.E":"l"},"ea":{"E":[],"f":["l"],"f.E":"l"},"dp":{"bK":[]},"bJ":{"ae":[]},"cu":{"ae":[]},"cA":{"ae":[]},"cv":{"ae":[]},"cw":{"ae":[]},"ca":{"ae":[]},"cz":{"ae":[]},"cx":{"ae":[]},"cy":{"ae":[]},"dw":{"ae":[]},"dv":{"ae":[]},"dx":{"ae":[]},"bE":{"a2":[]},"ey":{"bI":[]},"hr":{"bI":[]},"hb":{"a2":[]},"hs":{"ej":[]},"ht":{"bI":[]},"hu":{"bI":[]},"hv":{"bI":[]},"ez":{"bI":[]},"hw":{"eo":[]},"ep":{"a2":[]},"hj":{"a2":[]},"hi":{"bE":[],"a2":[]},"ct":{"c9":[]},"eq":{"c9":[]},"hx":{"eW":[]},"i9":{"a2":[]},"hy":{"a2":[]},"ib":{"bv":[]},"ic":{"bv":[]},"ig":{"bv":[]},"ih":{"bv":[]},"ij":{"bv":[]},"ik":{"bv":[]},"eZ":{"dN":[]},"ii":{"dN":[]},"id":{"a2":[]},"dO":{"a2":[]},"dP":{"a2":[]},"f_":{"a2":[]},"f7":{"a2":[]},"iC":{"a2":[]},"hA":{"fe":[]},"dZ":{"a2":[]},"eA":{"dZ":[],"a2":[]},"bL":{"f":["y"],"f.E":"y"},"am":{"f":["y"]},"dz":{"am":[],"f":["y"],"f.E":"y"},"dA":{"am":[],"f":["y"],"f.E":"y"},"es":{"am":[],"f":["y"],"f.E":"y"},"et":{"am":[],"f":["y"],"f.E":"y"},"eu":{"am":[],"f":["y"],"f.E":"y"},"ev":{"am":[],"f":["y"],"f.E":"y"},"dB":{"am":[],"f":["y"],"f.E":"y"},"ew":{"am":[],"f":["y"],"f.E":"y"},"dC":{"am":[],"f":["y"],"f.E":"y"},"dD":{"am":[],"f":["y"],"f.E":"y"},"dE":{"am":[],"f":["y"],"f.E":"y"},"dF":{"am":[],"f":["y"],"f.E":"y"},"eO":{"b4":[]},"eP":{"b4":[]},"eQ":{"b4":[]},"eR":{"b4":[]},"eS":{"b4":[]},"eT":{"b4":[]},"eU":{"b4":[]},"dL":{"b4":[]},"b5":{"b4":[]},"cH":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cI":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cJ":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cK":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cL":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cM":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cN":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cO":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cP":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cQ":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cR":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"cS":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"O":{"y":[],"E":[],"f":["l"],"K":["y"],"f.E":"l"},"hY":{"im":[]},"fi":{"p3":[]},"c7":{"cn":[]},"f1":{"bR":[]},"e_":{"bR":[]},"da":{"bR":[]},"f6":{"da":[],"bR":[]},"dV":{"iR":[]},"qo":{"a5":[]},"mZ":{"k":["i"],"f":["i"],"a5":[]},"bm":{"k":["i"],"f":["i"],"a5":[]},"rv":{"k":["i"],"f":["i"],"a5":[]},"kq":{"k":["i"],"f":["i"],"a5":[]},"no":{"k":["i"],"f":["i"],"a5":[]},"hq":{"k":["i"],"f":["i"],"a5":[]},"bA":{"k":["i"],"f":["i"],"a5":[]},"mX":{"k":["R"],"f":["R"],"a5":[]},"mY":{"k":["R"],"f":["R"],"a5":[]},"y":{"E":[],"K":["y"],"f":["l"]}}'))
A.tJ(v.typeUniverse,JSON.parse('{"ee":1,"dW":1,"ar":1,"ft":1,"fX":2,"il":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ah
return{n:s("e9"),fj:s("c6"),e:s("c7"),G:s("E"),d5:s("S"),h:s("dn"),fz:s("W"),fq:s("o"),iW:s("h8"),ho:s("ha"),dY:s("aF"),kL:s("dr"),gY:s("cq"),f8:s("iR/(k<@>)"),aO:s("b1<iR>"),g7:s("b1<@>"),co:s("ds"),gP:s("hh"),aw:s("hk"),a:s("bt"),r:s("ae"),ad:s("dy"),X:s("am"),bW:s("hq"),id:s("f<R>"),R:s("f<@>"),fm:s("f<i>"),an:s("D<fV>"),a_:s("D<h9>"),lv:s("D<ej>"),b:s("D<eo>"),nK:s("D<ds>"),g:s("D<bL>"),hc:s("D<k<k<k<i>>>>"),o:s("D<k<k<i>>>"),S:s("D<k<i>>"),C:s("D<a7<@,@>>"),fi:s("D<eW>"),mS:s("D<cT>"),na:s("D<bv>"),k9:s("D<eY>"),s:s("D<C>"),fZ:s("D<iB>"),bs:s("D<bm>"),by:s("D<bV>"),ip:s("D<iO>"),J:s("D<fe>"),n0:s("D<j6>"),kv:s("D<e1>"),dG:s("D<@>"),t:s("D<i>"),dj:s("D<c9?>"),gU:s("D<hF?>"),mD:s("D<bA?>"),e5:s("D<bm?>"),f7:s("D<~()>"),B:s("D<~(aq)>"),iy:s("G<@>"),u:s("eD"),bp:s("n"),et:s("bM"),dX:s("I<@>"),e7:s("bN"),kT:s("b2"),kk:s("k<ds>"),aL:s("k<bL>"),kn:s("k<hq>"),hK:s("k<k<k<i>>>"),mL:s("k<k<bV>>"),ez:s("k<Q>"),I:s("k<cT>"),f0:s("k<eY>"),bF:s("k<C>"),ac:s("k<f8>"),jz:s("k<bV>"),jt:s("k<fb>"),as:s("k<fc>"),f4:s("k<fd>"),cq:s("k<ao>"),H:s("k<R>"),j:s("k<@>"),L:s("k<i>"),A:s("k<c9?>"),kb:s("k<bV?>"),a3:s("k<fs?>"),dW:s("k<i?>"),oT:s("k<l>"),je:s("a7<C,C>"),f:s("a7<@,@>"),lq:s("a7<i,@(k<@>)>"),d:s("bO"),oA:s("cF"),ib:s("aH"),hH:s("dK"),dQ:s("cc"),aj:s("aX"),hX:s("af"),hD:s("cG"),Q:s("J"),P:s("a8"),ai:s("b3"),K:s("Q"),mK:s("y"),d8:s("aI"),dS:s("cT"),ok:s("ie"),dM:s("eZ"),mi:s("dN"),fF:s("dO"),i:s("dR"),lZ:s("wg"),q:s("bw<l>"),kI:s("dT"),ls:s("aJ"),cA:s("aK"),hI:s("aL"),l:s("by"),fw:s("f4<@>"),N:s("C"),ll:s("at"),dR:s("aM"),gJ:s("au"),e8:s("iA"),ki:s("aN"),hk:s("ba"),aJ:s("V"),do:s("bT"),jv:s("a5"),mC:s("bA"),D:s("bm"),cx:s("cW"),e9:s("f8"),f_:s("fb"),h2:s("fc"),ij:s("fd"),e6:s("iR"),jk:s("cZ<@>"),av:s("U<a8>"),it:s("U<iR>"),c:s("U<@>"),hy:s("U<i>"),nA:s("fs"),iD:s("d_<Q>"),v:s("ao"),nU:s("ao(Q)"),V:s("R"),z:s("@"),mY:s("@()"),kF:s("@(k<@>)"),x:s("@(Q)"),U:s("@(Q,by)"),p1:s("@(@,@)"),p:s("i"),eK:s("0&*"),_:s("Q*"),iv:s("cn?"),gK:s("b1<a8>?"),ef:s("aG?"),jH:s("kq?"),nW:s("k<Q>?"),lH:s("k<@>?"),T:s("k<i>?"),iM:s("k<c9?>?"),kX:s("k<bA?>?"),k:s("k<i?>?"),gm:s("k<~()>?"),hL:s("a7<C,am>?"),lG:s("a7<C,C>?"),fC:s("a7<i,~()>?"),O:s("Q?"),dD:s("bR?"),nh:s("bm?"),nX:s("f9?"),fA:s("bV?"),nk:s("iP?"),iu:s("p3?"),F:s("bX<@,@>?"),W:s("jf?"),y:s("@(o)?"),E:s("i?"),Z:s("~()?"),m1:s("~(bO)?"),bZ:s("~(i)?"),cZ:s("l"),Y:s("~"),M:s("~()"),m:s("~(bN,k<i>)"),bm:s("~(C,C)"),w:s("~(C,@)"),lt:s("~(i)"),jO:s("~(l,l,l,l)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cu=J.ex.prototype
B.c=J.D.prototype
B.a=J.eC.prototype
B.b=J.dG.prototype
B.t=J.dH.prototype
B.cw=J.bM.prototype
B.cx=J.d.prototype
B.bD=A.cF.prototype
B.j0=A.eI.prototype
B.j1=A.eJ.prototype
B.Q=A.eK.prototype
B.k=A.cG.prototype
B.bE=J.i5.prototype
B.aC=J.cW.prototype
B.ah=new A.fQ(0,"direct")
B.aE=new A.fQ(1,"alpha")
B.aF=new A.ap(0,"none")
B.ai=new A.ap(3,"bitfields")
B.aj=new A.ap(6,"alphaBitfields")
B.aG=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.c5=function() {
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
B.ca=function(getTagFallback) {
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
B.c6=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.c7=function(hooks) {
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
B.c9=function(hooks) {
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
B.c8=function(hooks) {
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

B.aI=new A.hI()
B.aJ=new A.hK()
B.aK=new A.kB()
B.cb=new A.i0()
B.W=new A.l0()
B.cc=new A.iL()
B.jW=new A.lJ()
B.aL=new A.lL()
B.p=new A.jq()
B.cd=new A.jz()
B.R=new A.ms()
B.aM=new A.k7(4,"luminance")
B.ce=new A.cp(0,"red")
B.cf=new A.cp(1,"green")
B.cg=new A.cp(2,"blue")
B.ch=new A.cp(3,"alpha")
B.ci=new A.cp(4,"other")
B.aN=new A.dq(0,"uint")
B.ak=new A.dq(1,"half")
B.al=new A.dq(2,"float")
B.aO=new A.bg(0,"none")
B.cq=new A.kf(2,"both")
B.v=new A.ay(0,"uint1")
B.w=new A.ay(1,"uint2")
B.E=new A.ay(10,"float32")
B.H=new A.ay(11,"float64")
B.x=new A.ay(2,"uint4")
B.e=new A.ay(3,"uint8")
B.y=new A.ay(4,"uint16")
B.F=new A.ay(5,"uint32")
B.I=new A.ay(6,"int8")
B.J=new A.ay(7,"int16")
B.K=new A.ay(8,"int32")
B.A=new A.ay(9,"float16")
B.cr=new A.hf(1,"page")
B.h=new A.hf(2,"sequence")
B.am=new A.ki(1,"deflate")
B.aP=new A.du(2,"cur")
B.d=new A.as(0,"none")
B.aQ=new A.as(1,"byte")
B.aR=new A.as(10,"sRational")
B.aS=new A.as(11,"single")
B.aT=new A.as(12,"double")
B.i=new A.as(2,"ascii")
B.f=new A.as(3,"short")
B.m=new A.as(4,"long")
B.o=new A.as(5,"rational")
B.aU=new A.as(6,"sByte")
B.L=new A.as(7,"undefined")
B.aV=new A.as(8,"sShort")
B.aW=new A.as(9,"sLong")
B.cv=new A.hB(0,"nearest")
B.jX=new A.hB(1,"linear")
B.cy=new A.kz(null)
B.cz=new A.kA(!1)
B.an=A.b(s([A.vu(),A.vm(),A.vB(),A.vz(),A.vw(),A.vv(),A.vx()]),t.B)
B.M=A.b(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.ae=new A.aB(0,"none")
B.C=new A.aB(1,"palette")
B.bO=new A.aB(2,"rgb")
B.jf=new A.aB(3,"gray")
B.jg=new A.aB(4,"reserved4")
B.jh=new A.aB(5,"reserved5")
B.ji=new A.aB(6,"reserved6")
B.jj=new A.aB(7,"reserved7")
B.jk=new A.aB(8,"reserved8")
B.D=new A.aB(9,"paletteRle")
B.bN=new A.aB(10,"rgbRle")
B.je=new A.aB(11,"grayRle")
B.aX=A.b(s([B.ae,B.C,B.bO,B.jf,B.jg,B.jh,B.ji,B.jj,B.jk,B.D,B.bN,B.je]),A.ah("D<aB>"))
B.X=A.b(s([0,2,8]),t.t)
B.cK=A.b(s([0,4,2,1]),t.t)
B.aZ=A.b(s([252,243,207,63]),t.t)
B.Y=A.b(s([292,260,226,226]),t.t)
B.b0=A.b(s([2,3,7]),t.t)
B.d5=A.b(s([3,3,11]),t.t)
B.b2=A.b(s([511,1023,2047,4095]),t.t)
B.b5=A.b(s([63,207,243,252]),t.t)
B.dj=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.ao=A.b(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.u=A.b(s([0,1,3,7,15,31,63,127,255]),t.t)
B.N=A.b(s([0,128,192,224,240,248,252,254,255]),t.t)
B.q=A.b(s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),t.t)
B.dx=A.b(s([8,8,4,2]),t.t)
B.ap=A.b(s([8,0,8,0]),t.t)
B.di=A.b(s([5,3,5,3]),t.t)
B.d6=A.b(s([3,5,3,5]),t.t)
B.aY=A.b(s([0,8,0,8]),t.t)
B.b1=A.b(s([4,4,4,4]),t.t)
B.db=A.b(s([4,4,0,0]),t.t)
B.b6=A.b(s([B.ap,B.di,B.d6,B.aY,B.ap,B.b1,B.db,B.aY]),t.S)
B.r=A.b(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.P=A.b(s([B.r,B.r,B.r]),t.S)
B.h6=A.b(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.fV=A.b(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.dy=A.b(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.hK=A.b(s([B.h6,B.fV,B.dy]),t.S)
B.de=A.b(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.i7=A.b(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.b7=A.b(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.hW=A.b(s([B.de,B.i7,B.b7]),t.S)
B.df=A.b(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.dS=A.b(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bf=A.b(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hr=A.b(s([B.df,B.dS,B.bf]),t.S)
B.b3=A.b(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.dT=A.b(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.d8=A.b(s([B.b3,B.dT,B.r]),t.S)
B.ar=A.b(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dg=A.b(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ij=A.b(s([B.ar,B.dg,B.bf]),t.S)
B.fL=A.b(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.dR=A.b(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.a2=A.b(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.j_=A.b(s([B.fL,B.dR,B.a2]),t.S)
B.hP=A.b(s([B.P,B.hK,B.hW,B.hr,B.d8,B.ij,B.j_,B.P]),t.o)
B.fO=A.b(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.h4=A.b(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.hC=A.b(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.h3=A.b(s([B.fO,B.h4,B.hC]),t.S)
B.aq=A.b(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.i8=A.b(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.dM=A.b(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.hY=A.b(s([B.aq,B.i8,B.dM]),t.S)
B.dD=A.b(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dn=A.b(s([B.b3,B.dD,B.r]),t.S)
B.dz=A.b(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.dE=A.b(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dd=A.b(s([B.dz,B.dE,B.r]),t.S)
B.fP=A.b(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.hT=A.b(s([B.ar,B.fP,B.r]),t.S)
B.b4=A.b(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ih=A.b(s([B.b4,B.b7,B.r]),t.S)
B.dF=A.b(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.be=A.b(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.ic=A.b(s([B.dF,B.be,B.a2]),t.S)
B.hI=A.b(s([B.h3,B.hY,B.dn,B.dd,B.hT,B.ih,B.ic,B.P]),t.o)
B.fW=A.b(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.dN=A.b(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.fJ=A.b(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.id=A.b(s([B.fW,B.dN,B.fJ]),t.S)
B.fX=A.b(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dv=A.b(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.fh=A.b(s([B.ar,B.fX,B.dv]),t.S)
B.i9=A.b(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.hX=A.b(s([B.b4,B.i9,B.r]),t.S)
B.h7=A.b(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.hm=A.b(s([B.aq,B.h7,B.a2]),t.S)
B.bn=A.b(s([B.r,B.a2,B.r]),t.S)
B.iW=A.b(s([B.id,B.fh,B.hX,B.hm,B.bn,B.P,B.P,B.P]),t.o)
B.fQ=A.b(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iD=A.b(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.h8=A.b(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.hS=A.b(s([B.fQ,B.iD,B.h8]),t.S)
B.dA=A.b(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.fR=A.b(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.cL=A.b(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.hH=A.b(s([B.dA,B.fR,B.cL]),t.S)
B.dh=A.b(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.h9=A.b(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.hu=A.b(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.ig=A.b(s([B.dh,B.h9,B.hu]),t.S)
B.dU=A.b(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.dV=A.b(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.dW=A.b(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.hE=A.b(s([B.dU,B.dV,B.dW]),t.S)
B.dB=A.b(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.fY=A.b(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.hR=A.b(s([B.dB,B.fY,B.aq]),t.S)
B.dG=A.b(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.dX=A.b(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.dY=A.b(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hU=A.b(s([B.dG,B.dX,B.dY]),t.S)
B.dC=A.b(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.hJ=A.b(s([B.dC,B.be,B.r]),t.S)
B.dQ=A.b(s([B.hS,B.hH,B.ig,B.hE,B.hR,B.hU,B.hJ,B.bn]),t.o)
B.dK=A.b(s([B.hP,B.hI,B.iW,B.dQ]),t.hc)
B.b8=A.b(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.jl=new A.cV(0,"invalid")
B.bP=new A.cV(1,"uint")
B.j=new A.cV(2,"int")
B.U=new A.cV(3,"float")
B.b9=A.b(s([B.jl,B.bP,B.j,B.U]),A.ah("D<cV>"))
B.dO=A.b(s([280,256,256,256,40]),t.t)
B.ba=A.b(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.cs=new A.du(0,"invalid")
B.ct=new A.du(1,"ico")
B.fi=A.b(s([B.cs,B.ct,B.aP]),A.ah("D<du>"))
B.bb=A.b(s([A.vq(),A.vk(),A.vA(),A.vy(),A.vs(),A.vr(),A.vt()]),t.B)
B.az=new A.ag(0,"whiteIsZero")
B.jt=new A.ag(1,"blackIsZero")
B.jA=new A.ag(2,"rgb")
B.aB=new A.ag(3,"palette")
B.jB=new A.ag(4,"transparencyMask")
B.bR=new A.ag(5,"cmyk")
B.jC=new A.ag(6,"yCbCr")
B.jD=new A.ag(7,"reserved7")
B.jE=new A.ag(8,"cieLab")
B.jF=new A.ag(9,"iccLab")
B.ju=new A.ag(10,"ituLab")
B.jv=new A.ag(11,"logL")
B.jw=new A.ag(12,"logLuv")
B.jx=new A.ag(13,"colorFilterArray")
B.jy=new A.ag(14,"linearRaw")
B.jz=new A.ag(15,"depth")
B.aA=new A.ag(16,"unknown")
B.bd=A.b(s([B.az,B.jt,B.jA,B.aB,B.jB,B.bR,B.jC,B.jD,B.jE,B.jF,B.ju,B.jv,B.jw,B.jx,B.jy,B.jz,B.aA]),A.ah("D<ag>"))
B.G=A.b(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.as=A.b(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.at=A.b(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.a_=A.b(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.Z=A.b(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.a0=A.b(s([B.d,B.aQ,B.i,B.f,B.m,B.o,B.aU,B.L,B.aV,B.aW,B.aR,B.aS,B.aT]),A.ah("D<as>"))
B.a1=A.b(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.a3=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.bg=A.b(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.bF=new A.eV(0,"source")
B.bG=new A.eV(1,"over")
B.bh=A.b(s([B.bF,B.bG]),A.ah("D<eV>"))
B.d3=A.b(s([2,6,2,6]),t.t)
B.dk=A.b(s([6,2,6,2]),t.t)
B.d2=A.b(s([2,2,6,6]),t.t)
B.cR=A.b(s([1,3,3,9]),t.t)
B.d9=A.b(s([4,0,12,0]),t.t)
B.d4=A.b(s([3,1,9,3]),t.t)
B.dw=A.b(s([8,8,0,0]),t.t)
B.da=A.b(s([4,12,0,0]),t.t)
B.cO=A.b(s([16,0,0,0]),t.t)
B.cN=A.b(s([12,4,0,0]),t.t)
B.dl=A.b(s([6,6,2,2]),t.t)
B.d7=A.b(s([3,9,1,3]),t.t)
B.cM=A.b(s([12,0,4,0]),t.t)
B.dI=A.b(s([9,3,3,1]),t.t)
B.l=A.b(s([B.b1,B.d3,B.ap,B.dk,B.d2,B.cR,B.d9,B.d4,B.dw,B.da,B.cO,B.cN,B.dl,B.d7,B.cM,B.dI]),t.S)
B.hh=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.a4=A.b(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.hi=A.b(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.n=A.b(s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),t.t)
B.S=A.b(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.hn=A.b(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.bi=A.b(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.bj=A.b(s([null,A.vQ(),A.vR(),A.vP()]),A.ah("D<~(i,i,i,i,i,bm)?>"))
B.bk=A.b(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.a5=A.b(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.O=A.b(s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),t.t)
B.au=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.hv=A.b(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.bl=A.b(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.a6=A.b(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.a7=A.b(s([0,36,72,109,145,182,218,255]),t.t)
B.bm=A.b(s([137,80,78,71,13,10,26,10]),t.t)
B.T=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.bV=new A.ap(1,"rle8")
B.c_=new A.ap(2,"rle4")
B.c0=new A.ap(4,"jpeg")
B.c1=new A.ap(5,"png")
B.c2=new A.ap(7,"reserved7")
B.c3=new A.ap(8,"reserved8")
B.c4=new A.ap(9,"reserved9")
B.bW=new A.ap(10,"reserved10")
B.bX=new A.ap(11,"cmyk")
B.bY=new A.ap(12,"cmykRle8")
B.bZ=new A.ap(13,"cmykRle4")
B.a8=A.b(s([B.aF,B.bV,B.c_,B.ai,B.c0,B.c1,B.aj,B.c2,B.c3,B.c4,B.bW,B.bX,B.bY,B.bZ]),A.ah("D<ap>"))
B.iX=A.b(s([231,120,48,89,115,113,120,152,112]),t.t)
B.dZ=A.b(s([152,179,64,126,170,118,46,70,95]),t.t)
B.e_=A.b(s([175,69,143,80,85,82,72,155,103]),t.t)
B.e0=A.b(s([56,58,10,171,218,189,17,13,152]),t.t)
B.eb=A.b(s([114,26,17,163,44,195,21,10,173]),t.t)
B.em=A.b(s([121,24,80,195,26,62,44,64,85]),t.t)
B.ex=A.b(s([144,71,10,38,171,213,144,34,26]),t.t)
B.eI=A.b(s([170,46,55,19,136,160,33,206,71]),t.t)
B.eT=A.b(s([63,20,8,114,114,208,12,9,226]),t.t)
B.f3=A.b(s([81,40,11,96,182,84,29,16,36]),t.t)
B.dJ=A.b(s([B.iX,B.dZ,B.e_,B.e0,B.eb,B.em,B.ex,B.eI,B.eT,B.f3]),t.S)
B.fe=A.b(s([134,183,89,137,98,101,106,165,148]),t.t)
B.fg=A.b(s([72,187,100,130,157,111,32,75,80]),t.t)
B.e1=A.b(s([66,102,167,99,74,62,40,234,128]),t.t)
B.fE=A.b(s([41,53,9,178,241,141,26,8,107]),t.t)
B.e2=A.b(s([74,43,26,146,73,166,49,23,157]),t.t)
B.e3=A.b(s([65,38,105,160,51,52,31,115,128]),t.t)
B.iM=A.b(s([104,79,12,27,217,255,87,17,7]),t.t)
B.e4=A.b(s([87,68,71,44,114,51,15,186,23]),t.t)
B.e5=A.b(s([47,41,14,110,182,183,21,17,194]),t.t)
B.e6=A.b(s([66,45,25,102,197,189,23,18,22]),t.t)
B.im=A.b(s([B.fe,B.fg,B.e1,B.fE,B.e2,B.e3,B.iM,B.e4,B.e5,B.e6]),t.S)
B.e7=A.b(s([88,88,147,150,42,46,45,196,205]),t.t)
B.e8=A.b(s([43,97,183,117,85,38,35,179,61]),t.t)
B.e9=A.b(s([39,53,200,87,26,21,43,232,171]),t.t)
B.ea=A.b(s([56,34,51,104,114,102,29,93,77]),t.t)
B.ec=A.b(s([39,28,85,171,58,165,90,98,64]),t.t)
B.ed=A.b(s([34,22,116,206,23,34,43,166,73]),t.t)
B.ee=A.b(s([107,54,32,26,51,1,81,43,31]),t.t)
B.ef=A.b(s([68,25,106,22,64,171,36,225,114]),t.t)
B.eg=A.b(s([34,19,21,102,132,188,16,76,124]),t.t)
B.eh=A.b(s([62,18,78,95,85,57,50,48,51]),t.t)
B.i4=A.b(s([B.e7,B.e8,B.e9,B.ea,B.ec,B.ed,B.ee,B.ef,B.eg,B.eh]),t.S)
B.ei=A.b(s([193,101,35,159,215,111,89,46,111]),t.t)
B.ej=A.b(s([60,148,31,172,219,228,21,18,111]),t.t)
B.iN=A.b(s([112,113,77,85,179,255,38,120,114]),t.t)
B.fF=A.b(s([40,42,1,196,245,209,10,25,109]),t.t)
B.ek=A.b(s([88,43,29,140,166,213,37,43,154]),t.t)
B.el=A.b(s([61,63,30,155,67,45,68,1,209]),t.t)
B.en=A.b(s([100,80,8,43,154,1,51,26,71]),t.t)
B.fG=A.b(s([142,78,78,16,255,128,34,197,171]),t.t)
B.eo=A.b(s([41,40,5,102,211,183,4,1,221]),t.t)
B.ep=A.b(s([51,50,17,168,209,192,23,25,82]),t.t)
B.h0=A.b(s([B.ei,B.ej,B.iN,B.fF,B.ek,B.el,B.en,B.fG,B.eo,B.ep]),t.S)
B.dr=A.b(s([138,31,36,171,27,166,38,44,229]),t.t)
B.eq=A.b(s([67,87,58,169,82,115,26,59,179]),t.t)
B.er=A.b(s([63,59,90,180,59,166,93,73,154]),t.t)
B.es=A.b(s([40,40,21,116,143,209,34,39,175]),t.t)
B.et=A.b(s([47,15,16,183,34,223,49,45,183]),t.t)
B.eu=A.b(s([46,17,33,183,6,98,15,32,183]),t.t)
B.ev=A.b(s([57,46,22,24,128,1,54,17,37]),t.t)
B.ew=A.b(s([65,32,73,115,28,128,23,128,205]),t.t)
B.ey=A.b(s([40,3,9,115,51,192,18,6,223]),t.t)
B.ez=A.b(s([87,37,9,115,59,77,64,21,47]),t.t)
B.fy=A.b(s([B.dr,B.eq,B.er,B.es,B.et,B.eu,B.ev,B.ew,B.ey,B.ez]),t.S)
B.eA=A.b(s([104,55,44,218,9,54,53,130,226]),t.t)
B.eB=A.b(s([64,90,70,205,40,41,23,26,57]),t.t)
B.eC=A.b(s([54,57,112,184,5,41,38,166,213]),t.t)
B.eD=A.b(s([30,34,26,133,152,116,10,32,134]),t.t)
B.ds=A.b(s([39,19,53,221,26,114,32,73,255]),t.t)
B.eE=A.b(s([31,9,65,234,2,15,1,118,73]),t.t)
B.iO=A.b(s([75,32,12,51,192,255,160,43,51]),t.t)
B.eF=A.b(s([88,31,35,67,102,85,55,186,85]),t.t)
B.eG=A.b(s([56,21,23,111,59,205,45,37,192]),t.t)
B.eH=A.b(s([55,38,70,124,73,102,1,34,98]),t.t)
B.ha=A.b(s([B.eA,B.eB,B.eC,B.eD,B.ds,B.eE,B.iO,B.eF,B.eG,B.eH]),t.S)
B.eJ=A.b(s([125,98,42,88,104,85,117,175,82]),t.t)
B.eK=A.b(s([95,84,53,89,128,100,113,101,45]),t.t)
B.eL=A.b(s([75,79,123,47,51,128,81,171,1]),t.t)
B.eM=A.b(s([57,17,5,71,102,57,53,41,49]),t.t)
B.eN=A.b(s([38,33,13,121,57,73,26,1,85]),t.t)
B.eO=A.b(s([41,10,67,138,77,110,90,47,114]),t.t)
B.iP=A.b(s([115,21,2,10,102,255,166,23,6]),t.t)
B.eP=A.b(s([101,29,16,10,85,128,101,196,26]),t.t)
B.eQ=A.b(s([57,18,10,102,102,213,34,20,43]),t.t)
B.eR=A.b(s([117,20,15,36,163,128,68,1,26]),t.t)
B.fA=A.b(s([B.eJ,B.eK,B.eL,B.eM,B.eN,B.eO,B.iP,B.eP,B.eQ,B.eR]),t.S)
B.dp=A.b(s([102,61,71,37,34,53,31,243,192]),t.t)
B.eS=A.b(s([69,60,71,38,73,119,28,222,37]),t.t)
B.dq=A.b(s([68,45,128,34,1,47,11,245,171]),t.t)
B.eU=A.b(s([62,17,19,70,146,85,55,62,70]),t.t)
B.eV=A.b(s([37,43,37,154,100,163,85,160,1]),t.t)
B.eW=A.b(s([63,9,92,136,28,64,32,201,85]),t.t)
B.iQ=A.b(s([75,15,9,9,64,255,184,119,16]),t.t)
B.iR=A.b(s([86,6,28,5,64,255,25,248,1]),t.t)
B.iS=A.b(s([56,8,17,132,137,255,55,116,128]),t.t)
B.eX=A.b(s([58,15,20,82,135,57,26,121,40]),t.t)
B.fM=A.b(s([B.dp,B.eS,B.dq,B.eU,B.eV,B.eW,B.iQ,B.iR,B.iS,B.eX]),t.S)
B.eY=A.b(s([164,50,31,137,154,133,25,35,218]),t.t)
B.eZ=A.b(s([51,103,44,131,131,123,31,6,158]),t.t)
B.f_=A.b(s([86,40,64,135,148,224,45,183,128]),t.t)
B.f0=A.b(s([22,26,17,131,240,154,14,1,209]),t.t)
B.f1=A.b(s([45,16,21,91,64,222,7,1,197]),t.t)
B.f2=A.b(s([56,21,39,155,60,138,23,102,213]),t.t)
B.iT=A.b(s([83,12,13,54,192,255,68,47,28]),t.t)
B.f4=A.b(s([85,26,85,85,128,128,32,146,171]),t.t)
B.f5=A.b(s([18,11,7,63,144,171,4,4,246]),t.t)
B.f6=A.b(s([35,27,10,146,174,171,12,26,128]),t.t)
B.fB=A.b(s([B.eY,B.eZ,B.f_,B.f0,B.f1,B.f2,B.iT,B.f4,B.f5,B.f6]),t.S)
B.f7=A.b(s([190,80,35,99,180,80,126,54,45]),t.t)
B.f8=A.b(s([85,126,47,87,176,51,41,20,32]),t.t)
B.f9=A.b(s([101,75,128,139,118,146,116,128,85]),t.t)
B.fa=A.b(s([56,41,15,176,236,85,37,9,62]),t.t)
B.iU=A.b(s([71,30,17,119,118,255,17,18,138]),t.t)
B.fb=A.b(s([101,38,60,138,55,70,43,26,142]),t.t)
B.iV=A.b(s([146,36,19,30,171,255,97,27,20]),t.t)
B.fc=A.b(s([138,45,61,62,219,1,81,188,64]),t.t)
B.fd=A.b(s([32,41,20,117,151,142,20,21,163]),t.t)
B.ff=A.b(s([112,19,12,61,195,128,48,4,24]),t.t)
B.h2=A.b(s([B.f7,B.f8,B.f9,B.fa,B.iU,B.fb,B.iV,B.fc,B.fd,B.ff]),t.S)
B.bo=A.b(s([B.dJ,B.im,B.i4,B.h0,B.fy,B.ha,B.fA,B.fM,B.fB,B.h2]),t.o)
B.bp=A.b(s([]),t.dG)
B.br=A.b(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.bq=A.b(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.av=A.b(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.bs=A.b(s([B.aN,B.ak,B.al]),A.ah("D<dq>"))
B.aw=A.b(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.bc=A.b(s([B.aw,B.aw,B.aw]),t.S)
B.fZ=A.b(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.fo=A.b(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.hj=A.b(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.hp=A.b(s([B.fZ,B.fo,B.hj]),t.S)
B.iE=A.b(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.ir=A.b(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.fp=A.b(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.dL=A.b(s([B.iE,B.ir,B.fp]),t.S)
B.ik=A.b(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.cG=A.b(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.cA=A.b(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.ib=A.b(s([B.ik,B.cG,B.cA]),t.S)
B.il=A.b(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.fN=A.b(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.fx=A.b(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.ho=A.b(s([B.il,B.fN,B.fx]),t.S)
B.iL=A.b(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.cB=A.b(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.cH=A.b(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.ia=A.b(s([B.iL,B.cB,B.cH]),t.S)
B.hZ=A.b(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.cI=A.b(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.cC=A.b(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.iY=A.b(s([B.hZ,B.cI,B.cC]),t.S)
B.b_=A.b(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.cU=A.b(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fn=A.b(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.h5=A.b(s([B.b_,B.cU,B.fn]),t.S)
B.hq=A.b(s([B.bc,B.hp,B.dL,B.ib,B.ho,B.ia,B.iY,B.h5]),t.o)
B.cV=A.b(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.io=A.b(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.hL=A.b(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.iq=A.b(s([B.cV,B.io,B.hL]),t.S)
B.fk=A.b(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.fq=A.b(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.hb=A.b(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.hl=A.b(s([B.fk,B.fq,B.hb]),t.S)
B.fH=A.b(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.is=A.b(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.hc=A.b(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.du=A.b(s([B.fH,B.is,B.hc]),t.S)
B.i_=A.b(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.fD=A.b(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.iF=A.b(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.fz=A.b(s([B.i_,B.fD,B.iF]),t.S)
B.cS=A.b(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.iG=A.b(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.fr=A.b(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.i6=A.b(s([B.cS,B.iG,B.fr]),t.S)
B.fS=A.b(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.cJ=A.b(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.fs=A.b(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.hG=A.b(s([B.fS,B.cJ,B.fs]),t.S)
B.ht=A.b(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.fl=A.b(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.ft=A.b(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.iA=A.b(s([B.ht,B.fl,B.ft]),t.S)
B.fT=A.b(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.hw=A.b(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.i0=A.b(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.iz=A.b(s([B.fT,B.hw,B.i0]),t.S)
B.hs=A.b(s([B.iq,B.hl,B.du,B.fz,B.i6,B.hG,B.iA,B.iz]),t.o)
B.hV=A.b(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.h1=A.b(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.hM=A.b(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.ii=A.b(s([B.hV,B.h1,B.hM]),t.S)
B.fm=A.b(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.fj=A.b(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.hk=A.b(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.dH=A.b(s([B.fm,B.fj,B.hk]),t.S)
B.cT=A.b(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.cE=A.b(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.fu=A.b(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.ip=A.b(s([B.cT,B.cE,B.fu]),t.S)
B.hF=A.b(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.fU=A.b(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.hx=A.b(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.dt=A.b(s([B.hF,B.fU,B.hx]),t.S)
B.hy=A.b(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.i1=A.b(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.cW=A.b(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.iZ=A.b(s([B.hy,B.i1,B.cW]),t.S)
B.cX=A.b(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.i3=A.b(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.cY=A.b(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.iy=A.b(s([B.cX,B.i3,B.cY]),t.S)
B.hz=A.b(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.hA=A.b(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.cZ=A.b(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.iK=A.b(s([B.hz,B.hA,B.cZ]),t.S)
B.iC=A.b(s([B.ii,B.dH,B.ip,B.dt,B.iZ,B.iy,B.iK,B.bc]),t.o)
B.hD=A.b(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.hN=A.b(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.hO=A.b(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.iB=A.b(s([B.hD,B.hN,B.hO]),t.S)
B.hd=A.b(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.it=A.b(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.he=A.b(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.cD=A.b(s([B.hd,B.it,B.he]),t.S)
B.hf=A.b(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.fI=A.b(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.hg=A.b(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.i2=A.b(s([B.hf,B.fI,B.hg]),t.S)
B.fv=A.b(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.iu=A.b(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.dm=A.b(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.fC=A.b(s([B.fv,B.iu,B.dm]),t.S)
B.iv=A.b(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.iH=A.b(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.fw=A.b(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.h_=A.b(s([B.iv,B.iH,B.fw]),t.S)
B.cF=A.b(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.fK=A.b(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.iI=A.b(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.hQ=A.b(s([B.cF,B.fK,B.iI]),t.S)
B.iJ=A.b(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.iw=A.b(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.ix=A.b(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.ie=A.b(s([B.iJ,B.iw,B.ix]),t.S)
B.d_=A.b(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.d0=A.b(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.dc=A.b(s([B.b_,B.d_,B.d0]),t.S)
B.hB=A.b(s([B.iB,B.cD,B.i2,B.fC,B.h_,B.hQ,B.ie,B.dc]),t.o)
B.i5=A.b(s([B.hq,B.hs,B.iC,B.hB]),t.hc)
B.a9=A.b(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.bT=new A.cX(0,"predictor")
B.jT=new A.cX(1,"crossColor")
B.jU=new A.cX(2,"subtractGreen")
B.bU=new A.cX(3,"colorIndexing")
B.bt=A.b(s([B.bT,B.jT,B.jU,B.bU]),A.ah("D<cX>"))
B.cP=A.b(s([173,148,140]),t.t)
B.cQ=A.b(s([176,155,140,135]),t.t)
B.dP=A.b(s([180,157,141,134,130]),t.t)
B.d1=A.b(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.bu=A.b(s([B.cP,B.cQ,B.dP,B.d1]),t.S)
B.z=A.b(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.bv=A.b(s([254,253,251,247,239,223,191,127]),t.t)
B.aa=A.b(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.ja=new A.bl(0,"bitmap")
B.bJ=new A.bl(1,"grayscale")
B.jb=new A.bl(2,"indexed")
B.bK=new A.bl(3,"rgb")
B.bL=new A.bl(4,"cmyk")
B.jc=new A.bl(5,"multiChannel")
B.jd=new A.bl(6,"duoTone")
B.bM=new A.bl(7,"lab")
B.bw=A.b(s([B.ja,B.bJ,B.jb,B.bK,B.bL,B.jc,B.jd,B.bM]),A.ah("D<bl>"))
B.B=A.b(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.j3=new A.cd(0,"none")
B.j4=new A.cd(1,"sub")
B.j5=new A.cd(2,"up")
B.j6=new A.cd(3,"average")
B.j7=new A.cd(4,"paeth")
B.ab=A.b(s([B.j3,B.j4,B.j5,B.j6,B.j7]),A.ah("D<cd>"))
B.cj=new A.bg(1,"rle")
B.ck=new A.bg(2,"zips")
B.cl=new A.bg(3,"zip")
B.cm=new A.bg(4,"piz")
B.cn=new A.bg(5,"pxr24")
B.co=new A.bg(6,"b44")
B.cp=new A.bg(7,"b44a")
B.bx=A.b(s([B.aO,B.cj,B.ck,B.cl,B.cm,B.cn,B.co,B.cp]),A.ah("D<bg>"))
B.by=A.b(s([A.ve(),A.vl(),A.vn(),A.vg(),A.vj(),A.vp(),A.vi(),A.vo(),A.vf(),A.vh()]),t.B)
B.j2=new A.dM(0,"none")
B.bH=new A.dM(1,"background")
B.bI=new A.dM(2,"previous")
B.bz=A.b(s([B.j2,B.bH,B.bI]),A.ah("D<dM>"))
B.bA=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.bB=A.b(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.ac=A.b(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.ad=A.b(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.bC=new A.cr([B.v,1,B.w,3,B.x,15,B.e,255,B.y,65535,B.F,4294967295,B.I,127,B.J,32767,B.K,2147483647,B.A,1,B.E,1,B.H,1],A.ah("cr<ay,i>"))
B.ax=new A.cr([34665,"exif",40965,"interop",34853,"gps"],A.ah("cr<i,C>"))
B.j8=new A.i8(0,"none")
B.j9=new A.i8(4,"paeth")
B.ay=new A.b9(0,"bilevel")
B.jm=new A.b9(1,"gray4bit")
B.jn=new A.b9(2,"gray")
B.jo=new A.b9(3,"grayAlpha")
B.jp=new A.b9(4,"palette")
B.bQ=new A.b9(5,"rgb")
B.jq=new A.b9(6,"rgba")
B.jr=new A.b9(7,"yCbCrSub")
B.af=new A.b9(8,"generic")
B.js=new A.b9(9,"invalid")
B.jG=A.bp("vX")
B.jH=A.bp("qo")
B.jI=A.bp("mX")
B.jJ=A.bp("mY")
B.jK=A.bp("kq")
B.jL=A.bp("hq")
B.jM=A.bp("mZ")
B.jN=A.bp("Q")
B.jO=A.bp("no")
B.jP=A.bp("bA")
B.jQ=A.bp("rv")
B.jR=A.bp("bm")
B.jS=new A.iM(!1)
B.bS=new A.iM(!0)
B.V=new A.dY(0,"undefined")
B.aD=new A.dY(1,"lossy")
B.ag=new A.dY(2,"lossless")
B.jV=new A.dY(3,"animated")})();(function staticFields(){$.ma=null
$.b0=A.b([],A.ah("D<Q>"))
$.oO=null
$.o4=null
$.o3=null
$.pI=null
$.pC=null
$.pM=null
$.mE=null
$.mJ=null
$.nH=null
$.e2=null
$.fF=null
$.fG=null
$.nC=!1
$.X=B.p
$.bs=A.p8("_config")
$.nA=null
$.p0=!1
$.p1=A.b([A.nN(),A.vC(),A.vH(),A.vI(),A.vJ(),A.vK(),A.vL(),A.vM(),A.vN(),A.vO(),A.vD(),A.vE(),A.vF(),A.vG(),A.nN(),A.nN()],A.ah("D<i(bA,i,i)>"))
$.a_=null
$.ob=A.p8("_eLut")
$.bx=null
$.nj=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"w5","pS",()=>A.uU("_$dart_dartClosure"))
s($,"x5","nV",()=>B.p.fX(new A.mM(),A.ah("b1<a8>")))
s($,"wm","pU",()=>A.bU(A.li({
toString:function(){return"$receiver$"}})))
s($,"wn","pV",()=>A.bU(A.li({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"wo","pW",()=>A.bU(A.li(null)))
s($,"wp","pX",()=>A.bU(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ws","q_",()=>A.bU(A.li(void 0)))
s($,"wt","q0",()=>A.bU(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"wr","pZ",()=>A.bU(A.oX(null)))
s($,"wq","pY",()=>A.bU(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"wv","q2",()=>A.bU(A.oX(void 0)))
s($,"wu","q1",()=>A.bU(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"wE","nP",()=>A.tl())
s($,"ww","q3",()=>new A.ll().$0())
s($,"wx","q4",()=>new A.lk().$0())
s($,"x1","k_",()=>A.nK(B.jN))
s($,"wH","q7",()=>A.nv(B.a5,B.au,257,286,15))
s($,"wG","q6",()=>A.nv(B.bg,B.S,0,30,15))
s($,"wF","q5",()=>A.nv(null,B.hh,0,19,7))
s($,"x4","nU",()=>{var q=null,p="ISOSpeed"
return A.oA([11,A.h("ProcessingSoftware",B.i,q),254,A.h("SubfileType",B.m,1),255,A.h("OldSubfileType",B.m,1),256,A.h("ImageWidth",B.m,1),257,A.h("ImageLength",B.m,1),258,A.h("BitsPerSample",B.f,1),259,A.h("Compression",B.f,1),262,A.h("PhotometricInterpretation",B.f,1),263,A.h("Thresholding",B.f,1),264,A.h("CellWidth",B.f,1),265,A.h("CellLength",B.f,1),266,A.h("FillOrder",B.f,1),269,A.h("DocumentName",B.i,q),270,A.h("ImageDescription",B.i,q),271,A.h("Make",B.i,q),272,A.h("Model",B.i,q),273,A.h("StripOffsets",B.m,q),274,A.h("Orientation",B.f,1),277,A.h("SamplesPerPixel",B.f,1),278,A.h("RowsPerStrip",B.m,1),279,A.h("StripByteCounts",B.m,1),280,A.h("MinSampleValue",B.f,1),281,A.h("MaxSampleValue",B.f,1),282,A.h("XResolution",B.o,1),283,A.h("YResolution",B.o,1),284,A.h("PlanarConfiguration",B.f,1),285,A.h("PageName",B.i,q),286,A.h("XPosition",B.o,1),287,A.h("YPosition",B.o,1),290,A.h("GrayResponseUnit",B.f,1),291,A.h("GrayResponseCurve",B.d,q),292,A.h("T4Options",B.d,q),293,A.h("T6Options",B.d,q),296,A.h("ResolutionUnit",B.f,1),297,A.h("PageNumber",B.f,2),300,A.h("ColorResponseUnit",B.d,q),301,A.h("TransferFunction",B.f,768),305,A.h("Software",B.i,q),306,A.h("DateTime",B.i,q),315,A.h("Artist",B.i,q),316,A.h("HostComputer",B.i,q),317,A.h("Predictor",B.f,1),318,A.h("WhitePoint",B.o,2),319,A.h("PrimaryChromaticities",B.o,6),320,A.h("ColorMap",B.f,q),321,A.h("HalftoneHints",B.f,2),322,A.h("TileWidth",B.m,1),323,A.h("TileLength",B.m,1),324,A.h("TileOffsets",B.m,q),325,A.h("TileByteCounts",B.d,q),326,A.h("BadFaxLines",B.d,q),327,A.h("CleanFaxData",B.d,q),328,A.h("ConsecutiveBadFaxLines",B.d,q),332,A.h("InkSet",B.d,q),333,A.h("InkNames",B.d,q),334,A.h("NumberofInks",B.d,q),336,A.h("DotRange",B.d,q),337,A.h("TargetPrinter",B.i,q),338,A.h("ExtraSamples",B.d,q),339,A.h("SampleFormat",B.f,1),340,A.h("SMinSampleValue",B.d,q),341,A.h("SMaxSampleValue",B.d,q),342,A.h("TransferRange",B.d,q),343,A.h("ClipPath",B.d,q),512,A.h("JPEGProc",B.d,q),513,A.h("JPEGInterchangeFormat",B.d,q),514,A.h("JPEGInterchangeFormatLength",B.d,q),529,A.h("YCbCrCoefficients",B.o,3),530,A.h("YCbCrSubSampling",B.f,1),531,A.h("YCbCrPositioning",B.f,1),532,A.h("ReferenceBlackWhite",B.o,6),700,A.h("ApplicationNotes",B.f,1),18246,A.h("Rating",B.f,1),33421,A.h("CFARepeatPatternDim",B.d,q),33422,A.h("CFAPattern",B.d,q),33423,A.h("BatteryLevel",B.d,q),33432,A.h("Copyright",B.i,q),33434,A.h("ExposureTime",B.o,1),33437,A.h("FNumber",B.o,q),33723,A.h("IPTC-NAA",B.m,1),34665,A.h("ExifOffset",B.d,q),34675,A.h("InterColorProfile",B.d,q),34850,A.h("ExposureProgram",B.f,1),34852,A.h("SpectralSensitivity",B.i,q),34853,A.h("GPSOffset",B.d,q),34855,A.h(p,B.m,1),34856,A.h("OECF",B.d,q),34864,A.h("SensitivityType",B.f,1),34866,A.h("RecommendedExposureIndex",B.m,1),34867,A.h(p,B.m,1),36864,A.h("ExifVersion",B.L,q),36867,A.h("DateTimeOriginal",B.i,q),36868,A.h("DateTimeDigitized",B.i,q),36880,A.h("OffsetTime",B.i,q),36881,A.h("OffsetTimeOriginal",B.i,q),36882,A.h("OffsetTimeDigitized",B.i,q),37121,A.h("ComponentsConfiguration",B.L,q),37122,A.h("CompressedBitsPerPixel",B.d,q),37377,A.h("ShutterSpeedValue",B.d,q),37378,A.h("ApertureValue",B.d,q),37379,A.h("BrightnessValue",B.d,q),37380,A.h("ExposureBiasValue",B.d,q),37381,A.h("MaxApertureValue",B.d,q),37382,A.h("SubjectDistance",B.d,q),37383,A.h("MeteringMode",B.d,q),37384,A.h("LightSource",B.d,q),37385,A.h("Flash",B.d,q),37386,A.h("FocalLength",B.d,q),37396,A.h("SubjectArea",B.d,q),37500,A.h("MakerNote",B.L,q),37510,A.h("UserComment",B.L,q),37520,A.h("SubSecTime",B.d,q),37521,A.h("SubSecTimeOriginal",B.d,q),37522,A.h("SubSecTimeDigitized",B.d,q),40091,A.h("XPTitle",B.d,q),40092,A.h("XPComment",B.d,q),40093,A.h("XPAuthor",B.d,q),40094,A.h("XPKeywords",B.d,q),40095,A.h("XPSubject",B.d,q),40960,A.h("FlashPixVersion",B.d,q),40961,A.h("ColorSpace",B.f,1),40962,A.h("ExifImageWidth",B.f,1),40963,A.h("ExifImageLength",B.f,1),40964,A.h("RelatedSoundFile",B.d,q),40965,A.h("InteroperabilityOffset",B.d,q),41483,A.h("FlashEnergy",B.d,q),41484,A.h("SpatialFrequencyResponse",B.d,q),41486,A.h("FocalPlaneXResolution",B.d,q),41487,A.h("FocalPlaneYResolution",B.d,q),41488,A.h("FocalPlaneResolutionUnit",B.d,q),41492,A.h("SubjectLocation",B.d,q),41493,A.h("ExposureIndex",B.d,q),41495,A.h("SensingMethod",B.d,q),41728,A.h("FileSource",B.d,q),41729,A.h("SceneType",B.d,q),41730,A.h("CVAPattern",B.d,q),41985,A.h("CustomRendered",B.d,q),41986,A.h("ExposureMode",B.d,q),41987,A.h("WhiteBalance",B.d,q),41988,A.h("DigitalZoomRatio",B.d,q),41989,A.h("FocalLengthIn35mmFilm",B.d,q),41990,A.h("SceneCaptureType",B.d,q),41991,A.h("GainControl",B.d,q),41992,A.h("Contrast",B.d,q),41993,A.h("Saturation",B.d,q),41994,A.h("Sharpness",B.d,q),41995,A.h("DeviceSettingDescription",B.d,q),41996,A.h("SubjectDistanceRange",B.d,q),42016,A.h("ImageUniqueID",B.d,q),42032,A.h("CameraOwnerName",B.i,q),42033,A.h("BodySerialNumber",B.i,q),42034,A.h("LensSpecification",B.d,q),42035,A.h("LensMake",B.i,q),42036,A.h("LensModel",B.i,q),42037,A.h("LensSerialNumber",B.i,q),42240,A.h("Gamma",B.o,1),50341,A.h("PrintIM",B.d,q),59932,A.h("Padding",B.d,q),59933,A.h("OffsetSchema",B.d,q),65e3,A.h("OwnerName",B.i,q),65001,A.h("SerialNumber",B.i,q)],t.p,A.ah("h7"))})
r($,"wy","jY",()=>A.kL(511))
r($,"wz","mP",()=>A.kL(511))
r($,"wB","mQ",()=>A.oC(2041))
r($,"wC","jZ",()=>A.oC(225))
r($,"wA","aT",()=>A.kL(766))
s($,"wf","pT",()=>A.oq(0,0,0))
s($,"wT","aE",()=>A.kL(1))
s($,"wU","aV",()=>A.qT($.aE().buffer,0,null))
s($,"wM","aD",()=>A.r5(1))
s($,"wN","aU",()=>{var q,p=$.aD().buffer
A.c_(p,0,null)
q=B.a.U(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"wO","Y",()=>A.r7(1))
s($,"wQ","al",()=>{var q,p=$.Y().buffer
A.c_(p,0,null)
q=B.a.U(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"wP","cm",()=>A.qL($.Y().buffer))
s($,"wK","nR",()=>A.r4(1))
s($,"wL","q9",()=>A.oY($.nR().buffer,0))
s($,"wI","nQ",()=>A.r2(1))
s($,"wJ","q8",()=>A.oY($.nQ().buffer,0))
s($,"wR","nS",()=>A.ru(1))
s($,"wS","qa",()=>{var q=$.nS()
return A.qM(q.ga6(q))})
s($,"vZ","pR",()=>{var q=++$.nO().a,p=$.bx
p=p==null?null:p.e
p=new A.c7(!1,null,""+q+"@"+A.B(p))
p.f=1
p.b=""
return p})
s($,"x2","nT",()=>new A.bH(A.uF(A.rj(2020,1,1,0,0,0,0,!0)),!0))
s($,"wl","nO",()=>new A.lf())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.d,AnimationEffectTiming:J.d,AnimationEffectTimingReadOnly:J.d,AnimationTimeline:J.d,AnimationWorkletGlobalScope:J.d,AuthenticatorAssertionResponse:J.d,AuthenticatorAttestationResponse:J.d,AuthenticatorResponse:J.d,BackgroundFetchFetch:J.d,BackgroundFetchManager:J.d,BackgroundFetchSettledFetch:J.d,BarProp:J.d,BarcodeDetector:J.d,BluetoothRemoteGATTDescriptor:J.d,Body:J.d,BudgetState:J.d,CacheStorage:J.d,CanvasGradient:J.d,CanvasPattern:J.d,CanvasRenderingContext2D:J.d,Client:J.d,Clients:J.d,CookieStore:J.d,Coordinates:J.d,Credential:J.d,CredentialUserData:J.d,CredentialsContainer:J.d,Crypto:J.d,CryptoKey:J.d,CSS:J.d,CSSVariableReferenceValue:J.d,CustomElementRegistry:J.d,DataTransfer:J.d,DataTransferItem:J.d,DeprecatedStorageInfo:J.d,DeprecatedStorageQuota:J.d,DeprecationReport:J.d,DetectedBarcode:J.d,DetectedFace:J.d,DetectedText:J.d,DeviceAcceleration:J.d,DeviceRotationRate:J.d,DirectoryEntry:J.d,webkitFileSystemDirectoryEntry:J.d,FileSystemDirectoryEntry:J.d,DirectoryReader:J.d,WebKitDirectoryReader:J.d,webkitFileSystemDirectoryReader:J.d,FileSystemDirectoryReader:J.d,DocumentOrShadowRoot:J.d,DocumentTimeline:J.d,DOMError:J.d,DOMImplementation:J.d,Iterator:J.d,DOMMatrix:J.d,DOMMatrixReadOnly:J.d,DOMParser:J.d,DOMPoint:J.d,DOMPointReadOnly:J.d,DOMQuad:J.d,DOMStringMap:J.d,Entry:J.d,webkitFileSystemEntry:J.d,FileSystemEntry:J.d,External:J.d,FaceDetector:J.d,FederatedCredential:J.d,FileEntry:J.d,webkitFileSystemFileEntry:J.d,FileSystemFileEntry:J.d,DOMFileSystem:J.d,WebKitFileSystem:J.d,webkitFileSystem:J.d,FileSystem:J.d,FontFace:J.d,FontFaceSource:J.d,FormData:J.d,GamepadButton:J.d,GamepadPose:J.d,Geolocation:J.d,Position:J.d,GeolocationPosition:J.d,Headers:J.d,HTMLHyperlinkElementUtils:J.d,IdleDeadline:J.d,ImageBitmap:J.d,ImageBitmapRenderingContext:J.d,ImageCapture:J.d,InputDeviceCapabilities:J.d,IntersectionObserver:J.d,IntersectionObserverEntry:J.d,InterventionReport:J.d,KeyframeEffect:J.d,KeyframeEffectReadOnly:J.d,MediaCapabilities:J.d,MediaCapabilitiesInfo:J.d,MediaDeviceInfo:J.d,MediaError:J.d,MediaKeyStatusMap:J.d,MediaKeySystemAccess:J.d,MediaKeys:J.d,MediaKeysPolicy:J.d,MediaMetadata:J.d,MediaSession:J.d,MediaSettingsRange:J.d,MemoryInfo:J.d,MessageChannel:J.d,Metadata:J.d,MutationObserver:J.d,WebKitMutationObserver:J.d,MutationRecord:J.d,NavigationPreloadManager:J.d,Navigator:J.d,NavigatorAutomationInformation:J.d,NavigatorConcurrentHardware:J.d,NavigatorCookies:J.d,NavigatorUserMediaError:J.d,NodeFilter:J.d,NodeIterator:J.d,NonDocumentTypeChildNode:J.d,NonElementParentNode:J.d,NoncedElement:J.d,OffscreenCanvasRenderingContext2D:J.d,OverconstrainedError:J.d,PaintRenderingContext2D:J.d,PaintSize:J.d,PaintWorkletGlobalScope:J.d,PasswordCredential:J.d,Path2D:J.d,PaymentAddress:J.d,PaymentInstruments:J.d,PaymentManager:J.d,PaymentResponse:J.d,PerformanceEntry:J.d,PerformanceLongTaskTiming:J.d,PerformanceMark:J.d,PerformanceMeasure:J.d,PerformanceNavigation:J.d,PerformanceNavigationTiming:J.d,PerformanceObserver:J.d,PerformanceObserverEntryList:J.d,PerformancePaintTiming:J.d,PerformanceResourceTiming:J.d,PerformanceServerTiming:J.d,PerformanceTiming:J.d,Permissions:J.d,PhotoCapabilities:J.d,PositionError:J.d,GeolocationPositionError:J.d,Presentation:J.d,PresentationReceiver:J.d,PublicKeyCredential:J.d,PushManager:J.d,PushMessageData:J.d,PushSubscription:J.d,PushSubscriptionOptions:J.d,Range:J.d,RelatedApplication:J.d,ReportBody:J.d,ReportingObserver:J.d,ResizeObserver:J.d,ResizeObserverEntry:J.d,RTCCertificate:J.d,RTCIceCandidate:J.d,mozRTCIceCandidate:J.d,RTCLegacyStatsReport:J.d,RTCRtpContributingSource:J.d,RTCRtpReceiver:J.d,RTCRtpSender:J.d,RTCSessionDescription:J.d,mozRTCSessionDescription:J.d,RTCStatsResponse:J.d,Screen:J.d,ScrollState:J.d,ScrollTimeline:J.d,Selection:J.d,SpeechRecognitionAlternative:J.d,SpeechSynthesisVoice:J.d,StaticRange:J.d,StorageManager:J.d,StyleMedia:J.d,StylePropertyMap:J.d,StylePropertyMapReadonly:J.d,SyncManager:J.d,TaskAttributionTiming:J.d,TextDetector:J.d,TextMetrics:J.d,TrackDefault:J.d,TreeWalker:J.d,TrustedHTML:J.d,TrustedScriptURL:J.d,TrustedURL:J.d,UnderlyingSourceBase:J.d,URLSearchParams:J.d,VRCoordinateSystem:J.d,VRDisplayCapabilities:J.d,VREyeParameters:J.d,VRFrameData:J.d,VRFrameOfReference:J.d,VRPose:J.d,VRStageBounds:J.d,VRStageBoundsPoint:J.d,VRStageParameters:J.d,ValidityState:J.d,VideoPlaybackQuality:J.d,VideoTrack:J.d,VTTRegion:J.d,WindowClient:J.d,WorkletAnimation:J.d,WorkletGlobalScope:J.d,XPathEvaluator:J.d,XPathExpression:J.d,XPathNSResolver:J.d,XPathResult:J.d,XMLSerializer:J.d,XSLTProcessor:J.d,Bluetooth:J.d,BluetoothCharacteristicProperties:J.d,BluetoothRemoteGATTServer:J.d,BluetoothRemoteGATTService:J.d,BluetoothUUID:J.d,BudgetService:J.d,Cache:J.d,DOMFileSystemSync:J.d,DirectoryEntrySync:J.d,DirectoryReaderSync:J.d,EntrySync:J.d,FileEntrySync:J.d,FileReaderSync:J.d,FileWriterSync:J.d,HTMLAllCollection:J.d,Mojo:J.d,MojoHandle:J.d,MojoWatcher:J.d,NFC:J.d,PagePopupController:J.d,Report:J.d,Request:J.d,Response:J.d,SubtleCrypto:J.d,USBAlternateInterface:J.d,USBConfiguration:J.d,USBDevice:J.d,USBEndpoint:J.d,USBInTransferResult:J.d,USBInterface:J.d,USBIsochronousInTransferPacket:J.d,USBIsochronousInTransferResult:J.d,USBIsochronousOutTransferPacket:J.d,USBIsochronousOutTransferResult:J.d,USBOutTransferResult:J.d,WorkerLocation:J.d,WorkerNavigator:J.d,Worklet:J.d,IDBCursor:J.d,IDBCursorWithValue:J.d,IDBFactory:J.d,IDBIndex:J.d,IDBKeyRange:J.d,IDBObjectStore:J.d,IDBObservation:J.d,IDBObserver:J.d,IDBObserverChanges:J.d,SVGAngle:J.d,SVGAnimatedAngle:J.d,SVGAnimatedBoolean:J.d,SVGAnimatedEnumeration:J.d,SVGAnimatedInteger:J.d,SVGAnimatedLength:J.d,SVGAnimatedLengthList:J.d,SVGAnimatedNumber:J.d,SVGAnimatedNumberList:J.d,SVGAnimatedPreserveAspectRatio:J.d,SVGAnimatedRect:J.d,SVGAnimatedString:J.d,SVGAnimatedTransformList:J.d,SVGMatrix:J.d,SVGPoint:J.d,SVGPreserveAspectRatio:J.d,SVGRect:J.d,SVGUnitTypes:J.d,AudioListener:J.d,AudioParam:J.d,AudioTrack:J.d,AudioWorkletGlobalScope:J.d,AudioWorkletProcessor:J.d,PeriodicWave:J.d,WebGLActiveInfo:J.d,ANGLEInstancedArrays:J.d,ANGLE_instanced_arrays:J.d,WebGLBuffer:J.d,WebGLCanvas:J.d,WebGLColorBufferFloat:J.d,WebGLCompressedTextureASTC:J.d,WebGLCompressedTextureATC:J.d,WEBGL_compressed_texture_atc:J.d,WebGLCompressedTextureETC1:J.d,WEBGL_compressed_texture_etc1:J.d,WebGLCompressedTextureETC:J.d,WebGLCompressedTexturePVRTC:J.d,WEBGL_compressed_texture_pvrtc:J.d,WebGLCompressedTextureS3TC:J.d,WEBGL_compressed_texture_s3tc:J.d,WebGLCompressedTextureS3TCsRGB:J.d,WebGLDebugRendererInfo:J.d,WEBGL_debug_renderer_info:J.d,WebGLDebugShaders:J.d,WEBGL_debug_shaders:J.d,WebGLDepthTexture:J.d,WEBGL_depth_texture:J.d,WebGLDrawBuffers:J.d,WEBGL_draw_buffers:J.d,EXTsRGB:J.d,EXT_sRGB:J.d,EXTBlendMinMax:J.d,EXT_blend_minmax:J.d,EXTColorBufferFloat:J.d,EXTColorBufferHalfFloat:J.d,EXTDisjointTimerQuery:J.d,EXTDisjointTimerQueryWebGL2:J.d,EXTFragDepth:J.d,EXT_frag_depth:J.d,EXTShaderTextureLOD:J.d,EXT_shader_texture_lod:J.d,EXTTextureFilterAnisotropic:J.d,EXT_texture_filter_anisotropic:J.d,WebGLFramebuffer:J.d,WebGLGetBufferSubDataAsync:J.d,WebGLLoseContext:J.d,WebGLExtensionLoseContext:J.d,WEBGL_lose_context:J.d,OESElementIndexUint:J.d,OES_element_index_uint:J.d,OESStandardDerivatives:J.d,OES_standard_derivatives:J.d,OESTextureFloat:J.d,OES_texture_float:J.d,OESTextureFloatLinear:J.d,OES_texture_float_linear:J.d,OESTextureHalfFloat:J.d,OES_texture_half_float:J.d,OESTextureHalfFloatLinear:J.d,OES_texture_half_float_linear:J.d,OESVertexArrayObject:J.d,OES_vertex_array_object:J.d,WebGLProgram:J.d,WebGLQuery:J.d,WebGLRenderbuffer:J.d,WebGLRenderingContext:J.d,WebGL2RenderingContext:J.d,WebGLSampler:J.d,WebGLShader:J.d,WebGLShaderPrecisionFormat:J.d,WebGLSync:J.d,WebGLTexture:J.d,WebGLTimerQueryEXT:J.d,WebGLTransformFeedback:J.d,WebGLUniformLocation:J.d,WebGLVertexArrayObject:J.d,WebGLVertexArrayObjectOES:J.d,WebGL2RenderingContextBase:J.d,ArrayBuffer:A.dK,ArrayBufferView:A.af,DataView:A.hT,Float32Array:A.hU,Float64Array:A.eI,Int16Array:A.hV,Int32Array:A.hW,Int8Array:A.hX,Uint16Array:A.eJ,Uint32Array:A.eK,Uint8ClampedArray:A.eL,CanvasPixelArray:A.eL,Uint8Array:A.cG,HTMLAudioElement:A.w,HTMLBRElement:A.w,HTMLBaseElement:A.w,HTMLBodyElement:A.w,HTMLButtonElement:A.w,HTMLCanvasElement:A.w,HTMLContentElement:A.w,HTMLDListElement:A.w,HTMLDataElement:A.w,HTMLDataListElement:A.w,HTMLDetailsElement:A.w,HTMLDialogElement:A.w,HTMLDivElement:A.w,HTMLEmbedElement:A.w,HTMLFieldSetElement:A.w,HTMLHRElement:A.w,HTMLHeadElement:A.w,HTMLHeadingElement:A.w,HTMLHtmlElement:A.w,HTMLIFrameElement:A.w,HTMLImageElement:A.w,HTMLInputElement:A.w,HTMLLIElement:A.w,HTMLLabelElement:A.w,HTMLLegendElement:A.w,HTMLLinkElement:A.w,HTMLMapElement:A.w,HTMLMediaElement:A.w,HTMLMenuElement:A.w,HTMLMetaElement:A.w,HTMLMeterElement:A.w,HTMLModElement:A.w,HTMLOListElement:A.w,HTMLObjectElement:A.w,HTMLOptGroupElement:A.w,HTMLOptionElement:A.w,HTMLOutputElement:A.w,HTMLParagraphElement:A.w,HTMLParamElement:A.w,HTMLPictureElement:A.w,HTMLPreElement:A.w,HTMLProgressElement:A.w,HTMLQuoteElement:A.w,HTMLScriptElement:A.w,HTMLShadowElement:A.w,HTMLSlotElement:A.w,HTMLSourceElement:A.w,HTMLSpanElement:A.w,HTMLStyleElement:A.w,HTMLTableCaptionElement:A.w,HTMLTableCellElement:A.w,HTMLTableDataCellElement:A.w,HTMLTableHeaderCellElement:A.w,HTMLTableColElement:A.w,HTMLTableElement:A.w,HTMLTableRowElement:A.w,HTMLTableSectionElement:A.w,HTMLTemplateElement:A.w,HTMLTextAreaElement:A.w,HTMLTimeElement:A.w,HTMLTitleElement:A.w,HTMLTrackElement:A.w,HTMLUListElement:A.w,HTMLUnknownElement:A.w,HTMLVideoElement:A.w,HTMLDirectoryElement:A.w,HTMLFontElement:A.w,HTMLFrameElement:A.w,HTMLFrameSetElement:A.w,HTMLMarqueeElement:A.w,HTMLElement:A.w,AccessibleNodeList:A.fJ,HTMLAnchorElement:A.fK,HTMLAreaElement:A.fL,Blob:A.c6,CDATASection:A.br,CharacterData:A.br,Comment:A.br,ProcessingInstruction:A.br,Text:A.br,CSSPerspective:A.fY,CSSCharsetRule:A.S,CSSConditionRule:A.S,CSSFontFaceRule:A.S,CSSGroupingRule:A.S,CSSImportRule:A.S,CSSKeyframeRule:A.S,MozCSSKeyframeRule:A.S,WebKitCSSKeyframeRule:A.S,CSSKeyframesRule:A.S,MozCSSKeyframesRule:A.S,WebKitCSSKeyframesRule:A.S,CSSMediaRule:A.S,CSSNamespaceRule:A.S,CSSPageRule:A.S,CSSRule:A.S,CSSStyleRule:A.S,CSSSupportsRule:A.S,CSSViewportRule:A.S,CSSStyleDeclaration:A.dm,MSStyleCSSProperties:A.dm,CSS2Properties:A.dm,CSSImageValue:A.aw,CSSKeywordValue:A.aw,CSSNumericValue:A.aw,CSSPositionValue:A.aw,CSSResourceValue:A.aw,CSSUnitValue:A.aw,CSSURLImageValue:A.aw,CSSStyleValue:A.aw,CSSMatrixComponent:A.bf,CSSRotation:A.bf,CSSScale:A.bf,CSSSkew:A.bf,CSSTranslation:A.bf,CSSTransformComponent:A.bf,CSSTransformValue:A.fZ,CSSUnparsedValue:A.h_,DataTransferItemList:A.h0,DedicatedWorkerGlobalScope:A.dn,DOMException:A.h2,ClientRectList:A.ec,DOMRectList:A.ec,DOMRectReadOnly:A.ed,DOMStringList:A.h3,DOMTokenList:A.h4,MathMLElement:A.v,SVGAElement:A.v,SVGAnimateElement:A.v,SVGAnimateMotionElement:A.v,SVGAnimateTransformElement:A.v,SVGAnimationElement:A.v,SVGCircleElement:A.v,SVGClipPathElement:A.v,SVGDefsElement:A.v,SVGDescElement:A.v,SVGDiscardElement:A.v,SVGEllipseElement:A.v,SVGFEBlendElement:A.v,SVGFEColorMatrixElement:A.v,SVGFEComponentTransferElement:A.v,SVGFECompositeElement:A.v,SVGFEConvolveMatrixElement:A.v,SVGFEDiffuseLightingElement:A.v,SVGFEDisplacementMapElement:A.v,SVGFEDistantLightElement:A.v,SVGFEFloodElement:A.v,SVGFEFuncAElement:A.v,SVGFEFuncBElement:A.v,SVGFEFuncGElement:A.v,SVGFEFuncRElement:A.v,SVGFEGaussianBlurElement:A.v,SVGFEImageElement:A.v,SVGFEMergeElement:A.v,SVGFEMergeNodeElement:A.v,SVGFEMorphologyElement:A.v,SVGFEOffsetElement:A.v,SVGFEPointLightElement:A.v,SVGFESpecularLightingElement:A.v,SVGFESpotLightElement:A.v,SVGFETileElement:A.v,SVGFETurbulenceElement:A.v,SVGFilterElement:A.v,SVGForeignObjectElement:A.v,SVGGElement:A.v,SVGGeometryElement:A.v,SVGGraphicsElement:A.v,SVGImageElement:A.v,SVGLineElement:A.v,SVGLinearGradientElement:A.v,SVGMarkerElement:A.v,SVGMaskElement:A.v,SVGMetadataElement:A.v,SVGPathElement:A.v,SVGPatternElement:A.v,SVGPolygonElement:A.v,SVGPolylineElement:A.v,SVGRadialGradientElement:A.v,SVGRectElement:A.v,SVGScriptElement:A.v,SVGSetElement:A.v,SVGStopElement:A.v,SVGStyleElement:A.v,SVGElement:A.v,SVGSVGElement:A.v,SVGSwitchElement:A.v,SVGSymbolElement:A.v,SVGTSpanElement:A.v,SVGTextContentElement:A.v,SVGTextElement:A.v,SVGTextPathElement:A.v,SVGTextPositioningElement:A.v,SVGTitleElement:A.v,SVGUseElement:A.v,SVGViewElement:A.v,SVGGradientElement:A.v,SVGComponentTransferFunctionElement:A.v,SVGFEDropShadowElement:A.v,SVGMPathElement:A.v,Element:A.v,AbortPaymentEvent:A.o,AnimationEvent:A.o,AnimationPlaybackEvent:A.o,ApplicationCacheErrorEvent:A.o,BackgroundFetchClickEvent:A.o,BackgroundFetchEvent:A.o,BackgroundFetchFailEvent:A.o,BackgroundFetchedEvent:A.o,BeforeInstallPromptEvent:A.o,BeforeUnloadEvent:A.o,BlobEvent:A.o,CanMakePaymentEvent:A.o,ClipboardEvent:A.o,CloseEvent:A.o,CompositionEvent:A.o,CustomEvent:A.o,DeviceMotionEvent:A.o,DeviceOrientationEvent:A.o,ErrorEvent:A.o,ExtendableEvent:A.o,ExtendableMessageEvent:A.o,FetchEvent:A.o,FocusEvent:A.o,FontFaceSetLoadEvent:A.o,ForeignFetchEvent:A.o,GamepadEvent:A.o,HashChangeEvent:A.o,InstallEvent:A.o,KeyboardEvent:A.o,MediaEncryptedEvent:A.o,MediaKeyMessageEvent:A.o,MediaQueryListEvent:A.o,MediaStreamEvent:A.o,MediaStreamTrackEvent:A.o,MIDIConnectionEvent:A.o,MIDIMessageEvent:A.o,MouseEvent:A.o,DragEvent:A.o,MutationEvent:A.o,NotificationEvent:A.o,PageTransitionEvent:A.o,PaymentRequestEvent:A.o,PaymentRequestUpdateEvent:A.o,PointerEvent:A.o,PopStateEvent:A.o,PresentationConnectionAvailableEvent:A.o,PresentationConnectionCloseEvent:A.o,ProgressEvent:A.o,PromiseRejectionEvent:A.o,PushEvent:A.o,RTCDataChannelEvent:A.o,RTCDTMFToneChangeEvent:A.o,RTCPeerConnectionIceEvent:A.o,RTCTrackEvent:A.o,SecurityPolicyViolationEvent:A.o,SensorErrorEvent:A.o,SpeechRecognitionError:A.o,SpeechRecognitionEvent:A.o,SpeechSynthesisEvent:A.o,StorageEvent:A.o,SyncEvent:A.o,TextEvent:A.o,TouchEvent:A.o,TrackEvent:A.o,TransitionEvent:A.o,WebKitTransitionEvent:A.o,UIEvent:A.o,VRDeviceEvent:A.o,VRDisplayEvent:A.o,VRSessionEvent:A.o,WheelEvent:A.o,MojoInterfaceRequestEvent:A.o,ResourceProgressEvent:A.o,USBConnectionEvent:A.o,IDBVersionChangeEvent:A.o,AudioProcessingEvent:A.o,OfflineAudioCompletionEvent:A.o,WebGLContextEvent:A.o,Event:A.o,InputEvent:A.o,SubmitEvent:A.o,AbsoluteOrientationSensor:A.j,Accelerometer:A.j,AccessibleNode:A.j,AmbientLightSensor:A.j,Animation:A.j,ApplicationCache:A.j,DOMApplicationCache:A.j,OfflineResourceList:A.j,BackgroundFetchRegistration:A.j,BatteryManager:A.j,BroadcastChannel:A.j,CanvasCaptureMediaStreamTrack:A.j,EventSource:A.j,FileReader:A.j,FontFaceSet:A.j,Gyroscope:A.j,XMLHttpRequest:A.j,XMLHttpRequestEventTarget:A.j,XMLHttpRequestUpload:A.j,LinearAccelerationSensor:A.j,Magnetometer:A.j,MediaDevices:A.j,MediaKeySession:A.j,MediaQueryList:A.j,MediaRecorder:A.j,MediaSource:A.j,MediaStream:A.j,MediaStreamTrack:A.j,MIDIAccess:A.j,MIDIInput:A.j,MIDIOutput:A.j,MIDIPort:A.j,NetworkInformation:A.j,Notification:A.j,OffscreenCanvas:A.j,OrientationSensor:A.j,PaymentRequest:A.j,Performance:A.j,PermissionStatus:A.j,PresentationAvailability:A.j,PresentationConnection:A.j,PresentationConnectionList:A.j,PresentationRequest:A.j,RelativeOrientationSensor:A.j,RemotePlayback:A.j,RTCDataChannel:A.j,DataChannel:A.j,RTCDTMFSender:A.j,RTCPeerConnection:A.j,webkitRTCPeerConnection:A.j,mozRTCPeerConnection:A.j,ScreenOrientation:A.j,Sensor:A.j,ServiceWorker:A.j,ServiceWorkerContainer:A.j,ServiceWorkerRegistration:A.j,SharedWorker:A.j,SpeechRecognition:A.j,webkitSpeechRecognition:A.j,SpeechSynthesis:A.j,SpeechSynthesisUtterance:A.j,VR:A.j,VRDevice:A.j,VRDisplay:A.j,VRSession:A.j,VisualViewport:A.j,WebSocket:A.j,Window:A.j,DOMWindow:A.j,Worker:A.j,WorkerPerformance:A.j,BluetoothDevice:A.j,BluetoothRemoteGATTCharacteristic:A.j,Clipboard:A.j,MojoInterfaceInterceptor:A.j,USB:A.j,IDBDatabase:A.j,IDBOpenDBRequest:A.j,IDBVersionChangeRequest:A.j,IDBRequest:A.j,IDBTransaction:A.j,AnalyserNode:A.j,RealtimeAnalyserNode:A.j,AudioBufferSourceNode:A.j,AudioDestinationNode:A.j,AudioNode:A.j,AudioScheduledSourceNode:A.j,AudioWorkletNode:A.j,BiquadFilterNode:A.j,ChannelMergerNode:A.j,AudioChannelMerger:A.j,ChannelSplitterNode:A.j,AudioChannelSplitter:A.j,ConstantSourceNode:A.j,ConvolverNode:A.j,DelayNode:A.j,DynamicsCompressorNode:A.j,GainNode:A.j,AudioGainNode:A.j,IIRFilterNode:A.j,MediaElementAudioSourceNode:A.j,MediaStreamAudioDestinationNode:A.j,MediaStreamAudioSourceNode:A.j,OscillatorNode:A.j,Oscillator:A.j,PannerNode:A.j,AudioPannerNode:A.j,webkitAudioPannerNode:A.j,ScriptProcessorNode:A.j,JavaScriptAudioNode:A.j,StereoPannerNode:A.j,WaveShaperNode:A.j,EventTarget:A.j,File:A.aF,FileList:A.dr,FileWriter:A.hc,HTMLFormElement:A.hd,Gamepad:A.aG,History:A.hg,HTMLCollection:A.cs,HTMLFormControlsCollection:A.cs,HTMLOptionsCollection:A.cs,ImageData:A.dy,Location:A.hO,MediaList:A.hP,MessageEvent:A.bO,MessagePort:A.cF,MIDIInputMap:A.hQ,MIDIOutputMap:A.hR,MimeType:A.aH,MimeTypeArray:A.hS,Document:A.J,DocumentFragment:A.J,HTMLDocument:A.J,ShadowRoot:A.J,XMLDocument:A.J,Attr:A.J,DocumentType:A.J,Node:A.J,NodeList:A.eM,RadioNodeList:A.eM,Plugin:A.aI,PluginArray:A.i6,RTCStatsReport:A.ip,HTMLSelectElement:A.ir,SharedArrayBuffer:A.dT,SourceBuffer:A.aJ,SourceBufferList:A.is,SpeechGrammar:A.aK,SpeechGrammarList:A.it,SpeechRecognitionResult:A.aL,Storage:A.iv,CSSStyleSheet:A.at,StyleSheet:A.at,TextTrack:A.aM,TextTrackCue:A.au,VTTCue:A.au,TextTrackCueList:A.iy,TextTrackList:A.iz,TimeRanges:A.iD,Touch:A.aN,TouchList:A.iE,TrackDefaultList:A.iF,URL:A.iK,VideoTrackList:A.iQ,ServiceWorkerGlobalScope:A.ch,SharedWorkerGlobalScope:A.ch,WorkerGlobalScope:A.ch,CSSRuleList:A.iY,ClientRect:A.fg,DOMRect:A.fg,GamepadList:A.ja,NamedNodeMap:A.fn,MozNamedAttrMap:A.fn,SpeechRecognitionResultList:A.ju,StyleSheetList:A.jB,SVGLength:A.b2,SVGLengthList:A.hL,SVGNumber:A.b3,SVGNumberList:A.hZ,SVGPointList:A.ia,SVGStringList:A.iw,SVGTransform:A.ba,SVGTransformList:A.iG,AudioBuffer:A.fN,AudioParamMap:A.fO,AudioTrackList:A.fP,AudioContext:A.c5,webkitAudioContext:A.c5,BaseAudioContext:A.c5,OfflineAudioContext:A.i_})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DedicatedWorkerGlobalScope:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,Location:true,MediaList:true,MessageEvent:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SharedArrayBuffer:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,VideoTrackList:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:false,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true})
A.ar.$nativeSuperclassTag="ArrayBufferView"
A.fo.$nativeSuperclassTag="ArrayBufferView"
A.fp.$nativeSuperclassTag="ArrayBufferView"
A.cc.$nativeSuperclassTag="ArrayBufferView"
A.fq.$nativeSuperclassTag="ArrayBufferView"
A.fr.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.fu.$nativeSuperclassTag="EventTarget"
A.fv.$nativeSuperclassTag="EventTarget"
A.fx.$nativeSuperclassTag="EventTarget"
A.fy.$nativeSuperclassTag="EventTarget"})()
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
var s=A.v4
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=thumbnail_worker.dart.js.map
