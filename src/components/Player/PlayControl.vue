<template>
<div class="play-control">
  <div class="control-top">
    <div class="song-like">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-heart-fill"></use>
      </svg>
    </div>
    <div class="song-download">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconset0425"></use>
      </svg>
    </div>
    <div class="song-comments">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jianyi"></use>
      </svg>
    </div>
    <div class="song-details">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="song-time">
    <span class="start">00:00</span>
    <div class="article"></div>
    <span class="end">00:00</span>
  </div>
  <div class="song-control">
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
  name: 'PlayControl',
  data () {
    return {
    }
  },
  props: {
    // :class="{'record-paused':isPlayed}"
    isPlayed: {
      type: Boolean
    }
  },
  methods: {
    playPause () {
      this.$emit('changePlay')
    }
  }
}
</script>

<style scoped lang="scss">
.control-top>div{
  width: 60px;
  text-align: center;
}
.control-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 66px;
  font-size: 30px;
  color: rgb(105, 105, 105);
  .song-like{
  }
  .song-comments{
    .icon{
      width: 62px; height: 62px;
    }
  }
  .song-details{
    display: flex;
    width: 46px;
    height: 46px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    span{
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 10px;
      background-color: rgb(105, 105, 105);
    }
  }
}
.song-time{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-size: 22px;
  color: rgb(105, 105, 105);
  .article{
    margin: 0 30px;
    flex: 1;
    height: 2px;
    background-color: rgb(105, 105, 105);
  }
}
.song-control{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 66px;
  font-size: 30px;
  color: rgb(105, 105, 105);
  .heart{
    .icon{
      width: 50px; height: 50px;
    }
  }
  .play-pause{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 3px solid rgb(105, 105, 105);
    .play{
      .icon{
        margin-left: 8px;
        margin-top: 0;
        width: 78px; height: 78px;
      }
    }
    .pause{
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        display: block;
        margin: 10px;
        width: 8px;
        height: 54px;
        border-radius: 20px;
        background-color: rgb(105, 105, 105);
      }
    }
  }
  .song-list{
    .icon{
      width: 46px; height: 46px;
    }
  }
}
.icon {
  width: 56px; height: 56px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
