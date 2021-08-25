<template>
    <div class="song">
      <div class="song-top">
        <h3>最新音乐</h3>
      </div>
      <ul class="song-list">
        <li v-for="item in songs" :key="item.id" class="song-item" @click="selectMusic">
          <img v-lazy="item.song.album.picUrl" alt="">
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.song.artists[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RecommendSong',
  components: {
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    selectMusic () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  },
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.song{
  padding: 6px 16px;
  .song-top{
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #444;
    h3{
      font-size: 18px;
      font-weight: 600;
    }
  }
  .song-list{
    .song-item{
      display: flex;
      align-items: center;
      padding: 5px 0;
      img{
        width: 50px;
        border-radius: 6px;
      }
      div{
        padding: 0 10px;
        h3{
          color: #444;
          padding-bottom: 3px;
        }
        p{
          color: rgb(168, 168, 168);
          font-size: 10px;
        }
      }
    }
  }
}
</style>
