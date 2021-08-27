<template>
<Header/>
<div class="recommend">
  <ScrollView>
    <div>
      <Banner/>
      <Navbar/>
      <Personalized :personalized="personalized" :title="'最新歌单'" @select="selectItem" :type="'personalized'"/>
      <Personalized :personalized="albums" :title="'最新专辑'" @select="selectItem" :type="'albums'"/>
      <RecommendSong :songs="songs"/>
    </div>
  </ScrollView>
  <router-view v-slot="{ Component }">
    <transition name="van-slide-right" mode="out-in">
        <component :is="Component"/>
    </transition>
  </router-view>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import ScrollView from '@/components/ScrollView.vue'
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
    ScrollView,
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
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow: hidden;
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
