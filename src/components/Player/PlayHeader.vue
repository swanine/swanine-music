<template>
<div class="play-header">
  <div class="play-header-left" @click="hidden">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-arrb"></use>
    </svg>
  </div>
  <div class="play-header-title">
    <h3 class="song">歌名</h3>
    <div class="singer">歌手</div>
  </div>
  <div class="play-header-right">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-fenxiang"></use>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  name: 'Playheader',
  methods: {
    hidden () {
      this.$emit('hiddenPlayer')
    }
  },
  props: {
    isShow: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.play-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  padding: 40px;
  color: #fff;
  .play-header-left{
    .icon {
       width: 56px; height: 56px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  }
  .play-header-title{
    padding: 0 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
     white-space: nowrap;
    letter-spacing: 3px;
    .singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 24px;
    letter-spacing:1px
  }
    .song{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .play-header-right{
    .icon {
       width: 56px; height: 56px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  }
}
</style>
