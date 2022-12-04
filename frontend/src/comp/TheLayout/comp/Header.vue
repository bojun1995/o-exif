<template>
  <div class="header">
    <div class="logo-box" @click="onLogoClk">
      <n-icon size="40">
        <logoSVG></logoSVG>
      </n-icon>
      <div class="logo-text">
        <span>o-exif</span>
      </div>
    </div>
    <div class="btn-box"></div>
  </div>
</template>

<script setup>
import logoSVG from '@/assets/icon/logo.svg'
import { eleCtrlApiRoute, sendSync } from '@/util/ipcRender'

function onLogoClk() {
  sendSync(eleCtrlApiRoute.doOpenUrl, 'https://github.com/bojun1995/o-exif')
}
</script>
<script>
export default {
  name: 'TheLayoutHeader',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.header {
  height: 60px;
  background-color: $header_bg;
  -webkit-app-region: drag;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
}

.logo-box {
  display: flex;
  align-items: center;

  cursor: pointer;
  -webkit-app-region: no-drag;
}

.logo-text {
  color: $logo_color1;
  font-size: 35px;
  font-family: kidoproject;
  font-weight: bold;

  padding-left: 5px;
  padding-bottom: 5px;
}
</style>
