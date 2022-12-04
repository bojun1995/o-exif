const { shell, BrowserWindow } = require('electron')
const Controller = require('ee-core').Controller

class EleCtrl extends Controller {
  /**
   * @description : 打开链接
   * @param {string} url
   */
  doOpenUrl(url) {
    shell.openPath(url)
    return true
  }
  doMinSizeWindow() {
    this.app.electron.mainWindow.minimize()
  }
  doMaxSizeWindow() {
    this.app.electron.mainWindow.maximize()
  }
  doUnMaxSizeWindow() {
    this.app.electron.mainWindow.unmaximize()
  }
  doHideWindow() {
    this.app.electron.mainWindow.hide()
  }
}

EleCtrl.toString = () => '[class EleCtrl]'
module.exports = EleCtrl
