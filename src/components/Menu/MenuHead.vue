<template>
<div class="menu-container">
  <div class="user">
      <span class="userImg">
        <img src="@/assets/icon/8266075.png" alt="">
      </span>
      <span class="userName">swanine</span>
  </div>
  <div class="vipCenter">
      <div class="vipInfo">
        <span class="leftInfo">黄胶VIP</span>
        <span class="rightInfo">会员中心</span>
      </div>
      <span class="vipLevel">我的会员等级</span>
      <div class="advInfo">
        <div class="advLeft">
          <p>英雄出少年，给奥运健儿加油!</p>
        </div>
        <div class="advRight">
          <img src="" alt="">
        </div>
      </div>
  </div>
  <div class="menuList">
    <van-cell title="歌单广场" is-link @click="toPlayList"></van-cell>
    <van-cell title="排行榜" is-link @click="toTopList"></van-cell>
    <van-cell title="搜索" is-link @click="toSearch"></van-cell>
  </div>
</div>
</template>

<script>
export default {
  name: 'MenuHead',
  methods: {
    toPlayList () {
      this.$emit('toPlayList')
    },
    toTopList () {
      this.$emit('toTopList')
    },
    toSearch () {
      this.$emit('toSearch')
    }
  }
}
</script>

<style scoped lang="scss">
.menu-container{
  padding: 26px 16px;
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(241, 241, 241);
  .user{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .userImg{
      img{
        width: 40px;
        border-radius: 50%;
      }
    }
    .userName{
      display: inline-block;
      margin-left: 8px;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .vipCenter{
    width: 100%;
    height: 90px;
    border-radius: 14px;
    padding: 10px;
    box-sizing: border-box;
    color: antiquewhite;
    background-color: #666;
    .vipInfo{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .leftInfo{
        font-size: 16px;
        font-weight: 600;
      }
      .rightInfo{
        font-size: 10px;
        padding: 3px 6px;
        border: 1px solid antiquewhite;
        border-radius: 25px;
      }
    }
    .vipLevel{
      color: rgb(185, 176, 164);
      font-size: 8px;
    }
    .advInfo{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 17px;
      font-size: 8px;
      color: rgb(185, 176, 164);
      .advRight{
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 2px;
      }
    }
  }
  .menuList{
    margin: 16px 0;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
