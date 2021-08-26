<template>
<transition
  @enter="enter"
  @leave="leave"
  :css="false"
>
<div class="normal-player" v-show="this.isFullScreen">
  <div class="player-wrapper">
    <Playerheader>
      <template v-slot:left>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrb"></use>
        </svg>
      </template>
    </Playerheader>
    <PlayerMiddle/>
    <PlayBottom/>
  </div>
  <img :src="currentSong.picUrl">
</div>
</transition>
</template>

<script>
import Playerheader from './PlayHeader.vue'
import PlayerMiddle from './PlayerMiddle.vue'
import PlayBottom from './PlayBottom.vue'
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'NormalPlayer',
  data () {
    return {
      bgImg: {
      }
    }
  },
  components: {
    Playerheader,
    PlayerMiddle,
    PlayBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen',
      'currentSong'
    ])
  },
  methods: {
    enter (el, done) {
      Velocity(el, 'transition.slideUpIn', { duration: 320 }, () => { done() })
    },
    leave (el, done) {
      Velocity(el, 'transition.slideDownBigOut', { duration: 320 }, () => { done() })
    }
  }
}
</script>

<style scoped lang="scss">
.normal-player{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(-30deg, #9795f0 0%, #fbc8d4 100%);
  &>div{
    height: 100%;
    backdrop-filter: blur(24px);
  }
  .player-wrapper{
    width: 100%;
    height: 100%;
  }
  img{
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: blur(20px);
    z-index: -1;
  }
}
</style>
