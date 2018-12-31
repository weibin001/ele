<template>
	<footer class="ele-footer">
		<section class="ele-footer-container">
			<router-link tag='a' to='/msite' activeClass='active'>
				<span class="iconfont">
					&#xe604;
				</span>
				<span class="text">首页</span>
			</router-link>
			<router-link tag='a' to='/discover' activeClass='active'>
				<span class="iconfont">
					&#xe603;
				</span>
				<span class="text">发现</span>
			</router-link>
			<router-link tag='a' to='/order' activeClass='active'>
				<span class="iconfont">
					&#xe602;
				</span>
				<span class="text">订单</span>
			</router-link>
			<router-link tag='a' to='/user' activeClass='active'>
				<span class="iconfont">
					&#xe911;
				</span>
				<span class="text">我的</span>
			</router-link>
		</section>
	</footer>
</template>

<script>
export default{
	name:'tarbar',
	data(){
		return{}
	},
	methods:{
		toggle:function(data){
			this.$emit('toggleCom',data);
			this.router.push(`/${data}`)
		}
	}
}
</script>

<style scoped>
	.ele-footer{
		height: 16vw;
	}
	.ele-footer-container{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 13.33333vw;
		padding-top: 1.2vw;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		z-index: 999;
		box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
	}
	
	.ele-footer a{
		flex: 1;
		display: block;
		text-align: center;
		color: #8e8e93;
	}
	
	.ele-footer a.active{
		color: #0089dc;
	}
	.ele-footer a>.text{
		display: block;
		font-size: .266667rem;
	}
	
</style>