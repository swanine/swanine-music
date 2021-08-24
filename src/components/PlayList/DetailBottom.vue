<template>
<ul class="detail-bottom">
  <li v-for="(item,index) in playlist" :key="item.id">
    <span>{{index+1}}</span>
    <div>
      <h3>{{item.name}}</h3>
      <p>{{item.ar[0].name}} - {{item.al.name}}</p>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: 'DetailBottom',
  props: {
    playlist: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.detail-bottom{
  width: 100%;
  min-height: 580px;
  background-color: rgba(255, 255, 255,.94);
  color: #333;
  position: absolute;
  top: 280px;
  backdrop-filter: blur(10px);
  z-index: -3;
  li{
    display: flex;
    align-items: center;
    padding:10px 16px;
    height: 58px;
    box-sizing: border-box;
    span{
      display: inline-block;
      flex: 1;
      font-size: 16px;
      color: #ff8f8f;
    }
    div{
      width: 322px;
      h3{
      font-size: 16px;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }
      p{
        font-size: 10px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
