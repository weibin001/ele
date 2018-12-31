import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Filter from './filter'
import User from './User'
const store = new Vuex.Store({
	modules:{
		filter:Filter,
		user:User
	}
})

export default store;