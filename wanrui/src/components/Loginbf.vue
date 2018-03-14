<template>
	<div>
		<header>
			<router-link to="/" class="logo"></router-link>
		</header>
		<div class="banner">
			<img src="../assets/bannerTop.png" alt="" >
			<router-link class="btn" to="/login">登录</router-link>
			<router-link class="btn" to="/regist">注册</router-link>
		</div>
		<div class="tab">
			<div class="tabs" active-class="act">历史记录</div>
			<div class="tabs" active-class="act">我的投稿</div>
		</div>
		<img src="../assets/noContent.png" alt="">
		<p>你还没有历史记录</p>
		<p>快去发现<a href="#">新内容</a>吧！</p>
		<div class="footer">
		<p>哔哩哔哩 沪ICP备13002172号-3</p>
		<p>信息网络传播视听节目许可证：0910417</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Loginbf',
	data () {
		return {

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
	.btn{
		font-size: 0.14rem;
		position: absolute;
		bottom: 24%;
		left: 24%;
		display: block;
	    color: #fb7299;
	    width: 0.72rem;
	    height: 0.29rem;
	    background-color: #fff;
	    text-align: center;
	    line-height: 0.29rem;
	    border-radius: 0.04rem;
	}
	.btn:nth-child(2){
		left: 57%;
		color: #fff;
		background-color: #fb7299;
	}
	header{
		height: 0.44rem;
		background: #fff;
		display: block;
		padding-top: 0.08rem;
	}
	img{
		width: 100%;
	}
	.logo{
		display: block;
		width: 0.63rem;
		height: 0.288rem;
		margin-left: 0.18rem;
		background: url(../assets/logo-mobile.png) no-repeat center center/cover;
	}
	.banner{
		position: relative;
	}
	.tab{
		height: 0.38rem;
		background-color: #fff;
		border-bottom: 0.01rem solid #979797;
		border-top: 0.01rem solid #979797;
	}
	.tabs{
		font-size: 0.14rem;
		line-height: 0.38rem;
		text-align: center;
		width: 50%;
		float: left;
	}
	.act{
		color: #fb7299;
	}
	p{
		font-size: 0.15rem;
		color: #999999;
		text-align: center;
	}
	p a{
		color: #fb7299;
	}
	.footer p{
		font-size: 0.12rem;
	}
	.footer{
		padding-top: 0.32rem;
	}
</style>