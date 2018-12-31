import Ls from '../../static/js/localstorage';
const User = {
	namespaced: true,		//使用createNamespacedHelpers（用于匹配所在模块=>user/setCity）实例查看SearchCity.vue  必要属性
	state:{
		user:{
			userId:0,
			location:{},
		},
	},
	/*
	 * getter状态检测
	 */
	getters:{
		isExit_location:(state) =>{
			return Object.keys(state.user['location']).length == 0
		}
	},
	/*
	 * mutations状态修改
	 */
	mutations:{
		city:function(state,data){
			state.user['location'] = data;
		}
	},
	/*actions异步进行修改状态（可用来判断条件是否满足 再提交到mutation，）
	 * 
	 * dispatch:调用当前模块其他action方法
	 * commit:调用mutations方法
	 * getter:调用当前模块其他getter方法
	 * rootGetters:（root根方法）可调用（其他模块）getters方法
	 * 
	 * ps:调用其他模块mutations/actions方法：commit/dispatch('', data, {root: true})
	 */
	actions:{
		setCity:function({dispatch,commit,getters,rootGetters},data){   
			Ls.setlocation(data);
			commit('city',data);
			commit('filter/changeGeohash', data.geohash, {root: true})
		},
		getCity:function({dispatch,commit,getters,rootGetters}){
			return new Promise( (resolve,reject) =>{
				(Ls.getlocation())?resolve(Ls.getlocation()) : reject('error')
			});
		}
	}
}

export default User


