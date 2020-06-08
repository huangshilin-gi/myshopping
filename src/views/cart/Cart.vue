<template>
	<div class="cart">
    <nav-bar class="nav_background">
      <div slot="navCenter">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list/>
    <cart-buttom/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './cartView/CartList'
import CartButtom from './cartView/CartButtom'
import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartButtom
  },
  data(){
    return{}
  },
  computed:{
    // cartLength(){
    //   return this.$store.state.cartList.length  //这是第一种获取值的方法
    // }
    ...mapGetters(['cartLength']) //这是用getters的方法封装，如果需要多次使用到这个方法的话可以使用map
    // ...mapGetters({ //如果函数不同可以这样转换
    //   length:'cartLength'
    // })
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav_background{
    background: var(--blue);
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
</style>
