<template>
  <div>
    <span></span>
    <banner/>
    <tuijian/>
  </div>
</template>
<script>
import banner from '../components/banner';
import tuijian from '../components/tuijian';
export default {
  name: "index",
  data(){
    return{
      msg:"首页"
    }
  },
  components:{
    banner,
    tuijian
  },
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
  }

}
</script>
<!-- <style src="../assets/css/swiper.min.css"></style> -->
<style scoped>
  html{font-size: 26.67vw}
  body{font-size: .3rem;}
  span{display: block;height: 0;overflow: hidden;margin-top: .48rem;}
</style>