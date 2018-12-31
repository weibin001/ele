const init_filter = (window.sessionStorage.getItem('filter'))
const Filter = {
	namespaced: true,
	state:{
		m_geohash:JSON.parse(window.sessionStorage.getItem('m_geohash')) || '',
		filterParam: (init_filter) ? JSON.parse(init_filter).filterParam : { supports:[] },
		filterData:(init_filter) ? JSON.parse(init_filter).filterData : {
			sort:{},
			more:{},
		}
	},
	getters:{
		actived:function(state){
			let a = (state.filterParam.supports.length != 0 || state.filterParam.activity || state.filterParam.cost_to || state.filterParam.cost_from) ?true:false
			return a;
		},
		res_url:function(state){
			let sort = (state.filterParam.sort) && `&order_by=${state.filterParam.sort}`;
			let supports ='';
			if(state.filterParam.supports.length != 0){
				state.filterParam.supports.forEach((val,index) =>{
					supports += `&support_ids[]=${val}`;
				})
			}
			let activity = (state.filterParam.activity) && `&activity_types[]=${state.filterParam.activity}` || '';
			let cost_to = (state.filterParam.cost_to) && `&cost_to=${state.filterParam.cost_to}` || '';
			let cost_form = (state.filterParam.cost_from) && `&cost_from=${state.filterParam.cost_from}` || '';
			return sort+activity+supports+cost_form+cost_to;
		}
	},
	mutations:{
		changeSort:function(state,data){
			let cur_filter = JSON.parse(window.sessionStorage.getItem('filter'));
			cur_filter.filterData.sort = data;
			cur_filter.filterParam.sort = data.value;
			window.sessionStorage.setItem('filter',JSON.stringify(cur_filter));
			state.filterData['sort'] = data;
			state.filterParam['sort'] = data.value
		},
		changeMore:function(state,data){
			let cur_filter = JSON.parse(window.sessionStorage.getItem('filter'));
			cur_filter.filterData.more = {
				supports : data.supports,
				activity : data.activity,
				average : data.average
			};
			state.filterParam.supports = [];
			for (let val of data.supports) {
				state.filterParam.supports.push(val.id)
			};
			state.filterParam.activity = data.activity.id;
			state.filterParam.cost_to = data.average.cost_to ;
			state.filterParam.cost_from = data.average.cost_from ;
			cur_filter.filterParam = state.filterParam;
			window.sessionStorage.setItem('filter',JSON.stringify(cur_filter));
			state.filterData['more'] = data;
		},
		changeGeohash:function(state,data){
			window.sessionStorage.setItem('m_geohash',JSON.stringify(data));
			state.m_geohash = data;
		}
	},
	actions:{
		commitSort:function({commit},data){
			if(JSON.parse(window.sessionStorage.getItem('filter')))
				commit('changeSort',data);
			else{
				let filter = { filterParam:{ supports:[] }, filterData:{ sort:{}, more:{} }}
				window.sessionStorage.setItem('filter',JSON.stringify(filter))
				commit('changeSort',data);
			}
		},
		commitMore:function({commit},data){
			if(JSON.parse(window.sessionStorage.getItem('filter')))
				commit('changeMore',data);
			else{
				let filter = { filterParam:{ supports:[] }, filterData:{ sort:{}, more:{} }}
				window.sessionStorage.setItem('filter',JSON.stringify(filter))
				commit('changeMore',data);
			}
		}
	}
}


export default Filter

