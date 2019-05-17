// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/styles/reset.css";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
// /*写一个过滤器来过滤时间 */
Vue.filter("dateFormat", function(str) {
  if (!str) return;
  let dateTime = new Date(str).getTime();
  let nowTime = new Date().getTime();
  // console.log(dateTime-nowTime)
  let lastTime = nowTime - dateTime;
  // 毫秒
  if (lastTime / 1000 < 30) {
    // 30秒是刚刚
    return "刚刚";
  } else if (lastTime / 1000 < 60) {
    return parseInt(lastTime / 1000) + 1 + "秒前";
  } else if (lastTime / 60000 < 60) {
    // 在一小时内
    return parseInt(lastTime / 60000) + 1 + "分钟前";
  } else if (lastTime / 3600000 < 24) {
    // 一天内
    return parseInt(lastTime / 3600000) + 1 + "小时前";
  } else if (lastTime / 86400000 < 31) {
    // 一个月内
    return parseInt(lastTime / 86400000) + 1 + "天前";
  } else if (lastTime / 2592000000 < 12) {
    // 一年内
    return parseInt(lastTime / 2592000000) + 1 + "月前";
  } else if (lastTime / 31104000000 < 10) {
    // 十年内
    return parseInt(lastTime / 31104000000) + 1 + "年前";
  }
});
Vue.filter("tagFormat", function(obj) {
  if (obj.top == true) {
    return "置顶";
  } else if (obj.good == true) {
    return "精华";
  } else if (obj.tab == "ask") {
    return "问答";
  } else if (obj.tab == "share") {
    return "分享";
  } else if (obj.tab == "job") {
    return "招聘";
  }
});
