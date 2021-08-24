<template>
<van-swipe class="my-swipe" indicator-color="white" :loop="false" @change="onChange">
  <van-swipe-item>
    <div class="cd-wrapper">
      <img src="https://img0.baidu.com/it/u=2068735270,2570475849&fm=26&fmt=auto&gp=0.jpg" alt="">
    </div>
    <p>少拿点收到就好发</p>
  </van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      <span :style="bgcolorF"></span>
      <span :style="bgcolorW"></span>
    </div>
  </template>
</van-swipe>
</template>

<script>
export default {
  name: 'PlayerMiddle',
  data () {
    return {
      bgcolorF: {
        backgroundColor: '#fff',
        width: 16 + 'px'
      },
      bgcolorW: {
        backgroundColor: '',
        width: 6 + 'px'
      }
    }
  },
  methods: {
    onChange (index) {
      index === 0 ? this.bgcolorF.backgroundColor = '#FFF' : this.bgcolorF.backgroundColor = ''
      index === 1 ? this.bgcolorF.width = 6 + 'px' : this.bgcolorF.width = 16 + 'px'
      index === 1 ? this.bgcolorW.backgroundColor = '#FFF' : this.bgcolorW.backgroundColor = ''
      index === 0 ? this.bgcolorW.width = 6 + 'px' : this.bgcolorW.width = 16 + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.my-swipe{
  .cd-wrapper{
    display: flex;
    justify-content: center;
    width: 100%;
    img{
      margin: 50px 0;
      border-radius: 50%;
      height: 250px;
      box-shadow: 0 0 1px 14px rgba(136, 136, 136, 0.205);
    }
  }
  p{
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: #666;
  }
  .custom-indicator{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 50px 0 10px;
    span{
      display: inline-block;
      border-radius: 6px;
      width: 16px;
      height: 5px;
      background-color: rgb(211, 211, 211);
    }
  }
}
</style>
