<template>
  <div class="header">
    <img class="logo" src="@/assets/cnodejs_light.svg" alt="">
    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="#">新手入门</router-link>
      </li>
      <li>
        <router-link to="#">API</router-link>
      </li>
      <li>
        <router-link to="#">关于</router-link>
      </li>
      <li>
        <router-link to="#">注册</router-link>
      </li>
      <li>
        <router-link to="#">登录</router-link>
      </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.header{
  background-color:#444;
  padding:10px 0;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.logo{
  max-width:120px;
  margin-left:50px;
}
.nav{
  list-style:none;
  font-size:14px;
  line-height:14px;
  margin:0;
  margin-right:50px;
  padding:0;
}
.nav li{
  margin:0 10px;
  float:left;
}
li a{
  text-decoration:none;
  color:#ccc;
}
li a:hover{
  color:#fff;
}
@media (max-width:980px){
  .header{
    flex-direction: column;
  }
  .logo,.nav{
    margin:0;
  }
  .logo{
    margin-bottom:10px;
  }

}
</style>
