<template>
    <div>
        <ul class="movie-list">   
            <li v-for="item in arr" class='movie'  @click='go(item.id)' :key=item.id >
              <div class="movie-img">
                    <img  :src=item.img alt="图片加载失败">                    

              </div>
                <div class="movie-info">
                    <p class="movie-name">{{item.nm}}</p>
                    <p>{{item.ver}}</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>   
                </div >
            </li>
                <img v-show=aa class="loading-img" src="../../assets/img/loading.gif" alt="">
            
        </ul>

    </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return { arr: [], aa: true };
  },
  methods:{
      go(aa){
          this.$router.push('/movieDetail/'+aa)
      }
  },
  mounted() {
    Axios.get(
      API_PROXY +
        "http://m.maoyan.com/movie/list.json?type=hot&offset=0" +
        this.arr.length +
        "&limit=10"
    )
      .then(data => {
        this.aa = false;
        this.arr = [...this.arr, ...data.data.data.movies];
      })
      .catch();

    window.onscroll = () => {
      let winTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      if (Math.round(winTop + document.documentElement.clientHeight) === scrollHeight) {
        this.aa = true;
        Axios.get(
          API_PROXY +
            "http://m.maoyan.com/movie/list.json?type=hot&offset=0" +
            this.arr.length +
            "&limit=10"
        )
          .then(data => {
            this.aa = false;
            this.arr = [...this.arr, ...data.data.data.movies];
          })
          .catch();
      }
    };
  }
};
</script>
<style scoped>


.movie-list li {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  width: 0;
  flex-grow: 1;
  margin-right: 0.2rem;
}
.movie-img img {
  width: 100%;
}
.movie-name {
  font-weight: bolder;
}
.movie-info {
  flex-grow: 2;
  width: 0;
}
.loading-img {
  display: block;
  margin: 0 auto;
}
</style>
