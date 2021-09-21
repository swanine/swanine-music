<template>
<Header @getMenuList="getMenu"/>
  <van-popup v-model:show="show" position="left" :style="{ height: '100%', width: '66%' }">
    <MenuHead @toPlayList="toPlayList" @toSearch="toSearch" @toTopList="toTopList"/>
  </van-popup>
<div class="recommend">
  <ScrollView>
    <div>
      <Banner/>
      <div class="scrollx">
        <ScrollX>
          <Navbar @toplist="toplist" @playlist="playlist"/>
        </ScrollX>
      </div>
      <DayRecomm :title="'每日推荐'" :playlists="playlists" :type="'personalized'" @selectSong="selectItem"/>
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
import MenuHead from '@/components/Menu/MenuHead'
import ScrollView from '@/components/ScrollView.vue'
import ScrollX from '@/components/ScrollX.vue'
import Banner from '@/components/Banner.vue'
import Navbar from '@/components/Navbar.vue'
import Personalized from '@/components/Recomm/Recommend.vue'
import RecommendSong from '@/components/Recomm/RecommSong.vue'
import DayRecomm from '../../components/Recomm/everyDayRecomm.vue'
export default {
  name: 'Recom',
  data () {
    return {
      show: false,
      personalized: [],
      albums: [],
      songs: [],
      playlists: []
    }
  },
  methods: {
    selectItem (id, type) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push({
        path: `/recom/detail/${id}/${type}`
      })
    },
    toplist () {
      this.$router.push({
        path: '/recom/rank'
      })
    },
    playlist () {
      this.$router.push({
        path: '/recom/playlist'
      })
    },
    getMenu () {
      this.show = true
    },
    toPlayList () {
      this.show = false
      this.$router.push({
        path: '/recom/playlist'
      })
    },
    toSearch () {
      this.show = false
      this.$router.push({
        path: '/search'
      })
    },
    toTopList () {
      this.show = false
      this.$router.push({
        path: '/recom/rank'
      })
    }
  },
  components: {
    Header,
    ScrollView,
    ScrollX,
    Banner,
    Navbar,
    Personalized,
    RecommendSong,
    DayRecomm,
    MenuHead
  },
  created () {
    this.$api.getPersonalized(9).then((res) => {
      this.personalized = res.result
    })
    this.$api.getnewest().then((res) => {
      this.albums = res.albums
    })
    this.$api.getNewSong().then((res) => {
      this.songs = res.result
    })
    this.$api.getTopPlaylist().then((res) => {
      this.playlists = res.playlists
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
  .scrollx{
    width: 100vw;
    background-color: #fafafa;
  }
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
