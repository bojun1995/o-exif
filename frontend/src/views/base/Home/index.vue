<template>
  <div class="test">Home</div>
  <div>
    {{ appStore.themeName }}
    {{ cp_test }}
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const cp_test = computed(() => {
  return 123
})
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
