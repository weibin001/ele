<template>
	<section v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="true" v-if="shoplist.length != 0">
		<div class="container" v-for="(data,index) of shoplist" @click="$router.push({ path:'/shop'})">
			<div class="shopinfo">
				<div class="logo-container">
					<div class="logo-image">
						<img :src='data.restaurant.image_path | Imgpath' />
					</div>
				</div>
				<div class="main">
					<div class="line">
						<h3 class="line-name">
							<i data-content = "品牌" class="line-premium">品牌</i>
							<span>{{data.restaurant.name}}</span>
						</h3>
						<ul></ul>
					</div>
					<div class="line">
						<div class="line-rateWrap">
							<div class="rate-wrap stars-rate">
								<div><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"></div>
								<div class="stars-shade" :style="rating(data.restaurant.rating)"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="></div>								
							</div>
							<span class="stars-rate">{{data.restaurant.rating}}</span>
							<span>月售317单</span>
						</div>
					</div>
					<div class="line">
						<div class="money-limit">
							<span>￥{{data.restaurant.piecewise_agent_fee.rules[0].price}}起送</span>
							<span>{{data.restaurant.piecewise_agent_fee.description}}</span>
						</div>
						<div class="time-distance">
							<span>{{data.restaurant.distance | distance}}</span>
							<span>{{data.restaurant.order_lead_time}}分钟</span>
						</div>
					</div>
				</div>
			</div>
			<div class="activityWrap">
				<section class="tag-line">
					<span class="mini-tag">
						{{data.restaurant.support_tags[0].text}}
						<span class="mini-tagGhost">{{data.restaurant.support_tags[0].text}}</span>
					</span>
					<span class="recommendTag" v-if="!data.restaurant.support_tags[1]">
						<img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" class="img-responsive" />
						<span>口碑人气好店</span>
					</span>
				</section>
				<span>
					<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" class="dashedline" />
				</span>
				<section class="activities">
					<div class="activitylist">
						<div class="actrow" v-for="(data,key) of data.restaurant.activities" v-show="(key<2) || (open_id.indexOf(index) != -1)">
							<span class="iconWrap">
								<span class="icon" :style="{backgroundColor:'#'+data.icon_color}">{{data.icon_name}}</span>
							</span>
							<span class="desc">{{data.description}}</span>
						</div>
					</div>
					<div class="activitylist-btn" @click.stop="open(index)">
						<span>{{data.restaurant.activities.length}}个活动</span>
						<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" :class="[{open:(open_id.indexOf(index) != -1)}]"/>
					</div>
				</section>
			</div>
		</div>
		<div class="LoadMore-wrapper" v-if="shoplist.length != 0">
			<mt-spinner :size="30" type="fading-circle" color="#26a2ff" v-if='loading && !loadAll'></mt-spinner>
			<span v-if='loading && !loadAll'>加载更多</span>
			<span v-if='loadAll && shoplist.length != 0'>没有更多了哦~</span>
		</div>
	</section>
</template>

<script>
	import { Spinner } from 'mint-ui';
	// import axios from 'axios';
	export default {
		name:'ShopList',
		data(){
			return{
				query:'',
				open_id:[],
				offset:0,
				loading:false
			}
		},
		mounted(){},
		components:{ Spinner },
		props:['shoplist','loadAll'],
		filters:{
			Imgpath:function(data){
				let a = (data.charAt(data.length - 2) != 'n')?(data+'.jpeg'):(data+'.png')      	//匹配图片格式 （正则表示会比较好用 不过我不会）
				return `https://fuss10.elemecdn.com/${a}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
			},
			distance:function(data){
				let a = (data>1000)?`${(data/1000).toFixed(2)}km`:`${data}m`;
				return a;
			}
		},
		computed:{
			cur_city:function(){
				return this.$store.state.city_info;
			}
		},
		methods:{
			rating:function(val){
				let a = val*20
				return `width:${a}%`
			},
			open:function(val){
				(this.open_id.indexOf(val) == -1)?this.open_id.push(val):this.open_id.splice(this.open_id.indexOf(val),1);
			},
			loadMore:function(){
				if(!this.loadAll){
					this.loading = true;
					setTimeout(() => {
					    this.$emit('loadMore');
					    this.loading = false;
					}, 2500);
				}	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: relative;
		border-bottom: .133333vw solid #eee;
		background-color: #fff;
		color: #666;
		padding: 4vw 0;
		list-style: none;
		font-size: .2933333rem;
		line-height: normal;
		.shopinfo{
			display: flex;
			justify-content: flex-start;
			align-items: stretch;
			padding: 0 2.6666667vw;
			.logo-container{
				position: relative;
				z-index: 0;
				.logo-image{
					position: relative;
					width: 17.3333333vw;
					height: 17.333333vw;
					> img{
						box-sizing: border-box;
					    display: block;
					    width: 100%;
					    height: 100%;
					    border-radius: .533333vw;
					    border: .133333vw solid rgba(0,0,0,.08);
					}
				}
			}
			.main,.line{
				display: flex;
				justify-content: space-between;
				overflow: hidden;
			}
			.main{
				flex-direction: column;
				-webkit-user-select: none;
				padding-left: 2.666667vw;
				flex-grow: 1;
				.line,.line-name{
					align-items: center;
				}
				.line-name{
					display: flex;
				    margin: 0;
				    padding: 0;
				    color: #333;
				    font-weight: 700;
				    font-size: .4rem;
				    overflow: hidden;
				    span{
				    	overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
				    }
				}
				.line-premium{
					position: relative;
					margin-right: 1.33333333vw;
					padding: .266667vw .666667vw;
					color: transparent;
					text-align: center;
					white-space: nowrap;
					line-height: normal;
					font-weight: 700;
					font-size: .293333rem;
					font-style: normal;	
				}
				.line-premium:after{
					display: block;
				    position: absolute;
				    left: 0;
				    top: 0;
				    z-index: 0;
				    padding: .533333vw 1.333333vw;
				    content: attr(data-content);
				    color: #6f3f15;
			    	border-radius: 1.066667vw;
			    	background-image: linear-gradient(-139deg,#fff100,#ffe339);
			    	transform: scale(.5);
			    	transform-origin: 0 0;
			    	font-size: .586667rem;
			    	font-weight: 700;
				}
				.line-rateWrap{
					display: flex;
					align-items: center;
					.shoplist-rate,.stars-rate{
						margin-right: 1.066667vw;
					}
					.rate-wrap{
						position: relative;
					    overflow: hidden;
					    display: inline-block;
					    vertical-align: middle;
					    > div{
					    	display: flex;
					    	> img{
					    		width: 14.933333vw;
								height: 2.666667vw;
								flex: none;
								max-width: none;
					    	}
					    }
					    .stars-shade{
							position: absolute;
							top: 0;
							left: 0;
							overflow: hidden;
						}
					}
				}
				.money-limit,.time-distance{
					display: flex;
					align-content: center;
					span+span:before{
						margin: 0 .8vw;
					    color: #ddd;
					    content: "|";
					}
				}
				.time-distance{
					color: #999;
				}
			}
		}
		.activityWrap{
			padding-left: 22.666667vw;
			.tag-line{
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin: 2.666667vw 2.666667vw 0 0;
				> span{
					margin-right: 1.333333vw;
					margin-bottom: 1.066667vw;
				}
				.mini-tag{
					position: relative;
					font-size: .266667rem;
					color: transparent;
					white-space: normal;
					padding: 0 1.066667vw;
					.mini-tagGhost{
						color: rgb(102, 102, 102);
				    	border-color: rgb(221, 221, 221);
				    	display: flex;
				    	align-items: center;
				    	justify-content: center;
				    	position: absolute;
					    left: 0;
					    top: 0;
					    right: -100%;
					    bottom: -100%;
				    	transform: scale(.5);
					    transform-origin: 0 0;
					    font-size: .533333rem;
					    border: .266667vw solid #ddd;
					    border-radius: .533333vw;
					    padding: 0 2.133333vw;
					    white-space: nowrap;
					}
				}
				.recommendTag{
					display: flex;
					align-content: center;
					border-radius: .133333vw;
					font-size: .266667rem;
					height: 4vw;
					padding: 0 1.066667vw;
			    	color: #e8470b;
			    	img{
			    		margin-top: .4vw;
						height: 2.66667vw;
						width: 2.66667vw;
						margin-right: .8vw;
			    	}
				}
			}
			.dashedline{
				width: 100%;
				height: .133333vw;
				padding-right: 2.666667vw;
			}
			.activities{
				display: flex;
				justify-content: space-between;
				align-content: stretch;
		    	overflow: hidden;
		    	.activitylist{
					flex: 1;
					padding-right: 2.666667vw;
					overflow: hidden;
					> .actrow:not(:first-child){
						margin-top: .666667vw;
					}
				}
				.actrow{
					display: flex;
					align-items: center;
					font-size: .293333rem;
					line-height: 4.8vw;
			    	.iconWrap{
			    		display: inline-block;
				    	position: relative;
				    	margin-right: 1.6vw;
				    	height: 3.733333vw;
				    	width: 3.733333vw;
				    	vertical-align: middle;
				    	.icon{
				    		position: absolute;
						    left: 0;
						    top: 0;
						    z-index: 0;
						    height: 7.466667vw;
						    width: 7.466667vw;
						    font-size: .56rem;
						    color: #fff;
						    display: flex;
						    align-items: center;
						    justify-content: center;
						    border-radius: 1.066667vw;
						    transform: scale(.5);
						    transform-origin: 0 0;
				    	}
			    	}
			    	.desc{
			    		display: inline-block;
						flex: 1;
					    overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					    vertical-align: middle;
			    	}
				}
				.activitylist-btn{
					padding: .8vw 2.666667vw 0 0;
				    color: #999;
				    text-align: right;
				    font-size: .266667rem;
				    line-height: 1;
				    span{
				    	vertical-align: middle;
				    }
				    img.open{
				    	transform: rotate(180deg);
				    }
				    img{
				    	width: 1.733333vw;
    					opacity: .9;
    					margin-left: 1.066667vw;
    					transition: all .3s ease-in-out;
    					fill: currentColor;
					    will-change: transform;
					    vertical-align: middle;
					    position: relative;
					    z-index: 1;
				    }
				}
			}
		}
	}
	.LoadMore-wrapper{
		display: flex;
	    align-items: center;
	    justify-content: center;
	    min-height: 10.666667vw;
	    background-color: #fff;
	    color: #666;
	    font-size: .32rem;
	    .loadMore-loading{
		    width: 4vw;
		    height: 4vw;
		    border-radius: 100%;
		    border: .4vw solid #eee;
	    }
	}
</style>