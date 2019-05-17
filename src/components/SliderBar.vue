<template>
  <div class="userPage">
    <div class="mainPage">
      <div class="header">
        <router-link to="/">主页</router-link>/
      </div>
      <div class="main-meta">
          <div class="author">
            <img :src="userInfo.avatar_url" alt="" class="avatar">
            <span class="username">{{userInfo.loginname}}</span>
          </div>
          <div class="register">
            积分：{{userInfo.score}}
          </div>
          <div class="register">
            注册时间：{{userInfo.create_at | dateFormat}}
          </div>

      </div>
      <div class="sayBox">
        最近创建的话题
      </div>
      <ul class="whatSay">
        <li v-for="item of userInfo.recent_topics" :key="item.id">
          <router-link class="zuozhe" :to="{name:'userInfo',params:{loginname:userInfo.loginname}}">
            <img :src="userInfo.avatar_url" alt="" class="avatar2">
          </router-link>
          <router-link class="article-item" :to="{name:'article',params:{id:item.id}}">
            <span>{{item.title}}</span>
          </router-link>
          <span class="time">
            {{item.last_reply_at | dateFormat}}
          </span>
        </li>
      </ul>
      <div class="sayBox">
        最近参与的话题
      </div>
      <ul class="whatSay">
        <li v-for="item of userInfo.recent_replies" :key="item.id">
          <router-link class="zuozhe" :to="{name:'userInfo',params:{loginname:userInfo.loginname}}">
            <img :src="userInfo.avatar_url" alt="" class="avatar2">
          </router-link>
          <router-link class="article-item" :to="{name:'article',params:{id:item.id}}">
            <span>{{item.title}}</span>
          </router-link>
          <span class="time">
            {{item.last_reply_at | dateFormat}}
          </span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    let that = this;
    return {
      url:`https://cnodejs.org/api/v1/user/${that.$route.params.loginname}`,
      userInfo:{},
    }
  },
  methods:{
    getData(){
      this.$http.get(this.url)
                .then(res=>{console.log(res),this.userInfo=res.data.data})
    }
  },
  beforeMount(){
    console.log("有操作")
    this.getData();
  }
}
</script>

<style scoped>
.userPage{
  margin-left:10px;
  max-width:350px;
}
.whatSay{
  margin:0;
}
.whatSay>li{
  display:flex;
  padding:10px;
  background-color:#fff;
  border-bottom:1px solid #f6f6f6;
  position:relative;
}
.header{
  border-radius:3px;
  background-color:#f6f6f6;
  color:#ccc;
  padding:10px;
}
.header>a{
  color:#80bd01;
}
.avatar{
  width:50px;
  border-radius:5px;
  vertical-align:middle;
}
.main-meta{
  background-color:#fff;
  padding:10px;
}
.register{
  margin:10px 0;
  color:#ccc;
  font-size:14px;
}
.sayBox{
  background-color:#f6f6f6;
  padding:10px;
}
.avatar2{
  width:30px;
  height:30px;
  border-radius:3px;
  vertical-align:middle;
}
.article-item{
  color:#414141;
  display:block;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  margin-left:5px;
  margin-right:50px;
}
span.time{
  position:absolute;
  right:10px;
}
</style>
