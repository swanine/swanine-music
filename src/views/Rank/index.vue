<template>
<div class="rank">
  <PlayHeader :title="'排行榜'"/>
  <main>
  <ScrollView>
    <RankModel :toplist="toplist" :recomList="recomList"/>
  </ScrollView>
  </main>
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
  created () {
    this.$api.getRankDetail()
      .then((result) => {
        this.toplist = result.list.slice(0, 3)
        this.recomList = result.list.slice(6, 9)
        console.log(this.recomList)
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
