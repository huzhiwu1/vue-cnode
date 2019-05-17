<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name='main'></router-view>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'
export default {
  name: 'App',
  components:{
    Header,
    PostList,
    Article,
    UserInfo
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
</style>
