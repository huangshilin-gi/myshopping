<template>
  <div>
    <van-cell style="touch-action: none;" icon="shopping-cart-o" title="购物信息" is-link/>
    <van-cell style="touch-action: none;" icon="like-o" title="收藏" is-link/>
    <van-cell style="touch-action: none;" icon="cash-on-deliver" title="钱包" is-link/>
  </div>
</template>

<script>
export default {
  name:'PersonageCell',
  methods:{
    vanCellClick(event){
      console.log(event)
    }
  }
}
</script>

<style scoped>
  .van-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #dee0e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
</style>