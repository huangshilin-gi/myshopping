<template>
  <div class="essential_box">
    <div class="essential_div">
      <div class="essential_title">
        {{essential.theme}}
      </div>
      <div class="title_size">
        <span>¥{{essential.price}}</span>
        <span>¥{{essential.yprice}}</span>
        <span class="tag">{{essential.labels}}</span>
      </div>
      <div class="center_flex">
        <div>销量 {{essential.sales  | setFilter}}</div>
        <div>收藏 {{essential.collect  | setFilter}}</div>
        <div>{{essential.deliver}}</div>
      </div>
      <div class="promise_div">
        <div v-for="(items,index) in essential.promise" :key="index">
          <img :src="items.Icon" alt="">
          <span>{{items.title}}</span>
        </div>
      </div>
    </div>
    <div class="store_div">
      <div class="store-top">
        <img :src="essential.storein.logo" alt="">
        <span>{{essential.storein.logoName}}</span>
      </div>
      <div class="store-info">
        <div class="info-left">
          <div class="left-div">
            <div>{{essential.storein.zsales | setFilter}}</div>
            <div>总销量</div>
          </div>
          <div class="left-div uin">
            <div>{{essential.storein.bbsales  | setFilter}}</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="info-right">
          <div v-for="(item,index) in essential.storein.infoList" :key="index">
            {{item.name}}
            <span>{{item.grade}}</span>
            <span class="info_size">{{item.gradeSize}}</span>
          </div>
        </div>
      </div>
      <div class="store_title"><span>进店逛逛</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailEssential',
  props:{
    essential:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      gradeSize:''
    }
  },
  filters:{
    setFilter(value){
      let set = value;
      if(value > 10000){
        set = (set / 10000).toFixed(1) + '万'
      }
      return set
    }
  }
}
</script>

<style scoped>
  .essential_box{
    width: 100%;
  }
  .essential_div{
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
  .essential_title{
    padding-top: 12px;
    padding-bottom: 14px;
    font-size: 16px;
  }
  .title_size span:nth-child(1){
    color: var(--color);
    font-weight: 540;
    font-size: 24px;
  }
  .title_size span:nth-child(2){
    font-size: 14px;
    color: #b4b2b2;
    padding-left: 8px;
    text-decoration:line-through;
  }
  .tag{
    padding: 1px 6px 2px 6px;
    font-size: 12px;
    color: white;
    background: var(--color);
    border-radius: 10px;
    position: absolute;
    margin-left: 4px;
  }
  .center_flex{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--solid);
    color: #b4b2b2;
  }
  .promise_div{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .promise_div img{
    width: 16px;
    height: 16px;
    padding-right: 4px;
  }
  .promise_div div{
    display: flex;
    align-items: center;
  }
  .store_div{
    border-top: 4px solid var(--solid);
    border-bottom: 4px solid var(--solid);
  }
  .store_div .store-top{
    padding-left: 8px;
    padding-top: 20px;
    display: flex;
    align-items: center;
  }
  .store-top img{
    width: 40px;
  }
  .store-top span{
    padding-left: 10px;
  }
  .store-info{
    display: flex;
    margin-left: 20px;
    margin-right: 40px;
    padding-top: 10px;
  }
  .store-info div{
    flex: 1;
  }
  .info-left{
    display: flex;
    align-items: center;
  }
  .info-left .left-div{
    flex: 1;
    font-size: 12px;
    text-align: center;
  }
  .left-div div:nth-child(1){
    font-size: 16px;
  }
  .info-right{
    font-size: 12px;
  }
  .info-right div{
    padding-top: 6px;
    padding-left: 30px;
  }
  .info-right div span{
    margin-left: 8px;
    color: var(--color);
  }
  .uin{
    border-right: 1px solid #eeeded;
    padding-right: 16px;
  }
  .info-right .info_size{
    background: var(--color);
    color: white;
    padding-left: 1px;
    padding-right: 1px;
    float: right;
  }
  .store_title{
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
    letter-spacing: 1px;
    padding-bottom: 30px;
  }
  .store_title span{
     padding: 4px 30px 4px 30px;
     background: #e7e6e6;
  }
</style>