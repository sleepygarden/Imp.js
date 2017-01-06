/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var TWEEN = require('./vendor/Tween.js');

// animates properties of <obj> to <to> over <duration> and calls <onComplete> on complete.
// duration defaults to 140ms, onComplete is optional
function animate(obj, to, duration, onComplete) {
    duration = duration !== undefined ? duration : 140; // 140ms = 8.4 frames @ 60fps
    var keys = [];
    var start = {};
    var key;
    for (key in to) {
        keys.push(key);
        start[key] = obj[key];
    }
    var idx,
        len = keys.length;
    var tween = new TWEEN.Tween(start).to(to, duration).onUpdate(function tweenUpdate() {
        for (idx = 0; idx < len; idx++) {
            key = keys[idx];
            obj[key] = this[key];
        }
    }).onComplete(function tweenComplete() {
        if (onComplete !== undefined) {
            onComplete();
        }
    }).easing(TWEEN.Easing.Quadratic.InOut).start();
    return tween;
}

module.exports = animate;

},{"./vendor/Tween.js":6}],2:[function(require,module,exports){
"use strict";

// Compose a Curve function out of a start, end, and style preference, where a curve is a function which accepts `t` between 0.0 and 1.0.
// curve(0) = the first {x: x,y: y} position of the start of the curve, and curve(1) is the end 


// returns a {x:number,y:number} where x,y = distance t along bezier curve defined by p0,1,2,3
// t : is a value between 0 and 1 which represents point on the bezier line (.5 is 50% along the curve)
// points are { x : number, y : number } objects
// p0 is x,y to start from
// p1 is the control point attached to p0
// p2 is the control point attached to p3
// pr is the x,y to end at
function bezierCurve(t, p0, p1, p2, p3) {
    var cX = 3 * (p1.x - p0.x),
        bX = 3 * (p2.x - p1.x) - cX,
        aX = p3.x - p0.x - cX - bX;

    var cY = 3 * (p1.y - p0.y),
        bY = 3 * (p2.y - p1.y) - cY,
        aY = p3.y - p0.y - cY - bY;

    var x = aX * Math.pow(t, 3) + bX * Math.pow(t, 2) + cX * t + p0.x;
    var y = aY * Math.pow(t, 3) + bY * Math.pow(t, 2) + cY * t + p0.y;

    return { x: x, y: y };
}

// calculates a curve and stores it in a helper function for value retrival
function createCurve(start, end, style) {
    style = style !== undefined ? style : "bezier";

    if (style === "bezier") {
        var segment = createCurveSegment(start, end, "default");
        return function curve(t) {
            return segment(t);
        };
    } else if (style === "double") {
        var halfPoint = pointBetween(start, end, 0.5);
        var segment1 = createCurveSegment(start, halfPoint, "default");
        var segment2 = createCurveSegment(halfPoint, end, "default");
        return function curve(t) {
            var segment, distTraveled, duration;
            if (t <= 0.5) {
                segment = segment1;
                distTraveled = 0;
                duration = 0.5;
            } else {
                segment = segment2;
                distTraveled = 0.5;
                duration = 0.5;
            }
            return segment((t - distTraveled) * (1 / duration));
        };
    }
}

// given two { x,y } points, find a point between them which is <percentage> distance between them.
// ex, percentage of .5 will return the midpoint. the lower the number, the closer to start
function pointBetween(start, end, percentage) {
    var x = start.x + percentage * (end.x - start.x);
    var y = start.y + percentage * (end.y - start.y);
    return {
        x: x,
        y: y
    };
}

// distance between two {x,y} points
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function findLine(p1, p2) {
    var slope, yIntercept;
    slope = (p2.y - p1.y) / (p2.x - p1.x);
    yIntercept = p1.y - slope * p1.x;

    return {
        m: slope,
        b: yIntercept
    };
}

function perpendicularLine(line) {
    return {
        m: -1 / line.m,
        b: line.b
    };
}

function findYOnLine(x, line) {
    return line.m * x + line.b;
}

function findXOnLine(y, line) {
    return y / line.m - line.b;
}

function createCurveSegment(start, end, style) {
    var startControl = pointBetween(start, end, 0.33);
    var endControl = pointBetween(start, end, 0.66);
    var dist = distance(start, end);

    if (style === "default") {
        if (start.y > end.y) {
            startControl.y -= dist / 4;
            endControl.y += dist / 4;
        } else {
            startControl.y += dist / 4;
            endControl.y -= dist / 4;
        }
        if (start.x > end.x) {
            // eastbound
            startControl.x += dist / 4;
            endControl.x -= dist / 4;
        } else {
            startControl.x -= dist / 4;
            endControl.x += dist / 4;
        }
    }

    return function segment(t) {
        return bezierCurve(t, start, startControl, endControl, end);
    };
}

module.exports = {
    createCurve: createCurve
};

},{}],3:[function(require,module,exports){
'use strict';

var BezierHelper = require('./bezierHelper.js');
var TWEEN = require('./vendor/Tween.js');
var animate = require('./animationHelper.js');

// standard modules for Imp and helper functions for all modules
// some module names are prefixed with an underscore to prevent collision, but will be normal on export
module.exports = function ImpModules(Imp) {
    var imp = Imp.context();
    // a frame is anything with an x, y, width, and height.
    // returns a boolean indicating if the mouse is over the rect under the current translation
    function mouseOverFrame(frame) {
        var xIntersect = frame.x + imp.offset.x <= imp.mouse.x && frame.x + frame.width + imp.offset.x >= imp.mouse.x;
        var yIntersect = frame.y + imp.offset.y <= imp.mouse.y && frame.y + frame.height + imp.offset.y >= imp.mouse.y;
        return xIntersect && yIntersect;
    }

    // does not take current translation into account
    function pointInCircle(x, y, circleCenterX, circleCenterY, radius) {
        var dist = Math.sqrt(Math.pow(circleCenterX - x, 2) + Math.pow(circleCenterY - y, 2));
        return dist <= radius;
    }

    ///// Layer
    // Layers compose groups of modules together. They z-index all of their children implictly (lower pos in children array, lower z)
    function _Layer(configs) {
        this.x = 0;
        this.y = 0;

        this.scale = 1;
        this.opacity = 1;
        this.children = [];
        imp.extend(this, configs);
    }
    _Layer.prototype.constructor = _Layer;
    _Layer.prototype.type = "Layer";
    _Layer.prototype.update = function update() {
        imp.save();
        imp.translate(this.x, this.y);
        imp.scale(this.scale, this.scale);
        for (var idx = this.children.length - 1, len = this.children.length; idx >= 0; idx--) {
            this.children[idx].update();
        }
        imp.restore();
    };
    _Layer.prototype.draw = function draw() {
        imp.save();
        imp.translate(this.x, this.y);
        imp.scale(this.scale, this.scale);
        imp.globalAlpha *= this.opacity;
        for (var idx = 0, len = this.children.length; idx < len; idx++) {
            this.children[idx].draw();
        }
        imp.restore();
    };

    /////
    function _Image(configs) {
        this.x = 0;
        this.y = 0;
        this.width = false; // if not set, defaults to full size
        this.height = false;
        this.sampleX = 0;
        this.sampleY = 0;
        this.sampleWidth = false;
        this.sampleHeight = false;

        this.resize = false;
        this.sample = false;

        this.src = "";
        this.loaded = false;
        this.loadFailed = false;
        this.retryCount = 0;

        imp.extend(true, this, configs);
        this.loadImage();
    }
    _Image.prototype.constructor = _Image;
    _Image.prototype.type = "Image";
    _Image.prototype.loadImage = function () {
        var self = this;
        this.image = new Image();
        this.image.onload = function (e) {
            self.onLoad();
        };
        this.image.onerror = function (e) {
            self.onError();
        };
        this.image.src = this.src;
    };
    _Image.prototype.onError = function () {
        if (this.retryCount++ < 5) {
            this.loadImage();
        } else {
            this.loadFailed = true;
        }
    };
    _Image.prototype.onLoad = function onLoad() {
        if (this.image.width + this.image.height === 0) {
            this.onError();
            return;
        }
        this.loaded = true;
        if (this.width === false) {
            this.width = this.image.width;
        }
        if (this.height === false) {
            this.height = this.image.height;
        }
        if (this.sampleWidth !== false || this.sampleHeight !== false) {
            this.sample = true;
        }
        if (this.sample && this.sampleWidth === false) {
            this.sampleWidth = this.image.width;
        }
        if (this.sample && this.sampleHeight === false) {
            this.sampleHeight = this.image.height;
        }
    };
    _Image.prototype.update = function update() {}; // here is where we'd increment the animated gif frame, but we dont need to do that, so, yeah
    _Image.prototype.draw = function draw() {
        imp.save();
        if (this.loaded) {
            /*
            ctx.drawImage(image, x, y);
            ctx.drawImage(image, x, y, width, height); // stretchy
            ctx.drawImage(image, sampleX, sampleY, sampleWidth, sampleHeight, x, y, width, height); // sample a section of the image, then draw that
            */
            if (this.sample) {
                imp.drawImage(this.image, this.sampleX, this.sampleY, this.sampleWidth, this.sampleHeight, this.x, this.y, this.width, this.height);
            } else {
                imp.drawImage(this.image, this.x, this.y, this.width, this.height);
            }
        } else {
            var width = this.width !== false ? this.width : 25;
            var height = this.height !== false ? this.height : 25;

            imp.beginPath();
            imp.strokeStyle = "rgba(0,0,0,0.3)";
            imp.lineWidth = 2;
            imp.moveTo(this.x, this.y);
            imp.lineTo(this.x + width, this.y);
            imp.lineTo(this.x + width, this.y + height);
            imp.lineTo(this.x, this.y + height);
            imp.closePath();
            imp.stroke();

            // draw border
            if (this.loadFailed) {
                imp.strokeStyle = "#f95a6c";
                imp.beginPath();
                imp.moveTo(this.x + width / 2 - 5, this.y + height / 2 - 5);
                imp.lineTo(this.x + width / 2 + 5, this.y + height / 2 + 5);
                imp.stroke();

                imp.beginPath();
                imp.moveTo(this.x + width / 2 - 5, this.y + height / 2 + 5);
                imp.lineTo(this.x + width / 2 + 5, this.y + height / 2 - 5);
                imp.stroke();
            } else {
                // draw loader
                var gradient = imp.createLinearGradient(this.x, this.y, this.x + width, this.y + height);
                gradient.addColorStop(0, "#888");
                gradient.addColorStop(1, "white");

                var offset = performance.now() % 1000 / 1000 * 360; // 1000 millis to a full rotation
                var startAngle = 0 + offset;
                var endAngle = 75 + offset; // 75 degree length
                startAngle *= Math.PI / 180;
                endAngle *= Math.PI / 180;
                imp.lineCap = "round";
                imp.strokeStyle = gradient;
                imp.beginPath();
                imp.arc(this.x + width / 2, this.y + height / 2, 10, startAngle, endAngle, false);
                imp.stroke();
            }
        }
        imp.restore();
    };

    /////
    // Label
    function _Label(configs) {
        this.x = 0;
        this.y = 0;

        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.text = "Label";

        this.textColor = "black";

        // "left" || "right" || "center" || "start" || "end"
        this.textAlign = "left";

        //"top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
        this.textBaseline = "top";

        imp.extend(this, configs);
    }
    _Label.prototype.constructor = _Label;
    _Label.prototype.type = "Label";
    _Label.prototype.measureWidth = function () {
        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        var width = imp.measureText(this.text).width;
        imp.restore();
        return width;
    };
    _Label.prototype.update = function update() {};
    _Label.prototype.draw = function draw() {
        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        imp.textAlign = this.textAlign;
        imp.textBaseline = this.textBaseline;
        imp.fillStyle = this.textColor;
        imp.fillText(this.text, this.x, this.y);
        imp.restore();
    };

    // Button
    function _Button(configs) {
        // defaults
        this.x = 0;
        this.y = 0;
        this.width = 60;
        this.height = 28;

        this.fillColor = "#000";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.textColor = "#fff";

        this.fontFace = "Helvetica";
        this.fontSize = 30;
        this.title = "Button";
        this.textAlign = "center";

        this.click = function () {};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this, configs);
    }
    _Button.prototype.constructor = _Button;
    _Button.prototype.type = 'Button';
    _Button.prototype.update = function update() {
        if (imp.mouseCapture === true) {
            // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }
        var newHovered = mouseOverFrame(this);
        if (newHovered !== this.isHovered) {
            // hover state change
            if (newHovered === false) {
                // did exit hover
                this.isDown = false;
            } else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered) {
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown) {
                //down state change
                if (newDown === false) {
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    _Button.prototype.draw = function draw() {
        imp.save();
        if (this.isDown) {
            imp.fillStyle = this.downColor;
        } else if (this.isHovered) {
            imp.fillStyle = this.hoverColor;
        } else {
            imp.fillStyle = this.fillColor;
        }

        imp.fillRect(this.x, this.y, this.width, this.height);
        imp.setFont(this.fontFace, this.fontSize);
        imp.fillStyle = this.textColor;
        imp.textAlign = this.textAlign;
        imp.textBaseline = "middle";
        imp.fillText(this.title, this.x + this.width / 2, this.y + this.height / 2);
        imp.restore();
    };

    /////
    function _TextArea(configs) {
        this.x = 0;
        this.y = 0;

        this.width = 0;
        this.lineHeight = 1.4;
        this.text = "";

        this.fontFace = "texgyreadventorregular";
        this.fontSize = 30;

        this.textColor = "#fff";
        this.textAlign = "left";

        imp.extend(this, configs);
    }
    _TextArea.prototype.constructor = _TextArea;
    _TextArea.prototype.type = "TextArea";
    _TextArea.prototype.update = function () {};
    _TextArea.prototype.draw = function () {
        imp.save();
        imp.fillStyle = this.textColor;
        imp.textBaseline = "top";
        imp.textAlign = this.textAlign;
        imp.fillStyle = this.textColor;
        imp.setFont(this.fontFace, this.fontSize);

        var lineHeight = this.fontSize * this.lineHeight;

        var lines = this.text.split("\n");
        var x = this.x,
            y = this.y;
        for (var i = 0; i < lines.length; i++) {

            var words = lines[i].split(' ');
            var line = '';

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = imp.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > this.width && n > 0) {
                    imp.fillText(line, x, y);
                    line = words[n] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }

            imp.fillText(line, x, y);
            y += lineHeight;
        }
        imp.restore();
    };
    function ShadowButton(configs) {
        this.x = 0;
        this.y = 0;
        this.width = 124;
        this.height = 30;

        this.shadowColor = "rgba(0,0,0,.5)";

        this.hoverBlend = 0;
        this.tween = null;

        this.strokeShadow = false;
        this.fillColor = "#f00";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.textColor = "#fff";
        this.fontWeight = 400;
        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.title = "Button";
        this.textAlign = "center";

        this.click = function () {};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this, configs);
    }
    ShadowButton.prototype.constructor = ShadowButton;
    ShadowButton.prototype.type = "ShadowButton";
    ShadowButton.prototype.containsPoint = function containsPoint(x, y) {
        var radius = this.height / 2;
        var offsetX = this.x + imp.offset.x;
        var offsetY = this.y + imp.offset.y;

        // it's not within the right y range
        if (y < offsetY || y > offsetY + this.height) {
            return false;
        }

        if (x < offsetX + radius) {
            if (x >= offsetX) {
                return pointInCircle(x, y, offsetX + radius, offsetY + radius, radius);
            } else {
                return false;
            }
        }
        if (x > offsetX + this.width - radius) {
            if (x <= offsetX + this.width) {
                return pointInCircle(x, y, offsetX + this.width - radius, offsetY + radius, radius);
            } else {
                return false;
            }
        } else {
            // it must be in the center rect
            return true;
        }
    };
    ShadowButton.prototype.tweenBlend = function (val) {
        if (this.hoverBlend === val) {
            return;
        }
        this.tween = animate(this, {
            hoverBlend: val
        }, 130, function () {
            this.tween = null;
        });
    };
    ShadowButton.prototype.update = function () {
        if (imp.mouseCapture === true) {
            // someone with a higher Z index is already hovered,
            this.hoverBlend = 0;
            this.isHovered = false;
            this.isDown = false;
            return;
        }
        var newHovered = this.containsPoint(imp.mouse.x, imp.mouse.y);
        if (newHovered !== this.isHovered) {
            // hover state change
            if (newHovered === false) {
                // did exit hover
                if (this.isDown) {
                    // did drag out, dont tween
                    this.hoverBlend = 0;
                } else {
                    this.tweenBlend(0);
                }
                this.isDown = false;
            } else {
                imp.addMousePointer();
                this.tweenBlend(1);
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered) {
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown) {
                //down state change
                if (newDown === false) {
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    ShadowButton.prototype.drawRoundedBox = function drawRoundedBox() {
        var radius = this.height / 2;
        imp.beginPath();
        imp.moveTo(this.x + radius, this.y);
        imp.lineTo(this.x + this.width - radius, this.y);
        imp.arc(this.x + this.width - radius, this.y + radius, radius, Math.PI * 1.5, Math.PI / 2, false);
        imp.lineTo(this.x + radius, this.y + this.height);
        imp.arc(this.x + radius, this.y + radius, radius, Math.PI / 2, Math.PI * 1.5, false);
        imp.closePath();
    };
    ShadowButton.prototype.draw = function () {
        // draw down shadow
        imp.save();
        imp.fillStyle = this.shadowColor;
        if (!this.isDown) {
            imp.translate(0, 3);
        }
        this.drawRoundedBox();
        imp.fill();
        imp.restore();

        imp.save();
        if (this.isDown) {
            imp.translate(0, 3);
            this.drawRoundedBox();
            imp.fillStyle = this.downColor;
            imp.strokeStyle = this.downColor;
            imp.fill();
        } else {
            this.drawRoundedBox();
            if (this.hoverBlend === 1) {
                imp.fillStyle = this.hoverColor;
                imp.fill();
            } else if (this.hoverBlend === 0) {
                imp.fillStyle = this.fillColor;
                imp.fill();
            } else {
                imp.fillStyle = this.fillColor;
                imp.fill();

                imp.save();
                imp.globalAlpha *= this.hoverBlend;
                imp.fillStyle = this.hoverColor;
                imp.fill();
                imp.restore();
            }
        }

        if (this.strokeShadow) {
            imp.strokeStyle = this.shadowColor;
            imp.lineWidth = 2;
            imp.stroke();
        }

        imp.setFont(this.fontFace, this.fontSize, this.fontWeight);
        imp.fillStyle = this.textColor;
        imp.textAlign = this.textAlign;
        imp.textBaseline = "middle";
        imp.fillText(this.title.toUpperCase(), this.x + this.width / 2, this.y + this.height / 2);
        imp.restore();
    };

    function LinkButton(configs) {
        this.x = 0;
        this.y = 0;

        this.fillColor = "#0f0";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.text = "Link";
        this.textAlign = "left";
        this.textBaseline = "top";

        this.click = function () {};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this, configs);
    }
    LinkButton.prototype.constructor = LinkButton;
    LinkButton.prototype.type = 'LinkButton';
    LinkButton.prototype.update = function update() {
        if (imp.mouseCapture === true) {
            // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }

        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        var width = imp.measureText(this.text).width;
        imp.restore();

        var offsetX = this.x;
        if (this.textAlign === "center") {
            offsetX -= width / 2;
        }
        var newHovered = Imp.mouseOverFrame({
            x: offsetX,
            y: this.y,
            width: width,
            height: this.fontSize + 4 // lil bit of padding for odd font face
        });
        if (newHovered !== this.isHovered) {
            // hover state change
            if (newHovered === false) {
                // did exit hover
                this.isDown = false;
            } else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered) {
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown) {
                //down state change
                if (newDown === false) {
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    LinkButton.prototype.draw = function draw() {
        imp.save();
        if (this.isDown) {
            imp.fillStyle = this.downColor;
        } else if (this.isHovered) {
            imp.fillStyle = this.hoverColor;
        } else {
            imp.fillStyle = this.fillColor;
        }
        imp.setFont(this.fontFace, this.fontSize);
        imp.textAlign = this.textAlign;
        imp.textBaseline = this.textBaseline;
        imp.fillText(this.text, this.x, this.y);
        imp.restore();
    };

    ///// HTML Link Button
    // For some specific cases, you need a real <a> tag, and not a canvas link lookalike. Thats what this is for.
    // It is always above the entire canvas
    function HTMLLinkButton(configs) {
        this.x = 0;
        this.y = 0;

        this.text = "Link";
        this.href = "http://www.example.com";

        imp.extend(this, configs);

        this.element = document.createElement('a');
        this.element.style['pointer-events'] = "all";
        this.element.innerHTML = this.text;
        this.element.classList.add('imp-link');
        this.element.setAttribute('target', '_blank');
        this.element.setAttribute('href', this.href);
        document.getElementById('imp-link-box').appendChild(this.element);
    }
    HTMLLinkButton.prototype.constructor = HTMLLinkButton;
    HTMLLinkButton.prototype.type = 'HTMLLinkButton';
    HTMLLinkButton.prototype.update = function update() {};
    HTMLLinkButton.prototype.draw = function draw() {
        var scale = {
            x: imp.currentScale.x / imp.dpiScale,
            y: imp.currentScale.y / imp.dpiScale
        };

        this.element.css('transform', 'scale(' + scale.x + ',' + scale.y + ')');
        var x = this.x * scale.x + imp.offset.x - this.element.width() / 2 * (1 - scale.x);
        var y = this.y * scale.y + imp.offset.y - this.element.height() / 2 * (1 - scale.y);

        // Again, Firefox text setting offset
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            x -= 3 * scale.x;
            y -= 3 * scale.x;
        }
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    };

    function ImgButton(configs) {
        this.x = 0;
        this.y = 0;

        //square buttons
        this.width = false; // if not set, defaults to full size
        this.height = false;

        // circle buttons
        this.isCircle = false;
        this.radius = 200;
        this.strokeStyle = "white";
        this.lineWidth = 0; // default no stroke
        this.isClipped = false;
        this.inset = 5; // how many px to inset the img on down state

        this.click = function () {};

        this.isHovered = false;
        this.isDown = false;

        this.src = "";
        this.loaded = false;
        this.loadFailed = false;
        this.retryCount = 0;

        imp.extend(true, this, configs);
        this.loadImage();
    }
    ImgButton.prototype.constructor = ImgButton;
    ImgButton.prototype.type = 'ImgButton';
    ImgButton.prototype.loadImage = function () {
        var self = this;
        this.image = new Image();
        this.image.onload = function (e) {
            self.onLoad();
        };
        this.image.onerror = function (e) {
            self.onError();
        };
        this.image.src = this.src;
    };
    ImgButton.prototype.onError = function () {
        if (this.retryCount++ < 5) {
            this.loadImage();
        } else {
            this.loadFailed = true;
        }
    };
    ImgButton.prototype.onLoad = function onLoad() {
        this.loaded = true;
        if (this.isCircle) {
            this.width = this.radius * 2;
            this.height = this.width;
        }
    };
    ImgButton.prototype.update = function update() {
        if (imp.mouseCapture === true) {
            // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }

        var newHovered = false;
        if (this.isCircle) {
            newHovered = pointInCircle(imp.mouse.x, imp.mouse.y, this.x + this.radius + imp.offset.x, this.y + this.radius + imp.offset.y, this.radius);
        } else {
            newHovered = Imp.mouseOverFrame(this);
        }

        if (newHovered !== this.isHovered) {
            // hover state change
            if (newHovered === false) {
                // did exit hover
                this.isDown = false;
            } else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered) {
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown) {
                //down state change
                if (newDown === false) {
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    ImgButton.prototype.draw = function draw() {
        imp.save();

        if (this.loaded) {

            var x = this.x,
                y = this.y,
                width = this.width,
                height = this.height;

            if (this.isDown) {
                x += this.inset;
                y += this.inset;
                width -= this.inset * 2;
                height -= this.inset * 2;
            } else if (this.isHovered) {
                x -= this.inset;
                y -= this.inset;
                width += this.inset * 2;
                height += this.inset * 2;
            }

            if (this.isCircle) {
                // draw a circle
                imp.beginPath();
                imp.arc(x + width / 2, y + width / 2, width / 2, 0, Math.PI * 2, true);
                imp.closePath();

                imp.save(); // save context to avoid clipping stroke
                // clip image to circle
                if (this.isClipped) {
                    imp.clip();
                }
                imp.drawImage(this.image, x, y, width, height);
                imp.restore(); // undo clipping

                // add a stroke
                if (this.lineWidth > 0) {
                    imp.strokeStyle = this.strokeStyle;
                    imp.lineWidth = this.lineWidth;
                    imp.stroke();
                }
            } else {
                imp.drawImage(this.image, x, y, width, height);
            }
        } else {
            var width = this.width !== false ? this.width : 25;
            var height = this.height !== false ? this.height : 25;

            imp.beginPath();
            imp.strokeStyle = "rgba(0,0,0,0.3)";
            imp.lineWidth = 2;
            imp.moveTo(this.x, this.y);
            imp.lineTo(this.x + width, this.y);
            imp.lineTo(this.x + width, this.y + height);
            imp.lineTo(this.x, this.y + height);
            imp.closePath();
            imp.stroke();

            // draw border
            if (this.loadFailed) {
                imp.strokeStyle = "#f95a6c";
                imp.beginPath();
                imp.moveTo(this.x + width / 2 - 5, this.y + height / 2 - 5);
                imp.lineTo(this.x + width / 2 + 5, this.y + height / 2 + 5);
                imp.stroke();

                imp.beginPath();
                imp.moveTo(this.x + width / 2 - 5, this.y + height / 2 + 5);
                imp.lineTo(this.x + width / 2 + 5, this.y + height / 2 - 5);
                imp.stroke();
            } else {
                // draw loader
                var gradient = imp.createLinearGradient(this.x, this.y, this.x + width, this.y + height);
                gradient.addColorStop(0, "#888");
                gradient.addColorStop(1, "white");

                var offset = performance.now() % 1000 / 1000 * 360; // 1000 millis to a full rotation
                var startAngle = 0 + offset;
                var endAngle = 75 + offset; // 75 degree length
                startAngle *= Math.PI / 180;
                endAngle *= Math.PI / 180;
                imp.lineCap = "round";
                imp.strokeStyle = gradient;
                imp.beginPath();
                imp.arc(this.x + width / 2, this.y + height / 2, 10, startAngle, endAngle, false);
                imp.stroke();
            }
        }
        imp.restore();
    };

    function Curve(config) {
        this.accuracy = 0.01; //smaller the number, more precise the curve, also more expensive to render
        this.lineDash = 5;
        this.lineColor = "#ff2222";
        this.lineWidth = 5;
        this.lineCap = "round";

        this.traversePercent = 0;
        this.traverseLineColor = "#ff8888";

        this.startPoint = {
            x: 0,
            y: 0
        };
        this.endPoint = {
            x: 0,
            y: 0
        };

        this.curveStyle = "bezier";
        this.curveFunc = function () {
            return { x: 0, y: 0 };
        };
        this._canvasSize = {
            w: -1,
            h: -1
        };
        this.needsRecalc = true;
        imp.extend(true, this, config);
    }
    Curve.prototype.constructor = Curve;
    Curve.prototype.type = "Curve";
    Curve.prototype.update = function update() {
        if (this.needsRecalc === true) {
            this.curveFunc = BezierHelper.createCurve(this.startPoint, this.endPoint, this.curveStyle);
            this.needsRecalc = false;
        }
    };
    Curve.prototype.draw = function draw() {
        var start = this.curveFunc(0);
        var colorEnd = this.curveFunc(this.traversePercent);
        var end = this.curveFunc(1);
        imp.save();

        imp.setLineDash(this.lineDash);
        imp.lineCap = this.lineCap;
        imp.lineWidth = this.lineWidth;
        imp.beginPath();
        imp.moveTo(start.x, start.y);
        imp.strokeStyle = this.lineColor;
        var idx = 0,
            p;
        for (idx = 0; idx < 1; idx += this.accuracy) {
            p = this.curveFunc(idx);
            imp.lineTo(p.x, p.y);
        }
        imp.lineTo(end.x, end.y);
        imp.stroke();

        imp.beginPath();
        imp.moveTo(start.x, start.y);
        imp.strokeStyle = this.traverseLineColor;
        for (idx = 0; idx < this.traversePercent; idx += this.accuracy) {
            p = this.curveFunc(idx);
            imp.lineTo(p.x, p.y);
        }
        imp.lineTo(colorEnd.x, colorEnd.y);
        imp.stroke();

        imp.restore();
    };

    return {
        mouseOverFrame: mouseOverFrame,
        pointInCircle: pointInCircle,
        Layer: _Layer,
        Button: _Button,
        Image: _Image,
        Label: _Label,
        TextArea: _TextArea,
        ShadowButton: ShadowButton,
        LinkButton: LinkButton,
        HTMLLinkButton: HTMLLinkButton,
        ImgButton: ImgButton,
        Curve: Curve
    };
};

},{"./animationHelper.js":1,"./bezierHelper.js":2,"./vendor/Tween.js":6}],4:[function(require,module,exports){
"use strict";

var coreModules = require('./imp-modules.js');

module.exports = function Imp() {
    /*
     canvas-imp is a helper for Canvas, and adds helper functions and UI modules
     Imp (capital I) is a singleton which manages the canvas context. it modifies the context to add this functionality,
    so you can also use canvas.getContext('2d') and get the imp (lowercase i) instance currently running. Imp owns a number of Modules,
    UI elements which can be futher combined into new Modules. Imp also owns a number of helper functions so make it simple to access
    an imp's custom features without having to dig the imp instance out of the Imp singleton every time
     an imp owns an array of layers, which it draws in order, 0 being at the bottom. Layers can have sublayers, which in turn can have more sublayers, a bit like this
    [ [ [a,b], c, d], e, [f, g] , h]
    each array is a layer, each array can contain modules, including other layers. no matter how deeply nested, the Z index, or depth, of a module
    if how far right it is in the entire layout. if an elements index in it's layer is 3, and it's layer's index is 2, and that layer is in the imp layer stack, it's Z index
    is 3 + 2 = 5
    an imp, in addition to everything a normal 2D context can do, keeps track of it's layers, if the mouse has been captured by a button (prevent clicks going through buttons to layers udnerneath),
    the current mouse position, whether the left-mouse is down, the current translation offset, rescale canvas to fit css on canvas element, the current animation frame, and
    background color (if null, no background is used, and the dom underneath is visible)
     */

    if (CanvasRenderingContext2D.prototype.setLineDash === undefined) {
        CanvasRenderingContext2D.prototype.setLineDash = function () {};
    }

    var _context;

    function context() {
        return this._context;
    }

    function init(canvas) {
        console.log("init start");

        canvas.classList.add("imp-canvas");
        var htmlLinkBox = document.createElement('div');
        htmlLinkBox.id = "imp-link-box";
        htmlLinkBox.style = "width: 100%;height: 100%;position: absolute;top: 0px;left: 0px;pointer-events: none;overflow: hidden;";
        canvas.parentNode.insertBefore(htmlLinkBox, canvas.nextSibling);

        var context = canvas.getContext('2d');
        context.mouse = {
            x: 0,
            y: 0,
            down: false
        };
        context.offset = {
            x: 0,
            y: 0
        };
        context.currentScale = {
            x: 1,
            y: 1
        };
        context.scaleStack = [context.currentScale];
        context.offsetStack = [context.offset];
        context.width = 0;
        context.height = 0;
        context.background = '#fff';
        context.layers = [];
        context.mouseCapture = false; // flag set to true during a single draw pass
        context.currentFrame = null;
        context.mousePointerOn = false;
        context.dpiScale = 1;
        context.currentFont = {
            face: "Helvetica",
            size: 14,
            weight: 400
        };
        context.fontStack = [context.currentFont];

        var onMove = function onMove(e) {
            var rect = canvas.getBoundingClientRect();
            context.mouse.x = e.clientX - rect.left;
            context.mouse.y = e.clientY - rect.top;
        };

        var onMouseDown = function onMouseDown(e) {
            if (e.button === 0) {
                context.mouse.down = true;
            }
        };
        var onMouseUp = function onMouseUp(e) {
            context.mouse.down = false;
        };

        var onResizeCanvas = function onResizeCanvas() {
            if (window.devicePixelRatio && context.dpiScale !== window.devicePixelRatio) {
                context.dpiScale = window.devicePixelRatio;
            }
            canvas.width = canvas.clientWidth * context.dpiScale;
            canvas.height = canvas.clientHeight * context.dpiScale;
        };

        canvas.addEventListener('mousemove', onMove, false);
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        window.addEventListener('resize', onResizeCanvas, false);
        onResizeCanvas(); // initialize canvas size

        context._oldTranslate = context.translate;
        context._oldScale = context.scale;
        context._oldSave = context.save;
        context._oldRestore = context.restore;

        context.translate = function translate(x, y) {
            this.offset.x += x;
            this.offset.y += y;
            this._oldTranslate(x, y);
        };
        context.scale = function scale(x, y) {
            this.currentScale.x *= x;
            this.currentScale.y *= y;
            this._oldScale(x, y);
        };
        context.save = function save() {
            this.offsetStack.push({ x: this.offset.x, y: this.offset.y });
            this.scaleStack.push({ x: this.currentScale.x, y: this.currentScale.y });
            this.fontStack.push({ face: this.currentFont.face, size: this.currentFont.size, weight: this.currentFont.weight });
            this._oldSave();
        };
        context.restore = function save() {
            this.offset = this.offsetStack.pop();
            this.currentScale = this.scaleStack.pop();
            this.currentFont = this.fontStack.pop();
            this._oldRestore();
        };
        context.clear = function clear() {
            this.clearRect(0, 0, canvas.width, canvas.height);
            if (this.background !== null) {
                this.save();
                this.fillStyle = this.background;
                this.fillRect(0, 0, canvas.width, canvas.height);
                this.restore();
            }
        };

        // do not directly set the context font, or else the font stack won't work
        context.setFont = function setFont(face, size, weight) {
            size = size !== undefined ? size : this.currentFont.size;
            weight = weight !== undefined ? weight : this.currentFont.weight;
            this.currentFont = {
                face: face,
                size: size,
                weight: weight
            };
            this.font = weight + " " + size + "px " + face;
        };
        context.setFontFace = function setFontFace(face) {
            this.currentFont.face = face;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };
        context.setFontSize = function setFontSize(size) {
            this.currentFont.size = size;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };
        context.setFontWeight = function setFontWeight(weight) {
            this.currentFont.weight = weight;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };

        context.fillArc = function fillArc(x, y, radius, startAngle, endAngle, counterclockwise) {
            startAngle = startAngle !== undefined ? startAngle : 0;
            endAngle = endAngle !== undefined ? endAngle : Math.PI * 2;
            counterclockwise = counterclockwise !== undefined ? counterclockwise : false;
            this.beginPath();
            this.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            this.closePath();
            this.fill();
        };

        context.addMousePointer = function pointerMouse() {
            if (this.mousePointerOn === false) {
                this.canvas.style.cursor = "pointer";
                this.mousePointerOn = true;
            }
        };
        context.removeMousePointer = function pointerMouse() {
            if (this.mousePointerOn === true) {
                this.canvas.style.cursor = "auto";
                this.mousePointerOn = false;
            }
        };
        context.size = function size() {
            return {
                width: this.canvas.width * 1 / this.dpiScale,
                height: this.canvas.height * 1 / this.dpiScale
            };
        };

        // Firefox appears to draw text a little low, bump it up to match chrome
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            context._oldFillText = context.fillText;
            context._oldStrokeText = context.strokeText;
            context.fillText = function (text, x, y) {
                this._oldFillText(text, x, y + 3);
            };
            context.strokeText = function (text, x, y) {
                this._oldStrokeText(text, x, y + 3);
            };
        }

        context.extend = this.extend;
        this._context = context; // context must be finished initing before any modules can be loaded
        console.log('prior', this);
        extend(this, coreModules(this));
        console.log('post', this);

        return this._context;
    }

    function setBackground(background) {
        this._context.background = background;
    }

    // removes the first layer matching the layer you gave (not all)
    function removeLayer(layer) {
        var idx = this._context.layers.indexOf(layer);
        if (idx != -1) {
            this._context.layers.splice(idx, 1);
        }
    }

    function insertLayer(layer, index) {
        layer.update(); // get layer up to speed before first draw pass
        this._context.layers.splice(index, 0, layer);
    }

    // add a layer at a higher z index
    function pushLayer(layer) {
        layer.update();
        this._context.layers.push(layer);
    }

    // removes the topmost z-index layer
    function popLayer() {
        this._context.layers.pop();
    }

    function onResize(inject) {
        window.addEventListener('resize', function (e) {
            inject();
        }, false);
    }

    function animate(inject) {
        if (inject === undefined) {
            inject = function inject() {};
        }
        var context = this._context;
        context.scale(1, 1);
        context.translate(0, 0);
        // hd scale
        function animationStep() {
            context.currentFrame = requestAnimationFrame(animationStep);
            context.save();
            context.clear();

            context.scale(context.dpiScale, context.dpiScale);
            for (var uIdx = context.layers.length - 1; uIdx >= 0; uIdx--) {
                context.layers[uIdx].update(); // update top to bottom
            }
            for (var dIdx = 0, len = context.layers.length; dIdx < len; dIdx++) {
                context.layers[dIdx].draw(); // draw bottom to top
            }
            if (context.mousePointerOn === true && context.mouseCapture === false) {
                context.removeMousePointer();
            }
            context.mouseCapture = false;
            inject();
            context.restore();
        }
        context.currentFrame = requestAnimationFrame(animationStep);
    }

    function stop() {
        if (this._context.currentFrame !== null) {
            cancelAnimationFrame(this._context.currentFrame);
        }
    }

    function injectFPSTracker() {
        var script = document.createElement('script');
        script.onload = function () {
            var stats = new Stats();
            stats.domElement.style.cssText = 'position:fixed;right:0;top:0;z-index:10000';
            document.body.appendChild(stats.domElement);
            requestAnimationFrame(function loop() {
                stats.update();
                requestAnimationFrame(loop);
            });
        };
        script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
        document.head.appendChild(script);
    }

    function extend(recursive, extended) {
        if (Object.prototype.toString.call(recursive) !== '[object Boolean]') {
            recursive = false;
            deep = arguments[0];
            i++;
        }
    }

    // Vanilla JS copy of JQuery extend, modified from gomakethings.com to be self mutating
    // Pass in the objects to merge as arguments.
    // For a deep extend, set the first argument to `true`.
    function extend() {
        var extended; // what to extend
        var deep = false;
        var i = 0;
        var length = arguments.length;
        if (length <= 1) {
            extended = this;
        } else if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            extended = arguments[1];
            i = 2;
        } else {
            extended = arguments[0];
            i = 1;
        }

        // Merge the object into the extended object
        var merge = function merge(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }
        return extended;
    }

    return {
        context: context,
        init: init,
        setBackground: setBackground,
        removeLayer: removeLayer,
        insertLayer: insertLayer,
        pushLayer: pushLayer,
        popLayer: popLayer,
        onResize: onResize,
        animate: animate,
        stop: stop,
        injectFPSTracker: injectFPSTracker,
        extend: extend
    };
}();

},{"./imp-modules.js":3}],5:[function(require,module,exports){
"use strict";

module.exports = function testSuite(Imp) {
    Imp.injectFPSTracker();

    var button = new Imp.Button({
        x: 20,
        y: 20,
        width: 200,
        height: 120,
        fillColor: "cyan",
        hoverColor: "red",
        click: function click() {
            console.log('click');
        }
    });

    var topbutton = new Imp.Button({
        x: 100,
        y: 80,
        width: 200,
        height: 120,
        title: "on Top",
        textColor: "#ff36f3",
        click: function click() {
            console.log('click! top');
        }
    });

    var shadowbutton = new Imp.ShadowButton({
        x: 20,
        y: 160,
        width: 200,
        height: 120,
        fillColor: "cyan",
        hoverColor: "red",
        click: function click() {
            console.log('click');
        }
    });

    var label = new Imp.Label({
        x: 20,
        y: 300,
        text: "Hello, World!",
        fontSize: 40
    });

    var testImg = new Imp.Image({
        x: 20,
        y: 340,
        width: 200,
        height: 200,
        src: "http://www.freudenbergs.de/bert/publications/teapot-anim.gif"
    });

    var txtArea = new Imp.TextArea({
        x: 20,
        y: 540,
        width: 150,
        text: 'Hello world! I am some reasonably long text.\nWith\na few line breaks in it!'
    });

    var linkButton = new Imp.LinkButton({
        x: 20,
        y: 600,
        text: "click me! i'm a link~",
        click: function click() {
            console.log('clicked link');
        }
    });

    var imgButton = new Imp.ImgButton({
        x: 400,
        y: 50,
        isCircle: true, // default false
        radius: 50,
        strokeStyle: "red", //"#445566"; //set the stroke to the bg color for smoother clipping effect
        lineWidth: 5, // if larger than 0 circle has a border
        isClipped: true, // default false
        src: "https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png",
        click: function click() {
            console.log('clicked img button');
        }
    });

    var imgButtonSq = new Imp.ImgButton({
        x: 400,
        y: 150,
        width: 150,
        height: 150,
        inset: 50,
        src: "https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png",
        click: function click() {
            console.log('clicked sq image button');
        }
    });

    return function () {
        var layer = new Imp.Layer({
            children: [button, topbutton, testImg, label, txtArea, shadowbutton, linkButton, imgButton, imgButtonSq]
        });
        return layer;
    };
};

},{}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

// Include a performance.now polyfill
(function () {

	if ('performance' in window === false) {
		window.performance = {};
	}

	// IE 8
	Date.now = Date.now || function () {
		return new Date().getTime();
	};

	if ('now' in window.performance === false) {
		var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();

		window.performance.now = function () {
			return Date.now() - offset;
		};
	}
})();

var TWEEN = TWEEN || function () {

	var _tweens = [];

	return {

		getAll: function getAll() {

			return _tweens;
		},

		removeAll: function removeAll() {

			_tweens = [];
		},

		add: function add(tween) {

			_tweens.push(tween);
		},

		remove: function remove(tween) {

			var i = _tweens.indexOf(tween);

			if (i !== -1) {
				_tweens.splice(i, 1);
			}
		},

		update: function update(time) {

			if (_tweens.length === 0) {
				return false;
			}

			var i = 0;

			time = time !== undefined ? time : window.performance.now();

			while (i < _tweens.length) {

				if (_tweens[i].update(time)) {
					i++;
				} else {
					_tweens.splice(i, 1);
				}
			}

			return true;
		}
	};
}();

TWEEN.Tween = function (object) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	// Set all starting values present on the target object
	for (var field in object) {
		_valuesStart[field] = parseFloat(object[field], 10);
	}

	this.to = function (properties, duration) {

		if (duration !== undefined) {
			_duration = duration;
		}

		_valuesEnd = properties;

		return this;
	};

	this.start = function (time) {

		TWEEN.add(this);

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : window.performance.now();
		_startTime += _delayTime;

		for (var property in _valuesEnd) {

			// Check if an Array was provided as property value
			if (_valuesEnd[property] instanceof Array) {

				if (_valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			_valuesStart[property] = _object[property];

			if (_valuesStart[property] instanceof Array === false) {
				_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[property] = _valuesStart[property] || 0;
		}

		return this;
	};

	this.stop = function () {

		if (!_isPlaying) {
			return this;
		}

		TWEEN.remove(this);
		_isPlaying = false;

		if (_onStopCallback !== null) {
			_onStopCallback.call(_object);
		}

		this.stopChainedTweens();
		return this;
	};

	this.stopChainedTweens = function () {

		for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
			_chainedTweens[i].stop();
		}
	};

	this.delay = function (amount) {

		_delayTime = amount;
		return this;
	};

	this.repeat = function (times) {

		_repeat = times;
		return this;
	};

	this.yoyo = function (yoyo) {

		_yoyo = yoyo;
		return this;
	};

	this.easing = function (easing) {

		_easingFunction = easing;
		return this;
	};

	this.interpolation = function (interpolation) {

		_interpolationFunction = interpolation;
		return this;
	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;
	};

	this.onStart = function (callback) {

		_onStartCallback = callback;
		return this;
	};

	this.onUpdate = function (callback) {

		_onUpdateCallback = callback;
		return this;
	};

	this.onComplete = function (callback) {

		_onCompleteCallback = callback;
		return this;
	};

	this.onStop = function (callback) {

		_onStopCallback = callback;
		return this;
	};

	this.update = function (time) {

		var property;
		var elapsed;
		var value;

		if (time < _startTime) {
			return true;
		}

		if (_onStartCallbackFired === false) {

			if (_onStartCallback !== null) {
				_onStartCallback.call(_object);
			}

			_onStartCallbackFired = true;
		}

		elapsed = (time - _startTime) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		value = _easingFunction(elapsed);

		for (property in _valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];

			if (end instanceof Array) {

				_object[property] = _interpolationFunction(end, value);
			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof end === 'string') {

					if (end.startsWith('+') || end.startsWith('-')) {
						end = start + parseFloat(end, 10);
					} else {
						end = parseFloat(end, 10);
					}
				}

				// Protect against non numeric properties.
				if (typeof end === 'number') {
					_object[property] = start + (end - start) * value;
				}
			}
		}

		if (_onUpdateCallback !== null) {
			_onUpdateCallback.call(_object, value);
		}

		if (elapsed === 1) {

			if (_repeat > 0) {

				if (isFinite(_repeat)) {
					_repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in _valuesStartRepeat) {

					if (typeof _valuesEnd[property] === 'string') {
						_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[property];

						_valuesStartRepeat[property] = _valuesEnd[property];
						_valuesEnd[property] = tmp;
					}

					_valuesStart[property] = _valuesStartRepeat[property];
				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				_startTime = time + _delayTime;

				return true;
			} else {

				if (_onCompleteCallback !== null) {
					_onCompleteCallback.call(_object);
				}

				for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					_chainedTweens[i].start(_startTime + _duration);
				}

				return false;
			}
		}

		return true;
	};
};

TWEEN.Easing = {

	Linear: {

		None: function None(k) {

			return k;
		}

	},

	Quadratic: {

		In: function In(k) {

			return k * k;
		},

		Out: function Out(k) {

			return k * (2 - k);
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return -0.5 * (--k * (k - 2) - 1);
		}

	},

	Cubic: {

		In: function In(k) {

			return k * k * k;
		},

		Out: function Out(k) {

			return --k * k * k + 1;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);
		}

	},

	Quartic: {

		In: function In(k) {

			return k * k * k * k;
		},

		Out: function Out(k) {

			return 1 - --k * k * k * k;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return -0.5 * ((k -= 2) * k * k * k - 2);
		}

	},

	Quintic: {

		In: function In(k) {

			return k * k * k * k * k;
		},

		Out: function Out(k) {

			return --k * k * k * k * k + 1;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);
		}

	},

	Sinusoidal: {

		In: function In(k) {

			return 1 - Math.cos(k * Math.PI / 2);
		},

		Out: function Out(k) {

			return Math.sin(k * Math.PI / 2);
		},

		InOut: function InOut(k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));
		}

	},

	Exponential: {

		In: function In(k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);
		},

		Out: function Out(k) {

			return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
		},

		InOut: function InOut(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
		}

	},

	Circular: {

		In: function In(k) {

			return 1 - Math.sqrt(1 - k * k);
		},

		Out: function Out(k) {

			return Math.sqrt(1 - --k * k);
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return -0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		}

	},

	Elastic: {

		In: function In(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		},

		Out: function Out(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
		},

		InOut: function InOut(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			if ((k *= 2) < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			}

			return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
		}

	},

	Back: {

		In: function In(k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);
		},

		Out: function Out(k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;
		},

		InOut: function InOut(k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		}

	},

	Bounce: {

		In: function In(k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);
		},

		Out: function Out(k) {

			if (k < 1 / 2.75) {
				return 7.5625 * k * k;
			} else if (k < 2 / 2.75) {
				return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
			} else if (k < 2.5 / 2.75) {
				return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
			} else {
				return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
			}
		},

		InOut: function InOut(k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
		}

	}

};

TWEEN.Interpolation = {

	Linear: function Linear(v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	},

	Bezier: function Bezier(v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;
	},

	CatmullRom: function CatmullRom(v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
		}
	},

	Utils: {

		Linear: function Linear(p0, p1, t) {

			return (p1 - p0) * t + p0;
		},

		Bernstein: function Bernstein(n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);
		},

		Factorial: function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;
			};
		}(),

		CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (typeof define === 'function' && define.amd) {

		// AMD
		define([], function () {
			return TWEEN;
		});
	} else if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {

		// Node.js
		module.exports = TWEEN;
	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;
	}
})(undefined);

},{}],7:[function(require,module,exports){
'use strict';

var Imp = require('./imp/imp.js');
console.log('imp?', Imp);
var testSuite = require('./imp/test-suite.js');

var impctx;
var App = function () {

    function onDraw() {
        console.log('draw!');
    }
    function init() {
        var impctx = Imp.init(document.getElementById("canvas"));
        Imp.setBackground('#ff00ff');
        Imp.pushLayer(testSuite(Imp)());
        Imp.animate(onDraw());
    }

    init();
}();

},{"./imp/imp.js":4,"./imp/test-suite.js":5}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW1wL2FuaW1hdGlvbkhlbHBlci5qcyIsInNyYy9qcy9pbXAvYmV6aWVySGVscGVyLmpzIiwic3JjL2pzL2ltcC9pbXAtbW9kdWxlcy5qcyIsInNyYy9qcy9pbXAvaW1wLmpzIiwic3JjL2pzL2ltcC90ZXN0LXN1aXRlLmpzIiwic3JjL2pzL2ltcC92ZW5kb3IvVHdlZW4uanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxRQUFRLFFBQVEsbUJBQVIsQ0FBWjs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCLEVBQXRCLEVBQTBCLFFBQTFCLEVBQW9DLFVBQXBDLEVBQStDO0FBQzNDLGVBQVksYUFBYSxTQUFiLEdBQXlCLFFBQXpCLEdBQW9DLEdBQWhELENBRDJDLENBQ1c7QUFDdEQsUUFBSSxPQUFPLEVBQVg7QUFDQSxRQUFJLFFBQVEsRUFBWjtBQUNBLFFBQUksR0FBSjtBQUNBLFNBQUssR0FBTCxJQUFZLEVBQVosRUFBZTtBQUNYLGFBQUssSUFBTCxDQUFVLEdBQVY7QUFDQSxjQUFNLEdBQU4sSUFBYSxJQUFJLEdBQUosQ0FBYjtBQUNIO0FBQ0QsUUFBSSxHQUFKO0FBQUEsUUFBUyxNQUFNLEtBQUssTUFBcEI7QUFDQSxRQUFJLFFBQVEsSUFBSSxNQUFNLEtBQVYsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsQ0FBMEIsRUFBMUIsRUFBOEIsUUFBOUIsRUFDWCxRQURXLENBQ0YsU0FBUyxXQUFULEdBQXNCO0FBQzVCLGFBQUssTUFBSSxDQUFULEVBQVksTUFBTSxHQUFsQixFQUF1QixLQUF2QixFQUE2QjtBQUN6QixrQkFBTSxLQUFLLEdBQUwsQ0FBTjtBQUNBLGdCQUFJLEdBQUosSUFBVyxLQUFLLEdBQUwsQ0FBWDtBQUNIO0FBQ0osS0FOVyxFQU9YLFVBUFcsQ0FPQSxTQUFTLGFBQVQsR0FBd0I7QUFDaEMsWUFBSSxlQUFlLFNBQW5CLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDSixLQVhXLEVBWVgsTUFaVyxDQVlKLE1BQU0sTUFBTixDQUFhLFNBQWIsQ0FBdUIsS0FabkIsRUFhWCxLQWJXLEVBQVo7QUFjQSxXQUFPLEtBQVA7QUFDSDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDL0JBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFULENBQXFCLENBQXJCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DO0FBQ2hDLFFBQUksS0FBSyxLQUFLLEdBQUcsQ0FBSCxHQUFPLEdBQUcsQ0FBZixDQUFUO0FBQUEsUUFDQSxLQUFLLEtBQUssR0FBRyxDQUFILEdBQU8sR0FBRyxDQUFmLElBQW9CLEVBRHpCO0FBQUEsUUFFQSxLQUFLLEdBQUcsQ0FBSCxHQUFPLEdBQUcsQ0FBVixHQUFjLEVBQWQsR0FBbUIsRUFGeEI7O0FBSUEsUUFBSSxLQUFLLEtBQUssR0FBRyxDQUFILEdBQU8sR0FBRyxDQUFmLENBQVQ7QUFBQSxRQUNBLEtBQUssS0FBSyxHQUFHLENBQUgsR0FBTyxHQUFHLENBQWYsSUFBb0IsRUFEekI7QUFBQSxRQUVBLEtBQUssR0FBRyxDQUFILEdBQU8sR0FBRyxDQUFWLEdBQWMsRUFBZCxHQUFtQixFQUZ4Qjs7QUFJQSxRQUFJLElBQUssS0FBSyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFOLEdBQXlCLEtBQUssS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBOUIsR0FBaUQsS0FBSyxDQUF0RCxHQUEyRCxHQUFHLENBQXRFO0FBQ0EsUUFBSSxJQUFLLEtBQUssS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBTixHQUF5QixLQUFLLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFaLENBQTlCLEdBQWlELEtBQUssQ0FBdEQsR0FBMkQsR0FBRyxDQUF0RTs7QUFFQSxXQUFPLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFWLEVBQVA7QUFDSDs7QUFFRDtBQUNBLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixHQUE1QixFQUFpQyxLQUFqQyxFQUF1QztBQUNuQyxZQUFTLFVBQVUsU0FBVixHQUFzQixLQUF0QixHQUE4QixRQUF2Qzs7QUFFQSxRQUFJLFVBQVUsUUFBZCxFQUF1QjtBQUNuQixZQUFJLFVBQVUsbUJBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLFNBQS9CLENBQWQ7QUFDQSxlQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBaUI7QUFDcEIsbUJBQU8sUUFBUSxDQUFSLENBQVA7QUFDSCxTQUZEO0FBR0gsS0FMRCxNQU1LLElBQUksVUFBVSxRQUFkLEVBQXVCO0FBQ3hCLFlBQUksWUFBWSxhQUFhLEtBQWIsRUFBbUIsR0FBbkIsRUFBdUIsR0FBdkIsQ0FBaEI7QUFDQSxZQUFJLFdBQVcsbUJBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLEVBQXFDLFNBQXJDLENBQWY7QUFDQSxZQUFJLFdBQVcsbUJBQW1CLFNBQW5CLEVBQThCLEdBQTlCLEVBQW1DLFNBQW5DLENBQWY7QUFDQSxlQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBaUI7QUFDcEIsZ0JBQUksT0FBSixFQUFhLFlBQWIsRUFBMkIsUUFBM0I7QUFDQSxnQkFBSSxLQUFLLEdBQVQsRUFBYTtBQUNULDBCQUFVLFFBQVY7QUFDQSwrQkFBZSxDQUFmO0FBQ0EsMkJBQVcsR0FBWDtBQUNILGFBSkQsTUFLSztBQUNELDBCQUFVLFFBQVY7QUFDQSwrQkFBZSxHQUFmO0FBQ0EsMkJBQVcsR0FBWDtBQUNIO0FBQ0QsbUJBQU8sUUFBUSxDQUFDLElBQUksWUFBTCxLQUFzQixJQUFJLFFBQTFCLENBQVIsQ0FBUDtBQUNILFNBYkQ7QUFjSDtBQUNKOztBQUVEO0FBQ0E7QUFDQSxTQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNEIsR0FBNUIsRUFBZ0MsVUFBaEMsRUFBMkM7QUFDdkMsUUFBSSxJQUFJLE1BQU0sQ0FBTixHQUFVLGNBQWMsSUFBSSxDQUFKLEdBQVEsTUFBTSxDQUE1QixDQUFsQjtBQUNBLFFBQUksSUFBSSxNQUFNLENBQU4sR0FBVSxjQUFjLElBQUksQ0FBSixHQUFRLE1BQU0sQ0FBNUIsQ0FBbEI7QUFDQSxXQUFPO0FBQ0gsV0FBSSxDQUREO0FBRUgsV0FBSTtBQUZELEtBQVA7QUFJSDs7QUFFRDtBQUNBLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFxQixFQUFyQixFQUF3QjtBQUNwQixXQUFPLEtBQUssSUFBTCxDQUFXLEtBQUssR0FBTCxDQUFTLEdBQUcsQ0FBSCxHQUFPLEdBQUcsQ0FBbkIsRUFBc0IsQ0FBdEIsSUFBMkIsS0FBSyxHQUFMLENBQVMsR0FBRyxDQUFILEdBQU8sR0FBRyxDQUFuQixFQUFzQixDQUF0QixDQUF0QyxDQUFQO0FBQ0g7O0FBRUQsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXFCLEVBQXJCLEVBQXdCO0FBQ3BCLFFBQUksS0FBSixFQUFXLFVBQVg7QUFDQSxZQUFRLENBQUMsR0FBRyxDQUFILEdBQU8sR0FBRyxDQUFYLEtBQWlCLEdBQUcsQ0FBSCxHQUFPLEdBQUcsQ0FBM0IsQ0FBUjtBQUNBLGlCQUFhLEdBQUcsQ0FBSCxHQUFRLFFBQVEsR0FBRyxDQUFoQzs7QUFFQSxXQUFPO0FBQ0gsV0FBSSxLQUREO0FBRUgsV0FBSTtBQUZELEtBQVA7QUFJSDs7QUFFRCxTQUFTLGlCQUFULENBQTJCLElBQTNCLEVBQWdDO0FBQzVCLFdBQU87QUFDSCxXQUFJLENBQUMsQ0FBRCxHQUFLLEtBQUssQ0FEWDtBQUVILFdBQUksS0FBSztBQUZOLEtBQVA7QUFJSDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsQ0FBckIsRUFBdUIsSUFBdkIsRUFBNEI7QUFDeEIsV0FBTyxLQUFLLENBQUwsR0FBUyxDQUFULEdBQWEsS0FBSyxDQUF6QjtBQUNIOztBQUVELFNBQVMsV0FBVCxDQUFxQixDQUFyQixFQUF1QixJQUF2QixFQUE0QjtBQUN4QixXQUFPLElBQUksS0FBSyxDQUFULEdBQWEsS0FBSyxDQUF6QjtBQUNIOztBQUVELFNBQVMsa0JBQVQsQ0FBNEIsS0FBNUIsRUFBbUMsR0FBbkMsRUFBd0MsS0FBeEMsRUFBOEM7QUFDMUMsUUFBSSxlQUFlLGFBQWEsS0FBYixFQUFtQixHQUFuQixFQUF1QixJQUF2QixDQUFuQjtBQUNBLFFBQUksYUFBYSxhQUFhLEtBQWIsRUFBbUIsR0FBbkIsRUFBdUIsSUFBdkIsQ0FBakI7QUFDQSxRQUFJLE9BQU8sU0FBUyxLQUFULEVBQWUsR0FBZixDQUFYOztBQUVBLFFBQUksVUFBVSxTQUFkLEVBQXdCO0FBQ3BCLFlBQUksTUFBTSxDQUFOLEdBQVUsSUFBSSxDQUFsQixFQUFvQjtBQUNoQix5QkFBYSxDQUFiLElBQWtCLE9BQUssQ0FBdkI7QUFDQSx1QkFBVyxDQUFYLElBQWdCLE9BQUssQ0FBckI7QUFDSCxTQUhELE1BSUs7QUFDRCx5QkFBYSxDQUFiLElBQWtCLE9BQUssQ0FBdkI7QUFDQSx1QkFBVyxDQUFYLElBQWdCLE9BQUssQ0FBckI7QUFDSDtBQUNELFlBQUksTUFBTSxDQUFOLEdBQVUsSUFBSSxDQUFsQixFQUFxQjtBQUFFO0FBQ25CLHlCQUFhLENBQWIsSUFBa0IsT0FBSyxDQUF2QjtBQUNBLHVCQUFXLENBQVgsSUFBZ0IsT0FBSyxDQUFyQjtBQUNILFNBSEQsTUFJSztBQUNELHlCQUFhLENBQWIsSUFBa0IsT0FBSyxDQUF2QjtBQUNBLHVCQUFXLENBQVgsSUFBZ0IsT0FBSyxDQUFyQjtBQUNIO0FBQ0o7O0FBRUQsV0FBTyxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBbUI7QUFDdEIsZUFBTyxZQUFZLENBQVosRUFBYyxLQUFkLEVBQW9CLFlBQXBCLEVBQWlDLFVBQWpDLEVBQTRDLEdBQTVDLENBQVA7QUFDSCxLQUZEO0FBR0g7O0FBR0QsT0FBTyxPQUFQLEdBQWlCO0FBQ2IsaUJBQWM7QUFERCxDQUFqQjs7Ozs7QUNqSUEsSUFBSSxlQUFlLFFBQVEsbUJBQVIsQ0FBbkI7QUFDQSxJQUFJLFFBQVEsUUFBUSxtQkFBUixDQUFaO0FBQ0EsSUFBSSxVQUFVLFFBQVEsc0JBQVIsQ0FBZDs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxPQUFQLEdBQWtCLFNBQVMsVUFBVCxDQUFvQixHQUFwQixFQUF3QjtBQUN0QyxRQUFJLE1BQU0sSUFBSSxPQUFKLEVBQVY7QUFDQTtBQUNBO0FBQ0EsYUFBUyxjQUFULENBQXdCLEtBQXhCLEVBQThCO0FBQzFCLFlBQUksYUFBYSxNQUFNLENBQU4sR0FBVSxJQUFJLE1BQUosQ0FBVyxDQUFyQixJQUEwQixJQUFJLEtBQUosQ0FBVSxDQUFwQyxJQUF5QyxNQUFNLENBQU4sR0FBVSxNQUFNLEtBQWhCLEdBQXdCLElBQUksTUFBSixDQUFXLENBQW5DLElBQXdDLElBQUksS0FBSixDQUFVLENBQTVHO0FBQ0EsWUFBSSxhQUFhLE1BQU0sQ0FBTixHQUFVLElBQUksTUFBSixDQUFXLENBQXJCLElBQTBCLElBQUksS0FBSixDQUFVLENBQXBDLElBQXlDLE1BQU0sQ0FBTixHQUFVLE1BQU0sTUFBaEIsR0FBeUIsSUFBSSxNQUFKLENBQVcsQ0FBcEMsSUFBeUMsSUFBSSxLQUFKLENBQVUsQ0FBN0c7QUFDQSxlQUFRLGNBQWMsVUFBdEI7QUFDSDs7QUFFRDtBQUNBLGFBQVMsYUFBVCxDQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUEyQixhQUEzQixFQUF5QyxhQUF6QyxFQUF3RCxNQUF4RCxFQUErRDtBQUMzRCxZQUFJLE9BQU8sS0FBSyxJQUFMLENBQVcsS0FBSyxHQUFMLENBQVMsZ0JBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsSUFBK0IsS0FBSyxHQUFMLENBQVMsZ0JBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBMUMsQ0FBWDtBQUNBLGVBQU8sUUFBUSxNQUFmO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBLGFBQVMsTUFBVCxDQUFnQixPQUFoQixFQUF3QjtBQUNwQixhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDs7QUFFQSxhQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLFlBQUksTUFBSixDQUFXLElBQVgsRUFBZ0IsT0FBaEI7QUFDSDtBQUNELFdBQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixNQUEvQjtBQUNBLFdBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixPQUF4QjtBQUNBLFdBQU8sU0FBUCxDQUFpQixNQUFqQixHQUEwQixTQUFTLE1BQVQsR0FBaUI7QUFDdkMsWUFBSSxJQUFKO0FBQ0EsWUFBSSxTQUFKLENBQWMsS0FBSyxDQUFuQixFQUFxQixLQUFLLENBQTFCO0FBQ0EsWUFBSSxLQUFKLENBQVUsS0FBSyxLQUFmLEVBQXFCLEtBQUssS0FBMUI7QUFDQSxhQUFLLElBQUksTUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXFCLENBQTdCLEVBQWdDLE1BQU0sS0FBSyxRQUFMLENBQWMsTUFBekQsRUFBaUUsT0FBTyxDQUF4RSxFQUEyRSxLQUEzRSxFQUFpRjtBQUM3RSxpQkFBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixNQUFuQjtBQUNIO0FBQ0QsWUFBSSxPQUFKO0FBQ0gsS0FSRDtBQVNBLFdBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixTQUFTLElBQVQsR0FBZTtBQUNuQyxZQUFJLElBQUo7QUFDQSxZQUFJLFNBQUosQ0FBYyxLQUFLLENBQW5CLEVBQXFCLEtBQUssQ0FBMUI7QUFDQSxZQUFJLEtBQUosQ0FBVSxLQUFLLEtBQWYsRUFBcUIsS0FBSyxLQUExQjtBQUNBLFlBQUksV0FBSixJQUFtQixLQUFLLE9BQXhCO0FBQ0EsYUFBSyxJQUFJLE1BQUksQ0FBUixFQUFXLE1BQU0sS0FBSyxRQUFMLENBQWMsTUFBcEMsRUFBNEMsTUFBTSxHQUFsRCxFQUF1RCxLQUF2RCxFQUE2RDtBQUN6RCxpQkFBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixJQUFuQjtBQUNIO0FBQ0QsWUFBSSxPQUFKO0FBQ0gsS0FURDs7QUFXQTtBQUNBLGFBQVMsTUFBVCxDQUFnQixPQUFoQixFQUF3QjtBQUNwQixhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssS0FBTCxHQUFhLEtBQWIsQ0FIb0IsQ0FHQTtBQUNwQixhQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUEsYUFBSyxNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7O0FBRUEsYUFBSyxHQUFMLEdBQVcsRUFBWDtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsQ0FBbEI7O0FBRUEsWUFBSSxNQUFKLENBQVcsSUFBWCxFQUFnQixJQUFoQixFQUFxQixPQUFyQjtBQUNBLGFBQUssU0FBTDtBQUNIO0FBQ0QsV0FBTyxTQUFQLENBQWlCLFdBQWpCLEdBQStCLE1BQS9CO0FBQ0EsV0FBTyxTQUFQLENBQWlCLElBQWpCLEdBQXdCLE9BQXhCO0FBQ0EsV0FBTyxTQUFQLENBQWlCLFNBQWpCLEdBQTZCLFlBQVU7QUFDbkMsWUFBSSxPQUFPLElBQVg7QUFDQSxhQUFLLEtBQUwsR0FBYSxJQUFJLEtBQUosRUFBYjtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsVUFBUyxDQUFULEVBQVc7QUFDM0IsaUJBQUssTUFBTDtBQUNILFNBRkQ7QUFHQSxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFVBQVMsQ0FBVCxFQUFXO0FBQzVCLGlCQUFLLE9BQUw7QUFDSCxTQUZEO0FBR0EsYUFBSyxLQUFMLENBQVcsR0FBWCxHQUFpQixLQUFLLEdBQXRCO0FBQ0gsS0FWRDtBQVdBLFdBQU8sU0FBUCxDQUFpQixPQUFqQixHQUEyQixZQUFVO0FBQ2pDLFlBQUksS0FBSyxVQUFMLEtBQW9CLENBQXhCLEVBQTBCO0FBQ3RCLGlCQUFLLFNBQUw7QUFDSCxTQUZELE1BR0s7QUFDRCxpQkFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7QUFDSixLQVBEO0FBUUEsV0FBTyxTQUFQLENBQWlCLE1BQWpCLEdBQTBCLFNBQVMsTUFBVCxHQUFpQjtBQUN2QyxZQUFJLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsS0FBSyxLQUFMLENBQVcsTUFBOUIsS0FBeUMsQ0FBN0MsRUFBK0M7QUFDM0MsaUJBQUssT0FBTDtBQUNBO0FBQ0g7QUFDRCxhQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsWUFBSSxLQUFLLEtBQUwsS0FBZSxLQUFuQixFQUF5QjtBQUNyQixpQkFBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLENBQVcsS0FBeEI7QUFDSDtBQUNELFlBQUksS0FBSyxNQUFMLEtBQWdCLEtBQXBCLEVBQTBCO0FBQ3RCLGlCQUFLLE1BQUwsR0FBYyxLQUFLLEtBQUwsQ0FBVyxNQUF6QjtBQUNIO0FBQ0QsWUFBSSxLQUFLLFdBQUwsS0FBcUIsS0FBckIsSUFBOEIsS0FBSyxZQUFMLEtBQXNCLEtBQXhELEVBQThEO0FBQzFELGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFDRCxZQUFJLEtBQUssTUFBTCxJQUFlLEtBQUssV0FBTCxLQUFxQixLQUF4QyxFQUE4QztBQUMxQyxpQkFBSyxXQUFMLEdBQW1CLEtBQUssS0FBTCxDQUFXLEtBQTlCO0FBQ0g7QUFDRCxZQUFJLEtBQUssTUFBTCxJQUFlLEtBQUssWUFBTCxLQUFzQixLQUF6QyxFQUErQztBQUMzQyxpQkFBSyxZQUFMLEdBQW9CLEtBQUssS0FBTCxDQUFXLE1BQS9CO0FBQ0g7QUFDSixLQXJCRDtBQXNCQSxXQUFPLFNBQVAsQ0FBaUIsTUFBakIsR0FBMEIsU0FBUyxNQUFULEdBQWlCLENBQUUsQ0FBN0MsQ0FsSHNDLENBa0hTO0FBQy9DLFdBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixTQUFTLElBQVQsR0FBZTtBQUNuQyxZQUFJLElBQUo7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFnQjtBQUNaOzs7OztBQUtBLGdCQUFJLEtBQUssTUFBVCxFQUFnQjtBQUNaLG9CQUFJLFNBQUosQ0FDSSxLQUFLLEtBRFQsRUFFSSxLQUFLLE9BRlQsRUFFaUIsS0FBSyxPQUZ0QixFQUU4QixLQUFLLFdBRm5DLEVBRStDLEtBQUssWUFGcEQsRUFHSSxLQUFLLENBSFQsRUFHVyxLQUFLLENBSGhCLEVBR2tCLEtBQUssS0FIdkIsRUFHNkIsS0FBSyxNQUhsQztBQU1ILGFBUEQsTUFRSztBQUNELG9CQUFJLFNBQUosQ0FBYyxLQUFLLEtBQW5CLEVBQXlCLEtBQUssQ0FBOUIsRUFBZ0MsS0FBSyxDQUFyQyxFQUF1QyxLQUFLLEtBQTVDLEVBQWtELEtBQUssTUFBdkQ7QUFFSDtBQUNKLFNBbEJELE1BbUJLO0FBQ0QsZ0JBQUksUUFBUSxLQUFLLEtBQUwsS0FBZSxLQUFmLEdBQXVCLEtBQUssS0FBNUIsR0FBb0MsRUFBaEQ7QUFDQSxnQkFBSSxTQUFTLEtBQUssTUFBTCxLQUFnQixLQUFoQixHQUF3QixLQUFLLE1BQTdCLEdBQXNDLEVBQW5EOztBQUVBLGdCQUFJLFNBQUo7QUFDQSxnQkFBSSxXQUFKLEdBQWtCLGlCQUFsQjtBQUNBLGdCQUFJLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFoQixFQUFrQixLQUFLLENBQXZCO0FBQ0EsZ0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFPLEtBQWxCLEVBQXdCLEtBQUssQ0FBN0I7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFMLEdBQU8sS0FBbEIsRUFBd0IsS0FBSyxDQUFMLEdBQU8sTUFBL0I7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFoQixFQUFrQixLQUFLLENBQUwsR0FBTyxNQUF6QjtBQUNBLGdCQUFJLFNBQUo7QUFDQSxnQkFBSSxNQUFKOztBQUVBO0FBQ0EsZ0JBQUksS0FBSyxVQUFULEVBQXFCO0FBQ2pCLG9CQUFJLFdBQUosR0FBa0IsU0FBbEI7QUFDQSxvQkFBSSxTQUFKO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSjs7QUFFQSxvQkFBSSxTQUFKO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSjtBQUNILGFBWEQsTUFZSztBQUNEO0FBQ0Esb0JBQUksV0FBVyxJQUFJLG9CQUFKLENBQXlCLEtBQUssQ0FBOUIsRUFBZ0MsS0FBSyxDQUFyQyxFQUF1QyxLQUFLLENBQUwsR0FBTyxLQUE5QyxFQUFvRCxLQUFLLENBQUwsR0FBTyxNQUEzRCxDQUFmO0FBQ0EseUJBQVMsWUFBVCxDQUFzQixDQUF0QixFQUF3QixNQUF4QjtBQUNBLHlCQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBd0IsT0FBeEI7O0FBRUEsb0JBQUksU0FBUyxZQUFZLEdBQVosS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsR0FBa0MsR0FBL0MsQ0FOQyxDQU1vRDtBQUNyRCxvQkFBSSxhQUFhLElBQUksTUFBckI7QUFDQSxvQkFBSSxXQUFXLEtBQUssTUFBcEIsQ0FSQyxDQVEyQjtBQUM1Qiw4QkFBYyxLQUFLLEVBQUwsR0FBUSxHQUF0QjtBQUNBLDRCQUFZLEtBQUssRUFBTCxHQUFRLEdBQXBCO0FBQ0Esb0JBQUksT0FBSixHQUFjLE9BQWQ7QUFDQSxvQkFBSSxXQUFKLEdBQWtCLFFBQWxCO0FBQ0Esb0JBQUksU0FBSjtBQUNBLG9CQUFJLEdBQUosQ0FBUSxLQUFLLENBQUwsR0FBUyxRQUFNLENBQXZCLEVBQTBCLEtBQUssQ0FBTCxHQUFTLFNBQU8sQ0FBMUMsRUFBNkMsRUFBN0MsRUFBaUQsVUFBakQsRUFBNEQsUUFBNUQsRUFBc0UsS0FBdEU7QUFDQSxvQkFBSSxNQUFKO0FBQ0g7QUFDSjtBQUNELFlBQUksT0FBSjtBQUNILEtBbkVEOztBQXFFQTtBQUNBO0FBQ0EsYUFBUyxNQUFULENBQWdCLE9BQWhCLEVBQXdCO0FBQ3BCLGFBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLLENBQUwsR0FBUyxDQUFUOztBQUVBLGFBQUssUUFBTCxHQUFnQixXQUFoQjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUssSUFBTCxHQUFZLE9BQVo7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLE9BQWpCOztBQUVBO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLE1BQWpCOztBQUVBO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLEtBQXBCOztBQUVBLFlBQUksTUFBSixDQUFXLElBQVgsRUFBZ0IsT0FBaEI7QUFDSDtBQUNELFdBQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixNQUEvQjtBQUNBLFdBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixPQUF4QjtBQUNBLFdBQU8sU0FBUCxDQUFpQixZQUFqQixHQUFnQyxZQUFVO0FBQ3RDLFlBQUksSUFBSjtBQUNBLFlBQUksT0FBSixDQUFZLEtBQUssUUFBakIsRUFBMkIsS0FBSyxRQUFoQztBQUNBLFlBQUksUUFBUSxJQUFJLFdBQUosQ0FBZ0IsS0FBSyxJQUFyQixFQUEyQixLQUF2QztBQUNBLFlBQUksT0FBSjtBQUNBLGVBQU8sS0FBUDtBQUNILEtBTkQ7QUFPQSxXQUFPLFNBQVAsQ0FBaUIsTUFBakIsR0FBMEIsU0FBUyxNQUFULEdBQWlCLENBQUUsQ0FBN0M7QUFDQSxXQUFPLFNBQVAsQ0FBaUIsSUFBakIsR0FBd0IsU0FBUyxJQUFULEdBQWU7QUFDbkMsWUFBSSxJQUFKO0FBQ0EsWUFBSSxPQUFKLENBQVksS0FBSyxRQUFqQixFQUEyQixLQUFLLFFBQWhDO0FBQ0EsWUFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDQSxZQUFJLFlBQUosR0FBbUIsS0FBSyxZQUF4QjtBQUNBLFlBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0EsWUFBSSxRQUFKLENBQWEsS0FBSyxJQUFsQixFQUF3QixLQUFLLENBQTdCLEVBQWdDLEtBQUssQ0FBckM7QUFDQSxZQUFJLE9BQUo7QUFDSCxLQVJEOztBQVVBO0FBQ0EsYUFBUyxPQUFULENBQWlCLE9BQWpCLEVBQXlCO0FBQ3JCO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBSyxNQUFMLEdBQWMsRUFBZDs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLE1BQWpCOztBQUVBLGFBQUssUUFBTCxHQUFnQixXQUFoQjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUssS0FBTCxHQUFhLFFBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsUUFBakI7O0FBRUEsYUFBSyxLQUFMLEdBQWEsWUFBVSxDQUFFLENBQXpCOztBQUVBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7O0FBRUEsWUFBSSxNQUFKLENBQVcsSUFBWCxFQUFnQixPQUFoQjtBQUNIO0FBQ0QsWUFBUSxTQUFSLENBQWtCLFdBQWxCLEdBQWdDLE9BQWhDO0FBQ0EsWUFBUSxTQUFSLENBQWtCLElBQWxCLEdBQXlCLFFBQXpCO0FBQ0EsWUFBUSxTQUFSLENBQWtCLE1BQWxCLEdBQTJCLFNBQVMsTUFBVCxHQUFpQjtBQUN4QyxZQUFJLElBQUksWUFBSixLQUFxQixJQUF6QixFQUE4QjtBQUFFO0FBQzVCLGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxpQkFBSyxNQUFMLEdBQWMsS0FBZDtBQUNBO0FBQ0g7QUFDRCxZQUFJLGFBQWEsZUFBZSxJQUFmLENBQWpCO0FBQ0EsWUFBSSxlQUFlLEtBQUssU0FBeEIsRUFBa0M7QUFDOUI7QUFDQSxnQkFBSSxlQUFlLEtBQW5CLEVBQTBCO0FBQUU7QUFDeEIscUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDSCxhQUZELE1BR0s7QUFDRCxvQkFBSSxlQUFKO0FBQ0g7QUFDRCxpQkFBSyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0g7QUFDRCxZQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNmLGdCQUFJLFlBQUosR0FBbUIsSUFBbkI7QUFDQSxnQkFBSSxVQUFVLElBQUksS0FBSixDQUFVLElBQXhCO0FBQ0EsZ0JBQUksWUFBWSxLQUFLLE1BQXJCLEVBQTRCO0FBQ3hCO0FBQ0Esb0JBQUksWUFBWSxLQUFoQixFQUFzQjtBQUNsQjtBQUNBLHlCQUFLLEtBQUw7QUFDSDtBQUNELHFCQUFLLE1BQUwsR0FBYyxPQUFkO0FBQ0g7QUFDSjtBQUNKLEtBN0JEO0FBOEJBLFlBQVEsU0FBUixDQUFrQixJQUFsQixHQUF5QixTQUFTLElBQVQsR0FBZTtBQUNwQyxZQUFJLElBQUo7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFnQjtBQUNaLGdCQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNILFNBRkQsTUFHSyxJQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNwQixnQkFBSSxTQUFKLEdBQWdCLEtBQUssVUFBckI7QUFDSCxTQUZJLE1BR0E7QUFDRCxnQkFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDSDs7QUFFRCxZQUFJLFFBQUosQ0FBYSxLQUFLLENBQWxCLEVBQW9CLEtBQUssQ0FBekIsRUFBMkIsS0FBSyxLQUFoQyxFQUFzQyxLQUFLLE1BQTNDO0FBQ0EsWUFBSSxPQUFKLENBQVksS0FBSyxRQUFqQixFQUEyQixLQUFLLFFBQWhDO0FBQ0EsWUFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDQSxZQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNBLFlBQUksWUFBSixHQUFtQixRQUFuQjtBQUNBLFlBQUksUUFBSixDQUFhLEtBQUssS0FBbEIsRUFBeUIsS0FBSyxDQUFMLEdBQVMsS0FBSyxLQUFMLEdBQVcsQ0FBN0MsRUFBZ0QsS0FBSyxDQUFMLEdBQVMsS0FBSyxNQUFMLEdBQVksQ0FBckU7QUFDQSxZQUFJLE9BQUo7QUFDSCxLQW5CRDs7QUFzQkE7QUFDQSxhQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBMkI7QUFDdkIsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssQ0FBTCxHQUFTLENBQVQ7O0FBRUEsYUFBSyxLQUFMLEdBQWEsQ0FBYjtBQUNBLGFBQUssVUFBTCxHQUFrQixHQUFsQjtBQUNBLGFBQUssSUFBTCxHQUFZLEVBQVo7O0FBRUEsYUFBSyxRQUFMLEdBQWdCLHdCQUFoQjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7O0FBRUEsWUFBSSxNQUFKLENBQVcsSUFBWCxFQUFnQixPQUFoQjtBQUNIO0FBQ0QsY0FBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLFNBQWxDO0FBQ0EsY0FBVSxTQUFWLENBQW9CLElBQXBCLEdBQTJCLFVBQTNCO0FBQ0EsY0FBVSxTQUFWLENBQW9CLE1BQXBCLEdBQTZCLFlBQVUsQ0FBRSxDQUF6QztBQUNBLGNBQVUsU0FBVixDQUFvQixJQUFwQixHQUEyQixZQUFVO0FBQ2pDLFlBQUksSUFBSjtBQUNBLFlBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0EsWUFBSSxZQUFKLEdBQW1CLEtBQW5CO0FBQ0EsWUFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDQSxZQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNBLFlBQUksT0FBSixDQUFZLEtBQUssUUFBakIsRUFBMkIsS0FBSyxRQUFoQzs7QUFFQSxZQUFJLGFBQWEsS0FBSyxRQUFMLEdBQWdCLEtBQUssVUFBdEM7O0FBRUEsWUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUNBLFlBQUksSUFBSSxLQUFLLENBQWI7QUFBQSxZQUFnQixJQUFJLEtBQUssQ0FBekI7QUFDQSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1Qzs7QUFFbkMsZ0JBQUksUUFBUSxNQUFNLENBQU4sRUFBUyxLQUFULENBQWUsR0FBZixDQUFaO0FBQ0EsZ0JBQUksT0FBTyxFQUFYOztBQUVBLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNuQyxvQkFBSSxXQUFXLE9BQU8sTUFBTSxDQUFOLENBQVAsR0FBa0IsR0FBakM7QUFDQSxvQkFBSSxVQUFVLElBQUksV0FBSixDQUFnQixRQUFoQixDQUFkO0FBQ0Esb0JBQUksWUFBWSxRQUFRLEtBQXhCO0FBQ0Esb0JBQUksWUFBWSxLQUFLLEtBQWpCLElBQTBCLElBQUksQ0FBbEMsRUFBcUM7QUFDakMsd0JBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQSwyQkFBTyxNQUFNLENBQU4sSUFBVyxHQUFsQjtBQUNBLHlCQUFLLFVBQUw7QUFDSCxpQkFKRCxNQUtLO0FBQ0QsMkJBQU8sUUFBUDtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQSxpQkFBSyxVQUFMO0FBQ0g7QUFDRCxZQUFJLE9BQUo7QUFDSCxLQW5DRDtBQW9DQSxhQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBOEI7QUFDMUIsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLLEtBQUwsR0FBYSxHQUFiO0FBQ0EsYUFBSyxNQUFMLEdBQWMsRUFBZDs7QUFFQSxhQUFLLFdBQUwsR0FBbUIsZ0JBQW5COztBQUVBLGFBQUssVUFBTCxHQUFrQixDQUFsQjtBQUNBLGFBQUssS0FBTCxHQUFhLElBQWI7O0FBRUEsYUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsYUFBSyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLE1BQWpCOztBQUVBLGFBQUssU0FBTCxHQUFpQixNQUFqQjtBQUNBLGFBQUssVUFBTCxHQUFrQixHQUFsQjtBQUNBLGFBQUssUUFBTCxHQUFnQixXQUFoQjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUssS0FBTCxHQUFhLFFBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsUUFBakI7O0FBRUEsYUFBSyxLQUFMLEdBQWEsWUFBVSxDQUFFLENBQXpCOztBQUVBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7O0FBRUEsWUFBSSxNQUFKLENBQVcsSUFBWCxFQUFnQixPQUFoQjtBQUNIO0FBQ0QsaUJBQWEsU0FBYixDQUF1QixXQUF2QixHQUFxQyxZQUFyQztBQUNBLGlCQUFhLFNBQWIsQ0FBdUIsSUFBdkIsR0FBOEIsY0FBOUI7QUFDQSxpQkFBYSxTQUFiLENBQXVCLGFBQXZCLEdBQXVDLFNBQVMsYUFBVCxDQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUEyQjtBQUM5RCxZQUFJLFNBQVMsS0FBSyxNQUFMLEdBQWMsQ0FBM0I7QUFDQSxZQUFJLFVBQVUsS0FBSyxDQUFMLEdBQVMsSUFBSSxNQUFKLENBQVcsQ0FBbEM7QUFDQSxZQUFJLFVBQVUsS0FBSyxDQUFMLEdBQVMsSUFBSSxNQUFKLENBQVcsQ0FBbEM7O0FBRUE7QUFDQSxZQUFJLElBQUksT0FBSixJQUFlLElBQUksVUFBVSxLQUFLLE1BQXRDLEVBQTZDO0FBQ3pDLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJLElBQUksVUFBVSxNQUFsQixFQUF5QjtBQUNyQixnQkFBSSxLQUFLLE9BQVQsRUFBaUI7QUFDYix1QkFBTyxjQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsVUFBVSxNQUE5QixFQUFzQyxVQUFVLE1BQWhELEVBQXdELE1BQXhELENBQVA7QUFDSCxhQUZELE1BR0s7QUFDRCx1QkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNELFlBQUksSUFBSSxVQUFVLEtBQUssS0FBZixHQUF1QixNQUEvQixFQUFzQztBQUNsQyxnQkFBSSxLQUFLLFVBQVUsS0FBSyxLQUF4QixFQUE4QjtBQUMxQix1QkFBTyxjQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsVUFBVSxLQUFLLEtBQWYsR0FBdUIsTUFBM0MsRUFBbUQsVUFBVSxNQUE3RCxFQUFvRSxNQUFwRSxDQUFQO0FBQ0gsYUFGRCxNQUdLO0FBQ0QsdUJBQU8sS0FBUDtBQUNIO0FBQ0osU0FQRCxNQVFLO0FBQUU7QUFDSCxtQkFBTyxJQUFQO0FBQ0g7QUFDSixLQTdCRDtBQThCQSxpQkFBYSxTQUFiLENBQXVCLFVBQXZCLEdBQW9DLFVBQVMsR0FBVCxFQUFhO0FBQzdDLFlBQUksS0FBSyxVQUFMLEtBQW9CLEdBQXhCLEVBQTRCO0FBQ3hCO0FBQ0g7QUFDRCxhQUFLLEtBQUwsR0FBYSxRQUFRLElBQVIsRUFBYTtBQUN0Qix3QkFBYTtBQURTLFNBQWIsRUFFVixHQUZVLEVBRUwsWUFBVTtBQUNkLGlCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0gsU0FKWSxDQUFiO0FBS0gsS0FURDtBQVVBLGlCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsR0FBZ0MsWUFBVTtBQUN0QyxZQUFJLElBQUksWUFBSixLQUFxQixJQUF6QixFQUE4QjtBQUFFO0FBQzVCLGlCQUFLLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxpQkFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsaUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNIO0FBQ0QsWUFBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixJQUFJLEtBQUosQ0FBVSxDQUE3QixFQUErQixJQUFJLEtBQUosQ0FBVSxDQUF6QyxDQUFqQjtBQUNBLFlBQUksZUFBZSxLQUFLLFNBQXhCLEVBQWtDO0FBQzlCO0FBQ0EsZ0JBQUksZUFBZSxLQUFuQixFQUEwQjtBQUFFO0FBQ3hCLG9CQUFJLEtBQUssTUFBVCxFQUFnQjtBQUNaO0FBQ0EseUJBQUssVUFBTCxHQUFrQixDQUFsQjtBQUNILGlCQUhELE1BSUs7QUFDRCx5QkFBSyxVQUFMLENBQWdCLENBQWhCO0FBQ0g7QUFDRCxxQkFBSyxNQUFMLEdBQWMsS0FBZDtBQUNILGFBVEQsTUFVSztBQUNELG9CQUFJLGVBQUo7QUFDQSxxQkFBSyxVQUFMLENBQWdCLENBQWhCO0FBQ0g7QUFDRCxpQkFBSyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0g7QUFDRCxZQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNmLGdCQUFJLFlBQUosR0FBbUIsSUFBbkI7QUFDQSxnQkFBSSxVQUFVLElBQUksS0FBSixDQUFVLElBQXhCO0FBQ0EsZ0JBQUksWUFBWSxLQUFLLE1BQXJCLEVBQTRCO0FBQ3hCO0FBQ0Esb0JBQUksWUFBWSxLQUFoQixFQUFzQjtBQUNsQjtBQUNBLHlCQUFLLEtBQUw7QUFDSDtBQUNELHFCQUFLLE1BQUwsR0FBYyxPQUFkO0FBQ0g7QUFDSjtBQUNKLEtBdENEO0FBdUNBLGlCQUFhLFNBQWIsQ0FBdUIsY0FBdkIsR0FBd0MsU0FBUyxjQUFULEdBQXlCO0FBQzdELFlBQUksU0FBUyxLQUFLLE1BQUwsR0FBWSxDQUF6QjtBQUNBLFlBQUksU0FBSjtBQUNBLFlBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLE1BQXBCLEVBQTJCLEtBQUssQ0FBaEM7QUFDQSxZQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsR0FBUyxLQUFLLEtBQWQsR0FBc0IsTUFBakMsRUFBeUMsS0FBSyxDQUE5QztBQUNBLFlBQUksR0FBSixDQUFTLEtBQUssQ0FBTCxHQUFTLEtBQUssS0FBZCxHQUFzQixNQUEvQixFQUF1QyxLQUFLLENBQUwsR0FBUyxNQUFoRCxFQUF3RCxNQUF4RCxFQUFnRSxLQUFLLEVBQUwsR0FBVSxHQUExRSxFQUErRSxLQUFLLEVBQUwsR0FBVSxDQUF6RixFQUE0RixLQUE1RjtBQUNBLFlBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLE1BQXBCLEVBQTRCLEtBQUssQ0FBTCxHQUFTLEtBQUssTUFBMUM7QUFDQSxZQUFJLEdBQUosQ0FBUyxLQUFLLENBQUwsR0FBUyxNQUFsQixFQUEwQixLQUFLLENBQUwsR0FBUyxNQUFuQyxFQUEyQyxNQUEzQyxFQUFtRCxLQUFLLEVBQUwsR0FBVSxDQUE3RCxFQUFnRSxLQUFLLEVBQUwsR0FBVSxHQUExRSxFQUErRSxLQUEvRTtBQUNBLFlBQUksU0FBSjtBQUNILEtBVEQ7QUFVQSxpQkFBYSxTQUFiLENBQXVCLElBQXZCLEdBQThCLFlBQVU7QUFDcEM7QUFDQSxZQUFJLElBQUo7QUFDQSxZQUFJLFNBQUosR0FBZ0IsS0FBSyxXQUFyQjtBQUNBLFlBQUksQ0FBQyxLQUFLLE1BQVYsRUFBaUI7QUFDYixnQkFBSSxTQUFKLENBQWMsQ0FBZCxFQUFnQixDQUFoQjtBQUNIO0FBQ0QsYUFBSyxjQUFMO0FBQ0EsWUFBSSxJQUFKO0FBQ0EsWUFBSSxPQUFKOztBQUVBLFlBQUksSUFBSjtBQUNBLFlBQUksS0FBSyxNQUFULEVBQWdCO0FBQ1osZ0JBQUksU0FBSixDQUFjLENBQWQsRUFBZ0IsQ0FBaEI7QUFDQSxpQkFBSyxjQUFMO0FBQ0EsZ0JBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0EsZ0JBQUksV0FBSixHQUFrQixLQUFLLFNBQXZCO0FBQ0EsZ0JBQUksSUFBSjtBQUNILFNBTkQsTUFPSztBQUNELGlCQUFLLGNBQUw7QUFDQSxnQkFBSSxLQUFLLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMEI7QUFDdEIsb0JBQUksU0FBSixHQUFnQixLQUFLLFVBQXJCO0FBQ0Esb0JBQUksSUFBSjtBQUNILGFBSEQsTUFJSyxJQUFJLEtBQUssVUFBTCxLQUFvQixDQUF4QixFQUEwQjtBQUMzQixvQkFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDQSxvQkFBSSxJQUFKO0FBQ0gsYUFISSxNQUlBO0FBQ0Qsb0JBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0Esb0JBQUksSUFBSjs7QUFFQSxvQkFBSSxJQUFKO0FBQ0Esb0JBQUksV0FBSixJQUFtQixLQUFLLFVBQXhCO0FBQ0Esb0JBQUksU0FBSixHQUFnQixLQUFLLFVBQXJCO0FBQ0Esb0JBQUksSUFBSjtBQUNBLG9CQUFJLE9BQUo7QUFDSDtBQUVKOztBQUVELFlBQUksS0FBSyxZQUFULEVBQXVCO0FBQ25CLGdCQUFJLFdBQUosR0FBa0IsS0FBSyxXQUF2QjtBQUNBLGdCQUFJLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQSxnQkFBSSxNQUFKO0FBQ0g7O0FBRUQsWUFBSSxPQUFKLENBQVksS0FBSyxRQUFqQixFQUEyQixLQUFLLFFBQWhDLEVBQTBDLEtBQUssVUFBL0M7QUFDQSxZQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNBLFlBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0EsWUFBSSxZQUFKLEdBQW1CLFFBQW5CO0FBQ0EsWUFBSSxRQUFKLENBQWEsS0FBSyxLQUFMLENBQVcsV0FBWCxFQUFiLEVBQXVDLEtBQUssQ0FBTCxHQUFTLEtBQUssS0FBTCxHQUFXLENBQTNELEVBQThELEtBQUssQ0FBTCxHQUFTLEtBQUssTUFBTCxHQUFZLENBQW5GO0FBQ0EsWUFBSSxPQUFKO0FBQ0gsS0F0REQ7O0FBd0RBLGFBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE0QjtBQUN4QixhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsTUFBakI7O0FBRUEsYUFBSyxRQUFMLEdBQWdCLFdBQWhCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBSyxJQUFMLEdBQVksTUFBWjtBQUNBLGFBQUssU0FBTCxHQUFpQixNQUFqQjtBQUNBLGFBQUssWUFBTCxHQUFvQixLQUFwQjs7QUFFQSxhQUFLLEtBQUwsR0FBYSxZQUFVLENBQUUsQ0FBekI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsS0FBZDs7QUFFQSxZQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWdCLE9BQWhCO0FBRUg7QUFDRCxlQUFXLFNBQVgsQ0FBcUIsV0FBckIsR0FBbUMsVUFBbkM7QUFDQSxlQUFXLFNBQVgsQ0FBcUIsSUFBckIsR0FBNEIsWUFBNUI7QUFDQSxlQUFXLFNBQVgsQ0FBcUIsTUFBckIsR0FBOEIsU0FBUyxNQUFULEdBQWlCO0FBQzNDLFlBQUksSUFBSSxZQUFKLEtBQXFCLElBQXpCLEVBQThCO0FBQUU7QUFDNUIsaUJBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGlCQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0E7QUFDSDs7QUFFRCxZQUFJLElBQUo7QUFDQSxZQUFJLE9BQUosQ0FBWSxLQUFLLFFBQWpCLEVBQTJCLEtBQUssUUFBaEM7QUFDQSxZQUFJLFFBQVEsSUFBSSxXQUFKLENBQWdCLEtBQUssSUFBckIsRUFBMkIsS0FBdkM7QUFDQSxZQUFJLE9BQUo7O0FBRUEsWUFBSSxVQUFVLEtBQUssQ0FBbkI7QUFDQSxZQUFJLEtBQUssU0FBTCxLQUFtQixRQUF2QixFQUFnQztBQUM1Qix1QkFBVyxRQUFNLENBQWpCO0FBQ0g7QUFDRCxZQUFJLGFBQWEsSUFBSSxjQUFKLENBQW1CO0FBQ2hDLGVBQUcsT0FENkI7QUFFaEMsZUFBRyxLQUFLLENBRndCO0FBR2hDLG1CQUFPLEtBSHlCO0FBSWhDLG9CQUFRLEtBQUssUUFBTCxHQUFjLENBSlUsQ0FJUjtBQUpRLFNBQW5CLENBQWpCO0FBTUEsWUFBSSxlQUFlLEtBQUssU0FBeEIsRUFBa0M7QUFDOUI7QUFDQSxnQkFBSSxlQUFlLEtBQW5CLEVBQTBCO0FBQUU7QUFDeEIscUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDSCxhQUZELE1BR0s7QUFDRCxvQkFBSSxlQUFKO0FBQ0g7QUFDRCxpQkFBSyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0g7QUFDRCxZQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNmLGdCQUFJLFlBQUosR0FBbUIsSUFBbkI7QUFDQSxnQkFBSSxVQUFVLElBQUksS0FBSixDQUFVLElBQXhCO0FBQ0EsZ0JBQUksWUFBWSxLQUFLLE1BQXJCLEVBQTRCO0FBQ3hCO0FBQ0Esb0JBQUksWUFBWSxLQUFoQixFQUFzQjtBQUNsQjtBQUNBLHlCQUFLLEtBQUw7QUFDSDtBQUNELHFCQUFLLE1BQUwsR0FBYyxPQUFkO0FBQ0g7QUFDSjtBQUNKLEtBNUNEO0FBNkNBLGVBQVcsU0FBWCxDQUFxQixJQUFyQixHQUE0QixTQUFTLElBQVQsR0FBZTtBQUN2QyxZQUFJLElBQUo7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFnQjtBQUNaLGdCQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNILFNBRkQsTUFHSyxJQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNwQixnQkFBSSxTQUFKLEdBQWdCLEtBQUssVUFBckI7QUFDSCxTQUZJLE1BR0E7QUFDRCxnQkFBSSxTQUFKLEdBQWdCLEtBQUssU0FBckI7QUFDSDtBQUNELFlBQUksT0FBSixDQUFZLEtBQUssUUFBakIsRUFBMkIsS0FBSyxRQUFoQztBQUNBLFlBQUksU0FBSixHQUFnQixLQUFLLFNBQXJCO0FBQ0EsWUFBSSxZQUFKLEdBQW1CLEtBQUssWUFBeEI7QUFDQSxZQUFJLFFBQUosQ0FBYSxLQUFLLElBQWxCLEVBQXVCLEtBQUssQ0FBNUIsRUFBK0IsS0FBSyxDQUFwQztBQUNBLFlBQUksT0FBSjtBQUNILEtBaEJEOztBQWtCQTtBQUNBO0FBQ0E7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBZ0M7QUFDNUIsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssQ0FBTCxHQUFTLENBQVQ7O0FBRUEsYUFBSyxJQUFMLEdBQVksTUFBWjtBQUNBLGFBQUssSUFBTCxHQUFZLHdCQUFaOztBQUVBLFlBQUksTUFBSixDQUFXLElBQVgsRUFBZ0IsT0FBaEI7O0FBRUEsYUFBSyxPQUFMLEdBQWUsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQWY7QUFDQSxhQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLGdCQUFuQixJQUF1QyxLQUF2QztBQUNBLGFBQUssT0FBTCxDQUFhLFNBQWIsR0FBeUIsS0FBSyxJQUE5QjtBQUNBLGFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsVUFBM0I7QUFDQSxhQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLFFBQTFCLEVBQW1DLFFBQW5DO0FBQ0EsYUFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixNQUExQixFQUFpQyxLQUFLLElBQXRDO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxXQUF4QyxDQUFvRCxLQUFLLE9BQXpEO0FBQ0g7QUFDRCxtQkFBZSxTQUFmLENBQXlCLFdBQXpCLEdBQXVDLGNBQXZDO0FBQ0EsbUJBQWUsU0FBZixDQUF5QixJQUF6QixHQUFnQyxnQkFBaEM7QUFDQSxtQkFBZSxTQUFmLENBQXlCLE1BQXpCLEdBQWtDLFNBQVMsTUFBVCxHQUFpQixDQUFFLENBQXJEO0FBQ0EsbUJBQWUsU0FBZixDQUF5QixJQUF6QixHQUFnQyxTQUFTLElBQVQsR0FBZTtBQUMzQyxZQUFJLFFBQVE7QUFDUixlQUFJLElBQUksWUFBSixDQUFpQixDQUFqQixHQUFxQixJQUFJLFFBRHJCO0FBRVIsZUFBSSxJQUFJLFlBQUosQ0FBaUIsQ0FBakIsR0FBcUIsSUFBSTtBQUZyQixTQUFaOztBQUtBLGFBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsV0FBakIsRUFBNkIsV0FBVyxNQUFNLENBQWpCLEdBQXFCLEdBQXJCLEdBQTJCLE1BQU0sQ0FBakMsR0FBcUMsR0FBbEU7QUFDQSxZQUFJLElBQUssS0FBSyxDQUFMLEdBQVMsTUFBTSxDQUFmLEdBQW1CLElBQUksTUFBSixDQUFXLENBQS9CLEdBQXFDLEtBQUssT0FBTCxDQUFhLEtBQWIsS0FBcUIsQ0FBckIsSUFBMEIsSUFBSSxNQUFNLENBQXBDLENBQTdDO0FBQ0EsWUFBSSxJQUFLLEtBQUssQ0FBTCxHQUFTLE1BQU0sQ0FBZixHQUFtQixJQUFJLE1BQUosQ0FBVyxDQUEvQixHQUFxQyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEtBQXNCLENBQXRCLElBQTJCLElBQUksTUFBTSxDQUFyQyxDQUE3Qzs7QUFFQTtBQUNBLFlBQUksWUFBWSxPQUFPLGNBQVAsS0FBMEIsV0FBMUM7QUFDQSxZQUFJLFNBQUosRUFBYztBQUNWLGlCQUFLLElBQUssTUFBTSxDQUFoQjtBQUNBLGlCQUFLLElBQUssTUFBTSxDQUFoQjtBQUNIO0FBQ0QsYUFBSyxPQUFMLENBQWEsS0FBYixDQUFtQixJQUFuQixHQUEwQixJQUFJLElBQTlCO0FBQ0EsYUFBSyxPQUFMLENBQWEsS0FBYixDQUFtQixHQUFuQixHQUF5QixJQUFJLElBQTdCO0FBQ0gsS0FsQkQ7O0FBcUJBLGFBQVMsU0FBVCxDQUFtQixPQUFuQixFQUEyQjtBQUN2QixhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDs7QUFFQTtBQUNBLGFBQUssS0FBTCxHQUFhLEtBQWIsQ0FMdUIsQ0FLSDtBQUNwQixhQUFLLE1BQUwsR0FBYyxLQUFkOztBQUVBO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsR0FBZDtBQUNBLGFBQUssV0FBTCxHQUFtQixPQUFuQjtBQUNBLGFBQUssU0FBTCxHQUFpQixDQUFqQixDQVp1QixDQVlIO0FBQ3BCLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssS0FBTCxHQUFhLENBQWIsQ0FkdUIsQ0FjUDs7QUFFaEIsYUFBSyxLQUFMLEdBQWEsWUFBVSxDQUFFLENBQXpCOztBQUVBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7O0FBRUEsYUFBSyxHQUFMLEdBQVcsRUFBWDtBQUNBLGFBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsQ0FBbEI7O0FBRUEsWUFBSSxNQUFKLENBQVcsSUFBWCxFQUFnQixJQUFoQixFQUFxQixPQUFyQjtBQUNBLGFBQUssU0FBTDtBQUNIO0FBQ0QsY0FBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLFNBQWxDO0FBQ0EsY0FBVSxTQUFWLENBQW9CLElBQXBCLEdBQTJCLFdBQTNCO0FBQ0EsY0FBVSxTQUFWLENBQW9CLFNBQXBCLEdBQWdDLFlBQVU7QUFDdEMsWUFBSSxPQUFPLElBQVg7QUFDQSxhQUFLLEtBQUwsR0FBYSxJQUFJLEtBQUosRUFBYjtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsVUFBUyxDQUFULEVBQVc7QUFDM0IsaUJBQUssTUFBTDtBQUNILFNBRkQ7QUFHQSxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFVBQVMsQ0FBVCxFQUFXO0FBQzVCLGlCQUFLLE9BQUw7QUFDSCxTQUZEO0FBR0EsYUFBSyxLQUFMLENBQVcsR0FBWCxHQUFpQixLQUFLLEdBQXRCO0FBQ0gsS0FWRDtBQVdBLGNBQVUsU0FBVixDQUFvQixPQUFwQixHQUE4QixZQUFVO0FBQ3BDLFlBQUksS0FBSyxVQUFMLEtBQW9CLENBQXhCLEVBQTBCO0FBQ3RCLGlCQUFLLFNBQUw7QUFDSCxTQUZELE1BR0s7QUFDRCxpQkFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7QUFDSixLQVBEO0FBUUEsY0FBVSxTQUFWLENBQW9CLE1BQXBCLEdBQTZCLFNBQVMsTUFBVCxHQUFpQjtBQUMxQyxhQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsWUFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDZixpQkFBSyxLQUFMLEdBQWEsS0FBSyxNQUFMLEdBQVksQ0FBekI7QUFDQSxpQkFBSyxNQUFMLEdBQWMsS0FBSyxLQUFuQjtBQUNIO0FBQ0osS0FORDtBQU9BLGNBQVUsU0FBVixDQUFvQixNQUFwQixHQUE2QixTQUFTLE1BQVQsR0FBaUI7QUFDMUMsWUFBSSxJQUFJLFlBQUosS0FBcUIsSUFBekIsRUFBOEI7QUFBRTtBQUM1QixpQkFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsaUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNIOztBQUVELFlBQUksYUFBYSxLQUFqQjtBQUNBLFlBQUksS0FBSyxRQUFULEVBQWtCO0FBQ2QseUJBQWEsY0FBYyxJQUFJLEtBQUosQ0FBVSxDQUF4QixFQUEyQixJQUFJLEtBQUosQ0FBVSxDQUFyQyxFQUF3QyxLQUFLLENBQUwsR0FBUyxLQUFLLE1BQWQsR0FBdUIsSUFBSSxNQUFKLENBQVcsQ0FBMUUsRUFBNkUsS0FBSyxDQUFMLEdBQVMsS0FBSyxNQUFkLEdBQXVCLElBQUksTUFBSixDQUFXLENBQS9HLEVBQWtILEtBQUssTUFBdkgsQ0FBYjtBQUNILFNBRkQsTUFHSztBQUNELHlCQUFhLElBQUksY0FBSixDQUFtQixJQUFuQixDQUFiO0FBQ0g7O0FBRUQsWUFBSSxlQUFlLEtBQUssU0FBeEIsRUFBa0M7QUFDOUI7QUFDQSxnQkFBSSxlQUFlLEtBQW5CLEVBQTBCO0FBQUU7QUFDeEIscUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDSCxhQUZELE1BR0s7QUFDRCxvQkFBSSxlQUFKO0FBQ0g7QUFDRCxpQkFBSyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0g7QUFDRCxZQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNmLGdCQUFJLFlBQUosR0FBbUIsSUFBbkI7QUFDQSxnQkFBSSxVQUFVLElBQUksS0FBSixDQUFVLElBQXhCO0FBQ0EsZ0JBQUksWUFBWSxLQUFLLE1BQXJCLEVBQTRCO0FBQ3hCO0FBQ0Esb0JBQUksWUFBWSxLQUFoQixFQUFzQjtBQUNsQjtBQUNBLHlCQUFLLEtBQUw7QUFDSDtBQUNELHFCQUFLLE1BQUwsR0FBYyxPQUFkO0FBQ0g7QUFDSjtBQUNKLEtBckNEO0FBc0NBLGNBQVUsU0FBVixDQUFvQixJQUFwQixHQUEyQixTQUFTLElBQVQsR0FBZTtBQUN0QyxZQUFJLElBQUo7O0FBRUEsWUFBSSxLQUFLLE1BQVQsRUFBZ0I7O0FBRVosZ0JBQUksSUFBSSxLQUFLLENBQWI7QUFBQSxnQkFBZ0IsSUFBSSxLQUFLLENBQXpCO0FBQUEsZ0JBQTRCLFFBQVEsS0FBSyxLQUF6QztBQUFBLGdCQUFnRCxTQUFTLEtBQUssTUFBOUQ7O0FBRUEsZ0JBQUksS0FBSyxNQUFULEVBQWdCO0FBQ1oscUJBQUssS0FBSyxLQUFWO0FBQ0EscUJBQUssS0FBSyxLQUFWO0FBQ0EseUJBQVMsS0FBSyxLQUFMLEdBQVcsQ0FBcEI7QUFDQSwwQkFBVSxLQUFLLEtBQUwsR0FBVyxDQUFyQjtBQUNILGFBTEQsTUFNSyxJQUFJLEtBQUssU0FBVCxFQUFtQjtBQUNwQixxQkFBSyxLQUFLLEtBQVY7QUFDQSxxQkFBSyxLQUFLLEtBQVY7QUFDQSx5QkFBUyxLQUFLLEtBQUwsR0FBVyxDQUFwQjtBQUNBLDBCQUFVLEtBQUssS0FBTCxHQUFXLENBQXJCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBSyxRQUFULEVBQWtCO0FBQ2Q7QUFDQSxvQkFBSSxTQUFKO0FBQ0Esb0JBQUksR0FBSixDQUFRLElBQUksUUFBTSxDQUFsQixFQUFxQixJQUFJLFFBQU0sQ0FBL0IsRUFBa0MsUUFBTSxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxLQUFLLEVBQUwsR0FBVSxDQUF4RCxFQUEyRCxJQUEzRDtBQUNBLG9CQUFJLFNBQUo7O0FBRUEsb0JBQUksSUFBSixHQU5jLENBTUY7QUFDWjtBQUNBLG9CQUFJLEtBQUssU0FBVCxFQUFvQjtBQUNoQix3QkFBSSxJQUFKO0FBQ0g7QUFDRCxvQkFBSSxTQUFKLENBQWMsS0FBSyxLQUFuQixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QztBQUNBLG9CQUFJLE9BQUosR0FaYyxDQVlDOztBQUVmO0FBQ0Esb0JBQUksS0FBSyxTQUFMLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHdCQUFJLFdBQUosR0FBa0IsS0FBSyxXQUF2QjtBQUNBLHdCQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNBLHdCQUFJLE1BQUo7QUFDSDtBQUNKLGFBcEJELE1BcUJLO0FBQ0Qsb0JBQUksU0FBSixDQUFjLEtBQUssS0FBbkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsS0FBaEMsRUFBdUMsTUFBdkM7QUFDSDtBQUVKLFNBMUNELE1BMkNLO0FBQ0QsZ0JBQUksUUFBUSxLQUFLLEtBQUwsS0FBZSxLQUFmLEdBQXVCLEtBQUssS0FBNUIsR0FBb0MsRUFBaEQ7QUFDQSxnQkFBSSxTQUFTLEtBQUssTUFBTCxLQUFnQixLQUFoQixHQUF3QixLQUFLLE1BQTdCLEdBQXNDLEVBQW5EOztBQUVBLGdCQUFJLFNBQUo7QUFDQSxnQkFBSSxXQUFKLEdBQWtCLGlCQUFsQjtBQUNBLGdCQUFJLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFoQixFQUFrQixLQUFLLENBQXZCO0FBQ0EsZ0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFPLEtBQWxCLEVBQXdCLEtBQUssQ0FBN0I7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFMLEdBQU8sS0FBbEIsRUFBd0IsS0FBSyxDQUFMLEdBQU8sTUFBL0I7QUFDQSxnQkFBSSxNQUFKLENBQVcsS0FBSyxDQUFoQixFQUFrQixLQUFLLENBQUwsR0FBTyxNQUF6QjtBQUNBLGdCQUFJLFNBQUo7QUFDQSxnQkFBSSxNQUFKOztBQUVBO0FBQ0EsZ0JBQUksS0FBSyxVQUFULEVBQXFCO0FBQ2pCLG9CQUFJLFdBQUosR0FBa0IsU0FBbEI7QUFDQSxvQkFBSSxTQUFKO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSjs7QUFFQSxvQkFBSSxTQUFKO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxHQUFTLFFBQU0sQ0FBZixHQUFtQixDQUE5QixFQUFpQyxLQUFLLENBQUwsR0FBUyxTQUFPLENBQWhCLEdBQW9CLENBQXJEO0FBQ0Esb0JBQUksTUFBSjtBQUNILGFBWEQsTUFZSztBQUNEO0FBQ0Esb0JBQUksV0FBVyxJQUFJLG9CQUFKLENBQXlCLEtBQUssQ0FBOUIsRUFBZ0MsS0FBSyxDQUFyQyxFQUF1QyxLQUFLLENBQUwsR0FBTyxLQUE5QyxFQUFvRCxLQUFLLENBQUwsR0FBTyxNQUEzRCxDQUFmO0FBQ0EseUJBQVMsWUFBVCxDQUFzQixDQUF0QixFQUF3QixNQUF4QjtBQUNBLHlCQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBd0IsT0FBeEI7O0FBRUEsb0JBQUksU0FBUyxZQUFZLEdBQVosS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsR0FBa0MsR0FBL0MsQ0FOQyxDQU1vRDtBQUNyRCxvQkFBSSxhQUFhLElBQUksTUFBckI7QUFDQSxvQkFBSSxXQUFXLEtBQUssTUFBcEIsQ0FSQyxDQVEyQjtBQUM1Qiw4QkFBYyxLQUFLLEVBQUwsR0FBUSxHQUF0QjtBQUNBLDRCQUFZLEtBQUssRUFBTCxHQUFRLEdBQXBCO0FBQ0Esb0JBQUksT0FBSixHQUFjLE9BQWQ7QUFDQSxvQkFBSSxXQUFKLEdBQWtCLFFBQWxCO0FBQ0Esb0JBQUksU0FBSjtBQUNBLG9CQUFJLEdBQUosQ0FBUSxLQUFLLENBQUwsR0FBUyxRQUFNLENBQXZCLEVBQTBCLEtBQUssQ0FBTCxHQUFTLFNBQU8sQ0FBMUMsRUFBNkMsRUFBN0MsRUFBaUQsVUFBakQsRUFBNEQsUUFBNUQsRUFBc0UsS0FBdEU7QUFDQSxvQkFBSSxNQUFKO0FBQ0g7QUFDSjtBQUNELFlBQUksT0FBSjtBQUNILEtBNUZEOztBQStGQSxhQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXNCO0FBQ2xCLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQURrQixDQUNJO0FBQ3RCLGFBQUssUUFBTCxHQUFnQixDQUFoQjtBQUNBLGFBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGFBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBLGFBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsYUFBSyxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsYUFBSyxpQkFBTCxHQUF5QixTQUF6Qjs7QUFFQSxhQUFLLFVBQUwsR0FBa0I7QUFDZCxlQUFJLENBRFU7QUFFZCxlQUFJO0FBRlUsU0FBbEI7QUFJQSxhQUFLLFFBQUwsR0FBZ0I7QUFDWixlQUFJLENBRFE7QUFFWixlQUFJO0FBRlEsU0FBaEI7O0FBS0EsYUFBSyxVQUFMLEdBQWtCLFFBQWxCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFlBQVU7QUFBQyxtQkFBTyxFQUFDLEdBQUksQ0FBTCxFQUFRLEdBQUksQ0FBWixFQUFQO0FBQXVCLFNBQW5EO0FBQ0EsYUFBSyxXQUFMLEdBQW1CO0FBQ2YsZUFBSSxDQUFDLENBRFU7QUFFZixlQUFJLENBQUM7QUFGVSxTQUFuQjtBQUlBLGFBQUssV0FBTCxHQUFtQixJQUFuQjtBQUNBLFlBQUksTUFBSixDQUFXLElBQVgsRUFBZ0IsSUFBaEIsRUFBcUIsTUFBckI7QUFDSDtBQUNELFVBQU0sU0FBTixDQUFnQixXQUFoQixHQUE4QixLQUE5QjtBQUNBLFVBQU0sU0FBTixDQUFnQixJQUFoQixHQUF1QixPQUF2QjtBQUNBLFVBQU0sU0FBTixDQUFnQixNQUFoQixHQUF5QixTQUFTLE1BQVQsR0FBaUI7QUFDdEMsWUFBSSxLQUFLLFdBQUwsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0IsaUJBQUssU0FBTCxHQUFpQixhQUFhLFdBQWIsQ0FBeUIsS0FBSyxVQUE5QixFQUF5QyxLQUFLLFFBQTlDLEVBQXVELEtBQUssVUFBNUQsQ0FBakI7QUFDQSxpQkFBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixLQUxEO0FBTUEsVUFBTSxTQUFOLENBQWdCLElBQWhCLEdBQXVCLFNBQVMsSUFBVCxHQUFlO0FBQ2xDLFlBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQVo7QUFDQSxZQUFJLFdBQVcsS0FBSyxTQUFMLENBQWUsS0FBSyxlQUFwQixDQUFmO0FBQ0EsWUFBSSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBVjtBQUNBLFlBQUksSUFBSjs7QUFFQSxZQUFJLFdBQUosQ0FBZ0IsS0FBSyxRQUFyQjtBQUNBLFlBQUksT0FBSixHQUFjLEtBQUssT0FBbkI7QUFDQSxZQUFJLFNBQUosR0FBZ0IsS0FBSyxTQUFyQjtBQUNBLFlBQUksU0FBSjtBQUNBLFlBQUksTUFBSixDQUFXLE1BQU0sQ0FBakIsRUFBb0IsTUFBTSxDQUExQjtBQUNBLFlBQUksV0FBSixHQUFrQixLQUFLLFNBQXZCO0FBQ0EsWUFBSSxNQUFNLENBQVY7QUFBQSxZQUFhLENBQWI7QUFDQSxhQUFLLE1BQU0sQ0FBWCxFQUFjLE1BQU0sQ0FBcEIsRUFBdUIsT0FBSyxLQUFLLFFBQWpDLEVBQTBDO0FBQ3RDLGdCQUFJLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBSjtBQUNBLGdCQUFJLE1BQUosQ0FBVyxFQUFFLENBQWIsRUFBZ0IsRUFBRSxDQUFsQjtBQUNIO0FBQ0QsWUFBSSxNQUFKLENBQVcsSUFBSSxDQUFmLEVBQWtCLElBQUksQ0FBdEI7QUFDQSxZQUFJLE1BQUo7O0FBRUEsWUFBSSxTQUFKO0FBQ0EsWUFBSSxNQUFKLENBQVcsTUFBTSxDQUFqQixFQUFvQixNQUFNLENBQTFCO0FBQ0EsWUFBSSxXQUFKLEdBQWtCLEtBQUssaUJBQXZCO0FBQ0EsYUFBSyxNQUFNLENBQVgsRUFBYyxNQUFNLEtBQUssZUFBekIsRUFBMEMsT0FBSyxLQUFLLFFBQXBELEVBQTZEO0FBQ3pELGdCQUFJLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBSjtBQUNBLGdCQUFJLE1BQUosQ0FBVyxFQUFFLENBQWIsRUFBZ0IsRUFBRSxDQUFsQjtBQUNIO0FBQ0QsWUFBSSxNQUFKLENBQVcsU0FBUyxDQUFwQixFQUF1QixTQUFTLENBQWhDO0FBQ0EsWUFBSSxNQUFKOztBQUVBLFlBQUksT0FBSjtBQUNILEtBL0JEOztBQWtDQSxXQUFPO0FBQ0gsd0JBQWlCLGNBRGQ7QUFFSCx1QkFBZ0IsYUFGYjtBQUdILGVBQVEsTUFITDtBQUlILGdCQUFTLE9BSk47QUFLSCxlQUFRLE1BTEw7QUFNSCxlQUFRLE1BTkw7QUFPSCxrQkFBVyxTQVBSO0FBUUgsc0JBQWUsWUFSWjtBQVNILG9CQUFhLFVBVFY7QUFVSCx3QkFBaUIsY0FWZDtBQVdILG1CQUFZLFNBWFQ7QUFZSCxlQUFRO0FBWkwsS0FBUDtBQWNILENBOTZCRDs7Ozs7QUNMQSxJQUFJLGNBQWMsUUFBUSxrQkFBUixDQUFsQjs7QUFFQSxPQUFPLE9BQVAsR0FBa0IsU0FBUyxHQUFULEdBQWM7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsUUFBSSx5QkFBeUIsU0FBekIsQ0FBbUMsV0FBbkMsS0FBbUQsU0FBdkQsRUFBaUU7QUFDN0QsaUNBQXlCLFNBQXpCLENBQW1DLFdBQW5DLEdBQWlELFlBQVUsQ0FBRSxDQUE3RDtBQUNIOztBQUVELFFBQUksUUFBSjs7QUFFQSxhQUFTLE9BQVQsR0FBa0I7QUFDZCxlQUFPLEtBQUssUUFBWjtBQUNIOztBQUVELGFBQVMsSUFBVCxDQUFjLE1BQWQsRUFBcUI7QUFDakIsZ0JBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsZUFBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFlBQXJCO0FBQ0EsWUFBSSxjQUFjLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLG9CQUFZLEVBQVosR0FBaUIsY0FBakI7QUFDQSxvQkFBWSxLQUFaLEdBQW9CLHVHQUFwQjtBQUNBLGVBQU8sVUFBUCxDQUFrQixZQUFsQixDQUErQixXQUEvQixFQUE0QyxPQUFPLFdBQW5EOztBQUVBLFlBQUksVUFBVSxPQUFPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBLGdCQUFRLEtBQVIsR0FBZ0I7QUFDWixlQUFJLENBRFE7QUFFWixlQUFJLENBRlE7QUFHWixrQkFBTztBQUhLLFNBQWhCO0FBS0EsZ0JBQVEsTUFBUixHQUFpQjtBQUNiLGVBQUksQ0FEUztBQUViLGVBQUk7QUFGUyxTQUFqQjtBQUlBLGdCQUFRLFlBQVIsR0FBdUI7QUFDbkIsZUFBSSxDQURlO0FBRW5CLGVBQUk7QUFGZSxTQUF2QjtBQUlBLGdCQUFRLFVBQVIsR0FBcUIsQ0FBQyxRQUFRLFlBQVQsQ0FBckI7QUFDQSxnQkFBUSxXQUFSLEdBQXNCLENBQUMsUUFBUSxNQUFULENBQXRCO0FBQ0EsZ0JBQVEsS0FBUixHQUFnQixDQUFoQjtBQUNBLGdCQUFRLE1BQVIsR0FBaUIsQ0FBakI7QUFDQSxnQkFBUSxVQUFSLEdBQXFCLE1BQXJCO0FBQ0EsZ0JBQVEsTUFBUixHQUFpQixFQUFqQjtBQUNBLGdCQUFRLFlBQVIsR0FBdUIsS0FBdkIsQ0E3QmlCLENBNkJhO0FBQzlCLGdCQUFRLFlBQVIsR0FBdUIsSUFBdkI7QUFDQSxnQkFBUSxjQUFSLEdBQXlCLEtBQXpCO0FBQ0EsZ0JBQVEsUUFBUixHQUFtQixDQUFuQjtBQUNBLGdCQUFRLFdBQVIsR0FBc0I7QUFDbEIsa0JBQU8sV0FEVztBQUVsQixrQkFBTyxFQUZXO0FBR2xCLG9CQUFTO0FBSFMsU0FBdEI7QUFLQSxnQkFBUSxTQUFSLEdBQW9CLENBQUMsUUFBUSxXQUFULENBQXBCOztBQUVBLFlBQUksU0FBUyxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBa0I7QUFDM0IsZ0JBQUksT0FBTyxPQUFPLHFCQUFQLEVBQVg7QUFDQSxvQkFBUSxLQUFSLENBQWMsQ0FBZCxHQUFrQixFQUFFLE9BQUYsR0FBWSxLQUFLLElBQW5DO0FBQ0Esb0JBQVEsS0FBUixDQUFjLENBQWQsR0FBa0IsRUFBRSxPQUFGLEdBQVksS0FBSyxHQUFuQztBQUNILFNBSkQ7O0FBTUEsWUFBSSxjQUFjLFNBQVMsV0FBVCxDQUFxQixDQUFyQixFQUF1QjtBQUNyQyxnQkFBSSxFQUFFLE1BQUYsS0FBYSxDQUFqQixFQUFtQjtBQUNmLHdCQUFRLEtBQVIsQ0FBYyxJQUFkLEdBQXFCLElBQXJCO0FBQ0g7QUFDSixTQUpEO0FBS0EsWUFBSSxZQUFZLFNBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFxQjtBQUNqQyxvQkFBUSxLQUFSLENBQWMsSUFBZCxHQUFxQixLQUFyQjtBQUNILFNBRkQ7O0FBSUEsWUFBSSxpQkFBaUIsU0FBUyxjQUFULEdBQTBCO0FBQzNDLGdCQUFJLE9BQU8sZ0JBQVAsSUFBMkIsUUFBUSxRQUFSLEtBQXFCLE9BQU8sZ0JBQTNELEVBQTZFO0FBQ3pFLHdCQUFRLFFBQVIsR0FBbUIsT0FBTyxnQkFBMUI7QUFDSDtBQUNELG1CQUFPLEtBQVAsR0FBZSxPQUFPLFdBQVAsR0FBcUIsUUFBUSxRQUE1QztBQUNBLG1CQUFPLE1BQVAsR0FBZ0IsT0FBTyxZQUFQLEdBQXNCLFFBQVEsUUFBOUM7QUFDSCxTQU5EOztBQVFBLGVBQU8sZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBb0MsTUFBcEMsRUFBMkMsS0FBM0M7QUFDQSxlQUFPLGdCQUFQLENBQXdCLFdBQXhCLEVBQW9DLFdBQXBDLEVBQWdELEtBQWhEO0FBQ0EsZUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFrQyxTQUFsQyxFQUE0QyxLQUE1QztBQUNBLGVBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsY0FBbEMsRUFBa0QsS0FBbEQ7QUFDQSx5QkFuRWlCLENBbUVDOztBQUVsQixnQkFBUSxhQUFSLEdBQXdCLFFBQVEsU0FBaEM7QUFDQSxnQkFBUSxTQUFSLEdBQW9CLFFBQVEsS0FBNUI7QUFDQSxnQkFBUSxRQUFSLEdBQW1CLFFBQVEsSUFBM0I7QUFDQSxnQkFBUSxXQUFSLEdBQXNCLFFBQVEsT0FBOUI7O0FBRUEsZ0JBQVEsU0FBUixHQUFvQixTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUI7QUFDdkMsaUJBQUssTUFBTCxDQUFZLENBQVosSUFBaUIsQ0FBakI7QUFDQSxpQkFBSyxNQUFMLENBQVksQ0FBWixJQUFpQixDQUFqQjtBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBcUIsQ0FBckI7QUFDSCxTQUpEO0FBS0EsZ0JBQVEsS0FBUixHQUFnQixTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CO0FBQy9CLGlCQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsSUFBdUIsQ0FBdkI7QUFDQSxpQkFBSyxZQUFMLENBQWtCLENBQWxCLElBQXVCLENBQXZCO0FBQ0EsaUJBQUssU0FBTCxDQUFlLENBQWYsRUFBaUIsQ0FBakI7QUFDSCxTQUpEO0FBS0EsZ0JBQVEsSUFBUixHQUFlLFNBQVMsSUFBVCxHQUFlO0FBQzFCLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsRUFBQyxHQUFJLEtBQUssTUFBTCxDQUFZLENBQWpCLEVBQW9CLEdBQUksS0FBSyxNQUFMLENBQVksQ0FBcEMsRUFBdEI7QUFDQSxpQkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEVBQUMsR0FBSSxLQUFLLFlBQUwsQ0FBa0IsQ0FBdkIsRUFBMEIsR0FBSSxLQUFLLFlBQUwsQ0FBa0IsQ0FBaEQsRUFBckI7QUFDQSxpQkFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixFQUFDLE1BQU8sS0FBSyxXQUFMLENBQWlCLElBQXpCLEVBQStCLE1BQU8sS0FBSyxXQUFMLENBQWlCLElBQXZELEVBQTZELFFBQVMsS0FBSyxXQUFMLENBQWlCLE1BQXZGLEVBQXBCO0FBQ0EsaUJBQUssUUFBTDtBQUNILFNBTEQ7QUFNQSxnQkFBUSxPQUFSLEdBQWtCLFNBQVMsSUFBVCxHQUFlO0FBQzdCLGlCQUFLLE1BQUwsR0FBYyxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsRUFBZDtBQUNBLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxVQUFMLENBQWdCLEdBQWhCLEVBQXBCO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixLQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW5CO0FBQ0EsaUJBQUssV0FBTDtBQUNILFNBTEQ7QUFNQSxnQkFBUSxLQUFSLEdBQWdCLFNBQVMsS0FBVCxHQUFnQjtBQUM1QixpQkFBSyxTQUFMLENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixPQUFPLEtBQTFCLEVBQWdDLE9BQU8sTUFBdkM7QUFDQSxnQkFBSSxLQUFLLFVBQUwsS0FBb0IsSUFBeEIsRUFBNkI7QUFDekIscUJBQUssSUFBTDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsS0FBSyxVQUF0QjtBQUNBLHFCQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLE9BQU8sS0FBekIsRUFBK0IsT0FBTyxNQUF0QztBQUNBLHFCQUFLLE9BQUw7QUFDSDtBQUNKLFNBUkQ7O0FBVUE7QUFDQSxnQkFBUSxPQUFSLEdBQWtCLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixNQUE3QixFQUFvQztBQUNsRCxtQkFBUSxTQUFTLFNBQVQsR0FBcUIsSUFBckIsR0FBNEIsS0FBSyxXQUFMLENBQWlCLElBQXJEO0FBQ0EscUJBQVUsV0FBVyxTQUFYLEdBQXVCLE1BQXZCLEdBQWdDLEtBQUssV0FBTCxDQUFpQixNQUEzRDtBQUNBLGlCQUFLLFdBQUwsR0FBbUI7QUFDZixzQkFBTyxJQURRO0FBRWYsc0JBQU8sSUFGUTtBQUdmLHdCQUFTO0FBSE0sYUFBbkI7QUFLQSxpQkFBSyxJQUFMLEdBQVksU0FBUyxHQUFULEdBQWUsSUFBZixHQUFzQixLQUF0QixHQUE4QixJQUExQztBQUNILFNBVEQ7QUFVQSxnQkFBUSxXQUFSLEdBQXNCLFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEwQjtBQUM1QyxpQkFBSyxXQUFMLENBQWlCLElBQWpCLEdBQXdCLElBQXhCO0FBQ0EsaUJBQUssSUFBTCxHQUFZLEtBQUssV0FBTCxDQUFpQixNQUFqQixHQUEwQixHQUExQixHQUFnQyxLQUFLLFdBQUwsQ0FBaUIsSUFBakQsR0FBd0QsS0FBeEQsR0FBZ0UsS0FBSyxXQUFMLENBQWlCLElBQTdGO0FBQ0gsU0FIRDtBQUlBLGdCQUFRLFdBQVIsR0FBc0IsU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTBCO0FBQzVDLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakIsR0FBd0IsSUFBeEI7QUFDQSxpQkFBSyxJQUFMLEdBQVksS0FBSyxXQUFMLENBQWlCLE1BQWpCLEdBQTBCLEdBQTFCLEdBQWdDLEtBQUssV0FBTCxDQUFpQixJQUFqRCxHQUF3RCxLQUF4RCxHQUFnRSxLQUFLLFdBQUwsQ0FBaUIsSUFBN0Y7QUFDSCxTQUhEO0FBSUEsZ0JBQVEsYUFBUixHQUF3QixTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBOEI7QUFDbEQsaUJBQUssV0FBTCxDQUFpQixNQUFqQixHQUEwQixNQUExQjtBQUNBLGlCQUFLLElBQUwsR0FBWSxLQUFLLFdBQUwsQ0FBaUIsTUFBakIsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBSyxXQUFMLENBQWlCLElBQWpELEdBQXdELEtBQXhELEdBQWdFLEtBQUssV0FBTCxDQUFpQixJQUE3RjtBQUNILFNBSEQ7O0FBS0EsZ0JBQVEsT0FBUixHQUFrQixTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsTUFBckIsRUFBNkIsVUFBN0IsRUFBeUMsUUFBekMsRUFBbUQsZ0JBQW5ELEVBQW9FO0FBQ2xGLHlCQUFhLGVBQWUsU0FBZixHQUEyQixVQUEzQixHQUF3QyxDQUFyRDtBQUNBLHVCQUFXLGFBQWEsU0FBYixHQUF5QixRQUF6QixHQUFvQyxLQUFLLEVBQUwsR0FBUSxDQUF2RDtBQUNBLCtCQUFtQixxQkFBcUIsU0FBckIsR0FBaUMsZ0JBQWpDLEdBQW9ELEtBQXZFO0FBQ0EsaUJBQUssU0FBTDtBQUNBLGlCQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLE1BQWYsRUFBdUIsVUFBdkIsRUFBbUMsUUFBbkMsRUFBNkMsZ0JBQTdDO0FBQ0EsaUJBQUssU0FBTDtBQUNBLGlCQUFLLElBQUw7QUFDSCxTQVJEOztBQVVBLGdCQUFRLGVBQVIsR0FBMEIsU0FBUyxZQUFULEdBQXVCO0FBQzdDLGdCQUFJLEtBQUssY0FBTCxLQUF3QixLQUE1QixFQUFrQztBQUM5QixxQkFBSyxNQUFMLENBQVksS0FBWixDQUFrQixNQUFsQixHQUEyQixTQUEzQjtBQUNBLHFCQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDSDtBQUNKLFNBTEQ7QUFNQSxnQkFBUSxrQkFBUixHQUE2QixTQUFTLFlBQVQsR0FBdUI7QUFDaEQsZ0JBQUksS0FBSyxjQUFMLEtBQXdCLElBQTVCLEVBQWlDO0FBQzdCLHFCQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLE1BQWxCLEdBQTJCLE1BQTNCO0FBQ0EscUJBQUssY0FBTCxHQUFzQixLQUF0QjtBQUNIO0FBQ0osU0FMRDtBQU1BLGdCQUFRLElBQVIsR0FBZSxTQUFTLElBQVQsR0FBZTtBQUMxQixtQkFBTztBQUNILHVCQUFRLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsQ0FBcEIsR0FBc0IsS0FBSyxRQURoQztBQUVILHdCQUFTLEtBQUssTUFBTCxDQUFZLE1BQVosR0FBcUIsQ0FBckIsR0FBdUIsS0FBSztBQUZsQyxhQUFQO0FBSUgsU0FMRDs7QUFPQTtBQUNBLFlBQUksWUFBWSxPQUFPLGNBQVAsS0FBMEIsV0FBMUM7QUFDQSxZQUFJLFNBQUosRUFBYztBQUNWLG9CQUFRLFlBQVIsR0FBdUIsUUFBUSxRQUEvQjtBQUNBLG9CQUFRLGNBQVIsR0FBeUIsUUFBUSxVQUFqQztBQUNBLG9CQUFRLFFBQVIsR0FBbUIsVUFBUyxJQUFULEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUNqQyxxQkFBSyxZQUFMLENBQWtCLElBQWxCLEVBQXVCLENBQXZCLEVBQXlCLElBQUUsQ0FBM0I7QUFDSCxhQUZEO0FBR0Esb0JBQVEsVUFBUixHQUFxQixVQUFTLElBQVQsRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQ25DLHFCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsRUFBeUIsQ0FBekIsRUFBMkIsSUFBRSxDQUE3QjtBQUNILGFBRkQ7QUFHSDs7QUFFRCxnQkFBUSxNQUFSLEdBQWlCLEtBQUssTUFBdEI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0E3S2lCLENBNktRO0FBQ3pCLGdCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLElBQXBCO0FBQ0EsZUFBTyxJQUFQLEVBQWEsWUFBWSxJQUFaLENBQWI7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQjs7QUFFQSxlQUFPLEtBQUssUUFBWjtBQUNIOztBQUVELGFBQVMsYUFBVCxDQUF1QixVQUF2QixFQUFrQztBQUM5QixhQUFLLFFBQUwsQ0FBYyxVQUFkLEdBQTJCLFVBQTNCO0FBQ0g7O0FBRUQ7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDdkIsWUFBSSxNQUFNLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckIsQ0FBNkIsS0FBN0IsQ0FBVjtBQUNBLFlBQUcsT0FBTyxDQUFDLENBQVgsRUFBYztBQUNWLGlCQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDLENBQWpDO0FBQ0g7QUFDSjs7QUFFRCxhQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBMkIsS0FBM0IsRUFBaUM7QUFDN0IsY0FBTSxNQUFOLEdBRDZCLENBQ2I7QUFDaEIsYUFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixNQUFyQixDQUE0QixLQUE1QixFQUFtQyxDQUFuQyxFQUFzQyxLQUF0QztBQUNIOztBQUVEO0FBQ0EsYUFBUyxTQUFULENBQW1CLEtBQW5CLEVBQXlCO0FBQ3JCLGNBQU0sTUFBTjtBQUNBLGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsSUFBckIsQ0FBMEIsS0FBMUI7QUFDSDs7QUFFRDtBQUNBLGFBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsR0FBckI7QUFDSDs7QUFFRCxhQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBeUI7QUFDckIsZUFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFTLENBQVQsRUFBVztBQUN6QztBQUNILFNBRkQsRUFFRyxLQUZIO0FBR0g7O0FBRUQsYUFBUyxPQUFULENBQWlCLE1BQWpCLEVBQXdCO0FBQ3BCLFlBQUksV0FBVyxTQUFmLEVBQXlCO0FBQ3JCLHFCQUFTLFNBQVMsTUFBVCxHQUFpQixDQUFFLENBQTVCO0FBQ0g7QUFDRCxZQUFJLFVBQVUsS0FBSyxRQUFuQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxDQUFkLEVBQWdCLENBQWhCO0FBQ0EsZ0JBQVEsU0FBUixDQUFrQixDQUFsQixFQUFvQixDQUFwQjtBQUNBO0FBQ0EsaUJBQVMsYUFBVCxHQUF3QjtBQUNwQixvQkFBUSxZQUFSLEdBQXVCLHNCQUFzQixhQUF0QixDQUF2QjtBQUNBLG9CQUFRLElBQVI7QUFDQSxvQkFBUSxLQUFSOztBQUVBLG9CQUFRLEtBQVIsQ0FBYyxRQUFRLFFBQXRCLEVBQWdDLFFBQVEsUUFBeEM7QUFDQSxpQkFBSyxJQUFJLE9BQU8sUUFBUSxNQUFSLENBQWUsTUFBZixHQUF3QixDQUF4QyxFQUEyQyxRQUFRLENBQW5ELEVBQXNELE1BQXRELEVBQTZEO0FBQ3pELHdCQUFRLE1BQVIsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLEdBRHlELENBQzFCO0FBQ2xDO0FBQ0QsaUJBQUssSUFBSSxPQUFPLENBQVgsRUFBYyxNQUFNLFFBQVEsTUFBUixDQUFlLE1BQXhDLEVBQWdELE9BQU8sR0FBdkQsRUFBNEQsTUFBNUQsRUFBbUU7QUFDL0Qsd0JBQVEsTUFBUixDQUFlLElBQWYsRUFBcUIsSUFBckIsR0FEK0QsQ0FDbEM7QUFDaEM7QUFDRCxnQkFBSSxRQUFRLGNBQVIsS0FBMkIsSUFBM0IsSUFBbUMsUUFBUSxZQUFSLEtBQXlCLEtBQWhFLEVBQXNFO0FBQ2xFLHdCQUFRLGtCQUFSO0FBQ0g7QUFDRCxvQkFBUSxZQUFSLEdBQXVCLEtBQXZCO0FBQ0E7QUFDQSxvQkFBUSxPQUFSO0FBQ0g7QUFDRCxnQkFBUSxZQUFSLEdBQXVCLHNCQUFzQixhQUF0QixDQUF2QjtBQUNIOztBQUVELGFBQVMsSUFBVCxHQUFlO0FBQ1gsWUFBSSxLQUFLLFFBQUwsQ0FBYyxZQUFkLEtBQStCLElBQW5DLEVBQXlDO0FBQ3JDLGlDQUFxQixLQUFLLFFBQUwsQ0FBYyxZQUFuQztBQUNIO0FBQ0o7O0FBRUQsYUFBUyxnQkFBVCxHQUEyQjtBQUN2QixZQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxlQUFPLE1BQVAsR0FBZ0IsWUFBVTtBQUN0QixnQkFBSSxRQUFNLElBQUksS0FBSixFQUFWO0FBQ0Esa0JBQU0sVUFBTixDQUFpQixLQUFqQixDQUF1QixPQUF2QixHQUErQiw0Q0FBL0I7QUFDQSxxQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUFNLFVBQWhDO0FBQ0Esa0NBQXNCLFNBQVMsSUFBVCxHQUFlO0FBQ2pDLHNCQUFNLE1BQU47QUFDQSxzQ0FBc0IsSUFBdEI7QUFDSCxhQUhEO0FBSUgsU0FSRDtBQVNBLGVBQU8sR0FBUCxHQUFXLHdEQUFYO0FBQ0EsaUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsTUFBMUI7QUFDSDs7QUFFRCxhQUFTLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsUUFBM0IsRUFBb0M7QUFDaEMsWUFBSyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBZ0MsU0FBaEMsTUFBZ0Qsa0JBQXJELEVBQTBFO0FBQ3RFLHdCQUFZLEtBQVo7QUFDQSxtQkFBTyxVQUFVLENBQVYsQ0FBUDtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxhQUFTLE1BQVQsR0FBaUI7QUFDYixZQUFJLFFBQUosQ0FEYSxDQUNDO0FBQ2QsWUFBSSxPQUFPLEtBQVg7QUFDQSxZQUFJLElBQUksQ0FBUjtBQUNBLFlBQUksU0FBUyxVQUFVLE1BQXZCO0FBQ0EsWUFBSSxVQUFVLENBQWQsRUFBZ0I7QUFDWix1QkFBVyxJQUFYO0FBQ0gsU0FGRCxNQUdLLElBQUssT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQWdDLFVBQVUsQ0FBVixDQUFoQyxNQUFtRCxrQkFBeEQsRUFBNkU7QUFDOUUsbUJBQU8sVUFBVSxDQUFWLENBQVA7QUFDQSx1QkFBVyxVQUFVLENBQVYsQ0FBWDtBQUNBLGdCQUFJLENBQUo7QUFDSCxTQUpJLE1BS0E7QUFDRCx1QkFBVyxVQUFVLENBQVYsQ0FBWDtBQUNBLGdCQUFJLENBQUo7QUFDSDs7QUFFRDtBQUNBLFlBQUksUUFBUSxTQUFSLEtBQVEsQ0FBVSxHQUFWLEVBQWU7QUFDdkIsaUJBQU0sSUFBSSxJQUFWLElBQWtCLEdBQWxCLEVBQXdCO0FBQ3BCLG9CQUFLLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFzQyxHQUF0QyxFQUEyQyxJQUEzQyxDQUFMLEVBQXlEO0FBQ3JEO0FBQ0Esd0JBQUssUUFBUSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsSUFBSSxJQUFKLENBQS9CLE1BQThDLGlCQUEzRCxFQUErRTtBQUMzRSxpQ0FBUyxJQUFULElBQWlCLE9BQVEsSUFBUixFQUFjLFNBQVMsSUFBVCxDQUFkLEVBQThCLElBQUksSUFBSixDQUE5QixDQUFqQjtBQUNILHFCQUZELE1BRU87QUFDSCxpQ0FBUyxJQUFULElBQWlCLElBQUksSUFBSixDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLFNBWEQ7O0FBYUE7QUFDQSxlQUFRLElBQUksTUFBWixFQUFvQixHQUFwQixFQUEwQjtBQUN0QixnQkFBSSxNQUFNLFVBQVUsQ0FBVixDQUFWO0FBQ0Esa0JBQU0sR0FBTjtBQUNIO0FBQ0QsZUFBTyxRQUFQO0FBQ0g7O0FBRUQsV0FBTztBQUNILGlCQUFVLE9BRFA7QUFFSCxjQUFPLElBRko7QUFHSCx1QkFBZ0IsYUFIYjtBQUlILHFCQUFjLFdBSlg7QUFLSCxxQkFBYyxXQUxYO0FBTUgsbUJBQVksU0FOVDtBQU9ILGtCQUFXLFFBUFI7QUFRSCxrQkFBVyxRQVJSO0FBU0gsaUJBQVUsT0FUUDtBQVVILGNBQU8sSUFWSjtBQVdILDBCQUFtQixnQkFYaEI7QUFZSCxnQkFBUztBQVpOLEtBQVA7QUFjSCxDQTFXaUIsRUFBbEI7Ozs7O0FDSEEsT0FBTyxPQUFQLEdBQWtCLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF1QjtBQUNyQyxRQUFJLGdCQUFKOztBQUVBLFFBQUksU0FBUyxJQUFJLElBQUksTUFBUixDQUFlO0FBQ3hCLFdBQUksRUFEb0I7QUFFeEIsV0FBSSxFQUZvQjtBQUd4QixlQUFRLEdBSGdCO0FBSXhCLGdCQUFTLEdBSmU7QUFLeEIsbUJBQVksTUFMWTtBQU14QixvQkFBYSxLQU5XO0FBT3hCLGVBQVEsaUJBQVU7QUFDZCxvQkFBUSxHQUFSLENBQVksT0FBWjtBQUNIO0FBVHVCLEtBQWYsQ0FBYjs7QUFZQSxRQUFJLFlBQVksSUFBSSxJQUFJLE1BQVIsQ0FBZTtBQUMzQixXQUFJLEdBRHVCO0FBRTNCLFdBQUksRUFGdUI7QUFHM0IsZUFBUSxHQUhtQjtBQUkzQixnQkFBUyxHQUprQjtBQUszQixlQUFRLFFBTG1CO0FBTTNCLG1CQUFZLFNBTmU7QUFPM0IsZUFBUSxpQkFBVTtBQUNkLG9CQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7QUFUMEIsS0FBZixDQUFoQjs7QUFZQSxRQUFJLGVBQWUsSUFBSSxJQUFJLFlBQVIsQ0FBcUI7QUFDcEMsV0FBSSxFQURnQztBQUVwQyxXQUFJLEdBRmdDO0FBR3BDLGVBQVEsR0FINEI7QUFJcEMsZ0JBQVMsR0FKMkI7QUFLcEMsbUJBQVksTUFMd0I7QUFNcEMsb0JBQWEsS0FOdUI7QUFPcEMsZUFBUSxpQkFBVTtBQUNkLG9CQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7QUFUbUMsS0FBckIsQ0FBbkI7O0FBWUEsUUFBSSxRQUFRLElBQUksSUFBSSxLQUFSLENBQWM7QUFDdEIsV0FBRyxFQURtQjtBQUV0QixXQUFJLEdBRmtCO0FBR3RCLGNBQU8sZUFIZTtBQUl0QixrQkFBVztBQUpXLEtBQWQsQ0FBWjs7QUFPQSxRQUFJLFVBQVUsSUFBSSxJQUFJLEtBQVIsQ0FBYztBQUN4QixXQUFJLEVBRG9CO0FBRXhCLFdBQUksR0FGb0I7QUFHeEIsZUFBUSxHQUhnQjtBQUl4QixnQkFBUyxHQUplO0FBS3hCLGFBQU07QUFMa0IsS0FBZCxDQUFkOztBQVFBLFFBQUksVUFBVSxJQUFJLElBQUksUUFBUixDQUFpQjtBQUMzQixXQUFJLEVBRHVCO0FBRTNCLFdBQUksR0FGdUI7QUFHM0IsZUFBUSxHQUhtQjtBQUkzQixjQUFPO0FBSm9CLEtBQWpCLENBQWQ7O0FBT0EsUUFBSSxhQUFhLElBQUksSUFBSSxVQUFSLENBQW1CO0FBQ2hDLFdBQUksRUFENEI7QUFFaEMsV0FBSSxHQUY0QjtBQUdoQyxjQUFPLHVCQUh5QjtBQUloQyxlQUFRLGlCQUFVO0FBQ2Qsb0JBQVEsR0FBUixDQUFZLGNBQVo7QUFDSDtBQU4rQixLQUFuQixDQUFqQjs7QUFTQSxRQUFJLFlBQVksSUFBSSxJQUFJLFNBQVIsQ0FBa0I7QUFDOUIsV0FBSSxHQUQwQjtBQUU5QixXQUFJLEVBRjBCO0FBRzlCLGtCQUFXLElBSG1CLEVBR2I7QUFDakIsZ0JBQVMsRUFKcUI7QUFLOUIscUJBQWMsS0FMZ0IsRUFLVDtBQUNyQixtQkFBWSxDQU5rQixFQU1mO0FBQ2YsbUJBQVksSUFQa0IsRUFPWjtBQUNsQixhQUFNLGlGQVJ3QjtBQVM5QixlQUFRLGlCQUFVO0FBQ2Qsb0JBQVEsR0FBUixDQUFZLG9CQUFaO0FBQ0g7QUFYNkIsS0FBbEIsQ0FBaEI7O0FBY0EsUUFBSSxjQUFjLElBQUksSUFBSSxTQUFSLENBQWtCO0FBQ2hDLFdBQUksR0FENEI7QUFFaEMsV0FBSSxHQUY0QjtBQUdoQyxlQUFRLEdBSHdCO0FBSWhDLGdCQUFTLEdBSnVCO0FBS2hDLGVBQVEsRUFMd0I7QUFNaEMsYUFBTSxpRkFOMEI7QUFPaEMsZUFBUSxpQkFBVTtBQUNkLG9CQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNIO0FBVCtCLEtBQWxCLENBQWxCOztBQVlBLFdBQU8sWUFBVTtBQUNiLFlBQUksUUFBUSxJQUFJLElBQUksS0FBUixDQUFjO0FBQ3RCLHNCQUFXLENBQ1AsTUFETyxFQUVQLFNBRk8sRUFHUCxPQUhPLEVBSVAsS0FKTyxFQUtQLE9BTE8sRUFNUCxZQU5PLEVBT1AsVUFQTyxFQVFQLFNBUk8sRUFTUCxXQVRPO0FBRFcsU0FBZCxDQUFaO0FBYUEsZUFBTyxLQUFQO0FBQ0gsS0FmRDtBQWdCSCxDQWhIRDs7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUFTQTtBQUNBLENBQUMsWUFBWTs7QUFFWixLQUFJLGlCQUFpQixNQUFqQixLQUE0QixLQUFoQyxFQUF1QztBQUN0QyxTQUFPLFdBQVAsR0FBcUIsRUFBckI7QUFDQTs7QUFFRDtBQUNBLE1BQUssR0FBTCxHQUFZLEtBQUssR0FBTCxJQUFZLFlBQVk7QUFDbkMsU0FBTyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVA7QUFDQSxFQUZEOztBQUlBLEtBQUksU0FBUyxPQUFPLFdBQWhCLEtBQWdDLEtBQXBDLEVBQTJDO0FBQzFDLE1BQUksU0FBUyxPQUFPLFdBQVAsQ0FBbUIsTUFBbkIsSUFBNkIsT0FBTyxXQUFQLENBQW1CLE1BQW5CLENBQTBCLGVBQXZELEdBQXlFLE9BQU8sV0FBUCxDQUFtQixNQUFuQixDQUEwQixlQUFuRyxHQUN5RSxLQUFLLEdBQUwsRUFEdEY7O0FBR0EsU0FBTyxXQUFQLENBQW1CLEdBQW5CLEdBQXlCLFlBQVk7QUFDcEMsVUFBTyxLQUFLLEdBQUwsS0FBYSxNQUFwQjtBQUNBLEdBRkQ7QUFHQTtBQUVELENBcEJEOztBQXNCQSxJQUFJLFFBQVEsU0FBVSxZQUFZOztBQUVqQyxLQUFJLFVBQVUsRUFBZDs7QUFFQSxRQUFPOztBQUVOLFVBQVEsa0JBQVk7O0FBRW5CLFVBQU8sT0FBUDtBQUVBLEdBTks7O0FBUU4sYUFBVyxxQkFBWTs7QUFFdEIsYUFBVSxFQUFWO0FBRUEsR0FaSzs7QUFjTixPQUFLLGFBQVUsS0FBVixFQUFpQjs7QUFFckIsV0FBUSxJQUFSLENBQWEsS0FBYjtBQUVBLEdBbEJLOztBQW9CTixVQUFRLGdCQUFVLEtBQVYsRUFBaUI7O0FBRXhCLE9BQUksSUFBSSxRQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBUjs7QUFFQSxPQUFJLE1BQU0sQ0FBQyxDQUFYLEVBQWM7QUFDYixZQUFRLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0E7QUFFRCxHQTVCSzs7QUE4Qk4sVUFBUSxnQkFBVSxJQUFWLEVBQWdCOztBQUV2QixPQUFJLFFBQVEsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN6QixXQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFJLElBQUksQ0FBUjs7QUFFQSxVQUFPLFNBQVMsU0FBVCxHQUFxQixJQUFyQixHQUE0QixPQUFPLFdBQVAsQ0FBbUIsR0FBbkIsRUFBbkM7O0FBRUEsVUFBTyxJQUFJLFFBQVEsTUFBbkIsRUFBMkI7O0FBRTFCLFFBQUksUUFBUSxDQUFSLEVBQVcsTUFBWCxDQUFrQixJQUFsQixDQUFKLEVBQTZCO0FBQzVCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBUSxNQUFSLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBO0FBRUQ7O0FBRUQsVUFBTyxJQUFQO0FBRUE7QUFwREssRUFBUDtBQXVEQSxDQTNEb0IsRUFBckI7O0FBNkRBLE1BQU0sS0FBTixHQUFjLFVBQVUsTUFBVixFQUFrQjs7QUFFL0IsS0FBSSxVQUFVLE1BQWQ7QUFDQSxLQUFJLGVBQWUsRUFBbkI7QUFDQSxLQUFJLGFBQWEsRUFBakI7QUFDQSxLQUFJLHFCQUFxQixFQUF6QjtBQUNBLEtBQUksWUFBWSxJQUFoQjtBQUNBLEtBQUksVUFBVSxDQUFkO0FBQ0EsS0FBSSxRQUFRLEtBQVo7QUFDQSxLQUFJLGFBQWEsS0FBakI7QUFDQSxLQUFJLFlBQVksS0FBaEI7QUFDQSxLQUFJLGFBQWEsQ0FBakI7QUFDQSxLQUFJLGFBQWEsSUFBakI7QUFDQSxLQUFJLGtCQUFrQixNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQW9CLElBQTFDO0FBQ0EsS0FBSSx5QkFBeUIsTUFBTSxhQUFOLENBQW9CLE1BQWpEO0FBQ0EsS0FBSSxpQkFBaUIsRUFBckI7QUFDQSxLQUFJLG1CQUFtQixJQUF2QjtBQUNBLEtBQUksd0JBQXdCLEtBQTVCO0FBQ0EsS0FBSSxvQkFBb0IsSUFBeEI7QUFDQSxLQUFJLHNCQUFzQixJQUExQjtBQUNBLEtBQUksa0JBQWtCLElBQXRCOztBQUVBO0FBQ0EsTUFBSyxJQUFJLEtBQVQsSUFBa0IsTUFBbEIsRUFBMEI7QUFDekIsZUFBYSxLQUFiLElBQXNCLFdBQVcsT0FBTyxLQUFQLENBQVgsRUFBMEIsRUFBMUIsQ0FBdEI7QUFDQTs7QUFFRCxNQUFLLEVBQUwsR0FBVSxVQUFVLFVBQVYsRUFBc0IsUUFBdEIsRUFBZ0M7O0FBRXpDLE1BQUksYUFBYSxTQUFqQixFQUE0QjtBQUMzQixlQUFZLFFBQVo7QUFDQTs7QUFFRCxlQUFhLFVBQWI7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFWRDs7QUFZQSxNQUFLLEtBQUwsR0FBYSxVQUFVLElBQVYsRUFBZ0I7O0FBRTVCLFFBQU0sR0FBTixDQUFVLElBQVY7O0FBRUEsZUFBYSxJQUFiOztBQUVBLDBCQUF3QixLQUF4Qjs7QUFFQSxlQUFhLFNBQVMsU0FBVCxHQUFxQixJQUFyQixHQUE0QixPQUFPLFdBQVAsQ0FBbUIsR0FBbkIsRUFBekM7QUFDQSxnQkFBYyxVQUFkOztBQUVBLE9BQUssSUFBSSxRQUFULElBQXFCLFVBQXJCLEVBQWlDOztBQUVoQztBQUNBLE9BQUksV0FBVyxRQUFYLGFBQWdDLEtBQXBDLEVBQTJDOztBQUUxQyxRQUFJLFdBQVcsUUFBWCxFQUFxQixNQUFyQixLQUFnQyxDQUFwQyxFQUF1QztBQUN0QztBQUNBOztBQUVEO0FBQ0EsZUFBVyxRQUFYLElBQXVCLENBQUMsUUFBUSxRQUFSLENBQUQsRUFBb0IsTUFBcEIsQ0FBMkIsV0FBVyxRQUFYLENBQTNCLENBQXZCO0FBRUE7O0FBRUQ7QUFDQTtBQUNBLE9BQUksYUFBYSxRQUFiLE1BQTJCLFNBQS9CLEVBQTBDO0FBQ3pDO0FBQ0E7O0FBRUQsZ0JBQWEsUUFBYixJQUF5QixRQUFRLFFBQVIsQ0FBekI7O0FBRUEsT0FBSyxhQUFhLFFBQWIsYUFBa0MsS0FBbkMsS0FBOEMsS0FBbEQsRUFBeUQ7QUFDeEQsaUJBQWEsUUFBYixLQUEwQixHQUExQixDQUR3RCxDQUN6QjtBQUMvQjs7QUFFRCxzQkFBbUIsUUFBbkIsSUFBK0IsYUFBYSxRQUFiLEtBQTBCLENBQXpEO0FBRUE7O0FBRUQsU0FBTyxJQUFQO0FBRUEsRUEzQ0Q7O0FBNkNBLE1BQUssSUFBTCxHQUFZLFlBQVk7O0FBRXZCLE1BQUksQ0FBQyxVQUFMLEVBQWlCO0FBQ2hCLFVBQU8sSUFBUDtBQUNBOztBQUVELFFBQU0sTUFBTixDQUFhLElBQWI7QUFDQSxlQUFhLEtBQWI7O0FBRUEsTUFBSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDN0IsbUJBQWdCLElBQWhCLENBQXFCLE9BQXJCO0FBQ0E7O0FBRUQsT0FBSyxpQkFBTDtBQUNBLFNBQU8sSUFBUDtBQUVBLEVBaEJEOztBQWtCQSxNQUFLLGlCQUFMLEdBQXlCLFlBQVk7O0FBRXBDLE9BQUssSUFBSSxJQUFJLENBQVIsRUFBVyxtQkFBbUIsZUFBZSxNQUFsRCxFQUEwRCxJQUFJLGdCQUE5RCxFQUFnRixHQUFoRixFQUFxRjtBQUNwRixrQkFBZSxDQUFmLEVBQWtCLElBQWxCO0FBQ0E7QUFFRCxFQU5EOztBQVFBLE1BQUssS0FBTCxHQUFhLFVBQVUsTUFBVixFQUFrQjs7QUFFOUIsZUFBYSxNQUFiO0FBQ0EsU0FBTyxJQUFQO0FBRUEsRUFMRDs7QUFPQSxNQUFLLE1BQUwsR0FBYyxVQUFVLEtBQVYsRUFBaUI7O0FBRTlCLFlBQVUsS0FBVjtBQUNBLFNBQU8sSUFBUDtBQUVBLEVBTEQ7O0FBT0EsTUFBSyxJQUFMLEdBQVksVUFBVSxJQUFWLEVBQWdCOztBQUUzQixVQUFRLElBQVI7QUFDQSxTQUFPLElBQVA7QUFFQSxFQUxEOztBQVFBLE1BQUssTUFBTCxHQUFjLFVBQVUsTUFBVixFQUFrQjs7QUFFL0Isb0JBQWtCLE1BQWxCO0FBQ0EsU0FBTyxJQUFQO0FBRUEsRUFMRDs7QUFPQSxNQUFLLGFBQUwsR0FBcUIsVUFBVSxhQUFWLEVBQXlCOztBQUU3QywyQkFBeUIsYUFBekI7QUFDQSxTQUFPLElBQVA7QUFFQSxFQUxEOztBQU9BLE1BQUssS0FBTCxHQUFhLFlBQVk7O0FBRXhCLG1CQUFpQixTQUFqQjtBQUNBLFNBQU8sSUFBUDtBQUVBLEVBTEQ7O0FBT0EsTUFBSyxPQUFMLEdBQWUsVUFBVSxRQUFWLEVBQW9COztBQUVsQyxxQkFBbUIsUUFBbkI7QUFDQSxTQUFPLElBQVA7QUFFQSxFQUxEOztBQU9BLE1BQUssUUFBTCxHQUFnQixVQUFVLFFBQVYsRUFBb0I7O0FBRW5DLHNCQUFvQixRQUFwQjtBQUNBLFNBQU8sSUFBUDtBQUVBLEVBTEQ7O0FBT0EsTUFBSyxVQUFMLEdBQWtCLFVBQVUsUUFBVixFQUFvQjs7QUFFckMsd0JBQXNCLFFBQXRCO0FBQ0EsU0FBTyxJQUFQO0FBRUEsRUFMRDs7QUFPQSxNQUFLLE1BQUwsR0FBYyxVQUFVLFFBQVYsRUFBb0I7O0FBRWpDLG9CQUFrQixRQUFsQjtBQUNBLFNBQU8sSUFBUDtBQUVBLEVBTEQ7O0FBT0EsTUFBSyxNQUFMLEdBQWMsVUFBVSxJQUFWLEVBQWdCOztBQUU3QixNQUFJLFFBQUo7QUFDQSxNQUFJLE9BQUo7QUFDQSxNQUFJLEtBQUo7O0FBRUEsTUFBSSxPQUFPLFVBQVgsRUFBdUI7QUFDdEIsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSSwwQkFBMEIsS0FBOUIsRUFBcUM7O0FBRXBDLE9BQUkscUJBQXFCLElBQXpCLEVBQStCO0FBQzlCLHFCQUFpQixJQUFqQixDQUFzQixPQUF0QjtBQUNBOztBQUVELDJCQUF3QixJQUF4QjtBQUVBOztBQUVELFlBQVUsQ0FBQyxPQUFPLFVBQVIsSUFBc0IsU0FBaEM7QUFDQSxZQUFVLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsT0FBNUI7O0FBRUEsVUFBUSxnQkFBZ0IsT0FBaEIsQ0FBUjs7QUFFQSxPQUFLLFFBQUwsSUFBaUIsVUFBakIsRUFBNkI7O0FBRTVCO0FBQ0EsT0FBSSxhQUFhLFFBQWIsTUFBMkIsU0FBL0IsRUFBMEM7QUFDekM7QUFDQTs7QUFFRCxPQUFJLFFBQVEsYUFBYSxRQUFiLEtBQTBCLENBQXRDO0FBQ0EsT0FBSSxNQUFNLFdBQVcsUUFBWCxDQUFWOztBQUVBLE9BQUksZUFBZSxLQUFuQixFQUEwQjs7QUFFekIsWUFBUSxRQUFSLElBQW9CLHVCQUF1QixHQUF2QixFQUE0QixLQUE1QixDQUFwQjtBQUVBLElBSkQsTUFJTzs7QUFFTjtBQUNBLFFBQUksT0FBUSxHQUFSLEtBQWlCLFFBQXJCLEVBQStCOztBQUU5QixTQUFJLElBQUksVUFBSixDQUFlLEdBQWYsS0FBdUIsSUFBSSxVQUFKLENBQWUsR0FBZixDQUEzQixFQUFnRDtBQUMvQyxZQUFNLFFBQVEsV0FBVyxHQUFYLEVBQWdCLEVBQWhCLENBQWQ7QUFDQSxNQUZELE1BRU87QUFDTixZQUFNLFdBQVcsR0FBWCxFQUFnQixFQUFoQixDQUFOO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLFFBQUksT0FBUSxHQUFSLEtBQWlCLFFBQXJCLEVBQStCO0FBQzlCLGFBQVEsUUFBUixJQUFvQixRQUFRLENBQUMsTUFBTSxLQUFQLElBQWdCLEtBQTVDO0FBQ0E7QUFFRDtBQUVEOztBQUVELE1BQUksc0JBQXNCLElBQTFCLEVBQWdDO0FBQy9CLHFCQUFrQixJQUFsQixDQUF1QixPQUF2QixFQUFnQyxLQUFoQztBQUNBOztBQUVELE1BQUksWUFBWSxDQUFoQixFQUFtQjs7QUFFbEIsT0FBSSxVQUFVLENBQWQsRUFBaUI7O0FBRWhCLFFBQUksU0FBUyxPQUFULENBQUosRUFBdUI7QUFDdEI7QUFDQTs7QUFFRDtBQUNBLFNBQUssUUFBTCxJQUFpQixrQkFBakIsRUFBcUM7O0FBRXBDLFNBQUksT0FBUSxXQUFXLFFBQVgsQ0FBUixLQUFrQyxRQUF0QyxFQUFnRDtBQUMvQyx5QkFBbUIsUUFBbkIsSUFBK0IsbUJBQW1CLFFBQW5CLElBQStCLFdBQVcsV0FBVyxRQUFYLENBQVgsRUFBaUMsRUFBakMsQ0FBOUQ7QUFDQTs7QUFFRCxTQUFJLEtBQUosRUFBVztBQUNWLFVBQUksTUFBTSxtQkFBbUIsUUFBbkIsQ0FBVjs7QUFFQSx5QkFBbUIsUUFBbkIsSUFBK0IsV0FBVyxRQUFYLENBQS9CO0FBQ0EsaUJBQVcsUUFBWCxJQUF1QixHQUF2QjtBQUNBOztBQUVELGtCQUFhLFFBQWIsSUFBeUIsbUJBQW1CLFFBQW5CLENBQXpCO0FBRUE7O0FBRUQsUUFBSSxLQUFKLEVBQVc7QUFDVixpQkFBWSxDQUFDLFNBQWI7QUFDQTs7QUFFRCxpQkFBYSxPQUFPLFVBQXBCOztBQUVBLFdBQU8sSUFBUDtBQUVBLElBaENELE1BZ0NPOztBQUVOLFFBQUksd0JBQXdCLElBQTVCLEVBQWtDO0FBQ2pDLHlCQUFvQixJQUFwQixDQUF5QixPQUF6QjtBQUNBOztBQUVELFNBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxtQkFBbUIsZUFBZSxNQUFsRCxFQUEwRCxJQUFJLGdCQUE5RCxFQUFnRixHQUFoRixFQUFxRjtBQUNwRjtBQUNBO0FBQ0Esb0JBQWUsQ0FBZixFQUFrQixLQUFsQixDQUF3QixhQUFhLFNBQXJDO0FBQ0E7O0FBRUQsV0FBTyxLQUFQO0FBRUE7QUFFRDs7QUFFRCxTQUFPLElBQVA7QUFFQSxFQXRIRDtBQXdIQSxDQTdTRDs7QUFnVEEsTUFBTSxNQUFOLEdBQWU7O0FBRWQsU0FBUTs7QUFFUCxRQUFNLGNBQVUsQ0FBVixFQUFhOztBQUVsQixVQUFPLENBQVA7QUFFQTs7QUFOTSxFQUZNOztBQVlkLFlBQVc7O0FBRVYsTUFBSSxZQUFVLENBQVYsRUFBYTs7QUFFaEIsVUFBTyxJQUFJLENBQVg7QUFFQSxHQU5TOztBQVFWLE9BQUssYUFBVSxDQUFWLEVBQWE7O0FBRWpCLFVBQU8sS0FBSyxJQUFJLENBQVQsQ0FBUDtBQUVBLEdBWlM7O0FBY1YsU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxDQUFDLEtBQUssQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDakIsV0FBTyxNQUFNLENBQU4sR0FBVSxDQUFqQjtBQUNBOztBQUVELFVBQU8sQ0FBRSxHQUFGLElBQVMsRUFBRSxDQUFGLElBQU8sSUFBSSxDQUFYLElBQWdCLENBQXpCLENBQVA7QUFFQTs7QUF0QlMsRUFaRzs7QUFzQ2QsUUFBTzs7QUFFTixNQUFJLFlBQVUsQ0FBVixFQUFhOztBQUVoQixVQUFPLElBQUksQ0FBSixHQUFRLENBQWY7QUFFQSxHQU5LOztBQVFOLE9BQUssYUFBVSxDQUFWLEVBQWE7O0FBRWpCLFVBQU8sRUFBRSxDQUFGLEdBQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFyQjtBQUVBLEdBWks7O0FBY04sU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxDQUFDLEtBQUssQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDakIsV0FBTyxNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBckI7QUFDQTs7QUFFRCxVQUFPLE9BQU8sQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFYLEdBQWUsQ0FBZixHQUFtQixDQUExQixDQUFQO0FBRUE7O0FBdEJLLEVBdENPOztBQWdFZCxVQUFTOztBQUVSLE1BQUksWUFBVSxDQUFWLEVBQWE7O0FBRWhCLFVBQU8sSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQW5CO0FBRUEsR0FOTzs7QUFRUixPQUFLLGFBQVUsQ0FBVixFQUFhOztBQUVqQixVQUFPLElBQUssRUFBRSxDQUFGLEdBQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUExQjtBQUVBLEdBWk87O0FBY1IsU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxDQUFDLEtBQUssQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDakIsV0FBTyxNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQixDQUF6QjtBQUNBOztBQUVELFVBQU8sQ0FBRSxHQUFGLElBQVMsQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFYLEdBQWUsQ0FBZixHQUFtQixDQUFuQixHQUF1QixDQUFoQyxDQUFQO0FBRUE7O0FBdEJPLEVBaEVLOztBQTBGZCxVQUFTOztBQUVSLE1BQUksWUFBVSxDQUFWLEVBQWE7O0FBRWhCLFVBQU8sSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosR0FBZ0IsQ0FBdkI7QUFFQSxHQU5POztBQVFSLE9BQUssYUFBVSxDQUFWLEVBQWE7O0FBRWpCLFVBQU8sRUFBRSxDQUFGLEdBQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCLENBQWxCLEdBQXNCLENBQTdCO0FBRUEsR0FaTzs7QUFjUixTQUFPLGVBQVUsQ0FBVixFQUFhOztBQUVuQixPQUFJLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNqQixXQUFPLE1BQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCLENBQWxCLEdBQXNCLENBQTdCO0FBQ0E7O0FBRUQsVUFBTyxPQUFPLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBWCxHQUFlLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBbEMsQ0FBUDtBQUVBOztBQXRCTyxFQTFGSzs7QUFvSGQsYUFBWTs7QUFFWCxNQUFJLFlBQVUsQ0FBVixFQUFhOztBQUVoQixVQUFPLElBQUksS0FBSyxHQUFMLENBQVMsSUFBSSxLQUFLLEVBQVQsR0FBYyxDQUF2QixDQUFYO0FBRUEsR0FOVTs7QUFRWCxPQUFLLGFBQVUsQ0FBVixFQUFhOztBQUVqQixVQUFPLEtBQUssR0FBTCxDQUFTLElBQUksS0FBSyxFQUFULEdBQWMsQ0FBdkIsQ0FBUDtBQUVBLEdBWlU7O0FBY1gsU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsVUFBTyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxFQUFMLEdBQVUsQ0FBbkIsQ0FBWCxDQUFQO0FBRUE7O0FBbEJVLEVBcEhFOztBQTBJZCxjQUFhOztBQUVaLE1BQUksWUFBVSxDQUFWLEVBQWE7O0FBRWhCLFVBQU8sTUFBTSxDQUFOLEdBQVUsQ0FBVixHQUFjLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxJQUFJLENBQW5CLENBQXJCO0FBRUEsR0FOVzs7QUFRWixPQUFLLGFBQVUsQ0FBVixFQUFhOztBQUVqQixVQUFPLE1BQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFFLEVBQUYsR0FBTyxDQUFuQixDQUF6QjtBQUVBLEdBWlc7O0FBY1osU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxNQUFNLENBQVYsRUFBYTtBQUNaLFdBQU8sQ0FBUDtBQUNBOztBQUVELE9BQUksTUFBTSxDQUFWLEVBQWE7QUFDWixXQUFPLENBQVA7QUFDQTs7QUFFRCxPQUFJLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNqQixXQUFPLE1BQU0sS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLElBQUksQ0FBbkIsQ0FBYjtBQUNBOztBQUVELFVBQU8sT0FBTyxDQUFFLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFFLEVBQUYsSUFBUSxJQUFJLENBQVosQ0FBWixDQUFGLEdBQWdDLENBQXZDLENBQVA7QUFFQTs7QUE5QlcsRUExSUM7O0FBNEtkLFdBQVU7O0FBRVQsTUFBSSxZQUFVLENBQVYsRUFBYTs7QUFFaEIsVUFBTyxJQUFJLEtBQUssSUFBTCxDQUFVLElBQUksSUFBSSxDQUFsQixDQUFYO0FBRUEsR0FOUTs7QUFRVCxPQUFLLGFBQVUsQ0FBVixFQUFhOztBQUVqQixVQUFPLEtBQUssSUFBTCxDQUFVLElBQUssRUFBRSxDQUFGLEdBQU0sQ0FBckIsQ0FBUDtBQUVBLEdBWlE7O0FBY1QsU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxDQUFDLEtBQUssQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDakIsV0FBTyxDQUFFLEdBQUYsSUFBUyxLQUFLLElBQUwsQ0FBVSxJQUFJLElBQUksQ0FBbEIsSUFBdUIsQ0FBaEMsQ0FBUDtBQUNBOztBQUVELFVBQU8sT0FBTyxLQUFLLElBQUwsQ0FBVSxJQUFJLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBekIsSUFBOEIsQ0FBckMsQ0FBUDtBQUVBOztBQXRCUSxFQTVLSTs7QUFzTWQsVUFBUzs7QUFFUixNQUFJLFlBQVUsQ0FBVixFQUFhOztBQUVoQixPQUFJLENBQUo7QUFDQSxPQUFJLElBQUksR0FBUjtBQUNBLE9BQUksSUFBSSxHQUFSOztBQUVBLE9BQUksTUFBTSxDQUFWLEVBQWE7QUFDWixXQUFPLENBQVA7QUFDQTs7QUFFRCxPQUFJLE1BQU0sQ0FBVixFQUFhO0FBQ1osV0FBTyxDQUFQO0FBQ0E7O0FBRUQsT0FBSSxDQUFDLENBQUQsSUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDaEIsUUFBSSxDQUFKO0FBQ0EsUUFBSSxJQUFJLENBQVI7QUFDQSxJQUhELE1BR087QUFDTixRQUFJLElBQUksS0FBSyxJQUFMLENBQVUsSUFBSSxDQUFkLENBQUosSUFBd0IsSUFBSSxLQUFLLEVBQWpDLENBQUo7QUFDQTs7QUFFRCxVQUFPLEVBQUcsSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxLQUFLLENBQVgsQ0FBWixDQUFKLEdBQWlDLEtBQUssR0FBTCxDQUFTLENBQUMsSUFBSSxDQUFMLEtBQVcsSUFBSSxLQUFLLEVBQXBCLElBQTBCLENBQW5DLENBQXBDLENBQVA7QUFFQSxHQXpCTzs7QUEyQlIsT0FBSyxhQUFVLENBQVYsRUFBYTs7QUFFakIsT0FBSSxDQUFKO0FBQ0EsT0FBSSxJQUFJLEdBQVI7QUFDQSxPQUFJLElBQUksR0FBUjs7QUFFQSxPQUFJLE1BQU0sQ0FBVixFQUFhO0FBQ1osV0FBTyxDQUFQO0FBQ0E7O0FBRUQsT0FBSSxNQUFNLENBQVYsRUFBYTtBQUNaLFdBQU8sQ0FBUDtBQUNBOztBQUVELE9BQUksQ0FBQyxDQUFELElBQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2hCLFFBQUksQ0FBSjtBQUNBLFFBQUksSUFBSSxDQUFSO0FBQ0EsSUFIRCxNQUdPO0FBQ04sUUFBSSxJQUFJLEtBQUssSUFBTCxDQUFVLElBQUksQ0FBZCxDQUFKLElBQXdCLElBQUksS0FBSyxFQUFqQyxDQUFKO0FBQ0E7O0FBRUQsVUFBUSxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFFLEVBQUYsR0FBTyxDQUFuQixDQUFKLEdBQTRCLEtBQUssR0FBTCxDQUFTLENBQUMsSUFBSSxDQUFMLEtBQVcsSUFBSSxLQUFLLEVBQXBCLElBQTBCLENBQW5DLENBQTVCLEdBQW9FLENBQTVFO0FBRUEsR0FsRE87O0FBb0RSLFNBQU8sZUFBVSxDQUFWLEVBQWE7O0FBRW5CLE9BQUksQ0FBSjtBQUNBLE9BQUksSUFBSSxHQUFSO0FBQ0EsT0FBSSxJQUFJLEdBQVI7O0FBRUEsT0FBSSxNQUFNLENBQVYsRUFBYTtBQUNaLFdBQU8sQ0FBUDtBQUNBOztBQUVELE9BQUksTUFBTSxDQUFWLEVBQWE7QUFDWixXQUFPLENBQVA7QUFDQTs7QUFFRCxPQUFJLENBQUMsQ0FBRCxJQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNoQixRQUFJLENBQUo7QUFDQSxRQUFJLElBQUksQ0FBUjtBQUNBLElBSEQsTUFHTztBQUNOLFFBQUksSUFBSSxLQUFLLElBQUwsQ0FBVSxJQUFJLENBQWQsQ0FBSixJQUF3QixJQUFJLEtBQUssRUFBakMsQ0FBSjtBQUNBOztBQUVELE9BQUksQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFmLEVBQWtCO0FBQ2pCLFdBQU8sQ0FBRSxHQUFGLElBQVMsSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxLQUFLLENBQVgsQ0FBWixDQUFKLEdBQWlDLEtBQUssR0FBTCxDQUFTLENBQUMsSUFBSSxDQUFMLEtBQVcsSUFBSSxLQUFLLEVBQXBCLElBQTBCLENBQW5DLENBQTFDLENBQVA7QUFDQTs7QUFFRCxVQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLEtBQUssQ0FBWixDQUFaLENBQUosR0FBa0MsS0FBSyxHQUFMLENBQVMsQ0FBQyxJQUFJLENBQUwsS0FBVyxJQUFJLEtBQUssRUFBcEIsSUFBMEIsQ0FBbkMsQ0FBbEMsR0FBMEUsR0FBMUUsR0FBZ0YsQ0FBdkY7QUFFQTs7QUEvRU8sRUF0TUs7O0FBeVJkLE9BQU07O0FBRUwsTUFBSSxZQUFVLENBQVYsRUFBYTs7QUFFaEIsT0FBSSxJQUFJLE9BQVI7O0FBRUEsVUFBTyxJQUFJLENBQUosSUFBUyxDQUFDLElBQUksQ0FBTCxJQUFVLENBQVYsR0FBYyxDQUF2QixDQUFQO0FBRUEsR0FSSTs7QUFVTCxPQUFLLGFBQVUsQ0FBVixFQUFhOztBQUVqQixPQUFJLElBQUksT0FBUjs7QUFFQSxVQUFPLEVBQUUsQ0FBRixHQUFNLENBQU4sSUFBVyxDQUFDLElBQUksQ0FBTCxJQUFVLENBQVYsR0FBYyxDQUF6QixJQUE4QixDQUFyQztBQUVBLEdBaEJJOztBQWtCTCxTQUFPLGVBQVUsQ0FBVixFQUFhOztBQUVuQixPQUFJLElBQUksVUFBVSxLQUFsQjs7QUFFQSxPQUFJLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNqQixXQUFPLE9BQU8sSUFBSSxDQUFKLElBQVMsQ0FBQyxJQUFJLENBQUwsSUFBVSxDQUFWLEdBQWMsQ0FBdkIsQ0FBUCxDQUFQO0FBQ0E7O0FBRUQsVUFBTyxPQUFPLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBWCxJQUFnQixDQUFDLElBQUksQ0FBTCxJQUFVLENBQVYsR0FBYyxDQUE5QixJQUFtQyxDQUExQyxDQUFQO0FBRUE7O0FBNUJJLEVBelJROztBQXlUZCxTQUFROztBQUVQLE1BQUksWUFBVSxDQUFWLEVBQWE7O0FBRWhCLFVBQU8sSUFBSSxNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQW9CLEdBQXBCLENBQXdCLElBQUksQ0FBNUIsQ0FBWDtBQUVBLEdBTk07O0FBUVAsT0FBSyxhQUFVLENBQVYsRUFBYTs7QUFFakIsT0FBSSxJQUFLLElBQUksSUFBYixFQUFvQjtBQUNuQixXQUFPLFNBQVMsQ0FBVCxHQUFhLENBQXBCO0FBQ0EsSUFGRCxNQUVPLElBQUksSUFBSyxJQUFJLElBQWIsRUFBb0I7QUFDMUIsV0FBTyxVQUFVLEtBQU0sTUFBTSxJQUF0QixJQUErQixDQUEvQixHQUFtQyxJQUExQztBQUNBLElBRk0sTUFFQSxJQUFJLElBQUssTUFBTSxJQUFmLEVBQXNCO0FBQzVCLFdBQU8sVUFBVSxLQUFNLE9BQU8sSUFBdkIsSUFBZ0MsQ0FBaEMsR0FBb0MsTUFBM0M7QUFDQSxJQUZNLE1BRUE7QUFDTixXQUFPLFVBQVUsS0FBTSxRQUFRLElBQXhCLElBQWlDLENBQWpDLEdBQXFDLFFBQTVDO0FBQ0E7QUFFRCxHQXBCTTs7QUFzQlAsU0FBTyxlQUFVLENBQVYsRUFBYTs7QUFFbkIsT0FBSSxJQUFJLEdBQVIsRUFBYTtBQUNaLFdBQU8sTUFBTSxNQUFOLENBQWEsTUFBYixDQUFvQixFQUFwQixDQUF1QixJQUFJLENBQTNCLElBQWdDLEdBQXZDO0FBQ0E7O0FBRUQsVUFBTyxNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQW9CLEdBQXBCLENBQXdCLElBQUksQ0FBSixHQUFRLENBQWhDLElBQXFDLEdBQXJDLEdBQTJDLEdBQWxEO0FBRUE7O0FBOUJNOztBQXpUTSxDQUFmOztBQTZWQSxNQUFNLGFBQU4sR0FBc0I7O0FBRXJCLFNBQVEsZ0JBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0I7O0FBRXZCLE1BQUksSUFBSSxFQUFFLE1BQUYsR0FBVyxDQUFuQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVo7QUFDQSxNQUFJLElBQUksS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFSO0FBQ0EsTUFBSSxLQUFLLE1BQU0sYUFBTixDQUFvQixLQUFwQixDQUEwQixNQUFuQzs7QUFFQSxNQUFJLElBQUksQ0FBUixFQUFXO0FBQ1YsVUFBTyxHQUFHLEVBQUUsQ0FBRixDQUFILEVBQVMsRUFBRSxDQUFGLENBQVQsRUFBZSxDQUFmLENBQVA7QUFDQTs7QUFFRCxNQUFJLElBQUksQ0FBUixFQUFXO0FBQ1YsVUFBTyxHQUFHLEVBQUUsQ0FBRixDQUFILEVBQVMsRUFBRSxJQUFJLENBQU4sQ0FBVCxFQUFtQixJQUFJLENBQXZCLENBQVA7QUFDQTs7QUFFRCxTQUFPLEdBQUcsRUFBRSxDQUFGLENBQUgsRUFBUyxFQUFFLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCLElBQUksQ0FBdEIsQ0FBVCxFQUFtQyxJQUFJLENBQXZDLENBQVA7QUFFQSxFQW5Cb0I7O0FBcUJyQixTQUFRLGdCQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCOztBQUV2QixNQUFJLElBQUksQ0FBUjtBQUNBLE1BQUksSUFBSSxFQUFFLE1BQUYsR0FBVyxDQUFuQjtBQUNBLE1BQUksS0FBSyxLQUFLLEdBQWQ7QUFDQSxNQUFJLEtBQUssTUFBTSxhQUFOLENBQW9CLEtBQXBCLENBQTBCLFNBQW5DOztBQUVBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsS0FBSyxDQUFyQixFQUF3QixHQUF4QixFQUE2QjtBQUM1QixRQUFLLEdBQUcsSUFBSSxDQUFQLEVBQVUsSUFBSSxDQUFkLElBQW1CLEdBQUcsQ0FBSCxFQUFNLENBQU4sQ0FBbkIsR0FBOEIsRUFBRSxDQUFGLENBQTlCLEdBQXFDLEdBQUcsQ0FBSCxFQUFNLENBQU4sQ0FBMUM7QUFDQTs7QUFFRCxTQUFPLENBQVA7QUFFQSxFQWxDb0I7O0FBb0NyQixhQUFZLG9CQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCOztBQUUzQixNQUFJLElBQUksRUFBRSxNQUFGLEdBQVcsQ0FBbkI7QUFDQSxNQUFJLElBQUksSUFBSSxDQUFaO0FBQ0EsTUFBSSxJQUFJLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUjtBQUNBLE1BQUksS0FBSyxNQUFNLGFBQU4sQ0FBb0IsS0FBcEIsQ0FBMEIsVUFBbkM7O0FBRUEsTUFBSSxFQUFFLENBQUYsTUFBUyxFQUFFLENBQUYsQ0FBYixFQUFtQjs7QUFFbEIsT0FBSSxJQUFJLENBQVIsRUFBVztBQUNWLFFBQUksS0FBSyxLQUFMLENBQVcsSUFBSSxLQUFLLElBQUksQ0FBVCxDQUFmLENBQUo7QUFDQTs7QUFFRCxVQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBSixHQUFRLENBQVQsSUFBYyxDQUFoQixDQUFILEVBQXVCLEVBQUUsQ0FBRixDQUF2QixFQUE2QixFQUFFLENBQUMsSUFBSSxDQUFMLElBQVUsQ0FBWixDQUE3QixFQUE2QyxFQUFFLENBQUMsSUFBSSxDQUFMLElBQVUsQ0FBWixDQUE3QyxFQUE2RCxJQUFJLENBQWpFLENBQVA7QUFFQSxHQVJELE1BUU87O0FBRU4sT0FBSSxJQUFJLENBQVIsRUFBVztBQUNWLFdBQU8sRUFBRSxDQUFGLEtBQVEsR0FBRyxFQUFFLENBQUYsQ0FBSCxFQUFTLEVBQUUsQ0FBRixDQUFULEVBQWUsRUFBRSxDQUFGLENBQWYsRUFBcUIsRUFBRSxDQUFGLENBQXJCLEVBQTJCLENBQUMsQ0FBNUIsSUFBaUMsRUFBRSxDQUFGLENBQXpDLENBQVA7QUFDQTs7QUFFRCxPQUFJLElBQUksQ0FBUixFQUFXO0FBQ1YsV0FBTyxFQUFFLENBQUYsS0FBUSxHQUFHLEVBQUUsQ0FBRixDQUFILEVBQVMsRUFBRSxDQUFGLENBQVQsRUFBZSxFQUFFLElBQUksQ0FBTixDQUFmLEVBQXlCLEVBQUUsSUFBSSxDQUFOLENBQXpCLEVBQW1DLElBQUksQ0FBdkMsSUFBNEMsRUFBRSxDQUFGLENBQXBELENBQVA7QUFDQTs7QUFFRCxVQUFPLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBUixHQUFZLENBQWQsQ0FBSCxFQUFxQixFQUFFLENBQUYsQ0FBckIsRUFBMkIsRUFBRSxJQUFJLElBQUksQ0FBUixHQUFZLENBQVosR0FBZ0IsSUFBSSxDQUF0QixDQUEzQixFQUFxRCxFQUFFLElBQUksSUFBSSxDQUFSLEdBQVksQ0FBWixHQUFnQixJQUFJLENBQXRCLENBQXJELEVBQStFLElBQUksQ0FBbkYsQ0FBUDtBQUVBO0FBRUQsRUFqRW9COztBQW1FckIsUUFBTzs7QUFFTixVQUFRLGdCQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLENBQWxCLEVBQXFCOztBQUU1QixVQUFPLENBQUMsS0FBSyxFQUFOLElBQVksQ0FBWixHQUFnQixFQUF2QjtBQUVBLEdBTks7O0FBUU4sYUFBVyxtQkFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQjs7QUFFMUIsT0FBSSxLQUFLLE1BQU0sYUFBTixDQUFvQixLQUFwQixDQUEwQixTQUFuQzs7QUFFQSxVQUFPLEdBQUcsQ0FBSCxJQUFRLEdBQUcsQ0FBSCxDQUFSLEdBQWdCLEdBQUcsSUFBSSxDQUFQLENBQXZCO0FBRUEsR0FkSzs7QUFnQk4sYUFBWSxZQUFZOztBQUV2QixPQUFJLElBQUksQ0FBQyxDQUFELENBQVI7O0FBRUEsVUFBTyxVQUFVLENBQVYsRUFBYTs7QUFFbkIsUUFBSSxJQUFJLENBQVI7O0FBRUEsUUFBSSxFQUFFLENBQUYsQ0FBSixFQUFVO0FBQ1QsWUFBTyxFQUFFLENBQUYsQ0FBUDtBQUNBOztBQUVELFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxDQUFwQixFQUF1QixHQUF2QixFQUE0QjtBQUMzQixVQUFLLENBQUw7QUFDQTs7QUFFRCxNQUFFLENBQUYsSUFBTyxDQUFQO0FBQ0EsV0FBTyxDQUFQO0FBRUEsSUFmRDtBQWlCQSxHQXJCVSxFQWhCTDs7QUF1Q04sY0FBWSxvQkFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2Qjs7QUFFeEMsT0FBSSxLQUFLLENBQUMsS0FBSyxFQUFOLElBQVksR0FBckI7QUFDQSxPQUFJLEtBQUssQ0FBQyxLQUFLLEVBQU4sSUFBWSxHQUFyQjtBQUNBLE9BQUksS0FBSyxJQUFJLENBQWI7QUFDQSxPQUFJLEtBQUssSUFBSSxFQUFiOztBQUVBLFVBQU8sQ0FBQyxJQUFJLEVBQUosR0FBUyxJQUFJLEVBQWIsR0FBa0IsRUFBbEIsR0FBdUIsRUFBeEIsSUFBOEIsRUFBOUIsR0FBbUMsQ0FBQyxDQUFFLENBQUYsR0FBTSxFQUFOLEdBQVcsSUFBSSxFQUFmLEdBQW9CLElBQUksRUFBeEIsR0FBNkIsRUFBOUIsSUFBb0MsRUFBdkUsR0FBNEUsS0FBSyxDQUFqRixHQUFxRixFQUE1RjtBQUVBOztBQWhESzs7QUFuRWMsQ0FBdEI7O0FBeUhBO0FBQ0EsQ0FBQyxVQUFVLElBQVYsRUFBZ0I7O0FBRWhCLEtBQUksT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU8sR0FBM0MsRUFBZ0Q7O0FBRS9DO0FBQ0EsU0FBTyxFQUFQLEVBQVcsWUFBWTtBQUN0QixVQUFPLEtBQVA7QUFDQSxHQUZEO0FBSUEsRUFQRCxNQU9PLElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW1CLFFBQXhELEVBQWtFOztBQUV4RTtBQUNBLFNBQU8sT0FBUCxHQUFpQixLQUFqQjtBQUVBLEVBTE0sTUFLQSxJQUFJLFNBQVMsU0FBYixFQUF3Qjs7QUFFOUI7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFiO0FBRUE7QUFFRCxDQXJCRDs7Ozs7QUNwMkJBLElBQUksTUFBTSxRQUFRLGNBQVIsQ0FBVjtBQUNBLFFBQVEsR0FBUixDQUFZLE1BQVosRUFBbUIsR0FBbkI7QUFDQSxJQUFJLFlBQVksUUFBUSxxQkFBUixDQUFoQjs7QUFFQSxJQUFJLE1BQUo7QUFDQSxJQUFJLE1BQU8sWUFBVTs7QUFFakIsYUFBUyxNQUFULEdBQWlCO0FBQ2IsZ0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSDtBQUNELGFBQVMsSUFBVCxHQUFlO0FBQ1gsWUFBSSxTQUFTLElBQUksSUFBSixDQUFTLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFULENBQWI7QUFDQSxZQUFJLGFBQUosQ0FBa0IsU0FBbEI7QUFDQSxZQUFJLFNBQUosQ0FBYyxVQUFVLEdBQVYsR0FBZDtBQUNBLFlBQUksT0FBSixDQUFZLFFBQVo7QUFDSDs7QUFFRDtBQUNILENBYlUsRUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgVFdFRU4gPSByZXF1aXJlKCcuL3ZlbmRvci9Ud2Vlbi5qcycpO1xuXG4vLyBhbmltYXRlcyBwcm9wZXJ0aWVzIG9mIDxvYmo+IHRvIDx0bz4gb3ZlciA8ZHVyYXRpb24+IGFuZCBjYWxscyA8b25Db21wbGV0ZT4gb24gY29tcGxldGUuXG4vLyBkdXJhdGlvbiBkZWZhdWx0cyB0byAxNDBtcywgb25Db21wbGV0ZSBpcyBvcHRpb25hbFxuZnVuY3Rpb24gYW5pbWF0ZShvYmosIHRvLCBkdXJhdGlvbiwgb25Db21wbGV0ZSl7XG4gICAgZHVyYXRpb24gPSAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogMTQwKTsgLy8gMTQwbXMgPSA4LjQgZnJhbWVzIEAgNjBmcHNcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IHt9O1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gdG8pe1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgc3RhcnRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICB2YXIgaWR4LCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oc3RhcnQpLnRvKHRvLCBkdXJhdGlvbilcbiAgICAub25VcGRhdGUoZnVuY3Rpb24gdHdlZW5VcGRhdGUoKXtcbiAgICAgICAgZm9yIChpZHg9MDsgaWR4IDwgbGVuOyBpZHgrKyl7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2lkeF07XG4gICAgICAgICAgICBvYmpba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gdHdlZW5Db21wbGV0ZSgpe1xuICAgICAgICBpZiAob25Db21wbGV0ZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxuICAgIC5zdGFydCgpO1xuICAgIHJldHVybiB0d2Vlbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmltYXRlO1xuIiwiLy8gQ29tcG9zZSBhIEN1cnZlIGZ1bmN0aW9uIG91dCBvZiBhIHN0YXJ0LCBlbmQsIGFuZCBzdHlsZSBwcmVmZXJlbmNlLCB3aGVyZSBhIGN1cnZlIGlzIGEgZnVuY3Rpb24gd2hpY2ggYWNjZXB0cyBgdGAgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbi8vIGN1cnZlKDApID0gdGhlIGZpcnN0IHt4OiB4LHk6IHl9IHBvc2l0aW9uIG9mIHRoZSBzdGFydCBvZiB0aGUgY3VydmUsIGFuZCBjdXJ2ZSgxKSBpcyB0aGUgZW5kIFxuXG5cbi8vIHJldHVybnMgYSB7eDpudW1iZXIseTpudW1iZXJ9IHdoZXJlIHgseSA9IGRpc3RhbmNlIHQgYWxvbmcgYmV6aWVyIGN1cnZlIGRlZmluZWQgYnkgcDAsMSwyLDNcbi8vIHQgOiBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSB3aGljaCByZXByZXNlbnRzIHBvaW50IG9uIHRoZSBiZXppZXIgbGluZSAoLjUgaXMgNTAlIGFsb25nIHRoZSBjdXJ2ZSlcbi8vIHBvaW50cyBhcmUgeyB4IDogbnVtYmVyLCB5IDogbnVtYmVyIH0gb2JqZWN0c1xuLy8gcDAgaXMgeCx5IHRvIHN0YXJ0IGZyb21cbi8vIHAxIGlzIHRoZSBjb250cm9sIHBvaW50IGF0dGFjaGVkIHRvIHAwXG4vLyBwMiBpcyB0aGUgY29udHJvbCBwb2ludCBhdHRhY2hlZCB0byBwM1xuLy8gcHIgaXMgdGhlIHgseSB0byBlbmQgYXRcbmZ1bmN0aW9uIGJlemllckN1cnZlKHQsIHAwLHAxLHAyLHAzKXtcbiAgICB2YXIgY1ggPSAzICogKHAxLnggLSBwMC54KSxcbiAgICBiWCA9IDMgKiAocDIueCAtIHAxLngpIC0gY1gsXG4gICAgYVggPSBwMy54IC0gcDAueCAtIGNYIC0gYlg7XG5cbiAgICB2YXIgY1kgPSAzICogKHAxLnkgLSBwMC55KSxcbiAgICBiWSA9IDMgKiAocDIueSAtIHAxLnkpIC0gY1ksXG4gICAgYVkgPSBwMy55IC0gcDAueSAtIGNZIC0gYlk7XG5cbiAgICB2YXIgeCA9IChhWCAqIE1hdGgucG93KHQsIDMpKSArIChiWCAqIE1hdGgucG93KHQsIDIpKSArIChjWCAqIHQpICsgcDAueDtcbiAgICB2YXIgeSA9IChhWSAqIE1hdGgucG93KHQsIDMpKSArIChiWSAqIE1hdGgucG93KHQsIDIpKSArIChjWSAqIHQpICsgcDAueTtcblxuICAgIHJldHVybiB7eDogeCwgeTogeX07XG59XG5cbi8vIGNhbGN1bGF0ZXMgYSBjdXJ2ZSBhbmQgc3RvcmVzIGl0IGluIGEgaGVscGVyIGZ1bmN0aW9uIGZvciB2YWx1ZSByZXRyaXZhbFxuZnVuY3Rpb24gY3JlYXRlQ3VydmUoc3RhcnQsIGVuZCwgc3R5bGUpe1xuICAgIHN0eWxlID0gKHN0eWxlICE9PSB1bmRlZmluZWQgPyBzdHlsZSA6IFwiYmV6aWVyXCIpO1xuXG4gICAgaWYgKHN0eWxlID09PSBcImJlemllclwiKXtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBjcmVhdGVDdXJ2ZVNlZ21lbnQoc3RhcnQsIGVuZCwgXCJkZWZhdWx0XCIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VydmUodCl7XG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudCh0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3R5bGUgPT09IFwiZG91YmxlXCIpe1xuICAgICAgICB2YXIgaGFsZlBvaW50ID0gcG9pbnRCZXR3ZWVuKHN0YXJ0LGVuZCwwLjUpO1xuICAgICAgICB2YXIgc2VnbWVudDEgPSBjcmVhdGVDdXJ2ZVNlZ21lbnQoc3RhcnQsIGhhbGZQb2ludCwgXCJkZWZhdWx0XCIpO1xuICAgICAgICB2YXIgc2VnbWVudDIgPSBjcmVhdGVDdXJ2ZVNlZ21lbnQoaGFsZlBvaW50LCBlbmQsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnZlKHQpe1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIGRpc3RUcmF2ZWxlZCwgZHVyYXRpb247XG4gICAgICAgICAgICBpZiAodCA8PSAwLjUpe1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50MTtcbiAgICAgICAgICAgICAgICBkaXN0VHJhdmVsZWQgPSAwO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnQyO1xuICAgICAgICAgICAgICAgIGRpc3RUcmF2ZWxlZCA9IDAuNTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWdtZW50KCh0IC0gZGlzdFRyYXZlbGVkKSAqICgxIC8gZHVyYXRpb24pKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vIGdpdmVuIHR3byB7IHgseSB9IHBvaW50cywgZmluZCBhIHBvaW50IGJldHdlZW4gdGhlbSB3aGljaCBpcyA8cGVyY2VudGFnZT4gZGlzdGFuY2UgYmV0d2VlbiB0aGVtLlxuLy8gZXgsIHBlcmNlbnRhZ2Ugb2YgLjUgd2lsbCByZXR1cm4gdGhlIG1pZHBvaW50LiB0aGUgbG93ZXIgdGhlIG51bWJlciwgdGhlIGNsb3NlciB0byBzdGFydFxuZnVuY3Rpb24gcG9pbnRCZXR3ZWVuKHN0YXJ0LGVuZCxwZXJjZW50YWdlKXtcbiAgICB2YXIgeCA9IHN0YXJ0LnggKyBwZXJjZW50YWdlICogKGVuZC54IC0gc3RhcnQueCk7XG4gICAgdmFyIHkgPSBzdGFydC55ICsgcGVyY2VudGFnZSAqIChlbmQueSAtIHN0YXJ0LnkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHggOiB4LFxuICAgICAgICB5IDogeVxuICAgIH07XG59XG5cbi8vIGRpc3RhbmNlIGJldHdlZW4gdHdvIHt4LHl9IHBvaW50c1xuZnVuY3Rpb24gZGlzdGFuY2UocDEscDIpe1xuICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSApO1xufVxuXG5mdW5jdGlvbiBmaW5kTGluZShwMSxwMil7XG4gICAgdmFyIHNsb3BlLCB5SW50ZXJjZXB0O1xuICAgIHNsb3BlID0gKHAyLnkgLSBwMS55KSAvIChwMi54IC0gcDEueCk7XG4gICAgeUludGVyY2VwdCA9IHAxLnkgLSAoc2xvcGUgKiBwMS54KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG0gOiBzbG9wZSxcbiAgICAgICAgYiA6IHlJbnRlcmNlcHQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGVycGVuZGljdWxhckxpbmUobGluZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbSA6IC0xIC8gbGluZS5tLFxuICAgICAgICBiIDogbGluZS5iXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZmluZFlPbkxpbmUoeCxsaW5lKXtcbiAgICByZXR1cm4gbGluZS5tICogeCArIGxpbmUuYjtcbn1cblxuZnVuY3Rpb24gZmluZFhPbkxpbmUoeSxsaW5lKXtcbiAgICByZXR1cm4geSAvIGxpbmUubSAtIGxpbmUuYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VydmVTZWdtZW50KHN0YXJ0LCBlbmQsIHN0eWxlKXtcbiAgICB2YXIgc3RhcnRDb250cm9sID0gcG9pbnRCZXR3ZWVuKHN0YXJ0LGVuZCwwLjMzKTtcbiAgICB2YXIgZW5kQ29udHJvbCA9IHBvaW50QmV0d2VlbihzdGFydCxlbmQsMC42Nik7XG4gICAgdmFyIGRpc3QgPSBkaXN0YW5jZShzdGFydCxlbmQpO1xuXG4gICAgaWYgKHN0eWxlID09PSBcImRlZmF1bHRcIil7XG4gICAgICAgIGlmIChzdGFydC55ID4gZW5kLnkpe1xuICAgICAgICAgICAgc3RhcnRDb250cm9sLnkgLT0gZGlzdC80O1xuICAgICAgICAgICAgZW5kQ29udHJvbC55ICs9IGRpc3QvNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0Q29udHJvbC55ICs9IGRpc3QvNDtcbiAgICAgICAgICAgIGVuZENvbnRyb2wueSAtPSBkaXN0LzQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0LnggPiBlbmQueCkgeyAvLyBlYXN0Ym91bmRcbiAgICAgICAgICAgIHN0YXJ0Q29udHJvbC54ICs9IGRpc3QvNDtcbiAgICAgICAgICAgIGVuZENvbnRyb2wueCAtPSBkaXN0LzQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydENvbnRyb2wueCAtPSBkaXN0LzQ7XG4gICAgICAgICAgICBlbmRDb250cm9sLnggKz0gZGlzdC80O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNlZ21lbnQodCl7XG4gICAgICAgIHJldHVybiBiZXppZXJDdXJ2ZSh0LHN0YXJ0LHN0YXJ0Q29udHJvbCxlbmRDb250cm9sLGVuZCk7XG4gICAgfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjcmVhdGVDdXJ2ZSA6IGNyZWF0ZUN1cnZlXG59O1xuIiwidmFyIEJlemllckhlbHBlciA9IHJlcXVpcmUoJy4vYmV6aWVySGVscGVyLmpzJyk7XG52YXIgVFdFRU4gPSByZXF1aXJlKCcuL3ZlbmRvci9Ud2Vlbi5qcycpO1xudmFyIGFuaW1hdGUgPSByZXF1aXJlKCcuL2FuaW1hdGlvbkhlbHBlci5qcycpO1xuXG4vLyBzdGFuZGFyZCBtb2R1bGVzIGZvciBJbXAgYW5kIGhlbHBlciBmdW5jdGlvbnMgZm9yIGFsbCBtb2R1bGVzXG4vLyBzb21lIG1vZHVsZSBuYW1lcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIHByZXZlbnQgY29sbGlzaW9uLCBidXQgd2lsbCBiZSBub3JtYWwgb24gZXhwb3J0XG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBJbXBNb2R1bGVzKEltcCl7XG4gICAgdmFyIGltcCA9IEltcC5jb250ZXh0KCk7XG4gICAgLy8gYSBmcmFtZSBpcyBhbnl0aGluZyB3aXRoIGFuIHgsIHksIHdpZHRoLCBhbmQgaGVpZ2h0LlxuICAgIC8vIHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIG1vdXNlIGlzIG92ZXIgdGhlIHJlY3QgdW5kZXIgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cbiAgICBmdW5jdGlvbiBtb3VzZU92ZXJGcmFtZShmcmFtZSl7XG4gICAgICAgIHZhciB4SW50ZXJzZWN0ID0gZnJhbWUueCArIGltcC5vZmZzZXQueCA8PSBpbXAubW91c2UueCAmJiBmcmFtZS54ICsgZnJhbWUud2lkdGggKyBpbXAub2Zmc2V0LnggPj0gaW1wLm1vdXNlLng7XG4gICAgICAgIHZhciB5SW50ZXJzZWN0ID0gZnJhbWUueSArIGltcC5vZmZzZXQueSA8PSBpbXAubW91c2UueSAmJiBmcmFtZS55ICsgZnJhbWUuaGVpZ2h0ICsgaW1wLm9mZnNldC55ID49IGltcC5tb3VzZS55O1xuICAgICAgICByZXR1cm4gIHhJbnRlcnNlY3QgJiYgeUludGVyc2VjdDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIG5vdCB0YWtlIGN1cnJlbnQgdHJhbnNsYXRpb24gaW50byBhY2NvdW50XG4gICAgZnVuY3Rpb24gcG9pbnRJbkNpcmNsZSh4LHksY2lyY2xlQ2VudGVyWCxjaXJjbGVDZW50ZXJZLCByYWRpdXMpe1xuICAgICAgICB2YXIgZGlzdCA9IE1hdGguc3FydCggTWF0aC5wb3coY2lyY2xlQ2VudGVyWC14LCAyKSArIE1hdGgucG93KGNpcmNsZUNlbnRlclkteSwgMikgKTtcbiAgICAgICAgcmV0dXJuIGRpc3QgPD0gcmFkaXVzO1xuICAgIH1cblxuICAgIC8vLy8vIExheWVyXG4gICAgLy8gTGF5ZXJzIGNvbXBvc2UgZ3JvdXBzIG9mIG1vZHVsZXMgdG9nZXRoZXIuIFRoZXkgei1pbmRleCBhbGwgb2YgdGhlaXIgY2hpbGRyZW4gaW1wbGljdGx5IChsb3dlciBwb3MgaW4gY2hpbGRyZW4gYXJyYXksIGxvd2VyIHopXG4gICAgZnVuY3Rpb24gX0xheWVyKGNvbmZpZ3Mpe1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGltcC5leHRlbmQodGhpcyxjb25maWdzKTtcbiAgICB9XG4gICAgX0xheWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IF9MYXllcjtcbiAgICBfTGF5ZXIucHJvdG90eXBlLnR5cGUgPSBcIkxheWVyXCI7XG4gICAgX0xheWVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKXtcbiAgICAgICAgaW1wLnNhdmUoKTtcbiAgICAgICAgaW1wLnRyYW5zbGF0ZSh0aGlzLngsdGhpcy55KTtcbiAgICAgICAgaW1wLnNjYWxlKHRoaXMuc2NhbGUsdGhpcy5zY2FsZSk7XG4gICAgICAgIGZvciAodmFyIGlkeD10aGlzLmNoaWxkcmVuLmxlbmd0aC0xLCBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaWR4ID49IDA7IGlkeC0tKXtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baWR4XS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpbXAucmVzdG9yZSgpO1xuICAgIH07XG4gICAgX0xheWVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpbXAudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpO1xuICAgICAgICBpbXAuc2NhbGUodGhpcy5zY2FsZSx0aGlzLnNjYWxlKTtcbiAgICAgICAgaW1wLmdsb2JhbEFscGhhICo9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgZm9yICh2YXIgaWR4PTAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpZHggPCBsZW47IGlkeCsrKXtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baWR4XS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcbiAgICB9O1xuXG4gICAgLy8vLy9cbiAgICBmdW5jdGlvbiBfSW1hZ2UoY29uZmlncyl7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSBmYWxzZTsgLy8gaWYgbm90IHNldCwgZGVmYXVsdHMgdG8gZnVsbCBzaXplXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2FtcGxlWCA9IDA7XG4gICAgICAgIHRoaXMuc2FtcGxlWSA9IDA7XG4gICAgICAgIHRoaXMuc2FtcGxlV2lkdGggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zYW1wbGVIZWlnaHQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNhbXBsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3JjID0gXCJcIjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkRmFpbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV0cnlDb3VudCA9IDA7XG5cbiAgICAgICAgaW1wLmV4dGVuZCh0cnVlLHRoaXMsY29uZmlncyk7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgfVxuICAgIF9JbWFnZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBfSW1hZ2U7XG4gICAgX0ltYWdlLnByb3RvdHlwZS50eXBlID0gXCJJbWFnZVwiO1xuICAgIF9JbWFnZS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHNlbGYub25FcnJvcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuc3JjO1xuICAgIH07XG4gICAgX0ltYWdlLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHRoaXMucmV0cnlDb3VudCsrIDwgNSl7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkRmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX0ltYWdlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiBvbkxvYWQoKXtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2Uud2lkdGggKyB0aGlzLmltYWdlLmhlaWdodCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLndpZHRoID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlV2lkdGggIT09IGZhbHNlIHx8IHRoaXMuc2FtcGxlSGVpZ2h0ICE9PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlICYmIHRoaXMuc2FtcGxlV2lkdGggPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlV2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNhbXBsZSAmJiB0aGlzLnNhbXBsZUhlaWdodCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5zYW1wbGVIZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX0ltYWdlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKXt9OyAvLyBoZXJlIGlzIHdoZXJlIHdlJ2QgaW5jcmVtZW50IHRoZSBhbmltYXRlZCBnaWYgZnJhbWUsIGJ1dCB3ZSBkb250IG5lZWQgdG8gZG8gdGhhdCwgc28sIHllYWhcbiAgICBfSW1hZ2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgIGltcC5zYXZlKCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCl7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgLy8gc3RyZXRjaHlcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHNhbXBsZVgsIHNhbXBsZVksIHNhbXBsZVdpZHRoLCBzYW1wbGVIZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpOyAvLyBzYW1wbGUgYSBzZWN0aW9uIG9mIHRoZSBpbWFnZSwgdGhlbiBkcmF3IHRoYXRcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5zYW1wbGUpe1xuICAgICAgICAgICAgICAgIGltcC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlWCx0aGlzLnNhbXBsZVksdGhpcy5zYW1wbGVXaWR0aCx0aGlzLnNhbXBsZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LHRoaXMueSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMueCx0aGlzLnksdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGggIT09IGZhbHNlID8gdGhpcy53aWR0aCA6IDI1O1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0ICE9PSBmYWxzZSA/IHRoaXMuaGVpZ2h0IDogMjU7XG5cbiAgICAgICAgICAgIGltcC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGltcC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG4gICAgICAgICAgICBpbXAubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGltcC5tb3ZlVG8odGhpcy54LHRoaXMueSk7XG4gICAgICAgICAgICBpbXAubGluZVRvKHRoaXMueCt3aWR0aCx0aGlzLnkpO1xuICAgICAgICAgICAgaW1wLmxpbmVUbyh0aGlzLngrd2lkdGgsdGhpcy55K2hlaWdodCk7XG4gICAgICAgICAgICBpbXAubGluZVRvKHRoaXMueCx0aGlzLnkraGVpZ2h0KTtcbiAgICAgICAgICAgIGltcC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGltcC5zdHJva2UoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBib3JkZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRGYWlsZWQpIHtcbiAgICAgICAgICAgICAgICBpbXAuc3Ryb2tlU3R5bGUgPSBcIiNmOTVhNmNcIjtcbiAgICAgICAgICAgICAgICBpbXAuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaW1wLm1vdmVUbyh0aGlzLnggKyB3aWR0aC8yIC0gNSwgdGhpcy55ICsgaGVpZ2h0LzIgLSA1KTtcbiAgICAgICAgICAgICAgICBpbXAubGluZVRvKHRoaXMueCArIHdpZHRoLzIgKyA1LCB0aGlzLnkgKyBoZWlnaHQvMiArIDUpO1xuICAgICAgICAgICAgICAgIGltcC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGltcC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpbXAubW92ZVRvKHRoaXMueCArIHdpZHRoLzIgLSA1LCB0aGlzLnkgKyBoZWlnaHQvMiArIDUpO1xuICAgICAgICAgICAgICAgIGltcC5saW5lVG8odGhpcy54ICsgd2lkdGgvMiArIDUsIHRoaXMueSArIGhlaWdodC8yIC0gNSk7XG4gICAgICAgICAgICAgICAgaW1wLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBsb2FkZXJcbiAgICAgICAgICAgICAgICB2YXIgZ3JhZGllbnQgPSBpbXAuY3JlYXRlTGluZWFyR3JhZGllbnQodGhpcy54LHRoaXMueSx0aGlzLngrd2lkdGgsdGhpcy55K2hlaWdodCk7XG4gICAgICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsXCIjODg4XCIpO1xuICAgICAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLFwid2hpdGVcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGVyZm9ybWFuY2Uubm93KCkgJSAxMDAwIC8gMTAwMCAqIDM2MCA7IC8vIDEwMDAgbWlsbGlzIHRvIGEgZnVsbCByb3RhdGlvblxuICAgICAgICAgICAgICAgIHZhciBzdGFydEFuZ2xlID0gMCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgZW5kQW5nbGUgPSA3NSArIG9mZnNldDsgLy8gNzUgZGVncmVlIGxlbmd0aFxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKj0gTWF0aC5QSS8xODA7XG4gICAgICAgICAgICAgICAgZW5kQW5nbGUgKj0gTWF0aC5QSS8xODA7XG4gICAgICAgICAgICAgICAgaW1wLmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgICAgICAgaW1wLnN0cm9rZVN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgICAgICAgICAgaW1wLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGltcC5hcmModGhpcy54ICsgd2lkdGgvMiwgdGhpcy55ICsgaGVpZ2h0LzIsIDEwLCBzdGFydEFuZ2xlLGVuZEFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaW1wLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGltcC5yZXN0b3JlKCk7XG4gICAgfTtcblxuICAgIC8vLy8vXG4gICAgLy8gTGFiZWxcbiAgICBmdW5jdGlvbiBfTGFiZWwoY29uZmlncyl7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG5cbiAgICAgICAgdGhpcy5mb250RmFjZSA9IFwiSGVsdmV0aWNhXCI7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAxNDtcbiAgICAgICAgdGhpcy50ZXh0ID0gXCJMYWJlbFwiO1xuXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gXCJibGFja1wiO1xuXG4gICAgICAgIC8vIFwibGVmdFwiIHx8IFwicmlnaHRcIiB8fCBcImNlbnRlclwiIHx8IFwic3RhcnRcIiB8fCBcImVuZFwiXG4gICAgICAgIHRoaXMudGV4dEFsaWduID0gXCJsZWZ0XCI7XG5cbiAgICAgICAgLy9cInRvcFwiIHx8IFwiaGFuZ2luZ1wiIHx8IFwibWlkZGxlXCIgfHwgXCJhbHBoYWJldGljXCIgfHwgXCJpZGVvZ3JhcGhpY1wiIHx8IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblxuICAgICAgICBpbXAuZXh0ZW5kKHRoaXMsY29uZmlncyk7XG4gICAgfVxuICAgIF9MYWJlbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBfTGFiZWw7XG4gICAgX0xhYmVsLnByb3RvdHlwZS50eXBlID0gXCJMYWJlbFwiO1xuICAgIF9MYWJlbC5wcm90b3R5cGUubWVhc3VyZVdpZHRoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaW1wLnNhdmUoKTtcbiAgICAgICAgaW1wLnNldEZvbnQodGhpcy5mb250RmFjZSwgdGhpcy5mb250U2l6ZSk7XG4gICAgICAgIHZhciB3aWR0aCA9IGltcC5tZWFzdXJlVGV4dCh0aGlzLnRleHQpLndpZHRoO1xuICAgICAgICBpbXAucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfTtcbiAgICBfTGFiZWwucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpe307XG4gICAgX0xhYmVsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpbXAuc2V0Rm9udCh0aGlzLmZvbnRGYWNlLCB0aGlzLmZvbnRTaXplKTtcbiAgICAgICAgaW1wLnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xuICAgICAgICBpbXAudGV4dEJhc2VsaW5lID0gdGhpcy50ZXh0QmFzZWxpbmU7XG4gICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgaW1wLmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBpbXAucmVzdG9yZSgpO1xuICAgIH07XG5cbiAgICAvLyBCdXR0b25cbiAgICBmdW5jdGlvbiBfQnV0dG9uKGNvbmZpZ3Mpe1xuICAgICAgICAvLyBkZWZhdWx0c1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gNjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjg7XG5cbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgdGhpcy5ob3ZlckNvbG9yID0gXCIjMGZmXCI7XG4gICAgICAgIHRoaXMuZG93bkNvbG9yID0gXCIjZmYwXCI7XG5cbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBcIiNmZmZcIjtcblxuICAgICAgICB0aGlzLmZvbnRGYWNlID0gXCJIZWx2ZXRpY2FcIjtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDMwO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJCdXR0b25cIjtcbiAgICAgICAgdGhpcy50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgICAgIHRoaXMuY2xpY2sgPSBmdW5jdGlvbigpe307XG5cbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICBpbXAuZXh0ZW5kKHRoaXMsY29uZmlncyk7XG4gICAgfVxuICAgIF9CdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gX0J1dHRvbjtcbiAgICBfQnV0dG9uLnByb3RvdHlwZS50eXBlID0gJ0J1dHRvbic7XG4gICAgX0J1dHRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgICAgIGlmIChpbXAubW91c2VDYXB0dXJlID09PSB0cnVlKXsgLy8gc29tZW9uZSB3aXRoIGEgaGlnaGVyIFogaW5kZXggaXMgYWxyZWFkeSBob3ZlcmVkLFxuICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0hvdmVyZWQgPSBtb3VzZU92ZXJGcmFtZSh0aGlzKTtcbiAgICAgICAgaWYgKG5ld0hvdmVyZWQgIT09IHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIC8vIGhvdmVyIHN0YXRlIGNoYW5nZVxuICAgICAgICAgICAgaWYgKG5ld0hvdmVyZWQgPT09IGZhbHNlKSB7IC8vIGRpZCBleGl0IGhvdmVyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcC5hZGRNb3VzZVBvaW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gbmV3SG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpe1xuICAgICAgICAgICAgaW1wLm1vdXNlQ2FwdHVyZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmV3RG93biA9IGltcC5tb3VzZS5kb3duO1xuICAgICAgICAgICAgaWYgKG5ld0Rvd24gIT09IHRoaXMuaXNEb3duKXtcbiAgICAgICAgICAgICAgICAvL2Rvd24gc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Rvd24gPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlkIGV4aXQgZG93biBzdGF0ZSAoY2xpY2tlZCEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBuZXdEb3duO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBfQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpZiAodGhpcy5pc0Rvd24pe1xuICAgICAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMuZG93bkNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLmhvdmVyQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbXAuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpbXAuZmlsbFJlY3QodGhpcy54LHRoaXMueSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgaW1wLnNldEZvbnQodGhpcy5mb250RmFjZSwgdGhpcy5mb250U2l6ZSk7XG4gICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgaW1wLnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xuICAgICAgICBpbXAudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgaW1wLmZpbGxUZXh0KHRoaXMudGl0bGUsIHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMik7XG4gICAgICAgIGltcC5yZXN0b3JlKCk7XG4gICAgfTtcblxuXG4gICAgLy8vLy9cbiAgICBmdW5jdGlvbiBfVGV4dEFyZWEoY29uZmlncyl7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IDEuNDtcbiAgICAgICAgdGhpcy50ZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLmZvbnRGYWNlID0gXCJ0ZXhneXJlYWR2ZW50b3JyZWd1bGFyXCI7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAzMDtcblxuICAgICAgICB0aGlzLnRleHRDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICB0aGlzLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuXG4gICAgICAgIGltcC5leHRlbmQodGhpcyxjb25maWdzKTtcbiAgICB9XG4gICAgX1RleHRBcmVhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IF9UZXh0QXJlYTtcbiAgICBfVGV4dEFyZWEucHJvdG90eXBlLnR5cGUgPSBcIlRleHRBcmVhXCI7XG4gICAgX1RleHRBcmVhLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpe307XG4gICAgX1RleHRBcmVhLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaW1wLnNhdmUoKTtcbiAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMudGV4dENvbG9yO1xuICAgICAgICBpbXAudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgICAgaW1wLnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xuICAgICAgICBpbXAuZmlsbFN0eWxlID0gdGhpcy50ZXh0Q29sb3I7XG4gICAgICAgIGltcC5zZXRGb250KHRoaXMuZm9udEZhY2UsIHRoaXMuZm9udFNpemUpO1xuXG4gICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gdGhpcy5mb250U2l6ZSAqIHRoaXMubGluZUhlaWdodDtcblxuICAgICAgICB2YXIgbGluZXMgPSB0aGlzLnRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciB3b3JkcyA9IGxpbmVzW2ldLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgbGluZSA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgICAgICAgICAgIHZhciBtZXRyaWNzID0gaW1wLm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGVzdFdpZHRoID4gdGhpcy53aWR0aCAmJiBuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpbXAuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1wLmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGltcC5yZXN0b3JlKCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBTaGFkb3dCdXR0b24oY29uZmlncyl7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMjQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzA7XG5cbiAgICAgICAgdGhpcy5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuNSlcIjtcblxuICAgICAgICB0aGlzLmhvdmVyQmxlbmQgPSAwO1xuICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbDtcblxuICAgICAgICB0aGlzLnN0cm9rZVNoYWRvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IFwiI2YwMFwiO1xuICAgICAgICB0aGlzLmhvdmVyQ29sb3IgPSBcIiMwZmZcIjtcbiAgICAgICAgdGhpcy5kb3duQ29sb3IgPSBcIiNmZjBcIjtcblxuICAgICAgICB0aGlzLnRleHRDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMuZm9udEZhY2UgPSBcIkhlbHZldGljYVwiO1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gMTQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkJ1dHRvblwiO1xuICAgICAgICB0aGlzLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICAgICAgdGhpcy5jbGljayA9IGZ1bmN0aW9uKCl7fTtcblxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGltcC5leHRlbmQodGhpcyxjb25maWdzKTtcbiAgICB9XG4gICAgU2hhZG93QnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNoYWRvd0J1dHRvbjtcbiAgICBTaGFkb3dCdXR0b24ucHJvdG90eXBlLnR5cGUgPSBcIlNoYWRvd0J1dHRvblwiO1xuICAgIFNoYWRvd0J1dHRvbi5wcm90b3R5cGUuY29udGFpbnNQb2ludCA9IGZ1bmN0aW9uIGNvbnRhaW5zUG9pbnQoeCx5KXtcbiAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIG9mZnNldFggPSB0aGlzLnggKyBpbXAub2Zmc2V0Lng7XG4gICAgICAgIHZhciBvZmZzZXRZID0gdGhpcy55ICsgaW1wLm9mZnNldC55O1xuXG4gICAgICAgIC8vIGl0J3Mgbm90IHdpdGhpbiB0aGUgcmlnaHQgeSByYW5nZVxuICAgICAgICBpZiAoeSA8IG9mZnNldFkgfHwgeSA+IG9mZnNldFkgKyB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCA8IG9mZnNldFggKyByYWRpdXMpe1xuICAgICAgICAgICAgaWYgKHggPj0gb2Zmc2V0WCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50SW5DaXJjbGUoeCwgeSwgb2Zmc2V0WCArIHJhZGl1cywgb2Zmc2V0WSArIHJhZGl1cywgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA+IG9mZnNldFggKyB0aGlzLndpZHRoIC0gcmFkaXVzKXtcbiAgICAgICAgICAgIGlmICh4IDw9IG9mZnNldFggKyB0aGlzLndpZHRoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRJbkNpcmNsZSh4LCB5LCBvZmZzZXRYICsgdGhpcy53aWR0aCAtIHJhZGl1cywgb2Zmc2V0WSArIHJhZGl1cyxyYWRpdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBpdCBtdXN0IGJlIGluIHRoZSBjZW50ZXIgcmVjdFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNoYWRvd0J1dHRvbi5wcm90b3R5cGUudHdlZW5CbGVuZCA9IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgIGlmICh0aGlzLmhvdmVyQmxlbmQgPT09IHZhbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50d2VlbiA9IGFuaW1hdGUodGhpcyx7XG4gICAgICAgICAgICBob3ZlckJsZW5kIDogdmFsXG4gICAgICAgIH0sIDEzMCwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMudHdlZW4gPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNoYWRvd0J1dHRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKGltcC5tb3VzZUNhcHR1cmUgPT09IHRydWUpeyAvLyBzb21lb25lIHdpdGggYSBoaWdoZXIgWiBpbmRleCBpcyBhbHJlYWR5IGhvdmVyZWQsXG4gICAgICAgICAgICB0aGlzLmhvdmVyQmxlbmQgPSAwO1xuICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0hvdmVyZWQgPSB0aGlzLmNvbnRhaW5zUG9pbnQoaW1wLm1vdXNlLngsaW1wLm1vdXNlLnkpO1xuICAgICAgICBpZiAobmV3SG92ZXJlZCAhPT0gdGhpcy5pc0hvdmVyZWQpe1xuICAgICAgICAgICAgLy8gaG92ZXIgc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICBpZiAobmV3SG92ZXJlZCA9PT0gZmFsc2UpIHsgLy8gZGlkIGV4aXQgaG92ZXJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rvd24pe1xuICAgICAgICAgICAgICAgICAgICAvLyBkaWQgZHJhZyBvdXQsIGRvbnQgdHdlZW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlckJsZW5kID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5CbGVuZCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcC5hZGRNb3VzZVBvaW50ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuQmxlbmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IG5ld0hvdmVyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIGltcC5tb3VzZUNhcHR1cmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG5ld0Rvd24gPSBpbXAubW91c2UuZG93bjtcbiAgICAgICAgICAgIGlmIChuZXdEb3duICE9PSB0aGlzLmlzRG93bil7XG4gICAgICAgICAgICAgICAgLy9kb3duIHN0YXRlIGNoYW5nZVxuICAgICAgICAgICAgICAgIGlmIChuZXdEb3duID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZCBleGl0IGRvd24gc3RhdGUgKGNsaWNrZWQhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gbmV3RG93bjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2hhZG93QnV0dG9uLnByb3RvdHlwZS5kcmF3Um91bmRlZEJveCA9IGZ1bmN0aW9uIGRyYXdSb3VuZGVkQm94KCl7XG4gICAgICAgIHZhciByYWRpdXMgPSB0aGlzLmhlaWdodC8yO1xuICAgICAgICBpbXAuYmVnaW5QYXRoKCk7XG4gICAgICAgIGltcC5tb3ZlVG8odGhpcy54ICsgcmFkaXVzLHRoaXMueSk7XG4gICAgICAgIGltcC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCAtIHJhZGl1cywgdGhpcy55KTtcbiAgICAgICAgaW1wLmFyYyggdGhpcy54ICsgdGhpcy53aWR0aCAtIHJhZGl1cywgdGhpcy55ICsgcmFkaXVzLCByYWRpdXMsIE1hdGguUEkgKiAxLjUsIE1hdGguUEkgLyAyLCBmYWxzZSk7XG4gICAgICAgIGltcC5saW5lVG8odGhpcy54ICsgcmFkaXVzLCB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIGltcC5hcmMoIHRoaXMueCArIHJhZGl1cywgdGhpcy55ICsgcmFkaXVzLCByYWRpdXMsIE1hdGguUEkgLyAyLCBNYXRoLlBJICogMS41LCBmYWxzZSk7XG4gICAgICAgIGltcC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuICAgIFNoYWRvd0J1dHRvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGRyYXcgZG93biBzaGFkb3dcbiAgICAgICAgaW1wLnNhdmUoKTtcbiAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgICAgIGlmICghdGhpcy5pc0Rvd24pe1xuICAgICAgICAgICAgaW1wLnRyYW5zbGF0ZSgwLDMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd1JvdW5kZWRCb3goKTtcbiAgICAgICAgaW1wLmZpbGwoKTtcbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcblxuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpZiAodGhpcy5pc0Rvd24pe1xuICAgICAgICAgICAgaW1wLnRyYW5zbGF0ZSgwLDMpO1xuICAgICAgICAgICAgdGhpcy5kcmF3Um91bmRlZEJveCgpO1xuICAgICAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMuZG93bkNvbG9yO1xuICAgICAgICAgICAgaW1wLnN0cm9rZVN0eWxlID0gdGhpcy5kb3duQ29sb3I7XG4gICAgICAgICAgICBpbXAuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcmF3Um91bmRlZEJveCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJCbGVuZCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMuaG92ZXJDb2xvcjtcbiAgICAgICAgICAgICAgICBpbXAuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ob3ZlckJsZW5kID09PSAwKXtcbiAgICAgICAgICAgICAgICBpbXAuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgICAgICAgICAgaW1wLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgICAgICAgICBpbXAuZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgaW1wLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBpbXAuZ2xvYmFsQWxwaGEgKj0gdGhpcy5ob3ZlckJsZW5kO1xuICAgICAgICAgICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLmhvdmVyQ29sb3I7XG4gICAgICAgICAgICAgICAgaW1wLmZpbGwoKTtcbiAgICAgICAgICAgICAgICBpbXAucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdHJva2VTaGFkb3cpIHtcbiAgICAgICAgICAgIGltcC5zdHJva2VTdHlsZSA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgICAgICAgICBpbXAubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGltcC5zdHJva2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltcC5zZXRGb250KHRoaXMuZm9udEZhY2UsIHRoaXMuZm9udFNpemUsIHRoaXMuZm9udFdlaWdodCk7XG4gICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgaW1wLnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xuICAgICAgICBpbXAudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgaW1wLmZpbGxUZXh0KHRoaXMudGl0bGUudG9VcHBlckNhc2UoKSwgdGhpcy54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yKTtcbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGlua0J1dHRvbihjb25maWdzKXtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcblxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IFwiIzBmMFwiO1xuICAgICAgICB0aGlzLmhvdmVyQ29sb3IgPSBcIiMwZmZcIjtcbiAgICAgICAgdGhpcy5kb3duQ29sb3IgPSBcIiNmZjBcIjtcblxuICAgICAgICB0aGlzLmZvbnRGYWNlID0gXCJIZWx2ZXRpY2FcIjtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDE0O1xuICAgICAgICB0aGlzLnRleHQgPSBcIkxpbmtcIjtcbiAgICAgICAgdGhpcy50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuXG4gICAgICAgIHRoaXMuY2xpY2sgPSBmdW5jdGlvbigpe307XG5cbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICBpbXAuZXh0ZW5kKHRoaXMsY29uZmlncyk7XG5cbiAgICB9XG4gICAgTGlua0J1dHRvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMaW5rQnV0dG9uO1xuICAgIExpbmtCdXR0b24ucHJvdG90eXBlLnR5cGUgPSAnTGlua0J1dHRvbic7XG4gICAgTGlua0J1dHRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgICAgIGlmIChpbXAubW91c2VDYXB0dXJlID09PSB0cnVlKXsgLy8gc29tZW9uZSB3aXRoIGEgaGlnaGVyIFogaW5kZXggaXMgYWxyZWFkeSBob3ZlcmVkLFxuICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpbXAuc2V0Rm9udCh0aGlzLmZvbnRGYWNlLCB0aGlzLmZvbnRTaXplKTtcbiAgICAgICAgdmFyIHdpZHRoID0gaW1wLm1lYXN1cmVUZXh0KHRoaXMudGV4dCkud2lkdGg7XG4gICAgICAgIGltcC5yZXN0b3JlKCk7XG5cbiAgICAgICAgdmFyIG9mZnNldFggPSB0aGlzLng7XG4gICAgICAgIGlmICh0aGlzLnRleHRBbGlnbiA9PT0gXCJjZW50ZXJcIil7XG4gICAgICAgICAgICBvZmZzZXRYIC09IHdpZHRoLzI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0hvdmVyZWQgPSBJbXAubW91c2VPdmVyRnJhbWUoe1xuICAgICAgICAgICAgeDogb2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5mb250U2l6ZSs0IC8vIGxpbCBiaXQgb2YgcGFkZGluZyBmb3Igb2RkIGZvbnQgZmFjZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0hvdmVyZWQgIT09IHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIC8vIGhvdmVyIHN0YXRlIGNoYW5nZVxuICAgICAgICAgICAgaWYgKG5ld0hvdmVyZWQgPT09IGZhbHNlKSB7IC8vIGRpZCBleGl0IGhvdmVyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcC5hZGRNb3VzZVBvaW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gbmV3SG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpe1xuICAgICAgICAgICAgaW1wLm1vdXNlQ2FwdHVyZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmV3RG93biA9IGltcC5tb3VzZS5kb3duO1xuICAgICAgICAgICAgaWYgKG5ld0Rvd24gIT09IHRoaXMuaXNEb3duKXtcbiAgICAgICAgICAgICAgICAvL2Rvd24gc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Rvd24gPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlkIGV4aXQgZG93biBzdGF0ZSAoY2xpY2tlZCEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBuZXdEb3duO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBMaW5rQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICBpbXAuc2F2ZSgpO1xuICAgICAgICBpZiAodGhpcy5pc0Rvd24pe1xuICAgICAgICAgICAgaW1wLmZpbGxTdHlsZSA9IHRoaXMuZG93bkNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIGltcC5maWxsU3R5bGUgPSB0aGlzLmhvdmVyQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbXAuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaW1wLnNldEZvbnQodGhpcy5mb250RmFjZSwgdGhpcy5mb250U2l6ZSk7XG4gICAgICAgIGltcC50ZXh0QWxpZ24gPSB0aGlzLnRleHRBbGlnbjtcbiAgICAgICAgaW1wLnRleHRCYXNlbGluZSA9IHRoaXMudGV4dEJhc2VsaW5lO1xuICAgICAgICBpbXAuZmlsbFRleHQodGhpcy50ZXh0LHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcbiAgICB9O1xuXG4gICAgLy8vLy8gSFRNTCBMaW5rIEJ1dHRvblxuICAgIC8vIEZvciBzb21lIHNwZWNpZmljIGNhc2VzLCB5b3UgbmVlZCBhIHJlYWwgPGE+IHRhZywgYW5kIG5vdCBhIGNhbnZhcyBsaW5rIGxvb2thbGlrZS4gVGhhdHMgd2hhdCB0aGlzIGlzIGZvci5cbiAgICAvLyBJdCBpcyBhbHdheXMgYWJvdmUgdGhlIGVudGlyZSBjYW52YXNcbiAgICBmdW5jdGlvbiBIVE1MTGlua0J1dHRvbihjb25maWdzKXtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcblxuICAgICAgICB0aGlzLnRleHQgPSBcIkxpbmtcIjtcbiAgICAgICAgdGhpcy5ocmVmID0gXCJodHRwOi8vd3d3LmV4YW1wbGUuY29tXCI7XG5cbiAgICAgICAgaW1wLmV4dGVuZCh0aGlzLGNvbmZpZ3MpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlWydwb2ludGVyLWV2ZW50cyddID0gXCJhbGxcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsJ19ibGFuaycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJyx0aGlzLmhyZWYpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wLWxpbmstYm94JykuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgSFRNTExpbmtCdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTExpbmtCdXR0b247XG4gICAgSFRNTExpbmtCdXR0b24ucHJvdG90eXBlLnR5cGUgPSAnSFRNTExpbmtCdXR0b24nO1xuICAgIEhUTUxMaW5rQnV0dG9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKXt9O1xuICAgIEhUTUxMaW5rQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICB2YXIgc2NhbGUgPSB7XG4gICAgICAgICAgICB4IDogaW1wLmN1cnJlbnRTY2FsZS54IC8gaW1wLmRwaVNjYWxlLFxuICAgICAgICAgICAgeSA6IGltcC5jdXJyZW50U2NhbGUueSAvIGltcC5kcGlTY2FsZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jc3MoJ3RyYW5zZm9ybScsJ3NjYWxlKCcgKyBzY2FsZS54ICsgJywnICsgc2NhbGUueSArICcpJyk7XG4gICAgICAgIHZhciB4ID0gKHRoaXMueCAqIHNjYWxlLnggKyBpbXAub2Zmc2V0LngpIC0gKHRoaXMuZWxlbWVudC53aWR0aCgpLzIgKiAoMSAtIHNjYWxlLngpKTtcbiAgICAgICAgdmFyIHkgPSAodGhpcy55ICogc2NhbGUueSArIGltcC5vZmZzZXQueSkgLSAodGhpcy5lbGVtZW50LmhlaWdodCgpLzIgKiAoMSAtIHNjYWxlLnkpKTtcblxuICAgICAgICAvLyBBZ2FpbiwgRmlyZWZveCB0ZXh0IHNldHRpbmcgb2Zmc2V0XG4gICAgICAgIHZhciBpc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAoaXNGaXJlZm94KXtcbiAgICAgICAgICAgIHggLT0gMyAqIChzY2FsZS54KTtcbiAgICAgICAgICAgIHkgLT0gMyAqIChzY2FsZS54KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIEltZ0J1dHRvbihjb25maWdzKXtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcblxuICAgICAgICAvL3NxdWFyZSBidXR0b25zXG4gICAgICAgIHRoaXMud2lkdGggPSBmYWxzZTsgLy8gaWYgbm90IHNldCwgZGVmYXVsdHMgdG8gZnVsbCBzaXplXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gY2lyY2xlIGJ1dHRvbnNcbiAgICAgICAgdGhpcy5pc0NpcmNsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDIwMDtcbiAgICAgICAgdGhpcy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAwOyAvLyBkZWZhdWx0IG5vIHN0cm9rZVxuICAgICAgICB0aGlzLmlzQ2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluc2V0ID0gNTsgLy8gaG93IG1hbnkgcHggdG8gaW5zZXQgdGhlIGltZyBvbiBkb3duIHN0YXRlXG5cbiAgICAgICAgdGhpcy5jbGljayA9IGZ1bmN0aW9uKCl7fTtcblxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3JjID0gXCJcIjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkRmFpbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV0cnlDb3VudCA9IDA7XG5cbiAgICAgICAgaW1wLmV4dGVuZCh0cnVlLHRoaXMsY29uZmlncyk7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgfVxuICAgIEltZ0J1dHRvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWdCdXR0b247XG4gICAgSW1nQnV0dG9uLnByb3RvdHlwZS50eXBlID0gJ0ltZ0J1dHRvbic7XG4gICAgSW1nQnV0dG9uLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5zcmM7XG4gICAgfTtcbiAgICBJbWdCdXR0b24ucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5yZXRyeUNvdW50KysgPCA1KXtcbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRGYWlsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbWdCdXR0b24ucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzQ2lyY2xlKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXMqMjtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW1nQnV0dG9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKXtcbiAgICAgICAgaWYgKGltcC5tb3VzZUNhcHR1cmUgPT09IHRydWUpeyAvLyBzb21lb25lIHdpdGggYSBoaWdoZXIgWiBpbmRleCBpcyBhbHJlYWR5IGhvdmVyZWQsXG4gICAgICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdIb3ZlcmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ2lyY2xlKXtcbiAgICAgICAgICAgIG5ld0hvdmVyZWQgPSBwb2ludEluQ2lyY2xlKGltcC5tb3VzZS54LCBpbXAubW91c2UueSwgdGhpcy54ICsgdGhpcy5yYWRpdXMgKyBpbXAub2Zmc2V0LngsIHRoaXMueSArIHRoaXMucmFkaXVzICsgaW1wLm9mZnNldC55LCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdIb3ZlcmVkID0gSW1wLm1vdXNlT3ZlckZyYW1lKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0hvdmVyZWQgIT09IHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgIC8vIGhvdmVyIHN0YXRlIGNoYW5nZVxuICAgICAgICAgICAgaWYgKG5ld0hvdmVyZWQgPT09IGZhbHNlKSB7IC8vIGRpZCBleGl0IGhvdmVyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcC5hZGRNb3VzZVBvaW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gbmV3SG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpe1xuICAgICAgICAgICAgaW1wLm1vdXNlQ2FwdHVyZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmV3RG93biA9IGltcC5tb3VzZS5kb3duO1xuICAgICAgICAgICAgaWYgKG5ld0Rvd24gIT09IHRoaXMuaXNEb3duKXtcbiAgICAgICAgICAgICAgICAvL2Rvd24gc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Rvd24gPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlkIGV4aXQgZG93biBzdGF0ZSAoY2xpY2tlZCEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBuZXdEb3duO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbWdCdXR0b24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgIGltcC5zYXZlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkKXtcblxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnksIHdpZHRoID0gdGhpcy53aWR0aCwgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG93bil7XG4gICAgICAgICAgICAgICAgeCArPSB0aGlzLmluc2V0O1xuICAgICAgICAgICAgICAgIHkgKz0gdGhpcy5pbnNldDtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSB0aGlzLmluc2V0KjI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IHRoaXMuaW5zZXQqMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNIb3ZlcmVkKXtcbiAgICAgICAgICAgICAgICB4IC09IHRoaXMuaW5zZXQ7XG4gICAgICAgICAgICAgICAgeSAtPSB0aGlzLmluc2V0O1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHRoaXMuaW5zZXQqMjtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gdGhpcy5pbnNldCoyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmNsZSl7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBhIGNpcmNsZVxuICAgICAgICAgICAgICAgIGltcC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpbXAuYXJjKHggKyB3aWR0aC8yLCB5ICsgd2lkdGgvMiwgd2lkdGgvMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGltcC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIGltcC5zYXZlKCk7IC8vIHNhdmUgY29udGV4dCB0byBhdm9pZCBjbGlwcGluZyBzdHJva2VcbiAgICAgICAgICAgICAgICAvLyBjbGlwIGltYWdlIHRvIGNpcmNsZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2xpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICBpbXAuY2xpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbXAuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGltcC5yZXN0b3JlKCk7IC8vIHVuZG8gY2xpcHBpbmdcblxuICAgICAgICAgICAgICAgIC8vIGFkZCBhIHN0cm9rZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmVXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wLnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgaW1wLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpbXAuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wLmRyYXdJbWFnZSh0aGlzLmltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aCAhPT0gZmFsc2UgPyB0aGlzLndpZHRoIDogMjU7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgIT09IGZhbHNlID8gdGhpcy5oZWlnaHQgOiAyNTtcblxuICAgICAgICAgICAgaW1wLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaW1wLnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcbiAgICAgICAgICAgIGltcC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgaW1wLm1vdmVUbyh0aGlzLngsdGhpcy55KTtcbiAgICAgICAgICAgIGltcC5saW5lVG8odGhpcy54K3dpZHRoLHRoaXMueSk7XG4gICAgICAgICAgICBpbXAubGluZVRvKHRoaXMueCt3aWR0aCx0aGlzLnkraGVpZ2h0KTtcbiAgICAgICAgICAgIGltcC5saW5lVG8odGhpcy54LHRoaXMueStoZWlnaHQpO1xuICAgICAgICAgICAgaW1wLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgaW1wLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGJvcmRlclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZEZhaWxlZCkge1xuICAgICAgICAgICAgICAgIGltcC5zdHJva2VTdHlsZSA9IFwiI2Y5NWE2Y1wiO1xuICAgICAgICAgICAgICAgIGltcC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpbXAubW92ZVRvKHRoaXMueCArIHdpZHRoLzIgLSA1LCB0aGlzLnkgKyBoZWlnaHQvMiAtIDUpO1xuICAgICAgICAgICAgICAgIGltcC5saW5lVG8odGhpcy54ICsgd2lkdGgvMiArIDUsIHRoaXMueSArIGhlaWdodC8yICsgNSk7XG4gICAgICAgICAgICAgICAgaW1wLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgaW1wLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGltcC5tb3ZlVG8odGhpcy54ICsgd2lkdGgvMiAtIDUsIHRoaXMueSArIGhlaWdodC8yICsgNSk7XG4gICAgICAgICAgICAgICAgaW1wLmxpbmVUbyh0aGlzLnggKyB3aWR0aC8yICsgNSwgdGhpcy55ICsgaGVpZ2h0LzIgLSA1KTtcbiAgICAgICAgICAgICAgICBpbXAuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGxvYWRlclxuICAgICAgICAgICAgICAgIHZhciBncmFkaWVudCA9IGltcC5jcmVhdGVMaW5lYXJHcmFkaWVudCh0aGlzLngsdGhpcy55LHRoaXMueCt3aWR0aCx0aGlzLnkraGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCxcIiM4ODhcIik7XG4gICAgICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsXCJ3aGl0ZVwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwZXJmb3JtYW5jZS5ub3coKSAlIDEwMDAgLyAxMDAwICogMzYwIDsgLy8gMTAwMCBtaWxsaXMgdG8gYSBmdWxsIHJvdGF0aW9uXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0QW5nbGUgPSAwICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBlbmRBbmdsZSA9IDc1ICsgb2Zmc2V0OyAvLyA3NSBkZWdyZWUgbGVuZ3RoXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSAqPSBNYXRoLlBJLzE4MDtcbiAgICAgICAgICAgICAgICBlbmRBbmdsZSAqPSBNYXRoLlBJLzE4MDtcbiAgICAgICAgICAgICAgICBpbXAubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgICAgICBpbXAuc3Ryb2tlU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgICAgICAgICBpbXAuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaW1wLmFyYyh0aGlzLnggKyB3aWR0aC8yLCB0aGlzLnkgKyBoZWlnaHQvMiwgMTAsIHN0YXJ0QW5nbGUsZW5kQW5nbGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpbXAuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBDdXJ2ZShjb25maWcpe1xuICAgICAgICB0aGlzLmFjY3VyYWN5ID0gMC4wMTsgLy9zbWFsbGVyIHRoZSBudW1iZXIsIG1vcmUgcHJlY2lzZSB0aGUgY3VydmUsIGFsc28gbW9yZSBleHBlbnNpdmUgdG8gcmVuZGVyXG4gICAgICAgIHRoaXMubGluZURhc2ggPSA1O1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IFwiI2ZmMjIyMlwiO1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIHRoaXMubGluZUNhcCA9IFwicm91bmRcIjtcblxuICAgICAgICB0aGlzLnRyYXZlcnNlUGVyY2VudCA9IDA7XG4gICAgICAgIHRoaXMudHJhdmVyc2VMaW5lQ29sb3IgPSBcIiNmZjg4ODhcIjtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4IDogMCxcbiAgICAgICAgICAgIHkgOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4IDogMCxcbiAgICAgICAgICAgIHkgOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jdXJ2ZVN0eWxlID0gXCJiZXppZXJcIjtcbiAgICAgICAgdGhpcy5jdXJ2ZUZ1bmMgPSBmdW5jdGlvbigpe3JldHVybiB7eCA6IDAsIHkgOiAwfTt9O1xuICAgICAgICB0aGlzLl9jYW52YXNTaXplID0ge1xuICAgICAgICAgICAgdyA6IC0xLFxuICAgICAgICAgICAgaCA6IC0xXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmVlZHNSZWNhbGMgPSB0cnVlO1xuICAgICAgICBpbXAuZXh0ZW5kKHRydWUsdGhpcyxjb25maWcpO1xuICAgIH1cbiAgICBDdXJ2ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDdXJ2ZTtcbiAgICBDdXJ2ZS5wcm90b3R5cGUudHlwZSA9IFwiQ3VydmVcIjtcbiAgICBDdXJ2ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgICAgIGlmICh0aGlzLm5lZWRzUmVjYWxjID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnZlRnVuYyA9IEJlemllckhlbHBlci5jcmVhdGVDdXJ2ZSh0aGlzLnN0YXJ0UG9pbnQsdGhpcy5lbmRQb2ludCx0aGlzLmN1cnZlU3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5uZWVkc1JlY2FsYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDdXJ2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5jdXJ2ZUZ1bmMoMCk7XG4gICAgICAgIHZhciBjb2xvckVuZCA9IHRoaXMuY3VydmVGdW5jKHRoaXMudHJhdmVyc2VQZXJjZW50KTtcbiAgICAgICAgdmFyIGVuZCA9IHRoaXMuY3VydmVGdW5jKDEpO1xuICAgICAgICBpbXAuc2F2ZSgpO1xuXG4gICAgICAgIGltcC5zZXRMaW5lRGFzaCh0aGlzLmxpbmVEYXNoKTtcbiAgICAgICAgaW1wLmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XG4gICAgICAgIGltcC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICAgICAgaW1wLmJlZ2luUGF0aCgpO1xuICAgICAgICBpbXAubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICBpbXAuc3Ryb2tlU3R5bGUgPSB0aGlzLmxpbmVDb2xvcjtcbiAgICAgICAgdmFyIGlkeCA9IDAsIHA7XG4gICAgICAgIGZvciAoaWR4ID0gMDsgaWR4IDwgMTsgaWR4Kz10aGlzLmFjY3VyYWN5KXtcbiAgICAgICAgICAgIHAgPSB0aGlzLmN1cnZlRnVuYyhpZHgpO1xuICAgICAgICAgICAgaW1wLmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgIH1cbiAgICAgICAgaW1wLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICBpbXAuc3Ryb2tlKCk7XG5cbiAgICAgICAgaW1wLmJlZ2luUGF0aCgpO1xuICAgICAgICBpbXAubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICBpbXAuc3Ryb2tlU3R5bGUgPSB0aGlzLnRyYXZlcnNlTGluZUNvbG9yO1xuICAgICAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IHRoaXMudHJhdmVyc2VQZXJjZW50OyBpZHgrPXRoaXMuYWNjdXJhY3kpe1xuICAgICAgICAgICAgcCA9IHRoaXMuY3VydmVGdW5jKGlkeCk7XG4gICAgICAgICAgICBpbXAubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgfVxuICAgICAgICBpbXAubGluZVRvKGNvbG9yRW5kLngsIGNvbG9yRW5kLnkpO1xuICAgICAgICBpbXAuc3Ryb2tlKCk7XG5cbiAgICAgICAgaW1wLnJlc3RvcmUoKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtb3VzZU92ZXJGcmFtZSA6IG1vdXNlT3ZlckZyYW1lLFxuICAgICAgICBwb2ludEluQ2lyY2xlIDogcG9pbnRJbkNpcmNsZSxcbiAgICAgICAgTGF5ZXIgOiBfTGF5ZXIsXG4gICAgICAgIEJ1dHRvbiA6IF9CdXR0b24sXG4gICAgICAgIEltYWdlIDogX0ltYWdlLFxuICAgICAgICBMYWJlbCA6IF9MYWJlbCxcbiAgICAgICAgVGV4dEFyZWEgOiBfVGV4dEFyZWEsXG4gICAgICAgIFNoYWRvd0J1dHRvbiA6IFNoYWRvd0J1dHRvbixcbiAgICAgICAgTGlua0J1dHRvbiA6IExpbmtCdXR0b24sXG4gICAgICAgIEhUTUxMaW5rQnV0dG9uIDogSFRNTExpbmtCdXR0b24sXG4gICAgICAgIEltZ0J1dHRvbiA6IEltZ0J1dHRvbixcbiAgICAgICAgQ3VydmUgOiBDdXJ2ZVxuICAgIH07XG59KTtcbiIsIlxudmFyIGNvcmVNb2R1bGVzID0gcmVxdWlyZSgnLi9pbXAtbW9kdWxlcy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBJbXAoKXtcbiAgICAvKlxuXG4gICAgY2FudmFzLWltcCBpcyBhIGhlbHBlciBmb3IgQ2FudmFzLCBhbmQgYWRkcyBoZWxwZXIgZnVuY3Rpb25zIGFuZCBVSSBtb2R1bGVzXG5cbiAgICBJbXAgKGNhcGl0YWwgSSkgaXMgYSBzaW5nbGV0b24gd2hpY2ggbWFuYWdlcyB0aGUgY2FudmFzIGNvbnRleHQuIGl0IG1vZGlmaWVzIHRoZSBjb250ZXh0IHRvIGFkZCB0aGlzIGZ1bmN0aW9uYWxpdHksXG4gICAgc28geW91IGNhbiBhbHNvIHVzZSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhbmQgZ2V0IHRoZSBpbXAgKGxvd2VyY2FzZSBpKSBpbnN0YW5jZSBjdXJyZW50bHkgcnVubmluZy4gSW1wIG93bnMgYSBudW1iZXIgb2YgTW9kdWxlcyxcbiAgICBVSSBlbGVtZW50cyB3aGljaCBjYW4gYmUgZnV0aGVyIGNvbWJpbmVkIGludG8gbmV3IE1vZHVsZXMuIEltcCBhbHNvIG93bnMgYSBudW1iZXIgb2YgaGVscGVyIGZ1bmN0aW9ucyBzbyBtYWtlIGl0IHNpbXBsZSB0byBhY2Nlc3NcbiAgICBhbiBpbXAncyBjdXN0b20gZmVhdHVyZXMgd2l0aG91dCBoYXZpbmcgdG8gZGlnIHRoZSBpbXAgaW5zdGFuY2Ugb3V0IG9mIHRoZSBJbXAgc2luZ2xldG9uIGV2ZXJ5IHRpbWVcblxuICAgIGFuIGltcCBvd25zIGFuIGFycmF5IG9mIGxheWVycywgd2hpY2ggaXQgZHJhd3MgaW4gb3JkZXIsIDAgYmVpbmcgYXQgdGhlIGJvdHRvbS4gTGF5ZXJzIGNhbiBoYXZlIHN1YmxheWVycywgd2hpY2ggaW4gdHVybiBjYW4gaGF2ZSBtb3JlIHN1YmxheWVycywgYSBiaXQgbGlrZSB0aGlzXG4gICAgWyBbIFthLGJdLCBjLCBkXSwgZSwgW2YsIGddICwgaF1cbiAgICBlYWNoIGFycmF5IGlzIGEgbGF5ZXIsIGVhY2ggYXJyYXkgY2FuIGNvbnRhaW4gbW9kdWxlcywgaW5jbHVkaW5nIG90aGVyIGxheWVycy4gbm8gbWF0dGVyIGhvdyBkZWVwbHkgbmVzdGVkLCB0aGUgWiBpbmRleCwgb3IgZGVwdGgsIG9mIGEgbW9kdWxlXG4gICAgaWYgaG93IGZhciByaWdodCBpdCBpcyBpbiB0aGUgZW50aXJlIGxheW91dC4gaWYgYW4gZWxlbWVudHMgaW5kZXggaW4gaXQncyBsYXllciBpcyAzLCBhbmQgaXQncyBsYXllcidzIGluZGV4IGlzIDIsIGFuZCB0aGF0IGxheWVyIGlzIGluIHRoZSBpbXAgbGF5ZXIgc3RhY2ssIGl0J3MgWiBpbmRleFxuICAgIGlzIDMgKyAyID0gNVxuICAgIGFuIGltcCwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyBhIG5vcm1hbCAyRCBjb250ZXh0IGNhbiBkbywga2VlcHMgdHJhY2sgb2YgaXQncyBsYXllcnMsIGlmIHRoZSBtb3VzZSBoYXMgYmVlbiBjYXB0dXJlZCBieSBhIGJ1dHRvbiAocHJldmVudCBjbGlja3MgZ29pbmcgdGhyb3VnaCBidXR0b25zIHRvIGxheWVycyB1ZG5lcm5lYXRoKSxcbiAgICB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbiwgd2hldGhlciB0aGUgbGVmdC1tb3VzZSBpcyBkb3duLCB0aGUgY3VycmVudCB0cmFuc2xhdGlvbiBvZmZzZXQsIHJlc2NhbGUgY2FudmFzIHRvIGZpdCBjc3Mgb24gY2FudmFzIGVsZW1lbnQsIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBmcmFtZSwgYW5kXG4gICAgYmFja2dyb3VuZCBjb2xvciAoaWYgbnVsbCwgbm8gYmFja2dyb3VuZCBpcyB1c2VkLCBhbmQgdGhlIGRvbSB1bmRlcm5lYXRoIGlzIHZpc2libGUpXG5cbiAgICAqL1xuXG4gICAgaWYgKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0TGluZURhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0TGluZURhc2ggPSBmdW5jdGlvbigpe307XG4gICAgfVxuXG4gICAgdmFyIF9jb250ZXh0O1xuXG4gICAgZnVuY3Rpb24gY29udGV4dCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KGNhbnZhcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBzdGFydFwiKTtcblxuICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChcImltcC1jYW52YXNcIik7XG4gICAgICAgIHZhciBodG1sTGlua0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBodG1sTGlua0JveC5pZCA9IFwiaW1wLWxpbmstYm94XCI7XG4gICAgICAgIGh0bWxMaW5rQm94LnN0eWxlID0gXCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMHB4O2xlZnQ6IDBweDtwb2ludGVyLWV2ZW50czogbm9uZTtvdmVyZmxvdzogaGlkZGVuO1wiO1xuICAgICAgICBjYW52YXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaHRtbExpbmtCb3gsIGNhbnZhcy5uZXh0U2libGluZyk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5tb3VzZSA9IHtcbiAgICAgICAgICAgIHggOiAwLFxuICAgICAgICAgICAgeSA6IDAsXG4gICAgICAgICAgICBkb3duIDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5vZmZzZXQgPSB7XG4gICAgICAgICAgICB4IDogMCxcbiAgICAgICAgICAgIHkgOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQuY3VycmVudFNjYWxlID0ge1xuICAgICAgICAgICAgeCA6IDEsXG4gICAgICAgICAgICB5IDogMVxuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnNjYWxlU3RhY2sgPSBbY29udGV4dC5jdXJyZW50U2NhbGVdO1xuICAgICAgICBjb250ZXh0Lm9mZnNldFN0YWNrID0gW2NvbnRleHQub2Zmc2V0XTtcbiAgICAgICAgY29udGV4dC53aWR0aCA9IDA7XG4gICAgICAgIGNvbnRleHQuaGVpZ2h0ID0gMDtcbiAgICAgICAgY29udGV4dC5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuICAgICAgICBjb250ZXh0LmxheWVycyA9IFtdO1xuICAgICAgICBjb250ZXh0Lm1vdXNlQ2FwdHVyZSA9IGZhbHNlOyAvLyBmbGFnIHNldCB0byB0cnVlIGR1cmluZyBhIHNpbmdsZSBkcmF3IHBhc3NcbiAgICAgICAgY29udGV4dC5jdXJyZW50RnJhbWUgPSBudWxsO1xuICAgICAgICBjb250ZXh0Lm1vdXNlUG9pbnRlck9uID0gZmFsc2U7XG4gICAgICAgIGNvbnRleHQuZHBpU2NhbGUgPSAxO1xuICAgICAgICBjb250ZXh0LmN1cnJlbnRGb250ID0ge1xuICAgICAgICAgICAgZmFjZSA6IFwiSGVsdmV0aWNhXCIsXG4gICAgICAgICAgICBzaXplIDogMTQsXG4gICAgICAgICAgICB3ZWlnaHQgOiA0MDBcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5mb250U3RhY2sgPSBbY29udGV4dC5jdXJyZW50Rm9udF07XG5cbiAgICAgICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uIG9uTW92ZShlKXtcbiAgICAgICAgICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29udGV4dC5tb3VzZS54ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29udGV4dC5tb3VzZS55ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uTW91c2VEb3duID0gZnVuY3Rpb24gb25Nb3VzZURvd24oZSl7XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDApe1xuICAgICAgICAgICAgICAgIGNvbnRleHQubW91c2UuZG93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vdXNlVXAgPSBmdW5jdGlvbiBvbk1vdXNlVXAoZSl7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdXNlLmRvd24gPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25SZXNpemVDYW52YXMgPSBmdW5jdGlvbiBvblJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAmJiBjb250ZXh0LmRwaVNjYWxlICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZHBpU2NhbGUgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aCAqIGNvbnRleHQuZHBpU2NhbGU7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodCAqIGNvbnRleHQuZHBpU2NhbGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsb25Nb3ZlLGZhbHNlKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsb25Nb3VzZURvd24sZmFsc2UpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsb25Nb3VzZVVwLGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplQ2FudmFzLCBmYWxzZSk7XG4gICAgICAgIG9uUmVzaXplQ2FudmFzKCk7IC8vIGluaXRpYWxpemUgY2FudmFzIHNpemVcblxuICAgICAgICBjb250ZXh0Ll9vbGRUcmFuc2xhdGUgPSBjb250ZXh0LnRyYW5zbGF0ZTtcbiAgICAgICAgY29udGV4dC5fb2xkU2NhbGUgPSBjb250ZXh0LnNjYWxlO1xuICAgICAgICBjb250ZXh0Ll9vbGRTYXZlID0gY29udGV4dC5zYXZlO1xuICAgICAgICBjb250ZXh0Ll9vbGRSZXN0b3JlID0gY29udGV4dC5yZXN0b3JlO1xuXG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlID0gZnVuY3Rpb24gdHJhbnNsYXRlKHgseSl7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC54ICs9IHg7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC55ICs9IHk7XG4gICAgICAgICAgICB0aGlzLl9vbGRUcmFuc2xhdGUoeCx5KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5zY2FsZSA9IGZ1bmN0aW9uIHNjYWxlKHgseSl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2FsZS54ICo9IHg7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2FsZS55ICo9IHk7XG4gICAgICAgICAgICB0aGlzLl9vbGRTY2FsZSh4LHkpO1xuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnNhdmUgPSBmdW5jdGlvbiBzYXZlKCl7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFN0YWNrLnB1c2goe3ggOiB0aGlzLm9mZnNldC54LCB5IDogdGhpcy5vZmZzZXQueX0pO1xuICAgICAgICAgICAgdGhpcy5zY2FsZVN0YWNrLnB1c2goe3ggOiB0aGlzLmN1cnJlbnRTY2FsZS54LCB5IDogdGhpcy5jdXJyZW50U2NhbGUueX0pO1xuICAgICAgICAgICAgdGhpcy5mb250U3RhY2sucHVzaCh7ZmFjZSA6IHRoaXMuY3VycmVudEZvbnQuZmFjZSwgc2l6ZSA6IHRoaXMuY3VycmVudEZvbnQuc2l6ZSwgd2VpZ2h0IDogdGhpcy5jdXJyZW50Rm9udC53ZWlnaHR9KTtcbiAgICAgICAgICAgIHRoaXMuX29sZFNhdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlID0gZnVuY3Rpb24gc2F2ZSgpe1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLm9mZnNldFN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NhbGUgPSB0aGlzLnNjYWxlU3RhY2sucG9wKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250ID0gdGhpcy5mb250U3RhY2sucG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9vbGRSZXN0b3JlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICAgICAgdGhpcy5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBkbyBub3QgZGlyZWN0bHkgc2V0IHRoZSBjb250ZXh0IGZvbnQsIG9yIGVsc2UgdGhlIGZvbnQgc3RhY2sgd29uJ3Qgd29ya1xuICAgICAgICBjb250ZXh0LnNldEZvbnQgPSBmdW5jdGlvbiBzZXRGb250KGZhY2UsIHNpemUsIHdlaWdodCl7XG4gICAgICAgICAgICBzaXplID0gKHNpemUgIT09IHVuZGVmaW5lZCA/IHNpemUgOiB0aGlzLmN1cnJlbnRGb250LnNpemUpO1xuICAgICAgICAgICAgd2VpZ2h0ID0gKHdlaWdodCAhPT0gdW5kZWZpbmVkID8gd2VpZ2h0IDogdGhpcy5jdXJyZW50Rm9udC53ZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9udCA9IHtcbiAgICAgICAgICAgICAgICBmYWNlIDogZmFjZSxcbiAgICAgICAgICAgICAgICBzaXplIDogc2l6ZSxcbiAgICAgICAgICAgICAgICB3ZWlnaHQgOiB3ZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZvbnQgPSB3ZWlnaHQgKyBcIiBcIiArIHNpemUgKyBcInB4IFwiICsgZmFjZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5zZXRGb250RmFjZSA9IGZ1bmN0aW9uIHNldEZvbnRGYWNlKGZhY2Upe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9udC5mYWNlID0gZmFjZTtcbiAgICAgICAgICAgIHRoaXMuZm9udCA9IHRoaXMuY3VycmVudEZvbnQud2VpZ2h0ICsgXCIgXCIgKyB0aGlzLmN1cnJlbnRGb250LnNpemUgKyBcInB4IFwiICsgdGhpcy5jdXJyZW50Rm9udC5mYWNlO1xuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnNldEZvbnRTaXplID0gZnVuY3Rpb24gc2V0Rm9udFNpemUoc2l6ZSl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250LnNpemUgPSBzaXplO1xuICAgICAgICAgICAgdGhpcy5mb250ID0gdGhpcy5jdXJyZW50Rm9udC53ZWlnaHQgKyBcIiBcIiArIHRoaXMuY3VycmVudEZvbnQuc2l6ZSArIFwicHggXCIgKyB0aGlzLmN1cnJlbnRGb250LmZhY2U7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQuc2V0Rm9udFdlaWdodCA9IGZ1bmN0aW9uIHNldEZvbnRXZWlnaHQod2VpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnQud2VpZ2h0ID0gd2VpZ2h0O1xuICAgICAgICAgICAgdGhpcy5mb250ID0gdGhpcy5jdXJyZW50Rm9udC53ZWlnaHQgKyBcIiBcIiArIHRoaXMuY3VycmVudEZvbnQuc2l6ZSArIFwicHggXCIgKyB0aGlzLmN1cnJlbnRGb250LmZhY2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGV4dC5maWxsQXJjID0gZnVuY3Rpb24gZmlsbEFyYyh4LHkscmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY291bnRlcmNsb2Nrd2lzZSl7XG4gICAgICAgICAgICBzdGFydEFuZ2xlID0gc3RhcnRBbmdsZSAhPT0gdW5kZWZpbmVkID8gc3RhcnRBbmdsZSA6IDA7XG4gICAgICAgICAgICBlbmRBbmdsZSA9IGVuZEFuZ2xlICE9PSB1bmRlZmluZWQgPyBlbmRBbmdsZSA6IE1hdGguUEkqMjtcbiAgICAgICAgICAgIGNvdW50ZXJjbG9ja3dpc2UgPSBjb3VudGVyY2xvY2t3aXNlICE9PSB1bmRlZmluZWQgPyBjb3VudGVyY2xvY2t3aXNlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY291bnRlcmNsb2Nrd2lzZSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGV4dC5hZGRNb3VzZVBvaW50ZXIgPSBmdW5jdGlvbiBwb2ludGVyTW91c2UoKXtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlUG9pbnRlck9uID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXJPbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQucmVtb3ZlTW91c2VQb2ludGVyID0gZnVuY3Rpb24gcG9pbnRlck1vdXNlKCl7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZVBvaW50ZXJPbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXJPbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnNpemUgPSBmdW5jdGlvbiBzaXplKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoIDogdGhpcy5jYW52YXMud2lkdGggKiAxL3RoaXMuZHBpU2NhbGUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5jYW52YXMuaGVpZ2h0ICogMS90aGlzLmRwaVNjYWxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaXJlZm94IGFwcGVhcnMgdG8gZHJhdyB0ZXh0IGEgbGl0dGxlIGxvdywgYnVtcCBpdCB1cCB0byBtYXRjaCBjaHJvbWVcbiAgICAgICAgdmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChpc0ZpcmVmb3gpe1xuICAgICAgICAgICAgY29udGV4dC5fb2xkRmlsbFRleHQgPSBjb250ZXh0LmZpbGxUZXh0O1xuICAgICAgICAgICAgY29udGV4dC5fb2xkU3Ryb2tlVGV4dCA9IGNvbnRleHQuc3Ryb2tlVGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQgPSBmdW5jdGlvbih0ZXh0LHgseSl7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkRmlsbFRleHQodGV4dCx4LHkrMyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VUZXh0ID0gZnVuY3Rpb24odGV4dCx4LHkpe1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZFN0cm9rZVRleHQodGV4dCx4LHkrMyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5leHRlbmQgPSB0aGlzLmV4dGVuZFxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDsgLy8gY29udGV4dCBtdXN0IGJlIGZpbmlzaGVkIGluaXRpbmcgYmVmb3JlIGFueSBtb2R1bGVzIGNhbiBiZSBsb2FkZWRcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaW9yJyx0aGlzKTtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIGNvcmVNb2R1bGVzKHRoaXMpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QnLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKGJhY2tncm91bmQpe1xuICAgICAgICB0aGlzLl9jb250ZXh0LmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgdGhlIGZpcnN0IGxheWVyIG1hdGNoaW5nIHRoZSBsYXllciB5b3UgZ2F2ZSAobm90IGFsbClcbiAgICBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcil7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9jb250ZXh0LmxheWVycy5pbmRleE9mKGxheWVyKTtcbiAgICAgICAgaWYoaWR4ICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmxheWVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydExheWVyKGxheWVyLGluZGV4KXtcbiAgICAgICAgbGF5ZXIudXBkYXRlKCk7IC8vIGdldCBsYXllciB1cCB0byBzcGVlZCBiZWZvcmUgZmlyc3QgZHJhdyBwYXNzXG4gICAgICAgIHRoaXMuX2NvbnRleHQubGF5ZXJzLnNwbGljZShpbmRleCwgMCwgbGF5ZXIpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIGxheWVyIGF0IGEgaGlnaGVyIHogaW5kZXhcbiAgICBmdW5jdGlvbiBwdXNoTGF5ZXIobGF5ZXIpe1xuICAgICAgICBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5sYXllcnMucHVzaChsYXllcik7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyB0aGUgdG9wbW9zdCB6LWluZGV4IGxheWVyXG4gICAgZnVuY3Rpb24gcG9wTGF5ZXIoKXtcbiAgICAgICAgdGhpcy5fY29udGV4dC5sYXllcnMucG9wKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUoaW5qZWN0KXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW5qZWN0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKGluamVjdCl7XG4gICAgICAgIGlmIChpbmplY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKXt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgY29udGV4dC5zY2FsZSgxLDEpO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLDApO1xuICAgICAgICAvLyBoZCBzY2FsZVxuICAgICAgICBmdW5jdGlvbiBhbmltYXRpb25TdGVwKCl7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25TdGVwKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgY29udGV4dC5jbGVhcigpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKGNvbnRleHQuZHBpU2NhbGUsIGNvbnRleHQuZHBpU2NhbGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgdUlkeCA9IGNvbnRleHQubGF5ZXJzLmxlbmd0aCAtIDE7IHVJZHggPj0gMDsgdUlkeC0tKXtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxheWVyc1t1SWR4XS51cGRhdGUoKTsgLy8gdXBkYXRlIHRvcCB0byBib3R0b21cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGRJZHggPSAwLCBsZW4gPSBjb250ZXh0LmxheWVycy5sZW5ndGg7IGRJZHggPCBsZW47IGRJZHgrKyl7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sYXllcnNbZElkeF0uZHJhdygpOyAvLyBkcmF3IGJvdHRvbSB0byB0b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0Lm1vdXNlUG9pbnRlck9uID09PSB0cnVlICYmIGNvbnRleHQubW91c2VDYXB0dXJlID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZW1vdmVNb3VzZVBvaW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQubW91c2VDYXB0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICBpbmplY3QoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY3VycmVudEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvblN0ZXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKXtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQuY3VycmVudEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9jb250ZXh0LmN1cnJlbnRGcmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmplY3RGUFNUcmFja2VyKCl7XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc3RhdHM9bmV3IFN0YXRzKCk7XG4gICAgICAgICAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmNzc1RleHQ9J3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMDAwMCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGxvb3AoKXtcbiAgICAgICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0LnNyYz0nLy9yYXdnaXQuY29tL21yZG9vYi9zdGF0cy5qcy9tYXN0ZXIvYnVpbGQvc3RhdHMubWluLmpzJztcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZChyZWN1cnNpdmUsIGV4dGVuZGVkKXtcbiAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHJlY3Vyc2l2ZSApICE9PSAnW29iamVjdCBCb29sZWFuXScgKSB7XG4gICAgICAgICAgICByZWN1cnNpdmUgPSBmYWxzZVxuICAgICAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZhbmlsbGEgSlMgY29weSBvZiBKUXVlcnkgZXh0ZW5kLCBtb2RpZmllZCBmcm9tIGdvbWFrZXRoaW5ncy5jb20gdG8gYmUgc2VsZiBtdXRhdGluZ1xuICAgIC8vIFBhc3MgaW4gdGhlIG9iamVjdHMgdG8gbWVyZ2UgYXMgYXJndW1lbnRzLlxuICAgIC8vIEZvciBhIGRlZXAgZXh0ZW5kLCBzZXQgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGB0cnVlYC5cbiAgICBmdW5jdGlvbiBleHRlbmQoKXtcbiAgICAgICAgdmFyIGV4dGVuZGVkOyAvLyB3aGF0IHRvIGV4dGVuZFxuICAgICAgICB2YXIgZGVlcCA9IGZhbHNlO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoIDw9IDEpe1xuICAgICAgICAgICAgZXh0ZW5kZWQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFyZ3VtZW50c1swXSApID09PSAnW29iamVjdCBCb29sZWFuXScgKSB7XG4gICAgICAgICAgICBkZWVwID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgZXh0ZW5kZWQgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBpID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4dGVuZGVkID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZXJnZSB0aGUgb2JqZWN0IGludG8gdGhlIGV4dGVuZGVkIG9iamVjdFxuICAgICAgICB2YXIgbWVyZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgcHJvcCBpbiBvYmogKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9iaiwgcHJvcCApICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBkZWVwIG1lcmdlIGFuZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkZWVwICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbcHJvcF0pID09PSAnW29iamVjdCBPYmplY3RdJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKCB0cnVlLCBleHRlbmRlZFtwcm9wXSwgb2JqW3Byb3BdICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZVxuICAgICAgICBmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBtZXJnZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZXh0IDogY29udGV4dCxcbiAgICAgICAgaW5pdCA6IGluaXQsXG4gICAgICAgIHNldEJhY2tncm91bmQgOiBzZXRCYWNrZ3JvdW5kLFxuICAgICAgICByZW1vdmVMYXllciA6IHJlbW92ZUxheWVyLFxuICAgICAgICBpbnNlcnRMYXllciA6IGluc2VydExheWVyLFxuICAgICAgICBwdXNoTGF5ZXIgOiBwdXNoTGF5ZXIsXG4gICAgICAgIHBvcExheWVyIDogcG9wTGF5ZXIsXG4gICAgICAgIG9uUmVzaXplIDogb25SZXNpemUsXG4gICAgICAgIGFuaW1hdGUgOiBhbmltYXRlLFxuICAgICAgICBzdG9wIDogc3RvcCxcbiAgICAgICAgaW5qZWN0RlBTVHJhY2tlciA6IGluamVjdEZQU1RyYWNrZXIsXG4gICAgICAgIGV4dGVuZCA6IGV4dGVuZFxuICAgIH07XG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gdGVzdFN1aXRlKEltcCl7XG4gICAgSW1wLmluamVjdEZQU1RyYWNrZXIoKTtcblxuICAgIHZhciBidXR0b24gPSBuZXcgSW1wLkJ1dHRvbih7XG4gICAgICAgIHggOiAyMCxcbiAgICAgICAgeSA6IDIwLFxuICAgICAgICB3aWR0aCA6IDIwMCxcbiAgICAgICAgaGVpZ2h0IDogMTIwLFxuICAgICAgICBmaWxsQ29sb3IgOiBcImN5YW5cIixcbiAgICAgICAgaG92ZXJDb2xvciA6IFwicmVkXCIsXG4gICAgICAgIGNsaWNrIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdG9wYnV0dG9uID0gbmV3IEltcC5CdXR0b24oe1xuICAgICAgICB4IDogMTAwLFxuICAgICAgICB5IDogODAsXG4gICAgICAgIHdpZHRoIDogMjAwLFxuICAgICAgICBoZWlnaHQgOiAxMjAsXG4gICAgICAgIHRpdGxlIDogXCJvbiBUb3BcIixcbiAgICAgICAgdGV4dENvbG9yIDogXCIjZmYzNmYzXCIsXG4gICAgICAgIGNsaWNrIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljayEgdG9wJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzaGFkb3didXR0b24gPSBuZXcgSW1wLlNoYWRvd0J1dHRvbih7XG4gICAgICAgIHggOiAyMCxcbiAgICAgICAgeSA6IDE2MCxcbiAgICAgICAgd2lkdGggOiAyMDAsXG4gICAgICAgIGhlaWdodCA6IDEyMCxcbiAgICAgICAgZmlsbENvbG9yIDogXCJjeWFuXCIsXG4gICAgICAgIGhvdmVyQ29sb3IgOiBcInJlZFwiLFxuICAgICAgICBjbGljayA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gbmV3IEltcC5MYWJlbCh7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICB5IDogMzAwLFxuICAgICAgICB0ZXh0IDogXCJIZWxsbywgV29ybGQhXCIsXG4gICAgICAgIGZvbnRTaXplIDogNDBcbiAgICB9KTtcblxuICAgIHZhciB0ZXN0SW1nID0gbmV3IEltcC5JbWFnZSh7XG4gICAgICAgIHggOiAyMCxcbiAgICAgICAgeSA6IDM0MCxcbiAgICAgICAgd2lkdGggOiAyMDAsXG4gICAgICAgIGhlaWdodCA6IDIwMCxcbiAgICAgICAgc3JjIDogXCJodHRwOi8vd3d3LmZyZXVkZW5iZXJncy5kZS9iZXJ0L3B1YmxpY2F0aW9ucy90ZWFwb3QtYW5pbS5naWZcIlxuICAgIH0pO1xuXG4gICAgdmFyIHR4dEFyZWEgPSBuZXcgSW1wLlRleHRBcmVhKHtcbiAgICAgICAgeCA6IDIwLFxuICAgICAgICB5IDogNTQwLFxuICAgICAgICB3aWR0aCA6IDE1MCxcbiAgICAgICAgdGV4dCA6ICdIZWxsbyB3b3JsZCEgSSBhbSBzb21lIHJlYXNvbmFibHkgbG9uZyB0ZXh0LlxcbldpdGhcXG5hIGZldyBsaW5lIGJyZWFrcyBpbiBpdCEnXG4gICAgfSk7XG5cbiAgICB2YXIgbGlua0J1dHRvbiA9IG5ldyBJbXAuTGlua0J1dHRvbih7XG4gICAgICAgIHggOiAyMCxcbiAgICAgICAgeSA6IDYwMCxcbiAgICAgICAgdGV4dCA6IFwiY2xpY2sgbWUhIGknbSBhIGxpbmt+XCIsXG4gICAgICAgIGNsaWNrIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGxpbmsnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGltZ0J1dHRvbiA9IG5ldyBJbXAuSW1nQnV0dG9uKHtcbiAgICAgICAgeCA6IDQwMCxcbiAgICAgICAgeSA6IDUwLFxuICAgICAgICBpc0NpcmNsZSA6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2VcbiAgICAgICAgcmFkaXVzIDogNTAsXG4gICAgICAgIHN0cm9rZVN0eWxlIDogXCJyZWRcIiwgLy9cIiM0NDU1NjZcIjsgLy9zZXQgdGhlIHN0cm9rZSB0byB0aGUgYmcgY29sb3IgZm9yIHNtb290aGVyIGNsaXBwaW5nIGVmZmVjdFxuICAgICAgICBsaW5lV2lkdGggOiA1LCAvLyBpZiBsYXJnZXIgdGhhbiAwIGNpcmNsZSBoYXMgYSBib3JkZXJcbiAgICAgICAgaXNDbGlwcGVkIDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICBzcmMgOiBcImh0dHBzOi8vd3d3LnNlZWtsb2dvLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9mYWNlYm9vay1pY29uLXByZXZpZXctMS5wbmdcIixcbiAgICAgICAgY2xpY2sgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgaW1nIGJ1dHRvbicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgaW1nQnV0dG9uU3EgPSBuZXcgSW1wLkltZ0J1dHRvbih7XG4gICAgICAgIHggOiA0MDAsXG4gICAgICAgIHkgOiAxNTAsXG4gICAgICAgIHdpZHRoIDogMTUwLFxuICAgICAgICBoZWlnaHQgOiAxNTAsXG4gICAgICAgIGluc2V0IDogNTAsXG4gICAgICAgIHNyYyA6IFwiaHR0cHM6Ly93d3cuc2Vla2xvZ28ubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA5L2ZhY2Vib29rLWljb24tcHJldmlldy0xLnBuZ1wiLFxuICAgICAgICBjbGljayA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBzcSBpbWFnZSBidXR0b24nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBsYXllciA9IG5ldyBJbXAuTGF5ZXIoe1xuICAgICAgICAgICAgY2hpbGRyZW4gOiBbXG4gICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgIHRvcGJ1dHRvbixcbiAgICAgICAgICAgICAgICB0ZXN0SW1nLFxuICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgIHR4dEFyZWEsXG4gICAgICAgICAgICAgICAgc2hhZG93YnV0dG9uLFxuICAgICAgICAgICAgICAgIGxpbmtCdXR0b24sXG4gICAgICAgICAgICAgICAgaW1nQnV0dG9uLFxuICAgICAgICAgICAgICAgIGltZ0J1dHRvblNxXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgfTtcbn0pO1xuIiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG4vLyBJbmNsdWRlIGEgcGVyZm9ybWFuY2Uubm93IHBvbHlmaWxsXG4oZnVuY3Rpb24gKCkge1xuXG5cdGlmICgncGVyZm9ybWFuY2UnIGluIHdpbmRvdyA9PT0gZmFsc2UpIHtcblx0XHR3aW5kb3cucGVyZm9ybWFuY2UgPSB7fTtcblx0fVxuXG5cdC8vIElFIDhcblx0RGF0ZS5ub3cgPSAoRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fSk7XG5cblx0aWYgKCdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA9PT0gZmFsc2UpIHtcblx0XHR2YXIgb2Zmc2V0ID0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZyAmJiB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCA/IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBEYXRlLm5vdygpO1xuXG5cdFx0d2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBEYXRlLm5vdygpIC0gb2Zmc2V0O1xuXHRcdH07XG5cdH1cblxufSkoKTtcblxudmFyIFRXRUVOID0gVFdFRU4gfHwgKGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgX3R3ZWVucyA9IFtdO1xuXG5cdHJldHVybiB7XG5cblx0XHRnZXRBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIF90d2VlbnM7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdF90d2VlbnMgPSBbXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0XHRfdHdlZW5zLnB1c2godHdlZW4pO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRcdHZhciBpID0gX3R3ZWVucy5pbmRleE9mKHR3ZWVuKTtcblxuXHRcdFx0aWYgKGkgIT09IC0xKSB7XG5cdFx0XHRcdF90d2VlbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdFx0aWYgKF90d2VlbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0d2hpbGUgKGkgPCBfdHdlZW5zLmxlbmd0aCkge1xuXG5cdFx0XHRcdGlmIChfdHdlZW5zW2ldLnVwZGF0ZSh0aW1lKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfdHdlZW5zLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXHR9O1xuXG59KSgpO1xuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfeW95byA9IGZhbHNlO1xuXHR2YXIgX2lzUGxheWluZyA9IGZhbHNlO1xuXHR2YXIgX3JldmVyc2VkID0gZmFsc2U7XG5cdHZhciBfZGVsYXlUaW1lID0gMDtcblx0dmFyIF9zdGFydFRpbWUgPSBudWxsO1xuXHR2YXIgX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR2YXIgX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR2YXIgX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHZhciBfb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cblx0Ly8gU2V0IGFsbCBzdGFydGluZyB2YWx1ZXMgcHJlc2VudCBvbiB0aGUgdGFyZ2V0IG9iamVjdFxuXHRmb3IgKHZhciBmaWVsZCBpbiBvYmplY3QpIHtcblx0XHRfdmFsdWVzU3RhcnRbZmllbGRdID0gcGFyc2VGbG9hdChvYmplY3RbZmllbGRdLCAxMCk7XG5cdH1cblxuXHR0aGlzLnRvID0gZnVuY3Rpb24gKHByb3BlcnRpZXMsIGR1cmF0aW9uKSB7XG5cblx0XHRpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X2R1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0fVxuXG5cdFx0X3ZhbHVlc0VuZCA9IHByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAodGltZSkge1xuXG5cdFx0VFdFRU4uYWRkKHRoaXMpO1xuXG5cdFx0X2lzUGxheWluZyA9IHRydWU7XG5cblx0XHRfb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblxuXHRcdF9zdGFydFRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdF9zdGFydFRpbWUgKz0gX2RlbGF5VGltZTtcblxuXHRcdGZvciAodmFyIHByb3BlcnR5IGluIF92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdGlmIChfdmFsdWVzRW5kW3Byb3BlcnR5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHRfdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFtfb2JqZWN0W3Byb3BlcnR5XV0uY29uY2F0KF92YWx1ZXNFbmRbcHJvcGVydHldKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBgdG8oKWAgc3BlY2lmaWVzIGEgcHJvcGVydHkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0LFxuXHRcdFx0Ly8gd2Ugc2hvdWxkIG5vdCBzZXQgdGhhdCBwcm9wZXJ0eSBpbiB0aGUgb2JqZWN0XG5cdFx0XHRpZiAoX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfdmFsdWVzU3RhcnRbcHJvcGVydHldID0gX29iamVjdFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmICgoX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0X3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCFfaXNQbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRUV0VFTi5yZW1vdmUodGhpcyk7XG5cdFx0X2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKF9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0X29uU3RvcENhbGxiYWNrLmNhbGwoX29iamVjdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHRfY2hhaW5lZFR3ZWVuc1tpXS5zdG9wKCk7XG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5kZWxheSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdF9kZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnJlcGVhdCA9IGZ1bmN0aW9uICh0aW1lcykge1xuXG5cdFx0X3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy55b3lvID0gZnVuY3Rpb24gKHlveW8pIHtcblxuXHRcdF95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cblx0dGhpcy5lYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cblx0XHRfZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmludGVycG9sYXRpb24gPSBmdW5jdGlvbiAoaW50ZXJwb2xhdGlvbikge1xuXG5cdFx0X2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmNoYWluID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0X2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25VcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdF9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdG9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHZhciBwcm9wZXJ0eTtcblx0XHR2YXIgZWxhcHNlZDtcblx0XHR2YXIgdmFsdWU7XG5cblx0XHRpZiAodGltZSA8IF9zdGFydFRpbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChfb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XG5cblx0XHRcdGlmIChfb25TdGFydENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdF9vblN0YXJ0Q2FsbGJhY2suY2FsbChfb2JqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdGVsYXBzZWQgPSAodGltZSAtIF9zdGFydFRpbWUpIC8gX2R1cmF0aW9uO1xuXHRcdGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFsdWUgPSBfZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XG5cblx0XHRmb3IgKHByb3BlcnR5IGluIF92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgdXBkYXRlIHByb3BlcnRpZXMgdGhhdCBkbyBub3QgZXhpc3QgaW4gdGhlIHNvdXJjZSBvYmplY3Rcblx0XHRcdGlmIChfdmFsdWVzU3RhcnRbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydCA9IF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblx0XHRcdHZhciBlbmQgPSBfdmFsdWVzRW5kW3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKGVuZCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0X29iamVjdFtwcm9wZXJ0eV0gPSBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGVuZCwgdmFsdWUpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0XHRcdGlmIChlbmQuc3RhcnRzV2l0aCgnKycpIHx8IGVuZC5zdGFydHNXaXRoKCctJykpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQsIDEwKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZW5kID0gcGFyc2VGbG9hdChlbmQsIDEwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRfb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmIChfb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0X29uVXBkYXRlQ2FsbGJhY2suY2FsbChfb2JqZWN0LCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsYXBzZWQgPT09IDEpIHtcblxuXHRcdFx0aWYgKF9yZXBlYXQgPiAwKSB7XG5cblx0XHRcdFx0aWYgKGlzRmluaXRlKF9yZXBlYXQpKSB7XG5cdFx0XHRcdFx0X3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yIChwcm9wZXJ0eSBpbiBfdmFsdWVzU3RhcnRSZXBlYXQpIHtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKF92YWx1ZXNFbmRbcHJvcGVydHldKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldICsgcGFyc2VGbG9hdChfdmFsdWVzRW5kW3Byb3BlcnR5XSwgMTApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzRW5kW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X3N0YXJ0VGltZSA9IHRpbWUgKyBfZGVsYXlUaW1lO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmIChfb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0X29uQ29tcGxldGVDYWxsYmFjay5jYWxsKF9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBjaGFpbmVkIHR3ZWVucyBzdGFydCBleGFjdGx5IGF0IHRoZSB0aW1lIHRoZXkgc2hvdWxkLFxuXHRcdFx0XHRcdC8vIGV2ZW4gaWYgdGhlIGB1cGRhdGUoKWAgbWV0aG9kIHdhcyBjYWxsZWQgd2F5IHBhc3QgdGhlIGR1cmF0aW9uIG9mIHRoZSB0d2VlblxuXHRcdFx0XHRcdF9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KF9zdGFydFRpbWUgKyBfZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoMiAtIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLSAxMCAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgtIE1hdGgucG93KDIsIC0gMTAgKiAoayAtIDEpKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLSAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcztcblx0XHRcdHZhciBhID0gMC4xO1xuXHRcdFx0dmFyIHAgPSAwLjQ7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhIHx8IGEgPCAxKSB7XG5cdFx0XHRcdGEgPSAxO1xuXHRcdFx0XHRzID0gcCAvIDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gcCAqIE1hdGguYXNpbigxIC8gYSkgLyAoMiAqIE1hdGguUEkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAoYSAqIE1hdGgucG93KDIsIDEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcztcblx0XHRcdHZhciBhID0gMC4xO1xuXHRcdFx0dmFyIHAgPSAwLjQ7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhIHx8IGEgPCAxKSB7XG5cdFx0XHRcdGEgPSAxO1xuXHRcdFx0XHRzID0gcCAvIDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gcCAqIE1hdGguYXNpbigxIC8gYSkgLyAoMiAqIE1hdGguUEkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGEgKiBNYXRoLnBvdygyLCAtIDEwICogaykgKiBNYXRoLnNpbigoayAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgMSk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzO1xuXHRcdFx0dmFyIGEgPSAwLjE7XG5cdFx0XHR2YXIgcCA9IDAuNDtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWEgfHwgYSA8IDEpIHtcblx0XHRcdFx0YSA9IDE7XG5cdFx0XHRcdHMgPSBwIC8gNDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHMgPSBwICogTWF0aC5hc2luKDEgLyBhKSAvICgyICogTWF0aC5QSSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0gMC41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAwLjUgKyAxO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0QmFjazoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogKGsgKiBrICogKChzICsgMSkgKiBrIC0gcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqICgocyArIDEpICogayArIHMpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCb3VuY2U6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KDEgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgKDEgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMiAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMS41IC8gMi43NSkpICogayArIDAuNzU7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMi41IC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjI1IC8gMi43NSkpICogayArIDAuOTM3NTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi42MjUgLyAyLjc1KSkgKiBrICsgMC45ODQzNzU7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgMC41KSB7XG5cdFx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLkluKGsgKiAyKSAqIDAuNTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KGsgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5UV0VFTi5JbnRlcnBvbGF0aW9uID0ge1xuXG5cdExpbmVhcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xuXG5cdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZm4odlswXSwgdlsxXSwgZik7XG5cdFx0fVxuXG5cdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRyZXR1cm4gZm4odlttXSwgdlttIC0gMV0sIG0gLSBmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XG5cblx0fSxcblxuXHRCZXppZXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgYiA9IDA7XG5cdFx0dmFyIG4gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIHB3ID0gTWF0aC5wb3c7XG5cdFx0dmFyIGJuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW47XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBuOyBpKyspIHtcblx0XHRcdGIgKz0gcHcoMSAtIGssIG4gLSBpKSAqIHB3KGssIGkpICogdltpXSAqIGJuKG4sIGkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiO1xuXG5cdH0sXG5cblx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcblxuXHRcdGlmICh2WzBdID09PSB2W21dKSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRpID0gTWF0aC5mbG9vcihmID0gbSAqICgxICsgaykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odlsoaSAtIDEgKyBtKSAlIG1dLCB2W2ldLCB2WyhpICsgMSkgJSBtXSwgdlsoaSArIDIpICUgbV0sIGYgLSBpKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gdlswXSAtIChmbih2WzBdLCB2WzBdLCB2WzFdLCB2WzFdLCAtZikgLSB2WzBdKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRcdHJldHVybiB2W21dIC0gKGZuKHZbbV0sIHZbbV0sIHZbbSAtIDFdLCB2W20gLSAxXSwgZiAtIG0pIC0gdlttXSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2W2kgPyBpIC0gMSA6IDBdLCB2W2ldLCB2W20gPCBpICsgMSA/IG0gOiBpICsgMV0sIHZbbSA8IGkgKyAyID8gbSA6IGkgKyAyXSwgZiAtIGkpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0VXRpbHM6IHtcblxuXHRcdExpbmVhcjogZnVuY3Rpb24gKHAwLCBwMSwgdCkge1xuXG5cdFx0XHRyZXR1cm4gKHAxIC0gcDApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKG4sIGkpIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cblx0XHRcdHJldHVybiBmYyhuKSAvIGZjKGkpIC8gZmMobiAtIGkpO1xuXG5cdFx0fSxcblxuXHRcdEZhY3RvcmlhbDogKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGEgPSBbMV07XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAobikge1xuXG5cdFx0XHRcdHZhciBzID0gMTtcblxuXHRcdFx0XHRpZiAoYVtuXSkge1xuXHRcdFx0XHRcdHJldHVybiBhW25dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IG47IGkgPiAxOyBpLS0pIHtcblx0XHRcdFx0XHRzICo9IGk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhW25dID0gcztcblx0XHRcdFx0cmV0dXJuIHM7XG5cblx0XHRcdH07XG5cblx0XHR9KSgpLFxuXG5cdFx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG5cblx0XHRcdHZhciB2MCA9IChwMiAtIHAwKSAqIDAuNTtcblx0XHRcdHZhciB2MSA9IChwMyAtIHAxKSAqIDAuNTtcblx0XHRcdHZhciB0MiA9IHQgKiB0O1xuXHRcdFx0dmFyIHQzID0gdCAqIHQyO1xuXG5cdFx0XHRyZXR1cm4gKDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEpICogdDMgKyAoLSAzICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pXG4oZnVuY3Rpb24gKHJvb3QpIHtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBUV0VFTjtcblx0XHR9KTtcblxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXG5cdFx0Ly8gTm9kZS5qc1xuXHRcdG1vZHVsZS5leHBvcnRzID0gVFdFRU47XG5cblx0fSBlbHNlIGlmIChyb290ICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdC8vIEdsb2JhbCB2YXJpYWJsZVxuXHRcdHJvb3QuVFdFRU4gPSBUV0VFTjtcblxuXHR9XG5cbn0pKHRoaXMpO1xuIiwidmFyIEltcCA9IHJlcXVpcmUoJy4vaW1wL2ltcC5qcycpO1xuY29uc29sZS5sb2coJ2ltcD8nLEltcCk7XG52YXIgdGVzdFN1aXRlID0gcmVxdWlyZSgnLi9pbXAvdGVzdC1zdWl0ZS5qcycpO1xuXG52YXIgaW1wY3R4O1xudmFyIEFwcCA9IChmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gb25EcmF3KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3IScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIHZhciBpbXBjdHggPSBJbXAuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSk7XG4gICAgICAgIEltcC5zZXRCYWNrZ3JvdW5kKCcjZmYwMGZmJyk7XG4gICAgICAgIEltcC5wdXNoTGF5ZXIodGVzdFN1aXRlKEltcCkoKSk7XG4gICAgICAgIEltcC5hbmltYXRlKG9uRHJhdygpKTtcbiAgICB9XG5cbiAgICBpbml0KCk7XG59KCkpO1xuIl19
