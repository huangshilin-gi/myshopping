<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view/></keep-alive>
		<main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  components:{
		MainTabbar
	}
	
}
</script>

<style>
@import url("./assets/css/body_box.css");
</style>
