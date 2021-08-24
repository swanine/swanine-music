<template>
  <div class="list-content" :style="{background: 'url(' + playlist.coverImgUrl + ')'}">
     <!-- :style="{background: 'url(' + playlist.coverImgUrl + ')'}" -->
     <main>
      <div class="listleft" @click="aylist">
        <img :src="playlist.coverImgUrl" alt="">
      </div>
      <div class="listright">
        <div class="detail-name">
          <h2>{{playlist.name}}</h2>
        </div>
        <div class="detail-title">
          <h3>{{playlist.description}}</h3>
        </div>
      </div>
    </main>
  </div>
<li class="bottom-top">
    <div class="bottom-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang_huaban1"></use>
      </svg>
    </div>
    <div class="bottom-title">播放全部</div>
  </li>
</template>

<script>
export default {
  name: 'PlaylistTitle',
  data () {
    return {
    }
  },
  props: {
    playlist: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.list-content{
  position: fixed;
  top: 50px;
  z-index: -1;
  width: 100%;
  background-position:center !important;
  background-size: 180% !important;
  main{
    display: flex;
    padding: 26px 16px 0;
    height: 200px;
    box-sizing: border-box;
    width: 100%;
    backdrop-filter: blur(8px);
  .listleft{
    width: 120px;
    height: 120px;
    background-color: cadetblue;
    overflow: hidden;
    img{
      height: 100%;
    }
  }
  .listright{
    flex: 1;
    margin-left: 16px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    .detail-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      h2{
        margin-bottom: 6px;
        font-weight: 700;
      }
    }
    .detail-title{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      h3{
        color: #d4d4d4;
        margin: 2px;
        font-size: 14px;
      }
    }
  }
  }
}
.bottom-top{
    position: fixed;
    top: 230px;
    z-index: 99;
    display: flex;
    align-items: center;
    padding: 6px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 26px 26px 0 0;
    color: rgb(71, 71, 71);
    background-color: rgba(255, 255, 255, .96);
    backdrop-filter: blur(10px);
    .bottom-icon{
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1px solid #333;
      .icon {
        width: 20px; height: 20px;
        margin-top: 3px;
        margin-left: 4px;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .bottom-title{
      margin-left: 6px;
    }
  }
</style>
