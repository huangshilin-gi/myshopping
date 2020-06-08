<template>
  <div class="goods">
    <goods-list-item 
      v-for="(item,index) in goodsList" 
      :key="index"
      :goodsItem="item"
      class="div_item"/>
    <div v-if="gobot">
      <van-loading type="spinner" color="#1989fa"/>
    </div>
    <div class="span_bottom" v-else>
      <span>没有更多了</span>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsList_item'
export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return[]
      }
    },
    gobot:{
      type:Boolean,
      default:true
    }
  }
}
</script>
<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
  .span_bottom{
    padding-bottom: 40px;
  }
</style>