<template>
<div class="player-bottom">
  <div class="bottom-progress">
    <span>00:00</span>
    <div class="progress-bar">
      <div class="progress-line">
        <div class="progress-dot"></div>
      </div>
    </div>
    <span>00:00</span>
  </div>
  <div class="bottom-control">
    <div class="heart">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconxd"></use>
      </svg>
    </div>
    <div class="last-song">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
    </div>
    <div class="play-pause" @click="playPause">
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
    <div class="song-list">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiaoguanli"></use>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerBottom',
  data () {
    return {
      isPlayed: false
    }
  },
  methods: {
    playPause () {
      this.isPlayed = !this.isPlayed
    }
  }
}
</script>

<style scoped lang="scss">
.player-bottom{
  font-size: 10px;
  margin-top: 30px;
  .bottom-progress{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .progress-bar{
      width: 74%;
      height: 3px;
      margin: 0 10px;
      border-radius: 4px;
      background-color: rgb(189, 189, 189);
      position: relative;
      .progress-line{
        width: 50%;
        height: 3px;
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        .progress-dot{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
        }
      }
    }
  }
  .bottom-control{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 36px;
  font-size: 20px;
  color: rgb(105, 105, 105);
  .heart{
    .icon{
      width: 26px; height: 26px;
    }
  }
  .play-pause{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid rgb(105, 105, 105);
    .play{
      .icon{
        margin-left: 8px;
        margin-top: 0;
        width: 40px; height: 40px;
      }
    }
    .pause{
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        display: block;
        margin: 5px;
        width: 2px;
        height: 28px;
        border-radius: 10px;
        background-color: rgb(105, 105, 105);
      }
    }
  }
  .song-list{
    .icon{
      width: 26px; height: 26px;
    }
  }
}
.icon {
  width: 27px; height: 27px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-top: 7px;
}
}
</style>
