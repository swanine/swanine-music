<template>
<div class="mini-palyer" v-show="this.isShowMiniPlayer">
  <div class="play-wrapper">
    <div class="player-left" @click="showPlayer">
      <img :style="active" src="https://img0.baidu.com/it/u=2068735270,2570475849&fm=26&fmt=auto&gp=0.jpg" alt="">
      <div class="play-title">
        <h3>演员</h3>
        <p>薛之谦</p>
      </div>
    </div>
    <div class="player-right">
      <div class="play"></div>
      <div class="list"></div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MiniPlayer',
  data () {
    return {
      isPlayed: true,
      active: {
        animationPlayState: 'running'
      }
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    showPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (value) {
      if (value) {
        this.active.animationPlayState = 'running'
      } else {
        this.active.animationPlayState = 'paused'
      }
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
  position: fixed;
  box-sizing: border-box;
  z-index: 4;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 66px;
  .play-wrapper{
    box-sizing: border-box;
    padding: 0 12px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(20px);
    background-color: rgb(255, 255, 255, .4);
    .player-left{
      display: flex;
      img{
        margin-top: 2px;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        animation: sport 4s linear infinite;
        animation-play-state: paused;
      }
      .play-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 12px;
        h3{
          font-size: 16px;
          color: #444;
        }
        p{
          font-size: 12px;
          color: #777;
        }
      }
    }
    .player-right{

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

@keyframes sport {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
