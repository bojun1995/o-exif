(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-681b6e7b"],{"107c":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("2ba4"),o=n("c65b"),a=n("e330"),l=n("d784"),c=n("44e7"),i=n("825a"),u=n("1d80"),s=n("4840"),p=n("8aa5"),d=n("50c4"),f=n("577e"),x=n("dc4a"),v=n("4dae"),g=n("14c3"),h=n("9263"),m=n("9f7f"),b=n("d039"),w=m.UNSUPPORTED_Y,I=4294967295,S=Math.min,y=[].push,E=a(/./.exec),k=a(y),R=a("".slice),_=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));l("split",(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=f(u(this)),l=void 0===n?I:n>>>0;if(0===l)return[];if(void 0===e)return[a];if(!c(e))return o(t,a,e,l);var i,s,p,d=[],x=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,x+"g");while(i=o(h,m,a)){if(s=m.lastIndex,s>g&&(k(d,R(a,g,i.index)),i.length>1&&i.index<a.length&&r(y,d,v(i,1)),p=i[0].length,g=s,d.length>=l))break;m.lastIndex===i.index&&m.lastIndex++}return g===a.length?!p&&E(m,"")||k(d,""):k(d,R(a,g)),d.length>l?v(d,0,l):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:o(t,this,e,n)}:t,[function(t,n){var r=u(this),l=void 0==t?void 0:x(t,e);return l?o(l,t,r,n):o(a,f(r),t,n)},function(e,r){var o=i(this),l=f(e),c=n(a,o,l,r,a!==t);if(c.done)return c.value;var u=s(o,RegExp),x=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(w?"g":"y"),h=new u(w?"^(?:"+o.source+")":o,v),m=void 0===r?I:r>>>0;if(0===m)return[];if(0===l.length)return null===g(h,l)?[l]:[];var b=0,y=0,E=[];while(y<l.length){h.lastIndex=w?0:y;var _,C=g(h,w?R(l,y):l);if(null===C||(_=S(d(h.lastIndex+(w?y:0)),l.length))===b)y=p(l,y,x);else{if(k(E,R(l,b,y)),E.length===m)return E;for(var O=1;O<=C.length-1;O++)if(k(E,C[O]),E.length===m)return E;y=b=_}}return k(E,R(l,b)),E}]}),!_,w)},"14c3":function(e,t,n){var r=n("da84"),o=n("c65b"),a=n("825a"),l=n("1626"),c=n("c6b6"),i=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(l(n)){var r=o(n,e,t);return null!==r&&a(r),r}if("RegExp"===c(e))return o(i,e,t);throw u("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),l=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==o(e))}},"4dae":function(e,t,n){var r=n("da84"),o=n("23cb"),a=n("07fa"),l=n("8418"),c=r.Array,i=Math.max;e.exports=function(e,t,n){for(var r=a(e),u=o(t,r),s=o(void 0===n?r:n,r),p=c(i(s-u,0)),d=0;u<s;u++,d++)l(p,d,e[u]);return p.length=d,p}},"7ffd":function(e,t,n){"use strict";n("dd8a")},8418:function(e,t,n){"use strict";var r=n("a04b"),o=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var l=r(t);l in e?o.f(e,l,a(0,n)):e[l]=n}},"889f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-base-window"}},[e._m(0),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(t){return e.createWindow(0)}}},[e._v("打开哔哩哔哩")])],1)],1),e._m(1),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(t){return e.createWindow(1)}}},[e._v("打开html页面")])],1)],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-block-1"},[n("span",[e._v(" 1. 新窗口中加载web内容 ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-block-1"},[n("span",[e._v(" 2. 新窗口中加载html内容 ")])])}],a=n("a358"),l={data:function(){return{views:[{type:"web",content:"https://www.bilibili.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{createWindow:function(e){this.$ipcInvoke(a["a"].createWindow,this.views[e]).then((function(e){console.log(e)}))}}},c=l,i=(n("7ffd"),n("2877")),u=Object(i["a"])(c,r,o,!1,null,"674a2e67",null);t["default"]=u.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),o=n("e330"),a=n("577e"),l=n("ad6d"),c=n("9f7f"),i=n("5692"),u=n("7c73"),s=n("69f3").get,p=n("fce3"),d=n("107c"),f=i("native-string-replace",String.prototype.replace),x=RegExp.prototype.exec,v=x,g=o("".charAt),h=o("".indexOf),m=o("".replace),b=o("".slice),w=function(){var e=/a/,t=/b*/g;return r(x,e,"a"),r(x,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=c.BROKEN_CARET,S=void 0!==/()??/.exec("")[1],y=w||S||I||p||d;y&&(v=function(e){var t,n,o,c,i,p,d,y=this,E=s(y),k=a(e),R=E.raw;if(R)return R.lastIndex=y.lastIndex,t=r(v,R,k),y.lastIndex=R.lastIndex,t;var _=E.groups,C=I&&y.sticky,O=r(l,y),M=y.source,A=0,T=k;if(C&&(O=m(O,"y",""),-1===h(O,"g")&&(O+="g"),T=b(k,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==g(k,y.lastIndex-1))&&(M="(?: "+M+")",T=" "+T,A++),n=new RegExp("^(?:"+M+")",O)),S&&(n=new RegExp("^"+M+"$(?!\\s)",O)),w&&(o=y.lastIndex),c=r(x,C?n:y,T),C?c?(c.input=b(c.input,A),c[0]=b(c[0],A),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:w&&c&&(y.lastIndex=y.global?c.index+c[0].length:o),S&&c&&c.length>1&&r(f,c[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(c[i]=void 0)})),c&&_)for(c.groups=p=u(null),i=0;i<_.length;i++)d=_[i],p[d[0]]=c[d[1]];return c}),e.exports=v},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp,l=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=l||r((function(){return!a("a","y").sticky})),i=l||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:c,UNSUPPORTED_Y:l}},a15b:function(e,t,n){"use strict";var r=n("23e7"),o=n("e330"),a=n("44ad"),l=n("fc6a"),c=n("a640"),i=o([].join),u=a!=Object,s=c("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(e){return i(l(this),void 0===e?",":e)}})},a358:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));n("a15b"),n("ac1f"),n("1276");var r=n("cff8"),o=n.n(r),a=n("b775"),l={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},c={appUpdater:"app.updater"},i=function(e,t){var n=o.a.get("httpServiceConfig"),r=n.server||"http://127.0.0.1:7071",l=e.split(".").join("/");return l=r+"/"+l,console.log("url:",l),Object(a["b"])({url:l,method:"post",data:t,params:{},timeout:6e4})}},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),o=n("6eeb"),a=n("9263"),l=n("d039"),c=n("b622"),i=n("9112"),u=c("species"),s=RegExp.prototype;e.exports=function(e,t,n,p){var d=c(e),f=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),x=f&&!l((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!x||n){var v=r(/./[d]),g=t(d,""[e],(function(e,t,n,o,l){var c=r(e),i=t.exec;return i===a||i===s.exec?f&&!l?{done:!0,value:v(t,n,o)}:{done:!0,value:c(n,t,o)}:{done:!1}}));o(String.prototype,e,g[0]),o(s,d,g[1])}p&&i(s[d],"sham",!0)}},dd8a:function(e,t,n){},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-681b6e7b.5bb23f80.js.map