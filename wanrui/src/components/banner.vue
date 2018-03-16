<template>
  <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in list" class="swiper-slide">
              <img :src="item.cover.origin" />
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
// import Swiper from 'swiper';
// import '../assets/css/swiper.min.css';
export default {
  name: "banner",
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    axios.get("/v4/api/film/now-playing?__t=1520933548733&page=1&count=5")
    .then((res)=>{
      this.list=res.data.data.films;
    })
  },
  updated(){
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
// mounted() {
//   this.$ajax({
//     url: 'https://www.bilibili.com/index/ding.json',
//     data:{id:123},
//     dataType: 'json', 
//     success: function (res) {
//       console.log(res);
//     }
//   });
// },
}
</script>
<!-- <style src="../assets/css/swiper.min.css"></style> -->
<style scoped>
  a{text-decoration: none;color: black;}
  ul,ol,li{list-style: none;}
  html,body{height: 100%;margin: 0;padding: 0;position: relative;}
  html{font-size: 26.67vw}
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 1.8rem;
    }
    .swiper-slide {
    }
    img{
      width: 100%;
      height: 100%;
    }
</style>