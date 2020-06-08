<template>
  <div class="table_div">
    <table class="table_t"
      v-for="(table,index) in detailTableObj.detailTable"
      :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="table_t table_manu">
      <tr 
        v-for="(manu,index) in detailTableObj.manufacturer"
        :key="index">
        <td v-for="(manutd,index) in manu" :key="index">{{manutd}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'DetailTable',
  props:{
    detailTableObj:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>
<style scoped>
  .table_div{
    padding: 20px 16px 20px 16px;
    border-bottom: 4px solid var(--solid);
  }
  .table_t{
    width: 100%;
    border-collapse:collapse;
    border-bottom: 2px solid #d4d3d3;
  }
  .table_t tr td{
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .table_t tr{
    border-bottom: 1px solid var(--solid);
  }
  .table_manu{
    border: 0;
    margin-top: 10px;
  }
  .table_manu tr td:nth-child(2){
    padding-left: 60px;
    color: var(--color);
  }
</style>