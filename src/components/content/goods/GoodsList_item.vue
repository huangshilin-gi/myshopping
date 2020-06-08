<template>
  <div class="goods_item" @click="itemClick">
    <img alt="" @load="isgoodsItem" v-lazy="goodsItem.image">
    <div class="titles">
      <span>{{goodsItem.item_title}}</span>
      <span>¥{{goodsItem.item_money}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    isgoodsItem(){
      this.$bus.$emit('goodsItemsLoad');
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.goodsId)
    }
  }
}
</script>
<style scoped>
  .goods_item{
    width: 48%;
    height: 300px;
    position: relative;
    padding-top: 3px;
  }
  .goods_item img{
    width: 100%;
    border-radius: 5px;
  }
  .titles{
    width: 100%;
    position: absolute;
    bottom: 6px;
    text-align: center;
  }
  .titles span{
    display: block;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .titles span:nth-child(2){
    color: var(--titleColor);
  }
</style>