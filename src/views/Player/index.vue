<template>
<div class="player">
  <NormalPlayer :totalTime="totalTime" :currentTime="currentTime"/>
  <MiniPlayer/>
  <ListPlayer/>
  <audio autoplay :src="currentSong.url" ref="audio" @timeupdate="timeupdate"></audio>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import NormalPlayer from '@/components/Player/NormalPlayer.vue'
import MiniPlayer from '@/components/Player/MiniPlayer.vue'
import ListPlayer from '@/components/Player/ListPlayer.vue'
export default {
  name: 'Player',
  data () {
    return {
      totalTime: 0,
      currentTime: 0
    }
  },
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    timeupdate (e) {
      // console.log(e.target.currentTime)
      this.currentTime = e.target.currentTime
    }
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
  },
  mounted () {
    this.$refs.audio.oncanplay = () => {
      this.totalTime = this.$refs.audio.duration
    }
  }
}
</script>

<style scoped lang="scss">
</style>
