const { ipcRenderer: ipc } = (window.require && window.require('electron')) || window.electron || {}

/**
 * 发送异步消息（invoke/handle 模型）
 * @param channel
 * @param param
 * @returns {Promise}
 */
export const invoke = (channel, param) => {
  const message = ipc.invoke(channel, param)
  return message
}

/**
 * 发送同步消息（send/on 模型）
 * @param channel
 * @param param
 * @returns {Any}
 */
export const sendSync = (channel, param) => {
  const message = ipc.sendSync(channel, param)
  return message
}
