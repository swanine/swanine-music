<template>
<!-- <v-touch>
    <div class="content" > -->

<div class="navBar">
  <div class="nav-item" @click="toplist">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-note"></use>
      </svg>
    </div>
    <div class="nav-Title">每日推荐</div>
  </div>

  <div class="nav-item" @click="toplist">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radio"></use>
      </svg>
    </div>
    <div class="nav-Title">私人FM</div>
  </div>

  <div class="nav-item" @click="playlist">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-music_transcript"></use>
      </svg>
    </div>
    <div class="nav-Title">歌单</div>
  </div>

  <div class="nav-item" @click="toplist">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-SanMiAppglyphico"></use>
      </svg>
    </div>
    <div class="nav-Title">排行榜</div>
  </div>

  <div class="nav-item">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gramophone_record"></use>
      </svg>
    </div>
    <div class="nav-Title">数字专辑</div>
  </div>

  <div class="nav-item">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-harp"></use>
      </svg>
    </div>
    <div class="nav-Title">专注冥想</div>
  </div>

  <!-- <div class="nav-item">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-turntable"></use>
      </svg>
    </div>
    <div class="nav-Title">练歌房</div>
  </div> -->

  <div class="nav-item">
    <div class="nav-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gramophone_record"></use>
      </svg>
    </div>
    <div class="nav-Title">数字专辑</div>
  </div>
</div>

<!-- </div>
</v-touch> -->
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toplist () {
      this.$emit('toplist')
    },
    playlist () {
      this.$emit('playlist')
    }
  }
}
</script>

<style scoped lang="scss">
.navBar::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.navBar{
  padding: 10px 16px;
  padding-bottom: 6px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 250, 250);
  gap: 20px;
  // width: 100vw;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  .nav-item{
    display: flex;
    width: 50px;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 12px;
    .nav-icon{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      text-align: center;
      background-color: rgb(255, 243, 248);
      box-shadow: 0 0 10px 4px rgba(241, 241, 241, 0.829);
      .icon{
        margin: 0;
      }
    }
    .nav-Title{
      color: #666666;
      padding: 10px 0;
    }
  }
}
</style>
<style type="text/css">
.icon {
   width: 2.6em; height: 2.6em;
   text-align: center;
   fill: currentColor;
   margin-top: 16px;
   overflow: hidden;
}
</style>
