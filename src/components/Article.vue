<template>

<div class="article-main">
  <div class="header">
    <div class="title">
      <label :class="[{'top':content.top==true||content.good==true},{'normal':content.top==false&&content.good==false}]">{{content | tagFormat}}</label>
      <span>{{content.title}}</span>
    </div>
    <div class="article-meta">
      <span> 发布于 {{content.create_at | dateFormat}}</span>
      <span> 作者 {{content.author.loginname}}</span>
      <span> {{content.visit_count}}次浏览</span>
      <span> 来自 {{content | tagFormat}}</span>
    </div>
  </div>
  <div class="content" v-html="content.content"></div>
  <div class="comment">
    <div class="comment_count">{{content.replies.length}}回复</div>
    <ul class="comment_main">
      <li v-for="(item,index) of content.replies" :key="item.id">
        <div class="imgBox">
          <img :src="item.author.avatar_url" alt="" class="avatar">
        </div>
        <div class="reply_content">
          <router-link to="#">
            <span>{{item.author.loginname}}</span>
          </router-link>

          <span>{{index+1}}楼• {{item.create_at | dateFormat}}</span>
          <span v-if="(item.author.loginname)===(content.author.loginname)" class="myAuthor">作者</span>
          <div class="avatar_say" v-html="item.content"></div>

        </div>
        <span class="good pull-right">
            <img class="good_img" src="@/assets/timg.png" alt="">
          {{item.ups.length}}
          </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data(){
    let that = this
    return {
      url:`https://cnodejs.org/api/v1/topic/${that.$route.params.id}`,
      content:{}
    }
  },
  methods:{

    getData(){
      this.$http.get(this.url)
                .then(res=>{this.content=res.data.data,console.log(res)})
                .catch(err=>console.log(err))
    }
  },
  beforeMount(){
    console.log(this.url)
    this.getData();
  }
}
</script>

<style scoped>
@import url('https://cdn.bootcss.com/twitter-bootstrap/2.3.0/css/bootstrap.min.css');

.article-main{
  margin-top:10px;
}
.header{
  border-radius:3px 3px 0 0;
  background-color:#fff;
  padding:15px;
  border-bottom:1px solid #e5e5e5;
}
label {
  display:inline-block;
  padding: 3px;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 5px;
}
label.top {
  background-color: #80bd01;
  color: #fff;
}
label.normal{
  background-color:#e5e5e5;
  color:#999;
}
.title>span{
  font-size:22px;
  font-weight:600;
}
.article-meta{
  font-size:12px;
  color:#838383;
  margin-top:15px;

}
.article-meta>span::before{
  content:"•";

}
.content{
  background-color:#fff;
  padding:15px;
  font-size:16px;
  word-break:break-all
}
.comment{
  background-color:#fff;
  margin-top:15px;
}
.comment_count{
  padding:10px;
  border-bottom:1px solid #e5e5e5
}
.comment_main{
  padding:10px;
  margin:0;
}
.comment_main>li{
  position:relative;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  border-bottom:1px solid #e5e5e5;
  background-color:#fff;
  padding:10px;
  word-break:break-all
}
.comment_main .avatar{
  min-width:30px;
  width:30px;
  height:30px;
  border-radius:5px;
}
.reply_content{
  margin-left:10px;
}
.avatar_say{
  margin:10px 0 15px 10px;
}
.pull-right{
  position:absolute;
  right:10px;
}
.good_img{
  width:30px;

}
.myAuthor{
  padding:3px;
  background-color:#80bd01;
  border-radius:3px;
  color:#fff;
}
.normal{
  background-color:#e5e5e5;
  color:#999;
}
@media (max-width:980px){
  .good_img{
    width:20px;
  }
}
</style>

