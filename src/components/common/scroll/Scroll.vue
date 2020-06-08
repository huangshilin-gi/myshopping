<template>
  <div class="wrapper" ref="bscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.bscroll,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    if(this.probeType===2 || this.probeType===3){
      this.scroll.on('scroll',(position) =>{
      this.$emit('scrollClick',position)  //向父组件传数据
     })
    }
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullUpClick');
    })
  },
  methods:{
     scrollTo(x,y,time=300){
       this.scroll && this.scroll.scrollTo(x,y,time)
     },
     finishPullUp(){
       this.scroll.finishPullUp();
     },
     refresh(){
       this.scroll && this.scroll.refresh();
     },
     getScrolly(){
      return this.scroll ? this.scroll.y : 0
     }
  }
}
</script>
<style scoped>

</style>