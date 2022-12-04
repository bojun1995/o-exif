<template>
  <div class="test">Home</div>
  <div>
    {{ appStore.themeName }}
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>
<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.test {
  color: $g_color;
}
</style>
