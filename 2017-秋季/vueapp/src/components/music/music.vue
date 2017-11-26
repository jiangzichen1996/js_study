<template>
    <div>
        <movie-header aa="#f00">
            <h2 class='title' slot="title">music{{$route.params.aa}}</h2>
        </movie-header>
        <router-view></router-view>
        <movie-footer aa="#f00"></movie-footer>
    </div>
</template>
<script>
import movieFooter from '@/components/common/footer'
import movieHeader from '@/components/common/header'
import Axios from "axios"; 

export default {
    data(){return {
    }},
  components:{
      movieFooter,
      movieHeader
  },
  mounted(){
  }

}
</script>
<style scoped>

</style>

