/*************设置localstorage*****************/	
const ls = {
	cur_data:JSON.parse(localStorage.getItem('user')) || {},
	cur_time:new Date().getTime() || '',
	setlocation:function(value){
		let timestamp = this.cur_time + 60*60*1000*12;				//设置12小时过期
		let commit_data = {geohash:value.geohash,latitude:value.latitude,longitude:value.longitude,timestamp:timestamp,locationName:value.name};
		this.cur_data['location'] = commit_data;
		this.cur_data.cityId = value.city_id
		this.cur_data.districtId = value.district_id;
		localStorage.setItem('user',JSON.stringify(this.cur_data));			//localstorage，session存储是以字符串形式
	},
	getlocation:function(){
		if(this.cur_data['location'] && this.cur_data['location'].timestamp > this.cur_time)
			return {latitude:this.cur_data['location'].latitude,longitude:this.cur_data['location'].longitude};
		else{
			this.removelocation()
			return false;
		}		
	},
	removelocation:function(){
		delete(this.cur_data['location']);
		delete(this.cur_data.cityId);
		delete(this.cur_data.districtId);
		localStorage.setItem('user',JSON.stringify(this.cur_data));
	}
}

export default ls