<template>
	<article class="index">
		<header style="position: sticky;top: 0px;z-index: 1000;">
			<div class="header">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33" class="header-icon" @click="$emit('close','search');"><path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"></path></svg>
				<div class="header-title">选择收货地址</div>
			</div>
		</header>
		<section class="address">
			<div class="address-city">
				<span class="city">{{city_info.city | city_name}}</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="dropdown-icon"><path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z" data-spm-anchor-id="a2ogi.12117543.0.i0"></path></svg>
			</div>
			<div class="address-search">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="search-icon"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
				<input type="search" class="input-search"  placeholder="请输入地址" v-model="search"/>
			</div>
		</section>
		<section class="notfound" v-if="(search !='' && query == '')">
			<div class="notfound-container">
				<img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif">
				<h3>没有搜索结果</h3>
				<p>换个关键字试试</p>
			</div>
		</section>
		<section v-show="!(query == '')">
			<div class="address-cell" v-for="(data,index) of query" @click="choseCity(data)">
				<div class="address-concrete">
					<p>
						<span class="address-name">{{data.name}}</span>
						<span></span>
					</p>
					<p class="concrete">{{data.address}}</p>
				</div>
			</div>
		</section>
	</article>	
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapState , mapActions } = createNamespacedHelpers('user')
	import axios from 'axios';
	export default{
		name:'SearchCity',
		data(){
			return{
				search:'',
				query:'',
				city:'选择城市'
			}
		},
		watch:{
			search:function(cur_val,old_val){
				this.getQuery(cur_val);
				return;
			}
		},
		computed:{
			...mapState({
				city_info: state => state.user.location
			}),
		},
		filters:{
			city_name:function(val){
				val = val ? val.replace('市','') : '请选择城市';
				return val
			}
		},
		mounted(){},
		methods:{
			...mapActions(['setCity']),
			choseCity:function(data){
				this.setCity(data)
				this.$emit('close','search');
			},
			getQuery:function(index){
				axios.get(`/restapi/bgs/poi/search_poi_nearby_alipay?keyword=${index}&offset=0&limit=20`).then( (query) => {
					this.query = query.data;
				}).catch((err) => {
					console.log(err.message);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index{
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 999;
	    overflow: auto;
	    background-color: #f4f4f4;
	}
	.header{
		position: relative;
	    width: 100%;
	    color: #fff;
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    text-align: center;
	    font-size: .32rem;
	    .header-icon{
			position: absolute;
		    left: 3.333333vw;
		    top: 3.333333vw;
		    fill: #fff;
		    width: 5.333333vw;
		    height: 5.333333vw;
		}
		.header-title{
			line-height: 11.733333vw;
	    	font-size: .48rem;
		}
	}
	.address,.address-city{
		display: flex;
	}
	.address{
		background-color: #fff;
		.address-city{
			align-items: center;
			padding-left: 4vw;
			.city{
				font-size: .32rem;
		    	background: #fff;
		    	width: 10.666667vw;
		    	color: #333;
		    	margin-right: 1.333333vw;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    overflow: hidden;
			    text-align: center;
			}
		}
		.dropdown-icon{
			width: 1.6vw;
			height: 1.6vw;
		}
		.search-icon{
			position: absolute;
			width: 3.733333vw;
		    height: 3.733333vw;
		    left: 5.866667vw;
		    top: 5.6vw;
		}
		.address-search{
			position: relative;
		    padding: 2.666667vw 4vw;
		    flex: 1;
		    .input-search{
				font-size: .346667rem;
				line-height: 4.8vw;
				width: 100%;
				height: 9.6vw;
		    	color: #999;
		    	border-radius: .266667vw;
		    	padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
			    background: #f2f2f2;
			    box-sizing: border-box;
			    -webkit-appearance: none;
			}
		}
	}
	.notfound{
		padding-top: 40vw;
		.notfound-container{
			flex-direction: column;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				display: block;
				width: 53.333333vw;
				max-width: 100%;
			}
			h3{
				margin: 3.333333vw 0 2.666667vw;
			    color: #6a6a6a;
			    font-weight: 400;
			    font-size: .453333rem;
			}
			p{
				margin: 0 0 3.333333vw;
			    color: #999;
			    font-size: .306667rem;
			}
		}
	}
	.address-cell{
	    background-color: #fff;
	    padding: 2.933333vw 4vw;
	    color: #2a2a2a;
	    display: flex;
	    .address-concrete{
			flex: 1;
		}
		.address-name{
			font-weight: 700;
		    font-size: .4rem;
		    color: #333;
		    + span{
		    	margin-left: 1.333333vw;
				color: #666;
		    }
		}
		.concrete{
			color: #333;
		    font-size: .32rem;
		    line-height: 4.533333vw;
		    margin-top: .533333vw;
		}
	}
	.address-cell + .address-cell{
		border-top: 1px solid #eee;
	}
</style>