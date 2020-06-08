<template>
	<div class="personage">
    <personage-top/>
    <div class="personage_cell">
      <personage-cell/>
    </div>
  </div>
</template>

<script>
import PersonageTop from './personageView/PersonageTop'
import PersonageCell from './personageView/PersonageCell'
export default{
  name:'Personage',
  components:{
    PersonageTop,
    PersonageCell
  }
}
</script>

<style scoped>
 .personage{
   background: #fafafa;
 }
 .personage_cell{
   padding-top: 20px;
 }
</style>
