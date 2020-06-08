<template>
	<div class="tabbar-item" @click="isTabbar">
		<slot v-if="!isActive" name="item_icon"></slot> 
		<slot v-else name="item_icon_active"></slot>
		<div :style="activeStyle"><slot name="item_title"></slot></div>
	</div>
</template>

<script>
	export default{
    name:'tabbarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#1296db'
			}
		},
		data(){
			return{
				
			}
		},
		computed:{
			isActive(){
				//$route表示现在正在动态的路由  indexOf 判断 -1为false, !=-1为true
				//如果 现在在动态的路由 == path 为true 其他路由都为false /home==/home
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeStyle(){
				//如果isActive是动态的话 为 true  并且动态绑定字体颜色 ，如果为false的话 不绑定动态字体颜色
				return this.isActive ? {color:this.activeColor} : {};
			}
    },
		methods:{
			isTabbar(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: #8a8a8a;
	}
	.tabbar-item img{
		width: 28px;
		height: 28px;
		vertical-align: middle;
		margin-top: 1px;
	}
</style>
