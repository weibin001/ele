<template>
	<div :class="$style['shop-detail']">
		<div class="$style['shop-info']">
			<nav style="background-image: url(//fuss10.elemecdn.com/4/e3/7bd83fcd9065e3429ea3b564ab9d5png.png?imageMogr/format/webp/thumbnail/750x/);">
				<router-link tag='a' to='-1'></router-link>
			</nav>
		</div>
	</div>
</template>

<script>
	export default{
		name:'detail',
	}
</script>
<style module lang="scss">
	.shop-detail{
		position: relative;
	}
	.shop-info{
		color: #333;
	    font-size: .293333rem;
	    background-color: #fff;
	    padding-top: 26.666667vw;
	    nav{
	    	background-position: 50%;
	    	background-size: cover;
    		background-repeat: no-repeat;
    		height: 26.666667vw;
		    position: absolute;
		    left: 0;
		    right: 0;
		    &:before{
		    	content: "";
			    position: absolute;
			    left: 0;
			    right: 0;
			    top: 0;
			    bottom: 0;
			    background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
		    }
	    }
	}
	.back{
		margin-top: 1.333333vw;
	    margin-left: 1.333333vw;
	    width: 3.2vw;
	    height: 3.2vw;
	    display: inline-block;
	    border-bottom: .533333vw solid #fff;
	    border-left: .533333vw solid #fff;
	    transform: rotate(45deg);
	}
</style>