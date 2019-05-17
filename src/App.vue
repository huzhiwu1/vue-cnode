<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name='slider' class="slider-view"></router-view>
      <router-view name='main' class="main-view"></router-view>

    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'
import SliderBar from '@/components/SliderBar'
import Footer from '@/components/Footer'
import MyShow from '@/components/MyShow'
// import MySliderBar from '@/components/MySliderBar'
export default {
  name: 'App',
  components: {
    Header,
    PostList,
    Article,
    UserInfo,
    SliderBar,
    Footer,
    // MySliderBar
    MyShow
  }
}
</script>

<style scoped>
  .main{
    width:80%;
    margin:0 auto;

  }
  #app{
    background-color:#e1e1e1;
  }
  .main-view{
    margin-right:360px;
  }
  .slider-view{
    float:right;
  }
  @media (max-width:980px){
    .slider-view{
      display:none;
    }
    .main-view{
    margin-right:0px;
  }
  .main{
    width:100%;
    margin:0;
  }
  }
</style>
