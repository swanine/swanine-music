<template>
<div class="swiper">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
    <van-swipe-item v-for="item in banner" :key="item.bannerId">
      <a :href="item.url">
        <img :src="item.pic" :alt="item.typeTitle">
      </a>
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
// import style (>= Swiper 6.x)
export default {
  name: 'Banner',
  data () {
    return {
      banner: []
    }
  },
  created () {
    this.$api.getBanner().then((res) => {
      this.banner = res.banners
    })
  }
}
</script>

<style lang="scss">
.swiper{
  .van-swipe__track{
    height: 100%;
  }
  .my-swipe{
    height: 156px;
    text-align: center;
    vertical-align: middle;
    img{
      width: 92%;
      border-radius: 12px;
      margin-top: 16px;
    }
  }
}
</style>
