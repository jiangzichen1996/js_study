<template>
<div class="clearfix">
   <div class='movie' :style="{'background':aa}">    
       <button @click='home' class="home">首页</button>
       <slot  name='title'>123456</slot>
       
   </div>
</div>

</template>
<script>
export default {
    data(){
        return  {ccc:"#ccc"}
    },
      props:['aa'] ,

    methods:{
        home(){
            this.$router.push('/')
        }
    }
};
</script>
<style scoped>
.clearfix{
    height: 1rem;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.movie {
  height: 1rem;
  background-color: rgb(33, 150, 243);
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 1rem;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
                               