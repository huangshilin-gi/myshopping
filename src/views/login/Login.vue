<template>
  <div class="login">
    <nav-bar class="home_nav">
       <div slot="navLeft" class="left">
        <img src="~assets/image/top_icon/arrow_left.png" alt="" @click="navBarClose">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Login',
  components:{
    NavBar
  },
  methods:{
    navBarClose(){
      history.go(-1)
    }
  }
}
</script>

<style scoped>
  .login{
    height: 100vh;
    background: #fafafa;
  }
  .home_nav{
    background: white;
  }
  .home_nav img{
    width: 30px;
    height: 30px;
    padding-top: 6px;
  }
</style>