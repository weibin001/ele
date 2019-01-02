<template>
	<article>
		<router-view />
		<tarbar></tarbar>
	</article>
</template>

<script>
	/*不建议使用mint-ui的tarbar  刷新时selected会重置，需要监听session 或者监听路由，在create时赋值*/
	import tarbar from './tarbar';
	export default {
	  name: 'home',
	  components:{
	  	tarbar
	  },
	  data () {
	    return {}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
