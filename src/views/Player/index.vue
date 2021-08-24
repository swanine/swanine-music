<template>
<div class="player">
  <NormalPlayer/>
  <MiniPlayer/>
</div>
</template>

<script>
import NormalPlayer from '../../components/Player/NormalPlayer.vue'
import MiniPlayer from '../../components/Player/MiniPlayer.vue'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer
  }
}
</script>

<style scoped lang="scss">
</style>
