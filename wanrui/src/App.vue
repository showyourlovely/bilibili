<template>
  <div id="app">
    <topHeader id="top-header"/>
    <router-view/>
  </div>
</template>

<script>
import topHeader from './components/top-header';
export default {
  name: 'App',
  components:{
    topHeader
  },
  mounted(){
    console.log(this.$store.state.films)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  html,body{height: 100%;width:100%;margin: 0;padding: 0;}
  html{font-size: 26.67vw;}
  body{font-size: 0.16rem;}
  #top-header{width:100%;position:fixed;top: 0;left: 0;background: #fff;z-index: 9999;}
  html,body{height: 100%;margin: 0;background: #f5f5f5;}
  html{font-size: 26.67vw}
</style>
