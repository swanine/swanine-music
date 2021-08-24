<template>
<div class="player">
  <div class="play-media" v-show="isShow">
    <Playerheader :isShow="isShow" @hiddenPlayer="showMini"/>
    <Player :isPlayed="isPlayed" @changePlay="setPlay"/>
    <PlayControl :isPlayed="isPlayed" @changePlay="setPlay"/>
  </div>
  <div class="mini-play">
    <MiniPlayer v-show="!isShow" @showPlayer="hiddenMini"/>
  </div>
  <audio autoplay ref="audios" :src="songPath.url"></audio>
</div>
</template>

<script>
import Playerheader from '../../components/Player/PlayHeader.vue'
import Player from '../../components/Player/PlayCore.vue'
import PlayControl from '../../components/Player/PlayControl'
import MiniPlayer from '../../components/Player/MiniPlayer'
export default {
  name: 'PlayerPage',
  data () {
    return {
      isShow: false,
      isPlayed: true,
      songPath: {}
    }
  },
  components: {
    Playerheader,
    Player,
    PlayControl,
    MiniPlayer
  },
  created () {
  },
  methods: {
    setPlay () {
      this.isPlayed = !this.isPlayed
    },
    showMini () {
      this.isShow = !this.isShow
    },
    hiddenMini () {
      this.isShow = !this.isShow
    }
  },
  watch: {
    isPlayed (value) {
      value ? this.$refs.audios.play() : this.$refs.audios.pause()
    }
  }
}
</script>

<style scoped lang="scss">
.play-media{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgb(196, 226, 255);
  button{
    width: 400px;
    height: 100px;
  }
}
.play-media::before{
  content: '';
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgb(126, 126, 126);
  background: url('https://img2.baidu.com/it/u=148537279,2623985518&fm=26&fmt=auto&gp=0.jpg') no-repeat;
  filter: blur(16px);
  background-size: 200%;
  background-position: center;
}
</style>
