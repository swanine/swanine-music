<template>
<div class="mini-palyer" @click="showPlayer">
  <div class="needle">
    <img src="" alt="">
  </div>
  <div class="song-info">
    <span class="song">演员 — </span>
    <span class="singer">薛之谦</span>
  </div>
  <div class="mini-player-control">
    <div class="last-song">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
    </div>
    <div class="play-pause" @click.stop="playPause">
      <div class="play" v-if="!isPlayed">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang_huaban1"></use>
        </svg>
      </div>
      <div class="pause" v-else>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="next-song">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MiniPlayer',
  data () {
    return {
      isPlayed: true
    }
  },
  methods: {
    playPause () {
      this.isPlayed = !this.isPlayed
    },
    showPlayer () {
      this.$emit('showPlayer')
    }
  }
}
</script>

<style scoped lang="scss">
// .mini-palyer::after{
//   content: '';
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   height: 130px;
//   width: 100%;
//   filter: blur(10px);
//   z-index: -666;
// }
.mini-palyer{
  display: flex;
  justify-content: space-around;
  position: fixed;
  box-shadow: 0 0 30px 4px #e0e0e071;
  bottom: 50px;
  left: 0;
  height: 60px;
  width: 100%;
  font-size: 16px;
  color: #1f1f1ff3;
  background-color: #ffffff83;
  backdrop-filter: blur(20px);
  .song-info{
    width: 140px;
    line-height: 40px;
    padding: 10px 0;
  }
  .needle{
    position: relative;
    bottom: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .mini-player-control{
    display: flex;
    width: 110px;
    align-items: center;
    gap: 10px;
    .play-pause{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    .play{
      .icon{
        margin-left: 8px;
        margin-top: 0;
        width: 28px; height: 28px;
      }
    }
    .pause{
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        display: block;
        margin: 4px;
        width: 2px;
        height: 20px;
        border-radius: 20px;
        background-color: #acacacd3;
      }
    }
  }
  }
}
.icon {
  width: 23px; height: 23px;
  vertical-align: -0.15em;
  fill: currentColor;
  color: #acacacd3;
  overflow: hidden;
  margin: 0;
}
</style>
