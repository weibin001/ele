<template>
	<section class="foodentryWrap" v-once>
		<div class="shellAnimation">
			<div class="shellcontainer">
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
			</div>
			<div class="shellcontainer">
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
				<div class="shellbox"></div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name:'foodentryWrap',
	}
</script>

<style lang="scss" scoped>
	.foodentryWrap{
		overflow: hidden;
	    height: 47.2vw;
	    background-color: #fff;
		border-bottom: 1px solid #eee;
		.shellAnimation{
	    	animation: shellPulse 1s infinite;
	    }
	    .shellcontainer{
	    	display: flex;
	    	flex-direction: row;
	    	align-items: center;
	    	justify-content: space-around;
	    	padding-top: 2.933333vw;
	    	.shellbox{
	    		display: flex;
	    		width: 10.666667vw;
	    		align-items: center;
	    		flex-direction: column;
	    		&:after,&:before{
	    			content: "";
				    display: inline-block;
				    background: #f4f4f4;
	    		}
	    		&:before{
	    			width: 10.666667vw;
	    			height: 10.666667vw;
	    			border-radius: 50%;
	    			margin-top: .8vw;
	    			margin-bottom: .533333vw;
	    		}
	    		&:after{
				    width: 8vw;
				    height: 3.733333vw;
				    margin-top: 1.333333vw;
	    		}
	    	}
	    }
	}
	@keyframes shellPulse{
		from{
			opacity: 0.6;
		}
		to{
			opacity: 0.8;
		}
	}
</style>