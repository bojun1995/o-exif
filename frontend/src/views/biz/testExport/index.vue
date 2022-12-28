<template>
  <div class="page-box">
    <n-upload list-type="image" @change="onFileListChg">
      <n-button type="primary">上传文件</n-button>
    </n-upload>
    <n-divider></n-divider>
    <!-- <n-button type="info" :loading="createLoading" @click="onCreateClk">create</n-button> -->
    <n-button type="info" :loading="createLoading" @click="onExportClk">export</n-button>
    <n-divider></n-divider>
    <div ref="exifRef" :style="exifStyle">
      <span>{{ getExifTagsByKey('Model') || '-' }}</span>
      <span>{{ getExifTagsByKey('LensProfileName') || '-' }}</span>
    </div>
  </div>
</template>

<script setup>
import html2canvas from 'html2canvas'
import Canvas2Image from '@/util/canvas2image'
import ExifReader from 'exifreader'

const fileList = ref([])
function onFileListChg(event) {
  fileList.value = event.fileList
}

const ratio = window.devicePixelRatio

const exifRef = ref()
const exifTags = ref({})
function getExifTagsByKey(key) {
  let ret = '-'
  if (exifTags.value[key]) {
    ret = exifTags.value[key].description
  }
  return ret
}

const exifStyle = ref({})
exifStyle.value = getExifStyle()
function getExifStyle(height = 100, width = 600) {
  let ret = {
    height: `${height}px`,
    width: `${width}px`,
    fontSize: `${height / 2}px`,
    lineHeight: `${height}px`,
    backgroundColor: '#E1F3F0',
    display: 'flex',
    justifyContent: 'space-between',
    // position: 'fixed',
    // top: `-${height * 2}px`,
  }
  return ret
}

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
    exifTags.value = await ExifReader.load(fileList.value[0].file)

    uploadImg.onload = function () {
      const exifRealHeight = Math.round(uploadImg.height / ratio / 10)
      const exifRealWidth = Math.round(uploadImg.width / ratio)
      exifStyle.value = getExifStyle(exifRealHeight, exifRealWidth)
      nextTick(() => {
        bgCanvas.width = uploadImg.width
        bgCanvas.height = uploadImg.height + exifRealHeight

        // upload
        bgContext.drawImage(uploadImg, 0, 0)

        html2canvas(exifRef.value).then(function (exifCanvas) {
          bgContext.drawImage(exifCanvas, 0, uploadImg.height)

          // export
          const bgExportImg = Canvas2Image.convertToJPEG(bgCanvas, bgCanvas.width, bgCanvas.height)
          createLoading.value = false

          var a = document.createElement('a')
          var event = new MouseEvent('click')
          a.download = 'export.jpg'
          a.href = bgExportImg.src
          a.dispatchEvent(event)
        })
      })
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

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.page-box {
  z-index: 1;
}
</style>
