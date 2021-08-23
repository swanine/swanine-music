<template>
<div class="search-wrapper">
  <Search/>
  <SearchHot/>
  <Actives/>
  <MusicZone/>
</div>
</template>

<script>
import Search from '@/components/Search/Search.vue'
import SearchHot from '@/components/Search/SearchHot'
import Actives from '@/components/Search/Actives'
import MusicZone from '@/components/Search/MusicZone'
export default {
  name: 'SearchPage',
  components: {
    Search,
    SearchHot,
    Actives,
    MusicZone
  }
}
</script>

<style scoped lang="scss">
.search-wrapper{
  overflow: auto;
  height: calc(100vh - 50px);
}
</style>
