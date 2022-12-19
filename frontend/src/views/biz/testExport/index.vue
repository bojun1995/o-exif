<template>
  <div>
    <n-upload list-type="image" @change="onFileListChg">
      <n-button type="primary">上传文件</n-button>
    </n-upload>
    <n-divider></n-divider>
    <n-button type="info" @click="onCreateClk">create</n-button>
    <n-divider></n-divider>
    <canvas ref="canvasBoxRef" class="export-box"> </canvas>
  </div>
</template>

<script setup>
import Canvas2Image from '@/util/canvas2image'

const fileList = ref([])
function onFileListChg(event) {
  fileList.value = event.fileList
}

const canvasBoxRef = ref()

function onCreateClk() {
  const bgCanvas = document.createElement('canvas')
  const bgContext = bgCanvas.getContext('2d')

  // 关闭抗锯齿
  bgContext.mozImageSmoothingEnabled = false
  bgContext.webkitImageSmoothingEnabled = false
  bgContext.msImageSmoothingEnabled = false
  bgContext.imageSmoothingEnabled = false

  const uploadImg = new Image()
  uploadImg.src = URL.createObjectURL(fileList.value[0].file)

  uploadImg.onload = function () {
    bgCanvas.width = uploadImg.width
    bgCanvas.height = uploadImg.height * 1.1

    bgContext.drawImage(uploadImg, 0, 0)

    const bgExportImg = Canvas2Image.convertToPNG(bgCanvas, bgCanvas.width, bgCanvas.height)
    var a = document.createElement('a')
    var event = new MouseEvent('click')
    a.download = 'export.png'
    a.href = bgExportImg.src
    a.dispatchEvent(event)
  }
}
</script>
<script>
export default {
  name: 'TestExport',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.export-box {
  height: 200px;
}
</style>
