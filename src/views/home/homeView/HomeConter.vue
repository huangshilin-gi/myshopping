<template>
  <div class="home_conter">
    <div v-for="(item,index) in recommod" 
      :key="index"
      class="home_conter_item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeConter',
  props:{
    recommod:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>
<style scoped>
  .home_conter{
    display: flex;
    text-align: center;
    color: #6f6f6f;
    font-size: 15px;
    padding-bottom: 16px;
    border-bottom: 12px solid #eeeded;
  }
  .home_conter .home_conter_item{
    flex: 1;
  }
  .home_conter_item img{
    width: 80px;
    height: 80px;
  }
</style>