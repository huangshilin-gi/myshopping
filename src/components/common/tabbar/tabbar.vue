<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'tabbar',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	#tabbar{
		display: flex;
		justify-content: center;
		position: fixed;
		background: #f6f6f6;
		box-shadow: 0 -2px 1px rgba(100,100,100,.2);
		left: 0;
		right: 0;
		bottom: 0;
    height: 49px;
	}
</style>
