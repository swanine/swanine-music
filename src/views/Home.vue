<template>
  <router-view/>
  <Player/>
</template>

<script>
// @ is an alias to /src
import Player from './Player/index.vue'
export default {
  name: 'Home',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Player
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar{
  background-color: white;
  .van-tabbar-item--active{
  background-color: white;
  }
}
</style>
