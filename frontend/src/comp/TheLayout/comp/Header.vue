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
    <div class="btn-box">
      <n-icon size="30" class="normal-btn" @click="onMinSizeWindowClk">
        <i class="ri-subtract-line"></i>
      </n-icon>
      <n-icon size="20" class="normal-btn fullscreen-btn" @click="onMaxSizeWindowClk">
        <i class="ri-checkbox-blank-line"></i>
      </n-icon>
      <n-icon size="20" class="normal-btn fullscreen-btn" @click="onUnMaxSizeWindowClk">
        <i class="ri-checkbox-multiple-blank-line"></i>
      </n-icon>
      <n-icon size="30" class="close-btn" @click="onHideWindowClk">
        <i class="ri-close-line"></i>
      </n-icon>
    </div>
  </div>
</template>

<script setup>
import logoSVG from '@/assets/icon/logo.svg'
import { eleCtrlApiRoute, sendSync } from '@/util/ipcRender'

function onLogoClk() {
  sendSync(eleCtrlApiRoute.doOpenUrl, 'https://github.com/bojun1995/o-exif')
}
function onMinSizeWindowClk() {
  sendSync(eleCtrlApiRoute.doMinSizeWindow)
}
function onMaxSizeWindowClk() {
  sendSync(eleCtrlApiRoute.doMaxSizeWindow)
}
function onUnMaxSizeWindowClk() {
  sendSync(eleCtrlApiRoute.doUnMaxSizeWindow)
}
function onHideWindowClk() {
  sendSync(eleCtrlApiRoute.doHideWindow)
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

.btn-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
}

.normal-btn {
  cursor: pointer;
  -webkit-app-region: no-drag;
  color: $logo_color1;
}

.close-btn {
  cursor: pointer;
  -webkit-app-region: no-drag;
  color: #e05546;
}

.fullscreen-btn {
  font-weight: 600;
  margin-left: 5px;
  margin-right: 4px;
}
</style>
