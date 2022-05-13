(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.pl(b)}
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
if(a[b]!==s)A.pm(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jP(b)
return new s(c,this)}:function(){if(s===null)s=A.jP(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jP(a).prototype
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
a(hunkHelpers,v,w,$)}var A={je:function je(){},
kt(a){return new A.bp("Field '"+a+"' has been assigned during initialization.")},
fT(a){return new A.bp("Field '"+a+"' has not been initialized.")},
c9(a,b,c){return a},
ev(a,b,c,d){A.aA(b,"start")
if(c!=null){A.aA(c,"end")
if(b>c)A.A(A.R(b,0,c,"start",null))}return new A.cT(a,b,c,d.l("cT<0>"))},
ky(a,b,c,d){if(t.Q.b(a))return new A.bl(a,b,c.l("@<0>").F(d).l("bl<1,2>"))
return new A.aM(a,b,c.l("@<0>").F(d).l("aM<1,2>"))},
kO(a,b,c){var s="count"
if(t.Q.b(a)){A.f5(b,s,t.p)
A.aA(b,s)
return new A.bM(a,b,c.l("bM<0>"))}A.f5(b,s,t.p)
A.aA(b,s)
return new A.aP(a,b,c.l("aP<0>"))},
bo(){return new A.bV("No element")},
kl(){return new A.bV("Too few elements")},
bp:function bp(a){this.a=a},
ay:function ay(a){this.a=a},
j0:function j0(){},
p:function p(){},
W:function W(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(a){this.$ti=a},
ci:function ci(a){this.$ti=a},
Z:function Z(){},
bx:function bx(){},
bZ:function bZ(){},
my(a){if(typeof a=="number")return B.c.gab(a)
if(t.bA.b(a))return A.cL(a)
return A.lB(a)},
mz(a){return new A.ft(a)},
lH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
pc(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bG(a)
return s},
cL(a){var s,r=$.kB
if(r==null)r=$.kB=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
h8(a){return A.mQ(a)},
mQ(a){var s,r,q,p,o
if(a instanceof A.u)return A.an(A.a7(a),null)
s=J.cb(a)
if(s===B.aF||s===B.aK||t.bI.b(a)){r=B.Y(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.an(A.a7(a),null)},
kA(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mR(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bF)(a),++r){q=a[r]
if(!A.iI(q))throw A.d(A.bd(q))
if(q<=65535)B.b.v(p,q)
else if(q<=1114111){B.b.v(p,55296+(B.a.i(q-65536,10)&1023))
B.b.v(p,56320+(q&1023))}else throw A.d(A.bd(q))}return A.kA(p)},
kI(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.iI(q))throw A.d(A.bd(q))
if(q<0)throw A.d(A.bd(q))
if(q>65535)return A.mR(a)}return A.kA(a)},
mS(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
G(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.i(s,10)|55296)>>>0,s&1023|56320)}throw A.d(A.R(a,0,1114111,null,null))},
ae(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ei(a){return a.b?A.ae(a).getUTCFullYear()+0:A.ae(a).getFullYear()+0},
kG(a){return a.b?A.ae(a).getUTCMonth()+1:A.ae(a).getMonth()+1},
kC(a){return a.b?A.ae(a).getUTCDate()+0:A.ae(a).getDate()+0},
kD(a){return a.b?A.ae(a).getUTCHours()+0:A.ae(a).getHours()+0},
kF(a){return a.b?A.ae(a).getUTCMinutes()+0:A.ae(a).getMinutes()+0},
kH(a){return a.b?A.ae(a).getUTCSeconds()+0:A.ae(a).getSeconds()+0},
kE(a){return a.b?A.ae(a).getUTCMilliseconds()+0:A.ae(a).getMilliseconds()+0},
z(a){throw A.d(A.bd(a))},
a(a,b){if(a==null)J.a4(a)
throw A.d(A.ca(a,b))},
ca(a,b){var s,r="index",q=null
if(!A.iI(b))return new A.ax(!0,b,r,q)
s=A.n(J.a4(a))
if(b<0||b>=s)return A.fH(b,a,r,q,s)
return new A.cO(q,q,!0,b,r,"Value not in range")},
p_(a,b,c){if(a<0||a>c)return A.R(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.R(b,a,c,"end",null)
return new A.ax(!0,b,"end",null)},
bd(a){return new A.ax(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.ee()
s=new Error()
s.dartException=a
r=A.pn
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pn(){return J.bG(this.dartException)},
A(a){throw A.d(a)},
bF(a){throw A.d(A.bj(a))},
aQ(a){var s,r,q,p,o,n
a=A.pj(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kU(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jf(a,b){var s=b==null,r=s?null:b.method
return new A.e4(a,r,s?null:b.receiver)},
a1(a){var s
if(a==null)return new A.h_(a)
if(a instanceof A.ck){s=a.a
return A.bf(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bf(a,a.dartException)
return A.oN(a)},
bf(a,b){if(t.U.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.i(r,16)&8191)===10)switch(q){case 438:return A.bf(a,A.jf(A.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.v(s)
return A.bf(a,new A.cJ(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.lL()
n=$.lM()
m=$.lN()
l=$.lO()
k=$.lR()
j=$.lS()
i=$.lQ()
$.lP()
h=$.lU()
g=$.lT()
f=o.au(s)
if(f!=null)return A.bf(a,A.jf(A.aV(s),f))
else{f=n.au(s)
if(f!=null){f.method="call"
return A.bf(a,A.jf(A.aV(s),f))}else{f=m.au(s)
if(f==null){f=l.au(s)
if(f==null){f=k.au(s)
if(f==null){f=j.au(s)
if(f==null){f=i.au(s)
if(f==null){f=l.au(s)
if(f==null){f=h.au(s)
if(f==null){f=g.au(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aV(s)
return A.bf(a,new A.cJ(s,f==null?e:f.method))}}}return A.bf(a,new A.eD(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cS()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bf(a,new A.ax(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cS()
return a},
ah(a){var s
if(a instanceof A.ck)return a.b
if(a==null)return new A.df(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.df(a)},
lB(a){if(a==null||typeof a!="object")return J.du(a)
else return A.cL(a)},
lx(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
pb(a,b,c,d,e,f){t.Y.a(a)
switch(A.n(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.i6("Unsupported number of arguments for wrapped closure"))},
bE(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pb)
a.$identity=s
return s},
mi(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.es().constructor.prototype):Object.create(new A.bI(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.k8(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.me(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.k8(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
me(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ma)}throw A.d("Error in functionType of tearoff")},
mf(a,b,c,d){var s=A.k7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k8(a,b,c,d){var s,r
if(c)return A.mh(a,b,d)
s=b.length
r=A.mf(s,d,a,b)
return r},
mg(a,b,c,d){var s=A.k7,r=A.mb
switch(b?-1:a){case 0:throw A.d(new A.er("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mh(a,b,c){var s,r
if($.k5==null)$.k5=A.k4("interceptor")
if($.k6==null)$.k6=A.k4("receiver")
s=b.length
r=A.mg(s,c,a,b)
return r},
jP(a){return A.mi(a)},
ma(a,b){return A.iB(v.typeUniverse,A.a7(a.a),b)},
k7(a){return a.a},
mb(a){return a.b},
k4(a){var s,r,q,p=new A.bI("receiver","interceptor"),o=J.jd(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.bH("Field name "+a+" not found.",null))},
be(a){if(a==null)A.oP("boolean expression must not be null")
return a},
oP(a){throw A.d(new A.eK(a))},
pl(a){throw A.d(new A.dC(a))},
p5(a){return v.getIsolateTag(a)},
cC(a,b,c){var s=new A.bq(a,b,c.l("bq<0>"))
s.c=a.e
return s},
qV(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pe(a){var s,r,q,p,o,n=A.aV($.lz.$1(a)),m=$.iR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.jI($.lu.$2(a,n))
if(q!=null){m=$.iR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.j_(s)
$.iR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iY[n]=s
return s}if(p==="-"){o=A.j_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lC(a,s)
if(p==="*")throw A.d(A.eC(n))
if(v.leafTags[n]===true){o=A.j_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lC(a,s)},
lC(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_(a){return J.jR(a,!1,null,!!a.$iab)},
pg(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.j_(s)
else return J.jR(s,c,null,null)},
p9(){if(!0===$.jQ)return
$.jQ=!0
A.pa()},
pa(){var s,r,q,p,o,n,m,l
$.iR=Object.create(null)
$.iY=Object.create(null)
A.p8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lF.$1(o)
if(n!=null){m=A.pg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p8(){var s,r,q,p,o,n,m=B.aw()
m=A.c8(B.ax,A.c8(B.ay,A.c8(B.Z,A.c8(B.Z,A.c8(B.az,A.c8(B.aA,A.c8(B.aB(B.Y),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lz=new A.iV(p)
$.lu=new A.iW(o)
$.lF=new A.iX(n)},
c8(a,b){return a(b)||b},
pj(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cg:function cg(){},
cp:function cp(a,b){this.a=a
this.$ti=b},
ft:function ft(a){this.a=a},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cJ:function cJ(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
h_:function h_(a){this.a=a},
ck:function ck(a,b){this.a=a
this.b=b},
df:function df(a){this.a=a
this.b=null},
bi:function bi(){},
dx:function dx(){},
dy:function dy(){},
ex:function ex(){},
es:function es(){},
bI:function bI(a,b){this.a=a
this.b=b},
er:function er(a){this.a=a},
eK:function eK(a){this.a=a},
ak:function ak(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fR:function fR(a){this.a=a},
fQ:function fQ(a){this.a=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
pm(a){return A.A(A.kt(a))},
al(a){var s=new A.i1(a)
return s.b=s},
b(a,b){if(a===$)throw A.d(A.fT(b))
return a},
oD(a,b){if(a!==$)throw A.d(A.kt(b))},
i1:function i1(a){this.a=a
this.b=null},
bD(a,b,c){},
jL(a){return a},
mL(a){return new Float32Array(a)},
mM(a,b,c){A.bD(a,b,c)
c=B.a.G(a.byteLength-b,4)
return new Float32Array(a,b,c)},
mN(a){return new Int32Array(a)},
kz(a){return new Int8Array(a)},
mO(a){return new Uint16Array(a)},
mP(a){return new Uint32Array(a)},
jk(a,b,c){A.bD(a,b,c)
c=B.a.G(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fY(a){return new Uint8Array(a)},
J(a,b,c){A.bD(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aW(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ca(b,a))},
aX(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.p_(a,b,c))
if(b==null)return c
return b},
cG:function cG(){},
N:function N(){},
S:function S(){},
b3:function b3(){},
ad:function ad(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
cH:function cH(){},
cI:function cI(){},
bt:function bt(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
kM(a,b){var s=b.c
return s==null?b.c=A.jG(a,b.y,!0):s},
kL(a,b){var s=b.c
return s==null?b.c=A.di(a,"ap",[b.y]):s},
kN(a){var s=a.x
if(s===6||s===7||s===8)return A.kN(a.y)
return s===11||s===12},
mV(a){return a.at},
dr(a){return A.jH(v.typeUniverse,a,!1)},
bc(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.le(a,r,!0)
case 7:s=b.y
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.jG(a,r,!0)
case 8:s=b.y
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.ld(a,r,!0)
case 9:q=b.z
p=A.dq(a,q,a0,a1)
if(p===q)return b
return A.di(a,b.y,p)
case 10:o=b.y
n=A.bc(a,o,a0,a1)
m=b.z
l=A.dq(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jE(a,n,l)
case 11:k=b.y
j=A.bc(a,k,a0,a1)
i=b.z
h=A.oK(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lc(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.dq(a,g,a0,a1)
o=b.y
n=A.bc(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jF(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.f6("Attempted to substitute unexpected RTI kind "+c))}},
dq(a,b,c,d){var s,r,q,p,o=b.length,n=A.iD(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bc(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oL(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iD(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bc(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oK(a,b,c,d){var s,r=b.a,q=A.dq(a,r,c,d),p=b.b,o=A.dq(a,p,c,d),n=b.c,m=A.oL(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eP()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
oV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.p6(s)
return a.$S()}return null},
lA(a,b){var s
if(A.kN(b))if(a instanceof A.bi){s=A.oV(a)
if(s!=null)return s}return A.a7(a)},
a7(a){var s
if(a instanceof A.u){s=a.$ti
return s!=null?s:A.jM(a)}if(Array.isArray(a))return A.af(a)
return A.jM(J.cb(a))},
af(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
w(a){var s=a.$ti
return s!=null?s:A.jM(a)},
jM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ot(a,s)},
ot(a,b){var s=a instanceof A.bi?a.__proto__.__proto__.constructor:b,r=A.ob(v.typeUniverse,s.name)
b.$ccache=r
return r},
p6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
os(a){var s,r,q,p,o=this
if(o===t.K)return A.c5(o,a,A.ox)
if(!A.aZ(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.c5(o,a,A.oA)
s=o.x
r=s===6?o.y:o
if(r===t.p)q=A.iI
else if(r===t.gR||r===t.di)q=A.ow
else if(r===t.N)q=A.oy
else q=r===t.v?A.dm:null
if(q!=null)return A.c5(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.pd)){o.r="$i"+p
if(p==="k")return A.c5(o,a,A.ov)
return A.c5(o,a,A.oz)}}else if(s===7)return A.c5(o,a,A.oq)
return A.c5(o,a,A.oo)},
c5(a,b,c){a.b=c
return a.b(b)},
or(a){var s,r=this,q=A.on
if(!A.aZ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.oi
else if(r===t.K)q=A.oh
else{s=A.ds(r)
if(s)q=A.op}r.a=q
return r.a(a)},
iJ(a){var s,r=a.x
if(!A.aZ(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.iJ(a.y)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oo(a){var s=this
if(a==null)return A.iJ(s)
return A.M(v.typeUniverse,A.lA(a,s),null,s,null)},
oq(a){if(a==null)return!0
return this.y.b(a)},
oz(a){var s,r=this
if(a==null)return A.iJ(r)
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.cb(a)[s]},
ov(a){var s,r=this
if(a==null)return A.iJ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.cb(a)[s]},
on(a){var s,r=this
if(a==null){s=A.ds(r)
if(s)return a}else if(r.b(a))return a
A.ll(a,r)},
op(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ll(a,s)},
ll(a,b){throw A.d(A.o1(A.l4(a,A.lA(a,b),A.an(b,null))))},
l4(a,b,c){var s=A.cj(a)
return s+": type '"+A.an(b==null?A.a7(a):b,null)+"' is not a subtype of type '"+c+"'"},
o1(a){return new A.dh("TypeError: "+a)},
a0(a,b){return new A.dh("TypeError: "+A.l4(a,null,b))},
ox(a){return a!=null},
oh(a){if(a!=null)return a
throw A.d(A.a0(a,"Object"))},
oA(a){return!0},
oi(a){return a},
dm(a){return!0===a||!1===a},
lh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.a0(a,"bool"))},
qN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.a0(a,"bool"))},
qM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.a0(a,"bool?"))},
of(a){if(typeof a=="number")return a
throw A.d(A.a0(a,"double"))},
qP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a0(a,"double"))},
qO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a0(a,"double?"))},
iI(a){return typeof a=="number"&&Math.floor(a)===a},
n(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.a0(a,"int"))},
qQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.a0(a,"int"))},
iF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.a0(a,"int?"))},
ow(a){return typeof a=="number"},
og(a){if(typeof a=="number")return a
throw A.d(A.a0(a,"num"))},
qS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a0(a,"num"))},
qR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a0(a,"num?"))},
oy(a){return typeof a=="string"},
aV(a){if(typeof a=="string")return a
throw A.d(A.a0(a,"String"))},
qT(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.a0(a,"String"))},
jI(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.a0(a,"String?"))},
oH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.an(a[q],b)
return s},
lm(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.v(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.e.aK(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.an(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.an(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.an(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.an(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.an(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
an(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.an(a.y,b)
return s}if(l===7){r=a.y
s=A.an(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.an(a.y,b)+">"
if(l===9){p=A.oM(a.y)
o=a.z
return o.length>0?p+("<"+A.oH(o,b)+">"):p}if(l===11)return A.lm(a,b,null)
if(l===12)return A.lm(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
oM(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oc(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ob(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dj(a,5,"#")
q=A.iD(s)
for(p=0;p<s;++p)q[p]=r
o=A.di(a,b,q)
n[b]=o
return o}else return m},
o9(a,b){return A.lf(a.tR,b)},
o8(a,b){return A.lf(a.eT,b)},
jH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lb(A.l9(a,null,b,c))
r.set(b,s)
return s},
iB(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lb(A.l9(a,b,c,!0))
q.set(c,r)
return r},
oa(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jE(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
bb(a,b){b.a=A.or
b.b=A.os
return b},
dj(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.at(null,null)
s.x=b
s.at=c
r=A.bb(a,s)
a.eC.set(c,r)
return r},
le(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.o6(a,b,r,c)
a.eC.set(r,s)
return s},
o6(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aZ(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.at(null,null)
q.x=6
q.y=b
q.at=c
return A.bb(a,q)},
jG(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.o5(a,b,r,c)
a.eC.set(r,s)
return s},
o5(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aZ(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.ds(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.ds(q.y))return q
else return A.kM(a,b)}}p=new A.at(null,null)
p.x=7
p.y=b
p.at=c
return A.bb(a,p)},
ld(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.o3(a,b,r,c)
a.eC.set(r,s)
return s},
o3(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aZ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.di(a,"ap",[b])
else if(b===t.P||b===t.u)return t.bG}q=new A.at(null,null)
q.x=8
q.y=b
q.at=c
return A.bb(a,q)},
o7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.at(null,null)
s.x=13
s.y=b
s.at=q
r=A.bb(a,s)
a.eC.set(q,r)
return r},
eY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
o2(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
di(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.at(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.bb(a,r)
a.eC.set(p,q)
return q},
jE(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.eY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.at(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.bb(a,o)
a.eC.set(q,n)
return n},
lc(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.eY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.o2(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.at(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.bb(a,p)
a.eC.set(r,o)
return o},
jF(a,b,c,d){var s,r=b.at+("<"+A.eY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.o4(a,b,c,r,d)
a.eC.set(r,s)
return s},
o4(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iD(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bc(a,b,r,0)
m=A.dq(a,c,r,0)
return A.jF(a,n,m,c!==m)}}l=new A.at(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.bb(a,l)},
l9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lb(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.nX(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.la(a,r,h,g,!1)
else if(q===46)r=A.la(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.ba(a.u,a.e,g.pop()))
break
case 94:g.push(A.o7(a.u,g.pop()))
break
case 35:g.push(A.dj(a.u,5,"#"))
break
case 64:g.push(A.dj(a.u,2,"@"))
break
case 126:g.push(A.dj(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.jC(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.di(p,n,o))
else{m=A.ba(p,a.e,n)
switch(m.x){case 11:g.push(A.jF(p,m,o,a.n))
break
default:g.push(A.jE(p,m,o))
break}}break
case 38:A.nY(a,g)
break
case 42:p=a.u
g.push(A.le(p,A.ba(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.jG(p,A.ba(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.ld(p,A.ba(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.eP()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.jC(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.lc(p,A.ba(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.jC(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.o_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.ba(a.u,a.e,i)},
nX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
la(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.oc(s,o.y)[p]
if(n==null)A.A('No "'+p+'" in "'+A.mV(o)+'"')
d.push(A.iB(s,o,n))}else d.push(p)
return m},
nY(a,b){var s=b.pop()
if(0===s){b.push(A.dj(a.u,1,"0&"))
return}if(1===s){b.push(A.dj(a.u,4,"1&"))
return}throw A.d(A.f6("Unexpected extended operation "+A.v(s)))},
ba(a,b,c){if(typeof c=="string")return A.di(a,c,a.sEA)
else if(typeof c=="number")return A.nZ(a,b,c)
else return c},
jC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ba(a,b,c[s])},
o_(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ba(a,b,c[s])},
nZ(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.f6("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.f6("Bad index "+c+" for "+b.t(0)))},
M(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aZ(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aZ(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.M(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.u
if(s){if(p===8)return A.M(a,b,c,d.y,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.M(a,b.y,c,d,e)
if(r===6)return A.M(a,b.y,c,d,e)
return r!==7}if(r===6)return A.M(a,b.y,c,d,e)
if(p===6){s=A.kM(a,d)
return A.M(a,b,c,s,e)}if(r===8){if(!A.M(a,b.y,c,d,e))return!1
return A.M(a,A.kL(a,b),c,d,e)}if(r===7){s=A.M(a,t.P,c,d,e)
return s&&A.M(a,b.y,c,d,e)}if(p===8){if(A.M(a,b,c,d.y,e))return!0
return A.M(a,b,c,A.kL(a,d),e)}if(p===7){s=A.M(a,b,c,t.P,e)
return s||A.M(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.M(a,k,c,j,e)||!A.M(a,j,e,k,c))return!1}return A.ln(a,b.y,c,d.y,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.ln(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ou(a,b,c,d,e)}return!1},
ln(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.M(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.M(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ou(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iB(a,b,r[o])
return A.lg(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lg(a,n,null,c,m,e)},
lg(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.M(a,r,d,q,f))return!1}return!0},
ds(a){var s,r=a.x
if(!(a===t.P||a===t.u))if(!A.aZ(a))if(r!==7)if(!(r===6&&A.ds(a.y)))s=r===8&&A.ds(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pd(a){var s
if(!A.aZ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aZ(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lf(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iD(a){return a>0?new Array(a):v.typeUniverse.sEA},
at:function at(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
eP:function eP(){this.c=this.b=this.a=null},
eO:function eO(){},
dh:function dh(a){this.a=a},
nO(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.oQ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bE(new A.hY(q),1)).observe(s,{childList:true})
return new A.hX(q,s,r)}else if(self.setImmediate!=null)return A.oR()
return A.oS()},
nP(a){self.scheduleImmediate(A.bE(new A.hZ(t.M.a(a)),0))},
nQ(a){self.setImmediate(A.bE(new A.i_(t.M.a(a)),0))},
nR(a){t.M.a(a)
A.o0(0,a)},
o0(a,b){var s=new A.iz()
s.fd(a,b)
return s},
lo(a){return new A.eL(new A.L($.C,a.l("L<0>")),a.l("eL<0>"))},
lk(a,b){a.$2(0,null)
b.b=!0
return b.a},
jJ(a,b){A.oj(a,b)},
lj(a,b){b.c6(a)},
li(a,b){b.cP(A.a1(a),A.ah(a))},
oj(a,b){var s,r,q=new A.iG(b),p=new A.iH(b)
if(a instanceof A.L)a.e5(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.cW(q,p,s)
else{r=new A.L($.C,t.d)
r.a=8
r.c=a
r.e5(q,p,s)}}},
lt(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.C.ew(new A.iM(s),t.H,t.p,t.z)},
qv(a){return new A.c2(a,1)},
l6(){return B.fW},
l7(a){return new A.c2(a,3)},
lp(a,b){return new A.dg(a,b.l("dg<0>"))},
f7(a,b){var s=A.c9(a,"error",t.K)
return new A.ce(s,b==null?A.k2(a):b)},
k2(a){var s
if(t.U.b(a)){s=a.gbP()
if(s!=null)return s}return B.aD},
jz(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.c1()
b.cl(a)
A.c1(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.dV(q)}},
c1(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.c;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iK(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c1(c.a,b)
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
A.iK(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.ii(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ih(p,i).$0()}else if((b&2)!==0)new A.ig(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.l("ap<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.c2(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jz(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.c2(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
oF(a,b){var s
if(t.C.b(a))return b.ew(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.d(A.k1(a,"onError",u.b))},
oE(){var s,r
for(s=$.c6;s!=null;s=$.c6){$.dp=null
r=s.b
$.c6=r
if(r==null)$.dn=null
s.a.$0()}},
oJ(){$.jN=!0
try{A.oE()}finally{$.dp=null
$.jN=!1
if($.c6!=null)$.jU().$1(A.lv())}},
ls(a){var s=new A.eM(a),r=$.dn
if(r==null){$.c6=$.dn=s
if(!$.jN)$.jU().$1(A.lv())}else $.dn=r.b=s},
oI(a){var s,r,q,p=$.c6
if(p==null){A.ls(a)
$.dp=$.dn
return}s=new A.eM(a)
r=$.dp
if(r==null){s.b=p
$.c6=$.dp=s}else{q=r.b
s.b=q
$.dp=r.b=s
if(q==null)$.dn=s}},
pk(a){var s=null,r=$.C
if(B.h===r){A.c7(s,s,B.h,a)
return}A.c7(s,s,r,t.M.a(r.ec(a)))},
q9(a,b){A.c9(a,"stream",t.K)
return new A.eV(b.l("eV<0>"))},
iK(a,b){A.oI(new A.iL(a,b))},
lq(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
lr(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
oG(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
c7(a,b,c,d){t.M.a(d)
if(B.h!==c)d=c.ec(d)
A.ls(d)},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
iz:function iz(){},
iA:function iA(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=!1
this.$ti=b},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iM:function iM(a){this.a=a},
c2:function c2(a,b){this.a=a
this.b=b},
c4:function c4(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
dg:function dg(a,b){this.a=a
this.$ti=b},
ce:function ce(a,b){this.a=a
this.b=b},
eN:function eN(){},
bB:function bB(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
L:function L(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
i7:function i7(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
eM:function eM(a){this.a=a
this.b=null},
bW:function bW(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
et:function et(){},
eu:function eu(){},
eV:function eV(a){this.$ti=a},
dk:function dk(){},
iL:function iL(a,b){this.a=a
this.b=b},
eT:function eT(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
ku(a,b,c,d){if(b==null){if(a==null)return new A.ak(c.l("@<0>").F(d).l("ak<1,2>"))}else if(a==null)a=A.oX()
return A.nV(A.oW(),a,b,c,d)},
e7(a,b,c){return b.l("@<0>").F(c).l("jg<1,2>").a(A.lx(a,new A.ak(b.l("@<0>").F(c).l("ak<1,2>"))))},
O(a,b){return new A.ak(a.l("@<0>").F(b).l("ak<1,2>"))},
nV(a,b,c,d,e){var s=c!=null?c:new A.it(d)
return new A.d4(a,b,s,d.l("@<0>").F(e).l("d4<1,2>"))},
mK(a){return new A.d5(a.l("d5<0>"))},
jB(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nW(a,b,c){var s=new A.bC(a,b,c.l("bC<0>"))
s.c=a.e
return s},
ok(a,b){return J.aw(a,b)},
ol(a){return J.du(a)},
mG(a,b,c){var s,r
if(A.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.v($.ag,a)
try{A.oB(a,s)}finally{if(0>=$.ag.length)return A.a($.ag,-1)
$.ag.pop()}r=A.kS(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jc(a,b,c){var s,r
if(A.jO(a))return b+"..."+c
s=new A.bw(b)
B.b.v($.ag,a)
try{r=s
r.a=A.kS(r.a,a,", ")}finally{if(0>=$.ag.length)return A.a($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jO(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
oB(a,b){var s,r,q,p,o,n,m,l=a.gY(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.v(l.gH())
B.b.v(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gH();++j
if(!l.B()){if(j<=4){B.b.v(b,A.v(p))
return}r=A.v(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH();++j
for(;l.B();p=o,o=n){n=l.gH();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.b.v(b,"...")
return}}q=A.v(p)
r=A.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.v(b,m)
B.b.v(b,q)
B.b.v(b,r)},
mJ(a,b,c){var s=A.ku(null,null,b,c)
a.aD(0,new A.fV(s,b,c))
return s},
jj(a){var s,r={}
if(A.jO(a))return"{...}"
s=new A.bw("")
try{B.b.v($.ag,a)
s.a+="{"
r.a=!0
a.aD(0,new A.fX(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return A.a($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d4:function d4(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
it:function it(a){this.a=a},
d5:function d5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eS:function eS(a){this.a=a
this.b=null},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cx:function cx(){},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(){},
t:function t(){},
cE:function cE(){},
fX:function fX(a,b){this.a=a
this.b=b},
bs:function bs(){},
d7:function d7(a,b){this.a=a
this.$ti=b},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
cP:function cP(){},
de:function de(){},
d6:function d6(){},
dl:function dl(){},
n0(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.n1(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
n1(a,b,c,d){var s=a?$.lW():$.lV()
if(s==null)return null
if(0===c&&d===b.length)return A.kW(s,b)
return A.kW(s,b.subarray(c,A.aB(c,d,b.length)))},
kW(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ks(a,b,c){return new A.cB(a,b)},
om(a){return a.eA()},
nU(a,b){return new A.eR(a,[],A.lw())},
l8(a,b,c){var s,r,q=new A.bw("")
if(c==null)s=A.nU(q,b)
else s=new A.iq(c,0,q,[],A.lw())
s.b3(a)
r=q.a
return r.charCodeAt(0)==0?r:r},
oe(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
od(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
ht:function ht(){},
hs:function hs(){},
dz:function dz(){},
ch:function ch(){},
cB:function cB(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
fS:function fS(){},
e6:function e6(a,b){this.a=a
this.b=b},
ir:function ir(){},
is:function is(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.c=a
this.a=b
this.b=c},
iq:function iq(a,b,c,d,e){var _=this
_.f=a
_.a$=b
_.c=c
_.a=d
_.b=e},
eF:function eF(a){this.a=a},
iC:function iC(a){this.a=a
this.b=16
this.c=0},
eZ:function eZ(){},
ml(a){if(a instanceof A.bi)return a.t(0)
return"Instance of '"+A.h8(a)+"'"},
mm(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.t(0)
throw a
throw A.d("unreachable")},
X(a,b,c,d){var s,r=J.fK(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
kw(a,b){var s,r=A.c([],b.l("q<0>"))
for(s=J.ao(a);s.B();)B.b.v(r,b.a(s.gH()))
return r},
ji(a,b,c){var s
if(b)return A.kv(a,c)
s=J.jd(A.kv(a,c),c)
return s},
kv(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.l("q<0>"))
s=A.c([],b.l("q<0>"))
for(r=J.ao(a);r.B();)B.b.v(s,r.gH())
return s},
jh(a,b,c,d){var s,r=c?J.kn(a,d):J.fK(a,d)
for(s=0;s<a;++s)B.b.h(r,s,b.$1(s))
return r},
jt(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aB(b,c,r)
return A.kI(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return A.mS(a,b,A.aB(b,c,a.length))
return A.mY(a,b,c)},
mY(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.R(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.d(A.R(c,b,a.length,o,o))
r=J.ao(a)
for(q=0;q<b;++q)if(!r.B())throw A.d(A.R(b,0,q,o,o))
p=[]
if(s)for(;r.B();)p.push(r.gH())
else for(q=b;q<c;++q){if(!r.B())throw A.d(A.R(c,b,q,o,o))
p.push(r.gH())}return A.kI(p)},
kS(a,b,c){var s=J.ao(b)
if(!s.B())return a
if(c.length===0){do a+=A.v(s.gH())
while(s.B())}else{a+=A.v(s.gH())
for(;s.B();)a=a+c+A.v(s.gH())}return a},
kR(){var s,r
if(A.be($.m3()))return A.ah(new Error())
try{throw A.d("")}catch(r){s=A.ah(r)
return s}},
mj(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.A(A.bH("DateTime is outside valid range: "+a,null))
A.c9(!0,"isUtc",t.v)
return new A.bk(a,!0)},
k9(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mk(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
ka(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aG(a){if(a>=10)return""+a
return"0"+a},
cj(a){if(typeof a=="number"||A.dm(a)||a==null)return J.bG(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ml(a)},
f6(a){return new A.cd(a)},
bH(a,b){return new A.ax(!1,null,b,a)},
k1(a,b,c){return new A.ax(!0,a,b,c)},
f5(a,b,c){return a},
R(a,b,c,d,e){return new A.cO(b,c,!0,a,d,"Invalid value")},
aB(a,b,c){if(0>a||a>c)throw A.d(A.R(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.R(b,a,c,"end",null))
return b}return c},
aA(a,b){if(a<0)throw A.d(A.R(a,0,null,b,null))
return a},
fH(a,b,c,d,e){var s=A.n(e==null?J.a4(b):e)
return new A.dN(s,!0,a,c,"Index out of range")},
a5(a){return new A.eE(a)},
eC(a){return new A.eB(a)},
hf(a){return new A.bV(a)},
bj(a){return new A.dB(a)},
mx(a,b,c){return new A.dH(a,b,c)},
km(a,b,c){if(a<=0)return new A.aH(c.l("aH<0>"))
return new A.d3(a,b,c.l("d3<0>"))},
lD(a){A.lE(A.v(a))},
bk:function bk(a,b){this.a=a
this.b=b},
i2:function i2(){},
x:function x(){},
cd:function cd(a){this.a=a},
b7:function b7(){},
ee:function ee(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dN:function dN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eE:function eE(a){this.a=a},
eB:function eB(a){this.a=a},
bV:function bV(a){this.a=a},
dB:function dB(a){this.a=a},
ef:function ef(){},
cS:function cS(){},
dC:function dC(a){this.a=a},
i6:function i6(a){this.a=a},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(){},
K:function K(){},
u:function u(){},
eW:function eW(){},
bw:function bw(a){this.a=a},
i4(a,b,c,d,e){var s=A.oO(new A.i5(c),t.E)
if(s!=null&&!0)J.m5(a,b,s,!1)
return new A.d2(a,b,s,!1,e.l("d2<0>"))},
oO(a,b){var s=$.C
if(s===B.h)return a
return s.iw(a,b)},
bh:function bh(){},
bL:function bL(){},
fn:function fn(){},
h:function h(){},
aI:function aI(){},
bO:function bO(){},
aO:function aO(){},
b2:function b2(){},
b9:function b9(){},
j6:function j6(a){this.$ti=a},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d2:function d2(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i5:function i5(a){this.a=a},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b
this.c=!1},
ph(a,b){var s=new A.L($.C,b.l("L<0>")),r=new A.bB(s,b.l("bB<0>"))
a.then(A.bE(new A.j1(r,b),1),A.bE(new A.j2(r),1))
return s},
fZ:function fZ(a){this.a=a},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
ai(a){return new A.f4(a,null,null)},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
bn(a,b,c,d){var s,r
if(t.ak.b(a))s=A.J(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.kw(t.R.a(a),t.p)
r=new A.dP(s,d,d,b)
r.e=c==null?s.length:c
return r},
dQ:function dQ(){},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
h2(a,b){var s=b==null?32768:b
return new A.h1(a,new Uint8Array(s))},
h3:function h3(){},
h1:function h1(a,b){this.a=0
this.b=a
this.c=b},
iE:function iE(){},
kb(a,b,c,d){var s,r=b*2,q=a.length
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
jA(){return new A.ik()},
nS(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.nT(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
nT(a,b){var s,r=0
do{s=A.a6(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.a6(r,1)},
l5(a){var s
if(a<256){if(!(a>=0))return A.a(B.C,a)
s=B.C[a]}else{s=256+A.a6(a,7)
if(!(s<512))return A.a(B.C,s)
s=B.C[s]}return s},
jD(a,b,c,d,e){return new A.eU(a,b,c,d,e)},
a6(a,b){if(a>=0)return B.a.a3(a,b)
else return B.a.a3(a,b)+B.a.A(2,(~b>>>0)+65536&65535)},
fk:function fk(a,b,c,d,e,f,g,h){var _=this
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
_.a0=_.aa=_.aC=_.aQ=_.aq=_.a6=_.a9=_.a_=_.y2=_.y1=$},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ik:function ik(){this.c=this.b=this.a=$},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bQ(a){var s=new A.fy()
s.f5(a)
return s},
fy:function fy(){this.a=$
this.b=0
this.c=2147483647},
kj(a){var s=A.bQ(B.a1),r=A.bQ(B.ad)
r=new A.dO(A.bn(a,0,null,0),A.h2(0,null),s,r)
r.b=!0
r.dH()
return r},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
hT:function hT(){},
hS:function hS(){},
hU:function hU(){},
kc(a){var s=t.p,r=t.z
s=new A.bN(a==null?A.O(s,r):A.mJ(a.b,s,r))
s.f_(a)
return s},
bN:function bN(a){this.a=null
this.b=a},
k3(a){var s,r,q=new A.fd()
if(!A.fe(a))A.A(A.f("Not a bitmap file."))
a.d+=2
s=a.j()
r=$.B()
r[0]=s
s=$.Q()
if(0>=s.length)return A.a(s,0)
q.a=s[0]
a.d+=4
r[0]=a.j()
if(0>=s.length)return A.a(s,0)
q.b=s[0]
return q},
fe(a){if(a.c-a.d<2)return!1
return A.i(a,null,0).k()===19778},
m9(a,b){var s,r,q,p,o,n,m,l=b==null?A.k3(a):b,k=a.j(),j=a.j(),i=$.B()
i[0]=j
j=$.Q()
if(0>=j.length)return A.a(j,0)
s=j[0]
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
r=j[0]
q=a.k()
p=a.k()
o=a.j()
n=A.e7([0,B.L,3,B.K],t.p,t.G).p(0,o)
if(n==null)A.A(A.f("Bitmap compression "+o+" is not supported yet."))
o=a.j()
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
m=j[0]
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
j=new A.b_(l,r,s,k,q,p,n,o,m,j[0],a.j(),a.j())
j.d5(a,b)
return j},
cf:function cf(a,b){this.a=a
this.b=b},
fd:function fd(){this.b=this.a=$},
b_:function b_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(){this.a=$
this.b=null},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(){this.a=$
this.b=null},
fi:function fi(){},
fj:function fj(){},
fo:function fo(){},
dD:function dD(){},
cs:function cs(a,b){var _=this
_.r=a
_.b=_.a=0
_.c=b},
dE:function dE(){var _=this
_.a=null
_.f=_.e=_.c=_.b=$},
kd(a,b,c,d){var s,r
switch(a){case 1:return new A.dV(b)
case 2:return new A.cu(d==null?1:d,b)
case 3:return new A.cu(d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.dT(c,s,b)
r.f6(b,c,s)
return r
case 5:return new A.dU(c,d==null?16:d,b)
case 6:return new A.cs(d==null?32:d,b)
case 7:return new A.cs(d==null?32:d,b)
default:throw A.d(A.f("Invalid compression type: "+a))}},
aJ:function aJ(){},
dS:function dS(){},
mq(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.d(A.f("Incomplete huffman data"))
return}s=a.d
r=a.j()
q=a.j()
a.d+=4
p=a.j()
if(r<65537)o=q>=65537
else o=!0
if(o)throw A.d(A.f("Invalid huffman table size"))
a.d+=4
n=A.X(65537,0,!1,t.p)
m=J.aa(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.dF()
A.mr(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.d(A.f("Error in header for Huffman-encoded data (invalid number of bits)."))
A.mn(n,r,q,m)
A.mp(n,m,a,p,q,d,c)},
mp(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.c([0,0],t.t),h=c.d+B.a.G(d+7,8)
for(s=b.length,r=0;c.d<h;){A.j7(i,c)
for(;q=i[1],q>=14;){p=B.a.a3(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.j8(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.d(A.f(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.j7(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.a3(i[0],q)&B.a.A(1,m)-1)>>>0){B.b.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.j8(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.d(A.f(j))}}}k=8-d&7
B.b.h(i,0,B.a.i(i[0],k))
B.b.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.D(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.j8(o.b,e,i,c,g,r,f)}else throw A.d(A.f(j))}if(r!==f)throw A.d(A.f("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
j8(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.j7(c,d)
B.b.h(c,1,c[1]-8)
s=B.a.a3(c[0],c[1])&255
if(f+s>g)throw A.d(A.f(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(;o=s-1,s>0;s=o,f=n){n=f+1
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){n=f+1
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.d(A.f(m))
f=n}return f},
mn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.K(o,n)!==0)throw A.d(A.f(i))
if(n>14){p=B.a.a2(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.d(A.f(i))
p=++m.b
l=m.c
if(l!=null){m.seq(A.X(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.b.h(p,k,l[k])}}else m.seq(A.c([0],r))
p=m.c
p.toString
B.b.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.D(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.D(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.d(A.f(i))
m.a=n
m.b=b}}}},
mr(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.c([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.d(A.f(n))
r=A.ke(6,k,a)
B.b.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.d(A.f(n))
q=A.ke(8,k,a)+6
if(c+q>s)throw A.d(A.f(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.d(A.f(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}}A.mo(e)},
mo(a){var s,r,q,p,o,n=A.X(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.b.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.b.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.b.h(n,o,r+1)
B.b.h(a,s,(o|r<<6)>>>0)}}},
j7(a,b){B.b.h(a,0,((a[0]<<8|b.q())&-1)>>>0)
B.b.h(a,1,(a[1]+8&-1)>>>0)},
ke(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.b.h(b,0,((s<<8|r[q])&-1)>>>0)
B.b.h(b,1,(b[1]+8&-1)>>>0)}B.b.h(b,1,s-a)
return(B.a.a3(b[0],b[1])&B.a.A(1,a)-1)>>>0},
dF:function dF(){this.b=this.a=0
this.c=null},
ms(a){var s=A.l(a,!1,null,0)
if(s.j()!==20000630)return!1
if(s.q()!==2)return!1
if((s.ah()&4294967289)>>>0!==0)return!1
return!0},
fq:function fq(a){var _=this
_.d=a
_.e=null
_.f=$
_.b=_.a=0},
kk(a,b){var s=new A.ct(new A.dJ(A.O(t.dk,t.r)),A.c([],t.g9),A.O(t.N,t.aX),a)
s.f2(a,b,{})
return s},
dG:function dG(){},
fr:function fr(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=$
_.r=_.f=null
_.Q=$
_.as=0
_.at=null
_.ax=$
_.CW=_.ch=_.ay=null
_.cx=d
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=null
_.id=$
_.k1=null},
dT:function dT(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
dd:function dd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
dU:function dU(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
dV:function dV(a){var _=this
_.r=null
_.b=_.a=0
_.c=a},
cu:function cu(a,b){var _=this
_.w=a
_.x=null
_.b=_.a=0
_.c=b},
fp:function fp(){this.a=null},
kf(a){var s=new Uint8Array(a*3)
A.mA(a)
return new A.fu(a,s)},
mA(a){var s
for(s=1;s<=8;++s)if(B.a.A(1,s)>=a)return s
return 0},
fu:function fu(a,b){this.b=a
this.c=null
this.d=b},
cq:function cq(){},
dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.x=$},
dI:function dI(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
fv:function fv(){var _=this
_.d=_.b=_.a=null
_.f=_.e=$
_.r=null
_.w=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=0},
ki(a){var s,r
if(a.k()!==0)return null
s=a.k()
if(!B.b.ao(A.c([1,2],t.t),s))return null
if(s===2)return null
r=a.k()
return new A.fC(r,A.km(r,new A.fD(a),t.gx).cX(0))},
fB:function fB(){this.b=this.a=null},
fC:function fC(a,b){var _=this
_.e=a
_.f=b
_.b=_.a=0},
fD:function fD(a){this.a=a},
bR:function bR(a,b){this.d=a
this.e=b},
dL:function dL(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
dA:function dA(a,b,c){this.e=a
this.f=b
this.r=c},
fM:function fM(){this.d=null},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
kr(){var s=t.fk
return new A.fN(new A.bN(A.O(t.p,t.z)),A.X(4,null,!1,t.aS),A.c([],t.f8),A.c([],s),A.c([],s),A.c([],t.eB))},
fN:function fN(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
fO:function fO(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a
this.b=0},
e2:function e2(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
fP:function fP(){this.r=this.f=$},
e3:function e3(a,b,c,d,e,f,g,h){var _=this
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
e1:function e1(){},
cK:function cK(){},
dX:function dX(a){this.c=this.b=null
this.y=a},
h7:function h7(){},
fJ:function fJ(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.e=_.d=null
_.at=""
_.ay=null
_.cx=a
_.cy=b
_.b=_.a=0},
eh:function eh(){var _=this
_.a=null
_.c=_.b=0
_.d=$
_.e=0},
h5:function h5(){},
h6:function h6(a){var _=this
_.a=null
_.d=a
_.f=_.e=$
_.r=null
_.z=_.y=_.x=_.w=$
_.as=0
_.at=!1
_.ax=null},
ej:function ej(){this.a=null},
ek:function ek(){this.a=null},
az:function az(){},
em:function em(){this.a=null},
en:function en(){this.a=null},
ep:function ep(){this.a=null},
eq:function eq(){this.a=null},
cN:function cN(a){this.b=a},
eo:function eo(){},
h9:function h9(){var _=this
_.w=_.r=_.f=_.e=$},
bv:function bv(a){this.a=a
this.c=$},
kJ(a){var s=new A.hb(A.O(t.p,t.fh))
s.f8(a)
return s},
jn(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.c.m(B.c.n((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
hc(a,b){if(b===0)return 0
return B.c.m(B.a.n(B.c.m(255*(1-(1-a/255)/(b/255))),0,255))},
mT(a,b){return B.c.m(B.a.n(a+b-255,0,255))},
hd(a,b){if(b===255)return 255
return B.c.m(B.c.n(a/255/(1-b/255)*255,0,255))},
jo(a,b){var s=a/255,r=b/255,q=1-r
return B.c.aH(255*(q*r*s+r*(1-q*(1-s))))},
jl(a,b){var s=b/255,r=a/255
if(r<0.5)return B.c.aH(510*s*r)
else return B.c.aH(255*(1-2*(1-s)*(1-r)))},
jp(a,b){if(b<128)return A.hc(a,2*b)
else return A.hd(a,2*(b-128))},
jm(a,b){var s
if(b<128)return A.mT(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
kK(d1,d2,d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7="data",c8=A.V(d3,d4,B.f,null,null),c9=c8.aT(),d0=A.O(t.p,t.fW)
for(s=d5.length,r=0;q=d5.length,r<q;d5.length===s||(0,A.bF)(d5),++r){p=d5[r]
d0.h(0,p.a,p)}if(d2===8)o=1
else o=d2===16?2:-1
if(o===-1)throw A.d(A.f("PSD: unsupported bit depth: "+A.v(d2)))
n=d0.p(0,0)
m=d0.p(0,1)
l=d0.p(0,2)
k=d0.p(0,-1)
for(s=c9.length,j=q>=5,i=o===1,h=q===4,g=q>=2,q=q>=4,f=0,e=0,d=0;f<d4;++f)for(c=0;c<d3;++c,d+=o)switch(d1){case 3:b=e+1
a=A.b(n.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
a3=b+1
a=A.b(m.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
a4=a3+1
a=A.b(l.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(a3>=0&&a3<s))return A.a(c9,a3)
c9[a3]=a
a3=a4+1
if(q){a=A.b(k.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}}else a=255
if(!(a4>=0&&a4<s))return A.a(c9,a4)
c9[a4]=a
a5=c9[e]
a6=c9[b]
a=e+2
if(!(a<s))return A.a(c9,a)
a7=c9[a]
a0=e+3
if(!(a0<s))return A.a(c9,a0)
a8=c9[a0]
if(a8!==0){c9[e]=B.a.V((a5+a8-255)*255,a8)
c9[b]=B.a.V((a6+a8-255)*255,a8)
c9[a]=B.a.V((a7+a8-255)*255,a8)}e=a3
break
case 9:a=A.b(n.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}a0=A.b(m.c,c7)
a1=a0.length
if(i){if(!(d>=0&&d<a1))return A.a(a0,d)
a0=a0[d]}else{if(!(d>=0&&d<a1))return A.a(a0,d)
a2=a0[d]
a9=d+1
if(!(a9<a1))return A.a(a0,a9)
a9=(a2<<8|a0[a9])>>>8
a0=a9}a1=A.b(l.c,c7)
a2=a1.length
if(i){if(!(d>=0&&d<a2))return A.a(a1,d)
a1=a1[d]}else{if(!(d>=0&&d<a2))return A.a(a1,d)
a9=a1[d]
b0=d+1
if(!(b0<a2))return A.a(a1,b0)
b0=(a9<<8|a1[b0])>>>8
a1=b0}if(q){a2=A.b(k.c,c7)
a9=a2.length
if(i){if(!(d>=0&&d<a9))return A.a(a2,d)
a2=a2[d]
b1=a2}else{if(!(d>=0&&d<a9))return A.a(a2,d)
b0=a2[d]
b2=d+1
if(!(b2<a9))return A.a(a2,b2)
b2=(b0<<8|a2[b2])>>>8
b1=b2}}else b1=255
b3=((a*100>>>8)+16)/116
b4=(a0-128)/500+b3
b5=b3-(a1-128)/200
b6=Math.pow(b3,3)
b3=b6>0.008856?b6:(b3-0.13793103448275862)/7.787
b7=Math.pow(b4,3)
b4=b7>0.008856?b7:(b4-0.13793103448275862)/7.787
b8=Math.pow(b5,3)
b5=b8>0.008856?b8:(b5-0.13793103448275862)/7.787
b4=b4*95.047/100
b3=b3*100/100
b5=b5*108.883/100
b9=b4*3.2406+b3*-1.5372+b5*-0.4986
c0=b4*-0.9689+b3*1.8758+b5*0.0415
c1=b4*0.0557+b3*-0.204+b5*1.057
b9=b9>0.0031308?1.055*Math.pow(b9,0.4166666666666667)-0.055:12.92*b9
c0=c0>0.0031308?1.055*Math.pow(c0,0.4166666666666667)-0.055:12.92*c0
c1=c1>0.0031308?1.055*Math.pow(c1,0.4166666666666667)-0.055:12.92*c1
c2=[B.c.m(B.c.n(b9*255,0,255)),B.c.m(B.c.n(c0*255,0,255)),B.c.m(B.c.n(c1*255,0,255))]
b=e+1
a=c2[0]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
a=c2[1]
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
b=e+1
a=c2[2]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
case 1:a=A.b(n.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c3=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c3=(a1<<8|a[a2])>>>8}if(g){a=A.b(k.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]
b1=a}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
b1=a2}}else b1=255
b=e+1
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=c3
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=c3
b=e+1
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=c3
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
case 4:a=A.b(n.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c4=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c4=(a1<<8|a[a2])>>>8}a=A.b(m.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c5=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c5=(a1<<8|a[a2])>>>8}a=A.b(l.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
b3=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
b3=(a1<<8|a[a2])>>>8}a=A.b(d0.p(0,h?-1:3).c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c6=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c6=(a1<<8|a[a2])>>>8}if(j){a=A.b(k.c,c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]
b1=a}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
b1=a2}}else b1=255
a=1-(255-c6)/255
c2=[B.c.aH(255*(1-(255-c4)/255)*a),B.c.aH(255*(1-(255-c5)/255)*a),B.c.aH(255*(1-(255-b3)/255)*a)]
b=e+1
a=c2[0]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
a=c2[1]
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
b=e+1
a=c2[2]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
default:throw A.d(A.f("Unhandled color mode: "+A.v(d1)))}return c8},
hb:function hb(a){var _=this
_.e=_.d=null
_.f=$
_.w=_.r=null
_.y=_.x=$
_.z=null
_.Q=a
_.ch=_.ay=_.ax=_.at=$
_.b=_.a=0},
el:function el(){},
cM:function cM(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=$
_.cy=c},
mU(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.j()
if(s>=12){if(b.M(4)!=="8BIM")A.A(A.f("Invalid key in layer additional data"))
b.M(4)}if(s>=16)b.j()
return new A.eo()
default:return new A.cN(b)}},
bT:function bT(){},
ha:function ha(){this.a=null},
hj:function hj(){var _=this
_.e=_.d=null
_.b=_.a=0},
hi:function hi(){this.a=null
this.b=$},
hl:function hl(a){this.a=a
this.c=this.b=0},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
ju(a,b,c){var s=new A.hn(b,a),r=t.B
s.scS(A.X(b,null,!1,r))
s.scQ(A.X(b,null,!1,r))
return s},
hn:function hn(a,b){var _=this
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
ez:function ez(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.w=_.r=_.f=_.e=1
_.x=-1
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.fy=null
_.k1=_.id=_.go=$
_.k3=_.k2=null},
ho:function ho(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
kx(){return new A.fW(new Uint8Array(4096))},
fW:function fW(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
hm:function hm(){this.a=null
this.b=$},
jv(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.X(8,null,!1,t.eW),n=A.X(4,null,!1,t.dP)
return new A.hu(a,b,new A.hA(),new A.hE(),new A.hw(s,r),new A.hG(q,p),o,n,new Uint8Array(4))},
l_(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
hu:function hu(a,b,c,d,e,f,g,h,i){var _=this
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
_.a_=$
_.a9=null
_.aq=_.a6=$
_.aQ=null
_.aC=$},
hH:function hH(){},
kX(a){var s=new A.cV(a)
s.b=254
s.c=0
s.d=-8
return s},
cV:function cV(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
r(a,b,c){return B.a.P(B.a.i(a+2*b+c+2,2),32)},
nn(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-31
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
k=A.r(k,s,r)
q=l+-30
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
s=A.r(s,r,q)
p=l+-29
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
r=A.r(r,q,p)
l+=-28
if(!(l>=0&&l<j))return A.a(m,l)
o=A.c([k,s,r,A.r(q,p,m[l])],t.t)
for(n=0;n<4;++n)a.aR(n*32,4,o)},
ne(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
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
p=A.i(a,null,0)
o=p.bJ()
m=A.r(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.bJ()
s=A.r(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.bJ()
r=A.r(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.bJ()
n=A.r(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
n7(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.i(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.aF(s,r,r+4,p)}},
jw(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.a8()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
l.toString
if(!(m>=0&&m<766))return A.a(l,m)
J.m(k,n+(r+o),l[m])}r+=32}},
nk(a){A.jw(a,4)},
nl(a){A.jw(a,8)},
nj(a){A.jw(a,16)},
ni(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
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
a.h(0,96,A.r(s,r,q))
r=A.r(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.r(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.r(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.r(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.r(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.r(k,m,n))},
nh(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,0,A.r(k,s,r))
s=A.r(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.r(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.r(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.r(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.r(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.r(n,l,l))},
nq(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
m=B.a.P(B.a.i(q+p+1,1),32)
a.h(0,65,m)
a.h(0,0,m)
m=B.a.P(B.a.i(p+o+1,1),32)
a.h(0,66,m)
a.h(0,1,m)
m=B.a.P(B.a.i(o+n+1,1),32)
a.h(0,67,m)
a.h(0,2,m)
a.h(0,3,B.a.P(B.a.i(n+l+1,1),32))
a.h(0,96,A.r(r,s,k))
a.h(0,64,A.r(s,k,q))
k=A.r(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.r(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.r(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.r(o,n,l))},
np(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,0,B.a.P(B.a.i(k+s+1,1),32))
m=B.a.P(B.a.i(s+r+1,1),32)
a.h(0,64,m)
a.h(0,1,m)
m=B.a.P(B.a.i(r+q+1,1),32)
a.h(0,65,m)
a.h(0,2,m)
m=B.a.P(B.a.i(q+p+1,1),32)
a.h(0,66,m)
a.h(0,3,m)
a.h(0,32,A.r(k,s,r))
s=A.r(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.r(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.r(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.r(p,o,n))
a.h(0,99,A.r(o,n,l))},
ng(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
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
a.h(0,0,B.a.P(B.a.i(o+s+1,1),32))
q=B.a.P(B.a.i(s+r+1,1),32)
a.h(0,32,q)
a.h(0,2,q)
q=B.a.P(B.a.i(r+p+1,1),32)
a.h(0,64,q)
a.h(0,34,q)
a.h(0,1,A.r(o,s,r))
s=A.r(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.r(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
nc(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
m=B.a.P(B.a.i(k+p+1,1),32)
a.h(0,34,m)
a.h(0,0,m)
m=B.a.P(B.a.i(s+k+1,1),32)
a.h(0,66,m)
a.h(0,32,m)
m=B.a.P(B.a.i(r+s+1,1),32)
a.h(0,98,m)
a.h(0,64,m)
a.h(0,96,B.a.P(B.a.i(q+r+1,1),32))
a.h(0,3,A.r(o,n,l))
a.h(0,2,A.r(p,o,n))
o=A.r(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.r(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.r(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.r(q,r,s))},
nm(a){var s
for(s=0;s<16;++s)a.ag(s*32,16,a,-32)},
nd(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aF(q,p,p+16,q[o])
s+=32}},
hx(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.aF(r,q,q+16,a)}},
n3(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.hx(B.a.i(p,5),a)},
n5(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.hx(B.a.i(p,4),a)},
n4(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.hx(B.a.i(p,4),a)},
n6(a){A.hx(128,a)},
no(a){var s
for(s=0;s<8;++s)a.ag(s*32,8,a,-32)},
nf(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aF(q,p,p+8,q[o])
s+=32}},
hy(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.aF(r,q,q+8,a)}},
n8(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.hy(B.a.i(p,4),a)},
n9(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.hy(B.a.i(p,3),a)},
na(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.hy(B.a.i(p,3),a)},
nb(a){A.hy(128,a)},
b8(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.i(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
hz(a,b,c,d,e){A.b8(a,0,0,b,c+d)
A.b8(a,0,1,b,c+e)
A.b8(a,0,2,b,c-e)
A.b8(a,0,3,b,c-d)},
nr(){var s,r,q
if(!$.kY){for(s=-255;s<=255;++s){r=$.f1()
q=255+s
r[q]=s<0?-s:s
$.j3()[q]=B.a.i(r[q],1)}for(s=-1020;s<=1020;++s){r=$.j4()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.f2()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.a8()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.kY=!0}},
hv:function hv(){},
n2(){var s,r=J.aa(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.cU(r)},
nG(){var s,r,q,p,o=new Uint8Array(3),n=J.aa(4,t.c7)
for(s=t.bD,r=0;r<4;++r){q=J.aa(8,s)
for(p=0;p<8;++p)q[p]=A.n2()
n[r]=q}B.d.af(o,0,3,255)
return new A.hF(o,n)},
hA:function hA(){this.d=$},
hE:function hE(){},
hG:function hG(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
cU:function cU(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
hw:function hw(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
aS:function aS(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
cX:function cX(){this.b=this.a=0},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
jx(a,b){var s,r,q="_buffer8",p=A.c([],t.V),o=A.c([],t.gk),n=new Uint32Array(2),m=new A.eG(a,n)
n=m.d=A.J(n.buffer,0,null)
s=A.b(n,q)
r=a.q()
if(0>=s.length)return A.a(s,0)
s[0]=r
r=A.b(n,q)
s=a.q()
if(1>=r.length)return A.a(r,1)
r[1]=s
s=A.b(n,q)
r=a.q()
if(2>=s.length)return A.a(s,2)
s[2]=r
r=A.b(n,q)
s=a.q()
if(3>=r.length)return A.a(r,3)
r[3]=s
s=A.b(n,q)
r=a.q()
if(4>=s.length)return A.a(s,4)
s[4]=r
r=A.b(n,q)
s=a.q()
if(5>=r.length)return A.a(r,5)
r[5]=s
s=A.b(n,q)
r=a.q()
if(6>=s.length)return A.a(s,6)
s[6]=r
n=A.b(n,q)
r=a.q()
if(7>=n.length)return A.a(n,7)
n[7]=r
return new A.cW(m,b,p,o)},
bz(a,b){return B.a.i(a+B.a.A(1,b)-1,b)},
cW:function cW(a,b,c,d){var _=this
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
dY:function dY(a,b,c,d){var _=this
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
eG:function eG(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
hB:function hB(a,b){this.a=a
this.b=b},
hC(a,b,c){var s
if(!(b>=0&&b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
aT(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
by(a){if(a<0)return 0
if(a>255)return 255
return a},
hD(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
ns(a,b,c){return 4278190080},
nt(a,b,c){return b},
ny(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
nz(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
nA(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
nB(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.aT(A.aT(b,a[r]),s)},
nC(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.aT(b,a[s])},
nD(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.aT(b,a[c])},
nE(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.aT(s,a[c])},
nF(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.aT(s,a[r])},
nu(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.aT(A.aT(b,q),A.aT(s,r))},
nv(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.hD(s>>>24,b>>>24,r>>>24)+A.hD(s>>>16&255,b>>>16&255,r>>>16&255)+A.hD(s>>>8&255,b>>>8&255,r>>>8&255)+A.hD(s&255,b&255,r&255)<=0?s:b},
nw(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.by((b>>>24)+(s>>>24)-(r>>>24))<<24|A.by((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.by((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.by((b&255)+(s&255)-(r&255)))>>>0},
nx(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.aT(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.by(s+B.a.G(s-(r>>>24),2))<<24|A.by(n+B.a.G(n-(r>>>16&255),2))<<16|A.by(p+B.a.G(p-(r>>>8&255),2))<<8|A.by(o+B.a.G(o-(r&255),2)))>>>0},
eH:function eH(){var _=this
_.c=_.b=_.a=0
_.d=null
_.e=0},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
d_:function d_(){},
dZ:function dZ(){this.r=1
this.x=this.w=$},
kh(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.dK(s,r,new Int16Array(128))
s.cC(0)
return s},
mB(){var s,r=J.aa(5,t.bs)
for(s=0;s<5;++s)r[s]=A.kh()
return new A.bP(r)},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
bP:function bP(a){this.a=a},
d0:function d0(a){var _=this
_.e=_.d=!1
_.f=0
_.z=a
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
cv:function cv(a){var _=this
_.e=_.d=!1
_.f=0
_.z=a
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
hJ:function hJ(){this.b=this.a=null},
dJ:function dJ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
kg(a,b,c){switch(b){case 1:if(c===8)return new Int8Array(a)
else if(c===16)return new Int16Array(a)
else if(c===32)return new Int32Array(a)
break
case 0:if(c===8)return new Uint8Array(a)
else if(c===16)return new Uint16Array(a)
else if(c===32)return new Uint32Array(a)
break
case 3:if(c===16)return new Uint16Array(a)
else if(c===32)return new Float32Array(a)
else if(c===64)return new Float64Array(a)
break}throw A.d(A.eC(null))},
fx(a,b,c,d,e){return new A.cr(a,b,c,d,e,A.kg(b*c,d,e))},
cr:function cr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p7(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.iT(new A.iU()),a=A.V(a1.gcY(a1),a1.gaE(a1),B.f,null,null),a0=a.aT()
if(!(a1.b!=null||a1.c!=null||a1.d!=null))throw A.d(A.f("Only RGB[A] images are currently supported."))
s=Math.pow(2,B.c.n(a2+2.47393,-20,20))
r=a0.length
q=a1.a
p=0
o=0
while(!0){if(q.a===0)n=0
else{n=q.gaI()
n=n.b.$1(J.dt(n.a)).c}if(!(p<n))break
m=0
while(!0){if(q.a===0)n=0
else{n=q.gaI()
n=n.b.$1(J.dt(n.a)).b}if(!(m<n))break
n=a1.b
if(n!=null)if(n.d===3){n=n.bM(m,p)
l=n}else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.n(n[k])
l=n}else l=0
if(q.a===1)j=l
else{n=a1.c
if(n!=null){if(n.d===3)n=n.bM(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.n(n[k])}j=n}else j=0}if(q.a===1)i=l
else{n=a1.d
if(n!=null){if(n.d===3)n=n.bM(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.n(n[k])}i=n}else i=0}if(l==1/0||l==-1/0||isNaN(l))l=0
if(j==1/0||j==-1/0||isNaN(j))j=0
if(i==1/0||i==-1/0||isNaN(i))i=0
h=b.$2(l,s)
g=b.$2(j,s)
f=b.$2(i,s)
e=Math.max(h,Math.max(g,f))
if(e>255){h=255*(h/e)
g=255*(g/e)
f=255*(f/e)}d=o+1
n=B.c.m(B.c.n(h,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
o=d+1
n=B.c.m(B.c.n(g,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n
d=o+1
n=B.c.m(B.c.n(f,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
n=a1.e
if(n!=null){c=n.bM(m,p)
if(c==1/0||c==-1/0||isNaN(c))c=1
o=d+1
n=B.c.m(B.c.n(c*255,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n}else{o=d+1
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=255}++m}++p}return a},
iU:function iU(){},
iT:function iT(a){this.a=a},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
V(a,b,c,d,e){return new A.dM(a,b,c,0,0,0,B.aE,B.av,new Uint32Array(a*b),A.kc(d),e)},
ja(a){return new A.dM(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,B.n.cc(a.x,0),A.kc(a.y),a.z)},
fs:function fs(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
fG:function fG(a,b){this.a=a
this.b=b},
fF:function fF(){},
f(a){return new A.fE(a)},
fE:function fE(a){this.a=a},
l(a,b,c,d){return new A.a_(a,d,c==null?a.length:d+c,d,b)},
i(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.a_(s,q,p,r,a.e)},
a_:function a_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cw:function cw(a,b){this.a=a
this.b=b},
bu(a,b){return new A.h0(a,new Uint8Array(b))},
h0:function h0(a,b){this.a=0
this.b=a
this.c=b},
oU(a,b){var s,r,q,p=t.cJ.a(self),o=new MessageChannel(),n=t.p,m=new A.hN(A.O(n,t.eg),new A.hK(new A.iN(o,p),A.O(n,t.w)))
n=o.port1
s=t.fQ
r=s.a(new A.iO(m))
t.Z.a(null)
q=t.e
A.i4(n,"message",r,!1,q)
A.i4(p,"message",s.a(new A.iP(m,o,a)),!1,q)},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(){},
eQ:function eQ(){this.a=null},
im:function im(a){this.a=a},
eA:function eA(){},
hp:function hp(a){this.a=a},
mc(a){var s
if(a==null)return null
s=A.jI(a.p(0,"b"))
return new A.bJ(A.n(a.p(0,"a")),s)},
bJ:function bJ(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.d=null},
aE(a){var s=$.b5
if(s!=null)s.ba(1000,"creating new SquadronError: "+a)
s=new A.cR(a)
s.fa(a,null)
return s},
cR:function cR(a){this.a=a
this.b=null},
jr(a,b){var s,r,q=null
if(a instanceof A.cR)return a
else if(a instanceof A.c0){s=A.l0(a,q)
s.c=null
return A.l0(s,q)}else if(t.gY.b(a)){s=a.a
r=new A.ew(a.x,s,q,q,q)
r.ce(s,q,q,q)
return r}else return A.jy(J.bG(a),q,b,q)},
b4:function b4(){},
mW(a){if(a<1)return"ALL"
if(a<300)return"DEBUG"
if(a<400)return"FINEST"
if(a<500)return"FINER"
if(a<700)return"FINE"
if(a<800)return"CONFIG"
if(a<900)return"INFO"
if(a<1000)return"WARNING"
if(a<1200)return"SEVERE"
if(a<2000)return"SHOUT"
return"OFF"},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
h4:function h4(a,b){this.b=a
this.a=b},
jy(a,b,c,d){var s=new A.c0(a,c,d,b)
s.ce(a,b,c,d)
return s},
md(a,b,c,d){var s=b==null?"The task has been cancelled":b,r=new A.bK(s,c,d,a)
r.ce(s,a,c,d)
return r},
l0(a,b){a.d=b
return a},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.b=c
_.c=d
_.d=e},
l1(a){var s,r,q,p,o,n,m,l,k,j,i
if(a==null)return null
s=a.p(0,"a")
r=A.n(a.p(0,"b"))
q=A.jI(a.p(0,"f"))
p=a.p(0,"c")
if(p==null)p=B.ag
t.j.a(p)
o=A.iF(a.p(0,"g"))
n=A.mc(t.fF.a(a.p(0,"d")))
m=A.iF(a.p(0,"e"))
l=a.p(0,"h")
l=A.lh(l==null?!0:l)
if(s==null)s=null
else{k=new A.eQ()
k.a=t.c4.a(s)
s=k}j=new A.au(s,n,m,r,p,q,o,l)
i=a.p(0,"i")
if(i!=null)j.x=1000*Date.now()-A.n(i)
return j},
au:function au(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
hM(a){return new A.bA(!1,null,null,a)},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
b0:function b0(a,b,c){var _=this
_.e=a
_.f=0
_.a=b
_.b=null
_.c=c
_.d=null},
he:function he(){this.a=0},
hK:function hK(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.d=b
_.e=null
_.f=0},
hL:function hL(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
pf(){return A.oU(new A.iZ(),null)},
iZ:function iZ(){},
bX:function bX(){this.a=$},
hk:function hk(a){this.a=a},
n_(a){throw A.d(A.a5("Uint64List not supported on the web."))},
kV(a,b){var s
A.bD(a,b,null)
s=B.a.G(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
mv(a){var s
A.bD(a,0,null)
s=B.a.G(a.byteLength-0,4)
return new Float32Array(a,0,s)},
mw(a){return a.jG(0,0,null)},
lE(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
p2(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.N(r,65521)
q=B.a.N(q,65521)}return(q<<16|r)>>>0},
aD(a,b){var s,r,q,p=J.aY(a),o=p.gu(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.z(q)
b=B.k[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
av(a,b,c,d){return(B.c.m(B.a.n(d,0,255))<<24|B.c.m(B.a.n(c,0,255))<<16|B.c.m(B.a.n(b,0,255))<<8|B.c.m(B.a.n(a,0,255)))>>>0},
mt(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.c([0,0],t.t)
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
A.cn(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.cn(a,a6[b],q)
a2=q[0]
a3=q[1]
A.cn(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.cn(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.co(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.co(a,a6[b],q)
a2=q[0]
a3=q[1]
A.co(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.co(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.cn(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.co(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.cn(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.co(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
cn(a,b,c){var s,r,q,p,o,n=$.a2()
n[0]=a
s=$.a9()
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
n[0]=b
if(0>=r)return A.a(s,0)
p=s[0]
o=q+(p&1)+B.a.i(p,1)
B.b.h(c,0,o)
B.b.h(c,1,o-p)},
co(a,b,c){var s=a-B.a.i(b,1)&65535
B.b.h(c,1,s)
B.b.h(c,0,b+s-32768&65535)},
p0(a){var s,r,q,p,o,n,m,l=null
t.L.a(a)
if(A.kr().jB(a))return new A.e1()
s=new A.eh()
if(s.bh(a))return s
r=new A.fv()
r.b=A.l(a,!1,l,0)
r.a=new A.dI(A.c([],t.b))
if(r.dB())return r
q=new A.hJ()
if(q.bh(a))return q
p=new A.hm()
if(p.dX(A.l(a,!1,l,0))!=null)return p
if(A.kJ(a).d===943870035)return new A.ha()
if(A.ms(a))return new A.fp()
if(A.fe(A.l(a,!1,l,0)))return new A.dv()
o=new A.hi()
if(o.bh(a))return o
n=new A.fB()
m=A.l(a,!1,l,0)
n.a=m
m=A.ki(m)
n.b=m
if(m!=null)return n
return l},
oZ(a){var s=A.p0(a)
if(s==null)return null
return s.ae(a)},
pi(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.jK==null){s=$.jK=new Uint8Array(768)
for(r=-256;r<0;++r)s[256+r]=0
for(r=0;r<256;++r)s[256+r]=r
for(r=256;r<512;++r)s[256+r]=255}for(s=a5.length,r=0;r<64;++r){if(!(r<s))return A.a(a5,r)
q=a5[r]
p=a4[r]
if(!(r<64))return A.a(a7,r)
a7[r]=q*p}for(o=0,r=0;r<8;++r,o+=8){s=1+o
if(!(s<64))return A.a(a7,s)
q=a7[s]
if(q===0){p=2+o
if(!(p<64))return A.a(a7,p)
if(a7[p]===0){p=3+o
if(!(p<64))return A.a(a7,p)
if(a7[p]===0){p=4+o
if(!(p<64))return A.a(a7,p)
if(a7[p]===0){p=5+o
if(!(p<64))return A.a(a7,p)
if(a7[p]===0){p=6+o
if(!(p<64))return A.a(a7,p)
if(a7[p]===0){p=7+o
if(!(p<64))return A.a(a7,p)
p=a7[p]===0}else p=!1}else p=!1}else p=!1}else p=!1}else p=!1}else p=!1
if(p){if(!(o<64))return A.a(a7,o)
s=B.a.i(5793*a7[o]+512,10)
n=(s&2147483647)-((s&2147483648)>>>0)
if(!(o<64))return A.a(a7,o)
a7[o]=n
s=o+1
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+2
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+3
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+4
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+5
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+6
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=o+7
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}if(!(o<64))return A.a(a7,o)
p=B.a.i(5793*a7[o]+128,8)
m=(p&2147483647)-((p&2147483648)>>>0)
p=4+o
if(!(p<64))return A.a(a7,p)
l=B.a.i(5793*a7[p]+128,8)
k=(l&2147483647)-((l&2147483648)>>>0)
l=2+o
if(!(l<64))return A.a(a7,l)
j=a7[l]
i=6+o
if(!(i<64))return A.a(a7,i)
h=a7[i]
g=7+o
if(!(g<64))return A.a(a7,g)
f=a7[g]
e=B.a.i(2896*(q-f)+128,8)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.i(2896*(q+f)+128,8)
c=(f&2147483647)-((f&2147483648)>>>0)
f=3+o
if(!(f<64))return A.a(a7,f)
q=a7[f]<<4
b=(q&2147483647)-((q&2147483648)>>>0)
q=5+o
if(!(q<64))return A.a(a7,q)
e=a7[q]<<4
a=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(j*3784+h*1567+128,8)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.i(j*1567-h*3784+128,8)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.i(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.i(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.i(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.i(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.i(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.i(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.i(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.i(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(o<64))return A.a(a7,o)
a7[o]=m+n
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
if(!(p<64))return A.a(a7,p)
a7[p]=a2-d}for(r=0;r<8;++r){s=8+r
q=a7[s]
if(q===0&&a7[16+r]===0&&a7[24+r]===0&&a7[32+r]===0&&a7[40+r]===0&&a7[48+r]===0&&a7[56+r]===0){q=B.a.i(5793*a7[r]+8192,14)
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
continue}p=B.a.i(5793*a7[r]+2048,12)
m=(p&2147483647)-((p&2147483648)>>>0)
p=32+r
l=B.a.i(5793*a7[p]+2048,12)
k=(l&2147483647)-((l&2147483648)>>>0)
l=16+r
j=a7[l]
i=48+r
h=a7[i]
g=56+r
f=a7[g]
e=B.a.i(2896*(q-f)+2048,12)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.i(2896*(q+f)+2048,12)
c=(f&2147483647)-((f&2147483648)>>>0)
f=24+r
b=a7[f]
q=40+r
a=a7[q]
e=B.a.i(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(j*3784+h*1567+2048,12)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.i(j*1567-h*3784+2048,12)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.i(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.i(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.i(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.i(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.i(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.i(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.i(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.i(b*4017-a0*799+2048,12)
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
a7[p]=a2-d}for(s=$.jK,r=0;r<64;++r){s.toString
q=B.a.i(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
p3(f4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0=f4.r.b,f1=f0.a5(274)?A.n(f0.p(0,274)):0,f2=f4.d,f3=f2.e
f3.toString
f2=f2.d
f2.toString
s=f1>=5&&f1<=8
if(s)r=f2
else r=f3
if(s)q=f3
else q=f2
p=A.V(r,q,B.w,null,null)
p.y=new A.bN(A.O(t.p,t.z))
for(o=A.cC(f0,f0.r,A.w(f0).c);o.B();){n=o.d
if(n!==274)p.y.b.h(0,n,f0.p(0,n))}m=f2-1
l=f3-1
f0=f4.Q
f2=f0.length
switch(f2){case 1:if(0>=f2)return A.a(f0,0)
k=f0[0]
j=k.e
i=k.f
h=k.r
f0=p.x
f2=f0.length
f3=f1===8
o=f1===7
n=f1===6
g=f1===5
f=f1===4
e=f1===3
d=f1===2
c=p.a
b=j.length
a=0
a0=0
while(!0){a1=f4.d.d
a1.toString
if(!(a0<a1))break
a2=B.a.K(a0,h)
if(!(a2<b))return A.a(j,a2)
a3=j[a2]
a1=m-a0
a4=a1*c
a5=a0*c
a6=0
while(!0){a7=f4.d.e
a7.toString
if(!(a6<a7))break
a8=B.a.K(a6,i)
if(!(a8<a3.length))return A.a(a3,a8)
a9=a3[a8]
b0=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(a9,0,255))<<16|B.c.m(B.a.n(a9,0,255))<<8|B.c.m(B.a.n(a9,0,255)))>>>0
if(d){a7=a5+(l-a6)
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(e){a7=a4+(l-a6)
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(f){a7=a4+a6
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(g){a7=a6*c+a0
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(n){a7=a6*c+a1
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(o){a7=(l-a6)*c+a1
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else if(f3){a7=(l-a6)*c+a0
if(!(a7>=0&&a7<f2))return A.a(f0,a7)
f0[a7]=b0}else{b1=a+1
if(!(a>=0&&a<f2))return A.a(f0,a)
f0[a]=b0
a=b1}++a6}++a0}break
case 3:if(0>=f2)return A.a(f0,0)
k=f0[0]
if(1>=f2)return A.a(f0,1)
b2=f0[1]
if(2>=f2)return A.a(f0,2)
b3=f0[2]
b4=k.e
b5=b2.e
b6=b3.e
i=k.f
h=k.r
b7=b2.f
b8=b2.r
b9=b3.f
c0=b3.r
f0=p.x
f2=f0.length
f3=f1===8
o=f1===7
n=f1===6
g=f1===5
f=f1===4
e=f1===3
d=f1===2
c=p.a
b=b4.length
a1=b5.length
a4=b6.length
a=0
a0=0
while(!0){a5=f4.d.d
a5.toString
if(!(a0<a5))break
a2=B.a.K(a0,h)
c1=B.a.K(a0,b8)
c2=B.a.K(a0,c0)
if(!(a2<b))return A.a(b4,a2)
a3=b4[a2]
if(!(c1<a1))return A.a(b5,c1)
c3=b5[c1]
if(!(c2<a4))return A.a(b6,c2)
c4=b6[c2]
a5=m-a0
a7=a5*c
c5=a0*c
a6=0
while(!0){c6=f4.d.e
c6.toString
if(!(a6<c6))break
a8=B.a.K(a6,i)
c7=B.a.K(a6,b7)
c8=B.a.K(a6,b9)
if(!(a8<a3.length))return A.a(a3,a8)
a9=a3[a8]<<8>>>0
if(!(c7<c3.length))return A.a(c3,c7)
c9=c3[c7]-128
if(!(c8<c4.length))return A.a(c4,c8)
d0=c4[c8]-128
c6=B.a.i(a9+359*d0+128,8)
c6=(c6&2147483647)-((c6&2147483648)>>>0)
if(c6<0)d1=0
else d1=c6>255?255:c6
c6=B.a.i(a9-88*c9-183*d0+128,8)
c6=(c6&2147483647)-((c6&2147483648)>>>0)
if(c6<0)d2=0
else d2=c6>255?255:c6
c6=B.a.i(a9+454*c9+128,8)
c6=(c6&2147483647)-((c6&2147483648)>>>0)
if(c6<0)d3=0
else d3=c6>255?255:c6
b0=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(d3,0,255))<<16|B.c.m(B.a.n(d2,0,255))<<8|B.c.m(B.a.n(d1,0,255)))>>>0
if(d){c6=c5+(l-a6)
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(e){c6=a7+(l-a6)
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(f){c6=a7+a6
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(g){c6=a6*c+a0
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(n){c6=a6*c+a5
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(o){c6=(l-a6)*c+a5
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else if(f3){c6=(l-a6)*c+a0
if(!(c6>=0&&c6<f2))return A.a(f0,c6)
f0[c6]=b0}else{b1=a+1
if(!(a>=0&&a<f2))return A.a(f0,a)
f0[a]=b0
a=b1}++a6}++a0}break
case 4:f3=f4.c
if(f3==null)throw A.d(A.f("Unsupported color mode (4 components)"))
d4=f3.d!==0&&!0
if(0>=f2)return A.a(f0,0)
k=f0[0]
if(1>=f2)return A.a(f0,1)
b2=f0[1]
if(2>=f2)return A.a(f0,2)
b3=f0[2]
if(3>=f2)return A.a(f0,3)
d5=f0[3]
b4=k.e
b5=b2.e
b6=b3.e
d6=d5.e
i=k.f
h=k.r
b7=b2.f
b8=b2.r
b9=b3.f
c0=b3.r
d7=d5.f
d8=d5.r
f0=p.x
f2=f0.length
f3=f1===8
o=f1===7
n=f1===6
g=f1===5
f=f1===4
e=f1===3
d=f1===2
c=!d4
b=p.a
a1=b4.length
a4=b5.length
a5=b6.length
a7=d6.length
a=0
a0=0
while(!0){c5=f4.d.d
c5.toString
if(!(a0<c5))break
a2=B.a.K(a0,h)
c1=B.a.K(a0,b8)
c2=B.a.K(a0,c0)
d9=B.a.K(a0,d8)
if(!(a2<a1))return A.a(b4,a2)
a3=b4[a2]
if(!(c1<a4))return A.a(b5,c1)
c3=b5[c1]
if(!(c2<a5))return A.a(b6,c2)
c4=b6[c2]
if(!(d9<a7))return A.a(d6,d9)
e0=d6[d9]
c5=m-a0
c6=c5*b
e1=a0*b
a6=0
while(!0){e2=f4.d.e
e2.toString
if(!(a6<e2))break
a8=B.a.K(a6,i)
c7=B.a.K(a6,b7)
c8=B.a.K(a6,b9)
e3=B.a.K(a6,d7)
if(c){if(!(a8<a3.length))return A.a(a3,a8)
e4=a3[a8]
if(!(c7<c3.length))return A.a(c3,c7)
e5=c3[c7]
if(!(c8<c4.length))return A.a(c4,c8)
e6=c4[c8]
if(!(e3<e0.length))return A.a(e0,e3)
e7=e0[e3]}else{if(!(a8<a3.length))return A.a(a3,a8)
a9=a3[a8]
if(!(c7<c3.length))return A.a(c3,c7)
c9=c3[c7]
if(!(c8<c4.length))return A.a(c4,c8)
d0=c4[c8]
if(!(e3<e0.length))return A.a(e0,e3)
e7=e0[e3]
e2=d0-128
e8=B.c.m(a9+1.402*e2)
if(e8<0)e8=0
else if(e8>255)e8=255
e4=255-e8
e8=c9-128
e2=B.c.m(a9-0.3441363*e8-0.71413636*e2)
if(e2<0)e2=0
else if(e2>255)e2=255
e5=255-e2
e8=B.c.m(a9+1.772*e8)
if(e8<0)e2=0
else e2=e8>255?255:e8
e6=255-e2}e2=B.a.i(e4*e7,8)
e8=B.a.i(e5*e7,8)
e9=B.a.i(e6*e7,8)
b0=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n((e9&2147483647)-((e9&2147483648)>>>0),0,255))<<16|B.c.m(B.a.n((e8&2147483647)-((e8&2147483648)>>>0),0,255))<<8|B.c.m(B.a.n((e2&2147483647)-((e2&2147483648)>>>0),0,255)))>>>0
if(d){e2=e1+(l-a6)
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(e){e2=c6+(l-a6)
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(f){e2=c6+a6
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(g){e2=a6*b+a0
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(n){e2=a6*b+c5
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(o){e2=(l-a6)*b+c5
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else if(f3){e2=(l-a6)*b+a0
if(!(e2>=0&&e2<f2))return A.a(f0,e2)
f0[e2]=b0}else{b1=a+1
if(!(a>=0&&a<f2))return A.a(f0,a)
f0[a]=b0
a=b1}++a6}++a0}break
default:throw A.d(A.f("Unsupported color mode"))}return p},
nL(a,b,c,d,e,f){A.nI(f,a,b,c,d,e,!0,f)},
nM(a,b,c,d,e,f){A.nJ(f,a,b,c,d,e,!0,f)},
nK(a,b,c,d,e,f){A.nH(f,a,b,c,d,e,!0,f)},
c_(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.m(c.a,c.d+s,q+p)}},
nI(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.l(a,!1,q,p),m=A.l(a,!1,q,p),l=A.i(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.c_(A.i(n,q,1),l,A.i(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.c_(n,A.i(l,q,s),m,1,!0)
A.c_(A.i(n,q,1),l,A.i(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
nJ(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.l(a,!1,q,p),m=A.l(h,!1,q,p),l=A.i(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.c_(A.i(n,q,1),l,A.i(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.c_(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
nH(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.l(a,!1,i,h),e=A.l(a4,!1,i,h),d=A.i(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.c_(A.i(f,i,1),d,A.i(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.c_(f,A.i(d,i,s),e,1,!0)
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
J.m(e.a,e.d+q,p+j)}++a1
d.d+=a0
f.d+=a0
e.d+=a0}},
mC(a){var s,r,q,p
if($.P==null)A.aK()
$.jV()[0]=a
s=$.m0()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
q=r>>>23&511
s=$.fw.br()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.mD(r)},
mD(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.a3(o+(B.a.D(1,s-1)-1)+(B.a.a2(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
aK(){var s,r,q,p,o
if($.j9!=null)return
s=new Uint32Array(65536)
$.j9=s
$.P=A.mM(s.buffer,0,null)
s=new Uint16Array(512)
$.fw.b=s
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){$.fw.toString
s[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(s,p)
s[p]=0}else{$.fw.toString
p=q<<10>>>0
s[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(s,o)
s[o]=(p|32768)>>>0}}for(s=$.j9,r=0;r<65536;++r){s.toString
s[r]=A.mE(r)}},
mE(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
po(a){$.jX().h(0,0,a)
return $.m2().p(0,0)},
iQ(a){var s,r
if(a==null)return"null"
for(s=32,r="";s>-1;--s)r+=(a&B.a.D(1,s))>>>0===0?"0":"1"
return r.charCodeAt(0)==0?r:r},
oT(a){var s,r,q=A.ja(a)
if(!a.y.b.a5(274)||A.n(a.y.b.p(0,274))===1)return q
q.y=new A.bN(A.O(t.p,t.z))
for(s=a.y.b,s=A.cC(s,s.r,A.w(s).c);s.B();){r=s.d
if(r!==274)q.y.b.h(0,r,a.y.b.p(0,r))}switch(A.n(a.y.b.p(0,274))){case 2:return A.f0(q)
case 3:switch(2){case 2:A.p1(q)
A.f0(q)
break}return q
case 4:return A.f0(A.f_(q,180))
case 5:return A.f0(A.f_(q,90))
case 6:return A.f_(q,90)
case 7:return A.f0(A.f_(q,-90))
case 8:return A.f_(q,-90)}return q},
oY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a=A.oT(a)
if(b<=0)b=B.c.m(c*(a.b/a.a))
if(c<=0)c=B.c.m(b*(a.a/a.b))
s=a.a
if(c===s&&b===a.b)return A.ja(a)
r=A.V(c,b,a.c,a.y,a.z)
q=a.b/b
p=s/c
o=new Int32Array(c)
for(n=0;n<c;++n){m=B.c.m(n*p)
if(!(n<c))return A.a(o,n)
o[n]=m}for(m=a.x,l=m.length,k=r.x,j=r.a,i=k.length,h=0;h<b;++h)for(g=B.c.m(h*q)*s,f=h*j,n=0;n<c;++n){if(!(n<c))return A.a(o,n)
e=g+o[n]
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+n
if(!(d>=0&&d<i))return A.a(k,d)
k[d]=e}return r},
f_(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=B.a.N(a7,360)
if(B.a.N(a5,90)===0){s=a6.a
r=s-1
q=a6.b
p=q-1
switch(B.a.G(a5,90)){case 1:o=A.V(q,s,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=i*n,g=0;g<n;++g){f=(p-g)*s+i
if(!(f>=0&&f<l))return A.a(m,f)
f=m[f]
e=h+g
if(!(e>=0&&e<j))return A.a(k,e)
k[e]=f}return o
case 2:o=A.V(s,q,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=(p-i)*s,f=i*n,g=0;g<n;++g){e=h+(r-g)
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
case 3:o=A.V(q,s,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=r-i,f=i*n,g=0;g<n;++g){e=g*s+h
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
default:return A.ja(a6)}}c=a5*3.141592653589793/180
b=Math.cos(c)
a=Math.sin(c)
s=a6.a
q=a6.b
a0=0.5*s
a1=0.5*q
n=Math.abs(s*b)+Math.abs(q*a)
a2=0.5*n
q=Math.abs(s*a)+Math.abs(q*b)
a3=0.5*q
o=A.V(B.c.m(n),B.c.m(q),B.f,a6.y,a6.z)
for(s=o.b,q=o.a,n=o.x,m=n.length,i=0;i<s;++i)for(l=i-a3,k=l*a,l*=b,j=i*q,g=0;g<q;++g){h=g-a2
a4=a6.eI(a0+h*b+k,a1-h*a+l,B.aG)
h=j+g
if(!(h>=0&&h<m))return A.a(n,h)
n[h]=a4}return o},
p1(a){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=a.b,g=B.a.G(h,2)
for(s=a.x,r=s.length,q=h-1,p=0;p<g;++p){o=p*i
n=(q-p)*i
for(m=0;m<i;++m){l=n+m
if(!(l>=0&&l<r))return A.a(s,l)
k=s[l]
j=o+m
if(!(j>=0&&j<r))return A.a(s,j)
s[l]=s[j]
s[j]=k}}return a},
f0(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.b,h=B.a.G(j,2)
for(s=j-1,r=a.x,q=r.length,p=0;p<i;++p){o=p*j
for(n=0;n<h;++n){m=o+(s-n)
if(!(m>=0&&m<q))return A.a(r,m)
l=r[m]
k=o+n
if(!(k>=0&&k<q))return A.a(r,k)
r[m]=r[k]
r[k]=l}}return a},
lG(a){var s,r,q,p,o
try{if(a!=null)a.$0()}catch(r){s=A.a1(r)
q=A.v(a)
p=A.v(s)
o=$.b5
if(o!=null)o.ba(900,"callback "+q+" failed: "+p)}}},J={
jR(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iS(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jQ==null){A.p9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eC("Return interceptor for "+A.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.il
if(o==null)o=$.il=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.pe(a)
if(p!=null)return p
if(typeof a=="function")return B.aJ
s=Object.getPrototypeOf(a)
if(s==null)return B.au
if(s===Object.prototype)return B.au
if(typeof q=="function"){o=$.il
if(o==null)o=$.il=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.W,enumerable:false,writable:true,configurable:true})
return B.W}return B.W},
fK(a,b){if(a<0||a>4294967295)throw A.d(A.R(a,0,4294967295,"length",null))
return J.ko(new Array(a),b)},
aa(a,b){if(a<0||a>4294967295)throw A.d(A.R(a,0,4294967295,"length",null))
return J.ko(new Array(a),b)},
kn(a,b){if(a<0)throw A.d(A.bH("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.l("q<0>"))},
ko(a,b){return J.jd(A.c(a,b.l("q<0>")),b)},
jd(a,b){a.fixed$length=Array
return a},
kq(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mH(a,b){var s,r
for(s=a.length;b<s;){r=B.e.b6(a,b)
if(r!==32&&r!==13&&!J.kq(r))break;++b}return b},
mI(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.e.bw(a,s)
if(r!==32&&r!==13&&!J.kq(r))break}return b},
cb(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.e0.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.e_.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.u)return a
return J.iS(a)},
aY(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.u)return a
return J.iS(a)},
I(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.u)return a
return J.iS(a)},
ly(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.u)return a
return J.iS(a)},
p4(a){if(a==null)return a
if(!(a instanceof A.u))return J.bY.prototype
return a},
aw(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cb(a).bj(a,b)},
o(a,b){if(typeof b==="number")if(a.constructor==Array||A.pc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.I(a).p(a,b)},
m(a,b,c){return J.I(a).h(a,b,c)},
m4(a,b,c,d){return J.ly(a).ij(a,b,c,d)},
j5(a,b){return J.I(a).v(a,b)},
m5(a,b,c,d){return J.ly(a).cL(a,b,c,d)},
jZ(a,b){return J.I(a).ap(a,b)},
k_(a,b){return J.p4(a).iV(a,b)},
m6(a,b){return J.I(a).bf(a,b)},
aF(a,b,c,d){return J.I(a).af(a,b,c,d)},
dt(a){return J.I(a).gar(a)},
du(a){return J.cb(a).gab(a)},
ao(a){return J.I(a).gY(a)},
a4(a){return J.aY(a).gu(a)},
m7(a,b,c){return J.I(a).b0(a,b,c)},
k0(a,b){return J.I(a).aw(a,b)},
f3(a,b,c){return J.I(a).a7(a,b,c)},
bG(a){return J.cb(a).t(a)},
m8(a,b){return J.I(a).b2(a,b)},
dR:function dR(){},
e_:function e_(){},
cz:function cz(){},
aq:function aq(){},
b1:function b1(){},
eg:function eg(){},
bY:function bY(){},
aL:function aL(){},
q:function q(a){this.$ti=a},
fL:function fL(a){this.$ti=a},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(){},
cy:function cy(){},
e0:function e0(){},
bS:function bS(){}},B={}
var w=[A,J,B]
var $={}
A.je.prototype={}
J.dR.prototype={
bj(a,b){return a===b},
gab(a){return A.cL(a)},
t(a){return"Instance of '"+A.h8(a)+"'"}}
J.e_.prototype={
t(a){return String(a)},
gab(a){return a?519018:218159},
$iE:1}
J.cz.prototype={
bj(a,b){return null==b},
t(a){return"null"},
gab(a){return 0},
$iK:1}
J.aq.prototype={}
J.b1.prototype={
gab(a){return 0},
t(a){return String(a)},
$ikp:1}
J.eg.prototype={}
J.bY.prototype={}
J.aL.prototype={
t(a){var s=a[$.lJ()]
if(s==null)return this.eZ(a)
return"JavaScript function for "+J.bG(s)},
$ibm:1}
J.q.prototype={
v(a,b){A.af(a).c.a(b)
if(!!a.fixed$length)A.A(A.a5("add"))
a.push(b)},
bG(a,b){var s
if(!!a.fixed$length)A.A(A.a5("remove"))
for(s=0;s<a.length;++s)if(J.aw(a[s],b)){a.splice(s,1)
return!0}return!1},
b2(a,b){var s=A.af(a)
return new A.U(a,s.l("E(1)").a(b),s.l("U<1>"))},
b_(a,b){var s
A.af(a).l("j<1>").a(b)
if(!!a.fixed$length)A.A(A.a5("addAll"))
for(s=J.ao(b);s.B();)a.push(s.gH())},
b0(a,b,c){var s=A.af(a)
return new A.aN(a,s.F(c).l("1(2)").a(b),s.l("@<1>").F(c).l("aN<1,2>"))},
aw(a,b){return A.ev(a,b,null,A.af(a).c)},
ap(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
a7(a,b,c){if(b<0||b>a.length)throw A.d(A.R(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.R(c,b,a.length,"end",null))
if(b===c)return A.c([],A.af(a))
return A.c(a.slice(b,c),A.af(a))},
gar(a){if(a.length>0)return a[0]
throw A.d(A.bo())},
gj3(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bo())},
Z(a,b,c,d,e){var s,r,q,p,o
A.af(a).l("j<1>").a(d)
if(!!a.immutable$list)A.A(A.a5("setRange"))
A.aB(b,c,a.length)
s=c-b
if(s===0)return
A.aA(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.k0(d,e).b1(0,!1)
q=0}p=J.aY(r)
if(q+s>p.gu(r))throw A.d(A.kl())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.p(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.p(r,q+o)},
af(a,b,c,d){var s
A.af(a).l("1?").a(d)
if(!!a.immutable$list)A.A(A.a5("fill range"))
A.aB(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
bf(a,b){var s,r
A.af(a).l("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.be(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.bj(a))}return!0},
ao(a,b){var s
for(s=0;s<a.length;++s)if(J.aw(a[s],b))return!0
return!1},
gaF(a){return a.length===0},
geo(a){return a.length!==0},
t(a){return A.jc(a,"[","]")},
gY(a){return new J.cc(a,a.length,A.af(a).l("cc<1>"))},
gab(a){return A.cL(a)},
gu(a){return a.length},
su(a,b){if(!!a.fixed$length)A.A(A.a5("set length"))
if(b<0)throw A.d(A.R(b,0,null,"newLength",null))
if(b>a.length)A.af(a).c.a(null)
a.length=b},
p(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ca(a,b))
return a[b]},
h(a,b,c){A.n(b)
A.af(a).c.a(c)
if(!!a.immutable$list)A.A(A.a5("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.ca(a,b))
a[b]=c},
$ip:1,
$ij:1,
$ik:1}
J.fL.prototype={}
J.cc.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.bF(q))
s=r.c
if(s>=p){r.sdl(null)
return!1}r.sdl(q[s]);++r.c
return!0},
sdl(a){this.d=this.$ti.l("1?").a(a)},
$iF:1}
J.cA.prototype={
cO(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.a.gbC(b)
if(this.gbC(a)===s)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC(a){return a===0?1/a<0:a<0},
m(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.a5(""+a+".toInt()"))},
be(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.a5(""+a+".ceil()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a5(""+a+".round()"))},
n(a,b,c){if(B.a.cO(b,c)>0)throw A.d(A.bd(b))
if(this.cO(a,b)<0)return b
if(this.cO(a,c)>0)return c
return a},
bI(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.R(b,2,36,"radix",null))
s=a.toString(b)
if(B.e.bw(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.A(A.a5("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.a(r,1)
s=r[1]
if(3>=q)return A.a(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.e.aj("0",p)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gab(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
N(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
V(a,b){A.og(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e4(a,b)},
G(a,b){return(a|0)===a?a/b|0:this.e4(a,b)},
e4(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.a5("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
D(a,b){if(b<0)throw A.d(A.bd(b))
return b>31?0:a<<b>>>0},
A(a,b){return b>31?0:a<<b>>>0},
a3(a,b){var s
if(b<0)throw A.d(A.bd(b))
if(a>0)s=this.K(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
i(a,b){var s
if(a>0)s=this.K(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a2(a,b){if(0>b)throw A.d(A.bd(b))
return this.K(a,b)},
K(a,b){return b>31?0:a>>>b},
$iy:1,
$iH:1}
J.cy.prototype={
P(a,b){var s=this.D(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
$ie:1}
J.e0.prototype={}
J.bS.prototype={
bw(a,b){if(b<0)throw A.d(A.ca(a,b))
if(b>=a.length)A.A(A.ca(a,b))
return a.charCodeAt(b)},
b6(a,b){if(b>=a.length)throw A.d(A.ca(a,b))
return a.charCodeAt(b)},
aK(a,b){return a+b},
bQ(a,b,c){return a.substring(b,A.aB(b,c,a.length))},
jy(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.b6(p,0)===133){s=J.mH(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bw(p,r)===133?J.mI(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.aC)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
t(a){return a},
gab(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gu(a){return a.length},
$iD:1}
A.bp.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.ay.prototype={
gu(a){return this.a.length},
p(a,b){return B.e.bw(this.a,b)}}
A.j0.prototype={
$0(){var s=new A.L($.C,t.ck)
s.cg(null)
return s},
$S:27}
A.p.prototype={}
A.W.prototype={
gY(a){var s=this
return new A.br(s,s.gu(s),A.w(s).l("br<W.E>"))},
gar(a){if(this.gu(this)===0)throw A.d(A.bo())
return this.ap(0,0)},
b2(a,b){return this.eU(0,A.w(this).l("E(W.E)").a(b))},
b0(a,b,c){var s=A.w(this)
return new A.aN(this,s.F(c).l("1(W.E)").a(b),s.l("@<W.E>").F(c).l("aN<1,2>"))},
aw(a,b){return A.ev(this,b,null,A.w(this).l("W.E"))},
b1(a,b){return A.ji(this,!0,A.w(this).l("W.E"))},
cX(a){return this.b1(a,!0)}}
A.cT.prototype={
gh6(){var s=J.a4(this.a),r=this.c
if(r==null||r>s)return s
return r},
giq(){var s=J.a4(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.a4(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.cb()
return s-q},
ap(a,b){var s=this,r=s.giq()+b
if(b<0||r>=s.gh6())throw A.d(A.fH(b,s,"index",null,null))
return J.jZ(s.a,r)},
aw(a,b){var s,r,q=this
A.aA(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.aH(q.$ti.l("aH<1>"))
return A.ev(q.a,s,r,q.$ti.c)},
b1(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aY(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.fK(0,p.$ti.c)
return n}r=A.X(s,m.ap(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.b.h(r,q,m.ap(n,o+q))
if(m.gu(n)<l)throw A.d(A.bj(p))}return r}}
A.br.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.aY(q),o=p.gu(q)
if(r.b!==o)throw A.d(A.bj(q))
s=r.c
if(s>=o){r.saN(null)
return!1}r.saN(p.ap(q,s));++r.c
return!0},
saN(a){this.d=this.$ti.l("1?").a(a)},
$iF:1}
A.aM.prototype={
gY(a){var s=A.w(this)
return new A.cF(J.ao(this.a),this.b,s.l("@<1>").F(s.z[1]).l("cF<1,2>"))},
gu(a){return J.a4(this.a)},
gar(a){return this.b.$1(J.dt(this.a))}}
A.bl.prototype={$ip:1}
A.cF.prototype={
B(){var s=this,r=s.b
if(r.B()){s.saN(s.c.$1(r.gH()))
return!0}s.saN(null)
return!1},
gH(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saN(a){this.a=this.$ti.l("2?").a(a)}}
A.aN.prototype={
gu(a){return J.a4(this.a)},
ap(a,b){return this.b.$1(J.jZ(this.a,b))}}
A.U.prototype={
gY(a){return new A.d1(J.ao(this.a),this.b,this.$ti.l("d1<1>"))},
b0(a,b,c){var s=this.$ti
return new A.aM(this,s.F(c).l("1(2)").a(b),s.l("@<1>").F(c).l("aM<1,2>"))}}
A.d1.prototype={
B(){var s,r
for(s=this.a,r=this.b;s.B();)if(A.be(r.$1(s.gH())))return!0
return!1},
gH(){return this.a.gH()}}
A.cl.prototype={
gY(a){var s=this.$ti
return new A.cm(J.ao(this.a),this.b,B.X,s.l("@<1>").F(s.z[1]).l("cm<1,2>"))}}
A.cm.prototype={
gH(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
B(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.B();){q.saN(null)
if(s.B()){q.sdm(null)
q.sdm(J.ao(r.$1(s.gH())))}else return!1}q.saN(q.c.gH())
return!0},
sdm(a){this.c=this.$ti.l("F<2>?").a(a)},
saN(a){this.d=this.$ti.l("2?").a(a)},
$iF:1}
A.aP.prototype={
aw(a,b){A.f5(b,"count",t.p)
A.aA(b,"count")
return new A.aP(this.a,this.b+b,A.w(this).l("aP<1>"))},
gY(a){return new A.cQ(J.ao(this.a),this.b,A.w(this).l("cQ<1>"))}}
A.bM.prototype={
gu(a){var s=J.a4(this.a)-this.b
if(s>=0)return s
return 0},
aw(a,b){A.f5(b,"count",t.p)
A.aA(b,"count")
return new A.bM(this.a,this.b+b,this.$ti)},
$ip:1}
A.cQ.prototype={
B(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.B()
this.b=0
return s.B()},
gH(){return this.a.gH()}}
A.aH.prototype={
gY(a){return B.X},
gu(a){return 0},
gar(a){throw A.d(A.bo())},
b2(a,b){this.$ti.l("E(1)").a(b)
return this},
b0(a,b,c){this.$ti.F(c).l("1(2)").a(b)
return new A.aH(c.l("aH<0>"))},
aw(a,b){A.aA(b,"count")
return this},
b1(a,b){var s=this.$ti.c
return b?J.kn(0,s):J.fK(0,s)},
cX(a){return this.b1(a,!0)}}
A.ci.prototype={
B(){return!1},
gH(){throw A.d(A.bo())},
$iF:1}
A.Z.prototype={}
A.bx.prototype={
h(a,b,c){A.n(b)
A.w(this).l("bx.E").a(c)
throw A.d(A.a5("Cannot modify an unmodifiable list"))}}
A.bZ.prototype={}
A.cg.prototype={
gaF(a){return this.gu(this)===0},
t(a){return A.jj(this)},
$ias:1}
A.cp.prototype={
b9(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.mz(r)
o=A.ku(A.oC(),q,r,s.z[1])
A.lx(p.a,o)
p.$map=o}return o},
a5(a){return this.b9().a5(a)},
p(a,b){return this.b9().p(0,b)},
aD(a,b){this.$ti.l("~(1,2)").a(b)
this.b9().aD(0,b)},
gcR(){var s=this.b9()
return new A.ac(s,A.w(s).l("ac<1>"))},
gaI(){return this.b9().gaI()},
gu(a){return this.b9().a}}
A.ft.prototype={
$1(a){return this.a.b(a)},
$S:42}
A.hq.prototype={
au(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cJ.prototype={
t(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.e4.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eD.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.h_.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ck.prototype={}
A.df.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib6:1}
A.bi.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lH(r==null?"unknown":r)+"'"},
$ibm:1,
gjD(){return this},
$C:"$1",
$R:1,
$D:null}
A.dx.prototype={$C:"$0",$R:0}
A.dy.prototype={$C:"$2",$R:2}
A.ex.prototype={}
A.es.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lH(s)+"'"}}
A.bI.prototype={
bj(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bI))return!1
return this.$_target===b.$_target&&this.a===b.a},
gab(a){return(A.lB(this.a)^A.cL(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.h8(this.a)+"'")}}
A.er.prototype={
t(a){return"RuntimeError: "+this.a}}
A.eK.prototype={
t(a){return"Assertion failed: "+A.cj(this.a)}}
A.ak.prototype={
gu(a){return this.a},
gaF(a){return this.a===0},
gcR(){return new A.ac(this,A.w(this).l("ac<1>"))},
gaI(){var s=A.w(this)
return A.ky(new A.ac(this,s.l("ac<1>")),new A.fR(this),s.c,s.z[1])},
a5(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ek(a)},
ek(a){var s=this.d
if(s==null)return!1
return this.bA(s[this.bz(a)],a)>=0},
b_(a,b){A.w(this).l("as<1,2>").a(b).aD(0,new A.fQ(this))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.el(b)},
el(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bz(a)]
r=this.bA(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.w(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.d7(s==null?q.b=q.cE():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.d7(r==null?q.c=q.cE():r,b,c)}else q.en(b,c)},
en(a,b){var s,r,q,p,o=this,n=A.w(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.cE()
r=o.bz(a)
q=s[r]
if(q==null)s[r]=[o.cF(a,b)]
else{p=o.bA(q,a)
if(p>=0)q[p].b=b
else q.push(o.cF(a,b))}},
je(a,b){var s,r,q=this,p=A.w(q)
p.c.a(a)
p.l("2()").a(b)
if(q.a5(a)){s=q.p(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
bG(a,b){if((b&0x3fffffff)===b)return this.ik(this.c,b)
else return this.em(b)},
em(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bz(a)
r=n[s]
q=o.bA(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e8(p)
if(r.length===0)delete n[s]
return p.b},
aD(a,b){var s,r,q=this
A.w(q).l("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bj(q))
s=s.c}},
d7(a,b,c){var s,r=A.w(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.cF(b,c)
else s.b=c},
ik(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.e8(s)
delete a[b]
return s.b},
dN(){this.r=this.r+1&1073741823},
cF(a,b){var s=this,r=A.w(s),q=new A.fU(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dN()
return q},
e8(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dN()},
bz(a){return J.du(a)&0x3fffffff},
bA(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aw(a[r].a,b))return r
return-1},
t(a){return A.jj(this)},
cE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijg:1}
A.fR.prototype={
$1(a){var s=this.a,r=A.w(s)
s=s.p(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.w(this.a).l("2(1)")}}
A.fQ.prototype={
$2(a,b){var s=this.a,r=A.w(s)
s.h(0,r.c.a(a),r.z[1].a(b))},
$S(){return A.w(this.a).l("~(1,2)")}}
A.fU.prototype={}
A.ac.prototype={
gu(a){return this.a.a},
gY(a){var s=this.a,r=new A.bq(s,s.r,this.$ti.l("bq<1>"))
r.c=s.e
return r}}
A.bq.prototype={
gH(){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bj(q))
s=r.c
if(s==null){r.sd6(null)
return!1}else{r.sd6(s.a)
r.c=s.c
return!0}},
sd6(a){this.d=this.$ti.l("1?").a(a)},
$iF:1}
A.iV.prototype={
$1(a){return this.a(a)},
$S:12}
A.iW.prototype={
$2(a,b){return this.a(a,b)},
$S:29}
A.iX.prototype={
$1(a){return this.a(A.aV(a))},
$S:44}
A.i1.prototype={
J(){var s=this.b
if(s===this)throw A.d(new A.bp("Local '"+this.a+"' has not been initialized."))
return s},
br(){var s=this.b
if(s===this)throw A.d(A.fT(this.a))
return s}}
A.cG.prototype={$icG:1}
A.N.prototype={
hp(a,b,c,d){var s=A.R(b,0,c,d,null)
throw A.d(s)},
di(a,b,c,d){if(b>>>0!==b||b>c)this.hp(a,b,c,d)},
$iN:1,
$iT:1}
A.S.prototype={
gu(a){return a.length},
e2(a,b,c,d,e){var s,r,q=a.length
this.di(a,b,q,"start")
this.di(a,c,q,"end")
if(b>c)throw A.d(A.R(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.bH(e,null))
r=d.length
if(r-e<s)throw A.d(A.hf("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iab:1}
A.b3.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
h(a,b,c){A.n(b)
A.of(c)
A.aW(b,a,a.length)
a[b]=c},
Z(a,b,c,d,e){t.bM.a(d)
if(t.d4.b(d)){this.e2(a,b,c,d,e)
return}this.d4(a,b,c,d,e)},
$ip:1,
$ij:1,
$ik:1}
A.ad.prototype={
h(a,b,c){A.n(b)
A.n(c)
A.aW(b,a,a.length)
a[b]=c},
Z(a,b,c,d,e){t.hb.a(d)
if(t.bc.b(d)){this.e2(a,b,c,d,e)
return}this.d4(a,b,c,d,e)},
b4(a,b,c,d){return this.Z(a,b,c,d,0)},
$ip:1,
$ij:1,
$ik:1}
A.e8.prototype={
a7(a,b,c){return new Float32Array(a.subarray(b,A.aX(b,c,a.length)))},
$imu:1}
A.e9.prototype={
a7(a,b,c){return new Float64Array(a.subarray(b,A.aX(b,c,a.length)))}}
A.ea.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Int16Array(a.subarray(b,A.aX(b,c,a.length)))},
$ijb:1}
A.eb.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Int32Array(a.subarray(b,A.aX(b,c,a.length)))},
$ifI:1}
A.ec.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Int8Array(a.subarray(b,A.aX(b,c,a.length)))},
$imF:1}
A.ed.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Uint16Array(a.subarray(b,A.aX(b,c,a.length)))},
$imZ:1}
A.cH.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Uint32Array(a.subarray(b,A.aX(b,c,a.length)))},
cc(a,b){return this.a7(a,b,null)},
$iaR:1}
A.cI.prototype={
gu(a){return a.length},
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.aX(b,c,a.length)))}}
A.bt.prototype={
gu(a){return a.length},
p(a,b){A.aW(b,a,a.length)
return a[b]},
a7(a,b,c){return new Uint8Array(a.subarray(b,A.aX(b,c,a.length)))},
cc(a,b){return this.a7(a,b,null)},
$ibt:1,
$iaC:1}
A.d9.prototype={}
A.da.prototype={}
A.db.prototype={}
A.dc.prototype={}
A.at.prototype={
l(a){return A.iB(v.typeUniverse,this,a)},
F(a){return A.oa(v.typeUniverse,this,a)}}
A.eP.prototype={}
A.eO.prototype={
t(a){return this.a}}
A.dh.prototype={$ib7:1}
A.hY.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.hX.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:45}
A.hZ.prototype={
$0(){this.a.$0()},
$S:6}
A.i_.prototype={
$0(){this.a.$0()},
$S:6}
A.iz.prototype={
fd(a,b){if(self.setTimeout!=null)self.setTimeout(A.bE(new A.iA(this,b),0),a)
else throw A.d(A.a5("`setTimeout()` not found."))}}
A.iA.prototype={
$0(){this.b.$0()},
$S:1}
A.eL.prototype={
c6(a){var s,r=this,q=r.$ti
q.l("1/?").a(a)
if(a==null)q.c.a(a)
if(!r.b)r.a.cg(a)
else{s=r.a
if(q.l("ap<1>").b(a))s.dh(a)
else s.cn(q.c.a(a))}},
cP(a,b){var s=this.a
if(this.b)s.bn(a,b)
else s.dd(a,b)}}
A.iG.prototype={
$1(a){return this.a.$2(0,a)},
$S:3}
A.iH.prototype={
$2(a,b){this.a.$2(1,new A.ck(a,t.l.a(b)))},
$S:41}
A.iM.prototype={
$2(a,b){this.a(A.n(a),b)},
$S:36}
A.c2.prototype={
t(a){return"IterationMarker("+this.b+", "+A.v(this.a)+")"}}
A.c4.prototype={
gH(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gH()},
B(){var s,r,q,p,o,n,m=this
for(s=m.$ti.l("F<1>");!0;){r=m.c
if(r!=null)if(r.B())return!0
else m.sdQ(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.c2){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sdc(null)
return!1}if(0>=o.length)return A.a(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ao(r))
if(n instanceof A.c4){r=m.d
if(r==null)r=m.d=[]
B.b.v(r,m.a)
m.a=n.a
continue}else{m.sdQ(n)
continue}}}}else{m.sdc(q)
return!0}}return!1},
sdc(a){this.b=this.$ti.l("1?").a(a)},
sdQ(a){this.c=this.$ti.l("F<1>?").a(a)},
$iF:1}
A.dg.prototype={
gY(a){return new A.c4(this.a(),this.$ti.l("c4<1>"))}}
A.ce.prototype={
t(a){return A.v(this.a)},
$ix:1,
gbP(){return this.b}}
A.eN.prototype={
cP(a,b){var s
A.c9(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.hf("Future already completed"))
if(b==null)b=A.k2(a)
s.dd(a,b)},
ef(a){return this.cP(a,null)}}
A.bB.prototype={
c6(a){var s,r=this.$ti
r.l("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.hf("Future already completed"))
s.cg(r.l("1/").a(a))},
iE(){return this.c6(null)}}
A.aU.prototype={
j4(a){if((this.c&15)!==6)return!0
return this.b.b.cV(t.al.a(this.d),a.a,t.v,t.K)},
j1(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.jq(q,m,a.b,o,n,t.l)
else p=l.cV(t.x.a(q),m,o,n)
try{o=r.$ti.l("2/").a(p)
return o}catch(s){if(t.eK.b(A.a1(s))){if((r.c&1)!==0)throw A.d(A.bH("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bH("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.L.prototype={
cW(a,b,c){var s,r,q,p=this.$ti
p.F(c).l("1/(2)").a(a)
s=$.C
if(s===B.h){if(b!=null&&!t.C.b(b)&&!t.x.b(b))throw A.d(A.k1(b,"onError",u.b))}else{c.l("@<0/>").F(p.c).l("1(2)").a(a)
if(b!=null)b=A.oF(b,s)}r=new A.L(s,c.l("L<0>"))
q=b==null?1:3
this.bR(new A.aU(r,q,a,b,p.l("@<1>").F(c).l("aU<1,2>")))
return r},
jt(a,b){return this.cW(a,null,b)},
e5(a,b,c){var s,r=this.$ti
r.F(c).l("1/(2)").a(a)
s=new A.L($.C,c.l("L<0>"))
this.bR(new A.aU(s,3,a,b,r.l("@<1>").F(c).l("aU<1,2>")))
return s},
io(a){this.a=this.a&1|16
this.c=a},
cl(a){this.a=a.a&30|this.a&1
this.c=a.c},
bR(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.bR(a)
return}r.cl(s)}A.c7(null,null,r.b,t.M.a(new A.i7(r,a)))}},
dV(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.dV(a)
return}m.cl(n)}l.a=m.c2(a)
A.c7(null,null,m.b,t.M.a(new A.ie(l,m)))}},
c1(){var s=t.F.a(this.c)
this.c=null
return this.c2(s)},
c2(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fD(a){var s,r,q,p=this
p.a^=2
try{a.cW(new A.ia(p),new A.ib(p),t.P)}catch(q){s=A.a1(q)
r=A.ah(q)
A.pk(new A.ic(p,s,r))}},
cn(a){var s,r=this
r.$ti.c.a(a)
s=r.c1()
r.a=8
r.c=a
A.c1(r,s)},
bn(a,b){var s
t.l.a(b)
s=this.c1()
this.io(A.f7(a,b))
A.c1(this,s)},
cg(a){var s=this.$ti
s.l("1/").a(a)
if(s.l("ap<1>").b(a)){this.dh(a)
return}this.fv(s.c.a(a))},
fv(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.c7(null,null,s.b,t.M.a(new A.i9(s,a)))},
dh(a){var s=this,r=s.$ti
r.l("ap<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.c7(null,null,s.b,t.M.a(new A.id(s,a)))}else A.jz(a,s)
return}s.fD(a)},
dd(a,b){this.a^=2
A.c7(null,null,this.b,t.M.a(new A.i8(this,a,b)))},
$iap:1}
A.i7.prototype={
$0(){A.c1(this.a,this.b)},
$S:1}
A.ie.prototype={
$0(){A.c1(this.b,this.a.a)},
$S:1}
A.ia.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.cn(p.$ti.c.a(a))}catch(q){s=A.a1(q)
r=A.ah(q)
p.bn(s,r)}},
$S:11}
A.ib.prototype={
$2(a,b){this.a.bn(t.K.a(a),t.l.a(b))},
$S:32}
A.ic.prototype={
$0(){this.a.bn(this.b,this.c)},
$S:1}
A.i9.prototype={
$0(){this.a.cn(this.b)},
$S:1}
A.id.prototype={
$0(){A.jz(this.b,this.a)},
$S:1}
A.i8.prototype={
$0(){this.a.bn(this.b,this.c)},
$S:1}
A.ii.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ex(t.O.a(q.d),t.z)}catch(p){s=A.a1(p)
r=A.ah(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.f7(s,r)
o.b=!0
return}if(l instanceof A.L&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.jt(new A.ij(n),t.z)
q.b=!1}},
$S:1}
A.ij.prototype={
$1(a){return this.a},
$S:30}
A.ih.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cV(o.l("2/(1)").a(p.d),m,o.l("2/"),n)}catch(l){s=A.a1(l)
r=A.ah(l)
q=this.a
q.c=A.f7(s,r)
q.b=!0}},
$S:1}
A.ig.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.j4(s)&&p.a.e!=null){p.c=p.a.j1(s)
p.b=!1}}catch(o){r=A.a1(o)
q=A.ah(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.f7(r,q)
n.b=!0}},
$S:1}
A.eM.prototype={}
A.bW.prototype={
gu(a){var s,r,q=this,p={},o=new A.L($.C,t.fJ)
p.a=0
s=q.$ti
r=s.l("~(1)?").a(new A.hg(p,q))
t.Z.a(new A.hh(p,o))
A.i4(q.a,q.b,r,!1,s.c)
return o}}
A.hg.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.l("~(1)")}}
A.hh.prototype={
$0(){var s=this.b,r=s.$ti,q=r.l("1/").a(this.a.a),p=s.c1()
r.c.a(q)
s.a=8
s.c=q
A.c1(s,p)},
$S:1}
A.et.prototype={}
A.eu.prototype={}
A.eV.prototype={}
A.dk.prototype={$il3:1}
A.iL.prototype={
$0(){var s=this.a,r=this.b
A.c9(s,"error",t.K)
A.c9(r,"stackTrace",t.l)
A.mm(s,r)},
$S:1}
A.eT.prototype={
jr(a){var s,r,q
t.M.a(a)
try{if(B.h===$.C){a.$0()
return}A.lq(null,null,this,a,t.H)}catch(q){s=A.a1(q)
r=A.ah(q)
A.iK(t.K.a(s),t.l.a(r))}},
js(a,b,c){var s,r,q
c.l("~(0)").a(a)
c.a(b)
try{if(B.h===$.C){a.$1(b)
return}A.lr(null,null,this,a,b,t.H,c)}catch(q){s=A.a1(q)
r=A.ah(q)
A.iK(t.K.a(s),t.l.a(r))}},
ec(a){return new A.iu(this,t.M.a(a))},
iw(a,b){return new A.iv(this,b.l("~(0)").a(a),b)},
ex(a,b){b.l("0()").a(a)
if($.C===B.h)return a.$0()
return A.lq(null,null,this,a,b)},
cV(a,b,c,d){c.l("@<0>").F(d).l("1(2)").a(a)
d.a(b)
if($.C===B.h)return a.$1(b)
return A.lr(null,null,this,a,b,c,d)},
jq(a,b,c,d,e,f){d.l("@<0>").F(e).F(f).l("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.h)return a.$2(b,c)
return A.oG(null,null,this,a,b,c,d,e,f)},
ew(a,b,c,d){return b.l("@<0>").F(c).F(d).l("1(2,3)").a(a)}}
A.iu.prototype={
$0(){return this.a.jr(this.b)},
$S:1}
A.iv.prototype={
$1(a){var s=this.c
return this.a.js(this.b,s.a(a),s)},
$S(){return this.c.l("~(0)")}}
A.d4.prototype={
p(a,b){if(!A.be(this.y.$1(b)))return null
return this.eW(b)},
h(a,b,c){var s=this.$ti
this.eY(s.c.a(b),s.z[1].a(c))},
a5(a){if(!A.be(this.y.$1(a)))return!1
return this.eV(a)},
bG(a,b){if(!A.be(this.y.$1(b)))return null
return this.eX(b)},
bz(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
bA(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.be(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.it.prototype={
$1(a){return this.a.b(a)},
$S:4}
A.d5.prototype={
gY(a){var s=this,r=new A.bC(s,s.r,s.$ti.l("bC<1>"))
r.c=s.e
return r},
gu(a){return this.a},
ao(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fF(b)},
fF(a){var s=this.d
if(s==null)return!1
return this.dv(s[J.du(a)&1073741823],a)>=0},
gar(a){var s=this.e
if(s==null)throw A.d(A.hf("No elements"))
return this.$ti.c.a(s.a)},
v(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dj(s==null?q.b=A.jB():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dj(r==null?q.c=A.jB():r,b)}else return q.fs(b)},
fs(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.jB()
r=J.du(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.cm(a)]
else{if(p.dv(q,a)>=0)return!1
q.push(p.cm(a))}return!0},
dj(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.cm(b)
return!0},
cm(a){var s=this,r=new A.eS(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
dv(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aw(a[r].a,b))return r
return-1}}
A.eS.prototype={}
A.bC.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bj(q))
else if(r==null){s.sbm(null)
return!1}else{s.sbm(s.$ti.l("1?").a(r.a))
s.c=r.b
return!0}},
sbm(a){this.d=this.$ti.l("1?").a(a)},
$iF:1}
A.cx.prototype={}
A.fV.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:17}
A.cD.prototype={$ip:1,$ij:1,$ik:1}
A.t.prototype={
gY(a){return new A.br(a,this.gu(a),A.a7(a).l("br<t.E>"))},
ap(a,b){return this.p(a,b)},
gaF(a){return this.gu(a)===0},
geo(a){return this.gu(a)!==0},
gar(a){if(this.gu(a)===0)throw A.d(A.bo())
return this.p(a,0)},
bf(a,b){var s,r
A.a7(a).l("E(t.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!A.be(b.$1(this.p(a,r))))return!1
if(s!==this.gu(a))throw A.d(A.bj(a))}return!0},
b2(a,b){var s=A.a7(a)
return new A.U(a,s.l("E(t.E)").a(b),s.l("U<t.E>"))},
b0(a,b,c){var s=A.a7(a)
return new A.aN(a,s.F(c).l("1(t.E)").a(b),s.l("@<t.E>").F(c).l("aN<1,2>"))},
aw(a,b){return A.ev(a,b,null,A.a7(a).l("t.E"))},
a7(a,b,c){var s,r=this.gu(a)
A.aB(b,c,r)
A.aB(b,c,this.gu(a))
s=A.a7(a).l("t.E")
return A.kw(A.ev(a,b,c,s),s)},
af(a,b,c,d){var s
A.a7(a).l("t.E?").a(d)
A.aB(b,c,this.gu(a))
for(s=b;s<c;++s)this.h(a,s,d)},
Z(a,b,c,d,e){var s,r,q,p,o=A.a7(a)
o.l("j<t.E>").a(d)
A.aB(b,c,this.gu(a))
s=c-b
if(s===0)return
A.aA(e,"skipCount")
if(o.l("k<t.E>").b(d)){r=e
q=d}else{q=J.k0(d,e).b1(0,!1)
r=0}o=J.aY(q)
if(r+s>o.gu(q))throw A.d(A.kl())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.p(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.p(q,r+p))},
t(a){return A.jc(a,"[","]")}}
A.cE.prototype={}
A.fX.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.v(a)
r.a=s+": "
r.a+=A.v(b)},
$S:5}
A.bs.prototype={
aD(a,b){var s,r,q,p=this,o=A.w(p)
o.l("~(1,2)").a(b)
for(s=A.cC(p,p.r,o.c),o=o.z[1];s.B();){r=s.d
q=p.p(0,r)
b.$2(r,q==null?o.a(q):q)}},
gu(a){return this.a},
gaF(a){return this.a===0},
gaI(){var s=A.w(this)
return new A.d7(this,s.l("@<1>").F(s.z[1]).l("d7<1,2>"))},
t(a){return A.jj(this)},
$ias:1}
A.d7.prototype={
gu(a){return this.a.a},
gar(a){var s=this.a,r=new A.ac(s,A.w(s).l("ac<1>"))
r=s.p(0,r.gar(r))
return r==null?this.$ti.z[1].a(r):r},
gY(a){var s=this.a,r=this.$ti
return new A.d8(A.cC(s,s.r,A.w(s).c),s,r.l("@<1>").F(r.z[1]).l("d8<1,2>"))}}
A.d8.prototype={
B(){var s=this,r=s.a
if(r.B()){s.sbm(s.b.p(0,r.d))
return!0}s.sbm(null)
return!1},
gH(){var s=this.c
return s==null?this.$ti.z[1].a(s):s},
sbm(a){this.c=this.$ti.l("2?").a(a)},
$iF:1}
A.cP.prototype={
b0(a,b,c){var s=this.$ti
return new A.bl(this,s.F(c).l("1(2)").a(b),s.l("@<1>").F(c).l("bl<1,2>"))},
t(a){return A.jc(this,"{","}")},
b2(a,b){var s=this.$ti
return new A.U(this,s.l("E(1)").a(b),s.l("U<1>"))},
aw(a,b){return A.kO(this,b,this.$ti.c)},
gar(a){var s,r=A.nW(this,this.r,this.$ti.c)
if(!r.B())throw A.d(A.bo())
s=r.d
return s==null?r.$ti.c.a(s):s}}
A.de.prototype={$ip:1,$ij:1,$ijq:1}
A.d6.prototype={}
A.dl.prototype={}
A.ht.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:19}
A.hs.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:19}
A.dz.prototype={}
A.ch.prototype={}
A.cB.prototype={
t(a){var s=A.cj(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.e5.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.fS.prototype={
ej(a,b){var s
t.dA.a(b)
s=this.giU()
s=A.l8(a,s.b,s.a)
return s},
giU(){return B.aL}}
A.e6.prototype={}
A.ir.prototype={
cZ(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=B.e.b6(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(B.e.b6(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(B.e.bw(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.e.bQ(a,r,q)
r=q+1
o=s.a+=A.G(92)
o+=A.G(117)
s.a=o
o+=A.G(100)
s.a=o
n=p>>>8&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p>>>4&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.G(n<10?48+n:87+n)}}continue}if(p<32){if(q>r)s.a+=B.e.bQ(a,r,q)
r=q+1
o=s.a+=A.G(92)
switch(p){case 8:s.a=o+A.G(98)
break
case 9:s.a=o+A.G(116)
break
case 10:s.a=o+A.G(110)
break
case 12:s.a=o+A.G(102)
break
case 13:s.a=o+A.G(114)
break
default:o+=A.G(117)
s.a=o
o+=A.G(48)
s.a=o
o+=A.G(48)
s.a=o
n=p>>>4&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.G(n<10?48+n:87+n)
break}}else if(p===34||p===92){if(q>r)s.a+=B.e.bQ(a,r,q)
r=q+1
o=s.a+=A.G(92)
s.a=o+A.G(p)}}if(r===0)s.a+=a
else if(r<m)s.a+=B.e.bQ(a,r,m)},
cj(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.e5(a,null))}B.b.v(s,a)},
b3(a){var s,r,q,p,o=this
if(o.eD(a))return
o.cj(a)
try{s=o.b.$1(a)
if(!o.eD(s)){q=A.ks(a,null,o.gdT())
throw A.d(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.a1(p)
q=A.ks(a,r,o.gdT())
throw A.d(q)}},
eD(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.cZ(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cj(a)
q.eE(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cj(a)
r=q.eF(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
eE(a){var s,r,q=this.c
q.a+="["
s=J.aY(a)
if(s.geo(a)){this.b3(s.p(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.b3(s.p(a,r))}}q.a+="]"},
eF(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaF(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.X(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aD(0,new A.is(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.cZ(A.aV(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.b3(r[n])}p.a+="}"
return!0}}
A.is.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:5}
A.io.prototype={
eE(a){var s,r=this,q=J.aY(a),p=q.gaF(a),o=r.c,n=o.a
if(p)o.a=n+"[]"
else{o.a=n+"[\n"
r.bL(++r.a$)
r.b3(q.p(a,0))
for(s=1;s<q.gu(a);++s){o.a+=",\n"
r.bL(r.a$)
r.b3(q.p(a,s))}o.a+="\n"
r.bL(--r.a$)
o.a+="]"}},
eF(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaF(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.X(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aD(0,new A.ip(l,r))
if(!l.b)return!1
p=m.c
p.a+="{\n";++m.a$
for(o="";q<s;q+=2,o=",\n"){p.a+=o
m.bL(m.a$)
p.a+='"'
m.cZ(A.aV(r[q]))
p.a+='": '
n=q+1
if(!(n<s))return A.a(r,n)
m.b3(r[n])}p.a+="\n"
m.bL(--m.a$)
p.a+="}"
return!0}}
A.ip.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:5}
A.eR.prototype={
gdT(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iq.prototype={
bL(a){var s,r,q
for(s=this.f,r=this.c,q=0;q<a;++q)r.a+=s}}
A.eF.prototype={
iH(a){var s,r
t.L.a(a)
s=this.a
r=A.n0(s,a,0,null)
if(r!=null)return r
return new A.iC(s).iI(a,0,null,!0)}}
A.iC.prototype={
iI(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aB(b,c,a.length)
if(b===s)return""
r=A.od(a,b,s)
q=n.co(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.oe(p)
n.b=0
throw A.d(A.mx(o,a,b+n.c))}return q},
co(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.G(b+c,2)
r=q.co(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.co(a,s,c,d)}return q.iO(a,b,c,d)},
iO(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.bw(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.e.b6("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.e.b6(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.G(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.G(j)
break
case 65:g.a+=A.G(j);--f
break
default:p=g.a+=A.G(j)
g.a=p+A.G(j)
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
g.a+=A.G(a[l])}else g.a+=A.jt(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.G(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.eZ.prototype={}
A.bk.prototype={
bj(a,b){if(b==null)return!1
return b instanceof A.bk&&this.a===b.a&&this.b===b.b},
gab(a){var s=this.a
return(s^B.a.i(s,30))&1073741823},
jv(){if(this.b)return this
return A.mj(this.a,!0)},
t(a){var s=this,r=A.k9(A.ei(s)),q=A.aG(A.kG(s)),p=A.aG(A.kC(s)),o=A.aG(A.kD(s)),n=A.aG(A.kF(s)),m=A.aG(A.kH(s)),l=A.ka(A.kE(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l},
ju(){var s=this,r=A.ei(s)>=-9999&&A.ei(s)<=9999?A.k9(A.ei(s)):A.mk(A.ei(s)),q=A.aG(A.kG(s)),p=A.aG(A.kC(s)),o=A.aG(A.kD(s)),n=A.aG(A.kF(s)),m=A.aG(A.kH(s)),l=A.ka(A.kE(s)),k=r+"-"+q
if(s.b)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l}}
A.i2.prototype={}
A.x.prototype={
gbP(){return A.ah(this.$thrownJsError)}}
A.cd.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cj(s)
return"Assertion failed"}}
A.b7.prototype={}
A.ee.prototype={
t(a){return"Throw of null."}}
A.ax.prototype={
gcs(){return"Invalid argument"+(!this.a?"(s)":"")},
gcr(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.v(p),n=s.gcs()+q+o
if(!s.a)return n
return n+s.gcr()+": "+A.cj(s.b)}}
A.cO.prototype={
gcs(){return"RangeError"},
gcr(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.v(q):""
else if(q==null)s=": Not greater than or equal to "+A.v(r)
else if(q>r)s=": Not in inclusive range "+A.v(r)+".."+A.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.v(r)
return s}}
A.dN.prototype={
gcs(){return"RangeError"},
gcr(){if(A.n(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.eE.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.eB.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.bV.prototype={
t(a){return"Bad state: "+this.a}}
A.dB.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cj(s)+"."}}
A.ef.prototype={
t(a){return"Out of Memory"},
gbP(){return null},
$ix:1}
A.cS.prototype={
t(a){return"Stack Overflow"},
gbP(){return null},
$ix:1}
A.dC.prototype={
t(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.i6.prototype={
t(a){return"Exception: "+this.a}}
A.dH.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.v(q)+")"):r}}
A.j.prototype={
b0(a,b,c){var s=A.w(this)
return A.ky(this,s.F(c).l("1(j.E)").a(b),s.l("j.E"),c)},
b2(a,b){var s=A.w(this)
return new A.U(this,s.l("E(j.E)").a(b),s.l("U<j.E>"))},
bf(a,b){var s
A.w(this).l("E(j.E)").a(b)
for(s=this.gY(this);s.B();)if(!A.be(b.$1(s.gH())))return!1
return!0},
b1(a,b){return A.ji(this,b,A.w(this).l("j.E"))},
gu(a){var s,r=this.gY(this)
for(s=0;r.B();)++s
return s},
gaF(a){return!this.gY(this).B()},
aw(a,b){return A.kO(this,b,A.w(this).l("j.E"))},
gar(a){var s=this.gY(this)
if(!s.B())throw A.d(A.bo())
return s.gH()},
ap(a,b){var s,r,q
A.aA(b,"index")
for(s=this.gY(this),r=0;s.B();){q=s.gH()
if(b===r)return q;++r}throw A.d(A.fH(b,this,"index",null,r))},
t(a){return A.mG(this,"(",")")}}
A.d3.prototype={
ap(a,b){var s=this.a
if(0>b||b>=s)A.A(A.fH(b,this,"index",null,s))
return this.b.$1(b)},
gu(a){return this.a}}
A.F.prototype={}
A.K.prototype={
gab(a){return A.u.prototype.gab.call(this,this)},
t(a){return"null"}}
A.u.prototype={$iu:1,
bj(a,b){return this===b},
gab(a){return A.cL(this)},
t(a){return"Instance of '"+A.h8(this)+"'"},
toString(){return this.t(this)}}
A.eW.prototype={
t(a){return""},
$ib6:1}
A.bw.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$imX:1}
A.bh.prototype={$ibh:1}
A.bL.prototype={$ibL:1}
A.fn.prototype={
t(a){return String(a)}}
A.h.prototype={$ih:1}
A.aI.prototype={
cL(a,b,c,d){t.y.a(c)
if(c!=null)this.ft(a,b,c,!1)},
ft(a,b,c,d){return a.addEventListener(b,A.bE(t.y.a(c),1),!1)},
ij(a,b,c,d){return a.removeEventListener(b,A.bE(t.y.a(c),1),!1)},
$iaI:1}
A.bO.prototype={$ibO:1}
A.aO.prototype={$iaO:1}
A.b2.prototype={
cL(a,b,c,d){t.y.a(c)
if(b==="message")a.start()
this.eT(a,b,c,!1)},
er(a,b,c){t.ha.a(c)
if(c!=null){this.hL(a,new A.eX([],[]).aJ(b),c)
return}a.postMessage(new A.eX([],[]).aJ(b))
return},
ja(a,b){return this.er(a,b,null)},
hL(a,b,c){return a.postMessage(b,t.ew.a(c))},
$ib2:1}
A.b9.prototype={}
A.j6.prototype={}
A.i3.prototype={}
A.d2.prototype={
cN(){var s,r=this,q=r.b
if(q==null)return $.jY()
s=r.d
if(s!=null)J.m4(q,r.c,t.y.a(s),!1)
r.b=null
r.shz(null)
return $.jY()},
shz(a){this.d=t.y.a(a)}}
A.i5.prototype={
$1(a){return this.a.$1(t.E.a(a))},
$S:26}
A.iw.prototype={
bg(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aJ(a){var s,r,q,p=this,o={}
if(a==null)return a
if(A.dm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.bk)return new Date(a.a)
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=p.bg(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.a=r[s]
if(q!=null)return q
q={}
o.a=q
B.b.h(r,s,q)
a.aD(0,new A.ix(o,p))
return o.a}if(t.j.b(a)){s=p.bg(a)
o=p.b
if(!(s<o.length))return A.a(o,s)
q=o[s]
if(q!=null)return q
return p.iJ(a,s)}if(t.eH.b(a)){s=p.bg(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.b=r[s]
if(q!=null)return q
q={}
o.b=q
B.b.h(r,s,q)
p.j_(a,new A.iy(o,p))
return o.b}throw A.d(A.eC("structured clone of other type"))},
iJ(a,b){var s,r=J.aY(a),q=r.gu(a),p=new Array(q)
B.b.h(this.b,b,p)
for(s=0;s<q;++s)B.b.h(p,s,this.aJ(r.p(a,s)))
return p}}
A.ix.prototype={
$2(a,b){this.a.a[a]=this.b.aJ(b)},
$S:17}
A.iy.prototype={
$2(a,b){this.a.b[a]=this.b.aJ(b)},
$S:22}
A.hV.prototype={
bg(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aJ(a){var s,r,q,p,o,n,m,l,k,j=this,i={}
if(a==null)return a
if(A.dm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.A(A.bH("DateTime is outside valid range: "+s,null))
A.c9(!0,"isUtc",t.v)
return new A.bk(s,!0)}if(a instanceof RegExp)throw A.d(A.eC("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.ph(a,t.z)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=j.bg(a)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=i.a=r[p]
if(o!=null)return o
n=t.z
o=A.O(n,n)
i.a=o
B.b.h(r,p,o)
j.iZ(a,new A.hW(i,j))
return i.a}if(a instanceof Array){m=a
p=j.bg(m)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=r[p]
if(o!=null)return o
n=J.aY(m)
l=n.gu(m)
o=j.c?new Array(l):m
B.b.h(r,p,o)
for(r=J.I(o),k=0;k<l;++k)r.h(o,k,j.aJ(n.p(m,k)))
return o}return a},
eg(a,b){this.c=!0
return this.aJ(a)}}
A.hW.prototype={
$2(a,b){var s=this.a.a,r=this.b.aJ(b)
J.m(s,a,r)
return r},
$S:21}
A.eX.prototype={
j_(a,b){var s,r,q,p
t.g2.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
A.eJ.prototype={
iZ(a,b){var s,r,q,p
t.g2.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.bF)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.fZ.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.j1.prototype={
$1(a){return this.a.c6(this.b.l("0/?").a(a))},
$S:3}
A.j2.prototype={
$1(a){if(a==null)return this.a.ef(new A.fZ(a===undefined))
return this.a.ef(a)},
$S:3}
A.f4.prototype={}
A.dQ.prototype={}
A.dP.prototype={
gu(a){return A.b(this.e,"_length")-(this.b-this.c)},
gbB(){return this.b>=this.c+A.b(this.e,"_length")},
q(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
T(a){var s=this,r=s.c,q=s.b-r+r,p=a<0?A.b(s.e,"_length")-(q-r):a,o=A.bn(s.a,s.d,p,q)
s.b=s.b+o.gu(o)
return o},
j(){var s,r,q,p,o=this,n=o.a,m=o.b,l=o.b=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.U()
s=m&255
m=o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.U()
r=l&255
l=o.b=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.U()
q=m&255
o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.U()
p=l&255
if(o.d===1)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
R(){var s,r,q,p,o=this,n=o.gu(o),m=o.a
if(t.D.b(m)){s=o.b
r=m.length
if(s+n>r)n=r-s
return A.J(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.jL(J.f3(m,s,q>p?p:q)))}}
A.h3.prototype={}
A.h1.prototype={
E(a){var s,r,q=this
if(q.a===q.c.length)q.hA()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
ca(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.cG(r-p)
B.d.b4(q,s,r,a)
o.a+=b},
al(a){return this.ca(a,null)},
jC(a){var s,r,q,p,o,n=this
for(s=a.c;r=n.a,q=A.b(a.e,"_length"),p=a.b,o=n.c,r+(q-(p-s))>o.length;)n.cG(n.a+(A.b(a.e,"_length")-(a.b-s))-n.c.length)
s=n.a
B.d.Z(o,s,s+a.gu(a),a.a,a.b)
n.a=n.a+a.gu(a)},
am(a){var s=this
if(s.b===1){s.E(a>>>24&255)
s.E(a>>>16&255)
s.E(a>>>8&255)
s.E(a&255)
return}s.E(a&255)
s.E(a>>>8&255)
s.E(a>>>16&255)
s.E(a>>>24&255)},
d3(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.J(s.c.buffer,a,b-a)},
O(a){return this.d3(a,null)},
cG(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.d.b4(p,0,q,r)
this.c=p},
hA(){return this.cG(null)},
gu(a){return this.a}}
A.iE.prototype={
bx(a,b){var s,r,q,p,o=a.q(),n=a.q(),m=o&8
B.a.i(o,3)
if(m!==8)throw A.d(A.ai("Only DEFLATE compression supported: "+m))
if(B.a.N((o<<8>>>0)+n,31)!==0)throw A.d(A.ai("Invalid FCHECK"))
if((n>>>5&1)!==0){a.j()
throw A.d(A.ai("FDICT Encoding not currently supported"))}s=A.bQ(B.a1)
r=A.bQ(B.ad)
q=A.h2(0,null)
r=new A.dO(a,q,s,r)
r.b=!0
r.dH()
p=t.L.a(A.J(q.c.buffer,0,q.a))
a.j()
return p}}
A.fk.prototype={
fZ(a){var s,r,q,p=this
if(a>4||!1)throw A.d(A.ai("Invalid Deflate Parameter"))
if(A.b(p.x,"_pending")!==0)p.bX()
if(p.c.gbB())if(A.b(p.k3,"_lookAhead")===0)s=a!==0&&p.e!==666
else s=!0
else s=!0
if(s){switch($.aj.br().e){case 0:r=p.h1(a)
break
case 1:r=p.h_(a)
break
case 2:r=p.h0(a)
break
default:r=-1
break}s=r===2
if(s||r===3)p.e=666
if(r===0||s)return 0
if(r===1){if(a===1){p.W(2,3)
p.bd(256,B.G)
p.eb()
if(1+A.b(p.aC,"_lastEOBLen")+10-A.b(p.a0,"_numValidBits")<9){p.W(2,3)
p.bd(256,B.G)
p.eb()}p.aC=7}else{p.e6(0,0,!1)
if(a===3)for(q=0;q<A.b(p.db,"_hashSize");++q){s=A.b(p.cx,"_head")
if(!(q<s.length))return A.a(s,q)
s[q]=0}}p.bX()}}if(a!==4)return 0
return 1},
hu(){var s,r,q,p=this,o="_hashSize"
p.ch=2*A.b(p.as,"_windowSize")
s=A.b(p.cx,"_head")
r=A.b(p.db,o)-1
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=0
for(q=0;q<A.b(p.db,o)-1;++q){s=A.b(p.cx,"_head")
if(!(q<s.length))return A.a(s,q)
s[q]=0}p.k3=p.fx=p.k1=0
p.fy=p.k4=2
p.cy=p.id=0},
dI(){var s,r,q,p=this,o="_dynamicLengthTree"
for(s=0;s<286;++s){r=A.b(p.p2,o)
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}for(s=0;s<30;++s){r=A.b(p.p3,"_dynamicDistTree")
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}for(s=0;s<19;++s){r=A.b(p.p4,"_bitLengthTree")
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}r=A.b(p.p2,o)
if(512>=r.length)return A.a(r,512)
r[512]=1
p.a_=p.aQ=p.a6=p.aq=0},
cH(a,b){var s,r,q,p,o,n=this,m="_heapLen",l=n.to
if(!(b>=0&&b<573))return A.a(l,b)
s=l[b]
r=b<<1>>>0
for(q=n.xr;r<=A.b(n.x1,m);b=r,r=o){if(r<A.b(n.x1,m)){p=r+1
if(!(p>=0&&p<573))return A.a(l,p)
p=l[p]
if(!(r>=0&&r<573))return A.a(l,r)
p=A.kb(a,p,l[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(l,r)
if(A.kb(a,s,l[r],q))break
p=l[r]
if(!(b>=0&&b<573))return A.a(l,b)
l[b]=p
o=r<<1>>>0}if(!(b>=0&&b<573))return A.a(l,b)
l[b]=s},
e0(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h="_bitLengthTree",g=a.length
if(1>=g)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
if(!(p>=0&&p<g))return A.a(a,p)
a[p]=65535
for(o=0,n=-1,m=0;o<=b;s=l){++o
p=o*2+1
if(!(p<g))return A.a(a,p)
l=a[p];++m
if(m<r&&s===l)continue
else if(m<q){p=A.b(i.p4,h)
k=s*2
j=A.b(i.p4,h)
if(!(k<j.length))return A.a(j,k)
j=j[k]
if(!(k<p.length))return A.a(p,k)
p[k]=j+m}else if(s!==0){if(s!==n){p=A.b(i.p4,h)
k=s*2
if(!(k<p.length))return A.a(p,k)
p[k]=p[k]+1}p=A.b(i.p4,h)
if(32>=p.length)return A.a(p,32)
p[32]=p[32]+1}else{p=i.p4
if(m<=10){p=A.b(p,h)
if(34>=p.length)return A.a(p,34)
p[34]=p[34]+1}else{p=A.b(p,h)
if(36>=p.length)return A.a(p,36)
p[36]=p[36]+1}}if(l===0){r=138
q=3}else if(s===l){r=6
q=3}else{r=7
q=4}n=s
m=0}},
fz(){var s,r,q,p=this
p.e0(A.b(p.p2,"_dynamicLengthTree"),A.b(p.R8.b,"maxCode"))
p.e0(A.b(p.p3,"_dynamicDistTree"),A.b(p.RG.b,"maxCode"))
p.rx.ci(p)
for(s=18;s>=3;--s){r=A.b(p.p4,"_bitLengthTree")
q=B.v[s]*2+1
if(!(q<r.length))return A.a(r,q)
if(r[q]!==0)break}p.a6=A.b(p.a6,"_optimalLen")+(3*(s+1)+5+5+4)
return s},
im(a,b,c){var s,r,q,p,o=this
o.W(a-257,5)
s=b-1
o.W(s,5)
o.W(c-4,4)
for(r=0;r<c;++r){q=A.b(o.p4,"_bitLengthTree")
if(!(r<19))return A.a(B.v,r)
p=B.v[r]*2+1
if(!(p<q.length))return A.a(q,p)
o.W(q[p],3)}o.e1(A.b(o.p2,"_dynamicLengthTree"),a-1)
o.e1(A.b(o.p3,"_dynamicDistTree"),s)},
e1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="_bitLengthTree",d=a.length
if(1>=d)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<d))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){l=s*2
j=l+1
do{i=p.a(A.b(f.p4,e))
h=i.length
if(!(l<h))return A.a(i,l)
g=i[l]
if(!(j<h))return A.a(i,j)
f.W(g&65535,i[j]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=p.a(A.b(f.p4,e))
j=s*2
i=l.length
if(!(j<i))return A.a(l,j)
h=l[j];++j
if(!(j<i))return A.a(l,j)
f.W(h&65535,l[j]&65535);--m}l=p.a(A.b(f.p4,e))
j=l.length
if(32>=j)return A.a(l,32)
i=l[32]
if(33>=j)return A.a(l,33)
f.W(i&65535,l[33]&65535)
f.W(m-3,2)}else{l=f.p4
if(m<=10){l=p.a(A.b(l,e))
j=l.length
if(34>=j)return A.a(l,34)
i=l[34]
if(35>=j)return A.a(l,35)
f.W(i&65535,l[35]&65535)
f.W(m-3,3)}else{l=p.a(A.b(l,e))
j=l.length
if(36>=j)return A.a(l,36)
i=l[36]
if(37>=j)return A.a(l,37)
f.W(i&65535,l[37]&65535)
f.W(m-11,7)}}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
hS(a,b,c){var s=this,r="_pending"
if(c===0)return
B.d.Z(A.b(s.f,"_pendingBuffer"),A.b(s.x,r),A.b(s.x,r)+c,a,b)
s.x=A.b(s.x,r)+c},
ac(a){var s=A.b(this.f,"_pendingBuffer"),r=A.b(this.x,"_pending")
this.x=r+1
if(r>>>0!==r||r>=s.length)return A.a(s,r)
s[r]=a},
bd(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.W(q&65535,b[s]&65535)},
W(a,b){var s=this,r="_numValidBits",q="_bitBuffer",p=A.b(s.a0,r),o=s.aa
if(p>16-b){p=(A.b(o,q)|B.a.D(a,A.b(s.a0,r))&65535)>>>0
s.aa=p
p=A.b(p,q)
s.ac(p)
s.ac(A.a6(p,8))
s.aa=A.a6(a,16-A.b(s.a0,r))
s.a0=A.b(s.a0,r)+(b-16)}else{s.aa=(A.b(o,q)|B.a.D(a,A.b(s.a0,r))&65535)>>>0
s.a0=A.b(s.a0,r)+b}},
bt(a,b){var s,r,q,p=this,o="_pendingBuffer",n="_lastLit",m="_dynamicLengthTree",l="_matches",k="_dynamicDistTree",j=A.b(p.f,o),i=A.b(p.a9,"_dbuf")+A.b(p.a_,n)*2,h=A.a6(a,8)
if(!(i>=0&&i<j.length))return A.a(j,i)
j[i]=h
h=A.b(p.f,o)
i=A.b(p.a9,"_dbuf")+A.b(p.a_,n)*2+1
if(!(i>=0&&i<h.length))return A.a(h,i)
h[i]=a
i=A.b(p.f,o)
h=A.b(p.y1,"_lbuf")+A.b(p.a_,n)
if(!(h>=0&&h<i.length))return A.a(i,h)
i[h]=b
p.a_=A.b(p.a_,n)+1
if(a===0){j=A.b(p.p2,m)
i=b*2
if(!(i>=0&&i<j.length))return A.a(j,i)
j[i]=j[i]+1}else{p.aQ=A.b(p.aQ,l)+1
j=A.b(p.p2,m)
if(!(b>=0&&b<256))return A.a(B.S,b)
i=(B.S[b]+256+1)*2
if(!(i<j.length))return A.a(j,i)
j[i]=j[i]+1
i=A.b(p.p3,k)
j=A.l5(a-1)*2
if(!(j<i.length))return A.a(i,j)
i[j]=i[j]+1}if((A.b(p.a_,n)&8191)===0&&A.b(p.ok,"_level")>2){s=A.b(p.a_,n)*8
j=A.b(p.k1,"_strStart")
i=A.b(p.fx,"_blockStart")
for(r=0;r<30;++r){h=A.b(p.p3,k)
q=r*2
if(!(q<h.length))return A.a(h,q)
s+=h[q]*(5+B.u[r])}s=A.a6(s,3)
if(A.b(p.aQ,l)<A.b(p.a_,n)/2&&s<(j-i)/2)return!0}return A.b(p.a_,n)===A.b(p.y2,"_litBufferSize")-1},
dk(a,b){var s,r,q,p,o,n,m,l=this,k="_lastLit",j="_pendingBuffer",i=t.L
i.a(a)
i.a(b)
if(A.b(l.a_,k)!==0){s=0
do{i=A.b(l.f,j)
r=s*2
q=A.b(l.a9,"_dbuf")+r
if(!(q>=0&&q<i.length))return A.a(i,q)
q=i[q]
i=A.b(l.f,j)
r=A.b(l.a9,"_dbuf")+r+1
if(!(r>=0&&r<i.length))return A.a(i,r)
p=q<<8&65280|i[r]&255
r=A.b(l.f,j)
i=A.b(l.y1,"_lbuf")+s
if(!(i>=0&&i<r.length))return A.a(r,i)
o=r[i]&255;++s
if(p===0)l.bd(o,a)
else{n=B.S[o]
l.bd(n+256+1,a)
if(!(n<29))return A.a(B.U,n)
m=B.U[n]
if(m!==0)l.W(o-B.dV[n],m);--p
n=A.l5(p)
l.bd(n,b)
if(!(n<30))return A.a(B.u,n)
m=B.u[n]
if(m!==0)l.W(p-B.cl[n],m)}}while(s<A.b(l.a_,k))}l.bd(256,a)
if(513>=a.length)return A.a(a,513)
l.aC=a[513]},
eL(){var s,r,q,p,o,n=this,m="_dynamicLengthTree"
for(s=0,r=0;s<7;){q=A.b(n.p2,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
r+=q[p];++s}for(o=0;s<128;){q=A.b(n.p2,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
o+=q[p];++s}for(;s<256;){q=A.b(n.p2,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
r+=q[p];++s}n.y=r>A.a6(o,2)?0:1},
eb(){var s,r=this,q="_numValidBits",p="_bitBuffer"
if(A.b(r.a0,q)===16){s=A.b(r.aa,p)
r.ac(s)
r.ac(A.a6(s,8))
r.a0=r.aa=0}else if(A.b(r.a0,q)>=8){r.ac(A.b(r.aa,p))
r.aa=A.a6(A.b(r.aa,p),8)
r.a0=A.b(r.a0,q)-8}},
de(){var s,r=this,q="_numValidBits",p="_bitBuffer"
if(A.b(r.a0,q)>8){s=A.b(r.aa,p)
r.ac(s)
r.ac(A.a6(s,8))}else if(A.b(r.a0,q)>0)r.ac(A.b(r.aa,p))
r.a0=r.aa=0},
aO(a){var s,r,q,p=this,o="_blockStart",n="_strStart",m=A.b(p.fx,o)>=0?A.b(p.fx,o):-1,l=A.b(p.k1,n)-A.b(p.fx,o)
if(A.b(p.ok,"_level")>0){if(p.y===2)p.eL()
p.R8.ci(p)
p.RG.ci(p)
s=p.fz()
r=A.a6(A.b(p.a6,"_optimalLen")+3+7,3)
q=A.a6(A.b(p.aq,"_staticLen")+3+7,3)
if(q<=r)r=q}else{q=l+5
r=q
s=0}if(l+4<=r&&m!==-1)p.e6(m,l,a)
else if(q===r){p.W(2+(a?1:0),3)
p.dk(B.G,B.ai)}else{p.W(4+(a?1:0),3)
p.im(A.b(p.R8.b,"maxCode")+1,A.b(p.RG.b,"maxCode")+1,s+1)
p.dk(A.b(p.p2,"_dynamicLengthTree"),A.b(p.p3,"_dynamicDistTree"))}p.dI()
if(a)p.de()
p.fx=A.b(p.k1,n)
p.bX()},
h1(a){var s,r,q=this,p="_pendingBufferSize",o="_lookAhead",n="_strStart",m="_blockStart",l=65535>A.b(q.r,p)-5?A.b(q.r,p)-5:65535
for(s=a===0;!0;){if(A.b(q.k3,o)<=1){q.cu()
if(A.b(q.k3,o)===0&&s)return 0
if(A.b(q.k3,o)===0)break}q.k1=A.b(q.k1,n)+A.b(q.k3,o)
q.k3=0
r=A.b(q.fx,m)+l
if(A.b(q.k1,n)>=r){q.k3=A.b(q.k1,n)-r
q.k1=r
q.aO(!1)}if(A.b(q.k1,n)-A.b(q.fx,m)>=A.b(q.as,"_windowSize")-262)q.aO(!1)}s=a===4
q.aO(s)
return s?3:1},
e6(a,b,c){var s,r=this
r.W(c?1:0,3)
r.de()
r.aC=8
r.ac(b)
r.ac(A.a6(b,8))
s=(~b>>>0)+65536&65535
r.ac(s)
r.ac(A.a6(s,8))
r.hS(A.b(r.ay,"_window"),a,b)},
cu(){var s,r,q,p,o,n,m,l=this,k="_lookAhead",j="_strStart",i="_windowSize",h="_window",g=l.c
do{s=A.b(l.ch,"_actualWindowSize")-A.b(l.k3,k)-A.b(l.k1,j)
if(s===0&&A.b(l.k1,j)===0&&A.b(l.k3,k)===0)s=A.b(l.as,i)
else if(A.b(l.k1,j)>=A.b(l.as,i)+A.b(l.as,i)-262){B.d.Z(A.b(l.ay,h),0,A.b(l.as,i),A.b(l.ay,h),A.b(l.as,i))
l.k2=l.k2-A.b(l.as,i)
l.k1=A.b(l.k1,j)-A.b(l.as,i)
l.fx=A.b(l.fx,"_blockStart")-A.b(l.as,i)
r=A.b(l.db,"_hashSize")
q=r
do{p=A.b(l.cx,"_head");--r
if(!(r>=0&&r<p.length))return A.a(p,r)
o=p[r]&65535
p=A.b(l.cx,"_head")
n=o>=A.b(l.as,i)?o-A.b(l.as,i):0
if(!(r<p.length))return A.a(p,r)
p[r]=n}while(--q,q!==0)
r=A.b(l.as,i)
q=r
do{p=A.b(l.CW,"_prev");--r
if(!(r>=0&&r<p.length))return A.a(p,r)
o=p[r]&65535
p=A.b(l.CW,"_prev")
n=o>=A.b(l.as,i)?o-A.b(l.as,i):0
if(!(r<p.length))return A.a(p,r)
p[r]=n}while(--q,q!==0)
s+=A.b(l.as,i)}if(g.gbB())return
q=l.hV(A.b(l.ay,h),A.b(l.k1,j)+A.b(l.k3,k),s)
p=A.b(l.k3,k)+q
l.k3=p
if(A.b(p,k)>=3){p=A.b(l.ay,h)
n=A.b(l.k1,j)
if(n>>>0!==n||n>=p.length)return A.a(p,n)
n=p[n]&255
l.cy=n
n=B.a.D(A.b(n,"_insertHash"),A.b(l.fr,"_hashShift"))
p=A.b(l.ay,h)
m=A.b(l.k1,j)+1
if(!(m>=0&&m<p.length))return A.a(p,m)
l.cy=((n^p[m]&255)&A.b(l.dy,"_hashMask"))>>>0}}while(A.b(l.k3,k)<262&&!g.gbB())},
h_(a){var s,r,q,p,o,n,m,l=this,k="_lookAhead",j="_insertHash",i="_hashShift",h="_window",g="_strStart",f="_hashMask",e="_head",d="_windowMask",c="_matchLength"
for(s=a===0,r=0;!0;){if(A.b(l.k3,k)<262){l.cu()
if(A.b(l.k3,k)<262&&s)return 0
if(A.b(l.k3,k)===0)break}if(A.b(l.k3,k)>=3){q=B.a.D(A.b(l.cy,j),A.b(l.fr,i))
p=A.b(l.ay,h)
o=A.b(l.k1,g)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
l.cy=((q^p[o]&255)&A.b(l.dy,f))>>>0
o=A.b(l.cx,e)
p=A.b(l.cy,j)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(l.CW,"_prev")
o=(A.b(l.k1,g)&A.b(l.ax,d))>>>0
q=A.b(l.cx,e)
n=A.b(l.cy,j)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(l.cx,e)
o=A.b(l.cy,j)
p=A.b(l.k1,g)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}if(r!==0&&(A.b(l.k1,g)-r&65535)<=A.b(l.as,"_windowSize")-262)if(A.b(l.p1,"_strategy")!==2)l.fy=l.dM(r)
if(A.b(l.fy,c)>=3){m=l.bt(A.b(l.k1,g)-l.k2,A.b(l.fy,c)-3)
l.k3=A.b(l.k3,k)-A.b(l.fy,c)
q=A.b(l.fy,c)
p=$.aj.b
if(p==null?$.aj==null:p===$.aj)A.A(A.fT($.aj.a))
if(q<=p.b&&A.b(l.k3,k)>=3){l.fy=A.b(l.fy,c)-1
do{l.k1=A.b(l.k1,g)+1
q=B.a.D(A.b(l.cy,j),A.b(l.fr,i))
p=A.b(l.ay,h)
o=A.b(l.k1,g)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
l.cy=((q^p[o]&255)&A.b(l.dy,f))>>>0
o=A.b(l.cx,e)
p=A.b(l.cy,j)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(l.CW,"_prev")
o=(A.b(l.k1,g)&A.b(l.ax,d))>>>0
q=A.b(l.cx,e)
n=A.b(l.cy,j)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(l.cx,e)
o=A.b(l.cy,j)
p=A.b(l.k1,g)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}while(q=A.b(l.fy,c)-1,l.fy=q,q!==0)
l.k1=A.b(l.k1,g)+1}else{l.k1=A.b(l.k1,g)+A.b(l.fy,c)
l.fy=0
q=A.b(l.ay,h)
p=A.b(l.k1,g)
if(p>>>0!==p||p>=q.length)return A.a(q,p)
p=q[p]&255
l.cy=p
p=B.a.D(A.b(p,j),A.b(l.fr,i))
q=A.b(l.ay,h)
o=A.b(l.k1,g)+1
if(!(o>=0&&o<q.length))return A.a(q,o)
l.cy=((p^q[o]&255)&A.b(l.dy,f))>>>0}}else{q=A.b(l.ay,h)
p=A.b(l.k1,g)
if(p>>>0!==p||p>=q.length)return A.a(q,p)
m=l.bt(0,q[p]&255)
l.k3=A.b(l.k3,k)-1
l.k1=A.b(l.k1,g)+1}if(m)l.aO(!1)}s=a===4
l.aO(s)
return s?3:1},
h0(a2){var s,r,q,p,o,n,m,l,k=this,j="_lookAhead",i="_insertHash",h="_hashShift",g="_window",f="_strStart",e="_hashMask",d="_head",c="_windowMask",b="_matchLength",a="_prevLength",a0="_strategy",a1="_matchAvailable"
for(s=a2===0,r=0;!0;){if(A.b(k.k3,j)<262){k.cu()
if(A.b(k.k3,j)<262&&s)return 0
if(A.b(k.k3,j)===0)break}if(A.b(k.k3,j)>=3){q=B.a.D(A.b(k.cy,i),A.b(k.fr,h))
p=A.b(k.ay,g)
o=A.b(k.k1,f)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
k.cy=((q^p[o]&255)&A.b(k.dy,e))>>>0
o=A.b(k.cx,d)
p=A.b(k.cy,i)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(k.CW,"_prev")
o=(A.b(k.k1,f)&A.b(k.ax,c))>>>0
q=A.b(k.cx,d)
n=A.b(k.cy,i)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(k.cx,d)
o=A.b(k.cy,i)
p=A.b(k.k1,f)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}q=A.b(k.fy,b)
k.k4=q
k.go=k.k2
k.fy=2
if(r!==0){q=A.b(q,a)
p=$.aj.b
if(p==null?$.aj==null:p===$.aj)A.A(A.fT($.aj.a))
q=q<p.b&&(A.b(k.k1,f)-r&65535)<=A.b(k.as,"_windowSize")-262}else q=!1
if(q){if(A.b(k.p1,a0)!==2)k.fy=k.dM(r)
if(A.b(k.fy,b)<=5)if(A.b(k.p1,a0)!==1)q=A.b(k.fy,b)===3&&A.b(k.k1,f)-k.k2>4096
else q=!0
else q=!1
if(q)k.fy=2}if(A.b(k.k4,a)>=3&&A.b(k.fy,b)<=A.b(k.k4,a)){m=A.b(k.k1,f)+A.b(k.k3,j)-3
l=k.bt(A.b(k.k1,f)-1-A.b(k.go,"_prevMatch"),A.b(k.k4,a)-3)
k.k3=A.b(k.k3,j)-(A.b(k.k4,a)-1)
k.k4=A.b(k.k4,a)-2
do{q=A.b(k.k1,f)+1
k.k1=q
if(q<=m){q=B.a.D(A.b(k.cy,i),A.b(k.fr,h))
p=A.b(k.ay,g)
o=A.b(k.k1,f)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
k.cy=((q^p[o]&255)&A.b(k.dy,e))>>>0
o=A.b(k.cx,d)
p=A.b(k.cy,i)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(k.CW,"_prev")
o=(A.b(k.k1,f)&A.b(k.ax,c))>>>0
q=A.b(k.cx,d)
n=A.b(k.cy,i)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(k.cx,d)
o=A.b(k.cy,i)
p=A.b(k.k1,f)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}}while(q=A.b(k.k4,a)-1,k.k4=q,q!==0)
k.id=0
k.fy=2
k.k1=A.b(k.k1,f)+1
if(l)k.aO(!1)}else if(A.b(k.id,a1)!==0){q=A.b(k.ay,g)
p=A.b(k.k1,f)-1
if(!(p>=0&&p<q.length))return A.a(q,p)
if(k.bt(0,q[p]&255))k.aO(!1)
k.k1=A.b(k.k1,f)+1
k.k3=A.b(k.k3,j)-1}else{k.id=1
k.k1=A.b(k.k1,f)+1
k.k3=A.b(k.k3,j)-1}}if(A.b(k.id,a1)!==0){s=A.b(k.ay,g)
q=A.b(k.k1,f)-1
if(!(q>=0&&q<s.length))return A.a(s,q)
k.bt(0,s[q]&255)
k.id=0}s=a2===4
k.aO(s)
return s?3:1},
dM(a2){var s,r,q,p,o,n=this,m="_strStart",l="_prevLength",k="_windowSize",j="_window",i="_lookAhead",h=$.aj.br().d,g=A.b(n.k1,m),f=A.b(n.k4,l),e=A.b(n.k1,m)>A.b(n.as,k)-262?A.b(n.k1,m)-(A.b(n.as,k)-262):0,d=$.aj.br().c,c=A.b(n.ax,"_windowMask"),b=A.b(n.k1,m)+258,a=A.b(n.ay,j),a0=g+f,a1=a0-1
if(!(a1>=0&&a1<a.length))return A.a(a,a1)
s=a[a1]
a1=A.b(n.ay,j)
if(!(a0>=0&&a0<a1.length))return A.a(a1,a0)
r=a1[a0]
if(A.b(n.k4,l)>=$.aj.br().a)h=h>>>2
if(d>A.b(n.k3,i))d=A.b(n.k3,i)
q=b-258
do{c$0:{a=A.b(n.ay,j)
a0=a2+f
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
if(a[a0]===r){a=A.b(n.ay,j);--a0
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
if(a[a0]===s){a=A.b(n.ay,j)
if(!(a2>=0&&a2<a.length))return A.a(a,a2)
a=a[a2]
a0=A.b(n.ay,j)
if(!(g>=0&&g<a0.length))return A.a(a0,g)
if(a===a0[g]){a=A.b(n.ay,j)
p=a2+1
if(!(p<a.length))return A.a(a,p)
a=a[p]
a0=A.b(n.ay,j)
a1=g+1
if(!(a1<a0.length))return A.a(a0,a1)
a1=a!==a0[a1]
a=a1}else{p=a2
a=!0}}else{p=a2
a=!0}}else{p=a2
a=!0}if(a)break c$0
g+=2;++p
do{a=A.b(n.ay,j);++g
if(!(g>=0&&g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p>=0&&p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
if(a===a0[p]){a=A.b(n.ay,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.ay,j);++p
if(!(p<a0.length))return A.a(a0,p)
a=a===a0[p]&&g<b}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}while(a)
o=258-(b-g)
if(o>f){n.k2=a2
if(o>=d){f=o
break}a=A.b(n.ay,j)
a0=q+o
a1=a0-1
if(!(a1>=0&&a1<a.length))return A.a(a,a1)
s=a[a1]
a1=A.b(n.ay,j)
if(!(a0<a1.length))return A.a(a1,a0)
r=a1[a0]
f=o}g=q}a=A.b(n.CW,"_prev")
a0=a2&c
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a2=a[a0]&65535
if(a2>e){--h
a=h!==0}else a=!1}while(a)
if(f<=A.b(n.k3,i))return f
return A.b(n.k3,i)},
hV(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gbB())return 0
s=o.c.T(c)
r=s.gu(s)
if(r===0)return 0
q=s.R()
p=q.length
if(r>p)r=p
B.d.b4(a,b,b+r,q)
o.b+=r
o.a=A.aD(q,o.a)
return r},
bX(){var s=this,r="_pending",q=A.b(s.x,r)
s.d.ca(A.b(s.f,"_pendingBuffer"),q)
s.w=A.b(s.w,"_pendingOut")+q
q=A.b(s.x,r)-q
s.x=q
if(A.b(q,r)===0)s.w=0},
hh(a){switch(a){case 0:return new A.am(0,0,0,0,0)
case 1:return new A.am(4,4,8,4,1)
case 2:return new A.am(4,5,16,8,1)
case 3:return new A.am(4,6,32,32,1)
case 4:return new A.am(4,4,16,16,2)
case 5:return new A.am(8,16,32,32,2)
case 6:return new A.am(8,16,128,128,2)
case 7:return new A.am(8,32,128,256,2)
case 8:return new A.am(32,128,258,1024,2)
case 9:return new A.am(32,258,258,4096,2)}throw A.d(A.ai("Invalid Deflate parameter"))}}
A.am.prototype={}
A.ik.prototype={
he(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="staticDesc",a="_heapMax",a0="_optimalLen",a1=A.b(c.a,"dynamicTree"),a2=A.b(c.c,b).a,a3=A.b(c.c,b).b,a4=A.b(c.c,b).c,a5=A.b(c.c,b).e
for(s=a6.ry,r=0;r<=15;++r)s[r]=0
q=a6.to
p=A.b(a6.x2,a)
if(p>>>0!==p||p>=573)return A.a(q,p)
p=q[p]*2+1
o=a1.length
if(!(p>=0&&p<o))return A.a(a1,p)
a1[p]=0
for(n=A.b(a6.x2,a)+1,p=a2!=null,m=a3.length,l=0;n<573;++n){if(!(n>=0))return A.a(q,n)
k=q[n]
j=k*2
i=j+1
if(!(i>=0&&i<o))return A.a(a1,i)
h=a1[i]*2+1
if(!(h<o))return A.a(a1,h)
r=a1[h]+1
if(r>a5){++l
r=a5}a1[i]=r
if(k>A.b(c.b,"maxCode"))continue
if(!(r<16))return A.a(s,r)
s[r]=s[r]+1
if(k>=a4){h=k-a4
if(!(h>=0&&h<m))return A.a(a3,h)
g=a3[h]}else g=0
if(!(j>=0&&j<o))return A.a(a1,j)
f=a1[j]
a6.a6=A.b(a6.a6,a0)+f*(r+g)
if(p){j=A.b(a6.aq,"_staticLen")
if(!(i<a2.length))return A.a(a2,i)
a6.aq=j+f*(a2[i]+g)}}if(l===0)return
r=a5-1
do{e=r
while(!0){if(!(e>=0&&e<16))return A.a(s,e)
p=s[e]
if(!(p===0))break;--e}s[e]=p-1
p=e+1
if(!(p<16))return A.a(s,p)
s[p]=s[p]+2
if(!(a5<16))return A.a(s,a5)
s[a5]=s[a5]-1
l-=2}while(l>0)
for(r=a5;r!==0;--r){if(!(r>=0))return A.a(s,r)
k=s[r]
for(;k!==0;){--n
if(!(n>=0&&n<573))return A.a(q,n)
d=q[n]
if(d>A.b(c.b,"maxCode"))continue
p=d*2
m=p+1
if(!(m>=0&&m<o))return A.a(a1,m)
if(a1[m]!==r){j=A.b(a6.a6,a0)
i=a1[m]
if(!(p>=0&&p<o))return A.a(a1,p)
a6.a6=j+(r-i)*a1[p]
a1[m]=r}--k}}},
ci(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="staticDesc",d="_heapLen",c="_heapMax",b=A.b(f.a,"dynamicTree"),a=A.b(f.c,e).a,a0=A.b(f.c,e).d
a1.x1=0
a1.x2=573
for(s=b.length,r=a1.to,q=a1.xr,p=0,o=-1;p<a0;++p){n=p*2
if(!(n<s))return A.a(b,n)
if(b[n]!==0){n=A.b(a1.x1,d)+1
a1.x1=n
if(!(n>=0&&n<573))return A.a(r,n)
r[n]=p
if(!(p<573))return A.a(q,p)
q[p]=0
o=p}else{++n
if(!(n<s))return A.a(b,n)
b[n]=0}}for(n=a!=null;A.b(a1.x1,d)<2;){m=A.b(a1.x1,d)+1
a1.x1=m
if(o<2){++o
l=o}else l=0
if(!(m>=0&&m<573))return A.a(r,m)
r[m]=l
m=l*2
if(!(m>=0&&m<s))return A.a(b,m)
b[m]=1
q[l]=0
a1.a6=A.b(a1.a6,"_optimalLen")-1
if(n){k=A.b(a1.aq,"_staticLen");++m
if(!(m<a.length))return A.a(a,m)
a1.aq=k-a[m]}}f.b=o
for(p=B.a.G(A.b(a1.x1,d),2);p>=1;--p)a1.cH(b,p)
l=a0
do{p=r[1]
n=A.b(a1.x1,d)
a1.x1=n-1
if(n>>>0!==n||n>=573)return A.a(r,n)
r[1]=r[n]
a1.cH(b,1)
j=r[1]
n=A.b(a1.x2,c)-1
a1.x2=n
if(!(n>=0&&n<573))return A.a(r,n)
r[n]=p
n=A.b(n,c)-1
a1.x2=n
if(!(n>=0&&n<573))return A.a(r,n)
r[n]=j
n=l*2
m=p*2
if(!(m>=0&&m<s))return A.a(b,m)
k=b[m]
i=j*2
if(!(i>=0&&i<s))return A.a(b,i)
h=b[i]
if(!(n<s))return A.a(b,n)
b[n]=k+h
if(!(p>=0&&p<573))return A.a(q,p)
h=q[p]
if(!(j>=0&&j<573))return A.a(q,j)
k=q[j]
n=h>k?h:k
if(!(l<573))return A.a(q,l)
q[l]=n+1;++m;++i
if(!(i<s))return A.a(b,i)
b[i]=l
if(!(m<s))return A.a(b,m)
b[m]=l
g=l+1
r[1]=l
a1.cH(b,1)
if(A.b(a1.x1,d)>=2){l=g
continue}else break}while(!0)
s=A.b(a1.x2,c)-1
a1.x2=s
q=r[1]
if(!(s>=0&&s<573))return A.a(r,s)
r[s]=q
f.he(a1)
A.nS(b,o,a1.ry)}}
A.eU.prototype={}
A.fy.prototype={
f5(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){r=a[s]
if(r>h.b)h.b=r
if(r<h.c)h.c=r}q=B.a.A(1,h.b)
h.a=new Uint32Array(q)
for(p=1,o=0,n=2;p<=h.b;){for(r=p<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(a[s]===p){for(m=o,l=0,k=0;k<p;++k){l=(l<<1|m&1)>>>0
m=m>>>1}for(j=(r|s)>>>0,k=l;k<q;k+=n){i=A.b(h.a,"table")
if(!(k>=0&&k<i.length))return A.a(i,k)
i[k]=j}++o}}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.dO.prototype={
dH(){var s,r,q=this
q.e=q.d=0
if(!q.b)return
for(s=q.a;r=A.b(s,"input"),r.b<r.c+A.b(r.e,"_length");)if(!q.hB())break},
hB(){var s,r,q,p,o=this,n="input",m=o.a
if(A.b(m,n).gbB())return!1
s=o.ad(3)
r=s>>>1
switch(r){case 0:o.e=o.d=0
q=o.ad(16)
p=o.ad(16)
if(q!==0&&q!==(p^65535)>>>0)A.A(A.ai("Invalid uncompressed block header"))
p=A.b(m,n)
if(q>p.gu(p))A.A(A.ai("Input buffer is broken"))
o.c.jC(A.b(m,n).T(q))
break
case 1:o.dr(o.r,o.w)
break
case 2:o.hC()
break
default:throw A.d(A.ai("unknown BTYPE: "+r))}return(s&1)===0},
ad(a){var s,r,q,p,o=this
if(a===0)return 0
for(s=o.a;r=o.e,r<a;){r=A.b(s,"input")
if(r.b>=r.c+A.b(r.e,"_length"))throw A.d(A.ai("input buffer is broken"))
r=A.b(s,"input")
q=r.a
r=r.b++
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
q=o.d
p=o.e
o.d=(q|B.a.D(r,p))>>>0
o.e=p+8}s=o.d
q=B.a.A(1,a)
o.d=B.a.K(s,a)
o.e=r-a
return(s&q-1)>>>0},
cI(a){var s,r,q,p,o,n,m=this,l=A.b(a.a,"table"),k=a.b
for(s=m.a;m.e<k;){r=A.b(s,"input")
if(r.b>=r.c+A.b(r.e,"_length"))break
r=A.b(s,"input")
q=r.a
r=r.b++
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
q=m.d
p=m.e
m.d=(q|B.a.D(r,p))>>>0
m.e=p+8}s=m.d
r=(s&B.a.A(1,k)-1)>>>0
if(!(r<l.length))return A.a(l,r)
o=l[r]
n=o>>>16
m.d=B.a.K(s,n)
m.e-=n
return o&65535},
hC(){var s,r,q,p,o,n,m,l,k=this,j=k.ad(5)+257,i=k.ad(5)+1,h=k.ad(4)+4,g=new Uint8Array(19)
for(s=0;s<h;++s){if(!(s<19))return A.a(B.v,s)
r=B.v[s]
q=k.ad(3)
if(!(r<19))return A.a(g,r)
g[r]=q}p=A.bQ(g)
o=new Uint8Array(j)
n=new Uint8Array(i)
m=k.dn(j,p,o)
l=k.dn(i,p,n)
k.dr(A.bQ(m),A.bQ(l))},
dr(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.cI(a)
if(r>285)throw A.d(A.ai("Invalid Huffman Code "+r))
if(r===256)break
if(r<256){s.E(r&255)
continue}q=r-257
if(!(q>=0))return A.a(B.an,q)
p=B.an[q]+l.ad(B.cZ[q])
o=l.cI(b)
if(o<=29){n=B.d9[o]+l.ad(B.u[o])
for(m=-n;p>n;){s.al(s.O(m))
p-=n}if(p===n)s.al(s.O(m))
else s.al(s.d3(m,p-n))}else throw A.d(A.ai("Illegal unused distance symbol"))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
m=A.b(s,"input")
if(--m.b<0)m.b=0}},
dn(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.cI(b)
switch(p){case 16:o=3+l.ad(2)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=r}break
case 17:o=3+l.ad(3)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
case 18:o=11+l.ad(7)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
default:if(p>15)throw A.d(A.ai("Invalid Huffman Code: "+p))
m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=p
q=m
r=p
break}}return c}}
A.hT.prototype={}
A.hS.prototype={}
A.hU.prototype={
ei(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="_windowSize",g="_hashBits",f="_hashSize",e="_litBufferSize",d=t.L
d.a(a)
s=A.h2(1,32768)
s.E(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.E(q)
p=A.p2(a)
o=A.bn(a,1,null,0)
q=A.jA()
n=A.jA()
m=A.jA()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.h2(0,32768)
l=new A.fk(o,i,q,n,m,l,k,j)
if(b==null||b===-1)b=6
if(typeof b!=="number")return b.eK()
if(b<=9)k=!1
else k=!0
if(k)A.A(A.ai("Invalid Deflate parameter"))
$.aj.b=l.hh(b)
l.p2=new Uint16Array(1146)
l.p3=new Uint16Array(122)
l.p4=new Uint16Array(78)
l.at=15
k=B.a.D(1,A.b(15,"_windowBits"))
l.as=k
l.ax=A.b(k,h)-1
l.dx=15
k=B.a.D(1,A.b(15,g))
l.db=k
l.dy=A.b(k,f)-1
l.fr=B.a.G(A.b(l.dx,g)+3-1,3)
k=A.b(l.as,h)
l.ay=new Uint8Array(k*2)
k=A.b(l.as,h)
l.CW=new Uint16Array(k)
k=A.b(l.db,f)
l.cx=new Uint16Array(k)
l.y2=16384
k=A.b(16384,e)
l.f=new Uint8Array(k*4)
l.r=A.b(l.y2,e)*4
l.a9=A.b(l.y2,e)
l.y1=3*A.b(l.y2,e)
l.ok=A.n(b)
l.w=l.x=l.p1=0
l.e=113
l.a=0
q.a=A.b(l.p2,"_dynamicLengthTree")
k=t.bb
q.c=k.a($.m_())
n.a=A.b(l.p3,"_dynamicDistTree")
n.c=k.a($.lZ())
m.a=A.b(l.p4,"_bitLengthTree")
m.c=k.a($.lY())
l.a0=l.aa=0
l.aC=8
l.dI()
l.hu()
l.fZ(4)
l.bX()
s.al(d.a(A.J(i.c.buffer,0,i.a)))
s.am(p)
d=A.J(s.c.buffer,0,s.a)
return d},
iT(a){return this.ei(a,null)}}
A.bN.prototype={
f_(a){var s,r,q,p
if(a!=null&&a.a!=null){s=a.a.length
r=A.c(new Array(s),t.a)
for(q=0;q<s;++q){p=a.a
if(!(q<p.length))return A.a(p,q)
p=p[q]
r[q]=new Uint8Array(p.subarray(0,A.aX(0,null,p.length)))}this.seu(r)}},
seu(a){this.a=t.hc.a(a)}}
A.cf.prototype={
t(a){return"BitmapCompression."+this.b}}
A.fd.prototype={
eA(){return A.e7(["offset",A.b(this.b,"offset"),"fileLength",A.b(this.a,"fileLength"),"fileType",19778],t.N,t.p)}}
A.b_.prototype={
gc8(){var s=this.r
if(s!==40)s=s===124&&this.cx===0
else s=!0
return s},
gaE(a){return Math.abs(this.e)},
d5(a,b){var s=this
if(B.b.ao(A.c([1,4,8],t.t),s.x))s.ji(a)
if(s.r===124){s.ay=a.j()
s.ch=a.j()
s.CW=a.j()
s.cx=a.j()}},
ji(a){var s=this,r=s.at
if(r===0)r=B.a.A(1,s.x)
s.siC(A.km(r,new A.fh(s,a,s.r===12?3:4),t.p).cX(0))},
cJ(a,b){var s,r,q,p
if(!B.a.gbC(this.e)){s=a.q()
r=a.q()
q=a.q()
p=b==null?a.q():b
return A.av(q,r,s,this.gc8()?255:p)}else{q=a.q()
s=a.q()
r=a.q()
p=b==null?a.q():b
return A.av(q,s,r,this.gc8()?255:p)}},
dZ(a){return this.cJ(a,null)},
iQ(a,b){var s,r,q,p,o,n=this
t.aR.a(b)
if(n.cy!=null){s=n.x
if(s===4){r=a.q()
q=B.a.i(r,4)
p=r&15
s=n.cy
if(!(q<s.length))return A.a(s,q)
b.$1(s[q])
s=n.cy
if(!(p<s.length))return A.a(s,p)
b.$1(s[p])
return}else if(s===8){r=a.q()
s=n.cy
if(!(r>=0&&r<s.length))return A.a(s,r)
b.$1(s[r])
return}}s=n.y
if(s===B.K&&n.x===32)return b.$1(n.dZ(a))
else{o=n.x
if(o===32&&s===B.L)return b.$1(n.dZ(a))
else if(o===24)return b.$1(n.cJ(a,255))
else throw A.d(A.f("Unsupported bpp ("+o+") or compression ("+s.t(0)+")."))}},
fE(){switch(this.y.a){case 0:return"BI_BITFIELDS"
case 1:return"none"}},
t(a){var s=this
return A.l8(A.e7(["headerSize",s.r,"width",s.f,"height",s.gaE(s),"planes",s.w,"bpp",s.x,"file",s.d.eA(),"compression",s.fE(),"imageSize",s.z,"xppm",s.Q,"yppm",s.as,"totalColors",s.at,"importantColors",s.ax,"readBottomUp",!B.a.gbC(s.e),"v5redMask",A.iQ(s.ay),"v5greenMask",A.iQ(s.ch),"v5blueMask",A.iQ(s.CW),"v5alphaMask",A.iQ(s.cx)],t.N,t.K),null," ")},
siC(a){this.cy=t.T.a(a)}}
A.fh.prototype={
$1(a){var s
A.n(a)
s=this.c===3?100:null
return this.a.cJ(this.b,s)},
$S:20}
A.dv.prototype={
az(a){var s,r=null
t.L.a(a)
if(!A.fe(A.l(a,!1,r,0)))return r
s=A.l(a,!1,r,0)
this.a=s
return this.b=A.m9(A.b(s,"_input"),r)},
a1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.b(h.a,"_input").d=A.b(h.b.d.b,"offset")
s=h.b
r=s.f
q=B.a.i(r*s.x,3)
p=B.a.N(q,4)
if(p!==0)q+=4-p
o=A.V(r,s.gaE(s),B.f,null,null)
for(n=o.b-1,s=o.a,m=n;m>=0;--m){r=h.b.e
l=!(r===0?1/r<0:r<0)?m:n-m
r=A.b(h.a,"_input")
k=r.O(q)
r.d=r.d+(k.c-k.d)
j={}
for(j.a=0;j.a<s;i={},i.a=j.a,j=i)h.b.iQ(k,new A.fg(j,o,l))}return o},
ae(a){t.L.a(a)
if(!A.fe(A.l(a,!1,null,0)))return null
this.az(a)
return this.a1(0)}}
A.fg.prototype={
$1(a){return this.b.eM(this.a.a++,this.c,a)},
$S:10}
A.fl.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.fo.prototype={}
A.dD.prototype={}
A.cs.prototype={
bD(){return this.r},
ai(a,b,c,d,e){throw A.d(A.f("B44 compression not yet supported."))},
bi(a,b,c){return this.ai(a,b,c,null,null)}}
A.dE.prototype={
gjz(a){return A.b(this.b,"type")},
f0(a){var s=this,r=a.bF()
s.a=r
if(r.length===0){s.a=null
return}s.b=a.j()
a.q()
a.d+=3
s.e=a.j()
s.f=a.j()
switch(A.b(s.b,"type")){case 0:s.c=4
break
case 1:s.c=2
break
case 2:s.c=4
break
default:throw A.d(A.f("EXR Invalid pixel type: "+s.gjz(s)))}}}
A.aJ.prototype={
ai(a,b,c,d,e){throw A.d(A.f("Unsupported compression type"))},
bi(a,b,c){return this.ai(a,b,c,null,null)}}
A.dS.prototype={}
A.dF.prototype={
seq(a){this.c=t.T.a(a)}}
A.fq.prototype={
f1(a){var s,r,q,p,o=this,n="flags",m=A.l(a,!1,null,0)
if(m.j()!==20000630)throw A.d(A.f("File is not an OpenEXR image file."))
s=o.e=m.q()
if(s!==2)throw A.d(A.f("Cannot read version "+s+" image files."))
s=m.ah()
o.f=s
if((A.b(s,n)&4294967289)>>>0!==0)throw A.d(A.f("The file format version number's flag field contains unrecognized flags."))
if((A.b(o.f,n)&16)===0){r=A.kk((A.b(o.f,n)&2)!==0,m)
if(r.f!=null)B.b.v(o.d,r)}else for(s=o.d;!0;){r=A.kk((A.b(o.f,n)&2)!==0,m)
if(r.f==null)break
B.b.v(s,r)}s=o.d
q=s.length
if(q===0)throw A.d(A.f("Error reading image header"))
for(p=0;p<s.length;s.length===q||(0,A.bF)(s),++p)s[p].jh(m)
o.i5(m)},
i5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.d,r=0;r<s.length;++r){q=s[r]
p=q.a
for(o=q.b,n=p.a,m=0;m<o.length;++m){l=o[m]
if(!n.a5(l.a)){k=q.f
k.toString
f.a=k
j=q.r
j.toString
f.b=j
i=l.a
h=A.b(l.b,"type")===0?0:3
g=8*A.b(l.c,"size")
p.bv(new A.cr(i,k,j,h,g,A.kg(k*j,h,g)))}}if(q.cx)f.ig(r,a)
else f.ie(r,a)}},
ig(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=b6.d
if(!(b8<b7.length))return A.a(b7,b8)
s=b7[b8]
r=(A.b(b6.f,"flags")&16)!==0
q=s.ay
p=s.at
o=A.i(b9,null,0)
b7=s.b
n=s.a.a
m=0
l=0
while(!0){k=s.go
k.toString
if(!(m<k))break
j=0
while(!0){k=s.fy
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=s.fx
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=s.fr
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<p.length))return A.a(p,l)
g=p[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
o.d=g[h]
if(r)if(o.j()!==b8)throw A.d(A.f("Invalid Image Data"))
e=o.j()
d=o.j()
o.j()
o.j()
c=o.O(o.j())
o.d=o.d+(c.c-c.d)
g=s.db
g.toString
b=d*g
a=s.cy
a.toString
q.toString
a0=b6.a
if(typeof a0!=="number")return A.z(a0)
a0=b6.b
if(typeof a0!=="number")return A.z(a0)
a1=q.ai(c,e*a,b,a,g)
a2=q.a
a3=q.b
a4=a1.length
a5=b7.length
a6=0
a7=0
while(!0){if(a7<a3){g=b6.b
if(typeof g!=="number")return A.z(g)
g=b<g}else g=!1
if(!g)break
for(a8=0;a8<a5;++a8){if(!(a8<b7.length))return A.a(b7,a8)
a9=b7[a8]
g=n.p(0,a9.a).f.buffer
b0=new Uint8Array(g,0)
if(a6>=a4)break
g=s.cy
g.toString
b1=e*g
for(g=b0.length,b2=0;b2<a2;++b2,++b1)for(b3=0;b3<A.b(a9.c,"size");++b3,a6=b4){a=s.f
a.toString
if(b1<a){a0=s.r
a0.toString
a0=b<a0}else a0=!1
b4=a6+1
if(a0){b5=(b*a+b1)*A.b(a9.c,"size")+b3
if(!(a6>=0&&a6<a4))return A.a(a1,a6)
a=a1[a6]
if(!(b5>=0&&b5<g))return A.a(b0,b5)
b0[b5]=a}}}++a7;++b}++f;++h}++i}++j;++l}++m}},
ie(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this.d
if(!(b0<a9.length))return A.a(a9,b0)
s=a9[b0]
r=(A.b(this.f,"flags")&16)!==0
q=s.ay
a9=s.at
if(0>=a9.length)return A.a(a9,0)
p=a9[0]
o=s.ch
a9=s.b
n=a9.length
m=new Uint32Array(n)
l=A.i(b1,null,0)
for(k=p.length,j=s.a.a,i=q!=null,h=0,g=0;g<k;++g){l.d=p[g]
if(r)if(l.j()!==b0)throw A.d(A.f("Invalid Image Data"))
f=l.j()
e=$.B()
e[0]=f
f=$.Q()
if(0>=f.length)return A.a(f,0)
e[0]=l.j()
if(0>=f.length)return A.a(f,0)
d=l.O(f[0])
l.d=l.d+(d.c-d.d)
c=i?q.bi(d,0,h):d.R()
b=c.length
a=a9.length
o.toString
a0=0
while(!0){if(a0<o){f=this.b
if(typeof f!=="number")return A.z(f)
f=h<f}else f=!1
if(!f)break
f=s.CW
if(!(h>=0&&h<f.length))return A.a(f,h)
a1=f[h]
if(a1>=b)break
for(a2=0;a2<a;++a2){if(!(a2<a9.length))return A.a(a9,a2)
a3=a9[a2]
f=j.p(0,a3.a).f.buffer
a4=new Uint8Array(f,0)
if(a1>=b)break
f=a4.length
a5=0
while(!0){e=s.f
e.toString
if(!(a5<e))break
for(a6=0;a6<A.b(a3.c,"size");++a6,a1=a7){if(!(a2<n))return A.a(m,a2)
e=m[a2]
if(!(a2<n))return A.a(m,a2)
m[a2]=e+1
a7=a1+1
if(!(a1>=0&&a1<b))return A.a(c,a1)
a8=c[a1]
if(!(e<f))return A.a(a4,e)
a4[e]=a8}++a5}}++a0;++h}}}}
A.dG.prototype={
f2(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="chromaticities",a6="dataWindow",a7="Unknown LevelMode format.",a8="_bytesPerLine"
for(s=a4.c,r=t.t,q=t.L,p=a4.b;!0;){o=b0.bF()
if(o.length===0)break
b0.bF()
n=b0.O(b0.j())
b0.d=b0.d+(n.c-n.d)
s.h(0,o,new A.dD())
switch(o){case"channels":for(;!0;){m=new A.dE()
m.f0(n)
if(m.a==null)break
B.b.v(p,m)}break
case"chromaticities":l=new Float32Array(8)
a4.Q=l
l=A.b(l,a5)
k=n.j()
j=$.B()
j[0]=k
k=$.bg()
if(0>=k.length)return A.a(k,0)
i=k[0]
if(0>=l.length)return A.a(l,0)
l[0]=i
i=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
l=k[0]
if(1>=i.length)return A.a(i,1)
i[1]=l
l=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
i=k[0]
if(2>=l.length)return A.a(l,2)
l[2]=i
i=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
l=k[0]
if(3>=i.length)return A.a(i,3)
i[3]=l
l=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
i=k[0]
if(4>=l.length)return A.a(l,4)
l[4]=i
i=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
l=k[0]
if(5>=i.length)return A.a(i,5)
i[5]=l
l=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
i=k[0]
if(6>=l.length)return A.a(l,6)
l[6]=i
i=A.b(a4.Q,a5)
j[0]=n.j()
if(0>=k.length)return A.a(k,0)
k=k[0]
if(7>=i.length)return A.a(i,7)
i[7]=k
break
case"compression":l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a4.as=k
if(k>7)throw A.d(A.f("EXR Invalid compression type"))
break
case"dataWindow":l=n.j()
k=$.B()
k[0]=l
l=$.Q()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
i=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
h=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
a4.sfe(q.a(A.c([j,i,h,l[0]],r)))
l=J.o(A.b(a4.e,a6),2)
h=J.o(A.b(a4.e,a6),0)
if(typeof l!=="number")return l.cb()
if(typeof h!=="number")return A.z(h)
a4.scY(0,l-h+1)
h=J.o(A.b(a4.e,a6),3)
l=J.o(A.b(a4.e,a6),1)
if(typeof h!=="number")return h.cb()
if(typeof l!=="number")return A.z(l)
a4.saE(0,h-l+1)
break
case"displayWindow":l=n.j()
k=$.B()
k[0]=l
l=$.Q()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
i=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
h=l[0]
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
a4.siS(A.c([j,i,h,l[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":l=n.j()
$.B()[0]=l
l=$.bg()
if(0>=l.length)return A.a(l,0)
break
case"screenWindowCenter":l=n.j()
k=$.B()
k[0]=l
l=$.bg()
if(0>=l.length)return A.a(l,0)
k[0]=n.j()
if(0>=l.length)return A.a(l,0)
break
case"screenWindowWidth":l=n.j()
$.B()[0]=l
l=$.bg()
if(0>=l.length)return A.a(l,0)
break
case"tiles":a4.cy=n.j()
a4.db=n.j()
l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a4.dx=k&15
a4.dy=B.a.i(k,4)&15
break
case"type":g=n.bF()
if(g!=="deepscanline")if(g!=="deeptile")throw A.d(A.f("EXR Invalid type: "+g))
break
default:break}}if(a4.cx){s=J.o(A.b(a4.e,a6),0)
r=J.o(A.b(a4.e,a6),2)
q=J.o(A.b(a4.e,a6),1)
p=J.o(A.b(a4.e,a6),3)
switch(a4.dx){case 0:f=1
break
case 1:s=Math.max(r-s+1,p-q+1)
r=a4.dy
A.n(s)
f=(r===0?a4.bW(s):a4.bS(s))+1
break
case 2:e=r-s+1
f=(a4.dy===0?a4.bW(e):a4.bS(e))+1
break
default:A.A(A.f(a7))
f=0}a4.fy=f
s=J.o(A.b(a4.e,a6),0)
r=J.o(A.b(a4.e,a6),2)
q=J.o(A.b(a4.e,a6),1)
p=J.o(A.b(a4.e,a6),3)
switch(a4.dx){case 0:f=1
break
case 1:s=Math.max(r-s+1,p-q+1)
r=a4.dy
A.n(s)
f=(r===0?a4.bW(s):a4.bS(s))+1
break
case 2:d=p-q+1
f=(a4.dy===0?a4.bW(d):a4.bS(d))+1
break
default:A.A(A.f(a7))
f=0}a4.go=f
if(a4.dx!==2)a4.go=1
s=a4.fy
s.toString
a4.shx(a4.dg(s,J.o(A.b(a4.e,a6),0),J.o(A.b(a4.e,a6),2),a4.cy,a4.dy))
s=a4.go
s.toString
a4.shy(a4.dg(s,J.o(A.b(a4.e,a6),1),J.o(A.b(a4.e,a6),3),a4.db,a4.dy))
s=a4.fC()
a4.id=s
s=A.b(s,"_bytesPerPixel")
r=a4.cy
r.toString
r=s*r
a4.k1=r
a4.ay=A.kd(a4.as,a4,r,a4.db)
b1.a=b1.b=0
r=a4.fy
r.toString
s=a4.go
s.toString
a4.sdS(A.jh(r*s,new A.fr(b1,a4),!0,t.bv))}else{s=a4.r
s.toString
a4.ax=new Uint32Array(s+1)
for(s=p.length,c=0;c<p.length;p.length===s||(0,A.bF)(p),++c){b=p[c]
r=A.b(b.c,"size")
q=a4.f
q.toString
a=B.a.V(r*q,A.b(b.e,"xSampling"))
a0=0
while(!0){r=a4.r
r.toString
if(!(a0<r))break
if(B.a.N(a0+J.o(A.b(a4.e,a6),1),A.b(b.f,"ySampling"))===0){r=A.b(a4.ax,a8)
if(!(a0<r.length))return A.a(r,a0)
r[a0]=r[a0]+a}++a0}}a1=0
a0=0
while(!0){s=a4.r
s.toString
if(!(a0<s))break
s=A.b(a4.ax,a8)
if(!(a0<s.length))return A.a(s,a0)
a1=Math.max(a1,s[a0]);++a0}s=A.kd(a4.as,a4,a1,null)
a4.ay=s
a4.ch=s.bD()
s=A.b(a4.ax,a8).length
a4.CW=new Uint32Array(s)
for(a2=0,a3=0;a3<=A.b(a4.ax,a8).length-1;++a3){s=a4.ch
s.toString
if(B.a.N(a3,s)===0)a2=0
s=a4.CW
if(!(a3<s.length))return A.a(s,a3)
s[a3]=a2
s=A.b(a4.ax,a8)
if(!(a3<s.length))return A.a(s,a3)
a2+=s[a3]}s=a4.r
s.toString
r=a4.ch
r.toString
r=B.a.V(s+r,r)
a4.sdS(A.c([new Uint32Array(r-1)],t.hh))}},
bW(a){var s
for(s=0;a>1;){++s
a=B.a.i(a,1)}return s},
bS(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.i(a,1)}return s+r},
fC(){var s,r,q,p
for(s=this.b,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.bF)(s),++p)q+=A.b(s[p].c,"size")
return q},
dg(a,b,c,d,e){var s,r,q,p,o,n,m=J.aa(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.A(1,q)
o=B.a.V(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.V(n+d-1,d)}return m},
siS(a){t.T.a(a)},
sfe(a){this.e=t.L.a(a)},
scY(a,b){this.f=A.iF(b)},
saE(a,b){this.r=A.iF(b)},
sdS(a){this.at=t.gZ.a(a)},
shx(a){this.fr=t.k.a(a)},
shy(a){this.fx=t.k.a(a)}}
A.fr.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fr,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.fx
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.fy){m.b=0
m.a=r+1}return q},
$S:23}
A.ct.prototype={
jh(a){var s,r,q,p,o,n=this
if(n.cx)for(s=0;s<n.at.length;++s){r=0
while(!0){q=n.at
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
q[r]=a.cT();++r}}else{q=n.at
if(0>=q.length)return A.a(q,0)
p=q[0].length
for(s=0;s<p;++s){q=n.at
if(0>=q.length)return A.a(q,0)
q=q[0]
o=a.cT()
if(!(s<q.length))return A.a(q,s)
q[s]=o}}}}
A.dT.prototype={
f6(a,b,c){var s,r,q,p=this,o=a.b.length,n=J.aa(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.dd()
p.sff(t.q.a(n))
r=p.w
r.toString
q=B.a.G(r*p.x,2)
p.z=new Uint16Array(q)},
bD(){return this.x},
ai(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="_channelData",a5="ySampling",a6="size",a7="nx"
if(b1==null)b1=a3.c.f
if(b2==null)b2=a3.c.ch
b1.toString
s=a9+b1-1
b2.toString
r=b0+b2-1
q=a3.c
p=q.f
p.toString
if(s>p)s=p-1
p=q.r
p.toString
if(r>p)r=p-1
a3.a=s-a9+1
a3.b=r-b0+1
o=q.b
n=o.length
for(m=0,l=0;l<n;++l){if(!(l<o.length))return A.a(o,l)
k=o[l]
q=J.o(A.b(a3.y,a4),l)
q.toString
q.a=m
q.b=A.b(m,"start")
p=A.b(k.e,"xSampling")
j=B.a.V(a9,p)
i=B.a.V(s,p)
p=j*p<a9?0:1
q.c=i-j+p
p=A.b(k.f,a5)
j=B.a.V(b0,p)
i=B.a.V(r,p)
p=j*p<b0?0:1
q.d=i-j+p
q.e=A.b(k.f,a5)
q.f=B.a.G(A.b(k.c,a6),2)
m+=A.b(q.c,a7)*A.b(q.d,"ny")*A.b(q.f,a6)}h=a8.k()
g=a8.k()
if(g>=8192)throw A.d(A.f("Error in header for PIZ-compressed data (invalid bitmap size)."))
f=new Uint8Array(8192)
if(h<=g){e=a8.T(g-h+1)
for(q=e.d,d=e.c-q,p=e.a,c=p.length,b=h,l=0;l<d;++l,b=a){a=b+1
a0=q+l
if(!(a0>=0&&a0<c))return A.a(p,a0)
a0=p[a0]
if(!(b<8192))return A.a(f,b)
f[b]=a0}}a1=new Uint16Array(65536)
a2=a3.il(f,a1)
A.mq(a8,a8.j(),a3.z,m)
for(l=0;l<n;++l){q=J.o(A.b(a3.y,a4),l)
q.toString
for(b=0;b<A.b(q.f,a6);++b){p=a3.z
p.toString
A.mt(p,A.b(q.a,"start")+b,A.b(q.c,a7),A.b(q.f,a6),A.b(q.d,"ny"),A.b(q.c,a7)*A.b(q.f,a6),a2)}}q=a3.z
q.toString
a3.fu(a1,q,m)
q=a3.r
if(q==null){q=a3.w
q.toString
q=a3.r=A.bu(!1,q*a3.x+73728)}q.a=0
for(;b0<=r;++b0)for(l=0;l<n;++l){q=J.o(A.b(a3.y,a4),l)
q.toString
if(B.a.N(b0,A.b(q.e,"ys"))!==0)continue
for(a9=A.b(q.c,a7)*A.b(q.f,a6);a9>0;--a9){p=a3.r
p.toString
c=a3.z
c.toString
a0=A.b(q.b,"end")
q.b=a0+1
if(a0>>>0!==a0||a0>=c.length)return A.a(c,a0)
p.eG(c[a0])}}q=a3.r
return A.J(q.c.buffer,0,q.a)},
bi(a,b,c){return this.ai(a,b,c,null,null)},
fu(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
il(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
sff(a){this.y=t.q.a(a)}}
A.dd.prototype={}
A.dU.prototype={
bD(){return this.x},
ai(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.r.bx(A.bn(t.L.a(a4.R()),1,null,0),!1),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.bu(!1,a1.x*a3)}a3.a=0
s=A.c([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.J(r.buffer,0,null)
if(a7==null)a7=a1.c.f
if(a8==null)a8=a1.c.ch
a7.toString
p=a5+a7-1
a8.toString
o=a6+a8-1
a3=a1.c
n=a3.f
n.toString
if(p>n)p=n-1
n=a3.r
n.toString
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.b
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
if(B.a.N(a6,A.b(h.f,"ySampling"))!==0)continue
g=A.b(h.e,"xSampling")
f=B.a.V(a5,g)
e=B.a.V(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
switch(A.b(h.b,"type")){case 0:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
B.b.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.b.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.E(q[a0])}}break
case 1:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.E(q[a0])}}break
case 2:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
B.b.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.b.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.E(q[a0])}}break}}a3=a1.y
return A.J(a3.c.buffer,0,a3.a)},
bi(a,b,c){return this.ai(a,b,c,null,null)}}
A.dV.prototype={
bD(){return 1},
ai(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bu(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.f
if(a4==null)a4=c.c.ch
a3.toString
s=a1+a3-1
a4.toString
r=a2+a4-1
q=c.c
p=q.f
p.toString
if(s>p)s=p-1
q=q.r
q.toString
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
for(;q=a0.d,q<b;){p=a0.a
a0.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
$.Y()[0]=q
q=$.a3()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.E(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.E(q[p])}}l=A.J(a.c.buffer,0,a.a)
for(k=l.length,j=1;j<k;++j)l[j]=l[j-1]+l[j]-128
b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.G(k+1,2)
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
bi(a,b,c){return this.ai(a,b,c,null,null)}}
A.cu.prototype={
bD(){return this.w},
ai(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.r.bx(A.bn(t.L.a(a.R()),1,null,0),!1)
if(d==null)d=f.c.f
if(a0==null)a0=f.c.ch
d.toString
s=b+d-1
a0.toString
r=c+a0-1
q=f.c
p=q.f
p.toString
if(s>p)s=p-1
q=q.r
q.toString
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
for(o=e.length,n=1;n<o;++n)e[n]=e[n-1]+e[n]-128
q=f.x
if(q==null||q.length!==o)q=f.x=new Uint8Array(o)
p=B.a.G(o+1,2)
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
bi(a,b,c){return this.ai(a,b,c,null,null)}}
A.fp.prototype={
a1(a){var s=this.a
if(s==null)return null
s=s.d
if(!(a<s.length))return A.a(s,a)
return A.p7(s[a].a,1)},
ae(a){var s
t.L.a(a)
s=new A.fq(A.c([],t.dd))
s.f1(a)
this.a=s
return this.a1(0)}}
A.fu.prototype={
d0(a,b,c,d){var s,r=a*3,q=this.d,p=q.length
if(!(r<p))return A.a(q,r)
q[r]=b
s=r+1
if(!(s<p))return A.a(q,s)
q[s]=c
s=r+2
if(!(s<p))return A.a(q,s)
q[s]=d}}
A.cq.prototype={
f3(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.k()
k.b=a.k()
k.c=a.k()
k.d=a.k()
s=a.q()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.kf(B.a.A(1,(s&7)+1))
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
q.d0(r,o,n,p[l])}}k.x=a.d-a.b}}
A.dW.prototype={}
A.dI.prototype={}
A.fv.prototype={
az(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.b=A.l(t.L.a(a),!1,null,0)
i.a=new A.dI(A.c([],t.b))
if(!i.dB())return null
try{for(;o=i.b,n=o.d,n<o.c;){m=o.a
l=o.d=n+1
k=m.length
if(!(n>=0&&n<k))return A.a(m,n)
s=m[n]
switch(s){case 44:r=i.e3()
if(r==null){o=i.a
return o}B.b.v(i.a.r,r)
break
case 33:o.d=l+1
if(!(l>=0&&l<k))return A.a(m,l)
q=m[l]
if(J.aw(q,255)){o=i.b
n=o.a
m=o.d++
if(!(m>=0&&m<n.length))return A.a(n,m)
if(o.M(n[m])==="NETSCAPE2.0"){n=o.a
m=o.d
l=o.d=m+1
k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(m===3&&l===1)o.k()}else i.c3()}else if(J.aw(q,249)){o=i.b
o.toString
i.i1(o)}else i.c3()
break
case 59:o=i.a
return o
default:break}}}catch(j){p=A.a1(j)
A.lD(p)}return i.a},
i1(a){var s,r,q,p,o
a.q()
s=a.q()
a.k()
r=a.q()
a.q()
B.a.i(s,2)
q=a.b5(1,0)
p=q.a
q=q.d
if(!(q>=0&&q<p.length))return A.a(p,q)
if(p[q]===44){++a.d
o=this.e3()
if(o==null)return
if((s&1)!==0){q=o.f
if(q!=null)q.c=r
else{q=this.a.e
if(q!=null)q.c=r}}B.b.v(this.a.r,o)}},
a1(a){var s,r,q,p=this,o=p.b
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
o.toString
o.d=A.b(q.x,"_inputPosition")
o=p.a.r
if(!(a<o.length))return A.a(o,a)
return p.fS(o[a])},
ae(a){if(this.az(t.L.a(a))==null)return null
return this.a1(0)},
e3(){var s,r=this.b
if(r.d>=r.c)return null
s=new A.dW()
s.f3(r);++this.b.d
this.c3()
return s},
fS(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.d==null){h.d=new Uint8Array(256)
h.e=new Uint8Array(4095)
h.f=new Uint8Array(4096)
h.r=new Uint32Array(4096)}s=h.w=h.b.q()
r=B.a.D(1,s)
h.cx=r;++r
h.CW=r
h.ch=r+1;++s
h.ay=s
h.ax=B.a.D(1,s)
h.Q=0
h.at=4098
h.y=h.z=0
h.d[0]=0
s=h.r
s.toString
B.n.af(s,0,4096,4098)
s=A.b(a.c,"width")
r=A.b(a.d,"height")
q=A.b(a.a,"x")
p=h.a
o=p.a
if(typeof o!=="number")return A.z(o)
if(q+s<=o){q=A.b(a.b,"y")
p=h.a
o=p.b
if(typeof o!=="number")return A.z(o)
o=q+r>o
q=o}else q=!0
if(q)return null
n=a.f
n=n!=null?n:p.e
h.x=s*r
m=A.V(s,r,B.f,null,null)
l=new Uint8Array(s)
if(A.b(a.e,"interlaced")){s=A.b(a.b,"y")
for(r=s+r,k=0,j=0;k<4;++k)for(i=s+B.aS[k];i<r;i+=B.bf[k],++j){if(!h.dC(l))return m
h.e9(m,i,n,l)}}else for(i=0;i<r;++i){if(!h.dC(l))return m
h.e9(m,i,n,l)}return m},
e9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(c!=null)for(s=d.length,r=c.d,q=r.length,p=a.x,o=b*a.a,n=p.length,m=0;m<s;++m){l=d[m]
k=l*3
j=l===c.c?0:255
if(!(k<q))return A.a(r,k)
l=r[k]
i=k+1
if(!(i<q))return A.a(r,i)
i=r[i]
h=k+2
if(!(h<q))return A.a(r,h)
h=r[h]
g=B.c.m(B.a.n(j,0,255))
h=B.c.m(B.a.n(h,0,255))
i=B.c.m(B.a.n(i,0,255))
l=B.c.m(B.a.n(l,0,255))
f=o+m
if(!(f>=0&&f<n))return A.a(p,f)
p[f]=(g<<24|h<<16|i<<8|l)>>>0}},
dB(){var s,r,q,p,o,n,m,l,k,j=this,i=j.b.M(6)
if(i!=="GIF87a"&&i!=="GIF89a")return!1
s=j.a
s.toString
s.a=j.b.k()
s=j.a
s.toString
s.b=j.b.k()
r=j.b.q()
j.a.toString
j.b.q();++j.b.d
if((r&128)!==0){s=j.a
s.toString
s.e=A.kf(B.a.A(1,(r&7)+1))
for(q=0;s=j.a.e,q<s.b;++q){p=j.b
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
s.d0(q,n,m,o[k])}}j.a.toString
return!0},
dC(a){var s=this,r=s.x
r.toString
s.x=r-a.length
if(!s.fY(a))return!1
if(s.x===0)s.c3()
return!0},
c3(){var s,r,q,p=this.b
if(p.d>=p.c)return!0
s=p.q()
while(!0){if(s!==0){p=this.b
p=p.d<p.c}else p=!1
if(!p)break
p=this.b
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
s=q[r]}return!0},
fY(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_stack",g="_suffix",f=i.Q
if(f>4095)return!1
s=a.length
if(f!==0){r=0
while(!0){if(!(f!==0&&r<s))break
q=r+1
f=A.b(i.e,h)
p=--i.Q
if(!(p>=0&&p<f.length))return A.a(f,p)
f=f[p]
if(!(r<s))return A.a(a,r)
a[r]=f
f=p
r=q}}else r=0
for(;r<s;){o=i.as=i.fX()
if(o==null)return!1
f=i.CW
if(o===f)return!1
p=i.cx
if(o===p){for(p=i.r,n=0;n<=4095;++n)p[n]=4098
i.ch=f+1
f=i.w+1
i.ay=f
i.ax=B.a.D(1,f)
i.at=4098}else{if(o<p){q=r+1
if(!(r>=0))return A.a(a,r)
a[r]=o
r=q}else{f=i.r
f.toString
if(o>>>0!==o||o>=4096)return A.a(f,o)
if(f[o]===4098)if(o===i.ch-2){o=i.at
f=A.b(i.f,g)
p=i.ch-2
m=A.b(i.e,h)
l=i.Q++
k=i.cB(i.r,i.at,i.cx)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=k
if(!(p>=0&&p<f.length))return A.a(f,p)
f[p]=k}else return!1
n=0
while(!0){j=n+1
if(!(n<=4095&&o>i.cx&&o<=4095))break
f=A.b(i.e,h)
p=i.Q++
m=A.b(i.f,g)
if(!(o>=0&&o<m.length))return A.a(m,o)
m=m[o]
if(!(p>=0&&p<f.length))return A.a(f,p)
f[p]=m
m=i.r
m.toString
if(!(o<4096))return A.a(m,o)
o=m[o]
n=j}if(j>=4095||o>4095)return!1
f=A.b(i.e,h)
p=i.Q++
if(!(p>=0&&p<f.length))return A.a(f,p)
f[p]=o
while(!0){if(!(i.Q!==0&&r<s))break
q=r+1
f=A.b(i.e,h)
p=--i.Q
if(!(p>=0&&p<f.length))return A.a(f,p)
p=f[p]
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=p
r=q}}f=i.at
if(f!==4098){p=i.r
p.toString
m=i.ch-2
if(!(m>=0&&m<4096))return A.a(p,m)
m=p[m]===4098
p=m}else p=!1
if(p){p=i.r
p.toString
m=i.ch-2
if(!(m>=0&&m<4096))return A.a(p,m)
p[m]=f
f=i.as
p=i.f
if(f===m){f=A.b(p,g)
p=i.ch-2
m=i.cB(i.r,i.at,i.cx)
if(!(p>=0&&p<f.length))return A.a(f,p)
f[p]=m}else{f=A.b(p,g)
p=i.ch-2
m=i.r
l=i.as
l.toString
l=i.cB(m,l,i.cx)
if(!(p>=0&&p<f.length))return A.a(f,p)
f[p]=l}}f=i.as
f.toString
i.at=f}}return!0},
fX(){var s,r,q,p,o=this
if(o.ay>12)return null
for(;s=o.z,r=o.ay,s<r;){s=o.fw()
s.toString
r=o.y
q=o.z
o.y=(r|B.a.D(s,q))>>>0
o.z=q+8}q=o.y
if(!(r>=0&&r<13))return A.a(B.ab,r)
p=B.ab[r]
o.y=B.a.K(q,r)
o.z=s-r
s=o.ch
if(s<4097){++s
o.ch=s
s=s>o.ax&&r<12}else s=!1
if(s){o.ax=o.ax<<1>>>0
o.ay=r+1}return q&p},
cB(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
fw(){var s,r,q=this,p=q.d,o=p[0]
if(o===0){p[0]=q.b.q()
p=q.d
o=p[0]
if(o===0)return null
B.d.b4(p,1,1+o,q.b.T(o).R())
p=q.d
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.fB.prototype={
a1(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.a
if(b3!=null){s=this.b
s=s==null||b4>=s.e}else s=!0
if(s)return b2
s=this.b.f
if(!(b4<s.length))return A.a(s,b4)
r=s[b4]
s=b3.a
b3=b3.b+r.e
q=r.d
p=J.f3(s,b3,b3+q)
o=new A.eh()
if(o.bh(p))return o.ae(p)
n=A.bu(!1,14)
n.eG(19778)
n.am(q)
n.am(0)
n.am(0)
b3=A.l(p,!1,b2,0)
s=A.k3(A.l(A.J(n.c.buffer,0,n.a),!1,b2,0))
q=b3.j()
m=b3.j()
l=$.B()
l[0]=m
m=$.Q()
if(0>=m.length)return A.a(m,0)
k=m[0]
l[0]=b3.j()
j=m[0]
i=b3.k()
h=b3.k()
g=b3.j()
f=A.e7([0,B.L,3,B.K],t.p,t.G).p(0,g)
if(f==null)A.A(A.f("Bitmap compression "+g+" is not supported yet."))
g=b3.j()
l[0]=b3.j()
e=m[0]
l[0]=b3.j()
m=m[0]
l=b3.j()
d=new A.dL(s,j,k,q,i,h,f,g,e,m,l,b3.j())
d.d5(b3,s)
if(q!==40&&i!==1)return b2
c=l===0&&h<=8?40+4*B.a.A(1,h):40+4*l
s.b=c
n.a-=4
n.am(c)
b=A.l(p,!1,b2,0)
a=new A.fl()
a.a=b
a.b=d
a0=a.a1(0)
if(h>=32)return a0
a1=32-B.a.N(k,32)
a2=B.a.G(a1===32?k:k+a1,8)
for(b3=a0.x,s=a0.a,q=b3.length,m=a0.b-1,l=1/j<0,i=j<0,j=j===0,a3=0;a3<B.a.G(A.b_.prototype.gaE.call(d,d),2);++a3){a4=!(j?l:i)?a3:m-a3
a5=b.O(a2)
b.d=b.d+(a5.c-a5.d)
for(h=a4*s,a6=0;a6<k;){g=a5.a
e=a5.d++
if(!(e>=0&&e<g.length))return A.a(g,e)
e=g[e]
a7=7
while(!0){if(!(a7>-1&&a6<k))break
if((e&B.a.D(1,a7))>>>0!==0){g=h+a6
a8=B.c.m(B.a.n(0,0,255))
a9=B.c.m(B.a.n(0,0,255))
b0=B.c.m(B.a.n(0,0,255))
b1=B.c.m(B.a.n(0,0,255))
if(!(g>=0&&g<q))return A.a(b3,g)
b3[g]=(a8<<24|a9<<16|b0<<8|b1)>>>0}++a6;--a7}}}return a0},
ae(a){var s=A.l(t.L.a(a),!1,null,0)
this.a=s
s=A.ki(s)
this.b=s
if(s==null)return null
return this.a1(0)}}
A.fC.prototype={}
A.fD.prototype={
$1(a){var s
A.n(a)
s=this.a
s.q()
s.q()
s.q();++s.d
s.k()
s.k()
return new A.bR(s.j(),s.j())},
$S:24}
A.bR.prototype={}
A.dL.prototype={
gaE(a){return B.a.G(A.b_.prototype.gaE.call(this,this),2)},
gc8(){return this.r===40&&this.x===32?!1:A.b_.prototype.gc8.call(this)}}
A.dA.prototype={}
A.fM.prototype={}
A.ar.prototype={
sfg(a){this.r=t.fZ.a(a)}}
A.fN.prototype={
jB(a){var s,r,q,p,o,n,m,l=this,k="input",j=A.l(t.L.a(a),!0,null,0)
l.a=j
s=A.b(j,k).b5(2,0)
j=s.a
r=s.d
q=j.length
if(!(r>=0&&r<q))return A.a(j,r)
if(j[r]===255){++r
if(!(r<q))return A.a(j,r)
r=j[r]!==216
j=r}else j=!0
if(j)return!1
if(l.bb()!==216)return!1
p=l.bb()
o=!1
n=!1
while(!0){if(p!==217){j=A.b(l.a,k)
j=j.d<j.c}else j=!1
if(!j)break
m=A.b(l.a,k).k()
if(m<2)break
j=A.b(l.a,k)
j.d=j.d+(m-2)
switch(p){case 192:case 193:case 194:o=!0
break
case 218:n=!0
break}p=l.bb()}return o&&n},
jf(a){var s,r,q,p,o,n,m,l,k=this
k.a=A.l(t.L.a(a),!0,null,0)
k.hT()
if(k.x.length!==1)throw A.d(A.f("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.p(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.fA(p,o)
q=q===1&&n===2?1:0
B.b.v(s,new A.dA(p,q,m===1&&l===2?1:0))}},
hT(){var s,r,q,p,o,n=this,m="input"
if(n.bb()!==216)throw A.d(A.f("Start Of Image marker not found."))
s=n.bb()
while(!0){if(s!==217){r=A.b(n.a,m)
r=r.d<r.c}else r=!1
if(!r)break
q=A.b(n.a,m).k()
if(q<2)A.A(A.f("Invalid Block"))
r=A.b(n.a,m)
p=r.O(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:n.hU(s,p)
break
case 219:n.hX(p)
break
case 192:case 193:case 194:n.i0(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.d(A.f("Unhandled frame type "+B.a.bI(s,16)))
case 196:n.hW(p)
break
case 221:n.e=p.k()
break
case 218:n.ic(p)
break
case 255:r=A.b(n.a,m)
o=r.a
r=r.d
if(!(r>=0&&r<o.length))return A.a(o,r)
if(o[r]!==255)--A.b(n.a,m).d
break
default:r=A.b(n.a,m)
o=r.a
r=r.d+-3
if(!(r>=0&&r<o.length))return A.a(o,r)
if(o[r]===255){r=A.b(n.a,m)
o=r.a
r=r.d+-2
if(!(r>=0&&r<o.length))return A.a(o,r)
if(o[r]>=192){r=A.b(n.a,m)
o=r.a
r=r.d+-2
if(!(r>=0&&r<o.length))return A.a(o,r)
r=o[r]<=254}else r=!1}else r=!1
if(r){A.b(n.a,m).d-=3
break}if(s!==0)throw A.d(A.f("Unknown JPEG marker "+B.a.bI(s,16)))
break}s=n.bb()}},
bb(){var s,r=this,q="input",p=A.b(r.a,q)
if(p.d>=p.c)return 0
do{do{s=A.b(r.a,q).q()
if(s!==255){p=A.b(r.a,q)
p=p.d<p.c}else p=!1}while(p)
p=A.b(r.a,q)
if(p.d>=p.c)return s
do{s=A.b(r.a,q).q()
if(s===255){p=A.b(r.a,q)
p=p.d<p.c}else p=!1}while(p)
if(s===0){p=A.b(r.a,q)
p=p.d<p.c}else p=!1}while(p)
return s},
i_(a,b,c){var s,r,q,p,o,n,m=a.c,l=m-a.d
try{switch(b){case 6:o=a.q()
$.Y()[0]=o
o=$.a3()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 1:case 7:o=a.q()
return o
case 2:o=a.M(1)
return o
case 3:o=a.k()
return o
case 4:o=a.j()
return o
case 5:case 10:s=a.b5(8,c)
o=s.j()
n=$.B()
n[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
r=o[0]
n[0]=s.j()
if(0>=o.length)return A.a(o,0)
q=o[0]
if(J.aw(q,0))return 0
o=r
n=q
if(typeof o!=="number")return o.jE()
if(typeof n!=="number")return A.z(n)
return o/n
case 8:o=a.k()
$.a2()[0]=o
o=$.a9()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 9:o=a.j()
$.B()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 11:o=a.j()
$.B()[0]=o
o=$.bg()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 12:o=a.b5(8,c).c9()
return o
default:return 0}}finally{o=l
n=a.d
if(typeof o!=="number")return o.cb()
p=o-(m-n)
m=p
if(typeof m!=="number")return m.eK()
if(m<4){m=p
if(typeof m!=="number")return A.z(m)
a.d=n+A.n(4-m)}}},
hZ(a){var s,r,q,p,o,n,m,l,k=a.k()
for(s=this.r.b,r=a.c,q=0;q<k;++q){p=a.k()
o=a.k()
n=a.j()
if(o-1>=12)continue
if(n>65536)continue
if(!(o<13))return A.a(B.aj,o)
m=B.aj[o]
if(m>4){l=a.j()
if(l+m>r-a.d)continue}else l=0
s.h(0,p,this.i_(a,o,l))}},
hY(a){var s,r,q,p,o=this.r
if(o.a==null)o.seu(A.c([],t.a))
s=B.d.cc(a.R(),0)
o=o.a
o.toString
B.b.v(o,s)
if(a.j()!==1165519206)return
if(a.k()!==0)return
r=a.e
q=a.M(2)
if(q==="II")a.e=!1
else if(q==="MM")a.e=!0
else return
a.d+=2
p=a.j()
if(p<8||p>16)if(p>a.c-a.d-16){a.e=r
return}if(p>8)a.d+=p-8
this.hZ(a)
a.e=r},
hU(a,b){var s,r,q,p,o=this,n="jfif",m=b
if(a===224){s=m
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===74){s=m
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=m
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===73){s=m
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=m
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.fP()
o.b=s
A.b(s,n)
s=m
r=s.a
s=s.d+5
if(!(s>=0&&s<r.length))return A.a(r,s)
A.b(o.b,n)
r=m
s=r.a
r=r.d+6
if(!(r>=0&&r<s.length))return A.a(s,r)
A.b(o.b,n)
s=m
r=s.a
s=s.d+7
if(!(s>=0&&s<r.length))return A.a(r,s)
A.b(o.b,n)
r=m
s=r.a
r=r.d+8
if(!(r>=0&&r<s.length))return A.a(s,r)
s=m
r=s.a
s=s.d+9
if(!(s>=0&&s<r.length))return A.a(r,s)
A.b(o.b,n)
r=m
s=r.a
r=r.d+10
if(!(r>=0&&r<s.length))return A.a(s,r)
s=m
r=s.a
s=s.d+11
if(!(s>=0&&s<r.length))return A.a(r,s)
r=A.b(o.b,n)
s=m
q=s.a
s=s.d+12
if(!(s>=0&&s<q.length))return A.a(q,s)
r.f=q[s]
s=A.b(o.b,n)
q=m
r=q.a
q=q.d+13
if(!(q>=0&&q<r.length))return A.a(r,q)
s.r=r[q]
q=A.b(A.b(o.b,n).f,"thumbWidth")
r=A.b(A.b(o.b,n).r,"thumbHeight")
A.b(o.b,n)
m.b5(14+3*q*r,14)}}else if(a===225)o.hY(m)
else if(a===238){s=m
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===65){s=m
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===100){s=m
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===111){s=m
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===98){s=m
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===101){s=m
r=s.a
s=s.d+5
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.fM()
o.c=s
r=m
q=r.a
r=r.d+6
if(!(r>=0&&r<q.length))return A.a(q,r)
q=m
r=q.a
q=q.d+7
if(!(q>=0&&q<r.length))return A.a(r,q)
r=m
q=r.a
r=r.d+8
if(!(r>=0&&r<q.length))return A.a(q,r)
q=m
r=q.a
q=q.d+9
if(!(q>=0&&q<r.length))return A.a(r,q)
r=m
q=r.a
r=r.d+10
if(!(r>=0&&r<q.length))return A.a(q,r)
q=m
r=q.a
q=q.d+11
if(!(q>=0&&q<r.length))return A.a(r,q)
s.d=r[q]}}else if(a===254)try{m.jk()}catch(p){A.ah(p)}},
hX(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o=B.a.i(q,4)
n=q&15
if(n>=4)throw A.d(A.f("Invalid number of quantization tables"))
if(r[n]==null)B.b.h(r,n,new Int16Array(64))
m=r[n]
for(q=o!==0,l=0;l<64;++l){if(q)k=a.k()
else{p=a.a
j=a.d++
if(!(j>=0&&j<p.length))return A.a(p,j)
k=p[j]}m.toString
p=B.m[l]
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.d(A.f("Bad length for DQT block"))},
i0(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.d(A.f("Duplicate JPG frame data found."))
s=j.d=new A.e2(A.O(t.p,t.d2),A.c([],t.t))
s.b=a===194
s.c=b.q()
s=j.d
s.toString
s.d=b.k()
s=j.d
s.toString
s.e=b.k()
r=b.q()
for(s=j.w,q=0;q<r;++q){p=b.a
o=b.d
n=b.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=b.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
k=B.a.i(n,4)
b.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
B.b.v(j.d.z,o)
j.d.y.h(0,o,new A.ar(k&15,n&15,s,l))}j.d.jc()
B.b.v(j.x,j.d)},
hW(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.z,q=this.y;p=a.d,p<s;){o=a.a
n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
m=o[p]
l=new Uint8Array(16)
for(p=n,k=0,j=0;j<16;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<16))return A.a(l,j)
l[j]=p
k+=l[j]}i=new Uint8Array(k)
for(j=0;j<k;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<k))return A.a(i,j)
i[j]=p}if((m&16)!==0){m-=16
h=q}else h=r
if(h.length<=m)B.b.su(h,m+1)
B.b.h(h,m,this.fB(l,i))}},
ic(a){var s,r,q,p,o,n,m,l=this,k=a.q()
if(k<1||k>4)throw A.d(A.f("Invalid SOS block"))
s=A.jh(k,new A.fO(l,a),!0,t.d2)
r=a.q()
q=a.q()
p=a.q()
o=B.a.i(p,4)
n=A.b(l.a,"input")
m=l.d
o=new A.e3(n,m,s,l.e,r,q,o&15,p&15)
o.f=A.b(m.w,"mcusPerLine")
o.r=m.b
o.aB()},
fB(a,b){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.e8),h=16
while(!0){if(!(h>0&&a[h-1]===0))break;--h}B.b.v(i,new A.c3([]))
if(0>=i.length)return A.a(i,0)
s=i[0]
for(r=b.length,q=0,p=0;p<h;){for(o=0;o<a[p];++o){if(0>=i.length)return A.a(i,-1)
s=i.pop()
n=s.a
m=n.length
l=s.b
if(m<=l)B.b.su(n,l+1)
m=s.b
if(!(q>=0&&q<r))return A.a(b,q)
B.b.h(n,m,b[q])
for(;n=s.b,n>0;){if(0>=i.length)return A.a(i,-1)
s=i.pop()}s.b=n+1
B.b.v(i,s)
for(;i.length<=p;s=k){n=[]
k=new A.c3(n)
B.b.v(i,k)
m=s.a
l=m.length
j=s.b
if(l<=j)B.b.su(m,j+1)
B.b.h(m,s.b,n)}++q}++p
if(p<h){n=[]
k=new A.c3(n)
B.b.v(i,k)
m=s.a
l=m.length
j=s.b
if(l<=j)B.b.su(m,j+1)
B.b.h(m,s.b,n)
s=k}}if(0>=i.length)return A.a(i,0)
return i[0].a},
fA(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.b(a5.e,"blocksPerLine"),b=A.b(a5.f,"blocksPerColumn"),a=c<<3>>>0,a0=new Int32Array(64),a1=new Uint8Array(64),a2=b*8,a3=A.X(a2,null,!1,t.aD)
for(s=a5.c,r=a5.d,q=t.h,p=0,o=0;o<b;++o){n=o<<3>>>0
for(m=0;m<8;++m,p=l){l=p+1
B.b.h(a3,p,new Uint8Array(a))}for(k=0;k<c;++k){if(!(r>=0&&r<4))return A.a(s,r)
j=s[r]
j.toString
A.pi(j,q.a(J.o(J.o(A.b(a5.r,"blocks"),o),k)),a1,a0)
i=k<<3>>>0
for(h=0,g=0;g<8;++g){j=n+g
if(!(j<a2))return A.a(a3,j)
f=a3[j]
for(m=0;m<8;++m,h=e){f.toString
j=i+m
e=h+1
if(!(h>=0&&h<64))return A.a(a1,h)
d=a1[h]
if(!(j<f.length))return A.a(f,j)
f[j]=d}}}}return a3}}
A.fO.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.q(),l=n.q()
n=this.a
if(!n.d.y.a5(m))throw A.d(A.f("Invalid Component in SOS block"))
s=n.d.y.p(0,m)
s.toString
r=B.a.i(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.w=p}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.x=n}return s},
$S:25}
A.c3.prototype={}
A.e2.prototype={
jc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.w(s).c,q=A.cC(s,s.r,r);q.B();){p=s.p(0,q.d)
a.sj5(Math.max(a.f,p.a))
a.sj6(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.c.be(q/8/a.f)
q=a.d
q.toString
a.x=B.c.be(q/8/a.r)
for(r=A.cC(s,s.r,r),q=t.fZ,o=t.h,n=t.f0;r.B();){m=s.p(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.c.be(B.c.be(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.c.be(B.c.be(l/8)*i/a.r)
g=A.b(a.w,"mcusPerLine")*k
f=A.b(a.x,"mcusPerColumn")*i
e=J.aa(f,n)
for(d=0;d<f;++d){c=J.aa(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.sfg(q.a(e))}},
sj5(a){this.f=A.n(a)},
sj6(a){this.r=A.n(a)}}
A.fP.prototype={}
A.e3.prototype={
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.y,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.Q===0)s=a0.at===0?a0.gfO():a0.gfQ()
else s=a0.at===0?a0.gfG():a0.gfI()
else s=a0.gfL()
a4=a3===1
if(a4){if(0>=a3)return A.a(a2,0)
r=A.b(a2[0].e,a1)
if(0>=a2.length)return A.a(a2,0)
q=r*A.b(a2[0].f,"blocksPerColumn")}else q=A.b(a0.f,"mcusPerLine")*A.b(a0.b.x,"mcusPerColumn")
r=a0.z
if(r==null||r===0)a0.z=q
for(r=a0.a,p=t.m,o=0;o<q;){for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
a2[n].y=0}a0.CW=0
if(a4){if(0>=a2.length)return A.a(a2,0)
m=a2[0]
l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
p.a(s)
j=B.a.V(o,A.b(m.e,a1))
i=B.a.N(o,A.b(m.e,a1))
s.$2(m,J.o(J.o(A.b(m.r,"blocks"),j),i));++o;++l}}else{l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
m=a2[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)a0.fT(m,s,o,f,e)}++o;++l}}a0.ch=0
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
aY(){var s,r,q=this,p=q.ch
if(p>0){--p
q.ch=p
return B.a.a3(q.ay,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.q()
q.ay=s
if(s===255){r=p.q()
if(r!==0)throw A.d(A.f("unexpected marker: "+B.a.bI((q.ay<<8|r)>>>0,16)))}q.ch=7
return B.a.i(q.ay,7)&1},
bq(a){var s,r,q
for(s=t.j,r=a;q=this.aY(),q!=null;){r=J.o(s.a(r),q)
if(typeof r=="number")return B.c.m(r)}return null},
cK(a){var s,r
for(s=0;a>0;){r=this.aY()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
bs(a){var s
if(a===1)return this.aY()===1?1:-1
a.toString
s=this.cK(a)
s.toString
if(s>=B.a.D(1,a-1))return s
return s+B.a.D(-1,a)+1},
fM(a,b){var s,r,q,p,o=this,n=o.bq(A.b(a.w,"huffmanTableDC")),m=n===0?0:o.bs(n),l=A.b(a.y,"pred")+m
a.y=l
s=J.I(b)
s.h(b,0,A.b(l,"pred"))
for(r=1;r<64;){l=o.bq(A.b(a.x,"huffmanTableAC"))
l.toString
q=l&15
p=B.a.i(l,4)
if(q===0){if(p<15)break
r+=16
continue}r+=p
q=o.bs(q)
if(!(r>=0&&r<80))return A.a(B.m,r)
s.h(b,B.m[r],q);++r}},
fP(a,b){var s=this.bq(A.b(a.w,"huffmanTableDC")),r=s===0?0:B.a.A(this.bs(s),this.ax),q=A.b(a.y,"pred")+r
a.y=q
J.m(b,0,A.b(q,"pred"))},
fR(a,b){var s,r,q
t.L.a(b)
s=J.I(b)
r=s.p(b,0)
q=this.aY()
q.toString
q=B.a.A(q,this.ax)
if(typeof r!=="number")return r.jF()
s.h(b,0,(r|q)>>>0)},
fH(a,b){var s,r,q,p,o,n,m=this,l=m.CW
if(l>0){m.CW=l-1
return}s=m.Q
r=m.as
for(l=m.ax,q=J.I(b);s<=r;){p=m.bq(A.b(a.x,"huffmanTableAC"))
p.toString
o=p&15
n=B.a.i(p,4)
if(o===0){if(n<15){l=m.cK(n)
l.toString
m.CW=l+B.a.A(1,n)-1
break}s+=16
continue}s+=n
if(!(s>=0&&s<80))return A.a(B.m,s)
q.h(b,B.m[s],m.bs(o)*B.a.A(1,l));++s}},
fJ(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.L.a(b)
s=i.Q
r=i.as
for(q=J.I(b),p=i.ax,o=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.m,s)
n=B.m[s]
switch(i.cx){case 0:m=i.bq(A.b(a.x,"huffmanTableAC"))
if(m==null)throw A.d(A.f("Invalid progressive encoding"))
l=m&15
o=B.a.i(m,4)
if(l===0)if(o<15){k=i.cK(o)
k.toString
i.CW=k+B.a.A(1,o)
i.cx=4}else{i.cx=1
o=16}else{if(l!==1)throw A.d(A.f("invalid ACn encoding"))
i.cy=i.bs(l)
i.cx=o!==0?2:3}continue
case 1:case 2:if(!J.aw(q.p(b,n),0)){k=q.p(b,n)
j=i.aY()
j.toString
j=B.a.A(j,p)
if(typeof k!=="number")return k.aK()
q.h(b,n,k+j)}else{--o
if(o===0)i.cx=i.cx===2?3:0}break
case 3:if(!J.aw(q.p(b,n),0)){k=q.p(b,n)
j=i.aY()
j.toString
j=B.a.A(j,p)
if(typeof k!=="number")return k.aK()
q.h(b,n,k+j)}else{q.h(b,n,B.a.A(A.b(i.cy,"successiveACNextValue"),p))
i.cx=0}break
case 4:if(!J.aw(q.p(b,n),0)){k=q.p(b,n)
j=i.aY()
j.toString
j=B.a.A(j,p)
if(typeof k!=="number")return k.aK()
q.h(b,n,k+j)}break}++s}if(i.cx===4)if(--i.CW===0)i.cx=0},
fT(a,b,c,d,e){var s,r,q="mcusPerLine",p="blocks"
t.m.a(b)
s=B.a.V(c,A.b(this.f,q))*a.b+d
r=B.a.N(c,A.b(this.f,q))*a.a+e
if(s>=J.a4(A.b(a.r,p)))return
if(r>=J.a4(J.o(A.b(a.r,p),s)))return
b.$2(a,J.o(J.o(A.b(a.r,p),s),r))}}
A.e1.prototype={
ae(a){var s
t.L.a(a)
s=A.kr()
s.jf(a)
if(s.x.length!==1)throw A.d(A.f("only single frame JPEGs supported"))
return A.p3(s)}}
A.cK.prototype={}
A.dX.prototype={}
A.h7.prototype={
sj9(a){this.x=t.k.a(a)},
sjx(a){this.y=t.T.a(a)},
siA(a){this.z=t.k.a(a)}}
A.fJ.prototype={}
A.eh.prototype={
bh(a){var s,r,q,p,o,n=A.l(t.L.a(a),!0,null,0).T(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.a2[p])return!1}return!0},
az(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4="_input",a5=t.L,a6=A.l(a5.a(a7),!0,a3,0)
a2.d=a6
s=A.b(a6,a4).T(8)
for(a6=s.a,r=s.d,q=a6.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(a6,o)
if(a6[o]!==B.a2[p])return a3}for(a6=t.t,r=t.dm;!0;){q=A.b(a2.d,a4)
n=q.d-q.b
m=A.b(a2.d,a4).j()
l=A.b(a2.d,a4).M(4)
switch(l){case"IHDR":q=A.b(a2.d,a4)
k=q.O(m)
q.d=q.d+(k.c-k.d)
j=A.i(k,a3,0)
i=j.R()
q=new A.fJ(A.c([],r),A.c([],a6))
a2.a=q
q.a=j.j()
q=a2.a
q.toString
q.b=j.j()
q=a2.a
q.toString
o=j.a
h=j.d
g=j.d=h+1
f=o.length
if(!(h>=0&&h<f))return A.a(o,h)
q.d=o[h]
h=j.d=g+1
if(!(g>=0&&g<f))return A.a(o,g)
q.e=o[g]
g=j.d=h+1
if(!(h>=0&&h<f))return A.a(o,h)
h=j.d=g+1
if(!(g>=0&&g<f))return A.a(o,g)
q.r=o[g]
j.d=h+1
if(!(h>=0&&h<f))return A.a(o,h)
q.w=o[h]
if(!B.b.ao(A.c([0,2,3,4,6],a6),a2.a.e))return a3
q=a2.a
if(q.r!==0)return a3
switch(q.e){case 0:if(!B.b.ao(A.c([1,2,4,8,16],a6),a2.a.d))return a3
break
case 2:if(!B.b.ao(A.c([8,16],a6),a2.a.d))return a3
break
case 3:if(!B.b.ao(A.c([1,2,4,8],a6),a2.a.d))return a3
break
case 4:if(!B.b.ao(A.c([8,16],a6),a2.a.d))return a3
break
case 6:if(!B.b.ao(A.c([8,16],a6),a2.a.d))return a3
break}if(A.b(a2.d,a4).j()!==A.aD(a5.a(i),A.aD(new A.ay(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"PLTE":q=a2.a
q.toString
o=A.b(a2.d,a4)
k=o.O(m)
o.d=o.d+(k.c-k.d)
q.sj9(k.R())
if(A.b(a2.d,a4).j()!==A.aD(a5.a(a5.a(a2.a.x)),A.aD(new A.ay(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"tRNS":q=a2.a
q.toString
o=A.b(a2.d,a4)
k=o.O(m)
o.d=o.d+(k.c-k.d)
q.sjx(k.R())
e=A.b(a2.d,a4).j()
q=a2.a.y
q.toString
if(e!==A.aD(a5.a(q),A.aD(new A.ay(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"IEND":A.b(a2.d,a4).d+=4
break
case"gAMA":if(m!==4)throw A.d(A.f("Invalid gAMA chunk"))
d=A.b(a2.d,a4).j()
A.b(a2.d,a4).d+=4
if(d!==1e5)a2.a.Q=d/1e5
break
case"IDAT":B.b.v(a2.a.cy,n)
A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break
case"acTL":a2.a.toString
A.b(a2.d,a4).j()
a2.a.toString
A.b(a2.d,a4).j()
A.b(a2.d,a4).d+=4
break
case"fcTL":c=new A.dX(A.c([],a6))
B.b.v(a2.a.cx,c)
A.b(a2.d,a4).j()
c.b=A.b(a2.d,a4).j()
c.c=A.b(a2.d,a4).j()
A.b(a2.d,a4).j()
A.b(a2.d,a4).j()
A.b(a2.d,a4).k()
A.b(a2.d,a4).k()
q=A.b(a2.d,a4)
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q)
o=A.b(a2.d,a4)
q=o.a
o=o.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
A.b(a2.d,a4).d+=4
break
case"fdAT":A.b(a2.d,a4).j()
B.b.v(B.b.gj3(a2.a.cx).y,n)
A.b(a2.d,a4).d+=m-4
A.b(a2.d,a4).d+=4
break
case"bKGD":q=a2.a.e
if(q===3){q=A.b(a2.d,a4)
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q);--m
b=o[q]*3
q=a2.a.x
o=q.length
if(!(b>=0&&b<o))return A.a(q,b)
a=q[b]
h=b+1
if(!(h<o))return A.a(q,h)
a0=q[h]
h=b+2
if(!(h<o))return A.a(q,h)
a1=q[h]
B.c.m(B.a.n(255,0,255))
B.c.m(B.a.n(a1,0,255))
B.c.m(B.a.n(a0,0,255))
B.c.m(B.a.n(a,0,255))}else if(q===0||q===4){A.b(a2.d,a4).k()
m-=2}else if(q===2||q===6){A.b(a2.d,a4).k()
A.b(a2.d,a4).k()
A.b(a2.d,a4).k()
m-=24}if(m>0)A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break
case"iCCP":q=a2.a
q.toString
q.at=A.b(a2.d,a4).bF()
a2.a.toString
q=A.b(a2.d,a4)
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q)
o=a2.a.at
q=A.b(a2.d,a4)
k=q.O(m-(o.length+2))
q.d=q.d+(k.c-k.d)
q=a2.a
q.toString
q.ay=k.R()
A.b(a2.d,a4).d+=4
break
default:A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break}if(l==="IEND")break
q=A.b(a2.d,a4)
if(q.d>=q.c)return a3}return a2.a},
a1(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2="_input"
if(a0.a==null)return a1
s=A.c([],t.t)
r=a0.a
q=r.a
p=r.b
o=r.cx
n=o.length
if(n===0||a3===0)for(m=r.cy.length,r=t.L,l=0;l<m;++l){o=A.b(a0.d,a2)
n=a0.a.cy
if(!(l<n.length))return A.a(n,l)
o.d=n[l]
k=A.b(a0.d,a2).j()
j=A.b(a0.d,a2).M(4)
n=A.b(a0.d,a2)
i=n.O(k)
n.d=n.d+(i.c-i.d)
h=i.R()
B.b.b_(s,h)
if(A.b(a0.d,a2).j()!==A.aD(r.a(h),A.aD(new A.ay(j),0)))throw A.d(A.f("Invalid "+j+" checksum"))}else{if(a3>=n)throw A.d(A.f("Invalid Frame Number: "+a3))
g=o[a3]
q=g.b
p=g.c
for(r=g.y,l=0;l<r.length;++l){o=A.b(a0.d,a2)
if(!(l<r.length))return A.a(r,l)
o.d=r[l]
k=A.b(a0.d,a2).j()
A.b(a0.d,a2).M(4)
A.b(a0.d,a2).d+=4
o=A.b(a0.d,a2)
i=o.O(k)
o.d=o.d+(i.c-i.d)
B.b.b_(s,i.R())}}r=a0.a
o=r.e
f=o===4||o===6||r.y!=null?B.f:B.w
q.toString
p.toString
e=A.V(q,p,f,a1,a1)
d=A.l(B.r.bx(A.bn(t.L.a(s),1,a1,0),!1),!0,a1,0)
a0.c=a0.b=0
r=a0.a
if(r.z==null){r.siA(A.jh(256,new A.h5(),!1,t.p))
r=a0.a
o=r.x
if(o!=null&&r.Q!=null)for(n=o.length,r=r.z,l=0;l<n;++l){r.toString
c=o[l]
if(!(c<256))return A.a(r,c)
o[l]=r[c]}}r=a0.a
b=r.a
a=r.b
r.a=q
r.b=p
a0.e=0
if(r.w!==0){r=B.a.i(q+7,3)
o=B.a.i(p+7,3)
a0.aX(d,e,0,0,8,8,r,o)
r=q+3
a0.aX(d,e,4,0,8,8,B.a.i(r,3),o)
o=p+3
a0.aX(d,e,0,4,4,8,B.a.i(r,2),B.a.i(o,3))
r=q+1
a0.aX(d,e,2,0,4,4,B.a.i(r,2),B.a.i(o,2))
o=p+1
a0.aX(d,e,0,2,2,4,B.a.i(r,1),B.a.i(o,2))
a0.aX(d,e,1,0,2,2,B.a.i(q,1),B.a.i(o,1))
a0.aX(d,e,0,1,1,2,q,B.a.i(p,1))}else a0.hN(d,e)
r=a0.a
r.a=b
r.b=a
o=r.ay
if(o!=null)e.z=new A.fA(r.at,B.M,o)
return e},
ae(a){if(this.az(t.L.a(a))==null)return null
return this.a1(0)},
aX(b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=a8.a,b0=a9.e
if(b0===4)s=2
else if(b0===2)s=3
else{b0=b0===6?4:1
s=b0}a9=a9.d
a9.toString
r=s*a9
q=B.a.i(r+7,3)
p=B.a.i(r*b7+7,3)
o=A.X(p,0,!1,t.p)
n=A.c([o,o],t.S)
m=A.c([0,0,0,0],t.t)
for(a9=b2.x,b0=b2.a,l=a9.length,k=b5>1,j=b2.b,i=b5-b3,h=i<=1,g=b4,f=0,e=0;f<b8;++f,g+=b6,++a8.e){d=b1.a
c=b1.d++
if(!(c>=0&&c<d.length))return A.a(d,c)
c=d[c]
b=b1.O(p)
b1.d=b1.d+(b.c-b.d)
B.b.h(n,e,b.R())
if(!(e>=0&&e<2))return A.a(n,e)
a=n[e]
e=1-e
a8.e7(c,q,a,n[e])
a8.c=a8.b=0
d=a.length
a0=new A.a_(a,0,d,0,!0)
for(d=g*b0,a1=b3,a2=0;a2<b7;++a2,a1+=b5){a8.dY(a0,m)
a3=a8.dw(m)
c=d+a1
if(!(c>=0&&c<l))return A.a(a9,c)
a9[c]=a3
if(!h||k)for(a4=0;a4<b5;++a4)for(a5=0;a5<i;++a5){c=a1+a5
a6=g+a5
if(c<b0)a7=a6<j
else a7=!1
if(a7){c=a6*b0+c
if(!(c>=0&&c<l))return A.a(a9,c)
a9[c]=a3}}}}},
hN(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.e
if(a2===4)s=2
else if(a2===2)s=3
else{a2=a2===6?4:1
s=a2}a2=a1.d
a2.toString
r=s*a2
q=a1.a
p=a1.b
o=B.a.i(q*r+7,3)
n=B.a.i(r+7,3)
m=A.X(o,0,!1,t.p)
l=A.c([m,m],t.S)
k=A.c([0,0,0,0],t.t)
for(a1=a4.x,a2=a1.length,j=0,i=0,h=0;j<p;++j,h=d){g=a3.a
f=a3.d++
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
e=a3.O(o)
a3.d=a3.d+(e.c-e.d)
B.b.h(l,h,e.R())
if(!(h>=0&&h<2))return A.a(l,h)
d=1-h
a0.e7(f,n,l[h],l[d])
a0.c=a0.b=0
f=l[h]
g=f.length
c=new A.a_(f,0,g,0,!0)
for(b=0;b<q;++b,i=a){a0.dY(c,k)
a=i+1
g=a0.dw(k)
if(!(i>=0&&i<a2))return A.a(a1,i)
a1[i]=g}}},
e7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.L
f.a(c)
f.a(d)
s=c.length
switch(a){case 0:break
case 1:for(f=J.I(c),r=b;r<s;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
o=c[o]
if(typeof p!=="number")return p.aK()
if(typeof o!=="number")return A.z(o)
f.h(c,r,p+o&255)}break
case 2:for(f=J.I(c),r=0;r<s;++r){if(!(r<c.length))return A.a(c,r)
q=c[r]
if(!(r<d.length))return A.a(d,r)
p=d[r]
if(typeof q!=="number")return q.aK()
if(typeof p!=="number")return A.z(p)
f.h(c,r,q+p&255)}break
case 3:for(f=J.I(c),r=0;r<s;++r){if(r<b)n=0
else{q=r-b
if(!(q>=0&&q<c.length))return A.a(c,q)
n=c[q]}if(!(r<d.length))return A.a(d,r)
m=d[r]
if(!(r<c.length))return A.a(c,r)
q=c[r]
p=B.a.i(n+m,1)
if(typeof q!=="number")return q.aK()
f.h(c,r,q+p&255)}break
case 4:for(f=J.I(c),r=0;r<s;++r){q=r<b
if(q)n=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
n=c[p]}p=d.length
if(!(r<p))return A.a(d,r)
m=d[r]
if(q)l=0
else{q=r-b
if(!(q>=0&&q<p))return A.a(d,q)
l=d[q]}k=n+m-l
j=Math.abs(k-n)
i=Math.abs(k-m)
h=Math.abs(k-l)
if(j<=i&&j<=h)g=n
else g=i<=h?m:l
if(!(r<c.length))return A.a(c,r)
q=c[r]
if(typeof q!=="number")return q.aK()
f.h(c,r,q+g&255)}break
default:throw A.d(A.f("Invalid filter value: "+a))}},
ak(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.q()
if(b===16)return a.k()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.d(A.f("Invalid PNG data."))
p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
n.b=B.a.D(p[q],r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a2(n.b,s)
n.c=s
return(r&o)>>>0},
dY(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.e
switch(r){case 0:s=s.d
s.toString
B.b.h(b,0,q.ak(a,s))
return
case 2:s=s.d
s.toString
B.b.h(b,0,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.ak(a,s))
return
case 3:s=s.d
s.toString
B.b.h(b,0,q.ak(a,s))
return
case 4:s=s.d
s.toString
B.b.h(b,0,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ak(a,s))
return
case 6:s=s.d
s.toString
B.b.h(b,0,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.ak(a,s))
s=q.a.d
s.toString
B.b.h(b,3,q.ak(a,s))
return}throw A.d(A.f("Invalid color type: "+A.v(r)+"."))},
dw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
s=g.a
r=s.e
switch(r){case 0:q=A.al("g")
s=g.a
switch(s.d){case 1:q.b=a[0]===0?0:255
break
case 2:q.b=a[0]*85
break
case 4:q.b=a[0]<<4>>>0
break
case 8:q.b=a[0]
break
case 16:q.b=B.a.i(a[0],8)
break}s=s.z
s.toString
q.b=B.b.p(s,q.J())
s=g.a.y
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
p=s[0]
if(1>=r)return A.a(s,1)
s=s[1]
if(a[0]===((p&255)<<24|s&255)>>>0)return A.av(q.J(),q.J(),q.J(),0)}return A.av(q.J(),q.J(),q.J(),255)
case 2:o=A.al("r")
q=A.al("g")
n=A.al("b")
s=g.a
switch(s.d){case 1:o.b=a[0]===0?0:255
q.b=a[1]===0?0:255
n.b=a[2]===0?0:255
break
case 2:o.b=a[0]*85
q.b=a[1]*85
n.b=a[2]*85
break
case 4:o.b=a[0]<<4>>>0
q.b=a[1]<<4>>>0
n.b=a[2]<<4>>>0
break
case 8:o.b=a[0]
q.b=a[1]
n.b=a[2]
break
case 16:o.b=B.a.i(a[0],8)
q.b=B.a.i(a[1],8)
n.b=B.a.i(a[2],8)
break}s=s.z
s.toString
o.b=B.b.p(s,o.J())
s=g.a.z
s.toString
q.b=B.b.p(s,q.J())
s=g.a.z
s.toString
n.b=B.b.p(s,n.J())
s=g.a.y
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
p=s[0]
if(1>=r)return A.a(s,1)
m=s[1]
if(2>=r)return A.a(s,2)
l=s[2]
if(3>=r)return A.a(s,3)
k=s[3]
if(4>=r)return A.a(s,4)
j=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(a[0]===((p&255)<<8|m&255)&&a[1]===((l&255)<<8|k&255)&&a[2]===((j&255)<<8|s&255))return A.av(o.J(),q.J(),n.J(),0)}return A.av(o.J(),q.J(),n.J(),255)
case 3:r=a[0]
i=r*3
p=s.y
if(p!=null&&r<p.length){if(!(r>=0&&r<p.length))return A.a(p,r)
h=p[r]}else h=255
s=s.x
r=s.length
if(i>=r)return A.av(255,255,255,h)
if(!(i>=0))return A.a(s,i)
o=s[i]
p=i+1
if(!(p<r))return A.a(s,p)
q=s[p]
p=i+2
if(!(p<r))return A.a(s,p)
return A.av(o,q,s[p],h)
case 4:q=A.al("g")
h=A.al("a")
s=g.a
switch(s.d){case 1:q.b=a[0]===0?0:255
h.b=a[1]===0?0:255
break
case 2:q.b=a[0]*85
h.b=a[1]*85
break
case 4:q.b=a[0]<<4>>>0
h.b=a[1]<<4>>>0
break
case 8:q.b=a[0]
h.b=a[1]
break
case 16:q.b=B.a.i(a[0],8)
h.b=B.a.i(a[1],8)
break}s=s.z
s.toString
q.b=B.b.p(s,q.J())
return A.av(q.J(),q.J(),q.J(),h.J())
case 6:o=A.al("r")
q=A.al("g")
n=A.al("b")
h=A.al("a")
s=g.a
switch(s.d){case 1:o.b=a[0]===0?0:255
q.b=a[1]===0?0:255
n.b=a[2]===0?0:255
h.b=a[3]===0?0:255
break
case 2:o.b=a[0]*85
q.b=a[1]*85
n.b=a[2]*85
h.b=a[3]*85
break
case 4:o.b=a[0]<<4>>>0
q.b=a[1]<<4>>>0
n.b=a[2]<<4>>>0
h.b=a[3]<<4>>>0
break
case 8:o.b=a[0]
q.b=a[1]
n.b=a[2]
h.b=a[3]
break
case 16:o.b=B.a.i(a[0],8)
q.b=B.a.i(a[1],8)
n.b=B.a.i(a[2],8)
h.b=B.a.i(a[3],8)
break}s=s.z
s.toString
o.b=B.b.p(s,o.J())
s=g.a.z
s.toString
q.b=B.b.p(s,q.J())
s=g.a.z
s.toString
n.b=B.b.p(s,n.J())
return A.av(o.J(),q.J(),n.J(),h.J())}throw A.d(A.f("Invalid color type: "+A.v(r)+"."))}}
A.h5.prototype={
$1(a){return a},
$S:20}
A.h6.prototype={
iY(){var s,r=this,q=r.ax
if(q==null)return null
r.bu(q,"IEND",A.c([],t.t))
r.as=0
q=r.ax
s=A.J(q.c.buffer,0,q.a)
r.ax=null
return s},
it(a,b){var s,r
if(b==null)return
s=A.bu(!0,8192)
s.al(new A.ay(b.a))
s.E(0)
s.E(0)
s.al(b.iF())
r=this.ax
r.toString
this.bu(r,"iCCP",A.J(s.c.buffer,0,s.a))},
bu(a,b,c){t.L.a(c)
a.am(c.length)
a.al(new A.ay(b))
a.al(c)
a.am(A.aD(c,A.aD(new A.ay(b),0)))},
ha(a,b,c){var s,r,q
t.L.a(c)
for(s=b.b,r=0,q=0;q<s;++q)switch(4){case 4:r=this.hb(b,r,q,c)
break}},
bZ(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
hb(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
t.L.a(b5)
s=b3+1
r=b5.length
if(!(b3<r))return A.a(b5,b3)
b5[b3]=4
for(q=b2.a,p=b2.c===B.f,o=b2.x,n=b4*q,m=o.length,l=(b4-1)*q,k=b4===0,j=!k,b3=s,i=0;i<q;++i){h=i===0
if(h)g=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
g=o[f]&255}if(h)e=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
e=o[f]>>>8&255}if(h)d=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
d=o[f]>>>16&255}if(k)c=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
c=o[f]&255}if(k)b=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
b=o[f]>>>8&255}if(k)a=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
a=o[f]>>>16&255}if(!j||h)a0=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a0=o[f]&255}if(!j||h)a1=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a1=o[f]>>>8&255}if(!j||h)a2=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a2=o[f]>>>16&255}f=n+i
if(!(f>=0&&f<m))return A.a(o,f)
a3=o[f]
a4=b1.bZ(g,c,a0)
a5=b1.bZ(e,b,a1)
a6=b1.bZ(d,a,a2)
s=b3+1
if(!(b3<r))return A.a(b5,b3)
b5[b3]=(a3&255)-a4&255
b3=s+1
if(!(s<r))return A.a(b5,s)
b5[s]=(a3>>>8&255)-a5&255
s=b3+1
if(!(b3<r))return A.a(b5,b3)
b5[b3]=(a3>>>16&255)-a6&255
if(p){if(h)a7=0
else{a3=n+(i-1)
if(!(a3>=0&&a3<m))return A.a(o,a3)
a7=o[a3]>>>24&255}if(k)a8=0
else{a3=l+i
if(!(a3>=0&&a3<m))return A.a(o,a3)
a8=o[a3]>>>24&255}if(!j||h)a9=0
else{h=l+(i-1)
if(!(h>=0&&h<m))return A.a(o,h)
a9=o[h]>>>24&255}h=o[f]
b0=b1.bZ(a7,a8,a9)
b3=s+1
if(!(s<r))return A.a(b5,s)
b5[s]=(h>>>24&255)-b0&255}else b3=s}return b3}}
A.ej.prototype={
sj2(a){t.T.a(a)},
seN(a){t.T.a(a)},
sjm(a){t.T.a(a)},
sjn(a){t.T.a(a)}}
A.ek.prototype={
saA(a){t.T.a(a)},
saG(a){t.T.a(a)}}
A.az.prototype={}
A.em.prototype={
saA(a){t.T.a(a)},
saG(a){t.T.a(a)}}
A.en.prototype={
saA(a){t.T.a(a)},
saG(a){t.T.a(a)}}
A.ep.prototype={
saA(a){t.T.a(a)},
saG(a){t.T.a(a)}}
A.eq.prototype={
saA(a){t.T.a(a)},
saG(a){t.T.a(a)}}
A.cN.prototype={}
A.eo.prototype={}
A.h9.prototype={
f7(a){var s,r,q,p,o=this
a.k()
a.k()
a.k()
a.k()
s=B.a.G(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=A.b(o.e,"blackSrc")
p=a.k()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=A.b(o.f,"whiteSrc")
q=a.k()
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=A.b(o.r,"blackDst")
p=a.k()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=A.b(o.w,"whiteDst")
q=a.k()
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.bv.prototype={
ev(a,b,c,d,e,f,g){if(e==null)e=a.k()
switch(e){case 0:d.toString
this.ib(a,b,c,d)
break
case 1:if(f==null)f=this.i8(a,c)
d.toString
this.ia(a,b,c,d,f,g)
break
default:throw A.d(A.f("Unsupported compression: "+e))}},
jj(a,b,c,d){return this.ev(a,b,c,d,null,null,0)},
i8(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.k()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
ib(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.d.af(A.b(s,"data"),0,r,255)
return}this.c=a.T(r).R()},
ia(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k="data",j=b*c
if(d===16)j*=2
s=new Uint8Array(j)
l.c=s
r=f*c
q=e.length
if(r>=q){B.d.af(A.b(s,k),0,A.b(l.c,k).length,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.O(e[r])
a.d=a.d+(m.c-m.d)
l.fU(m,A.b(l.c,k),p)
p+=b}},
fU(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.Y()[0]=q
q=$.a3()
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
A.hb.prototype={
f8(a){var s,r,q,p=this,o="_input"
p.at=A.l(a,!0,null,0)
p.hQ()
if(p.d!==943870035)return
s=A.b(p.at,o).j()
A.b(p.at,o).T(s)
s=A.b(p.at,o).j()
p.ax=A.b(p.at,o).T(s)
s=A.b(p.at,o).j()
p.ay=A.b(p.at,o).T(s)
r=A.b(p.at,o)
r.toString
q=A.b(p.at,o)
p.ch=r.T(q.c-q.d)},
aB(){var s=this
if(s.d!==943870035||A.b(s.at,"_input")==null)return!1
s.i6()
s.i7()
s.i9()
s.ch=s.ay=s.ax=s.at=null
return!0},
iP(){if(!this.aB())return null
return this.jp()},
jp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.z
if(b4!=null)return b4
b4=A.V(b3.a,b3.b,B.f,null,null)
b3.z=b4
b4=b4.x
B.n.af(b4,0,b4.length,0)
s=b3.z.aT()
for(b4=s.length,r=0;r<J.a4(A.b(b3.x,"layers"));++r){q=J.o(A.b(b3.x,"layers"),r)
if((A.b(q.y,"flags")&2)!==0)continue
p=A.b(q.w,"opacity")/255
o=q.r
n=A.b(q.cx,"layerImage").aT()
m=q.a
m.toString
l=n.length
k=m
j=0
i=0
for(;j<A.b(q.f,"height");++j,++k){m=q.a
m.toString
h=b3.a
if(typeof h!=="number")return A.z(h)
g=q.b
g.toString
f=(m+j)*h*4+g*4
for(m=k>=0,e=g,d=0;d<A.b(q.e,"width");++d,++e){c=i+1
if(!(i>=0&&i<l))return A.a(n,i)
b=n[i]
i=c+1
if(!(c>=0&&c<l))return A.a(n,c)
a=n[c]
c=i+1
if(!(i>=0&&i<l))return A.a(n,i)
a0=n[i]
i=c+1
if(!(c>=0&&c<l))return A.a(n,c)
a1=n[c]
if(e>=0){h=b3.a
if(typeof h!=="number")return A.z(h)
if(e<h)if(m){h=b3.b
if(typeof h!=="number")return A.z(h)
h=k<h}else h=!1
else h=!1}else h=!1
if(h){if(!(f>=0&&f<b4))return A.a(s,f)
a2=s[f]
h=f+1
if(!(h<b4))return A.a(s,h)
a3=s[h]
g=f+2
if(!(g<b4))return A.a(s,g)
a4=s[g]
g=f+3
if(!(g<b4))return A.a(s,g)
a5=s[g]
a6=a1/255*p
switch(o){case 1885434739:a7=a5
a8=a4
a9=a3
b0=a2
break
case 1852797549:a7=a1
a8=a0
a9=a
b0=b
break
case 1684632435:a7=a1
a8=a0
a9=a
b0=b
break
case 1684107883:b0=Math.min(a2,b)
a9=Math.min(a3,a)
a8=Math.min(a4,a0)
a7=a1
break
case 1836411936:b0=a2*b>>>8
a9=a3*a>>>8
a8=a4*a0>>>8
a7=a1
break
case 1768188278:b0=A.hc(a2,b)
a9=A.hc(a3,a)
a8=A.hc(a4,a0)
a7=a1
break
case 1818391150:b0=B.c.m(B.a.n(a2+b-255,0,255))
a9=B.c.m(B.a.n(a3+a-255,0,255))
a8=B.c.m(B.a.n(a4+a0-255,0,255))
a7=a1
break
case 1684751212:a7=a1
a8=a0
a9=a
b0=b
break
case 1818850405:b0=Math.max(a2,b)
a9=Math.max(a3,a)
a8=Math.max(a4,a0)
a7=a1
break
case 1935897198:b0=B.c.m(B.a.n(255-(255-b)*(255-a2),0,255))
a9=B.c.m(B.a.n(255-(255-a)*(255-a3),0,255))
a8=B.c.m(B.a.n(255-(255-a0)*(255-a4),0,255))
a7=a1
break
case 1684633120:b0=A.hd(a2,b)
a9=A.hd(a3,a)
a8=A.hd(a4,a0)
a7=a1
break
case 1818518631:b0=b+a2>255?255:a2+b
a9=a+a3>255?255:a3+a
a8=a0+a4>255?255:a4+a0
a7=a1
break
case 1818706796:a7=a1
a8=a0
a9=a
b0=b
break
case 1870030194:b0=A.jn(a2,b,a5,a1)
a9=A.jn(a3,a,a5,a1)
a8=A.jn(a4,a0,a5,a1)
a7=a1
break
case 1934387572:b0=A.jo(a2,b)
a9=A.jo(a3,a)
a8=A.jo(a4,a0)
a7=a1
break
case 1749838196:b0=A.jl(a2,b)
a9=A.jl(a3,a)
a8=A.jl(a4,a0)
a7=a1
break
case 1984719220:b0=A.jp(a2,b)
a9=A.jp(a3,a)
a8=A.jp(a4,a0)
a7=a1
break
case 1816947060:b0=A.jm(a2,b)
a9=A.jm(a3,a)
a8=A.jm(a4,a0)
a7=a1
break
case 1884055924:b0=b<128?Math.min(a2,2*b):Math.max(a2,2*(b-128))
a9=a<128?Math.min(a3,2*a):Math.max(a3,2*(a-128))
a8=a0<128?Math.min(a4,2*a0):Math.max(a4,2*(a0-128))
a7=a1
break
case 1749903736:b0=b<255-a2?0:255
a9=a<255-a3?0:255
a8=a0<255-a4?0:255
a7=a1
break
case 1684629094:b0=Math.abs(b-a2)
a9=Math.abs(a-a3)
a8=Math.abs(a0-a4)
a7=a1
break
case 1936553316:b0=B.c.aH(b+a2-2*b*a2/255)
a9=B.c.aH(a+a3-2*a*a3/255)
a8=B.c.aH(a0+a4-2*a0*a4/255)
a7=a1
break
case 1718842722:a7=a1
a8=a0
a9=a
b0=b
break
case 1717856630:a7=a1
a8=a0
a9=a
b0=b
break
case 1752524064:a7=a1
a8=a0
a9=a
b0=b
break
case 1935766560:a7=a1
a8=a0
a9=a
b0=b
break
case 1668246642:a7=a1
a8=a0
a9=a
b0=b
break
case 1819634976:a7=a1
a8=a0
a9=a
b0=b
break
default:a7=a1
a8=a0
a9=a
b0=b}g=1-a6
b0=B.c.m(a2*g+b0*a6)
a9=B.c.m(a3*g+a9*a6)
a8=B.c.m(a4*g+a8*a6)
a7=B.c.m(a5*g+a7*a6)
s[f]=b0
b1=h+1
s[h]=a9
b2=b1+1
if(!(b1<b4))return A.a(s,b1)
s[b1]=a8
if(!(b2<b4))return A.a(s,b2)
s[b2]=a7}f+=4}}}b4=b3.z
b4.toString
return b4},
hQ(){var s,r,q,p,o,n,m=this,l="_input"
m.d=A.b(m.at,l).j()
s=A.b(m.at,l).k()
m.e=s
if(s!==1){m.d=0
return}r=A.b(m.at,l).T(6)
for(s=r.a,q=r.d,p=s.length,o=0;o<6;++o){n=q+o
if(!(n>=0&&n<p))return A.a(s,n)
if(s[n]!==0){m.d=0
return}}m.f=A.b(m.at,l).k()
m.b=A.b(m.at,l).j()
m.a=A.b(m.at,l).j()
m.r=A.b(m.at,l).k()
m.w=A.b(m.at,l).k()},
i6(){var s,r,q,p,o,n,m=this,l="_imageResourceData",k=A.b(m.ax,l)
k.d=k.b
for(k=m.Q;s=A.b(m.ax,l),s.d<s.c;){r=A.b(m.ax,l).j()
q=A.b(m.ax,l).k()
s=A.b(m.ax,l)
p=s.a
s=s.d++
if(!(s>=0&&s<p.length))return A.a(p,s)
s=p[s]
A.b(m.ax,l).M(s)
if((s&1)===0)++A.b(m.ax,l).d
o=A.b(m.ax,l).j()
s=A.b(m.ax,l)
n=s.O(o)
s.d=s.d+(n.c-n.d)
if((o&1)===1)++A.b(m.ax,l).d
if(r===943868237)k.h(0,q,new A.el())}},
i7(){var s,r,q,p,o,n,m,l,k,j=this,i="_layerAndMaskData",h="layers",g=A.b(j.ay,i)
g.d=g.b
s=A.b(j.ay,i).j()
if((s&1)!==0)++s
r=A.b(j.ay,i).T(s)
g=t.cE
j.sfi(t.dl.a(A.c([],g)))
if(s>0){q=r.k()
$.a2()[0]=q
q=$.a9()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.hf,n=t.af,m=0;m<p;++m){l=new A.cM(A.O(q,o),A.c([],g),A.c([],n))
l.f9(r)
J.j5(A.b(j.x,h),l)}}for(m=0;m<J.a4(A.b(j.x,h));++m)J.o(A.b(j.x,h),m).jg(r,j)
s=A.b(j.ay,i).j()
k=A.b(j.ay,i).T(s)
if(s>0){k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.q()}},
i9(){var s,r,q,p,o,n,m=this,l="_imageData",k="channels",j="mergeImageChannels",i=A.b(m.ch,l)
i.d=i.b
s=A.b(m.ch,l).k()
if(s===1){i=m.b
r=A.b(m.f,k)
if(typeof i!=="number")return i.aj()
q=i*r
p=new Uint16Array(q)
for(o=0;o<q;++o){i=A.b(m.ch,l).k()
if(!(o<q))return A.a(p,o)
p[o]=i}}else p=null
m.sfj(t.I.a(A.c([],t.h0)))
for(o=0;o<A.b(m.f,k);++o){i=A.b(m.y,j)
r=A.b(m.ch,l)
r.toString
n=o===3?-1:o
n=new A.bv(n)
n.ev(r,m.a,m.b,m.r,s,p,o)
J.j5(i,n)}m.z=A.kK(m.w,m.r,m.a,m.b,A.b(m.y,j))},
sfi(a){this.x=t.dl.a(a)},
sfj(a){this.y=t.I.a(a)}}
A.el.prototype={}
A.cM.prototype={
f9(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.j(),a6=$.B()
a6[0]=a5
a5=$.Q()
if(0>=a5.length)return A.a(a5,0)
a4.a=a5[0]
a6[0]=a7.j()
a4.b=a5[0]
a6[0]=a7.j()
a4.c=a5[0]
a6[0]=a7.j()
a5=a5[0]
a4.d=a5
a5=A.b(a5,"right")
a6=a4.b
a6.toString
a4.e=a5-a6
a6=A.b(a4.c,"bottom")
a5=a4.a
a5.toString
a4.f=a6-a5
a4.sfk(t.I.a(A.c([],t.h0)))
s=a7.k()
for(r=0;r<s;++r){a5=a7.k()
$.a2()[0]=a5
a5=$.a9()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.j()
J.j5(A.b(a4.as,"channels"),new A.bv(q))}p=a7.j()
if(p!==943868237)throw A.d(A.f("Invalid PSD layer signature: "+B.a.bI(p,16)))
a4.r=a7.j()
a4.w=a7.q()
a7.q()
a4.y=a7.q()
if(a7.q()!==0)throw A.d(A.f("Invalid PSD layer data"))
o=a7.j()
n=a7.T(o)
if(o>0){o=n.j()
if(o>0){m=n.T(o)
a5=m.d
m.j()
m.j()
m.j()
m.j()
m.q()
m.q()
if(m.c-a5===20)m.d+=2
else{m.q()
m.q()
m.j()
m.j()
m.j()
m.j()}}o=n.j()
if(o>0)new A.h9().f7(n.T(o))
o=n.q()
n.M(o)
l=4-B.a.N(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.ay,k=a4.cy,j=t.t,i=t.g0;n.d<a5;){p=n.j()
if(p!==943868237)throw A.d(A.f("PSD invalid signature for layer additional data: "+B.a.bI(p,16)))
h=n.M(4)
o=n.j()
g=n.O(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.mU(h,g))
if(h==="lrFX"){e=A.i(i.a(a6.p(0,"lrFX")).b,null,0)
e.k()
d=e.k()
for(c=0;c<d;++c){e.M(4)
b=e.M(4)
a=e.j()
if(b==="dsdw"){a0=new A.ek()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saA(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.M(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saG(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="isdw"){a0=new A.en()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saA(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.M(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saG(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="oglw"){a0=new A.ep()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saA(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.M(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.saG(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="iglw"){a0=new A.em()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saA(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.M(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saG(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}}else if(b==="bevl"){a0=new A.ej()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.M(8)
e.M(8)
a0.sj2(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
a0.seN(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
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
if(a0.a===2){a0.sjm(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
a0.sjn(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}}else if(b==="sofi"){a0=new A.eq()
B.b.v(k,a0)
a0.a=e.j()
e.M(4)
a0.saA(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.saG(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else e.d+=a}}}}},
jg(a,b){var s,r=this,q="channels"
for(s=0;s<J.a4(A.b(r.as,q));++s)J.o(A.b(r.as,q),s).jj(a,A.b(r.e,"width"),A.b(r.f,"height"),b.r)
r.cx=A.kK(b.w,b.r,A.b(r.e,"width"),A.b(r.f,"height"),A.b(r.as,q))},
sfk(a){this.as=t.I.a(a)}}
A.bT.prototype={}
A.ha.prototype={
ae(a){this.a=A.kJ(t.L.a(a))
return this.a1(0)},
a1(a){var s=this.a
if(s==null)return null
return s.iP()}}
A.hj.prototype={}
A.hi.prototype={
bh(a){var s=A.l(t.L.a(a),!0,null,0).T(18),r=s.a,q=s.d,p=q+2,o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==2)return!1
q+=16
if(!(q>=0&&q<o))return A.a(r,q)
q=r[q]
if(q!==24&&q!==32)return!1
return!0},
az(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
l.a=new A.hj()
s=A.l(a,!0,null,0)
l.b=s
r=A.b(s,"input").T(18)
s=r.a
q=r.d
p=q+2
o=s.length
if(!(p>=0&&p<o))return A.a(s,p)
if(s[p]!==2)return null
p=q+16
if(!(p>=0&&p<o))return A.a(s,p)
p=s[p]
if(p!==24&&p!==32)return null
p=l.a
p.toString
n=q+12
if(!(n>=0&&n<o))return A.a(s,n)
n=s[n]
m=q+13
if(!(m>=0&&m<o))return A.a(s,m)
p.a=n&255|(s[m]&255)<<8
m=q+14
if(!(m>=0&&m<o))return A.a(s,m)
m=s[m]
q+=15
if(!(q>=0&&q<o))return A.a(s,q)
p.b=m&255|(s[q]&255)<<8
p.d=A.b(l.b,"input").d
p=l.a
p.toString
q=r.a
s=r.d+16
if(!(s>=0&&s<q.length))return A.a(q,s)
p.e=q[s]
return p},
a1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="input"
if(f.a==null)return null
s=A.b(f.b,e)
r=f.a
q=r.d
q.toString
s.d=q
p=A.V(r.a,r.b,B.w,null,null)
for(o=p.b-1,s=p.a,r=p.x,q=r.length;o>=0;--o)for(n=o*s,m=0;m<s;++m){l=A.b(f.b,e)
k=l.a
l=l.d++
if(!(l>=0&&l<k.length))return A.a(k,l)
l=k[l]
k=A.b(f.b,e)
j=k.a
k=k.d++
if(!(k>=0&&k<j.length))return A.a(j,k)
k=j[k]
j=A.b(f.b,e)
i=j.a
j=j.d++
if(!(j>=0&&j<i.length))return A.a(i,j)
j=i[j]
if(f.a.e===32){i=A.b(f.b,e)
h=i.a
i=i.d++
if(!(i>=0&&i<h.length))return A.a(h,i)
g=h[i]}else g=255
i=B.c.m(B.a.n(g,0,255))
l=B.c.m(B.a.n(l,0,255))
k=B.c.m(B.a.n(k,0,255))
j=B.c.m(B.a.n(j,0,255))
h=n+m
if(!(h>=0&&h<q))return A.a(r,h)
r[h]=(i<<24|l<<16|k<<8|j)>>>0}return p},
ae(a){if(this.az(t.L.a(a))==null)return null
return this.a1(0)}}
A.hl.prototype={
L(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.q()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.D(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.j,q)
r=p+(o&B.j[q])
a-=q
n.c=8
q=s.a
o=s.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
n.b=q[o]}if(a>0){if(q===0){n.c=8
n.b=s.q()}s=B.a.D(r,a)
q=n.b
p=n.c-a
q=B.a.a3(q,p)
if(!(a<9))return A.a(B.j,a)
r=s+(q&B.j[a])
n.c=p}return r}}
A.ey.prototype={
t(a){var s=this,r=s.a
if(B.as.a5(r))return A.v(B.as.p(0,r))+": "+s.b+" "+s.c
return"<"+r+">: "+s.b+" "+s.c},
jl(){var s=this.d
s.toString
this.e.d=s
return this.an()},
cU(){var s,r,q=this,p=q.d
p.toString
q.e.d=p
s=A.c([],t.t)
for(p=q.c,r=0;r<p;++r)B.b.v(s,q.an())
return s},
an(){var s,r,q,p=this
switch(p.b){case 1:case 2:return p.e.q()
case 3:return p.e.k()
case 4:return p.e.j()
case 5:s=p.e
r=s.j()
q=s.j()
if(q===0)return 0
return B.a.V(r,q)
case 6:throw A.d(A.f("Unhandled value type: SBYTE"))
case 7:return p.e.q()
case 8:throw A.d(A.f("Unhandled value type: SSHORT"))
case 9:throw A.d(A.f("Unhandled value type: SLONG"))
case 10:throw A.d(A.f("Unhandled value type: SRATIONAL"))
case 11:throw A.d(A.f("Unhandled value type: FLOAT"))
case 12:throw A.d(A.f("Unhandled value type: DOUBLE"))}return 0}}
A.hn.prototype={
iM(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.G(p.a+7,8)
for(r=0,q=0;q<d;++q){p.cq(a,r,c)
r+=s}},
cq(a,b,c){var s,r,q,p,o,n,m,l=this
l.d=0
for(s=l.a,r=!0;c<s;){for(;r;){q=l.aP(10)
if(!(q<1024))return A.a(B.F,q)
p=B.F[q]
o=B.a.i(p,1)&15
if(o===12){q=(q<<2&12|l.a4(2))>>>0
if(!(q<16))return A.a(B.l,q)
p=B.l[q]
n=B.a.i(p,1)
c+=B.a.i(p,4)&4095
l.X(4-(n&7))}else if(o===0)throw A.d(A.f("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.f("TIFFFaxDecoder1"))
else{c+=B.a.i(p,5)&2047
l.X(10-o)
if((p&1)===0){B.b.h(l.f,l.d++,c)
r=!1}}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}for(;!r;){q=l.a4(4)
if(!(q<16))return A.a(B.z,q)
p=B.z[q]
m=p>>>5&2047
if(m===100){q=l.aP(9)
if(!(q<512))return A.a(B.I,q)
p=B.I[q]
o=B.a.i(p,1)&15
m=B.a.i(p,5)&2047
if(o===12){l.X(5)
q=l.a4(4)
if(!(q<16))return A.a(B.l,q)
p=B.l[q]
n=B.a.i(p,1)
m=B.a.i(p,4)&4095
l.a8(a,b,c,m)
c+=m
l.X(4-(n&7))}else if(o===15)throw A.d(A.f("TIFFFaxDecoder2"))
else{l.a8(a,b,c,m)
c+=m
l.X(9-o)
if((p&1)===0){B.b.h(l.f,l.d++,c)
r=!0}}}else{if(m===200){q=l.a4(2)
if(!(q<4))return A.a(B.y,q)
p=B.y[q]
m=p>>>5&2047
l.a8(a,b,c,m)
c+=m
l.X(2-(p>>>1&15))
B.b.h(l.f,l.d++,c)}else{l.a8(a,b,c,m)
c+=m
l.X(4-(p>>>1&15))
B.b.h(l.f,l.d++,c)}r=!0}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}}B.b.h(l.f,l.d++,c)},
iN(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.G(s+7,8)
q=A.X(2,null,!1,t.B)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.dW()!==1)throw A.d(A.f("TIFFFaxDecoder3"))
a0.cq(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.dW()===0){n=a0.e
a0.scS(a0.f)
a0.scQ(n)
a0.y=0
m=a3
l=-1
k=!0
j=0
while(!0){m.toString
if(!(m<s))break
a0.dD(l,k,q)
i=q[0]
h=q[1]
g=a0.a4(7)
if(!(g<128))return A.a(B.A,g)
g=B.A[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.a8(a1,p,m,h-m)}a0.X(7-e)
m=h
l=m}else if(f===1){a0.X(7-e)
d=j+1
c=d+1
if(k){m+=a0.bU()
B.b.h(a0.f,j,m)
b=a0.bT()
a0.a8(a1,p,m,b)
m+=b
B.b.h(a0.f,d,m)}else{b=a0.bT()
a0.a8(a1,p,m,b)
m+=b
B.b.h(a0.f,j,m)
m+=a0.bU()
B.b.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.b.h(a0.f,j,a)
k=!k
if(k)a0.a8(a1,p,m,a-m)
a0.X(7-e)}else throw A.d(A.f("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.b.h(a0.f,j,m)
a0.d=j+1}else a0.cq(a1,p,a3)
p+=r}},
iR(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
s=a3.a
r=B.a.G(s+7,8)
q=A.X(2,null,!1,t.B)
p=a3.f
a3.d=0
a3.d=1
B.b.h(p,0,s)
B.b.h(p,a3.d++,s)
for(o=0,n=0;n<a7;++n){m=a3.e
a3.scS(a3.f)
a3.scQ(m)
a3.y=0
l=a6
k=-1
j=!0
i=0
while(!0){l.toString
if(!(l<s))break
a3.dD(k,j,q)
h=q[0]
g=q[1]
f=a3.a4(7)
if(!(f<128))return A.a(B.A,f)
f=B.A[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a3.a8(a4,o,l,g-l)}a3.X(7-d)
l=g
k=l}else if(e===1){a3.X(7-d)
c=i+1
b=c+1
if(j){l+=a3.bU()
B.b.h(m,i,l)
a=a3.bT()
a3.a8(a4,o,l,a)
l+=a
B.b.h(m,c,l)}else{a=a3.bT()
a3.a8(a4,o,l,a)
l+=a
B.b.h(m,i,l)
l+=a3.bU()
B.b.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.b.h(m,i,a0)
j=!j
if(j)a3.a8(a4,o,l,a0-l)
a3.X(7-d)
l=a0
i=c
k=l}else if(e===11){if(a3.a4(3)!==7)throw A.d(A.f("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.a4(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.b.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
if(a3.a4(1)===0){if(!j){c=i+1
B.b.h(m,i,l)
i=c}j=!0}else{if(j){c=i+1
B.b.h(m,i,l)
i=c}j=!1}a2=!0}if(a1===5){if(!j){c=i+1
B.b.h(m,i,l)
i=c}l+=a1
j=!0}else{l+=a1
c=i+1
B.b.h(m,i,l)
a3.a8(a4,o,l,1);++l
i=c
j=!1}}}else throw A.d(A.f("TIFFFaxDecoder5 "+e))}B.b.h(m,i,l)
a3.d=i+1
o+=r}},
bU(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.aP(10)
if(!(q<1024))return A.a(B.F,q)
p=B.F[q]
o=B.a.i(p,1)&15
if(o===12){q=(q<<2&12|m.a4(2))>>>0
if(!(q<16))return A.a(B.l,q)
p=B.l[q]
n=B.a.i(p,1)
s+=B.a.i(p,4)&4095
m.X(4-(n&7))}else if(o===0)throw A.d(A.f("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.f("TIFFFaxDecoder1"))
else{s+=B.a.i(p,5)&2047
m.X(10-o)
if((p&1)===0)r=!1}}return s},
bT(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.a4(4)
if(!(q<16))return A.a(B.z,q)
p=B.z[q]
o=p>>>5&2047
if(o===100){q=l.aP(9)
if(!(q<512))return A.a(B.I,q)
p=B.I[q]
n=B.a.i(p,1)&15
m=B.a.i(p,5)
if(n===12){l.X(5)
q=l.a4(4)
if(!(q<16))return A.a(B.l,q)
p=B.l[q]
m=B.a.i(p,1)
s+=B.a.i(p,4)&4095
l.X(4-(m&7))}else if(n===15)throw A.d(A.f("TIFFFaxDecoder2"))
else{s+=m&2047
l.X(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.a4(2)
if(!(q<4))return A.a(B.y,q)
p=B.y[q]
s+=p>>>5&2047
l.X(2-(p>>>1&15))}else{s+=o
l.X(4-(p>>>1&15))}r=!0}}return s},
dW(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.aP(12)!==1)throw A.d(A.f("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.aP(s)!==0)throw A.d(A.f(p))
if(s<4)if(q.aP(8)!==0)throw A.d(A.f(p))
for(;r=q.aP(8),r!==1;)if(r!==0)throw A.d(A.f(p))}if(q.at===0)return 1
else return q.a4(1)},
dD(a,b,c){var s,r,q,p,o,n,m=this
t.cP.a(c)
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
B.b.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.b.h(c,1,s[n])}},
a8(a,b,c,d){var s,r,q,p,o,n=8*b+A.n(c),m=n+d,l=B.a.i(n,3),k=n&7
if(k>0){s=B.a.D(1,7-k)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
while(!0){if(!(s>0&&n<m))break
p=(p|s)>>>0
s=s>>>1;++n}a.h(0,l,p)}l=B.a.i(n,3)
for(r=m-7;n<r;l=o){o=l+1
J.m(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.i(n,3)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
J.m(r,q,(r[q]|B.a.D(1,7-(n&7)))>>>0);++n}},
aP(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="data",f=A.b(h.r,g),e=f.c-f.d-1,d=h.x
f=h.c
if(f===1){f=A.b(h.r,g)
d.toString
s=f.a
f=f.d+d
if(!(f>=0&&f<s.length))return A.a(s,f)
r=s[f]
if(d===e){q=0
p=0}else{f=d+1
s=h.r
if(f===e){s=A.b(s,g)
o=s.a
f=s.d+f
if(!(f>=0&&f<o.length))return A.a(o,f)
q=o[f]
p=0}else{s=A.b(s,g)
o=s.a
f=s.d+f
if(!(f>=0&&f<o.length))return A.a(o,f)
q=o[f]
f=A.b(h.r,g)
o=f.a
f=f.d+(d+2)
if(!(f>=0&&f<o.length))return A.a(o,f)
p=o[f]}}}else if(f===2){f=A.b(h.r,g)
d.toString
s=f.a
f=f.d+d
if(!(f>=0&&f<s.length))return A.a(s,f)
r=B.p[s[f]&255]
if(d===e){q=0
p=0}else{f=d+1
s=h.r
if(f===e){s=A.b(s,g)
o=s.a
f=s.d+f
if(!(f>=0&&f<o.length))return A.a(o,f)
q=B.p[o[f]&255]
p=0}else{s=A.b(s,g)
o=s.a
f=s.d+f
if(!(f>=0&&f<o.length))return A.a(o,f)
q=B.p[o[f]&255]
f=A.b(h.r,g)
o=f.a
f=f.d+(d+2)
if(!(f>=0&&f<o.length))return A.a(o,f)
p=B.p[o[f]&255]}}}else throw A.d(A.f("TIFFFaxDecoder7"))
f=h.w
f.toString
n=8-f
m=a-n
if(m>8){l=m-8
k=8}else{k=m
l=0}f=h.x
f.toString
f=h.x=f+1
if(!(n>=0&&n<9))return A.a(B.j,n)
j=B.a.D(r&B.j[n],m)
if(!(k>=0))return A.a(B.q,k)
i=B.a.a2(q&B.q[k],8-k)
if(l!==0){i=B.a.D(i,l)
if(!(l<9))return A.a(B.q,l)
i|=B.a.a2(p&B.q[l],8-l)
h.x=f+1
h.w=l}else if(k===8){h.w=0
h.x=f+1}else h.w=k
return(j|i)>>>0},
a4(a){var s,r,q,p,o,n,m,l=this,k="data",j=A.b(l.r,k),i=j.c-j.d-1,h=l.x
j=l.c
if(j===1){j=A.b(l.r,k)
h.toString
s=j.a
j=j.d+h
if(!(j>=0&&j<s.length))return A.a(s,j)
r=s[j]
if(h===i)q=0
else{j=A.b(l.r,k)
s=j.a
j=j.d+(h+1)
if(!(j>=0&&j<s.length))return A.a(s,j)
q=s[j]}}else if(j===2){j=A.b(l.r,k)
h.toString
s=j.a
j=j.d+h
if(!(j>=0&&j<s.length))return A.a(s,j)
r=B.p[s[j]&255]
if(h===i)q=0
else{j=A.b(l.r,k)
s=j.a
j=j.d+(h+1)
if(!(j>=0&&j<s.length))return A.a(s,j)
q=B.p[s[j]&255]}}else throw A.d(A.f("TIFFFaxDecoder7"))
j=l.w
j.toString
p=8-j
o=a-p
n=p-a
if(n>=0){if(!(p>=0&&p<9))return A.a(B.j,p)
m=B.a.a2(r&B.j[p],n)
j+=a
l.w=j
if(j===8){l.w=0
j=l.x
j.toString
l.x=j+1}}else{if(!(p>=0&&p<9))return A.a(B.j,p)
m=B.a.D(r&B.j[p],-n)
if(!(o>=0&&o<9))return A.a(B.q,o)
m=(m|B.a.a2(q&B.q[o],8-o))>>>0
j=l.x
j.toString
l.x=j+1
l.w=o}return m},
X(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s},
scS(a){this.e=t.k.a(a)},
scQ(a){this.f=t.k.a(a)}}
A.ez.prototype={
fb(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.i(a,null,0),f=a.k()
for(s=h.a,r=0;r<f;++r){q=a.k()
p=a.k()
o=a.j()
n=new A.ey(q,p,o,g)
if(p<13&&p>0){if(!(p<14))return A.a(B.aq,p)
m=B.aq[p]}else m=0
if(o*m>4)n.d=a.j()
else{m=a.d
n.d=m
a.d=m+4}s.h(0,q,n)
if(q===256){m=n.d
m.toString
g.d=m
h.b=n.an()}else if(q===257){m=n.d
m.toString
g.d=m
h.c=n.an()}else if(q===262){m=n.d
m.toString
g.d=m
h.d=n.an()}else if(q===259){m=n.d
m.toString
g.d=m
h.e=n.an()}else if(q===258){m=n.d
m.toString
g.d=m
h.f=n.an()}else if(q===277){m=n.d
m.toString
g.d=m
h.r=n.an()}else if(q===317){m=n.d
m.toString
g.d=m
h.z=n.an()}else if(q===339){m=n.d
m.toString
g.d=m
h.w=n.an()}else if(q===320){h.siB(n.cU())
h.go=0
m=h.fy.length/3|0
h.id=m
h.k1=A.b(m,"colorMapGreen")*2}}if(h.b===0||h.c===0)return
m=h.fy
if(m!=null&&h.f===8)for(l=m.length,r=0;r<l;++r){m=h.fy
if(!(r<m.length))return A.a(m,r)
B.b.h(m,r,B.a.i(m[r],8))}if(h.d===0)h.y=!0
if(s.a5(324)){h.ax=h.bc(322)
h.ay=h.bc(323)
h.sez(h.c0(324))
h.sey(h.c0(325))}else{h.ax=h.c_(322,h.b)
if(!s.a5(278))h.ay=h.c_(323,h.c)
else{k=h.bc(278)
if(k===-1)h.ay=h.c
else h.ay=k}h.sez(h.c0(273))
h.sey(h.c0(279))}m=h.b
j=h.ax
h.cx=B.a.V(m+j-1,j)
j=h.c
m=h.ay
h.cy=B.a.V(j+m-1,m)
h.dx=h.c_(266,1)
h.dy=h.bc(292)
h.fr=h.bc(293)
h.bc(338)
switch(h.d){case 0:case 1:s=h.f
if(s===1&&h.r===1)h.x=0
else if(s===4&&h.r===1)h.x=1
else if(B.a.N(s,8)===0){s=h.r
if(s===1)h.x=2
else if(s===2)h.x=3
else h.x=8}break
case 2:if(B.a.N(h.f,8)===0){s=h.r
if(s===3)h.x=5
else if(s===4)h.x=6
else h.x=8}break
case 3:if(h.r===1){s=h.f
s=s===4||s===8||s===16}else s=!1
if(s)h.x=4
break
case 4:if(h.f===1&&h.r===1)h.x=0
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.x=5
else{if(s.a5(530)){i=s.p(0,530).cU()
s=i.length
if(0>=s)return A.a(i,0)
m=h.Q=i[0]
if(1>=s)return A.a(i,1)
h.as=i[1]
s=m}else s=h.as=h.Q=2
if(A.b(s,"chromaSubH")*A.b(h.as,"chromaSubV")===1)h.x=8
else if(h.f===8&&h.r===3)h.x=7}break
default:if(B.a.N(h.f,8)===0)h.x=8
break}},
iK(a){var s,r,q,p,o=this
o.k2=A.V(o.b,o.c,B.f,null,null)
for(s=0,r=0;s<A.b(o.cy,"tilesY");++s)for(q=0;q<A.b(o.cx,"tilesX");++q,++r)o.fV(a,q,s)
p=o.k2
p.toString
return p},
fV(c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="colorMapRed",b9="colorMapGreen",c0="colorMapBlue"
if(b6.x===0){b6.fN(c1,c2,c3)
return}o=c3*A.b(b6.cx,"tilesX")+c2
n=b6.ch
if(!(o>=0&&o<n.length))return A.a(n,o)
c1.d=n[o]
n=b6.ax
m=c2*n
l=b6.ay
k=c3*l
j=b6.CW
if(!(o<j.length))return A.a(j,o)
s=j[o]
i=n*l*b6.r
n=b6.f
l=n===16
if(l)i*=2
else if(n===32)i*=4
r=null
if(n===8||l||n===32||n===64){n=b6.e
if(n===1)r=c1
else if(n===5){r=A.l(new Uint8Array(i),!1,b7,0)
q=A.kx()
try{q.eh(A.i(c1,s,0),r.a)}catch(h){p=A.a1(h)
A.lD(p)}if(b6.z===2)for(g=0;g<b6.ay;++g){f=b6.r
n=b6.ax
e=f*(g*n+1)
for(d=n*f;f<d;++f){n=r
l=n.a
n=n.d+e
if(!(n>=0&&n<l.length))return A.a(l,n)
j=l[n]
c=r
b=b6.r
a=c.a
b=c.d+(e-b)
if(!(b>=0&&b<a.length))return A.a(a,b)
J.m(l,n,j+a[b]);++e}}}else if(n===32773){r=A.l(new Uint8Array(i),!1,b7,0)
b6.ds(c1,i,r.a)}else if(n===32946){n=A.kj(c1.bH(0,0,s)).c
r=A.l(t.L.a(A.J(n.c.buffer,0,n.a)),!1,b7,0)}else if(n===8)r=A.l(B.r.bx(A.bn(t.L.a(c1.bH(0,0,s)),1,b7,0),!1),!1,b7,0)
else if(n===6){if(b6.k2==null)b6.k2=A.V(b6.b,b6.c,B.f,b7,b7)
a0=new A.e1().ae(c1.bH(0,0,s))
n=b6.k2
n.toString
b6.hs(a0,n,m,k,b6.ax,b6.ay)
if(b6.k3!=null){n=b6.k2
n.toString
l=new A.dJ(A.O(t.dk,t.r))
l.f4(n,16,3)
b6.k3=l}return}else throw A.d(A.f("Unsupported Compression Type: "+n))
a1=k
a2=0
while(!0){if(!(a2<b6.ay&&a1<b6.c))break
a3=m
a4=0
while(!0){if(!(a4<b6.ax&&a3<b6.b))break
n=b6.r
if(n===1){n=b6.w
if(n===3){n=b6.f
if(n===32){n=r.j()
$.B()[0]=n
n=$.bg()
if(0>=n.length)return A.a(n,0)
a5=n[0]}else if(n===64)a5=r.c9()
else if(n===16){n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
a5=l[n]}else a5=0
n=b6.k3
if(n!=null)n.aU(a3,a1,a5)
if(b6.k2!=null){a6=B.c.m(B.c.n(a5*255,0,255))
if(b6.d===3&&b6.fy!=null){n=b6.fy
n.toString
l=A.b(b6.go,b8)+a6
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=b6.fy
n.toString
j=A.b(b6.id,b9)+a6
if(!(j>=0&&j<n.length))return A.a(n,j)
j=n[j]
n=b6.fy
n.toString
c=A.b(b6.k1,c0)+a6
if(!(c>=0&&c<n.length))return A.a(n,c)
c=n[c]
a7=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(c,0,255))<<16|B.c.m(B.a.n(j,0,255))<<8|B.c.m(B.a.n(l,0,255)))>>>0}else a7=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(a6,0,255))<<16|B.c.m(B.a.n(a6,0,255))<<8|B.c.m(B.a.n(a6,0,255)))>>>0
n=b6.k2
l=n.x
n=a1*n.a+a3
if(!(n>=0&&n<l.length))return A.a(l,n)
l[n]=a7}}else{l=b6.f
if(l===8)if(n===2){n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
$.Y()[0]=n
n=$.a3()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
a6=l[n]}else if(l===16)if(n===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.k()
else if(l===32)if(n===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.j()
else a6=0
n=b6.k3
if(n!=null)n.aU(a3,a1,a6)
if(b6.k2!=null){n=b6.f
if(n===16)a6=B.a.i(a6,8)
else if(n===32)a6=B.a.i(a6,24)
n=b6.d
if(n===0)a6=255-a6
if(n===3&&b6.fy!=null){n=b6.fy
n.toString
l=A.b(b6.go,b8)+a6
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=b6.fy
n.toString
j=A.b(b6.id,b9)+a6
if(!(j>=0&&j<n.length))return A.a(n,j)
j=n[j]
n=b6.fy
n.toString
c=A.b(b6.k1,c0)+a6
if(!(c>=0&&c<n.length))return A.a(n,c)
c=n[c]
a7=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(c,0,255))<<16|B.c.m(B.a.n(j,0,255))<<8|B.c.m(B.a.n(l,0,255)))>>>0}else a7=(B.c.m(B.a.n(255,0,255))<<24|B.c.m(B.a.n(a6,0,255))<<16|B.c.m(B.a.n(a6,0,255))<<8|B.c.m(B.a.n(a6,0,255)))>>>0
n=b6.k2
l=n.x
n=a1*n.a+a3
if(!(n>=0&&n<l.length))return A.a(l,n)
l[n]=a7}}}else if(n===2){n=b6.f
if(n===8){n=b6.w===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
a6=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a6=j[l]}if(n){n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
$.Y()[0]=n
n=$.a3()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
a8=l[n]}}else if(n===16){if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else a8=r.k()}else if(n===32){if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else a8=r.j()}else{a6=0
a8=0}n=b6.k3
if(n!=null){n.aU(a3,a1,a6)
b6.k3.bl(a3,a1,a8)}if(b6.k2!=null){n=b6.f
l=n===16
if(l)a6=B.a.i(a6,8)
else if(n===32)a6=B.a.i(a6,24)
if(l)a8=B.a.i(a8,8)
else if(n===32)a8=B.a.i(a8,24)
n=B.c.m(B.a.n(a8,0,255))
l=B.c.m(B.a.n(a6,0,255))
j=B.c.m(B.a.n(a6,0,255))
c=B.c.m(B.a.n(a6,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else if(n===3){n=b6.w
if(n===3){n=b6.f
if(n===32){n=r.j()
l=$.B()
l[0]=n
n=$.bg()
if(0>=n.length)return A.a(n,0)
a9=n[0]
l[0]=r.j()
b0=n[0]
l[0]=r.j()
b1=n[0]}else if(n===64){a9=r.c9()
b0=0
b1=0}else if(n===16){n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
a9=l[n]
n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
b0=l[n]
n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
b1=l[n]}else{a9=0
b0=0
b1=0}n=b6.k3
if(n!=null){n.aU(a3,a1,a9)
b6.k3.bl(a3,a1,b0)
b6.k3.bN(a3,a1,b1)}if(b6.k2!=null){b2=B.c.m(B.c.n(a9*255,0,255))
b3=B.c.m(B.c.n(b0*255,0,255))
b4=B.c.m(B.c.n(b1*255,0,255))
n=B.c.m(B.a.n(255,0,255))
l=B.c.m(B.a.n(b4,0,255))
j=B.c.m(B.a.n(b3,0,255))
c=B.c.m(B.a.n(b2,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){n=n===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
a9=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a9=j[l]}if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
b0=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b0=j[l]}if(n){n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
$.Y()[0]=n
n=$.a3()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
b1=l[n]}}else if(l===16){if(n===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.k()}else if(l===32){if(n===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.j()}else{a9=0
b0=0
b1=0}n=b6.k3
if(n!=null){n.aU(a3,a1,a9)
b6.k3.bl(a3,a1,b0)
b6.k3.bN(a3,a1,b1)}if(b6.k2!=null){n=b6.f
l=n===16
if(l)a9=B.a.i(a9,8)
else if(n===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(n===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(n===32)b1=B.a.i(b1,24)
n=B.c.m(B.a.n(255,0,255))
l=B.c.m(B.a.n(b1,0,255))
j=B.c.m(B.a.n(b0,0,255))
c=B.c.m(B.a.n(a9,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}}else if(n>=4){n=b6.w
if(n===3){n=b6.f
if(n===32){n=r.j()
l=$.B()
l[0]=n
n=$.bg()
if(0>=n.length)return A.a(n,0)
a9=n[0]
l[0]=r.j()
b0=n[0]
l[0]=r.j()
b1=n[0]
l[0]=r.j()
b5=n[0]}else if(n===64){a9=r.c9()
b0=0
b1=0
b5=0}else if(n===16){n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
a9=l[n]
n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
b0=l[n]
n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
b1=l[n]
n=r.k()
if($.P==null)A.aK()
l=$.P
if(!(n<l.length))return A.a(l,n)
b5=l[n]}else{a9=0
b0=0
b1=0
b5=0}n=b6.k3
if(n!=null){n.aU(a3,a1,a9)
b6.k3.bl(a3,a1,b0)
b6.k3.bN(a3,a1,b1)
b6.k3.d_(a3,a1,b5)}if(b6.k2!=null){b2=B.c.m(B.c.n(a9*255,0,255))
b3=B.c.m(B.c.n(b0*255,0,255))
b4=B.c.m(B.c.n(b1*255,0,255))
n=B.c.m(B.a.n(B.c.m(B.c.n(b5*255,0,255)),0,255))
l=B.c.m(B.a.n(b4,0,255))
j=B.c.m(B.a.n(b3,0,255))
c=B.c.m(B.a.n(b2,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){n=n===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
a9=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a9=j[l]}if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
b0=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b0=j[l]}if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.Y()[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
b1=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b1=j[l]}if(n){n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
$.Y()[0]=n
n=$.a3()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
b5=l[n]}}else if(l===16){if(n===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.k()
if(b6.w===2){n=r.k()
$.a2()[0]=n
n=$.a9()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else b5=r.k()}else if(l===32){if(n===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.j()
if(b6.w===2){n=r.j()
$.B()[0]=n
n=$.Q()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else b5=r.j()}else{a9=0
b0=0
b1=0
b5=0}n=b6.k3
if(n!=null){n.aU(a3,a1,a9)
b6.k3.bl(a3,a1,b0)
b6.k3.bN(a3,a1,b1)
b6.k3.d_(a3,a1,b5)}if(b6.k2!=null){n=b6.f
l=n===16
if(l)a9=B.a.i(a9,8)
else if(n===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(n===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(n===32)b1=B.a.i(b1,24)
if(l)b5=B.a.i(b5,8)
else if(n===32)b5=B.a.i(b5,24)
n=B.c.m(B.a.n(b5,0,255))
l=B.c.m(B.a.n(b1,0,255))
j=B.c.m(B.a.n(b0,0,255))
c=B.c.m(B.a.n(a9,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}}++a4;++a3}++a2;++a1}}else throw A.d(A.f("Unsupported bitsPerSample: "+n))},
hs(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.x,r=a.a,q=s.length,p=b.x,o=b.a,n=p.length,m=0;m<f;++m)for(l=m*r,k=(m+d)*o,j=0;j<e;++j){i=l+j
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=k+(j+c)
if(!(h>=0&&h<n))return A.a(p,h)
p[h]=i}},
fN(b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=4278190080,a7=4294967295,a8=b2*A.b(a4.cx,"tilesX")+b1,a9=a4.ch
if(!(a8>=0&&a8<a9.length))return A.a(a9,a8)
b0.d=a9[a8]
a9=a4.ax
r=b1*a9
q=a4.ay
p=b2*q
o=a4.CW
if(!(a8<o.length))return A.a(o,a8)
n=o[a8]
s=null
o=a4.e
if(o===32773){m=B.a.N(a9,8)===0?B.a.G(a9,8)*q:(B.a.G(a9,8)+1)*q
s=A.l(new Uint8Array(a9*q),!1,a5,0)
a4.ds(b0,m,s.a)}else if(o===5){s=A.l(new Uint8Array(a9*q),!1,a5,0)
A.kx().eh(A.i(b0,n,0),s.a)
if(a4.z===2)for(l=0;l<a4.c;++l){k=a4.r
j=k*(l*a4.b+1)
for(;a9=a4.b,q=a4.r,k<a9*q;++k){a9=s
o=a9.a
a9=a9.d+j
if(!(a9>=0&&a9<o.length))return A.a(o,a9)
i=o[a9]
h=s
g=h.a
q=h.d+(j-q)
if(!(q>=0&&q<g.length))return A.a(g,q)
J.m(o,a9,i+g[q]);++j}}}else if(o===2){s=A.l(new Uint8Array(a9*q),!1,a5,0)
try{A.ju(a4.dx,a9,q).iM(s,b0,0,a4.ay)}catch(f){}}else if(o===3){s=A.l(new Uint8Array(a9*q),!1,a5,0)
try{A.ju(a4.dx,a9,q).iN(s,b0,0,a4.ay,a4.dy)}catch(f){}}else if(o===4){s=A.l(new Uint8Array(a9*q),!1,a5,0)
try{A.ju(a4.dx,a9,q).iR(s,b0,0,a4.ay,a4.fr)}catch(f){}}else if(o===8)s=A.l(B.r.bx(A.bn(t.L.a(b0.bH(0,0,n)),1,a5,0),!1),!1,a5,0)
else if(o===32946){a9=A.kj(b0.bH(0,0,n)).c
s=A.l(t.L.a(A.J(a9.c.buffer,0,a9.a)),!1,a5,0)}else if(o===1)s=b0
else throw A.d(A.f("Unsupported Compression Type: "+o))
e=new A.hl(s)
a9=a4.y
d=a9?a6:a7
c=a9?a7:a6
b=a4.k2
for(a9=b.x,q=b.a,o=a9.length,i=b.b,a=p,a0=0;a0<a4.ay;++a0,++a){for(h=a*q,g=a<i,a1=r,a2=0;a2<a4.ax;++a2,++a1){if(!g||a1>=q)break
a3=h+a1
if(e.L(1)===0){if(!(a3>=0&&a3<o))return A.a(a9,a3)
a9[a3]=c}else{if(!(a3>=0&&a3<o))return A.a(a9,a3)
a9[a3]=d}}e.c=0}},
ds(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(c)
for(s=J.I(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.Y()[0]=m
m=$.a3()
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
c_(a,b){var s=this.a
if(!s.a5(a))return b
return s.p(0,a).jl()},
bc(a){return this.c_(a,0)},
c0(a){var s=this.a
if(!s.a5(a))return null
return s.p(0,a).cU()},
sez(a){this.ch=t.T.a(a)},
sey(a){this.CW=t.T.a(a)},
siB(a){this.fy=t.T.a(a)}}
A.ho.prototype={}
A.fW.prototype={
eh(a,b){var s,r,q,p,o,n,m,l,k=this,j="_data",i="_outPointer",h="_out",g="_bufferLength"
t.L.a(b)
k.sfh(b)
s=b.length
k.w=0
r=t.D.a(a.a)
k.e=r
k.f=A.b(r,j).length
k.b=a.d
r=A.b(k.e,j)
if(0>=r.length)return A.a(r,0)
if(r[0]===0){r=A.b(k.e,j)
if(1>=r.length)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.d(A.f("Invalid LZW Data"))
k.dJ()
k.d=k.c=0
q=k.cz()
r=k.x
p=0
while(!0){if(!(q!==257&&A.b(k.w,i)<s))break
if(q===256){k.dJ()
q=k.cz()
k.as=0
if(q===257)break
o=A.b(k.r,h)
n=A.b(k.w,i)
k.w=n+1
J.m(o,n,q)
p=q}else{o=k.Q
o.toString
if(q<o){k.dE(q)
for(m=A.b(k.as,g)-1;m>=0;--m){o=A.b(k.r,h)
n=A.b(k.w,i)
k.w=n+1
if(!(m<4096))return A.a(r,m)
J.m(o,n,r[m])}o=A.b(k.as,g)-1
if(!(o>=0&&o<4096))return A.a(r,o)
k.d8(p,r[o])}else{k.dE(p)
for(m=A.b(k.as,g)-1;m>=0;--m){o=A.b(k.r,h)
n=A.b(k.w,i)
k.w=n+1
if(!(m<4096))return A.a(r,m)
J.m(o,n,r[m])}o=A.b(k.r,h)
n=A.b(k.w,i)
k.w=n+1
l=A.b(k.as,g)-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.m(o,n,r[l])
l=A.b(k.as,g)-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.d8(p,r[l])}p=q}q=k.cz()}},
d8(a,b){var s=this,r=A.b(s.y,"_table"),q=s.Q
q.toString
if(!(q<r.length))return A.a(r,q)
r[q]=b
q=A.b(s.z,"_prefix")
r=s.Q
r.toString
if(!(r<q.length))return A.a(q,r)
q[r]=a
r=s.Q=r+1
if(r===511)s.a=10
else if(r===1023)s.a=11
else if(r===2047)s.a=12},
dE(a){var s,r,q,p,o=this,n="_bufferLength"
o.as=0
s=o.x
r=A.b(0,n)
o.as=r+1
q=A.b(o.y,"_table")
if(!(a<q.length))return A.a(q,a)
q=q[a]
if(r>>>0!==r||r>=4096)return A.a(s,r)
s[r]=q
q=A.b(o.z,"_prefix")
if(!(a<q.length))return A.a(q,a)
p=q[a]
for(;p!==4098;){r=A.b(o.as,n)
o.as=r+1
q=A.b(o.y,"_table")
if(!(p>=0&&p<q.length))return A.a(q,p)
q=q[p]
if(r>>>0!==r||r>=4096)return A.a(s,r)
s[r]=q
q=A.b(o.z,"_prefix")
if(!(p<q.length))return A.a(q,p)
p=q[p]}},
cz(){var s,r,q,p=this,o="_dataLength"
if(p.b>=A.b(p.f,o))return 257
for(;s=p.d,r=p.a,s<r;){if(p.b>=A.b(p.f,o))return 257
s=p.c
r=A.b(p.e,"_data")
q=p.b++
if(!(q>=0&&q<r.length))return A.a(r,q)
p.c=(s<<8>>>0)+r[q]>>>0
p.d+=8}s-=r
p.d=s
s=B.a.a2(p.c,s)
r-=9
if(!(r>=0&&r<4))return A.a(B.a5,r)
return s&B.a5[r]},
dJ(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.n.af(A.b(s,"_prefix"),0,A.b(q.z,"_prefix").length,4098)
for(r=0;r<256;++r){s=A.b(q.y,"_table")
if(!(r<s.length))return A.a(s,r)
s[r]=r}q.a=9
q.Q=258},
sfh(a){this.r=t.L.a(a)}}
A.hm.prototype={
ae(a){var s=this,r=A.l(t.L.a(a),!1,null,0)
s.b=r
r=s.a=s.dX(A.b(r,"_input"))
if(r==null)return null
r=r.r
if(0>=r.length)return A.a(r,0)
return r[0].iK(A.b(s.b,"_input"))},
dX(a){var s,r,q,p,o,n,m,l,k,j=null,i=A.c([],t.aU),h=new A.ho(i),g=a.k()
if(g!==18761&&g!==19789)return j
if(g===19789)a.e=!0
else a.e=!1
q=a.k()
h.e=q
if(q!==42)return j
p=a.j()
s=A.i(a,j,0)
s.d=p
for(q=t.p,o=t.cV;p!==0;){r=null
try{n=new A.ez(A.O(q,o))
n.fb(s)
r=n
m=r
if(!(m.b!==0&&m.c!==0))break}catch(l){break}B.b.v(i,r)
m=i.length
if(m===1){if(0>=m)return A.a(i,0)
k=i[0]
h.a=k.b
if(0>=m)return A.a(i,0)
h.b=k.c}p=s.j()
if(p!==0)s.d=p}return i.length!==0?h:j}}
A.hu.prototype={
by(){var s,r=this.a,q=r.ah()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.ah()!==2752925)return!1
s=this.b
s.a=r.k()
s.b=r.k()
return!0},
aB(){var s,r=this,q=null
if(!r.hi())return q
s=r.b
r.d=A.V(s.a,s.b,B.f,q,q)
r.ho()
if(!r.hE())return q
return r.d},
hi(){var s,r,q,p,o=this,n="partitionLength"
if(!o.by())return!1
o.fr=A.nG()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.b.h(s,r,new A.eI(q,p,new Int32Array(2)))}s=o.b
q=s.a
if(typeof q!=="number")return q.a3()
B.a.i(q,8)
s=s.b
if(typeof s!=="number")return s.a3()
B.a.i(s,8)
o.y=o.Q=0
o.z=q
o.as=s
o.at=B.a.i(q+15,4)
o.ax=B.a.i(s+15,4)
o.k1=0
s=o.a
q=o.f
o.c=A.kX(s.O(A.b(q.d,n)))
s.d+=A.b(q.d,n)
A.b(o.c,"br").C(1)
A.b(o.c,"br").C(1)
o.hK(o.x,o.fr)
o.hD()
if(!o.hG(s))return!1
o.hI()
A.b(o.c,"br").C(1)
o.hH()
return!0},
hK(a,b){var s,r,q,p=this,o="br",n=A.b(p.c,o).C(1)!==0
a.a=n
if(n){a.b=A.b(p.c,o).C(1)!==0
if(A.b(p.c,o).C(1)!==0){a.c=A.b(p.c,o).C(1)!==0
for(n=a.d,s=0;s<4;++s){if(A.b(p.c,o).C(1)!==0){r=A.b(p.c,o)
q=r.C(7)
r=r.C(1)===1?-q:q}else r=0
n[s]=r}for(n=a.e,s=0;s<4;++s){if(A.b(p.c,o).C(1)!==0){r=A.b(p.c,o)
q=r.C(6)
r=r.C(1)===1?-q:q}else r=0
n[s]=r}}if(a.b)for(s=0;s<3;++s){n=b.a
n[s]=A.b(p.c,o).C(1)!==0?A.b(p.c,o).C(8):255}}else a.b=!1
return!0},
hD(){var s,r,q,p,o=this,n="br",m=o.w
m.a=A.b(o.c,n).C(1)!==0
m.b=A.b(o.c,n).C(6)
m.c=A.b(o.c,n).C(3)
s=A.b(o.c,n).C(1)!==0
m.d=s
if(A.b(s,"useLfDelta"))if(A.b(o.c,n).C(1)!==0){for(s=m.e,r=0;r<4;++r)if(A.b(o.c,n).C(1)!==0){q=A.b(o.c,n)
p=q.C(6)
s[r]=q.C(1)===1?-p:p}for(s=m.f,r=0;r<4;++r)if(A.b(o.c,n).C(1)!==0){q=A.b(o.c,n)
p=q.C(6)
s[r]=q.C(1)===1?-p:p}}if(m.b===0)s=0
else s=A.b(m.a,"simple")?1:2
o.a9=s
return!0},
hG(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=B.a.A(1,A.b(this.c,"br").C(2))
this.cy=g
s=A.b(g,"_numPartitions")-1
r=s*3
if(h<r)return!1
for(g=this.db,q=0,p=0;p<s;++p,r=i){o=a.b5(3,q)
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
n=new A.cV(a.aV(i-r,r))
n.b=254
n.c=0
n.d=-8
B.b.h(g,p,n)
q+=3}B.b.h(g,s,A.kX(a.aV(h-r,a.d-a.b+r)))
return r<h},
hI(){var s,r,q,p,o,n,m,l=this,k="br",j=A.b(l.c,k).C(7),i=A.b(l.c,k).C(1)!==0?A.b(l.c,k).bk(4):0,h=A.b(l.c,k).C(1)!==0?A.b(l.c,k).bk(4):0,g=A.b(l.c,k).C(1)!==0?A.b(l.c,k).bk(4):0,f=A.b(l.c,k).C(1)!==0?A.b(l.c,k).bk(4):0,e=A.b(l.c,k).C(1)!==0?A.b(l.c,k).bk(4):0,d=l.x
for(s=l.dy,r=d.d,q=0;q<4;++q){if(d.a){p=r[q]
if(!d.c)p+=j}else{if(q>0){o=s[0]
if(!(q>=0&&q<4))return A.a(s,q)
s[q]=o
continue}p=j}n=s[q]
o=n.a
m=p+i
if(m<0)m=0
else if(m>127)m=127
o[0]=B.P[m]
if(p<0)m=0
else m=p>127?127:p
o[1]=B.Q[m]
m=n.b
o=p+h
if(o<0)o=0
else if(o>127)o=127
m[0]=B.P[o]*2
o=p+g
if(o<0)o=0
else if(o>127)o=127
m[1]=B.Q[o]*101581>>>16
if(m[1]<8)m[1]=8
o=n.c
m=p+f
if(m<0)m=0
else if(m>117)m=117
o[0]=B.P[m]
m=p+e
if(m<0)m=0
else if(m>127)m=127
o[1]=B.Q[m]}},
hH(){var s,r,q,p,o,n,m=this,l="br",k=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=A.b(m.c,l).I(B.bR[s][r][q][p])!==0?A.b(m.c,l).C(8):B.c7[s][r][q][p]
n=k.b
if(!(s<n.length))return A.a(n,s)
n=n[s]
if(!(r<n.length))return A.a(n,r)
n=n[r].a
if(!(q<n.length))return A.a(n,q)
n[q][p]=o}n=A.b(m.c,l).C(1)!==0
m.fx=n
if(A.b(n,"_useSkipProba"))m.fy=A.b(m.c,l).C(8)},
hM(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="sharpness",f=h.a9
f.toString
if(f>0){s=h.w
for(f=s.e,r=s.f,q=h.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){k=J.o(J.o(A.b(h.a6,"_fStrengths"),o),l)
if(A.b(s.d,"useLfDelta")){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){if(A.b(s.c,g)>0){i=A.b(s.c,g)>4?B.a.i(j,2):B.a.i(j,1)
if(i>9-A.b(s.c,g))i=9-A.b(s.c,g)}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
ho(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.at
if(f!=null)i.aQ=f
s=J.aa(4,t.e6)
for(f=t.ao,r=0;r<4;++r)s[r]=A.c([new A.aS(),new A.aS()],f)
i.sfn(t.gS.a(s))
f=i.at
f.toString
s=J.aa(f,t.dE)
for(q=0;q<f;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.cZ(p,o,new Uint8Array(8))}i.sfq(t.cC.a(s))
i.ok=new Uint8Array(832)
f=i.at
f.toString
i.go=new Uint8Array(4*f)
p=i.p4=16*f
f=i.R8=8*f
o=i.a9
o.toString
if(!(o<3))return A.a(B.x,o)
n=B.x[o]
m=n*p
l=(n/2|0)*f
i.p1=A.l(new Uint8Array(16*p+m),!1,h,m)
f=8*f+l
i.p2=A.l(new Uint8Array(f),!1,h,l)
i.p3=A.l(new Uint8Array(f),!1,h,l)
g=g.a
i.RG=A.l(new Uint8Array(g),!1,h,0)
k=B.a.i(g+1,1)
i.rx=A.l(new Uint8Array(k),!1,h,0)
i.ry=A.l(new Uint8Array(k),!1,h,0)
if(o===2)i.ch=i.ay=0
else{g=B.a.G(A.b(i.y,"_cropLeft")-n,16)
i.ay=g
f=i.Q
f.toString
i.ch=B.a.G(f-n,16)
if(A.b(g,"_tlMbX")<0)i.ay=0
if(A.b(i.ch,"_tlMbY")<0)i.ch=0}g=i.as
g.toString
i.cx=B.a.G(g+15+n,16)
g=B.a.G(A.b(i.z,"_cropRight")+15+n,16)
i.CW=g
f=i.at
f.toString
if(g>f)i.CW=f
g=i.cx
g.toString
p=i.ax
p.toString
if(g>p)i.cx=p
j=f+1
s=J.aa(j,t.ai)
for(q=0;q<j;++q)s[q]=new A.cX()
i.sfp(t.eQ.a(s))
g=i.at
g.toString
s=J.aa(g,t.gT)
for(q=0;q<g;++q){f=new Int16Array(384)
s[q]=new A.cY(f,new Uint8Array(16))}i.sfo(t.db.a(s))
g=i.at
g.toString
i.sfm(t.ge.a(A.X(g,h,!1,t.aj)))
i.hM()
A.nr()
i.e=new A.hv()
return!0},
hE(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_mbInfo",e="br",d="isIntra4x4"
g.y2=0
s=g.id
r=g.x
q=g.db
p=0
while(!0){o=g.cx
o.toString
if(!(p<o))break
p=(p&A.b(g.cy,"_numPartitions")-1)>>>0
if(!(p>=0&&p<8))return A.a(q,p)
n=q[p]
while(!0){p=g.y1
o=g.at
o.toString
if(!(p<o))break
m=J.o(A.b(g.k3,f),0)
l=J.o(A.b(g.k3,f),1+g.y1)
k=J.o(A.b(g.a_,"_mbData"),g.y1)
if(r.b){p=A.b(g.c,e).I(g.fr.a[0])
o=g.c
g.k1=p===0?A.b(o,e).I(g.fr.a[1]):2+A.b(o,e).I(g.fr.a[2])}j=A.b(g.fx,"_useSkipProba")&&A.b(g.c,e).I(A.b(g.fy,"_skipP"))!==0
g.hF()
if(!j)j=g.hJ(l,n)
else{m.a=l.a=0
if(!A.b(k.b,d))m.b=l.b=0
k.f=k.e=0}p=g.a9
p.toString
if(p>0){p=A.b(g.k4,"_fInfo")
o=g.y1
i=J.o(A.b(g.a6,"_fStrengths"),A.b(g.k1,"_segment"))
J.m(p,o,J.o(i,A.b(k.b,d)?1:0))
p=J.o(A.b(g.k4,"_fInfo"),g.y1)
p.toString
p.c=p.c||!j}++g.y1}m=J.o(A.b(g.k3,f),0)
m.b=m.a=0
B.d.af(s,0,4,0)
g.y1=0
g.ii()
p=g.a9
p.toString
if(p>0)if(g.y2>=A.b(g.ch,"_tlMbY")){p=g.y2
o=g.cx
o.toString
o=p<=o
h=o}else h=!1
else h=!1
if(!g.hd(h))return!1
p=++g.y2}return!0},
ii(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="_yuvBlock",a2="_dsp",a3=a.y2,a4=A.l(A.b(a.ok,a1),!1,a0,40),a5=A.l(A.b(a.ok,a1),!1,a0,584),a6=A.l(A.b(a.ok,a1),!1,a0,600),a7=a3>0,a8=0
while(!0){s=a.at
s.toString
if(!(a8<s))break
r=J.o(A.b(a.a_,"_mbData"),a8)
if(a8>0){for(q=-1;q<16;++q){s=q*32
a4.ag(s-4,4,a4,s+12)}for(q=-1;q<8;++q){s=q*32
p=s-4
s+=4
a5.ag(p,4,a5,s)
a6.ag(p,4,a6,s)}}else{for(q=0;q<16;++q)J.m(a4.a,a4.d+(q*32-1),129)
for(q=0;q<8;++q){s=q*32-1
J.m(a5.a,a5.d+s,129)
J.m(a6.a,a6.d+s,129)}if(a7){J.m(a6.a,a6.d+-33,129)
J.m(a5.a,a5.d+-33,129)
J.m(a4.a,a4.d+-33,129)}}o=J.o(A.b(a.k2,"_yuvT"),a8)
n=r.a
m=r.e
if(a7){a4.aR(-32,16,o.a)
a5.aR(-32,8,o.b)
a6.aR(-32,8,o.c)}else if(a8===0){s=a4.a
p=a4.d+-33
J.aF(s,p,p+21,127)
p=a5.a
s=a5.d+-33
J.aF(p,s,s+9,127)
s=a6.a
p=a6.d+-33
J.aF(s,p,p+9,127)}if(A.b(r.b,"isIntra4x4")){l=A.i(a4,a0,-16)
k=l.bJ()
if(a7){s=a.at
s.toString
if(a8>=s-1){s=o.a[15]
p=l.a
j=l.d
J.aF(p,j,j+4,s)}else l.aR(0,4,J.o(A.b(a.k2,"_yuvT"),a8+1).a)}s=k.length
if(0>=s)return A.a(k,0)
i=k[0]
if(96>=s)return A.a(k,96)
k[96]=i
k[64]=i
k[32]=i
for(s=r.c,h=0;h<16;++h,m=m<<2>>>0){g=A.i(a4,a0,B.ae[h])
p=s[h]
if(!(p<10))return A.a(B.ap,p)
B.ap[p].$1(g)
m.toString
p=h*16
a.dt(m,new A.a_(n,p,384,p,!1),g)}}else{s=A.l_(a8,a3,r.c[0])
s.toString
if(!(s<7))return A.a(B.a7,s)
B.a7[s].$1(a4)
if(m!==0)for(h=0;h<16;++h,m=m<<2>>>0){g=A.i(a4,a0,B.ae[h])
m.toString
s=h*16
a.dt(m,new A.a_(n,s,384,s,!1),g)}}s=A.b(r.f,"nonZeroUV")
p=A.l_(a8,a3,r.d)
p.toString
if(!(p<7))return A.a(B.N,p)
B.N[p].$1(a5)
B.N[p].$1(a6)
f=new A.a_(n,256,384,256,!1)
if((s&255)!==0){p=a.e
if((s&170)!==0){p=A.b(p,a2)
p.av(f,a5)
p.av(A.i(f,a0,16),A.i(a5,a0,4))
j=A.i(f,a0,32)
e=A.i(a5,a0,128)
p.av(j,e)
p.av(A.i(j,a0,16),A.i(e,a0,4))}else A.b(p,a2).eC(f,a5)}d=new A.a_(n,320,384,320,!1)
s=B.a.i(s,8)
if((s&255)!==0){p=a.e
if((s&170)!==0){s=A.b(p,a2)
s.av(d,a6)
s.av(A.i(d,a0,16),A.i(a6,a0,4))
p=A.i(d,a0,32)
j=A.i(a6,a0,128)
s.av(p,j)
s.av(A.i(p,a0,16),A.i(j,a0,4))}else A.b(p,a2).eC(d,a6)}s=a.ax
s.toString
if(a3<s-1){B.d.Z(o.a,0,16,a4.R(),480)
B.d.Z(o.b,0,8,a5.R(),224)
B.d.Z(o.c,0,8,a6.R(),224)}c=a8*16
b=a8*8
for(q=0;q<16;++q){s=a.p4
s.toString
A.b(a.p1,"_cacheY").ag(c+q*s,16,a4,q*32)}for(q=0;q<8;++q){s=a.R8
s.toString
p=q*32
A.b(a.p2,"_cacheU").ag(b+q*s,8,a5,p)
s=a.R8
s.toString
A.b(a.p3,"_cacheV").ag(b+q*s,8,a6,p)}++a8}},
dt(a,b,c){var s,r,q,p,o,n,m,l,k="_dsp"
switch(a>>>30){case 3:A.b(this.e,k).jw(b,c,!1)
break
case 2:A.b(this.e,k)
s=b.a
r=b.d
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]+4
r+=4
if(!(r<q))return A.a(s,r)
o=B.a.P(B.a.i(s[r]*35468,16),32)
r=b.a
s=b.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
n=B.a.P(B.a.i(r[s]*85627,16),32)
s=b.a
r=b.d+1
if(!(r>=0&&r<s.length))return A.a(s,r)
m=B.a.P(B.a.i(s[r]*35468,16),32)
r=b.a
s=b.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
l=B.a.P(B.a.i(r[s]*85627,16),32)
A.hz(c,0,p+n,l,m)
A.hz(c,1,p+o,l,m)
A.hz(c,2,p-o,l,m)
A.hz(c,3,p-n,l,m)
break
case 1:A.b(this.e,k).bK(b,c)
break
default:break}},
h3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=J.o(A.b(h.k4,"_fInfo"),a)
d.toString
s=A.i(A.b(h.p1,"_cacheY"),g,a*16)
r=d.b
q=d.a
if(q===0)return
if(h.a9===1){if(a>0){p=A.b(h.e,f)
e.toString
p.d1(s,e,q+4)}if(d.c){p=A.b(h.e,f)
e.toString
p.eO(s,e,q)}if(b>0){p=A.b(h.e,f)
e.toString
p.d2(s,e,q+4)}if(d.c){d=A.b(h.e,f)
e.toString
d.eP(s,e,q)}}else{o=h.R8
p=a*8
n=A.i(A.b(h.p2,"_cacheU"),g,p)
m=A.i(A.b(h.p3,"_cacheV"),g,p)
l=d.d
if(a>0){p=A.b(h.e,f)
e.toString
k=q+4
p.b8(s,1,e,16,k,r,l)
p=A.b(h.e,f)
o.toString
p.b8(n,1,o,8,k,r,l)
p.b8(m,1,o,8,k,r,l)}if(d.c){p=A.b(h.e,f)
e.toString
p.j0(s,e,q,r,l)
p=A.b(h.e,f)
o.toString
j=A.i(n,g,4)
i=A.i(m,g,4)
p.b7(j,1,o,8,q,r,l)
p.b7(i,1,o,8,q,r,l)}if(b>0){p=A.b(h.e,f)
e.toString
k=q+4
p.b8(s,e,1,16,k,r,l)
p=A.b(h.e,f)
o.toString
p.b8(n,o,1,8,k,r,l)
p.b8(m,o,1,8,k,r,l)}if(d.c){d=A.b(h.e,f)
e.toString
d.jA(s,e,q,r,l)
d=A.b(h.e,f)
o.toString
p=4*o
j=A.i(n,g,p)
i=A.i(m,g,p)
d.b7(j,o,1,8,q,r,l)
d.b7(i,o,1,8,q,r,l)}}},
hc(){var s,r=this,q=A.b(r.ay,"_tlMbX")
while(!0){s=r.CW
s.toString
if(!(q<s))break
r.h3(q,r.y2);++q}},
hd(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="_cacheY",a1="_cacheU",a2="_cacheV",a3="_cropLeft",a4=b.a9
a4.toString
if(!(a4<3))return A.a(B.x,a4)
s=B.x[a4]
a4=b.p4
a4.toString
r=s*a4
a4=b.R8
a4.toString
q=(s/2|0)*a4
a4=-r
p=A.i(A.b(b.p1,a0),a,a4)
o=-q
n=A.i(A.b(b.p2,a1),a,o)
m=A.i(A.b(b.p3,a2),a,o)
l=b.y2
k=b.cx
k.toString
j=l*16
i=(l+1)*16
if(a5)b.hc()
if(l!==0){j-=s
b.to=A.i(p,a,0)
b.x1=A.i(n,a,0)
b.x2=A.i(m,a,0)}else{b.to=A.i(A.b(b.p1,a0),a,0)
b.x1=A.i(A.b(b.p2,a1),a,0)
b.x2=A.i(A.b(b.p3,a2),a,0)}k=l<k-1
if(k)i-=s
h=b.as
h.toString
if(i>h)i=h
b.xr=null
if(b.aQ!=null&&j<i){h=b.fW(j,i-j)
b.xr=h
if(h==null)return!1}h=b.Q
h.toString
if(j<h){g=h-j
f=A.b(b.to,"_y")
e=f.d
d=b.p4
d.toString
f.d=e+d*g
d=A.b(b.x1,"_u")
e=d.d
f=b.R8
f.toString
c=B.a.i(g,1)
d.d=e+f*c
f=A.b(b.x2,"_v")
e=f.d
d=b.R8
d.toString
f.d=e+d*c
f=b.xr
if(f!=null){e=f.d
d=b.b.a
if(typeof d!=="number")return d.aj()
f.d=e+d*g}j=h}if(j<i){h=A.b(b.to,"_y")
h.d=h.d+A.b(b.y,a3)
h=A.b(b.x1,"_u")
h.d=h.d+B.a.i(A.b(b.y,a3),1)
h=A.b(b.x2,"_v")
h.d=h.d+B.a.i(A.b(b.y,a3),1)
h=b.xr
if(h!=null)h.d=h.d+A.b(b.y,a3)
h=b.Q
h.toString
b.hR(j-h,A.b(b.z,"_cropRight")-A.b(b.y,a3),i-j)}if(k){k=A.b(b.p1,a0)
h=b.p4
h.toString
k.ag(a4,r,p,16*h)
h=A.b(b.p2,a1)
a4=b.R8
a4.toString
h.ag(o,q,n,8*a4)
a4=A.b(b.p3,a2)
h=b.R8
h.toString
a4.ag(o,q,m,8*h)}return!0},
hR(a,b,c){if(b<=0||c<=0)return!1
this.h5(a,b,c)
this.h4(a,b,c)
return!0},
ck(a){var s
if((a&-4194304)>>>0===0)s=B.a.i(a,14)
else s=a<0?0:255
return s},
c5(a,b,c,d){var s=19077*a
d.h(0,0,this.ck(s+26149*c+-3644112))
d.h(0,1,this.ck(s-6419*b-13320*c+2229552))
d.h(0,2,this.ck(s+33050*b+-4527440))},
c4(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.hH(),a2=b4-1,a3=B.a.i(a2,1),a4=a8.a,a5=a8.d
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
p=B.a.i(3*r+q+131074,2)
a5=a6.a
s=a6.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
a.c5(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.i(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.c5(s,p&255,p>>>16,b3)
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
j=B.a.i(k+2*(m+q),3)
i=B.a.i(k+2*(r+l),3)
p=B.a.i(j+r,1)
h=B.a.i(i+m,1)
s=2*o
n=s-1
a5=a6.a
g=a6.d+n
if(!(g>=0&&g<a5.length))return A.a(a5,g)
g=a5[g]
a5=p&255
f=p>>>16
e=n*4
d=A.i(b2,a0,e)
g=19077*g
c=g+26149*f+-3644112
if((c&-4194304)>>>0===0)b=B.a.i(c,14)
else b=c<0?0:255
J.m(d.a,d.d,b)
f=g-6419*a5-13320*f+2229552
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.m(d.a,d.d+1,b)
a5=g+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.m(d.a,d.d+2,b)
J.m(d.a,d.d+3,255)
a5=s-0
g=a6.a
f=a6.d+a5
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
g=h&255
d=h>>>16
a5=A.i(b2,a0,a5*4)
f=19077*f
c=f+26149*d+-3644112
if((c&-4194304)>>>0===0)b=B.a.i(c,14)
else b=c<0?0:255
J.m(a5.a,a5.d,b)
d=f-6419*g-13320*d+2229552
if((d&-4194304)>>>0===0)b=B.a.i(d,14)
else b=d<0?0:255
J.m(a5.a,a5.d+1,b)
g=f+33050*g+-4527440
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.m(a5.a,a5.d+2,b)
J.m(a5.a,a5.d+3,255)
if(a4){p=B.a.i(i+q,1)
h=B.a.i(j+l,1)
a5=a7.a
n=a7.d+n
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=p&255
g=p>>>16
b3.toString
e=A.i(b3,a0,e)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.m(e.a,e.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.m(e.a,e.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.m(e.a,e.d+2,b)
J.m(e.a,e.d+3,255)
a5=a7.a
n=a7.d+s
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=h&255
g=h>>>16
s=A.i(b3,a0,s*4)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.m(s.a,s.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.m(s.a,s.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.m(s.a,s.d+2,b)
J.m(s.a,s.d+3,255)}}if((b4&1)===0){p=B.a.i(3*r+q+131074,2)
a5=a6.a
s=a6.d+a2
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a2*4
n=A.i(b2,a0,a5)
a.c5(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.i(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.i(b3,a0,a5)
a.c5(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
h4(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.xr
if(i==null)return
s=j.b
r=s.a
if(typeof r!=="number")return r.aj()
q=r*4
p=A.i(i,null,0)
if(a===0){o=c-1
n=a}else{n=a-1
p.d-=r
o=c}m=A.l(j.d.aT(),!1,null,n*q+3)
i=j.Q
i.toString
r=j.as
if(i+a+c===r){r.toString
o=r-i-n}for(l=0;l<o;++l){for(k=0;k<b;++k){i=p.a
r=p.d+k
if(!(r>=0&&r<i.length))return A.a(i,r)
r=i[r]
J.m(m.a,m.d+4*k,r&255)}i=p.d
r=s.a
if(typeof r!=="number")return A.z(r)
p.d=i+r
m.d+=q}},
h5(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.aT(),d=g.b,c=d.a
if(typeof c!=="number")return A.z(c)
s=A.l(e,!1,f,a*c*4)
r=A.i(A.b(g.to,"_y"),f,0)
q=A.i(A.b(g.x1,"_u"),f,0)
p=A.i(A.b(g.x2,"_v"),f,0)
o=a+a0
n=B.a.i(b+1,1)
d=d.a
if(typeof d!=="number")return d.aj()
m=d*4
l=A.i(A.b(g.rx,"_tmpU"),f,0)
k=A.i(A.b(g.ry,"_tmpV"),f,0)
if(a===0){g.c4(r,f,q,p,q,p,s,f,b)
j=a0}else{g.c4(A.b(g.RG,"_tmpY"),r,l,k,q,p,A.i(s,f,-m),s,b)
j=a0+1}l.scM(0,q.a)
k.scM(0,p.a)
for(e=2*m,d=-m,i=a;i+=2,i<o;){l.d=q.d
k.d=p.d
c=q.d
h=g.R8
h.toString
q.d=c+h
p.d+=h
s.d+=e
h=r.d
c=g.p4
c.toString
r.d=h+2*c
g.c4(A.i(r,f,-c),r,l,k,q,p,A.i(s,f,d),s,b)}e=r.d
d=g.p4
d.toString
r.d=e+d
e=g.Q
e.toString
d=g.as
d.toString
if(e+o<d){A.b(g.RG,"_tmpY").aR(0,b,r)
A.b(g.rx,"_tmpU").aR(0,n,q)
A.b(g.ry,"_tmpV").aR(0,n,p);--j}else if((o&1)===0)g.c4(r,f,q,p,q,p,A.i(s,f,m),f,b)
return j},
fW(a,a0){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_buffer8",f="_vp8l",e="_alphaPlane",d=i.b,c=d.a,b=d.b
if(a<0||a0<=0||a+a0>b)return h
if(a===0){d=c*b
i.aC=new Uint8Array(d)
s=i.aQ
r=new A.hI(s,c,b)
q=s.q()
r.d=q&3
r.e=B.a.i(q,2)&3
r.f=B.a.i(q,4)&3
r.r=B.a.i(q,6)&3
if(r.gep()){p=r.d
if(p===0){if(s.c-s.d<d)r.r=1}else if(p===1){o=new A.d0(A.c([],t.J))
o.a=c
o.b=b
d=A.c([],t.V)
p=A.c([],t.gk)
n=new Uint32Array(2)
m=new A.eG(s,n)
n=m.d=A.J(n.buffer,0,h)
l=A.b(n,g)
k=s.q()
if(0>=l.length)return A.a(l,0)
l[0]=k
k=A.b(n,g)
l=s.q()
if(1>=k.length)return A.a(k,1)
k[1]=l
l=A.b(n,g)
k=s.q()
if(2>=l.length)return A.a(l,2)
l[2]=k
k=A.b(n,g)
l=s.q()
if(3>=k.length)return A.a(k,3)
k[3]=l
l=A.b(n,g)
k=s.q()
if(4>=l.length)return A.a(l,4)
l[4]=k
k=A.b(n,g)
l=s.q()
if(5>=k.length)return A.a(k,5)
k[5]=l
l=A.b(n,g)
k=s.q()
if(6>=l.length)return A.a(l,6)
l[6]=k
n=A.b(n,g)
s=s.q()
if(7>=n.length)return A.a(n,7)
n[7]=s
p=new A.dY(m,o,d,p)
r.x=p
A.b(p,f).db=c
A.b(r.x,f)
p=A.b(r.x,f)
d=o.a
m=o.b
p.bo(A.n(d),A.n(m),!0)
if(A.b(r.x,f).ax.length===1){d=A.b(r.x,f).ax
if(0>=d.length)return A.a(d,0)
d=d[0].a===3&&A.b(r.x,f).hq()}else d=!1
if(d){r.y=!0
d=A.b(r.x,f)
s=d.c
p=s.a
s=s.b
if(typeof p!=="number")return p.aj()
if(typeof s!=="number")return A.z(s)
j=p*s
d.cx=0
s=B.a.N(j,4)
s=new Uint8Array(j+(4-s))
d.CW=s
d.ch=A.jk(A.b(s,"_pixels8").buffer,0,h)}else{r.y=!1
A.b(r.x,f).d9()}}else r.r=1}i.aq=r}if(!A.b(i.aq,"_alpha").w)if(!A.b(i.aq,"_alpha").iL(a,a0,A.b(i.aC,e)))return h
return A.l(A.b(i.aC,e),!1,h,a*c)},
hJ(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.fr.b,a6=a4.dy,a7=A.b(a4.k1,"_segment")
if(a7>>>0!==a7||a7>=4)return A.a(a6,a7)
s=a6[a7]
r=J.o(A.b(a4.a_,"_mbData"),a4.y1)
q=A.l(r.a,!1,null,0)
p=J.o(A.b(a4.k3,"_mbInfo"),0)
q.j7(0,q.c-q.d,0)
if(!A.b(r.b,"isIntra4x4")){o=A.l(new Int16Array(16),!1,null,0)
a6=a8.b
a7=p.b
if(1>=a5.length)return A.a(a5,1)
n=a4.cw(a9,a5[1],a6+a7,s.b,0,o)
a8.b=p.b=n>0?1:0
if(n>1)a4.is(o,q)
else{a6=o.a
a7=o.d
if(!(a7>=0&&a7<a6.length))return A.a(a6,a7)
m=B.a.i(a6[a7]+3,3)
for(l=0;l<256;l+=16)J.m(q.a,q.d+l,m)}k=a5[0]
j=1}else{if(3>=a5.length)return A.a(a5,3)
k=a5[3]
j=0}i=a8.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c,d=b){n=a4.cw(a9,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a6=q.a
a7=q.d
if(!(a7>=0&&a7<a6.length))return A.a(a6,a7)
a6=a6[a7]!==0?1:0
if(n>3)a6=3
else if(n>1)a6=2
b=d<<2|a6
q.d=a7+16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}a=h>>>4
for(a6=a5.length,a0=i,a1=0,a2=0;a2<4;a2+=2){a7=4+a2
i=B.a.K(a8.a,a7)
h=B.a.K(p.a,a7)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c,d=b){if(2>=a6)return A.a(a5,2)
n=a4.cw(a9,a5[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a7=q.a
a3=q.d
if(!(a3>=0&&a3<a7.length))return A.a(a7,a3)
a7=a7[a3]!==0?1:0
if(n>3)a7=3
else if(n>1)a7=2
b=(d<<2|a7)>>>0
q.d=a3+16}i=i>>>2
h=h>>>1|e<<5}a1=(a1|B.a.A(d,4*a2))>>>0
a0=(a0|B.a.A(i<<4>>>0,a2))>>>0
a=(a|B.a.A(h&240,a2))>>>0}a8.a=a0
p.a=a
r.e=g
r.f=a1
if((a1&43690)===0)s.toString
return(g|a1)>>>0===0},
is(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
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
r=B.a.i(l+g,3)
J.m(a0.a,a0.d+d,r)
r=B.a.i(e+f,3)
J.m(a0.a,a0.d+(d+16),r)
r=B.a.i(l-g,3)
J.m(a0.a,a0.d+(d+32),r)
r=B.a.i(e-f,3)
J.m(a0.a,a0.d+(d+48),r)
d+=64}},
hj(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.I(b[3])===0)s=a.I(b[4])===0?2:3+a.I(b[5])
else if(a.I(b[6])===0)s=a.I(b[7])===0?5+a.I(159):7+2*a.I(165)+a.I(145)
else{r=a.I(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.I(b[q])
if(!(p<4))return A.a(B.ao,p)
o=B.ao[p]
for(n=o.length,s=0,m=0;m<n;++m)s+=s+a.I(o[m])
s+=3+B.a.A(8,p)}return s},
cw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i="_range"
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.I(q[0])===0)return e
for(;a.I(q[1])===0;){++e
if(!(e>=0&&e<17))return A.a(B.D,e)
r=B.D[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.D,p)
r=B.D[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.I(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.hj(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.af,e)
r=B.af[e]
m=a.df(B.a.i(A.b(a.b,i),1))
l=A.b(a.b,i)
if(l>>>0!==l||l>=128)return A.a(B.B,l)
k=B.B[l]
l=A.b(a.b,i)
if(l>>>0!==l||l>=128)return A.a(B.J,l)
a.b=B.J[l]
a.d=A.b(a.d,"_bits")-k
l=m!==0?-n:n
j=d[e>0?1:0]
J.m(f.a,f.d+r,l*j)}return 16},
hF(){var s,r,q,p,o,n,m,l,k,j,i=this,h="br",g=4*i.y1,f=i.go,e=i.id,d=J.o(A.b(i.a_,"_mbData"),i.y1),c=A.b(i.c,h).I(145)===0
d.b=c
if(!A.b(c,"isIntra4x4")){if(A.b(i.c,h).I(156)!==0)s=A.b(i.c,h).I(128)!==0?1:3
else s=A.b(i.c,h).I(163)!==0?2:0
d.c[0]=s
f.toString
B.d.af(f,g,g+4,s)
B.d.af(e,0,4,s)}else{r=d.c
for(q=0,p=0;p<4;++p,q=j){s=e[p]
for(o=0;o<4;++o){c=g+o
if(!(c<f.length))return A.a(f,c)
n=f[c]
if(!(n<10))return A.a(B.a6,n)
n=B.a6[n]
if(!(s>=0&&s<10))return A.a(n,s)
m=n[s]
l=A.b(i.c,h).I(m[0])
if(!(l<18))return A.a(B.H,l)
k=B.H[l]
for(;k>0;){n=A.b(i.c,h)
if(!(k<9))return A.a(m,k)
n=2*k+n.I(m[k])
if(!(n>=0&&n<18))return A.a(B.H,n)
k=B.H[n]}s=-k
f[c]=s}j=q+4
f.toString
B.d.Z(r,q,j,f,g)
if(!(p<4))return A.a(e,p)
e[p]=s}}if(A.b(i.c,h).I(142)===0)c=0
else if(A.b(i.c,h).I(114)===0)c=2
else c=A.b(i.c,h).I(183)!==0?1:3
d.d=c},
sfq(a){this.k2=t.cC.a(a)},
sfp(a){this.k3=t.eQ.a(a)},
sfm(a){this.k4=t.ge.a(a)},
sfo(a){this.a_=t.db.a(a)},
sfn(a){this.a6=t.gS.a(a)}}
A.hH.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:28}
A.cV.prototype={
C(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.D(this.I(128),r))>>>0
return s},
bk(a){var s=this.C(a)
return this.C(1)===1?-s:s},
I(a){var s=this,r=s.df(B.a.i(A.b(s.b,"_range")*a,8))
if(A.b(s.b,"_range")<=126)s.ip()
return r},
df(a){var s,r,q,p=this,o="_bits",n="_value"
if(A.b(p.d,o)<0){s=p.a
r=s.c
q=s.d
if(r-q>=1){p.c=(s.q()|A.b(p.c,n)<<8)>>>0
p.d=A.b(p.d,o)+8}else if(q<r){p.c=(s.q()|A.b(p.c,n)<<8)>>>0
p.d=A.b(p.d,o)+8}else if(!p.e){p.c=A.b(p.c,n)<<8>>>0
p.d=A.b(p.d,o)+8
p.e=!0}}s=A.b(p.d,o)
if(B.a.a3(A.b(p.c,n),s)>a){r=a+1
p.b=A.b(p.b,"_range")-r
p.c=A.b(p.c,n)-B.a.D(r,s)
return 1}else{p.b=a
return 0}},
ip(){var s,r=this,q=A.b(r.b,"_range")
if(q>>>0!==q||q>=128)return A.a(B.B,q)
s=B.B[q]
q=A.b(r.b,"_range")
if(q>>>0!==q||q>=128)return A.a(B.J,q)
r.b=B.J[q]
r.d=A.b(r.d,"_bits")-s}}
A.hv.prototype={
d2(a,b,c){var s,r=A.i(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.dO(r,b,c))this.bV(r,b)}},
d1(a,b,c){var s,r=A.i(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.dO(r,1,c))this.bV(r,1)}},
eP(a,b,c){var s,r,q=A.i(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.d2(q,b,c)}},
eO(a,b,c){var s,r=A.i(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.d1(r,b,c)}},
jA(a,b,c,d,e){var s,r,q=A.i(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.b7(q,b,1,16,c,d,e)}},
j0(a,b,c,d,e){var s,r=A.i(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.b7(r,1,b,16,c,d,e)}},
b8(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.i(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.dP(a0,a2,a5,a6))if(this.dG(a0,a2,a7))this.bV(a0,a2)
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
k=$.j4()
e=1020+i-f
k.toString
if(!(e>=0&&e<2041))return A.a(k,e)
e=1020+3*(g-h)+k[e]
if(!(e>=0&&e<2041))return A.a(k,e)
d=k[e]
e=B.a.i(27*d+63,7)
c=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(18*d+63,7)
b=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(9*d+63,7)
a=(e&2147483647)-((e&2147483648)>>>0)
e=$.a8()
j=255+j+a
e.toString
if(!(j>=0&&j<766))return A.a(e,j)
J.m(n,l,e[j])
j=$.a8()
i=255+i+b
j.toString
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.m(a0.a,a0.d+r,i)
i=$.a8()
h=255+h+c
i.toString
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.m(a0.a,a0.d+q,h)
h=$.a8()
g=255+g-c
h.toString
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.m(a0.a,a0.d,g)
g=$.a8()
f=255+f-b
g.toString
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.m(a0.a,a0.d+a2,f)
f=$.a8()
m=255+m-a
f.toString
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.m(a0.a,a0.d+p,m)}a0.d+=a3}},
b7(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.i(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.dP(d,b,a1,a2))if(this.dG(d,b,a3))this.bV(d,b)
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
m=$.f2()
h=B.a.i(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
m.toString
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.i(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.i(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.a8()
l=255+l+e
h.toString
if(!(l>=0&&l<766))return A.a(h,l)
J.m(p,n,h[l])
l=$.a8()
k=255+k+f
l.toString
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.m(d.a,d.d+r,k)
k=$.a8()
j=255+j-g
k.toString
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.m(d.a,d.d,j)
j=$.a8()
o=255+o-e
j.toString
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.m(d.a,d.d+b,o)}d.d+=c}},
bV(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
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
m=$.j4()
l=1020+k-l
m.toString
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.f2()
m=112+B.a.P(B.a.i(p+4,3),32)
l.toString
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.f2()
l=112+B.a.P(B.a.i(p+3,3),32)
m.toString
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.a8()
r=255+r+n
l.toString
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.a8()
q=255+q-o
r.toString
if(!(q>=0&&q<766))return A.a(r,q)
a.h(0,0,r[q])},
dG(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
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
q=$.f1()
s=255+o-s
q.toString
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
dO(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
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
q=$.f1()
r=255+s-r
q.toString
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.j3()
p=255+o-p
q.toString
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
dP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
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
j=$.f1()
g=255+q-p
j.toString
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.j3()
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
av(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
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
m=B.a.i(l*35468,16)
i=r+(p+12)
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=B.a.i(i*85627,16)
g=(m&2147483647)-((m&2147483648)>>>0)-((h&2147483647)-((h&2147483648)>>>0))
l=B.a.i(l*85627,16)
i=B.a.i(i*35468,16)
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
r=B.a.i(s*35468,16)
q=o+12
if(!(q<16))return A.a(b,q)
q=b[q]
m=B.a.i(q*85627,16)
g=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
s=B.a.i(s*85627,16)
q=B.a.i(q*35468,16)
f=(s&2147483647)-((s&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.b8(a0,d,0,0,k+f)
A.b8(a0,d,1,0,j+g)
A.b8(a0,d,2,0,j-g)
A.b8(a0,d,3,0,k-f);++o
d+=32}},
jw(a,b,c){this.av(a,b)
if(c)this.av(A.i(a,null,16),A.i(b,null,4))},
bK(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.b8(b,0,q,r,s)},
eC(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bK(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bK(A.i(a,r,16),A.i(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bK(A.i(a,r,32),A.i(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bK(A.i(a,r,48),A.i(b,r,132))}}
A.hA.prototype={}
A.hE.prototype={}
A.hG.prototype={}
A.cU.prototype={}
A.hF.prototype={}
A.hw.prototype={}
A.aS.prototype={}
A.cX.prototype={}
A.eI.prototype={}
A.cY.prototype={}
A.cZ.prototype={}
A.cW.prototype={
by(){var s,r=this.b
if(r.L(8)!==47)return!1
s=this.c
s.f=2
s.a=r.L(14)+1
s.b=r.L(14)+1
s.d=r.L(1)!==0
if(r.L(3)!==0)return!1
return!0},
aB(){var s,r,q,p=this,o=null
p.e=0
if(!p.by())return o
s=p.c
p.bo(s.a,s.b,!0)
p.d9()
p.d=A.V(s.a,s.b,B.f,o,o)
r=p.ch
r.toString
q=s.a
s=s.b
if(!p.cp(r,q,s,s,p.ghO()))return o
return p.d},
d9(){var s,r=this,q=r.c,p=q.a
q=q.b
if(typeof p!=="number")return p.aj()
if(typeof q!=="number")return A.z(q)
q=p*q+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=A.J(s.buffer,0,null)
r.cx=q
return!0},
ih(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.L(2)
q=l.ay
p=B.a.A(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.eH()
B.b.v(l.ax,o)
o.a=r
o.b=a[0]
o.c=a[1]
switch(r){case 0:case 1:s=o.e=s.L(3)+2
o.d=l.bo(A.bz(o.b,s),A.bz(o.c,s),!1)
break
case 3:n=s.L(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.b.h(a,0,A.bz(o.b,m))
o.e=m
o.d=l.bo(n,1,!1)
l.h8(n,o)
break
case 2:break
default:throw A.d(A.f("Invalid WebP transform type: "+r))}return!0},
bo(a,b,c){var s,r,q,p,o,n,m,l,k=this
A.n(a)
A.n(b)
if(c){for(s=k.b,r=t.t,q=b,p=a;s.L(1)!==0;){o=A.c([p,q],r)
if(!k.ih(o))throw A.d(A.f("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.L(1)!==0){n=s.L(4)
if(!(n>=1&&n<=11))throw A.d(A.f("Invalid Color Cache"))}else n=0
if(!k.i4(p,q,n,c))throw A.d(A.f("Invalid Huffman Codes"))
if(n>0){s=B.a.A(1,n)
k.r=s
k.w=new A.hB(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.bz(p,m)
k.x=m===0?4294967295:B.a.A(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.cp(l,p,q,q,null))throw A.d(A.f("Failed to decode image data."))
k.e=0
return l},
cp(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
A.n(b1)
A.n(b2)
A.n(b3)
t.bJ.a(b4)
s=a9.e
r=B.a.V(s,b1)
q=B.a.N(s,b1)
p=a9.dA(q,r)
o=a9.e
n=b1*b2
m=b1*b3
s=a9.r
l=280+s
k=s>0?a9.w:null
j=a9.x
s=b0.length
i=a9.b
h=b4!=null
g=o
while(!0){f=i.b
e=f.c
if(!(!(f.d>=e&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){d=a9.bp(a9.Q,a9.z,a9.y,q,r)
f=a9.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.aZ()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].aS(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].aS(i)
if(i.a>=32)i.aZ()
if(2>=e)return A.a(f,2)
a=f[2].aS(i)
if(3>=e)return A.a(f,3)
f=B.c.m(B.a.n(f[3].aS(i),0,255))
e=B.c.m(B.a.n(b,0,255))
a0=B.c.m(B.a.n(c,0,255))
a1=B.c.m(B.a.n(a,0,255))
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=(f<<24|e<<16|a0<<8|a1)>>>0;++o;++q
if(q>=b1){++r
if(B.a.N(r,16)===0&&h)b4.$1(r)
if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a2(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}q=0}}else if(c<280){a3=a9.bY(c-256)
if(4>=e)return A.a(f,4)
a4=f[4].aS(i)
if(i.a>=32)i.aZ()
a5=a9.dU(b1,a9.bY(a4))
if(o<a5||n-o<a3)return!1
else{a6=o-a5
for(a7=0;a7<a3;++a7){f=o+a7
e=a6+a7
if(!(e>=0&&e<s))return A.a(b0,e)
e=b0[e]
if(!(f>=0&&f<s))return A.a(b0,f)
b0[f]=e}o+=a3}q+=a3
for(;q>=b1;){q-=b1;++r
if(B.a.N(r,16)===0&&h)b4.$1(r)}if(o<m){if((q&j)>>>0!==0){d=a9.bp(a9.Q,a9.z,a9.y,q,r)
f=a9.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0&&g<s))return A.a(b0,g)
a1=b0[g]
a2=B.a.a2(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}}}else if(c<l){a2=c-280
for(;g<o;){k.toString
if(!(g>=0&&g<s))return A.a(b0,g)
f=b0[g]
a8=B.a.a2(f*506832829>>>0,k.b)
e=k.a
if(!(a8<e.length))return A.a(e,a8)
e[a8]=f;++g}f=k.a
e=f.length
if(!(a2<e))return A.a(f,a2)
a0=f[a2]
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=a0;++o;++q
if(q>=b1){++r
if(B.a.N(r,16)===0&&h)b4.$1(r)
for(a0=k.b;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a2(a1*506832829>>>0,a0)
if(!(a2<e))return A.a(f,a2)
f[a2]=a1;++g}q=0}}else return!1}if(h)b4.$1(r)
if(f.d>=e&&i.a>=64&&o<n)return!1
a9.e=o
return!0},
hq(){var s,r,q,p,o,n
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
h9(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
r=s.a
if(typeof r!=="number")return r.aj()
i.da(g,r*h)
q=s.a
p=q*g
o=q*i.f
s=i.ch
s.toString
h=i.cx
h.toString
n=A.l(s,!1,null,h)
for(h=i.cy,s=n.a,r=n.d,m=s.length,l=0;l<p;++l){h.toString
k=o+l
j=r+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.i(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
fK(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.V(g,a1),e=B.a.N(g,a1),d=i.dA(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.bp(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.aZ()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].aS(g)
if(p<256){s=A.b(i.CW,h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.N(f,16)===0)i.ct(f)
e=0}}else if(p<280){o=i.bY(p-256)
if(4>=q)return A.a(s,4)
n=s[4].aS(g)
if(g.a>=32)g.aZ()
m=i.dU(a1,i.bY(n))
if(c>=m&&b-c>=o)for(l=0;l<o;++l){s=A.b(i.CW,h)
q=c+l
k=A.b(i.CW,h)
j=q-m
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=j}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.N(f,16)===0)i.ct(f)}if(c<a&&(e&a0)>>>0!==0){r=i.bp(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.ct(f)
i.e=c
return!0},
ct(a){var s,r,q=this,p=a-q.f,o=A.b(q.CW,"_pixels8"),n=q.c.a,m=q.f
if(typeof n!=="number")return n.aj()
s=A.l(o,!1,null,n*m)
if(p>0){o=q.cy
o.toString
n=q.db
n.toString
r=A.l(o,!1,null,n*m)
n=q.ax
if(0>=n.length)return A.a(n,0)
n[0].iz(m,m+p,s,r)}q.f=a},
hP(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.c,g=h.a,f=i.f
if(typeof g!=="number")return g.aj()
s=a-f
if(s<=0)return
i.da(s,g*f)
g=i.cx
g.toString
r=i.f
q=g
p=0
for(;p<s;++p,++r){o=0
while(!0){g=h.a
if(typeof g!=="number")return A.z(g)
if(!(o<g))break
g=i.ch
if(!(q>=0&&q<g.length))return A.a(g,q)
n=g[q]
g=i.d
g.toString
f=B.c.m(B.a.n(n>>>24&255,0,255))
m=B.c.m(B.a.n(n&255,0,255))
l=B.c.m(B.a.n(n>>>8&255,0,255))
k=B.c.m(B.a.n(n>>>16&255,0,255))
j=g.x
g=r*g.a+o
if(!(g>=0&&g<j.length))return A.a(j,g)
j[g]=(f<<24|m<<16|l<<8|k)>>>0;++o;++q}}i.f=a},
da(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.ax,d=e.length,c=f.c.a
if(typeof c!=="number")return c.aj()
s=f.f
r=s+a
q=f.cx
q.toString
p=f.ch
p.toString
B.n.Z(p,q,q+c*a,p,b)
for(c=r-s,p=c-1,o=b;n=d-1,d>0;o=q,d=n){if(!(n>=0&&n<e.length))return A.a(e,n)
m=e[n]
l=f.ch
l.toString
k=m.b
switch(m.a){case 2:m.iu(l,q,q+c*k)
break
case 0:m.jb(s,r,l,q)
if(r!==m.c){j=q-k
B.n.Z(l,j,j+k,l,q+p*k)}break
case 1:m.iD(s,r,l,q)
break
case 3:if(o===q&&m.e>0){i=m.e
h=c*B.a.i(k+B.a.A(1,i)-1,i)
g=q+c*k-h
B.n.Z(l,g,g+h,l,q)
m.ee(s,r,l,g,l,q)}else m.ee(s,r,l,o,l,q)
break}}},
i4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.L(1)!==0){s=e.b.L(3)+2
r=A.bz(a,s)
q=A.bz(b,s)
p=r*q
o=e.bo(r,q,!1)
e.y=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.aa(n,t.ct)
for(j=0;j<n;++j)k[j]=A.mB()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.ex[h]
if(h===0&&i)g+=B.a.A(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.i2(g,f[h]))return!1}e.Q=o
e.as=n
e.shm(k)
return!0},
i2(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.L(1)!==0){s=t.t
r=A.c([0,0],s)
q=A.c([0,0],s)
p=A.c([0,0],s)
o=i.L(1)+1
B.b.h(r,0,i.L(i.L(1)===0?1:8))
B.b.h(q,0,0)
s=o-1
B.b.h(p,0,s)
if(o===2){B.b.h(r,1,i.L(8))
B.b.h(q,1,1)
B.b.h(p,1,s)}n=b.iy(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.L(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.e5[k]
j=i.L(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.i3(m,a,p)
if(n)n=b.ed(p,a)}return n},
i3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.kh()
if(!s.ed(a,19))return!1
e=this.b
if(e.L(1)!==0){r=2+e.L(2+2*e.L(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.aZ()
m=s.aS(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.a3,k)
j=B.a3[k]
i=B.b8[k]
h=e.L(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
bY(a){var s
if(a<4)return a+1
s=B.a.i(a-2,1)
return B.a.A(2+(a&1),s)+this.b.L(s)+1},
dU(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.a8,s)
r=B.a8[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
h8(a,b){var s,r,q,p,o,n=B.a.A(1,B.a.K(8,b.e)),m=new Uint32Array(n),l=A.J(b.d.buffer,0,null),k=A.J(m.buffer,0,null),j=b.d
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
bp(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.i(e,c)+B.a.i(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
dA(a,b){var s=this,r=s.bp(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
shm(a){this.at=t.d1.a(a)}}
A.dY.prototype={
iX(a){return this.h9(a)}}
A.eG.prototype={
es(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.a2(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.t,p)
q=r+((s&B.t[p])>>>0)*(B.t[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.a2(s[1],p-32)}return q},
L(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.es()
if(!(a<33))return A.a(B.t,a)
s=B.t[a]
r.a+=a
r.aZ()
return(q&s)>>>0}else throw A.d(A.f("Not enough data in input."))},
aZ(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
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
A.hB.prototype={}
A.eH.prototype={
iz(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.K(8,m),k=this.b,j=this.d
if(l<8){s=B.a.A(1,m)-1
r=B.a.A(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
p=m[n]
c.d=n+1}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.m(d.a,d.d,m>>>8&255);++d.d
p=B.a.i(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
c.d=n+1
if(m>>>0!==m||m>=j.length)return A.a(j,m)
m=j[m]
J.m(d.a,d.d,m>>>8&255);++d.d}},
ee(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.K(8,j),h=this.b,g=this.d
if(i<8){s=B.a.A(1,j)-1
r=B.a.A(1,i)-1
for(j=e.length,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<j))return A.a(e,f)
e[f]=k
o=B.a.K(o,i)}}else for(j=c.length,q=e.length,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<q))return A.a(e,f)
e[f]=k}},
iD(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this.b,a1=this.e,a2=B.a.A(1,a1)-1,a3=A.bz(a0,a1),a4=B.a.i(a5,a1)*a3
for(a1=a7.length,s=a5;s<a6;){r=new Uint8Array(3)
for(q=a4,p=0;p<a0;++p){if((p&a2)>>>0===0){o=this.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a8+p
if(!(o>=0&&o<a1))return A.a(a7,o)
m=a7[o]
l=m>>>8&255
k=r[0]
j=$.Y()
j[0]=k
k=$.a3()
i=k.length
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
if(0>=i)return A.a(k,0)
g=k[0]
f=$.jW()
f[0]=h*g
e=$.m1()
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
a7[o]=(m&4278255360|c<<16|((m&255)+(b>>>5)>>>0)+(a>>>5)>>>0&255)>>>0}a8+=a0;++s
if((s&a2)>>>0===0)a4+=a3}},
jb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.hC(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p>=0&&p<r))return A.a(c,p)
A.hC(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.A(1,s)-1
n=A.bz(g,s)
m=B.a.i(a,s)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.hC(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.kZ[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.kZ[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p>=0&&p<s))return A.a(c,p)
A.hC(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
iu(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.hI.prototype={
gep(){var s=this,r=s.d
r=r>1||s.e>=4||s.f>1||s.r!==0
if(r)return!1
return!0},
iL(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="_vp8l"
if(!k.gep())return!1
s=k.e
if(!(s<4))return A.a(B.a9,s)
r=B.a9[s]
if(k.d===0){s=k.b
q=a*s
p=k.a
B.d.Z(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
A.b(k.x,j).cy=c
p=k.y
o=k.x
if(p){p=A.b(o,j)
o=A.b(k.x,j).c.a
n=A.b(k.x,j).c.b
s=p.fK(A.n(o),A.n(n),s)}else{p=A.b(o,j)
o=A.b(k.x,j).ch
o.toString
n=A.b(k.x,j).c.a
m=A.b(k.x,j).c.b
l=A.b(k.x,j).giW()
l=p.cp(o,A.n(n),A.n(m),s,t.aR.a(l))
s=l}if(!s)return!1}if(r!=null){s=k.b
r.$6(s,k.c,s,a,b,c)}if(k.f===1)if(!k.h2(c,k.b,k.c,a,b))return!1
if(a+b===k.c)k.w=!0
return!0},
h2(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.d_.prototype={
fc(a,b){a.q()
this.r=0
this.w=a.d-a.b
this.x=b-16}}
A.dZ.prototype={}
A.dK.prototype={
cC(a){var s,r=this
if(a===0)return!1
s=(a<<1>>>0)-1
r.e=s
s=new Int32Array(s<<1>>>0)
r.d=s
s=A.b(s,"tree")
if(1>=s.length)return A.a(s,1)
s[1]=-1
r.f=1
B.d.af(r.a,0,128,255)
return!0},
ed(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.cC(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.cf(q,0,0)}o=new Int32Array(b)
if(!m.hn(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.cf(p,o[p],n))return!1}return m.f===m.e},
iy(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.cC(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.cf(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
aS(a){var s,r,q,p=this,o=a.es(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=A.b(p.d,"tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.dR(s))
a.a=n
r=A.b(p.d,"tree")
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
cf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="tree"
if(c<=7){s=h.e_(b,c)
for(r=B.a.D(1,7-c),q=h.b,p=h.a,o=0;o<r;++o){n=(s|B.a.D(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=h.e_(B.a.a3(b,c-7),7)
for(r=h.c,m=7,l=0;k=c-1,c>0;c=k){if(l>=h.e)return!1
q=A.b(h.d,g)
p=(l<<1>>>0)+1
if(!(p<q.length))return A.a(q,p)
if(q[p]<0){q=h.f
if(q===h.e)return!1
j=A.b(h.d,g)
if(!(p<j.length))return A.a(j,p)
j[p]=q-l
h.f+=2
j=A.b(h.d,g)
i=(q<<1>>>0)+1
if(!(i<j.length))return A.a(j,i)
j[i]=-1
i=A.b(h.d,g)
q=(q+1<<1>>>0)+1
if(!(q<i.length))return A.a(i,q)
i[q]=-1}else{q=A.b(h.d,g)
if(!(p<q.length))return A.a(q,p)
if(q[p]===0)return!1}q=A.b(h.d,g)
if(!(p<q.length))return A.a(q,p)
l+=q[p]+(B.a.a3(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(h.hv(l))h.hw(l,0)
else if(h.dR(l))return!1
r=A.b(h.d,g)
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
e_(a,b){var s=B.T[a&15],r=B.a.i(a,4)
if(!(r<16))return A.a(B.T,r)
return B.a.a2((s<<4|B.T[r])>>>0,8-b)},
hw(a,b){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
s[r]=b},
dR(a){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
return s[r]!==0},
hv(a){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
return s[r]<0},
hn(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
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
A.bP.prototype={}
A.d0.prototype={}
A.cv.prototype={}
A.hJ.prototype={
bh(a){var s=A.l(t.L.a(a),!1,null,0)
this.b=s
if(!this.dz(s))return!1
return!0},
az(a){var s,r=this,q=null,p=A.l(t.L.a(a),!1,q,0)
r.b=p
if(!r.dz(p))return q
p=new A.cv(A.c([],t.J))
r.a=p
s=r.b
s.toString
if(!r.ea(s,p))return q
p=r.a
switch(p.f){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.jx(s,p).by())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.jv(s,p).by())return q
p=r.a
p.as=p.z.length
return p}return q},
a1(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
return o.dq(n.aV(A.b(q.x,"_frameSize"),A.b(q.w,"_framePosition")),a)}r=s.f
if(r===2){n.toString
p=n.aV(s.ch,s.ay)
n=o.a
n.toString
return A.jx(p,n).aB()}else if(r===1){n.toString
p=n.aV(s.ch,s.ay)
n=o.a
n.toString
return A.jv(p,n).aB()}return null},
ae(a){var s
this.az(t.L.a(a))
s=this.a
s.Q=0
s.as=1
return this.a1(0)},
dq(a,b){var s,r,q,p=null,o=A.c([],t.J),n=new A.cv(o)
if(!this.ea(a,n))return p
if(n.f===0)return p
s=this.a
n.Q=s.Q
n.as=s.as
if(n.e){s=o.length
if(b>=s||!1)return p
if(!(b<s))return A.a(o,b)
r=o[b]
return this.dq(a.aV(A.b(r.x,"_frameSize"),A.b(r.w,"_framePosition")),b)}else{q=a.aV(n.ch,n.ay)
o=n.f
if(o===2)return A.jx(q,n).aB()
else if(o===1)return A.jv(q,n).aB()}return p},
dz(a){if(a.M(4)!=="RIFF")return!1
a.j()
if(a.M(4)!=="WEBP")return!1
return!0},
ea(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.M(4)
r=a.j()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.hl(a,b))return!1
break
case"VP8 ":b.ay=o
b.ch=r
b.f=1
f=!0
break
case"VP8L":b.ay=o
b.ch=r
b.f=2
f=!0
break
case"ALPH":n=a.a
m=a.e
l=n.length
n=new A.a_(n,0,l,0,m)
b.at=n
n.d=p
a.d+=q
break
case"ANIM":b.f=3
k=a.j()
a.k()
B.c.m(B.a.n(k&255,0,255))
B.c.m(B.a.n(k>>>24&255,0,255))
B.c.m(B.a.n(k>>>16&255,0,255))
B.c.m(B.a.n(k>>>8&255,0,255))
break
case"ANMF":if(!this.hg(a,b,r))return!1
break
case"ICCP":b.toString
j=a.O(r)
a.d=a.d+(j.c-j.d)
j.R()
break
case"EXIF":b.toString
a.M(r)
break
case"XMP ":b.toString
a.M(r)
break
default:A.lE("UNKNOWN WEBP TAG: "+s)
a.d+=q
break}p=a.d
i=q-(p-h-o)
if(i>0)a.d=p+i}if(!b.d)b.d=b.at!=null
return b.f!==0},
hl(a,b){var s,r,q,p,o=a.q()
if((o&192)!==0)return!1
s=B.a.i(o,4)
r=B.a.i(o,1)
if((o&1)!==0)return!1
if(a.ah()!==0)return!1
q=a.ah()
p=a.ah()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
hg(a,b,c){var s
a.ah()
a.ah()
a.ah()
a.ah()
a.ah()
s=new A.dZ()
s.fc(a,c)
if(s.r!==0)return!1
B.b.v(b.z,s)
return!0}}
A.dJ.prototype={
f4(a,b,c){var s,r,q,p,o,n,m,l=this,k=a.a,j=a.b
l.bv(A.fx("R",k,j,c,b))
l.bv(A.fx("G",k,j,c,b))
l.bv(A.fx("B",k,j,c,b))
if(a.c===B.f)l.bv(A.fx("A",k,j,c,b))
s=a.aT()
for(r=s.length,q=0,p=0;q<j;++q)for(o=0;o<k;++o){n=l.b
n.toString
m=p+1
if(!(p>=0&&p<r))return A.a(s,p)
n.aM(o,q,s[p]/255)
n=l.c
n.toString
p=m+1
if(!(m>=0&&m<r))return A.a(s,m)
n.aM(o,q,s[m]/255)
n=l.d
n.toString
m=p+1
if(!(p>=0&&p<r))return A.a(s,p)
n.aM(o,q,s[p]/255)
n=l.e
if(n!=null){p=m+1
if(!(m>=0&&m<r))return A.a(s,m)
n.aM(o,q,s[m]/255)}else p=m}},
gcY(a){var s=this.a
if(s.a===0)s=0
else{s=s.gaI()
s=s.b.$1(J.dt(s.a)).b}return s},
gaE(a){var s=this.a
if(s.a===0)s=0
else{s=s.gaI()
s=s.b.$1(J.dt(s.a)).c}return s},
aU(a,b,c){var s=this.b
if(s!=null)if(s.d===3)s.aM(a,b,c)
else s.bO(a,b,A.n(c))},
bl(a,b,c){var s=this.c
if(s!=null)if(this.b.d===3)s.aM(a,b,c)
else s.bO(a,b,A.n(c))},
bN(a,b,c){var s
if(this.c!=null){s=this.d
if(s.d===3)s.aM(a,b,c)
else s.bO(a,b,A.n(c))}},
d_(a,b,c){var s=this.e
if(s!=null)if(s.d===3)s.aM(a,b,c)
else s.bO(a,b,A.n(c))},
bv(a){var s=this,r=a.a
s.a.h(0,r,a)
switch(r){case"R":s.b=a
break
case"G":s.c=a
break
case"B":s.d=a
break
case"A":s.e=a
break
case"Z":break}}}
A.cr.prototype={
bM(a,b){var s,r,q,p=this,o=b*p.b+a,n=p.d,m=n===1
if(m||n===0){n=p.f
if(!(o>=0&&o<n.length))return A.a(n,o)
n=A.n(n[o])
s=p.e
if(s===8)r=255
else r=s===16?65535:4294967295
return n/(m?r-1:r)}n=n===3&&p.e===16
m=p.f
s=m.length
if(n){if(!(o>=0&&o<s))return A.a(m,o)
n=A.n(m[o])
if($.P==null)A.aK()
m=$.P
if(!(n>=0&&n<m.length))return A.a(m,n)
q=m[n]}else{if(!(o>=0&&o<s))return A.a(m,o)
q=m[o]}return q},
aM(a,b,c){var s,r,q,p=this
if(p.d!==3)return
s=b*p.b+a
r=p.f
q=J.I(r)
if(p.e===16)q.h(r,s,A.mC(c))
else q.h(r,s,c)},
bO(a,b,c){J.m(this.f,b*this.b+a,c)}}
A.iU.prototype={
$2(a,b){return Math.log(a*b+1)/b},
$S:16}
A.iT.prototype={
$2(a,b){var s,r=Math.max(0,a*b)
if(r>1){s=this.a.$2(r-1,0.184874)
if(typeof s!=="number")return A.z(s)
r=1+s}return Math.pow(r,0.4545)*84.66},
$S:16}
A.fz.prototype={
t(a){return"ICCPCompression."+this.b}}
A.fA.prototype={
iF(){var s,r=this
if(r.b===B.M)return r.c
s=t.D.a(B.a0.iT(r.c))
r.c=s
r.b=B.M
return s}}
A.fs.prototype={
t(a){return"Format."+this.b}}
A.dw.prototype={
t(a){return"Channels."+this.b}}
A.ff.prototype={
t(a){return"BlendMode."+this.b}}
A.fm.prototype={
t(a){return"DisposeMode."+this.b}}
A.dM.prototype={
aT(){var s=A.J(this.x.buffer,0,null)
switch(2){case 2:return s}},
gu(a){return this.x.length},
ix(a,b){return a>=0&&a<this.a&&b>=0&&b<this.b},
S(a,b){var s,r
if(this.ix(a,b)){s=this.x
r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
eI(a,b,c){if(c===B.aI)return this.eH(a,b)
else if(c===B.aH)return this.eJ(a,b)
return this.S(B.c.m(a),B.c.m(b))},
eJ(a,b){var s,r,q,p,o,n,m,l,k=this,j=B.c.m(a),i=j-(a>=0?0:1),h=i+1
j=B.c.m(b)
s=j-(b>=0?0:1)
r=s+1
j=new A.fG(a-i,b-s)
q=k.S(i,s)
p=r>=k.b
o=p?q:k.S(i,r)
n=h>=k.a
m=n?q:k.S(h,s)
l=n||p?q:k.S(h,r)
return A.av(j.$4(q&255,m&255,o&255,l&255),j.$4(q>>>8&255,m>>>8&255,o>>>8&255,l>>>8&255),j.$4(q>>>16&255,m>>>16&255,o>>>16&255,l>>>16&255),j.$4(q>>>24&255,m>>>24&255,o>>>24&255,l>>>24&255))},
eH(d5,d6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=B.c.m(d5),d1=d0-(d5>=0?0:1),d2=d1-1,d3=d1+1,d4=d1+2
d0=B.c.m(d6)
s=d0-(d6>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d5-d1
n=d6-s
d0=new A.fF()
m=c9.S(d1,s)
l=d2<0
k=!l
j=!k||r<0?m:c9.S(d2,r)
i=l?m:c9.S(d1,r)
h=r<0
g=h||d3>=c9.a?m:c9.S(d3,r)
f=c9.a
e=d4>=f
d=!e
c=!d||h?m:c9.S(d4,r)
b=d0.$5(o,j&255,i&255,g&255,c&255)
a=d0.$5(o,j>>>8&255,i>>>8&255,g>>>8&255,c>>>8&255)
a0=d0.$5(o,j>>>16&255,i>>>16&255,g>>>16&255,c>>>16&255)
a1=d0.$5(o,j>>>24&255,i>>>24&255,g>>>24&255,c>>>24&255)
a2=l?m:c9.S(d2,s)
l=d3>=f
a3=l?m:c9.S(d3,s)
a4=e?m:c9.S(d4,s)
a5=d0.$5(o,a2&255,m&255,a3&255,a4&255)
a6=d0.$5(o,a2>>>8&255,m>>>8&255,a3>>>8&255,a4>>>8&255)
a7=d0.$5(o,a2>>>16&255,m>>>16&255,a3>>>16&255,a4>>>16&255)
a8=d0.$5(o,a2>>>24&255,m>>>24&255,a3>>>24&255,a4>>>24&255)
a9=!k||q>=c9.b?m:c9.S(d2,q)
h=c9.b
f=q>=h
b0=f?m:c9.S(d1,q)
l=!l
b1=!l||f?m:c9.S(d3,q)
b2=!d||f?m:c9.S(d4,q)
b3=d0.$5(o,a9&255,b0&255,b1&255,b2&255)
b4=d0.$5(o,a9>>>8&255,b0>>>8&255,b1>>>8&255,b2>>>8&255)
b5=d0.$5(o,a9>>>16&255,b0>>>16&255,b1>>>16&255,b2>>>16&255)
b6=d0.$5(o,a9>>>24&255,b0>>>24&255,b1>>>24&255,b2>>>24&255)
b7=!k||p>=h?m:c9.S(d2,p)
k=p>=h
b8=k?m:c9.S(d1,p)
b9=!l||k?m:c9.S(d3,p)
c0=!d||k?m:c9.S(d4,p)
c1=d0.$5(o,b7&255,b8&255,b9&255,c0&255)
c2=d0.$5(o,b7>>>8&255,b8>>>8&255,b9>>>8&255,c0>>>8&255)
c3=d0.$5(o,b7>>>16&255,b8>>>16&255,b9>>>16&255,c0>>>16&255)
c4=d0.$5(o,b7>>>24&255,b8>>>24&255,b9>>>24&255,c0>>>24&255)
c5=d0.$5(n,b,a5,b3,c1)
c6=d0.$5(n,a,a6,b4,c2)
c7=d0.$5(n,a0,a7,b5,c3)
c8=d0.$5(n,a1,a8,b6,c4)
return A.av(B.c.m(c5),B.c.m(c6),B.c.m(c7),B.c.m(c8))},
eM(a,b,c){var s=this.x,r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}}
A.fG.prototype={
$4(a,b,c,d){var s=this.b
return B.c.m(a+this.a*(b-a+s*(a+d-c-b))+s*(c-a))},
$S:46}
A.fF.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:31}
A.fE.prototype={
t(a){return"ImageException: "+this.a}}
A.a_.prototype={
gu(a){return this.c-this.d},
h(a,b,c){J.m(this.a,this.d+b,c)
return c},
ag(a,b,c,d){var s=this.a,r=J.I(s),q=this.d+a
if(c instanceof A.a_)r.Z(s,q,q+b,c.a,c.d+d)
else r.Z(s,q,q+b,t.L.a(c),d)},
aR(a,b,c){return this.ag(a,b,c,0)},
j7(a,b,c){var s=this.a,r=this.d+a
J.aF(s,r,r+b,c)},
cd(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.l(s.a,s.e,a,r+b)},
O(a){return this.cd(a,0,null)},
aV(a,b){return this.cd(a,0,b)},
b5(a,b){return this.cd(a,b,null)},
q(){var s=this.a,r=this.d++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
T(a){var s=this.O(a)
this.d=this.d+(s.c-s.d)
return s},
M(a){var s,r,q,p,o=this
if(a==null){s=A.c([],t.t)
for(r=o.c;q=o.d,q<r;){p=o.a
o.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(q===0)return A.jt(s,0,null)
B.b.v(s,q)}throw A.d(A.f(u.c))}return A.jt(o.T(a).R(),0,null)},
bF(){return this.M(null)},
jk(){var s,r,q,p=this,o=A.c([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.fV.iH(o)}B.b.v(o,r)}throw A.d(A.f(u.c))},
k(){var s,r,q=this,p=q.a,o=q.d,n=q.d=o+1,m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
if(typeof o!=="number")return o.U()
s=o&255
q.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
if(typeof n!=="number")return n.U()
r=n&255
if(q.e)return s<<8|r
return r<<8|s},
ah(){var s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.U()
s=n&255
n=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(typeof m!=="number")return m.U()
r=m&255
p.d=n+1
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.U()
q=n&255
if(p.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
j(){var s,r,q,p,o=this,n=o.a,m=o.d,l=o.d=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.U()
s=m&255
m=o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.U()
r=l&255
l=o.d=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.U()
q=m&255
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.U()
p=l&255
if(o.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
c9(){return A.po(this.cT())},
cT(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.d,h=k.d=i+1,g=j.length
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.U()
s=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.U()
r=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.U()
q=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.U()
p=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.U()
o=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.U()
n=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.U()
m=i&255
k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.U()
l=h&255
if(k.e)return(B.a.A(s,56)|B.a.A(r,48)|B.a.A(q,40)|B.a.A(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.A(l,56)|B.a.A(m,48)|B.a.A(n,40)|B.a.A(o,32)|p<<24|q<<16|r<<8|s)>>>0},
bH(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.eB(b,c)
s=r.b+b+b
return J.f3(q,s,c<=0?r.c:s+c)},
eB(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.J(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.f3(p,s,s+q)
return new Uint8Array(A.jL(s))},
R(){return this.eB(0,null)},
bJ(){var s=this.a
if(t.D.b(s))return A.jk(s.buffer,s.byteOffset+this.d,null)
return A.jk(this.R().buffer,0,null)},
scM(a,b){this.a=t.L.a(b)}}
A.cw.prototype={
t(a){return"Interpolation."+this.b}}
A.h0.prototype={
E(a){var s,r,q=this
if(q.a===q.c.length)q.h7()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
ca(a,b){var s,r,q,p,o=this
t.L.a(a)
b=J.a4(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.du(r-p)
B.d.b4(q,s,r,a)
o.a+=b},
al(a){return this.ca(a,null)},
eG(a){var s=this
if(s.b){s.E(B.a.i(a,8)&255)
s.E(a&255)
return}s.E(a&255)
s.E(B.a.i(a,8)&255)},
am(a){var s=this
if(s.b){s.E(B.a.i(a,24)&255)
s.E(B.a.i(a,16)&255)
s.E(B.a.i(a,8)&255)
s.E(a&255)
return}s.E(a&255)
s.E(B.a.i(a,8)&255)
s.E(B.a.i(a,16)&255)
s.E(B.a.i(a,24)&255)},
du(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.d.b4(p,0,q,r)
this.c=p},
h7(){return this.du(null)},
gu(a){return this.a}}
A.iN.prototype={
$0(){var s=$.b5
if(s!=null)s.ba(700,"terminating Web worker")
s=this.a
s.port1.close()
s.port2.close()
this.b.close()},
$S:1}
A.iO.prototype={
$1(a){return this.a.bE(t.f.a(new A.eJ([],[]).eg(t.e.a(a).data,!0)))},
$S:15}
A.iP.prototype={
$1(a){return this.a.c7(t.fF.a(new A.eJ([],[]).eg(t.e.a(a).data,!0)),this.b.port2,this.c)},
$S:15}
A.i0.prototype={
aW(a,b){var s,r,q,p,o,n,m=t.ds.a(a).aL()
try{if(b){q=$.lK().cv(m,A.mK(t.K))
s=A.ji(q,!0,q.$ti.l("j.E"))
q=this.a
q.toString
B.at.er(q,m,s)}else{q=this.a
q.toString
B.at.ja(q,m)}}catch(p){r=A.a1(p)
q=A.v(m)
o=A.v(r)
n=$.b5
if(n!=null)n.ba(1000,"failed to post response "+q+": error "+o)
throw p}}}
A.eQ.prototype={
iV(a,b){var s=$.b5
if(s!=null)s.ba(1,new A.im(b))
this.aW(new A.bA(!1,A.jr(b,null),null,null),!1)},
$inN:1}
A.im.prototype={
$0(){return"replying with error: "+this.a.t(0)},
$S:33}
A.eA.prototype={
hr(a){return a==null||typeof a=="string"||typeof a=="number"||A.dm(a)},
cD(a){if(a==null||typeof a=="string"||typeof a=="number"||A.dm(a))return!0
if(t.dy.b(a)||t.bj.b(a)||t.fx.b(a))return!0
if(t.j.b(a)&&J.m6(a,this.gdL()))return!0
if(t.f.b(a)&&a.gcR().bf(0,this.gdK())&&a.gaI().bf(0,this.gdL()))return!0
return!1},
cA(a,b){return this.hk(a,t.bC.a(b))},
hk(a,b){var s=this
return A.lp(function(){var r=a,q=b
var p=0,o=1,n,m,l,k,j
return function $async$cA(c,d){if(c===1){n=d
p=o}while(true)switch(p){case 0:m=J.m8(r,new A.hp(s)),m=m.gY(m),l=t.K
case 2:if(!m.B()){p=3
break}k=m.gH()
p=!q.ao(0,k)?4:5
break
case 4:j=k==null
q.v(0,j?l.a(k):k)
p=6
return j?l.a(k):k
case 6:case 5:p=2
break
case 3:return A.l6()
case 1:return A.l7(n)}}},t.K)},
cv(a,b){return this.hf(a,t.bC.a(b))},
hf(a,b){var s=this
return A.lp(function(){var r=a,q=b
var p=0,o=2,n,m,l,k,j,i
return function $async$cv(c,d){if(c===1){n=d
p=o}while(true)switch(p){case 0:if(s.cD(r)){p=1
break}if(!r.gcR().bf(0,s.gdK()))throw A.d(A.aE("Keys must be strings, numbers or booleans."))
m=A.c([],t.i)
B.b.b_(m,s.cA(r.gaI(),q))
l=t.R,k=t.f
case 3:if(!(j=m.length,j!==0)){p=4
break}if(0>=j){A.a(m,-1)
p=1
break}i=m.pop()
p=k.b(i)?5:7
break
case 5:B.b.b_(m,s.cv(i,q))
p=6
break
case 7:p=l.b(i)?8:10
break
case 8:B.b.b_(m,s.cA(i,q))
p=9
break
case 10:p=11
return i
case 11:case 9:case 6:p=3
break
case 4:case 1:return A.l6()
case 2:return A.l7(n)}}},t.K)}}
A.hp.prototype={
$1(a){return!this.a.cD(a)},
$S:4}
A.bJ.prototype={
cN(){var s,r,q,p,o=this
if(o.b==null){s=A.md(null,o.c,null,null)
o.b=s}s=o.d
if(s==null)s=B.ag
r=s.length
q=t.Z
p=0
for(;p<s.length;s.length===r||(0,A.bF)(s),++p)A.lG(q.a(s[p]))},
iv(a){var s,r=this
t.M.a(a)
if(r.b!=null)A.lG(a)
else{if(r.d==null)r.sht(A.c([],t.bT))
s=r.d
s.toString
B.b.v(s,a)}},
jo(a){var s
t.M.a(a)
s=this.d
return s==null?null:B.b.bG(s,a)},
sht(a){this.d=t.eX.a(a)}}
A.cR.prototype={
fa(a,b){var s
if(this.b==null)try{this.b=A.kR()}catch(s){}},
aL(){var s=this.b
s=s==null?null:s.t(0)
return["$",this.a,s]},
t(a){return B.a_.ej(this.aL(),null)},
$ib4:1}
A.b4.prototype={
t(a){return B.a_.ej(this.aL(),null)}}
A.f8.prototype={
ba(a,b){var s,r,q,p,o,n,m
if(a<this.a)s=a===1&&$.bU
else s=!0
if(s){if(t.Y.b(b))b=b.$0()
s=new A.bk(Date.now(),!1).jv().ju()
r=A.mW(a)
q=$.js
if(q==null)q="<undefined>"
if(t.R.b(b)){p=J.m7(b,new A.f9(),t.N)
o=A.w(p)
n=o.l("cl<j.E,D>")
m=new A.U(new A.cl(p,o.l("j<D>(j.E)").a(new A.fa()),n),n.l("E(j.E)").a(new A.fb()),n.l("U<j.E>"))}else{m=b==null?null:new A.U(A.c(J.bG(b).split("\n"),t.s),t.bB.a(new A.fc()),t.cc)
if(m==null)m=B.d0}for(p=J.ao(m),q="["+s+"] ["+r+"] ["+q+"] ",r=this.b;p.B();){s=q+p.gH()
r.aW(new A.bA(!1,null,s,null),!1)}}}}
A.f9.prototype={
$1(a){var s=a==null?null:J.bG(a)
return s==null?"":s},
$S:34}
A.fa.prototype={
$1(a){return A.c(A.aV(a).split("\n"),t.s)},
$S:35}
A.fb.prototype={
$1(a){return A.aV(a).length!==0},
$S:14}
A.fc.prototype={
$1(a){return A.aV(a).length!==0},
$S:14}
A.h4.prototype={}
A.c0.prototype={
ce(a,b,c,d){var s
if(this.b==null)try{this.b=A.kR()}catch(s){}},
aL(){var s=this,r=s.b
r=r==null?null:r.t(0)
return["$W",s.a,r,s.c,s.d]}}
A.bK.prototype={
aL(){var s=this,r=s.b
r=r==null?null:r.t(0)
return["$C",s.a,r,s.c,s.d]}}
A.ew.prototype={
aL(){var s,r,q,p=this,o=p.b
o=o==null?null:o.t(0)
s=p.c
r=p.d
q=p.x.gjH()
return["$T",p.a,o,s,r,q]},
$ikT:1}
A.au.prototype={}
A.bA.prototype={
aL(){var s,r,q=this,p=q.b
if(p!=null){s=A.O(t.N,t.z)
s.h(0,"b",p.aL())
if($.bU)s.h(0,"d",1000*Date.now())
return s}else{p=q.d
if(p!=null){s=A.O(t.N,t.z)
s.h(0,"e",p)
if($.bU)s.h(0,"d",1000*Date.now())
return s}else if(q.a){p=A.O(t.N,t.z)
p.h(0,"c",!0)
if($.bU)p.h(0,"d",1000*Date.now())
return p}else{p=q.e
s=t.N
r=t.z
if(p==null){p=A.O(s,r)
if($.bU)p.h(0,"d",1000*Date.now())
return p}else{s=A.O(s,r)
s.h(0,"a",p)
if($.bU)s.h(0,"d",1000*Date.now())
return s}}}}}
A.b0.prototype={}
A.he.prototype={}
A.hK.prototype={
dF(a){return a==null?$.lI():this.d.je(a.a,new A.hL(a))},
sir(a){this.e=t.ec.a(a)}}
A.hL.prototype={
$0(){var s=this.a.a,r=new A.b0(!0,++$.jT().a,null)
r.a=s
return r},
$S:37}
A.hN.prototype={
c7(a,b,c){return this.iG(a,b,t.he.a(c))},
iG(a0,a1,a2){var s=0,r=A.lo(t.z),q=1,p,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c7=A.lt(function(a3,a4){if(a3===1){p=a4
s=q}while(true)switch(s){case 0:d=A.l1(a0)
c=d
b=c==null?null:c.a
if(d==null)throw A.d(A.aE("connection request expected"))
else if(b==null)throw A.d(A.aE("missing client for connection request"))
q=3
if(d.d!==-1){c=A.aE("connection request expected")
throw A.d(c)}else{c=n.a
if(c.a!==0){c=A.aE("already connected")
throw A.d(c)}}h=d.f
h.toString
if($.js==null){g=B.e.jy(h)
if(g.length!==0)$.js=g}h=b
if($.kQ==null){$.kQ=h
f=$.b5
f=f==null?null:f.a
$.b5=new A.h4(h,f==null?$.kP:f)}h=d.r
h.toString
f=$.b5
if(f!=null)f.a=h
$.kP=h
$.bU=d.x!=null
m=null
l=a2.$1(d)
s=t.c.b(l)?6:8
break
case 6:s=9
return A.jJ(l,$async$c7)
case 9:m=a4
s=7
break
case 8:m=l
case 7:k=m.gj8()
h=k
f=A.a7(h).l("ac<1>")
f=new A.U(new A.ac(h,f),f.l("E(j.E)").a(new A.hO()),f.l("U<j.E>"))
if(!f.gaF(f)){c=A.aE("invalid command identifier in service operations map; command ids must be > 0")
throw A.d(c)}c.b_(0,k)
b.aW(A.hM(a1),!0)
q=1
s=5
break
case 3:q=2
a=p
j=A.a1(a)
i=A.ah(a)
J.k_(b,A.jr(j,i))
s=5
break
case 2:s=1
break
case 5:return A.lj(null,r)
case 1:return A.li(p,r)}})
return A.lk($async$c7,r)},
bE(a){return this.jd(a)},
jd(b0){var s=0,r=A.lo(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bE=A.lt(function(b1,b2){if(b1===1){o=b2
s=p}while(true)switch(s){case 0:a6=A.l1(b0)
a7=a6
a8=a7==null?null:a7.a
if(a6==null)throw A.d(A.aE("invalid message"))
else if(a6.d===-4){a7=m.b
if(a7.c===0)a7.a.$0()
else a7.b=!0
q=null
s=1
break}else if(a6.d===-3){a7=a6.b
a7.toString
a7=m.b.dF(a7)
if(a7.e)a7.eR()
q=null
s=1
break}else if(a6.d===-2){a7=a6.c
a7.toString
b=m.b.e
if(b==null)a7=null
else{a7=b.p(0,a7)
a7=a7==null?null:a7.$0()}q=a7
s=1
break}else if(a8==null)throw A.d(A.aE("missing client for request: "+A.v(a6)))
a7=m.b
b=t.gH.a(a6);++a7.c
a=a7.dF(b.b)
if(a.e){++a.f
a0=b.b
if(a0==null||a0.a!==a.a)A.A(A.aE("cancellation token mismatch"))
b.b=a}else if(b.b!=null)A.A(A.aE("Token reference mismatch"))
l=a
p=4
if(a6.d===-1){b=A.aE("unexpected connection request: "+b0.t(0))
throw A.d(b)}else{b=m.a
if(b.a===0){b=A.jy("worker service is not ready",null,null,null)
throw A.d(b)}}k=b.p(0,a6.d)
if(k==null){b=A.jy("unknown command: "+a6.d,null,null,null)
throw A.d(b)}j=k.$1(a6)
s=t.c.b(j)?7:8
break
case 7:s=9
return A.jJ(j,$async$bE)
case 9:j=b2
case 8:i=a6.w
if(j instanceof A.bW){t.fN.a(j)
b=!0}else b=!1
s=b?10:12
break
case 10:h=A.al("subscription")
g=new A.bB(new A.L($.C,t.d),t.fz)
f=new A.hR(a8,h,g)
b=t.w.a(l)
a0=t.M
a1=a0.a(f)
a2=a7.e
if(a2==null){a2=A.O(t.p,a0)
a7.sir(a2)}a0=++a7.f
a2.h(0,a0,a1)
if(b.e)b.eQ(a1)
e=a0
a8.aW(A.hM(A.n(e)),!1)
b=h
a0=j
a1=A.a7(a0)
a3=a1.l("~(1)?").a(new A.hP(a8,i))
t.Z.a(f)
a1=A.i4(a0.a,a0.b,a3,!1,a1.c)
a0=b.b
if(a0==null?b!=null:a0!==b)A.A(new A.bp("Local '"+b.a+"' has already been initialized."))
b.b=a1
b=g.a
a4=t.O.a(new A.hQ(m,l,e))
a0=b.$ti
j=new A.L($.C,a0)
b.bR(new A.aU(j,8,a4,null,a0.l("@<1>").F(a0.c).l("aU<1,2>")))
s=13
return A.jJ(j,$async$bE)
case 13:s=11
break
case 12:b=j
a0=A.lh(i)
a8.aW(A.hM(b),a0)
case 11:n.push(6)
s=5
break
case 4:p=3
a9=o
d=A.a1(a9)
c=A.ah(a9)
J.k_(a8,A.jr(d,c))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
b=t.w.a(l)
if(b.e)--b.f
if(b.f===0&&b.b==null)a7.d.bG(0,b.a)
b=--a7.c
if(a7.b&&b===0)a7.a.$0()
s=n.pop()
break
case 6:case 1:return A.lj(q,r)
case 2:return A.li(o,r)}})
return A.lk($async$bE,r)}}
A.hO.prototype={
$1(a){return A.n(a)<=0},
$S:38}
A.hR.prototype={
$0(){this.a.aW($.lX(),!1)
this.b.J().cN()
this.c.iE()},
$S:1}
A.hP.prototype={
$1(a){return this.a.aW(A.hM(a),this.b)},
$S:3}
A.hQ.prototype={
$0(){var s=this.a.b,r=this.b,q=this.c,p=s.e,o=p==null?null:p.p(0,q)
if(o!=null){t.M.a(o)
if(r.e)r.eS(o)
s=s.e
if(s!=null)s.bG(0,q)}},
$S:6}
A.iZ.prototype={
$1(a){return new A.bX()},
$S:39}
A.bX.prototype={
gj8(){var s,r=this,q=r.a
if(q===$){s=A.e7([1,new A.hk(r)],t.p,t.eg)
A.oD(r.a,"operations")
r.sfl(s)
q=s}return q},
sfl(a){this.a=t.dx.a(a)},
$il2:1}
A.hk.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.gH.a(a)
s=a.x
r=$.b5
if(r!=null)r.ba(800,"Received getThumbnailCommand in "+A.v(s)+" \xb5s")
s=a.e
r=J.I(s)
q=t.D.a(r.p(s,0))
p=A.n(r.p(s,1))
s=A.n(r.p(s,2))
q=A.oZ(q)
q.toString
o=A.oY(q,s,p)
p=new A.h6(6)
p.f=p.e=o.d
p.r=o.f
p.w=o.r
p.x=o.w
s=p.ax=A.bu(!0,8192)
r=p.a=o.c
q=p.y=o.a
n=p.z=o.b
m=A.b(q,"_width")
l=A.b(n,"_height")
s.al(A.c([137,80,78,71,13,10,26,10],t.t))
k=A.bu(!0,8192)
k.am(m)
k.am(l)
k.E(8)
k.E(r===B.w?2:6)
k.E(0)
k.E(0)
k.E(0)
p.bu(s,"IHDR",A.J(k.c.buffer,0,k.a))
p.it(p.ax,o.z)
s=r===B.f?4:3
j=new Uint8Array(q*n*s+n)
p.ha(0,o,j)
i=B.a0.ei(j,6)
if(p.as<=1){s=p.ax
s.toString
p.bu(s,"IDAT",i)}else{h=A.bu(!0,8192)
h.am(p.as)
h.al(i)
s=p.ax
s.toString
p.bu(s,"fdAT",A.J(h.c.buffer,0,h.a));++p.as}s=p.iY()
s.toString
return new Uint8Array(A.jL(s))},
$S:40};(function aliases(){var s=J.b1.prototype
s.eZ=s.t
s=A.ak.prototype
s.eV=s.ek
s.eW=s.el
s.eY=s.en
s.eX=s.em
s=A.t.prototype
s.d4=s.Z
s=A.j.prototype
s.eU=s.b2
s=A.aI.prototype
s.eT=s.cL
s=A.bJ.prototype
s.eR=s.cN
s.eQ=s.iv
s.eS=s.jo})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_1u,n=hunkHelpers.installStaticTearOff
s(A,"oC","my",13)
s(A,"oQ","nP",7)
s(A,"oR","nQ",7)
s(A,"oS","nR",7)
r(A,"lv","oJ",1)
q(A,"oW","ok",43)
s(A,"oX","ol",13)
s(A,"lw","om",12)
var m
p(m=A.e3.prototype,"gfL","fM",9)
p(m,"gfO","fP",9)
p(m,"gfQ","fR",18)
p(m,"gfG","fH",9)
p(m,"gfI","fJ",18)
s(A,"pJ","nn",0)
s(A,"pA","ne",0)
s(A,"pt","n7",0)
s(A,"pG","nk",0)
s(A,"pH","nl",0)
s(A,"pF","nj",0)
s(A,"pE","ni",0)
s(A,"pD","nh",0)
s(A,"pM","nq",0)
s(A,"pL","np",0)
s(A,"pC","ng",0)
s(A,"py","nc",0)
s(A,"pI","nm",0)
s(A,"pz","nd",0)
s(A,"pp","n3",0)
s(A,"pr","n5",0)
s(A,"pq","n4",0)
s(A,"ps","n6",0)
s(A,"pK","no",0)
s(A,"pB","nf",0)
s(A,"pu","n8",0)
s(A,"pv","n9",0)
s(A,"pw","na",0)
s(A,"px","nb",0)
o(A.cW.prototype,"ghO","hP",10)
o(A.dY.prototype,"giW","iX",10)
n(A,"jS",3,null,["$3"],["ns"],2,0)
n(A,"pN",3,null,["$3"],["nt"],2,0)
n(A,"pS",3,null,["$3"],["ny"],2,0)
n(A,"pT",3,null,["$3"],["nz"],2,0)
n(A,"pU",3,null,["$3"],["nA"],2,0)
n(A,"pV",3,null,["$3"],["nB"],2,0)
n(A,"pW",3,null,["$3"],["nC"],2,0)
n(A,"pX",3,null,["$3"],["nD"],2,0)
n(A,"pY",3,null,["$3"],["nE"],2,0)
n(A,"pZ",3,null,["$3"],["nF"],2,0)
n(A,"pO",3,null,["$3"],["nu"],2,0)
n(A,"pP",3,null,["$3"],["nv"],2,0)
n(A,"pQ",3,null,["$3"],["nw"],2,0)
n(A,"pR",3,null,["$3"],["nx"],2,0)
o(m=A.eA.prototype,"gdK","hr",4)
o(m,"gdL","cD",4)
n(A,"q0",6,null,["$6"],["nL"],8,0)
n(A,"q1",6,null,["$6"],["nM"],8,0)
n(A,"q_",6,null,["$6"],["nK"],8,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.u,null)
q(A.u,[A.je,J.dR,J.cc,A.x,A.d6,A.bi,A.j,A.br,A.F,A.cm,A.ci,A.Z,A.bx,A.cg,A.hq,A.h_,A.ck,A.df,A.bs,A.fU,A.bq,A.i1,A.at,A.eP,A.iz,A.eL,A.c2,A.c4,A.ce,A.eN,A.aU,A.L,A.eM,A.bW,A.et,A.eu,A.eV,A.dk,A.dl,A.eS,A.bC,A.t,A.d8,A.cP,A.dz,A.ir,A.io,A.iC,A.bk,A.i2,A.ef,A.cS,A.i6,A.dH,A.K,A.eW,A.bw,A.j6,A.iw,A.hV,A.fZ,A.dQ,A.h3,A.hT,A.fk,A.am,A.ik,A.eU,A.fy,A.dO,A.hS,A.hU,A.bN,A.fd,A.fi,A.fj,A.fo,A.dD,A.aJ,A.dE,A.dF,A.dG,A.dd,A.fu,A.cq,A.bR,A.dA,A.fM,A.ar,A.fN,A.c3,A.e2,A.fP,A.e3,A.cK,A.az,A.bT,A.h9,A.bv,A.el,A.cM,A.hl,A.ey,A.hn,A.ez,A.fW,A.hu,A.cV,A.hv,A.hA,A.hE,A.hG,A.cU,A.hF,A.hw,A.aS,A.cX,A.eI,A.cY,A.cZ,A.cW,A.eG,A.hB,A.eH,A.hI,A.d_,A.dK,A.bP,A.dJ,A.cr,A.fA,A.dM,A.fE,A.a_,A.h0,A.i0,A.eA,A.bJ,A.cR,A.b4,A.f8,A.au,A.bA,A.he,A.hK,A.hN,A.bX])
q(J.dR,[J.e_,J.cz,J.aq,J.q,J.cA,J.bS,A.cG,A.N])
q(J.aq,[J.b1,A.bh,A.aI,A.fn,A.h])
q(J.b1,[J.eg,J.bY,J.aL])
r(J.fL,J.q)
q(J.cA,[J.cy,J.e0])
q(A.x,[A.bp,A.b7,A.e4,A.eD,A.er,A.cd,A.eO,A.cB,A.ee,A.ax,A.eE,A.eB,A.bV,A.dB,A.dC])
r(A.cD,A.d6)
r(A.bZ,A.cD)
r(A.ay,A.bZ)
q(A.bi,[A.dx,A.ft,A.dy,A.ex,A.fR,A.iV,A.iX,A.hY,A.hX,A.iG,A.ia,A.ij,A.hg,A.iv,A.it,A.i5,A.j1,A.j2,A.fh,A.fg,A.fr,A.fD,A.fO,A.h5,A.fG,A.fF,A.iO,A.iP,A.hp,A.f9,A.fa,A.fb,A.fc,A.hO,A.hP,A.iZ,A.hk])
q(A.dx,[A.j0,A.hZ,A.i_,A.iA,A.i7,A.ie,A.ic,A.i9,A.id,A.i8,A.ii,A.ih,A.ig,A.hh,A.iL,A.iu,A.ht,A.hs,A.iN,A.im,A.hL,A.hR,A.hQ])
q(A.j,[A.p,A.aM,A.U,A.cl,A.aP,A.cx])
q(A.p,[A.W,A.aH,A.ac,A.d7])
q(A.W,[A.cT,A.aN,A.d3])
r(A.bl,A.aM)
q(A.F,[A.cF,A.d1,A.cQ])
r(A.bM,A.aP)
r(A.cp,A.cg)
r(A.cJ,A.b7)
q(A.ex,[A.es,A.bI])
r(A.eK,A.cd)
r(A.cE,A.bs)
r(A.ak,A.cE)
q(A.dy,[A.fQ,A.iW,A.iH,A.iM,A.ib,A.fV,A.fX,A.is,A.ip,A.ix,A.iy,A.hW,A.hH,A.iU,A.iT])
r(A.S,A.N)
q(A.S,[A.d9,A.db])
r(A.da,A.d9)
r(A.b3,A.da)
r(A.dc,A.db)
r(A.ad,A.dc)
q(A.b3,[A.e8,A.e9])
q(A.ad,[A.ea,A.eb,A.ec,A.ed,A.cH,A.cI,A.bt])
r(A.dh,A.eO)
r(A.dg,A.cx)
r(A.bB,A.eN)
r(A.eT,A.dk)
r(A.d4,A.ak)
r(A.de,A.dl)
r(A.d5,A.de)
r(A.ch,A.eu)
r(A.e5,A.cB)
r(A.fS,A.dz)
q(A.ch,[A.e6,A.eF])
r(A.eR,A.ir)
r(A.eZ,A.eR)
r(A.iq,A.eZ)
q(A.ax,[A.cO,A.dN])
q(A.aI,[A.b9,A.b2])
r(A.bL,A.b9)
r(A.bO,A.bh)
r(A.aO,A.h)
r(A.i3,A.bW)
r(A.d2,A.et)
r(A.eX,A.iw)
r(A.eJ,A.hV)
r(A.f4,A.dH)
r(A.dP,A.dQ)
r(A.h1,A.h3)
r(A.iE,A.hT)
q(A.i2,[A.cf,A.fz,A.fs,A.dw,A.ff,A.fm,A.cw])
q(A.fi,[A.b_,A.fq,A.dI,A.fC,A.h7,A.hb,A.hj,A.ho,A.d0])
q(A.fj,[A.dv,A.fp,A.fv,A.fB,A.e1,A.eh,A.ha,A.hi,A.hm,A.hJ])
r(A.fl,A.dv)
r(A.dS,A.aJ)
q(A.dS,[A.cs,A.dT,A.dU,A.dV,A.cu])
r(A.ct,A.dG)
r(A.dW,A.cq)
r(A.dL,A.b_)
r(A.dX,A.cK)
r(A.fJ,A.h7)
r(A.h6,A.fo)
q(A.az,[A.ej,A.ek,A.em,A.en,A.ep,A.eq])
q(A.bT,[A.cN,A.eo])
r(A.dY,A.cW)
r(A.dZ,A.d_)
r(A.cv,A.d0)
r(A.eQ,A.i0)
r(A.h4,A.f8)
r(A.c0,A.b4)
r(A.bK,A.c0)
r(A.ew,A.bK)
r(A.b0,A.bJ)
s(A.bZ,A.bx)
s(A.d9,A.t)
s(A.da,A.Z)
s(A.db,A.t)
s(A.dc,A.Z)
s(A.d6,A.t)
s(A.dl,A.cP)
s(A.eZ,A.io)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",y:"double",H:"num",D:"String",E:"bool",K:"Null",k:"List"},mangledNames:{},types:["~(a_)","~()","e(aR,e,e)","~(@)","E(@)","~(u?,u?)","K()","~(~())","~(e,e,e,e,e,aC)","~(ar,k<@>)","~(e)","K(@)","@(@)","e(u?)","E(D)","~(aO)","H(H,H)","~(@,@)","~(ar,k<e>)","@()","e(e)","@(@,@)","K(@,@)","aR(e)","bR(e)","ar(e)","~(h)","ap<K>()","e(e,e)","@(@,D)","L<@>(@)","H(H,H,H,H,H)","K(u,b6)","D()","D(@)","k<D>(D)","~(e,@)","b0()","E(e)","bX(au)","aC/(au)","K(@,b6)","E(u?)","E(u?,u?)","@(D)","K(~())","e(e,e,e,e)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.o9(v.typeUniverse,JSON.parse('{"eg":"b1","bY":"b1","aL":"b1","q2":"h","q5":"h","q8":"b9","q6":"N","e_":{"E":[]},"cz":{"K":[]},"b1":{"kp":[]},"q":{"k":["1"],"p":["1"],"j":["1"]},"fL":{"q":["1"],"k":["1"],"p":["1"],"j":["1"]},"cc":{"F":["1"]},"cA":{"y":[],"H":[]},"cy":{"y":[],"e":[],"H":[]},"e0":{"y":[],"H":[]},"bS":{"D":[]},"bp":{"x":[]},"ay":{"t":["e"],"bx":["e"],"k":["e"],"p":["e"],"j":["e"],"t.E":"e","bx.E":"e"},"p":{"j":["1"]},"W":{"p":["1"],"j":["1"]},"cT":{"W":["1"],"p":["1"],"j":["1"],"j.E":"1","W.E":"1"},"br":{"F":["1"]},"aM":{"j":["2"],"j.E":"2"},"bl":{"aM":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"cF":{"F":["2"]},"aN":{"W":["2"],"p":["2"],"j":["2"],"j.E":"2","W.E":"2"},"U":{"j":["1"],"j.E":"1"},"d1":{"F":["1"]},"cl":{"j":["2"],"j.E":"2"},"cm":{"F":["2"]},"aP":{"j":["1"],"j.E":"1"},"bM":{"aP":["1"],"p":["1"],"j":["1"],"j.E":"1"},"cQ":{"F":["1"]},"aH":{"p":["1"],"j":["1"],"j.E":"1"},"ci":{"F":["1"]},"bZ":{"t":["1"],"bx":["1"],"k":["1"],"p":["1"],"j":["1"]},"cg":{"as":["1","2"]},"cp":{"cg":["1","2"],"as":["1","2"]},"cJ":{"b7":[],"x":[]},"e4":{"x":[]},"eD":{"x":[]},"df":{"b6":[]},"bi":{"bm":[]},"dx":{"bm":[]},"dy":{"bm":[]},"ex":{"bm":[]},"es":{"bm":[]},"bI":{"bm":[]},"er":{"x":[]},"eK":{"x":[]},"ak":{"bs":["1","2"],"jg":["1","2"],"as":["1","2"]},"ac":{"p":["1"],"j":["1"],"j.E":"1"},"bq":{"F":["1"]},"N":{"T":[]},"S":{"ab":["1"],"N":[],"T":[]},"b3":{"S":["y"],"t":["y"],"ab":["y"],"k":["y"],"N":[],"p":["y"],"T":[],"j":["y"],"Z":["y"]},"ad":{"S":["e"],"t":["e"],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"]},"e8":{"b3":[],"S":["y"],"t":["y"],"mu":[],"ab":["y"],"k":["y"],"N":[],"p":["y"],"T":[],"j":["y"],"Z":["y"],"t.E":"y"},"e9":{"b3":[],"S":["y"],"t":["y"],"ab":["y"],"k":["y"],"N":[],"p":["y"],"T":[],"j":["y"],"Z":["y"],"t.E":"y"},"ea":{"ad":[],"S":["e"],"t":["e"],"jb":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"eb":{"ad":[],"S":["e"],"t":["e"],"fI":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"ec":{"ad":[],"S":["e"],"t":["e"],"mF":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"ed":{"ad":[],"S":["e"],"t":["e"],"mZ":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"cH":{"ad":[],"S":["e"],"t":["e"],"aR":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"cI":{"ad":[],"S":["e"],"t":["e"],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"bt":{"ad":[],"S":["e"],"t":["e"],"aC":[],"ab":["e"],"k":["e"],"N":[],"p":["e"],"T":[],"j":["e"],"Z":["e"],"t.E":"e"},"eO":{"x":[]},"dh":{"b7":[],"x":[]},"L":{"ap":["1"]},"c4":{"F":["1"]},"dg":{"j":["1"],"j.E":"1"},"ce":{"x":[]},"bB":{"eN":["1"]},"dk":{"l3":[]},"eT":{"dk":[],"l3":[]},"d4":{"ak":["1","2"],"bs":["1","2"],"jg":["1","2"],"as":["1","2"]},"d5":{"cP":["1"],"jq":["1"],"p":["1"],"j":["1"]},"bC":{"F":["1"]},"cx":{"j":["1"]},"cD":{"t":["1"],"k":["1"],"p":["1"],"j":["1"]},"cE":{"bs":["1","2"],"as":["1","2"]},"bs":{"as":["1","2"]},"d7":{"p":["2"],"j":["2"],"j.E":"2"},"d8":{"F":["2"]},"de":{"cP":["1"],"jq":["1"],"p":["1"],"j":["1"]},"cB":{"x":[]},"e5":{"x":[]},"e6":{"ch":["u?","D"]},"eF":{"ch":["k<e>","D"]},"y":{"H":[]},"e":{"H":[]},"k":{"p":["1"],"j":["1"]},"cd":{"x":[]},"b7":{"x":[]},"ee":{"x":[]},"ax":{"x":[]},"cO":{"x":[]},"dN":{"x":[]},"eE":{"x":[]},"eB":{"x":[]},"bV":{"x":[]},"dB":{"x":[]},"ef":{"x":[]},"cS":{"x":[]},"dC":{"x":[]},"d3":{"W":["1"],"p":["1"],"j":["1"],"j.E":"1","W.E":"1"},"eW":{"b6":[]},"bw":{"mX":[]},"aO":{"h":[]},"bL":{"aI":[]},"bO":{"bh":[]},"b2":{"aI":[]},"b9":{"aI":[]},"i3":{"bW":["1"]},"d2":{"et":["1"]},"dP":{"dQ":[]},"cs":{"aJ":[]},"dS":{"aJ":[]},"ct":{"dG":[]},"dT":{"aJ":[]},"dU":{"aJ":[]},"dV":{"aJ":[]},"cu":{"aJ":[]},"dW":{"cq":[]},"dL":{"b_":[]},"dX":{"cK":[]},"ej":{"az":[]},"ek":{"az":[]},"em":{"az":[]},"en":{"az":[]},"ep":{"az":[]},"eq":{"az":[]},"cN":{"bT":[]},"eo":{"bT":[]},"dZ":{"d_":[]},"cv":{"d0":[]},"eQ":{"nN":[]},"cR":{"b4":[]},"c0":{"b4":[]},"bK":{"b4":[]},"ew":{"bK":[],"b4":[],"kT":[]},"b0":{"bJ":[]},"bX":{"l2":[]},"aC":{"k":["e"],"p":["e"],"j":["e"],"T":[]},"jb":{"k":["e"],"p":["e"],"j":["e"],"T":[]},"fI":{"k":["e"],"p":["e"],"j":["e"],"T":[]},"aR":{"k":["e"],"p":["e"],"j":["e"],"T":[]}}'))
A.o8(v.typeUniverse,JSON.parse('{"p":1,"bZ":1,"S":1,"eu":2,"cx":1,"cD":1,"cE":2,"de":1,"d6":1,"dl":1,"dz":2}'))
var u={c:"EOF reached without finding string terminator",b:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dr
return{n:s("ce"),G:s("cf"),fK:s("bh"),w:s("b0"),cJ:s("bL"),Q:s("p<@>"),U:s("x"),E:s("h"),aX:s("dD"),gV:s("dF"),c8:s("bO"),Y:s("bm"),he:s("l2/(au)"),c:s("ap<@>"),ct:s("bP"),r:s("cr"),bs:s("dK"),gx:s("bR"),h:s("fI"),bM:s("j<y>"),R:s("j<@>"),hb:s("j<e>"),eB:s("q<dA>"),g9:s("q<dE>"),b:s("q<cq>"),V:s("q<bP>"),dd:s("q<ct>"),W:s("q<k<k<k<e>>>>"),o:s("q<k<k<e>>>"),S:s("q<k<e>>"),i:s("q<u>"),dm:s("q<cK>"),h0:s("q<bv>"),af:s("q<az>"),cE:s("q<cM>"),s:s("q<D>"),aU:s("q<ez>"),a:s("q<aC>"),ao:s("q<aS>"),gk:s("q<eH>"),J:s("q<d_>"),e8:s("q<c3>"),gn:s("q<@>"),t:s("q<e>"),f8:s("q<e2?>"),fk:s("q<k<@>?>"),hh:s("q<aR?>"),bT:s("q<~()>"),A:s("q<~(a_)>"),u:s("cz"),eH:s("kp"),cj:s("aL"),ez:s("ab<@>"),d2:s("ar"),d1:s("k<bP>"),f0:s("k<fI>"),fZ:s("k<k<k<e>>>"),gS:s("k<k<aS>>"),ew:s("k<u>"),I:s("k<bv>"),dl:s("k<cM>"),dy:s("k<D>"),c7:s("k<cU>"),e6:s("k<aS>"),eQ:s("k<cX>"),db:s("k<cY>"),cC:s("k<cZ>"),fx:s("k<E>"),j:s("k<@>"),L:s("k<e>"),ge:s("k<aS?>"),q:s("k<dd?>"),cP:s("k<e?>"),bj:s("k<H>"),f:s("as<@,@>"),dx:s("as<e,@(au)>"),e:s("aO"),bK:s("b2"),bZ:s("cG"),d4:s("b3"),bc:s("ad"),dD:s("N"),bm:s("bt"),P:s("K"),K:s("u"),fW:s("bv"),fh:s("el"),g0:s("cN"),hf:s("bT"),bC:s("jq<u>"),l:s("b6"),fN:s("bW<@>"),N:s("D"),cV:s("ey"),gY:s("kT"),bA:s("qb"),eK:s("b7"),ak:s("T"),bv:s("aR"),D:s("aC"),bI:s("bY"),bD:s("cU"),ai:s("cX"),gT:s("cY"),dE:s("cZ"),cc:s("U<D>"),gH:s("au"),ds:s("bA"),fz:s("bB<@>"),ck:s("L<K>"),d:s("L<@>"),fJ:s("L<e>"),eO:s("dd"),bb:s("eU"),v:s("E"),al:s("E(u)"),bB:s("E(D)"),gR:s("y"),z:s("@"),O:s("@()"),x:s("@(u)"),C:s("@(u,b6)"),eg:s("@(au)"),g2:s("@(@,@)"),p:s("e"),aw:s("0&*"),_:s("u*"),bG:s("ap<K>?"),aS:s("jb?"),ha:s("k<u>?"),hc:s("k<aC>?"),T:s("k<e>?"),gZ:s("k<aR?>?"),k:s("k<e?>?"),eX:s("k<~()>?"),fF:s("as<@,@>?"),ec:s("as<e,~()>?"),c4:s("b2?"),X:s("u?"),dk:s("D?"),aD:s("aC?"),eW:s("cV?"),aj:s("aS?"),dP:s("eI?"),F:s("aU<@,@>?"),g:s("eS?"),y:s("@(h)?"),B:s("e?"),dA:s("u?(@)?"),Z:s("~()?"),fQ:s("~(aO)?"),bJ:s("~(e)?"),di:s("H"),H:s("~"),M:s("~()"),m:s("~(ar,k<e>)"),aR:s("~(e)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aF=J.dR.prototype
B.b=J.q.prototype
B.a=J.cy.prototype
B.c=J.cA.prototype
B.e=J.bS.prototype
B.aJ=J.aL.prototype
B.aK=J.aq.prototype
B.at=A.b2.prototype
B.n=A.cH.prototype
B.d=A.bt.prototype
B.au=J.eg.prototype
B.W=J.bY.prototype
B.K=new A.cf(0,"BI_BITFIELDS")
B.L=new A.cf(1,"NONE")
B.av=new A.ff(1,"over")
B.X=new A.ci(A.dr("ci<0&>"))
B.Y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aw=function() {
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
B.aB=function(getTagFallback) {
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
B.ax=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ay=function(hooks) {
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
B.aA=function(hooks) {
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
B.az=function(hooks) {
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
B.Z=function(hooks) { return hooks; }

B.a_=new A.fS()
B.aC=new A.ef()
B.fX=new A.hS()
B.a0=new A.hU()
B.h=new A.eT()
B.aD=new A.eW()
B.r=new A.iE()
B.w=new A.dw(0,"rgb")
B.f=new A.dw(1,"rgba")
B.aE=new A.fm(1,"clear")
B.fY=new A.fs(2,"rgba")
B.M=new A.fz(1,"deflate")
B.aG=new A.cw(0,"nearest")
B.aH=new A.cw(1,"linear")
B.aI=new A.cw(2,"cubic")
B.aL=new A.e6(null,null)
B.N=A.c(s([A.pu(),A.pH(),A.pK(),A.pB(),A.pw(),A.pv(),A.px()]),t.A)
B.x=A.c(s([0,2,8]),t.t)
B.aS=A.c(s([0,4,2,1]),t.t)
B.y=A.c(s([292,260,226,226]),t.t)
B.a1=A.c(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.a2=A.c(s([137,80,78,71,13,10,26,10]),t.t)
B.a3=A.c(s([2,3,7]),t.t)
B.b8=A.c(s([3,3,11]),t.t)
B.a5=A.c(s([511,1023,2047,4095]),t.t)
B.cb=A.c(s([231,120,48,89,115,113,120,152,112]),t.t)
B.ez=A.c(s([152,179,64,126,170,118,46,70,95]),t.t)
B.eA=A.c(s([175,69,143,80,85,82,72,155,103]),t.t)
B.eB=A.c(s([56,58,10,171,218,189,17,13,152]),t.t)
B.eM=A.c(s([114,26,17,163,44,195,21,10,173]),t.t)
B.eX=A.c(s([121,24,80,195,26,62,44,64,85]),t.t)
B.f7=A.c(s([144,71,10,38,171,213,144,34,26]),t.t)
B.fi=A.c(s([170,46,55,19,136,160,33,206,71]),t.t)
B.ft=A.c(s([63,20,8,114,114,208,12,9,226]),t.t)
B.fE=A.c(s([81,40,11,96,182,84,29,16,36]),t.t)
B.e0=A.c(s([B.cb,B.ez,B.eA,B.eB,B.eM,B.eX,B.f7,B.fi,B.ft,B.fE]),t.S)
B.fP=A.c(s([134,183,89,137,98,101,106,165,148]),t.t)
B.fR=A.c(s([72,187,100,130,157,111,32,75,80]),t.t)
B.eC=A.c(s([66,102,167,99,74,62,40,234,128]),t.t)
B.dk=A.c(s([41,53,9,178,241,141,26,8,107]),t.t)
B.eD=A.c(s([74,43,26,146,73,166,49,23,157]),t.t)
B.eE=A.c(s([65,38,105,160,51,52,31,115,128]),t.t)
B.cO=A.c(s([104,79,12,27,217,255,87,17,7]),t.t)
B.eF=A.c(s([87,68,71,44,114,51,15,186,23]),t.t)
B.eG=A.c(s([47,41,14,110,182,183,21,17,194]),t.t)
B.eH=A.c(s([66,45,25,102,197,189,23,18,22]),t.t)
B.bQ=A.c(s([B.fP,B.fR,B.eC,B.dk,B.eD,B.eE,B.cO,B.eF,B.eG,B.eH]),t.S)
B.eI=A.c(s([88,88,147,150,42,46,45,196,205]),t.t)
B.eJ=A.c(s([43,97,183,117,85,38,35,179,61]),t.t)
B.eK=A.c(s([39,53,200,87,26,21,43,232,171]),t.t)
B.eL=A.c(s([56,34,51,104,114,102,29,93,77]),t.t)
B.eN=A.c(s([39,28,85,171,58,165,90,98,64]),t.t)
B.eO=A.c(s([34,22,116,206,23,34,43,166,73]),t.t)
B.eP=A.c(s([107,54,32,26,51,1,81,43,31]),t.t)
B.eQ=A.c(s([68,25,106,22,64,171,36,225,114]),t.t)
B.eR=A.c(s([34,19,21,102,132,188,16,76,124]),t.t)
B.eS=A.c(s([62,18,78,95,85,57,50,48,51]),t.t)
B.bp=A.c(s([B.eI,B.eJ,B.eK,B.eL,B.eN,B.eO,B.eP,B.eQ,B.eR,B.eS]),t.S)
B.eT=A.c(s([193,101,35,159,215,111,89,46,111]),t.t)
B.eU=A.c(s([60,148,31,172,219,228,21,18,111]),t.t)
B.cP=A.c(s([112,113,77,85,179,255,38,120,114]),t.t)
B.dl=A.c(s([40,42,1,196,245,209,10,25,109]),t.t)
B.eV=A.c(s([88,43,29,140,166,213,37,43,154]),t.t)
B.eW=A.c(s([61,63,30,155,67,45,68,1,209]),t.t)
B.eY=A.c(s([100,80,8,43,154,1,51,26,71]),t.t)
B.dm=A.c(s([142,78,78,16,255,128,34,197,171]),t.t)
B.eZ=A.c(s([41,40,5,102,211,183,4,1,221]),t.t)
B.f_=A.c(s([51,50,17,168,209,192,23,25,82]),t.t)
B.bO=A.c(s([B.eT,B.eU,B.cP,B.dl,B.eV,B.eW,B.eY,B.dm,B.eZ,B.f_]),t.S)
B.dn=A.c(s([138,31,36,171,27,166,38,44,229]),t.t)
B.f0=A.c(s([67,87,58,169,82,115,26,59,179]),t.t)
B.f1=A.c(s([63,59,90,180,59,166,93,73,154]),t.t)
B.f2=A.c(s([40,40,21,116,143,209,34,39,175]),t.t)
B.f3=A.c(s([47,15,16,183,34,223,49,45,183]),t.t)
B.f4=A.c(s([46,17,33,183,6,98,15,32,183]),t.t)
B.f5=A.c(s([57,46,22,24,128,1,54,17,37]),t.t)
B.f6=A.c(s([65,32,73,115,28,128,23,128,205]),t.t)
B.f8=A.c(s([40,3,9,115,51,192,18,6,223]),t.t)
B.f9=A.c(s([87,37,9,115,59,77,64,21,47]),t.t)
B.ee=A.c(s([B.dn,B.f0,B.f1,B.f2,B.f3,B.f4,B.f5,B.f6,B.f8,B.f9]),t.S)
B.fa=A.c(s([104,55,44,218,9,54,53,130,226]),t.t)
B.fb=A.c(s([64,90,70,205,40,41,23,26,57]),t.t)
B.fc=A.c(s([54,57,112,184,5,41,38,166,213]),t.t)
B.fd=A.c(s([30,34,26,133,152,116,10,32,134]),t.t)
B.dp=A.c(s([39,19,53,221,26,114,32,73,255]),t.t)
B.fe=A.c(s([31,9,65,234,2,15,1,118,73]),t.t)
B.cQ=A.c(s([75,32,12,51,192,255,160,43,51]),t.t)
B.ff=A.c(s([88,31,35,67,102,85,55,186,85]),t.t)
B.fg=A.c(s([56,21,23,111,59,205,45,37,192]),t.t)
B.fh=A.c(s([55,38,70,124,73,102,1,34,98]),t.t)
B.aM=A.c(s([B.fa,B.fb,B.fc,B.fd,B.dp,B.fe,B.cQ,B.ff,B.fg,B.fh]),t.S)
B.fj=A.c(s([125,98,42,88,104,85,117,175,82]),t.t)
B.fk=A.c(s([95,84,53,89,128,100,113,101,45]),t.t)
B.fl=A.c(s([75,79,123,47,51,128,81,171,1]),t.t)
B.fm=A.c(s([57,17,5,71,102,57,53,41,49]),t.t)
B.fn=A.c(s([38,33,13,121,57,73,26,1,85]),t.t)
B.fo=A.c(s([41,10,67,138,77,110,90,47,114]),t.t)
B.cR=A.c(s([115,21,2,10,102,255,166,23,6]),t.t)
B.fp=A.c(s([101,29,16,10,85,128,101,196,26]),t.t)
B.fq=A.c(s([57,18,10,102,102,213,34,20,43]),t.t)
B.fr=A.c(s([117,20,15,36,163,128,68,1,26]),t.t)
B.cq=A.c(s([B.fj,B.fk,B.fl,B.fm,B.fn,B.fo,B.cR,B.fp,B.fq,B.fr]),t.S)
B.d6=A.c(s([102,61,71,37,34,53,31,243,192]),t.t)
B.fs=A.c(s([69,60,71,38,73,119,28,222,37]),t.t)
B.d7=A.c(s([68,45,128,34,1,47,11,245,171]),t.t)
B.fu=A.c(s([62,17,19,70,146,85,55,62,70]),t.t)
B.fv=A.c(s([37,43,37,154,100,163,85,160,1]),t.t)
B.fw=A.c(s([63,9,92,136,28,64,32,201,85]),t.t)
B.cS=A.c(s([75,15,9,9,64,255,184,119,16]),t.t)
B.cT=A.c(s([86,6,28,5,64,255,25,248,1]),t.t)
B.cU=A.c(s([56,8,17,132,137,255,55,116,128]),t.t)
B.fx=A.c(s([58,15,20,82,135,57,26,121,40]),t.t)
B.bc=A.c(s([B.d6,B.fs,B.d7,B.fu,B.fv,B.fw,B.cS,B.cT,B.cU,B.fx]),t.S)
B.fy=A.c(s([164,50,31,137,154,133,25,35,218]),t.t)
B.fz=A.c(s([51,103,44,131,131,123,31,6,158]),t.t)
B.fA=A.c(s([86,40,64,135,148,224,45,183,128]),t.t)
B.fB=A.c(s([22,26,17,131,240,154,14,1,209]),t.t)
B.fC=A.c(s([45,16,21,91,64,222,7,1,197]),t.t)
B.fD=A.c(s([56,21,39,155,60,138,23,102,213]),t.t)
B.cV=A.c(s([83,12,13,54,192,255,68,47,28]),t.t)
B.fF=A.c(s([85,26,85,85,128,128,32,146,171]),t.t)
B.fG=A.c(s([18,11,7,63,144,171,4,4,246]),t.t)
B.fH=A.c(s([35,27,10,146,174,171,12,26,128]),t.t)
B.cr=A.c(s([B.fy,B.fz,B.fA,B.fB,B.fC,B.fD,B.cV,B.fF,B.fG,B.fH]),t.S)
B.fI=A.c(s([190,80,35,99,180,80,126,54,45]),t.t)
B.fJ=A.c(s([85,126,47,87,176,51,41,20,32]),t.t)
B.fK=A.c(s([101,75,128,139,118,146,116,128,85]),t.t)
B.fL=A.c(s([56,41,15,176,236,85,37,9,62]),t.t)
B.cW=A.c(s([71,30,17,119,118,255,17,18,138]),t.t)
B.fM=A.c(s([101,38,60,138,55,70,43,26,142]),t.t)
B.cX=A.c(s([146,36,19,30,171,255,97,27,20]),t.t)
B.fN=A.c(s([138,45,61,62,219,1,81,188,64]),t.t)
B.fO=A.c(s([32,41,20,117,151,142,20,21,163]),t.t)
B.fQ=A.c(s([112,19,12,61,195,128,48,4,24]),t.t)
B.c5=A.c(s([B.fI,B.fJ,B.fK,B.fL,B.cW,B.fM,B.cX,B.fN,B.fO,B.fQ]),t.S)
B.a6=A.c(s([B.e0,B.bQ,B.bp,B.bO,B.ee,B.aM,B.cq,B.bc,B.cr,B.c5]),t.o)
B.z=A.c(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.bf=A.c(s([8,8,4,2]),t.t)
B.a7=A.c(s([A.pp(),A.pF(),A.pI(),A.pz(),A.pr(),A.pq(),A.ps()]),t.A)
B.P=A.c(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.B=A.c(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.A=A.c(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.a8=A.c(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.m=A.c(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.Q=A.c(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.C=A.c(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.k=A.c(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.t=A.c(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.D=A.c(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.a9=A.c(s([null,A.q0(),A.q1(),A.q_()]),A.dr("q<~(e,e,e,e,e,aC)?>"))
B.l=A.c(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.i=A.c(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.o=A.c(s([B.i,B.i,B.i]),t.S)
B.dC=A.c(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.cc=A.c(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.dM=A.c(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.bw=A.c(s([B.dC,B.cc,B.dM]),t.S)
B.dy=A.c(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.dY=A.c(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.am=A.c(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.d1=A.c(s([B.dy,B.dY,B.am]),t.S)
B.dz=A.c(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.eg=A.c(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.ac=A.c(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.c0=A.c(s([B.dz,B.eg,B.ac]),t.S)
B.ak=A.c(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.eh=A.c(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.fS=A.c(s([B.ak,B.eh,B.i]),t.S)
B.V=A.c(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dA=A.c(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.bk=A.c(s([B.V,B.dA,B.ac]),t.S)
B.d_=A.c(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.ed=A.c(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.E=A.c(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.b9=A.c(s([B.d_,B.ed,B.E]),t.S)
B.ec=A.c(s([B.o,B.bw,B.d1,B.c0,B.fS,B.bk,B.b9,B.o]),t.o)
B.bU=A.c(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.dw=A.c(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.eb=A.c(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.bx=A.c(s([B.bU,B.dw,B.eb]),t.S)
B.R=A.c(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dZ=A.c(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.aN=A.c(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.ca=A.c(s([B.R,B.dZ,B.aN]),t.S)
B.by=A.c(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.ef=A.c(s([B.ak,B.by,B.i]),t.S)
B.dN=A.c(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.bz=A.c(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.bE=A.c(s([B.dN,B.bz,B.i]),t.S)
B.bV=A.c(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.dR=A.c(s([B.V,B.bV,B.i]),t.S)
B.al=A.c(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.dI=A.c(s([B.al,B.am,B.i]),t.S)
B.bA=A.c(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.aa=A.c(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.aX=A.c(s([B.bA,B.aa,B.E]),t.S)
B.bo=A.c(s([B.bx,B.ca,B.ef,B.bE,B.dR,B.dI,B.aX,B.o]),t.o)
B.cd=A.c(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.aO=A.c(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.bN=A.c(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.ea=A.c(s([B.cd,B.aO,B.bN]),t.S)
B.ce=A.c(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bh=A.c(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.cY=A.c(s([B.V,B.ce,B.bh]),t.S)
B.e_=A.c(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.d2=A.c(s([B.al,B.e_,B.i]),t.S)
B.dD=A.c(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.c3=A.c(s([B.R,B.dD,B.E]),t.S)
B.ar=A.c(s([B.i,B.E,B.i]),t.S)
B.c4=A.c(s([B.ea,B.cY,B.d2,B.c3,B.ar,B.o,B.o,B.o]),t.o)
B.bW=A.c(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.bj=A.c(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.dE=A.c(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.d5=A.c(s([B.bW,B.bj,B.dE]),t.S)
B.dO=A.c(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.bX=A.c(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.aP=A.c(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.aQ=A.c(s([B.dO,B.bX,B.aP]),t.S)
B.dB=A.c(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.dF=A.c(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.dx=A.c(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.bm=A.c(s([B.dB,B.dF,B.dx]),t.S)
B.ei=A.c(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ej=A.c(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ek=A.c(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.e1=A.c(s([B.ei,B.ej,B.ek]),t.S)
B.dP=A.c(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.cf=A.c(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.e3=A.c(s([B.dP,B.cf,B.R]),t.S)
B.bB=A.c(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.el=A.c(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.em=A.c(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.ba=A.c(s([B.bB,B.el,B.em]),t.S)
B.dQ=A.c(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.fT=A.c(s([B.dQ,B.aa,B.i]),t.S)
B.bd=A.c(s([B.d5,B.aQ,B.bm,B.e1,B.e3,B.ba,B.fT,B.ar]),t.o)
B.bR=A.c(s([B.ec,B.bo,B.c4,B.bd]),t.W)
B.S=A.c(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.ab=A.c(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.O=A.c(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.ah=A.c(s([B.O,B.O,B.O]),t.S)
B.cB=A.c(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.cs=A.c(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.ev=A.c(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.eu=A.c(s([B.cB,B.cs,B.ev]),t.S)
B.bG=A.c(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.cH=A.c(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.ct=A.c(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.db=A.c(s([B.bG,B.cH,B.ct]),t.S)
B.bS=A.c(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.dc=A.c(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.br=A.c(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.cj=A.c(s([B.bS,B.dc,B.br]),t.S)
B.bT=A.c(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.en=A.c(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.cn=A.c(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.bC=A.c(s([B.bT,B.en,B.cn]),t.S)
B.aW=A.c(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.bs=A.c(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.dd=A.c(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.bb=A.c(s([B.aW,B.bs,B.dd]),t.S)
B.e6=A.c(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.de=A.c(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.bt=A.c(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.be=A.c(s([B.e6,B.de,B.bt]),t.S)
B.a4=A.c(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.b_=A.c(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.aT=A.c(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.c9=A.c(s([B.a4,B.b_,B.aT]),t.S)
B.aY=A.c(s([B.ah,B.eu,B.db,B.cj,B.bC,B.bb,B.be,B.c9]),t.o)
B.b0=A.c(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.aZ=A.c(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.dg=A.c(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.bl=A.c(s([B.b0,B.aZ,B.dg]),t.S)
B.dS=A.c(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.cu=A.c(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.dq=A.c(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.bD=A.c(s([B.dS,B.cu,B.dq]),t.S)
B.dJ=A.c(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.cI=A.c(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.dr=A.c(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.fU=A.c(s([B.dJ,B.cI,B.dr]),t.S)
B.e7=A.c(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.co=A.c(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.bH=A.c(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.c2=A.c(s([B.e7,B.co,B.bH]),t.S)
B.dG=A.c(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.bI=A.c(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.cv=A.c(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.da=A.c(s([B.dG,B.bI,B.cv]),t.S)
B.eq=A.c(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.df=A.c(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.cw=A.c(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.dX=A.c(s([B.eq,B.df,B.cw]),t.S)
B.ci=A.c(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.dT=A.c(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.cx=A.c(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.bi=A.c(s([B.ci,B.dT,B.cx]),t.S)
B.er=A.c(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.cC=A.c(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.e8=A.c(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.cg=A.c(s([B.er,B.cC,B.e8]),t.S)
B.bF=A.c(s([B.bl,B.bD,B.fU,B.c2,B.da,B.dX,B.bi,B.cg]),t.o)
B.dL=A.c(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.d3=A.c(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.dh=A.c(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.aR=A.c(s([B.dL,B.d3,B.dh]),t.S)
B.dU=A.c(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.dW=A.c(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.ew=A.c(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.c6=A.c(s([B.dU,B.dW,B.ew]),t.S)
B.dH=A.c(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.bu=A.c(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.cy=A.c(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.d4=A.c(s([B.dH,B.bu,B.cy]),t.S)
B.bg=A.c(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.es=A.c(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.cD=A.c(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.bq=A.c(s([B.bg,B.es,B.cD]),t.S)
B.cE=A.c(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.e9=A.c(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.b1=A.c(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.ck=A.c(s([B.cE,B.e9,B.b1]),t.S)
B.b2=A.c(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.bP=A.c(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.b3=A.c(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.eo=A.c(s([B.b2,B.bP,B.b3]),t.S)
B.cF=A.c(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.cG=A.c(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.b4=A.c(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.bZ=A.c(s([B.cF,B.cG,B.b4]),t.S)
B.bY=A.c(s([B.aR,B.c6,B.d4,B.bq,B.ck,B.eo,B.bZ,B.ah]),t.o)
B.cp=A.c(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.di=A.c(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.dj=A.c(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.ep=A.c(s([B.cp,B.di,B.dj]),t.S)
B.ds=A.c(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.cJ=A.c(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.dt=A.c(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.ch=A.c(s([B.ds,B.cJ,B.dt]),t.S)
B.du=A.c(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.dK=A.c(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.dv=A.c(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.d8=A.c(s([B.du,B.dK,B.dv]),t.S)
B.cz=A.c(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.cK=A.c(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.cm=A.c(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.c_=A.c(s([B.cz,B.cK,B.cm]),t.S)
B.cL=A.c(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.bJ=A.c(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.cA=A.c(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.bn=A.c(s([B.cL,B.bJ,B.cA]),t.S)
B.bv=A.c(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.bM=A.c(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.bK=A.c(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.c8=A.c(s([B.bv,B.bM,B.bK]),t.S)
B.bL=A.c(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.cM=A.c(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.cN=A.c(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.et=A.c(s([B.bL,B.cM,B.cN]),t.S)
B.b5=A.c(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.b6=A.c(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.c1=A.c(s([B.a4,B.b5,B.b6]),t.S)
B.e2=A.c(s([B.ep,B.ch,B.d8,B.c_,B.bn,B.c8,B.et,B.c1]),t.o)
B.c7=A.c(s([B.aY,B.bF,B.bY,B.e2]),t.W)
B.F=A.c(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.p=A.c(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.u=A.c(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.cl=A.c(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.ad=A.c(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.G=A.c(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.H=A.c(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.af=A.c(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.ae=A.c(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.T=A.c(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.cZ=A.c(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.d0=A.c(s([]),t.s)
B.ag=A.c(s([]),t.gn)
B.d9=A.c(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.ai=A.c(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.j=A.c(s([0,1,3,7,15,31,63,127,255]),t.t)
B.q=A.c(s([0,128,192,224,240,248,252,254,255]),t.t)
B.aj=A.c(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.I=A.c(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.U=A.c(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.dV=A.c(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.an=A.c(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.aU=A.c(s([173,148,140]),t.t)
B.aV=A.c(s([176,155,140,135]),t.t)
B.ey=A.c(s([180,157,141,134,130]),t.t)
B.b7=A.c(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.ao=A.c(s([B.aU,B.aV,B.ey,B.b7]),t.S)
B.ap=A.c(s([A.pt(),A.pG(),A.pJ(),A.pA(),A.pE(),A.pM(),A.pD(),A.pL(),A.py(),A.pC()]),t.A)
B.e4=A.c(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.v=A.c(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.e5=A.c(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.J=A.c(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.ex=A.c(s([280,256,256,256,40]),t.t)
B.aq=A.c(s([0,1,1,2,4,8,1,1,2,4,8,4,8,0]),t.t)
B.as=new A.cp([315,"artist",258,"bitsPerSample",265,"cellLength",264,"cellWidth",320,"colorMap",259,"compression",306,"dateTime",34665,"exifIFD",338,"extraSamples",266,"fillOrder",289,"freeByteCounts",288,"freeOffsets",291,"grayResponseCurve",290,"grayResponseUnit",316,"hostComputer",34675,"iccProfile",270,"imageDescription",257,"imageLength",256,"imageWidth",33723,"iptc",271,"make",281,"maxSampleValue",280,"minSampleValue",272,"model",254,"newSubfileType",274,"orientation",262,"photometricInterpretation",34377,"photoshop",284,"planarConfiguration",317,"predictor",296,"resolutionUnit",278,"rowsPerStrip",277,"samplesPerPixel",305,"software",279,"stripByteCounts",273,"stropOffsets",255,"subfileType",292,"t4Options",293,"t6Options",263,"thresholding",322,"tileWidth",323,"tileLength",324,"tileOffsets",325,"tileByteCounts",700,"xmp",282,"xResolution",283,"yResolution",529,"yCbCrCoefficients",530,"yCbCrSubsampling",531,"yCbCrPositioning",339,"sampleFormat"],A.dr("cp<e,D>"))
B.fV=new A.eF(!0)
B.fW=new A.c2(null,2)})();(function staticFields(){$.il=null
$.kB=null
$.k6=null
$.k5=null
$.lz=null
$.lu=null
$.lF=null
$.iR=null
$.iY=null
$.jQ=null
$.c6=null
$.dn=null
$.dp=null
$.jN=!1
$.C=B.h
$.ag=A.c([],t.i)
$.aj=A.al("_config")
$.jK=null
$.kY=!1
$.kZ=A.c([A.jS(),A.pN(),A.pS(),A.pT(),A.pU(),A.pV(),A.pW(),A.pX(),A.pY(),A.pZ(),A.pO(),A.pP(),A.pQ(),A.pR(),A.jS(),A.jS()],A.dr("q<e(aR,e,e)>"))
$.j9=null
$.P=null
$.fw=A.al("_eLut")
$.kP=2000
$.b5=null
$.bU=!1
$.js=null
$.kQ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"q4","lJ",()=>A.p5("_$dart_dartClosure"))
s($,"qW","jY",()=>B.h.ex(new A.j0(),A.dr("ap<K>")))
s($,"qc","lL",()=>A.aQ(A.hr({
toString:function(){return"$receiver$"}})))
s($,"qd","lM",()=>A.aQ(A.hr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qe","lN",()=>A.aQ(A.hr(null)))
s($,"qf","lO",()=>A.aQ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qi","lR",()=>A.aQ(A.hr(void 0)))
s($,"qj","lS",()=>A.aQ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qh","lQ",()=>A.aQ(A.kU(null)))
s($,"qg","lP",()=>A.aQ(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ql","lU",()=>A.aQ(A.kU(void 0)))
s($,"qk","lT",()=>A.aQ(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"qu","jU",()=>A.nO())
s($,"qm","lV",()=>new A.ht().$0())
s($,"qn","lW",()=>new A.hs().$0())
r($,"qU","m3",()=>new Error().stack!=void 0)
s($,"qy","m_",()=>A.jD(B.G,B.U,257,286,15))
s($,"qx","lZ",()=>A.jD(B.ai,B.u,0,30,15))
s($,"qw","lY",()=>A.jD(null,B.e4,0,19,7))
r($,"qo","f1",()=>A.fY(511))
r($,"qp","j3",()=>A.fY(511))
r($,"qr","j4",()=>A.kz(2041))
r($,"qs","f2",()=>A.kz(225))
r($,"qq","a8",()=>A.fY(766))
s($,"qK","Y",()=>A.fY(1))
s($,"qL","a3",()=>{var q=$.Y().buffer
A.bD(q,0,null)
q=new Int8Array(q,0)
return q})
s($,"qD","a2",()=>A.mO(1))
s($,"qE","a9",()=>{var q,p=$.a2().buffer
A.bD(p,0,null)
q=B.a.G(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"qF","B",()=>A.mP(1))
s($,"qH","Q",()=>{var q,p=$.B().buffer
A.bD(p,0,null)
q=B.a.G(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"qG","bg",()=>A.mv($.B().buffer))
s($,"qB","jW",()=>A.mN(1))
s($,"qC","m1",()=>A.kV($.jW().buffer,0))
s($,"qz","jV",()=>A.mL(1))
s($,"qA","m0",()=>A.kV($.jV().buffer,0))
s($,"qI","jX",()=>A.n_(1))
s($,"qJ","m2",()=>{var q=$.jX()
return A.mw(q.gcM(q))})
s($,"qa","lK",()=>new A.eA())
s($,"qt","lX",()=>new A.bA(!0,null,null,null))
s($,"q3","lI",()=>{var q=new A.b0(!1,++$.jT().a,null)
q.f=1
q.a=0
return q})
s($,"q7","jT",()=>new A.he())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.aq,MediaError:J.aq,MessageChannel:J.aq,NavigatorUserMediaError:J.aq,OverconstrainedError:J.aq,PositionError:J.aq,GeolocationPositionError:J.aq,ArrayBuffer:A.cG,DataView:A.N,ArrayBufferView:A.N,Float32Array:A.e8,Float64Array:A.e9,Int16Array:A.ea,Int32Array:A.eb,Int8Array:A.ec,Uint16Array:A.ed,Uint32Array:A.cH,Uint8ClampedArray:A.cI,CanvasPixelArray:A.cI,Uint8Array:A.bt,Blob:A.bh,DedicatedWorkerGlobalScope:A.bL,DOMException:A.fn,AbortPaymentEvent:A.h,AnimationEvent:A.h,AnimationPlaybackEvent:A.h,ApplicationCacheErrorEvent:A.h,BackgroundFetchClickEvent:A.h,BackgroundFetchEvent:A.h,BackgroundFetchFailEvent:A.h,BackgroundFetchedEvent:A.h,BeforeInstallPromptEvent:A.h,BeforeUnloadEvent:A.h,BlobEvent:A.h,CanMakePaymentEvent:A.h,ClipboardEvent:A.h,CloseEvent:A.h,CompositionEvent:A.h,CustomEvent:A.h,DeviceMotionEvent:A.h,DeviceOrientationEvent:A.h,ErrorEvent:A.h,ExtendableEvent:A.h,ExtendableMessageEvent:A.h,FetchEvent:A.h,FocusEvent:A.h,FontFaceSetLoadEvent:A.h,ForeignFetchEvent:A.h,GamepadEvent:A.h,HashChangeEvent:A.h,InstallEvent:A.h,KeyboardEvent:A.h,MediaEncryptedEvent:A.h,MediaKeyMessageEvent:A.h,MediaQueryListEvent:A.h,MediaStreamEvent:A.h,MediaStreamTrackEvent:A.h,MIDIConnectionEvent:A.h,MIDIMessageEvent:A.h,MouseEvent:A.h,DragEvent:A.h,MutationEvent:A.h,NotificationEvent:A.h,PageTransitionEvent:A.h,PaymentRequestEvent:A.h,PaymentRequestUpdateEvent:A.h,PointerEvent:A.h,PopStateEvent:A.h,PresentationConnectionAvailableEvent:A.h,PresentationConnectionCloseEvent:A.h,ProgressEvent:A.h,PromiseRejectionEvent:A.h,PushEvent:A.h,RTCDataChannelEvent:A.h,RTCDTMFToneChangeEvent:A.h,RTCPeerConnectionIceEvent:A.h,RTCTrackEvent:A.h,SecurityPolicyViolationEvent:A.h,SensorErrorEvent:A.h,SpeechRecognitionError:A.h,SpeechRecognitionEvent:A.h,SpeechSynthesisEvent:A.h,StorageEvent:A.h,SyncEvent:A.h,TextEvent:A.h,TouchEvent:A.h,TrackEvent:A.h,TransitionEvent:A.h,WebKitTransitionEvent:A.h,UIEvent:A.h,VRDeviceEvent:A.h,VRDisplayEvent:A.h,VRSessionEvent:A.h,WheelEvent:A.h,MojoInterfaceRequestEvent:A.h,ResourceProgressEvent:A.h,USBConnectionEvent:A.h,IDBVersionChangeEvent:A.h,AudioProcessingEvent:A.h,OfflineAudioCompletionEvent:A.h,WebGLContextEvent:A.h,Event:A.h,InputEvent:A.h,SubmitEvent:A.h,EventTarget:A.aI,File:A.bO,MessageEvent:A.aO,MessagePort:A.b2,ServiceWorkerGlobalScope:A.b9,SharedWorkerGlobalScope:A.b9,WorkerGlobalScope:A.b9})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,MessageChannel:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,Blob:false,DedicatedWorkerGlobalScope:true,DOMException:true,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,MessageEvent:true,MessagePort:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:false})
A.S.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.da.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.db.$nativeSuperclassTag="ArrayBufferView"
A.dc.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.pf
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=thumbnail_worker.dart.js.map
