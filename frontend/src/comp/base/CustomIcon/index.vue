<template>
  <n-icon v-bind="$attrs">
    <i :class="props.className"></i>
  </n-icon>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: 'ri-home-line',
  },
})
</script>
<script>
export default {
  name: 'CustomIcon',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
