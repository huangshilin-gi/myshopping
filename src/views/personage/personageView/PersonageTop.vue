<template>
  <div class="personage_top">
    <div class="personage_top_head">
      <img src="~assets/image/login/location.png" alt=""/>
      <img src="~assets/image/login/set.png" alt="">
    </div>
    <div class="personage_top_personage">
      <div class="profile_picture"></div>
      <div class="myname" @click="loginClick">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PersonageTop',
  methods:{
    loginClick(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .personage_top{
    height: 200px;
    background: cornflowerblue;
  }
  .personage_top_head{
    display: flex;
    justify-content: space-between;
  }
  .personage_top_head img{
    width: 30px;
    height: 30px;
    padding: 2px;
  }
  .personage_top_personage{
    display: flex;
    padding-top: 28px;
    padding-left: 10px;
  }
  .personage_top_personage .profile_picture{
    width: 80px;
    height: 80px;
    background:whitesmoke;
    border-radius: 50%;
    margin-right: 14px;
  }
  .personage_top_personage .myname{
    color: white;
    font-size: 18px;
    letter-spacing: 4px;
    height: 26px;
    padding: 0 4px;
    padding-top: 6px;
    border-bottom: 1px solid white;
    text-align: center;
  }
</style>