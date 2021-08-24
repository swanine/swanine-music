<template>
<div class="recommend">
  <Header/>
  <Banner/>
  <Navbar/>
  <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
  <Personalized :personalized="albums" :title="'最新专辑'" @select="selectItem" :type="'albums'"/>
  <RecommendSong :songs="songs"/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
        <component :is="Component"/>
    </transition>
  </router-view>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Navbar from '@/components/Navbar.vue'
import Personalized from '@/components/Recomm/Recommend.vue'
import RecommendSong from '@/components/Recomm/RecommSong.vue'
export default {
  name: 'Recom',
  data () {
    return {
      personalized: [],
      albums: [],
      songs: []
    }
  },
  methods: {
    selectItem (id, type) {
      this.$router.push({
        path: `/recom/detail/${id}/${type}`
      })
    }
  },
  components: {
    Header,
    Banner,
    Navbar,
    Personalized,
    RecommendSong
  },
  created () {
    this.$api.getPersonalized().then((res) => {
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
.recommend{
  padding-bottom: 110px;
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(100%);
}
</style>
