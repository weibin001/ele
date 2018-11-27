<template>
	<footer class="ele-footer">
		<router-link tag='a' to='/' activeClass='active'>
			首页
		</router-link>
		<router-link tag='a' to='/' activeClass='active'>
			首页
		</router-link>
		<router-link tag='a' to='/' activeClass='active'>
			首页
		</router-link>
		<router-link tag='a' to='/' activeClass='active'>
			首页
		</router-link>
	</footer>
</template>

<script>
export default{
	name:'tarbar',
	data(){
		return{}
	}
}
</script>

<style scoped>
	.ele-footer{
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
		z-index: 999;
	}
	
	.ele-footer a{
		flex: 1;
		display: inline-block;
		text-align: center;
		line-height: 12.13333vw;
	}
</style>