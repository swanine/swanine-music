<template>
<div class="rank-model">
  <div class="rank-top">
    <h2>榜单推荐</h2>
    <div class="rank-list">
        <div class="rank-item" v-for="value in recomList" :key="value.id" @click="recomRank">
          <div class="rank-img">
            <img :src="value.coverImgUrl" alt="">
          </div>
          <div class="rank-name">{{value.name}}</div>
        </div>
    </div>
  </div>
  <div class="official-rank">
    <div class="official-rank-title">
      <svg t="1630060596104" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11016" width="200" height="200"><path d="M511.764091 131.708086a446.145957 446.145957 0 1 0 446.145957 446.145957 446.145957 446.145957 0 0 0-446.145957-446.145957z m0 519.76004A71.829499 71.829499 0 1 1 583.59359 580.530919 72.275645 72.275645 0 0 1 511.764091 651.468126z" fill="#F55E55" p-id="11017"></path><path d="M802.205109 0.541175l-168.197026 37.030114a67.814185 67.814185 0 0 0-53.091369 66.029602V223.614153l3.569168 349.778431h114.213365V223.614153h108.859613a26.322611 26.322611 0 0 0 26.768758-26.322611V26.863786a26.768757 26.768757 0 0 0-32.122509-26.322611z" fill="#F9BBB8" p-id="11018"></path><path d="M511.764091 386.457428a186.935156 186.935156 0 1 0 186.935156 186.48901A186.935156 186.935156 0 0 0 511.764091 386.457428z m0 264.564552a71.383353 71.383353 0 1 1 71.383353-71.383353 71.383353 71.383353 0 0 1-71.383353 71.383353z" fill="#F9BBB8" p-id="11019"></path></svg>
      <h2>官方榜</h2>
    </div>
    <div class="official-rank-wrapper" v-for="item in toplist" :key="item.id" @click="officialRank(item.id)">
      <div class="rank-wrapper-left">
        <h2>{{item.name}}</h2>
        <img :src="item.coverImgUrl" alt="">
      </div>
      <div class="rank-wrapper-right">
        <div class="rank-music">
          <span class="rank-music-name">{{item.tracks[0].first}} - </span>
          <span class="rank-music-singer">{{item.tracks[0].second}}</span>
        </div>
        <div class="rank-music">
          <span class="rank-music-name">{{item.tracks[1].first}} - </span>
          <span class="rank-music-singer">{{item.tracks[1].second}}</span>
        </div>
        <div class="rank-music">
          <span class="rank-music-name">{{item.tracks[2].first}} - </span>
          <span class="rank-music-singer">{{item.tracks[2].second}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'RankModel',
  props: {
    toplist: {
      type: Array,
      default: () => [],
      required: true
    },
    recomList: {
      type: Array,
      default: () => [],
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    recomRank () {
      Toast({
        message: '暂时还没有数据哦，试试下面的榜单吧',
        position: 'top'
      })
    },
    officialRank (id) {
      this.$emit('rankDetail', id, this.type)
    }
  }
}
</script>

<style scoped lang="scss">
.rank-model{
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  background-color: rgb(245, 245, 245);
  .rank-top{
    padding: 12px;
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
    h2{
      font-size: 16px;
      font-weight: 600;
      width: 100%;
    }
    .rank-list{
      display: flex;
      justify-content: space-between;
      min-height: 140px;
      .rank-item{
        margin: 10px 0;
        width: 100px;
        .rank-img{
          width: 100px;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
          background-color: aquamarine;
        }
        img{
          width: 100%;
          height: 100%;
        }
        .rank-name{
          padding: 4px 1px;
          font-size: 12px;
          height: 16px;
        }
      }
    }
  }
  .official-rank{
    margin: 16px 0;
    width: 100%;
    padding-bottom: 40px;
    .official-rank-title{
      display: flex;
      .icon{
        width: 20px;
        height: 20px;
      }
      h2{
        margin-left: 4px;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .official-rank-wrapper{
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 10px 0;
      padding: 15px 20px;
      border-radius: 10px;
      background-color: #fff;
      .rank-wrapper-left{
        display: flex;
        width: 66px;
        flex-direction: column;
        align-items: center;
        h2{
          font-size: 20px;
          font-weight: 600;
          color: indianred;
          margin-bottom: 8px;
        }
        img{
          width: 56px;
          height: 56px;
        }
      }
      .rank-wrapper-right{
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        .rank-music{
          line-height: 2;
          font-size: 12px;
          .rank-music-name{
            display: inline-block;
            max-width: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .rank-music-singer{
            display: inline-block;
            width: 70px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #a0a0a0;
          }
        }
      }
    }
  }
}
</style>
