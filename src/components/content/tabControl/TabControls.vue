<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" 
      :key="index" class="tab_item"
      :class="{active: index===istabitemid}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControls',
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      istabitemid:0
    }
  },
  methods:{
    itemClick(index){
      this.istabitemid = index;
      this.$emit('istabClick',index);
    }
  }
}
</script>
<style scoped>
  .tab_control{
    display: flex;
    font-size: 15px;
    text-align: center;
  }
  .tab_item{
    flex: 1;
    height: 42px;
    line-height: 40px;
  }
  .active{
    color: var(--blue);
  }
  .active span{
    border-bottom: 3px solid var(--blue);
  }
  .tab_item span{
    padding: 8px;
    padding-bottom: 5px;
    letter-spacing: 1px;
  }
</style>