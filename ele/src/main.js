// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import '../static/css/base.css'
import './fonts/fonts.css'
import Mint from 'mint-ui'
import WebpPlugun from 'vue-webp-plugin';
import Mock from './mock/mock'

Vue.config.productionTip = false
Vue.use(Mint,WebpPlugun)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
