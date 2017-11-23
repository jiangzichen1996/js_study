import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie'
import movieList from '@/components/movie/movieList'
import movieDetail from '@/components/movie/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: movie,
      redirect: '/movie/movieList',      
      children:[{
        path:'/movielist',
        name: 'movielist',
        component:movieList
      },{
        path:'/moviedetail',
        name: 'moviedetail',
        component:movieDetail
      }]
    }
  ]
})
