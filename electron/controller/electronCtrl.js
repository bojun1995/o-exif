const { shell, BrowserWindow } = require('electron')
const Controller = require('ee-core').Controller

class ElectronCtrl extends Controller {
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

ElectronCtrl.toString = () => '[class ElectronCtrl]'
module.exports = ElectronCtrl
