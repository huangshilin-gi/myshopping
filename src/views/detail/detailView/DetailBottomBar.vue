<template>
  <div class="button_bar">
    <div class="bar_left">
      <div class="bar_div">
        <div class="image div_i"></div>
        <div class="title">客服</div>
      </div>
      <div class="bar_div">
        <div class="image div_ii"></div>
        <div class="title">店铺</div>
      </div>
      <div class="bar_div">
        <div class="image div_iii"></div>
        <div class="title">收藏</div>
      </div>
    </div>
    <div class="bar_right">
      <div class="right_god" @click="barClick">加入购物车</div>
      <div class="right_got">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  data(){
    return{

    }
  },
  methods:{
    barClick(){
      this.$emit('addShoppingtrolley')
    }
  }
}
</script>

<style scoped>
  .button_bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background: white;
    display: flex;
    border-top: 1px solid var(--solid);
  }
  .bar_left{
    flex: 1;
    display: flex;
  }
  .bar_left .bar_div{
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 18px;
  }
  .bar_div .image{
    background: url('~assets/image/detailbutton/detail_bottom.png') no-repeat;
    width: 24px;
    height: 24px;
    background-size: cover;
  }
  .bar_div .div_i{
     background-position: 0px -56px;
  }
  .bar_div .div_ii{
    background-position: 0px -107px;
  }
  .bar_div .title{
    font-size: 12px;
  }
  .bar_right{
    flex: 1;
    display: flex;
  }
  .right_god , .right_got{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right_god, .right_got{
    color:white
  }
  .right_god{
    background: linear-gradient(to right, #ffd01e, #ff8917);
  }
  .right_got{
    background: linear-gradient(to right, #ff6034, #ee0a24);
  }
</style>