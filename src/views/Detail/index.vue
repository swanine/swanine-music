<template>
<div class="detail">
  <PlayHeader :title="'最新歌单'"/>
  <DetailContent :playlist="playList"/>
  <DetailBottom :playlist="playList.tracks"/>
</div>
</template>

<script>
import PlayHeader from '../../components/PlayHeader.vue'
import DetailContent from '../../components/PlayList/DetailContent.vue'
import DetailBottom from '../../components/PlayList/DetailBottom.vue'
export default {
  name: 'Detail',
  data () {
    return {
      playList: {}
    }
  },
  components: {
    PlayHeader,
    DetailContent,
    DetailBottom
  },
  created () {
    console.log(this.$route.params.type)
    if (this.$route.params.type === 'personalized') {
      this.$api.getPlaylistDetail(this.$route.params.id).then((res) => {
        this.playList = res.playlist
      })
    } else if (this.$route.params.type === 'albums') {
      this.$api.getAlbum(this.$route.params.id).then((res) => {
        this.playList = {
          name: res.album.name,
          description: res.album.description,
          coverImgUrl: res.album.picUrl,
          tracks: res.songs
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.detail{
  position: fixed;
  overflow: scroll;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>
