<template>
  <div class="hello">
  <header>
    <a href="/"><img src="../assets/logo.png" alt=""></a>
    <svg class="icon" width=".3rem" height=".3rem" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#aaaaaa" d="M458.24 778.24c-158.72 0-289.28-130.56-289.28-289.28 0-158.72 130.56-289.28 289.28-289.28 158.72 0 289.28 130.56 289.28 289.28 0 158.72-130.56 289.28-289.28 289.28z m0-529.92c-130.56 0-238.08 107.52-238.08 238.08s107.52 238.08 238.08 238.08 238.08-107.52 238.08-238.08-107.52-238.08-238.08-238.08zM717.5168 733.5424l124.9024 124.928-36.224 36.1984-124.9024-124.928z"  /></svg>
    <span></span>
    <a href="/download" id="down">下载App</a>
  </header>  </div>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{text-decoration: none;display: inline-block;}
  html,body{height: 100%;width:100%;margin: 0;padding: 0;}
  html{font-size: 26.67vw}
  body{font-size: .3rem;}
  header{padding: .1rem;display: flex;justify-content: space-between;align-items: center;}
  header img{width: 0.62rem;height: .28rem;margin-right: 1.111rem;}
  span{display: block;height: .24rem;width: .24rem;background: url(../assets/noface.gif) no-repeat center center/cover;border-radius: 50%;}
  #down{display: inline-block;background: #fb7299;border-radius: 2px;text-align: center;color: #ffffff;width: .8rem;height:.25rem;line-height: .25rem;}
</style>
