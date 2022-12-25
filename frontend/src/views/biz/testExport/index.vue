<template>
  <div>
    <n-upload list-type="image" @change="onFileListChg">
      <n-button type="primary">上传文件</n-button>
    </n-upload>
    <n-divider></n-divider>
    <!-- <n-button type="info" :loading="createLoading" @click="onCreateClk">create</n-button> -->
    <n-button type="info" :loading="createLoading" @click="onExportClk">export</n-button>
    <n-divider></n-divider>
    <div id="exifRef" :style="cp_exifStyle">
      <span>{{ textMsg }}</span>
    </div>
  </div>
</template>

<script setup>
import Html2Canvas from 'html2canvas'
import Canvas2Image from '@/util/canvas2image'
import ExifReader from 'exifreader'

const fileList = ref([])
function onFileListChg(event) {
  fileList.value = event.fileList
}

const exifRef = ref()
const textMsg = ref('123')
const cp_exifStyle = ref({
  height: '200px',
  backgroundColor: '#282C34',
})

const createLoading = ref(false)

function onExportClk() {
  createLoading.value = true
  nextTick(async () => {
    const bgCanvas = document.createElement('canvas')
    const bgContext = bgCanvas.getContext('2d')

    // 关闭抗锯齿
    bgContext.mozImageSmoothingEnabled = false
    bgContext.webkitImageSmoothingEnabled = false
    bgContext.msImageSmoothingEnabled = false
    bgContext.imageSmoothingEnabled = false

    const uploadImg = new Image()
    uploadImg.src = URL.createObjectURL(fileList.value[0].file)
    const exifTags = await ExifReader.load(fileList.value[0].file)

    uploadImg.onload = function () {
      const exifHeight = Math.round(uploadImg.height / 10)

      bgCanvas.width = uploadImg.width
      bgCanvas.height = uploadImg.height + exifHeight

      // upload
      bgContext.drawImage(uploadImg, 0, 0)

      // html2canvas(exifRef.value).then(function (exifCanvas) {})
    }
  })
}

function onCreateClk() {
  createLoading.value = true
  nextTick(async () => {
    const bgCanvas = document.createElement('canvas')
    const bgContext = bgCanvas.getContext('2d')

    // 关闭抗锯齿
    bgContext.mozImageSmoothingEnabled = false
    bgContext.webkitImageSmoothingEnabled = false
    bgContext.msImageSmoothingEnabled = false
    bgContext.imageSmoothingEnabled = false

    const uploadImg = new Image()
    uploadImg.src = URL.createObjectURL(fileList.value[0].file)
    const exifTags = await ExifReader.load(fileList.value[0].file)

    uploadImg.onload = function () {
      const exifHeight = Math.round(uploadImg.height / 10)

      bgCanvas.width = uploadImg.width
      bgCanvas.height = uploadImg.height + exifHeight

      // upload
      bgContext.drawImage(uploadImg, 0, 0)

      // exif
      const exifCanvas = document.createElement('canvas')
      const exifContext = exifCanvas.getContext('2d')
      exifCanvas.width = uploadImg.width
      exifCanvas.height = exifHeight

      // 关闭抗锯齿
      exifContext.mozImageSmoothingEnabled = false
      exifContext.webkitImageSmoothingEnabled = false
      exifContext.msImageSmoothingEnabled = false
      exifContext.imageSmoothingEnabled = false

      // 背景填充
      exifContext.fillStyle = '#FFFFFF'
      exifContext.fillRect(0, 0, bgCanvas.width, exifHeight)

      // 填写exif
      exifContext.fillStyle = '#282C34'
      // exifContext.font = `${exifHeight}px kidoproject`
      exifContext.font = `${exifHeight}px impact`
      // exifContext.textBaseline = 'bottom'
      exifContext.fillText(exifTags.Model.value[0], 0, exifHeight)

      // 合并exif
      bgContext.drawImage(exifCanvas, 0, uploadImg.height)

      // export
      // const bgExportImg = Canvas2Image.convertToJPEG(exifCanvas, exifCanvas.width, exifCanvas.height)
      const bgExportImg = Canvas2Image.convertToJPEG(bgCanvas, bgCanvas.width, bgCanvas.height)
      createLoading.value = false

      var a = document.createElement('a')
      var event = new MouseEvent('click')
      a.download = 'export.jpg'
      a.href = bgExportImg.src
      a.dispatchEvent(event)
    }
  })
}
</script>
<script>
export default {
  name: 'TestExport',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
