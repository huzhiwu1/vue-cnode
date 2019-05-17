<template>
    <div class="postList">
      <ul class="catagory clear-fix">
        <li   v-on:click="getTab($event,'all')" :class="{'catagory-active':tab=='all'}">
          全部
        </li>
        <li v-on:click="getTab($event,'good')" :class="{'catagory-active':tab=='good'}">
          精华
        </li>
        <li v-on:click="getTab($event,'share')" :class="{'catagory-active':tab=='share'}">
          分享
        </li>
        <li v-on:click="getTab($event,'ask')" :class="{'catagory-active':tab=='ask'}">
          问答
        </li>
        <li v-on:click="getTab($event,'job')" :class="{'catagory-active':tab=='job'}">
          招聘
        </li>
        <li >
          客户端测试
        </li>
      </ul>
      <ul class="article-list">
        <li class="article-item" v-for="item of article_list" :key="item.id">
          <router-link  class="lasttime" to="#">
            <img class="last_visits_img" src="https://avatars0.githubusercontent.com/u/31948594?v=4&s=120" alt="">
            <span class="last_active_time">{{item.last_reply_at | dateFormat}}</span>
          </router-link>
          <div class="pull-left">
             <router-link :to="{name:'userInfo',params:{loginname:item.author.loginname}}">
            <img class="avatar" :src="item.author.avatar_url" alt="">
          </router-link>

          <span class="reply_count">
            <span class="count_of_replies">{{item.reply_count}}</span>
            <span class="shu">/</span>
            <span class="count_of_visits">{{item.visit_count}}</span>
          </span>
          <span :class="[{top:item.top==true||item.good==true},{normal:item.top==false&&item.good==false}]">{{item | tagFormat}}</span>
          </div>

          <router-link :to="{name:'article',params:{id:item.id,loginname:item.author.loginname}}">
            <span class="title">{{item.title}}</span>
          </router-link>


        </li>
      </ul>
      <pagination @change="changePage"/>
    </div>

</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  data() {
    return {
      url: " https://cnodejs.org/api/v1/topics",
      article_list: [],
      tab:'all',
      page:1
    };
  },
  methods: {
    getData() {
      let that = this;
      this.$http
        .get(this.url, {
          params: {
            page: that.page,
            limit: 43,
            tab:that.tab
          }
        })
        .then(res => {
          (that.article_list = res.data.data), console.log(res);
        })
        .catch(err => console.log(err));
    },
    getTab(event,tab){
      console.log(event);
        if(this.tab==tab){
          return;
        }else{
          this.tab=tab;
          this.getData();
        }
    },
    changePage(index){
      console.log('nihao ')
      this.page=index;
      this.getData();
    }
  },

  beforeMount() {
    console.log("执行")
    this.getData();
  },
  components:{
    pagination:Pagination
  }
};
</script>

<style scoped>
.postList{
  margin-top:10px;
}
.catagory {
  background-color: #f6f6f6;
  padding: 10px 0;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  overflow: hidden;
}
.clear-fix::after {
  content: "";
  display: block;
  width: 100%;
  clear: both;
}
.catagory > li {
  float: left;
  padding: 5px;
  margin: 0 10px;
}
.catagory a {
  color: #80bd01;
}
.catagory-active {
  background-color: #80bd01;
  border-radius: 3px;
}
.catagory-active > a {
  color: #fff;
}

/* 文章列表 */
.article-list {
  background-color: #fff;
}
.article-list > li {
  border-bottom: 1px solid #eee;
  padding: 10px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  vertical-align: middle;
}
.lasttime {
  float: right;
  font-size:12px;
  color:#999;
}
.last_visits_img {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  vertical-align: middle;
}
.title {
  display: block;
  margin-top: 3px;
  /* 当行文本省略 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
}
.title:hover{
  text-decoration:underline;
}
span {

  padding: 3px;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 5px;
}
span.top {
  background-color: #80bd01;
  color: #fff;
}
span.normal{
  background-color:#e5e5e5;
  color:#999;
}
.reply_count {
  display:inline-block;
  font-size: 12px;

  width:100px;
  text-align:center;
}
.shu{
  font-size:10px;

}
.count_of_replies {
  color: #9e78c0;
  font-size: 16px;
}
.pull-left {
  float: left;
}
@media (max-width:980px){
  .catagory > li{
    margin:0 2px;

  }
  .catagory li:nth-of-type(1){
    margin-left:10px;
  }
  .reply_count{
    display:none;

  }

}
.catagory>li{
  cursor:pointer;
}
</style>
