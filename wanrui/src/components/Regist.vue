<template>
	<div>
		<header>
			<router-link to="/" class="logo"></router-link>
			<a href="#" class="logotext">注册</a>
		</header>
		<form action="" id="rform">
			<input type="text" placeholder="您的昵称，例：哔哩哔哩" class="nput">
			<input type="text" placeholder="您的密码，6-16个字符组成，区分大小写" class="nput">
			<select name="" id="" class="nput">
				<option value="">中国大陆</option>
				<option value="">香港特别行政区</option>
				<option value="">澳门特别行政区</option>
				<option value="">台湾地区</option>
				<option value="">美国</option>
				<option value="">比利时</option>
				<option value="">澳大利亚</option>
				<option value="">法国</option>
				<option value="">加拿大</option>
				<option value="">德国</option>
				<option value="">英国</option>
				<option value="">新加坡</option>
				<option value="">印度尼西亚</option>
				<option value="">日本</option>
			</select>
			<input type="text" placeholder="您的手机" class="nput">
			<div class="lat">
				<input type="text" placeholder="短信验证码" class="nput last">
				<input type="button" value="获取短信验证码" class="take">
			</div>
			<p>继续注册 , 表明您已同意
				<a href="#">《bilibli网会员注册协议》</a>
			</p>
			<input class="button" type="button" value="同意并注册">
			<a class="button bta" href="/login">登录</a>
		</form>
	</div>
</template>

<script>
export default {
  name: 'Regist',
  data () {
    return {
      msg: '头部'
    }
  }
}
</script>

<style scoped>
	html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure{margin:0;padding:0}
	*{ box-sizing:border-box;}
	body{font-family: "微软雅黑";display:flex;flex-direction: column;}
	ul,ol,li{list-style:none;}
	b,strong{font-weight:100;}
	em,i{font-style:normal;}
	h1,h2,h3,h4,h5,h6{font-weight:100;font-size:16px;}
	a,u{text-decoration: none;}
	input{outline:none;}
	img{display:block;border:0;}
	html,body{height: 100%;}
	html{font-size: 26.67vw}
	.logo{
		display: block;
		width: 0.63rem;
		height: 0.288rem;
		margin-top: 0.03rem;
		margin-right: 0.12rem;
		background: url(../assets/logo-mobile.png) no-repeat center center/cover;
	}
	.logotext{
		font-size: 0.16rem;
		color: #de698c;
		height: 0.42rem;
		border-left: 0.02rem solid #de698c;
		font-weight: bold;
		padding: 0.17rem 0 0 0.15rem;
	}
	header{
		height: 0.66rem;
		display: flex;
		border: 0.01rem solid #ddd;
		padding: 0.14rem 0.15rem 0.12rem;
		background: #fff;
	}
	#rform{
		padding: 0.15rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.nput{
		border-radius: 0.06rem;
	    margin-bottom: 0.1rem;
	    background: #fff;
	    width: 100%;
	    border: 0.01rem solid #ddd;
	    height: 0.45rem;
	    line-height: 0.45rem;
	    overflow: hidden;
	    box-sizing: border-box;
	    padding: 0.1rem;
	}
	.lat{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: none;
	}
	.last{
		width: 60%;
	}
	.take{
		width: 38%;
		height: 0.38rem;
		border-radius: 0.04rem;
		background: linear-gradient(to top,#f5f5f5,#fff);
		border: 1px solid #aaa;
		margin-top: 0.03rem;
	}
	p{
		font-size: 0.144rem;
		display: block;
		padding-top: 0.35rem;
		color: #666;
		padding-bottom: 0.15rem;
	}
	p a{
		color: #00a1d6;
	}
	.button{
		display: block;
	    border: 0.01rem solid #00a1d6;
	    text-align: center;
	    box-sizing: border-box;
	    width: 100%;
	    border-radius: 0.32rem;
	    padding: 0.12rem;
	    margin-bottom: 0.1rem;
	    color: #fff;
	    background: #00a1d6;
	    font-size: 0.16rem;
	}
	.bta{
		background: #fff;
		color: #00a1d6;
	}
</style>
