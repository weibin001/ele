<template>
	<article>
		<router-view />
		<tarbar></tarbar>
	</article>
</template>

<script>
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
