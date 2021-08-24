<template>
<div class="normal-player" v-show="this.$store.getters.isFullScreen">
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
</div>
</template>

<script>
import Playerheader from './PlayHeader.vue'
import PlayerMiddle from './PlayerMiddle.vue'
import PlayBottom from './PlayBottom.vue'
export default {
  name: 'NormalPlayer',
  components: {
    Playerheader,
    PlayerMiddle,
    PlayBottom
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
  background-color: rgba(127, 255, 212, 0);
  background: url('https://img0.baidu.com/it/u=2068735270,2570475849&fm=26&fmt=auto&gp=0.jpg') no-repeat;
  background-size: 300%;
  backdrop-filter: blur(40px);
  &>div{
    height: 100%;
    backdrop-filter: blur(24px);
  }
  .player-wrapper{
    width: 100%;
    height: 100%;
  }
}
</style>
