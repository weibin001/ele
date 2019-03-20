import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: home,
      children:[
      	{
      		path:'/',
      		meta:{
      			title:'饿了么'
      		},
      		component: resolve => require(['@/components/msite/msite'],resolve)
      	},
      	{ 
      		path: '/msite',
      		name: 'msite',
      		meta:{
      			title:'饿了么'
      		},
      		component: resolve => require(['@/components/msite/msite'],resolve)
      	},
      	{ 
      		path: '/discover',
      		name: 'discover',
      		meta:{
      			title:'发现'
      		},
      		component: resolve => require(['@/components/discover/discover'],resolve)
      	},
      	{ 
      		path: '/order',
      		name: 'order',
      		meta:{
      			title:'我的订单'
      		},
      		component: resolve => require(['@/components/order/order'],resolve)
      	},
      	{ 
      		path: '/user',
      		name: 'user',
      		meta:{
      			title:'我的'
      		},
      		component: resolve => require(['@/components/user/user'],resolve)
      	},
      ]
    },
    {
    	path: '/shop',
    	meta: {
        title: '饿了么'
     	},
      component: resolve => require(['@/components/shop/detail'],resolve),
    },
    {
    	path: '/*',
    	meta: {
        title: '出错了'
     	},
      component: resolve => require(['@/components/notfound'],resolve),
    }
  ]
})

