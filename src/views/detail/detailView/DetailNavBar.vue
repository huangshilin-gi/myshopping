<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="navLeft" class="left">
        <img src="~assets/image/top_icon/arrow_left.png" alt="" @click="itemClose">
      </div>
      <div slot="navCenter" class="item_flex">
        <div v-for="(item,index) in titles" 
          :key="index"
          @click="itemClick(index)"
          :class="{active: index===currid}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currid:0
    }
  },
  created(){
    let s = 1;
    this.$emit('ssss',s)
  },
  methods:{
    itemClick(index){
      this.currid = index;
      this.$emit('navBarClick',index)
    },
    itemClose(){
      history.go(-1);
    }
  }
}
</script>
<style scoped>
  .item_flex{
    display: flex;
    justify-content: center;
    font-size: 14px;
    justify-content: space-around;
    padding-left: 10px;
    padding-right: 10px;
  }
  .active{
    color: var(--blue);
  }
  .detail-navbar img{
    width: 30px;
    height: 30px;
    padding-top: 6px;
  }
</style>