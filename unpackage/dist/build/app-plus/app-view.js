var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-padding-wrap'])
Z([3,'page-section swiper'])
Z([3,'page-section-spacing'])
Z([[7],[3,'autoplay']])
Z([3,'swiper'])
Z([[7],[3,'duration']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'swiper-item '])
Z([3,'img2'])
Z([3,'../../static/banner3.jpg'])
Z(z[8])
Z(z[9])
Z([3,'../../static/banner1.jpg'])
Z(z[8])
Z(z[9])
Z([3,'../../static/banner4.jpg'])
Z(z[8])
Z(z[9])
Z(z[16])
Z([3,'page-size'])
Z([3,'test'])
Z([3,''])
Z(z[20])
Z([3,'海外采购'])
Z(z[21])
Z([3,''])
Z(z[20])
Z([3,'假一赔十'])
Z(z[21])
Z([3,''])
Z(z[20])
Z([3,'超值低价'])
Z(z[21])
Z([3,''])
Z(z[20])
Z([3,'售后无忧'])
Z([3,'img-hongbao'])
Z([3,'img-hongbao1'])
Z([3,'../../static/hongbao.jpg'])
Z(z[38])
Z(z[39])
Z(z[38])
Z(z[39])
Z(z[38])
Z(z[39])
Z([3,'img-banner'])
Z([3,'../../static/banner5.jpg'])
Z([3,'img-card'])
Z([3,'../../static/card.jpg'])
Z(z[48])
Z([3,'../../static/card3.jpg'])
Z(z[48])
Z(z[49])
Z(z[48])
Z(z[51])
Z(z[48])
Z(z[49])
Z(z[48])
Z(z[51])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/cart/cart.wxml','./pages/category/category.wxml','./pages/index/index.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_n('view')
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=_n('view')
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_n('view')
_rz(z,oH,'class',1,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',2,e,s,gg)
var oJ=_mz(z,'swiper',['autoplay',3,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var lK=_n('swiper-item')
var aL=_n('view')
_rz(z,aL,'class',8,e,s,gg)
_(lK,aL)
var tM=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
_(lK,tM)
_(oJ,lK)
var eN=_n('swiper-item')
var bO=_n('view')
_rz(z,bO,'class',11,e,s,gg)
_(eN,bO)
var oP=_mz(z,'image',['class',12,'src',1],[],e,s,gg)
_(eN,oP)
_(oJ,eN)
var xQ=_n('swiper-item')
var oR=_n('view')
_rz(z,oR,'class',14,e,s,gg)
_(xQ,oR)
var fS=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
_(xQ,fS)
_(oJ,xQ)
var cT=_n('swiper-item')
var hU=_n('view')
_rz(z,hU,'class',17,e,s,gg)
_(cT,hU)
var oV=_mz(z,'image',['class',18,'src',1],[],e,s,gg)
_(cT,oV)
_(oJ,cT)
_(cI,oJ)
_(oH,cI)
var cW=_n('view')
_rz(z,cW,'class',20,e,s,gg)
var oX=_n('text')
_rz(z,oX,'class',21,e,s,gg)
var lY=_oz(z,22,e,s,gg)
_(oX,lY)
_(cW,oX)
var aZ=_n('text')
_rz(z,aZ,'class',23,e,s,gg)
var t1=_oz(z,24,e,s,gg)
_(aZ,t1)
_(cW,aZ)
var e2=_n('text')
_rz(z,e2,'class',25,e,s,gg)
var b3=_oz(z,26,e,s,gg)
_(e2,b3)
_(cW,e2)
var o4=_n('text')
_rz(z,o4,'class',27,e,s,gg)
var x5=_oz(z,28,e,s,gg)
_(o4,x5)
_(cW,o4)
var o6=_n('text')
_rz(z,o6,'class',29,e,s,gg)
var f7=_oz(z,30,e,s,gg)
_(o6,f7)
_(cW,o6)
var c8=_n('text')
_rz(z,c8,'class',31,e,s,gg)
var h9=_oz(z,32,e,s,gg)
_(c8,h9)
_(cW,c8)
var o0=_n('text')
_rz(z,o0,'class',33,e,s,gg)
var cAB=_oz(z,34,e,s,gg)
_(o0,cAB)
_(cW,o0)
var oBB=_n('text')
_rz(z,oBB,'class',35,e,s,gg)
var lCB=_oz(z,36,e,s,gg)
_(oBB,lCB)
_(cW,oBB)
_(oH,cW)
_(hG,oH)
var aDB=_n('view')
_rz(z,aDB,'class',37,e,s,gg)
var tEB=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
_(aDB,tEB)
var eFB=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
_(aDB,eFB)
var bGB=_mz(z,'image',['class',42,'src',1],[],e,s,gg)
_(aDB,bGB)
var oHB=_mz(z,'image',['class',44,'src',1],[],e,s,gg)
_(aDB,oHB)
var xIB=_mz(z,'image',['class',46,'src',1],[],e,s,gg)
_(aDB,xIB)
var oJB=_mz(z,'image',['mode',-1,'class',48,'src',1],[],e,s,gg)
_(aDB,oJB)
var fKB=_mz(z,'image',['mode',-1,'class',50,'src',1],[],e,s,gg)
_(aDB,fKB)
var cLB=_mz(z,'image',['mode',-1,'class',52,'src',1],[],e,s,gg)
_(aDB,cLB)
var hMB=_mz(z,'image',['mode',-1,'class',54,'src',1],[],e,s,gg)
_(aDB,hMB)
var oNB=_mz(z,'image',['mode',-1,'class',56,'src',1],[],e,s,gg)
_(aDB,oNB)
var cOB=_mz(z,'image',['mode',-1,'class',58,'src',1],[],e,s,gg)
_(aDB,cOB)
_(hG,aDB)
_(cF,hG)
_(r,cF)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lQB=_n('view')
_(r,lQB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"uni-page-head .",[1],"uni-page-head__title{ text-align: left; margin-left: -60px; }\n@font-face {font-family: \x22iconfont\x22; src: url(data:application/vnd.ms-fontobject;base64,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\x3d\x3d); src: url(data:application/vnd.ms-fontobject;base64,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\x3d\x3d#iefix) format(\x27embedded-opentype\x27), \n  url(data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAVEAAsAAAAACgwAAAT3AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHJIZJATYCJAMUCwwABCAFhG0HTRvaCBEVpI+QfZXAU03yckJARAxtTdDnRon7nKJhIcKM2aw1FQ6eiYf/P1b3/Zim2V1LjgTK4y02tEALloQVJIvRgPnz7KpXv9ltxkujOmgh150HB1E1QAAXWVuedBdYBEEAFlIgUdCF2093N/EdrbUXxSxPgnYWvyKaRNvJrJzNrSKhkqUmKo0QaYKFV/H/cyz1MsHy00WCnFpkUpdV0Hg0wL3ZLKJtzXsD3EBxD+mq9sJJuJsAOiy5w9ZP0vOhhcBZAtsGsqwAWjYvIoQZSIeWz5kFsEMQINM4/CxwoP59fMFSJEAiyMDda6M0oRiWn/Pz44jlWYMQC2x+YdzOAxmYAQqIPd/oALJemIGIPtsX0UAHCYfntZn98+jnxfOYxhbZRbyuLf94OASiAZy1h9hlS+k5nSggwKu91s8WjW4JbcfRZnzR9YwO0AexABD3wFFGbV0hOLIn0SdFrnKtlaOJiQ1J4NYFv6BvHObapq6uTsGcr6mt2esYRDOMEJCfohiaEc81yafzqWGBTK4IE1PPlkxAVdt0pX4+Le0xlTWgREtZBzFcFWd9mGHiFZyjaC3zzdH5zreXxy9XXg+NuibWhLez1zzCD1/Hgo7Alpmw9pLlpnOcRBjnZMmBOIuUV5P0EZopEqFO6S248Zg5q5VT9ROrszhPTH9NF01daXLtUeXMVaoZGT1TRH1OE89YY3r9MX31Ur43mATjqfri2aZJ02YZiOFiFCUlMXVliQiTwEop7WnedXbxupP4+tUVr5LVktHs6iRqFXr8GKFpFVOjkX2nbXlrZvbd9mb5sF2dKmVH7b7R7Q2uivaFTrGxAxwf1HsmJNSZKVoWLNPXaS+gbIvSk6ca5gySWefGWMtrtnXZBFtbBm4FraAXzOdVyo5nFSVKZZ+3k/fcqrmXjoPIER2ca79Gn1JZojh8fAvx8aNTtOX9x+3E+PieaTt1F3ewBN28iZbwKlRLRvMosDCj5fEJNhkafO9eHE0apkYtOyLAqvC15jg2R6HFN28uRk0Cy2L6aV+4IDMus8DUqAA7ZrZkiemxTN0uU1OTSUEFIaFGXEFPg5urcU87fPc1Gf4zSWt7M14iq7/cG5qE3Zvnw/Xv67PdpvWRmDQ6aPTPz8IQUuWv5GXaOf1/p53K4cUeHs+5cujntDy0X9vpKKta7TXfbbHlONdxlho3jeUa1/nTLqxeEehnyu3it4Y98FtjqXHVeH+BRr052DQY6gH+B21F/gD/QKuRKwB5H22zD4NHt64JQ+Xh38guAYCHuMkaNcf/59kS0wuw4dkgtm4LXY8A/oNyN3C+Wt79ojqWfEBVBa14Ahtj33aZ7LufT2BEnuFA2nQ3SLRZQEayRxasO1Ri/tBAioION0nnd+lphAwrQgBTRgFgFDYATuYAIAqRH+QI+wdje/5hYiMES+7bvuKy/SqWDjWmFgvI3kDm1DIhYJe09mvkrk611aCy7lEbmYY4iJzlU2xR53GM8TyxlgHT1MAJ3A/rmqDTVGJuA2FttwhD5vdOQU5Nb8khDaUsVACZN0DKkRaTV7eWXL9/DXFOLaVDhn7k7yHNkBsHsUAUA3lqbWMNrUuv4XEJSzkGsFsraYATCqOaLxDQ+e9WQjkrIFLkOgshLWNxrUH59mYa606PkdzVBKXIUaJGw/RSSfcmR/KxaTt7F9jyLG2nRpATPL0eAA\x3d\x3d) format(\x27woff2\x27),\n  url(data:font/woff;base64,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\x3d) format(\x27woff\x27),\n  url(data:font/ttf;base64,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\x3d\x3d) format(\x27truetype\x27), \n  url(../../static/img/iconfont.34a27c0e.svg#iconfont-do-not-use-local-path-./common/main.wxss\x2613\x267) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-diqiuyi:before { content: \x22\\E607\x22; }\n.",[1],"icon-qian:before { content: \x22\\E640\x22; }\n.",[1],"icon-zhengban:before { content: \x22\\E6C6\x22; }\n.",[1],"icon-shouhou:before { content: \x22\\E624\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/cart/cart.wxss']=undefined;    
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/category.wxss']=undefined;    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@font-face { font-family: \x27iconfont\x27; src: url(data:font/ttf;base64,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\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"test { font-family: iconfont; margin-left: ",[0,40],"; font-size: 15px; }\n.",[1],"img2{ width: 100%; height: 200px; }\n.",[1],"page-size{ margin: 0px 1px  0px 0px; font-size: 12px; }\n.",[1],"img-hongbao{ width: 100%; -webkit-box-flex: 25%; -webkit-flex: 25%; flex: 25%; }\n.",[1],"img-hongbao1{ width: 25%; height: 100px; }\n.",[1],"img-banner{ width: 100%; height: 70px; }\n.",[1],"img-card{ width: 100%; }\n.",[1],"uni-page-head__title { margin-left: -60px; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/user/user.wxss']=undefined;    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
