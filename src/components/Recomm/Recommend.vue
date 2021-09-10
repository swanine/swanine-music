<template>
<div class="personalized">
  <div class="personalized-top">
    <h3>{{title}}</h3>
  </div>
  <div class="personalized-list">
    <div class="item" v-for="item in personalized" :key="item.id" @click="selectItem(item.id)">
      <img v-lazy="item.picUrl">
      <p>{{item.name}}</p>
    </div>
  </div>
    <router-view v-slot="{ Component }">
    <transition name="van-slide-right" mode="out-in">
        <component :is="Component"/>
    </transition>
  </router-view>
</div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalized: {
      type: Array,
      default: () => []
    },
    albums: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '最新歌曲',
      required: true
    }
  },
  methods: {
    selectItem (id) {
      this.$emit('select', id, this.type)
    }
  }
}
</script>

<style scoped lang="scss">
.personalized{
  box-sizing: border-box;
  padding: 6px 16px;
  color: #555;
  background-color: rgb(250, 250, 250);
  position: relative;
  z-index: 2;
  .personalized-top{
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #444;
    h3{
      font-size: 18px;
      font-weight: 600;
    }
  }
  .personalized-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: 460px;
    .item{
      width: 104px;
      margin-top: 10px;
      border-radius: 14px;
      box-shadow: 0 -12px 2px -6px #58585827;
      img{
        width: 104px;
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
