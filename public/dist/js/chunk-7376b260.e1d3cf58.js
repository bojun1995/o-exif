(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7376b260"],{"149e":function(e,o,t){"use strict";t("869f")},"869f":function(e,o,t){},a358:function(e,o,t){"use strict";t.d(o,"a",(function(){return c})),t.d(o,"c",(function(){return a})),t.d(o,"b",(function(){return i}));var n=t("cff8"),l=t.n(n),r=t("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",hello:"controller.example.hello"},a={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,o)=>{const t=l.a.get("httpServiceConfig"),n=t.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=n+"/"+c,console.log("url:",c),Object(r["b"])({url:c,method:"post",data:o,params:{},timeout:6e4})}},ae87:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-base-window-view"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.loadViewContent(0)}}},[e._v("加载百度页面")]),o("a-button",{on:{click:function(o){return e.removeViewContent(0)}}},[e._v("移除百度页面")])],1)],1),e._m(1),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.loadViewContent(1)}}},[e._v("加载html页面")]),o("a-button",{on:{click:function(o){return e.removeViewContent(1)}}},[e._v("移除html页面")])],1)],1)])},l=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 嵌入web内容 ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 2. 嵌入html内容 ")])])}],r=t("a358"),c={data(){return{views:[{type:"web",content:"https://www.baidu.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{loadViewContent(e){const o=this;o.$ipcInvoke(r["a"].loadViewContent,this.views[e]).then(e=>{console.log(e)})},removeViewContent(e){const o=this;o.$ipcInvoke(r["a"].removeViewContent,o.views[e]).then(e=>{console.log(e)})}}},a=c,i=(t("149e"),t("2877")),p=Object(i["a"])(a,n,l,!1,null,"113436ad",null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7376b260.e1d3cf58.js.map