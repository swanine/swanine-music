<template>
<div>
  <van-cell is-link @click="showPopup">展示弹出层</van-cell>
  <van-popup v-model:show="show" position="left" :style="{ height: '100%', width: '60%' }" />
</div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showPopup = () => {
  show.value = true
}
</script>

<style scoped lang="scss">
</style>
