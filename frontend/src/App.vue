<template>
  <NConfigProvider class="config-box" :theme-overrides="themeOverrides">
    <div class="app">
      <TheLayout></TheLayout>
    </div>
  </NConfigProvider>
</template>

<script setup>
import TheLayout from '@/comp/TheLayout/index.vue'
import { NConfigProvider } from 'naive-ui'

const themeOverrides = ref({
  Menu: {
    itemColorActive: 'rgb(243, 243, 245)',
    itemColorActiveHover: 'rgb(243, 243, 245)',
    itemIconColorActive: 'rgb(51, 54, 57)',
    itemTextColorActive: 'rgb(51, 54, 57)',
    itemIconColorActiveHover: 'rgb(51, 54, 57)',
    itemTextColorActiveHover: 'rgb(51, 54, 57)',
  },
})
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.config-box {
  height: 100%;
  width: 100%;
}

.app {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
