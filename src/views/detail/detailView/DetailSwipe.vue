<template>
  <van-swipe :autoplay="3000" class="vanws">
    <van-swipe-item v-for="(image, index) in topImageList" :key="index">
      <img v-lazy="image" class="images"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name:'DetailSwipe',
  props:{
    topImageList:{
      type:Array,
      default(){
        return[]
      }
    }
  }
  
}
</script>
<style scoped>
  .vanws{
    width: 100%;
    overflow: hidden;
    height: 40vh;
  }
  .vanws .images{
    width: 100%;
  }
</style>