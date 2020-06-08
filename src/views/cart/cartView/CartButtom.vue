<template>
  <div>
    <van-submit-bar :price="comPrice" button-text="提交订单"/>
  </div>
</template>

<script>
export default {
  name:'CartButtom',
  data(){
    return{
      checked: true
    }
  },
  computed:{
    //过滤，汇总
    comPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.goodsId
      }).reduce((prevalue,item) => {
        return prevalue + (item.price * item.count) *100
      },0)
    }
  }
}
</script>
<style scoped>
  .van-submit-bar{
    bottom:50px;
    background-color: rgb(241, 250, 253);
  }
</style>