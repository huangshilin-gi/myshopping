<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in swipeList" :key="index">
      <img v-lazy="image" class="images" @load="isSwipeImage"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name:'HomeSwipe',
  props:{
    swipeList:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      isload:false
    }
  },
  methods:{
    isSwipeImage(){
      if(!this.isload){
        this.$emit('getswipeImage');
        this.isload = true;
      } 
    }
  }
}
</script>
<style scoped>
  .images{
    width: 100%;
    height: 180px;
  }
</style>