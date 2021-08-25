<template>
<div class="play-header">
  <div class="play-header-left" @click="hidden">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-arrb"></use>
    </svg>
  </div>
  <div class="play-header-title">
    <h3 class="song">{{currentSong.name}}</h3>
    <div class="singer">{{currentSong.singer}}</div>
  </div>
  <div class="play-header-right">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-fenxiang"></use>
    </svg>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Playheader',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    hidden () {
      this.setFullScreen(false)
      this.setMiniPlayer(true)
    }
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'songs'
    ])
  },
  mounted () {
    console.log(this.currentSong)
    console.log(this.songs)
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
  font-size: 18px;
  padding: 10px;
  padding-top: 16px;
  color: #fff;
  .play-header-left{
    .icon {
       width: 30px; height: 30px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  }
  .play-header-title{
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
     white-space: nowrap;
    letter-spacing: 1px;
    font-size: 16px;
    .singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
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
       width: 30px; height: 30px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  }
}
.icon{
  margin-top: 2px;
}
</style>
