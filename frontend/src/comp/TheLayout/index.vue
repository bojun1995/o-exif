<template>
  <div class="the-layout">
    <Header></Header>
    <div class="layout-content">
      <Aside></Aside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from './comp/Header.vue'
import Aside from './comp/Aside.vue'
</script>
<script>
export default {
  name: 'TheLayout',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.layout-content {
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
