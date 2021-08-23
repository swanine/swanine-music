<template>
  <router-view/>
  <van-tabbar route>
    <van-tabbar-item replace to="/recom" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  created () {
  }
}
</script>
