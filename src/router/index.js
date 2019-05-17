import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      components: {
        main: Article
      }
    },
    {
      path: '/userInfo/:loginname',
      name: 'userInfo',
      components: {
        main: UserInfo
      }
    }

  ]
})
