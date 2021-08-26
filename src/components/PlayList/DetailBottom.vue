<template>
<ul class="detail-bottom">
  <li class="bottom-top" @click="selectAllMusic">
    <div class="bottom-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang_huaban1"></use>
      </svg>
    </div>
    <div class="bottom-title">播放全部</div>
  </li>

  <li v-for="(item,index) in playlist" :key="item.id" @click="selectMusic(item.id)">
    <span>{{index+1}}</span>
    <div>
      <h3>{{item.name}}</h3>
      <p>{{item.ar[0].name}} - {{item.al.name}}</p>
    </div>
  </li>
</ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playlist: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setSongsDetail'
    ]),
    selectMusic (id) {
      // this.$store.dispatch('setFullScreen', true)
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      this.setSongsDetail(id)
    },
    selectAllMusic () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      // eslint-disable-next-line prefer-const
      let ids = this.playlist.map(function (item) {
        return item.id
      })

      this.setSongsDetail(ids.join(','))
    }
  }
}
</script>

<style scoped lang="scss">
.detail-bottom{
  width: 100%;
  min-height: 380px;
  background-color: rgb(255, 255, 255);
  color: #333;
  position: absolute;
  top: 230px;
  backdrop-filter: blur(10px);
  border-radius: 26px 26px 0 0;
  overflow: hidden;
  z-index: 1;
  .bottom-top{
    display: flex;
    align-items: center;
    padding: 6px;
    height: 50px;
    width: 30%;
    box-sizing: border-box;
    font-size: 13px;
    color: rgb(94, 94, 94);
    background-color: rgb(255, 255, 255);
    backdrop-filter: blur(10px);
    .bottom-icon{
      width: 21px;
      height: 21px;
      border-radius: 50%;
      margin-left: 8px;
      border: 1px solid rgb(94, 94, 94);
      .icon {
        width: 16px; height: 17px;
        margin-top: 2px;
        margin-left: 4px;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .bottom-title{
      margin-left: 6px;
    }
  }

  li{
    display: flex;
    align-items: center;
    padding:10px 16px;
    height: 58px;
    box-sizing: border-box;
    span{
      display: inline-block;
      flex: 1;
      font-size: 16px;
      color: #ff8f8f;
    }
    div{
      width: 322px;
      h3{
      font-size: 16px;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }
      p{
        font-size: 10px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
