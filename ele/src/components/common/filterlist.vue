<template>
	<aside class="filter" v-if="show">
		<div class="filter-header">
			<a href="javascript:" @click="showModel('sort')" :class="[{open:(open == 'sort' && toggle)},{active:(JSON.stringify(sort) != '{}' && sort.value != 5 && sort.value != 3 )}]">
				<span>{{sort.name | sort_name}}</span>
				<svg viewBox="0 0 72 32" class="dropdown-icon"><path d="M36 32l36-32h-72z"></path></svg>
			</a>
			<a href="javascript:" v-for="(data,index) of outside['outside_sort_filter']"  @click="toggleSort(data)" :class="[{active:sort.value == data.value}]">
				<span>{{data.name}}</span>
			</a>
			<a href="javascript:" @click="showModel('filter')" :class="[{open:open == 'filter' && toggle},{active:actived}]">
				<span>筛选</span>
			</a>
		</div>
		<div class="filter-extend filter-sort" :class="[{open:(open == 'sort' && toggle)}]">
			<ul>
				<li v-for="(data,index) of outside['inside_sort_filter']" :class="[{active:sort.value == data.value}]" @click="toggleSort(data)">
					<span v-text="data.name"></span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="综合排序" class="selected"/>
				</li>
			</ul>
		</div>
		<div class="filter-extend" :class="[{open:(open == 'filter' && toggle)}]">
			<div class="morefilter">
				<dl>
					<dt>商家服务（可多选）</dt>
					<dd>
						<div class="morefilter-box" v-for="(data,index) of bar.supports" @click="toggleFilter(data,1)" :class="[{active:(filter_supports_id.indexOf(data.id) != -1)}]">
							<div>
								<img :src="data.icon_hash" />
								<span>{{data.name}}</span>
							</div>	
						</div>
					</dd>
				</dl>
				<dl>
					<dt>优惠活动（单选）</dt>
					<dd>
						<div class="morefilter-box" v-for="(data,index) of bar.activity_types" @click="toggleFilter(data,3)" :class="[{active:(filter_activity_types.id == data.id)}]" >
							<div>
								<img :src="data.icon_hash" v-if="data.icon_hash"/>
								<span>{{data.name}}</span>
							</div>	
						</div>
					</dd>
				</dl>
				<dl>
					<dt>人均消费</dt>
					<dd>
						<div class="morefilter-box" v-for="(data,index) of bar.average_costs" @click="toggleFilter(data,2)" :class="[{active:(filter_average_cost.id == data.id)}]" >
							<div>
								<img :src="data.icon_hash" v-if="data.icon_hash"/>
								<span>{{data.description}}</span>
							</div>	
						</div>
					</dd>
				</dl>
			</div>
			<div class="morefilter-button">
				<span :class="[{active:(filter_supports.length !=0 || JSON.stringify(filter_average_cost) !='{}' || JSON.stringify(filter_activity_types) !='{}')}]" @click="toggleFilter('',5)">清空</span>
				<span @click="toggleFilter('',4)">确定</span>
			</div>
		</div>
	</aside>
</template>

<script>
	/*品质联盟懒得弄-.-!!*/
	import axios from 'axios';
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('user')
	const { mapGetters:mapFilterGetters , mapActions:mapFilterActions } = createNamespacedHelpers('filter')
	export default{
		name:'filterList',
		data(){
			return{
				show:false,
				bar:[],
				outside:[],
				open:'',
				sort: this.$store.state.filter.filterData.sort || {},
//				more: this.$store.state.filter.filterData.more || {},
				filter_supports: this.$store.state.filter.filterData.more.supports || [],
				filter_average_cost: this.$store.state.filter.filterData.more.average || {},
				filter_activity_types: this.$store.state.filter.filterData.more.activity || {},
				html:document.documentElement,
				body:document.querySelector('body'),
			}
		},
		beforeDestroy () {
			this.body.style.overflow = '';
			this.body.style.minHeight = '';
			this.body.style.width = '';
		},
		props:["toggle"],
		computed:{
			...mapState({
				city_info: state => state.user.location
			}),
			...mapFilterGetters([
				'actived'
			]),
			filter_supports_id:function(){ 			//计算filter_supports存在的id
				let a = [];
				for (let val of this.filter_supports) {
					a.push(val.id);
				}
				return a;
			},
		},
		watch:{
			open:function(cur_val,old_val){
				(cur_val != '') ? this.$emit("toggle",true):this.$emit("toggle",false);
			},
			toggle:function(cur_val){
				this.body.style.overflow = (cur_val) && 'hidden' || 'auto';
				this.body.style.minHeight = (cur_val) && `${this.html.clientHeight*2}px` || ``;
				this.body.style.width = (cur_val) && '100%' || '';
			},
			city_info:function(cur_val){//监听vuex 用户地址变化
				this.getFilter()
			},
		},
		filters:{
			sort_name:(val)=>{
				val = (val && val !='距离最近' && val != '品质联盟') ? val : '综合排序';
				return val;
			},
		},
		methods:{
			...mapFilterActions({
				commitSort:'commitSort',
				commitMore:'commitMore',
			}),
			showModel:function(index){
				this.open = (this.open != index)?index:'';
			},
			toggleSort:function(data){
				this.sort = (this.sort.value != data.value) ? data:{};
				this.commitSort(this.sort);
				this.open = '';
			},
			toggleFilter:function(data,type){
				switch(type){
					case 1:
						let supports = {name:data.name,id:data.id};
						for (let i in this.filter_supports) {
							if(this.filter_supports[i].id == supports.id){			//不能直接对象比较 可以转化成字符串形式 或者有唯一的键值比对
								this.filter_supports.splice(i,1);
								return false;											//跳出函数 
							}
						}
						this.filter_supports.push(supports);
						break;
					case 2:
						this.filter_average_cost = (this.filter_average_cost.id != data.id)?data:{};
						break;
					case 3:
						this.filter_activity_types = (this.filter_activity_types.id != data.id)?data:{};
						break;
					case 4:
						let more = {
							supports:this.filter_supports,
							activity:this.filter_activity_types,
							average:this.filter_average_cost,				
						};
						this.commitMore(more);
						this.open = '';
						break;
					default:
						this.filter_supports = [];
						this.filter_average_cost = {};
						this.filter_activity_types = {};
						break;
				}
			},
			getFilter:function(){
				axios.get('/pizza/shopping/restaurants/batch_filter?latitude=31.588285&longitude=120.777712&terminal=h5').then( (filter) => {				
					this.show = true;
					this.bar = filter.data.bar;
					this.outside = filter.data.outside;
					this.$emit("showtitle");
				}).catch((error) => {
					console.log(error.message);
				})
			}			
		}
	}
</script>

<style lang="scss" scoped>
	.filter{
		position: relative;
    	border-bottom: 1px solid #ddd;
    	line-height: 10.4vw;
    	height: 10.666667vw;
    	z-index: 101;
    	top: 0;
	}
	.filter-header{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 10.533333vw;
		display: flex;
		z-index: 4;
		background-color: #fff;
		> a{
			flex: 1;
			text-align: center;
			color: #666;
			position: relative;
			font-size: .3733333rem;
			z-index: 101;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			.dropdown-icon {
			    width: 1.6vw;
			    height: .8vw;
			    margin-left: 1.333333vw;
			    margin-bottom: .533333vw;
			    fill: #333;
			    transition: transform .3s,-webkit-transform .3s;
			}
			.filter-nav-more__icon {
			    margin-left: .533333vw;
			    width: 3.466667vw;
			    height: 3.466667vw;
			    fill: #666;
			}
		}
		> a.active{
			color: #333;
    		font-weight: 700;
    		.dropdown-icon,.filter-nav-more__icon {
				fill: currentColor;
			}
		}
		> a.open{
			color: #3190e8;
    		font-weight: 700;
		}
	}
	.filter-extend.open{
		visibility: visible;
	    max-height: 1500%;
	    opacity: 1;
	}
	.filter-extend{
		position: absolute;
		left: 0;
		right: 0;
		top: 10.533333vw;
		border-top: 1px solid #ddd;
		background: #fff;
		transition: all .2s ease-in-out;
		visibility: hidden;
	    overflow: auto;
	    opacity: 0;
		z-index: 4;
	}
	.filter-sort{
		padding-top: 2.133333vw;
		padding-bottom: 3.2vw;
	    font-size: .373333rem;
	    color: #333;
	    li{
	    	position: relative;
			padding-left: 5.333333vw;
			line-height: 10.666667vw;
	    }
	    li.active{
	    	color: #3190e8;
    		font-weight: 700;
    		.selected{
    			display: block;
    		}
	    }
	    .selected{
			position: absolute;
			right: 3.7333333vw;
			top: 50%;
			width: 4vw;
			height: 4vw;
			transform: translateY(-50%);
			max-width: 100%;
			display: none;
		}
	}
	.morefilter{
		overflow: auto;
		height: 100%;
		padding: 0 2.666667vw;
		background: #fff;
		line-height: normal;
		dl{
			margin: 2.666667vw 0;
			overflow: hidden;
		}
		dt{
			margin-left: 1%;
			margin-bottom: 2vw;
	    	color: #666;
		}
		dd,dd .morefilter-box{
			display: flex;
		}
		dd{
			flex-wrap: wrap;
		    background: #fff;
		    position: relative;
		    .morefilter-box{
				align-items: center;
				justify-content: center;
				flex: 0 0 31.33%;
				height: 9.333333vw;
		    	font-size: .346667rem;
		    	margin: .8vw 1%;
		    	background: #fafafa;
		    	> div{
					white-space: nowrap;
					img{
						width: 3.466667vw;
						height: 3.466667vw;
						vertical-align: middle;
						margin-right: .8vw;
						max-width: 100%;
					}
					span{
						margin-left: 2%;
    					vertical-align: middle;
					}
				}
			}
			.morefilter-box.active{
				font-weight: 700;
			    color: #3190e8;
			    background-color: #edf5ff;
			}
		}
	}
	.morefilter-button{
		display: flex;
		align-items: center;
   		background-color: #fafafa;
   		box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
   		line-height: 11.466667vw;
   		span{
			background-color: #fff;
	    	color: #ddd;
	    	font-size: .426667rem;
		    text-align: center;
		    text-decoration: none;
		    flex: 1;
		}
		span:first-child.active{
			color: #333;
		}
		span:not(:first-child){
			color: #fff;
	    	background-color: #00d762;
	    	border: .133333vw solid #00d762;
	    	box-sizing: border-box;
		}
	}
</style>