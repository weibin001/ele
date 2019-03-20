<template>
	<div class="container">
		<img src="//fuss10.elemecdn.com/c/fc/0bf0f273cc4d059cd23f49c1255f1png.png" class="img-responsive"/>
		<h2 class="title">页面好像被送餐员带走了...</h2>
		<p class="description">出现了这个问题，也许是因为您访问了不正确的链接地址，但更可能是由于我们对程序做出了更新，没有及时通知您所造成的。</p>
		<div class="action">
			<span>您现在可以：</span>
			<router-link tag='a' to='/'>返回首页</router-link>
			<a>帮我们把它找回来</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'notfound',
	}
</script>

<style scoped lang="scss">
	.container {
	    padding: 40vw 6.666667vw 0;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	}
	.title {
	    font-size: 70px;
	    margin: 6.666667vw 0;
	}
	.description {
	    color: #666;
	    font-size: .32rem;
	}
	.action {
	    display: flex;
	    align-items: center;
	    margin-top: 8vw;
	    font-size: .346667rem;
	    a {
		    margin-right: 2.666667vw;
		    color: #0089dc;
		}
	}
</style>
