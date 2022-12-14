<template>
  <div class="the-aside">
    <n-menu
      key="topMenu"
      :value="topMenuSelected"
      :options="topMenuOptions"
      class="main-menu"
      @update:value="onTopMenuSelectedChg"
    />
    <div class="divider-box">
      <n-divider />
    </div>
    <n-menu
      key="bottomMenu"
      :value="bottomMenuSelected"
      :options="bottomOptions"
      @update:value="onBottomMenuSelectedChg"
    />
  </div>
</template>

<script setup>
import CustomIcon from '@/comp/base/CustomIcon/index.vue'
import { RouterLink } from 'vue-router'

function renderIcon(className) {
  return () => h(CustomIcon, { className })
}

const topMenuSelected = ref('exportConfig')
const bottomMenuSelected = ref('')

const topMenuOptions = ref([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'exportConfig',
          },
        },
        { default: () => '管理预设' }
      ),
    key: 'exportConfig',
    icon: renderIcon('ri-file-code-line'),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'exportPicture',
          },
        },
        { default: () => '导出图片' }
      ),
    key: 'exportPicture',
    icon: renderIcon('ri-image-line'),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'testExport',
          },
        },
        { default: () => '测试导出' }
      ),
    key: 'testExport',
    icon: renderIcon('ri-xbox-fill'),
  },
])
const bottomOptions = ref([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'appSetting',
          },
        },
        { default: () => '设置' }
      ),
    key: 'appSetting',
    icon: renderIcon('ri-settings-4-line'),
  },
])

function onTopMenuSelectedChg(key) {
  bottomMenuSelected.value = ''
  topMenuSelected.value = key
}
function onBottomMenuSelectedChg(key) {
  topMenuSelected.value = ''
  bottomMenuSelected.value = key
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-aside {
  width: 200px;
  height: 100%;
  // padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid $border_color;
}

.main-menu {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.divider-box {
  padding: 0px 10px;
  .n-divider {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
