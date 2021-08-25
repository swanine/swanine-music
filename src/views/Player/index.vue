<template>
<div class="player">
  <NormalPlayer/>
  <MiniPlayer/>
  <audio autoplay :src="currentSong.url" ref="audio"></audio>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import NormalPlayer from '../../components/Player/NormalPlayer.vue'
import MiniPlayer from '../../components/Player/MiniPlayer.vue'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (newValue) {
      if (newValue) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
