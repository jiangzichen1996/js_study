<template>
<div class="clearfix">
   <div class='footer' :style='{"background":aa}' >
       <ul class="list">
           <li @click='movie'>电影</li>
           <li @click='music'>音乐</li>
           <li @click='book'>书籍</li>
           <li @click='image'>图片</li>
       </ul>
   </div>
   </div>
</template>
<script>
export default {
    props:['aa'],
    methods:{
        music(){
            this.$router.push('/music/'+'#f00')
        },movie(){
            this.$router.push('/')
        },book(){
            this.$router.push('/')
        },image(){
            this.$router.push('/')
        },
    }
  
}
</script>
<style scoped>
.clearfix{
    height: 1rem;
}
    .footer{
    height: 1rem;
    background-color: rgb(33, 150, 243);
    color:#fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 1rem;
    }
    .list{
        display: flex;
    }
    li{
        flex-grow:1;
        text-align: center;
        
    }
</style>
                               