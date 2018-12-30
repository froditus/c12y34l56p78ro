Array.prototype.isArray = true;
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/*! barcode */
(function(b){var a={settings:{barWidth:1,barHeight:50,moduleSize:5,showHRI:true,addQuietZone:true,marginHRI:5,bgColor:"#FFFFFF",color:"#000000",fontSize:10,output:"css",posX:0,posY:0},intval:function(d){var c=typeof(d);if(c=="string"){d=d.replace(/[^0-9-.]/g,"");d=parseInt(d*1,10);return isNaN(d)||!isFinite(d)?0:d}return c=="number"&&isFinite(d)?Math.floor(d):0},i25:{encoding:["NNWWN","WNNNW","NWNNW","WWNNN","NNWNW","WNWNN","NWWNN","NNNWW","WNNWN","NWNWN"],compute:function(g,j,f){if(!j){if(g.length%2!=0){g="0"+g}}else{if((f=="int25")&&(g.length%2==0)){g="0"+g}var h=true,c,e=0;for(var d=g.length-1;d>-1;d--){c=a.intval(g.charAt(d));if(isNaN(c)){return("")}e+=h?3*c:c;h=!h}g+=((10-e%10)%10).toString()}return(g)},getDigit:function(k,l,h){k=this.compute(k,l,h);if(k==""){return("")}result="";var f,d;if(h=="int25"){result+="1010";var g,e;for(f=0;f<k.length/2;f++){g=k.charAt(2*f);e=k.charAt(2*f+1);for(d=0;d<5;d++){result+="1";if(this.encoding[g].charAt(d)=="W"){result+="1"}result+="0";if(this.encoding[e].charAt(d)=="W"){result+="0"}}}result+="1101"}else{if(h=="std25"){result+="11011010";var m;for(f=0;f<k.length;f++){m=k.charAt(f);for(d=0;d<5;d++){result+="1";if(this.encoding[m].charAt(d)=="W"){result+="11"}result+="0"}}result+="11010110"}}return(result)}},ean:{encoding:[["0001101","0100111","1110010"],["0011001","0110011","1100110"],["0010011","0011011","1101100"],["0111101","0100001","1000010"],["0100011","0011101","1011100"],["0110001","0111001","1001110"],["0101111","0000101","1010000"],["0111011","0010001","1000100"],["0110111","0001001","1001000"],["0001011","0010111","1110100"]],first:["000000","001011","001101","001110","010011","011001","011100","010101","010110","011010"],getDigit:function(j,h){var e=h=="ean8"?7:12;j=j.substring(0,e);if(j.length!=e){return("")}var k;for(var g=0;g<j.length;g++){k=j.charAt(g);if((k<"0")||(k>"9")){return("")}}j=this.compute(j,h);var d="101";if(h=="ean8"){for(var g=0;g<4;g++){d+=this.encoding[a.intval(j.charAt(g))][0]}d+="01010";for(var g=4;g<8;g++){d+=this.encoding[a.intval(j.charAt(g))][2]}}else{var f=this.first[a.intval(j.charAt(0))];for(var g=1;g<7;g++){d+=this.encoding[a.intval(j.charAt(g))][a.intval(f.charAt(g-1))]}d+="01010";for(var g=7;g<13;g++){d+=this.encoding[a.intval(j.charAt(g))][2]}}d+="101";return(d)},compute:function(f,e){var c=e=="ean13"?12:7;f=f.substring(0,c);var d=0,g=true;for(i=f.length-1;i>-1;i--){d+=(g?3:1)*a.intval(f.charAt(i));g=!g}return(f+((10-d%10)%10).toString())}},upc:{getDigit:function(c){if(c.length<12){c="0"+c}return a.ean.getDigit(c,"ean13")},compute:function(c){if(c.length<12){c="0"+c}return a.ean.compute(c,"ean13").substr(1)}},msi:{encoding:["100100100100","100100100110","100100110100","100100110110","100110100100","100110100110","100110110100","100110110110","110100100100","110100100110"],compute:function(c,d){if(typeof(d)=="object"){if(d.crc1=="mod10"){c=this.computeMod10(c)}else{if(d.crc1=="mod11"){c=this.computeMod11(c)}}if(d.crc2=="mod10"){c=this.computeMod10(c)}else{if(d.crc2=="mod11"){c=this.computeMod11(c)}}}else{if(typeof(d)=="boolean"){if(d){c=this.computeMod10(c)}}}return(c)},computeMod10:function(h){var e,c=h.length%2;var g=0,f=0;for(e=0;e<h.length;e++){if(c){g=10*g+a.intval(h.charAt(e))}else{f+=a.intval(h.charAt(e))}c=!c}var d=(2*g).toString();for(e=0;e<d.length;e++){f+=a.intval(d.charAt(e))}return(h+((10-f%10)%10).toString())},computeMod11:function(e){var d=0,f=2;for(var c=e.length-1;c>=0;c--){d+=f*a.intval(e.charAt(c));f=f==7?2:f+1}return(e+((11-d%11)%11).toString())},getDigit:function(f,g){var e="0123456789";var d=0;var c="";f=this.compute(f,false);c="110";for(i=0;i<f.length;i++){d=e.indexOf(f.charAt(i));if(d<0){return("")}c+=this.encoding[d]}c+="1001";return(c)}},code11:{encoding:["101011","1101011","1001011","1100101","1011011","1101101","1001101","1010011","1101001","110101","101101"],getDigit:function(e){var p="0123456789-";var j,m,q="",f="0";q="1011001"+f;for(j=0;j<e.length;j++){m=p.indexOf(e.charAt(j));if(m<0){return("")}q+=this.encoding[m]+f}var o=0,h=0,l=1,d=0;for(j=e.length-1;j>=0;j--){o=o==10?1:o+1;l=l==10?1:l+1;m=p.indexOf(e.charAt(j));h+=o*m;d+=l*m}var n=h%11;d+=n;var g=d%11;q+=this.encoding[n]+f;if(e.length>=10){q+=this.encoding[g]+f}q+="1011001";return(q)}},code39:{encoding:["101001101101","110100101011","101100101011","110110010101","101001101011","110100110101","101100110101","101001011011","110100101101","101100101101","110101001011","101101001011","110110100101","101011001011","110101100101","101101100101","101010011011","110101001101","101101001101","101011001101","110101010011","101101010011","110110101001","101011010011","110101101001","101101101001","101010110011","110101011001","101101011001","101011011001","110010101011","100110101011","110011010101","100101101011","110010110101","100110110101","100101011011","110010101101","100110101101","100100100101","100100101001","100101001001","101001001001","100101101101"],getDigit:function(h){var g="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*";var f,e,d="",c="0";if(h.indexOf("*")>=0){return("")}h=("*"+h+"*").toUpperCase();for(f=0;f<h.length;f++){e=g.indexOf(h.charAt(f));if(e<0){return("")}if(f>0){d+=c}d+=this.encoding[e]}return(d)}},code93:{encoding:["100010100","101001000","101000100","101000010","100101000","100100100","100100010","101010000","100010010","100001010","110101000","110100100","110100010","110010100","110010010","110001010","101101000","101100100","101100010","100110100","100011010","101011000","101001100","101000110","100101100","100010110","110110100","110110010","110101100","110100110","110010110","110011010","101101100","101100110","100110110","100111010","100101110","111010100","111010010","111001010","101101110","101110110","110101110","100100110","111011010","111010110","100110010","101011110"],getDigit:function(e,j){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%____*",l,o="";if(e.indexOf("*")>=0){return("")}e=e.toUpperCase();o+=this.encoding[47];for(i=0;i<e.length;i++){l=e.charAt(i);index=n.indexOf(l);if((l=="_")||(index<0)){return("")}o+=this.encoding[index]}if(j){var m=0,g=0,h=1,d=0;for(i=e.length-1;i>=0;i--){m=m==20?1:m+1;h=h==15?1:h+1;index=n.indexOf(e.charAt(i));g+=m*index;d+=h*index}var l=g%47;d+=l;var f=d%47;o+=this.encoding[l];o+=this.encoding[f]}o+=this.encoding[47];o+="1";return(o)}},code128:{encoding:["11011001100","11001101100","11001100110","10010011000","10010001100","10001001100","10011001000","10011000100","10001100100","11001001000","11001000100","11000100100","10110011100","10011011100","10011001110","10111001100","10011101100","10011100110","11001110010","11001011100","11001001110","11011100100","11001110100","11101101110","11101001100","11100101100","11100100110","11101100100","11100110100","11100110010","11011011000","11011000110","11000110110","10100011000","10001011000","10001000110","10110001000","10001101000","10001100010","11010001000","11000101000","11000100010","10110111000","10110001110","10001101110","10111011000","10111000110","10001110110","11101110110","11010001110","11000101110","11011101000","11011100010","11011101110","11101011000","11101000110","11100010110","11101101000","11101100010","11100011010","11101111010","11001000010","11110001010","10100110000","10100001100","10010110000","10010000110","10000101100","10000100110","10110010000","10110000100","10011010000","10011000010","10000110100","10000110010","11000010010","11001010000","11110111010","11000010100","10001111010","10100111100","10010111100","10010011110","10111100100","10011110100","10011110010","11110100100","11110010100","11110010010","11011011110","11011110110","11110110110","10101111000","10100011110","10001011110","10111101000","10111100010","11110101000","11110100010","10111011110","10111101110","11101011110","11110101110","11010000100","11010010000","11010011100","11000111010"],getDigit:function(e){var d=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";var o="";var l=0;var f=0;var k=0;var h=0;var n=0;for(k=0;k<e.length;k++){if(d.indexOf(e.charAt(k))==-1){return("")}}var g=e.length>1;var m="";for(k=0;k<3&&k<e.length;k++){m=e.charAt(k);g&=m>="0"&&m<="9"}l=g?105:104;o=this.encoding[l];k=0;while(k<e.length){if(!g){h=0;while((k+h<e.length)&&(e.charAt(k+h)>="0")&&(e.charAt(k+h)<="9")){h++}g=(h>5)||((k+h-1==e.length)&&(h>3));if(g){o+=this.encoding[99];l+=++f*99}}else{if((k==e.length)||(e.charAt(k)<"0")||(e.charAt(k)>"9")||(e.charAt(k+1)<"0")||(e.charAt(k+1)>"9")){g=false;o+=this.encoding[100];l+=++f*100}}if(g){n=a.intval(e.charAt(k)+e.charAt(k+1));k+=2}else{n=d.indexOf(e.charAt(k));k+=1}o+=this.encoding[n];l+=++f*n}o+=this.encoding[l%103];o+=this.encoding[106];o+="11";return(o)}},codabar:{encoding:["101010011","101011001","101001011","110010101","101101001","110101001","100101011","100101101","100110101","110100101","101001101","101100101","1101011011","1101101011","1101101101","1011011011","1011001001","1010010011","1001001011","1010011001"],getDigit:function(h){var g="0123456789-$:/.+";var f,e,d="",c="0";d+=this.encoding[16]+c;for(f=0;f<h.length;f++){e=g.indexOf(h.charAt(f));if(e<0){return("")}d+=this.encoding[e]+c}d+=this.encoding[16];return(d)}},datamatrix:{lengthRows:[10,12,14,16,18,20,22,24,26,32,36,40,44,48,52,64,72,80,88,96,104,120,132,144,8,8,12,12,16,16],lengthCols:[10,12,14,16,18,20,22,24,26,32,36,40,44,48,52,64,72,80,88,96,104,120,132,144,18,32,26,36,36,48],dataCWCount:[3,5,8,12,18,22,30,36,44,62,86,114,144,174,204,280,368,456,576,696,816,1050,1304,1558,5,10,16,22,32,49],solomonCWCount:[5,7,10,12,14,18,20,24,28,36,42,48,56,68,84,112,144,192,224,272,336,408,496,620,7,11,14,18,24,28],dataRegionRows:[8,10,12,14,16,18,20,22,24,14,16,18,20,22,24,14,16,18,20,22,24,18,20,22,6,6,10,10,14,14],dataRegionCols:[8,10,12,14,16,18,20,22,24,14,16,18,20,22,24,14,16,18,20,22,24,18,20,22,16,14,24,16,16,22],regionRows:[1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4,4,4,4,4,4,6,6,6,1,1,1,1,1,1],regionCols:[1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4,4,4,4,4,4,6,6,6,1,2,1,2,2,2],interleavedBlocks:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,4,4,4,4,6,6,8,8,1,1,1,1,1,1],logTab:[-255,255,1,240,2,225,241,53,3,38,226,133,242,43,54,210,4,195,39,114,227,106,134,28,243,140,44,23,55,118,211,234,5,219,196,96,40,222,115,103,228,78,107,125,135,8,29,162,244,186,141,180,45,99,24,49,56,13,119,153,212,199,235,91,6,76,220,217,197,11,97,184,41,36,223,253,116,138,104,193,229,86,79,171,108,165,126,145,136,34,9,74,30,32,163,84,245,173,187,204,142,81,181,190,46,88,100,159,25,231,50,207,57,147,14,67,120,128,154,248,213,167,200,63,236,110,92,176,7,161,77,124,221,102,218,95,198,90,12,152,98,48,185,179,42,209,37,132,224,52,254,239,117,233,139,22,105,27,194,113,230,206,87,158,80,189,172,203,109,175,166,62,127,247,146,66,137,192,35,252,10,183,75,216,31,83,33,73,164,144,85,170,246,65,174,61,188,202,205,157,143,169,82,72,182,215,191,251,47,178,89,151,101,94,160,123,26,112,232,21,51,238,208,131,58,69,148,18,15,16,68,17,121,149,129,19,155,59,249,70,214,250,168,71,201,156,64,60,237,130,111,20,93,122,177,150],aLogTab:[1,2,4,8,16,32,64,128,45,90,180,69,138,57,114,228,229,231,227,235,251,219,155,27,54,108,216,157,23,46,92,184,93,186,89,178,73,146,9,18,36,72,144,13,26,52,104,208,141,55,110,220,149,7,14,28,56,112,224,237,247,195,171,123,246,193,175,115,230,225,239,243,203,187,91,182,65,130,41,82,164,101,202,185,95,190,81,162,105,210,137,63,126,252,213,135,35,70,140,53,106,212,133,39,78,156,21,42,84,168,125,250,217,159,19,38,76,152,29,58,116,232,253,215,131,43,86,172,117,234,249,223,147,11,22,44,88,176,77,154,25,50,100,200,189,87,174,113,226,233,255,211,139,59,118,236,245,199,163,107,214,129,47,94,188,85,170,121,242,201,191,83,166,97,194,169,127,254,209,143,51,102,204,181,71,142,49,98,196,165,103,206,177,79,158,17,34,68,136,61,122,244,197,167,99,198,161,111,222,145,15,30,60,120,240,205,183,67,134,33,66,132,37,74,148,5,10,20,40,80,160,109,218,153,31,62,124,248,221,151,3,6,12,24,48,96,192,173,119,238,241,207,179,75,150,1],champGaloisMult:function(d,c){if(!d||!c){return 0}return this.aLogTab[(this.logTab[d]+this.logTab[c])%255]},champGaloisDoub:function(d,c){if(!d){return 0}if(!c){return d}return this.aLogTab[(this.logTab[d]+c)%255]},champGaloisSum:function(d,c){return d^c},selectIndex:function(d,c){if((d<1||d>1558)&&!c){return -1}if((d<1||d>49)&&c){return -1}var e=0;if(c){e=24}while(this.dataCWCount[e]<d){e++}return e},encodeDataCodeWordsASCII:function(f){var e=new Array();var h=0,d,g;for(d=0;d<f.length;d++){g=f.charCodeAt(d);if(g>127){e[h]=235;g=g-127;h++}else{if((g>=48&&g<=57)&&(d+1<f.length)&&(f.charCodeAt(d+1)>=48&&f.charCodeAt(d+1)<=57)){g=((g-48)*10)+((f.charCodeAt(d+1))-48);g+=130;d++}else{g++}}e[h]=g;h++}return e},addPadCW:function(d,g,f){if(g>=f){return}d[g]=129;var e,c;for(c=g+1;c<f;c++){e=((149*(c+1))%253)+1;d[c]=(129+e)%254}},calculSolFactorTable:function(c){var f=new Array();var e,d;for(e=0;e<=c;e++){f[e]=1}for(e=1;e<=c;e++){for(d=e-1;d>=0;d--){f[d]=this.champGaloisDoub(f[d],e);if(d>0){f[d]=this.champGaloisSum(f[d],f[d-1])}}}return f},addReedSolomonCW:function(e,d,n,m,c){var p=0;var o=e/c;var l=new Array();var h,g,f;for(f=0;f<c;f++){for(h=0;h<o;h++){l[h]=0}for(h=f;h<n;h=h+c){p=this.champGaloisSum(m[h],l[o-1]);for(g=o-1;g>=0;g--){if(!p){l[g]=0}else{l[g]=this.champGaloisMult(p,d[g])}if(g>0){l[g]=this.champGaloisSum(l[g-1],l[g])}}}g=n+f;for(h=o-1;h>=0;h--){m[g]=l[h];g=g+c}}return m},getBits:function(c){var e=new Array();for(var d=0;d<8;d++){e[d]=c&(128>>d)?1:0}return e},next:function(h,j,f,k,e,g){var d=0;var l=4;var c=0;do{if((l==j)&&(c==0)){this.patternShapeSpecial1(e,g,k[d],j,f);d++}else{if((h<3)&&(l==j-2)&&(c==0)&&(f%4!=0)){this.patternShapeSpecial2(e,g,k[d],j,f);d++}else{if((l==j-2)&&(c==0)&&(f%8==4)){this.patternShapeSpecial3(e,g,k[d],j,f);d++}else{if((l==j+4)&&(c==2)&&(f%8==0)){this.patternShapeSpecial4(e,g,k[d],j,f);d++}}}}do{if((l<j)&&(c>=0)&&(g[l][c]!=1)){this.patternShapeStandard(e,g,k[d],l,c,j,f);d++}l-=2;c+=2}while((l>=0)&&(c<f));l+=1;c+=3;do{if((l>=0)&&(c<f)&&(g[l][c]!=1)){this.patternShapeStandard(e,g,k[d],l,c,j,f);d++}l+=2;c-=2}while((l<j)&&(c>=0));l+=3;c+=1}while((l<j)||(c<f))},patternShapeStandard:function(g,d,h,j,c,e,f){this.placeBitInDatamatrix(g,d,h[0],j-2,c-2,e,f);this.placeBitInDatamatrix(g,d,h[1],j-2,c-1,e,f);this.placeBitInDatamatrix(g,d,h[2],j-1,c-2,e,f);this.placeBitInDatamatrix(g,d,h[3],j-1,c-1,e,f);this.placeBitInDatamatrix(g,d,h[4],j-1,c,e,f);this.placeBitInDatamatrix(g,d,h[5],j,c-2,e,f);this.placeBitInDatamatrix(g,d,h[6],j,c-1,e,f);this.placeBitInDatamatrix(g,d,h[7],j,c,e,f)},patternShapeSpecial1:function(f,c,g,d,e){this.placeBitInDatamatrix(f,c,g[0],d-1,0,d,e);this.placeBitInDatamatrix(f,c,g[1],d-1,1,d,e);this.placeBitInDatamatrix(f,c,g[2],d-1,2,d,e);this.placeBitInDatamatrix(f,c,g[3],0,e-2,d,e);this.placeBitInDatamatrix(f,c,g[4],0,e-1,d,e);this.placeBitInDatamatrix(f,c,g[5],1,e-1,d,e);this.placeBitInDatamatrix(f,c,g[6],2,e-1,d,e);this.placeBitInDatamatrix(f,c,g[7],3,e-1,d,e)},patternShapeSpecial2:function(f,c,g,d,e){this.placeBitInDatamatrix(f,c,g[0],d-3,0,d,e);this.placeBitInDatamatrix(f,c,g[1],d-2,0,d,e);this.placeBitInDatamatrix(f,c,g[2],d-1,0,d,e);this.placeBitInDatamatrix(f,c,g[3],0,e-4,d,e);this.placeBitInDatamatrix(f,c,g[4],0,e-3,d,e);this.placeBitInDatamatrix(f,c,g[5],0,e-2,d,e);this.placeBitInDatamatrix(f,c,g[6],0,e-1,d,e);this.placeBitInDatamatrix(f,c,g[7],1,e-1,d,e)},patternShapeSpecial3:function(f,c,g,d,e){this.placeBitInDatamatrix(f,c,g[0],d-3,0,d,e);this.placeBitInDatamatrix(f,c,g[1],d-2,0,d,e);this.placeBitInDatamatrix(f,c,g[2],d-1,0,d,e);this.placeBitInDatamatrix(f,c,g[3],0,e-2,d,e);this.placeBitInDatamatrix(f,c,g[4],0,e-1,d,e);this.placeBitInDatamatrix(f,c,g[5],1,e-1,d,e);this.placeBitInDatamatrix(f,c,g[6],2,e-1,d,e);this.placeBitInDatamatrix(f,c,g[7],3,e-1,d,e)},patternShapeSpecial4:function(f,c,g,d,e){this.placeBitInDatamatrix(f,c,g[0],d-1,0,d,e);this.placeBitInDatamatrix(f,c,g[1],d-1,e-1,d,e);this.placeBitInDatamatrix(f,c,g[2],0,e-3,d,e);this.placeBitInDatamatrix(f,c,g[3],0,e-2,d,e);this.placeBitInDatamatrix(f,c,g[4],0,e-1,d,e);this.placeBitInDatamatrix(f,c,g[5],1,e-3,d,e);this.placeBitInDatamatrix(f,c,g[6],1,e-2,d,e);this.placeBitInDatamatrix(f,c,g[7],1,e-1,d,e)},placeBitInDatamatrix:function(g,d,j,h,c,e,f){if(h<0){h+=e;c+=4-((e+4)%8)}if(c<0){c+=f;h+=4-((f+4)%8)}if(d[h][c]!=1){g[h][c]=j;d[h][c]=1}},addFinderPattern:function(k,m,h,l,c){var n=(l+2)*m;var d=(c+2)*h;var e=new Array();e[0]=new Array();for(var f=0;f<d+2;f++){e[0][f]=0}for(var g=0;g<n;g++){e[g+1]=new Array();e[g+1][0]=0;e[g+1][d+1]=0;for(var f=0;f<d;f++){if(g%(l+2)==0){if(f%2==0){e[g+1][f+1]=1}else{e[g+1][f+1]=0}}else{if(g%(l+2)==l+1){e[g+1][f+1]=1}else{if(f%(c+2)==c+1){if(g%2==0){e[g+1][f+1]=0}else{e[g+1][f+1]=1}}else{if(f%(c+2)==0){e[g+1][f+1]=1}else{e[g+1][f+1]=0;e[g+1][f+1]=k[g-1-(2*(parseInt(g/(l+2))))][f-1-(2*(parseInt(f/(c+2))))]}}}}}}e[n+1]=new Array();for(var f=0;f<d+2;f++){e[n+1][f]=0}return e},getDigit:function(l,q){var p=this.encodeDataCodeWordsASCII(l);var j=p.length;var f=this.selectIndex(j,q);var m=this.dataCWCount[f];var x=this.solomonCWCount[f];var c=m+x;var y=this.lengthRows[f];var z=this.lengthCols[f];var e=this.regionRows[f];var d=this.regionCols[f];var k=this.dataRegionRows[f];var w=this.dataRegionCols[f];var t=y-2*e;var h=z-2*d;var u=this.interleavedBlocks[f];var s=(x/u);this.addPadCW(p,j,m);var r=this.calculSolFactorTable(s);this.addReedSolomonCW(x,r,m,p,u);var o=new Array();for(var n=0;n<c;n++){o[n]=this.getBits(p[n])}var A=new Array();var v=new Array();for(var n=0;n<h;n++){A[n]=new Array();v[n]=new Array()}if(((t*h)%8)==4){A[t-2][h-2]=1;A[t-1][h-1]=1;A[t-1][h-2]=0;A[t-2][h-1]=0;v[t-2][h-2]=1;v[t-1][h-1]=1;v[t-1][h-2]=1;v[t-2][h-1]=1}this.next(0,t,h,o,A,v);A=this.addFinderPattern(A,e,d,k,w);return A}},lec:{cInt:function(e,f){var d="";for(var c=0;c<f;c++){d+=String.fromCharCode(e&255);e=e>>8}return d},cRgb:function(e,d,c){return String.fromCharCode(c)+String.fromCharCode(d)+String.fromCharCode(e)},cHexColor:function(h){var d=parseInt("0x"+h.substr(1));var c=d&255;d=d>>8;var f=d&255;var e=d>>8;return(this.cRgb(e,f,c))}},hexToRGB:function(h){var d=parseInt("0x"+h.substr(1));var c=d&255;d=d>>8;var f=d&255;var e=d>>8;return({r:e,g:f,b:c})},isHexColor:function(d){var c=new RegExp("#[0-91-F]","gi");return d.match(c)},base64Encode:function(o){var c="",h,f,e,n,m,l,j;var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var g=0;while(g<o.length){h=o.charCodeAt(g++);f=o.charCodeAt(g++);e=o.charCodeAt(g++);n=h>>2;m=((h&3)<<4)|(f>>4);l=((f&15)<<2)|(e>>6);j=e&63;if(isNaN(f)){l=j=64}else{if(isNaN(e)){j=64}}c+=d.charAt(n)+d.charAt(m)+d.charAt(l)+d.charAt(j)}return c},bitStringTo2DArray:function(f){var e=[];e[0]=[];for(var c=0;c<f.length;c++){e[0][c]=f.charAt(c)}return(e)},resize:function(d,c){d.css("padding","0px").css("overflow","auto").css("width",c+"px").html("");return d},digitToBmpRenderer:function(t,v,o,g,n,z){var e=o.length;var f=o[0].length;var u=0;var r=this.isHexColor(v.bgColor)?this.lec.cHexColor(v.bgColor):this.lec.cRgb(255,255,255);var q=this.isHexColor(v.color)?this.lec.cHexColor(v.color):this.lec.cRgb(0,0,0);var d="";var c="";for(u=0;u<n;u++){d+=r;c+=q}var p="";var m=(4-((n*f*3)%4))%4;var C=(n*f+m)*z*e;var w="";for(u=0;u<m;u++){w+="\0"}var A="BM"+this.lec.cInt(54+C,4)+"\0\0\0\0"+this.lec.cInt(54,4)+this.lec.cInt(40,4)+this.lec.cInt(n*f,4)+this.lec.cInt(z*e,4)+this.lec.cInt(1,2)+this.lec.cInt(24,2)+"\0\0\0\0"+this.lec.cInt(C,4)+this.lec.cInt(2835,4)+this.lec.cInt(2835,4)+this.lec.cInt(0,4)+this.lec.cInt(0,4);for(var h=e-1;h>=0;h--){var l="";for(var j=0;j<f;j++){l+=o[h][j]=="0"?d:c}l+=w;for(var s=0;s<z;s++){A+=l}}var B=document.createElement("object");B.setAttribute("type","image/bmp");B.setAttribute("data","data:image/bmp;base64,"+this.base64Encode(A));this.resize(t,n*f+m).append(B)},digitToBmp:function(g,f,j,d){var c=a.intval(f.barWidth);var e=a.intval(f.barHeight);this.digitToBmpRenderer(g,f,this.bitStringTo2DArray(j),d,c,e)},digitToBmp2D:function(f,e,g,c){var d=a.intval(e.moduleSize);this.digitToBmpRenderer(f,e,g,c,d,d)},digitToCssRenderer:function(q,c,m,e,p,g){var r=m.length;var d=m[0].length;var j="";var o='<div style="float: left; font-size: 0px; background-color: '+c.bgColor+"; height: "+g+'px; width: &Wpx"></div>';var l='<div style="float: left; font-size: 0px; width:0; border-left: &Wpx solid '+c.color+"; height: "+g+'px;"></div>';var f,h;for(var k=0;k<r;k++){f=0;h=m[k][0];for(var n=0;n<d;n++){if(h==m[k][n]){f++}else{j+=(h=="0"?o:l).replace("&W",f*p);h=m[k][n];f=1}}if(f>0){j+=(h=="0"?o:l).replace("&W",f*p)}}if(c.showHRI){j+='<div style="clear:both; width: 100%; background-color: '+c.bgColor+"; color: "+c.color+"; text-align: center; font-size: "+c.fontSize+"px; margin-top: "+c.marginHRI+'px;">'+e+"</div>"}this.resize(q,p*d).html(j)},digitToCss:function(g,f,j,d){var c=a.intval(f.barWidth);var e=a.intval(f.barHeight);this.digitToCssRenderer(g,f,this.bitStringTo2DArray(j),d,c,e)},digitToCss2D:function(f,e,g,c){var d=a.intval(e.moduleSize);this.digitToCssRenderer(f,e,g,c,d,d)},digitToSvgRenderer:function(q,s,m,f,k,t){var d=m.length;var e=m[0].length;var p=k*e;var l=t*d;if(s.showHRI){var g=a.intval(s.fontSize);l+=a.intval(s.marginHRI)+g}var n='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+p+'" height="'+l+'">';n+='<rect width="'+p+'" height="'+l+'" x="0" y="0" fill="'+s.bgColor+'" />';var c='<rect width="&W" height="'+t+'" x="&X" y="&Y" fill="'+s.color+'" />';var r,o;for(var h=0;h<d;h++){r=0;o=m[h][0];for(var j=0;j<e;j++){if(o==m[h][j]){r++}else{if(o=="1"){n+=c.replace("&W",r*k).replace("&X",(j-r)*k).replace("&Y",h*t)}o=m[h][j];r=1}}if((r>0)&&(o=="1")){n+=c.replace("&W",r*k).replace("&X",(e-r)*k).replace("&Y",h*t)}}if(s.showHRI){n+='<g transform="translate('+Math.floor(p/2)+' 0)">';n+='<text y="'+(l-Math.floor(g/2))+'" text-anchor="middle" style="font-family: Arial; font-size: '+g+'px;" fill="'+s.color+'">'+f+"</text>";n+="</g>"}n+="</svg>";var u=document.createElement("object");u.setAttribute("type","image/svg+xml");u.setAttribute("data","data:image/svg+xml,"+n);this.resize(q,p).append(u)},digitToSvg:function(g,f,j,d){var c=a.intval(f.barWidth);var e=a.intval(f.barHeight);this.digitToSvgRenderer(g,f,this.bitStringTo2DArray(j),d,c,e)},digitToSvg2D:function(f,e,g,c){var d=a.intval(e.moduleSize);this.digitToSvgRenderer(f,e,g,c,d,d)},digitToCanvasRenderer:function(s,e,o,g,m,f,q,k){var c=s.get(0);if(!c||!c.getContext){return}var t=o.length;var d=o[0].length;var r=c.getContext("2d");r.lineWidth=1;r.lineCap="butt";r.fillStyle=e.bgColor;r.fillRect(m,f,d*q,t*k);r.fillStyle=e.color;for(var n=0;n<t;n++){var j=0;var l=o[n][0];for(var p=0;p<d;p++){if(l==o[n][p]){j++}else{if(l=="1"){r.fillRect(m+(p-j)*q,f+n*k,q*j,k)}l=o[n][p];j=1}}if((j>0)&&(l=="1")){r.fillRect(m+(d-j)*q,f+n*k,q*j,k)}}if(e.showHRI){var h=r.measureText(g);r.fillText(g,m+Math.floor((d*q-h.width)/2),f+t*k+e.fontSize+e.marginHRI)}},digitToCanvas:function(j,g,l,e){var d=a.intval(g.barWidth);var f=a.intval(g.barHeight);var c=a.intval(g.posX);var k=a.intval(g.posY);this.digitToCanvasRenderer(j,g,this.bitStringTo2DArray(l),e,c,k,d,f)},digitToCanvas2D:function(g,f,j,d){var e=a.intval(f.moduleSize);var c=a.intval(f.posX);var h=a.intval(f.posY);this.digitToCanvasRenderer(g,f,j,d,c,h,e,e)}};b.fn.extend({barcode:function(h,m,f){var n="",g="",d="",k=true,o=false,j=false;if(typeof(h)=="string"){d=h}else{if(typeof(h)=="object"){d=typeof(h.code)=="string"?h.code:"";k=typeof(h.crc)!="undefined"?h.crc:true;o=typeof(h.rect)!="undefined"?h.rect:false}}if(d==""){return(false)}if(typeof(f)=="undefined"){f=[]}for(var c in a.settings){if(f[c]==undefined){f[c]=a.settings[c]}}switch(m){case"std25":case"int25":n=a.i25.getDigit(d,k,m);g=a.i25.compute(d,k,m);break;case"ean8":case"ean13":n=a.ean.getDigit(d,m);g=a.ean.compute(d,m);break;case"upc":n=a.upc.getDigit(d);g=a.upc.compute(d);break;case"code11":n=a.code11.getDigit(d);g=d;break;case"code39":n=a.code39.getDigit(d);g=d;break;case"code93":n=a.code93.getDigit(d,k);g=d;break;case"code128":n=a.code128.getDigit(d);g=d;break;case"codabar":n=a.codabar.getDigit(d);g=d;break;case"msi":n=a.msi.getDigit(d,k);g=a.msi.compute(d,k);break;case"datamatrix":n=a.datamatrix.getDigit(d,o);g=d;j=true;break}if(n.length==0){return(b(this))}if(!j&&f.addQuietZone){n="0000000000"+n+"0000000000"}var l=b(this);var e="digitTo"+f.output.charAt(0).toUpperCase()+f.output.substr(1)+(j?"2D":"");if(typeof(a[e])=="function"){a[e](l,f,n,g)}return(l)}})}(jQuery));
/*! date-pickmeup */
(function(d){function getMaxDays(){var tmpDate=new Date(this.toString()),d=28,m=tmpDate.getMonth();while(tmpDate.getMonth()==m){++d;tmpDate.setDate(d);}return d-1;}d.addDays=function(n){this.setDate(this.getDate()+n);};d.addMonths=function(n){var day=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+n);this.setDate(Math.min(day,getMaxDays.apply(this)));};d.addYears=function(n){var day=this.getDate();this.setDate(1);this.setFullYear(this.getFullYear()+n);this.setDate(Math.min(day,getMaxDays.apply(this)));};d.getDayOfYear=function(){var now=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var then=new Date(this.getFullYear(),0,0,0,0,0);var time=now-then;return Math.floor(time/24*60*60*1000);};})(Date.prototype);(function($){var instances_count=0;$.pickmeup=$.extend($.pickmeup||{},{date:new Date,flat:false,first_day:1,prev:"&#9664;",next:"&#9654;",mode:"single",select_year:true,select_month:true,select_day:true,view:"days",calendars:1,format:"d-m-Y",position:"bottom",trigger_event:"click touchstart",class_name:"",separator:" - ",hide_on_select:false,min:null,max:null,render:function(){},change:function(){return true;},before_show:function(){return true;},show:function(){return true;},hide:function(){return true;},fill:function(){return true;},locale:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}});var views={years:"pmu-view-years",months:"pmu-view-months",days:"pmu-view-days"},tpl={wrapper:'<div class="pickmeup" />',head:function(d){var result="";for(var i=0;i<7;++i){result+="<div>"+d.day[i]+"</div>";}return'<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">'+d.prev+'</div><div class="pmu-month pmu-button" /><div class="pmu-next pmu-button">'+d.next+'</div></nav><nav class="pmu-day-of-week">'+result+"</nav></div>";},body:function(elements,container_class_name){var result="";for(var i=0;i<elements.length;++i){result+='<div class="'+elements[i].class_name+' pmu-button">'+elements[i].text+"</div>";}return'<div class="'+container_class_name+'">'+result+"</div>";}};function fill(){var options=$(this).data("pickmeup-options"),pickmeup=this.pickmeup,current_cal=Math.floor(options.calendars/2),actual_date=options.date,current_date=options.current,local_date,header,html,instance,today=(new Date).setHours(0,0,0,0).valueOf(),shown_date_from,shown_date_to,tmp_date;pickmeup.find(".pmu-instance > :not(nav)").remove();for(var i=0;i<options.calendars;i++){local_date=new Date(current_date);instance=pickmeup.find(".pmu-instance").eq(i);if(pickmeup.hasClass("pmu-view-years")){local_date.addYears((i-current_cal)*12);header=(local_date.getFullYear()-6)+" - "+(local_date.getFullYear()+5);}else{if(pickmeup.hasClass("pmu-view-months")){local_date.addYears(i-current_cal);header=local_date.getFullYear();}else{if(pickmeup.hasClass("pmu-view-days")){local_date.addMonths(i-current_cal);header=formatDate(local_date,"B, Y",options.locale);}}}if(!shown_date_to){if(options.max){tmp_date=new Date(local_date);if(options.select_day){tmp_date.addMonths(options.calendars-1);}else{if(options.select_month){tmp_date.addYears(options.calendars-1);}else{tmp_date.addYears((options.calendars-1)*12);}}if(tmp_date>options.max){--i;current_date.addMonths(-1);shown_date_to=undefined;continue;}}}shown_date_to=new Date(local_date);if(!shown_date_from){shown_date_from=new Date(local_date);shown_date_from.setDate(1);shown_date_from.addMonths(1);shown_date_from.addDays(-1);if(options.min&&options.min>shown_date_from){--i;current_date.addMonths(1);shown_date_from=undefined;continue;}}instance.find(".pmu-month").text(header);html="";var is_year_selected=function(year){return(options.mode=="range"&&year>=new Date(actual_date[0]).getFullYear()&&year<=new Date(actual_date[1]).getFullYear())||(options.mode=="multiple"&&actual_date.reduce(function(prev,current){prev.push(new Date(current).getFullYear());return prev;},[]).indexOf(year)!==-1)||new Date(actual_date).getFullYear()==year;};var is_months_selected=function(year,month){var first_year=new Date(actual_date[0]).getFullYear(),lastyear=new Date(actual_date[1]).getFullYear(),first_month=new Date(actual_date[0]).getMonth(),last_month=new Date(actual_date[1]).getMonth();return(options.mode=="range"&&year>first_year&&year<lastyear)||(options.mode=="range"&&year==first_year&&year<lastyear&&month>=first_month)||(options.mode=="range"&&year>first_year&&year==lastyear&&month<=last_month)||(options.mode=="range"&&year==first_year&&year==lastyear&&month>=first_month&&month<=last_month)||(options.mode=="multiple"&&actual_date.reduce(function(prev,current){current=new Date(current);prev.push(current.getFullYear()+"-"+current.getMonth());return prev;},[]).indexOf(year+"-"+month)!==-1)||(new Date(actual_date).getFullYear()==year&&new Date(actual_date).getMonth()==month);};(function(){var years=[],start_from_year=local_date.getFullYear()-6,min_year=new Date(options.min).getFullYear(),max_year=new Date(options.max).getFullYear(),year;for(var j=0;j<12;++j){year={text:start_from_year+j,class_name:[]};if((options.min&&year.text<min_year)||(options.max&&year.text>max_year)){year.class_name.push("pmu-disabled");}else{if(is_year_selected(year.text)){year.class_name.push("pmu-selected");}}year.class_name=year.class_name.join(" ");years.push(year);}html+=tpl.body(years,"pmu-years");})();(function(){var months=[],current_year=local_date.getFullYear(),min_year=new Date(options.min).getFullYear(),min_month=new Date(options.min).getMonth(),max_year=new Date(options.max).getFullYear(),max_month=new Date(options.max).getMonth(),month;for(var j=0;j<12;++j){month={text:options.locale.monthsShort[j],class_name:[]};if((options.min&&(current_year<min_year||(j<min_month&&current_year==min_year)))||(options.max&&(current_year>max_year||(j>max_month&&current_year>=max_year)))){month.class_name.push("pmu-disabled");}else{if(is_months_selected(current_year,j)){month.class_name.push("pmu-selected");}}month.class_name=month.class_name.join(" ");months.push(month);}html+=tpl.body(months,"pmu-months");})();(function(){var days=[],current_month=local_date.getMonth(),day;(function(){local_date.setDate(1);var day=(local_date.getDay()-options.first_day)%7;local_date.addDays(-(day+(day<0?7:0)));})();for(var j=0;j<42;++j){day={text:local_date.getDate(),class_name:[]};if(current_month!=local_date.getMonth()){day.class_name.push("pmu-not-in-month");}if(local_date.getDay()==0){day.class_name.push("pmu-sunday");}else{if(local_date.getDay()==6){day.class_name.push("pmu-saturday");}}var from_user=options.render(local_date)||{},val=local_date.valueOf(),disabled=(options.min&&options.min>local_date)||(options.max&&options.max<local_date);if(from_user.disabled||disabled){day.class_name.push("pmu-disabled");}else{if(from_user.selected||options.date==val||$.inArray(val,options.date)!==-1||(options.mode=="range"&&val>=options.date[0]&&val<=options.date[1])){day.class_name.push("pmu-selected");}}if(val==today){day.class_name.push("pmu-today");}if(from_user.class_name){day.class_name.push(from_user.class_name);}day.class_name=day.class_name.join(" ");days.push(day);local_date.addDays(1);}html+=tpl.body(days,"pmu-days");})();instance.append(html);}shown_date_from.setDate(1);shown_date_to.setDate(1);shown_date_to.addMonths(1);shown_date_to.addDays(-1);pickmeup.find(".pmu-prev").css("visibility",options.min&&options.min>=shown_date_from?"hidden":"visible");pickmeup.find(".pmu-next").css("visibility",options.max&&options.max<=shown_date_to?"hidden":"visible");options.fill.apply(this);}function parseDate(date,format,separator,locale){if(date.constructor==Date){return date;}else{if(!date){return new Date;}}var splitted_date=date.split(separator);if(splitted_date.length>1){splitted_date.forEach(function(element,index,array){array[index]=parseDate($.trim(element),format,separator,locale);});return splitted_date;}var months_text=locale.monthsShort.join(")(")+")("+locale.months.join(")("),separator=new RegExp("[^0-9a-zA-Z("+months_text+")]+"),parts=date.split(separator),against=format.split(separator),d,m,y,h,min,now=new Date();for(var i=0;i<parts.length;i++){switch(against[i]){case"b":m=locale.monthsShort.indexOf(parts[i]);break;case"B":m=locale.months.indexOf(parts[i]);break;case"d":case"e":d=parseInt(parts[i],10);break;case"m":m=parseInt(parts[i],10)-1;break;case"Y":case"y":y=parseInt(parts[i],10);y+=y>100?0:(y<29?2000:1900);break;case"H":case"I":case"k":case"l":h=parseInt(parts[i],10);break;case"P":case"p":if(/pm/i.test(parts[i])&&h<12){h+=12;}else{if(/am/i.test(parts[i])&&h>=12){h-=12;}}break;case"M":min=parseInt(parts[i],10);break;}}var parsed_date=new Date(y===undefined?now.getFullYear():y,m===undefined?now.getMonth():m,d===undefined?now.getDate():d,h===undefined?now.getHours():h,min===undefined?now.getMinutes():min,0);if(isNaN(parsed_date*1)){parsed_date=new Date;}return parsed_date;}function formatDate(date,format,locale){var m=date.getMonth();var d=date.getDate();var y=date.getFullYear();var w=date.getDay();var s={};var hr=date.getHours();var pm=(hr>=12);var ir=(pm)?(hr-12):hr;var dy=date.getDayOfYear();if(ir==0){ir=12;}var min=date.getMinutes();var sec=date.getSeconds();var parts=format.split(""),part;for(var i=0;i<parts.length;i++){part=parts[i];switch(part){case"a":part=locale.daysShort[w];break;case"A":part=locale.days[w];break;case"b":part=locale.monthsShort[m];break;case"B":part=locale.months[m];break;case"C":part=1+Math.floor(y/100);break;case"d":part=(d<10)?("0"+d):d;break;case"e":part=d;break;case"H":part=(hr<10)?("0"+hr):hr;break;case"I":part=(ir<10)?("0"+ir):ir;break;case"j":part=(dy<100)?((dy<10)?("00"+dy):("0"+dy)):dy;break;case"k":part=hr;break;case"l":part=ir;break;case"m":part=(m<9)?("0"+(1+m)):(1+m);break;case"M":part=(min<10)?("0"+min):min;break;case"p":case"P":part=pm?"PM":"AM";break;case"s":part=Math.floor(date.getTime()/1000);break;case"S":part=(sec<10)?("0"+sec):sec;break;case"u":part=w+1;break;case"w":part=w;break;case"y":part=(""+y).substr(2,2);break;case"Y":part=y;break;}parts[i]=part;}return parts.join("");}function update_date(){var $this=$(this),options=$this.data("pickmeup-options"),current_date=options.current,new_value;switch(options.mode){case"multiple":new_value=current_date.setHours(0,0,0,0).valueOf();if($.inArray(new_value,options.date)!==-1){$.each(options.date,function(index,value){if(value==new_value){options.date.splice(index,1);return false;}return true;});}else{options.date.push(new_value);}break;case"range":if(!options.lastSel){options.date[0]=current_date.setHours(0,0,0,0).valueOf();}new_value=current_date.setHours(0,0,0,0).valueOf();if(new_value<=options.date[0]){options.date[1]=options.date[0];options.date[0]=new_value;}else{options.date[1]=new_value;}options.lastSel=!options.lastSel;break;default:options.date=current_date.valueOf();break;}var prepared_date=prepareDate(options);if($this.is("input")){$this.val(options.mode=="single"?prepared_date[0]:prepared_date[0].join(options.separator));}options.change.apply(this,prepared_date);if(options.hide_on_select&&(options.mode!="range"||!options.lastSel)){options.binded.hide();return false;}}function click(e){var el=$(e.target);if(!el.hasClass("pmu-button")){el=el.closest(".pmu-button");}if(el.length){if(el.hasClass("pmu-disabled")){return false;}var $this=$(this),options=$this.data("pickmeup-options"),instance=el.parents(".pmu-instance").eq(0),root=instance.parent(),instance_index=$(".pmu-instance",root).index(instance);if(el.parent().is("nav")){if(el.hasClass("pmu-month")){options.current.addMonths(instance_index-Math.floor(options.calendars/2));if(root.hasClass("pmu-view-years")){if(options.mode!="single"){options.current=new Date(options.date[options.date.length-1]);}else{options.current=new Date(options.date);}if(options.select_day){root.removeClass("pmu-view-years").addClass("pmu-view-days");}else{if(options.select_month){root.removeClass("pmu-view-years").addClass("pmu-view-months");}}}else{if(root.hasClass("pmu-view-months")){if(options.select_year){root.removeClass("pmu-view-months").addClass("pmu-view-years");}else{if(options.select_day){root.removeClass("pmu-view-months").addClass("pmu-view-days");}}}else{if(root.hasClass("pmu-view-days")){if(options.select_month){root.removeClass("pmu-view-days").addClass("pmu-view-months");}else{if(options.select_year){root.removeClass("pmu-view-days").addClass("pmu-view-years");}}}}}}else{if(el.hasClass("pmu-prev")){options.binded.prev(false);}else{options.binded.next(false);}}}else{if(!el.hasClass("pmu-disabled")){if(root.hasClass("pmu-view-years")){options.current.setFullYear(parseInt(el.text(),10));if(options.select_month){root.removeClass("pmu-view-years").addClass("pmu-view-months");}else{if(options.select_day){root.removeClass("pmu-view-years").addClass("pmu-view-days");}else{options.binded.update_date();}}}else{if(root.hasClass("pmu-view-months")){options.current.setMonth(instance.find(".pmu-months .pmu-button").index(el));options.current.setFullYear(parseInt(instance.find(".pmu-month").text(),10));if(options.select_day){root.removeClass("pmu-view-months").addClass("pmu-view-days");}else{options.binded.update_date();}options.current.addMonths(Math.floor(options.calendars/2)-instance_index);}else{var val=parseInt(el.text(),10);options.current.addMonths(instance_index-Math.floor(options.calendars/2));if(el.hasClass("pmu-not-in-month")){options.current.addMonths(val>15?-1:1);}options.current.setDate(val);options.binded.update_date();}}}}options.binded.fill();}return false;}function prepareDate(options){var result;if(options.mode=="single"){result=new Date(options.date);return[formatDate(result,options.format,options.locale),result];}else{result=[[],[]];$.each(options.date,function(nr,val){var date=new Date(val);result[0].push(formatDate(date,options.format,options.locale));result[1].push(date);});return result;}}function show(force){var pickmeup=this.pickmeup;if(force||!pickmeup.is(":visible")){var $this=$(this),options=$this.data("pickmeup-options"),pos=$this.offset(),viewport={l:document.documentElement.scrollLeft,t:document.documentElement.scrollTop,w:document.documentElement.clientWidth,h:document.documentElement.clientHeight},top=pos.top,left=pos.left;options.binded.fill();if($this.is("input")){$this.pickmeup("set_date",parseDate($this.val(),options.format,options.separator,options.locale)).keydown(function(e){if(e.which==9){$this.pickmeup("hide");}});}options.before_show();switch(options.position){case"top":top-=pickmeup.outerHeight();break;case"left":left-=pickmeup.outerWidth();break;case"right":left+=this.offsetWidth;break;case"bottom":top+=this.offsetHeight;break;}if(top+pickmeup.offsetHeight>viewport.t+viewport.h){top=pos.top-pickmeup.offsetHeight;}if(top<viewport.t){top=pos.top+this.offsetHeight+pickmeup.offsetHeight;}if(left+pickmeup.offsetWidth>viewport.l+viewport.w){left=pos.left-pickmeup.offsetWidth;}if(left<viewport.l){left=pos.left+this.offsetWidth;}if(options.show()==false){return;}pickmeup.css({display:"inline-block",top:top+"px",left:left+"px"});$(document).on("mousedown"+options.events_namespace,options.binded.hide).on("resize"+options.events_namespace,[true],options.binded.forced_show);}}function forced_show(){show.call(this,true);}function hide(e){if(!e||!e.target||(e.target!=this&&!(this.pickmeup.get(0).compareDocumentPosition(e.target)&16))){var pickmeup=this.pickmeup,options=$(this).data("pickmeup-options");if(options.hide()!=false){pickmeup.hide();$(document).off("mousedown",options.binded.hide).off("resize",options.binded.forced_show);options.date[1]=options.date[0];options.lastSel=false;}}}function update(){var options=$(this).data("pickmeup-options");$(document).off("mousedown",options.binded.hide).off("resize",options.binded.forced_show);options.binded.forced_show();}function clear(){var options=$(this).data("pickmeup-options");if(options.mode!="single"){options.date=[];options.lastSel=false;options.binded.fill();}}function prev(fill){if(typeof fill=="undefined"){fill=true;}var root=this.pickmeup;var options=$(this).data("pickmeup-options");if(root.hasClass("pmu-view-years")){options.current.addYears(-12);}else{if(root.hasClass("pmu-view-months")){options.current.addYears(-1);}else{if(root.hasClass("pmu-view-days")){options.current.addMonths(-1);}}}if(fill){options.binded.fill();}}function next(fill){if(typeof fill=="undefined"){fill=true;}var root=this.pickmeup;var options=$(this).data("pickmeup-options");if(root.hasClass("pmu-view-years")){options.current.addYears(12);}else{if(root.hasClass("pmu-view-months")){options.current.addYears(1);}else{if(root.hasClass("pmu-view-days")){options.current.addMonths(1);}}}if(fill){options.binded.fill();}}function get_date(formatted){var options=$(this).data("pickmeup-options"),prepared_date=prepareDate(options);if(typeof formatted==="string"){var date=prepared_date[1];if(date.constructor==Date){return formatDate(date,formatted,options.locale);}else{return date.map(function(value){return formatDate(value,formatted,options.locale);});}}else{return prepared_date[formatted?0:1];}}function set_date(date){var options=$(this).data("pickmeup-options");options.date=date;if(typeof options.date==="string"){options.date=parseDate(options.date,options.format,options.separator,options.locale).setHours(0,0,0,0);}else{if(options.date.constructor==Date){options.date.setHours(0,0,0,0);}}if(!options.date){options.date=new Date;options.date.setHours(0,0,0,0);}if(options.mode!="single"){if(options.date.constructor!=Array){options.date=[options.date.valueOf()];if(options.mode=="range"){options.date.push(((new Date(options.date[0])).setHours(0,0,0,0)).valueOf());}}else{for(var i=0;i<options.date.length;i++){options.date[i]=(parseDate(options.date[i],options.format,options.separator,options.locale).setHours(0,0,0,0)).valueOf();}if(options.mode=="range"){options.date[1]=((new Date(options.date[1])).setHours(0,0,0,0)).valueOf();}}}else{options.date=options.date.constructor==Array?options.date[0].valueOf():options.date.valueOf();}options.current=new Date(options.mode!="single"?options.date[0]:options.date);options.binded.fill();}function destroy(){var $this=$(this),options=$this.data("pickmeup-options");$this.removeData("pickmeup-options");$this.off(options.events_namespace);$(document).off(options.events_namespace);$(this.pickmeup).remove();}$.fn.pickmeup=function(initial_options){if(typeof initial_options==="string"){var data,parameters=Array.prototype.slice.call(arguments,1);switch(initial_options){case"hide":case"show":case"clear":case"update":case"prev":case"next":case"destroy":this.each(function(){data=$(this).data("pickmeup-options");if(data){data.binded[initial_options]();}});break;case"get_date":data=this.data("pickmeup-options");if(data){return data.binded.get_date(parameters[0]);}else{return null;}break;case"set_date":this.each(function(){data=$(this).data("pickmeup-options");if(data){data.binded[initial_options].apply(this,parameters);}});}return this;}return this.each(function(){var $this=$(this);if($this.data("pickmeup-options")){return;}var i,option,options=$.extend({},$.pickmeup,initial_options||{});for(i in options){option=$this.data("pmu-"+i);if(typeof option!=="undefined"){options[i]=option;}}if(options.view=="days"&&!options.select_day){options.view="months";}if(options.view=="months"&&!options.select_month){options.view="years";}if(options.view=="years"&&!options.select_year){options.view="days";}if(options.view=="days"&&!options.select_day){options.view="months";}options.calendars=Math.max(1,parseInt(options.calendars,10)||1);options.mode=/single|multiple|range/.test(options.mode)?options.mode:"single";if(typeof options.min==="string"){options.min=parseDate(options.min,options.format,options.separator,options.locale).setHours(0,0,0,0);}else{if(options.min&&options.min.constructor==Date){options.min.setHours(0,0,0,0);}}if(typeof options.max==="string"){options.max=parseDate(options.max,options.format,options.separator,options.locale).setHours(0,0,0,0);}else{if(options.max&&options.max.constructor==Date){options.max.setHours(0,0,0,0);}}if(!options.select_day){if(options.min){options.min=new Date(options.min);options.min.setDate(1);options.min=options.min.valueOf();}if(options.max){options.max=new Date(options.max);options.max.setDate(1);options.max=options.max.valueOf();}}if(typeof options.date==="string"){options.date=parseDate(options.date,options.format,options.separator,options.locale).setHours(0,0,0,0);}else{if(options.date.constructor==Date){options.date.setHours(0,0,0,0);}}if(!options.date){options.date=new Date;options.date.setHours(0,0,0,0);}if(options.mode!="single"){if(options.date.constructor!=Array){options.date=[options.date.valueOf()];if(options.mode=="range"){options.date.push(((new Date(options.date[0])).setHours(0,0,0,0)).valueOf());}}else{for(i=0;i<options.date.length;i++){options.date[i]=(parseDate(options.date[i],options.format,options.separator,options.locale).setHours(0,0,0,0)).valueOf();}if(options.mode=="range"){options.date[1]=((new Date(options.date[1])).setHours(0,0,0,0)).valueOf();}}options.current=new Date(options.date[0]);if(!options.select_day){for(i=0;i<options.date.length;++i){options.date[i]=new Date(options.date[i]);options.date[i].setDate(1);options.date[i]=options.date[i].valueOf();if(options.mode!="range"&&options.date.indexOf(options.date[i])!==i){delete options.date.splice(i,1);--i;}}}}else{options.date=options.date.valueOf();options.current=new Date(options.date);if(!options.select_day){options.date=new Date(options.date);options.date.setDate(1);options.date=options.date.valueOf();}}options.current.setDate(1);options.current.setHours(0,0,0,0);var cnt,pickmeup=$(tpl.wrapper);this.pickmeup=pickmeup;if(options.class_name){pickmeup.addClass(options.class_name);}var html="";for(i=0;i<options.calendars;i++){cnt=options.first_day;html+=tpl.head({prev:options.prev,next:options.next,day:[options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7],options.locale.daysMin[(cnt++)%7]]});}$this.data("pickmeup-options",options);for(i in options){if(["render","change","before_show","show","hide"].indexOf(i)!=-1){options[i]=options[i].bind(this);}}options.binded={fill:fill.bind(this),update_date:update_date.bind(this),click:click.bind(this),show:show.bind(this),forced_show:forced_show.bind(this),hide:hide.bind(this),update:update.bind(this),clear:clear.bind(this),prev:prev.bind(this),next:next.bind(this),get_date:get_date.bind(this),set_date:set_date.bind(this),destroy:destroy.bind(this)};options.events_namespace=".pickmeup-"+(++instances_count);pickmeup.on("click touchstart",options.binded.click).addClass(views[options.view]).append(html).on($.support.selectstart?"selectstart":"mousedown",function(e){e.preventDefault();});options.binded.fill();if(options.flat){pickmeup.appendTo(this).css({position:"relative",display:"inline-block"});}else{pickmeup.appendTo(document.body);var trigger_event=options.trigger_event.split(" ");for(i=0;i<trigger_event.length;++i){trigger_event[i]+=options.events_namespace;}trigger_event=trigger_event.join(" ");$this.on(trigger_event,options.binded.show);}});};})(jQuery);
/*! autocomplete - version 1.2.24*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=function(){},f=this,g={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:e,onSearchComplete:e,onSearchError:e,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(b){return"string"==typeof b?a.parseJSON(b):b},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};f.element=c,f.el=a(c),f.suggestions=[],f.badQueries=[],f.selectedIndex=-1,f.currentValue=f.element.value,f.intervalId=0,f.cachedResponse={},f.onChangeInterval=null,f.onChange=null,f.isLocal=!1,f.suggestionsContainer=null,f.noSuggestionsContainer=null,f.options=a.extend({},g,d),f.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},f.hint=null,f.hintValue="",f.selection=null,f.initialize(),f.setOptions(d)}var c=function(){return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),d={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};b.utils=c,a.Autocomplete=b,b.formatResult=function(a,b){var d="("+c.escapeRegExChars(b)+")";return a.value.replace(new RegExp(d,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")},b.prototype={killerFn:null,initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.killerFn=function(b){0===a(b.target).closest("."+d.options.containerClass).length&&(d.killSuggestions(),d.disableKillerFn())},d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo),"auto"!==g.width&&c.width(g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),0===a.options.minChars&&0===a.el.val().length&&a.onValueChange()},onBlur:function(){this.enableKillerFn()},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=c.options;a.extend(d,b),c.isLocal=a.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearInterval(a.onChangeInterval),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()-2+"px"),c.css(i)}},enableKillerFn:function(){var b=this;a(document).on("click.autocomplete",b.killerFn)},disableKillerFn:function(){var b=this;a(document).off("click.autocomplete",b.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions(),a.intervalId=window.setInterval(function(){a.visible&&(a.el.val(a.currentValue),a.hide()),a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===d.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case d.ESC:b.el.val(b.currentValue),b.hide();break;case d.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case d.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case d.RETURN:if(-1===b.selectedIndex)return void b.hide();b.select(b.selectedIndex);break;case d.UP:b.moveUp();break;case d.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case d.UP:case d.DOWN:return}clearInterval(b.onChangeInterval),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearInterval(b.onChangeInterval),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,d=h.ignoreParams?null:h.params,h.onSearchStart.call(g.element,h.params)!==!1){if(a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&a.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearInterval(b.onChangeInterval),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var d=a.data[e];return b===d?"":(b=d,'<div class="autocomplete-group"><strong>'+b+"</strong></div>")};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=a(b.suggestionsContainer),d=a(b.noSuggestionsContainer);this.adjustContainerWidth(),d.detach(),c.empty(),c.append(d),b.fixPosition(),c.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width&&(b=c.el.outerWidth()-2,e.width(b>0?b:300))},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&0===a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),b.disableKillerFn(),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.autocomplete=a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return 0===arguments.length?this.first().data(e):this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))})}});

(function($){
	
	String.prototype.ucwords = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	
	$(window).resize(function(){ 
		$('.TableListScroll').tableListScroll();
	});
	
	Object.size = function(obj) {var size = 0, key;for (key in obj) {if (obj.hasOwnProperty(key)) size++;}return size;};
	getQueryVariable = function(r){for(var t=window.location.search.substring(1),i=t.split("&"),n=0;n<i.length;n++){var e=i[n].split("=");if(e[0]==r)return e[1]}return!1};
	getParameterByName=function(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),a=r.exec(n);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null};
	
	nl2br = function(str, is_xhtml) {
		if (typeof str === 'undefined' || str === null) {
			return '';
		}
		var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
	}
	
	
	$.fn.datePicker = function(args){
		var defaults = {
			id: 'date-picker',
			value: '0000-00-00',
			classname: 'app-date-picker',
			niceformat: false,
			set_default_value: false,
			target: '',
		}
		
		var dp = $.extend( {}, defaults, args);
		var wid = $(this).prop('id');
		var monthNames = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des" ];
		var daysInMonth = function(month,year) { return new Date(year, month, 0).getDate();}
		
		var d = new Date(), y2 = d.getFullYear(), y1= y2+1, d2 = 31, opt_y = '<option value="0000"></option>', opt_m = '<option value="00"></option>', opt_d = '', select = '';
		
		if(dp.value !== '0000-00-00'){
			d = new Date(dp.value);
			y2 = d.getFullYear();
			y1= y2+1;
		}
		
		var selected = {'opt-year': '0000','opt-month': '00','opt-day': '00'};
		var set_num_days = function(d){
			var opt_d = '<option value="00"></option>';
			for(i=1;i<=d;i++){
				var n = (i < 10) ? ("0" + i) : i;
				opt_d+= '<option value="'+n+'">'+n+'</option>';
			}return opt_d;
		}
		for(i=y2;i<=y1;i++){ opt_y+= '<option value="'+i+'">'+i+'</option>';}
		for(i=1;i<=12;i++){ var n = (i < 10) ? ("0" + i) : i; opt_m+= '<option value="'+n+'">'+monthNames[i-1]+'</option>';}
		select = '<select class="dp-opt-year" id="opt-year">'+opt_y+'</select>&nbsp;<select class="dp-opt-month" id="opt-month">'+opt_m+'</select>&nbsp;<select class="dp-opt-day" id="opt-day"></select>';
		select+= '<input type="hidden" size="10" id="'+dp.id+'" name="'+dp.id+'" value="'+dp.value+'" class="'+dp.classname+'" />';
		
		$(this).html(select);
		$('#'+wid+' SELECT#opt-day').html(set_num_days(31));
		
		$('#'+wid+' SELECT#opt-year, #'+wid+' SELECT#opt-month,#'+wid+' SELECT#opt-day').unbind('change').on('change',function(){
			switch($(this).prop('id')){
				case 'opt-year':
					$('#'+wid+' SELECT#opt-month').val('00').trigger('change');
					$('#'+wid+' SELECT#opt-day').val('00').trigger('change');
				break;
				case 'opt-month':
					$('#'+wid+' SELECT#opt-day').val('00').trigger('change');
					var days = daysInMonth($('#'+wid+' SELECT#opt-month')[0].value, $('#'+wid+' SELECT#opt-year')[0].value);
					$('#'+wid+' SELECT#opt-day').html(set_num_days(days));
				break;
				case 'opt-day':
				
				break;
			}
			
			selected[$(this).prop('id')] = $(this).val();
			$('INPUT#'+dp.id).val(selected['opt-year']+'-'+selected['opt-month']+'-'+selected['opt-day']);
			if(selected['opt-year'] !== '0000' && selected['opt-month'] !== '00' && selected['opt-day'] !== '00'){
				var dateValue = ''
				if(dp.niceformat === true){
					dateValue = selected['opt-day'] + ' ' +$('#'+wid+' SELECT#opt-month').children(':selected').text() + ' ' + selected['opt-year'];
				}else{
					dateValue = selected['opt-year']+'-'+selected['opt-month']+'-'+selected['opt-day'];
				}
			}else{
				dateValue = '0000-00-00';
			}
			if(dp.target !== ''){
				if(dateValue !== '0000-00-00'){
					$(dp.target).html(dateValue);
				}else{
					$(dp.target).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ");
				}
			}else{
				$('INPUT#'+dp.id).val(dateValue);
			}
			
		});
		if(dp.value && (dp.value !== '' || dp.value !== '0000-00-00')){
			if(dp.set_default_value === true){
				var v = function(){
					var x = new Date();
					var y = x.getFullYear();
					var month = x.getMonth() + 1;
					var m = month < 10 ? "0" + month : month;
					var d = x.getDate();
					return y + '-' + m + '-' + d;
				}				
				dp.value = v();
			}
			var x = dp.value.split('-');
			$('#'+wid+' SELECT#opt-year').val(x[0]).trigger('change');
			$('#'+wid+' SELECT#opt-month').val(x[1]).trigger('change');
			$('#'+wid+' SELECT#opt-day').val(x[02]).trigger('change');
			
		}
	}
	
	$.fn.centerBox = function () {
		this.css("position","absolute");
		this.css("top", (($(window).height() - this.outerHeight()) / 2) + ($(window).scrollTop()-35) + "px");
		this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
		return this;
	}
	
	$.fn.restoreFields = function(){ 
		$(this).find('.redbox').removeClass('redbox');
		$(this).each(function(){ 
			this.reset();
		});
	}
	
	$.fn.fadeMi = function(autoplay,fadein,intv){
		var f = 700;
		if(fadein){f = fadein;}
		
		
		var box = $(this);
		var slideCount = $(box).children('ul').children('li').length;
		var maxSlide = slideCount-1;
		var slideWidth = $(box).innerWidth();
		var slideHeight = $(box).height();
		var sliderUlWidth = slideCount * slideWidth;
		var index = 0;
		
		var control_prev = $(box).children('i.control-prev');
		var control_next = $(box).children('i.control-next');
		
		$(box).show();
		$(box).children('ul').children('li').hide();
		$(box).children('ul').children('li').eq(index).show();

		function moveLeft() {
			index = index-1;
			$(box).children('ul').children('li').hide();
			if(index < 0){index = maxSlide;}
			$(box).children('ul').children('li').eq(index).fadeIn(f);
		};

		function moveRight() {
			index = index+1;
			if(index > maxSlide){index = 0;}
			$(box).children('ul').children('li').hide();
			$(box).children('ul').children('li').eq(index).fadeIn(f);
		};
		$(control_prev).click(function () {moveLeft();});
		$(control_next).click(function () {moveRight();});
		
		if(autoplay && autoplay == true){
			var i = 5000;
			if(intv){i = intv;}
			setInterval(function () {
				moveRight();
			}, i);
		}
	}
	
	$.fn.serializeObject = function(){
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) { o[this.name] = [o[this.name]];}
				o[this.name].push(this.value || '');
			} 
			else {o[this.name] = this.value || '';}
		});
		return o;
	}
	
	$.fn.numberOnly = function(){
		$(this).keydown(function (e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 /* Allow: Ctrl+A, Command+A*/
				(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
				/* Allow: Ctrl+V, Command+V*/
				(e.keyCode == 86 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
				/* Allow: home, end, left, right, down, up*/
				(e.keyCode >= 35 && e.keyCode <= 40)) {
					 /* let it happen, don't do anything*/
					 return;
			}
			/* Ensure that it is a number and stop the keypress*/
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
	}
	
	$.fn.numberFormatThousand = function(){
		$(this).keyup(function(event) {
		// skip for arrow keys
		
		if(event.which >= 37 && event.which <= 40) return;
			// format number
			$(this).val(function(index, value) {
				return value
				.replace(/\D/g, "")
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			});
		});
	}
	
	$.fn.isNumeric = function(n){return !isNaN(parseFloat(n)) && isFinite(n);}
	
	$.fn.thousandSeparator = function(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");}
	
	$.fn.countObj = function(j){var count = 0;for(var k in j){if(j.hasOwnProperty(k)){ ++count;}}return count;}
	
	$.fn.isJsonStr = function(text){if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {return true;} else { return false; }}
	
	$.fn.tableListScroll = function(){
		var thead = $(this).find('DIV.tbl-thead');
		var tbody = $(this).find('DIV.tbl-tbody');
		
		var thead_table = $(thead).find('TABLE').not('.inner-table');
		var tbody_table = $(tbody).find('TABLE').not('.inner-table');
		
		var pgWidth = $(this).outerWidth();
		var thWidth = $(thead_table).outerWidth();
		var tbWidth = $(tbody_table).outerWidth();
		var thead_lc = $(thead).find('COL').last();
		selisih = 50;
		$(thead_lc).css('width',(($(thead_lc).outerWidth())+selisih)+'px');
		tbody.scroll(function(){
			var myoffset = $(this).scrollLeft();
			thead.scrollLeft(myoffset);  
		});
	}
	
	$.progress = $.extend({}, {
		cssClass : 'bar',
		open: function(css,txt){
			var text = ''; var cls = ' bar';
			if(txt && txt !== ''){ text = txt;}
			if(css && css !== ''){ this.cssClass = ''+css;}
			var bgprogress = '<div class="progressblock bg '+this.cssClass+' pane" style="z-index:99999999999"></div>';
			var textprogress = '<span class="progressblock fr '+this.cssClass+'" style="z-index:999999999999"><span>'+text+'</span></span>';
			$(bgprogress).appendTo('body');
			$(textprogress).appendTo('body').centerBox();
			return false;
		},
		
		close: function(callback){
			if(callback && typeof callback == 'function'){callback();}
			$(document).find('.progressblock.bg').remove();
			$(document).find('.progressblock.fr.'+this.cssClass).remove();
			return false;
		},
	})
	
	$.Form = $.extend({}, {
		urlAction : '',
		method : 'POST',
		data: {},
		contentType: false,
		
		submit : function(callback){
			var $this = this;
			var x = {};
			//$.progress.open();
			$.ajax({
				url: $this.urlAction, 
				type: $this.method,
				data: $this.data,
				cache: false,
				contentType: $this.contentType,
				processData: false,
				async:true,
				success: function(response,status,xhr){},
			}).done(function(response,status,xhr){
				//$.progress.close();
				x = {
					status: xhr.getResponseHeader('App-Status'),
					flag: xhr.getResponseHeader('App-Flag'),
					message:xhr.getResponseHeader('App-Message'),
					data:xhr.getResponseHeader('App-Data'),
				}
				
				if(callback && typeof callback === 'function'){
					callback(response,x);
					return false;
				}
				
				if(x.status == '1' || x.status == 1 || x.status === true){
					
				}else{
					
				}
			}).fail(function(xhr,response){
				console.log('ajax failed');
			});
		},
		
		checkRequired : function(arrName){
			var status = true;
			$.each(arrName,function(i,j){
				var myEl = j[0];
				if($(myEl).is('INPUT[type=text],INPUT[type=hidden],TEXTAREA')){
					if($(myEl).val() == "" 
					|| $(myEl).val() == 0 
					|| $(myEl).val() == '0' 
					|| $(myEl).val() == null 
					|| $(myEl).val() == 'null' 
					|| $(myEl).val() == '0000-00-00' 
					|| $(myEl).val() == undefined 
					|| $(myEl).val() == 'undefined'){
						status = false;
						if(j[1] && j[1] !== ''){
							$(myEl).parents(j[1]).addClass('redbox');
						}else{
							$(myEl).addClass('redbox');
						}
					}else{ 
						if(j[1] && j[1] !== ''){
							$(myEl).parents(j[1]).removeClass('redbox'); 
						}else{
							$(myEl).removeClass('redbox'); 
						}
					}
				}
				if($(myEl).is('SELECT')){
					if($(myEl).val() == "" 
					|| $(myEl).children(':selected').val() == 0 
					|| $(myEl).children(':selected').val() == '0' 
					|| $(myEl).children(':selected').val() == "undefined" 
					|| $(myEl).children(':selected').val() == undefined 
					|| $(myEl).children(':selected').val() == "null" 
					|| $(myEl).children(':selected').val() == null 
					|| $(myEl).val() == 'undefined'){
						status = false;
						$(myEl).parents(j[1]).addClass('redbox');
					}else{ $(myEl).parents(j[1]).removeClass('redbox'); }
				}
				if($(myEl).is('INPUT[type=radio]')){
					if($(myEl).is(':checked')){
						$(myEl).parents(j[1]).removeClass('redbox');
					}else{
						status = false;
						$(myEl).parents(j[1]).addClass('redbox');
					}
				}
				if($(myEl).is('INPUT[type=checkbox]')){
					if($(myEl+':checked').length > 0){
						$(myEl).parents(j[1]).removeClass('redbox');
					}else{
						status = false;
						$(myEl).parents(j[1]).addClass('redbox');
					}
				}
			});
			
			return status;
		},
		
	})
	
	$.Info = $.extend({}, {
		title : '',
		content : '',
		icon : '',
		callback : function(){},
		buttons: [],
		
		set_buttons : function(arr){
			var buttons = '';
			$.each(arr,function(a,b){
				buttons+= '<button id="xinfo-'+b[0]+'" class="btn btn-frm" style="margin-right:5px">';
				if(b[1] && b[1] !== ''){
					buttons+= b[1];
				}else{
					if(b[0] === 'Yes'){buttons+='<i class="app-info-btn-yes fa fa-check"></i>';}
					if(b[0] === 'No'){buttons+='<i class="app-info-btn-no fa fa-remove"></i>';}
				}
				buttons+='</button>';
			});
			return buttons;
		},
		
		Yes: function(fn){
			if($('button#xinfo-Yes').length){
				$('button#xinfo-Yes').unbind('click').on('click',function(){
					if(fn === 'function'){ fn(); return false;}
					console.log('button yes triggered');
				})
			}
		},
		
		No: function(fn){
			if($('button#xinfo-No').length){
				$('button#xinfo-No').unbind('click').on('click',function(){
					if(fn === 'function'){ fn(); return false;}
					console.log('button no triggered');
				});
			}
		},
		
		open : function(args){
			var $this = this;
			var defaults = {
				id: 'xInfo',
				title: '',
				icon: '',
				content: 'xInfo - Content',
				buttons: [['Yes','<i class="app-info-btn-yes fa fa-check"></i>'],['No','<i class="app-info-btn-no fa fa-remove"></i>']],
				nobuttons: false,
				onYes: function(){$this.close()},
				onNo: function(){$this.close()},
			}
			
			var param = $.extend( {}, defaults, args);
			var xtitle = (param.title === undefined || param.title ===  '') ? '' : '<h1 style="padding:20px 10px 10px 10px;font-size:16pt;color:#555">'+param.title+'</h1>';
			var xcontent = (param.content === undefined || param.content === '') ? '' : param.content;
			
			var h ='<div id="xinfo-panel" style="position:fixed;left:0;right:0;bottom:0;top:0;background-color:rgba(255,255,255,0.9);z-index:999999999999;overflow:hidden;overflow-y: auto;-webkit-overflow-scrolling: touch;">\
					<div style="display:table;table-layout:fixed;height:100%;width:100%;">\
						<div style="display:table-row;height:inherit;">\
							<div style="display:table-cell;height:inherit;vertical-align:middle;text-align:center;">';
								/**/
								h+='<div class="xInfo-inner" style="width:300px;background-color:#fff;margin:0 auto;border:solid 1px #eee;box-shadow: 0 4px 2px -2px #ccc;">'
									h+= xtitle
									h+='<div class="info-body-content" style="padding:10px;color:#555;">';
										if(param.icon !== ''){
											h+='<span style="display:block;padding:10px;">'+param.icon+'</span>';
										}
										h+='<span style="display:block;padding:10px;color:#555;">'+xcontent+'</span>'
									+'</div>';
									
									if(param.nobuttons === false){
									h+='<div class="info-footer" style="padding:10px 10px 20px 10px">';
									if(param.buttons && $.isArray(param.buttons)){
										h+=$this.set_buttons(param.buttons);
									}
									h+='</div>';
									}
								h+='</div>';
								/**/
						h+='</div>'
					+'</div>'
				+'</div>'
			+'</div>';
			//$('body').css('overflow','hidden');
			$('body').prepend(h);
						
			if(param.buttons && $.isArray(param.buttons)){
				$.each(param.buttons,function(a,b){
					
					if($('button#xinfo-'+b[0]).length){
						$('button#xinfo-'+b[0]).unbind('click').on('click',function(){
							if(param['on'+b[0]] && typeof param['on'+b[0]] === 'function'){ param['on'+b[0]]();return false;}
						})
					}
					
				});
			}
		},
		
		close: function(){
			//$('body').css('overflow','auto');
			$('DIV#xinfo-panel').remove();
		},
		
		processing: function(icon,message){
			this.open({
				title: $.app.labels['processing-title'],
				content: message && message !== '' ? message : 'Processing your request. Please wait.',
				icon : icon,
				nobuttons: true,
			})
		}	
	})
	
	$.app = $.extend({}, {
		
		hostUrl	: '',
		baseUrl	: '',
		lang 	: {},
		logo	: '',
		action	: '',
		
		frm_required : [],
		/**/
		
		getToday: function(){
			var d = new Date();
			var mm = d.getMonth()+1;
			var yyyy = d.getFullYear();
			var dd = d.getDate();
			if(dd<10){dd = '0'+dd;}
			if(mm<10){mm = '0'+mm;} 
			return yyyy+'-'+mm+'-'+dd;
		},
		
		editor: function(editorName,edMini,edHeight){
			/* init editor */
			var $this = this;
			//var editorName = 'article-content';
			var editor = CKEDITOR.instances[editorName];
			if (editor) { editor.destroy(true); }
			var editorHeight = edHeight && edHeight !== '' ? edHeight : 200;
			var texarea_data_height = $('SPAN.texteditor TEXTAREA').attr('data-height');
			if (typeof texarea_data_height !== typeof undefined && texarea_data_height !== false) {
				editorHeight = texarea_data_height;
			}
			
			var defaultToolbar = [
				{name: '1', items: ['Bold','Italic','Strike','FontSize','Liststyle']},
				{name: '2', items: ['NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock']},
				{name: '3', items: ['CreatePlaceholder','Table','HorizontalRule','-','TextColor','BGColor','-','CreateDiv']},
				{name: '4', items: ['Image','Link','Unlink','Anchor']},
			];
			
			if(edMini === true){
				defaultToolbar = [
					{name: '1', items: ['Bold','Italic','Strike','FontSize','Liststyle']},
					{name: '2', items: ['NumberedList','BulletedList','-','-','Blockquote']},
					{name: '3', items: ['Image','Link','Unlink','Source']},
				];
			}
			
			CKEDITOR.replace(editorName,{
				uiColor: '#f8f8f8',
				height: editorHeight,
				toolbar:defaultToolbar,
				allowedContent: true,
				removeDialogTabs : 'image:Link;image:advanced',
			});
			
			/*
			CKEDITOR.on('dialogDefinition', function (event) {
				var dialogName = event.data.name,dialogDefinition = event.data.definition,infoTab,browse;
				if (dialogName == 'image' || dialogName == 'link') {
				//if (dialogName == 'image') {
					infoTab = dialogDefinition.getContents('info');
					browse = infoTab.get('browse');
					if (browse !== null) {
						//if (dialogName == 'image') {
							browse.hidden = false;
						//}
						browse.onClick = function () {
							var me = this,dialog = me.getDialog(),editor = dialog.getParentEditor(),callBack = editor._.filebrowserFn,win;
							if (dialogName == 'image') {
								$this.fileBrowser.hostUrl = $this.hostUrl;
								$this.fileBrowser.open('image',dialog);
							}
							if (dialogName == 'link') {
								$this.fileBrowser.open('others',dialog);
								$this.fileBrowser.hostUrl = $this.hostUrl;
							}
						}
					}
				}
			});
			*/
		},
		
		post: function(url,data,callback,type){
			var x = {};
			$.post(url,data,function (response, status, xhr) {},type)
			.done(function(response,status,xhr){
				x = {
					status: xhr.getResponseHeader('App-Status'),
					flag: xhr.getResponseHeader('App-Flag'),
					message:xhr.getResponseHeader('App-Message'),
					data:xhr.getResponseHeader('App-Data'),
				}
				if(callback && typeof callback === 'function') { 
					callback(response,x);
					return false;
				}
				return false;
			})
			.fail(function(xhr,response){
				console.log(response);
			});
		},
		
		inits: function(){
			
			$('#btn-refresh').unbind('click').on('click',function(){
				console.log('refresh');
			});
			
			$('.texteditor TEXTAREA').each(function(){
				var editorName = $(this).prop('name');
				$.app.editor(editorName);
			});
			
			$('INPUT.dpicker').datepicker({
				format: 'yyyy-mm-dd',
				autoclose:true,
				autoUpdate:true,
			});
			
			$('INPUT.dtmpicker').datetimepicker({
				format: 'YYYY-MM-DD HH:mm',
			});

		},
		
		submit: function(formID,fn){
			var check_required = false;
			var $this = this;
			
			var frmData = new FormData($(formID)[0]);
			$.Form.urlAction = $(formID).prop('action');
			
			if($('.texteditor').length){			
				$('.texteditor TEXTAREA').each(function(){
					var editorName = $(this).prop('name');
					var editor = CKEDITOR.instances[editorName];
					if (editor) { 
						var editorData = CKEDITOR.instances[editorName].getData();
						frmData.append(editorName, editorData);
					}
				});
			}
			
			$.Form.data = frmData;
			
			/* !important, don't delete */
			check_required = $.Form.checkRequired($this.frm_required);
			if(check_required == false){
				$.Info.open({
					title: $.app.labels['warning'],
					content: $.app.labels['incomplete-data'],
					buttons: [['No']]
				});
				return false;
			}
			$.Info.processing();
			$.Form.submit(function(r,x){
				$.Info.close();
				var btn = [['No']];if(x.status == 1 || x.status == true){btn = [['Yes']];}
				$.Info.open({
					title: x.flag,content: x.message,buttons: btn,
					onYes: function(){
						$.Info.close();
						if(fn && typeof fn === 'function'){fn(r,x); return false;}
						location.href = $.app.baseUrl;
					}
				});	
			});
		},
		
		remove: function(fn,additionalData){
			var frmData = new FormData();
			frmData.append('id', $('input[name=id]').val());
			$.Form.urlAction = $.app.baseUrl + '?action=delete';
			if(additionalData && !$.isEmptyObject(additionalData)){
				$.each(additionalData,function(a,b){frmData.set(a,b);});
			}
			$.Form.data = frmData;
			$.Info.processing();
			$.Form.submit(function(r,x){
				$.Info.close();
				var btn = [['No']];
				if(x.status == 1 || x.status == true){
					btn = [['Yes']];
				}
				$.Info.open({
					title: x.flag,content: x.message,buttons: btn,
					onYes: function(){
						$.Info.close();
						if(fn && typeof fn === 'function'){fn(); return false;}
						location.href = $.app.baseUrl;
					}
				});	
			});
		},
		
		checkBoxPointerAction: function(class_name,callback){
			var li = $('LI.pointer.checkbox');
			
			var cb = $(li).find('SPAN.cb-input').find('INPUT[type=checkbox],INPUT[type=radio]');
			var cbtitle = $(li).find('SPAN.cb-title');
			var li_class = class_name && class_name !== '' ? ' '+class_name : '';
			
			var action = function(el){
				var title = $(el).parent().next('SPAN.cb-title');
				var li_parent = $(el).parents('li');
				
				if($(el).is('INPUT[type=radio]')){
					$('SPAN.cb-title').removeClass('bold');
				}
				
				if($(el).is('INPUT[type=checkbox]')){
					if($(el).is(':checked')){
						$(title).addClass('bold');
						$(li_parent).addClass(li_class);
					}else{
						$(title).removeClass('bold');
						$(li_parent).removeClass(li_class);
					}
				
				}
				if(callback){ if(typeof callback === 'function'){ callback($(el)); return false; } }
			}
			
			//$(li).unbind('click').on('click',function(){$(li).removeClass(li_class);});
			$(cb).unbind('change').on('change',function(){action(this);});
			$(cb).unbind('click').on('click',function(){action(this);});
			
			$(cbtitle).unbind('click').on('click',function(){
				var cbx = $(this).prev('SPAN.cb-input').find('INPUT[type=checkbox],INPUT[type=radio]');
				var li_parent = $(this).parent('li');
				$(li_parent).siblings().removeClass(li_class);
				if($(cbx).is('INPUT[type=radio]')){
					$('SPAN.cb-title').removeClass('bold');
				}
				if($(cbx).is(':checked')){
					$(cbx).prop('checked',false);
					$(this).removeClass('bold');
					$(li_parent).removeClass(li_class);
				}else{
					$(cbx).prop('checked',true);
					$(this).addClass('bold');
					$(li_parent).addClass(li_class);
				}
				if(callback){ if(typeof callback === 'function'){ callback($(this)); return false; } }
			});
		},
		
		
		youtube: function(youtubeUrl,iframeID){
			
			function youtube_parser(url){
				var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
				var match = url.match(regExp);
				return (match&&match[7].length==11)? match[7] : false;
			}
			
			var youtubeID = youtube_parser(youtubeUrl);
			
			var delay = (function() {
				var timer = 0;
				return function(callback, ms) {
					clearTimeout(timer);
					timer = setTimeout(callback, ms);
				};
			})();
			
			//delay(function() {
				var videoID = youtubeID;
				var videos = "https://www.googleapis.com/youtube/v3/videos";
				var apiKey = "AIzaSyAjICZkZdj0XVlyKw2WPwoWEF3jZFEJ-BE"; // Insert here your api key
				var fieldsTitle = "fields=items(snippet(title))";
				var fieldsEmpty = "";
				var part = "part=snippet";
				function getUrl(fields) {
					var url = videos + "?" + "key=" + apiKey + "&" + "id=" + videoID + "&" + fields + "&" + part;
					return url;
				}
				$.get(getUrl(fieldsEmpty), function(response) {
					var status = response.pageInfo.totalResults;
					var title;
					if (status) {
						$.get(getUrl(fieldsTitle), function(response) {
							title = response.items[0].snippet.title;
							//$('#info').text(title);
							//console.log(title);
							
							var aspectRatio = 1.78;
							var video = $('#'+iframeID);
							var videoHeight = video.outerHeight();
							var newWidth = videoHeight*aspectRatio;
							var x = (((newWidth-videoHeight)/aspectRatio)/2);
							var halfNewWidth = newWidth/2;
							//var section_width = newWidth+x;
							var section_width = $('section').outerWidth();
							$('.video-container').css({"width":(section_width)+"px","border":"none"});
							
							var url = "https://www.youtube.com/embed/" + videoID;
							url+='?color=white&controls=1&fs=1&rel=0&iv_load_policy=3&modestbranding=1&showinfo=0';
							$('#'+iframeID).attr('src', url);
							
							
							
						})
					} else {
						title = "Video doesn't exist";
						//$('#info').text(title);
						console.log(title);
						$('#'+iframeID).attr('src', "");
					}
				});
			//}, 1000);
			
		},
		
		info: function(m){
			$.Info.open({
				title:'Info',
				content:m,
				buttons:[['Yes']]
			});
		}
		
	})
	
	
	$.calendar = $.extend({}, {
		today: '',
		selected_day: '',
		selected_month: '',
		first_day : '',
		day_name : '',
		day_no : '',
		days : '',
		month_name : '',
		month : '',
		year : '',
		first_date : '',
		openNextBigMonth : true,
		clickOnDay: true,
		fnDay: function(){},
		fnMon: function(){},
		
		open: function(callback){
			
		},
		
		init: function(dx,callback){
			var $this = this;
			//var d = new Date();
			
			var d = dx && dx !== 'x' ? new Date(dx) : new Date();
			//console.log(d);
			this.month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			this.month = d.getMonth();   //0-11
			
			this.year = d.getFullYear(); //2014
			this.first_date = this.month_name[this.month] + " " + 1 + " " + this.year;
			//September 1 2014
			var tmp = new Date(this.first_date).toDateString();
			//Mon Sep 01 2014 ...
			this.first_day = tmp.substring(0, 3);    //Mon
			this.day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
			this.day_no = this.day_name.indexOf(this.first_day);   //1
			this.days = new Date(this.year, this.month+1, 0).getDate();    //30
			
			this.render();
			$this.fnDay(0);
			$('#prev-month').unbind('click').on('click',function(){
				var l_month = ($this.month+1)-1;
				var month = l_month <= 0 ? 12 : l_month;
				var year = l_month <= 0 ? ($this.year-1) : $this.year;
				var new_month = year +'-'+ month;
				$.calendar.init(new_month);
				//if(callback && typeof callback == 'function'){callback(new_month);}
				$this.fnMon(new_month);
			});
			
			$('#next-month').unbind('click').on('click',function(){
				var n_month = ($this.month+1)+1;
				var month = n_month > 12 ? 1 : n_month;
				var year = n_month > 12 ? ($this.year+1) : $this.year;
				var new_month = year +'-'+ month;
				
				if(year > $this.year){
					if($this.openNextBigMonth == false){return false;}
				}else{
					if(year == $this.year){
						var skrg = new Date();
						var month_now = skrg.getMonth()+1;
						//console.log(month_now +' | '+n_month);
						//if($this.openNextBigMonth == false){return false;}
					}
				}
				
				$.calendar.init(new_month);
				//if(callback && typeof callback == 'function'){callback(new_month);}
				$this.fnMon(new_month);
			});
			
			$('.td-calendar-days').unbind('click').on('click',function(){
				var tgl = $(this).prop('id');
				if($this.clickOnDay === true){
					$this.fnDay(tgl);
				}
			});
		},
		
		render: function(){
			
			var $this = this;
			document.getElementById("calendar-dates").innerHTML = "";
			var curMonth = ($this.month < 10 ? '0'+($this.month+1) : ($this.month+1))
			var YearMonth = $this.year+'-'+curMonth;
			
			$this.selected_month = $this.year+'-'+($this.month+1);
			
			var MYtitle = this.month_name[this.month]+" "+this.year;
			document.getElementById("calendar-month-year").innerHTML = '&nbsp;' + MYtitle + '<input type="hidden" id="calendar-active-month-year" value="'+YearMonth+'" />';
			
			var calendar = this.get_calendar(this.day_no, this.days);
			document.getElementById("calendar-dates").appendChild(calendar);
		},
		
		get_calendar: function(){
			var $this = this;
			var curMonth = ($this.month < 10 ? '0'+($this.month+1) : ($this.month+1))
			var YearDate = $this.year+'-'+curMonth+'-';
			var table = document.createElement('table');
			var tr = document.createElement('tr');
			
			//row for the day letters
			for(var c=0; c<=6; c++){
				var th = document.createElement('th');
				//th.innerHTML = "SMTWTFS"[c];
				th.innerHTML = $this.day_name[c];
				tr.appendChild(th);
			}
			table.appendChild(tr);
			
			//create 2nd row
			tr = document.createElement('tr');
			var c;
			for(c=0; c<=6; c++){
				if(c == $this.day_no){break;}
				var td = document.createElement('td');
				td.innerHTML = "";
				tr.appendChild(td);
			}
			
			var count = 1;
			var locale = "en-us";
			var d = new Date();
			var today = new Date().toJSON().slice(0,10);
			
			for(; c<=6; c++){
				var td = document.createElement('td');
				var td_id = YearDate+(count <= 9 ? '0'+count : count);
				if(today == td_id){
					td.setAttribute('class',"td-calendar-days today");
				}else{
					td.setAttribute('class',"td-calendar-days");
				}
				td.setAttribute('id',td_id);
				td.innerHTML = '<span class="day-number">'+(count < 10 ? '0'+count : count)+'</span>';
				count++;
				tr.appendChild(td);
			}
			table.appendChild(tr);
			
			//rest of the date rows
			for(var r=3; r<=7; r++){
				tr = document.createElement('tr');
				for(var c=0; c<=6; c++){
					if(count > $this.days){
						table.appendChild(tr);
						return table;
					}
					var td = document.createElement('td');
					var td_id = YearDate+(count <= 9 ? '0'+count : count);
					if(today == td_id){
						td.setAttribute('class',"td-calendar-days today");
					}else{
						td.setAttribute('class',"td-calendar-days");
					}
					
					td.setAttribute('id',td_id);
					td.innerHTML = '<span class="day-number">'+(count < 10 ? '0'+count : count)+'</span>';
					count++;
					tr.appendChild(td);
				}
				table.appendChild(tr);
			}
			return table;
		}
	})
	
	$('.TableListScroll').tableListScroll();
	
})(jQuery);
$(document).ready(function(){
	
});