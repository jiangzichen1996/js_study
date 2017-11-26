<template>
<div>

        <div class="movie-detail">
             <div class="movie-img">
                     <img :src="res.img" alt="">
             </div>
             <div class="movie-info">
                     <p>
                             {{res.nm}}
                     </p>
                     <p>
                            导演： {{res.dir}}
                     </p>
                     <p>
                             评分：{{res.sc}}
                     </p>
                     <p>
                             {{res.rt}}
                     </p>
             </div>
        </div>
              <div v-html="res.dra"></div>
        <h5>
                主演:<br/>
                {{res.star}}
        </h5>
</div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    Axios.get(
      API_PROXY + "http://m.maoyan.com/movie/" + this.$route.params.aa + ".json"
    )
      .then(data => {
        this.res = data.data.data.MovieDetailModel;
        console.log(this.res);
      })
      .catch();
  }
};
</script>
<style scoped>
.movie-detail {
  display: flex;
}
.movie-img {
  width: 0;
  flex-grow: 2;
}
.movie-img img {
  width: 100%;
}
.movie-info {
  flex-grow: 3;
  width: 0;
}
</style>
