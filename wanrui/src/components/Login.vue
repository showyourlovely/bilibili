<template>
	<div>
		<header>
			<router-link to="/" class="logo"></router-link>
			<a href="#" class="logotext">登录</a>
		</header>
		<form action="" id="rform">
			<input type="text" placeholder="你的手机号/邮箱" class="nput">
			<input type="text" placeholder="密码" class="nput">
			<div class="wj">
				<a href="#">忘记密码?</a>
			</div>
			<input class="button" type="button" value="立即登录">
			<a class="button bta" href="/regist">注册</a>
			<div class="fgx">
				<span>第三方合作网站登录</span>
			</div>
			<div class="dsf">
				<a class="a1" href="#">
					<img src="../assets/wb.png" alt="">
				</a>
				<a class="a2" href="#">
					<img src="../assets/qq.png" alt="">
				</a>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  name: 'Login',
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
	.wj{
		display: flex;
		flex-direction: row-reverse;
		margin-bottom: 0.5rem;
	}
	.wj a{
		font-size: 0.16rem;
		color: #00a1d6;
	}
	.fgx{
		border-bottom: 1px solid #999;
		margin-top: 0.2rem;
		display: flex;
		justify-content: center;
	}
	.fgx span{
		font-size: 0.16rem;
		line-height: 0.01rem;
		background: #f5f5f5;
		color: #999;
	}
	.dsf{
		display: flex;
		justify-content: center;
		margin-top: 0.3rem;
	}
	.dsf a{
		display: block;
		width: 0.6rem;
		height: 0.5rem;
		padding: 0 0.05rem;
	}
	.dsf a img{
		width: 100%;
	}
</style>
