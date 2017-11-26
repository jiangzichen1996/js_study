import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie'
import movieList from '@/components/movie/movieList'
import movieDetail from '@/components/movie/movieDetail'
import music from '@/components/music/music'
import musicList from '@/components/music/MusicList'
import musicDetail from '@/components/music/MusicDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'movie',
    component: movie,
    redirect: '/movielist',
    children: [{
        path: 'movielist',
        name: 'movielist',
        component: movieList
      },
      {
        path: 'moviedetail/:aa',
        name: 'moviedetail',
        component: movieDetail
      }
    ]
  },      
  {
    path:'/music',
    name:'music',
    component:music,
    redirect:'/music/musicList',
    children:[{
      path:'musicList',
      component:musicList
    },{
      path:'musicDetail/:albumid',
      component:musicDetail
    }]

  }]
})
