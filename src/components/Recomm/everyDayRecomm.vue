<template>
<div class="day-recomm">
  <div class="day-recomm-top">
    <h3>{{title}}</h3>
  </div>
  <ScrollX>
    <div class="day-recomm-list">
      <div class="day-recomm-item" v-for="item in playlists" :key="item.coverImgId" @click="selectSong(item.id)">
        <img v-lazy="item.coverImgUrl">
        <p>{{item.name}}</p>
      </div>
    </div>
  </ScrollX>
</div>
</template>

<script>
import ScrollX from '../ScrollX.vue'
export default {
  name: 'DayRecomm',
  components: {
    ScrollX
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    playlists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectSong (id) {
      this.$emit('selectSong', id, this.type)
    }
  }
}
</script>

<style scoped lang="scss">
.day-recomm{
  box-sizing: border-box;
  padding: 0 16px;
  color: #333;
  background-color: #fafafa;
  .day-recomm-top{
    width: 100%;
    height: 34px;
    line-height: 34px;
    margin-bottom: 4px;
    h3{
      font-size: 18px;
      font-weight: 600;
    }
  }
  .day-recomm-list{
    display: flex;
    gap: 12px;
    width: 1100px;
    .day-recomm-item{
      width: 100px;
      margin-top: 10px;
      border-radius: 14px;
      box-shadow: 0 -12px 2px -6px #58585827;
      img{
        width: 100px;
        border-radius: 8px;
      }
      p{
        padding-top: 6px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
