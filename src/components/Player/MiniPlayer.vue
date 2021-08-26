<template>
<div class="mini-palyer" v-show="this.isShowMiniPlayer">
  <div class="play-wrapper">
    <div class="player-left" @click="showPlayer">
      <div class="img-mini" :style="active">
        <img :src="currentSong.picUrl">
      </div>
      <div class="play-title">
        <h3>{{currentSong.name}}</h3>
        <p>{{currentSong.singer}}</p>
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
      'isPlaying',
      'currentSong'
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
  height: 60px;
  .play-wrapper{
    box-sizing: border-box;
    padding: 0 12px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(241, 241, 241);
    .player-left{
      display: flex;
      .img-mini{
        margin-top: 2px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        animation-play-state: paused;
        animation: sport 5s linear infinite;
        img{
          width: 100%;
          height: 100%;
          background-image: url('https://img0.baidu.com/it/u=2068735270,2570475849&fm=26&fmt=auto&gp=0.jpg');
        }
      }
      .play-title{
        display: flex;
        width: 288px;
        flex-direction: column;
        justify-content: center;
        margin-left: 12px;
        h3{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          color: #444;
        }
        p{
          font-size: 12px;
          color: rgb(150, 150, 150);
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
