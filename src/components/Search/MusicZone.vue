<template>
  <div class="musicZone">
      <span class="musicTitle">音乐专区</span>
      <div class="cardContainer">
        <div class="musicCard">
          <div class="cardTop">
            <h2 class="cardTitle">歌手分类</h2>
            <span class="cardIcon">歌手</span>
          </div>
          <!-- <div class="cardText">
            <p>全球热门电音嗨翻全场</p>
          </div> -->
        </div>

        <div class="musicCard">
          <div class="cardTop">
            <h2 class="cardTitle">歌手分类</h2>
            <span class="cardIcon">歌手</span>
          </div>
          <div class="cardText">
            <p>全球热门电音嗨翻全场</p>
          </div>
        </div>

        <div class="musicCard">
          <div class="cardTop">
            <h2 class="cardTitle">歌手分类</h2>
            <span class="cardIcon">歌手</span>
          </div>
          <div class="cardText">
            <p>全球热门电音嗨翻全场</p>
          </div>
        </div>

        <div class="musicCard">
          <div class="cardTop">
            <h2 class="cardTitle">歌手分类</h2>
            <span class="cardIcon">歌手</span>
          </div>
          <div class="cardText">
            <p>全球热门电音嗨翻全场</p>
          </div>
        </div>

        <div class="musicCard">
          <div class="cardTop">
            <h2 class="cardTitle">歌手分类</h2>
            <span class="cardIcon">歌手</span>
          </div>
          <div class="cardText">
            <p>全球热门电音嗨翻全场</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MusicZone'
}
</script>

<style scoped lang="scss">
.musicZone{
  padding: 8px 16px;
  font-size: 18px;
  .musicTitle{
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .cardContainer{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .musicCard:nth-child(1){
      display: flex;
      background-image: linear-gradient(130deg, #fda085 0%, #f6d365 100%);
    }
    .musicCard:nth-child(2){
      background-image: linear-gradient(130deg, #fbc2eb 0%, #a6c1ee 100%);
    }
    .musicCard:nth-child(3){
      background-image: linear-gradient(130deg, #a1c4fd 0%, #c2e9fb 100%);
    }
    .musicCard:nth-child(n+4){
      background-image: linear-gradient(130deg, #330867 0%, #30cfd0 100%);
    }
    .musicCard:nth-child(1) .cardTop{
      flex: 1;
    }
    .musicCard{
      width: 48%;
      // padding: 20px 36px 10px;
      border-radius: 10px;
      .cardTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 8px 8px 16px ;
      }
      .cardTitle{
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        color: rgb(255, 255, 255);
      }
      .cardIcon{
        display: inline-block;
      }
      .cardText{
        padding: 3px 0 3px 16px;
        font-size: 8px;
        background: #3131310e;
        overflow: hidden;
        color: rgb(230, 230, 230);
      }
    }
  }
}
</style>
