<template>
  <div class="nav_bar">
    <div class="nav_left"><slot name="navLeft"></slot></div>
    <div class="nav_center"><slot name="navCenter"></slot></div>
    <div class="nav_right"><slot name="navRight"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
  .nav_bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .nav_bar .nav_left , .nav_bar .nav_right{
    width: 60px;
  }
  .nav_bar .nav_center{
    flex: 1;
  }
</style>