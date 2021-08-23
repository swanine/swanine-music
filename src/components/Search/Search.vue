<template>
<div class="search-wrap">
  <div class="search-box">
    <i class="icon-wrap">
      <img class="search-icon" src="@/assets/icon/search.png" alt="">
    </i>
    <input v-model="keywords" class="search-input" type="text" :placeholder="realkeyword">
  </div>
  <router-link to="/" class="search-right" tag="div">
    <span class="cancel">取消</span>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keywords: '',
      realkeyword: ''
    }
  },
  created () {
    this.$api.searchDefault().then((result) => {
      this.realkeyword = result.showKeyword
    })
  }
}
</script>

<style scoped lang="scss">
.search-wrap{
  display: flex;
  align-items: center;
  height: 42px;
  padding: 5px 16px 0 16px;
  .search-box{
    flex: 1;
    position: relative;
    height: 34px;
    line-height: 34px;
    border-radius: 50px;
    text-align: center;
    user-select: none;
    background-color: #f6f6f6;
    // box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.045);
    .icon-wrap{
      position: absolute;
      left: 16px;
      display: inline-block;
      .search-icon{
        width: 16px;
        vertical-align: middle;
      }
    }
    .search-input{
      width: 83%;
      margin-left: 34px;
      font-size: 15px;
      height: 34px;
      line-height: 34px;
      background-color: transparent;
      border: none;
      outline: none;
    }
    .search-input::placeholder{
      color: #b6b6b6;
    }
  }
  .search-right{
    width: 52px;
    height: 80px;
    font-size: 20px;
    line-height: 80px;
    text-align: right;
    .cancel{
      font-weight: 550;
    }
  }
}
</style>
