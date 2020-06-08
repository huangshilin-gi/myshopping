<template>
  <div class="detail_div">
    <detail-nav-bar @navBarClick="navBarClick($event)" ref="dev"/>
    <Scroll class="content" ref="scroll" @scrollClick="scrollClick" :probe-type="3" >
      <detail-swipe :topImageList="topImageList"/>
      <detail-essential :essential="essentialList"/>
      <EffectPicture :effectObj="effectObj" @iseffectImage="iseffectImage"/>
      <detail-table ref="parms" :detailTableObj="detailTableObj"/>
      <detail-comment ref="comment" :commentObj ="commentObj"/>
      <goods-list ref="goodst" :goodsList="detailList" :gobot="false"/>
    </Scroll>
    <BackTop @click.native="backClick" v-show="backShow"/>
    <detail-bottom-bar @addShoppingtrolley = "addShoppingtrolley"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import DetailSwipe from './detailView/DetailSwipe'
import DetailNavBar from './detailView/DetailNavBar'
import {getDetailType,getDetailList} from 'network/detail'
import DetailEssential from './detailView/DetailEssential'
import EffectPicture from './detailView/Effect_Picture'
import DetailTable from './detailView/DetailTable'
import DetailComment from './detailView/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import {isdebMixin, isScrollTo} from 'common/mixin'
import {debounce} from 'common/utils'
import DetailBottomBar from './detailView/DetailBottomBar'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwipe,
    DetailEssential,
    Scroll,
    EffectPicture,
    DetailTable,
    DetailComment,
    GoodsList,
    DetailBottomBar
  },
  mixins:[isdebMixin,isScrollTo],
  data(){
    return{
      goodsId:null,
      topImageList:[],
      essentialList:{},
      effectObj:{},
      detailTableObj:{},
      commentObj:{},
      detailList:[],
      navBarList:[],
      did:0,
      detailDec:null
    }
  },
  created(){
    this.goodsId = this.$route.params.goodsId;
    this.getDetailType(this.goodsId);
    this.getDetailList(this.goodsId);
    this.detailDec = debounce(()=>{
      this.navBarList = [];
      this.navBarList.push(0);
      this.navBarList.push(this.$refs.parms.$el.offsetTop-45);
      this.navBarList.push(this.$refs.comment.$el.offsetTop-45);
      this.navBarList.push(this.$refs.goodst.$el.offsetTop-45);
    },100)
  },
  /**
   * 获取到参数，评论，推荐的y坐标
   */
  methods:{
  /**
   * 请求事件
   */
    getDetailType(goodsid){
      getDetailType(goodsid).then(res =>{
        //获取轮播图信息
        this.topImageList = res.data.topImage; 
        //获取商品详细信息
        this.essentialList = res.data.essential[0];
        //获取图片展示
        this.effectObj = res.data.effectPicture;
        //获取商品尺寸表格
        this.detailTableObj = res.data.detailTableObj;
        //获取评论信息
        this.commentObj = res.data.commentObj;
        
      })
    },
    getDetailList(goodsid){
      getDetailList(goodsid).then(res => {
        //其他商品信息
        this.detailList = res.data;
      })
    },
    /**
     * 详情页面加载完
     */
    iseffectImage(){
      this.newRefresh();
      this.detailDec();
    },
    navBarClick(index){
      this.$refs.scroll.scrollTo(0,-this.navBarList[index],200)
    },
    /**
     * 滚动到指定区域改变头部选中的展示
     */
    scrollClick(position){
      //返回顶部按钮显示的坐标
      this.backShow = (-position.y) >1000

      const positionY = -position.y
      let length = this.navBarList.length
      //遍历数组
      for(let i=0; i<length; i++){
        //判断标识是否和i相等，相等就不必一直执行判断， 不相等再执行，这样会减少判断
        //当did和i相等，并且i小于length-1，并且混动的位置大于固定的坐标1，小于固定坐标2时说明已经在相应的内容中
        //这里的或者是用来判断最后一个固定坐标的。
        if(this.did !==i && ((i<length-1 && positionY >= this.navBarList[i] && positionY < this.navBarList[i+1])
        || (i===length-1 && positionY >=this.navBarList[i]))){
          this.did = i
          this.$refs.dev.currid = this.did;  //将id重新赋值给DetailNavBar.vue里的currid，从而改变选中的主题
        }
      }
    },

    //加入购物车
    addShoppingtrolley(){
      const product = {}
      product.image = this.topImageList[0]
      product.title = this.essentialList.theme
      product.dec = this.essentialList.dec
      product.price = this.essentialList.price
      product.goodsId = this.goodsId
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast(res);
      })
    }
  }
}
</script>
<style scoped>
  .detail_div{
    background: white;
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  .content{
    background: white;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>