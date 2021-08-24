<template>
  <router-view/>
  <Player :isShow="isShow"/>
  <van-tabbar route>
    <van-tabbar-item replace to="/recom" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
  </van-tabbar>
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
