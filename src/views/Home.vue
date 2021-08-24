<template>
  <router-view/>
  <MiniPlayer/>
  <van-tabbar route>
    <van-tabbar-item replace to="/recom" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
// @ is an alias to /src
import MiniPlayer from '../components/Player/MiniPlayer.vue'
export default {
  name: 'Home',
  components: {
    MiniPlayer
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
