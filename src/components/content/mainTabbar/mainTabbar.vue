<template>
	<tabbar>
		<tabbarItem path="/home">
			<img slot="item_icon" src="~assets/image/tabbar_icon/home.png"/>
			<img slot="item_icon_active" src="~assets/image/tabbar_icon/home-active.png"/>
			<div slot="item_title">首页</div>
		</tabbarItem>
		<tabbarItem path="/classify">
			<img slot="item_icon" src="~assets/image/tabbar_icon/classify.png"/>
			<img slot="item_icon_active" src="~assets/image/tabbar_icon/classify-active.png"/>
			<div slot="item_title">分类</div>
		</tabbarItem>
		<tabbarItem path="/cart">
			<img slot="item_icon" src="~assets/image/tabbar_icon/cart.png"/>
			<img slot="item_icon_active" src="~assets/image/tabbar_icon/cart-active.png"/>
			<div slot="item_title">购物</div>
		</tabbarItem>
		<tabbarItem path="/personage">
			<img slot="item_icon" src="~assets/image/tabbar_icon/login.png"/>
			<img slot="item_icon_active" src="~assets/image/tabbar_icon/login-active.png"/>
			<div slot="item_title">我的</div>
		</tabbarItem>
	</tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar.vue'
import tabbarItem from 'components/common/tabbar/tabbar_item.vue'
export default {
  name:'MainTabbar',
	components:{
		tabbar,
		tabbarItem
	}
		
}
</script>

<style>
</style>
