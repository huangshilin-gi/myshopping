<template>
	<div>
    <van-tree-select 
      height="100vh" 
      :items="treeSelectList" 
      :main-active-index.sync="active"
      @click-nav="clickNav">
      <template #content>
        <classify-gird-list :classifyGirdList="ClassifyGirdList"/>
        <div v-if="active===0">
          <tab-controls 
            :titles="['最新','旧款','精选']" 
            class="tab_fiexd"
            ref="tabIdtop"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import {getTreeSelect} from 'network/classify'
import ClassifyGirdList from 'components/content/classifyGird/ClassifyGirdList'
import TabControls from 'components/content/tabControl/TabControls'
export default{
  name:'Classify',
  components:{
    ClassifyGirdList,
    TabControls
  },
  data(){
    return{
      treeSelectList:[],
      active: 0,
      titles:'',
      ClassifyGirdList:[]
    }
  },
  created(){
    this.getTreeSelect();
  },
  mounted(){
    //挂载后第一次显示的默认值
    setTimeout(()=>{
      this.ClassifyGirdList = this.treeSelectList[this.active].rightContent
    },100)
  },
  methods:{
    //请求事件
    getTreeSelect(){
      getTreeSelect().then(res =>{
        this.treeSelectList = res.data.items
      })
    },

    //分类数据切换
    clickNav(index){
      this.ClassifyGirdList = this.treeSelectList[index].rightContent
    }
  }
}
</script>

<style>
  .van-sidebar-item--select::before{
    background-color: var(--blue);
  }
  .van-sidebar-item--select{
    color: var(--blue);
  }
</style>
