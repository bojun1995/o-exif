<template>
  <div class="header">
    <div class="logo-box">
      <div class="logo-svg"></div>
      <div class="logo-text">
        <span>o-exif</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>
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
}
</style>
