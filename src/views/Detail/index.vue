<template>
<div class="detail">
  <PlayHeader :title="'最新歌单'"/>
  <DetailContent :playlist="playList"/>
  <div class="bottom">
  <ScrollView>
    <DetailBottom :playlist="playList.tracks"/>
  </ScrollView>
  </div>
</div>
</template>

<script>
import PlayHeader from '@/components/PlayHeader.vue'
import DetailContent from '@/components/PlayList/DetailContent.vue'
import DetailBottom from '@/components/PlayList/DetailBottom.vue'
import ScrollView from '@/components/ScrollView.vue'
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
    DetailBottom,
    ScrollView
  },
  created () {
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(240, 240, 240);
  .bottom{
    height: 360px;
  }
}
</style>
