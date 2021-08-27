<template>
  <div class="header">
    <div class="header-left" @click="goBack">
      <slot name="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrl"></use>
        </svg>
      </slot>
    </div>
    <div class="header-content">
      <h2 class="header-title">{{title}}</h2>
    </div>
    <div class="header-right">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script>
// import Search from './Search.vue'
export default {
  name: 'PlayHeader',
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 10px 0 10px;
  height: 47px;
  background-color: rgb(255, 255, 255);
  .header-left,.header-right{
    width: 30px;
    height: 50px;
    line-height: 50px;
    .icon {
      width: 24px; height: 24px;
      fill: currentColor;
      margin-top: 12px;
      overflow: hidden;
    }
  }
  .header-bgColor{
    background-color: #f000;
  }
  .header-content{
    flex: 1;
    text-align: center;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    .header-title{
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
