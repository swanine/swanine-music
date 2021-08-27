<template>
<div class="rank">
  <PlayHeader :title="'排行榜'"/>
  <main>
  <ScrollView>
    <RankModel :toplist="toplist" :type="'personalized'" :recomList="recomList" @rankDetail="rankDetail"/>
  </ScrollView>
  </main>
  <router-view v-slot="{ Component }">
    <transition name="van-slide-right" mode="out-in">
        <component :is="Component"/>
    </transition>
  </router-view>
</div>
</template>

<script>
import PlayHeader from '@/components/PlayHeader.vue'
import ScrollView from '@/components/ScrollView.vue'
import RankModel from '../../components/Rank/RankModel.vue'
export default {
  name: 'Rank',
  data () {
    return {
      toplist: [],
      recomList: []
    }
  },
  components: {
    PlayHeader,
    ScrollView,
    RankModel
  },
  methods: {
    rankDetail (id, type) {
      this.$router.push({
        path: `/recom/detail/${id}/${type}`
      })
    }
  },
  created () {
    this.$api.getRankDetail()
      .then((result) => {
        this.toplist = result.list.slice(0, 3)
        this.recomList = result.list.slice(6, 9)
      })
  }
}
</script>

<style scoped lang="scss">
.rank{
  background-color: rgb(245, 245, 245);
  main{
    overflow: hidden;
    height: calc(100vh - 51px);
  }
}
</style>
