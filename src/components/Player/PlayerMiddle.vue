<template>
<van-swipe class="my-swipe" @change="onChange">
  <van-swipe-item class="cd">
    <div class="cd-wrapper" :style="active">
      <img :src="currentSong.picUrl" alt="">
    </div>
    <p>歌词</p>
  </van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      <span :style="bgcolorF"></span>
      <span :style="bgcolorW"></span>
    </div>
  </template>
</van-swipe>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerMiddle',
  data () {
    return {
      bgcolorF: {
        backgroundColor: '#fff',
        width: 16 + 'px'
      },
      bgcolorW: {
        backgroundColor: '',
        width: 6 + 'px'
      },
      active: {
        animationPlayState: 'running'
      }
    }
  },
  computed: {
    ...mapGetters([
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
  },
  methods: {
    onChange (index) {
      index === 0 ? this.bgcolorF.backgroundColor = '#FFF' : this.bgcolorF.backgroundColor = ''
      index === 1 ? this.bgcolorF.width = 6 + 'px' : this.bgcolorF.width = 16 + 'px'
      index === 1 ? this.bgcolorW.backgroundColor = '#FFF' : this.bgcolorW.backgroundColor = ''
      index === 0 ? this.bgcolorW.width = 6 + 'px' : this.bgcolorW.width = 16 + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.my-swipe{
  .cd{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 360px;
    padding: 20px 0 0;
    .cd-wrapper{
      height: 250px;
      width: 250px;
      background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 1px 16px rgba(10, 10, 10, .1);
      animation: sport 5s linear infinite;
      animation-play-state: paused;
      img{
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
    }
    p{
      height: 40px;
      text-align: center;
      font-size: 16px;
      color: #666;
    }
  }
  .custom-indicator{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 10px 0;
    span{
      display: inline-block;
      border-radius: 6px;
      width: 16px;
      height: 5px;
      background-color: rgb(211, 211, 211);
    }
  }
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
