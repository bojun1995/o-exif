<template>
  <div class="app">
    <TheLayout></TheLayout>
  </div>
</template>

<script setup>
import TheLayout from '@/comp/TheLayout/index.vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.app {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
