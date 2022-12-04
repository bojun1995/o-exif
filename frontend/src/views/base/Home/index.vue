<template>
  <n-button type="primary" @click="testIpc"> Primary </n-button>
</template>

<script setup>
import { invoke, ipcApiRoute } from '@/util/ipcRender'

function testIpc() {
  invoke(ipcApiRoute.getScreen, 0).then((result) => {})
}
</script>
<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
