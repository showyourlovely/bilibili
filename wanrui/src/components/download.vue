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
  html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure{margin:0;padding:0}
  *{ box-sizing:border-box;}
  body{font-family: "微软雅黑";}
  ul,ol,li{list-style:none;}
  b,strong{font-weight:100;}
  em,i{font-style:normal;}
  a,u{text-decoration: none;}
  input{outline:none;}
  img{display:block;border:0 none;}
  html,body{height: 100%;margin: 0;padding: 0;}
  html{font-size: 26.67vw}
  body{font-size: 0.16rem;}
  header{margin: 0 auto;width: 1.03rem;height: 2.62rem;background: url(../assets/downloadbg.png) no-repeat center center/cover;}
  section{margin:0.27rem 0 0;text-align: center;}
  footer{width: 3.375rem;height: .855rem;bottom: 0;padding: .1875rem;background: #f9f9f9;position: fixed;bottom: 1rem;left: .19rem;}
  footer img{width: .48rem;height: .48rem;float:left;margin-right: .1rem;}
  footer div{margin: 0 auto;width: 1.5rem;height: .48rem;float: left;}
  footer div a{display:block;text-align: left;}
  footer div a:nth-child(1){font: .14rem/.19rem "";color: #fb7299;}
  footer div a:nth-child(2){font: .12rem/.16rem "";color: #999999;margin-top: .08rem}
  button{width: .6rem;height: .3rem;background: #fb7299;color: white;border-radius: 4px;border: 0 none;float: right;margin-top: .09rem}
</style>