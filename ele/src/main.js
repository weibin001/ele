// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import WebpPlugun from 'vue-webp-plugin';
import Mock from './mock/mock'
import store from './vuex'
Vue.config.productionTip = false
Vue.use(Mint,WebpPlugun)
/* eslint-disable no-new */
/*****************路由守卫 需要放在vue上面 下面new Vue（）自动挂载router.start 相当于1.0里的router.start App 如果放在下面刷新或者初始加载的时候routerbefore不会执行*********************/
router.beforeEach((to,from,next) =>{
	document.title = (to.meta.title) && to.meta.title;
	next();
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
