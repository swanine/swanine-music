<template>
<div class="list-palyer" @click.self="hiddenList" v-show="this.isShowSongList">
  <div class="list-palyer-wrapper">
    <div class="player-list-title">
      <h3>播放列表</h3>
      <span @click="delAll">
        <img src="../../assets/icon/delete.png" alt="">
      </span>
    </div>
    <ScrollView ref="scrollView">
      <ul class="song-list">
        <li class="song-item" v-for="(item, index) in songs" :key="item.id" @click="selectMusic(index)">
          <div class="song-list-left">
            <div class="play-icon"></div>
            <div class="song-name">
              <span :class="{active: index===currentIndex}">{{item.name}}</span>
              <span>{{item.name.singer}}</span>
            </div>
          </div>
          <div class="song-list-right">
            <div class="favorite"></div>
            <div class="delete" @click.stop="delSong(index)">
              <svg t="1629978071571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2679" width="200" height="200"><path d="M558.096874 509.244236l278.304494-276.863678c13.159718-13.094226 13.226233-34.31248 0.132006-47.472198-13.123902-13.189394-34.305317-13.226233-47.465035-0.132006L510.692215 461.669708 234.740302 184.877661c-13.062504-13.093203-34.310434-13.159718-47.470151-0.066515-13.129019 13.093203-13.160741 34.342156-0.066515 47.501874l275.885398 276.725532L184.918593 785.733385c-13.160741 13.094226-13.226233 34.310434-0.134053 47.472198 6.54609 6.581905 15.172561 9.900487 23.799032 9.900487 8.56098 0 17.125029-3.252067 23.672142-9.768481l278.236955-276.761348 278.473339 279.31245c6.54609 6.582929 15.142885 9.871835 23.768333 9.871835 8.594749 0 17.155728-3.288906 23.701818-9.80532 13.123902-13.093203 13.159718-34.305317 0.066515-47.465035L558.096874 509.244236 558.096874 509.244236zM558.096874 509.244236" p-id="2680" fill="#cdcdcd"></path></svg>
            </div>
          </div>
        </li>
      </ul>
    </ScrollView>
  </div>
</div>
</template>

<script>
import { Dialog } from 'vant'
import { mapGetters, mapActions } from 'vuex'
import ScrollView from '../ScrollView.vue'
export default {
  name: 'ListPlayer',
  data () {
    return {
    }
  },
  components: {
    ScrollView
  },
  methods: {
    ...mapActions([
      'setIsShowSongList',
      'setDelSongs',
      'setCurrentIndex',
      'setIsPlaying'
    ]),
    hiddenList () {
      // this.listAinimate.transform = 'translateY(110%)'
      this.setIsShowSongList(false)
    },
    delSong (index) {
      this.setDelSongs(index)
    },
    delAll () {
      Dialog.confirm({
        message: '确认清空播放列表吗'
      })
        .then(() => {
          // on confirm
          this.setDelSongs()
        })
        .catch(() => {
          // on cancel
        })
    },
    selectMusic (index) {
      this.setCurrentIndex(index)
      this.setIsPlaying(true)
    }
  },
  computed: {
    ...mapGetters([
      'isShowSongList',
      'songs',
      'currentIndex'
    ])
  },
  watch: {
    isShowSongList (value) {
      if (value) {
        this.$refs.scrollView.refresh()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.active{
  color: #ff82ac !important;
}
.list-palyer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, .2);
  .list-palyer-wrapper{
    position: absolute;
    bottom: 15px;
    border-radius: 20px;
    height: 60%;
    width: 90%;
    left: 5%;
    background-color: #fff;
    overflow: hidden;
    .player-list-title{
      display: flex;
      position: relative;
      z-index: 99;
      justify-content: space-between;
      padding: 16px 16px 6px;
      background-color: #fff;
      h3{
        font-size: 16px;
        font-weight: 600;
      }
      span{
        img{
          width: 22px;
        }
      }
    }
    .song-list{
      padding: 0 16px;
      padding-bottom: 50px;
      .song-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 0;
        .song-list-left{
          display: flex;
          align-items: center;
          .play-icon{
            padding-right: 5px;
          }
          .song-name{
              & span:nth-child(1){
                display: inline-block;
                margin-right: 4px;
                font-size: 15px;
                color: #444444;
              }
              & span:nth-child(2){
                font-size: 8px;
                color: #b1b1b1;
              }
          }
        }
        .song-list-right{
          .delete{
            .icon{
              margin-top: 3px;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
