<template>
  <div class="the-layout">
    <Header></Header>
    <div class="the-layout-content">
      <Aside></Aside>
      <n-scrollbar>
        <div class="router-box">
          <router-view></router-view>
        </div>
      </n-scrollbar>
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

.the-layout-content {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
}

.router-box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  overflow: auto;
}
</style>
