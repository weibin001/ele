<template>
	<section>
		<headtitle></headtitle>
		<div class="index-search-warpper">
			<div class="index-search">
				<a class="index-search-content">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
						<path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
					</svg>
					<span style="font-family: simsun;">搜索饿了么商家丶商品名称</span>
				</a>
			</div>
		</div>
		<div>
			<mt-swipe :auto="0" class='index-swiper'>
			  <mt-swipe-item>
			  	<router-link :to='data.link' tag='a' v-for='(data,index) of page01' :key="index">
			  		<div class="container">
			  			<img class="img-responsive" :alt="data.name" :src="data.image"/>
			  		</div>
			  		<span class="title">{{data.name}}</span>
			  	</router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link :to='data.link' tag='a' v-for='(data,index) of page02' :key="index">
			  		<div class="container">
			  			<img class="img-responsive" :alt="data.name" :src="data.image"/>
			  		</div>
			  		<span class="title">{{data.name}}</span>
			  	</router-link>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div>
			<div class="index-advertise">
				<div class="index-advertise-top">
					<div class="index-advertise-box">
						<h3>品质套餐</h3>
						<div class="title01">搭配齐全吃得好</div>
						<div class="title02">立即抢购></div>
						<img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" class="img-responsive" />
					</div>
					<div class="index-advertise-box">
						<h3>品质套餐</h3>
						<div class="title01">搭配齐全吃得好</div>
						<div class="title02">立即抢购></div>
						<img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" class="img-responsive" />
					</div>
				</div>
				<div class="index-advertise-bottom">
					<mt-swipe :auto="2000">
					  <mt-swipe-item v-for="(data,index) of banner" :key="index">
					  	<router-link tag='a' to='/'>
					  		<img :src="data.image" class="img-responsive"/>
					  	</router-link>
					  </mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
		</div>
		<tarbar></tarbar>
	</section>
</template>

<script>
	import axios from 'axios';
	import { Swipe , SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css'
	import headtitle from '../header';
	import tarbar from '../tarbar';
	export default{
		name:'index',
		components:{
			tarbar,
			headtitle,
			Swipe,
			SwipeItem
		},
		data(){
			return{
				page01:'',
				page02:'',
				banner:'',
			}
		},
		mounted(){
			axios.all([this.getSwiper(),this.getBanner()]).then(axios.spread((swiper,banner)=>{
				this.page01 = swiper.data.swiper.slice(0,10);
				this.page02 = swiper.data.swiper.slice(10,20);
				this.banner = banner.data.banner;
			}))
//			axios.get('/restapi/shopping/v2/entries?latitude=31.588285&longitude=120.777712&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(swiper=>{
//				this.page01 = swiper.data.swiper.slice(0,10);
//				this.page02 = swiper.data.swiper.slice(10,20);
//			})
		},
		methods:{
			getSwiper:function(){
				return axios.get('/restapi/shopping/v2/entries?latitude=31.588285&longitude=120.777712&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5');
			},
			getBanner:function(){
				return axios.get('/restapi/shopping/v2/banners?consumer=1&type=1&latitude=31.588285&longitude=120.777712');
			}
		}
	}
</script>

<style>
	.index-search-warpper{
		position: sticky;
		top: 0;
		z-index: 999;
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	
	.index-search{
		padding: 2vw 3.733333vw;
		margin: -.133333vw 0;
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	
	.index-search:before{
		top: -1px;
	}
	.index-search:before,.index-search:after{
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		left: 0;
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	
	.index-search-content{
		display: flex;
		width: 100%;
		height: 9.6vw;
		align-items: center;
		justify-content: center;
		border-radius: .266667vw;
	    background: #fff;
	    color: #999;
	    font-size: .373333rem;
	}
	
	.index-search-content svg{
		display: inline-block;
		width: 4.2666667vw;
		height: 4.2666667vw;
		margin-right: 1.333333vw;
	}
	
	.index-swiper{
	    overflow: hidden;
	    height: 47.2vw;
	    background-color: #fff;
	    text-align: center;
	}
	
	.index-swiper a{
		position: relative;
		float: left;
		margin-top: 2.933333vw;
		width: 20%;
	}
	
	.index-swiper .container{
		position: relative;
    	display: block;
    	width: 12vw;
    	height: 12vw;
    	margin: 0 auto;
	}
	
	.index-swiper .title{
		display: block;
	    margin-top: 1.333333vw;
	    color: #666;
	    font-size: .32rem;
	}
	
	.index-swiper .mint-swipe-indicator.is-active,.index-advertise-bottom .mint-swipe-indicator.is-active {
	    background-color: #00a6ff !important;
	}
	
	.index-swiper .mint-swipe-indicator,.index-advertise-bottom .mint-swipe-indicator {
	    width: 2.4vw;
	    height: .4vw;
	    border-radius: 0;
	}
	
	.index-advertise{
		margin-bottom: 2.133333vw;
    	font-size: 0;
    	padding: 0 2.666667vw;
	}
	
	.index-advertise-top{
		margin-bottom: .8vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.index-advertise-box{
		position: relative;
		flex:1;
		height: 37.333333vw;
		padding: 3.2vw 0 0 4vw;
    	z-index: 0;
    	background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
	}
	
	.index-advertise-box:not(:last-child){
		margin-right: .8vw;
	}
	
	.index-advertise-box>h3{
		font-size: .453333rem;
	    font-weight: 700;
	    margin-bottom: 1.333333vw;
	    color: #333;
	}
	.index-advertise-box>.title01{
		font-size: .346667rem;
	    color: #777;
	    margin-bottom: 2.4vw
	}
	.index-advertise-box>.title02{
		font-size: .32rem;
	    color: #af8260;
	    font-weight: 700;
	}
	.index-advertise-top img{
		position: absolute;
		right: 0;
		bottom: -2vw;
	    width: 32vw;
	    height: 21.333333vw;
	}
	.index-advertise-bottom{
		margin-top: 1.333333vw;
	    border-radius: 1.066667vw;
	    width: 100%;
	    height: 23.466667vw;
	}
</style>