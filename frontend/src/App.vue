<template>
  <div>
    <div style="height: 50px; width: 50px">
      <n-icon size="40" color="#0E7A0D">
        <game-controller />
      </n-icon>
    </div>
    <n-button type="success">
      Success
    </n-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { GameController } from '@vicons/ionicons5'
import { NButton, NIcon } from 'naive-ui'

</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
