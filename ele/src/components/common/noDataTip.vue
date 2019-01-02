<template>
	<section class="noDataTip-wrapper" v-if="msg" :class="[{nodatatipWrap:(msg=='login')}]">
    	<img :src="img" />
    	<h3 v-text="h3"></h3>
    	<p v-if="(msg==='login')" v-text="p">登录后查看更多商家</p>
    	<slot name='button'></slot>
    </section>
</template>

<script>
	export default{
		name:'NoDataTip',
		props:['msg'],
		data(){
			return{
				img:'',
				h3:'',
				p:''
			}
		},
		watch:{
			msg:{
				immediate:true,
				handler:function(val){
					switch (val){
						case 'login':
							this.img = '//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png';
							this.h3 = '登录后查看外卖订单'
							break;
						case 'chose_city':
							this.img = '//fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif';
							this.h3 = '输入地址后才能订餐哦！';
							break;
						default:
							this.img = '';
							this.h3 = '';
							this.p = '';
							break;
					}
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.nodatatipWrap{
		margin-top: 26.666667vw;
	}
	.noDataTip-wrapper{
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			display: block;
			width: 53.333333vw;
		}
		h3 {
			margin: 3.333333vw 0 2.666667vw;
		    color: #6a6a6a;
		    font-weight: 400;
		    font-size: .453333rem;
		}
		button {
			padding: 2.666667vw;
			min-width: 32vw;
	    	border: none;
	    	border-radius: .533333vw;
		    background-color: #56d176;
		    color: #fff;
		    text-align: center;
		    font-size: 1.2em;
		    font-family: inherit;
		}
		p {
		    margin: 0 0 3.333333vw;
		    color: #999;
		    font-size: .306667rem;
		}
	}
</style>