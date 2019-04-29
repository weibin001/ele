<template>
	<mt-swipe :auto="0" class='foodentry' v-if="show" >
	  <mt-swipe-item>
	  	<router-link :to='data.link' tag='a' v-for='(data,index) of foodentryOne' :key="index">
	  		<div class="container">
	  			<img class="img-responsive" :alt="data.name" :src="data.image"/>
	  		</div>
	  		<span class="title">{{data.name}}</span>
	  	</router-link>
	  </mt-swipe-item>
	  <mt-swipe-item>
	  	<router-link :to='data.link' tag='a' v-for='(data,index) of foodentryTwo' :key="index">
	  		<div class="container">
	  			<img class="img-responsive" :alt="data.name" :src="data.image"/>
	  		</div>
	  		<span class="title">{{data.name}}</span>
	  	</router-link>
	  </mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import { Swipe , SwipeItem } from 'mint-ui';
	// import axios from 'axios';
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('user')
	export default{
		name:'foodentey',
		data(){
			return{
				show:false,
				foodentryOne:'',
				foodentryTwo:'',
			}
		},
		components:{
			Swipe,
			SwipeItem,
		},
		computed:{
			...mapState({
				city_info: state => state.user.location
			})
		},
		watch:{
			city_info:function(cur_val,old_val){//监听vuex 用户地址变化 *****父组件与子组件同时监听state时 不可在父组件使用v-if 否则当父组件监听状态变化时才去创建子组件，在子组件上监听不到状态变化******
				this.show = false    		//测试效果 可以不设置
				this.getSwiper(cur_val.latitude,cur_val.longitude)
			}
		},
		methods:{
			getSwiper:function(latitude,longitude){
				this.$http.get('/restapi/shopping/v2/entries?latitude=31.588285&longitude=120.777712&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then((swiper) => {
					setTimeout(()=>{ 			//节目效果 （因为使用mockjs 伪数据 显示快 没有加载效果）
						this.show = true;
					},100)
					this.foodentryOne = swiper.data.swiper.slice(0,10);
					this.foodentryTwo = swiper.data.swiper.slice(10,20);
				}).catch((err) => {
					console.log(err.message);
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	.foodentry{
	    overflow: hidden;
	    height: 47.2vw;
	    background-color: #fff;
	    text-align: center;
	   	a {
	    	position: relative;
			float: left;
			margin-top: 2.933333vw;
			width: 20%;
	    }
		.container{
	    	position: relative;
	    	display: block;
	    	width: 12vw;
	    	height: 12vw;
	    	margin: 0 auto;
	    }
	    .title{
	    	display: block;
		    margin-top: 1.333333vw;
		    color: #666;
		    font-size: .32rem;
	    }
	} 
</style>
<style>
	.foodentry .mint-swipe-indicator.is-active {
	    background-color: #00a6ff !important;
	}
	.foodentry .mint-swipe-indicator {
	    width: 2.4vw;
	    height: .4vw;
	    border-radius: 0;
	}
</style>