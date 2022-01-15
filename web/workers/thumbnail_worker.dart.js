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
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.ox(b)}
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
if(a[b]!==s)A.oy(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jh(b)
return new s(c,this)}:function(){if(s===null)s=A.jh(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jh(a).prototype
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={iQ:function iQ(){},
jS(a){return new A.bE("Field '"+a+"' has been assigned during initialization.")},
fx(a){return new A.bE("Field '"+a+"' has not been initialized.")},
eF(a,b,c){return a},
eg(a,b,c,d){A.av(b,"start")
if(c!=null){A.av(c,"end")
if(b>c)A.D(A.O(b,0,c,"start",null))}return new A.cJ(a,b,c,d.m("cJ<0>"))},
jX(a,b,c,d){return new A.c7(a,b,c.m("@<0>").Y(d).m("c7<1,2>"))},
m3(a,b,c){var s="count"
if(t.gw.b(a)){A.eO(b,s,t.p)
A.av(b,s)
return new A.bx(a,b,c.m("bx<0>"))}A.eO(b,s,t.p)
A.av(b,s)
return new A.aI(a,b,c.m("aI<0>"))},
fo(){return new A.bI("No element")},
jL(){return new A.bI("Too few elements")},
bE:function bE(a){this.a=a},
at:function at(a){this.a=a},
iC:function iC(){},
q:function q(){},
bF:function bF(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cw:function cw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bc:function bc(a){this.$ti=a},
c8:function c8(a){this.$ti=a},
U:function U(){},
bl:function bl(){},
bL:function bL(){},
lC(a){if(typeof a=="number")return B.c.gaj(a)
if(t.bA.b(a))return A.cC(a)
return A.jk(a)},
lD(a){return new A.f7(a)},
kP(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
oo(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a_(a)
return s},
cC(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
fN(a){return A.lR(a)},
lR(a){var s,r,q,p
if(a instanceof A.u)return A.ah(A.aA(a),null)
if(J.bY(a)===B.aD||t.bI.b(a)){s=B.Y(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ah(A.aA(a),null)},
jZ(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lZ(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bZ)(a),++r){q=a[r]
if(!A.ii(q))throw A.d(A.b6(q))
if(q<=65535)B.b.v(p,q)
else if(q<=1114111){B.b.v(p,55296+(B.a.i(q-65536,10)&1023))
B.b.v(p,56320+(q&1023))}else throw A.d(A.b6(q))}return A.jZ(p)},
k_(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ii(q))throw A.d(A.b6(q))
if(q<0)throw A.d(A.b6(q))
if(q>65535)return A.lZ(a)}return A.jZ(a)},
m_(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
B(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.i(s,10)|55296)>>>0,s&1023|56320)}throw A.d(A.O(a,0,1114111,null,null))},
bG(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lY(a){var s=A.bG(a).getUTCFullYear()+0
return s},
lW(a){var s=A.bG(a).getUTCMonth()+1
return s},
lS(a){var s=A.bG(a).getUTCDate()+0
return s},
lT(a){var s=A.bG(a).getUTCHours()+0
return s},
lV(a){var s=A.bG(a).getUTCMinutes()+0
return s},
lX(a){var s=A.bG(a).getUTCSeconds()+0
return s},
lU(a){var s=A.bG(a).getUTCMilliseconds()+0
return s},
y(a){throw A.d(A.b6(a))},
a(a,b){if(a==null)J.ac(a)
throw A.d(A.bX(a,b))},
bX(a,b){var s,r="index",q=null
if(!A.ii(b))return new A.as(!0,b,r,q)
s=A.o(J.ac(a))
if(b<0||b>=s)return A.fl(b,a,r,q,s)
return new A.cF(q,q,!0,b,r,"Value not in range")},
ob(a,b,c){if(a<0||a>c)return A.O(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.O(b,a,c,"end",null)
return new A.as(!0,b,"end",null)},
b6(a){return new A.as(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.e1()
s=new Error()
s.dartException=a
r=A.oz
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oz(){return J.a_(this.dartException)},
D(a){throw A.d(a)},
bZ(a){throw A.d(A.dm(a))},
aJ(a){var s,r,q,p,o,n
a=A.ov(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.h2(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h3(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
k6(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
iR(a,b){var s=b==null,r=s?null:b.method
return new A.dS(a,r,s?null:b.receiver)},
ab(a){if(a==null)return new A.fF(a)
if(a instanceof A.ca)return A.b7(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.b7(a,a.dartException)
return A.nX(a)},
b7(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.i(r,16)&8191)===10)switch(q){case 438:return A.b7(a,A.iR(A.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.v(s)+" (Error "+q+")"
return A.b7(a,new A.cA(p,e))}}if(a instanceof TypeError){o=$.kT()
n=$.kU()
m=$.kV()
l=$.kW()
k=$.kZ()
j=$.l_()
i=$.kY()
$.kX()
h=$.l1()
g=$.l0()
f=o.ay(s)
if(f!=null)return A.b7(a,A.iR(A.aP(s),f))
else{f=n.ay(s)
if(f!=null){f.method="call"
return A.b7(a,A.iR(A.aP(s),f))}else{f=m.ay(s)
if(f==null){f=l.ay(s)
if(f==null){f=k.ay(s)
if(f==null){f=j.ay(s)
if(f==null){f=i.ay(s)
if(f==null){f=l.ay(s)
if(f==null){f=h.ay(s)
if(f==null){f=g.ay(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aP(s)
return A.b7(a,new A.cA(s,f==null?e:f.method))}}}return A.b7(a,new A.em(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cH()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.b7(a,new A.as(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cH()
return a},
aa(a){var s
if(a instanceof A.ca)return a.b
if(a==null)return new A.d5(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.d5(a)},
jk(a){if(a==null||typeof a!="object")return J.eL(a)
else return A.cC(a)},
kI(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
on(a,b,c,d,e,f){t.h.a(a)
switch(A.o(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.hD("Unsupported number of arguments for wrapped closure"))},
bs(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.on)
a.$identity=s
return s},
ln(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ee().constructor.prototype):Object.create(new A.bt(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jz(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lj(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jz(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lj(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lh)}throw A.d("Error in functionType of tearoff")},
lk(a,b,c,d){var s=A.jx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jz(a,b,c,d){var s,r
if(c)return A.lm(a,b,d)
s=b.length
r=A.lk(s,d,a,b)
return r},
ll(a,b,c,d){var s=A.jx,r=A.li
switch(b?-1:a){case 0:throw A.d(new A.ed("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lm(a,b,c){var s,r,q,p=$.jv
p==null?$.jv=A.ju("interceptor"):p
s=$.jw
s==null?$.jw=A.ju("receiver"):s
r=b.length
q=A.ll(r,c,a,b)
return q},
jh(a){return A.ln(a)},
lh(a,b){return A.i8(v.typeUniverse,A.aA(a.a),b)},
jx(a){return a.a},
li(a){return a.b},
ju(a){var s,r,q,p=new A.bt("receiver","interceptor"),o=J.iP(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.c_("Field name "+a+" not found.",null))},
bW(a){if(a==null)A.nZ("boolean expression must not be null")
return a},
nZ(a){throw A.d(new A.et(a))},
ox(a){throw A.d(new A.dp(a))},
oh(a){return v.getIsolateTag(a)},
q5(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oq(a){var s,r,q,p,o,n=A.aP($.kK.$1(a)),m=$.is[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ks($.kG.$2(a,n))
if(q!=null){m=$.is[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iB(s)
$.is[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iz[n]=s
return s}if(p==="-"){o=A.iB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kM(a,s)
if(p==="*")throw A.d(A.el(n))
if(v.leafTags[n]===true){o=A.iB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kM(a,s)},
kM(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jj(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iB(a){return J.jj(a,!1,null,!!a.$ia4)},
os(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iB(s)
else return J.jj(s,c,null,null)},
ol(){if(!0===$.ji)return
$.ji=!0
A.om()},
om(){var s,r,q,p,o,n,m,l
$.is=Object.create(null)
$.iz=Object.create(null)
A.ok()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kO.$1(o)
if(n!=null){m=A.os(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ok(){var s,r,q,p,o,n,m=B.au()
m=A.bV(B.av,A.bV(B.aw,A.bV(B.Z,A.bV(B.Z,A.bV(B.ax,A.bV(B.ay,A.bV(B.az(B.Y),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kK=new A.iw(p)
$.kG=new A.ix(o)
$.kO=new A.iy(n)},
bV(a,b){return a(b)||b},
ov(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bu:function bu(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eW:function eW(a){this.a=a},
cd:function cd(a,b){this.a=a
this.$ti=b},
f7:function f7(a){this.a=a},
h2:function h2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cA:function cA(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a},
fF:function fF(a){this.a=a},
ca:function ca(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a
this.b=null},
bb:function bb(){},
di:function di(){},
dj:function dj(){},
eh:function eh(){},
ee:function ee(){},
bt:function bt(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
et:function et(a){this.a=a},
a5:function a5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fw:function fw(a){this.a=a},
fv:function fv(a){this.a=a},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function cq(a,b){this.a=a
this.$ti=b},
cr:function cr(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
oy(a){return A.D(A.jS(a))},
ap(a){var s=new A.hy(a)
return s.b=s},
b(a,b){if(a===$)throw A.d(A.fx(b))
return a},
nN(a,b){if(a!==$)throw A.d(A.jS(b))},
hy:function hy(a){this.a=a
this.b=null},
br(a,b,c){},
jd(a){return a},
lM(a){return new Float32Array(a)},
lN(a,b,c){A.br(a,b,c)
c=B.a.F(a.byteLength-b,4)
return new Float32Array(a,b,c)},
lO(a){return new Int32Array(a)},
jY(a){return new Int8Array(a)},
lP(a){return new Uint16Array(a)},
lQ(a){return new Uint32Array(a)},
iU(a,b,c){A.br(a,b,c)
c=B.a.F(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fD(a){return new Uint8Array(a)},
G(a,b,c){A.br(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aQ(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.bX(b,a))},
aR(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.ob(a,b,c))
if(b==null)return c
return b},
cx:function cx(){},
J:function J(){},
P:function P(){},
aY:function aY(){},
a6:function a6(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
cy:function cy(){},
cz:function cz(){},
bg:function bg(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
k3(a,b){var s=b.c
return s==null?b.c=A.ja(a,b.z,!0):s},
k2(a,b){var s=b.c
return s==null?b.c=A.d8(a,"aj",[b.z]):s},
k4(a){var s=a.y
if(s===6||s===7||s===8)return A.k4(a.z)
return s===11||s===12},
m2(a){return a.cy},
de(a){return A.jb(v.typeUniverse,a,!1)},
b5(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.b5(a,s,a0,a1)
if(r===s)return b
return A.ko(a,r,!0)
case 7:s=b.z
r=A.b5(a,s,a0,a1)
if(r===s)return b
return A.ja(a,r,!0)
case 8:s=b.z
r=A.b5(a,s,a0,a1)
if(r===s)return b
return A.kn(a,r,!0)
case 9:q=b.Q
p=A.dd(a,q,a0,a1)
if(p===q)return b
return A.d8(a,b.z,p)
case 10:o=b.z
n=A.b5(a,o,a0,a1)
m=b.Q
l=A.dd(a,m,a0,a1)
if(n===o&&l===m)return b
return A.j8(a,n,l)
case 11:k=b.z
j=A.b5(a,k,a0,a1)
i=b.Q
h=A.nU(a,i,a0,a1)
if(j===k&&h===i)return b
return A.km(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.dd(a,g,a0,a1)
o=b.z
n=A.b5(a,o,a0,a1)
if(f===g&&n===o)return b
return A.j9(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.eP("Attempted to substitute unexpected RTI kind "+c))}},
dd(a,b,c,d){var s,r,q,p,o=b.length,n=A.ia(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.b5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
nV(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ia(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.b5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
nU(a,b,c,d){var s,r=b.a,q=A.dd(a,r,c,d),p=b.b,o=A.dd(a,p,c,d),n=b.c,m=A.nV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ey()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
o5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.oi(s)
return a.$S()}return null},
kL(a,b){var s
if(A.k4(b))if(a instanceof A.bb){s=A.o5(a)
if(s!=null)return s}return A.aA(a)},
aA(a){var s
if(a instanceof A.u){s=a.$ti
return s!=null?s:A.je(a)}if(Array.isArray(a))return A.aq(a)
return A.je(J.bY(a))},
aq(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E(a){var s=a.$ti
return s!=null?s:A.je(a)},
je(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.nD(a,s)},
nD(a,b){var s=a instanceof A.bb?a.__proto__.__proto__.constructor:b,r=A.nl(v.typeUniverse,s.name)
b.$ccache=r
return r},
oi(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nC(a){var s,r,q,p,o=this
if(o===t.K)return A.bS(o,a,A.nH)
if(!A.aS(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.bS(o,a,A.nK)
s=o.y
r=s===6?o.z:o
if(r===t.p)q=A.ii
else if(r===t.gR||r===t.di)q=A.nG
else if(r===t.N)q=A.nI
else q=r===t.v?A.eE:null
if(q!=null)return A.bS(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.op)){o.r="$i"+p
if(p==="k")return A.bS(o,a,A.nF)
return A.bS(o,a,A.nJ)}}else if(s===7)return A.bS(o,a,A.nA)
return A.bS(o,a,A.ny)},
bS(a,b,c){a.b=c
return a.b(b)},
nB(a){var s,r=this,q=A.nx
if(!A.aS(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.ns
else if(r===t.K)q=A.nr
else{s=A.df(r)
if(s)q=A.nz}r.a=q
return r.a(a)},
ij(a){var s,r=a.y
if(!A.aS(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.ij(a.z)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ny(a){var s=this
if(a==null)return A.ij(s)
return A.I(v.typeUniverse,A.kL(a,s),null,s,null)},
nA(a){if(a==null)return!0
return this.z.b(a)},
nJ(a){var s,r=this
if(a==null)return A.ij(r)
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.bY(a)[s]},
nF(a){var s,r=this
if(a==null)return A.ij(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.bY(a)[s]},
nx(a){var s,r=this
if(a==null){s=A.df(r)
if(s)return a}else if(r.b(a))return a
A.kw(a,r)},
nz(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kw(a,s)},
kw(a,b){throw A.d(A.nb(A.kf(a,A.kL(a,b),A.ah(b,null))))},
kf(a,b,c){var s=A.c9(a),r=A.ah(b==null?A.aA(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nb(a){return new A.d7("TypeError: "+a)},
X(a,b){return new A.d7("TypeError: "+A.kf(a,null,b))},
nH(a){return a!=null},
nr(a){if(a!=null)return a
throw A.d(A.X(a,"Object"))},
nK(a){return!0},
ns(a){return a},
eE(a){return!0===a||!1===a},
pW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.X(a,"bool"))},
pY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.X(a,"bool"))},
pX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.X(a,"bool?"))},
np(a){if(typeof a=="number")return a
throw A.d(A.X(a,"double"))},
q_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.X(a,"double"))},
pZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.X(a,"double?"))},
ii(a){return typeof a=="number"&&Math.floor(a)===a},
o(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.X(a,"int"))},
q0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.X(a,"int"))},
kr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.X(a,"int?"))},
nG(a){return typeof a=="number"},
nq(a){if(typeof a=="number")return a
throw A.d(A.X(a,"num"))},
q2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.X(a,"num"))},
q1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.X(a,"num?"))},
nI(a){return typeof a=="string"},
aP(a){if(typeof a=="string")return a
throw A.d(A.X(a,"String"))},
q3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.X(a,"String"))},
ks(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.X(a,"String?"))},
nR(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ah(a[q],b)
return s},
kx(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.v(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.h.aL(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.ah(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.ah(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.ah(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.ah(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.ah(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ah(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.ah(a.z,b)
return s}if(l===7){r=a.z
s=A.ah(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.ah(a.z,b)+">"
if(l===9){p=A.nW(a.z)
o=a.Q
return o.length>0?p+("<"+A.nR(o,b)+">"):p}if(l===11)return A.kx(a,b,null)
if(l===12)return A.kx(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
nW(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
nm(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nl(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jb(a,b,!1)
else if(typeof m=="number"){s=m
r=A.d9(a,5,"#")
q=A.ia(s)
for(p=0;p<s;++p)q[p]=r
o=A.d8(a,b,q)
n[b]=o
return o}else return m},
nj(a,b){return A.kp(a.tR,b)},
ni(a,b){return A.kp(a.eT,b)},
jb(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kl(A.kj(a,null,b,c))
r.set(b,s)
return s},
i8(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kl(A.kj(a,b,c,!0))
q.set(c,r)
return r},
nk(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.j8(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b4(a,b){b.a=A.nB
b.b=A.nC
return b},
d9(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.am(null,null)
s.y=b
s.cy=c
r=A.b4(a,s)
a.eC.set(c,r)
return r},
ko(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ng(a,b,r,c)
a.eC.set(r,s)
return s},
ng(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.aS(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.am(null,null)
q.y=6
q.z=b
q.cy=c
return A.b4(a,q)},
ja(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nf(a,b,r,c)
a.eC.set(r,s)
return s},
nf(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.aS(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.df(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.df(q.z))return q
else return A.k3(a,b)}}p=new A.am(null,null)
p.y=7
p.z=b
p.cy=c
return A.b4(a,p)},
kn(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nd(a,b,r,c)
a.eC.set(r,s)
return s},
nd(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.aS(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.d8(a,"aj",[b])
else if(b===t.P||b===t.u)return t.bG}q=new A.am(null,null)
q.y=8
q.z=b
q.cy=c
return A.b4(a,q)},
nh(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.am(null,null)
s.y=13
s.z=b
s.cy=q
r=A.b4(a,s)
a.eC.set(q,r)
return r},
eC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nc(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d8(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.am(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.b4(a,r)
a.eC.set(p,q)
return q},
j8(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.eC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.am(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.b4(a,o)
a.eC.set(q,n)
return n},
km(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eC(m)
if(j>0){s=l>0?",":""
r=A.eC(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.nc(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.am(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.b4(a,o)
a.eC.set(q,r)
return r},
j9(a,b,c,d){var s,r=b.cy+("<"+A.eC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ne(a,b,c,r,d)
a.eC.set(r,s)
return s},
ne(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ia(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.b5(a,b,r,0)
m=A.dd(a,c,r,0)
return A.j9(a,n,m,c!==m)}}l=new A.am(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.b4(a,l)},
kj(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kl(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.n6(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.kk(a,r,h,g,!1)
else if(q===46)r=A.kk(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.b3(a.u,a.e,g.pop()))
break
case 94:g.push(A.nh(a.u,g.pop()))
break
case 35:g.push(A.d9(a.u,5,"#"))
break
case 64:g.push(A.d9(a.u,2,"@"))
break
case 126:g.push(A.d9(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.j6(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.d8(p,n,o))
else{m=A.b3(p,a.e,n)
switch(m.y){case 11:g.push(A.j9(p,m,o,a.n))
break
default:g.push(A.j8(p,m,o))
break}}break
case 38:A.n7(a,g)
break
case 42:p=a.u
g.push(A.ko(p,A.b3(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.ja(p,A.b3(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.kn(p,A.b3(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.ey()
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
A.j6(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.km(p,A.b3(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.j6(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.n9(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.b3(a.u,a.e,i)},
n6(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kk(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.nm(s,o.z)[p]
if(n==null)A.D('No "'+p+'" in "'+A.m2(o)+'"')
d.push(A.i8(s,o,n))}else d.push(p)
return m},
n7(a,b){var s=b.pop()
if(0===s){b.push(A.d9(a.u,1,"0&"))
return}if(1===s){b.push(A.d9(a.u,4,"1&"))
return}throw A.d(A.eP("Unexpected extended operation "+A.v(s)))},
b3(a,b,c){if(typeof c=="string")return A.d8(a,c,a.sEA)
else if(typeof c=="number")return A.n8(a,b,c)
else return c},
j6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.b3(a,b,c[s])},
n9(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.b3(a,b,c[s])},
n8(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.eP("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.eP("Bad index "+c+" for "+b.t(0)))},
I(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aS(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.aS(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.I(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.u
if(s){if(p===8)return A.I(a,b,c,d.z,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.I(a,b.z,c,d,e)
if(r===6)return A.I(a,b.z,c,d,e)
return r!==7}if(r===6)return A.I(a,b.z,c,d,e)
if(p===6){s=A.k3(a,d)
return A.I(a,b,c,s,e)}if(r===8){if(!A.I(a,b.z,c,d,e))return!1
return A.I(a,A.k2(a,b),c,d,e)}if(r===7){s=A.I(a,t.P,c,d,e)
return s&&A.I(a,b.z,c,d,e)}if(p===8){if(A.I(a,b,c,d.z,e))return!0
return A.I(a,b,c,A.k2(a,d),e)}if(p===7){s=A.I(a,b,c,t.P,e)
return s||A.I(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.h)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.I(a,k,c,j,e)||!A.I(a,j,e,k,c))return!1}return A.ky(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.ky(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.nE(a,b,c,d,e)}return!1},
ky(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.I(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
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
if(!A.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.I(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nE(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.i8(a,b,r[o])
return A.kq(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.kq(a,n,null,c,m,e)},
kq(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.I(a,r,d,q,f))return!1}return!0},
df(a){var s,r=a.y
if(!(a===t.P||a===t.u))if(!A.aS(a))if(r!==7)if(!(r===6&&A.df(a.z)))s=r===8&&A.df(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
op(a){var s
if(!A.aS(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aS(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kp(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ia(a){return a>0?new Array(a):v.typeUniverse.sEA},
am:function am(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ey:function ey(){this.c=this.b=this.a=null},
ex:function ex(){},
d7:function d7(a){this.a=a},
n_(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.o_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bs(new A.hv(q),1)).observe(s,{childList:true})
return new A.hu(q,s,r)}else if(self.setImmediate!=null)return A.o0()
return A.o1()},
n0(a){self.scheduleImmediate(A.bs(new A.hw(t.M.a(a)),0))},
n1(a){self.setImmediate(A.bs(new A.hx(t.M.a(a)),0))},
n2(a){t.M.a(a)
A.na(0,a)},
na(a,b){var s=new A.i6()
s.fb(a,b)
return s},
kA(a){return new A.eu(new A.C($.A,a.m("C<0>")),a.m("eu<0>"))},
kv(a,b){a.$2(0,null)
b.b=!0
return b.a},
ic(a,b){A.nt(a,b)},
ku(a,b){b.cR(a)},
kt(a,b){b.cS(A.ab(a),A.aa(a))},
nt(a,b){var s,r,q=new A.id(b),p=new A.ie(b)
if(a instanceof A.C)a.e7(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.cY(q,p,s)
else{r=new A.C($.A,t.d)
r.a=8
r.c=a
r.e7(q,p,s)}}},
kF(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.A.ex(new A.im(s),t.H,t.p,t.z)},
pF(a){return new A.bP(a,1)},
kh(){return B.fX},
ki(a){return new A.bP(a,3)},
kB(a,b){return new A.d6(a,b.m("d6<0>"))},
eQ(a,b){var s=A.eF(a,"error",t.K)
return new A.c2(s,b==null?A.js(a):b)},
js(a){var s
if(t.Q.b(a)){s=a.gbO()
if(s!=null)return s}return B.aB},
j4(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.c3()
b.co(a)
A.bO(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.dX(q)}},
bO(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.c;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.ik(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bO(c.a,b)
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
A.ik(i.a,i.b)
return}f=$.A
if(f!==g)$.A=g
else f=null
b=b.c
if((b&15)===8)new A.hO(p,c,m).$0()
else if(n){if((b&1)!==0)new A.hN(p,i).$0()}else if((b&2)!==0)new A.hM(c,p).$0()
if(f!=null)$.A=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.m("aj<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.c4(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.j4(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.c4(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
nP(a,b){var s
if(t.C.b(a))return b.ex(a,t.z,t.K,t.l)
s=t.w
if(s.b(a))return s.a(a)
throw A.d(A.jr(a,"onError",u.b))},
nO(){var s,r
for(s=$.bT;s!=null;s=$.bT){$.dc=null
r=s.b
$.bT=r
if(r==null)$.db=null
s.a.$0()}},
nT(){$.jf=!0
try{A.nO()}finally{$.dc=null
$.jf=!1
if($.bT!=null)$.jm().$1(A.kH())}},
kE(a){var s=new A.ev(a),r=$.db
if(r==null){$.bT=$.db=s
if(!$.jf)$.jm().$1(A.kH())}else $.db=r.b=s},
nS(a){var s,r,q,p=$.bT
if(p==null){A.kE(a)
$.dc=$.db
return}s=new A.ev(a)
r=$.dc
if(r==null){s.b=p
$.bT=$.dc=s}else{q=r.b
s.b=q
$.dc=r.b=s
if(q==null)$.db=s}},
ow(a){var s=null,r=$.A
if(B.f===r){A.bU(s,s,B.f,a)
return}A.bU(s,s,r,t.M.a(r.eg(a)))},
pl(a,b){return new A.bq(A.eF(a,"stream",t.K),b.m("bq<0>"))},
ik(a,b){A.nS(new A.il(a,b))},
kC(a,b,c,d,e){var s,r=$.A
if(r===c)return d.$0()
$.A=c
s=r
try{r=d.$0()
return r}finally{$.A=s}},
kD(a,b,c,d,e,f,g){var s,r=$.A
if(r===c)return d.$1(e)
$.A=c
s=r
try{r=d.$1(e)
return r}finally{$.A=s}},
nQ(a,b,c,d,e,f,g,h,i){var s,r=$.A
if(r===c)return d.$2(e,f)
$.A=c
s=r
try{r=d.$2(e,f)
return r}finally{$.A=s}},
bU(a,b,c,d){t.M.a(d)
if(B.f!==c)d=c.eg(d)
A.kE(d)},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
i6:function i6(){},
i7:function i7(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=!1
this.$ti=b},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
im:function im(a){this.a=a},
bP:function bP(a,b){this.a=a
this.b=b},
bR:function bR(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
d6:function d6(a,b){this.a=a
this.$ti=b},
c2:function c2(a,b){this.a=a
this.b=b},
ew:function ew(){},
cU:function cU(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hE:function hE(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a
this.b=null},
bJ:function bJ(){},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
cI:function cI(){},
ef:function ef(){},
bq:function bq(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
da:function da(){},
il:function il(a,b){this.a=a
this.b=b},
ez:function ez(){},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
jT(a,b,c,d){if(b==null){if(a==null)return new A.a5(c.m("@<0>").Y(d).m("a5<1,2>"))}else if(a==null)a=A.o7()
return A.n5(A.o6(),a,b,c,d)},
cs(a,b,c){return b.m("@<0>").Y(c).m("fy<1,2>").a(A.kI(a,new A.a5(b.m("@<0>").Y(c).m("a5<1,2>"))))},
W(a,b){return new A.a5(a.m("@<0>").Y(b).m("a5<1,2>"))},
n5(a,b,c,d,e){var s=c!=null?c:new A.hY(d)
return new A.cX(a,b,s,d.m("@<0>").Y(e).m("cX<1,2>"))},
nu(a,b){return J.aT(a,b)},
nv(a){return J.eL(a)},
lK(a,b,c){var s,r
if(A.jg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.v($.a8,a)
try{A.nL(a,s)}finally{if(0>=$.a8.length)return A.a($.a8,-1)
$.a8.pop()}r=A.k5(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jK(a,b,c){var s,r
if(A.jg(a))return b+"..."+c
s=new A.bk(b)
B.b.v($.a8,a)
try{r=s
r.a=A.k5(r.a,a,", ")}finally{if(0>=$.a8.length)return A.a($.a8,-1)
$.a8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jg(a){var s,r
for(s=$.a8.length,r=0;r<s;++r)if(a===$.a8[r])return!0
return!1},
nL(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.v(l.gD())
B.b.v(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gD();++j
if(!l.B()){if(j<=4){B.b.v(b,A.v(p))
return}r=A.v(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD();++j
for(;l.B();p=o,o=n){n=l.gD();++j
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
lL(a,b,c){var s=A.jT(null,null,b,c)
a.ax(0,new A.fA(s,b,c))
return s},
iT(a){var s,r={}
if(A.jg(a))return"{...}"
s=new A.bk("")
try{B.b.v($.a8,a)
s.a+="{"
r.a=!0
a.ax(0,new A.fC(r,s))
s.a+="}"}finally{if(0>=$.a8.length)return A.a($.a8,-1)
$.a8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
hZ:function hZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cX:function cX(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
hY:function hY(a){this.a=a},
cl:function cl(){},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){},
t:function t(){},
cu:function cu(){},
fC:function fC(a,b){this.a=a
this.b=b},
aW:function aW(){},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
cY:function cY(){},
m8(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.m9(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
m9(a,b,c,d){var s=a?$.l3():$.l2()
if(s==null)return null
if(0===c&&d===b.length)return A.k8(s,b)
return A.k8(s,b.subarray(c,A.aw(c,d,b.length)))},
k8(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
jR(a,b,c){return new A.cp(a,b)},
nw(a){return a.eD()},
no(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nn(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
h5:function h5(){},
h4:function h4(){},
dn:function dn(){},
cp:function cp(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hV:function hV(a,b,c,d,e){var _=this
_.f=a
_.a$=b
_.c=c
_.a=d
_.b=e},
eo:function eo(a){this.a=a},
i9:function i9(a){this.a=a
this.b=16
this.c=0},
eD:function eD(){},
lq(a){if(a instanceof A.bb)return a.t(0)
return"Instance of '"+A.fN(a)+"'"},
S(a,b,c,d){var s,r=J.fp(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
jV(a,b){var s,r=A.c([],b.m("r<0>"))
for(s=J.b9(a);s.B();)B.b.v(r,b.a(s.gD()))
return r},
dV(a,b,c){var s
if(b)return A.jU(a,c)
s=J.iP(A.jU(a,c),c)
return s},
jU(a,b){var s,r=A.c([],b.m("r<0>"))
for(s=a.gO(a);s.B();)B.b.v(r,s.gD())
return r},
iS(a,b,c,d){var s,r=c?J.jN(a,d):J.fp(a,d)
for(s=0;s<a;++s)B.b.h(r,s,b.$1(s))
return r},
j_(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aw(b,c,r)
return A.k_(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return A.m_(a,b,A.aw(b,c,a.length))
return A.m5(a,b,c)},
m5(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.O(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.d(A.O(c,b,a.length,o,o))
r=J.b9(a)
for(q=0;q<b;++q)if(!r.B())throw A.d(A.O(b,0,q,o,o))
p=[]
if(s)for(;r.B();)p.push(r.gD())
else for(q=b;q<c;++q){if(!r.B())throw A.d(A.O(c,b,q,o,o))
p.push(r.gD())}return A.k_(p)},
k5(a,b,c){var s=J.b9(b)
if(!s.B())return a
if(c.length===0){do a+=A.v(s.gD())
while(s.B())}else{a+=A.v(s.gD())
for(;s.B();)a=a+c+A.v(s.gD())}return a},
bj(){var s,r
if(A.bW($.la()))return A.aa(new Error())
try{throw A.d("")}catch(r){s=A.aa(r)
return s}},
lo(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lp(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dq(a){if(a>=10)return""+a
return"0"+a},
c9(a){if(typeof a=="number"||A.eE(a)||a==null)return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lq(a)},
eP(a){return new A.c1(a)},
c_(a,b){return new A.as(!1,null,b,a)},
jr(a,b,c){return new A.as(!0,a,b,c)},
eO(a,b,c){return a},
O(a,b,c,d,e){return new A.cF(b,c,!0,a,d,"Invalid value")},
aw(a,b,c){if(0>a||a>c)throw A.d(A.O(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.O(b,a,c,"end",null))
return b}return c},
av(a,b){if(a<0)throw A.d(A.O(a,0,null,b,null))
return a},
fl(a,b,c,d,e){var s=A.o(e==null?J.ac(b):e)
return new A.dB(s,!0,a,c,"Index out of range")},
a7(a){return new A.en(a)},
el(a){return new A.ek(a)},
fT(a){return new A.bI(a)},
dm(a){return new A.dl(a)},
lB(a,b,c){return new A.dv(a,b,c)},
jM(a,b,c){if(a<=0)return new A.bc(c.m("bc<0>"))
return new A.cW(a,b,c.m("cW<0>"))},
eI(a){A.kN(A.v(a))},
c6:function c6(a,b){this.a=a
this.b=b},
hz:function hz(){},
w:function w(){},
c1:function c1(a){this.a=a},
b_:function b_(){},
e1:function e1(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dB:function dB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
en:function en(a){this.a=a},
ek:function ek(a){this.a=a},
bI:function bI(a){this.a=a},
dl:function dl(a){this.a=a},
e2:function e2(){},
cH:function cH(){},
dp:function dp(a){this.a=a},
hD:function hD(a){this.a=a},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(){},
H:function H(){},
u:function u(){},
eB:function eB(){},
bk:function bk(a){this.a=a},
hB(a,b,c,d,e){var s=A.nY(new A.hC(c),t.B)
s=new A.cV(a,b,s,!1,e.m("cV<0>"))
s.e9()
return s},
nY(a,b){var s=$.A
if(s===B.f)return a
return s.is(a,b)},
ba:function ba(){},
bw:function bw(){},
f1:function f1(){},
h:function h(){},
aD:function aD(){},
bz:function bz(){},
aH:function aH(){},
aX:function aX(){},
b1:function b1(){},
iJ:function iJ(a){this.$ti=a},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cV:function cV(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hC:function hC(a){this.a=a},
i2:function i2(){},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
hs:function hs(){},
ht:function ht(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b
this.c=!1},
ot(a,b){var s=new A.C($.A,b.m("C<0>")),r=new A.cU(s,b.m("cU<0>"))
a.then(A.bs(new A.iD(r,b),1),A.bs(new A.iE(r),1))
return s},
fE:function fE(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
ad(a){return new A.eN(a,null,null)},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
be(a,b,c,d){var s,r
if(t.ak.b(a))s=A.G(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.jV(t.V.a(a),t.p)
r=new A.dD(s,d,d,b)
r.e=c==null?s.length:c
return r},
dE:function dE(){},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
fI(a,b){var s=b==null?32768:b
return new A.fH(a,new Uint8Array(s))},
fJ:function fJ(){},
fH:function fH(a,b){this.a=0
this.b=a
this.c=b},
ib:function ib(){},
jA(a,b,c,d){var s,r=b*2,q=a.length
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
j5(){return new A.hQ()},
n3(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
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
n=A.n4(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
n4(a,b){var s,r=0
do{s=A.a0(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.a0(r,1)},
kg(a){var s
if(a<256){if(!(a>=0))return A.a(B.C,a)
s=B.C[a]}else{s=256+A.a0(a,7)
if(!(s<512))return A.a(B.C,s)
s=B.C[s]}return s},
j7(a,b,c,d,e){return new A.eA(a,b,c,d,e)},
a0(a,b){if(a>=0)return B.a.a8(a,b)
else return B.a.a8(a,b)+B.a.w(2,(~b>>>0)+65536&65535)},
eZ:function eZ(a,b,c,d,e,f,g,h){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=null
_.y=_.x=_.r=_.f=$
_.z=2
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=$
_.ry=0
_.N=_.a6=_.Z=_.y2=_.y1=_.x2=_.x1=$
_.aa=c
_.b2=d
_.bB=e
_.be=f
_.aF=g
_.ab=_.a0=$
_.aR=h
_.a2=_.ai=_.aG=_.aS=_.aw=_.ad=_.ah=_.a1=_.ag=_.ac=$},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hQ:function hQ(){this.c=this.b=this.a=$},
eA:function eA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bB(a){var s=new A.fc()
s.f4(a)
return s},
fc:function fc(){this.a=$
this.b=0
this.c=2147483647},
jI(a){var s=A.bB(B.a0),r=A.bB(B.ac)
r=new A.dC(A.be(a,0,null,0),A.fI(0,null),s,r)
r.b=!0
r.dL()
return r},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.x=d},
hq:function hq(){},
hp:function hp(){},
hr:function hr(){},
jB(a){var s=t.p,r=t.z
s=new A.by(a==null?A.W(s,r):A.lL(a.b,s,r))
s.eZ(a)
return s},
by:function by(a){this.a=null
this.b=a},
jt(a){var s,r,q=new A.eR()
if(!A.eS(a))A.D(A.f("Not a bitmap file."))
a.d+=2
s=a.j()
r=$.z()
r[0]=s
s=$.N()
if(0>=s.length)return A.a(s,0)
q.a=s[0]
a.d+=4
r[0]=a.j()
q.b=s[0]
return q},
eS(a){if(a.c-a.d<2)return!1
return A.i(a,null,0).k()===19778},
lg(a,b){var s,r,q,p,o,n,m,l=b==null?A.jt(a):b,k=a.j(),j=a.j(),i=$.z()
i[0]=j
j=$.N()
if(0>=j.length)return A.a(j,0)
s=j[0]
i[0]=a.j()
r=j[0]
q=a.k()
p=a.k()
o=a.j()
n=A.cs([0,B.M,3,B.L],t.p,t.O).p(0,o)
if(n==null)A.D(A.f("Bitmap compression "+o+" is not supported yet."))
o=a.j()
i[0]=a.j()
m=j[0]
i[0]=a.j()
j=new A.aU(l,r,s,k,q,p,n,o,m,j[0],a.j(),a.j())
j.d8(a,b)
return j},
c3:function c3(a,b){this.a=a
this.b=b},
eR:function eR(){this.b=this.a=$},
aU:function aU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.cx=j
_.cy=k
_.db=l
_.fy=_.fx=_.fr=_.dy=_.dx=null
_.b=_.a=0},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(){this.a=$
this.b=null},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){this.a=$
this.b=null},
eX:function eX(){},
eY:function eY(){},
f2:function f2(){},
dr:function dr(){},
cg:function cg(a,b){var _=this
_.r=a
_.b=_.a=0
_.c=b},
ds:function ds(){var _=this
_.a=null
_.f=_.e=_.c=_.b=$},
jC(a,b,c,d){var s,r
switch(a){case 1:return new A.dI(b)
case 2:return new A.ci(d==null?1:d,b)
case 3:return new A.ci(d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.dG(c,s,b)
r.f5(b,c,s)
return r
case 5:return new A.dH(c,d==null?16:d,b)
case 6:return new A.cg(d==null?32:d,b)
case 7:return new A.cg(d==null?32:d,b)
default:throw A.d(A.f("Invalid compression type: "+a))}},
aE:function aE(){},
dF:function dF(){},
lu(a,b,c,d){var s,r,q,p,o,n,m,l
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
n=A.S(65537,0,!1,t.p)
m=J.a3(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.dt()
A.lv(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.d(A.f("Error in header for Huffman-encoded data (invalid number of bits)."))
A.lr(n,r,q,m)
A.lt(n,m,a,p,q,d,c)},
lt(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.c([0,0],t.t),h=c.d+B.a.F(d+7,8)
for(s=b.length,r=0;c.d<h;){A.iK(i,c)
for(;q=i[1],q>=14;){p=B.a.a8(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.iL(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.d(A.f(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.iK(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.a8(i[0],q)&B.a.w(1,m)-1)>>>0){B.b.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.iL(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.d(A.f(j))}}}k=8-d&7
B.b.h(i,0,B.a.i(i[0],k))
B.b.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.C(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.iL(o.b,e,i,c,g,r,f)}else throw A.d(A.f(j))}if(r!==f)throw A.d(A.f("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
iL(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.iK(c,d)
B.b.h(c,1,c[1]-8)
s=B.a.a8(c[0],c[1])&255
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
lr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.H(o,n)!==0)throw A.d(A.f(i))
if(n>14){p=B.a.a5(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.d(A.f(i))
p=++m.b
l=m.c
if(l!=null){m.ses(A.S(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.b.h(p,k,l[k])}}else m.ses(A.c([0],r))
p=m.c
p.toString
B.b.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.C(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.C(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.d(A.f(i))
m.a=n
m.b=b}}}},
lv(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.c([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.d(A.f(n))
r=A.jD(6,k,a)
B.b.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.d(A.f(n))
q=A.jD(8,k,a)+6
if(c+q>s)throw A.d(A.f(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.d(A.f(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}}A.ls(e)},
ls(a){var s,r,q,p,o,n=A.S(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.b.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.b.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.b.h(n,o,r+1)
B.b.h(a,s,(o|r<<6)>>>0)}}},
iK(a,b){B.b.h(a,0,((a[0]<<8|b.q())&-1)>>>0)
B.b.h(a,1,(a[1]+8&-1)>>>0)},
jD(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.b.h(b,0,((s<<8|r[q])&-1)>>>0)
B.b.h(b,1,(b[1]+8&-1)>>>0)}B.b.h(b,1,s-a)
return(B.a.a8(b[0],b[1])&B.a.w(1,a)-1)>>>0},
dt:function dt(){this.b=this.a=0
this.c=null},
lw(a){var s=A.l(a,!1,null,0)
if(s.j()!==20000630)return!1
if(s.q()!==2)return!1
if((s.ap()&4294967289)>>>0!==0)return!1
return!0},
f4:function f4(a){var _=this
_.d=a
_.e=null
_.f=$
_.b=_.a=0},
jJ(a,b){var s=new A.ch(new A.dx(A.W(t.dk,t.r)),A.c([],t.g9),A.W(t.N,t.aX),a)
s.f1(a,b,{})
return s},
du:function du(){},
f5:function f5(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=$
_.r=_.f=null
_.ch=$
_.cx=0
_.cy=null
_.db=$
_.fr=_.dy=_.dx=null
_.fx=d
_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=null
_.r2=$
_.rx=null},
dG:function dG(a,b,c){var _=this
_.r=null
_.x=a
_.y=b
_.z=$
_.Q=null
_.b=_.a=0
_.c=c},
d4:function d4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
dH:function dH(a,b,c){var _=this
_.x=a
_.y=b
_.z=null
_.b=_.a=0
_.c=c},
dI:function dI(a){var _=this
_.r=null
_.b=_.a=0
_.c=a},
ci:function ci(a,b){var _=this
_.x=a
_.y=null
_.b=_.a=0
_.c=b},
f3:function f3(){this.a=null},
jE(a){var s=new Uint8Array(a*3)
A.lE(a)
return new A.f8(a,s)},
lE(a){var s
for(s=1;s<=8;++s)if(B.a.w(1,s)>=a)return s
return 0},
f8:function f8(a,b){this.b=a
this.c=null
this.d=b},
ce:function ce(){},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.y=$},
dw:function dw(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
f9:function f9(){var _=this
_.d=_.b=_.a=null
_.f=_.e=$
_.r=null
_.x=0
_.y=null
_.ch=_.Q=_.z=0
_.cx=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=0},
jH(a){var s,r
if(a.k()!==0)return null
s=a.k()
if(!B.b.aD(A.c([1,2],t.t),s))return null
if(s===2)return null
r=a.k()
return new A.fg(r,A.jM(r,new A.fh(a),t.gx).cZ(0))},
ff:function ff(){this.b=this.a=null},
fg:function fg(a,b){var _=this
_.e=a
_.f=b
_.b=_.a=0},
fh:function fh(a){this.a=a},
bC:function bC(a,b){this.d=a
this.e=b},
dz:function dz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.cx=j
_.cy=k
_.db=l
_.fy=_.fx=_.fr=_.dy=_.dx=null
_.b=_.a=0},
dk:function dk(a,b,c){this.e=a
this.f=b
this.r=c},
fr:function fr(){this.d=null},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.z=_.y=_.x=_.r=_.f=_.e=$},
jQ(){var s=t.fk
return new A.fs(new A.by(A.W(t.p,t.z)),A.S(4,null,!1,t.aR),A.c([],t.f8),A.c([],s),A.c([],s),A.c([],t.eB))},
fs:function fs(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.ch=f},
ft:function ft(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a
this.b=0},
dQ:function dQ(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.y=_.x=$
_.z=a
_.Q=b},
fu:function fu(){this.r=this.f=$},
dR:function dR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.fx=_.fr=_.dy=_.dx=0
_.fy=$},
dP:function dP(){},
cB:function cB(){},
dK:function dK(a){this.c=this.b=null
this.z=a},
fM:function fM(){},
fn:function fn(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=null
_.cy=""
_.dx=null
_.fx=a
_.fy=b
_.b=_.a=0},
e4:function e4(){var _=this
_.a=null
_.c=_.b=0
_.d=$
_.e=0},
fK:function fK(){},
fL:function fL(a){var _=this
_.a=null
_.d=a
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=$
_.cx=0
_.cy=!1
_.db=null},
e5:function e5(){this.a=null},
e6:function e6(){this.a=null},
au:function au(){},
e8:function e8(){this.a=null},
e9:function e9(){this.a=null},
eb:function eb(){this.a=null},
ec:function ec(){this.a=null},
cE:function cE(a){this.b=a},
ea:function ea(){},
fO:function fO(){var _=this
_.x=_.r=_.f=_.e=$},
bi:function bi(a){this.a=a
this.c=$},
k0(a){var s=new A.fQ(A.W(t.p,t.fh))
s.f7(a)
return s},
iX(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.c.l(B.c.n((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
fR(a,b){if(b===0)return 0
return B.c.l(B.a.n(B.c.l(255*(1-(1-a/255)/(b/255))),0,255))},
m0(a,b){return B.c.l(B.a.n(a+b-255,0,255))},
fS(a,b){if(b===255)return 255
return B.c.l(B.c.n(a/255/(1-b/255)*255,0,255))},
iY(a,b){var s=a/255,r=b/255,q=1-r
return B.c.aK(255*(q*r*s+r*(1-q*(1-s))))},
iV(a,b){var s=b/255,r=a/255
if(r<0.5)return B.c.aK(510*s*r)
else return B.c.aK(255*(1-2*(1-s)*(1-r)))},
iZ(a,b){if(b<128)return A.fR(a,2*b)
else return A.fS(a,2*(b-128))},
iW(a,b){var s
if(b<128)return A.m0(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
k1(d1,d2,d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7="data",c8=A.R(d3,d4,B.e,null,null),c9=c8.aW(),d0=A.W(t.p,t.fW)
for(s=d5.length,r=0;q=d5.length,r<q;d5.length===s||(0,A.bZ)(d5),++r){p=d5[r]
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
c2=[B.c.l(B.c.n(b9*255,0,255)),B.c.l(B.c.n(c0*255,0,255)),B.c.l(B.c.n(c1*255,0,255))]
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
c2=[B.c.aK(255*(1-(255-c4)/255)*a),B.c.aK(255*(1-(255-c5)/255)*a),B.c.aK(255*(1-(255-b3)/255)*a)]
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
fQ:function fQ(a){var _=this
_.e=_.d=null
_.f=$
_.x=_.r=null
_.z=_.y=$
_.Q=null
_.ch=a
_.dy=_.dx=_.db=_.cy=$
_.b=_.a=0},
e7:function e7(){},
cD:function cD(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.cx=_.z=_.x=$
_.dx=a
_.dy=b
_.fx=$
_.fy=c},
m1(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.j()
if(s>=12){if(b.K(4)!=="8BIM")A.D(A.f("Invalid key in layer additional data"))
b.K(4)}if(s>=16)b.j()
return new A.ea()
default:return new A.cE(b)}},
bH:function bH(){},
fP:function fP(){this.a=null},
fX:function fX(){var _=this
_.e=_.d=null
_.b=_.a=0},
fW:function fW(){this.a=null
this.b=$},
fZ:function fZ(a){this.a=a
this.c=this.b=0},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
j0(a,b,c){var s=new A.h0(b,a),r=t.x
s.scU(A.S(b,null,!1,r))
s.scT(A.S(b,null,!1,r))
return s},
h0:function h0(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.y=_.x=null
_.z=0
_.Q=2
_.cx=0
_.cy=null},
ej:function ej(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.x=_.r=_.f=_.e=1
_.y=-1
_.z=!1
_.Q=1
_.cx=_.ch=$
_.dx=_.db=0
_.fr=_.dy=null
_.fy=_.fx=$
_.id=1
_.k2=_.k1=0
_.k4=null
_.rx=_.r2=_.r1=$
_.x1=_.ry=null},
h1:function h1(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
jW(){return new A.fB(new Uint8Array(4096))},
fB:function fB(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.x=_.r=_.f=_.e=$
_.y=a
_.Q=_.z=$
_.ch=null
_.cx=$},
h_:function h_(){this.a=null
this.b=$},
j1(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.S(8,null,!1,t.eW),n=A.S(4,null,!1,t.dP)
return new A.h6(a,b,new A.hc(),new A.hg(),new A.h8(s,r),new A.hi(q,p),o,n,new Uint8Array(4))},
kc(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
h6:function h6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.x=e
_.y=f
_.Q=_.z=$
_.db=_.cy=_.cx=_.ch=null
_.dy=_.dx=$
_.fx=_.fr=null
_.fy=$
_.go=g
_.k1=h
_.k2=null
_.k4=_.k3=$
_.r1=null
_.r2=i
_.a6=_.Z=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=$
_.aa=_.N=null
_.ab=_.a0=_.aF=_.be=_.bB=_.b2=$
_.aR=null
_.ag=_.ac=0
_.a1=$
_.ah=null
_.aw=_.ad=$
_.aS=null
_.aG=$},
hj:function hj(){},
k9(a){var s=new A.cM(a)
s.b=254
s.c=0
s.d=-8
return s},
cM:function cM(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
p(a,b,c){return B.a.P(B.a.i(a+2*b+c+2,2),32)},
mv(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-31
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
k=A.p(k,s,r)
q=l+-30
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
s=A.p(s,r,q)
p=l+-29
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
r=A.p(r,q,p)
l+=-28
if(!(l>=0&&l<j))return A.a(m,l)
o=A.c([k,s,r,A.p(q,p,m[l])],t.t)
for(n=0;n<4;++n)a.aT(n*32,4,o)},
mm(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
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
o=p.bI()
m=A.p(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.bI()
s=A.p(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.bI()
r=A.p(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.bI()
n=A.p(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
mf(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.i(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.aB(s,r,r+4,p)}},
j2(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.a1()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
l.length
if(!(m>=0&&m<766))return A.a(l,m)
J.m(k,n+(r+o),l[m])}r+=32}},
ms(a){A.j2(a,4)},
mt(a){A.j2(a,8)},
mr(a){A.j2(a,16)},
mq(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
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
a.h(0,96,A.p(s,r,q))
r=A.p(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.p(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.p(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.p(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.p(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.p(k,m,n))},
mp(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,0,A.p(k,s,r))
s=A.p(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.p(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.p(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.p(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.p(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.p(n,l,l))},
my(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
a.h(0,96,A.p(r,s,k))
a.h(0,64,A.p(s,k,q))
k=A.p(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.p(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.p(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.p(o,n,l))},
mx(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
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
a.h(0,32,A.p(k,s,r))
s=A.p(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.p(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.p(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.p(p,o,n))
a.h(0,99,A.p(o,n,l))},
mo(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
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
a.h(0,1,A.p(o,s,r))
s=A.p(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.p(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
mk(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
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
a.h(0,3,A.p(o,n,l))
a.h(0,2,A.p(p,o,n))
o=A.p(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.p(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.p(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.p(q,r,s))},
mu(a){var s
for(s=0;s<16;++s)a.ao(s*32,16,a,-32)},
ml(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aB(q,p,p+16,q[o])
s+=32}},
h9(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.aB(r,q,q+16,a)}},
mb(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.h9(B.a.i(p,5),a)},
md(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.h9(B.a.i(p,4),a)},
mc(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.h9(B.a.i(p,4),a)},
me(a){A.h9(128,a)},
mw(a){var s
for(s=0;s<8;++s)a.ao(s*32,8,a,-32)},
mn(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aB(q,p,p+8,q[o])
s+=32}},
ha(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.aB(r,q,q+8,a)}},
mg(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.ha(B.a.i(p,4),a)},
mh(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.ha(B.a.i(p,3),a)},
mi(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.ha(B.a.i(p,3),a)},
mj(a){A.ha(128,a)},
b0(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.i(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
hb(a,b,c,d,e){A.b0(a,0,0,b,c+d)
A.b0(a,0,1,b,c+e)
A.b0(a,0,2,b,c-e)
A.b0(a,0,3,b,c-d)},
mz(){var s,r,q
if(!$.ka){for(s=-255;s<=255;++s){r=$.eJ()
q=255+s
r[q]=s<0?-s:s
$.iF()[q]=B.a.i(r[q],1)}for(s=-1020;s<=1020;++s){r=$.iG()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.eK()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.a1()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.ka=!0}},
h7:function h7(){},
ma(){var s,r=J.a3(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.cL(r)},
mO(){var s,r,q,p,o=new Uint8Array(3),n=J.a3(4,t.c7)
for(s=t.bB,r=0;r<4;++r){q=J.a3(8,s)
for(p=0;p<8;++p)q[p]=A.ma()
n[r]=q}B.d.an(o,0,3,255)
return new A.hh(o,n)},
hc:function hc(){this.d=$},
hg:function hg(){},
hi:function hi(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
cL:function cL(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b},
h8:function h8(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
aL:function aL(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
cO:function cO(){this.b=this.a=0},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
j3(a,b){var s,r,q="_buffer8",p=A.c([],t.W),o=A.c([],t.gk),n=new Uint32Array(2),m=new A.ep(a,n)
n=m.d=A.G(n.buffer,0,null)
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
return new A.cN(m,b,p,o)},
bn(a,b){return B.a.i(a+B.a.w(1,b)-1,b)},
cN:function cN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.x=null
_.Q=_.z=_.y=0
_.ch=null
_.cx=0
_.cy=c
_.db=d
_.dx=0
_.dy=null
_.fr=$
_.go=_.fy=_.fx=null},
dL:function dL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.x=null
_.Q=_.z=_.y=0
_.ch=null
_.cx=0
_.cy=c
_.db=d
_.dx=0
_.dy=null
_.fr=$
_.go=_.fy=_.fx=null},
ep:function ep(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
hd:function hd(a,b){this.a=a
this.b=b},
he(a,b,c){var s
if(!(b>=0&&b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
aM(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
bm(a){if(a<0)return 0
if(a>255)return 255
return a},
hf(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
mA(a,b,c){return 4278190080},
mB(a,b,c){return b},
mG(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
mH(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
mI(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
mJ(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.aM(A.aM(b,a[r]),s)},
mK(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.aM(b,a[s])},
mL(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.aM(b,a[c])},
mM(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.aM(s,a[c])},
mN(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.aM(s,a[r])},
mC(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.aM(A.aM(b,q),A.aM(s,r))},
mD(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.hf(s>>>24,b>>>24,r>>>24)+A.hf(s>>>16&255,b>>>16&255,r>>>16&255)+A.hf(s>>>8&255,b>>>8&255,r>>>8&255)+A.hf(s&255,b&255,r&255)<=0?s:b},
mE(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.bm((b>>>24)+(s>>>24)-(r>>>24))<<24|A.bm((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.bm((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.bm((b&255)+(s&255)-(r&255)))>>>0},
mF(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.aM(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.bm(s+B.a.F(s-(r>>>24),2))<<24|A.bm(n+B.a.F(n-(r>>>16&255),2))<<16|A.bm(p+B.a.F(p-(r>>>8&255),2))<<8|A.bm(o+B.a.F(o-(r&255),2)))>>>0},
eq:function eq(){var _=this
_.c=_.b=_.a=0
_.d=null
_.e=0},
hk:function hk(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.x=!1
_.y=$
_.z=!1},
cR:function cR(){},
dM:function dM(){this.r=1
this.y=this.x=$},
jG(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.dy(s,r,new Int16Array(128))
s.cC(0)
return s},
lF(){var s,r=J.a3(5,t.bs)
for(s=0;s<5;++s)r[s]=A.jG()
return new A.bA(r)},
dy:function dy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
bA:function bA(a){this.a=a},
cS:function cS(a){var _=this
_.e=_.d=!1
_.f=0
_.Q=a
_.cx=_.ch=0
_.cy=null
_.b=_.a=_.dy=_.dx=0},
cj:function cj(a){var _=this
_.e=_.d=!1
_.f=0
_.Q=a
_.cx=_.ch=0
_.cy=null
_.b=_.a=_.dy=_.dx=0},
hl:function hl(){this.b=this.a=null},
dx:function dx(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
jF(a,b,c){switch(b){case 1:if(c===8)return new Int8Array(a)
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
break}throw A.d(A.el(null))},
fb(a,b,c,d,e){return new A.cf(a,b,c,d,e,A.jF(b*c,d,e))},
cf:function cf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oj(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.iu(new A.iv()),a=A.R(a1.gd0(a1),a1.gaH(a1),B.e,null,null),a0=a.aW()
if(!(a1.b!=null||a1.c!=null||a1.d!=null))throw A.d(A.f("Only RGB[A] images are currently supported."))
s=Math.pow(2,B.c.n(a2+2.47393,-20,20))
r=a0.length
q=a1.a
p=0
o=0
while(!0){if(q.ga7(q))n=0
else{n=q.gaA()
n=n.gb3(n).c}if(!(p<n))break
m=0
while(!0){if(q.ga7(q))n=0
else{n=q.gaA()
n=n.gb3(n).b}if(!(m<n))break
n=a1.b
if(n!=null)if(n.d===3){n=n.bL(m,p)
l=n}else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.o(n[k])
l=n}else l=0
if(q.gu(q)===1)j=l
else{n=a1.c
if(n!=null){if(n.d===3)n=n.bL(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.o(n[k])}j=n}else j=0}if(q.gu(q)===1)i=l
else{n=a1.d
if(n!=null){if(n.d===3)n=n.bL(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.o(n[k])}i=n}else i=0}if(l==1/0||l==-1/0||isNaN(l))l=0
if(j==1/0||j==-1/0||isNaN(j))j=0
if(i==1/0||i==-1/0||isNaN(i))i=0
h=b.$2(l,s)
g=b.$2(j,s)
f=b.$2(i,s)
e=Math.max(h,Math.max(g,f))
if(e>255){h=255*(h/e)
g=255*(g/e)
f=255*(f/e)}d=o+1
n=B.c.l(B.c.n(h,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
o=d+1
n=B.c.l(B.c.n(g,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n
d=o+1
n=B.c.l(B.c.n(f,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
n=a1.e
if(n!=null){c=n.bL(m,p)
if(c==1/0||c==-1/0||isNaN(c))c=1
o=d+1
n=B.c.l(B.c.n(c*255,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n}else{o=d+1
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=255}++m}++p}return a},
iv:function iv(){},
iu:function iu(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
R(a,b,c,d,e){return new A.dA(a,b,c,0,0,0,B.aC,B.as,new Uint32Array(a*b),A.jB(d),e)},
iN(a){return new A.dA(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,B.n.cg(a.y,0),A.jB(a.z),a.Q)},
f6:function f6(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k},
fk:function fk(a,b){this.a=a
this.b=b},
fj:function fj(){},
f(a){return new A.fi(a)},
fi:function fi(a){this.a=a},
l(a,b,c,d){return new A.V(a,d,c==null?a.length:d+c,d,b)},
i(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.V(s,q,p,r,a.e)},
V:function V(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ck:function ck(a,b){this.a=a
this.b=b},
bh(a,b){return new A.fG(a,new Uint8Array(b))},
fG:function fG(a,b){this.a=0
this.b=a
this.c=b},
o3(a,b){var s,r=t.cJ.a(self),q=t.p,p=A.W(q,t.eg),o=new MessageChannel(),n=o.port1,m=t.fQ
q=m.a(new A.io(p,new A.hm(new A.ip(r),A.W(q,t.e2))))
t.Z.a(null)
s=t.e
A.hB(n,"message",q,!1,s)
A.hB(r,"message",m.a(new A.iq(o,p,a)),!1,s)},
ip:function ip(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
kz(a){return a!=null&&typeof a!="number"&&!A.eE(a)&&typeof a!="string"},
ig(a,b){return A.kB(function(){var s=a,r=b
var q=0,p=1,o,n,m,l,k,j
return function $async$ig(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=J.lf(s,A.o4()),m=J.b9(n.a),n=new A.bo(m,n.b,n.$ti.m("bo<1>")),l=t.K
case 2:if(!n.B()){q=3
break}k=m.gD()
j=J.eL(k)
q=!B.b.aD(r,j)?4:5
break
case 4:B.b.v(r,j)
q=6
return l.a(k)
case 6:case 5:q=2
break
case 3:return A.kh()
case 1:return A.ki(o)}}},t.K)},
ih(a){return A.kB(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i
return function $async$ih(b,c){if(b===1){p=c
r=q}while(true)switch(r){case 0:r=A.kz(s)?2:3
break
case 2:s=s.gaA()
o=A.c([],t.t)
n=A.c([],t.G)
B.b.b1(n,A.ig(s,o))
m=t.j,l=t.f,k=0
case 4:if(!(k<n.length)){r=6
break}j=k+1
i=n[k]
r=l.b(i)?7:9
break
case 7:B.b.b1(n,A.ig(i.gaA(),o))
r=8
break
case 9:r=m.b(i)?10:12
break
case 10:B.b.b1(n,A.ig(i,o))
r=11
break
case 12:r=13
return i
case 13:case 11:case 8:case 5:k=j
r=4
break
case 6:case 3:return A.kh()
case 1:return A.ki(p)}}},t.K)},
i_:function i_(){},
dT:function dT(){this.a=null},
c4:function c4(a,b){this.a=a
this.b=b},
mW(a,b,c){var s=J.a_(A.bj())
return new A.ao(a,s)},
jy(a){var s=a==null?"The task has been cancelled":a,r=J.a_(A.bj())
return new A.c5(s,r)},
ao:function ao(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
b2:function b2(a,b){var _=this
_.c=0
_.d=null
_.a=a
_.b=b},
hm:function hm(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.d=b},
hn:function hn(a){this.a=a},
kd(a){var s,r,q=null,p=a==null,o=p?q:a.p(0,"a")
if(o==null)o=q
else{s=new A.dT()
s.a=t.c4.a(o)
o=s}s=p?q:a.p(0,"d")
t.fF.a(s)
s=s==null?q:new A.c4(A.o(s.p(0,"a")),A.ks(s.p(0,"b")))
r=A.o(p?q:a.p(0,"b"))
p=p?q:a.p(0,"c")
if(p==null)p=B.cY
return new A.ay(o,s,r,t.j.a(p))},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX(a){return new A.bN(!1,null,a,null,!1,!1)},
aO(a,b){var s=a instanceof A.ao,r=s?a.a:J.a_(a)
if(b==null)s=s?a.b:J.a_(A.bj())
else s=b
return new A.bN(!1,r,null,s,a instanceof A.c5,!1)},
bN:function bN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
or(){return A.o3(new A.iA(),null)},
iA:function iA(){},
cK:function cK(){this.a=$},
fY:function fY(a){this.a=a},
m7(a){throw A.d(A.a7("Uint64List not supported on the web."))},
k7(a,b){var s
A.br(a,b,null)
s=B.a.F(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
lz(a){var s
A.br(a,0,null)
s=B.a.F(a.byteLength-0,4)
return new Float32Array(a,0,s)},
lA(a){return a.ju(0,0,null)},
kN(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
oe(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.L(r,65521)
q=B.a.L(q,65521)}return(q<<16|r)>>>0},
az(a,b){var s,r,q,p=J.ai(a),o=p.gu(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
s=r+1
q=p.p(a,r)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.p(a,s)
if(typeof q!=="number")return A.y(q)
b=B.k[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
ar(a,b,c,d){return(B.c.l(B.a.n(d,0,255))<<24|B.c.l(B.a.n(c,0,255))<<16|B.c.l(B.a.n(b,0,255))<<8|B.c.l(B.a.n(a,0,255)))>>>0},
lx(a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=b3<16384,a6=a9>b1?b1:a9
for(s=1;s<=a6;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.c([0,0],t.t)
for(p=a7.length,o=s,s=r;s>=1;o=s,s=r){n=a8+b2*(b1-o)
m=b2*s
l=b2*o
k=b0*s
j=b0*o
for(i=(a9&s)>>>0!==0,h=b0*(a9-o),g=a4,f=g,e=f,d=e,c=a8;c<=n;c+=l){b=c+h
for(a=c;a<=b;a+=j){a0=a+k
a1=a+m
a2=a1+k
if(a5){if(!(a>=0&&a<p))return A.a(a7,a)
a3=a7[a]
if(!(a1>=0&&a1<p))return A.a(a7,a1)
A.cb(a3,a7[a1],q)
d=q[0]
f=q[1]
if(!(a0>=0&&a0<p))return A.a(a7,a0)
a3=a7[a0]
if(!(a2>=0&&a2<p))return A.a(a7,a2)
A.cb(a3,a7[a2],q)
e=q[0]
g=q[1]
A.cb(d,e,q)
a7[a]=q[0]
a7[a0]=q[1]
A.cb(f,g,q)
a7[a1]=q[0]
a7[a2]=q[1]}else{if(!(a>=0&&a<p))return A.a(a7,a)
a3=a7[a]
if(!(a1>=0&&a1<p))return A.a(a7,a1)
A.cc(a3,a7[a1],q)
d=q[0]
f=q[1]
if(!(a0>=0&&a0<p))return A.a(a7,a0)
a3=a7[a0]
if(!(a2>=0&&a2<p))return A.a(a7,a2)
A.cc(a3,a7[a2],q)
e=q[0]
g=q[1]
A.cc(d,e,q)
a7[a]=q[0]
a7[a0]=q[1]
A.cc(f,g,q)
a7[a1]=q[0]
a7[a2]=q[1]}}if(i){a1=a+m
if(a5){if(!(a>=0&&a<p))return A.a(a7,a)
a3=a7[a]
if(!(a1>=0&&a1<p))return A.a(a7,a1)
A.cb(a3,a7[a1],q)
d=q[0]
a7[a1]=q[1]}else{if(!(a>=0&&a<p))return A.a(a7,a)
a3=a7[a]
if(!(a1>=0&&a1<p))return A.a(a7,a1)
A.cc(a3,a7[a1],q)
d=q[0]
a7[a1]=q[1]}if(!(a>=0&&a<p))return A.a(a7,a)
a7[a]=d}}if((b1&s)>>>0!==0){b=c+h
for(a=c;a<=b;a+=j){a0=a+k
if(a5){if(!(a>=0&&a<p))return A.a(a7,a)
i=a7[a]
if(!(a0>=0&&a0<p))return A.a(a7,a0)
A.cb(i,a7[a0],q)
d=q[0]
a7[a0]=q[1]}else{if(!(a>=0&&a<p))return A.a(a7,a)
i=a7[a]
if(!(a0>=0&&a0<p))return A.a(a7,a0)
A.cc(i,a7[a0],q)
d=q[0]
a7[a0]=q[1]}if(!(a>=0&&a<p))return A.a(a7,a)
a7[a]=d}}r=s>>>1}},
cb(a,b,c){var s,r,q,p,o=$.Y()
o[0]=a
s=$.a2()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.i(q,1)
B.b.h(c,0,p)
B.b.h(c,1,p-q)},
cc(a,b,c){var s=a-B.a.i(b,1)&65535
B.b.h(c,1,s)
B.b.h(c,0,b+s-32768&65535)},
oc(a){var s,r,q,p,o,n,m,l=null
t.L.a(a)
if(A.jQ().jp(a))return new A.dP()
s=new A.e4()
if(s.bi(a))return s
r=new A.f9()
r.b=A.l(a,!1,l,0)
r.a=new A.dw(A.c([],t.b))
if(r.dF())return r
q=new A.hl()
if(q.bi(a))return q
p=new A.h_()
if(p.dZ(A.l(a,!1,l,0))!=null)return p
if(A.k0(a).d===943870035)return new A.fP()
if(A.lw(a))return new A.f3()
if(A.eS(A.l(a,!1,l,0)))return new A.dg()
o=new A.fW()
if(o.bi(a))return o
n=new A.ff()
m=A.l(a,!1,l,0)
n.a=m
m=A.jH(m)
n.b=m
if(m!=null)return n
return l},
oa(a){var s=A.oc(a)
if(s==null)return null
return s.am(a)},
ou(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.jc==null){s=$.jc=new Uint8Array(768)
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
a7[p]=a2-d}for(s=$.jc,r=0;r<64;++r){s.toString
q=B.a.i(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
of(f4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=f4.r.b,f1=f0.a3(274)?A.o(f0.p(0,274)):0,f2=f4.d,f3=f2.e
f3.toString
f2=f2.d
f2.toString
s=f1>=5&&f1<=8
if(s)r=f2
else r=f3
if(s)q=f3
else q=f2
p=A.R(r,q,B.w,e9,e9)
p.z=new A.by(A.W(t.p,t.z))
for(o=f0.gaI(),o=o.gO(o);o.B();){n=o.gD()
if(n!==274)p.z.b.h(0,n,f0.p(0,n))}m=f2-1
l=f3-1
f0=f4.ch
f2=f0.length
switch(f2){case 1:if(0>=f2)return A.a(f0,0)
k=f0[0]
j=k.e
i=k.f
h=k.r
f0=p.y
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
a=e9
a0=0
a1=0
while(!0){a2=f4.d.d
a2.toString
if(!(a1<a2))break
a3=B.a.H(a1,h)
if(!(a3<b))return A.a(j,a3)
a4=j[a3]
a2=m-a1
a5=a2*c
a6=a1*c
a7=0
while(!0){a8=f4.d.e
a8.toString
if(!(a7<a8))break
a9=B.a.H(a7,i)
if(!(a9<a4.length))return A.a(a4,a9)
a=a4[a9]
b0=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(a,0,255))<<16|B.c.l(B.a.n(a,0,255))<<8|B.c.l(B.a.n(a,0,255)))>>>0
if(d){a8=a6+(l-a7)
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(e){a8=a5+(l-a7)
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(f){a8=a5+a7
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(g){a8=a7*c+a1
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(n){a8=a7*c+a2
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(o){a8=(l-a7)*c+a2
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else if(f3){a8=(l-a7)*c+a1
if(!(a8>=0&&a8<f2))return A.a(f0,a8)
f0[a8]=b0}else{b1=a0+1
if(!(a0>=0&&a0<f2))return A.a(f0,a0)
f0[a0]=b0
a0=b1}++a7}++a1}break
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
f0=p.y
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
a2=b5.length
a5=b6.length
c1=e9
c2=c1
c3=c2
c4=c3
c5=c4
a=c5
a0=0
a1=0
while(!0){a6=f4.d.d
a6.toString
if(!(a1<a6))break
a3=B.a.H(a1,h)
c6=B.a.H(a1,b8)
c7=B.a.H(a1,c0)
if(!(a3<b))return A.a(b4,a3)
a4=b4[a3]
if(!(c6<a2))return A.a(b5,c6)
c8=b5[c6]
if(!(c7<a5))return A.a(b6,c7)
c9=b6[c7]
a6=m-a1
a8=a6*c
d0=a1*c
a7=0
while(!0){d1=f4.d.e
d1.toString
if(!(a7<d1))break
a9=B.a.H(a7,i)
d2=B.a.H(a7,b7)
d3=B.a.H(a7,b9)
if(!(a9<a4.length))return A.a(a4,a9)
a=a4[a9]<<8>>>0
if(!(d2<c8.length))return A.a(c8,d2)
c5=c8[d2]-128
if(!(d3<c9.length))return A.a(c9,d3)
c4=c9[d3]-128
d1=B.a.i(a+359*c4+128,8)
d1=(d1&2147483647)-((d1&2147483648)>>>0)
if(d1<0)c3=0
else c3=d1>255?255:d1
d1=B.a.i(a-88*c5-183*c4+128,8)
d1=(d1&2147483647)-((d1&2147483648)>>>0)
if(d1<0)c2=0
else c2=d1>255?255:d1
d1=B.a.i(a+454*c5+128,8)
d1=(d1&2147483647)-((d1&2147483648)>>>0)
if(d1<0)c1=0
else c1=d1>255?255:d1
b0=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(c1,0,255))<<16|B.c.l(B.a.n(c2,0,255))<<8|B.c.l(B.a.n(c3,0,255)))>>>0
if(d){d1=d0+(l-a7)
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(e){d1=a8+(l-a7)
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(f){d1=a8+a7
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(g){d1=a7*c+a1
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(n){d1=a7*c+a6
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(o){d1=(l-a7)*c+a6
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else if(f3){d1=(l-a7)*c+a1
if(!(d1>=0&&d1<f2))return A.a(f0,d1)
f0[d1]=b0}else{b1=a0+1
if(!(a0>=0&&a0<f2))return A.a(f0,a0)
f0[a0]=b0
a0=b1}++a7}++a1}break
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
f0=p.y
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
a2=b4.length
a5=b5.length
a6=b6.length
a8=d6.length
c1=e9
c2=c1
c3=c2
d9=c3
e0=d9
e1=e0
e2=e1
c4=e2
c5=c4
a=c5
a0=0
a1=0
while(!0){d0=f4.d.d
d0.toString
if(!(a1<d0))break
a3=B.a.H(a1,h)
c6=B.a.H(a1,b8)
c7=B.a.H(a1,c0)
e3=B.a.H(a1,d8)
if(!(a3<a2))return A.a(b4,a3)
a4=b4[a3]
if(!(c6<a5))return A.a(b5,c6)
c8=b5[c6]
if(!(c7<a6))return A.a(b6,c7)
c9=b6[c7]
if(!(e3<a8))return A.a(d6,e3)
e4=d6[e3]
d0=m-a1
d1=d0*b
e5=a1*b
a7=0
while(!0){e6=f4.d.e
e6.toString
if(!(a7<e6))break
a9=B.a.H(a7,i)
d2=B.a.H(a7,b7)
d3=B.a.H(a7,b9)
e7=B.a.H(a7,d7)
if(c){if(!(a9<a4.length))return A.a(a4,a9)
e1=a4[a9]
if(!(d2<c8.length))return A.a(c8,d2)
e0=c8[d2]
if(!(d3<c9.length))return A.a(c9,d3)
d9=c9[d3]
if(!(e7<e4.length))return A.a(e4,e7)
e2=e4[e7]}else{if(!(a9<a4.length))return A.a(a4,a9)
a=a4[a9]
if(!(d2<c8.length))return A.a(c8,d2)
c5=c8[d2]
if(!(d3<c9.length))return A.a(c9,d3)
c4=c9[d3]
if(!(e7<e4.length))return A.a(e4,e7)
e2=e4[e7]
e6=c4-128
e8=B.c.l(a+1.402*e6)
if(e8<0)e8=0
else if(e8>255)e8=255
e1=255-e8
e8=c5-128
e6=B.c.l(a-0.3441363*e8-0.71413636*e6)
if(e6<0)e6=0
else if(e6>255)e6=255
e0=255-e6
e8=B.c.l(a+1.772*e8)
if(e8<0)e6=0
else e6=e8>255?255:e8
d9=255-e6}e6=B.a.i(e1*e2,8)
c3=(e6&2147483647)-((e6&2147483648)>>>0)
e6=B.a.i(e0*e2,8)
c2=(e6&2147483647)-((e6&2147483648)>>>0)
e6=B.a.i(d9*e2,8)
c1=(e6&2147483647)-((e6&2147483648)>>>0)
b0=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(c1,0,255))<<16|B.c.l(B.a.n(c2,0,255))<<8|B.c.l(B.a.n(c3,0,255)))>>>0
if(d){e6=e5+(l-a7)
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(e){e6=d1+(l-a7)
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(f){e6=d1+a7
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(g){e6=a7*b+a1
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(n){e6=a7*b+d0
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(o){e6=(l-a7)*b+d0
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else if(f3){e6=(l-a7)*b+a1
if(!(e6>=0&&e6<f2))return A.a(f0,e6)
f0[e6]=b0}else{b1=a0+1
if(!(a0>=0&&a0<f2))return A.a(f0,a0)
f0[a0]=b0
a0=b1}++a7}++a1}break
default:throw A.d(A.f("Unsupported color mode"))}return p},
mT(a,b,c,d,e,f){A.mQ(f,a,b,c,d,e,!0,f)},
mU(a,b,c,d,e,f){A.mR(f,a,b,c,d,e,!0,f)},
mS(a,b,c,d,e,f){A.mP(f,a,b,c,d,e,!0,f)},
bM(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.m(c.a,c.d+s,q+p)}},
mQ(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.l(a,!1,q,p),m=A.l(a,!1,q,p),l=A.i(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.bM(A.i(n,q,1),l,A.i(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.bM(n,A.i(l,q,s),m,1,!0)
A.bM(A.i(n,q,1),l,A.i(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
mR(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.l(a,!1,q,p),m=A.l(h,!1,q,p),l=A.i(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.bM(A.i(n,q,1),l,A.i(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.bM(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
mP(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.l(a,!1,i,h),e=A.l(a4,!1,i,h),d=A.i(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.bM(A.i(f,i,1),d,A.i(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.bM(f,A.i(d,i,s),e,1,!0)
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
lG(a){var s,r,q,p
if($.L==null)A.aF()
$.jn()[0]=a
s=$.l7()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
q=r>>>23&511
s=$.fa.bu()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.lH(r)},
lH(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.a8(o+(B.a.C(1,s-1)-1)+(B.a.a5(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
aF(){var s,r,q,p,o
if($.iM!=null)return
s=new Uint32Array(65536)
$.iM=s
$.L=A.lN(s.buffer,0,null)
s=new Uint16Array(512)
$.fa.b=s
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){$.fa.toString
s[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(s,p)
s[p]=0}else{$.fa.toString
p=q<<10>>>0
s[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(s,o)
s[o]=(p|32768)>>>0}}for(s=$.iM,r=0;r<65536;++r){s.toString
s[r]=A.lI(r)}},
lI(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
oA(a){$.jp().h(0,0,a)
return $.l9().p(0,0)},
ir(a){var s,r
if(a==null)return"null"
for(s=32,r="";s>-1;--s)r+=(a&B.a.C(1,s))>>>0===0?"0":"1"
return r.charCodeAt(0)==0?r:r},
o2(a){var s,r,q=A.iN(a)
if(!a.z.b.a3(274)||A.o(a.z.b.p(0,274))===1)return q
q.z=new A.by(A.W(t.p,t.z))
for(s=a.z.b.gaI(),s=s.gO(s);s.B();){r=s.gD()
if(r!==274)q.z.b.h(0,r,a.z.b.p(0,r))}switch(A.o(a.z.b.p(0,274))){case 2:return A.eH(q)
case 3:switch(2){case 2:A.od(q)
A.eH(q)
break}return q
case 4:return A.eH(A.eG(q,180))
case 5:return A.eH(A.eG(q,90))
case 6:return A.eG(q,90)
case 7:return A.eH(A.eG(q,-90))
case 8:return A.eG(q,-90)}return q},
o9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a=A.o2(a)
if(b<=0)b=B.c.l(c*(a.b/a.a))
if(c<=0)c=B.c.l(b*(a.a/a.b))
s=a.a
if(c===s&&b===a.b)return A.iN(a)
r=A.R(c,b,a.c,a.z,a.Q)
q=a.b/b
p=s/c
o=new Int32Array(c)
for(n=0;n<c;++n){m=B.c.l(n*p)
if(!(n<c))return A.a(o,n)
o[n]=m}for(m=a.y,l=m.length,k=r.y,j=r.a,i=k.length,h=0;h<b;++h)for(g=B.c.l(h*q)*s,f=h*j,n=0;n<c;++n){if(!(n<c))return A.a(o,n)
e=g+o[n]
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+n
if(!(d>=0&&d<i))return A.a(k,d)
k[d]=e}return r},
eG(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=B.a.L(a7,360)
if(B.a.L(a5,90)===0){s=a6.a
r=s-1
q=a6.b
p=q-1
switch(B.a.F(a5,90)){case 1:o=A.R(q,s,a6.c,a6.z,a6.Q)
for(q=o.b,n=o.a,m=a6.y,l=m.length,k=o.y,j=k.length,i=0;i<q;++i)for(h=i*n,g=0;g<n;++g){f=(p-g)*s+i
if(!(f>=0&&f<l))return A.a(m,f)
f=m[f]
e=h+g
if(!(e>=0&&e<j))return A.a(k,e)
k[e]=f}return o
case 2:o=A.R(s,q,a6.c,a6.z,a6.Q)
for(q=o.b,n=o.a,m=a6.y,l=m.length,k=o.y,j=k.length,i=0;i<q;++i)for(h=(p-i)*s,f=i*n,g=0;g<n;++g){e=h+(r-g)
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
case 3:o=A.R(q,s,a6.c,a6.z,a6.Q)
for(q=o.b,n=o.a,m=a6.y,l=m.length,k=o.y,j=k.length,i=0;i<q;++i)for(h=r-i,f=i*n,g=0;g<n;++g){e=g*s+h
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
default:return A.iN(a6)}}c=a5*3.141592653589793/180
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
o=A.R(B.c.l(n),B.c.l(q),B.e,a6.z,a6.Q)
for(s=o.b,q=o.a,n=o.y,m=n.length,i=0;i<s;++i)for(l=i-a3,k=l*a,l*=b,j=i*q,g=0;g<q;++g){h=g-a2
a4=a6.eL(a0+h*b+k,a1-h*a+l,B.aE)
h=j+g
if(!(h>=0&&h<m))return A.a(n,h)
n[h]=a4}return o},
od(a){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=a.b,g=B.a.F(h,2)
for(s=a.y,r=s.length,q=h-1,p=0;p<g;++p){o=p*i
n=(q-p)*i
for(m=0;m<i;++m){l=n+m
if(!(l>=0&&l<r))return A.a(s,l)
k=s[l]
j=o+m
if(!(j>=0&&j<r))return A.a(s,j)
s[l]=s[j]
s[j]=k}}return a},
eH(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.b,h=B.a.F(j,2)
for(s=j-1,r=a.y,q=r.length,p=0;p<i;++p){o=p*j
for(n=0;n<h;++n){m=o+(s-n)
if(!(m>=0&&m<q))return A.a(r,m)
l=r[m]
k=o+n
if(!(k>=0&&k<q))return A.a(r,k)
r[m]=r[k]
r[k]=l}}return a},
ho(a,b,c,d){return A.mY(a,b,c,d)},
mY(a,b,c,a0){var s=0,r=A.kA(t.z),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d
var $async$ho=A.kF(function(a1,a2){if(a1===1){o=a2
s=p}while(true)switch(s){case 0:f=A.kd(a)
e=f.a
if(e==null){A.eI("Missing client for connection request")
s=1
break}p=4
h=c.gca(c)
if(h){h=J.a_(A.bj())
J.aC(e,A.aO(new A.ao("Already connected",h),null))
s=1
break}m=a0.$1(f)
s=t.c.b(m)?7:9
break
case 7:s=10
return A.ic(m,$async$ho)
case 10:s=8
break
case 9:a2=m
case 8:l=a2
c.b1(0,l.gj0())
h=e.a
h.toString
B.K.cb(h,b,A.c([b],t.G))
p=2
s=6
break
case 4:p=3
d=o
h=A.ab(d)
if(h instanceof A.ao){k=h
J.aC(e,A.aO(k,null))}else{j=h
i=A.aa(d)
J.aC(e,A.aO(j,J.a_(i)))}s=6
break
case 3:s=2
break
case 6:case 1:return A.ku(q,r)
case 2:return A.kt(o,r)}})
return A.kv($async$ho,r)},
cT(a,b,c){return A.mZ(a,b,c)},
mZ(a3,a4,a5){var s=0,r=A.kA(t.z),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cT=A.kF(function(a6,a7){if(a6===1){o=a7
s=p}while(true)switch(s){case 0:a0=A.kd(a4)
if(a0.c===-3){if(a5.c===0)a5.a.$0()
else a5.b=!0
s=1
break}if(a0.c===-2){e=a0.b
e.toString
e=a5.dJ(e)
if(e.d==null)e.d=A.jy(null)
s=1
break}if(a0.c===-1){d="Unhandled start or termination request: "+A.v(a0)
e=a0.a
if(e!=null){c=J.a_(A.bj())
e.ez(0,A.aO(new A.ao(d,c),null))}A.eI(d)
s=1
break}m=a0.a
if(m==null){A.eI("Missing client for request: "+A.v(a0))
s=1
break}l=a5.ir(a0)
p=4
if(a3.ga7(a3)){e=J.a_(A.bj())
J.aC(m,A.aO(new A.ao("Worker service is not ready",e),null))
n=[1]
s=5
break}e=l
e=e==null?null:e.gc8()!=null
if(e===!0){J.aC(m,A.aO(A.jy("Cancelled"),null))
n=[1]
s=5
break}k=a3.p(0,a0.c)
if(k==null){e="Unknown command: "+A.v(a0)
c=J.a_(A.bj())
J.aC(m,A.aO(new A.ao(e,c),null))
n=[1]
s=5
break}j=k.$1(a0)
s=t.c.b(j)?7:8
break
case 7:s=9
return A.ic(j,$async$cT)
case 9:j=a7
case 8:s=j instanceof A.bJ?10:12
break
case 10:e=new A.bq(A.eF(j,"stream",t.K),t.a7)
p=13
case 16:a2=A
s=18
return A.ic(e.B(),$async$cT)
case 18:if(!a2.bW(a7)){s=17
break}i=e.gD()
a4=new A.bN(!1,null,i,null,!1,!1).ce()
c=A.ih(a4)
b=A.dV(c,!0,c.$ti.m("j.E"))
c=m.a
c.toString
B.K.cb(c,a4,b)
c=l
c=c==null?null:c.gc8()!=null
if(c===!0){c=J.a_(A.bj())
a4=A.aO(new A.c5("Cancelled",c),null).ce()
c=A.ih(a4)
b=A.dV(c,!0,c.$ti.m("j.E"))
c=m.a
c.toString
B.K.cb(c,a4,b)}s=16
break
case 17:n.push(15)
s=14
break
case 13:n=[4]
case 14:p=4
s=19
return A.ic(e.cO(),$async$cT)
case 19:s=n.pop()
break
case 15:s=11
break
case 12:J.aC(m,A.mX(j))
case 11:n.push(6)
s=5
break
case 4:p=3
a1=o
e=A.ab(a1)
if(e instanceof A.ao){h=e
J.aC(m,A.aO(h,null))}else{g=e
f=A.aa(a1)
J.aC(m,A.aO(g,J.a_(f)))}n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
J.aC(m,B.fW)
e=t.bo.a(l)
if(e!=null)if(--e.c===0&&e.gc8()==null)a5.d.ey(0,e.a)
e=--a5.c
if(a5.b&&e===0)a5.a.$0()
s=n.pop()
break
case 6:case 1:return A.ku(q,r)
case 2:return A.kt(o,r)}})
return A.kv($async$cT,r)}},J={
jj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
it(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ji==null){A.ol()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.el("Return interceptor for "+A.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hR
if(o==null)o=$.hR=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.oq(a)
if(p!=null)return p
if(typeof a=="function")return B.aH
s=Object.getPrototypeOf(a)
if(s==null)return B.ar
if(s===Object.prototype)return B.ar
if(typeof q=="function"){o=$.hR
if(o==null)o=$.hR=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.X,enumerable:false,writable:true,configurable:true})
return B.X}return B.X},
fp(a,b){if(a<0||a>4294967295)throw A.d(A.O(a,0,4294967295,"length",null))
return J.jO(new Array(a),b)},
a3(a,b){if(a<0||a>4294967295)throw A.d(A.O(a,0,4294967295,"length",null))
return J.jO(new Array(a),b)},
jN(a,b){if(a<0)throw A.d(A.c_("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.m("r<0>"))},
jO(a,b){return J.iP(A.c(a,b.m("r<0>")),b)},
iP(a,b){a.fixed$length=Array
return a},
bY(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.dO.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.cn.prototype
if(typeof a=="boolean")return J.dN.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof A.u)return a
return J.it(a)},
ai(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof A.u)return a
return J.it(a)},
M(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof A.u)return a
return J.it(a)},
kJ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof A.u)return a
return J.it(a)},
og(a){if(a==null)return a
if(!(a instanceof A.u))return J.bK.prototype
return a},
aT(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bY(a).bk(a,b)},
n(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.oo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ai(a).p(a,b)},
m(a,b,c){return J.M(a).h(a,b,c)},
lb(a,b,c,d){return J.kJ(a).ie(a,b,c,d)},
iI(a,b){return J.M(a).v(a,b)},
lc(a,b,c,d){return J.kJ(a).cM(a,b,c,d)},
ld(a,b){return J.M(a).aQ(a,b)},
aB(a,b,c,d){return J.M(a).an(a,b,c,d)},
le(a){return J.M(a).gb3(a)},
eL(a){return J.bY(a).gaj(a)},
b9(a){return J.M(a).gO(a)},
ac(a){return J.ai(a).gu(a)},
aC(a,b){return J.og(a).ez(a,b)},
jq(a,b){return J.M(a).aN(a,b)},
eM(a,b,c){return J.M(a).ae(a,b,c)},
a_(a){return J.bY(a).t(a)},
lf(a,b){return J.M(a).d_(a,b)},
ak:function ak(){},
dN:function dN(){},
cn:function cn(){},
aV:function aV(){},
e3:function e3(){},
bK:function bK(){},
aG:function aG(){},
r:function r(a){this.$ti=a},
fq:function fq(a){this.$ti=a},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(){},
cm:function cm(){},
dO:function dO(){},
bD:function bD(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.iQ.prototype={}
J.ak.prototype={
bk(a,b){return a===b},
gaj(a){return A.cC(a)},
t(a){return"Instance of '"+A.fN(a)+"'"}}
J.dN.prototype={
t(a){return String(a)},
gaj(a){return a?519018:218159},
$ia9:1}
J.cn.prototype={
bk(a,b){return null==b},
t(a){return"null"},
gaj(a){return 0},
$iH:1}
J.aV.prototype={
gaj(a){return 0},
t(a){return String(a)},
$ijP:1}
J.e3.prototype={}
J.bK.prototype={}
J.aG.prototype={
t(a){var s=a[$.kQ()]
if(s==null)return this.eU(a)
return"JavaScript function for "+J.a_(s)},
$ibd:1}
J.r.prototype={
v(a,b){A.aq(a).c.a(b)
if(!!a.fixed$length)A.D(A.a7("add"))
a.push(b)},
d_(a,b){var s=A.aq(a)
return new A.aN(a,s.m("a9(1)").a(b),s.m("aN<1>"))},
b1(a,b){var s
A.aq(a).m("j<1>").a(b)
if(!!a.fixed$length)A.D(A.a7("addAll"))
for(s=J.b9(b);s.B();)a.push(s.gD())},
aN(a,b){return A.eg(a,b,null,A.aq(a).c)},
aQ(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
ae(a,b,c){if(b<0||b>a.length)throw A.d(A.O(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.O(c,b,a.length,"end",null))
if(b===c)return A.c([],A.aq(a))
return A.c(a.slice(b,c),A.aq(a))},
gb3(a){if(a.length>0)return a[0]
throw A.d(A.fo())},
giW(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.fo())},
a_(a,b,c,d,e){var s,r,q,p,o
A.aq(a).m("j<1>").a(d)
if(!!a.immutable$list)A.D(A.a7("setRange"))
A.aw(b,c,a.length)
s=c-b
if(s===0)return
A.av(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.jq(d,e).b4(0,!1)
q=0}p=J.ai(r)
if(q+s>p.gu(r))throw A.d(A.jL())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.p(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.p(r,q+o)},
an(a,b,c,d){var s,r=A.aq(a)
r.m("1?").a(d)
if(!!a.immutable$list)A.D(A.a7("fill range"))
A.aw(b,c,a.length)
r.c.a(d)
for(s=b;s<c;++s)a[s]=d},
aD(a,b){var s
for(s=0;s<a.length;++s)if(J.aT(a[s],b))return!0
return!1},
ga7(a){return a.length===0},
gca(a){return a.length!==0},
t(a){return A.jK(a,"[","]")},
gO(a){return new J.c0(a,a.length,A.aq(a).m("c0<1>"))},
gaj(a){return A.cC(a)},
gu(a){return a.length},
su(a,b){if(!!a.fixed$length)A.D(A.a7("set length"))
if(b<0)throw A.d(A.O(b,0,null,"newLength",null))
if(b>a.length)A.aq(a).c.a(null)
a.length=b},
p(a,b){if(!(b>=0&&b<a.length))throw A.d(A.bX(a,b))
return a[b]},
h(a,b,c){A.o(b)
A.aq(a).c.a(c)
if(!!a.immutable$list)A.D(A.a7("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.bX(a,b))
a[b]=c},
$iq:1,
$ij:1,
$ik:1}
J.fq.prototype={}
J.c0.prototype={
gD(){return this.$ti.c.a(this.d)},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.bZ(q))
s=r.c
if(s>=p){r.sdt(null)
return!1}r.sdt(q[s]);++r.c
return!0},
sdt(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
J.co.prototype={
cQ(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.a.gbD(b)
if(this.gbD(a)===s)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD(a){return a===0?1/a<0:a<0},
l(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.a7(""+a+".toInt()"))},
bd(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.a7(""+a+".ceil()"))},
aK(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a7(""+a+".round()"))},
n(a,b,c){if(B.a.cQ(b,c)>0)throw A.d(A.b6(b))
if(this.cQ(a,b)<0)return b
if(this.cQ(a,c)>0)return c
return a},
bH(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.O(b,2,36,"radix",null))
s=a.toString(b)
if(B.h.cP(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.D(A.a7("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.a(r,1)
s=r[1]
if(3>=q)return A.a(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.h.ar("0",p)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gaj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
L(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
V(a,b){A.nq(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e6(a,b)},
F(a,b){return(a|0)===a?a/b|0:this.e6(a,b)},
e6(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.a7("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
C(a,b){if(b<0)throw A.d(A.b6(b))
return b>31?0:a<<b>>>0},
w(a,b){return b>31?0:a<<b>>>0},
a8(a,b){var s
if(b<0)throw A.d(A.b6(b))
if(a>0)s=this.H(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
i(a,b){var s
if(a>0)s=this.H(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a5(a,b){if(0>b)throw A.d(A.b6(b))
return this.H(a,b)},
H(a,b){return b>31?0:a>>>b},
$ix:1,
$iF:1}
J.cm.prototype={
P(a,b){var s=this.C(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
$ie:1}
J.dO.prototype={}
J.bD.prototype={
cP(a,b){if(b<0)throw A.d(A.bX(a,b))
if(b>=a.length)A.D(A.bX(a,b))
return a.charCodeAt(b)},
bS(a,b){if(b>=a.length)throw A.d(A.bX(a,b))
return a.charCodeAt(b)},
aL(a,b){return a+b},
bP(a,b,c){return a.substring(b,A.aw(b,c,a.length))},
ar(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.aA)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
t(a){return a},
gaj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gu(a){return a.length},
$ian:1}
A.bE.prototype={
t(a){var s="LateInitializationError: "+this.a
return s}}
A.at.prototype={
gu(a){return this.a.length},
p(a,b){return B.h.cP(this.a,b)}}
A.iC.prototype={
$0(){var s=new A.C($.A,t.U)
s.bQ(null)
return s},
$S:24}
A.q.prototype={}
A.bF.prototype={
gO(a){var s=this
return new A.bf(s,s.gu(s),A.E(s).m("bf<1>"))},
aN(a,b){return A.eg(this,b,null,A.E(this).c)},
b4(a,b){return A.dV(this,!0,A.E(this).c)},
cZ(a){return this.b4(a,!0)}}
A.cJ.prototype={
gh3(){var s=J.ac(this.a),r=this.c
if(r==null||r>s)return s
return r},
gim(){var s=J.ac(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.ac(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.cf()
return s-q},
aQ(a,b){var s=this,r=s.gim()+b
if(b<0||r>=s.gh3())throw A.d(A.fl(b,s,"index",null,null))
return J.ld(s.a,r)},
aN(a,b){var s,r,q=this
A.av(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bc(q.$ti.m("bc<1>"))
return A.eg(q.a,s,r,q.$ti.c)},
b4(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ai(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.fp(0,p.$ti.c)
return n}r=A.S(s,m.aQ(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.b.h(r,q,m.aQ(n,o+q))
if(m.gu(n)<l)throw A.d(A.dm(p))}return r}}
A.bf.prototype={
gD(){return this.$ti.c.a(this.d)},
B(){var s,r=this,q=r.a,p=J.ai(q),o=p.gu(q)
if(r.b!==o)throw A.d(A.dm(q))
s=r.c
if(s>=o){r.sbn(null)
return!1}r.sbn(p.aQ(q,s));++r.c
return!0},
sbn(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.cv.prototype={
gO(a){var s=A.E(this)
return new A.cw(J.b9(this.a),this.b,s.m("@<1>").Y(s.Q[1]).m("cw<1,2>"))},
gu(a){return J.ac(this.a)},
gb3(a){return this.b.$1(J.le(this.a))}}
A.c7.prototype={$iq:1}
A.cw.prototype={
B(){var s=this,r=s.b
if(r.B()){s.sbn(s.c.$1(r.gD()))
return!0}s.sbn(null)
return!1},
gD(){return this.$ti.Q[1].a(this.a)},
sbn(a){this.a=this.$ti.m("2?").a(a)}}
A.aN.prototype={
gO(a){return new A.bo(J.b9(this.a),this.b,this.$ti.m("bo<1>"))}}
A.bo.prototype={
B(){var s,r
for(s=this.a,r=this.b;s.B();)if(A.bW(r.$1(s.gD())))return!0
return!1},
gD(){return this.a.gD()}}
A.aI.prototype={
aN(a,b){A.eO(b,"count",t.p)
A.av(b,"count")
return new A.aI(this.a,this.b+b,A.E(this).m("aI<1>"))},
gO(a){var s=this.a
return new A.cG(s.gO(s),this.b,A.E(this).m("cG<1>"))}}
A.bx.prototype={
gu(a){var s=this.a,r=s.gu(s)-this.b
if(r>=0)return r
return 0},
aN(a,b){A.eO(b,"count",t.p)
A.av(b,"count")
return new A.bx(this.a,this.b+b,this.$ti)},
$iq:1}
A.cG.prototype={
B(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.B()
this.b=0
return s.B()},
gD(){return this.a.gD()}}
A.bc.prototype={
gO(a){return B.at},
gu(a){return 0},
aN(a,b){A.av(b,"count")
return this},
b4(a,b){var s=this.$ti.c
return b?J.jN(0,s):J.fp(0,s)},
cZ(a){return this.b4(a,!0)}}
A.c8.prototype={
B(){return!1},
gD(){throw A.d(A.fo())},
$iK:1}
A.U.prototype={}
A.bl.prototype={
h(a,b,c){A.o(b)
A.E(this).m("bl.E").a(c)
throw A.d(A.a7("Cannot modify an unmodifiable list"))}}
A.bL.prototype={}
A.bu.prototype={
ga7(a){return this.gu(this)===0},
t(a){return A.iT(this)},
$iaf:1}
A.bv.prototype={
gu(a){return this.a},
a3(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
p(a,b){if(!this.a3(b))return null
return this.b[A.aP(b)]},
ax(a,b){var s,r,q,p,o,n=this.$ti
n.m("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.aP(s[p])
b.$2(o,n.a(q[o]))}},
gaA(){var s=this.$ti
return A.jX(this.c,new A.eW(this),s.c,s.Q[1])}}
A.eW.prototype={
$1(a){var s=this.a,r=s.$ti
return r.Q[1].a(s.b[A.aP(r.c.a(a))])},
$S(){return this.a.$ti.m("2(1)")}}
A.cd.prototype={
bq(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.lD(r)
o=A.jT(A.nM(),q,r,s.Q[1])
A.kI(p.a,o)
p.$map=o}return o},
a3(a){return this.bq().a3(a)},
p(a,b){return this.bq().p(0,b)},
ax(a,b){this.$ti.m("~(1,2)").a(b)
this.bq().ax(0,b)},
gaA(){return this.bq().gaA()},
gu(a){var s=this.bq()
return s.gu(s)}}
A.f7.prototype={
$1(a){return this.a.b(a)},
$S:41}
A.h2.prototype={
ay(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cA.prototype={
t(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.dS.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.em.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.fF.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ca.prototype={}
A.d5.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaZ:1}
A.bb.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kP(r==null?"unknown":r)+"'"},
$ibd:1,
gjr(){return this},
$C:"$1",
$R:1,
$D:null}
A.di.prototype={$C:"$0",$R:0}
A.dj.prototype={$C:"$2",$R:2}
A.eh.prototype={}
A.ee.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kP(s)+"'"}}
A.bt.prototype={
bk(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bt))return!1
return this.$_target===b.$_target&&this.a===b.a},
gaj(a){return(A.jk(this.a)^A.cC(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.fN(t.K.a(this.a))+"'")}}
A.ed.prototype={
t(a){return"RuntimeError: "+this.a}}
A.et.prototype={
t(a){return"Assertion failed: "+A.c9(this.a)}}
A.a5.prototype={
gu(a){return this.a},
ga7(a){return this.a===0},
gca(a){return!this.ga7(this)},
gaI(){return new A.cq(this,A.E(this).m("cq<1>"))},
gaA(){var s=A.E(this)
return A.jX(this.gaI(),new A.fw(this),s.c,s.Q[1])},
a3(a){var s,r,q=this
if(typeof a=="string"){s=q.b
if(s==null)return!1
return q.ds(s,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){r=q.c
if(r==null)return!1
return q.ds(r,a)}else return q.en(a)},
en(a){var s=this,r=s.d
if(r==null)return!1
return s.bh(s.c_(r,s.bg(a)),a)>=0},
b1(a,b){A.E(this).m("af<1,2>").a(b).ax(0,new A.fv(this))},
p(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bs(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bs(p,b)
q=r==null?n:r.b
return q}else return o.eo(b)},
eo(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.c_(p,q.bg(a))
r=q.bh(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.E(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.da(s==null?q.b=q.cD():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.da(r==null?q.c=q.cD():r,b,c)}else q.eq(b,c)},
eq(a,b){var s,r,q,p,o=this,n=A.E(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.cD()
r=o.bg(a)
q=o.c_(s,r)
if(q==null)o.cK(s,r,[o.cE(a,b)])
else{p=o.bh(q,a)
if(p>=0)q[p].b=b
else q.push(o.cE(a,b))}},
j5(a,b){var s,r=this,q=A.E(r)
q.c.a(a)
q.m("2()").a(b)
if(r.a3(a))return q.Q[1].a(r.p(0,a))
s=b.$0()
r.h(0,a,s)
return s},
ey(a,b){if((b&0x3ffffff)===b)return this.ig(this.c,b)
else return this.ep(b)},
ep(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bg(a)
r=o.c_(n,s)
q=o.bh(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eb(p)
if(r.length===0)o.cs(n,s)
return p.b},
ax(a,b){var s,r,q=this
A.E(q).m("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.dm(q))
s=s.c}},
da(a,b,c){var s,r=this,q=A.E(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bs(a,b)
if(s==null)r.cK(a,b,r.cE(b,c))
else s.b=c},
ig(a,b){var s
if(a==null)return null
s=this.bs(a,b)
if(s==null)return null
this.eb(s)
this.cs(a,b)
return s.b},
dP(){this.r=this.r+1&67108863},
cE(a,b){var s=this,r=A.E(s),q=new A.fz(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dP()
return q},
eb(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dP()},
bg(a){return J.eL(a)&0x3ffffff},
bh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aT(a[r].a,b))return r
return-1},
t(a){return A.iT(this)},
bs(a,b){return a[b]},
c_(a,b){return a[b]},
cK(a,b,c){a[b]=c},
cs(a,b){delete a[b]},
ds(a,b){return this.bs(a,b)!=null},
cD(){var s="<non-identifier-key>",r=Object.create(null)
this.cK(r,s,r)
this.cs(r,s)
return r},
$ify:1}
A.fw.prototype={
$1(a){var s=this.a,r=A.E(s)
return r.Q[1].a(s.p(0,r.c.a(a)))},
$S(){return A.E(this.a).m("2(1)")}}
A.fv.prototype={
$2(a,b){var s=this.a,r=A.E(s)
s.h(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.E(this.a).m("~(1,2)")}}
A.fz.prototype={}
A.cq.prototype={
gu(a){return this.a.a},
ga7(a){return this.a.a===0},
gO(a){var s=this.a,r=new A.cr(s,s.r,this.$ti.m("cr<1>"))
r.c=s.e
return r}}
A.cr.prototype={
gD(){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.dm(q))
s=r.c
if(s==null){r.sd9(null)
return!1}else{r.sd9(s.a)
r.c=s.c
return!0}},
sd9(a){this.d=this.$ti.m("1?").a(a)},
$iK:1}
A.iw.prototype={
$1(a){return this.a(a)},
$S:19}
A.ix.prototype={
$2(a,b){return this.a(a,b)},
$S:25}
A.iy.prototype={
$1(a){return this.a(A.aP(a))},
$S:29}
A.hy.prototype={
I(){var s=this.b
if(s===this)throw A.d(new A.bE("Local '"+this.a+"' has not been initialized."))
return s},
bu(){var s=this.b
if(s===this)throw A.d(A.fx(this.a))
return s}}
A.cx.prototype={$icx:1}
A.J.prototype={
hl(a,b,c,d){var s=A.O(b,0,c,d,null)
throw A.d(s)},
dm(a,b,c,d){if(b>>>0!==b||b>c)this.hl(a,b,c,d)},
$iJ:1,
$iQ:1}
A.P.prototype={
gu(a){return a.length},
e4(a,b,c,d,e){var s,r,q=a.length
this.dm(a,b,q,"start")
this.dm(a,c,q,"end")
if(b>c)throw A.d(A.O(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.c_(e,null))
r=d.length
if(r-e<s)throw A.d(A.fT("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ia4:1}
A.aY.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
h(a,b,c){A.o(b)
A.np(c)
A.aQ(b,a,a.length)
a[b]=c},
a_(a,b,c,d,e){t.bM.a(d)
if(t.d4.b(d)){this.e4(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
$iq:1,
$ij:1,
$ik:1}
A.a6.prototype={
h(a,b,c){A.o(b)
A.o(c)
A.aQ(b,a,a.length)
a[b]=c},
a_(a,b,c,d,e){t.hb.a(d)
if(t.bc.b(d)){this.e4(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
b6(a,b,c,d){return this.a_(a,b,c,d,0)},
$iq:1,
$ij:1,
$ik:1}
A.dW.prototype={
ae(a,b,c){return new Float32Array(a.subarray(b,A.aR(b,c,a.length)))},
$ily:1}
A.dX.prototype={
ae(a,b,c){return new Float64Array(a.subarray(b,A.aR(b,c,a.length)))}}
A.dY.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Int16Array(a.subarray(b,A.aR(b,c,a.length)))},
$iiO:1}
A.dZ.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Int32Array(a.subarray(b,A.aR(b,c,a.length)))},
$ifm:1}
A.e_.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Int8Array(a.subarray(b,A.aR(b,c,a.length)))},
$ilJ:1}
A.e0.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Uint16Array(a.subarray(b,A.aR(b,c,a.length)))},
$im6:1}
A.cy.prototype={
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Uint32Array(a.subarray(b,A.aR(b,c,a.length)))},
cg(a,b){return this.ae(a,b,null)},
$iaK:1}
A.cz.prototype={
gu(a){return a.length},
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.aR(b,c,a.length)))}}
A.bg.prototype={
gu(a){return a.length},
p(a,b){A.aQ(b,a,a.length)
return a[b]},
ae(a,b,c){return new Uint8Array(a.subarray(b,A.aR(b,c,a.length)))},
cg(a,b){return this.ae(a,b,null)},
$ibg:1,
$iax:1}
A.d0.prototype={}
A.d1.prototype={}
A.d2.prototype={}
A.d3.prototype={}
A.am.prototype={
m(a){return A.i8(v.typeUniverse,this,a)},
Y(a){return A.nk(v.typeUniverse,this,a)}}
A.ey.prototype={}
A.ex.prototype={
t(a){return this.a}}
A.d7.prototype={$ib_:1}
A.hv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.hu.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.hw.prototype={
$0(){this.a.$0()},
$S:18}
A.hx.prototype={
$0(){this.a.$0()},
$S:18}
A.i6.prototype={
fb(a,b){if(self.setTimeout!=null)self.setTimeout(A.bs(new A.i7(this,b),0),a)
else throw A.d(A.a7("`setTimeout()` not found."))}}
A.i7.prototype={
$0(){this.b.$0()},
$S:1}
A.eu.prototype={
cR(a){var s,r=this,q=r.$ti
q.m("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bQ(a)
else{s=r.a
if(q.m("aj<1>").b(a))s.dl(a)
else s.bT(q.c.a(a))}},
cS(a,b){var s=this.a
if(this.b)s.bo(a,b)
else s.dg(a,b)}}
A.id.prototype={
$1(a){return this.a.$2(0,a)},
$S:3}
A.ie.prototype={
$2(a,b){this.a.$2(1,new A.ca(a,t.l.a(b)))},
$S:20}
A.im.prototype={
$2(a,b){this.a(A.o(a),b)},
$S:21}
A.bP.prototype={
t(a){return"IterationMarker("+this.b+", "+A.v(this.a)+")"}}
A.bR.prototype={
gD(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gD()},
B(){var s,r,q,p,o,n,m=this
for(s=m.$ti.m("K<1>");!0;){r=m.c
if(r!=null)if(r.B())return!0
else m.sdS(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.bP){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sdf(null)
return!1}if(0>=o.length)return A.a(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.b9(r))
if(n instanceof A.bR){r=m.d
if(r==null)r=m.d=[]
B.b.v(r,m.a)
m.a=n.a
continue}else{m.sdS(n)
continue}}}}else{m.sdf(q)
return!0}}return!1},
sdf(a){this.b=this.$ti.m("1?").a(a)},
sdS(a){this.c=this.$ti.m("K<1>?").a(a)},
$iK:1}
A.d6.prototype={
gO(a){return new A.bR(this.a(),this.$ti.m("bR<1>"))}}
A.c2.prototype={
t(a){return A.v(this.a)},
$iw:1,
gbO(){return this.b}}
A.ew.prototype={
cS(a,b){var s
A.eF(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.fT("Future already completed"))
if(b==null)b=A.js(a)
s.dg(a,b)},
ej(a){return this.cS(a,null)}}
A.cU.prototype={
cR(a){var s,r=this.$ti
r.m("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.fT("Future already completed"))
s.bQ(r.m("1/").a(a))}}
A.bp.prototype={
iX(a){if((this.c&15)!==6)return!0
return this.b.b.cX(t.al.a(this.d),a.a,t.v,t.K)},
iU(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.jh(q,m,a.b,o,n,t.l)
else p=l.cX(t.w.a(q),m,o,n)
try{o=r.$ti.m("2/").a(p)
return o}catch(s){if(t.eK.b(A.ab(s))){if((r.c&1)!==0)throw A.d(A.c_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.c_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.C.prototype={
cY(a,b,c){var s,r,q,p=this.$ti
p.Y(c).m("1/(2)").a(a)
s=$.A
if(s===B.f){if(b!=null&&!t.C.b(b)&&!t.w.b(b))throw A.d(A.jr(b,"onError",u.b))}else{c.m("@<0/>").Y(p.c).m("1(2)").a(a)
if(b!=null)b=A.nP(b,s)}r=new A.C(s,c.m("C<0>"))
q=b==null?1:3
this.cj(new A.bp(r,q,a,b,p.m("@<1>").Y(c).m("bp<1,2>")))
return r},
jk(a,b){return this.cY(a,null,b)},
e7(a,b,c){var s,r=this.$ti
r.Y(c).m("1/(2)").a(a)
s=new A.C($.A,c.m("C<0>"))
this.cj(new A.bp(s,19,a,b,r.m("@<1>").Y(c).m("bp<1,2>")))
return s},
ik(a){this.$ti.c.a(a)
this.a=8
this.c=a},
ij(a){this.a=this.a&1|16
this.c=a},
co(a){this.a=a.a&30|this.a&1
this.c=a.c},
cj(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.cj(a)
return}r.co(s)}A.bU(null,null,r.b,t.M.a(new A.hE(r,a)))}},
dX(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.dX(a)
return}m.co(n)}l.a=m.c4(a)
A.bU(null,null,m.b,t.M.a(new A.hL(l,m)))}},
c3(){var s=t.F.a(this.c)
this.c=null
return this.c4(s)},
c4(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fB(a){var s,r,q,p=this
p.a^=2
try{a.cY(new A.hH(p),new A.hI(p),t.P)}catch(q){s=A.ab(q)
r=A.aa(q)
A.ow(new A.hJ(p,s,r))}},
dq(a){var s,r=this,q=r.$ti
q.m("1/").a(a)
s=r.c3()
q.c.a(a)
r.a=8
r.c=a
A.bO(r,s)},
bT(a){var s,r=this
r.$ti.c.a(a)
s=r.c3()
r.a=8
r.c=a
A.bO(r,s)},
bo(a,b){var s
t.l.a(b)
s=this.c3()
this.ij(A.eQ(a,b))
A.bO(this,s)},
bQ(a){var s=this.$ti
s.m("1/").a(a)
if(s.m("aj<1>").b(a)){this.dl(a)
return}this.dh(s.c.a(a))},
dh(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bU(null,null,s.b,t.M.a(new A.hG(s,a)))},
dl(a){var s=this,r=s.$ti
r.m("aj<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.bU(null,null,s.b,t.M.a(new A.hK(s,a)))}else A.j4(a,s)
return}s.fB(a)},
dg(a,b){this.a^=2
A.bU(null,null,this.b,t.M.a(new A.hF(this,a,b)))},
$iaj:1}
A.hE.prototype={
$0(){A.bO(this.a,this.b)},
$S:1}
A.hL.prototype={
$0(){A.bO(this.b,this.a.a)},
$S:1}
A.hH.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.bT(p.$ti.c.a(a))}catch(q){s=A.ab(q)
r=A.aa(q)
p.bo(s,r)}},
$S:14}
A.hI.prototype={
$2(a,b){this.a.bo(t.K.a(a),t.l.a(b))},
$S:22}
A.hJ.prototype={
$0(){this.a.bo(this.b,this.c)},
$S:1}
A.hG.prototype={
$0(){this.a.bT(this.b)},
$S:1}
A.hK.prototype={
$0(){A.j4(this.b,this.a)},
$S:1}
A.hF.prototype={
$0(){this.a.bo(this.b,this.c)},
$S:1}
A.hO.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eA(t.fO.a(q.d),t.z)}catch(p){s=A.ab(p)
r=A.aa(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.eQ(s,r)
o.b=!0
return}if(l instanceof A.C&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.jk(new A.hP(n),t.z)
q.b=!1}},
$S:1}
A.hP.prototype={
$1(a){return this.a},
$S:23}
A.hN.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cX(o.m("2/(1)").a(p.d),m,o.m("2/"),n)}catch(l){s=A.ab(l)
r=A.aa(l)
q=this.a
q.c=A.eQ(s,r)
q.b=!0}},
$S:1}
A.hM.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.iX(s)&&p.a.e!=null){p.c=p.a.iU(s)
p.b=!1}}catch(o){r=A.ab(o)
q=A.aa(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.eQ(r,q)
n.b=!0}},
$S:1}
A.ev.prototype={}
A.bJ.prototype={
gu(a){var s,r,q=this,p={},o=new A.C($.A,t.fJ)
p.a=0
s=q.$ti
r=s.m("~(1)?").a(new A.fU(p,q))
t.Z.a(new A.fV(p,o))
A.hB(q.a,q.b,r,!1,s.c)
return o}}
A.fU.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.m("~(1)")}}
A.fV.prototype={
$0(){this.b.dq(this.a.a)},
$S:1}
A.cI.prototype={}
A.ef.prototype={}
A.bq.prototype={
gD(){var s=this
if(s.c)return s.$ti.c.a(s.b)
return s.$ti.c.a(null)},
B(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.C($.A,t.k)
r.b=s
r.c=!1
q.jg()
return s}throw A.d(A.fT("Already waiting for next."))}return r.hk()},
hk(){var s,r,q,p,o=this,n=o.b
if(n!=null){o.$ti.m("bJ<1>").a(n)
s=new A.C($.A,t.k)
o.b=s
r=n.$ti
q=r.m("~(1)?").a(o.gfs())
t.Z.a(o.ghu())
p=A.hB(n.a,n.b,q,!1,r.c)
if(o.b!=null)o.scL(p)
return s}return $.kR()},
cO(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.scL(null)
if(!s.c)t.k.a(q).bQ(!1)
else s.c=!1
return r.cO()}return $.kS()},
ft(a){var s,r,q=this
q.$ti.c.a(a)
if(q.a==null)return
s=t.k.a(q.b)
q.b=a
q.c=!0
s.dq(!0)
if(q.c){r=q.a
if(r!=null)r.j2()}},
hv(){var s=this,r=s.a,q=t.k.a(s.b)
s.scL(null)
s.b=null
if(r!=null)q.bT(!1)
else q.dh(!1)},
scL(a){this.a=this.$ti.m("cI<1>?").a(a)}}
A.da.prototype={$ike:1}
A.il.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.t(0)
throw s},
$S:1}
A.ez.prototype={
ji(a){var s,r,q,p,o
t.M.a(a)
try{if(B.f===$.A){a.$0()
return}A.kC(null,null,this,a,t.H)}catch(q){s=A.ab(q)
r=A.aa(q)
p=t.K.a(s)
o=t.l.a(r)
A.ik(p,o)}},
jj(a,b,c){var s,r,q,p,o
c.m("~(0)").a(a)
c.a(b)
try{if(B.f===$.A){a.$1(b)
return}A.kD(null,null,this,a,b,t.H,c)}catch(q){s=A.ab(q)
r=A.aa(q)
p=t.K.a(s)
o=t.l.a(r)
A.ik(p,o)}},
eg(a){return new A.i0(this,t.M.a(a))},
is(a,b){return new A.i1(this,b.m("~(0)").a(a),b)},
eA(a,b){b.m("0()").a(a)
if($.A===B.f)return a.$0()
return A.kC(null,null,this,a,b)},
cX(a,b,c,d){c.m("@<0>").Y(d).m("1(2)").a(a)
d.a(b)
if($.A===B.f)return a.$1(b)
return A.kD(null,null,this,a,b,c,d)},
jh(a,b,c,d,e,f){d.m("@<0>").Y(e).Y(f).m("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.A===B.f)return a.$2(b,c)
return A.nQ(null,null,this,a,b,c,d,e,f)},
ex(a,b,c,d){return b.m("@<0>").Y(c).Y(d).m("1(2,3)").a(a)}}
A.i0.prototype={
$0(){return this.a.ji(this.b)},
$S:1}
A.i1.prototype={
$1(a){var s=this.c
return this.a.jj(this.b,s.a(a),s)},
$S(){return this.c.m("~(0)")}}
A.hZ.prototype={
bg(a){return A.jk(a)&1073741823},
bh(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.cX.prototype={
p(a,b){if(!A.bW(this.z.$1(b)))return null
return this.eW(b)},
h(a,b,c){var s=this.$ti
this.eY(s.c.a(b),s.Q[1].a(c))},
a3(a){if(!A.bW(this.z.$1(a)))return!1
return this.eV(a)},
ey(a,b){if(!A.bW(this.z.$1(b)))return null
return this.eX(b)},
bg(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
bh(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.bW(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.hY.prototype={
$1(a){return this.a.b(a)},
$S:10}
A.cl.prototype={}
A.fA.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:11}
A.ct.prototype={$iq:1,$ij:1,$ik:1}
A.t.prototype={
gO(a){return new A.bf(a,this.gu(a),A.aA(a).m("bf<t.E>"))},
aQ(a,b){return this.p(a,b)},
ga7(a){return this.gu(a)===0},
gca(a){return this.gu(a)!==0},
d_(a,b){var s=A.aA(a)
return new A.aN(a,s.m("a9(t.E)").a(b),s.m("aN<t.E>"))},
aN(a,b){return A.eg(a,b,null,A.aA(a).m("t.E"))},
ae(a,b,c){var s,r=this.gu(a)
A.aw(b,c,r)
A.aw(b,c,this.gu(a))
s=A.aA(a).m("t.E")
return A.jV(A.eg(a,b,c,s),s)},
an(a,b,c,d){var s,r=A.aA(a)
d=r.m("t.E").a(r.m("t.E?").a(d))
A.aw(b,c,this.gu(a))
for(s=b;s<c;++s)this.h(a,s,d)},
a_(a,b,c,d,e){var s,r,q,p,o=A.aA(a)
o.m("j<t.E>").a(d)
A.aw(b,c,this.gu(a))
s=c-b
if(s===0)return
A.av(e,"skipCount")
if(o.m("k<t.E>").b(d)){r=e
q=d}else{q=J.jq(d,e).b4(0,!1)
r=0}o=J.ai(q)
if(r+s>o.gu(q))throw A.d(A.jL())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.p(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.p(q,r+p))},
t(a){return A.jK(a,"[","]")}}
A.cu.prototype={}
A.fC.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.v(a)
r.a=s+": "
r.a+=A.v(b)},
$S:4}
A.aW.prototype={
ax(a,b){var s,r,q=A.E(this)
q.m("~(1,2)").a(b)
for(s=this.gaI(),s=s.gO(s),q=q.Q[1];s.B();){r=s.gD()
b.$2(r,q.a(this.p(0,r)))}},
gu(a){var s=this.gaI()
return s.gu(s)},
ga7(a){var s=this.gaI()
return s.ga7(s)},
gaA(){var s=A.E(this)
return new A.cZ(this,s.m("@<1>").Y(s.Q[1]).m("cZ<1,2>"))},
t(a){return A.iT(this)},
$iaf:1}
A.cZ.prototype={
gu(a){var s=this.a
return s.gu(s)},
gO(a){var s=this.a,r=this.$ti,q=s.gaI()
return new A.d_(q.gO(q),s,r.m("@<1>").Y(r.Q[1]).m("d_<1,2>"))}}
A.d_.prototype={
B(){var s=this,r=s.a
if(r.B()){s.sdn(s.b.p(0,r.gD()))
return!0}s.sdn(null)
return!1},
gD(){return this.$ti.Q[1].a(this.c)},
sdn(a){this.c=this.$ti.m("2?").a(a)},
$iK:1}
A.cY.prototype={}
A.h5.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:12}
A.h4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:12}
A.dn.prototype={}
A.cp.prototype={
t(a){var s=A.c9(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.dU.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.hW.prototype={
d1(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=B.h.bS(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(B.h.bS(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(B.h.cP(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.h.bP(a,r,q)
r=q+1
o=s.a+=A.B(92)
o+=A.B(117)
s.a=o
o+=A.B(100)
s.a=o
n=p>>>8&15
o+=A.B(n<10?48+n:87+n)
s.a=o
n=p>>>4&15
o+=A.B(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.B(n<10?48+n:87+n)}}continue}if(p<32){if(q>r)s.a+=B.h.bP(a,r,q)
r=q+1
o=s.a+=A.B(92)
switch(p){case 8:s.a=o+A.B(98)
break
case 9:s.a=o+A.B(116)
break
case 10:s.a=o+A.B(110)
break
case 12:s.a=o+A.B(102)
break
case 13:s.a=o+A.B(114)
break
default:o+=A.B(117)
s.a=o
o+=A.B(48)
s.a=o
o+=A.B(48)
s.a=o
n=p>>>4&15
o+=A.B(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.B(n<10?48+n:87+n)
break}}else if(p===34||p===92){if(q>r)s.a+=B.h.bP(a,r,q)
r=q+1
o=s.a+=A.B(92)
s.a=o+A.B(p)}}if(r===0)s.a+=a
else if(r<m)s.a+=B.h.bP(a,r,m)},
cm(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.dU(a,null))}B.b.v(s,a)},
b5(a){var s,r,q,p,o=this
if(o.eG(a))return
o.cm(a)
try{s=o.b.$1(a)
if(!o.eG(s)){q=A.jR(a,null,o.gdV())
throw A.d(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.ab(p)
q=A.jR(a,r,o.gdV())
throw A.d(q)}},
eG(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.d1(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cm(a)
q.eH(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cm(a)
r=q.eI(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
eH(a){var s,r,q=this.c
q.a+="["
s=J.M(a)
if(s.gca(a)){this.b5(s.p(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.b5(s.p(a,r))}}q.a+="]"},
eI(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga7(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.S(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ax(0,new A.hX(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.d1(A.aP(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.b5(r[n])}p.a+="}"
return!0}}
A.hX.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:4}
A.hS.prototype={
eH(a){var s,r=this,q=J.ai(a),p=q.ga7(a),o=r.c,n=o.a
if(p)o.a=n+"[]"
else{o.a=n+"[\n"
r.bK(++r.a$)
r.b5(q.p(a,0))
for(s=1;s<q.gu(a);++s){o.a+=",\n"
r.bK(r.a$)
r.b5(q.p(a,s))}o.a+="\n"
r.bK(--r.a$)
o.a+="]"}},
eI(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga7(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.S(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ax(0,new A.hT(l,r))
if(!l.b)return!1
p=m.c
p.a+="{\n";++m.a$
for(o="";q<s;q+=2,o=",\n"){p.a+=o
m.bK(m.a$)
p.a+='"'
m.d1(A.aP(r[q]))
p.a+='": '
n=q+1
if(!(n<s))return A.a(r,n)
m.b5(r[n])}p.a+="\n"
m.bK(--m.a$)
p.a+="}"
return!0}}
A.hT.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:4}
A.hU.prototype={
gdV(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hV.prototype={
bK(a){var s,r,q
for(s=this.f,r=this.c,q=0;q<a;++q)r.a+=s}}
A.eo.prototype={
iB(a){var s,r
t.L.a(a)
s=this.a
r=A.m8(s,a,0,null)
if(r!=null)return r
return new A.i9(s).iC(a,0,null,!0)}}
A.i9.prototype={
iC(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aw(b,c,a.length)
if(b===s)return""
r=A.nn(a,b,s)
q=n.cp(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.no(p)
n.b=0
throw A.d(A.lB(o,a,b+n.c))}return q},
cp(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.F(b+c,2)
r=q.cp(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cp(a,s,c,d)}return q.iI(a,b,c,d)},
iI(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.bk(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.h.bS("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.h.bS(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.B(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.B(j)
break
case 65:g.a+=A.B(j);--f
break
default:p=g.a+=A.B(j)
g.a=p+A.B(j)
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
g.a+=A.B(a[l])}else g.a+=A.j_(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.B(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.eD.prototype={}
A.c6.prototype={
bk(a,b){if(b==null)return!1
return b instanceof A.c6&&this.a===b.a&&!0},
gaj(a){var s=this.a
return(s^B.a.i(s,30))&1073741823},
t(a){var s=this,r=A.lo(A.lY(s)),q=A.dq(A.lW(s)),p=A.dq(A.lS(s)),o=A.dq(A.lT(s)),n=A.dq(A.lV(s)),m=A.dq(A.lX(s)),l=A.lp(A.lU(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k}}
A.hz.prototype={}
A.w.prototype={
gbO(){return A.aa(this.$thrownJsError)}}
A.c1.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c9(s)
return"Assertion failed"}}
A.b_.prototype={}
A.e1.prototype={
t(a){return"Throw of null."}}
A.as.prototype={
gcu(){return"Invalid argument"+(!this.a?"(s)":"")},
gct(){return""},
t(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.v(n),l=q.gcu()+o+m
if(!q.a)return l
s=q.gct()
r=A.c9(q.b)
return l+s+": "+r}}
A.cF.prototype={
gcu(){return"RangeError"},
gct(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.v(q):""
else if(q==null)s=": Not greater than or equal to "+A.v(r)
else if(q>r)s=": Not in inclusive range "+A.v(r)+".."+A.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.v(r)
return s}}
A.dB.prototype={
gcu(){return"RangeError"},
gct(){if(A.o(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.en.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.ek.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.bI.prototype={
t(a){return"Bad state: "+this.a}}
A.dl.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c9(s)+"."}}
A.e2.prototype={
t(a){return"Out of Memory"},
gbO(){return null},
$iw:1}
A.cH.prototype={
t(a){return"Stack Overflow"},
gbO(){return null},
$iw:1}
A.dp.prototype={
t(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hD.prototype={
t(a){return"Exception: "+this.a}}
A.dv.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.v(q)+")"):r}}
A.j.prototype={
d_(a,b){var s=A.E(this)
return new A.aN(this,s.m("a9(j.E)").a(b),s.m("aN<j.E>"))},
b4(a,b){return A.dV(this,b,A.E(this).m("j.E"))},
gu(a){var s,r=this.gO(this)
for(s=0;r.B();)++s
return s},
aN(a,b){return A.m3(this,b,A.E(this).m("j.E"))},
gb3(a){var s=this.gO(this)
if(!s.B())throw A.d(A.fo())
return s.gD()},
aQ(a,b){var s,r,q
A.av(b,"index")
for(s=this.gO(this),r=0;s.B();){q=s.gD()
if(b===r)return q;++r}throw A.d(A.fl(b,this,"index",null,r))},
t(a){return A.lK(this,"(",")")}}
A.cW.prototype={
aQ(a,b){var s=this.a
if(0>b||b>=s)A.D(A.fl(b,this,"index",null,s))
return this.b.$1(b)},
gu(a){return this.a}}
A.K.prototype={}
A.H.prototype={
gaj(a){return A.u.prototype.gaj.call(this,this)},
t(a){return"null"}}
A.u.prototype={$iu:1,
bk(a,b){return this===b},
gaj(a){return A.cC(this)},
t(a){return"Instance of '"+A.fN(this)+"'"},
toString(){return this.t(this)}}
A.eB.prototype={
t(a){return""},
$iaZ:1}
A.bk.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$im4:1}
A.ba.prototype={$iba:1}
A.bw.prototype={$ibw:1}
A.f1.prototype={
t(a){return String(a)}}
A.h.prototype={$ih:1}
A.aD.prototype={
cM(a,b,c,d){t.y.a(c)
if(c!=null)this.fp(a,b,c,!1)},
fp(a,b,c,d){return a.addEventListener(b,A.bs(t.y.a(c),1),!1)},
ie(a,b,c,d){return a.removeEventListener(b,A.bs(t.y.a(c),1),!1)},
$iaD:1}
A.bz.prototype={$ibz:1}
A.aH.prototype={$iaH:1}
A.aX.prototype={
cM(a,b,c,d){t.y.a(c)
if(b==="message")a.start()
this.eT(a,b,c,!1)},
cb(a,b,c){t.ha.a(c)
this.hH(a,new A.i3([],[]).aV(b),c)
return},
hH(a,b,c){return a.postMessage(b,t.ew.a(c))},
$iaX:1}
A.b1.prototype={}
A.iJ.prototype={}
A.hA.prototype={}
A.cV.prototype={
cO(){var s=this
if(s.b==null)return $.iH()
s.ec()
s.b=null
s.sht(null)
return $.iH()},
j2(){if(this.b==null)return;++this.a
this.ec()},
jg(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.e9()},
e9(){var s,r=this,q=r.d
if(q!=null&&r.a<=0){s=r.b
s.toString
J.lc(s,r.c,q,!1)}},
ec(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.lb(s,this.c,t.y.a(r),!1)}},
sht(a){this.d=t.y.a(a)}}
A.hC.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:26}
A.i2.prototype={
bf(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aV(a){var s,r,q,p=this,o={}
if(a==null)return a
if(A.eE(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.c6)return new Date(a.a)
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=p.bf(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.a=r[s]
if(q!=null)return q
q={}
o.a=q
B.b.h(r,s,q)
a.ax(0,new A.i4(o,p))
return o.a}if(t.j.b(a)){s=p.bf(a)
o=p.b
if(!(s<o.length))return A.a(o,s)
q=o[s]
if(q!=null)return q
return p.iD(a,s)}if(t.eH.b(a)){s=p.bf(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.b=r[s]
if(q!=null)return q
q={}
o.b=q
B.b.h(r,s,q)
p.iS(a,new A.i5(o,p))
return o.b}throw A.d(A.el("structured clone of other type"))},
iD(a,b){var s,r=J.ai(a),q=r.gu(a),p=new Array(q)
B.b.h(this.b,b,p)
for(s=0;s<q;++s)B.b.h(p,s,this.aV(r.p(a,s)))
return p}}
A.i4.prototype={
$2(a,b){this.a.a[a]=this.b.aV(b)},
$S:11}
A.i5.prototype={
$2(a,b){this.a.b[a]=this.b.aV(b)},
$S:27}
A.hs.prototype={
bf(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aV(a){var s,r,q,p,o,n,m,l,k,j=this,i={}
if(a==null)return a
if(A.eE(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.D(A.c_("DateTime is outside valid range: "+s,null))
A.eF(!0,"isUtc",t.v)
return new A.c6(s,!0)}if(a instanceof RegExp)throw A.d(A.el("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.ot(a,t.z)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=j.bf(a)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=i.a=r[p]
if(o!=null)return o
n=t.z
o=A.W(n,n)
i.a=o
B.b.h(r,p,o)
j.iR(a,new A.ht(i,j))
return i.a}if(a instanceof Array){m=a
p=j.bf(m)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=r[p]
if(o!=null)return o
n=J.ai(m)
l=n.gu(m)
o=j.c?new Array(l):m
B.b.h(r,p,o)
for(r=J.M(o),k=0;k<l;++k)r.h(o,k,j.aV(n.p(m,k)))
return o}return a},
ek(a,b){this.c=!0
return this.aV(a)}}
A.ht.prototype={
$2(a,b){var s=this.a.a,r=this.b.aV(b)
J.m(s,a,r)
return r},
$S:42}
A.i3.prototype={
iS(a,b){var s,r,q,p
t.Y.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
A.es.prototype={
iR(a,b){var s,r,q,p
t.Y.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.bZ)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.fE.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.iD.prototype={
$1(a){return this.a.cR(this.b.m("0/?").a(a))},
$S:3}
A.iE.prototype={
$1(a){if(a==null)return this.a.ej(new A.fE(a===undefined))
return this.a.ej(a)},
$S:3}
A.eN.prototype={}
A.dE.prototype={}
A.dD.prototype={
gu(a){return A.b(this.e,"_length")-(this.b-this.c)},
gbC(){return this.b>=this.c+A.b(this.e,"_length")},
q(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
T(a){var s=this,r=s.c,q=s.b-r+r,p=a<0?A.b(s.e,"_length")-(q-r):a,o=A.be(s.a,s.d,p,q)
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
return A.G(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.jd(J.eM(m,s,q>p?p:q)))}}
A.fJ.prototype={}
A.fH.prototype={
E(a){var s,r,q=this
if(q.a===q.c.length)q.hw()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
cd(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.cF(r-p)
B.d.b6(q,s,r,a)
o.a+=b},
at(a){return this.cd(a,null)},
jq(a){var s,r,q,p,o,n=this
for(s=a.c;r=n.a,q=A.b(a.e,"_length"),p=a.b,o=n.c,r+(q-(p-s))>o.length;)n.cF(n.a+(A.b(a.e,"_length")-(a.b-s))-n.c.length)
s=n.a
B.d.a_(o,s,s+a.gu(a),a.a,a.b)
n.a=n.a+a.gu(a)},
au(a){var s=this
if(s.b===1){s.E(a>>>24&255)
s.E(a>>>16&255)
s.E(a>>>8&255)
s.E(a&255)
return}s.E(a&255)
s.E(a>>>8&255)
s.E(a>>>16&255)
s.E(a>>>24&255)},
d6(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.G(s.c.buffer,a,b-a)},
M(a){return this.d6(a,null)},
cF(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.d.b6(p,0,q,r)
this.c=p},
hw(){return this.cF(null)},
gu(a){return this.a}}
A.ib.prototype={
bz(a,b){var s,r,q,p,o=a.q(),n=a.q(),m=o&8
B.a.i(o,3)
if(m!==8)throw A.d(A.ad("Only DEFLATE compression supported: "+m))
if(B.a.L((o<<8>>>0)+n,31)!==0)throw A.d(A.ad("Invalid FCHECK"))
if((n>>>5&1)!==0){a.j()
throw A.d(A.ad("FDICT Encoding not currently supported"))}s=A.bB(B.a0)
r=A.bB(B.ac)
q=A.fI(0,null)
r=new A.dC(a,q,s,r)
r.b=!0
r.dL()
p=t.L.a(A.G(q.c.buffer,0,q.a))
a.j()
return p}}
A.eZ.prototype={
fW(a){var s,r,q,p=this
if(a>4||!1)throw A.d(A.ad("Invalid Deflate Parameter"))
if(A.b(p.y,"_pending")!==0)p.bY()
if(p.c.gbC())if(A.b(p.x1,"_lookAhead")===0)s=a!==0&&p.e!==666
else s=!0
else s=!0
if(s){switch($.ae.bu().e){case 0:r=p.fZ(a)
break
case 1:r=p.fX(a)
break
case 2:r=p.fY(a)
break
default:r=-1
break}s=r===2
if(s||r===3)p.e=666
if(r===0||s)return 0
if(r===1){if(a===1){p.W(2,3)
p.bc(256,B.G)
p.ef()
if(1+A.b(p.aG,"_lastEOBLen")+10-A.b(p.a2,"_numValidBits")<9){p.W(2,3)
p.bc(256,B.G)
p.ef()}p.aG=7}else{p.e8(0,0,!1)
if(a===3)for(q=0;q<A.b(p.go,"_hashSize");++q){s=A.b(p.fx,"_head")
if(!(q<s.length))return A.a(s,q)
s[q]=0}}p.bY()}}if(a!==4)return 0
return 1},
ho(){var s,r,q,p=this,o="_hashSize"
p.dy=2*A.b(p.cx,"_windowSize")
s=A.b(p.fx,"_head")
r=A.b(p.go,o)-1
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=0
for(q=0;q<A.b(p.go,o)-1;++q){s=A.b(p.fx,"_head")
if(!(q<s.length))return A.a(s,q)
s[q]=0}p.x1=p.k3=p.rx=0
p.k4=p.x2=2
p.fy=p.r2=0},
dM(){var s,r,q,p=this,o="_dynamicLengthTree"
for(s=0;s<286;++s){r=A.b(p.Z,o)
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}for(s=0;s<30;++s){r=A.b(p.a6,"_dynamicDistTree")
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}for(s=0;s<19;++s){r=A.b(p.N,"_bitLengthTree")
q=s*2
if(!(q<r.length))return A.a(r,q)
r[q]=0}r=A.b(p.Z,o)
if(512>=r.length)return A.a(r,512)
r[512]=1
p.a1=p.aS=p.ad=p.aw=0},
cG(a,b){var s,r,q,p,o,n=this,m="_heapLen",l=n.aF
if(!(b>=0&&b<573))return A.a(l,b)
s=l[b]
r=b<<1>>>0
for(q=n.aR;r<=A.b(n.a0,m);b=r,r=o){if(r<A.b(n.a0,m)){p=r+1
if(!(p>=0&&p<573))return A.a(l,p)
p=l[p]
if(!(r>=0&&r<573))return A.a(l,r)
p=A.jA(a,p,l[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(l,r)
if(A.jA(a,s,l[r],q))break
p=l[r]
if(!(b>=0&&b<573))return A.a(l,b)
l[b]=p
o=r<<1>>>0}if(!(b>=0&&b<573))return A.a(l,b)
l[b]=s},
e2(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h="_bitLengthTree",g=a.length
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
else if(m<q){p=A.b(i.N,h)
k=s*2
j=A.b(i.N,h)
if(!(k<j.length))return A.a(j,k)
j=j[k]
if(!(k<p.length))return A.a(p,k)
p[k]=j+m}else if(s!==0){if(s!==n){p=A.b(i.N,h)
k=s*2
if(!(k<p.length))return A.a(p,k)
p[k]=p[k]+1}p=A.b(i.N,h)
if(32>=p.length)return A.a(p,32)
p[32]=p[32]+1}else{p=i.N
if(m<=10){p=A.b(p,h)
if(34>=p.length)return A.a(p,34)
p[34]=p[34]+1}else{p=A.b(p,h)
if(36>=p.length)return A.a(p,36)
p[36]=p[36]+1}}if(l===0){r=138
q=3}else if(s===l){r=6
q=3}else{r=7
q=4}n=s
m=0}},
fv(){var s,r,q,p=this
p.e2(A.b(p.Z,"_dynamicLengthTree"),A.b(p.aa.b,"maxCode"))
p.e2(A.b(p.a6,"_dynamicDistTree"),A.b(p.b2.b,"maxCode"))
p.bB.cl(p)
for(s=18;s>=3;--s){r=A.b(p.N,"_bitLengthTree")
q=B.v[s]*2+1
if(!(q<r.length))return A.a(r,q)
if(r[q]!==0)break}p.ad=A.b(p.ad,"_optimalLen")+(3*(s+1)+5+5+4)
return s},
ii(a,b,c){var s,r,q,p,o=this
o.W(a-257,5)
s=b-1
o.W(s,5)
o.W(c-4,4)
for(r=0;r<c;++r){q=A.b(o.N,"_bitLengthTree")
if(!(r<19))return A.a(B.v,r)
p=B.v[r]*2+1
if(!(p<q.length))return A.a(q,p)
o.W(q[p],3)}o.e3(A.b(o.Z,"_dynamicLengthTree"),a-1)
o.e3(A.b(o.a6,"_dynamicDistTree"),s)},
e3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="_bitLengthTree",d=a.length
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
do{i=p.a(A.b(f.N,e))
h=i.length
if(!(l<h))return A.a(i,l)
g=i[l]
if(!(j<h))return A.a(i,j)
f.W(g&65535,i[j]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=p.a(A.b(f.N,e))
j=s*2
i=l.length
if(!(j<i))return A.a(l,j)
h=l[j];++j
if(!(j<i))return A.a(l,j)
f.W(h&65535,l[j]&65535);--m}l=p.a(A.b(f.N,e))
j=l.length
if(32>=j)return A.a(l,32)
i=l[32]
if(33>=j)return A.a(l,33)
f.W(i&65535,l[33]&65535)
f.W(m-3,2)}else{l=f.N
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
hO(a,b,c){var s=this,r="_pending"
if(c===0)return
B.d.a_(A.b(s.f,"_pendingBuffer"),A.b(s.y,r),A.b(s.y,r)+c,a,b)
s.y=A.b(s.y,r)+c},
ak(a){var s=A.b(this.f,"_pendingBuffer"),r=A.b(this.y,"_pending")
this.y=r+1
if(r>>>0!==r||r>=s.length)return A.a(s,r)
s[r]=a},
bc(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.W(q&65535,b[s]&65535)},
W(a,b){var s=this,r="_numValidBits",q="_bitBuffer",p=A.b(s.a2,r),o=s.ai
if(p>16-b){p=(A.b(o,q)|B.a.C(a,A.b(s.a2,r))&65535)>>>0
s.ai=p
p=A.b(p,q)
s.ak(p)
s.ak(A.a0(p,8))
s.ai=A.a0(a,16-A.b(s.a2,r))
s.a2=A.b(s.a2,r)+(b-16)}else{s.ai=(A.b(o,q)|B.a.C(a,A.b(s.a2,r))&65535)>>>0
s.a2=A.b(s.a2,r)+b}},
bw(a,b){var s,r,q,p=this,o="_pendingBuffer",n="_lastLit",m="_dynamicLengthTree",l="_matches",k="_dynamicDistTree",j=A.b(p.f,o),i=A.b(p.ah,"_dbuf")+A.b(p.a1,n)*2,h=A.a0(a,8)
if(!(i>=0&&i<j.length))return A.a(j,i)
j[i]=h
h=A.b(p.f,o)
i=A.b(p.ah,"_dbuf")+A.b(p.a1,n)*2+1
if(!(i>=0&&i<h.length))return A.a(h,i)
h[i]=a
i=A.b(p.f,o)
h=A.b(p.ac,"_lbuf")+A.b(p.a1,n)
if(!(h>=0&&h<i.length))return A.a(i,h)
i[h]=b
p.a1=A.b(p.a1,n)+1
if(a===0){j=A.b(p.Z,m)
i=b*2
if(!(i>=0&&i<j.length))return A.a(j,i)
j[i]=j[i]+1}else{p.aS=A.b(p.aS,l)+1
j=A.b(p.Z,m)
if(!(b>=0&&b<256))return A.a(B.T,b)
i=(B.T[b]+256+1)*2
if(!(i<j.length))return A.a(j,i)
j[i]=j[i]+1
i=A.b(p.a6,k)
j=A.kg(a-1)*2
if(!(j<i.length))return A.a(i,j)
i[j]=i[j]+1}if((A.b(p.a1,n)&8191)===0&&A.b(p.y1,"_level")>2){s=A.b(p.a1,n)*8
j=A.b(p.rx,"_strStart")
i=A.b(p.k3,"_blockStart")
for(r=0;r<30;++r){h=A.b(p.a6,k)
q=r*2
if(!(q<h.length))return A.a(h,q)
s+=h[q]*(5+B.u[r])}s=A.a0(s,3)
if(A.b(p.aS,l)<A.b(p.a1,n)/2&&s<(j-i)/2)return!0}return A.b(p.a1,n)===A.b(p.ag,"_litBufferSize")-1},
dr(a,b){var s,r,q,p,o,n,m,l=this,k="_lastLit",j="_pendingBuffer",i=t.L
i.a(a)
i.a(b)
if(A.b(l.a1,k)!==0){s=0
r=null
q=null
do{i=A.b(l.f,j)
p=s*2
o=A.b(l.ah,"_dbuf")+p
if(!(o>=0&&o<i.length))return A.a(i,o)
o=i[o]
i=A.b(l.f,j)
p=A.b(l.ah,"_dbuf")+p+1
if(!(p>=0&&p<i.length))return A.a(i,p)
n=o<<8&65280|i[p]&255
p=A.b(l.f,j)
i=A.b(l.ac,"_lbuf")+s
if(!(i>=0&&i<p.length))return A.a(p,i)
m=p[i]&255;++s
if(n===0)l.bc(m,a)
else{r=B.T[m]
l.bc(r+256+1,a)
if(!(r<29))return A.a(B.V,r)
q=B.V[r]
if(q!==0)l.W(m-B.dT[r],q);--n
r=A.kg(n)
l.bc(r,b)
if(!(r<30))return A.a(B.u,r)
q=B.u[r]
if(q!==0)l.W(n-B.ch[r],q)}}while(s<A.b(l.a1,k))}l.bc(256,a)
if(513>=a.length)return A.a(a,513)
l.aG=a[513]},
eO(){var s,r,q,p,o,n=this,m="_dynamicLengthTree"
for(s=0,r=0;s<7;){q=A.b(n.Z,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
r+=q[p];++s}for(o=0;s<128;){q=A.b(n.Z,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
o+=q[p];++s}for(;s<256;){q=A.b(n.Z,m)
p=s*2
if(!(p<q.length))return A.a(q,p)
r+=q[p];++s}n.z=r>A.a0(o,2)?0:1},
ef(){var s,r=this,q="_numValidBits",p="_bitBuffer"
if(A.b(r.a2,q)===16){s=A.b(r.ai,p)
r.ak(s)
r.ak(A.a0(s,8))
r.a2=r.ai=0}else if(A.b(r.a2,q)>=8){r.ak(A.b(r.ai,p))
r.ai=A.a0(A.b(r.ai,p),8)
r.a2=A.b(r.a2,q)-8}},
di(){var s,r=this,q="_numValidBits",p="_bitBuffer"
if(A.b(r.a2,q)>8){s=A.b(r.ai,p)
r.ak(s)
r.ak(A.a0(s,8))}else if(A.b(r.a2,q)>0)r.ak(A.b(r.ai,p))
r.a2=r.ai=0},
aO(a){var s,r,q,p=this,o="_blockStart",n="_strStart",m=A.b(p.k3,o)>=0?A.b(p.k3,o):-1,l=A.b(p.rx,n)-A.b(p.k3,o)
if(A.b(p.y1,"_level")>0){if(p.z===2)p.eO()
p.aa.cl(p)
p.b2.cl(p)
s=p.fv()
r=A.a0(A.b(p.ad,"_optimalLen")+3+7,3)
q=A.a0(A.b(p.aw,"_staticLen")+3+7,3)
if(q<=r)r=q}else{q=l+5
r=q
s=0}if(l+4<=r&&m!==-1)p.e8(m,l,a)
else if(q===r){p.W(2+(a?1:0),3)
p.dr(B.G,B.ag)}else{p.W(4+(a?1:0),3)
p.ii(A.b(p.aa.b,"maxCode")+1,A.b(p.b2.b,"maxCode")+1,s+1)
p.dr(A.b(p.Z,"_dynamicLengthTree"),A.b(p.a6,"_dynamicDistTree"))}p.dM()
if(a)p.di()
p.k3=A.b(p.rx,n)
p.bY()},
fZ(a){var s,r,q=this,p="_pendingBufferSize",o="_lookAhead",n="_strStart",m="_blockStart",l=65535>A.b(q.r,p)-5?A.b(q.r,p)-5:65535
for(s=a===0;!0;){if(A.b(q.x1,o)<=1){q.cw()
if(A.b(q.x1,o)===0&&s)return 0
if(A.b(q.x1,o)===0)break}q.rx=A.b(q.rx,n)+A.b(q.x1,o)
q.x1=0
r=A.b(q.k3,m)+l
if(A.b(q.rx,n)>=r){q.x1=A.b(q.rx,n)-r
q.rx=r
q.aO(!1)}if(A.b(q.rx,n)-A.b(q.k3,m)>=A.b(q.cx,"_windowSize")-262)q.aO(!1)}s=a===4
q.aO(s)
return s?3:1},
e8(a,b,c){var s,r=this
r.W(c?1:0,3)
r.di()
r.aG=8
r.ak(b)
r.ak(A.a0(b,8))
s=(~b>>>0)+65536&65535
r.ak(s)
r.ak(A.a0(s,8))
r.hO(A.b(r.dx,"_window"),a,b)},
cw(){var s,r,q,p,o,n,m,l=this,k="_lookAhead",j="_strStart",i="_windowSize",h="_window",g=l.c
do{s=A.b(l.dy,"_actualWindowSize")-A.b(l.x1,k)-A.b(l.rx,j)
if(s===0&&A.b(l.rx,j)===0&&A.b(l.x1,k)===0)s=A.b(l.cx,i)
else if(A.b(l.rx,j)>=A.b(l.cx,i)+A.b(l.cx,i)-262){B.d.a_(A.b(l.dx,h),0,A.b(l.cx,i),A.b(l.dx,h),A.b(l.cx,i))
l.ry=l.ry-A.b(l.cx,i)
l.rx=A.b(l.rx,j)-A.b(l.cx,i)
l.k3=A.b(l.k3,"_blockStart")-A.b(l.cx,i)
r=A.b(l.go,"_hashSize")
q=r
do{p=A.b(l.fx,"_head");--r
if(!(r>=0&&r<p.length))return A.a(p,r)
o=p[r]&65535
p=A.b(l.fx,"_head")
n=o>=A.b(l.cx,i)?o-A.b(l.cx,i):0
if(!(r<p.length))return A.a(p,r)
p[r]=n}while(--q,q!==0)
r=A.b(l.cx,i)
q=r
do{p=A.b(l.fr,"_prev");--r
if(!(r>=0&&r<p.length))return A.a(p,r)
o=p[r]&65535
p=A.b(l.fr,"_prev")
n=o>=A.b(l.cx,i)?o-A.b(l.cx,i):0
if(!(r<p.length))return A.a(p,r)
p[r]=n}while(--q,q!==0)
s+=A.b(l.cx,i)}if(g.gbC())return
q=l.hR(A.b(l.dx,h),A.b(l.rx,j)+A.b(l.x1,k),s)
p=A.b(l.x1,k)+q
l.x1=p
if(A.b(p,k)>=3){p=A.b(l.dx,h)
n=A.b(l.rx,j)
if(n>>>0!==n||n>=p.length)return A.a(p,n)
n=p[n]&255
l.fy=n
n=B.a.C(A.b(n,"_insertHash"),A.b(l.k2,"_hashShift"))
p=A.b(l.dx,h)
m=A.b(l.rx,j)+1
if(!(m>=0&&m<p.length))return A.a(p,m)
l.fy=((n^p[m]&255)&A.b(l.k1,"_hashMask"))>>>0}}while(A.b(l.x1,k)<262&&!g.gbC())},
fX(a){var s,r,q,p,o,n,m,l=this,k="_lookAhead",j="_insertHash",i="_hashShift",h="_window",g="_strStart",f="_hashMask",e="_head",d="_windowMask",c="_matchLength"
for(s=a===0,r=0;!0;){if(A.b(l.x1,k)<262){l.cw()
if(A.b(l.x1,k)<262&&s)return 0
if(A.b(l.x1,k)===0)break}if(A.b(l.x1,k)>=3){q=B.a.C(A.b(l.fy,j),A.b(l.k2,i))
p=A.b(l.dx,h)
o=A.b(l.rx,g)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
l.fy=((q^p[o]&255)&A.b(l.k1,f))>>>0
o=A.b(l.fx,e)
p=A.b(l.fy,j)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(l.fr,"_prev")
o=(A.b(l.rx,g)&A.b(l.db,d))>>>0
q=A.b(l.fx,e)
n=A.b(l.fy,j)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(l.fx,e)
o=A.b(l.fy,j)
p=A.b(l.rx,g)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}if(r!==0&&(A.b(l.rx,g)-r&65535)<=A.b(l.cx,"_windowSize")-262)if(A.b(l.y2,"_strategy")!==2)l.k4=l.dO(r)
if(A.b(l.k4,c)>=3){m=l.bw(A.b(l.rx,g)-l.ry,A.b(l.k4,c)-3)
l.x1=A.b(l.x1,k)-A.b(l.k4,c)
q=A.b(l.k4,c)
p=$.ae.b
if(p==null?$.ae==null:p===$.ae)A.D(A.fx($.ae.a))
if(q<=p.b&&A.b(l.x1,k)>=3){l.k4=A.b(l.k4,c)-1
do{l.rx=A.b(l.rx,g)+1
q=B.a.C(A.b(l.fy,j),A.b(l.k2,i))
p=A.b(l.dx,h)
o=A.b(l.rx,g)+2
if(!(o>=0&&o<p.length))return A.a(p,o)
l.fy=((q^p[o]&255)&A.b(l.k1,f))>>>0
o=A.b(l.fx,e)
p=A.b(l.fy,j)
if(p>>>0!==p||p>=o.length)return A.a(o,p)
r=o[p]&65535
p=A.b(l.fr,"_prev")
o=(A.b(l.rx,g)&A.b(l.db,d))>>>0
q=A.b(l.fx,e)
n=A.b(l.fy,j)
if(n>>>0!==n||n>=q.length)return A.a(q,n)
n=q[n]
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=n
n=A.b(l.fx,e)
o=A.b(l.fy,j)
p=A.b(l.rx,g)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
n[o]=p}while(q=A.b(l.k4,c)-1,l.k4=q,q!==0)
l.rx=A.b(l.rx,g)+1}else{l.rx=A.b(l.rx,g)+A.b(l.k4,c)
l.k4=0
q=A.b(l.dx,h)
p=A.b(l.rx,g)
if(p>>>0!==p||p>=q.length)return A.a(q,p)
p=q[p]&255
l.fy=p
p=B.a.C(A.b(p,j),A.b(l.k2,i))
q=A.b(l.dx,h)
o=A.b(l.rx,g)+1
if(!(o>=0&&o<q.length))return A.a(q,o)
l.fy=((p^q[o]&255)&A.b(l.k1,f))>>>0}}else{q=A.b(l.dx,h)
p=A.b(l.rx,g)
if(p>>>0!==p||p>=q.length)return A.a(q,p)
m=l.bw(0,q[p]&255)
l.x1=A.b(l.x1,k)-1
l.rx=A.b(l.rx,g)+1}if(m)l.aO(!1)}s=a===4
l.aO(s)
return s?3:1},
fY(a2){var s,r,q,p,o,n,m,l,k=this,j="_lookAhead",i="_insertHash",h="_hashShift",g="_window",f="_strStart",e="_hashMask",d="_head",c="_windowMask",b="_matchLength",a="_prevLength",a0="_strategy",a1="_matchAvailable"
for(s=a2===0,r=0,q=null;!0;){if(A.b(k.x1,j)<262){k.cw()
if(A.b(k.x1,j)<262&&s)return 0
if(A.b(k.x1,j)===0)break}if(A.b(k.x1,j)>=3){p=B.a.C(A.b(k.fy,i),A.b(k.k2,h))
o=A.b(k.dx,g)
n=A.b(k.rx,f)+2
if(!(n>=0&&n<o.length))return A.a(o,n)
k.fy=((p^o[n]&255)&A.b(k.k1,e))>>>0
n=A.b(k.fx,d)
o=A.b(k.fy,i)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
r=n[o]&65535
o=A.b(k.fr,"_prev")
n=(A.b(k.rx,f)&A.b(k.db,c))>>>0
p=A.b(k.fx,d)
m=A.b(k.fy,i)
if(m>>>0!==m||m>=p.length)return A.a(p,m)
m=p[m]
if(!(n>=0&&n<o.length))return A.a(o,n)
o[n]=m
m=A.b(k.fx,d)
n=A.b(k.fy,i)
o=A.b(k.rx,f)
if(n>>>0!==n||n>=m.length)return A.a(m,n)
m[n]=o}p=A.b(k.k4,b)
k.x2=p
k.r1=k.ry
k.k4=2
if(r!==0){p=A.b(p,a)
o=$.ae.b
if(o==null?$.ae==null:o===$.ae)A.D(A.fx($.ae.a))
p=p<o.b&&(A.b(k.rx,f)-r&65535)<=A.b(k.cx,"_windowSize")-262}else p=!1
if(p){if(A.b(k.y2,a0)!==2)k.k4=k.dO(r)
if(A.b(k.k4,b)<=5)if(A.b(k.y2,a0)!==1)p=A.b(k.k4,b)===3&&A.b(k.rx,f)-k.ry>4096
else p=!0
else p=!1
if(p)k.k4=2}if(A.b(k.x2,a)>=3&&A.b(k.k4,b)<=A.b(k.x2,a)){l=A.b(k.rx,f)+A.b(k.x1,j)-3
q=k.bw(A.b(k.rx,f)-1-A.b(k.r1,"_prevMatch"),A.b(k.x2,a)-3)
k.x1=A.b(k.x1,j)-(A.b(k.x2,a)-1)
k.x2=A.b(k.x2,a)-2
do{p=A.b(k.rx,f)+1
k.rx=p
if(p<=l){p=B.a.C(A.b(k.fy,i),A.b(k.k2,h))
o=A.b(k.dx,g)
n=A.b(k.rx,f)+2
if(!(n>=0&&n<o.length))return A.a(o,n)
k.fy=((p^o[n]&255)&A.b(k.k1,e))>>>0
n=A.b(k.fx,d)
o=A.b(k.fy,i)
if(o>>>0!==o||o>=n.length)return A.a(n,o)
r=n[o]&65535
o=A.b(k.fr,"_prev")
n=(A.b(k.rx,f)&A.b(k.db,c))>>>0
p=A.b(k.fx,d)
m=A.b(k.fy,i)
if(m>>>0!==m||m>=p.length)return A.a(p,m)
m=p[m]
if(!(n>=0&&n<o.length))return A.a(o,n)
o[n]=m
m=A.b(k.fx,d)
n=A.b(k.fy,i)
o=A.b(k.rx,f)
if(n>>>0!==n||n>=m.length)return A.a(m,n)
m[n]=o}}while(p=A.b(k.x2,a)-1,k.x2=p,p!==0)
k.r2=0
k.k4=2
k.rx=A.b(k.rx,f)+1
if(q)k.aO(!1)}else if(A.b(k.r2,a1)!==0){p=A.b(k.dx,g)
o=A.b(k.rx,f)-1
if(!(o>=0&&o<p.length))return A.a(p,o)
q=k.bw(0,p[o]&255)
if(q)k.aO(!1)
k.rx=A.b(k.rx,f)+1
k.x1=A.b(k.x1,j)-1}else{k.r2=1
k.rx=A.b(k.rx,f)+1
k.x1=A.b(k.x1,j)-1}}if(A.b(k.r2,a1)!==0){s=A.b(k.dx,g)
p=A.b(k.rx,f)-1
if(!(p>=0&&p<s.length))return A.a(s,p)
k.bw(0,s[p]&255)
k.r2=0}s=a2===4
k.aO(s)
return s?3:1},
dO(a2){var s,r,q,p,o,n=this,m="_strStart",l="_prevLength",k="_windowSize",j="_window",i="_lookAhead",h=$.ae.bu().d,g=A.b(n.rx,m),f=A.b(n.x2,l),e=A.b(n.rx,m)>A.b(n.cx,k)-262?A.b(n.rx,m)-(A.b(n.cx,k)-262):0,d=$.ae.bu().c,c=A.b(n.db,"_windowMask"),b=A.b(n.rx,m)+258,a=A.b(n.dx,j),a0=g+f,a1=a0-1
if(!(a1>=0&&a1<a.length))return A.a(a,a1)
s=a[a1]
a1=A.b(n.dx,j)
if(!(a0>=0&&a0<a1.length))return A.a(a1,a0)
r=a1[a0]
if(A.b(n.x2,l)>=$.ae.bu().a)h=h>>>2
if(d>A.b(n.x1,i))d=A.b(n.x1,i)
q=b-258
p=null
do{c$0:{a=A.b(n.dx,j)
a0=a2+f
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
if(a[a0]===r){a=A.b(n.dx,j);--a0
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
if(a[a0]===s){a=A.b(n.dx,j)
if(!(a2>=0&&a2<a.length))return A.a(a,a2)
a=a[a2]
a0=A.b(n.dx,j)
if(!(g>=0&&g<a0.length))return A.a(a0,g)
if(a===a0[g]){a=A.b(n.dx,j)
o=a2+1
if(!(o<a.length))return A.a(a,o)
a=a[o]
a0=A.b(n.dx,j)
a1=g+1
if(!(a1<a0.length))return A.a(a0,a1)
a1=a!==a0[a1]
a=a1}else{o=a2
a=!0}}else{o=a2
a=!0}}else{o=a2
a=!0}if(a)break c$0
g+=2;++o
do{a=A.b(n.dx,j);++g
if(!(g>=0&&g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o>=0&&o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
if(a===a0[o]){a=A.b(n.dx,j);++g
if(!(g<a.length))return A.a(a,g)
a=a[g]
a0=A.b(n.dx,j);++o
if(!(o<a0.length))return A.a(a0,o)
a=a===a0[o]&&g<b}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}else a=!1}while(a)
p=258-(b-g)
if(p>f){n.ry=a2
if(p>=d){f=p
break}a=A.b(n.dx,j)
a0=q+p
a1=a0-1
if(!(a1>=0&&a1<a.length))return A.a(a,a1)
s=a[a1]
a1=A.b(n.dx,j)
if(!(a0<a1.length))return A.a(a1,a0)
r=a1[a0]
f=p}g=q}a=A.b(n.fr,"_prev")
a0=a2&c
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a2=a[a0]&65535
if(a2>e){--h
a=h!==0}else a=!1}while(a)
if(f<=A.b(n.x1,i))return f
return A.b(n.x1,i)},
hR(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gbC())return 0
s=o.c.T(c)
r=s.gu(s)
if(r===0)return 0
q=s.R()
p=q.length
if(r>p)r=p
B.d.b6(a,b,b+r,q)
o.b+=r
o.a=A.az(q,o.a)
return r},
bY(){var s=this,r="_pending",q=A.b(s.y,r)
s.d.cd(A.b(s.f,"_pendingBuffer"),q)
s.x=A.b(s.x,"_pendingOut")+q
q=A.b(s.y,r)-q
s.y=q
if(A.b(q,r)===0)s.x=0},
hd(a){switch(a){case 0:return new A.ag(0,0,0,0,0)
case 1:return new A.ag(4,4,8,4,1)
case 2:return new A.ag(4,5,16,8,1)
case 3:return new A.ag(4,6,32,32,1)
case 4:return new A.ag(4,4,16,16,2)
case 5:return new A.ag(8,16,32,32,2)
case 6:return new A.ag(8,16,128,128,2)
case 7:return new A.ag(8,32,128,256,2)
case 8:return new A.ag(32,128,258,1024,2)
case 9:return new A.ag(32,258,258,4096,2)}throw A.d(A.ad("Invalid Deflate parameter"))}}
A.ag.prototype={}
A.hQ.prototype={
hb(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="staticDesc",a="_heapMax",a0="_optimalLen",a1=A.b(c.a,"dynamicTree"),a2=A.b(c.c,b).a,a3=A.b(c.c,b).b,a4=A.b(c.c,b).c,a5=A.b(c.c,b).e
for(s=a6.be,r=0;r<=15;++r)s[r]=0
q=a6.aF
p=A.b(a6.ab,a)
if(p>>>0!==p||p>=573)return A.a(q,p)
p=q[p]*2+1
o=a1.length
if(!(p>=0&&p<o))return A.a(a1,p)
a1[p]=0
for(n=A.b(a6.ab,a)+1,p=a2!=null,m=a3.length,l=null,k=null,j=0;n<573;++n){if(!(n>=0))return A.a(q,n)
i=q[n]
h=i*2
g=h+1
if(!(g>=0&&g<o))return A.a(a1,g)
f=a1[g]*2+1
if(!(f<o))return A.a(a1,f)
r=a1[f]+1
if(r>a5){++j
r=a5}a1[g]=r
if(i>A.b(c.b,"maxCode"))continue
if(!(r<16))return A.a(s,r)
s[r]=s[r]+1
if(i>=a4){f=i-a4
if(!(f>=0&&f<m))return A.a(a3,f)
l=a3[f]}else l=0
if(!(h>=0&&h<o))return A.a(a1,h)
k=a1[h]
a6.ad=A.b(a6.ad,a0)+k*(r+l)
if(p){h=A.b(a6.aw,"_staticLen")
if(!(g<a2.length))return A.a(a2,g)
a6.aw=h+k*(a2[g]+l)}}if(j===0)return
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
j-=2}while(j>0)
for(r=a5,d=null;r!==0;--r){if(!(r>=0))return A.a(s,r)
i=s[r]
for(;i!==0;){--n
if(!(n>=0&&n<573))return A.a(q,n)
d=q[n]
if(d>A.b(c.b,"maxCode"))continue
p=d*2
m=p+1
if(!(m>=0&&m<o))return A.a(a1,m)
if(a1[m]!==r){h=A.b(a6.ad,a0)
g=a1[m]
if(!(p>=0&&p<o))return A.a(a1,p)
a6.ad=h+(r-g)*a1[p]
a1[m]=r}--i}}},
cl(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="staticDesc",d="_heapLen",c="_heapMax",b=A.b(f.a,"dynamicTree"),a=A.b(f.c,e).a,a0=A.b(f.c,e).d
a1.a0=0
a1.ab=573
for(s=b.length,r=a1.aF,q=a1.aR,p=0,o=-1;p<a0;++p){n=p*2
if(!(n<s))return A.a(b,n)
if(b[n]!==0){n=A.b(a1.a0,d)+1
a1.a0=n
if(!(n>=0&&n<573))return A.a(r,n)
r[n]=p
if(!(p<573))return A.a(q,p)
q[p]=0
o=p}else{++n
if(!(n<s))return A.a(b,n)
b[n]=0}}for(n=a!=null;A.b(a1.a0,d)<2;){m=A.b(a1.a0,d)+1
a1.a0=m
if(o<2){++o
l=o}else l=0
if(!(m>=0&&m<573))return A.a(r,m)
r[m]=l
m=l*2
if(!(m>=0&&m<s))return A.a(b,m)
b[m]=1
q[l]=0
a1.ad=A.b(a1.ad,"_optimalLen")-1
if(n){k=A.b(a1.aw,"_staticLen");++m
if(!(m<a.length))return A.a(a,m)
a1.aw=k-a[m]}}f.b=o
for(p=B.a.F(A.b(a1.a0,d),2);p>=1;--p)a1.cG(b,p)
l=a0
do{p=r[1]
n=A.b(a1.a0,d)
a1.a0=n-1
if(n>>>0!==n||n>=573)return A.a(r,n)
r[1]=r[n]
a1.cG(b,1)
j=r[1]
n=A.b(a1.ab,c)-1
a1.ab=n
if(!(n>=0&&n<573))return A.a(r,n)
r[n]=p
n=A.b(n,c)-1
a1.ab=n
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
a1.cG(b,1)
if(A.b(a1.a0,d)>=2){l=g
continue}else break}while(!0)
s=A.b(a1.ab,c)-1
a1.ab=s
q=r[1]
if(!(s>=0&&s<573))return A.a(r,s)
r[s]=q
f.hb(a1)
A.n3(b,o,a1.be)}}
A.eA.prototype={}
A.fc.prototype={
f4(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){r=a[s]
if(r>h.b)h.b=r
if(r<h.c)h.c=r}q=B.a.w(1,h.b)
h.a=new Uint32Array(q)
for(p=1,o=0,n=2;p<=h.b;){for(r=p<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(a[s]===p){for(m=o,l=0,k=0;k<p;++k){l=(l<<1|m&1)>>>0
m=m>>>1}for(j=(r|s)>>>0,k=l;k<q;k+=n){i=A.b(h.a,"table")
if(!(k>=0&&k<i.length))return A.a(i,k)
i[k]=j}++o}}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.dC.prototype={
dL(){var s,r,q=this
q.e=q.d=0
if(!q.b)return
for(s=q.a;r=A.b(s,"input"),r.b<r.c+A.b(r.e,"_length");)if(!q.hx())break},
hx(){var s,r,q,p,o=this,n="input",m=o.a
if(A.b(m,n).gbC())return!1
s=o.al(3)
r=s>>>1
switch(r){case 0:o.e=o.d=0
q=o.al(16)
p=o.al(16)
if(q!==0&&q!==(p^65535)>>>0)A.D(A.ad("Invalid uncompressed block header"))
p=A.b(m,n)
if(q>p.gu(p))A.D(A.ad("Input buffer is broken"))
o.c.jq(A.b(m,n).T(q))
break
case 1:o.dw(o.r,o.x)
break
case 2:o.hy()
break
default:throw A.d(A.ad("unknown BTYPE: "+r))}return(s&1)===0},
al(a){var s,r,q,p,o=this
if(a===0)return 0
for(s=o.a;r=o.e,r<a;){r=A.b(s,"input")
if(r.b>=r.c+A.b(r.e,"_length"))throw A.d(A.ad("input buffer is broken"))
r=A.b(s,"input")
q=r.a
r=r.b++
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
q=o.d
p=o.e
o.d=(q|B.a.C(r,p))>>>0
o.e=p+8}s=o.d
q=B.a.w(1,a)
o.d=B.a.H(s,a)
o.e=r-a
return(s&q-1)>>>0},
cH(a){var s,r,q,p,o,n,m=this,l=A.b(a.a,"table"),k=a.b
for(s=m.a;m.e<k;){r=A.b(s,"input")
if(r.b>=r.c+A.b(r.e,"_length"))break
r=A.b(s,"input")
q=r.a
r=r.b++
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
q=m.d
p=m.e
m.d=(q|B.a.C(r,p))>>>0
m.e=p+8}s=m.d
r=(s&B.a.w(1,k)-1)>>>0
if(!(r<l.length))return A.a(l,r)
o=l[r]
n=o>>>16
m.d=B.a.H(s,n)
m.e-=n
return o&65535},
hy(){var s,r,q,p,o,n,m,l,k=this,j=k.al(5)+257,i=k.al(5)+1,h=k.al(4)+4,g=new Uint8Array(19)
for(s=0;s<h;++s){if(!(s<19))return A.a(B.v,s)
r=B.v[s]
q=k.al(3)
if(!(r<19))return A.a(g,r)
g[r]=q}p=A.bB(g)
o=new Uint8Array(j)
n=new Uint8Array(i)
m=k.du(j,p,o)
l=k.du(i,p,n)
k.dw(A.bB(m),A.bB(l))},
dw(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.cH(a)
if(r>285)throw A.d(A.ad("Invalid Huffman Code "+r))
if(r===256)break
if(r<256){s.E(r&255)
continue}q=r-257
if(!(q>=0))return A.a(B.al,q)
p=B.al[q]+l.al(B.cW[q])
o=l.cH(b)
if(o<=29){n=B.d7[o]+l.al(B.u[o])
for(m=-n;p>n;){s.at(s.M(m))
p-=n}if(p===n)s.at(s.M(m))
else s.at(s.d6(m,p-n))}else throw A.d(A.ad("Illegal unused distance symbol"))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
m=A.b(s,"input")
if(--m.b<0)m.b=0}},
du(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.cH(b)
switch(p){case 16:o=3+l.al(2)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=r}break
case 17:o=3+l.al(3)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
case 18:o=11+l.al(7)
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
default:if(p>15)throw A.d(A.ad("Invalid Huffman Code: "+p))
m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=p
q=m
r=p
break}}return c}}
A.hq.prototype={}
A.hp.prototype={}
A.hr.prototype={
em(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="_windowSize",g="_hashBits",f="_hashSize",e="_litBufferSize",d=t.L
d.a(a)
s=A.fI(1,32768)
s.E(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.E(q)
p=A.oe(a)
o=A.be(a,1,null,0)
q=A.j5()
n=A.j5()
m=A.j5()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.fI(0,32768)
l=new A.eZ(o,i,q,n,m,l,k,j)
if(b==null||b===-1)b=6
if(typeof b!=="number")return b.eN()
if(b<=9)k=!1
else k=!0
if(k)A.D(A.ad("Invalid Deflate parameter"))
$.ae.b=l.hd(b)
l.Z=new Uint16Array(1146)
l.a6=new Uint16Array(122)
l.N=new Uint16Array(78)
l.cy=15
k=B.a.C(1,A.b(15,"_windowBits"))
l.cx=k
l.db=A.b(k,h)-1
l.id=15
k=B.a.C(1,A.b(15,g))
l.go=k
l.k1=A.b(k,f)-1
l.k2=B.a.F(A.b(l.id,g)+3-1,3)
k=A.b(l.cx,h)
l.dx=new Uint8Array(k*2)
k=A.b(l.cx,h)
l.fr=new Uint16Array(k)
k=A.b(l.go,f)
l.fx=new Uint16Array(k)
l.ag=16384
k=A.b(16384,e)
l.f=new Uint8Array(k*4)
l.r=A.b(l.ag,e)*4
l.ah=A.b(l.ag,e)
l.ac=3*A.b(l.ag,e)
l.y1=A.o(b)
l.x=l.y=l.y2=0
l.e=113
l.a=0
q.a=A.b(l.Z,"_dynamicLengthTree")
k=t.bb
q.c=k.a($.l6())
n.a=A.b(l.a6,"_dynamicDistTree")
n.c=k.a($.l5())
m.a=A.b(l.N,"_bitLengthTree")
m.c=k.a($.l4())
l.a2=l.ai=0
l.aG=8
l.dM()
l.ho()
l.fW(4)
l.bY()
s.at(d.a(A.G(i.c.buffer,0,i.a)))
s.au(p)
return A.G(s.c.buffer,0,s.a)},
iN(a){return this.em(a,null)}}
A.by.prototype={
eZ(a){var s,r,q,p
if(a!=null&&a.a!=null){s=a.a.length
r=A.c(new Array(s),t.a)
for(q=0;q<s;++q){p=a.a
if(!(q<p.length))return A.a(p,q)
p=p[q]
r[q]=new Uint8Array(p.subarray(0,A.aR(0,null,p.length)))}this.sev(r)}},
sev(a){this.a=t.hc.a(a)}}
A.c3.prototype={
t(a){return"BitmapCompression."+this.b}}
A.eR.prototype={
eD(){return A.cs(["offset",A.b(this.b,"offset"),"fileLength",A.b(this.a,"fileLength"),"fileType",19778],t.N,t.p)}}
A.aU.prototype={
gc9(){var s=this.r
if(s!==40)s=s===124&&this.fx===0
else s=!0
return s},
gaH(a){return Math.abs(this.e)},
d8(a,b){var s=this
if(B.b.aD(A.c([1,4,8],t.t),s.y))s.j9(a)
if(s.r===124){s.dx=a.j()
s.dy=a.j()
s.fr=a.j()
s.fx=a.j()}},
j9(a){var s=this,r=s.cy
if(r===0)r=B.a.w(1,s.y)
s.siy(A.jM(r,new A.eV(s,a,s.r===12?3:4),t.p).cZ(0))},
cI(a,b){var s,r,q,p
if(!B.a.gbD(this.e)){s=a.q()
r=a.q()
q=a.q()
p=b==null?a.q():b
return A.ar(q,r,s,this.gc9()?255:p)}else{q=a.q()
s=a.q()
r=a.q()
p=b==null?a.q():b
return A.ar(q,s,r,this.gc9()?255:p)}},
e0(a){return this.cI(a,null)},
iK(a,b){var s,r,q,p,o,n=this
t.bC.a(b)
if(n.fy!=null)if(n.y===4){s=a.q()
r=B.a.i(s,4)
q=s&15
p=n.fy
if(!(r<p.length))return A.a(p,r)
b.$1(p[r])
p=n.fy
if(!(q<p.length))return A.a(p,q)
b.$1(p[q])
return}p=n.z
if(p===B.L&&n.y===32)return b.$1(n.e0(a))
else{o=n.y
if(o===32&&p===B.M)return b.$1(n.e0(a))
else if(o===24)return b.$1(n.cI(a,255))
else throw A.d(A.f("Unsupported bpp ("+o+") or compression unsupported."))}},
fC(){switch(this.z.a){case 0:return"BI_BITFIELDS"
case 1:return"none"}},
t(a){var s=this,r=A.cs(["headerSize",s.r,"width",s.f,"height",s.gaH(s),"planes",s.x,"bpp",s.y,"file",s.d.eD(),"compression",s.fC(),"imageSize",s.Q,"xppm",s.ch,"yppm",s.cx,"totalColors",s.cy,"importantColors",s.db,"readBottomUp",!B.a.gbD(s.e),"v5redMask",A.ir(s.dx),"v5greenMask",A.ir(s.dy),"v5blueMask",A.ir(s.fr),"v5alphaMask",A.ir(s.fx)],t.N,t.K),q=new A.bk(""),p=new A.hV(" ",0,q,[],A.o8())
p.b5(r)
r=q.a
return r.charCodeAt(0)==0?r:r},
siy(a){this.fy=t.T.a(a)}}
A.eV.prototype={
$1(a){var s
A.o(a)
s=this.c===3?100:null
return this.a.cI(this.b,s)},
$S:13}
A.dg.prototype={
aB(a){var s,r=null
t.L.a(a)
if(!A.eS(A.l(a,!1,r,0)))return r
s=A.l(a,!1,r,0)
this.a=s
return this.b=A.lg(A.b(s,"_input"),r)},
a4(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.b(h.a,"_input").d=A.b(h.b.d.b,"offset")
s=h.b
r=s.f
q=B.a.i(r*s.y,3)
p=B.a.L(q,4)
if(p!==0)q+=4-p
o=A.R(r,s.gaH(s),B.e,null,null)
for(n=o.b-1,s=o.a,m=n;m>=0;--m){r=h.b.e
l=!(r===0?1/r<0:r<0)?m:n-m
r=A.b(h.a,"_input")
k=r.M(q)
r.d=r.d+(k.c-k.d)
j={}
for(j.a=0;j.a<s;i={},i.a=j.a,j=i)h.b.iK(k,new A.eU(j,o,l))}return o},
am(a){t.L.a(a)
if(!A.eS(A.l(a,!1,null,0)))return null
this.aB(a)
return this.a4(0)}}
A.eU.prototype={
$1(a){return this.b.eP(this.a.a++,this.c,a)},
$S:5}
A.f_.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.f2.prototype={}
A.dr.prototype={}
A.cg.prototype={
bE(){return this.r},
aq(a,b,c,d,e){throw A.d(A.f("B44 compression not yet supported."))},
bj(a,b,c){return this.aq(a,b,c,null,null)}}
A.ds.prototype={
gjn(a){return A.b(this.b,"type")},
f_(a){var s=this,r=a.bF()
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
default:throw A.d(A.f("EXR Invalid pixel type: "+s.gjn(s)))}}}
A.aE.prototype={
aq(a,b,c,d,e){throw A.d(A.f("Unsupported compression type"))},
bj(a,b,c){return this.aq(a,b,c,null,null)}}
A.dF.prototype={}
A.dt.prototype={
ses(a){this.c=t.T.a(a)}}
A.f4.prototype={
f0(a){var s,r,q,p,o=this,n="flags",m=A.l(a,!1,null,0)
if(m.j()!==20000630)throw A.d(A.f("File is not an OpenEXR image file."))
s=o.e=m.q()
if(s!==2)throw A.d(A.f("Cannot read version "+s+" image files."))
s=m.ap()
o.f=s
if((A.b(s,n)&4294967289)>>>0!==0)throw A.d(A.f("The file format version number's flag field contains unrecognized flags."))
if((A.b(o.f,n)&16)===0){r=A.jJ((A.b(o.f,n)&2)!==0,m)
if(r.f!=null)B.b.v(o.d,r)}else for(s=o.d;!0;){r=A.jJ((A.b(o.f,n)&2)!==0,m)
if(r.f==null)break
B.b.v(s,r)}s=o.d
q=s.length
if(q===0)throw A.d(A.f("Error reading image header"))
for(p=0;p<s.length;s.length===q||(0,A.bZ)(s),++p)s[p].j8(m)
o.i1(m)},
i1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.d,r=0;r<s.length;++r){q=s[r]
p=q.a
for(o=q.b,n=p.a,m=0;m<o.length;++m){l=o[m]
if(!n.a3(l.a)){k=q.f
k.toString
f.a=k
j=q.r
j.toString
f.b=j
i=l.a
h=A.b(l.b,"type")===0?0:3
g=8*A.b(l.c,"size")
p.by(new A.cf(i,k,j,h,g,A.jF(k*j,h,g)))}}if(q.fx)f.ia(r,a)
else f.i9(r,a)}},
ia(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=b6.d
if(!(b8<b7.length))return A.a(b7,b8)
s=b7[b8]
r=(A.b(b6.f,"flags")&16)!==0
q=s.dx
p=s.cy
o=A.i(b9,null,0)
b7=s.b
n=s.a.a
m=0
l=0
while(!0){k=s.r1
k.toString
if(!(m<k))break
j=0
while(!0){k=s.k4
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=s.k3
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=s.k2
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
c=o.M(o.j())
o.d=o.d+(c.c-c.d)
g=s.go
g.toString
b=d*g
a=s.fy
a.toString
q.toString
a0=b6.a
if(typeof a0!=="number")return A.y(a0)
a0=b6.b
if(typeof a0!=="number")return A.y(a0)
a1=q.aq(c,e*a,b,a,g)
a2=q.a
a3=q.b
a4=a1.length
a5=b7.length
a6=0
a7=0
while(!0){if(a7<a3){g=b6.b
if(typeof g!=="number")return A.y(g)
g=b<g}else g=!1
if(!g)break
for(a8=0;a8<a5;++a8){if(!(a8<b7.length))return A.a(b7,a8)
a9=b7[a8]
g=n.p(0,a9.a).f.buffer
b0=new Uint8Array(g,0)
if(a6>=a4)break
g=s.fy
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
i9(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this.d
if(!(b0<a9.length))return A.a(a9,b0)
s=a9[b0]
r=(A.b(this.f,"flags")&16)!==0
q=s.dx
a9=s.cy
if(0>=a9.length)return A.a(a9,0)
p=a9[0]
o=s.dy
a9=s.b
n=a9.length
m=new Uint32Array(n)
l=A.i(b1,null,0)
for(k=p.length,j=s.a.a,i=q!=null,h=0,g=0;g<k;++g){l.d=p[g]
if(r)if(l.j()!==b0)throw A.d(A.f("Invalid Image Data"))
f=l.j()
e=$.z()
e[0]=f
f=$.N()
if(0>=f.length)return A.a(f,0)
f[0]
e[0]=l.j()
d=l.M(f[0])
l.d=l.d+(d.c-d.d)
c=i?q.bj(d,0,h):d.R()
b=c.length
a=a9.length
o.toString
a0=0
while(!0){if(a0<o){f=this.b
if(typeof f!=="number")return A.y(f)
f=h<f}else f=!1
if(!f)break
f=s.fr
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
m[a2]=e+1
a7=a1+1
if(!(a1>=0&&a1<b))return A.a(c,a1)
a8=c[a1]
if(!(e<f))return A.a(a4,e)
a4[e]=a8}++a5}}++a0;++h}}}}
A.du.prototype={
f1(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="chromaticities",a6="dataWindow",a7="Unknown LevelMode format.",a8="_bytesPerLine"
for(s=a4.c,r=t.t,q=t.L,p=a4.b;!0;){o=b0.bF()
if(o.length===0)break
b0.bF()
n=b0.M(b0.j())
b0.d=b0.d+(n.c-n.d)
s.h(0,o,new A.dr())
switch(o){case"channels":for(;!0;){m=new A.ds()
m.f_(n)
if(m.a==null)break
B.b.v(p,m)}break
case"chromaticities":l=new Float32Array(8)
a4.ch=l
l=A.b(l,a5)
k=n.j()
j=$.z()
j[0]=k
k=$.b8()
if(0>=k.length)return A.a(k,0)
i=k[0]
if(0>=l.length)return A.a(l,0)
l[0]=i
i=A.b(a4.ch,a5)
j[0]=n.j()
l=k[0]
if(1>=i.length)return A.a(i,1)
i[1]=l
l=A.b(a4.ch,a5)
j[0]=n.j()
i=k[0]
if(2>=l.length)return A.a(l,2)
l[2]=i
i=A.b(a4.ch,a5)
j[0]=n.j()
l=k[0]
if(3>=i.length)return A.a(i,3)
i[3]=l
l=A.b(a4.ch,a5)
j[0]=n.j()
i=k[0]
if(4>=l.length)return A.a(l,4)
l[4]=i
i=A.b(a4.ch,a5)
j[0]=n.j()
l=k[0]
if(5>=i.length)return A.a(i,5)
i[5]=l
l=A.b(a4.ch,a5)
j[0]=n.j()
i=k[0]
if(6>=l.length)return A.a(l,6)
l[6]=i
i=A.b(a4.ch,a5)
j[0]=n.j()
k=k[0]
if(7>=i.length)return A.a(i,7)
i[7]=k
break
case"compression":l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a4.cx=k
if(k>7)throw A.d(A.f("EXR Invalid compression type"))
break
case"dataWindow":l=n.j()
k=$.z()
k[0]=l
l=$.N()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
i=l[0]
k[0]=n.j()
h=l[0]
k[0]=n.j()
a4.sfc(q.a(A.c([j,i,h,l[0]],r)))
l=J.n(A.b(a4.e,a6),2)
h=J.n(A.b(a4.e,a6),0)
if(typeof l!=="number")return l.cf()
if(typeof h!=="number")return A.y(h)
a4.sd0(0,l-h+1)
h=J.n(A.b(a4.e,a6),3)
l=J.n(A.b(a4.e,a6),1)
if(typeof h!=="number")return h.cf()
if(typeof l!=="number")return A.y(l)
a4.saH(0,h-l+1)
break
case"displayWindow":l=n.j()
k=$.z()
k[0]=l
l=$.N()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
i=l[0]
k[0]=n.j()
h=l[0]
k[0]=n.j()
a4.siM(A.c([j,i,h,l[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":l=n.j()
$.z()[0]=l
l=$.b8()
if(0>=l.length)return A.a(l,0)
l[0]
break
case"screenWindowCenter":l=n.j()
k=$.z()
k[0]=l
l=$.b8()
if(0>=l.length)return A.a(l,0)
l[0]
k[0]=n.j()
l[0]
break
case"screenWindowWidth":l=n.j()
$.z()[0]=l
l=$.b8()
if(0>=l.length)return A.a(l,0)
l[0]
break
case"tiles":a4.fy=n.j()
a4.go=n.j()
l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a4.id=k&15
a4.k1=B.a.i(k,4)&15
break
case"type":g=n.bF()
if(g!=="deepscanline")if(g!=="deeptile")throw A.d(A.f("EXR Invalid type: "+g))
break
default:break}}if(a4.fx){s=J.n(A.b(a4.e,a6),0)
r=J.n(A.b(a4.e,a6),2)
q=J.n(A.b(a4.e,a6),1)
p=J.n(A.b(a4.e,a6),3)
switch(a4.id){case 0:f=1
break
case 1:s=Math.max(r-s+1,p-q+1)
r=a4.k1
A.o(s)
f=(r===0?a4.bX(s):a4.bR(s))+1
break
case 2:e=r-s+1
f=(a4.k1===0?a4.bX(e):a4.bR(e))+1
break
default:A.D(A.f(a7))
f=0}a4.k4=f
s=J.n(A.b(a4.e,a6),0)
r=J.n(A.b(a4.e,a6),2)
q=J.n(A.b(a4.e,a6),1)
p=J.n(A.b(a4.e,a6),3)
switch(a4.id){case 0:f=1
break
case 1:s=Math.max(r-s+1,p-q+1)
r=a4.k1
A.o(s)
f=(r===0?a4.bX(s):a4.bR(s))+1
break
case 2:d=p-q+1
f=(a4.k1===0?a4.bX(d):a4.bR(d))+1
break
default:A.D(A.f(a7))
f=0}a4.r1=f
if(a4.id!==2)a4.r1=1
s=a4.k4
s.toString
a4.shr(a4.dk(s,J.n(A.b(a4.e,a6),0),J.n(A.b(a4.e,a6),2),a4.fy,a4.k1))
s=a4.r1
s.toString
a4.shs(a4.dk(s,J.n(A.b(a4.e,a6),1),J.n(A.b(a4.e,a6),3),a4.go,a4.k1))
s=a4.fA()
a4.r2=s
s=A.b(s,"_bytesPerPixel")
r=a4.fy
r.toString
r=s*r
a4.rx=r
a4.dx=A.jC(a4.cx,a4,r,a4.go)
b1.a=b1.b=0
r=a4.k4
r.toString
s=a4.r1
s.toString
a4.sdU(A.iS(r*s,new A.f5(b1,a4),!0,t.bv))}else{s=a4.r
s.toString
a4.db=new Uint32Array(s+1)
for(s=p.length,c=0;c<p.length;p.length===s||(0,A.bZ)(p),++c){b=p[c]
r=A.b(b.c,"size")
q=a4.f
q.toString
a=B.a.V(r*q,A.b(b.e,"xSampling"))
a0=0
while(!0){r=a4.r
r.toString
if(!(a0<r))break
if(B.a.L(a0+J.n(A.b(a4.e,a6),1),A.b(b.f,"ySampling"))===0){r=A.b(a4.db,a8)
if(!(a0<r.length))return A.a(r,a0)
r[a0]=r[a0]+a}++a0}}a1=0
a0=0
while(!0){s=a4.r
s.toString
if(!(a0<s))break
s=A.b(a4.db,a8)
if(!(a0<s.length))return A.a(s,a0)
a1=Math.max(a1,s[a0]);++a0}s=A.jC(a4.cx,a4,a1,null)
a4.dx=s
a4.dy=s.bE()
s=A.b(a4.db,a8).length
a4.fr=new Uint32Array(s)
for(a2=0,a3=0;a3<=A.b(a4.db,a8).length-1;++a3){s=a4.dy
s.toString
if(B.a.L(a3,s)===0)a2=0
s=a4.fr
if(!(a3<s.length))return A.a(s,a3)
s[a3]=a2
s=A.b(a4.db,a8)
if(!(a3<s.length))return A.a(s,a3)
a2+=s[a3]}s=a4.r
s.toString
r=a4.dy
r.toString
r=B.a.V(s+r,r)
a4.sdU(A.c([new Uint32Array(r-1)],t.hh))}},
bX(a){var s
for(s=0;a>1;){++s
a=B.a.i(a,1)}return s},
bR(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.i(a,1)}return s+r},
fA(){var s,r,q,p
for(s=this.b,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.bZ)(s),++p)q+=A.b(s[p].c,"size")
return q},
dk(a,b,c,d,e){var s,r,q,p,o,n,m=J.a3(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.w(1,q)
o=B.a.V(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.V(n+d-1,d)}return m},
siM(a){t.T.a(a)},
sfc(a){this.e=t.L.a(a)},
sd0(a,b){this.f=A.kr(b)},
saH(a,b){this.r=A.kr(b)},
sdU(a){this.cy=t.gZ.a(a)},
shr(a){this.k2=t.m.a(a)},
shs(a){this.k3=t.m.a(a)}}
A.f5.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.k2,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.k3
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.k4){m.b=0
m.a=r+1}return q},
$S:30}
A.ch.prototype={
j8(a){var s,r,q,p,o,n=this
if(n.fx)for(s=0;s<n.cy.length;++s){r=0
while(!0){q=n.cy
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
q[r]=a.cV();++r}}else{q=n.cy
if(0>=q.length)return A.a(q,0)
p=q[0].length
for(s=0;s<p;++s){q=n.cy
if(0>=q.length)return A.a(q,0)
q=q[0]
o=a.cV()
if(!(s<q.length))return A.a(q,s)
q[s]=o}}}}
A.dG.prototype={
f5(a,b,c){var s,r,q,p=this,o=a.b.length,n=J.a3(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.d4()
p.sfd(t.q.a(n))
r=p.x
r.toString
q=B.a.F(r*p.y,2)
p.Q=new Uint16Array(q)},
bE(){return this.y},
aq(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="_channelData",a5="ySampling",a6="size",a7="nx"
if(b1==null)b1=a3.c.f
if(b2==null)b2=a3.c.dy
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
q=J.n(A.b(a3.z,a4),l)
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
q.f=B.a.F(A.b(k.c,a6),2)
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
a2=a3.ih(f,a1)
A.lu(a8,a8.j(),a3.Q,m)
for(l=0;l<n;++l){q=J.n(A.b(a3.z,a4),l)
q.toString
for(b=0;b<A.b(q.f,a6);++b){p=a3.Q
p.toString
A.lx(p,A.b(q.a,"start")+b,A.b(q.c,a7),A.b(q.f,a6),A.b(q.d,"ny"),A.b(q.c,a7)*A.b(q.f,a6),a2)}}q=a3.Q
q.toString
a3.fq(a1,q,m)
q=a3.r
if(q==null){q=a3.x
q.toString
q=a3.r=A.bh(!1,q*a3.y+73728)}q.a=0
for(;b0<=r;++b0)for(l=0;l<n;++l){q=J.n(A.b(a3.z,a4),l)
q.toString
if(B.a.L(b0,A.b(q.e,"ys"))!==0)continue
for(a9=A.b(q.c,a7)*A.b(q.f,a6);a9>0;--a9){p=a3.r
p.toString
c=a3.Q
c.toString
a0=A.b(q.b,"end")
q.b=a0+1
if(a0>>>0!==a0||a0>=c.length)return A.a(c,a0)
p.eJ(c[a0])}}q=a3.r
return A.G(q.c.buffer,0,q.a)},
bj(a,b,c){return this.aq(a,b,c,null,null)},
fq(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
ih(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
sfd(a){this.z=t.q.a(a)}}
A.d4.prototype={}
A.dH.prototype={
bE(){return this.y},
aq(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.r.bz(A.be(t.L.a(a4.R()),1,null,0),!1),a3=a1.z
if(a3==null){a3=a1.x
a3.toString
a3=a1.z=A.bh(!1,a1.y*a3)}a3.a=0
s=A.c([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.G(r.buffer,0,null)
if(a7==null)a7=a1.c.f
if(a8==null)a8=a1.c.dy
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
if(B.a.L(a6,A.b(h.f,"ySampling"))!==0)continue
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
for(a0=0;a0<4;++a0){g=a1.z
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
for(a0=0;a0<2;++a0){g=a1.z
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
for(a0=0;a0<4;++a0){g=a1.z
g.toString
if(!(a0<n))return A.a(q,a0)
g.E(q[a0])}}break}}a3=a1.z
return A.G(a3.c.buffer,0,a3.a)},
bj(a,b,c){return this.aq(a,b,c,null,null)}}
A.dI.prototype={
bE(){return 1},
aq(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bh(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.f
if(a4==null)a4=c.c.dy
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
$.T()[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.E(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.E(q[p])}}l=A.G(a.c.buffer,0,a.a)
for(k=l.length,j=1;j<k;++j)l[j]=l[j-1]+l[j]-128
b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.F(k+1,2)
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
bj(a,b,c){return this.aq(a,b,c,null,null)}}
A.ci.prototype={
bE(){return this.x},
aq(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.r.bz(A.be(t.L.a(a.R()),1,null,0),!1)
if(d==null)d=f.c.f
if(a0==null)a0=f.c.dy
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
q=f.y
if(q==null||q.length!==o)q=f.y=new Uint8Array(o)
p=B.a.F(o+1,2)
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
bj(a,b,c){return this.aq(a,b,c,null,null)}}
A.f3.prototype={
a4(a){var s=this.a
if(s==null)return null
s=s.d
if(!(a<s.length))return A.a(s,a)
return A.oj(s[a].a,1)},
am(a){var s
t.L.a(a)
s=new A.f4(A.c([],t.dd))
s.f0(a)
this.a=s
return this.a4(0)}}
A.f8.prototype={
d3(a,b,c,d){var s,r=a*3,q=this.d,p=q.length
if(!(r<p))return A.a(q,r)
q[r]=b
s=r+1
if(!(s<p))return A.a(q,s)
q[s]=c
s=r+2
if(!(s<p))return A.a(q,s)
q[s]=d}}
A.ce.prototype={
f2(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.k()
k.b=a.k()
k.c=a.k()
k.d=a.k()
s=a.q()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.jE(B.a.w(1,(s&7)+1))
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
q.d3(r,o,n,p[l])}}k.y=a.d-a.b}}
A.dJ.prototype={}
A.dw.prototype={}
A.f9.prototype={
aB(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.b=A.l(t.L.a(a),!1,null,0)
i.a=new A.dw(A.c([],t.b))
if(!i.dF())return null
try{for(;o=i.b,n=o.d,n<o.c;){m=o.a
l=o.d=n+1
k=m.length
if(!(n>=0&&n<k))return A.a(m,n)
s=m[n]
switch(s){case 44:r=i.e5()
if(r==null){o=i.a
return o}B.b.v(i.a.r,r)
break
case 33:o.d=l+1
if(!(l>=0&&l<k))return A.a(m,l)
q=m[l]
if(J.aT(q,255)){o=i.b
n=o.a
m=o.d++
if(!(m>=0&&m<n.length))return A.a(n,m)
if(o.K(n[m])==="NETSCAPE2.0"){n=o.a
m=o.d
l=o.d=m+1
k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(m===3&&l===1)o.k()}else i.c5()}else if(J.aT(q,249)){o=i.b
o.toString
i.hY(o)}else i.c5()
break
case 59:o=i.a
return o
default:break}}}catch(j){p=A.ab(j)
A.eI(p)}return i.a},
hY(a){var s,r,q,p,o
a.q()
s=a.q()
a.k()
r=a.q()
a.q()
B.a.i(s,2)
q=a.b7(1,0)
p=q.a
q=q.d
if(!(q>=0&&q<p.length))return A.a(p,q)
if(p[q]===44){++a.d
o=this.e5()
if(o==null)return
if((s&1)!==0){q=o.f
if(q!=null)q.c=r
else{q=this.a.e
if(q!=null)q.c=r}}B.b.v(this.a.r,o)}},
a4(a){var s,r,q,p=this,o=p.b
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
o.toString
o.d=A.b(q.y,"_inputPosition")
o=p.a.r
if(!(a<o.length))return A.a(o,a)
return p.fP(o[a])},
am(a){if(this.aB(t.L.a(a))==null)return null
return this.a4(0)},
e5(){var s,r=this.b
if(r.d>=r.c)return null
s=new A.dJ()
s.f2(r);++this.b.d
this.c5()
return s},
fP(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.d==null){h.d=new Uint8Array(256)
h.e=new Uint8Array(4095)
h.f=new Uint8Array(4096)
h.r=new Uint32Array(4096)}s=h.x=h.b.q()
r=B.a.C(1,s)
h.fx=r;++r
h.fr=r
h.dy=r+1;++s
h.dx=s
h.db=B.a.C(1,s)
h.ch=0
h.cy=4098
h.z=h.Q=0
h.d[0]=0
s=h.r
s.toString
B.n.an(s,0,4096,4098)
s=A.b(a.c,"width")
r=A.b(a.d,"height")
q=A.b(a.a,"x")
p=h.a
o=p.a
if(typeof o!=="number")return A.y(o)
if(q+s<=o){q=A.b(a.b,"y")
p=h.a
o=p.b
if(typeof o!=="number")return A.y(o)
o=q+r>o
q=o}else q=!0
if(q)return null
n=a.f
n=n!=null?n:p.e
h.y=s*r
m=A.R(s,r,B.e,null,null)
l=new Uint8Array(s)
if(A.b(a.e,"interlaced")){s=A.b(a.b,"y")
for(r=s+r,k=0,j=0;k<4;++k)for(i=s+B.aO[k];i<r;i+=B.bb[k],++j){if(!h.dG(l))return m
h.ed(m,i,n,l)}}else for(i=0;i<r;++i){if(!h.dG(l))return m
h.ed(m,i,n,l)}return m},
ed(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(c!=null)for(s=d.length,r=c.d,q=r.length,p=a.y,o=b*a.a,n=p.length,m=0;m<s;++m){l=d[m]
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
g=B.c.l(B.a.n(j,0,255))
h=B.c.l(B.a.n(h,0,255))
i=B.c.l(B.a.n(i,0,255))
l=B.c.l(B.a.n(l,0,255))
f=o+m
if(!(f>=0&&f<n))return A.a(p,f)
p[f]=(g<<24|h<<16|i<<8|l)>>>0}},
dF(){var s,r,q,p,o,n,m,l,k,j=this,i=j.b.K(6)
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
s.e=A.jE(B.a.w(1,(r&7)+1))
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
s.d3(q,n,m,o[k])}}j.a.toString
return!0},
dG(a){var s=this,r=s.y
r.toString
s.y=r-a.length
if(!s.fV(a))return!1
if(s.y===0)s.c5()
return!0},
c5(){var s,r,q,p=this.b
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
fV(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_stack",f="_suffix",e=h.ch
if(e>4095)return!1
s=a.length
if(e!==0){r=0
while(!0){if(!(e!==0&&r<s))break
q=r+1
e=A.b(h.e,g)
p=--h.ch
if(!(p>=0&&p<e.length))return A.a(e,p)
e=e[p]
if(!(r<s))return A.a(a,r)
a[r]=e
e=p
r=q}}else r=0
for(o=null;r<s;){n=h.cx=h.fU()
if(n==null)return!1
e=h.fr
if(n===e)return!1
p=h.fx
if(n===p){for(p=h.r,m=0;m<=4095;++m)p[m]=4098
h.dy=e+1
e=h.x+1
h.dx=e
h.db=B.a.C(1,e)
h.cy=4098}else{if(n<p){q=r+1
if(!(r>=0))return A.a(a,r)
a[r]=n
r=q}else{e=h.r
e.toString
if(n>>>0!==n||n>=4096)return A.a(e,n)
if(e[n]===4098)if(n===h.dy-2){o=h.cy
e=A.b(h.f,f)
p=h.dy-2
l=A.b(h.e,g)
k=h.ch++
j=h.cB(h.r,h.cy,h.fx)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j
if(!(p>=0&&p<e.length))return A.a(e,p)
e[p]=j}else return!1
else o=n
m=0
while(!0){i=m+1
if(!(m<=4095&&o>h.fx&&o<=4095))break
e=A.b(h.e,g)
p=h.ch++
l=A.b(h.f,f)
if(!(o>=0&&o<l.length))return A.a(l,o)
l=l[o]
if(!(p>=0&&p<e.length))return A.a(e,p)
e[p]=l
l=h.r
l.toString
if(!(o<4096))return A.a(l,o)
o=l[o]
m=i}if(i>=4095||o>4095)return!1
e=A.b(h.e,g)
p=h.ch++
if(!(p>=0&&p<e.length))return A.a(e,p)
e[p]=o
while(!0){if(!(h.ch!==0&&r<s))break
q=r+1
e=A.b(h.e,g)
p=--h.ch
if(!(p>=0&&p<e.length))return A.a(e,p)
p=e[p]
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=p
r=q}}e=h.cy
if(e!==4098){p=h.r
p.toString
l=h.dy-2
if(!(l>=0&&l<4096))return A.a(p,l)
l=p[l]===4098
p=l}else p=!1
if(p){p=h.r
p.toString
l=h.dy-2
if(!(l>=0&&l<4096))return A.a(p,l)
p[l]=e
e=h.cx
p=h.f
if(e===l){e=A.b(p,f)
p=h.dy-2
l=h.cB(h.r,h.cy,h.fx)
if(!(p>=0&&p<e.length))return A.a(e,p)
e[p]=l}else{e=A.b(p,f)
p=h.dy-2
l=h.r
k=h.cx
k.toString
k=h.cB(l,k,h.fx)
if(!(p>=0&&p<e.length))return A.a(e,p)
e[p]=k}}e=h.cx
e.toString
h.cy=e}}return!0},
fU(){var s,r,q,p,o=this
if(o.dx>12)return null
for(;s=o.Q,r=o.dx,s<r;){s=o.fu()
s.toString
r=o.z
q=o.Q
o.z=(r|B.a.C(s,q))>>>0
o.Q=q+8}q=o.z
if(!(r>=0&&r<13))return A.a(B.aa,r)
p=B.aa[r]
o.z=B.a.H(q,r)
o.Q=s-r
s=o.dy
if(s<4097){++s
o.dy=s
s=s>o.db&&r<12}else s=!1
if(s){o.db=o.db<<1>>>0
o.dx=r+1}return q&p},
cB(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
fu(){var s,r,q=this,p=q.d,o=p[0]
if(o===0){p[0]=q.b.q()
p=q.d
o=p[0]
if(o===0)return null
B.d.b6(p,1,1+o,q.b.T(o).R())
p=q.d
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.ff.prototype={
a4(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.a
if(b3!=null){s=this.b
s=s==null||b4>=s.e}else s=!0
if(s)return b2
s=this.b.f
if(!(b4<s.length))return A.a(s,b4)
r=s[b4]
s=b3.a
b3=b3.b+r.e
q=r.d
p=J.eM(s,b3,b3+q)
o=new A.e4()
if(o.bi(p))return o.am(p)
n=A.bh(!1,14)
n.eJ(19778)
n.au(q)
n.au(0)
n.au(0)
b3=A.l(p,!1,b2,0)
s=A.jt(A.l(A.G(n.c.buffer,0,n.a),!1,b2,0))
q=b3.j()
m=b3.j()
l=$.z()
l[0]=m
m=$.N()
if(0>=m.length)return A.a(m,0)
k=m[0]
l[0]=b3.j()
j=m[0]
i=b3.k()
h=b3.k()
g=b3.j()
f=A.cs([0,B.M,3,B.L],t.p,t.O).p(0,g)
if(f==null)A.D(A.f("Bitmap compression "+g+" is not supported yet."))
g=b3.j()
l[0]=b3.j()
e=m[0]
l[0]=b3.j()
m=m[0]
l=b3.j()
d=new A.dz(s,j,k,q,i,h,f,g,e,m,l,b3.j())
d.d8(b3,s)
if(q!==40&&i!==1)return b2
c=l===0&&h<=8?40+4*B.a.w(1,h):40+4*l
s.b=c
n.a-=4
n.au(c)
b=A.l(p,!1,b2,0)
a=new A.f_()
a.a=b
a.b=d
a0=a.a4(0)
if(h>=32)return a0
a1=32-B.a.L(k,32)
a2=B.a.F(a1===32?k:k+a1,8)
for(b3=a0.y,s=a0.a,q=b3.length,m=a0.b-1,l=1/j<0,i=j<0,j=j===0,a3=0;a3<B.a.F(A.aU.prototype.gaH.call(d,d),2);++a3){a4=!(j?l:i)?a3:m-a3
a5=b.M(a2)
b.d=b.d+(a5.c-a5.d)
for(h=a4*s,a6=0;a6<k;){g=a5.a
e=a5.d++
if(!(e>=0&&e<g.length))return A.a(g,e)
e=g[e]
a7=7
while(!0){if(!(a7>-1&&a6<k))break
if((e&B.a.C(1,a7))>>>0!==0){g=h+a6
a8=B.c.l(B.a.n(0,0,255))
a9=B.c.l(B.a.n(0,0,255))
b0=B.c.l(B.a.n(0,0,255))
b1=B.c.l(B.a.n(0,0,255))
if(!(g>=0&&g<q))return A.a(b3,g)
b3[g]=(a8<<24|a9<<16|b0<<8|b1)>>>0}++a6;--a7}}}return a0},
am(a){var s=A.l(t.L.a(a),!1,null,0)
this.a=s
s=A.jH(s)
this.b=s
if(s==null)return null
return this.a4(0)}}
A.fg.prototype={}
A.fh.prototype={
$1(a){var s
A.o(a)
s=this.a
s.q()
s.q()
s.q();++s.d
s.k()
s.k()
return new A.bC(s.j(),s.j())},
$S:31}
A.bC.prototype={}
A.dz.prototype={
gaH(a){return B.a.F(A.aU.prototype.gaH.call(this,this),2)},
gc9(){return this.r===40&&this.y===32?!1:A.aU.prototype.gc9.call(this)}}
A.dk.prototype={}
A.fr.prototype={}
A.al.prototype={
sfe(a){this.r=t.h0.a(a)}}
A.fs.prototype={
jp(a){var s,r,q,p,o,n,m,l=this,k="input",j=A.l(t.L.a(a),!0,null,0)
l.a=j
s=A.b(j,k).b7(2,0)
j=s.a
r=s.d
q=j.length
if(!(r>=0&&r<q))return A.a(j,r)
if(j[r]===255){++r
if(!(r<q))return A.a(j,r)
r=j[r]!==216
j=r}else j=!0
if(j)return!1
if(l.ba()!==216)return!1
p=l.ba()
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
break}p=l.ba()}return o&&n},
j6(a){var s,r,q,p,o,n,m,l,k=this
k.a=A.l(t.L.a(a),!0,null,0)
k.hP()
if(k.y.length!==1)throw A.d(A.f("Only single frame JPEGs supported"))
for(s=k.ch,r=0;q=k.d,p=q.Q,r<p.length;++r){o=q.z.p(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.fw(p,o)
q=q===1&&n===2?1:0
B.b.v(s,new A.dk(p,q,m===1&&l===2?1:0))}},
hP(){var s,r,q,p,o,n=this,m="input"
if(n.ba()!==216)throw A.d(A.f("Start Of Image marker not found."))
s=n.ba()
while(!0){if(s!==217){r=A.b(n.a,m)
r=r.d<r.c}else r=!1
if(!r)break
q=A.b(n.a,m).k()
if(q<2)A.D(A.f("Invalid Block"))
r=A.b(n.a,m)
p=r.M(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:n.hQ(s,p)
break
case 219:n.hT(p)
break
case 192:case 193:case 194:n.hX(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.d(A.f("Unhandled frame type "+B.a.bH(s,16)))
case 196:n.hS(p)
break
case 221:n.e=p.k()
break
case 218:n.i8(p)
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
break}if(s!==0)throw A.d(A.f("Unknown JPEG marker "+B.a.bH(s,16)))
break}s=n.ba()}},
ba(){var s,r=this,q="input",p=A.b(r.a,q)
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
hW(a,b,c){var s,r,q,p,o,n,m=a.c,l=m-a.d
try{switch(b){case 6:o=a.q()
$.T()[0]=o
o=$.Z()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 1:case 7:o=a.q()
return o
case 2:o=a.K(1)
return o
case 3:o=a.k()
return o
case 4:o=a.j()
return o
case 5:case 10:s=a.b7(8,c)
o=s.j()
n=$.z()
n[0]=o
o=$.N()
if(0>=o.length)return A.a(o,0)
r=o[0]
n[0]=s.j()
q=o[0]
if(J.aT(q,0))return 0
o=r
n=q
if(typeof o!=="number")return o.js()
if(typeof n!=="number")return A.y(n)
return o/n
case 8:o=a.k()
$.Y()[0]=o
o=$.a2()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 9:o=a.j()
$.z()[0]=o
o=$.N()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 11:o=a.j()
$.z()[0]=o
o=$.b8()
if(0>=o.length)return A.a(o,0)
o=o[0]
return o
case 12:o=a.b7(8,c).cc()
return o
default:return 0}}finally{o=l
n=a.d
if(typeof o!=="number")return o.cf()
p=o-(m-n)
m=p
if(typeof m!=="number")return m.eN()
if(m<4){m=p
if(typeof m!=="number")return A.y(m)
a.d=n+A.o(4-m)}}},
hV(a){var s,r,q,p,o,n,m,l,k=a.k()
for(s=this.r.b,r=a.c,q=0;q<k;++q){p=a.k()
o=a.k()
n=a.j()
if(o-1>=12)continue
if(n>65536)continue
if(!(o<13))return A.a(B.ah,o)
m=B.ah[o]
if(m>4){l=a.j()
if(l+m>r-a.d)continue}else l=0
s.h(0,p,this.hW(a,o,l))}},
hU(a){var s,r,q,p,o=this.r
if(o.a==null)o.sev(A.c([],t.a))
s=B.d.cg(a.R(),0)
o=o.a
o.toString
B.b.v(o,s)
if(a.j()!==1165519206)return
if(a.k()!==0)return
r=a.e
q=a.K(2)
if(q==="II")a.e=!1
else if(q==="MM")a.e=!0
else return
a.d+=2
p=a.j()
if(p<8||p>16)if(p>a.c-a.d-16){a.e=r
return}if(p>8)a.d+=p-8
this.hV(a)
a.e=r},
hQ(a,b){var s,r,q,p,o=this,n="jfif",m=b
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
if(s){s=new A.fu()
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
m.b7(14+3*q*r,14)}}else if(a===225)o.hU(m)
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
if(s){s=new A.fr()
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
s.d=r[q]}}else if(a===254)try{m.jb()}catch(p){A.aa(p)}},
hT(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.x;q=a.d,p=q<s,p;){p=a.a
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
hX(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.d(A.f("Duplicate JPG frame data found."))
s=j.d=new A.dQ(A.W(t.p,t.d2),A.c([],t.t))
s.b=a===194
s.c=b.q()
s=j.d
s.toString
s.d=b.k()
s=j.d
s.toString
s.e=b.k()
r=b.q()
for(s=j.x,q=0;q<r;++q){p=b.a
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
B.b.v(j.d.Q,o)
j.d.z.h(0,o,new A.al(k&15,n&15,s,l))}j.d.j4()
B.b.v(j.y,j.d)},
hS(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.Q,q=this.z;p=a.d,p<s;){o=a.a
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
B.b.h(h,m,this.fz(l,i))}},
i8(a){var s,r,q,p,o,n,m,l=this,k=a.q()
if(k<1||k>4)throw A.d(A.f("Invalid SOS block"))
s=A.iS(k,new A.ft(l,a),!0,t.d2)
r=a.q()
q=a.q()
p=a.q()
o=B.a.i(p,4)
n=A.b(l.a,"input")
m=l.d
o=new A.dR(n,m,s,l.e,r,q,o&15,p&15)
o.f=A.b(m.x,"mcusPerLine")
o.r=m.b
o.aE()},
fz(a,b){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.e8),h=16
while(!0){if(!(h>0&&a[h-1]===0))break;--h}B.b.v(i,new A.bQ([]))
if(0>=i.length)return A.a(i,0)
s=i[0]
for(r=b.length,q=0,p=null,o=0;o<h;){for(n=0;n<a[o];++n){if(0>=i.length)return A.a(i,-1)
s=i.pop()
m=s.a
l=m.length
k=s.b
if(l<=k)B.b.su(m,k+1)
l=s.b
if(!(q>=0&&q<r))return A.a(b,q)
B.b.h(m,l,b[q])
for(;m=s.b,m>0;){if(0>=i.length)return A.a(i,-1)
s=i.pop()}s.b=m+1
B.b.v(i,s)
for(;i.length<=o;s=p){m=[]
p=new A.bQ(m)
B.b.v(i,p)
l=s.a
k=l.length
j=s.b
if(k<=j)B.b.su(l,j+1)
B.b.h(l,s.b,m)}++q}++o
if(o<h){m=[]
p=new A.bQ(m)
B.b.v(i,p)
l=s.a
k=l.length
j=s.b
if(k<=j)B.b.su(l,j+1)
B.b.h(l,s.b,m)
s=p}}if(0>=i.length)return A.a(i,0)
return i[0].a},
fw(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.b(a5.e,"blocksPerLine"),b=A.b(a5.f,"blocksPerColumn"),a=c<<3>>>0,a0=new Int32Array(64),a1=new Uint8Array(64),a2=b*8,a3=A.S(a2,null,!1,t.aD)
for(s=a5.c,r=a5.d,q=t.i,p=0,o=0;o<b;++o){n=o<<3>>>0
for(m=0;m<8;++m,p=l){l=p+1
B.b.h(a3,p,new Uint8Array(a))}for(k=0;k<c;++k){if(!(r>=0&&r<4))return A.a(s,r)
j=s[r]
j.toString
A.ou(j,q.a(J.n(J.n(A.b(a5.r,"blocks"),o),k)),a1,a0)
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
A.ft.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.q(),l=n.q()
n=this.a
if(!n.d.z.a3(m))throw A.d(A.f("Invalid Component in SOS block"))
s=n.d.z.p(0,m)
s.toString
r=B.a.i(l,4)&15
q=l&15
p=n.Q
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.x=p}n=n.z
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.y=n}return s},
$S:32}
A.bQ.prototype={}
A.dQ.prototype={
j4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.z,r=s.gaI(),r=r.gO(r);r.B();){q=s.p(0,r.gD())
a.siY(Math.max(a.f,q.a))
a.siZ(Math.max(a.r,q.b))}r=a.e
r.toString
a.x=B.c.bd(r/8/a.f)
r=a.d
r.toString
a.y=B.c.bd(r/8/a.r)
for(r=s.gaI(),r=r.gO(r),p=t.h0,o=t.i,n=t.f0;r.B();){m=s.p(0,r.gD())
m.toString
l=a.e
l.toString
k=m.a
j=B.c.bd(B.c.bd(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.c.bd(B.c.bd(l/8)*i/a.r)
g=A.b(a.x,"mcusPerLine")*k
f=A.b(a.y,"mcusPerColumn")*i
e=J.a3(f,n)
for(d=0;d<f;++d){c=J.a3(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.sfe(p.a(e))}},
siY(a){this.f=A.o(a)},
siZ(a){this.r=A.o(a)}}
A.fu.prototype={}
A.dR.prototype={
aE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.z,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.ch===0)s=a0.cy===0?a0.gfL():a0.gfN()
else s=a0.cy===0?a0.gfD():a0.gfF()
else s=a0.gfI()
a4=a3===1
if(a4){if(0>=a3)return A.a(a2,0)
r=A.b(a2[0].e,a1)
if(0>=a2.length)return A.a(a2,0)
q=r*A.b(a2[0].f,"blocksPerColumn")}else q=A.b(a0.f,"mcusPerLine")*A.b(a0.b.y,"mcusPerColumn")
r=a0.Q
if(r==null||r===0)a0.Q=q
for(r=a0.a,p=t.fb,o=null,n=0,m=null,l=null;n<q;){for(k=0;k<a3;++k){if(!(k<a2.length))return A.a(a2,k)
a2[k].z=0}a0.fr=0
if(a4){if(0>=a2.length)return A.a(a2,0)
o=a2[0]
j=0
while(!0){i=a0.Q
i.toString
if(!(j<i))break
p.a(s)
h=B.a.V(n,A.b(o.e,a1))
g=B.a.L(n,A.b(o.e,a1))
s.$2(o,J.n(J.n(A.b(o.r,"blocks"),h),g));++n;++j}}else{j=0
while(!0){i=a0.Q
i.toString
if(!(j<i))break
for(k=0;k<a3;++k){if(!(k<a2.length))return A.a(a2,k)
o=a2[k]
m=o.a
l=o.b
for(f=0;f<l;++f)for(e=0;e<m;++e)a0.fQ(o,s,n,f,e)}++n;++j}}a0.dy=0
i=r.a
d=r.d
c=i.length
if(!(d>=0&&d<c))return A.a(i,d)
b=i[d]
a=d+1
if(!(a<c))return A.a(i,a)
a=i[a]
if(b===255)if(a>=208&&a<=215)r.d=d+2
else break}},
b_(){var s,r,q=this,p=q.dy
if(p>0){--p
q.dy=p
return B.a.a8(q.dx,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.q()
q.dx=s
if(s===255){r=p.q()
if(r!==0)throw A.d(A.f("unexpected marker: "+B.a.bH((q.dx<<8|r)>>>0,16)))}q.dy=7
return B.a.i(q.dx,7)&1},
bt(a){var s,r,q
for(s=t.j,r=a;q=this.b_(),q!=null;){r=J.n(s.a(r),q)
if(typeof r=="number")return B.c.l(r)}return null},
cJ(a){var s,r
for(s=0;a>0;){r=this.b_()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
bv(a){var s
if(a===1)return this.b_()===1?1:-1
a.toString
s=this.cJ(a)
s.toString
if(s>=B.a.C(1,a-1))return s
return s+B.a.C(-1,a)+1},
fJ(a,b){var s,r,q,p,o=this,n=o.bt(A.b(a.x,"huffmanTableDC")),m=n===0?0:o.bv(n),l=A.b(a.z,"pred")+m
a.z=l
s=J.M(b)
s.h(b,0,A.b(l,"pred"))
for(r=1;r<64;){l=o.bt(A.b(a.y,"huffmanTableAC"))
l.toString
q=l&15
p=B.a.i(l,4)
if(q===0){if(p<15)break
r+=16
continue}r+=p
q=o.bv(q)
if(!(r>=0&&r<80))return A.a(B.m,r)
s.h(b,B.m[r],q);++r}},
fM(a,b){var s=this.bt(A.b(a.x,"huffmanTableDC")),r=s===0?0:B.a.w(this.bv(s),this.db),q=A.b(a.z,"pred")+r
a.z=q
J.m(b,0,A.b(q,"pred"))},
fO(a,b){var s,r,q
t.L.a(b)
s=J.ai(b)
r=s.p(b,0)
q=this.b_()
q.toString
q=B.a.w(q,this.db)
if(typeof r!=="number")return r.jt()
s.h(b,0,(r|q)>>>0)},
fE(a,b){var s,r,q,p,o,n,m=this,l=m.fr
if(l>0){m.fr=l-1
return}s=m.ch
r=m.cx
for(l=m.db,q=J.M(b);s<=r;){p=m.bt(A.b(a.y,"huffmanTableAC"))
p.toString
o=p&15
n=B.a.i(p,4)
if(o===0){if(n<15){l=m.cJ(n)
l.toString
m.fr=l+B.a.w(1,n)-1
break}s+=16
continue}s+=n
if(!(s>=0&&s<80))return A.a(B.m,s)
q.h(b,B.m[s],m.bv(o)*B.a.w(1,l));++s}},
fG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.L.a(b)
s=i.ch
r=i.cx
for(q=J.ai(b),p=i.db,o=0,n=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.m,s)
m=B.m[s]
switch(i.fx){case 0:l=i.bt(A.b(a.y,"huffmanTableAC"))
if(l==null)throw A.d(A.f("Invalid progressive encoding"))
o=l&15
n=B.a.i(l,4)
if(o===0)if(n<15){k=i.cJ(n)
k.toString
i.fr=k+B.a.w(1,n)
i.fx=4}else{i.fx=1
n=16}else{if(o!==1)throw A.d(A.f("invalid ACn encoding"))
i.fy=i.bv(o)
i.fx=n!==0?2:3}continue
case 1:case 2:if(!J.aT(q.p(b,m),0)){k=q.p(b,m)
j=i.b_()
j.toString
j=B.a.w(j,p)
if(typeof k!=="number")return k.aL()
q.h(b,m,k+j)}else{--n
if(n===0)i.fx=i.fx===2?3:0}break
case 3:if(!J.aT(q.p(b,m),0)){k=q.p(b,m)
j=i.b_()
j.toString
j=B.a.w(j,p)
if(typeof k!=="number")return k.aL()
q.h(b,m,k+j)}else{q.h(b,m,B.a.w(A.b(i.fy,"successiveACNextValue"),p))
i.fx=0}break
case 4:if(!J.aT(q.p(b,m),0)){k=q.p(b,m)
j=i.b_()
j.toString
j=B.a.w(j,p)
if(typeof k!=="number")return k.aL()
q.h(b,m,k+j)}break}++s}if(i.fx===4)if(--i.fr===0)i.fx=0},
fQ(a,b,c,d,e){var s,r,q="mcusPerLine",p="blocks"
t.fb.a(b)
s=B.a.V(c,A.b(this.f,q))*a.b+d
r=B.a.L(c,A.b(this.f,q))*a.a+e
if(s>=J.ac(A.b(a.r,p)))return
if(r>=J.ac(J.n(A.b(a.r,p),s)))return
b.$2(a,J.n(J.n(A.b(a.r,p),s),r))}}
A.dP.prototype={
am(a){var s
t.L.a(a)
s=A.jQ()
s.j6(a)
if(s.y.length!==1)throw A.d(A.f("only single frame JPEGs supported"))
return A.of(s)}}
A.cB.prototype={}
A.dK.prototype={}
A.fM.prototype={
sj1(a){this.y=t.m.a(a)},
sjm(a){this.z=t.T.a(a)},
siw(a){this.Q=t.m.a(a)}}
A.fn.prototype={}
A.e4.prototype={
bi(a){var s,r,q,p,o,n=A.l(t.L.a(a),!0,null,0).T(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.a1[p])return!1}return!0},
aB(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4="_input",a5=t.L,a6=A.l(a5.a(a7),!0,a3,0)
a2.d=a6
s=A.b(a6,a4).T(8)
for(a6=s.a,r=s.d,q=a6.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(a6,o)
if(a6[o]!==B.a1[p])return a3}for(a6=t.t,r=t.dm;!0;){q=A.b(a2.d,a4)
n=q.d-q.b
m=A.b(a2.d,a4).j()
l=A.b(a2.d,a4).K(4)
switch(l){case"IHDR":q=A.b(a2.d,a4)
k=q.M(m)
q.d=q.d+(k.c-k.d)
j=A.i(k,a3,0)
i=j.R()
q=new A.fn(A.c([],r),A.c([],a6))
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
q.x=o[h]
if(!B.b.aD(A.c([0,2,3,4,6],a6),a2.a.e))return a3
q=a2.a
if(q.r!==0)return a3
switch(q.e){case 0:if(!B.b.aD(A.c([1,2,4,8,16],a6),a2.a.d))return a3
break
case 2:if(!B.b.aD(A.c([8,16],a6),a2.a.d))return a3
break
case 3:if(!B.b.aD(A.c([1,2,4,8],a6),a2.a.d))return a3
break
case 4:if(!B.b.aD(A.c([8,16],a6),a2.a.d))return a3
break
case 6:if(!B.b.aD(A.c([8,16],a6),a2.a.d))return a3
break}if(A.b(a2.d,a4).j()!==A.az(a5.a(i),A.az(new A.at(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"PLTE":q=a2.a
q.toString
o=A.b(a2.d,a4)
k=o.M(m)
o.d=o.d+(k.c-k.d)
q.sj1(k.R())
if(A.b(a2.d,a4).j()!==A.az(a5.a(a5.a(a2.a.y)),A.az(new A.at(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"tRNS":q=a2.a
q.toString
o=A.b(a2.d,a4)
k=o.M(m)
o.d=o.d+(k.c-k.d)
q.sjm(k.R())
e=A.b(a2.d,a4).j()
q=a2.a.z
q.toString
if(e!==A.az(a5.a(q),A.az(new A.at(l),0)))throw A.d(A.f("Invalid "+l+" checksum"))
break
case"IEND":A.b(a2.d,a4).d+=4
break
case"gAMA":if(m!==4)throw A.d(A.f("Invalid gAMA chunk"))
d=A.b(a2.d,a4).j()
A.b(a2.d,a4).d+=4
if(d!==1e5)a2.a.ch=d/1e5
break
case"IDAT":B.b.v(a2.a.fy,n)
A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break
case"acTL":a2.a.toString
A.b(a2.d,a4).j()
a2.a.toString
A.b(a2.d,a4).j()
A.b(a2.d,a4).d+=4
break
case"fcTL":c=new A.dK(A.c([],a6))
B.b.v(a2.a.fx,c)
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
B.b.v(B.b.giW(a2.a.fx).z,n)
A.b(a2.d,a4).d+=m-4
A.b(a2.d,a4).d+=4
break
case"bKGD":q=a2.a.e
if(q===3){q=A.b(a2.d,a4)
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q);--m
b=o[q]*3
q=a2.a.y
o=q.length
if(!(b>=0&&b<o))return A.a(q,b)
a=q[b]
h=b+1
if(!(h<o))return A.a(q,h)
a0=q[h]
h=b+2
if(!(h<o))return A.a(q,h)
a1=q[h]
B.c.l(B.a.n(255,0,255))
B.c.l(B.a.n(a1,0,255))
B.c.l(B.a.n(a0,0,255))
B.c.l(B.a.n(a,0,255))}else if(q===0||q===4){A.b(a2.d,a4).k()
m-=2}else if(q===2||q===6){A.b(a2.d,a4).k()
A.b(a2.d,a4).k()
A.b(a2.d,a4).k()
m-=24}if(m>0)A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break
case"iCCP":q=a2.a
q.toString
q.cy=A.b(a2.d,a4).bF()
a2.a.toString
q=A.b(a2.d,a4)
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q)
o=a2.a.cy
q=A.b(a2.d,a4)
k=q.M(m-(o.length+2))
q.d=q.d+(k.c-k.d)
q=a2.a
q.toString
q.dx=k.R()
A.b(a2.d,a4).d+=4
break
default:A.b(a2.d,a4).d+=m
A.b(a2.d,a4).d+=4
break}if(l==="IEND")break
q=A.b(a2.d,a4)
if(q.d>=q.c)return a3}return a2.a},
a4(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2="_input"
if(a0.a==null)return a1
s=A.c([],t.t)
r=a0.a
q=r.a
p=r.b
o=r.fx
n=o.length
if(n===0||a3===0)for(m=r.fy.length,r=t.L,l=0;l<m;++l){o=A.b(a0.d,a2)
n=a0.a.fy
if(!(l<n.length))return A.a(n,l)
o.d=n[l]
k=A.b(a0.d,a2).j()
j=A.b(a0.d,a2).K(4)
n=A.b(a0.d,a2)
i=n.M(k)
n.d=n.d+(i.c-i.d)
h=i.R()
B.b.b1(s,h)
if(A.b(a0.d,a2).j()!==A.az(r.a(h),A.az(new A.at(j),0)))throw A.d(A.f("Invalid "+j+" checksum"))}else{if(a3>=n)throw A.d(A.f("Invalid Frame Number: "+a3))
g=o[a3]
q=g.b
p=g.c
for(r=g.z,l=0;l<r.length;++l){o=A.b(a0.d,a2)
if(!(l<r.length))return A.a(r,l)
o.d=r[l]
k=A.b(a0.d,a2).j()
A.b(a0.d,a2).K(4)
A.b(a0.d,a2).d+=4
o=A.b(a0.d,a2)
i=o.M(k)
o.d=o.d+(i.c-i.d)
B.b.b1(s,i.R())}}r=a0.a
o=r.e
f=o===4||o===6||r.z!=null?B.e:B.w
q.toString
p.toString
e=A.R(q,p,f,a1,a1)
d=A.l(B.r.bz(A.be(t.L.a(s),1,a1,0),!1),!0,a1,0)
a0.c=a0.b=0
r=a0.a
if(r.Q==null){r.siw(A.iS(256,new A.fK(),!1,t.p))
r=a0.a
o=r.y
if(o!=null&&r.ch!=null)for(n=o.length,r=r.Q,l=0;l<n;++l){r.toString
c=o[l]
if(!(c<256))return A.a(r,c)
o[l]=r[c]}}r=a0.a
b=r.a
a=r.b
r.a=q
r.b=p
a0.e=0
if(r.x!==0){r=B.a.i(q+7,3)
o=B.a.i(p+7,3)
a0.aZ(d,e,0,0,8,8,r,o)
r=q+3
a0.aZ(d,e,4,0,8,8,B.a.i(r,3),o)
o=p+3
a0.aZ(d,e,0,4,4,8,B.a.i(r,2),B.a.i(o,3))
r=q+1
a0.aZ(d,e,2,0,4,4,B.a.i(r,2),B.a.i(o,2))
o=p+1
a0.aZ(d,e,0,2,2,4,B.a.i(r,1),B.a.i(o,2))
a0.aZ(d,e,1,0,2,2,B.a.i(q,1),B.a.i(o,1))
a0.aZ(d,e,0,1,1,2,q,B.a.i(p,1))}else a0.hJ(d,e)
r=a0.a
r.a=b
r.b=a
o=r.dx
if(o!=null)e.Q=new A.fe(r.cy,B.N,o)
return e},
am(a){if(this.aB(t.L.a(a))==null)return null
return this.a4(0)},
aZ(b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=a8.a,b0=a9.e
if(b0===4)s=2
else if(b0===2)s=3
else{b0=b0===6?4:1
s=b0}a9=a9.d
a9.toString
r=s*a9
q=B.a.i(r+7,3)
p=B.a.i(r*b7+7,3)
o=A.S(p,0,!1,t.p)
n=A.c([o,o],t.S)
m=A.c([0,0,0,0],t.t)
for(a9=b2.y,b0=b2.a,l=a9.length,k=b5>1,j=b2.b,i=b5-b3,h=i<=1,g=b4,f=0,e=0;f<b8;++f,g+=b6,++a8.e){d=b1.a
c=b1.d++
if(!(c>=0&&c<d.length))return A.a(d,c)
c=d[c]
b=b1.M(p)
b1.d=b1.d+(b.c-b.d)
B.b.h(n,e,b.R())
if(!(e>=0&&e<2))return A.a(n,e)
a=n[e]
e=1-e
a8.ea(c,q,a,n[e])
a8.c=a8.b=0
d=a.length
a0=new A.V(a,0,d,0,!0)
for(d=g*b0,a1=b3,a2=0;a2<b7;++a2,a1+=b5){a8.e_(a0,m)
a3=a8.dC(m)
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
hJ(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.e
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
m=A.S(o,0,!1,t.p)
l=A.c([m,m],t.S)
k=A.c([0,0,0,0],t.t)
for(a1=a4.y,a2=a1.length,j=0,i=0,h=0;j<p;++j,h=d){g=a3.a
f=a3.d++
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
e=a3.M(o)
a3.d=a3.d+(e.c-e.d)
B.b.h(l,h,e.R())
if(!(h>=0&&h<2))return A.a(l,h)
d=1-h
a0.ea(f,n,l[h],l[d])
a0.c=a0.b=0
f=l[h]
g=f.length
c=new A.V(f,0,g,0,!0)
for(b=0;b<q;++b,i=a){a0.e_(c,k)
a=i+1
g=a0.dC(k)
if(!(i>=0&&i<a2))return A.a(a1,i)
a1[i]=g}}},
ea(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.L
f.a(c)
f.a(d)
s=c.length
switch(a){case 0:break
case 1:for(f=J.M(c),r=b;r<s;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
o=c[o]
if(typeof p!=="number")return p.aL()
if(typeof o!=="number")return A.y(o)
f.h(c,r,p+o&255)}break
case 2:for(f=J.M(c),r=0;r<s;++r){if(!(r<c.length))return A.a(c,r)
q=c[r]
if(!(r<d.length))return A.a(d,r)
p=d[r]
if(typeof q!=="number")return q.aL()
if(typeof p!=="number")return A.y(p)
f.h(c,r,q+p&255)}break
case 3:for(f=J.M(c),r=0;r<s;++r){if(r<b)n=0
else{q=r-b
if(!(q>=0&&q<c.length))return A.a(c,q)
n=c[q]}if(!(r<d.length))return A.a(d,r)
m=d[r]
if(!(r<c.length))return A.a(c,r)
q=c[r]
p=B.a.i(n+m,1)
if(typeof q!=="number")return q.aL()
f.h(c,r,q+p&255)}break
case 4:for(f=J.M(c),r=0;r<s;++r){q=r<b
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
if(typeof q!=="number")return q.aL()
f.h(c,r,q+g&255)}break
default:throw A.d(A.f("Invalid filter value: "+a))}},
as(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.q()
if(b===16)return a.k()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.d(A.f("Invalid PNG data."))
p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
n.b=B.a.C(p[q],r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a5(n.b,s)
n.c=s
return(r&o)>>>0},
e_(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.e
switch(r){case 0:s=s.d
s.toString
B.b.h(b,0,q.as(a,s))
return
case 2:s=s.d
s.toString
B.b.h(b,0,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.as(a,s))
return
case 3:s=s.d
s.toString
B.b.h(b,0,q.as(a,s))
return
case 4:s=s.d
s.toString
B.b.h(b,0,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.as(a,s))
return
case 6:s=s.d
s.toString
B.b.h(b,0,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.as(a,s))
s=q.a.d
s.toString
B.b.h(b,3,q.as(a,s))
return}throw A.d(A.f("Invalid color type: "+A.v(r)+"."))},
dC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
s=g.a
r=s.e
switch(r){case 0:q=A.ap("g")
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
break}s=s.Q
s.toString
q.b=B.b.p(s,q.I())
s=g.a.z
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
p=s[0]
if(1>=r)return A.a(s,1)
s=s[1]
if(a[0]===((p&255)<<24|s&255)>>>0)return A.ar(q.I(),q.I(),q.I(),0)}return A.ar(q.I(),q.I(),q.I(),255)
case 2:o=A.ap("r")
q=A.ap("g")
n=A.ap("b")
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
break}s=s.Q
s.toString
o.b=B.b.p(s,o.I())
s=g.a.Q
s.toString
q.b=B.b.p(s,q.I())
s=g.a.Q
s.toString
n.b=B.b.p(s,n.I())
s=g.a.z
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
if(a[0]===((p&255)<<8|m&255)&&a[1]===((l&255)<<8|k&255)&&a[2]===((j&255)<<8|s&255))return A.ar(o.I(),q.I(),n.I(),0)}return A.ar(o.I(),q.I(),n.I(),255)
case 3:r=a[0]
i=r*3
p=s.z
if(p!=null&&r<p.length){if(!(r>=0&&r<p.length))return A.a(p,r)
h=p[r]}else h=255
s=s.y
r=s.length
if(i>=r)return A.ar(255,255,255,h)
if(!(i>=0))return A.a(s,i)
o=s[i]
p=i+1
if(!(p<r))return A.a(s,p)
q=s[p]
p=i+2
if(!(p<r))return A.a(s,p)
return A.ar(o,q,s[p],h)
case 4:q=A.ap("g")
h=A.ap("a")
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
break}s=s.Q
s.toString
q.b=B.b.p(s,q.I())
return A.ar(q.I(),q.I(),q.I(),h.I())
case 6:o=A.ap("r")
q=A.ap("g")
n=A.ap("b")
h=A.ap("a")
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
break}s=s.Q
s.toString
o.b=B.b.p(s,o.I())
s=g.a.Q
s.toString
q.b=B.b.p(s,q.I())
s=g.a.Q
s.toString
n.b=B.b.p(s,n.I())
return A.ar(o.I(),q.I(),n.I(),h.I())}throw A.d(A.f("Invalid color type: "+A.v(r)+"."))}}
A.fK.prototype={
$1(a){return a},
$S:13}
A.fL.prototype={
iQ(){var s,r=this,q=r.db
if(q==null)return null
r.bx(q,"IEND",A.c([],t.t))
r.cx=0
q=r.db
s=A.G(q.c.buffer,0,q.a)
r.db=null
return s},
ip(a,b){var s,r
if(b==null)return
s=A.bh(!0,8192)
s.at(new A.at(b.a))
s.E(0)
s.E(0)
s.at(b.iA())
r=this.db
r.toString
this.bx(r,"iCCP",A.G(s.c.buffer,0,s.a))},
bx(a,b,c){t.L.a(c)
a.au(c.length)
a.at(new A.at(b))
a.at(c)
a.au(A.az(c,A.az(new A.at(b),0)))},
h7(a,b,c){var s,r,q
t.L.a(c)
for(s=b.b,r=0,q=0;q<s;++q)switch(4){case 4:r=this.h8(b,r,q,c)
break}},
c0(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
h8(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
t.L.a(b5)
s=b3+1
r=b5.length
if(!(b3<r))return A.a(b5,b3)
b5[b3]=4
for(q=b2.a,p=b2.c===B.e,o=b2.y,n=b4*q,m=o.length,l=(b4-1)*q,k=b4===0,j=!k,b3=s,i=0;i<q;++i){h=i===0
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
a4=b1.c0(g,c,a0)
a5=b1.c0(e,b,a1)
a6=b1.c0(d,a,a2)
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
b0=b1.c0(a7,a8,a9)
b3=s+1
if(!(s<r))return A.a(b5,s)
b5[s]=(h>>>24&255)-b0&255}else b3=s}return b3}}
A.e5.prototype={
siV(a){t.T.a(a)},
seQ(a){t.T.a(a)},
sjd(a){t.T.a(a)},
sje(a){t.T.a(a)}}
A.e6.prototype={
saC(a){t.T.a(a)},
saJ(a){t.T.a(a)}}
A.au.prototype={}
A.e8.prototype={
saC(a){t.T.a(a)},
saJ(a){t.T.a(a)}}
A.e9.prototype={
saC(a){t.T.a(a)},
saJ(a){t.T.a(a)}}
A.eb.prototype={
saC(a){t.T.a(a)},
saJ(a){t.T.a(a)}}
A.ec.prototype={
saC(a){t.T.a(a)},
saJ(a){t.T.a(a)}}
A.cE.prototype={}
A.ea.prototype={}
A.fO.prototype={
f6(a){var s,r,q,p,o=this
a.k()
a.k()
a.k()
a.k()
s=B.a.F(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.x=new Uint16Array(s)
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
p=A.b(o.x,"whiteDst")
q=a.k()
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.bi.prototype={
ew(a,b,c,d,e,f,g){if(e==null)e=a.k()
switch(e){case 0:d.toString
this.i7(a,b,c,d)
break
case 1:if(f==null)f=this.i4(a,c)
d.toString
this.i6(a,b,c,d,f,g)
break
default:throw A.d(A.f("Unsupported compression: "+e))}},
ja(a,b,c,d){return this.ew(a,b,c,d,null,null,0)},
i4(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.k()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
i7(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.d.an(A.b(s,"data"),0,r,255)
return}this.c=a.T(r).R()},
i6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k="data",j=b*c
if(d===16)j*=2
s=new Uint8Array(j)
l.c=s
r=f*c
q=e.length
if(r>=q){B.d.an(A.b(s,k),0,A.b(l.c,k).length,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.M(e[r])
a.d=a.d+(m.c-m.d)
l.fR(m,A.b(l.c,k),p)
p+=b}},
fR(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.T()[0]=q
q=$.Z()
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
A.fQ.prototype={
f7(a){var s,r,q,p=this,o="_input"
p.cy=A.l(a,!0,null,0)
p.hM()
if(p.d!==943870035)return
s=A.b(p.cy,o).j()
A.b(p.cy,o).T(s)
s=A.b(p.cy,o).j()
p.db=A.b(p.cy,o).T(s)
s=A.b(p.cy,o).j()
p.dx=A.b(p.cy,o).T(s)
r=A.b(p.cy,o)
r.toString
q=A.b(p.cy,o)
p.dy=r.T(q.c-q.d)},
aE(){var s=this
if(s.d!==943870035||A.b(s.cy,"_input")==null)return!1
s.i2()
s.i3()
s.i5()
s.dy=s.dx=s.db=s.cy=null
return!0},
iJ(){if(!this.aE())return null
return this.jf()},
jf(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.Q
if(b4!=null)return b4
b4=A.R(b3.a,b3.b,B.e,null,null)
b3.Q=b4
b4=b4.y
B.n.an(b4,0,b4.length,0)
s=b3.Q.aW()
for(b4=s.length,r=0;r<J.ac(A.b(b3.y,"layers"));++r){q=J.n(A.b(b3.y,"layers"),r)
if((A.b(q.z,"flags")&2)!==0)continue
p=A.b(q.x,"opacity")/255
o=q.r
n=A.b(q.fx,"layerImage").aW()
m=q.a
m.toString
l=n.length
k=m
j=0
i=0
for(;j<A.b(q.f,"height");++j,++k){m=q.a
m.toString
h=b3.a
if(typeof h!=="number")return A.y(h)
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
if(typeof h!=="number")return A.y(h)
if(e<h)if(m){h=b3.b
if(typeof h!=="number")return A.y(h)
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
case 1768188278:b0=A.fR(a2,b)
a9=A.fR(a3,a)
a8=A.fR(a4,a0)
a7=a1
break
case 1818391150:b0=B.c.l(B.a.n(a2+b-255,0,255))
a9=B.c.l(B.a.n(a3+a-255,0,255))
a8=B.c.l(B.a.n(a4+a0-255,0,255))
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
case 1935897198:b0=B.c.l(B.a.n(255-(255-b)*(255-a2),0,255))
a9=B.c.l(B.a.n(255-(255-a)*(255-a3),0,255))
a8=B.c.l(B.a.n(255-(255-a0)*(255-a4),0,255))
a7=a1
break
case 1684633120:b0=A.fS(a2,b)
a9=A.fS(a3,a)
a8=A.fS(a4,a0)
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
case 1870030194:b0=A.iX(a2,b,a5,a1)
a9=A.iX(a3,a,a5,a1)
a8=A.iX(a4,a0,a5,a1)
a7=a1
break
case 1934387572:b0=A.iY(a2,b)
a9=A.iY(a3,a)
a8=A.iY(a4,a0)
a7=a1
break
case 1749838196:b0=A.iV(a2,b)
a9=A.iV(a3,a)
a8=A.iV(a4,a0)
a7=a1
break
case 1984719220:b0=A.iZ(a2,b)
a9=A.iZ(a3,a)
a8=A.iZ(a4,a0)
a7=a1
break
case 1816947060:b0=A.iW(a2,b)
a9=A.iW(a3,a)
a8=A.iW(a4,a0)
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
case 1936553316:b0=B.c.aK(b+a2-2*b*a2/255)
a9=B.c.aK(a+a3-2*a*a3/255)
a8=B.c.aK(a0+a4-2*a0*a4/255)
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
b0=B.c.l(a2*g+b0*a6)
a9=B.c.l(a3*g+a9*a6)
a8=B.c.l(a4*g+a8*a6)
a7=B.c.l(a5*g+a7*a6)
s[f]=b0
b1=h+1
s[h]=a9
b2=b1+1
if(!(b1<b4))return A.a(s,b1)
s[b1]=a8
if(!(b2<b4))return A.a(s,b2)
s[b2]=a7}f+=4}}}b4=b3.Q
b4.toString
return b4},
hM(){var s,r,q,p,o,n,m=this,l="_input"
m.d=A.b(m.cy,l).j()
s=A.b(m.cy,l).k()
m.e=s
if(s!==1){m.d=0
return}r=A.b(m.cy,l).T(6)
for(s=r.a,q=r.d,p=s.length,o=0;o<6;++o){n=q+o
if(!(n>=0&&n<p))return A.a(s,n)
if(s[n]!==0){m.d=0
return}}m.f=A.b(m.cy,l).k()
m.b=A.b(m.cy,l).j()
m.a=A.b(m.cy,l).j()
m.r=A.b(m.cy,l).k()
m.x=A.b(m.cy,l).k()},
i2(){var s,r,q,p,o,n,m=this,l="_imageResourceData",k=A.b(m.db,l)
k.d=k.b
for(k=m.ch;s=A.b(m.db,l),s.d<s.c;){r=A.b(m.db,l).j()
q=A.b(m.db,l).k()
s=A.b(m.db,l)
p=s.a
s=s.d++
if(!(s>=0&&s<p.length))return A.a(p,s)
s=p[s]
A.b(m.db,l).K(s)
if((s&1)===0)++A.b(m.db,l).d
o=A.b(m.db,l).j()
s=A.b(m.db,l)
n=s.M(o)
s.d=s.d+(n.c-n.d)
if((o&1)===1)++A.b(m.db,l).d
if(r===943868237)k.h(0,q,new A.e7())}},
i3(){var s,r,q,p,o,n,m,l,k,j=this,i="_layerAndMaskData",h="layers",g=A.b(j.dx,i)
g.d=g.b
s=A.b(j.dx,i).j()
if((s&1)!==0)++s
r=A.b(j.dx,i).T(s)
g=t.cE
j.sfg(t.dl.a(A.c([],g)))
if(s>0){q=r.k()
$.Y()[0]=q
q=$.a2()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.hf,n=t.af,m=0;m<p;++m){l=new A.cD(A.W(q,o),A.c([],g),A.c([],n))
l.f8(r)
J.iI(A.b(j.y,h),l)}}for(m=0;m<J.ac(A.b(j.y,h));++m)J.n(A.b(j.y,h),m).j7(r,j)
s=A.b(j.dx,i).j()
k=A.b(j.dx,i).T(s)
if(s>0){k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.q()}},
i5(){var s,r,q,p,o,n,m=this,l="_imageData",k="channels",j="mergeImageChannels",i=A.b(m.dy,l)
i.d=i.b
s=A.b(m.dy,l).k()
if(s===1){i=m.b
r=A.b(m.f,k)
if(typeof i!=="number")return i.ar()
q=i*r
p=new Uint16Array(q)
for(o=0;o<q;++o){i=A.b(m.dy,l).k()
if(!(o<q))return A.a(p,o)
p[o]=i}}else p=null
m.sfh(t.I.a(A.c([],t.E)))
for(o=0;o<A.b(m.f,k);++o){i=A.b(m.z,j)
r=A.b(m.dy,l)
r.toString
n=o===3?-1:o
n=new A.bi(n)
n.ew(r,m.a,m.b,m.r,s,p,o)
J.iI(i,n)}m.Q=A.k1(m.x,m.r,m.a,m.b,A.b(m.z,j))},
sfg(a){this.y=t.dl.a(a)},
sfh(a){this.z=t.I.a(a)}}
A.e7.prototype={}
A.cD.prototype={
f8(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.j(),a6=$.z()
a6[0]=a5
a5=$.N()
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
a4.sfi(t.I.a(A.c([],t.E)))
s=a7.k()
for(r=0;r<s;++r){a5=a7.k()
$.Y()[0]=a5
a5=$.a2()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.j()
J.iI(A.b(a4.cx,"channels"),new A.bi(q))}p=a7.j()
if(p!==943868237)throw A.d(A.f("Invalid PSD layer signature: "+B.a.bH(p,16)))
a4.r=a7.j()
a4.x=a7.q()
a7.q()
a4.z=a7.q()
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
if(o>0)new A.fO().f6(n.T(o))
o=n.q()
n.K(o)
l=4-B.a.L(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.dx,k=a4.fy,j=t.t,i=t.g0;n.d<a5;){p=n.j()
if(p!==943868237)throw A.d(A.f("PSD invalid signature for layer additional data: "+B.a.bH(p,16)))
h=n.K(4)
o=n.j()
g=n.M(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.m1(h,g))
if(h==="lrFX"){e=A.i(i.a(a6.p(0,"lrFX")).b,null,0)
e.k()
d=e.k()
for(c=0;c<d;++c){e.K(4)
b=e.K(4)
a=e.j()
if(b==="dsdw"){a0=new A.e6()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saC(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.K(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saJ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="isdw"){a0=new A.e9()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saC(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.K(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saJ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="oglw"){a0=new A.eb()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saC(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.K(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.saJ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else if(b==="iglw"){a0=new A.e8()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saC(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
e.K(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saJ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}}else if(b==="bevl"){a0=new A.e5()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.K(8)
e.K(8)
a0.siV(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
a0.seQ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
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
if(a0.a===2){a0.sjd(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
a0.sje(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}}else if(b==="sofi"){a0=new A.ec()
B.b.v(k,a0)
a0.a=e.j()
e.K(4)
a0.saC(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.saJ(A.c([e.k(),e.k(),e.k(),e.k(),e.k()],j))}else e.d+=a}}}}},
j7(a,b){var s,r=this,q="channels"
for(s=0;s<J.ac(A.b(r.cx,q));++s)J.n(A.b(r.cx,q),s).ja(a,A.b(r.e,"width"),A.b(r.f,"height"),b.r)
r.fx=A.k1(b.x,b.r,A.b(r.e,"width"),A.b(r.f,"height"),A.b(r.cx,q))},
sfi(a){this.cx=t.I.a(a)}}
A.bH.prototype={}
A.fP.prototype={
am(a){this.a=A.k0(t.L.a(a))
return this.a4(0)},
a4(a){var s=this.a
if(s==null)return null
return s.iJ()}}
A.fX.prototype={}
A.fW.prototype={
bi(a){var s=A.l(t.L.a(a),!0,null,0).T(18),r=s.a,q=s.d,p=q+2,o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==2)return!1
q+=16
if(!(q>=0&&q<o))return A.a(r,q)
q=r[q]
if(q!==24&&q!==32)return!1
return!0},
aB(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
l.a=new A.fX()
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
a4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="input"
if(f.a==null)return null
s=A.b(f.b,e)
r=f.a
q=r.d
q.toString
s.d=q
p=A.R(r.a,r.b,B.w,null,null)
for(o=p.b-1,s=p.a,r=p.y,q=r.length;o>=0;--o)for(n=o*s,m=0;m<s;++m){l=A.b(f.b,e)
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
i=B.c.l(B.a.n(g,0,255))
l=B.c.l(B.a.n(l,0,255))
k=B.c.l(B.a.n(k,0,255))
j=B.c.l(B.a.n(j,0,255))
h=n+m
if(!(h>=0&&h<q))return A.a(r,h)
r[h]=(i<<24|l<<16|k<<8|j)>>>0}return p},
am(a){if(this.aB(t.L.a(a))==null)return null
return this.a4(0)}}
A.fZ.prototype={
J(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.q()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.C(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.j,q)
r=p+(o&B.j[q])
a-=q
n.c=8
q=s.a
o=s.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
n.b=q[o]}if(a>0){if(q===0){n.c=8
n.b=s.q()}s=B.a.C(r,a)
q=n.b
p=n.c-a
q=B.a.a8(q,p)
if(!(a<9))return A.a(B.j,a)
r=s+(q&B.j[a])
n.c=p}return r}}
A.ei.prototype={
t(a){var s=this,r=s.a
if(B.aq.a3(r))return A.v(B.aq.p(0,r))+": "+s.b+" "+s.c
return"<"+r+">: "+s.b+" "+s.c},
jc(){var s=this.d
s.toString
this.e.d=s
return this.av()},
cW(){var s,r,q=this,p=q.d
p.toString
q.e.d=p
s=A.c([],t.t)
for(p=q.c,r=0;r<p;++r)B.b.v(s,q.av())
return s},
av(){var s,r,q,p=this
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
A.h0.prototype={
iG(a,b,c,d){var s,r,q,p=this
p.r=b
p.y=p.x=0
s=B.a.F(p.a+7,8)
for(r=0,q=0;q<d;++q){p.cr(a,r,c)
r+=s}},
cr(a,b,c){var s,r,q,p,o,n,m,l,k=this
k.d=0
for(s=k.a,r=0,q=0,p=0,o=null,n=null,m=null,l=!0;c<s;){for(;l;){o=k.aP(10)
if(!(o<1024))return A.a(B.F,o)
n=B.F[o]
p=n&1
r=B.a.i(n,1)&15
if(r===12){m=k.a9(2)
o=(o<<2&12|m)>>>0
if(!(o<16))return A.a(B.l,o)
n=B.l[o]
r=B.a.i(n,1)&7
q=B.a.i(n,4)&4095
c+=q
k.X(4-r)}else if(r===0)throw A.d(A.f("TIFFFaxDecoder0"))
else if(r===15)throw A.d(A.f("TIFFFaxDecoder1"))
else{q=B.a.i(n,5)&2047
c+=q
k.X(10-r)
if(p===0){B.b.h(k.f,k.d++,c)
l=!1}}}if(c===s){if(k.Q===2)if(k.x!==0){s=k.y
s.toString
k.y=s+1
k.x=0}break}for(;!l;){o=k.a9(4)
if(!(o<16))return A.a(B.z,o)
n=B.z[o]
p=n&1
r=n>>>1&15
q=n>>>5&2047
if(q===100){o=k.aP(9)
if(!(o<512))return A.a(B.I,o)
n=B.I[o]
p=n&1
r=B.a.i(n,1)&15
q=B.a.i(n,5)&2047
if(r===12){k.X(5)
o=k.a9(4)
if(!(o<16))return A.a(B.l,o)
n=B.l[o]
r=B.a.i(n,1)&7
q=B.a.i(n,4)&4095
k.af(a,b,c,q)
c+=q
k.X(4-r)}else if(r===15)throw A.d(A.f("TIFFFaxDecoder2"))
else{k.af(a,b,c,q)
c+=q
k.X(9-r)
if(p===0){B.b.h(k.f,k.d++,c)
l=!0}}}else{if(q===200){o=k.a9(2)
if(!(o<4))return A.a(B.y,o)
n=B.y[o]
q=n>>>5&2047
r=n>>>1&15
k.af(a,b,c,q)
c+=q
k.X(2-r)
B.b.h(k.f,k.d++,c)}else{k.af(a,b,c,q)
c+=q
k.X(4-r)
B.b.h(k.f,k.d++,c)}l=!0}}if(c===s){if(k.Q===2)if(k.x!==0){s=k.y
s.toString
k.y=s+1
k.x=0}break}}B.b.h(k.f,k.d++,c)},
iH(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null
a0.r=a3
a0.Q=3
a0.y=a0.x=0
s=a0.a
r=B.a.F(s+7,8)
q=A.S(2,a1,!1,t.x)
a0.cy=a6&1
a0.cx=a6>>>2&1
if(a0.dY()!==1)throw A.d(A.f("TIFFFaxDecoder3"))
a0.cr(a2,0,a4)
for(p=a1,o=r,n=p,m=n,l=m,k=l,j=k,i=j,h=i,g=h,f=g,e=0,d=1;d<a5;++d){if(a0.dY()===0){n=a0.e
a0.scU(a0.f)
a0.scT(n)
a0.z=0
p=a4
f=-1
m=!0
e=0
while(!0){p.toString
if(!(p<s))break
a0.dH(f,m,q)
h=q[0]
i=q[1]
j=a0.a9(7)
if(!(j<128))return A.a(B.A,j)
j=B.A[j]&255
k=j>>>3&15
l=j&7
if(k===0){if(!m){i.toString
a0.af(a2,o,p,i-p)}a0.X(7-l)
p=i
f=p}else if(k===1){a0.X(7-l)
c=e+1
b=c+1
if(m){p+=a0.bV()
B.b.h(a0.f,e,p)
a=a0.bU()
a0.af(a2,o,p,a)
p+=a
B.b.h(a0.f,c,p)}else{a=a0.bU()
a0.af(a2,o,p,a)
p+=a
B.b.h(a0.f,e,p)
p+=a0.bV()
B.b.h(a0.f,c,p)}e=b
f=p}else{if(k<=8){h.toString
g=h+(k-5)
c=e+1
B.b.h(a0.f,e,g)
m=!m
if(m)a0.af(a2,o,p,g-p)
a0.X(7-l)}else throw A.d(A.f("TIFFFaxDecoder4"))
p=g
e=c
f=p}}c=e+1
B.b.h(a0.f,e,p)
a0.d=c
e=c}else a0.cr(a2,o,a4)
o+=r}},
iL(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null
a3.r=a6
a3.Q=4
a3.y=a3.x=0
s=a3.a
r=B.a.F(s+7,8)
q=A.S(2,a4,!1,t.x)
p=a3.f
a3.d=0
a3.d=1
B.b.h(p,0,s)
B.b.h(p,a3.d++,s)
for(o=a4,n=o,m=n,l=m,k=l,j=k,i=0,h=0;h<a8;++h){g=a3.e
a3.scU(a3.f)
a3.scT(g)
a3.z=0
f=a7
e=-1
d=!0
c=0
while(!0){f.toString
if(!(f<s))break
a3.dH(e,d,q)
k=q[0]
l=q[1]
m=a3.a9(7)
if(!(m<128))return A.a(B.A,m)
m=B.A[m]&255
n=m>>>3&15
o=m&7
if(n===0){if(!d){l.toString
a3.af(a5,i,f,l-f)}a3.X(7-o)
f=l
e=f}else if(n===1){a3.X(7-o)
b=c+1
a=b+1
if(d){f+=a3.bV()
B.b.h(g,c,f)
a0=a3.bU()
a3.af(a5,i,f,a0)
f+=a0
B.b.h(g,b,f)}else{a0=a3.bU()
a3.af(a5,i,f,a0)
f+=a0
B.b.h(g,c,f)
f+=a3.bV()
B.b.h(g,b,f)}c=a
e=f}else if(n<=8){k.toString
j=k+(n-5)
b=c+1
B.b.h(g,c,j)
d=!d
if(d)a3.af(a5,i,f,j-f)
a3.X(7-o)
f=j
c=b
e=f}else if(n===11){if(a3.a9(3)!==7)throw A.d(A.f("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.a9(1)!==1;)++a1
if(a1>5){a1-=6
if(!d&&a1>0){b=c+1
B.b.h(g,c,f)
c=b}f+=a1
if(a1>0)d=!0
if(a3.a9(1)===0){if(!d){b=c+1
B.b.h(g,c,f)
c=b}d=!0}else{if(d){b=c+1
B.b.h(g,c,f)
c=b}d=!1}a2=!0}if(a1===5){if(!d){b=c+1
B.b.h(g,c,f)
c=b}f+=a1
d=!0}else{f+=a1
b=c+1
B.b.h(g,c,f)
a3.af(a5,i,f,1);++f
c=b
d=!1}}}else throw A.d(A.f("TIFFFaxDecoder5 "+n))}B.b.h(g,c,f)
a3.d=c+1
i+=r}},
bV(){var s,r,q,p,o,n,m,l=this
for(s=null,r=0,q=!0;q;){p=l.aP(10)
if(!(p<1024))return A.a(B.F,p)
o=B.F[p]
n=B.a.i(o,1)&15
if(n===12){s=l.a9(2)
p=(p<<2&12|s)>>>0
if(!(p<16))return A.a(B.l,p)
o=B.l[p]
m=B.a.i(o,1)
r+=B.a.i(o,4)&4095
l.X(4-(m&7))}else if(n===0)throw A.d(A.f("TIFFFaxDecoder0"))
else if(n===15)throw A.d(A.f("TIFFFaxDecoder1"))
else{r+=B.a.i(o,5)&2047
l.X(10-n)
if((o&1)===0)q=!1}}return r},
bU(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.a9(4)
if(!(q<16))return A.a(B.z,q)
p=B.z[q]
o=p>>>5&2047
if(o===100){q=l.aP(9)
if(!(q<512))return A.a(B.I,q)
p=B.I[q]
n=B.a.i(p,1)&15
m=B.a.i(p,5)
if(n===12){l.X(5)
q=l.a9(4)
if(!(q<16))return A.a(B.l,q)
p=B.l[q]
m=B.a.i(p,1)
s+=B.a.i(p,4)&4095
l.X(4-(m&7))}else if(n===15)throw A.d(A.f("TIFFFaxDecoder2"))
else{s+=m&2047
l.X(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.a9(2)
if(!(q<4))return A.a(B.y,q)
p=B.y[q]
s+=p>>>5&2047
l.X(2-(p>>>1&15))}else{s+=o
l.X(4-(p>>>1&15))}r=!0}}return s},
dY(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.cx
if(o===0){if(q.aP(12)!==1)throw A.d(A.f("TIFFFaxDecoder6"))}else if(o===1){o=q.x
o.toString
s=8-o
if(q.aP(s)!==0)throw A.d(A.f(p))
if(s<4)if(q.aP(8)!==0)throw A.d(A.f(p))
for(;r=q.aP(8),r!==1;)if(r!==0)throw A.d(A.f(p))}if(q.cy===0)return 1
else return q.a9(1)},
dH(a,b,c){var s,r,q,p,o,n,m=this
t.cP.a(c)
s=m.e
r=m.d
q=m.z
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.z=o
B.b.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.b.h(c,1,s[n])}},
af(a,b,c,d){var s,r,q,p,o,n=8*b+A.o(c),m=n+d,l=B.a.i(n,3),k=n&7
if(k>0){s=B.a.C(1,7-k)
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
J.m(r,q,(r[q]|B.a.C(1,7-(n&7)))>>>0);++n}},
aP(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="data",f=A.b(h.r,g),e=f.c-f.d-1,d=h.y
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
f=h.x
f.toString
n=8-f
m=a-n
if(m>8){l=m-8
k=8}else{k=m
l=0}f=h.y
f.toString
f=h.y=f+1
if(!(n>=0&&n<9))return A.a(B.j,n)
j=B.a.C(r&B.j[n],m)
if(!(k>=0))return A.a(B.q,k)
i=B.a.a5(q&B.q[k],8-k)
if(l!==0){i=B.a.C(i,l)
if(!(l<9))return A.a(B.q,l)
i|=B.a.a5(p&B.q[l],8-l)
h.y=f+1
h.x=l}else if(k===8){h.x=0
h.y=f+1}else h.x=k
return(j|i)>>>0},
a9(a){var s,r,q,p,o,n,m,l=this,k="data",j=A.b(l.r,k),i=j.c-j.d-1,h=l.y
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
j=l.x
j.toString
p=8-j
o=a-p
n=p-a
if(n>=0){if(!(p>=0&&p<9))return A.a(B.j,p)
m=B.a.a5(r&B.j[p],n)
j+=a
l.x=j
if(j===8){l.x=0
j=l.y
j.toString
l.y=j+1}}else{if(!(p>=0&&p<9))return A.a(B.j,p)
m=B.a.C(r&B.j[p],-n)
if(!(o>=0&&o<9))return A.a(B.q,o)
m=(m|B.a.a5(q&B.q[o],8-o))>>>0
j=l.y
j.toString
l.y=j+1
l.x=o}return m},
X(a){var s,r=this,q=r.x
q.toString
s=q-a
if(s<0){q=r.y
q.toString
r.y=q-1
r.x=8+s}else r.x=s},
scU(a){this.e=t.m.a(a)},
scT(a){this.f=t.m.a(a)}}
A.ej.prototype={
f9(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.i(a,null,0),f=a.k()
for(s=h.a,r=0;r<f;++r){q=a.k()
p=a.k()
o=a.j()
n=new A.ei(q,p,o,g)
if(p<13&&p>0){if(!(p<14))return A.a(B.ao,p)
m=B.ao[p]}else m=0
if(o*m>4)n.d=a.j()
else{m=a.d
n.d=m
a.d=m+4}s.h(0,q,n)
if(q===256){m=n.d
m.toString
g.d=m
h.b=n.av()}else if(q===257){m=n.d
m.toString
g.d=m
h.c=n.av()}else if(q===262){m=n.d
m.toString
g.d=m
h.d=n.av()}else if(q===259){m=n.d
m.toString
g.d=m
h.e=n.av()}else if(q===258){m=n.d
m.toString
g.d=m
h.f=n.av()}else if(q===277){m=n.d
m.toString
g.d=m
h.r=n.av()}else if(q===317){m=n.d
m.toString
g.d=m
h.Q=n.av()}else if(q===339){m=n.d
m.toString
g.d=m
h.x=n.av()}else if(q===320){h.six(n.cW())
h.r1=0
m=h.k4.length/3|0
h.r2=m
h.rx=A.b(m,"colorMapGreen")*2}}if(h.b===0||h.c===0)return
m=h.k4
if(m!=null&&h.f===8)for(l=m.length,r=0;r<l;++r){m=h.k4
if(!(r<m.length))return A.a(m,r)
B.b.h(m,r,B.a.i(m[r],8))}if(h.d===0)h.z=!0
if(s.a3(324)){h.db=h.bb(322)
h.dx=h.bb(323)
h.seC(h.c2(324))
h.seB(h.c2(325))}else{h.db=h.c1(322,h.b)
if(!s.a3(278))h.dx=h.c1(323,h.c)
else{k=h.bb(278)
if(k===-1)h.dx=h.c
else h.dx=k}h.seC(h.c2(273))
h.seB(h.c2(279))}m=h.b
j=h.db
h.fx=B.a.V(m+j-1,j)
j=h.c
m=h.dx
h.fy=B.a.V(j+m-1,m)
h.id=h.c1(266,1)
h.k1=h.bb(292)
h.k2=h.bb(293)
h.bb(338)
switch(h.d){case 0:case 1:s=h.f
if(s===1&&h.r===1)h.y=0
else if(s===4&&h.r===1)h.y=1
else if(B.a.L(s,8)===0){s=h.r
if(s===1)h.y=2
else if(s===2)h.y=3
else h.y=8}break
case 2:if(B.a.L(h.f,8)===0){s=h.r
if(s===3)h.y=5
else if(s===4)h.y=6
else h.y=8}break
case 3:if(h.r===1){s=h.f
s=s===4||s===8||s===16}else s=!1
if(s)h.y=4
break
case 4:if(h.f===1&&h.r===1)h.y=0
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=5
else{if(s.a3(530)){i=s.p(0,530).cW()
s=i.length
if(0>=s)return A.a(i,0)
m=h.ch=i[0]
if(1>=s)return A.a(i,1)
h.cx=i[1]
s=m}else s=h.cx=h.ch=2
if(A.b(s,"chromaSubH")*A.b(h.cx,"chromaSubV")===1)h.y=8
else if(h.f===8&&h.r===3)h.y=7}break
default:if(B.a.L(h.f,8)===0)h.y=8
break}},
iE(a){var s,r,q,p,o=this
o.ry=A.R(o.b,o.c,B.e,null,null)
for(s=0,r=0;s<A.b(o.fy,"tilesY");++s)for(q=0;q<A.b(o.fx,"tilesX");++q,++r)o.fS(a,q,s)
p=o.ry
p.toString
return p},
fS(c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="colorMapRed",b9="colorMapGreen",c0="colorMapBlue"
if(b6.y===0){b6.fK(c1,c2,c3)
return}o=c3*A.b(b6.fx,"tilesX")+c2
n=b6.dy
if(!(o>=0&&o<n.length))return A.a(n,o)
c1.d=n[o]
n=b6.db
m=c2*n
l=b6.dx
k=c3*l
j=b6.fr
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
q=A.jW()
try{q.el(A.i(c1,s,0),r.a)}catch(h){p=A.ab(h)
A.eI(p)}if(b6.Q===2)for(g=0;g<b6.dx;++g){f=b6.r
n=b6.db
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
b6.dz(c1,i,r.a)}else if(n===32946){n=A.jI(c1.bG(0,0,s)).c
r=A.l(t.L.a(A.G(n.c.buffer,0,n.a)),!1,b7,0)}else if(n===8)r=A.l(B.r.bz(A.be(t.L.a(c1.bG(0,0,s)),1,b7,0),!1),!1,b7,0)
else if(n===6){if(b6.ry==null)b6.ry=A.R(b6.b,b6.c,B.e,b7,b7)
a0=new A.dP().am(c1.bG(0,0,s))
n=b6.ry
n.toString
b6.hn(a0,n,m,k,b6.db,b6.dx)
if(b6.x1!=null){n=b6.ry
n.toString
l=new A.dx(A.W(t.dk,t.r))
l.f3(n,16,3)
b6.x1=l}return}else throw A.d(A.f("Unsupported Compression Type: "+n))
a1=k
a2=0
while(!0){if(!(a2<b6.dx&&a1<b6.c))break
a3=m
a4=0
while(!0){if(!(a4<b6.db&&a3<b6.b))break
n=b6.r
if(n===1){n=b6.x
if(n===3){n=b6.f
if(n===32){n=r.j()
$.z()[0]=n
n=$.b8()
if(0>=n.length)return A.a(n,0)
a5=n[0]}else if(n===64)a5=r.cc()
else if(n===16){n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
a5=l[n]}else a5=0
n=b6.x1
if(n!=null)n.aX(a3,a1,a5)
if(b6.ry!=null){a6=B.c.l(B.c.n(a5*255,0,255))
if(b6.d===3&&b6.k4!=null){n=b6.k4
n.toString
l=A.b(b6.r1,b8)+a6
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=b6.k4
n.toString
j=A.b(b6.r2,b9)+a6
if(!(j>=0&&j<n.length))return A.a(n,j)
j=n[j]
n=b6.k4
n.toString
c=A.b(b6.rx,c0)+a6
if(!(c>=0&&c<n.length))return A.a(n,c)
c=n[c]
a7=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(c,0,255))<<16|B.c.l(B.a.n(j,0,255))<<8|B.c.l(B.a.n(l,0,255)))>>>0}else a7=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(a6,0,255))<<16|B.c.l(B.a.n(a6,0,255))<<8|B.c.l(B.a.n(a6,0,255)))>>>0
n=b6.ry
l=n.y
n=a1*n.a+a3
if(!(n>=0&&n<l.length))return A.a(l,n)
l[n]=a7}}else{l=b6.f
if(l===8)if(n===2){n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
$.T()[0]=n
n=$.Z()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
a6=l[n]}else if(l===16)if(n===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.k()
else if(l===32)if(n===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.j()
else a6=0
n=b6.x1
if(n!=null)n.aX(a3,a1,a6)
if(b6.ry!=null){n=b6.f
if(n===16)a6=B.a.i(a6,8)
else if(n===32)a6=B.a.i(a6,24)
n=b6.d
if(n===0)a6=255-a6
if(n===3&&b6.k4!=null){n=b6.k4
n.toString
l=A.b(b6.r1,b8)+a6
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=b6.k4
n.toString
j=A.b(b6.r2,b9)+a6
if(!(j>=0&&j<n.length))return A.a(n,j)
j=n[j]
n=b6.k4
n.toString
c=A.b(b6.rx,c0)+a6
if(!(c>=0&&c<n.length))return A.a(n,c)
c=n[c]
a7=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(c,0,255))<<16|B.c.l(B.a.n(j,0,255))<<8|B.c.l(B.a.n(l,0,255)))>>>0}else a7=(B.c.l(B.a.n(255,0,255))<<24|B.c.l(B.a.n(a6,0,255))<<16|B.c.l(B.a.n(a6,0,255))<<8|B.c.l(B.a.n(a6,0,255)))>>>0
n=b6.ry
l=n.y
n=a1*n.a+a3
if(!(n>=0&&n<l.length))return A.a(l,n)
l[n]=a7}}}else if(n===2){n=b6.f
if(n===8){n=b6.x===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.T()[0]=l
l=$.Z()
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
$.T()[0]=n
n=$.Z()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
a8=l[n]}}else if(n===16){if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else a8=r.k()}else if(n===32){if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
a6=n[0]}else a6=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
a8=n[0]}else a8=r.j()}else{a6=0
a8=0}n=b6.x1
if(n!=null){n.aX(a3,a1,a6)
b6.x1.bm(a3,a1,a8)}if(b6.ry!=null){n=b6.f
l=n===16
if(l)a6=B.a.i(a6,8)
else if(n===32)a6=B.a.i(a6,24)
if(l)a8=B.a.i(a8,8)
else if(n===32)a8=B.a.i(a8,24)
n=B.c.l(B.a.n(a8,0,255))
l=B.c.l(B.a.n(a6,0,255))
j=B.c.l(B.a.n(a6,0,255))
c=B.c.l(B.a.n(a6,0,255))
b=b6.ry
a=b.y
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else if(n===3){n=b6.x
if(n===3){n=b6.f
if(n===32){n=r.j()
l=$.z()
l[0]=n
n=$.b8()
if(0>=n.length)return A.a(n,0)
a9=n[0]
l[0]=r.j()
b0=n[0]
l[0]=r.j()
b1=n[0]}else if(n===64){a9=r.cc()
b0=0
b1=0}else if(n===16){n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
a9=l[n]
n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
b0=l[n]
n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
b1=l[n]}else{a9=0
b0=0
b1=0}n=b6.x1
if(n!=null){n.aX(a3,a1,a9)
b6.x1.bm(a3,a1,b0)
b6.x1.bM(a3,a1,b1)}if(b6.ry!=null){b2=B.c.l(B.c.n(a9*255,0,255))
b3=B.c.l(B.c.n(b0*255,0,255))
b4=B.c.l(B.c.n(b1*255,0,255))
n=B.c.l(B.a.n(255,0,255))
l=B.c.l(B.a.n(b4,0,255))
j=B.c.l(B.a.n(b3,0,255))
c=B.c.l(B.a.n(b2,0,255))
b=b6.ry
a=b.y
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){n=n===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.T()[0]=l
l=$.Z()
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
$.T()[0]=l
l=$.Z()
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
$.T()[0]=n
n=$.Z()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
b1=l[n]}}else if(l===16){if(n===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.k()}else if(l===32){if(n===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.j()}else{a9=0
b0=0
b1=0}n=b6.x1
if(n!=null){n.aX(a3,a1,a9)
b6.x1.bm(a3,a1,b0)
b6.x1.bM(a3,a1,b1)}if(b6.ry!=null){n=b6.f
l=n===16
if(l)a9=B.a.i(a9,8)
else if(n===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(n===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(n===32)b1=B.a.i(b1,24)
n=B.c.l(B.a.n(255,0,255))
l=B.c.l(B.a.n(b1,0,255))
j=B.c.l(B.a.n(b0,0,255))
c=B.c.l(B.a.n(a9,0,255))
b=b6.ry
a=b.y
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}}else if(n>=4){n=b6.x
if(n===3){n=b6.f
if(n===32){n=r.j()
l=$.z()
l[0]=n
n=$.b8()
if(0>=n.length)return A.a(n,0)
a9=n[0]
l[0]=r.j()
b0=n[0]
l[0]=r.j()
b1=n[0]
l[0]=r.j()
b5=n[0]}else if(n===64){a9=r.cc()
b0=0
b1=0
b5=0}else if(n===16){n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
a9=l[n]
n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
b0=l[n]
n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
b1=l[n]
n=r.k()
if($.L==null)A.aF()
l=$.L
if(!(n<l.length))return A.a(l,n)
b5=l[n]}else{a9=0
b0=0
b1=0
b5=0}n=b6.x1
if(n!=null){n.aX(a3,a1,a9)
b6.x1.bm(a3,a1,b0)
b6.x1.bM(a3,a1,b1)
b6.x1.d2(a3,a1,b5)}if(b6.ry!=null){b2=B.c.l(B.c.n(a9*255,0,255))
b3=B.c.l(B.c.n(b0*255,0,255))
b4=B.c.l(B.c.n(b1*255,0,255))
n=B.c.l(B.a.n(B.c.l(B.c.n(b5*255,0,255)),0,255))
l=B.c.l(B.a.n(b4,0,255))
j=B.c.l(B.a.n(b3,0,255))
c=B.c.l(B.a.n(b2,0,255))
b=b6.ry
a=b.y
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){n=n===2
if(n){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.T()[0]=l
l=$.Z()
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
$.T()[0]=l
l=$.Z()
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
$.T()[0]=l
l=$.Z()
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
$.T()[0]=n
n=$.Z()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else{n=r
l=n.a
n=n.d++
if(!(n>=0&&n<l.length))return A.a(l,n)
b5=l[n]}}else if(l===16){if(n===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.k()
if(b6.x===2){n=r.k()
$.Y()[0]=n
n=$.a2()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else b5=r.k()}else if(l===32){if(n===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
a9=n[0]}else a9=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
b0=n[0]}else b0=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
b1=n[0]}else b1=r.j()
if(b6.x===2){n=r.j()
$.z()[0]=n
n=$.N()
if(0>=n.length)return A.a(n,0)
b5=n[0]}else b5=r.j()}else{a9=0
b0=0
b1=0
b5=0}n=b6.x1
if(n!=null){n.aX(a3,a1,a9)
b6.x1.bm(a3,a1,b0)
b6.x1.bM(a3,a1,b1)
b6.x1.d2(a3,a1,b5)}if(b6.ry!=null){n=b6.f
l=n===16
if(l)a9=B.a.i(a9,8)
else if(n===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(n===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(n===32)b1=B.a.i(b1,24)
if(l)b5=B.a.i(b5,8)
else if(n===32)b5=B.a.i(b5,24)
n=B.c.l(B.a.n(b5,0,255))
l=B.c.l(B.a.n(b1,0,255))
j=B.c.l(B.a.n(b0,0,255))
c=B.c.l(B.a.n(a9,0,255))
b=b6.ry
a=b.y
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(n<<24|l<<16|j<<8|c)>>>0}}}++a4;++a3}++a2;++a1}}else throw A.d(A.f("Unsupported bitsPerSample: "+n))},
hn(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.y,r=a.a,q=s.length,p=b.y,o=b.a,n=p.length,m=0;m<f;++m)for(l=m*r,k=(m+d)*o,j=0;j<e;++j){i=l+j
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=k+(j+c)
if(!(h>=0&&h<n))return A.a(p,h)
p[h]=i}},
fK(b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=4278190080,a7=4294967295,a8=b2*A.b(a4.fx,"tilesX")+b1,a9=a4.dy
if(!(a8>=0&&a8<a9.length))return A.a(a9,a8)
b0.d=a9[a8]
a9=a4.db
r=b1*a9
q=a4.dx
p=b2*q
o=a4.fr
if(!(a8<o.length))return A.a(o,a8)
n=o[a8]
s=null
o=a4.e
if(o===32773){m=B.a.L(a9,8)===0?B.a.F(a9,8)*q:(B.a.F(a9,8)+1)*q
s=A.l(new Uint8Array(a9*q),!1,a5,0)
a4.dz(b0,m,s.a)}else if(o===5){s=A.l(new Uint8Array(a9*q),!1,a5,0)
A.jW().el(A.i(b0,n,0),s.a)
if(a4.Q===2)for(l=0;l<a4.c;++l){k=a4.r
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
try{A.j0(a4.id,a9,q).iG(s,b0,0,a4.dx)}catch(f){}}else if(o===3){s=A.l(new Uint8Array(a9*q),!1,a5,0)
try{A.j0(a4.id,a9,q).iH(s,b0,0,a4.dx,a4.k1)}catch(f){}}else if(o===4){s=A.l(new Uint8Array(a9*q),!1,a5,0)
try{A.j0(a4.id,a9,q).iL(s,b0,0,a4.dx,a4.k2)}catch(f){}}else if(o===8)s=A.l(B.r.bz(A.be(t.L.a(b0.bG(0,0,n)),1,a5,0),!1),!1,a5,0)
else if(o===32946){a9=A.jI(b0.bG(0,0,n)).c
s=A.l(t.L.a(A.G(a9.c.buffer,0,a9.a)),!1,a5,0)}else if(o===1)s=b0
else throw A.d(A.f("Unsupported Compression Type: "+o))
e=new A.fZ(s)
a9=a4.z
d=a9?a6:a7
c=a9?a7:a6
b=a4.ry
for(a9=b.y,q=b.a,o=a9.length,i=b.b,a=p,a0=0;a0<a4.dx;++a0,++a){for(h=a*q,g=a<i,a1=r,a2=0;a2<a4.db;++a2,++a1){if(!g||a1>=q)break
a3=h+a1
if(e.J(1)===0){if(!(a3>=0&&a3<o))return A.a(a9,a3)
a9[a3]=c}else{if(!(a3>=0&&a3<o))return A.a(a9,a3)
a9[a3]=d}}e.c=0}},
dz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(c)
for(s=J.M(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.T()[0]=m
m=$.Z()
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
c1(a,b){var s=this.a
if(!s.a3(a))return b
return s.p(0,a).jc()},
bb(a){return this.c1(a,0)},
c2(a){var s=this.a
if(!s.a3(a))return null
return s.p(0,a).cW()},
seC(a){this.dy=t.T.a(a)},
seB(a){this.fr=t.T.a(a)},
six(a){this.k4=t.T.a(a)}}
A.h1.prototype={}
A.fB.prototype={
el(a,b){var s,r,q,p,o,n,m,l,k=this,j="_data",i="_outPointer",h="_out",g="_bufferLength"
t.L.a(b)
k.sff(b)
s=b.length
k.x=0
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
k.dN()
k.d=k.c=0
q=k.cA()
r=k.y
p=0
while(!0){if(!(q!==257&&A.b(k.x,i)<s))break
if(q===256){k.dN()
q=k.cA()
k.cx=0
if(q===257)break
o=A.b(k.r,h)
n=A.b(k.x,i)
k.x=n+1
J.m(o,n,q)
p=q}else{o=k.ch
o.toString
if(q<o){k.dI(q)
for(m=A.b(k.cx,g)-1;m>=0;--m){o=A.b(k.r,h)
n=A.b(k.x,i)
k.x=n+1
if(!(m<4096))return A.a(r,m)
J.m(o,n,r[m])}o=A.b(k.cx,g)-1
if(!(o>=0&&o<4096))return A.a(r,o)
k.dc(p,r[o])}else{k.dI(p)
for(m=A.b(k.cx,g)-1;m>=0;--m){o=A.b(k.r,h)
n=A.b(k.x,i)
k.x=n+1
if(!(m<4096))return A.a(r,m)
J.m(o,n,r[m])}o=A.b(k.r,h)
n=A.b(k.x,i)
k.x=n+1
l=A.b(k.cx,g)-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.m(o,n,r[l])
l=A.b(k.cx,g)-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.dc(p,r[l])}p=q}q=k.cA()}},
dc(a,b){var s=this,r=A.b(s.z,"_table"),q=s.ch
q.toString
if(!(q<r.length))return A.a(r,q)
r[q]=b
q=A.b(s.Q,"_prefix")
r=s.ch
r.toString
if(!(r<q.length))return A.a(q,r)
q[r]=a
r=s.ch=r+1
if(r===511)s.a=10
else if(r===1023)s.a=11
else if(r===2047)s.a=12},
dI(a){var s,r,q,p,o=this,n="_bufferLength"
o.cx=0
s=o.y
r=A.b(0,n)
o.cx=r+1
q=A.b(o.z,"_table")
if(!(a<q.length))return A.a(q,a)
q=q[a]
if(r>>>0!==r||r>=4096)return A.a(s,r)
s[r]=q
q=A.b(o.Q,"_prefix")
if(!(a<q.length))return A.a(q,a)
p=q[a]
for(;p!==4098;){r=A.b(o.cx,n)
o.cx=r+1
q=A.b(o.z,"_table")
if(!(p>=0&&p<q.length))return A.a(q,p)
q=q[p]
if(r>>>0!==r||r>=4096)return A.a(s,r)
s[r]=q
q=A.b(o.Q,"_prefix")
if(!(p<q.length))return A.a(q,p)
p=q[p]}},
cA(){var s,r,q,p=this,o="_dataLength"
if(p.b>=A.b(p.f,o))return 257
for(;s=p.d,r=p.a,s<r;){if(p.b>=A.b(p.f,o))return 257
s=p.c
r=A.b(p.e,"_data")
q=p.b++
if(!(q>=0&&q<r.length))return A.a(r,q)
p.c=(s<<8>>>0)+r[q]>>>0
p.d+=8}s-=r
p.d=s
s=B.a.a5(p.c,s)
r-=9
if(!(r>=0&&r<4))return A.a(B.a4,r)
return s&B.a4[r]},
dN(){var s,r,q=this
q.z=new Uint8Array(4096)
s=new Uint32Array(4096)
q.Q=s
B.n.an(A.b(s,"_prefix"),0,A.b(q.Q,"_prefix").length,4098)
for(r=0;r<256;++r){s=A.b(q.z,"_table")
if(!(r<s.length))return A.a(s,r)
s[r]=r}q.a=9
q.ch=258},
sff(a){this.r=t.L.a(a)}}
A.h_.prototype={
am(a){var s=this,r=A.l(t.L.a(a),!1,null,0)
s.b=r
r=s.a=s.dZ(A.b(r,"_input"))
if(r==null)return null
r=r.r
if(0>=r.length)return A.a(r,0)
return r[0].iE(A.b(s.b,"_input"))},
dZ(a){var s,r,q,p,o,n,m,l,k,j=null,i=A.c([],t.aU),h=new A.h1(i),g=a.k()
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
try{n=new A.ej(A.W(q,o))
n.f9(s)
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
A.h6.prototype={
bA(){var s,r=this.a,q=r.ap()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.ap()!==2752925)return!1
s=this.b
s.a=r.k()
s.b=r.k()
return!0},
aE(){var s,r=this,q=null
if(!r.he())return q
s=r.b
r.d=A.R(s.a,s.b,B.e,q,q)
r.hj()
if(!r.hA())return q
return r.d},
he(){var s,r,q,p,o=this,n="partitionLength"
if(!o.bA())return!1
o.k2=A.mO()
for(s=o.k1,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.b.h(s,r,new A.er(q,p,new Int32Array(2)))}s=o.b
q=s.a
if(typeof q!=="number")return q.a8()
B.a.i(q,8)
s=s.b
if(typeof s!=="number")return s.a8()
B.a.i(s,8)
o.z=o.ch=0
o.Q=q
o.cx=s
o.cy=B.a.i(q+15,4)
o.db=B.a.i(s+15,4)
o.rx=0
s=o.a
q=o.f
o.c=A.k9(s.M(A.b(q.d,n)))
s.d+=A.b(q.d,n)
A.b(o.c,"br").A(1)
A.b(o.c,"br").A(1)
o.hG(o.y,o.k2)
o.hz()
if(!o.hC(s))return!1
o.hE()
A.b(o.c,"br").A(1)
o.hD()
return!0},
hG(a,b){var s,r,q,p=this,o="br",n=A.b(p.c,o).A(1)!==0
a.a=n
if(n){a.b=A.b(p.c,o).A(1)!==0
if(A.b(p.c,o).A(1)!==0){a.c=A.b(p.c,o).A(1)!==0
for(n=a.d,s=0;s<4;++s){if(A.b(p.c,o).A(1)!==0){r=A.b(p.c,o)
q=r.A(7)
r=r.A(1)===1?-q:q}else r=0
n[s]=r}for(n=a.e,s=0;s<4;++s){if(A.b(p.c,o).A(1)!==0){r=A.b(p.c,o)
q=r.A(6)
r=r.A(1)===1?-q:q}else r=0
n[s]=r}}if(a.b)for(s=0;s<3;++s){n=b.a
n[s]=A.b(p.c,o).A(1)!==0?A.b(p.c,o).A(8):255}}else a.b=!1
return!0},
hz(){var s,r,q,p,o=this,n="br",m=o.x
m.a=A.b(o.c,n).A(1)!==0
m.b=A.b(o.c,n).A(6)
m.c=A.b(o.c,n).A(3)
s=A.b(o.c,n).A(1)!==0
m.d=s
if(A.b(s,"useLfDelta"))if(A.b(o.c,n).A(1)!==0){for(s=m.e,r=0;r<4;++r)if(A.b(o.c,n).A(1)!==0){q=A.b(o.c,n)
p=q.A(6)
s[r]=q.A(1)===1?-p:p}for(s=m.f,r=0;r<4;++r)if(A.b(o.c,n).A(1)!==0){q=A.b(o.c,n)
p=q.A(6)
s[r]=q.A(1)===1?-p:p}}if(m.b===0)s=0
else s=A.b(m.a,"simple")?1:2
o.ah=s
return!0},
hC(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=B.a.w(1,A.b(this.c,"br").A(2))
this.fy=g
s=A.b(g,"_numPartitions")-1
r=s*3
if(h<r)return!1
for(g=this.go,q=0,p=0;p<s;++p,r=i){o=a.b7(3,q)
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
n=new A.cM(a.aY(i-r,r))
n.b=254
n.c=0
n.d=-8
B.b.h(g,p,n)
q+=3}B.b.h(g,s,A.k9(a.aY(h-r,a.d-a.b+r)))
return r<h},
hE(){var s,r,q,p,o,n,m,l=this,k="br",j=A.b(l.c,k).A(7),i=A.b(l.c,k).A(1)!==0?A.b(l.c,k).bl(4):0,h=A.b(l.c,k).A(1)!==0?A.b(l.c,k).bl(4):0,g=A.b(l.c,k).A(1)!==0?A.b(l.c,k).bl(4):0,f=A.b(l.c,k).A(1)!==0?A.b(l.c,k).bl(4):0,e=A.b(l.c,k).A(1)!==0?A.b(l.c,k).bl(4):0,d=l.y
for(s=l.k1,r=d.d,q=0;q<4;++q){if(d.a){p=r[q]
if(!d.c)p+=j}else{if(q>0){o=s[0]
if(!(q>=0&&q<4))return A.a(s,q)
s[q]=o
continue}p=j}n=s[q]
o=n.a
m=p+i
if(m<0)m=0
else if(m>127)m=127
o[0]=B.Q[m]
if(p<0)m=0
else m=p>127?127:p
o[1]=B.R[m]
m=n.b
o=p+h
if(o<0)o=0
else if(o>127)o=127
m[0]=B.Q[o]*2
o=p+g
if(o<0)o=0
else if(o>127)o=127
m[1]=B.R[o]*101581>>>16
if(m[1]<8)m[1]=8
o=n.c
m=p+f
if(m<0)m=0
else if(m>117)m=117
o[0]=B.Q[m]
m=p+e
if(m<0)m=0
else if(m>127)m=127
o[1]=B.R[m]}},
hD(){var s,r,q,p,o,n,m=this,l="br",k=m.k2
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=A.b(m.c,l).G(B.bN[s][r][q][p])!==0?A.b(m.c,l).A(8):B.c3[s][r][q][p]
n=k.b
if(!(s<n.length))return A.a(n,s)
n=n[s]
if(!(r<n.length))return A.a(n,r)
n=n[r].a
if(!(q<n.length))return A.a(n,q)
n[q][p]=o}n=A.b(m.c,l).A(1)!==0
m.k3=n
if(A.b(n,"_useSkipProba"))m.k4=A.b(m.c,l).A(8)},
hI(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="sharpness",f=h.ah
f.toString
if(f>0){s=h.x
for(f=s.e,r=s.f,q=h.y,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){k=J.n(J.n(A.b(h.ad,"_fStrengths"),o),l)
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
hj(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.cy
if(f!=null)i.aS=f
s=J.a3(4,t.e6)
for(f=t.ao,r=0;r<4;++r)s[r]=A.c([new A.aL(),new A.aL()],f)
i.sfl(t.gS.a(s))
f=i.cy
f.toString
s=J.a3(f,t.dE)
for(q=0;q<f;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.cQ(p,o,new Uint8Array(8))}i.sfo(t.cC.a(s))
i.y1=new Uint8Array(832)
f=i.cy
f.toString
i.r1=new Uint8Array(4*f)
p=i.N=16*f
f=i.aa=8*f
o=i.ah
o.toString
if(!(o<3))return A.a(B.x,o)
n=B.x[o]
m=n*p
l=(n/2|0)*f
i.y2=A.l(new Uint8Array(16*p+m),!1,h,m)
f=8*f+l
i.Z=A.l(new Uint8Array(f),!1,h,l)
i.a6=A.l(new Uint8Array(f),!1,h,l)
g=g.a
i.b2=A.l(new Uint8Array(g),!1,h,0)
k=B.a.i(g+1,1)
i.bB=A.l(new Uint8Array(k),!1,h,0)
i.be=A.l(new Uint8Array(k),!1,h,0)
if(o===2)i.dy=i.dx=0
else{g=B.a.F(A.b(i.z,"_cropLeft")-n,16)
i.dx=g
f=i.ch
f.toString
i.dy=B.a.F(f-n,16)
if(A.b(g,"_tlMbX")<0)i.dx=0
if(A.b(i.dy,"_tlMbY")<0)i.dy=0}g=i.cx
g.toString
i.fx=B.a.F(g+15+n,16)
g=B.a.F(A.b(i.Q,"_cropRight")+15+n,16)
i.fr=g
f=i.cy
f.toString
if(g>f)i.fr=f
g=i.fx
g.toString
p=i.db
p.toString
if(g>p)i.fx=p
j=f+1
s=J.a3(j,t.ai)
for(q=0;q<j;++q)s[q]=new A.cO()
i.sfn(t.eQ.a(s))
g=i.cy
g.toString
s=J.a3(g,t.gT)
for(q=0;q<g;++q){f=new Int16Array(384)
s[q]=new A.cP(f,new Uint8Array(16))}i.sfm(t.db.a(s))
g=i.cy
g.toString
i.sfk(t.ge.a(A.S(g,h,!1,t.aj)))
i.hI()
A.mz()
i.e=new A.h7()
return!0},
hA(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_mbInfo",e="br",d="isIntra4x4"
g.ag=0
s=g.r2
r=g.y
q=g.go
p=0
while(!0){o=g.fx
o.toString
if(!(p<o))break
p=(p&A.b(g.fy,"_numPartitions")-1)>>>0
if(!(p>=0&&p<8))return A.a(q,p)
n=q[p]
while(!0){p=g.ac
o=g.cy
o.toString
if(!(p<o))break
m=J.n(A.b(g.x1,f),0)
l=J.n(A.b(g.x1,f),1+g.ac)
k=J.n(A.b(g.a1,"_mbData"),g.ac)
if(r.b){p=A.b(g.c,e).G(g.k2.a[0])
o=g.c
g.rx=p===0?A.b(o,e).G(g.k2.a[1]):2+A.b(o,e).G(g.k2.a[2])}j=A.b(g.k3,"_useSkipProba")&&A.b(g.c,e).G(A.b(g.k4,"_skipP"))!==0
g.hB()
if(!j)j=g.hF(l,n)
else{m.a=l.a=0
if(!A.b(k.b,d))m.b=l.b=0
k.f=k.e=0}p=g.ah
p.toString
if(p>0){p=A.b(g.x2,"_fInfo")
o=g.ac
i=J.n(A.b(g.ad,"_fStrengths"),A.b(g.rx,"_segment"))
J.m(p,o,J.n(i,A.b(k.b,d)?1:0))
p=J.n(A.b(g.x2,"_fInfo"),g.ac)
p.toString
p.c=p.c||!j}++g.ac}m=J.n(A.b(g.x1,f),0)
m.b=m.a=0
B.d.an(s,0,4,0)
g.ac=0
g.ic()
p=g.ah
p.toString
if(p>0)if(g.ag>=A.b(g.dy,"_tlMbY")){p=g.ag
o=g.fx
o.toString
o=p<=o
h=o}else h=!1
else h=!1
if(!g.ha(h))return!1
p=++g.ag}return!0},
ic(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="_yuvBlock",a2="_dsp",a3=a.ag,a4=A.l(A.b(a.y1,a1),!1,a0,40),a5=A.l(A.b(a.y1,a1),!1,a0,584),a6=A.l(A.b(a.y1,a1),!1,a0,600),a7=a3>0,a8=0
while(!0){s=a.cy
s.toString
if(!(a8<s))break
r=J.n(A.b(a.a1,"_mbData"),a8)
if(a8>0){for(q=-1;q<16;++q){s=q*32
a4.ao(s-4,4,a4,s+12)}for(q=-1;q<8;++q){s=q*32
p=s-4
s+=4
a5.ao(p,4,a5,s)
a6.ao(p,4,a6,s)}}else{for(q=0;q<16;++q)J.m(a4.a,a4.d+(q*32-1),129)
for(q=0;q<8;++q){s=q*32-1
J.m(a5.a,a5.d+s,129)
J.m(a6.a,a6.d+s,129)}if(a7){J.m(a6.a,a6.d+-33,129)
J.m(a5.a,a5.d+-33,129)
J.m(a4.a,a4.d+-33,129)}}o=J.n(A.b(a.ry,"_yuvT"),a8)
n=r.a
m=r.e
if(a7){a4.aT(-32,16,o.a)
a5.aT(-32,8,o.b)
a6.aT(-32,8,o.c)}else if(a8===0){s=a4.a
p=a4.d+-33
J.aB(s,p,p+21,127)
p=a5.a
s=a5.d+-33
J.aB(p,s,s+9,127)
s=a6.a
p=a6.d+-33
J.aB(s,p,p+9,127)}if(A.b(r.b,"isIntra4x4")){l=A.i(a4,a0,-16)
k=l.bI()
if(a7){s=a.cy
s.toString
if(a8>=s-1){s=o.a[15]
p=l.a
j=l.d
J.aB(p,j,j+4,s)}else l.aT(0,4,J.n(A.b(a.ry,"_yuvT"),a8+1).a)}s=k.length
if(0>=s)return A.a(k,0)
i=k[0]
if(96>=s)return A.a(k,96)
k[96]=i
k[64]=i
k[32]=i
for(s=r.c,h=0;h<16;++h,m=m<<2>>>0){g=A.i(a4,a0,B.ad[h])
p=s[h]
if(!(p<10))return A.a(B.an,p)
B.an[p].$1(g)
m.toString
p=h*16
a.dA(m,new A.V(n,p,384,p,!1),g)}}else{s=A.kc(a8,a3,r.c[0])
s.toString
if(!(s<7))return A.a(B.a6,s)
B.a6[s].$1(a4)
if(m!==0)for(h=0;h<16;++h,m=m<<2>>>0){g=A.i(a4,a0,B.ad[h])
m.toString
s=h*16
a.dA(m,new A.V(n,s,384,s,!1),g)}}s=A.b(r.f,"nonZeroUV")
p=A.kc(a8,a3,r.d)
p.toString
if(!(p<7))return A.a(B.O,p)
B.O[p].$1(a5)
B.O[p].$1(a6)
f=new A.V(n,256,384,256,!1)
if((s&255)!==0){p=a.e
if((s&170)!==0){p=A.b(p,a2)
p.az(f,a5)
p.az(A.i(f,a0,16),A.i(a5,a0,4))
j=A.i(f,a0,32)
e=A.i(a5,a0,128)
p.az(j,e)
p.az(A.i(j,a0,16),A.i(e,a0,4))}else A.b(p,a2).eF(f,a5)}d=new A.V(n,320,384,320,!1)
s=B.a.i(s,8)
if((s&255)!==0){p=a.e
if((s&170)!==0){s=A.b(p,a2)
s.az(d,a6)
s.az(A.i(d,a0,16),A.i(a6,a0,4))
p=A.i(d,a0,32)
j=A.i(a6,a0,128)
s.az(p,j)
s.az(A.i(p,a0,16),A.i(j,a0,4))}else A.b(p,a2).eF(d,a6)}s=a.db
s.toString
if(a3<s-1){B.d.a_(o.a,0,16,a4.R(),480)
B.d.a_(o.b,0,8,a5.R(),224)
B.d.a_(o.c,0,8,a6.R(),224)}c=a8*16
b=a8*8
for(q=0;q<16;++q){s=a.N
s.toString
A.b(a.y2,"_cacheY").ao(c+q*s,16,a4,q*32)}for(q=0;q<8;++q){s=a.aa
s.toString
p=q*32
A.b(a.Z,"_cacheU").ao(b+q*s,8,a5,p)
s=a.aa
s.toString
A.b(a.a6,"_cacheV").ao(b+q*s,8,a6,p)}++a8}},
dA(a,b,c){var s,r,q,p,o,n,m,l,k="_dsp"
switch(a>>>30){case 3:A.b(this.e,k).jl(b,c,!1)
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
A.hb(c,0,p+n,l,m)
A.hb(c,1,p+o,l,m)
A.hb(c,2,p-o,l,m)
A.hb(c,3,p-n,l,m)
break
case 1:A.b(this.e,k).bJ(b,c)
break
default:break}},
h0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.N,d=J.n(A.b(h.x2,"_fInfo"),a)
d.toString
s=A.i(A.b(h.y2,"_cacheY"),g,a*16)
r=d.b
q=d.a
if(q===0)return
if(h.ah===1){if(a>0){p=A.b(h.e,f)
e.toString
p.d4(s,e,q+4)}if(d.c){p=A.b(h.e,f)
e.toString
p.eR(s,e,q)}if(b>0){p=A.b(h.e,f)
e.toString
p.d5(s,e,q+4)}if(d.c){d=A.b(h.e,f)
e.toString
d.eS(s,e,q)}}else{o=h.aa
p=a*8
n=A.i(A.b(h.Z,"_cacheU"),g,p)
m=A.i(A.b(h.a6,"_cacheV"),g,p)
l=d.d
if(a>0){p=A.b(h.e,f)
e.toString
k=q+4
p.b9(s,1,e,16,k,r,l)
p=A.b(h.e,f)
o.toString
p.b9(n,1,o,8,k,r,l)
p.b9(m,1,o,8,k,r,l)}if(d.c){p=A.b(h.e,f)
e.toString
p.iT(s,e,q,r,l)
p=A.b(h.e,f)
o.toString
j=A.i(n,g,4)
i=A.i(m,g,4)
p.b8(j,1,o,8,q,r,l)
p.b8(i,1,o,8,q,r,l)}if(b>0){p=A.b(h.e,f)
e.toString
k=q+4
p.b9(s,e,1,16,k,r,l)
p=A.b(h.e,f)
o.toString
p.b9(n,o,1,8,k,r,l)
p.b9(m,o,1,8,k,r,l)}if(d.c){d=A.b(h.e,f)
e.toString
d.jo(s,e,q,r,l)
d=A.b(h.e,f)
o.toString
p=4*o
j=A.i(n,g,p)
i=A.i(m,g,p)
d.b8(j,o,1,8,q,r,l)
d.b8(i,o,1,8,q,r,l)}}},
h9(){var s,r=this,q=A.b(r.dx,"_tlMbX")
while(!0){s=r.fr
s.toString
if(!(q<s))break
r.h0(q,r.ag);++q}},
ha(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="_cacheY",a1="_cacheU",a2="_cacheV",a3="_cropLeft",a4=b.ah
a4.toString
if(!(a4<3))return A.a(B.x,a4)
s=B.x[a4]
a4=b.N
a4.toString
r=s*a4
a4=b.aa
a4.toString
q=(s/2|0)*a4
a4=-r
p=A.i(A.b(b.y2,a0),a,a4)
o=-q
n=A.i(A.b(b.Z,a1),a,o)
m=A.i(A.b(b.a6,a2),a,o)
l=b.ag
k=b.fx
k.toString
j=l*16
i=(l+1)*16
if(a5)b.h9()
if(l!==0){j-=s
b.aF=A.i(p,a,0)
b.a0=A.i(n,a,0)
b.ab=A.i(m,a,0)}else{b.aF=A.i(A.b(b.y2,a0),a,0)
b.a0=A.i(A.b(b.Z,a1),a,0)
b.ab=A.i(A.b(b.a6,a2),a,0)}k=l<k-1
if(k)i-=s
h=b.cx
h.toString
if(i>h)i=h
b.aR=null
if(b.aS!=null&&j<i){h=b.fT(j,i-j)
b.aR=h
if(h==null)return!1}h=b.ch
h.toString
if(j<h){g=h-j
f=A.b(b.aF,"_y")
e=f.d
d=b.N
d.toString
f.d=e+d*g
d=A.b(b.a0,"_u")
e=d.d
f=b.aa
f.toString
c=B.a.i(g,1)
d.d=e+f*c
f=A.b(b.ab,"_v")
e=f.d
d=b.aa
d.toString
f.d=e+d*c
f=b.aR
if(f!=null){e=f.d
d=b.b.a
if(typeof d!=="number")return d.ar()
f.d=e+d*g}j=h}if(j<i){h=A.b(b.aF,"_y")
h.d=h.d+A.b(b.z,a3)
h=A.b(b.a0,"_u")
h.d=h.d+B.a.i(A.b(b.z,a3),1)
h=A.b(b.ab,"_v")
h.d=h.d+B.a.i(A.b(b.z,a3),1)
h=b.aR
if(h!=null)h.d=h.d+A.b(b.z,a3)
h=b.ch
h.toString
b.hN(j-h,A.b(b.Q,"_cropRight")-A.b(b.z,a3),i-j)}if(k){k=A.b(b.y2,a0)
h=b.N
h.toString
k.ao(a4,r,p,16*h)
h=A.b(b.Z,a1)
a4=b.aa
a4.toString
h.ao(o,q,n,8*a4)
a4=A.b(b.a6,a2)
h=b.aa
h.toString
a4.ao(o,q,m,8*h)}return!0},
hN(a,b,c){if(b<=0||c<=0)return!1
this.h2(a,b,c)
this.h1(a,b,c)
return!0},
cn(a){var s
if((a&-4194304)>>>0===0)s=B.a.i(a,14)
else s=a<0?0:255
return s},
c7(a,b,c,d){var s=19077*a
d.h(0,0,this.cn(s+26149*c+-3644112))
d.h(0,1,this.cn(s-6419*b-13320*c+2229552))
d.h(0,2,this.cn(s+33050*b+-4527440))},
c6(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.hj(),a2=b4-1,a3=B.a.i(a2,1),a4=a8.a,a5=a8.d
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
a.c7(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.i(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.c7(s,p&255,p>>>16,b3)
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
a.c7(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.i(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.i(b3,a0,a5)
a.c7(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
h1(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.aR
if(i==null)return
s=j.b
r=s.a
if(typeof r!=="number")return r.ar()
q=r*4
p=A.i(i,null,0)
if(a===0){o=c-1
n=a}else{n=a-1
p.d-=r
o=c}m=A.l(j.d.aW(),!1,null,n*q+3)
i=j.ch
i.toString
r=j.cx
if(i+a+c===r){r.toString
o=r-i-n}for(l=0;l<o;++l){for(k=0;k<b;++k){i=p.a
r=p.d+k
if(!(r>=0&&r<i.length))return A.a(i,r)
r=i[r]
J.m(m.a,m.d+4*k,r&255)}i=p.d
r=s.a
if(typeof r!=="number")return A.y(r)
p.d=i+r
m.d+=q}},
h2(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.aW(),d=g.b,c=d.a
if(typeof c!=="number")return A.y(c)
s=A.l(e,!1,f,a*c*4)
r=A.i(A.b(g.aF,"_y"),f,0)
q=A.i(A.b(g.a0,"_u"),f,0)
p=A.i(A.b(g.ab,"_v"),f,0)
o=a+a0
n=B.a.i(b+1,1)
d=d.a
if(typeof d!=="number")return d.ar()
m=d*4
l=A.i(A.b(g.bB,"_tmpU"),f,0)
k=A.i(A.b(g.be,"_tmpV"),f,0)
if(a===0){g.c6(r,f,q,p,q,p,s,f,b)
j=a0}else{g.c6(A.b(g.b2,"_tmpY"),r,l,k,q,p,A.i(s,f,-m),s,b)
j=a0+1}l.scN(0,q.a)
k.scN(0,p.a)
for(e=2*m,d=-m,i=a;i+=2,i<o;){l.d=q.d
k.d=p.d
c=q.d
h=g.aa
h.toString
q.d=c+h
p.d+=h
s.d+=e
h=r.d
c=g.N
c.toString
r.d=h+2*c
g.c6(A.i(r,f,-c),r,l,k,q,p,A.i(s,f,d),s,b)}e=r.d
d=g.N
d.toString
r.d=e+d
e=g.ch
e.toString
d=g.cx
d.toString
if(e+o<d){A.b(g.b2,"_tmpY").aT(0,b,r)
A.b(g.bB,"_tmpU").aT(0,n,q)
A.b(g.be,"_tmpV").aT(0,n,p);--j}else if((o&1)===0)g.c6(r,f,q,p,q,p,A.i(s,f,m),f,b)
return j},
fT(a,a0){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_buffer8",f="_vp8l",e="_alphaPlane",d=i.b,c=d.a,b=d.b
if(a<0||a0<=0||a+a0>b)return h
if(a===0){d=c*b
i.aG=new Uint8Array(d)
s=i.aS
r=new A.hk(s,c,b)
q=s.q()
r.d=q&3
r.e=B.a.i(q,2)&3
r.f=B.a.i(q,4)&3
r.r=B.a.i(q,6)&3
if(r.ger()){p=r.d
if(p===0){if(s.c-s.d<d)r.r=1}else if(p===1){o=new A.cS(A.c([],t.J))
o.a=c
o.b=b
d=A.c([],t.W)
p=A.c([],t.gk)
n=new Uint32Array(2)
m=new A.ep(s,n)
n=m.d=A.G(n.buffer,0,h)
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
p=new A.dL(m,o,d,p)
r.y=p
A.b(p,f).go=c
A.b(r.y,f)
p=A.b(r.y,f)
d=o.a
m=o.b
p.bp(A.o(d),A.o(m),!0)
if(A.b(r.y,f).db.length===1){d=A.b(r.y,f).db
if(0>=d.length)return A.a(d,0)
d=d[0].a===3&&A.b(r.y,f).hm()}else d=!1
if(d){r.z=!0
d=A.b(r.y,f)
s=d.c
p=s.a
s=s.b
if(typeof p!=="number")return p.ar()
if(typeof s!=="number")return A.y(s)
j=p*s
d.fx=0
s=B.a.L(j,4)
s=new Uint8Array(j+(4-s))
d.fr=s
d.dy=A.iU(A.b(s,"_pixels8").buffer,0,h)}else{r.z=!1
A.b(r.y,f).dd()}}else r.r=1}i.aw=r}if(!A.b(i.aw,"_alpha").x)if(!A.b(i.aw,"_alpha").iF(a,a0,A.b(i.aG,e)))return h
return A.l(A.b(i.aG,e),!1,h,a*c)},
hF(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.k2.b,a6=a4.k1,a7=A.b(a4.rx,"_segment")
if(a7>>>0!==a7||a7>=4)return A.a(a6,a7)
s=a6[a7]
r=J.n(A.b(a4.a1,"_mbData"),a4.ac)
q=A.l(r.a,!1,null,0)
p=J.n(A.b(a4.x1,"_mbInfo"),0)
q.j_(0,q.c-q.d,0)
if(!A.b(r.b,"isIntra4x4")){o=A.l(new Int16Array(16),!1,null,0)
a6=a8.b
a7=p.b
if(1>=a5.length)return A.a(a5,1)
n=a4.cz(a9,a5[1],a6+a7,s.b,0,o)
a8.b=p.b=n>0?1:0
if(n>1)a4.io(o,q)
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
for(d=0,c=0;c<4;++c,d=b){n=a4.cz(a9,k,e+(i&1),s.a,j,q)
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
i=B.a.H(a8.a,a7)
h=B.a.H(p.a,a7)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c,d=b){if(2>=a6)return A.a(a5,2)
n=a4.cz(a9,a5[2],e+(i&1),s.c,0,q)
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
h=h>>>1|e<<5}a1=(a1|B.a.w(d,4*a2))>>>0
a0=(a0|B.a.w(i<<4>>>0,a2))>>>0
a=(a|B.a.w(h&240,a2))>>>0}a8.a=a0
p.a=a
r.e=g
r.f=a1
if((a1&43690)===0)s.toString
return(g|a1)>>>0===0},
io(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
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
hf(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.G(b[3])===0)s=a.G(b[4])===0?2:3+a.G(b[5])
else if(a.G(b[6])===0)s=a.G(b[7])===0?5+a.G(159):7+2*a.G(165)+a.G(145)
else{r=a.G(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.G(b[q])
if(!(p<4))return A.a(B.am,p)
o=B.am[p]
for(n=o.length,s=0,m=0;m<n;++m)s+=s+a.G(o[m])
s+=3+B.a.w(8,p)}return s},
cz(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i="_range"
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.G(q[0])===0)return e
for(;a.G(q[1])===0;){++e
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
if(a.G(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.hf(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.ae,e)
r=B.ae[e]
m=a.dj(B.a.i(A.b(a.b,i),1))
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
hB(){var s,r,q,p,o,n,m,l,k,j,i=this,h="br",g=4*i.ac,f=i.r1,e=i.r2,d=J.n(A.b(i.a1,"_mbData"),i.ac),c=A.b(i.c,h).G(145)===0
d.b=c
if(!A.b(c,"isIntra4x4")){if(A.b(i.c,h).G(156)!==0)s=A.b(i.c,h).G(128)!==0?1:3
else s=A.b(i.c,h).G(163)!==0?2:0
d.c[0]=s
f.toString
B.d.an(f,g,g+4,s)
B.d.an(e,0,4,s)}else{r=d.c
for(q=0,p=0;p<4;++p,q=j){s=e[p]
for(o=0;o<4;++o){c=g+o
if(!(c<f.length))return A.a(f,c)
n=f[c]
if(!(n<10))return A.a(B.a5,n)
n=B.a5[n]
if(!(s>=0&&s<10))return A.a(n,s)
m=n[s]
l=A.b(i.c,h).G(m[0])
if(!(l<18))return A.a(B.H,l)
k=B.H[l]
for(;k>0;){n=A.b(i.c,h)
if(!(k<9))return A.a(m,k)
n=2*k+n.G(m[k])
if(!(n>=0&&n<18))return A.a(B.H,n)
k=B.H[n]}s=-k
f[c]=s}j=q+4
f.toString
B.d.a_(r,q,j,f,g)
if(!(p<4))return A.a(e,p)
e[p]=s}}if(A.b(i.c,h).G(142)===0)c=0
else if(A.b(i.c,h).G(114)===0)c=2
else c=A.b(i.c,h).G(183)!==0?1:3
d.d=c},
sfo(a){this.ry=t.cC.a(a)},
sfn(a){this.x1=t.eQ.a(a)},
sfk(a){this.x2=t.ge.a(a)},
sfm(a){this.a1=t.db.a(a)},
sfl(a){this.ad=t.gS.a(a)}}
A.hj.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:34}
A.cM.prototype={
A(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.C(this.G(128),r))>>>0
return s},
bl(a){var s=this.A(a)
return this.A(1)===1?-s:s},
G(a){var s=this,r=s.dj(B.a.i(A.b(s.b,"_range")*a,8))
if(A.b(s.b,"_range")<=126)s.il()
return r},
dj(a){var s,r,q,p=this,o="_bits",n="_value"
if(A.b(p.d,o)<0){s=p.a
r=s.c
q=s.d
if(r-q>=1){p.c=(s.q()|A.b(p.c,n)<<8)>>>0
p.d=A.b(p.d,o)+8}else if(q<r){p.c=(s.q()|A.b(p.c,n)<<8)>>>0
p.d=A.b(p.d,o)+8}else if(!p.e){p.c=A.b(p.c,n)<<8>>>0
p.d=A.b(p.d,o)+8
p.e=!0}}s=A.b(p.d,o)
if(B.a.a8(A.b(p.c,n),s)>a){r=a+1
p.b=A.b(p.b,"_range")-r
p.c=A.b(p.c,n)-B.a.C(r,s)
return 1}else{p.b=a
return 0}},
il(){var s,r=this,q=A.b(r.b,"_range")
if(q>>>0!==q||q>=128)return A.a(B.B,q)
s=B.B[q]
q=A.b(r.b,"_range")
if(q>>>0!==q||q>=128)return A.a(B.J,q)
r.b=B.J[q]
r.d=A.b(r.d,"_bits")-s}}
A.h7.prototype={
d5(a,b,c){var s,r=A.i(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.dQ(r,b,c))this.bW(r,b)}},
d4(a,b,c){var s,r=A.i(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.dQ(r,1,c))this.bW(r,1)}},
eS(a,b,c){var s,r,q=A.i(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.d5(q,b,c)}},
eR(a,b,c){var s,r=A.i(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.d4(r,b,c)}},
jo(a,b,c,d,e){var s,r,q=A.i(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.b8(q,b,1,16,c,d,e)}},
iT(a,b,c,d,e){var s,r=A.i(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.b8(r,1,b,16,c,d,e)}},
b9(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.i(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.dR(a0,a2,a5,a6))if(this.dK(a0,a2,a7))this.bW(a0,a2)
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
k=$.iG()
e=1020+i-f
k.length
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
e=$.a1()
j=255+j+a
e.length
if(!(j>=0&&j<766))return A.a(e,j)
J.m(n,l,e[j])
j=$.a1()
i=255+i+b
j.length
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.m(a0.a,a0.d+r,i)
i=$.a1()
h=255+h+c
i.length
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.m(a0.a,a0.d+q,h)
h=$.a1()
g=255+g-c
h.length
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.m(a0.a,a0.d,g)
g=$.a1()
f=255+f-b
g.length
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.m(a0.a,a0.d+a2,f)
f=$.a1()
m=255+m-a
f.length
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.m(a0.a,a0.d+p,m)}a0.d+=a3}},
b8(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.i(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.dR(d,b,a1,a2))if(this.dK(d,b,a3))this.bW(d,b)
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
m=$.eK()
h=B.a.i(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
m.length
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.i(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.i(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.a1()
l=255+l+e
h.length
if(!(l>=0&&l<766))return A.a(h,l)
J.m(p,n,h[l])
l=$.a1()
k=255+k+f
l.length
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.m(d.a,d.d+r,k)
k=$.a1()
j=255+j-g
k.length
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.m(d.a,d.d,j)
j=$.a1()
o=255+o-e
j.length
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.m(d.a,d.d+b,o)}d.d+=c}},
bW(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
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
m=$.iG()
l=1020+k-l
m.length
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.eK()
m=112+B.a.P(B.a.i(p+4,3),32)
l.length
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.eK()
l=112+B.a.P(B.a.i(p+3,3),32)
m.length
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.a1()
r=255+r+n
l.length
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.a1()
q=255+q-o
r.length
if(!(q>=0&&q<766))return A.a(r,q)
a.h(0,0,r[q])},
dK(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
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
q=$.eJ()
s=255+o-s
q.length
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
dQ(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
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
q=$.eJ()
r=255+s-r
q.length
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.iF()
p=255+o-p
q.length
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
dR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
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
j=$.eJ()
g=255+q-p
j.length
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.iF()
l=255+r
k=l-o
m.length
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
az(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
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
A.b0(a0,d,0,0,k+f)
A.b0(a0,d,1,0,j+g)
A.b0(a0,d,2,0,j-g)
A.b0(a0,d,3,0,k-f);++o
d+=32}},
jl(a,b,c){this.az(a,b)
if(c)this.az(A.i(a,null,16),A.i(b,null,4))},
bJ(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.b0(b,0,q,r,s)},
eF(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bJ(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bJ(A.i(a,r,16),A.i(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bJ(A.i(a,r,32),A.i(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bJ(A.i(a,r,48),A.i(b,r,132))}}
A.hc.prototype={}
A.hg.prototype={}
A.hi.prototype={}
A.cL.prototype={}
A.hh.prototype={}
A.h8.prototype={}
A.aL.prototype={}
A.cO.prototype={}
A.er.prototype={}
A.cP.prototype={}
A.cQ.prototype={}
A.cN.prototype={
bA(){var s,r=this.b
if(r.J(8)!==47)return!1
s=this.c
s.f=2
s.a=r.J(14)+1
s.b=r.J(14)+1
s.d=r.J(1)!==0
if(r.J(3)!==0)return!1
return!0},
aE(){var s,r,q,p=this,o=null
p.e=0
if(!p.bA())return o
s=p.c
p.bp(s.a,s.b,!0)
p.dd()
p.d=A.R(s.a,s.b,B.e,o,o)
r=p.dy
r.toString
q=s.a
s=s.b
if(!p.cq(r,q,s,s,p.ghK()))return o
return p.d},
dd(){var s,r=this,q=r.c,p=q.a
q=q.b
if(typeof p!=="number")return p.ar()
if(typeof q!=="number")return A.y(q)
q=p*q+p
s=new Uint32Array(q+p*16)
r.dy=s
r.fr=A.G(s.buffer,0,null)
r.fx=q
return!0},
ib(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.J(2)
q=l.dx
p=B.a.w(1,r)
if((q&p)>>>0!==0)return!1
l.dx=(q|p)>>>0
o=new A.eq()
B.b.v(l.db,o)
o.a=r
o.b=a[0]
o.c=a[1]
switch(r){case 0:case 1:s=o.e=s.J(3)+2
o.d=l.bp(A.bn(o.b,s),A.bn(o.c,s),!1)
break
case 3:n=s.J(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.b.h(a,0,A.bn(o.b,m))
o.e=m
o.d=l.bp(n,1,!1)
l.h5(n,o)
break
case 2:break
default:throw A.d(A.f("Invalid WebP transform type: "+r))}return!0},
bp(a,b,c){var s,r,q,p,o,n,m,l,k=this
A.o(a)
A.o(b)
if(c){for(s=k.b,r=t.t,q=b,p=a;s.J(1)!==0;){o=A.c([p,q],r)
if(!k.ib(o))throw A.d(A.f("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.J(1)!==0){n=s.J(4)
if(!(n>=1&&n<=11))throw A.d(A.f("Invalid Color Cache"))}else n=0
if(!k.i0(p,q,n,c))throw A.d(A.f("Invalid Huffman Codes"))
if(n>0){s=B.a.w(1,n)
k.r=s
k.x=new A.hd(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.z
k.Q=A.bn(p,m)
k.y=m===0?4294967295:B.a.w(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.cq(l,p,q,q,null))throw A.d(A.f("Failed to decode image data."))
k.e=0
return l},
cq(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
A.o(b1)
A.o(b2)
A.o(b3)
t.bJ.a(b4)
s=a9.e
r=B.a.V(s,b1)
q=B.a.L(s,b1)
p=a9.dE(q,r)
o=a9.e
n=b1*b2
m=b1*b3
s=a9.r
l=280+s
k=s>0?a9.x:null
j=a9.y
s=b0.length
i=a9.b
h=b4!=null
g=o
while(!0){f=i.b
e=f.c
if(!(!(f.d>=e&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){d=a9.br(a9.ch,a9.Q,a9.z,q,r)
f=a9.cy
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.b0()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].aU(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].aU(i)
if(i.a>=32)i.b0()
if(2>=e)return A.a(f,2)
a=f[2].aU(i)
if(3>=e)return A.a(f,3)
f=B.c.l(B.a.n(f[3].aU(i),0,255))
e=B.c.l(B.a.n(b,0,255))
a0=B.c.l(B.a.n(c,0,255))
a1=B.c.l(B.a.n(a,0,255))
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=(f<<24|e<<16|a0<<8|a1)>>>0;++o;++q
if(q>=b1){++r
if(B.a.L(r,16)===0&&h)b4.$1(r)
if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a5(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}q=0}}else if(c<280){a3=a9.bZ(c-256)
if(4>=e)return A.a(f,4)
a4=f[4].aU(i)
if(i.a>=32)i.b0()
a5=a9.dW(b1,a9.bZ(a4))
if(o<a5||n-o<a3)return!1
else{a6=o-a5
for(a7=0;a7<a3;++a7){f=o+a7
e=a6+a7
if(!(e>=0&&e<s))return A.a(b0,e)
e=b0[e]
if(!(f>=0&&f<s))return A.a(b0,f)
b0[f]=e}o+=a3}q+=a3
for(;q>=b1;){q-=b1;++r
if(B.a.L(r,16)===0&&h)b4.$1(r)}if(o<m){if((q&j)>>>0!==0){d=a9.br(a9.ch,a9.Q,a9.z,q,r)
f=a9.cy
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0&&g<s))return A.a(b0,g)
a1=b0[g]
a2=B.a.a5(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}}}else if(c<l){a2=c-280
for(;g<o;){k.toString
if(!(g>=0&&g<s))return A.a(b0,g)
f=b0[g]
a8=B.a.a5(f*506832829>>>0,k.b)
e=k.a
if(!(a8<e.length))return A.a(e,a8)
e[a8]=f;++g}f=k.a
e=f.length
if(!(a2<e))return A.a(f,a2)
a0=f[a2]
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=a0;++o;++q
if(q>=b1){++r
if(B.a.L(r,16)===0&&h)b4.$1(r)
for(a0=k.b;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a5(a1*506832829>>>0,a0)
if(!(a2<e))return A.a(f,a2)
f[a2]=a1;++g}q=0}}else return!1}if(h)b4.$1(r)
if(f.d>=e&&i.a>=64&&o<n)return!1
a9.e=o
return!0},
hm(){var s,r,q,p,o,n
if(this.r>0)return!1
for(s=this.cx,r=this.cy,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
if(o[1].f>1)return!1
if(2>=n)return A.a(o,2)
if(o[2].f>1)return!1
if(3>=n)return A.a(o,3)
if(o[3].f>1)return!1}return!0},
h6(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
r=s.a
if(typeof r!=="number")return r.ar()
i.de(g,r*h)
q=s.a
p=q*g
o=q*i.f
s=i.dy
s.toString
h=i.fx
h.toString
n=A.l(s,!1,null,h)
for(h=i.fy,s=n.a,r=n.d,m=s.length,l=0;l<p;++l){h.toString
k=o+l
j=r+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.i(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
fH(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.V(g,a1),e=B.a.L(g,a1),d=i.dE(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.y
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.br(i.ch,i.Q,i.z,e,f)
s=i.cy
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.b0()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].aU(g)
if(p<256){s=A.b(i.fr,h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.L(f,16)===0)i.cv(f)
e=0}}else if(p<280){o=i.bZ(p-256)
if(4>=q)return A.a(s,4)
n=s[4].aU(g)
if(g.a>=32)g.b0()
m=i.dW(a1,i.bZ(n))
if(c>=m&&b-c>=o)for(l=0;l<o;++l){s=A.b(i.fr,h)
q=c+l
k=A.b(i.fr,h)
j=q-m
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=j}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.L(f,16)===0)i.cv(f)}if(c<a&&(e&a0)>>>0!==0){r=i.br(i.ch,i.Q,i.z,e,f)
s=i.cy
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.cv(f)
i.e=c
return!0},
cv(a){var s,r,q=this,p=a-q.f,o=A.b(q.fr,"_pixels8"),n=q.c.a,m=q.f
if(typeof n!=="number")return n.ar()
s=A.l(o,!1,null,n*m)
if(p>0){o=q.fy
o.toString
n=q.go
n.toString
r=A.l(o,!1,null,n*m)
n=q.db
if(0>=n.length)return A.a(n,0)
n[0].iv(m,m+p,s,r)}q.f=a},
hL(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.c,g=h.a,f=i.f
if(typeof g!=="number")return g.ar()
s=a-f
if(s<=0)return
i.de(s,g*f)
g=i.fx
g.toString
r=i.f
q=g
p=0
for(;p<s;++p,++r){o=0
while(!0){g=h.a
if(typeof g!=="number")return A.y(g)
if(!(o<g))break
g=i.dy
if(!(q>=0&&q<g.length))return A.a(g,q)
n=g[q]
g=i.d
g.toString
f=B.c.l(B.a.n(n>>>24&255,0,255))
m=B.c.l(B.a.n(n&255,0,255))
l=B.c.l(B.a.n(n>>>8&255,0,255))
k=B.c.l(B.a.n(n>>>16&255,0,255))
j=g.y
g=r*g.a+o
if(!(g>=0&&g<j.length))return A.a(j,g)
j[g]=(f<<24|m<<16|l<<8|k)>>>0;++o;++q}}i.f=a},
de(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.db,d=e.length,c=f.c.a
if(typeof c!=="number")return c.ar()
s=f.f
r=s+a
q=f.fx
q.toString
p=f.dy
p.toString
B.n.a_(p,q,q+c*a,p,b)
for(c=r-s,p=c-1,o=b;n=d-1,d>0;o=q,d=n){if(!(n>=0&&n<e.length))return A.a(e,n)
m=e[n]
l=f.dy
l.toString
k=m.b
switch(m.a){case 2:m.iq(l,q,q+c*k)
break
case 0:m.j3(s,r,l,q)
if(r!==m.c){j=q-k
B.n.a_(l,j,j+k,l,q+p*k)}break
case 1:m.iz(s,r,l,q)
break
case 3:if(o===q&&m.e>0){i=m.e
h=c*B.a.i(k+B.a.w(1,i)-1,i)
g=q+c*k-h
B.n.a_(l,g,g+h,l,q)
m.ei(s,r,l,g,l,q)}else m.ei(s,r,l,o,l,q)
break}}},
i0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.J(1)!==0){s=e.b.J(3)+2
r=A.bn(a,s)
q=A.bn(b,s)
p=r*q
o=e.bp(r,q,!1)
e.z=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.a3(n,t.ct)
for(j=0;j<n;++j)k[j]=A.lF()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.ev[h]
if(h===0&&i)g+=B.a.w(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.hZ(g,f[h]))return!1}e.ch=o
e.cx=n
e.shh(k)
return!0},
hZ(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.J(1)!==0){s=t.t
r=A.c([0,0],s)
q=A.c([0,0],s)
p=A.c([0,0],s)
o=i.J(1)+1
B.b.h(r,0,i.J(i.J(1)===0?1:8))
B.b.h(q,0,0)
s=o-1
B.b.h(p,0,s)
if(o===2){B.b.h(r,1,i.J(8))
B.b.h(q,1,1)
B.b.h(p,1,s)}n=b.iu(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.J(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.e3[k]
j=i.J(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.i_(m,a,p)
if(n)n=b.eh(p,a)}return n},
i_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.jG()
if(!s.eh(a,19))return!1
e=this.b
if(e.J(1)!==0){r=2+e.J(2+2*e.J(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.b0()
m=s.aU(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.a2,k)
j=B.a2[k]
i=B.b4[k]
h=e.J(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
bZ(a){var s
if(a<4)return a+1
s=B.a.i(a-2,1)
return B.a.w(2+(a&1),s)+this.b.J(s)+1},
dW(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.a7,s)
r=B.a7[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
h5(a,b){var s,r,q,p,o,n=B.a.w(1,B.a.H(8,b.e)),m=new Uint32Array(n),l=A.G(b.d.buffer,0,null),k=A.G(m.buffer,0,null),j=b.d
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
br(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.i(e,c)+B.a.i(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
dE(a,b){var s=this,r=s.br(s.ch,s.Q,s.z,a,b),q=s.cy
if(!(r<q.length))return A.a(q,r)
return q[r]},
shh(a){this.cy=t.d1.a(a)}}
A.dL.prototype={
iP(a){return this.h6(a)}}
A.ep.prototype={
eu(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.a5(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.t,p)
q=r+((s&B.t[p])>>>0)*(B.t[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.a5(s[1],p-32)}return q},
J(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.eu()
if(!(a<33))return A.a(B.t,a)
s=B.t[a]
r.a+=a
r.b0()
return(q&s)>>>0}else throw A.d(A.f("Not enough data in input."))},
b0(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
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
A.hd.prototype={}
A.eq.prototype={
iv(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.H(8,m),k=this.b,j=this.d
if(l<8){s=B.a.w(1,m)-1
r=B.a.w(1,l)-1
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
ei(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.H(8,j),h=this.b,g=this.d
if(i<8){s=B.a.w(1,j)-1
r=B.a.w(1,i)-1
for(j=e.length,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<j))return A.a(e,f)
e[f]=k
o=B.a.H(o,i)}}else for(j=c.length,q=e.length,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<q))return A.a(e,f)
e[f]=k}},
iz(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.b,a=this.e,a0=B.a.w(1,a)-1,a1=A.bn(b,a),a2=B.a.i(a3,a)*a1
for(a=a5.length,s=a3;s<a4;){r=new Uint8Array(3)
for(q=a2,p=0;p<b;++p){if((p&a0)>>>0===0){o=this.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a6+p
if(!(o>=0&&o<a))return A.a(a5,o)
m=a5[o]
l=m>>>8&255
k=r[0]
j=$.T()
j[0]=k
k=$.Z()
i=k.length
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
g=k[0]
i=$.jo()
i[0]=h*g
f=$.l8()
if(0>=f.length)return A.a(f,0)
e=(m>>>16&255)+(f[0]>>>5)>>>0&255
j[0]=r[1]
h=k[0]
j[0]=l
i[0]=h*k[0]
d=f[0]
j[0]=r[2]
h=k[0]
j[0]=e
i[0]=h*k[0]
c=((m&255)+(d>>>5)>>>0)+(f[0]>>>5)>>>0&255
a5[o]=(m&4278255360|e<<16|c)>>>0}a6+=b;++s
if((s&a0)>>>0===0)a2+=a1}},
j3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.he(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p>=0&&p<r))return A.a(c,p)
A.he(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.w(1,s)-1
n=A.bn(g,s)
m=B.a.i(a,s)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.he(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.kb[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.kb[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p>=0&&p<s))return A.a(c,p)
A.he(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
iq(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.hk.prototype={
ger(){var s=this,r=s.d
r=r>1||s.e>=4||s.f>1||s.r!==0
if(r)return!1
return!0},
iF(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="_vp8l"
if(!k.ger())return!1
s=k.e
if(!(s<4))return A.a(B.a8,s)
r=B.a8[s]
if(k.d===0){s=k.b
q=a*s
p=k.a
B.d.a_(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
A.b(k.y,j).fy=c
p=k.z
o=k.y
if(p){p=A.b(o,j)
o=A.b(k.y,j).c.a
n=A.b(k.y,j).c.b
s=p.fH(A.o(o),A.o(n),s)}else{p=A.b(o,j)
o=A.b(k.y,j).dy
o.toString
n=A.b(k.y,j).c.a
m=A.b(k.y,j).c.b
l=A.b(k.y,j).giO()
l=p.cq(o,A.o(n),A.o(m),s,t.bC.a(l))
s=l}if(!s)return!1}if(r!=null){s=k.b
r.$6(s,k.c,s,a,b,c)}if(k.f===1)if(!k.h_(c,k.b,k.c,a,b))return!1
if(a+b===k.c)k.x=!0
return!0},
h_(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.cR.prototype={
fa(a,b){a.q()
this.r=0
this.x=a.d-a.b
this.y=b-16}}
A.dM.prototype={}
A.dy.prototype={
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
B.d.an(r.a,0,128,255)
return!0},
eh(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.cC(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.ck(q,0,0)}o=new Int32Array(b)
if(!m.hi(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.ck(p,o[p],n))return!1}return m.f===m.e},
iu(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.cC(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.ck(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
aU(a){var s,r,q,p=this,o=a.eu(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=A.b(p.d,"tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.dT(s))
a.a=n
r=A.b(p.d,"tree")
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
ck(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="tree"
if(c<=7){s=h.e1(b,c)
for(r=B.a.C(1,7-c),q=h.b,p=h.a,o=0;o<r;++o){n=(s|B.a.C(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=h.e1(B.a.a8(b,c-7),7)
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
l+=q[p]+(B.a.a8(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(h.hp(l))h.hq(l,0)
else if(h.dT(l))return!1
r=A.b(h.d,g)
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
e1(a,b){var s=B.U[a&15],r=B.a.i(a,4)
if(!(r<16))return A.a(B.U,r)
return B.a.a5((s<<4|B.U[r])>>>0,8-b)},
hq(a,b){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
s[r]=b},
dT(a){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
return s[r]!==0},
hp(a){var s=A.b(this.d,"tree"),r=(a<<1>>>0)+1
if(!(r<s.length))return A.a(s,r)
return s[r]<0},
hi(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
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
A.bA.prototype={}
A.cS.prototype={}
A.cj.prototype={}
A.hl.prototype={
bi(a){var s=A.l(t.L.a(a),!1,null,0)
this.b=s
if(!this.dD(s))return!1
return!0},
aB(a){var s,r=this,q=null,p=A.l(t.L.a(a),!1,q,0)
r.b=p
if(!r.dD(p))return q
p=new A.cj(A.c([],t.J))
r.a=p
s=r.b
s.toString
if(!r.ee(s,p))return q
p=r.a
switch(p.f){case 3:p.cx=p.Q.length
return p
case 2:s=r.b
s.toString
s.d=p.dx
if(!A.j3(s,p).bA())return q
p=r.a
p.cx=p.Q.length
return p
case 1:s=r.b
s.toString
s.d=p.dx
if(!A.j1(s,p).bA())return q
p=r.a
p.cx=p.Q.length
return p}return q},
a4(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.Q
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
return o.dv(n.aY(A.b(q.y,"_frameSize"),A.b(q.x,"_framePosition")),a)}r=s.f
if(r===2){n.toString
p=n.aY(s.dy,s.dx)
n=o.a
n.toString
return A.j3(p,n).aE()}else if(r===1){n.toString
p=n.aY(s.dy,s.dx)
n=o.a
n.toString
return A.j1(p,n).aE()}return null},
am(a){var s
this.aB(t.L.a(a))
s=this.a
s.ch=0
s.cx=1
return this.a4(0)},
dv(a,b){var s,r,q,p=null,o=A.c([],t.J),n=new A.cj(o)
if(!this.ee(a,n))return p
if(n.f===0)return p
s=this.a
n.ch=s.ch
n.cx=s.cx
if(n.e){s=o.length
if(b>=s||!1)return p
if(!(b<s))return A.a(o,b)
r=o[b]
return this.dv(a.aY(A.b(r.y,"_frameSize"),A.b(r.x,"_framePosition")),b)}else{q=a.aY(n.dy,n.dx)
o=n.f
if(o===2)return A.j3(q,n).aE()
else if(o===1)return A.j1(q,n).aE()}return p},
dD(a){if(a.K(4)!=="RIFF")return!1
a.j()
if(a.K(4)!=="WEBP")return!1
return!0},
ee(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.K(4)
r=a.j()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.hg(a,b))return!1
break
case"VP8 ":b.dx=o
b.dy=r
b.f=1
f=!0
break
case"VP8L":b.dx=o
b.dy=r
b.f=2
f=!0
break
case"ALPH":n=a.a
m=a.e
l=n.length
n=new A.V(n,0,l,0,m)
b.cy=n
n.d=p
a.d+=q
break
case"ANIM":b.f=3
k=a.j()
a.k()
B.c.l(B.a.n(k&255,0,255))
B.c.l(B.a.n(k>>>24&255,0,255))
B.c.l(B.a.n(k>>>16&255,0,255))
B.c.l(B.a.n(k>>>8&255,0,255))
break
case"ANMF":if(!this.hc(a,b,r))return!1
break
case"ICCP":b.toString
j=a.M(r)
a.d=a.d+(j.c-j.d)
j.R()
break
case"EXIF":b.toString
a.K(r)
break
case"XMP ":b.toString
a.K(r)
break
default:A.kN("UNKNOWN WEBP TAG: "+s)
a.d+=q
break}p=a.d
i=q-(p-h-o)
if(i>0)a.d=p+i}if(!b.d)b.d=b.cy!=null
return b.f!==0},
hg(a,b){var s,r,q,p,o=a.q()
if((o&192)!==0)return!1
s=B.a.i(o,4)
r=B.a.i(o,1)
if((o&1)!==0)return!1
if(a.ap()!==0)return!1
q=a.ap()
p=a.ap()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
hc(a,b,c){var s
a.ap()
a.ap()
a.ap()
a.ap()
a.ap()
s=new A.dM()
s.fa(a,c)
if(s.r!==0)return!1
B.b.v(b.Q,s)
return!0}}
A.dx.prototype={
f3(a,b,c){var s,r,q,p,o,n,m,l=this,k=a.a,j=a.b
l.by(A.fb("R",k,j,c,b))
l.by(A.fb("G",k,j,c,b))
l.by(A.fb("B",k,j,c,b))
if(a.c===B.e)l.by(A.fb("A",k,j,c,b))
s=a.aW()
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
gd0(a){var s=this.a
if(s.ga7(s))s=0
else{s=s.gaA()
s=s.gb3(s).b}return s},
gaH(a){var s=this.a
if(s.ga7(s))s=0
else{s=s.gaA()
s=s.gb3(s).c}return s},
aX(a,b,c){var s=this.b
if(s!=null)if(s.d===3)s.aM(a,b,c)
else s.bN(a,b,A.o(c))},
bm(a,b,c){var s=this.c
if(s!=null)if(this.b.d===3)s.aM(a,b,c)
else s.bN(a,b,A.o(c))},
bM(a,b,c){var s
if(this.c!=null){s=this.d
if(s.d===3)s.aM(a,b,c)
else s.bN(a,b,A.o(c))}},
d2(a,b,c){var s=this.e
if(s!=null)if(s.d===3)s.aM(a,b,c)
else s.bN(a,b,A.o(c))},
by(a){var s=this,r=a.a
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
A.cf.prototype={
bL(a,b){var s,r,q,p=this,o=b*p.b+a,n=p.d,m=n===1
if(m||n===0){n=p.f
if(!(o>=0&&o<n.length))return A.a(n,o)
n=A.o(n[o])
s=p.e
if(s===8)r=255
else r=s===16?65535:4294967295
return n/(m?r-1:r)}n=n===3&&p.e===16
m=p.f
s=m.length
if(n){if(!(o>=0&&o<s))return A.a(m,o)
n=A.o(m[o])
if($.L==null)A.aF()
m=$.L
if(!(n>=0&&n<m.length))return A.a(m,n)
q=m[n]}else{if(!(o>=0&&o<s))return A.a(m,o)
q=m[o]}return q},
aM(a,b,c){var s,r,q,p=this
if(p.d!==3)return
s=b*p.b+a
r=p.f
q=J.M(r)
if(p.e===16)q.h(r,s,A.lG(c))
else q.h(r,s,c)},
bN(a,b,c){J.m(this.f,b*this.b+a,c)}}
A.iv.prototype={
$2(a,b){return Math.log(a*b+1)/b},
$S:15}
A.iu.prototype={
$2(a,b){var s,r=Math.max(0,a*b)
if(r>1){s=this.a.$2(r-1,0.184874)
if(typeof s!=="number")return A.y(s)
r=1+s}return Math.pow(r,0.4545)*84.66},
$S:15}
A.fd.prototype={
t(a){return"ICCPCompression."+this.b}}
A.fe.prototype={
iA(){var s,r=this
if(r.b===B.N)return r.c
s=B.a_.iN(r.c)
r.c=s
r.b=B.N
return s}}
A.f6.prototype={
t(a){return"Format."+this.b}}
A.dh.prototype={
t(a){return"Channels."+this.b}}
A.eT.prototype={
t(a){return"BlendMode."+this.b}}
A.f0.prototype={
t(a){return"DisposeMode."+this.b}}
A.dA.prototype={
aW(){var s=A.G(this.y.buffer,0,null)
switch(2){case 2:return s}},
gu(a){return this.y.length},
it(a,b){return a>=0&&a<this.a&&b>=0&&b<this.b},
S(a,b){var s,r
if(this.it(a,b)){s=this.y
r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
eL(a,b,c){if(c===B.aG)return this.eK(a,b)
else if(c===B.aF)return this.eM(a,b)
return this.S(B.c.l(a),B.c.l(b))},
eM(a,b){var s,r,q,p,o,n,m,l,k=this,j=B.c.l(a),i=j-(a>=0?0:1),h=i+1
j=B.c.l(b)
s=j-(b>=0?0:1)
r=s+1
j=new A.fk(a-i,b-s)
q=k.S(i,s)
p=r>=k.b
o=p?q:k.S(i,r)
n=h>=k.a
m=n?q:k.S(h,s)
l=n||p?q:k.S(h,r)
return A.ar(j.$4(q&255,m&255,o&255,l&255),j.$4(q>>>8&255,m>>>8&255,o>>>8&255,l>>>8&255),j.$4(q>>>16&255,m>>>16&255,o>>>16&255,l>>>16&255),j.$4(q>>>24&255,m>>>24&255,o>>>24&255,l>>>24&255))},
eK(d5,d6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=B.c.l(d5),d1=d0-(d5>=0?0:1),d2=d1-1,d3=d1+1,d4=d1+2
d0=B.c.l(d6)
s=d0-(d6>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d5-d1
n=d6-s
d0=new A.fj()
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
return A.ar(B.c.l(c5),B.c.l(c6),B.c.l(c7),B.c.l(c8))},
eP(a,b,c){var s=this.y,r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}}
A.fk.prototype={
$4(a,b,c,d){var s=this.b
return B.c.l(a+this.a*(b-a+s*(a+d-c-b))+s*(c-a))},
$S:35}
A.fj.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:36}
A.fi.prototype={
t(a){return"ImageException: "+this.a}}
A.V.prototype={
gu(a){return this.c-this.d},
h(a,b,c){J.m(this.a,this.d+b,c)
return c},
ao(a,b,c,d){var s=this.a,r=J.M(s),q=this.d+a
if(c instanceof A.V)r.a_(s,q,q+b,c.a,c.d+d)
else r.a_(s,q,q+b,t.L.a(c),d)},
aT(a,b,c){return this.ao(a,b,c,0)},
j_(a,b,c){var s=this.a,r=this.d+a
J.aB(s,r,r+b,c)},
ci(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.l(s.a,s.e,a,r+b)},
M(a){return this.ci(a,0,null)},
aY(a,b){return this.ci(a,0,b)},
b7(a,b){return this.ci(a,b,null)},
q(){var s=this.a,r=this.d++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
T(a){var s=this.M(a)
this.d=this.d+(s.c-s.d)
return s},
K(a){var s,r,q,p,o=this
if(a==null){s=A.c([],t.t)
for(r=o.c;q=o.d,q<r;){p=o.a
o.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(q===0)return A.j_(s,0,null)
B.b.v(s,q)}throw A.d(A.f(u.c))}return A.j_(o.T(a).R(),0,null)},
bF(){return this.K(null)},
jb(){var s,r,q,p=this,o=A.c([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.fV.iB(o)}B.b.v(o,r)}throw A.d(A.f(u.c))},
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
ap(){var s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o.length
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
cc(){return A.oA(this.cV())},
cV(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.d,h=k.d=i+1,g=j.length
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
if(k.e)return(B.a.w(s,56)|B.a.w(r,48)|B.a.w(q,40)|B.a.w(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.w(l,56)|B.a.w(m,48)|B.a.w(n,40)|B.a.w(o,32)|p<<24|q<<16|r<<8|s)>>>0},
bG(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.eE(b,c)
s=r.b+b+b
return J.eM(q,s,c<=0?r.c:s+c)},
eE(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.G(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.eM(p,s,s+q)
return new Uint8Array(A.jd(s))},
R(){return this.eE(0,null)},
bI(){var s=this.a
if(t.D.b(s))return A.iU(s.buffer,s.byteOffset+this.d,null)
return A.iU(this.R().buffer,0,null)},
scN(a,b){this.a=t.L.a(b)}}
A.ck.prototype={
t(a){return"Interpolation."+this.b}}
A.fG.prototype={
E(a){var s,r,q=this
if(q.a===q.c.length)q.h4()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
cd(a,b){var s,r,q,p,o=this
t.L.a(a)
b=J.ac(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.dB(r-p)
B.d.b6(q,s,r,a)
o.a+=b},
at(a){return this.cd(a,null)},
eJ(a){var s=this
if(s.b){s.E(B.a.i(a,8)&255)
s.E(a&255)
return}s.E(a&255)
s.E(B.a.i(a,8)&255)},
au(a){var s=this
if(s.b){s.E(B.a.i(a,24)&255)
s.E(B.a.i(a,16)&255)
s.E(B.a.i(a,8)&255)
s.E(a&255)
return}s.E(a&255)
s.E(B.a.i(a,8)&255)
s.E(B.a.i(a,16)&255)
s.E(B.a.i(a,24)&255)},
dB(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.d.b6(p,0,q,r)
this.c=p},
h4(){return this.dB(null)},
gu(a){return this.a}}
A.ip.prototype={
$0(){return this.a.close()},
$S:1}
A.io.prototype={
$1(a){return A.cT(this.a,t.f.a(new A.es([],[]).ek(t.e.a(a).data,!0)),this.b)},
$S:16}
A.iq.prototype={
$1(a){A.ho(t.fF.a(new A.es([],[]).ek(t.e.a(a).data,!0)),this.a.port2,this.b,this.c)},
$S:16}
A.i_.prototype={}
A.dT.prototype={
ez(a,b){var s=b.ce(),r=A.ih(s),q=A.dV(r,!0,r.$ti.m("j.E"))
r=this.a
r.toString
B.K.cb(r,s,q)},
$imV:1}
A.c4.prototype={
gc8(){return null}}
A.ao.prototype={
t(a){return"WorkerException: "+this.a+"\n"+this.b}}
A.c5.prototype={}
A.b2.prototype={
gc8(){return this.d}}
A.hm.prototype={
dJ(a){return this.d.j5(a.a,new A.hn(a))},
ir(a){var s,r,q;++this.c
s=a.b
if(s==null)return null
r=this.dJ(s);++r.c
q=a.b
if(q==null||q.a!==r.a)A.D(A.mW("Cancellation token mismatch",null,null))
return a.b=r}}
A.hn.prototype={
$0(){var s=this.a
return new A.b2(s.a,s.b)},
$S:37}
A.ay.prototype={}
A.bN.prototype={
ce(){var s,r=this,q=r.b
if(q!=null){s=A.W(t.N,t.z)
s.h(0,"b",q)
s.h(0,"c",r.d)
if(r.e)s.h(0,"e",!0)
if(r.f)s.h(0,"f",!0)
return s}if(r.a)return B.fT
q=r.c
if(q==null)return B.fU
return A.cs(["a",q],t.N,t.z)}}
A.iA.prototype={
$1(a){return new A.cK()},
$S:38}
A.cK.prototype={
gj0(){var s,r=this,q=r.a
if(q===$){s=A.cs([1,new A.fY(r)],t.p,t.eg)
A.nN(r.a,"operations")
r.sfj(s)
q=s}return q},
sfj(a){this.a=t.dx.a(a)}}
A.fY.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=t.gH.a(a).d,j=J.ai(k),i=t.D.a(j.p(k,0)),h=A.o(j.p(k,1))
k=A.o(j.p(k,2))
i=A.oa(i)
i.toString
s=A.o9(i,k,h)
h=new A.fL(6)
h.f=h.e=s.d
h.r=s.f
h.x=s.r
h.y=s.x
k=h.db=A.bh(!0,8192)
j=h.a=s.c
i=h.z=s.a
r=h.Q=s.b
q=A.b(i,"_width")
p=A.b(r,"_height")
k.at(A.c([137,80,78,71,13,10,26,10],t.t))
o=A.bh(!0,8192)
o.au(q)
o.au(p)
o.E(8)
o.E(j===B.w?2:6)
o.E(0)
o.E(0)
o.E(0)
h.bx(k,"IHDR",A.G(o.c.buffer,0,o.a))
h.ip(h.db,s.Q)
k=j===B.e?4:3
n=new Uint8Array(i*r*k+r)
h.h7(0,s,n)
m=B.a_.em(n,6)
if(h.cx<=1){k=h.db
k.toString
h.bx(k,"IDAT",m)}else{l=A.bh(!0,8192)
l.au(h.cx)
l.at(m)
k=h.db
k.toString
h.bx(k,"fdAT",A.G(l.c.buffer,0,l.a));++h.cx}k=h.iQ()
k.toString
return new Uint8Array(A.jd(k))},
$S:39};(function aliases(){var s=J.aV.prototype
s.eU=s.t
s=A.a5.prototype
s.eV=s.en
s.eW=s.eo
s.eY=s.eq
s.eX=s.ep
s=A.t.prototype
s.d7=s.a_
s=A.aD.prototype
s.eT=s.cM})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u,p=hunkHelpers._instance_0u,o=hunkHelpers._static_2,n=hunkHelpers._instance_2u,m=hunkHelpers.installStaticTearOff
s(A,"nM","lC",17)
s(A,"o_","n0",8)
s(A,"o0","n1",8)
s(A,"o1","n2",8)
r(A,"kH","nT",1)
var l
q(l=A.bq.prototype,"gfs","ft",28)
p(l,"ghu","hv",1)
o(A,"o6","nu",40)
s(A,"o7","nv",17)
s(A,"o8","nw",19)
n(l=A.dR.prototype,"gfI","fJ",6)
n(l,"gfL","fM",6)
n(l,"gfN","fO",9)
n(l,"gfD","fE",6)
n(l,"gfF","fG",9)
s(A,"oV","mv",0)
s(A,"oM","mm",0)
s(A,"oF","mf",0)
s(A,"oS","ms",0)
s(A,"oT","mt",0)
s(A,"oR","mr",0)
s(A,"oQ","mq",0)
s(A,"oP","mp",0)
s(A,"oY","my",0)
s(A,"oX","mx",0)
s(A,"oO","mo",0)
s(A,"oK","mk",0)
s(A,"oU","mu",0)
s(A,"oL","ml",0)
s(A,"oB","mb",0)
s(A,"oD","md",0)
s(A,"oC","mc",0)
s(A,"oE","me",0)
s(A,"oW","mw",0)
s(A,"oN","mn",0)
s(A,"oG","mg",0)
s(A,"oH","mh",0)
s(A,"oI","mi",0)
s(A,"oJ","mj",0)
q(A.cN.prototype,"ghK","hL",5)
q(A.dL.prototype,"giO","iP",5)
m(A,"jl",3,null,["$3"],["mA"],2,0)
m(A,"oZ",3,null,["$3"],["mB"],2,0)
m(A,"p3",3,null,["$3"],["mG"],2,0)
m(A,"p4",3,null,["$3"],["mH"],2,0)
m(A,"p5",3,null,["$3"],["mI"],2,0)
m(A,"p6",3,null,["$3"],["mJ"],2,0)
m(A,"p7",3,null,["$3"],["mK"],2,0)
m(A,"p8",3,null,["$3"],["mL"],2,0)
m(A,"p9",3,null,["$3"],["mM"],2,0)
m(A,"pa",3,null,["$3"],["mN"],2,0)
m(A,"p_",3,null,["$3"],["mC"],2,0)
m(A,"p0",3,null,["$3"],["mD"],2,0)
m(A,"p1",3,null,["$3"],["mE"],2,0)
m(A,"p2",3,null,["$3"],["mF"],2,0)
s(A,"o4","kz",10)
m(A,"pc",6,null,["$6"],["mT"],7,0)
m(A,"pd",6,null,["$6"],["mU"],7,0)
m(A,"pb",6,null,["$6"],["mS"],7,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.u,null)
q(A.u,[A.iQ,J.ak,J.c0,A.w,A.cY,A.bb,A.j,A.bf,A.K,A.c8,A.U,A.bl,A.bu,A.h2,A.fF,A.ca,A.d5,A.aW,A.fz,A.cr,A.hy,A.am,A.ey,A.i6,A.eu,A.bP,A.bR,A.c2,A.ew,A.bp,A.C,A.ev,A.bJ,A.cI,A.ef,A.bq,A.da,A.t,A.d_,A.hW,A.hS,A.i9,A.c6,A.hz,A.e2,A.cH,A.hD,A.dv,A.H,A.eB,A.bk,A.iJ,A.i2,A.hs,A.fE,A.dE,A.fJ,A.hq,A.eZ,A.ag,A.hQ,A.eA,A.fc,A.dC,A.hp,A.hr,A.by,A.eR,A.eX,A.eY,A.f2,A.dr,A.aE,A.ds,A.dt,A.du,A.d4,A.f8,A.ce,A.bC,A.dk,A.fr,A.al,A.fs,A.bQ,A.dQ,A.fu,A.dR,A.cB,A.au,A.bH,A.fO,A.bi,A.e7,A.cD,A.fZ,A.ei,A.h0,A.ej,A.fB,A.h6,A.cM,A.h7,A.hc,A.hg,A.hi,A.cL,A.hh,A.h8,A.aL,A.cO,A.er,A.cP,A.cQ,A.cN,A.ep,A.hd,A.eq,A.hk,A.cR,A.dy,A.bA,A.dx,A.cf,A.fe,A.dA,A.fi,A.V,A.fG,A.i_,A.c4,A.ao,A.hm,A.ay,A.bN,A.cK])
q(J.ak,[J.dN,J.cn,J.aV,J.r,J.co,J.bD,A.cx,A.J,A.ba,A.aD,A.f1,A.h])
q(J.aV,[J.e3,J.bK,J.aG])
r(J.fq,J.r)
q(J.co,[J.cm,J.dO])
q(A.w,[A.bE,A.b_,A.dS,A.em,A.ed,A.c1,A.ex,A.cp,A.e1,A.as,A.en,A.ek,A.bI,A.dl,A.dp])
r(A.ct,A.cY)
r(A.bL,A.ct)
r(A.at,A.bL)
q(A.bb,[A.di,A.eW,A.f7,A.dj,A.eh,A.fw,A.iw,A.iy,A.hv,A.hu,A.id,A.hH,A.hP,A.fU,A.i1,A.hY,A.hC,A.iD,A.iE,A.eV,A.eU,A.f5,A.fh,A.ft,A.fK,A.fk,A.fj,A.io,A.iq,A.iA,A.fY])
q(A.di,[A.iC,A.hw,A.hx,A.i7,A.hE,A.hL,A.hJ,A.hG,A.hK,A.hF,A.hO,A.hN,A.hM,A.fV,A.il,A.i0,A.h5,A.h4,A.ip,A.hn])
q(A.j,[A.q,A.cv,A.aN,A.aI,A.cl])
q(A.q,[A.bF,A.bc,A.cq,A.cZ])
q(A.bF,[A.cJ,A.cW])
r(A.c7,A.cv)
q(A.K,[A.cw,A.bo,A.cG])
r(A.bx,A.aI)
q(A.bu,[A.bv,A.cd])
r(A.cA,A.b_)
q(A.eh,[A.ee,A.bt])
r(A.et,A.c1)
r(A.cu,A.aW)
r(A.a5,A.cu)
q(A.dj,[A.fv,A.ix,A.ie,A.im,A.hI,A.fA,A.fC,A.hX,A.hT,A.i4,A.i5,A.ht,A.hj,A.iv,A.iu])
r(A.P,A.J)
q(A.P,[A.d0,A.d2])
r(A.d1,A.d0)
r(A.aY,A.d1)
r(A.d3,A.d2)
r(A.a6,A.d3)
q(A.aY,[A.dW,A.dX])
q(A.a6,[A.dY,A.dZ,A.e_,A.e0,A.cy,A.cz,A.bg])
r(A.d7,A.ex)
r(A.d6,A.cl)
r(A.cU,A.ew)
r(A.ez,A.da)
q(A.a5,[A.hZ,A.cX])
r(A.dn,A.ef)
r(A.dU,A.cp)
r(A.hU,A.hW)
r(A.eD,A.hU)
r(A.hV,A.eD)
r(A.eo,A.dn)
q(A.as,[A.cF,A.dB])
q(A.aD,[A.b1,A.aX])
r(A.bw,A.b1)
r(A.bz,A.ba)
r(A.aH,A.h)
r(A.hA,A.bJ)
r(A.cV,A.cI)
r(A.i3,A.i2)
r(A.es,A.hs)
r(A.eN,A.dv)
r(A.dD,A.dE)
r(A.fH,A.fJ)
r(A.ib,A.hq)
q(A.hz,[A.c3,A.fd,A.f6,A.dh,A.eT,A.f0,A.ck])
q(A.eX,[A.aU,A.f4,A.dw,A.fg,A.fM,A.fQ,A.fX,A.h1,A.cS])
q(A.eY,[A.dg,A.f3,A.f9,A.ff,A.dP,A.e4,A.fP,A.fW,A.h_,A.hl])
r(A.f_,A.dg)
r(A.dF,A.aE)
q(A.dF,[A.cg,A.dG,A.dH,A.dI,A.ci])
r(A.ch,A.du)
r(A.dJ,A.ce)
r(A.dz,A.aU)
r(A.dK,A.cB)
r(A.fn,A.fM)
r(A.fL,A.f2)
q(A.au,[A.e5,A.e6,A.e8,A.e9,A.eb,A.ec])
q(A.bH,[A.cE,A.ea])
r(A.dL,A.cN)
r(A.dM,A.cR)
r(A.cj,A.cS)
r(A.dT,A.i_)
r(A.c5,A.ao)
r(A.b2,A.c4)
s(A.bL,A.bl)
s(A.d0,A.t)
s(A.d1,A.U)
s(A.d2,A.t)
s(A.d3,A.U)
s(A.cY,A.t)
s(A.eD,A.hS)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",x:"double",F:"num",an:"String",a9:"bool",H:"Null",k:"List"},mangledNames:{},types:["~(V)","~()","e(aK,e,e)","~(@)","~(u?,u?)","~(e)","~(al,k<@>)","~(e,e,e,e,e,ax)","~(~())","~(al,k<e>)","a9(@)","~(@,@)","@()","e(e)","H(@)","F(F,F)","~(aH)","e(u?)","H()","@(@)","H(@,aZ)","~(e,@)","H(u,aZ)","C<@>(@)","aj<H>()","@(@,an)","~(h)","H(@,@)","~(u?)","@(an)","aK(e)","bC(e)","al(e)","H(~())","e(e,e)","e(e,e,e,e)","F(F,F,F,F,F)","b2()","cK(ay)","ax/(ay)","a9(u?,u?)","a9(u?)","@(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nj(v.typeUniverse,JSON.parse('{"e3":"aV","bK":"aV","aG":"aV","pe":"h","pg":"h","pk":"b1","pj":"J","dN":{"a9":[]},"cn":{"H":[]},"aV":{"jP":[]},"r":{"k":["1"],"q":["1"],"j":["1"]},"fq":{"r":["1"],"k":["1"],"q":["1"],"j":["1"]},"c0":{"K":["1"]},"co":{"x":[],"F":[]},"cm":{"x":[],"e":[],"F":[]},"dO":{"x":[],"F":[]},"bD":{"an":[]},"bE":{"w":[]},"at":{"t":["e"],"bl":["e"],"k":["e"],"q":["e"],"j":["e"],"t.E":"e","bl.E":"e"},"q":{"j":["1"]},"bF":{"q":["1"],"j":["1"]},"cJ":{"bF":["1"],"q":["1"],"j":["1"],"j.E":"1"},"bf":{"K":["1"]},"cv":{"j":["2"],"j.E":"2"},"c7":{"cv":["1","2"],"q":["2"],"j":["2"],"j.E":"2"},"cw":{"K":["2"]},"aN":{"j":["1"],"j.E":"1"},"bo":{"K":["1"]},"aI":{"j":["1"],"j.E":"1"},"bx":{"aI":["1"],"q":["1"],"j":["1"],"j.E":"1"},"cG":{"K":["1"]},"bc":{"q":["1"],"j":["1"],"j.E":"1"},"c8":{"K":["1"]},"bL":{"t":["1"],"bl":["1"],"k":["1"],"q":["1"],"j":["1"]},"bu":{"af":["1","2"]},"bv":{"bu":["1","2"],"af":["1","2"]},"cd":{"bu":["1","2"],"af":["1","2"]},"cA":{"b_":[],"w":[]},"dS":{"w":[]},"em":{"w":[]},"d5":{"aZ":[]},"bb":{"bd":[]},"di":{"bd":[]},"dj":{"bd":[]},"eh":{"bd":[]},"ee":{"bd":[]},"bt":{"bd":[]},"ed":{"w":[]},"et":{"w":[]},"a5":{"aW":["1","2"],"fy":["1","2"],"af":["1","2"]},"cq":{"q":["1"],"j":["1"],"j.E":"1"},"cr":{"K":["1"]},"J":{"Q":[]},"P":{"a4":["1"],"J":[],"Q":[]},"aY":{"P":["x"],"t":["x"],"a4":["x"],"k":["x"],"J":[],"q":["x"],"Q":[],"j":["x"],"U":["x"]},"a6":{"P":["e"],"t":["e"],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"]},"dW":{"aY":[],"P":["x"],"t":["x"],"ly":[],"a4":["x"],"k":["x"],"J":[],"q":["x"],"Q":[],"j":["x"],"U":["x"],"t.E":"x"},"dX":{"aY":[],"P":["x"],"t":["x"],"a4":["x"],"k":["x"],"J":[],"q":["x"],"Q":[],"j":["x"],"U":["x"],"t.E":"x"},"dY":{"a6":[],"P":["e"],"t":["e"],"iO":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"dZ":{"a6":[],"P":["e"],"t":["e"],"fm":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"e_":{"a6":[],"P":["e"],"t":["e"],"lJ":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"e0":{"a6":[],"P":["e"],"t":["e"],"m6":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"cy":{"a6":[],"P":["e"],"t":["e"],"aK":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"cz":{"a6":[],"P":["e"],"t":["e"],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"bg":{"a6":[],"P":["e"],"t":["e"],"ax":[],"a4":["e"],"k":["e"],"J":[],"q":["e"],"Q":[],"j":["e"],"U":["e"],"t.E":"e"},"ex":{"w":[]},"d7":{"b_":[],"w":[]},"C":{"aj":["1"]},"bR":{"K":["1"]},"d6":{"j":["1"],"j.E":"1"},"c2":{"w":[]},"cU":{"ew":["1"]},"da":{"ke":[]},"ez":{"da":[],"ke":[]},"hZ":{"a5":["1","2"],"aW":["1","2"],"fy":["1","2"],"af":["1","2"]},"cX":{"a5":["1","2"],"aW":["1","2"],"fy":["1","2"],"af":["1","2"]},"cl":{"j":["1"]},"ct":{"t":["1"],"k":["1"],"q":["1"],"j":["1"]},"cu":{"aW":["1","2"],"af":["1","2"]},"aW":{"af":["1","2"]},"cZ":{"q":["2"],"j":["2"],"j.E":"2"},"d_":{"K":["2"]},"cp":{"w":[]},"dU":{"w":[]},"eo":{"dn":["k<e>","an"]},"x":{"F":[]},"e":{"F":[]},"k":{"q":["1"],"j":["1"]},"c1":{"w":[]},"b_":{"w":[]},"e1":{"w":[]},"as":{"w":[]},"cF":{"w":[]},"dB":{"w":[]},"en":{"w":[]},"ek":{"w":[]},"bI":{"w":[]},"dl":{"w":[]},"e2":{"w":[]},"cH":{"w":[]},"dp":{"w":[]},"cW":{"bF":["1"],"q":["1"],"j":["1"],"j.E":"1"},"eB":{"aZ":[]},"bk":{"m4":[]},"aH":{"h":[]},"bw":{"aD":[]},"bz":{"ba":[]},"aX":{"aD":[]},"b1":{"aD":[]},"hA":{"bJ":["1"]},"cV":{"cI":["1"]},"dD":{"dE":[]},"cg":{"aE":[]},"dF":{"aE":[]},"ch":{"du":[]},"dG":{"aE":[]},"dH":{"aE":[]},"dI":{"aE":[]},"ci":{"aE":[]},"dJ":{"ce":[]},"dz":{"aU":[]},"dK":{"cB":[]},"e5":{"au":[]},"e6":{"au":[]},"e8":{"au":[]},"e9":{"au":[]},"eb":{"au":[]},"ec":{"au":[]},"cE":{"bH":[]},"ea":{"bH":[]},"dM":{"cR":[]},"cj":{"cS":[]},"dT":{"mV":[]},"b2":{"c4":[]},"ax":{"k":["e"],"q":["e"],"j":["e"],"Q":[]},"iO":{"k":["e"],"q":["e"],"j":["e"],"Q":[]},"fm":{"k":["e"],"q":["e"],"j":["e"],"Q":[]},"aK":{"k":["e"],"q":["e"],"j":["e"],"Q":[]}}'))
A.ni(v.typeUniverse,JSON.parse('{"q":1,"bL":1,"P":1,"ef":2,"cl":1,"ct":1,"cu":2,"cY":1}'))
var u={c:"EOF reached without finding string terminator",b:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.de
return{n:s("c2"),O:s("c3"),fK:s("ba"),R:s("bv<an,@>"),cJ:s("bw"),gw:s("q<@>"),Q:s("w"),B:s("h"),aX:s("dr"),gV:s("dt"),c8:s("bz"),h:s("bd"),c:s("aj<@>"),ct:s("bA"),r:s("cf"),bs:s("dy"),gx:s("bC"),i:s("fm"),bM:s("j<x>"),V:s("j<@>"),hb:s("j<e>"),eB:s("r<dk>"),g9:s("r<ds>"),b:s("r<ce>"),W:s("r<bA>"),dd:s("r<ch>"),g:s("r<k<k<k<e>>>>"),o:s("r<k<k<e>>>"),S:s("r<k<e>>"),G:s("r<u>"),dm:s("r<cB>"),E:s("r<bi>"),af:s("r<au>"),cE:s("r<cD>"),s:s("r<an>"),aU:s("r<ej>"),a:s("r<ax>"),ao:s("r<aL>"),gk:s("r<eq>"),J:s("r<cR>"),e8:s("r<bQ>"),gn:s("r<@>"),t:s("r<e>"),f8:s("r<dQ?>"),fk:s("r<k<@>?>"),hh:s("r<aK?>"),A:s("r<~(V)>"),u:s("cn"),eH:s("jP"),cj:s("aG"),ez:s("a4<@>"),d2:s("al"),d1:s("k<bA>"),f0:s("k<fm>"),h0:s("k<k<k<e>>>"),gS:s("k<k<aL>>"),ew:s("k<u>"),I:s("k<bi>"),dl:s("k<cD>"),c7:s("k<cL>"),e6:s("k<aL>"),eQ:s("k<cO>"),db:s("k<cP>"),cC:s("k<cQ>"),j:s("k<@>"),L:s("k<e>"),ge:s("k<aL?>"),q:s("k<d4?>"),cP:s("k<e?>"),f:s("af<@,@>"),dx:s("af<e,@(ay)>"),e:s("aH"),bK:s("aX"),bZ:s("cx"),d4:s("aY"),bc:s("a6"),dD:s("J"),bm:s("bg"),P:s("H"),K:s("u"),fW:s("bi"),fh:s("e7"),g0:s("cE"),hf:s("bH"),l:s("aZ"),N:s("an"),cV:s("ei"),bA:s("pm"),eK:s("b_"),ak:s("Q"),bv:s("aK"),D:s("ax"),bI:s("bK"),bB:s("cL"),ai:s("cO"),gT:s("cP"),dE:s("cQ"),gH:s("ay"),e2:s("b2"),U:s("C<H>"),k:s("C<a9>"),d:s("C<@>"),fJ:s("C<e>"),eO:s("d4"),bb:s("eA"),a7:s("bq<@>"),v:s("a9"),al:s("a9(u)"),gR:s("x"),z:s("@"),fO:s("@()"),w:s("@(u)"),C:s("@(u,aZ)"),eg:s("@(ay)"),Y:s("@(@,@)"),p:s("e"),aw:s("0&*"),_:s("u*"),bG:s("aj<H>?"),aR:s("iO?"),ha:s("k<u>?"),hc:s("k<ax>?"),T:s("k<e>?"),gZ:s("k<aK?>?"),m:s("k<e?>?"),fF:s("af<@,@>?"),c4:s("aX?"),X:s("u?"),dk:s("an?"),aD:s("ax?"),eW:s("cM?"),aj:s("aL?"),dP:s("er?"),bo:s("b2?"),F:s("bp<@,@>?"),y:s("@(h)?"),x:s("e?"),Z:s("~()?"),fQ:s("~(aH)?"),bJ:s("~(e)?"),di:s("F"),H:s("~"),M:s("~()"),fb:s("~(al,k<e>)"),bC:s("~(e)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aD=J.ak.prototype
B.b=J.r.prototype
B.a=J.cm.prototype
B.c=J.co.prototype
B.h=J.bD.prototype
B.aH=J.aG.prototype
B.K=A.aX.prototype
B.n=A.cy.prototype
B.d=A.bg.prototype
B.ar=J.e3.prototype
B.X=J.bK.prototype
B.L=new A.c3(0,"BI_BITFIELDS")
B.M=new A.c3(1,"NONE")
B.as=new A.eT(1,"over")
B.at=new A.c8(A.de("c8<0&>"))
B.Y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.au=function() {
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
B.az=function(getTagFallback) {
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
B.av=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aw=function(hooks) {
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
B.ay=function(hooks) {
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
B.ax=function(hooks) {
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

B.aA=new A.e2()
B.fY=new A.hp()
B.a_=new A.hr()
B.f=new A.ez()
B.aB=new A.eB()
B.r=new A.ib()
B.w=new A.dh(0,"rgb")
B.e=new A.dh(1,"rgba")
B.aC=new A.f0(1,"clear")
B.fZ=new A.f6(2,"rgba")
B.N=new A.fd(1,"deflate")
B.aE=new A.ck(0,"nearest")
B.aF=new A.ck(1,"linear")
B.aG=new A.ck(2,"cubic")
B.O=A.c(s([A.oG(),A.oT(),A.oW(),A.oN(),A.oI(),A.oH(),A.oJ()]),t.A)
B.x=A.c(s([0,2,8]),t.t)
B.aO=A.c(s([0,4,2,1]),t.t)
B.y=A.c(s([292,260,226,226]),t.t)
B.a0=A.c(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.a1=A.c(s([137,80,78,71,13,10,26,10]),t.t)
B.a2=A.c(s([2,3,7]),t.t)
B.b4=A.c(s([3,3,11]),t.t)
B.a4=A.c(s([511,1023,2047,4095]),t.t)
B.c7=A.c(s([231,120,48,89,115,113,120,152,112]),t.t)
B.ex=A.c(s([152,179,64,126,170,118,46,70,95]),t.t)
B.ey=A.c(s([175,69,143,80,85,82,72,155,103]),t.t)
B.ez=A.c(s([56,58,10,171,218,189,17,13,152]),t.t)
B.eK=A.c(s([114,26,17,163,44,195,21,10,173]),t.t)
B.eV=A.c(s([121,24,80,195,26,62,44,64,85]),t.t)
B.f5=A.c(s([144,71,10,38,171,213,144,34,26]),t.t)
B.fg=A.c(s([170,46,55,19,136,160,33,206,71]),t.t)
B.fr=A.c(s([63,20,8,114,114,208,12,9,226]),t.t)
B.fC=A.c(s([81,40,11,96,182,84,29,16,36]),t.t)
B.dZ=A.c(s([B.c7,B.ex,B.ey,B.ez,B.eK,B.eV,B.f5,B.fg,B.fr,B.fC]),t.S)
B.fN=A.c(s([134,183,89,137,98,101,106,165,148]),t.t)
B.fP=A.c(s([72,187,100,130,157,111,32,75,80]),t.t)
B.eA=A.c(s([66,102,167,99,74,62,40,234,128]),t.t)
B.di=A.c(s([41,53,9,178,241,141,26,8,107]),t.t)
B.eB=A.c(s([74,43,26,146,73,166,49,23,157]),t.t)
B.eC=A.c(s([65,38,105,160,51,52,31,115,128]),t.t)
B.cL=A.c(s([104,79,12,27,217,255,87,17,7]),t.t)
B.eD=A.c(s([87,68,71,44,114,51,15,186,23]),t.t)
B.eE=A.c(s([47,41,14,110,182,183,21,17,194]),t.t)
B.eF=A.c(s([66,45,25,102,197,189,23,18,22]),t.t)
B.bM=A.c(s([B.fN,B.fP,B.eA,B.di,B.eB,B.eC,B.cL,B.eD,B.eE,B.eF]),t.S)
B.eG=A.c(s([88,88,147,150,42,46,45,196,205]),t.t)
B.eH=A.c(s([43,97,183,117,85,38,35,179,61]),t.t)
B.eI=A.c(s([39,53,200,87,26,21,43,232,171]),t.t)
B.eJ=A.c(s([56,34,51,104,114,102,29,93,77]),t.t)
B.eL=A.c(s([39,28,85,171,58,165,90,98,64]),t.t)
B.eM=A.c(s([34,22,116,206,23,34,43,166,73]),t.t)
B.eN=A.c(s([107,54,32,26,51,1,81,43,31]),t.t)
B.eO=A.c(s([68,25,106,22,64,171,36,225,114]),t.t)
B.eP=A.c(s([34,19,21,102,132,188,16,76,124]),t.t)
B.eQ=A.c(s([62,18,78,95,85,57,50,48,51]),t.t)
B.bl=A.c(s([B.eG,B.eH,B.eI,B.eJ,B.eL,B.eM,B.eN,B.eO,B.eP,B.eQ]),t.S)
B.eR=A.c(s([193,101,35,159,215,111,89,46,111]),t.t)
B.eS=A.c(s([60,148,31,172,219,228,21,18,111]),t.t)
B.cM=A.c(s([112,113,77,85,179,255,38,120,114]),t.t)
B.dj=A.c(s([40,42,1,196,245,209,10,25,109]),t.t)
B.eT=A.c(s([88,43,29,140,166,213,37,43,154]),t.t)
B.eU=A.c(s([61,63,30,155,67,45,68,1,209]),t.t)
B.eW=A.c(s([100,80,8,43,154,1,51,26,71]),t.t)
B.dk=A.c(s([142,78,78,16,255,128,34,197,171]),t.t)
B.eX=A.c(s([41,40,5,102,211,183,4,1,221]),t.t)
B.eY=A.c(s([51,50,17,168,209,192,23,25,82]),t.t)
B.bK=A.c(s([B.eR,B.eS,B.cM,B.dj,B.eT,B.eU,B.eW,B.dk,B.eX,B.eY]),t.S)
B.dl=A.c(s([138,31,36,171,27,166,38,44,229]),t.t)
B.eZ=A.c(s([67,87,58,169,82,115,26,59,179]),t.t)
B.f_=A.c(s([63,59,90,180,59,166,93,73,154]),t.t)
B.f0=A.c(s([40,40,21,116,143,209,34,39,175]),t.t)
B.f1=A.c(s([47,15,16,183,34,223,49,45,183]),t.t)
B.f2=A.c(s([46,17,33,183,6,98,15,32,183]),t.t)
B.f3=A.c(s([57,46,22,24,128,1,54,17,37]),t.t)
B.f4=A.c(s([65,32,73,115,28,128,23,128,205]),t.t)
B.f6=A.c(s([40,3,9,115,51,192,18,6,223]),t.t)
B.f7=A.c(s([87,37,9,115,59,77,64,21,47]),t.t)
B.ec=A.c(s([B.dl,B.eZ,B.f_,B.f0,B.f1,B.f2,B.f3,B.f4,B.f6,B.f7]),t.S)
B.f8=A.c(s([104,55,44,218,9,54,53,130,226]),t.t)
B.f9=A.c(s([64,90,70,205,40,41,23,26,57]),t.t)
B.fa=A.c(s([54,57,112,184,5,41,38,166,213]),t.t)
B.fb=A.c(s([30,34,26,133,152,116,10,32,134]),t.t)
B.dm=A.c(s([39,19,53,221,26,114,32,73,255]),t.t)
B.fc=A.c(s([31,9,65,234,2,15,1,118,73]),t.t)
B.cN=A.c(s([75,32,12,51,192,255,160,43,51]),t.t)
B.fd=A.c(s([88,31,35,67,102,85,55,186,85]),t.t)
B.fe=A.c(s([56,21,23,111,59,205,45,37,192]),t.t)
B.ff=A.c(s([55,38,70,124,73,102,1,34,98]),t.t)
B.aI=A.c(s([B.f8,B.f9,B.fa,B.fb,B.dm,B.fc,B.cN,B.fd,B.fe,B.ff]),t.S)
B.fh=A.c(s([125,98,42,88,104,85,117,175,82]),t.t)
B.fi=A.c(s([95,84,53,89,128,100,113,101,45]),t.t)
B.fj=A.c(s([75,79,123,47,51,128,81,171,1]),t.t)
B.fk=A.c(s([57,17,5,71,102,57,53,41,49]),t.t)
B.fl=A.c(s([38,33,13,121,57,73,26,1,85]),t.t)
B.fm=A.c(s([41,10,67,138,77,110,90,47,114]),t.t)
B.cO=A.c(s([115,21,2,10,102,255,166,23,6]),t.t)
B.fn=A.c(s([101,29,16,10,85,128,101,196,26]),t.t)
B.fo=A.c(s([57,18,10,102,102,213,34,20,43]),t.t)
B.fp=A.c(s([117,20,15,36,163,128,68,1,26]),t.t)
B.cm=A.c(s([B.fh,B.fi,B.fj,B.fk,B.fl,B.fm,B.cO,B.fn,B.fo,B.fp]),t.S)
B.d4=A.c(s([102,61,71,37,34,53,31,243,192]),t.t)
B.fq=A.c(s([69,60,71,38,73,119,28,222,37]),t.t)
B.d5=A.c(s([68,45,128,34,1,47,11,245,171]),t.t)
B.fs=A.c(s([62,17,19,70,146,85,55,62,70]),t.t)
B.ft=A.c(s([37,43,37,154,100,163,85,160,1]),t.t)
B.fu=A.c(s([63,9,92,136,28,64,32,201,85]),t.t)
B.cP=A.c(s([75,15,9,9,64,255,184,119,16]),t.t)
B.cQ=A.c(s([86,6,28,5,64,255,25,248,1]),t.t)
B.cR=A.c(s([56,8,17,132,137,255,55,116,128]),t.t)
B.fv=A.c(s([58,15,20,82,135,57,26,121,40]),t.t)
B.b8=A.c(s([B.d4,B.fq,B.d5,B.fs,B.ft,B.fu,B.cP,B.cQ,B.cR,B.fv]),t.S)
B.fw=A.c(s([164,50,31,137,154,133,25,35,218]),t.t)
B.fx=A.c(s([51,103,44,131,131,123,31,6,158]),t.t)
B.fy=A.c(s([86,40,64,135,148,224,45,183,128]),t.t)
B.fz=A.c(s([22,26,17,131,240,154,14,1,209]),t.t)
B.fA=A.c(s([45,16,21,91,64,222,7,1,197]),t.t)
B.fB=A.c(s([56,21,39,155,60,138,23,102,213]),t.t)
B.cS=A.c(s([83,12,13,54,192,255,68,47,28]),t.t)
B.fD=A.c(s([85,26,85,85,128,128,32,146,171]),t.t)
B.fE=A.c(s([18,11,7,63,144,171,4,4,246]),t.t)
B.fF=A.c(s([35,27,10,146,174,171,12,26,128]),t.t)
B.cn=A.c(s([B.fw,B.fx,B.fy,B.fz,B.fA,B.fB,B.cS,B.fD,B.fE,B.fF]),t.S)
B.fG=A.c(s([190,80,35,99,180,80,126,54,45]),t.t)
B.fH=A.c(s([85,126,47,87,176,51,41,20,32]),t.t)
B.fI=A.c(s([101,75,128,139,118,146,116,128,85]),t.t)
B.fJ=A.c(s([56,41,15,176,236,85,37,9,62]),t.t)
B.cT=A.c(s([71,30,17,119,118,255,17,18,138]),t.t)
B.fK=A.c(s([101,38,60,138,55,70,43,26,142]),t.t)
B.cU=A.c(s([146,36,19,30,171,255,97,27,20]),t.t)
B.fL=A.c(s([138,45,61,62,219,1,81,188,64]),t.t)
B.fM=A.c(s([32,41,20,117,151,142,20,21,163]),t.t)
B.fO=A.c(s([112,19,12,61,195,128,48,4,24]),t.t)
B.c1=A.c(s([B.fG,B.fH,B.fI,B.fJ,B.cT,B.fK,B.cU,B.fL,B.fM,B.fO]),t.S)
B.a5=A.c(s([B.dZ,B.bM,B.bl,B.bK,B.ec,B.aI,B.cm,B.b8,B.cn,B.c1]),t.o)
B.z=A.c(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.bb=A.c(s([8,8,4,2]),t.t)
B.a6=A.c(s([A.oB(),A.oR(),A.oU(),A.oL(),A.oD(),A.oC(),A.oE()]),t.A)
B.Q=A.c(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.B=A.c(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.A=A.c(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.a7=A.c(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.m=A.c(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.R=A.c(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.C=A.c(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.k=A.c(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.t=A.c(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.D=A.c(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.a8=A.c(s([null,A.pc(),A.pd(),A.pb()]),A.de("r<~(e,e,e,e,e,ax)?>"))
B.l=A.c(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.i=A.c(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.o=A.c(s([B.i,B.i,B.i]),t.S)
B.dA=A.c(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.c8=A.c(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.dK=A.c(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.bs=A.c(s([B.dA,B.c8,B.dK]),t.S)
B.dw=A.c(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.dW=A.c(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ak=A.c(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.d_=A.c(s([B.dw,B.dW,B.ak]),t.S)
B.dx=A.c(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.ee=A.c(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.ab=A.c(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.bX=A.c(s([B.dx,B.ee,B.ab]),t.S)
B.ai=A.c(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.ef=A.c(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.fQ=A.c(s([B.ai,B.ef,B.i]),t.S)
B.W=A.c(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dy=A.c(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.bg=A.c(s([B.W,B.dy,B.ab]),t.S)
B.cX=A.c(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.eb=A.c(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.E=A.c(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.b5=A.c(s([B.cX,B.eb,B.E]),t.S)
B.ea=A.c(s([B.o,B.bs,B.d_,B.bX,B.fQ,B.bg,B.b5,B.o]),t.o)
B.bQ=A.c(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.du=A.c(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.e9=A.c(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.bt=A.c(s([B.bQ,B.du,B.e9]),t.S)
B.S=A.c(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dX=A.c(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.aJ=A.c(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.c6=A.c(s([B.S,B.dX,B.aJ]),t.S)
B.bu=A.c(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.ed=A.c(s([B.ai,B.bu,B.i]),t.S)
B.dL=A.c(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.bv=A.c(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.bA=A.c(s([B.dL,B.bv,B.i]),t.S)
B.bR=A.c(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.dP=A.c(s([B.W,B.bR,B.i]),t.S)
B.aj=A.c(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.dG=A.c(s([B.aj,B.ak,B.i]),t.S)
B.bw=A.c(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.a9=A.c(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.aT=A.c(s([B.bw,B.a9,B.E]),t.S)
B.bk=A.c(s([B.bt,B.c6,B.ed,B.bA,B.dP,B.dG,B.aT,B.o]),t.o)
B.c9=A.c(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.aK=A.c(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.bJ=A.c(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.e8=A.c(s([B.c9,B.aK,B.bJ]),t.S)
B.ca=A.c(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bd=A.c(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.cV=A.c(s([B.W,B.ca,B.bd]),t.S)
B.dY=A.c(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.d0=A.c(s([B.aj,B.dY,B.i]),t.S)
B.dB=A.c(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.c_=A.c(s([B.S,B.dB,B.E]),t.S)
B.ap=A.c(s([B.i,B.E,B.i]),t.S)
B.c0=A.c(s([B.e8,B.cV,B.d0,B.c_,B.ap,B.o,B.o,B.o]),t.o)
B.bS=A.c(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.bf=A.c(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.dC=A.c(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.d3=A.c(s([B.bS,B.bf,B.dC]),t.S)
B.dM=A.c(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.bT=A.c(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.aL=A.c(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.aM=A.c(s([B.dM,B.bT,B.aL]),t.S)
B.dz=A.c(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.dD=A.c(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.dv=A.c(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.bi=A.c(s([B.dz,B.dD,B.dv]),t.S)
B.eg=A.c(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.eh=A.c(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ei=A.c(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.e_=A.c(s([B.eg,B.eh,B.ei]),t.S)
B.dN=A.c(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.cb=A.c(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.e1=A.c(s([B.dN,B.cb,B.S]),t.S)
B.bx=A.c(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.ej=A.c(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.ek=A.c(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.b6=A.c(s([B.bx,B.ej,B.ek]),t.S)
B.dO=A.c(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.fR=A.c(s([B.dO,B.a9,B.i]),t.S)
B.b9=A.c(s([B.d3,B.aM,B.bi,B.e_,B.e1,B.b6,B.fR,B.ap]),t.o)
B.bN=A.c(s([B.ea,B.bk,B.c0,B.b9]),t.g)
B.T=A.c(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.aa=A.c(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.P=A.c(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.af=A.c(s([B.P,B.P,B.P]),t.S)
B.cx=A.c(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.co=A.c(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.et=A.c(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.es=A.c(s([B.cx,B.co,B.et]),t.S)
B.bC=A.c(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.cE=A.c(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.cp=A.c(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.d9=A.c(s([B.bC,B.cE,B.cp]),t.S)
B.bO=A.c(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.da=A.c(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.bn=A.c(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.cf=A.c(s([B.bO,B.da,B.bn]),t.S)
B.bP=A.c(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.el=A.c(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.cj=A.c(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.by=A.c(s([B.bP,B.el,B.cj]),t.S)
B.aS=A.c(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.bo=A.c(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.db=A.c(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.b7=A.c(s([B.aS,B.bo,B.db]),t.S)
B.e4=A.c(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.dc=A.c(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.bp=A.c(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.ba=A.c(s([B.e4,B.dc,B.bp]),t.S)
B.a3=A.c(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.aW=A.c(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.aP=A.c(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.c5=A.c(s([B.a3,B.aW,B.aP]),t.S)
B.aU=A.c(s([B.af,B.es,B.d9,B.cf,B.by,B.b7,B.ba,B.c5]),t.o)
B.aX=A.c(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.aV=A.c(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.de=A.c(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.bh=A.c(s([B.aX,B.aV,B.de]),t.S)
B.dQ=A.c(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.cq=A.c(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.dn=A.c(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.bz=A.c(s([B.dQ,B.cq,B.dn]),t.S)
B.dH=A.c(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.cF=A.c(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.dp=A.c(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.fS=A.c(s([B.dH,B.cF,B.dp]),t.S)
B.e5=A.c(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.ck=A.c(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.bD=A.c(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.bZ=A.c(s([B.e5,B.ck,B.bD]),t.S)
B.dE=A.c(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.bE=A.c(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.cr=A.c(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.d8=A.c(s([B.dE,B.bE,B.cr]),t.S)
B.eo=A.c(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.dd=A.c(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.cs=A.c(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.dV=A.c(s([B.eo,B.dd,B.cs]),t.S)
B.ce=A.c(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.dR=A.c(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.ct=A.c(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.be=A.c(s([B.ce,B.dR,B.ct]),t.S)
B.ep=A.c(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.cz=A.c(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.e6=A.c(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.cc=A.c(s([B.ep,B.cz,B.e6]),t.S)
B.bB=A.c(s([B.bh,B.bz,B.fS,B.bZ,B.d8,B.dV,B.be,B.cc]),t.o)
B.dJ=A.c(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.d1=A.c(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.df=A.c(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.aN=A.c(s([B.dJ,B.d1,B.df]),t.S)
B.dS=A.c(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.dU=A.c(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.eu=A.c(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.c2=A.c(s([B.dS,B.dU,B.eu]),t.S)
B.dF=A.c(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.bq=A.c(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.cu=A.c(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.d2=A.c(s([B.dF,B.bq,B.cu]),t.S)
B.bc=A.c(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.eq=A.c(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.cA=A.c(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.bm=A.c(s([B.bc,B.eq,B.cA]),t.S)
B.cB=A.c(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.e7=A.c(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.aY=A.c(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.cg=A.c(s([B.cB,B.e7,B.aY]),t.S)
B.aZ=A.c(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.bL=A.c(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.b_=A.c(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.em=A.c(s([B.aZ,B.bL,B.b_]),t.S)
B.cC=A.c(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.cD=A.c(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.b0=A.c(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.bV=A.c(s([B.cC,B.cD,B.b0]),t.S)
B.bU=A.c(s([B.aN,B.c2,B.d2,B.bm,B.cg,B.em,B.bV,B.af]),t.o)
B.cl=A.c(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.dg=A.c(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.dh=A.c(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.en=A.c(s([B.cl,B.dg,B.dh]),t.S)
B.dq=A.c(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.cG=A.c(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.dr=A.c(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.cd=A.c(s([B.dq,B.cG,B.dr]),t.S)
B.ds=A.c(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.dI=A.c(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.dt=A.c(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.d6=A.c(s([B.ds,B.dI,B.dt]),t.S)
B.cv=A.c(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.cH=A.c(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.ci=A.c(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.bW=A.c(s([B.cv,B.cH,B.ci]),t.S)
B.cI=A.c(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.bF=A.c(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.cw=A.c(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.bj=A.c(s([B.cI,B.bF,B.cw]),t.S)
B.br=A.c(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.bI=A.c(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.bG=A.c(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.c4=A.c(s([B.br,B.bI,B.bG]),t.S)
B.bH=A.c(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.cJ=A.c(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.cK=A.c(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.er=A.c(s([B.bH,B.cJ,B.cK]),t.S)
B.b1=A.c(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.b2=A.c(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.bY=A.c(s([B.a3,B.b1,B.b2]),t.S)
B.e0=A.c(s([B.en,B.cd,B.d6,B.bW,B.bj,B.c4,B.er,B.bY]),t.o)
B.c3=A.c(s([B.aU,B.bB,B.bU,B.e0]),t.g)
B.F=A.c(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.p=A.c(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.u=A.c(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.ch=A.c(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.ac=A.c(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.G=A.c(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.H=A.c(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.ae=A.c(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.ad=A.c(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.U=A.c(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.cW=A.c(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.cY=A.c(s([]),t.gn)
B.d7=A.c(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.ag=A.c(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.j=A.c(s([0,1,3,7,15,31,63,127,255]),t.t)
B.q=A.c(s([0,128,192,224,240,248,252,254,255]),t.t)
B.ah=A.c(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.I=A.c(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.V=A.c(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.dT=A.c(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.al=A.c(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.aQ=A.c(s([173,148,140]),t.t)
B.aR=A.c(s([176,155,140,135]),t.t)
B.ew=A.c(s([180,157,141,134,130]),t.t)
B.b3=A.c(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.am=A.c(s([B.aQ,B.aR,B.ew,B.b3]),t.S)
B.an=A.c(s([A.oF(),A.oS(),A.oV(),A.oM(),A.oQ(),A.oY(),A.oP(),A.oX(),A.oK(),A.oO()]),t.A)
B.e2=A.c(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.v=A.c(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.e3=A.c(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.J=A.c(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.ev=A.c(s([280,256,256,256,40]),t.t)
B.ao=A.c(s([0,1,1,2,4,8,1,1,2,4,8,4,8,0]),t.t)
B.aq=new A.cd([315,"artist",258,"bitsPerSample",265,"cellLength",264,"cellWidth",320,"colorMap",259,"compression",306,"dateTime",34665,"exifIFD",338,"extraSamples",266,"fillOrder",289,"freeByteCounts",288,"freeOffsets",291,"grayResponseCurve",290,"grayResponseUnit",316,"hostComputer",34675,"iccProfile",270,"imageDescription",257,"imageLength",256,"imageWidth",33723,"iptc",271,"make",281,"maxSampleValue",280,"minSampleValue",272,"model",254,"newSubfileType",274,"orientation",262,"photometricInterpretation",34377,"photoshop",284,"planarConfiguration",317,"predictor",296,"resolutionUnit",278,"rowsPerStrip",277,"samplesPerPixel",305,"software",279,"stripByteCounts",273,"stropOffsets",255,"subfileType",292,"t4Options",293,"t6Options",263,"thresholding",322,"tileWidth",323,"tileLength",324,"tileOffsets",325,"tileByteCounts",700,"xmp",282,"xResolution",283,"yResolution",529,"yCbCrCoefficients",530,"yCbCrSubsampling",531,"yCbCrPositioning",339,"sampleFormat"],A.de("cd<e,an>"))
B.cy=A.c(s(["d"]),t.s)
B.fT=new A.bv(1,{d:!0},B.cy,t.R)
B.cZ=A.c(s([]),t.s)
B.fU=new A.bv(0,{},B.cZ,t.R)
B.fV=new A.eo(!0)
B.fW=new A.bN(!0,null,null,null,!1,!1)
B.fX=new A.bP(null,2)})();(function staticFields(){$.hR=null
$.jw=null
$.jv=null
$.kK=null
$.kG=null
$.kO=null
$.is=null
$.iz=null
$.ji=null
$.bT=null
$.db=null
$.dc=null
$.jf=!1
$.A=B.f
$.a8=A.c([],t.G)
$.ae=A.ap("_config")
$.jc=null
$.ka=!1
$.kb=A.c([A.jl(),A.oZ(),A.p3(),A.p4(),A.p5(),A.p6(),A.p7(),A.p8(),A.p9(),A.pa(),A.p_(),A.p0(),A.p1(),A.p2(),A.jl(),A.jl()],A.de("r<e(aK,e,e)>"))
$.iM=null
$.L=null
$.fa=A.ap("_eLut")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pf","kQ",()=>A.oh("_$dart_dartClosure"))
s($,"q6","iH",()=>B.f.eA(new A.iC(),A.de("aj<H>")))
s($,"pn","kT",()=>A.aJ(A.h3({
toString:function(){return"$receiver$"}})))
s($,"po","kU",()=>A.aJ(A.h3({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pp","kV",()=>A.aJ(A.h3(null)))
s($,"pq","kW",()=>A.aJ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"pt","kZ",()=>A.aJ(A.h3(void 0)))
s($,"pu","l_",()=>A.aJ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ps","kY",()=>A.aJ(A.k6(null)))
s($,"pr","kX",()=>A.aJ(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"pw","l1",()=>A.aJ(A.k6(void 0)))
s($,"pv","l0",()=>A.aJ(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"pE","jm",()=>A.n_())
s($,"pi","kS",()=>t.U.a($.iH()))
s($,"ph","kR",()=>{var q=new A.C(B.f,t.k)
q.ik(!1)
return q})
s($,"px","l2",()=>new A.h5().$0())
s($,"py","l3",()=>new A.h4().$0())
r($,"q4","la",()=>new Error().stack!=void 0)
s($,"pI","l6",()=>A.j7(B.G,B.V,257,286,15))
s($,"pH","l5",()=>A.j7(B.ag,B.u,0,30,15))
s($,"pG","l4",()=>A.j7(null,B.e2,0,19,7))
r($,"pz","eJ",()=>A.fD(511))
r($,"pA","iF",()=>A.fD(511))
r($,"pC","iG",()=>A.jY(2041))
r($,"pD","eK",()=>A.jY(225))
r($,"pB","a1",()=>A.fD(766))
s($,"pU","T",()=>A.fD(1))
s($,"pV","Z",()=>{var q=$.T().buffer
A.br(q,0,null)
q=new Int8Array(q,0)
return q})
s($,"pN","Y",()=>A.lP(1))
s($,"pO","a2",()=>{var q,p=$.Y().buffer
A.br(p,0,null)
q=B.a.F(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"pP","z",()=>A.lQ(1))
s($,"pR","N",()=>{var q,p=$.z().buffer
A.br(p,0,null)
q=B.a.F(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"pQ","b8",()=>A.lz($.z().buffer))
s($,"pL","jo",()=>A.lO(1))
s($,"pM","l8",()=>A.k7($.jo().buffer,0))
s($,"pJ","jn",()=>A.lM(1))
s($,"pK","l7",()=>A.k7($.jn().buffer,0))
s($,"pS","jp",()=>A.m7(1))
s($,"pT","l9",()=>{var q=$.jp()
return A.lA(q.gcN(q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ak,MediaError:J.ak,MessageChannel:J.ak,NavigatorUserMediaError:J.ak,OverconstrainedError:J.ak,PositionError:J.ak,GeolocationPositionError:J.ak,ArrayBuffer:A.cx,DataView:A.J,ArrayBufferView:A.J,Float32Array:A.dW,Float64Array:A.dX,Int16Array:A.dY,Int32Array:A.dZ,Int8Array:A.e_,Uint16Array:A.e0,Uint32Array:A.cy,Uint8ClampedArray:A.cz,CanvasPixelArray:A.cz,Uint8Array:A.bg,Blob:A.ba,DedicatedWorkerGlobalScope:A.bw,DOMException:A.f1,AbortPaymentEvent:A.h,AnimationEvent:A.h,AnimationPlaybackEvent:A.h,ApplicationCacheErrorEvent:A.h,BackgroundFetchClickEvent:A.h,BackgroundFetchEvent:A.h,BackgroundFetchFailEvent:A.h,BackgroundFetchedEvent:A.h,BeforeInstallPromptEvent:A.h,BeforeUnloadEvent:A.h,BlobEvent:A.h,CanMakePaymentEvent:A.h,ClipboardEvent:A.h,CloseEvent:A.h,CompositionEvent:A.h,CustomEvent:A.h,DeviceMotionEvent:A.h,DeviceOrientationEvent:A.h,ErrorEvent:A.h,ExtendableEvent:A.h,ExtendableMessageEvent:A.h,FetchEvent:A.h,FocusEvent:A.h,FontFaceSetLoadEvent:A.h,ForeignFetchEvent:A.h,GamepadEvent:A.h,HashChangeEvent:A.h,InstallEvent:A.h,KeyboardEvent:A.h,MediaEncryptedEvent:A.h,MediaKeyMessageEvent:A.h,MediaQueryListEvent:A.h,MediaStreamEvent:A.h,MediaStreamTrackEvent:A.h,MIDIConnectionEvent:A.h,MIDIMessageEvent:A.h,MouseEvent:A.h,DragEvent:A.h,MutationEvent:A.h,NotificationEvent:A.h,PageTransitionEvent:A.h,PaymentRequestEvent:A.h,PaymentRequestUpdateEvent:A.h,PointerEvent:A.h,PopStateEvent:A.h,PresentationConnectionAvailableEvent:A.h,PresentationConnectionCloseEvent:A.h,ProgressEvent:A.h,PromiseRejectionEvent:A.h,PushEvent:A.h,RTCDataChannelEvent:A.h,RTCDTMFToneChangeEvent:A.h,RTCPeerConnectionIceEvent:A.h,RTCTrackEvent:A.h,SecurityPolicyViolationEvent:A.h,SensorErrorEvent:A.h,SpeechRecognitionError:A.h,SpeechRecognitionEvent:A.h,SpeechSynthesisEvent:A.h,StorageEvent:A.h,SyncEvent:A.h,TextEvent:A.h,TouchEvent:A.h,TrackEvent:A.h,TransitionEvent:A.h,WebKitTransitionEvent:A.h,UIEvent:A.h,VRDeviceEvent:A.h,VRDisplayEvent:A.h,VRSessionEvent:A.h,WheelEvent:A.h,MojoInterfaceRequestEvent:A.h,ResourceProgressEvent:A.h,USBConnectionEvent:A.h,IDBVersionChangeEvent:A.h,AudioProcessingEvent:A.h,OfflineAudioCompletionEvent:A.h,WebGLContextEvent:A.h,Event:A.h,InputEvent:A.h,SubmitEvent:A.h,EventTarget:A.aD,File:A.bz,MessageEvent:A.aH,MessagePort:A.aX,ServiceWorkerGlobalScope:A.b1,SharedWorkerGlobalScope:A.b1,WorkerGlobalScope:A.b1})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,MessageChannel:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,Blob:false,DedicatedWorkerGlobalScope:true,DOMException:true,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,MessageEvent:true,MessagePort:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:false})
A.P.$nativeSuperclassTag="ArrayBufferView"
A.d0.$nativeSuperclassTag="ArrayBufferView"
A.d1.$nativeSuperclassTag="ArrayBufferView"
A.aY.$nativeSuperclassTag="ArrayBufferView"
A.d2.$nativeSuperclassTag="ArrayBufferView"
A.d3.$nativeSuperclassTag="ArrayBufferView"
A.a6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.or
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=thumbnail_worker.dart.js.map
