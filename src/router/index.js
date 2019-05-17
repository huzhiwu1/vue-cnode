import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
import SliderBar from '@/components/SliderBar'
// import MySliderBar from '@/components/MySliderBar'
import MyShow from '@/components/MyShow'
import OtherPage from '@/components/OtherPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList,
        slider: MyShow
      }
    },
    {
      path: '/article/:id/:loginname',
      name: 'article',
      components: {
        main: Article,
        slider: SliderBar
      }
    },
    {
      path: '/userInfo/:loginname',
      name: 'userInfo',
      components: {
        main: UserInfo

      }
    },
    {
      path: '/other/:api',
      name: 'other',
      components: {
        main: OtherPage
      }
    }

  ]
})
