<template>
<div class="activities">
  <span class="title">推荐活动</span>
  <div class="activeBox">
    <div class="leftImg">
      <img src="" alt="">
    </div>
    <div class="activeDetails">
      <p>邀请好友加入，得丰厚大礼邀请好友加入</p>
    </div>
  </div>

  <div class="activeBox">
    <div class="leftImg"></div>
    <div class="activeDetails">
      <p>邀请好友加入，得丰厚大礼</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Activities'
}
</script>

<style scoped lang="scss">
.activities{
  padding: 8px 16px;
  font-size: 18px;
  .title{
    display: inline-block;
    font-weight: 600;
  }
  .activeBox{
    display: flex;
    align-items: center;
    .leftImg{
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background-color: yellowgreen;
    }
    .activeDetails{
      flex: 1;
      margin: 0 10px;
      font-size: 16px;
      padding: 18px 0;
      overflow: hidden;
      border-bottom: 1px solid rgb(219, 219, 219);
      p{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      }
    }
  }
}
</style>
