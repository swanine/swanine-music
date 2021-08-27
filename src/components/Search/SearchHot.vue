<template>
  <div class="search">
    <van-skeleton title :row="6" animate :loading="loading">
    <div class="recommSearch">
      <span class="recommTitle">推荐搜索：</span>
      <a href="#" class="recommText" v-for="item in hots" :key="item.first">{{item.first}}</a>
    </div>
    <div class="hotSearch">
      <span class="hotTitle">热搜榜</span>
      <div class="hotList" v-cloak>
        <ul class="container" v-if="showDetail">
          <li class="rankItem" v-for="(list,index) in hots" :key="list.id">
            <span class="searchRank">{{index+1}}</span>
            <span class="searchContent" :class="{'bugFont-test':isShow}" >{{list.first}}</span>
          </li>
        </ul>
        <ul class="container" v-else>
          <li class="rankItem" v-for="(list,index) in hotsDetail" :key="list.score">
            <span class="searchRank">{{index+1}}</span>
            <span class="searchContent" :class="{'bugFont-test':isShow}" >{{list.searchWord}}</span>
          </li>
        </ul>
        <div class="anMore" :class="{showtime:isShow}">
          <span @click="getMore">展开更多
            <i class="arr"></i>
          </span>
        </div>
      </div>
    </div>
  </van-skeleton>
</div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      loading: true,
      isShow: false,
      showDetail: true,
      hots: [],
      hotsDetail: []
    }
  },
  methods: {
    getMore () {
      this.showDetail = false
      this.$api.searchHotDetail().then((res) => {
        this.hotsDetail = res
      })
      this.isShow = true
    }
  },
  created () {
    this.$api.searchHot().then((res) => {
      this.hots = res.result.hots
      this.loading = false
    })
  }
}
</script>

<style scoped lang="scss">
.search{
  padding: 8px 16px;
  background-color: #fff;
  .recommSearch{
    font-size: 14px;
    color: #686868;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .recommText{
      margin:0 8px;
      color: #6e7aaa;
    }
  }
  .hotSearch{
    margin-top: 10px;
    font-size: 18px;
    .hotTitle{
      font-weight: 600;
    }
    [v-cloak]{
      display: none;
    }
    .hotList{
      margin-top: 10px;
      border-radius: 20px;
      min-height: 266px;
      background-color: #fff;
      box-shadow: 0 0 20px 2px rgba(240, 240, 240, 1);
      .container{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        padding-bottom: 0;
        .rankItem{
          width: 50%;
          font-size: 16px;
          margin: 6px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .searchRank{
            font-weight: 600;
            display: inline-block;
            width: 20px;
            height: 20px;
            color: #999999;
            margin:6px 8px;
          }
        }
        .rankItem:nth-child(-n+3){
          font-weight: 600;
          .searchRank{
            color: #ef443c;
          }
        }
      }
      .showtime{
        display: none;
      }
      .anMore{
        padding: 3px;
        color: #999999;
        text-align: center;
        span{
          font-size: 16px;
        }
        .arr{
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #fff;
          border: 2px solid ;
          border-left: #999999;
          border-bottom: #999999;
          transform: rotate(135deg);
          position: relative;
          bottom: 3px;
          left: 0;
        }
      }
    }
  }
}
</style>
