<template>
<div class="player">
  <div>
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
import Playerheader from '../../components/Player/PlayHeader.vue'
import PlayerMiddle from '../../components/Player/PlayerMiddle.vue'
import PlayBottom from '../../components/Player/PlayBottom.vue'
export default {
  name: 'Player',
  components: {
    Playerheader,
    PlayerMiddle,
    PlayBottom
  }
}
</script>

<style scoped lang="scss">
.player{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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
}
</style>
