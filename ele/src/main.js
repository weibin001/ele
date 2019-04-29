// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import WebpPlugun from 'vue-webp-plugin'
import Mock from './mock/mock'
import store from './vuex'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.headers['x-uab'] =
  '117#9SEi7g9l9KS+tddpdOnlncycTEIjjobC6URgBnFoEtuBZNFOmcjWEjdjOIr7Nz6impvFOV6CKkypmtd9BEfDAbmGOI2xBkjDMQMAKKF+ASaGrJ49BEftAbgpOIFCBkcuZQM9OEVRKkypmtd9BEVuOnbjmQ7A8UcuZI0nxd5CazmhoBwPFJR26buiICVOBxS8iXtCI+dLTCg30C3nIPIvV9hHV6DxoxFonejztv2pTMbhiCmn8z5g6/erDMoFQcAHi0DnIYfLTKvh0CICBSZTt/ehIL8RW/1WiPtnI58pTMvh0LBzBkZg6WPhILVRocSx00DnIYfLTKbhispwB282P9fK+KWyZYJfi3ZHK9A/EFEI7BdrvM1cvQ5M4zMvvn1dlb/jK2DF/kTl6xurM2dTxKaJ5YPuEsDKGGjbdgCDRsAwseO2wyIU1vdlAmL6hbdzg958t2YY6mSrFzHU4OSdgnpIoNXrkPW9CKGS9H163X2QsgUlGqJg7uF9hdvsSPdZoouTi+kGFE+KJyHemR5nEBK3bkxuSWTElDF42cZXjafbzsruA5myxOQPuvTq9KLGxYKpffEScYm0vPwSyGw0j4viYzroRh57C1W1fdd9AUykmeKJy1umG03B0OiOQeMQBAXc13uV0ivxjaTIy9=='
Vue.config.productionTip = false
Vue.use(Mint, WebpPlugun)
/* eslint-disable no-new */
/*****************路由守卫 需要放在vue上面 下面new Vue（）自动挂载router.start 相当于1.0里的router.start App 如果放在下面刷新或者初始加载的时候routerbefore不会执行*********************/
router.beforeEach((to, from, next) => {
  document.title = to.meta.title && to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
