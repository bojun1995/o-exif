(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c99940f"],{"8fa9":function(e,t,a){},a358:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return c}));var o=a("cff8"),n=a.n(o),l=a("b775");const s={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",hello:"controller.example.hello"},r={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},c=(e,t)=>{const a=n.a.get("httpServiceConfig"),o=a.server||"http://127.0.0.1:7071";let s=e.split(".").join("/");return s=o+"/"+s,console.log("url:",s),Object(l["b"])({url:s,method:"post",data:t,params:{},timeout:6e4})}},c29e:function(e,t,a){"use strict";a("8fa9")},e091:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-db"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:8}},[e._v(" • 小数据量: 0~100M(单库) ")]),t("a-col",{attrs:{span:8}},[e._v(" • json数据库 ")]),t("a-col",{attrs:{span:8}},[e._v(" • 兼容lodash语法 ")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.all_list)+" ")])],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.name,"addon-before":"姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.age,"addon-before":"年龄"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.dbOperation("add")}}},[e._v(" 添加 ")])],1)],1)],1),e._m(3),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.search_age,"addon-before":"年龄"},model:{value:e.search_age,callback:function(t){e.search_age=t},expression:"search_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.dbOperation("get")}}},[e._v(" 查找 ")])],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.userList)+" ")])],1)],1),e._m(4),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_name,"addon-before":"姓名"},model:{value:e.update_name,callback:function(t){e.update_name=t},expression:"update_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_age,"addon-before":"年龄"},model:{value:e.update_age,callback:function(t){e.update_age=t},expression:"update_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.dbOperation("update")}}},[e._v(" 更新 ")])],1)],1)],1),e._m(5),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.delete_name,"addon-before":"姓名"},model:{value:e.delete_name,callback:function(t){e.delete_name=t},expression:"delete_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.dbOperation("del")}}},[e._v(" 删除 ")])],1)],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. LowDB本地数据库 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 测试数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 3. 添加数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 获取数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 5. 修改数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 6. 删除数据 ")])])}],l=a("a358"),s={data(){return{name:"张三",age:10,userList:["空"],search_age:10,update_name:"张三",update_age:21,delete_name:"张三",all_list:["空"]}},mounted(){this.getAllTestData()},methods:{getAllTestData(){const e=this,t={action:"all"};this.$ipcInvoke(l["a"].dbOperation,t).then(t=>{if(console.log("res:",t),0==t.all_list.length)return!1;e.all_list=t.all_list})},dbOperation(e){const t=this,a={action:e,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==e&&0==this.name.length&&t.$message.error("请填写数据"),this.$ipcInvoke(l["a"].dbOperation,a).then(a=>{if(console.log("res:",a),"get"==e){if(0==a.result.length)return void t.$message.error("没有数据");t.userList=a.result}0!=a.all_list.length?(t.all_list=a.all_list,t.$message.success("success")):t.all_list=["空"]})}}},r=s,c=(a("c29e"),a("2877")),i=Object(c["a"])(r,o,n,!1,null,"4879ab02",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-1c99940f.d0bdb9c8.js.map