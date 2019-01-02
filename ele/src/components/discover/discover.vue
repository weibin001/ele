<template>
	<div class="discover">
		<div>
			<a href="jacascript:void(0)">
				<img src="https://fuss10.elemecdn.com/c/b3/7e1e8d4f8f8074965dc7c90d3c889png.png"  class="img-responsive top-banner"/>
			</a>
		</div>
		<section class="parts unmerge">
			<div class="entry list3">
				<router-link tag='a' to='/exchange'>
					<div class="content-wrapper">
						<p class="title" style="color: rgb(255, 153, 0);">
							金币商城
						</p>
						<p class="tips">
							0元好物在这里
						</p>
					</div>
					<img class="icon img-responsive" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" />
				</router-link>
				<router-link to='/commend' tag='a'>
					<div class="content-wrapper">
						<p class="title" style="color: rgb(27, 169, 225);">
							推荐有奖
						</p>
						<p class="tips">
							10元现金拿不停
						</p>
					</div>
					<img class="icon img-responsive" src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" />
				</router-link>
				<router-link to='/discover/koubei/' tag='a'>
					<div class="content-wrapper">
						<p class="title" style="color: rgb(237, 102, 96);">
							周边优惠
						</p>
						<p class="tips">
							领取口碑好券
						</p>
					</div>
					<img class="icon img-responsive" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" />
				</router-link>
			</div>
		</section>
		<section>
			<div class="activity-header">
				<span class="line left"></span>
				<svg class="activity-icon"><use xlink:href="#alarm">
					<svg stroke="red" viewBox="-4 3 30 30" id="alarm" width="100%" height="100%"><g id="alarm_页面"><g id="alarm_发现页_新增天天特价_确认" transform="translate(-31 -1587)"><g id="alarm_商品" transform="translate(-2 1556)"><g id="alarm_Page-1"><path stroke="red" d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z" class="st0" transform="translate(34 32)"></path><path stroke="red" d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z" class="st0" transform="translate(34 32)"></path></g></g></g></g></svg>
				</use></svg>
				限时好礼
				<span class="line right"></span>
			</div>
			<p class="activity-sub-title">金币换豪礼</p>
			<div class="activity-body">
				<a class="discover-food" v-for="(data,index) of discover">
					<img class="img-responsive" :src="data.image_hash" width="324" height="322" />
					<div>
						<p class="food-name ui-ellipsis">{{data.title}}</p>
						<div class="food-info clearfix">
							<div class="food-price">
								<span class="price ui-ellipsis">{{data.points_required}}金币</span>
								<del class="original-price ui-ellipsis">￥{{data.original_price}}</del>
							</div>
						</div>
					</div>
					<span class="discount">{{data.corner_marker}}</span>
				</a>
			</div>
			<div class="activity-recommend wall"></div>
			<p class="activity-more">
				查看更多
				<svg class="svg-next">
					<use xlink:href="#tab_found_next_page">
						<svg viewBox="0 0 16 25" id="tab_found_next_page" width="100%" height="100%"><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-linecap="round" stroke-width="3" d="M2.127 2l10.87 10.582L2.291 23.11"></path></svg>
					</use>
				</svg>
			</p>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'discover',
		data(){
			return{
				discover:[],
			}
		},
		mounted(){
			axios.get('/restapi/member/gifts/suggest').then((discover)=>{
				console.log(discover)
				this.discover = discover.data.discover;
				this.discover = this.discover.slice(0,3);
			}).catch(error =>{
				console.log(error.message)
			})
		}
	}
</script>

<style scoped lang="scss">
	.discover{
		padding-bottom: .133333vw;
		.top-banner {
		    line-height: 1;
		    width: 100%;
		    display: block;
		}
	}
	section{
		margin-bottom: 2.8vw;
		background: #fff;
		border-top: 1px solid #eee;
		&.parts{
			border-bottom: none;
			background: initial;
		}		
	}
	.unmerge>.entry:last-child{ border-top: 1px solid #ededed; }
	.unmerge>.entry:first-child { margin-bottom: 2.8vw; }
	.entry{
		border-width: 1px 0;
	    box-sizing: border-box;
	    overflow: hidden;
	    display: flex;
    	background: #fff;
    	flex-wrap: wrap;
	    &.list3{ 
	    	position: relative;
	    	a {
	    		width: 50%;
	    		justify-content: space-between;
	    		align-items: center;
	    		height: 21.333333vw;
	    		padding: 0 4vw;
    			border-bottom: 1px solid #ededed;
	    		&:first-child{
	    			position: absolute;
	    			align-items: normal;
	    			height: 42.666667vw;
	    			padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
	    			.icon{
	    				align-self: flex-end;
					    width: 20vw;
	    			}
	    		}
	    		&:nth-child(2),&:nth-child(3){ margin-left: 50%; }
	    		&:nth-child(3n+1) { border-right: 1px solid #ededed; }
	    		.icon {
				    width: 12vw;
				}
	    	} 
	    }
	    a {
	    	display: flex;
	    	border-bottom: 1px solid #ededed;
	    }
	    .content-wrapper{
	    	max-width: 30vw;
	    }
	    .title {
		    line-height: 1.2;
		    font-size: .426667rem;
		    margin-bottom: 1.6vw;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		}
		.tips {
		    line-height: 1.2;
		    font-size: .32rem;
		    color: #999;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		}
	}
	.activity-header{
		padding-top: 5.2vw;
	    text-align: center;
	    font-size: .48rem;
	    font-weight: 700;
	    color: #333;
	}
	.line{
		display: inline-block;
	    margin: 2.133333vw .933333vw 1.733333vw;
	    border: 1px solid #333;
	    width: 4vw;
	    height: 0;
	    position: relative;
	    &.left:after{ right: -.666667vw; }
	    &.right:after { left: -.666667vw; }
	    &:after{
	    	position: absolute;
		    top: -.666667vw;
		    content: "";
		    background: #333;
		    height: 1.333333vw;
		    width: 1.333333vw;
		    border-radius: 50%;
	    }
	}
	.activity-icon {
	    position: relative;
	    top: .533333vw;
	    width: 4.4vw;
	    height: 4.4vw;
	}
	.activity-sub-title {
	    font-size: .293333rem;
	    color: #999;
	    text-align: center;
	    padding-bottom: 2.133333vw;
	}
	.activity-body {
	    padding: 3.2vw 0 4vw 4vw;
	    white-space: nowrap;
	}
	.discover-food {
	    display: inline-block;
	    position: relative;
	    box-sizing: border-box;
	    width: 29.6vw;
	    margin-right: 1.6vw;
	    img{
		    width: 43.2vw;
		    height: 29.333333vw;
		    margin-bottom: 2.533333vw;
		}
		.food-name {
		    font-size: .346667rem;
		    color: #333;
		    margin-bottom: 1.333333vw;
		}
		.food-price {
		    height: 6.4vw;
		    line-height: 6.4vw;
		}
		.price {
		    font-size: .346667rem;
		    height: 4.8vw;
		    line-height: 4.8vw;
		    color: #ff5339;
		    margin-right: .933333vw;
		    max-width: 13.333333vw;
		    display: inline-block;
		    vertical-align: middle;
		}
		.original-price {
		    font-size: .293333rem;
		    color: #aaa;
		    max-width: 10.666667vw;
		    display: inline-block;
		    vertical-align: middle;
		}
		.discount {
		    position: absolute;
		    top: 0;
		    left: 0;
		    font-size: .293333rem;
		    color: #fff;
		    background: #413d3c;
		    padding: .066667rem;
		    padding: .666667vw;
		}
	}
	.ui-ellipsis {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.wall { padding-left: 1.333333vw; }
	.activity-recommend { padding-bottom: 4vw; }
	.activity-more {
	    padding-top: 0;
	    font-size: .346667rem;
	    color: #999;
	    text-align: center;
	    padding: 4vw 0 4.8vw;
	}
	.svg-next{
		height: 2.4vw;
	    width: 1.333333vw;
	    margin-left: 1.466667vw;
	}
</style>
<style>
	html{background-color:#f5f5f5}
</style>