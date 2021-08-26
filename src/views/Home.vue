<template>
  <Header/>
  <router-view/>
  <Player/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Player from './Player/index.vue'
export default {
  name: 'Home',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Player,
    Header
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
