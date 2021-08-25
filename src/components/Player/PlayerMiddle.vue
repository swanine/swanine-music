<template>
<van-swipe class="my-swipe" @change="onChange">
  <van-swipe-item>
    <div class="cd-wrapper">
      <img :style="active" :src="currentSong.picUrl" alt="">
    </div>
    <p>少拿点收到就好发</p>
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
  .cd-wrapper{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 30px 0;
    img{
      border-radius: 50%;
      height: 260px;
      box-shadow: 0 0 1px 14px rgba(10, 10, 10, .1);
      animation: sport 4s linear infinite;
      animation-play-state: paused;
    }
  }
  p{
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: #666;
  }
  .custom-indicator{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 50px 0 10px;
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
