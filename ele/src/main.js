// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import '../static/css/base.css'
import './fonts/fonts.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import WebpPlugun from 'vue-webp-plugin';
import Mock from './mock/mock'
import store from './vuex'
Vue.config.productionTip = false
Vue.use(Mint,WebpPlugun)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
