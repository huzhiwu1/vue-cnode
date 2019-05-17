<template>

<div class="show">
  <div class="mymeta">
    <img src="@/assets/myImg.jpg" alt="">
    <span>胡志武</span>
  </div>
  <div class="Isay">
    天道酬勤
  </div>
  <div class="myblog">

    <a href="https://juejin.im/user/5c5055a8f265da613572f360">我的掘金博客</a>


  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.show{
  width:350px;
}
img{
  width:50px;
  vertical-align: middle;
}

.mymeta{
  padding:10px;
  background-color:#fff;

}
.Isay{
  background-color:#fff;
  /* margin-top:10px; */
  padding:10px;
}
.myblog{
  background-color:#fff;
  word-break:break-all;
  padding:10px;
  /* margin-top:10px; */
}
</style>
