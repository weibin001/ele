import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import msite from '@/components/msite/msite'
import discover from '@/components/discover/discover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
      	{
      		path: '/msite',
      		name: 'msite',
      		component: msite
      	},
      	{
      		path: 'discover',
      		name: 'discover',
      		component: discover
      	}
      ]
    }
  ]
})
