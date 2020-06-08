<template>
  <div class="classifygird_list">
    <ClssifyGirdListItem 
      class="classify_item_flex"
      v-for="(item,index) in classifyGirdList"
      :key="index"
      :classifyItem="item"
    />
  </div>
</template>

<script>
import ClssifyGirdListItem from './ClassifyGirdList_item'
export default {
  name:'ClassifyGirdList',
  components:{ClssifyGirdListItem},
  props:{
    classifyGirdList:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .classifygird_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
  .classify_item_flex{
    width: 30%;
    text-align: center;
    padding-bottom: 16px;
    box-sizing: border-box;
  }
</style>