<template>
<div class="song-list-page">
  <PlayHeader :title="'歌单广场'"/>
  <TabList/>
</div>
</template>

<script>
import PlayHeader from '@/components/PlayHeader.vue'
import TabList from '@/components/PlayList/TabList.vue'
export default {
  name: 'PlayList',
  components: {
    PlayHeader,
    TabList
  }
}
</script>

<style scoped lang="scss">
.song-list-page{
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
}
</style>
