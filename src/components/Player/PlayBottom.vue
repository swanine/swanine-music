<template>
<div class="player-bottom">
  <div class="bottom-progress">
    <span ref="eleCurrentTime">00:00</span>
    <div class="progress-bar">
      <div class="progress-line">
        <div class="progress-dot"></div>
      </div>
    </div>
    <span ref="eleTotalTime">00:00</span>
  </div>
  <div class="bottom-control">
    <div class="heart">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconxd"></use>
      </svg>
    </div>
    <div class="last-song" @click="lastSong">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
    </div>
    <div class="play-pause" @click="playPause">
      <div class="play" v-if="!this.isPlaying">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang_huaban1"></use>
        </svg>
      </div>
      <div class="pause" v-else>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="next-song" @click="nextSong">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
    </div>
    <div class="song-list" @click="songlist">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiaoguanli"></use>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'vant'
import { formartTime } from '@/utils/tools'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PlayerBottom',
  methods: {
    ...mapActions([
      'setIsPlaying',
      'setCurrentIndex',
      'setIsShowSongList'
    ]),
    playPause () {
      this.setIsPlaying(!this.isPlaying)
      console.log(this.isPlaying)
    },
    // 歌曲切换
    lastSong () {
      if (this.songs.length === 1) {
        Toast('没有上一首啦,再添加点吧')
      } else {
        this.setCurrentIndex(this.currentIndex - 1)
        this.setIsPlaying(true)
      }
    },
    nextSong () {
      if (this.songs.length === 1) {
        Toast('没有下一首啦,再添加点吧')
      } else {
        this.setCurrentIndex(this.currentIndex + 1)
        this.setIsPlaying(true)
      }
    },
    // 播放列表
    songlist () {
      this.setIsShowSongList(true)
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentIndex',
      'songs'
    ])
  },
  props: {
    totalTime: {
      type: Number,
      default: 0,
      required: true
    },
    currentTime: {
      type: Number,
      default: 0,
      required: true
    }
  },
  watch: {
    totalTime (value) {
      // eslint-disable-next-line prefer-const
      let time = formartTime(value)
      this.$refs.eleTotalTime.innerHTML = time.minute + ':' + time.second
    },
    currentTime (value) {
      // eslint-disable-next-line prefer-const
      let time = formartTime(value)
      this.$refs.eleCurrentTime.innerHTML = time.minute + ':' + time.second
    }
  }
}
</script>

<style scoped lang="scss">
.player-bottom{
  font-size: 10px;
  margin-top: 20px;
  .bottom-progress{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    span{
      color: rgb(224, 224, 224);
    }
    .progress-bar{
      width: 74%;
      height: 3px;
      margin: 0 10px;
      border-radius: 4px;
      background-color: rgb(189, 189, 189);
      position: relative;
      .progress-line{
        width: 3%;
        height: 3px;
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        .progress-dot{
          position: absolute;
          left: 5px;
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
  color: rgba(255, 255, 255, .7);
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
    border: 1px solid rgba(255, 255, 255, .7);
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
        background-color: rgba(255, 255, 255, .7);
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
