<template>
    <div>
        <ul class="movie-list">
            <li v-for="item in arr" class='movie' :key=item.id>
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
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
    data(){
        return {arr:[],aa:true}
    },
    mounted(){
        Axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset=0'+this.arr.length+'&limit=10')
        .then(
            
            data=>{
                this.aa=false;
                this.arr=[...this.arr,...data.data.data.movies];
                console.log(this.arr);
                
            }
        ).catch();
                
                window.onscroll=()=>{
                    let winTop=document.body.scrollTop||document.srcElement.scrollTop;
                    let scrollHeight=document.body.scrollHeight||document.srcElement.scrollHeight;
                    if(Math.ceil(winTop+window.screen.availHeight)===scrollHeight){
                       this.aa=true;
                       Axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset=0'+this.arr.length+'&limit=10')
        .then(
            
            data=>{
                this.aa=false;
                this.arr=[...this.arr,...data.data.data.movies];
                
            }
        ).catch();
                     }
                }
    }

}
</script>
<style scoped>
.movie-list{
    margin: 1rem 0;    
}

.movie-list li{
    display: flex;
    padding:.2rem
}
.movie-img{
    width: 0;
    flex-grow:1;
      margin-right: .2rem;

}
.movie-img img{
    width: 100%;
}
.movie-name{
    font-weight: bolder;
}
.movie-info{
    flex-grow:2;
    width: 0;

}
.loading-img{
    display: block;
    margin:0 auto;
}
</style>
