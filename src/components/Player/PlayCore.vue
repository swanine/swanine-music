<template>
<div class="player">
  <div class="needle" :style="needlePlay">
    <div class="needle-origin">
      <div class="point"></div>
    </div>
    <div class="needle-body">
      <div class="body-upper"></div>
      <div class="body-under">
        <span></span>
        <div class="needle-header">
          <div class="header-point">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="record">
    <div class="record-after">
      <div class="record-img" :style="play" @click="played">
        <img src="https://img2.baidu.com/it/u=3468384679,3521528174&fm=26&fmt=auto&gp=0.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      play: {
        animationPlayState: 'running'
      },
      needlePlay: {
        // animation: needle 1s ease-in-out 2 alternate;
        transform: 'rotate(0deg)'
        // transition: 'transform 1s'
      },
      songUrl: {}
    }
  },
  props: {
    // :class="{'record-paused':isPlayed}"
    isPlayed: {
      type: Boolean
    }
  },
  methods: {
    played () {
      this.$emit('changePlay')
    }
  },
  watch: {
    isPlayed (value) {
      value ? this.play.animationPlayState = 'running' : this.play.animationPlayState = 'paused'
      value ? this.needlePlay.transform = 'rotate(0deg)' : this.needlePlay.transform = 'rotate(-20deg)'
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes rotate{from{transform: rotate(0deg)}
to{transform: rotate(360deg)}
}

@keyframes needle{
  from{ transform: rotate(-15deg)}
  to{ transform: rotate(-38deg)}
}

.player{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .needle{
    margin-top: 40px;
    width: 80px;
    height: 200px;
    transform-origin: top;
    //animation: needle 1s ease-in-out 2 alternate;
    transition: transform 1s;
    .needle-origin{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background-color: white;
      margin: 0 auto;
      box-shadow: 0 0 2px 12px rgba(0, 0, 0, 0.151);
      .point{
        width: 18px;
        height: 18px;
        background-color: #cacaca;
        border-radius: 50%;
      }
    }
    .needle-body{
      position: relative;
      transform: rotate(-16deg) translate(4px,-4px);
      .body-upper{
        position: absolute;
        left: 33px;
        top: -3px;
        width: 15px;
        height: 210px;
        border-radius: 25px;
        background-color: #fff;
      }
      .body-under>span{
        position: absolute;
        left: 6px;
        bottom: 60px;
        width: 3px;
        height: 14px;
        background-color: #000000;
      }
      .body-under{
        position: absolute;
        left: 57px;
        top: 176px;
        width: 16px;
        height: 150px;
        border-radius: 40%;
        transform: rotate(-25deg);
        background-color: #fff;
        .needle-header{
          position: absolute;
          bottom: 0;
          left: -5px;
          width: 26px;
          height: 60px;
          border-radius: 8px;
          box-sizing: border-box;
          background-color: #fff;
          border: 1px solid #cacaca;
          .header-point{
            position: absolute;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-sizing: border-box;
            padding: 0 3px;
            bottom: -20px;
            left: -7px;
            width: 40px;
            height: 34px;
            border: 1px solid #cacaca;
            background-color: #fff;
            border-radius: 10px;
          }
          .header-point>span{
            display: block;
            width: 2px;
            height: 22px;
            background-color: #a8a8a8;
          }
        }
      }
    }
  }
  .record{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 600px;
    // margin-top: 280px;
    margin-bottom: 120px;
    border-radius: 50%;
    border: 1px solid #ffffff1e;
    background: #ffffff13;
    .record-after{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 540px;
      height: 540px;
      border-radius: 50%;
      box-shadow: 0 0 10px 4px #1f1f1f73;
      background-image: linear-gradient(-15deg, #434343 0%, #000000 100%);
      .record-img{
        display: flex;
        width: 66%;
        height: 66%;
        border-radius: 50%;
        background-color: yellowgreen;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        animation: rotate 5s linear infinite;
        img{
          height:100%;
        }
      }
      .record-paused{
        animation-play-state:paused;//running
        -webkit-animation-play-state:paused; /* Safari 和 Chrome */
      }
    }
  }
}

</style>
