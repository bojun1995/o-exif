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
    itemColorActive: '#E1F3F0',
    itemColorActiveHover: '#E1F3F0',
    itemTextColorActive: '#00AA95',
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
