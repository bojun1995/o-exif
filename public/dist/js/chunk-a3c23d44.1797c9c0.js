(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3c23d44"],{"4cbd":function(e,o,t){"use strict";t("8a94")},"8a01":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-base-powermonitor"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("p",[e._v("* 当前状态："+e._s(e.currentStatus))])]),o("p",[e._v("* 拔掉电源，使用电池供电")]),o("p",[e._v("* 接入电源")]),o("p",[e._v("* 锁屏")]),o("p",[e._v("* 解锁")])],1)])},r=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 监控电源状态 ")])])}],l=t("a358"),c={data(){return{currentStatus:"无"}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(l["a"].initPowerMonitor),e.$ipc.on(l["a"].initPowerMonitor,(o,t)=>{"[object Object]"==Object.prototype.toString.call(t)&&(e.currentStatus=t.msg,e.$message.info(t.msg))}),this.$ipc.send(l["a"].initPowerMonitor,"")}}},a=c,i=(t("4cbd"),t("2877")),p=Object(i["a"])(a,n,r,!1,null,"501ac189",null);o["default"]=p.exports},"8a94":function(e,o,t){},a358:function(e,o,t){"use strict";t.d(o,"a",(function(){return c})),t.d(o,"c",(function(){return a})),t.d(o,"b",(function(){return i}));var n=t("cff8"),r=t.n(n),l=t("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",hello:"controller.example.hello"},a={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,o)=>{const t=r.a.get("httpServiceConfig"),n=t.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=n+"/"+c,console.log("url:",c),Object(l["b"])({url:c,method:"post",data:o,params:{},timeout:6e4})}}}]);
//# sourceMappingURL=chunk-a3c23d44.1797c9c0.js.map