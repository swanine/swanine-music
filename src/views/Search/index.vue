<template>
<div class="search-wrapper">
  <Search/>
  <div class="search-scroll">
    <ScrollView>
      <div>
        <SearchHot/>
        <Actives/>
        <MusicZone/>
      </div>
    </ScrollView>
  </div>
</div>
</template>

<script>
import Search from '@/components/Search/Search.vue'
import SearchHot from '@/components/Search/SearchHot'
import Actives from '@/components/Search/Actives'
import MusicZone from '@/components/Search/MusicZone'
import ScrollView from '@/components/ScrollView'
export default {
  name: 'SearchPage',
  components: {
    Search,
    SearchHot,
    Actives,
    MusicZone,
    ScrollView
  }
}
</script>

<style scoped lang="scss">
.search-wrapper{
  padding-top: 4px;
  background-color: rgb(252, 252, 252);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 110px;
  .search-scroll{
    overflow: hidden;
    height: calc(100vh - 110px);
  }
}
</style>
