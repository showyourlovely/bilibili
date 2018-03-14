<template>
  <div class="adc">
    <header id="header" class=""></header>
    <section>

      若你已经安装了客户端，<br>
      下拉即可打开(｡･ω･｡)
    </section>
    <footer>
      <img src="../assets/downloadlogo.png" alt="">
      <div>
        <a>下载bilibili客户端</a>
        <a>立刻前往App&nbsp;Store下载</a>
      </div>
      <button type="">前往</button>
    </footer>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "download",
  mounted() {
  },
  methods:{
  }

}
</script>

<style scoped>
  html,body{height: 100%;margin: 0;padding: 0;}
  html{font-size: 26.67vw}
  header{margin: 0 auto;width: 1.03rem;height: 2.62rem;background: url(../assets/downloadbg.png) no-repeat center center/cover;}
  section{margin:0.27rem 0 0;text-align: center;}
  footer{width: 3rem;height: .48rem;padding: .1875rem;background: #f9f9f9;position: fixed;bottom: 1rem;left: 50%;transform: translateX(-50%);}
  footer img{width: .48rem;height: .48rem;float:left;margin-right: .1rem;}
  footer div{margin: 0 auto;width: 1.5rem;height: .48rem;float: left;}
  footer div a{display:block;text-align: left;}
  footer div a:nth-child(1){font: .14rem/.19rem "";color: #fb7299;}
  footer div a:nth-child(2){font: .12rem/.16rem "";color: #999999;margin-top: .08rem}
  button{width: .6rem;height: .3rem;line-height:.3rem;background: #fb7299;color: white;border-radius: 4px;border: 0 none;float: right;margin-top: .09rem}
</style>