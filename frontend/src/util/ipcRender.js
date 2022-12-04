const { ipcRenderer } = (window.require && window.require('electron')) || window.electron || {}

/**
 * 路由定义（主进程与渲染进程通信频道定义）
 */
export const ipcApiRoute = {
  test: 'controller.example.test',
  messageShow: 'controller.example.messageShow',
  messageShowConfirm: 'controller.example.messageShowConfirm',
  selectFolder: 'controller.example.selectFolder',
  openDirectory: 'controller.example.openDirectory',
  loadViewContent: 'controller.example.loadViewContent',
  removeViewContent: 'controller.example.removeViewContent',
  createWindow: 'controller.example.createWindow',
  sendNotification: 'controller.example.sendNotification',
  initPowerMonitor: 'controller.example.initPowerMonitor',
  getScreen: 'controller.example.getScreen',
  openSoftware: 'controller.example.openSoftware',
  autoLaunch: 'controller.example.autoLaunch',
  setTheme: 'controller.example.setTheme',
  getTheme: 'controller.example.getTheme',
  checkForUpdater: 'controller.example.checkForUpdater',
  downloadApp: 'controller.example.downloadApp',
  dbOperation: 'controller.example.dbOperation',
  uploadFile: 'controller.example.uploadFile',
  checkHttpServer: 'controller.example.checkHttpServer',
  doHttpRequest: 'controller.example.doHttpRequest',
  doSocketRequest: 'controller.example.doSocketRequest',
  ipcInvokeMsg: 'controller.example.ipcInvokeMsg',
  ipcSendSyncMsg: 'controller.example.ipcSendSyncMsg',
  ipcSendMsg: 'controller.example.ipcSendMsg',
  getWCid: 'controller.example.getWCid',
  hello: 'controller.example.hello',
}

export const eleCtrlApiRoute = {
  doOpenUrl: 'controller.eleCtrl.doOpenUrl',
  doMinSizeWindow: 'controller.eleCtrl.doMinSizeWindow',
  doMaxSizeWindow: 'controller.eleCtrl.doMaxSizeWindow',
  doUnMaxSizeWindow: 'controller.eleCtrl.doUnMaxSizeWindow',
  doHideWindow: 'controller.eleCtrl.doHideWindow',
}

/**
 * 发送异步消息（invoke/handle 模型）
 * @param channel
 * @param param
 * @returns {Promise}
 */
export const invoke = (channel, param) => {
  const message = ipcRenderer.invoke(channel, param)
  return message
}

/**
 * 发送同步消息（send/on 模型）
 * @param channel
 * @param param
 * @returns {Any}
 */
export const sendSync = (channel, param) => {
  const message = ipcRenderer.sendSync(channel, param)
  return message
}

export const ipc = () => {
  return ipcRenderer
}
