<template>
  <section class="index">
    <!-- {{filter_data}} -->
    <header class="ele-header">
      <section class="ele-header-container">
        <div
          data-aria="hhhhh"
          class="ele-header-aria"
          @click="$emit('openSearch')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 31"
            class="icon01"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            ></path>
          </svg>
          <span class="ele-header-text">{{
            isExit_location ? city : city_info.name
          }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 8"
            class="icon02"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
              data-spm-anchor-id="a2ogi.12117543.0.i3"
            ></path>
          </svg>
        </div>
      </section>
    </header>
    <div
      class="search-warpper"
      ref="search"
      style="position: sticky; top: 0px; z-index: 999;"
    >
      <div class="search">
        <a class="search-content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill-opacity=".38"
              d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
            ></path>
          </svg>
          <span style="font-family: simsun;">搜索饿了么商家丶商品名称</span>
        </a>
      </div>
    </div>
    <Foodentry></Foodentry>
    <FoodentryWrap v-if="load_location"></FoodentryWrap>
    <Banner></Banner>
    <!--返回顶部-->
    <div class="backtop" v-show="backtop" @click="html.scrollTop = 0">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
        class="BackTop-icon img-responsive"
      />
    </div>
    <!--遮罩层-->
    <div
      class="filtermodal"
      v-show="filter_Model"
      @touchmove.prevent
      @click="closeModel()"
    ></div>
    <div class="shoplist-title" id="shoplist-title" v-if="shoplist_title_show">
      推荐商家
    </div>
    <div style="position: sticky;top:13.23vw;z-index:100;">
      <FilterList
        ref="filter_list"
        :toggle="filter_Model"
        @toggle="controlModel"
        @showtitle="shoplist_title_show = true"
      ></FilterList>
    </div>
    <noDataTip :msg="noDataTip">
      <button
        slot="button"
        v-text="noDataTip == 'login' ? '立即登录' : '手动选择地址'"
        @click="btn()"
      ></button>
    </noDataTip>
    <ShopList
      :shoplist="shoplist"
      :loadAll="loadAll"
      @loadMore="loadMore"
    ></ShopList>
    <div class="spinner" v-show="load_location || load_data">
      <mt-spinner :type="0" color="#26a2ff" :size="40"></mt-spinner>
    </div>
  </section>
</template>

<script>
/*如果当前页觉得乱的话 可使用传给子组件商品列表请求的url 在子组件上请求数据（请求和无限加载函数搬过去） */
/*$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM*/
import axios from 'axios'
import { Spinner } from 'mint-ui'
import ShopList from '../../common/shoplist'
import FilterList from '../../common/filterlist'
import NoDataTip from '../../common/noDataTip'
import Banner from './banner'
import Foodentry from './foodentry'
import FoodentryWrap from './foodentryWrap'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('user')
const { mapGetters: mapFilterGetters } = createNamespacedHelpers('filter')
export default {
  name: 'index',
  components: {
    Spinner,
    ShopList,
    FilterList,
    NoDataTip,
    Banner,
    Foodentry,
    FoodentryWrap
  },
  data() {
    return {
      city: '', //地址
      shoplist: [], //商品
      offset: 0, //商品偏移
      loadAll: false, //商品全部加载
      load_location: true, //加载定位
      load_data: false, //加载数据
      backtop: false, //返回顶部
      noDataTip: '', //没有数据提示框
      noLogin: false, //未登录提示框
      filter_Model: false, //模态框
      shoplist_title: '',
      shoplist_title_show: false, //控制标题（推荐商家）显示
      html: document.documentElement,
      body: document.querySelector('body')
    }
  },
  mounted() {
    this.setPosition() //获取定位
    this.$nextTick(() => {
      //等待DOM更新完成后执行
      window.addEventListener('scroll', this.handleScroll) //添加监听事件
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll) //移除监听事件
  },
  computed: {
    ...mapState({
      city_info: state => state.user.location,
      userId: state => state.user.userId
    }),
    ...mapGetters(['isExit_location']),
    ...mapFilterGetters(['res_url']),
    filter_data: function() {
      return this.$store.state.filter.filterParam
    }
  },
  watch: {
    filter_Model: function(cur_val, old_val) {
      this.$nextTick(() => {
        this.shoplist_title =
          this.shoplist && document.getElementById('shoplist-title')
        this.html.scrollTop =
          this.html.scrollTop <
            this.shoplist_title.offsetHeight + this.shoplist_title.offsetTop &&
          cur_val
            ? this.shoplist_title.offsetHeight + this.shoplist_title.offsetTop
            : this.html.scrollTop
      })
    },
    city_info: function(cur_val) {
      //监听vuex 用户地址变化
      this.reShoplist()
      this.noDataTip = ''
    },
    userId: function(cur_val) {},
    filter_data: {
      handler(cur_val) {
        this.reShoplist()
      },
      deep: true //开启深度监听，数据对象中属性发生变化才能监听到（一层层遍历对象，添加监听）容易影响性能
    }
  },
  methods: {
    ...mapActions({ setLs: 'setCity', getLs: 'getCity' }),
    handleScroll: function() {
      this.backtop =
        (this.html.scrollTop > this.html.clientHeight / 3 && true) || false
    },
    controlModel: function(data) {
      //监听子传父事件
      this.filter_Model = data
    },
    closeModel: function() {
      this.$nextTick(() => {
        this.$refs.filter_list ? (this.$refs.filter_list.open = '') : ''
      })
    },
    btn: function() {
      switch (this.noDataTip) {
        case 'login':
          this.$router.push()
          break
        case 'chose_city':
          this.$emit('openSearch')
          break
        default:
          break
      }
    },
    loadMore: function() {
      this.offset += 8
      this.getShoplist()
    },
    reShoplist: function() {
      //重新加载商品
      this.shoplist = [] //置空商品列表 !!
      this.offset = 0
      this.load_data = true
      this.getShoplist()
    },
    getPosition: function() {
      //获取经纬度
      this.city = '正在定位'
      this.load_location = true
      return new Promise((resolve, reject) => {
        //调用promise ES6 异步处理机制
        /*配置属性*/
        let options = {
          //配置属性
          timeout: 3000, //设置请求时间
          enableHighAccuracy: true //高精度定位
        }
        if (navigator.geolocation) {
          //是否开启定位 或者浏览器是否支持
          navigator.geolocation.getCurrentPosition(
            position => {
              let data = {
                //获取经纬度
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
              resolve(data) //成功resolve返回数据 then接收
            },
            error => {
              reject(error) //失败reject返回错误的信息 catch接收
            },
            options
          )
        } else reject('no thanks') //不存在返回信息 catch接收
      })
    },
    setPosition: function() {
      //判断是否成功获取并设置经纬度
      this.getPosition()
        .then(data => {
          //调用getPosition 函数 成功时接收信息
          //发起axios请求 PC端获取不到地址（暂时不用管）
          this.getCity(data.latitude, data.longitude)
        })
        .catch(error => {
          //调用getPosition 函数 失败时接收信息
          //					this.JugdePosition();//失败时判断是否存在session
          this.getLs()
            .then(location => {
              this.getCity(location.latitude, location.longitude)
            })
            .catch(() => {
              this.getCityError()
            })
          console.log(error.message)
        })
    },
    getCity: function(latitude, longitude) {
      //获取城市传递给Vuex
      //axios 基于promise 参考上方注释
      axios
        .get(
          `restapi/bgs/poi/reverse_geo_coding?latitude=${latitude}&longitude=${longitude}`
        )
        .then(city => {
          //`..${变量名}..`ES6 字符串模板
          this.setLs(city.data)
          this.load_location = false
        })
        .catch(error => {
          this.getCityError()
          console.log(error.message)
        })
    },
    getCityError: function() {
      //获取失败进入城市选择界面
      this.$emit('openSearch')
      this.noDataTip = 'chose_city'
      this.load_location = false
      this.city = '未能获取地址'
    },
    getShoplist: function() {
      let res =
        this.res_url == undefined
          ? `/restapi/shopping/v3/restaurants?latitude=${
              this.city_info.latitude
            }&longitude=${this.city_info.longitude}&offset=${
              this.offset
            }&limit=8&extras[]=activities&extras[]=tags&extra_filters=home${
              this.res_url
            }&rank_id=&terminal=h5`
          : `/restapi/shopping/v3/restaurants?latitude=${
              this.city_info.latitude
            }&longitude=${this.city_info.longitude}&offset=${
              this.offset
            }&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5`
      axios
        .get(res)
        .then(shopList => {
          this.shoplist = this.shoplist.concat(shopList.data.items)
          this.load_data = this.load_data && false
          this.loadAll = shopList.data.items.length == 0 && true
        })
        .catch(error => {
          console.log(error.response.status)
          this.load_data = false
          switch (error.response.status) {
            case 401:
              this.noDataTip = 'login'
              break
            default:
              break
          }
        })
    }
  }
}
</script>

<style scoped>
/*>>>穿透scoped  作用其他组件css*/
.ele-header {
  padding: 2.666667vw 3.733333vw 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
}
.ele-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9.2vw;
}
.ele-header-aria {
  width: 60%;
  font-weight: 700;
  background-color: transparent;
  display: flex;
  align-items: center;
}
.icon01 {
  width: 3.466667vw;
  height: 4.133333vw;
  fill: #fff;
}
.icon02 {
  width: 1.866667vw;
  height: 0.933333vw;
  fill: #fff;
}

.ele-header-text {
  display: inline-block;
  margin: 0 1.333333vw;
  font-size: 0.453333rem;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-warpper {
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.search {
  padding: 2vw 3.733333vw;
  margin: -0.133333vw 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.search:before {
  top: -1px;
}
.search:before,
.index-search:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.search-content {
  display: flex;
  width: 100%;
  height: 9.6vw;
  align-items: center;
  justify-content: center;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 0.373333rem;
}

.search-content svg {
  display: inline-block;
  width: 4.2666667vw;
  height: 4.2666667vw;
  margin-right: 1.333333vw;
}
.backtop {
  z-index: 3;
  position: fixed;
  right: 4vw;
  bottom: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.333333vw;
  height: 11.333333vw;
  border: 0.133333vw solid #999;
  border-radius: 50%;
  background: #fff;
  transition: opacity 0.3s;
}
.backtop .BackTop-icon {
  width: 5.333333vw;
  height: 5.333333vw;
}
.shoplist-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9.6vw;
  font-size: 0.4rem;
  color: #000;
}
.shoplist-title:before,
.shoplist-title:after {
  display: block;
  content: '';
  width: 5.33333vw;
  height: 0.266667vw;
  background-color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}
.spinner {
  height: 1.333333rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.filtermodal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}
</style>
