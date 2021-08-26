<template>
<van-sticky z-index="1">
  <div class="header">
    <div class="header-left" @click="getMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <router-link to="/search" class="header-content">
      <span class="header-text">
        <i class="icon-wrap">
          <img class="search-icon" src="@/assets/icon/search.png" alt="">
        </i>
        搜索音乐、视频、歌词
        </span>
    </router-link>
    <div class="header-right"></div>
  </div>
  </van-sticky>
</template>

<script>
// import Search from './Search.vue'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    getMenu () {
      this.$emit('getMenuList')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding-top: 5px;
  height: 42px;
  background-color: rgb(250, 250, 250);
  backdrop-filter: blur(20px);
  .header-left,.header-right{
    width: 50px;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
      color: rgb(14, 14, 14);
      width: 28px; height: 28px;
      fill: currentColor;
      margin: 0;
      overflow: hidden;
    }
  }
  .header-bgColor{
    background-color: #f000;
  }
  .header-content{
    flex: 1;
    height: 34px;
    line-height: 30px;
    border-radius: 50px;
    text-align: center;
    user-select: none;
    background-color: rgb(233, 233, 233);
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.045);
    .header-text{
      font-size: 14px;
      color: #b6b6b6;
      .icon-wrap{
        display: inline-block;
        .search-icon{
          width: 16px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
