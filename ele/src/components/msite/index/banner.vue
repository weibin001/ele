<template>
	<section class="advertise" v-if="banner">
		<div class="advertise-top">
			<div class="advertise-box">
				<h3>品质套餐</h3>
				<div class="title01">搭配齐全吃得好</div>
				<div class="title02">立即抢购></div>
				<img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" class="img-responsive" />
			</div>
			<div class="advertise-box">
				<h3>品质套餐</h3>
				<div class="title01">搭配齐全吃得好</div>
				<div class="title02">立即抢购></div>
				<img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" class="img-responsive" />
			</div>
		</div>
		<div class="advertise-bottom">
			<mt-swipe :auto="2500">
			  <mt-swipe-item v-for="(data,index) of banner" :key="index">
			  	<router-link tag='a' to='/'>
			  		<img :src="data.image" class="img-responsive"/>
			  	</router-link>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
	</section>
</template>

<script>
	import { Swipe , SwipeItem } from 'mint-ui';
	import axios from 'axios';
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('user')
	export default{
		name:'banner',
		data(){
			return{
				banner:'',
			}
		},
		components:{
			Swipe,
			SwipeItem,
		},
		computed:{
			...mapState({
				city_info: state => state.user.location
			}),
		},
		watch:{
			city_info:function(cur_val){	//监听vuex 用户地址变化
				this.banner = ''     		//测试效果 可以不设置(包括下方计时器)
				this.getBanner(cur_val.latitude,cur_val.longitude)
			}
		},
		methods:{
			getBanner:function(latitude,longitude){
				axios.get('/restapi/shopping/v2/banners?consumer=1&type=1&latitude=31.588285&longitude=120.777712').then( (banner) => {
					setTimeout(()=>{		//节目效果 （因为使用mockjs 伪数据 显示快 没有加载效果）
						this.banner = banner.data.banner;
					},500)
				}).catch((err) => {
					console.log(err.message);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.advertise{
		margin-bottom: 2.133333vw;
    	font-size: 0;
    	padding: 0 2.666667vw;
	}
	.advertise-top{
		margin-bottom: .8vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.advertise-box{
			position: relative;
			flex:1;
			height: 37.333333vw;
			padding: 3.2vw 0 0 4vw;
	    	z-index: 0;
	    	background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
	    	> h3{
	    		font-size: .453333rem;
			    font-weight: 700;
			    margin-bottom: 1.333333vw;
			    color: #333;
	    	}
	    	> .title01{
	    		font-size: .346667rem;
			    color: #777;
			    margin-bottom: 2.4vw
	    	}
	    	> .title02{
				font-size: .32rem;
			    color: #af8260;
			    font-weight: 700;
			}
		}
		.advertise-box:not(:last-child){
			margin-right: .8vw;
		}
		img {
			position: absolute;
			right: 0;
			bottom: -2vw;
		    width: 32vw;
		    height: 21.333333vw;
		}
	}
	.advertise-bottom{
		margin-top: 1.333333vw;
	    border-radius: 1.066667vw;
	    width: 100%;
	    height: 23.466667vw;
	}
</style>
<style>
	.advertise-bottom .mint-swipe-indicator {
	    width: 2.4vw;
	    height: .4vw;
	    border-radius: 0;
	}
	.advertise-bottom .mint-swipe-indicator.is-active {
	    background-color: #00a6ff !important;
	}
</style>