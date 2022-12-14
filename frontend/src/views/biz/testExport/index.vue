<template>
  <div>
    <n-upload list-type="image" @change="onFileListChg">
      <n-button type="primary">上传文件</n-button>
    </n-upload>
    <n-divider></n-divider>
    <n-button type="info" @click="onExportClk">export</n-button>
    <n-divider></n-divider>
    <canvas id="canvasBox" ref="canvasBoxRef"> </canvas>
    <div style="height: 200px"></div>
  </div>
</template>

<script setup>
const fileList = ref([])
function onFileListChg(event) {
  fileList.value = event.fileList
}

const canvasBoxRef = ref()
function onExportClk() {
  canvasBoxRef.value
  const context = canvasBoxRef.value.getContext('2d')
  const image = new Image()
  image.src = URL.createObjectURL(fileList.value[0].file)
  image.onload = function (event) {
    URL.revokeObjectURL(this.src)

    canvasBoxRef.value.width = image.width
    canvasBoxRef.value.height = image.height

    context.drawImage(image, 0, 0)
  }
}
</script>
<script>
export default {
  name: 'TestExport',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
