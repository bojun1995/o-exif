<template>
  <div class="aside">
    <n-menu :options="menuOptions" class="main-menu" />
    <n-menu :options="bottomOptions" />
  </div>
</template>

<script setup>
const menuOptions = ref([
  {
    label: '管理预设',
    key: 'exportConfig',
  },
  {
    label: '导出',
    key: 'export',
  },
])
const bottomOptions = ref([
  {
    label: '设置',
    key: 'setting',
  },
])
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.aside {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $border_color;
}

.main-menu {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
