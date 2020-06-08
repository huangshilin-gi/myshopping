<template>
	<div id="home">
    <!--头部-->
    <nav-bar class="home_nav">
      <div slot="navCenter">购物街</div>
    </nav-bar>
    <tab-controls 
      :titles="['流行','新款','精选']" 
      @istabClick="istabClick($event)"
      class="tab_fiexd" v-show="tabFlag"
      ref="tabIdtop"/>
    <Scroll ref="scroll" 
      class="content" 
      :probe-type="3" 
      :pull-up-load="true"
      @scrollClick="conScroll"
      @pullUpClick="pullUpClick">
      <!--轮播-->
      <home-swipe :swipeList="swipeList" @getswipeImage="getswipeImage"/>
      <!--4个宫格-->
      <home-conter :recommod="recommod"/>
      <!--本周流行-->
      <home-view class="swipe_top"/>
      <!--选项卡-->
      <tab-controls 
        :titles="['流行','新款','精选']"
       @istabClick="istabClick($event)"
       ref="tabId"/>
      <goods-list :goodsList="surgoods" :gobot="gobot"/>
    </Scroll> 
    <BackTop @click.native="backClick" v-show="backShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata, getHomeTabControl} from 'network/home'
import HomeSwipe from'./homeView/HomeSwipe'
import HomeConter from './homeView/HomeConter'
import HomeView from './homeView/HomeView'
import TabControls from 'components/content/tabControl/TabControls'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import {isdebMixin, isScrollTo} from 'common/mixin'
export default{
  name:'Home',
  components:{
    NavBar,
    HomeSwipe,
    HomeConter,
    HomeView,
    TabControls,
    GoodsList,
    Scroll
  },
  mixins:[isdebMixin,isScrollTo],
  data(){
    return{
      swipeList: [],
      recommod:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      TabList:[],
      tabOffsetTop:0,
      tabFlag:false,
      currentType:'pop',
      times:'',
      gobot:true,
      saveY:0,
      itemImgList:null
    }
  },
  created(){
    // 请求动态数据
    this.getHomeMultidata();
    //请求tab数据
    this.getHomeTabControl('pop');
    this.getHomeTabControl('news');
    this.getHomeTabControl('sell');
  },
  computed:{
    surgoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted(){
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
     this.saveY = this.$refs.scroll.getScrolly()
     this.$bus.$off('goodsItemsLoad',this.itemImgList)
  },
  methods:{
    /**
     * 事件请求
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.swipeList = res.data.resp.swipe_banner;
        this.recommod = res.data.resp.home_conter_icon;
      })
    },
    getHomeTabControl(type){
       const page = this.goods[type].page + 1;
       getHomeTabControl(type,page).then(res=>{
        if(res.data[0]===0){
          this.gobot = false;
          this.$refs.scroll.finishPullUp();
          return false;
        }
        this.goods[type].list.push(...res.data);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      })
    },

    /**
     * 事件监听
     */
    istabClick(data){
      switch (data) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'news'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabId.istabitemid = data
      this.$refs.tabIdtop.istabitemid = data
    },
    //监听坐标
    conScroll(position){
      //因为y值一直是负值所以先转正值在对比，如果大于为真 true
      this.backShow = (-position.y) >1000
      //判断tab是否吸顶
      this.tabFlag = (-position.y) >this.tabOffsetTop
    },
    //监听轮播图是否加载完成
    getswipeImage(){
      //得到tab到顶部的y坐标
      this.tabOffsetTop = this.$refs.tabId.$el.offsetTop
    },
    pullUpClick(){
      this.gobot =true;
      clearTimeout(this.times);
      this.times = setTimeout(()=>{
        this.getHomeTabControl(this.currentType);
      },300)
    }
  }
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .home_nav{
    background: var(--blue);
  }
  .home_nav div{
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .tab_fiexd{
    position: relative;
    z-index: 9;
    background: white;
  }
</style>
