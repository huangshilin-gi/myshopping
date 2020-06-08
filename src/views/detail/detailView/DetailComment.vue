<template>
  <div class="comment_div" v-if="Object.keys(commentObj).length !==0">
    <div class="info_head">
      <span>用户评价</span>
      <span>更多>></span>
    </div>
    <div class="comment">
      <div class="head_image">
        <img :src="commentObj.head" alt="">
        <span>{{commentObj.name}}</span>
      </div>
      <div class="comment_xinx">
        <div>{{commentObj.comment}}</div>
        <div class="titlex">
          <span>{{commentObj.times}}</span>
          <span>{{commentObj.commodity}}</span>
        </div>
        <div class="div_img">
          <div v-for="(item,index) in commentObj.photograph" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailComment',
  props:{
    commentObj:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>
<style scoped>
  .comment_div{
    padding: 0px 16px 16px 16px;
    border-bottom: 4px solid var(--solid);
  }
  .info_head{
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 15px;
    font-size: 14px;
    border-bottom: 1px solid var(--solid);
  }
  .head_image{
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-top: 8px;
  }
  .head_image img{
    width: 50px;
    height: 50px;
    padding-right: 6px;
  }
  .comment_xinx{
    padding: 8px;
    font-size: 12px;
  }
  .comment_xinx .titlex{
    color: #acabab;
    padding-top: 6px;
  }
  .comment_xinx .div_img{
    height: 68px;
    overflow: hidden;
    display: flex;
    padding-top: 10px;
  }
  .div_img div{
    width: 74px;
    padding-right: 6px;
    height: 100%;
  }
  .div_img img{
    width: 100%;
  }
</style>
