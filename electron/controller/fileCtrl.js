const Controller = require('ee-core').Controller

class FileCtrl extends Controller {
  saveFile() {
    const dataMiniURLBase64 = reqData.miniURL.replace(/^data:image\/\w+;base64,/, '')
    const dataMiniBuffer = Buffer.from(dataMiniURLBase64, 'base64') //把base64码转成buffer对象，
    const fileName = 'filename'
    fs.writeFile(fileName, dataMiniBuffer, (error) => {
      if (error) {
        console.log(error)
        return res.send({
          code: 500,
          error,
        })
      }

      res.send({
        code: 200,
        msg: '保存成功！',
      })
    })
  }
}

FileCtrl.toString = () => '[class FileCtrl]'
module.exports = FileCtrl
