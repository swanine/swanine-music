<template>
<van-tabs v-model="active">
  <van-tab title="推荐" class="list-container">
    <main>
      <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
    </main>
  </van-tab>
  <van-tab title="流行">
    <main>
      <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
    </main>
  </van-tab>
  <van-tab title="华语">
    <main>
      <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
    </main>
  </van-tab>
  <van-tab title="说唱">
    <main>
      <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
    </main>
  </van-tab>
</van-tabs>
</template>

<script>
import Personalized from '../Recomm/Recommend.vue'
export default {
  name: 'TabList',
  components: {
    Personalized
  },
  data () {
    return {
      active: 2,
      personalized: [],
      albums: [],
      songs: []
    }
  },
  methods: {
    selectItem (id, type) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push({
        path: `/recom/playlist/${id}/${type}`
      })
    },
    toplist () {
      this.$router.push({
        name: 'Rank'
      })
    },
    playlist () {
      this.$router.push({
        path: '/recom/playlist'
      })
    }
  },
  created () {
    this.$api.getPersonalized(51).then((res) => {
      this.personalized = res.result
    })
    this.$api.getnewest().then((res) => {
      this.albums = res.albums
    })
    this.$api.getNewSong().then((res) => {
      this.songs = res.result
    })
  }
}
</script>

<style scoped lang="scss">
main{
  height: 520px;
  overflow: scroll;
}
</style>
