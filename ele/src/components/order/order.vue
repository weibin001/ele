<template>
	<div class="order">
		<NoDataTip :msg='noDataTip'>
			<button slot='button' >立即登录</button>
		</NoDataTip>
	</div>
</template>

<script>
	import NoDataTip from '../common/noDataTip'
	import { createNamespacedHelpers , mapState } from 'vuex'
	const { mapActions, mapGetters } = createNamespacedHelpers('user');
	export default{
		name:'order',
		components:{
			NoDataTip,
		},
		data(){
			return{
				noDataTip:''
			}
		},
		computed:{
			...mapState({
				user: state => state.user.user.userId,
			})
		},
		watch:{
			user:{
				immediate:true,
				deep:true,
				handler:function(val){
					this.noDataTip = (val==0) && 'login' || '';
				}
			}
		}
	}
</script>

<style scoped>

</style>
<style>
	html{background-color:#f5f5f5}
</style>