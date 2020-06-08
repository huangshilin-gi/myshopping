import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'
export const isdebMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      itemImgdetail:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgdetail = ()=>{
      this.newRefresh()
    }
    this.$bus.$on('goodsItemsLoad',this.itemImgdetail)
  }
}

export const isScrollTo = {
  data(){
    return{
      backShow:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    }
  }
}