<template>
  <div>
    <router-link to="/download">下载啊</router-link>
      <button type="" v-on:click="addd()">点一下啊</button>
    <h1>电影</h1>
    <ul>
      <li v-for="item in $store.state.films">
        <a :href="'https://www.bilibili.com/video/av'+item.aid+'/'">{{item.title}}</a>
        <img :src="item.pic" />
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "index",
  mounted() {
    if(this.$store.state.films.length > 0) {
      return;
    }
    axios.get("/index/ding.json")
    .then((res)=>{
      console.log(res);
      console.log(res.data.dance);
      this.$store.dispatch("setFilmsDataA", res.data.dance);
    })
  },
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

  methods:{

    // addd() {
    //   if(this.$store.state.films.length > 0) {
    //     return;
    //   }
    //   axios.get("/v4/api/film/now-playing?__t=1520664085103&page=1&count=5")
    //   .then((res)=>{
    //     console.log(res);
    //     this.$store.dispatch("setFilmsDataA", res.data.data.films);
    //   }) 
    // }
    addd: function(){
      console.log(this.$router.history)
    }
  }

}
</script>

<style scoped>
  html,body{height: 100%;margin: 0;padding: 0;}
  html{font-size: 26.67vw}
  body{font-size: 0.16rem;}
</style>