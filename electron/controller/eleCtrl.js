const { shell } = require('electron')
const Controller = require('ee-core').Controller

class EleCtrl extends Controller {
  doOpenUrl(url) {
    shell.openPath(url)
    return true
  }
}

EleCtrl.toString = () => '[class EleCtrl]'
module.exports = EleCtrl
