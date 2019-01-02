import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children:[
      	{
      		path:'',
      		component: resolve => require(['@/components/msite/msite'],resolve)
      	},
      	{ 
      		path: '/msite',
      		name: 'msite',
      		component: resolve => require(['@/components/msite/msite'],resolve)
      	},
      	{ 
      		path: '/discover',
      		name: 'discover',
      		component: resolve => require(['@/components/discover/discover'],resolve)
      	},
      	{ 
      		path: '/order',
      		name: 'order',
      		component: resolve => require(['@/components/order/order'],resolve)
      	},
      	{ 
      		path: '/user',
      		name: 'user',
      		component: resolve => require(['@/components/user/user'],resolve)
      	},
      ]
    }
  ]
})
