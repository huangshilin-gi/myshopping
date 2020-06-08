<template>
  <div class="classify_item">
    <img v-lazy="classifyItem.image" alt="">
    <div class="titles">{{classifyItem.name}}</div>
  </div>
</template>

<script>
export default {
  name:'ClssifyGirdListItem',
  props:{
    classifyItem:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
  .classify_item{
    overflow: hidden;
  }
  .classify_item img{
    width: 54px;
  }
  .titles{
    font-size: 12px;
  }
</style>