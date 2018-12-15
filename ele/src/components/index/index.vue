<template>
	<section>
		<headtitle></headtitle>
		<div class="index-search-warpper" ref='search' style="position: sticky; top: 0px; z-index: 999;">
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
			<mt-swipe :auto="0" class='index-swiper' v-if="!(page01 == '' && page02 == '')">
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
		<div v-if="!(banner == '')">
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
					<mt-swipe :auto="2500">
					  <mt-swipe-item v-for="(data,index) of banner" :key="index">
					  	<router-link tag='a' to='/'>
					  		<img :src="data.image" class="img-responsive"/>
					  	</router-link>
					  </mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
			<div class="backtop" v-show="backtop">
				<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"  class="BackTop-icon img-responsive"/>
			</div>
		</div>
		<!--
        	遮罩层
        -->
        <div class="filtermodal" v-show="filterModel" @click="closeFilterModel()"></div>
		<div class="index-shoplist-title">
			推荐商家
		</div>
		<div style="position: sticky;top:13.23vw;z-index:100;transform: translateZ(0);" ref='filter_list' v-if="!(bar == '' && outside == '')">
			<div>
				<aside class="index-filter">
					<div class="index-filter-header">
						<a href="javascript:" @click="toFixed('sort_list')" :class="[{open:open['sort_list']},{active:(sort_id != ''&& sort_id<10)}]">
							<span>{{sort_name}}</span>
							<svg data-v-a5cc4024="" viewBox="0 0 72 32" class="dropdown-icon"><path data-v-a5cc4024="" d="M36 32l36-32h-72z"></path></svg>
						</a>
						<a href="javascript:" v-for="(data,index) of outside['outside_sort_filter']" @click="sort(data.value,data.name)" :class="[{active:sort_id == data.value}]">
							<span>{{data.name}}</span>
						</a>
						<a href="javascript:" @click="toFixed('filter_list')" :class="[{open:open.filter_list}]">
							<span>筛选</span>
						</a>
					</div>
					<div class="filter-extend filter-sort" :class="[{open:open['sort_list']}]">
						<ul>
							<li v-for="(data,index) of outside['inside_sort_filter']" :class="[{active:sort_id == data.value}]" @click="sort(data.value,data.name)">
								<span v-text="data.name"></span>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="综合排序" class="selected"/>
							</li>
						</ul>
					</div>
					<div class="filter-extend" :class="[{open:open['filter_list']}]">
						<div class="morefilter">
							<dl>
								<dt>商家服务（可多选）</dt>
								<dd>
									<div class="morefilter-box" v-for="(data,index) of bar.supports" @click="filter(data.id,1)" :class="[{active:(filter_supports_id.indexOf(data.id) != -1)}]">
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
									<div class="morefilter-box" v-for="(data,index) of bar.activity_types" @click="filter(data.id,3)" :class="[{active:(filter_activity_types_id == data.id)}]">
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
									<div class="morefilter-box" v-for="(data,index) of bar.average_costs" @click="filter(data.id,2)" :class="[{active:(filter_average_cost_id == data.id)}]">
										<div>
											<img :src="data.icon_hash" v-if="data.icon_hash"/>
											<span>{{data.description}}</span>
										</div>	
									</div>
								</dd>
							</dl>
						</div>
						<div class="morefilter-button">
							<span :class="[{active:(filter_supports_id.length !=0 || filter_average_cost_id != '' || filter_activity_types_id !='' )}]" @click="filter('',4)">清空</span>
							<span>确定</span>
						</div>
					</div>
				</aside>
			</div>
		</div>
		<section class="shoplist">
			<div class="index-shoplist-container">
				<div class="index-shopinfo">
					<div class="index-shoplogo-container">
						<div class="index-shoplogo-image">
							<img src="https://fuss10.elemecdn.com/4/ed/0c168f4f14d4107548a1d3da9b2a0jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" />
						</div>
					</div>
					<div class="index-shoplist-main">
						<div class="index-shoplist-line">
							<h3 class="index-shoplist-name">
								<i data-content="品牌" class="index-shoplist-premium">品牌</i>
								<span>常熟麦当劳东南大道DT餐厅</span>
							</h3>
							<ul class="index-shoplist-wrap">
								<span class="index-shoplist-omit">···</span>
							</ul>
						</div>
						<div class="index-shoplist-line">
							<div class="index-shoplist-rateWrap">
								<div class="index-shoplist-rate-Wrap index-stars-rate">
									<div><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"></div>
									<div class="stars-shade"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="></div>
								</div>
								<span class="index-stars-rate">4.8</span>
								<span>月售317单</span>
							</div>
						</div>
						<div class="index-shoplist-line">
							<div class="index-shoplist-moneylimit">
								<span>￥15起送</span>
								<span>配送费￥4</span>
							</div>
							<div class="index-shoplist-timedistance">
								<span>1.70km</span>
								<span>25分钟</span>
							</div>
						</div>
					</div>
				</div>
				<div class="index-activityWrap">
					<section class="index-tagline">
						<span class="index-mini-tag">
							汉堡
							<span class="index-mini-tagGhost">汉堡</span>
						</span>
						<span class="index-recommendTag">
							<img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" class="img-responsive" />
							<span>口碑人气好店</span>
						</span>
					</section>
					<span>
						<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" class="index-dashedline" />
					</span>
					<section class="index-activities">
						<div class="index-activitylist">
							<div class="index-actrow">
								<span class="index-iconWrap">
									<span class="index-icon" style="background-color: rgb(112,188,70);">首</span>
								</span>
								<span class="index-desc">新用户下单立减17元</span>
							</div>
							<div class="index-actrow">
								<span class="index-iconWrap">
									<span class="index-icon" style="background-color: rgb(240,115,115);">减</span>
								</span>
								<span class="index-desc">满50减3，满80减5</span>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
		<div class="spinner" v-show='loading'>
			<mt-spinner :type="0" color="#26a2ff" :size="40"></mt-spinner>
		</div>
		<tarbar></tarbar>
	</section>
</template>

<script>
	import axios from 'axios';
	import { Swipe , SwipeItem , Spinner } from 'mint-ui';
	import 'mint-ui/lib/style.css'
	import headtitle from '../header';
	import tarbar from '../tarbar';
	export default{
		name:'index',
		components:{
			tarbar,
			headtitle,
			Swipe,
			SwipeItem,
			Spinner
		},
		data(){
			return{
				page01:'',
				page02:'',
				banner:'',
				bar:'',
				outside:'',
				loading:true,
				filterModel:false,
				backtop:false,
				html:document.documentElement,
				body:document.querySelector('body'),
				open:{
					sort_list:false,
					filter_list:false
				},
				sort_id:'',
				sort_name:'综合排序',
				filter_supports_id:[],
				filter_average_cost_id:'',
				filter_activity_types_id:'',
			}
		},
		mounted(){
			this.getSwiper();
			this.getBanner();
			this.getFilter();
			window.addEventListener('scroll',this.handleScroll);
		},
		beforeDestroy () {
		      this.closeFilterModel();
		      window.removeEventListener('scroll',this.handleScroll);
		},
		computed:{},
		methods:{
			handleScroll:function(){
				this.backtop = (this.html.scrollTop > this.html.clientHeight/3)?true:false;
			},
			toFixed:function(index){
				this.body.style.overflow='hidden';
				this.body.style.minHeight=`${this.html.clientHeight*2}px`;
				this.body.style.width = '100%';
				if((this.html.scrollTop + this.$refs.search.offsetHeight)<this.$refs.filter_list.offsetTop){
					this.html.scrollTop = this.$refs.filter_list.offsetTop;
				}
				if(this.filterModel && this.open[index]){
					this.closeFilterModel();
				}else{
					this.filterModel = true;
					for (let i in this.open) {
						this.$set(this.open,i,false);
					}
					this.$set(this.open,index,true);
				}
			},
			sort:function(val,name){
				this.sort_id = (this.sort_id != val)?val:'';
				this.sort_name = (this.sort_id != '' && this.sort_id<10)?name:'综合排序';
				this.closeFilterModel();
			},
			filter:function(id,type){
				switch(type){
					case 1:
						let keys = this.filter_supports_id.indexOf(id);
						keys == -1?this.filter_supports_id.push(id):this.filter_supports_id.splice(keys,1);
						break;
					case 2:
						this.filter_average_cost_id = (this.filter_average_cost_id != id)?id:'';
						break;
					case 3:
						this.filter_activity_types_id = (this.filter_activity_types_id != id)?id:'';
						break;
					case 4:
						this.closeFilterModel();
						break;
					default:
						this.filter_supports_id = [];
						this.filter_average_cost_id = '';
						this.filter_activity_types_id = '';
						break;
				}
			},
			closeFilterModel:function(){
				this.body.style.overflow='auto';
				this.body.style.minHeight=``;
				for (let i in this.open) {
					this.$set(this.open,i,false);
				}
				this.filterModel = false;
			},
			getSwiper:function(){
				axios.get('/restapi/shopping/v2/entries?latitude=31.588285&longitude=120.777712&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then((swiper) => {
					this.swiper = !this.swiper;
					this.page01 = swiper.data.swiper.slice(0,10);
					this.page02 = swiper.data.swiper.slice(10,20);
				}).catch((err) => {
					console.log(err.message);
				})
			},
			getBanner:function(){
				axios.get('/restapi/shopping/v2/banners?consumer=1&type=1&latitude=31.588285&longitude=120.777712').then( (banner) => {
					this.advertise = !this.advertise;
					this.loading = !this.loading;
					this.banner = banner.data.banner;
				}).catch((err) => {
					console.log(err.message);
				})
			},
			getFilter:function(){
				axios.get('/pizza/shopping/restaurants/batch_filter?latitude=31.588285&longitude=120.777712&terminal=h5').then( (filter) => {
					this.bar = filter.data.bar;
					this.outside = filter.data.outside;
				}).catch((err) => {
					console.log(err.message);
				})
			}
		}
	}
</script>

<style>
	.index-search-warpper{
		transform: translateZ(0);						/*防止屏幕抖动*/
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
	.backtop{
		z-index: 3;
		position: fixed;
		right: 4vw;
		bottom: 20vw;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 11.333333vw;
		height: 11.333333vw;
		border: .133333vw solid #999;
	    border-radius: 50%;
	    background: #fff;
	    transition: opacity .3s;
	}
	.backtop .BackTop-icon{
		width: 5.333333vw;
		height: 5.333333vw;
	}
	.index-shoplist-title{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 9.6vw;
		font-size: .4rem;
		color: #000;
	}
	.index-shoplist-title:before,.index-shoplist-title:after{
		display: block;
		content: "";
		width: 5.33333vw;
		height: .266667vw;
		background-color: #999;
	}
	.index-shoplist-title:before{ margin-right: 3.466667vw; }
	.index-shoplist-title:after{ margin-left: 3.466667vw; }
	.spinner{
		height: 1.333333rem;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	
	.index-filter{
		position: relative;
    	border-bottom: 1px solid #ddd;
    	line-height: 10.4vw;
    	height: 10.666667vw;
    	z-index: 101;
    	top: 0;
	}
	.index-filter-header{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 10.533333vw;
		display: flex;
		z-index: 4;
		background-color: #fff;
	}
	.index-filter-header>a{
		flex: 1;
		text-align: center;
		color: #666;
		position: relative;
		font-size: .3733333rem;
		z-index: 101;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.index-filter-header>a .dropdown-icon {
	    width: 1.6vw;
	    height: .8vw;
	    margin-left: 1.333333vw;
	    margin-bottom: .533333vw;
	    fill: #333;
	    transition: transform .3s,-webkit-transform .3s;
	}
	
	.index-filter-header>a .filter-nav-more__icon {
	    margin-left: .533333vw;
	    width: 3.466667vw;
	    height: 3.466667vw;
	    fill: #666;
	}
	
	.index-filter-header>a.active{
		color: #333;
    	font-weight: 700;
	}
	.index-filter-header>a.active .dropdown-icon,.index-filter-header>a.active .filter-nav-more__icon {
		fill: currentColor;
	}
	.index-filter-header>a.open{
		color: #3190e8;
    	font-weight: 700;
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
	}
	.filter-sort li{
		position: relative;
		padding-left: 5.333333vw;
		line-height: 10.666667vw;
	}
	.filter-sort li.active{
		color: #3190e8;
    	font-weight: 700;
	}
	.filter-sort li.active .selected{
		display: block;
	}
	.filter-sort .selected{
		position: absolute;
		right: 3.7333333vw;
		top: 50%;
		width: 4vw;
		height: 4vw;
		transform: translateY(-50%);
		max-width: 100%;
		display: none;
	}
	.morefilter{
		overflow: auto;
		height: 100%;
		padding: 0 2.666667vw;
		background: #fff;
		line-height: normal;
	}
	.morefilter dl{
		margin: 2.666667vw 0;
		overflow: hidden;
	}
	.morefilter dt{
		margin-left: 1%;
		margin-bottom: 2vw;
    	color: #666;
	}
	.morefilter dd,.morefilter dd .morefilter-box{
		display: flex;
	}
	.morefilter dd{
		flex-wrap: wrap;
	    background: #fff;
	    position: relative;
	}
	.morefilter dd .morefilter-box{
		align-items: center;
		justify-content: center;
		flex: 0 0 31.33%;
		height: 9.333333vw;
    	font-size: .346667rem;
    	margin: .8vw 1%;
    	background: #fafafa;
	}
	.morefilter dd .morefilter-box>div{
		white-space: nowrap;
	}
	.morefilter dd .morefilter-box>div img{
		width: 3.466667vw;
		height: 3.466667vw;
		vertical-align: middle;
		margin-right: .8vw;
		max-width: 100%;
	}
	.morefilter dd .morefilter-box>div span{
		margin-left: 2%;
    	vertical-align: middle;
	}
	.morefilter dd .morefilter-box.active{
		font-weight: 700;
	    color: #3190e8;
	    background-color: #edf5ff;
	}
	.morefilter-button{
		display: flex;
		align-items: center;
   		background-color: #fafafa;
   		box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
   		line-height: 11.466667vw;
	}
	.morefilter-button span{
		background-color: #fff;
    	color: #ddd;
    	font-size: .426667rem;
	    text-align: center;
	    text-decoration: none;
	    flex: 1;
	}
	.morefilter-button span:first-child.active{
		color: #333;
	}
	
	.morefilter-button span:not(:first-child){
		color: #fff;
    	background-color: #00d762;
    	border: .133333vw solid #00d762;
    	box-sizing: border-box;
	}
	
	
	.index-shoplist-container{
		position: relative;
		border-bottom: .133333vw solid #eee;
		background-color: #fff;
		color: #666;
		padding: 4vw 0;
		list-style: none;
		font-size: .2933333rem;
		line-height: normal;
	}
	.index-shopinfo{
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		padding: 0 2.6666667vw;
	}
	.index-shoplogo-container{
		position: relative;
		z-index: 0;
	}
	.index-shoplogo-image{
		position: relative;
		width: 17.3333333vw;
		height: 17.333333vw;
	}
	.index-shoplogo-image>img{
		box-sizing: border-box;
	    display: block;
	    width: 100%;
	    height: 100%;
	    border-radius: .533333vw;
	    border: .133333vw solid rgba(0,0,0,.08);
	}
	.index-shoplist-main,.index-shoplist-line{
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}
	.index-shoplist-main{
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		flex-direction: column;
		-webkit-user-select: none;
		padding-left: 2.666667vw;
		flex-grow: 1;
	}
	.index-shoplist-line,.index-shoplist-name{
		align-items: center;
	}
	.index-shoplist-name{
		display: flex;
	    margin: 0;
	    padding: 0;
	    color: #333;
	    font-weight: 700;
	    font-size: .4rem;
	    overflow: hidden;
	}
	.index-shoplist-premium{
		position: relative;
		margin-right: 1.33333333vw;
		padding: .2666667vw .6666667vw;
		color: transparent;
		text-align: center;
		white-space: nowrap;
		font-weight: 700;
		font-size: .29333333rem;
		font-style: normal;
		line-height: normal;
	}
	.index-shoplist-premium:after{
		display: block;
	    position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 0;
	    padding: .533333vw 1.333333vw;
	    content: attr(data-content);
	    color: #6f3f15;
    	font-weight: 700;
    	font-size: .29333333rem;
    	border-radius: 1.066667vw;
    	background-image: linear-gradient(-139deg,#fff100,#ffe339);
    	transform-origin: 0 0;
	}
	
	.index-shoplist-wrap{
		margin-left: 2.666667vw;
		display: flex;
	}
	
	.index-shoplist-wrap .index-shoplist-omit{
		margin-left: 2.666667vw;
		padding: 0 1.333333vw;
	}
	.index-shoplist-rateWrap{
		display: flex;
		align-items: center;
	}
	.index-shoplist-rate,.index-stars-rate{
		margin-right: 1.066667vw;
	}
	.index-shoplist-rate-Wrap{
		position: relative;
	    overflow: hidden;
	    display: inline-block;
	    vertical-align: middle;
	}
	.index-shoplist-rate-Wrap>div{
		display: flex;
	}
	.index-shoplist-rate-Wrap>div img{
		width: 14.933333vw;
		height: 2.666667vw;
		flex: none;
		max-width: none;
	}
	.stars-shade{
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	.index-shoplist-moneylimit{
		display: flex;
		align-content: center;
	}
	.index-shoplist-moneylimit span+span:before,.index-shoplist-timedistance span+span:before{
		margin: 0 .8vw;
	    color: #ddd;
	    content: "|";
	}
	.index-shoplist-timedistance{
		display: flex;
		align-items: center;
    	color: #999;		
	}
	.index-activityWrap{
		padding-left: 22.666667vw;
	}
	.index-tagline{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 2.666667vw 2.666667vw 0 0;
	}
	.index-tagline span{
		margin-right: 1.333333vw;
		margin-bottom: 1.066667vw;
	}
	.index-mini-tag{
		position: relative;
		font-size: .266667rem;
		color: transparent;
		white-space: normal;
		padding: 0 1.066667vw;
	}
	.index-mini-tag .index-mini-tagGhost{
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
	
	.index-recommendTag{
		display: flex;
		align-content: center;
		border-radius: .133333vw;
		font-size: .2666667rem;
		height: 4vw;
		padding: 0 1.066667vw;
    	color: #e8470b;
	}
	.index-recommendTag img{
		margin-top: .4vw;
		height: 2.666667vw;
		width: 2.666667vw;
		margin-right: .8vw;
	}
	.index-dashedline{
		width: 100%;
		height: .133333vw;
		padding-right: 2.666667vw;
	}
	.index-activities{
		display: flex;
		justify-content: space-between;
		align-content: stretch;
    	overflow: hidden;
	}
	.index-activities .index-activitylist{
		flex: 1;
		padding-right: 2.666667vw;
    	overflow: hidden;
	}
	.index-activities .index-activitylist>div:not(:first-child){
		margin-top: .666667vw;
	}
	.index-actrow{
		display: flex;
		align-items: center;
		font-size: .293333rem;
		line-height: 4.8vw;
	}
	.index-actrow .index-iconWrap{
		display: inline-block;
    	position: relative;
    	margin-right: 1.6vw;
    	height: 3.733333vw;
    	width: 3.733333vw;
    	vertical-align: middle;
	}
	.index-actrow .index-iconWrap .index-icon{
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
	
	.index-actrow .index-desc{
		display: inline-block;
		flex: 1;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    vertical-align: middle;
	}
	
	.filtermodal{
		position: fixed;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    z-index: 3;
	    background: rgba(0,0,0,.5);
	    transition: all .3s ease-in-out;
	}
</style>
