<template>
  <div>
    <Scroll class="content" :probe-type="3">
      <van-swipe-cell v-for="(item,index) in cartList" :key="index">
        <van-card
          :num="item.count"
          :price="item.price"
          :desc="item.dec"
          :title="item.title"
          class="goods-card"
          :thumb="item.image"
        />
        <template #right>
          <van-button square text="删除" 
            type="danger" class="delete-button" 
            @click="buttonClick(index)"
          />
        </template>
      </van-swipe-cell>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
export default {
  name:'CartList',
  components:{
    Scroll
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
    //删除商品
    buttonClick(index){
      this.$store.state.cartList.splice(index,1)
    }
  }
}
</script>

<style scoped>
  .content{
    height: calc(100% - 44px);
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }
  .delete-button {
    height: 100%;
  }
</style>