<template>
  <div class="effect_div">
    <div class="effect_top">
      <img src="~assets/image/top_icon/dicon.png" alt="" class="image">
      <div class="effect_center">{{effectObj.title}}</div>
      <img src="~assets/image/top_icon/dicon_0.png" alt="" class="images">
      <div class="effect_titles">{{effectObj.titles}}</div>
    </div>
    <div 
      class="container"
      v-for="(image,index) in effectObj.detailEffectImage"
      :key="index" >
      <img  :src="image" @load="iseffectImage" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'EffectPicture',
  props:{
    effectObj:{
      type:Object,
      default(){
        return{
        }
      }
    }
  },
  methods:{
    iseffectImage(){
      this.$emit('iseffectImage')
    }
  }
}
</script>
<style scoped>
  .effect_div{
    border-bottom: 4px solid var(--solid);
    padding-bottom: 20px;
  }
  .effect_top{
    padding: 10px;
    padding-top: 16px;
  }
  .effect_top .images{
    float: right;
  }
  .effect_top .effect_center{
    padding: 6px 0px 6px 10px;
    font-size: 15px;
  }
  .effect_top .effect_titles{
    font-size: 14px;
    padding-top: 10px;
    padding-left: 14px;
  }
  .container{
    height: 280px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .container img{
    width: 100%;
  }
</style>