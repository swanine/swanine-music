<template>
  <div class="list-content">
     <!-- :style="{background: 'url(' + playlist.coverImgUrl + ')'}" -->
     <img :src="playlist.coverImgUrl" alt="">
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
  width: 100%;
  &>img{
    width: 100%;
    position: absolute;
    z-index: -1;
    transform: scale(1.1);
    filter: blur(10px);
  }
  main{
    display: flex;
    padding: 26px 16px 0;
    height: 200px;
    box-sizing: border-box;
    width: 100%;
  .listleft{
    width: 120px;
    height: 120px;
    background-color: rgb(221, 221, 221);
    overflow: hidden;
    border-radius: 6px;
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
</style>
