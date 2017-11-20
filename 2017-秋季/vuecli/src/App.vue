<template>
  <div id="app">
    <h1>Vue Test</h1>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">测试</router-link>
      <router-link to="/testUrl/goudan/123">测试Url</router-link>
      <router-link to="/home">测试重定向</router-link>
      <router-link to="/count">计数器</router-link>      
      <router-link to="/home2/goudan/123">测试Url</router-link>
      <div>
        <button @click='goforward'>前进</button>
        <button @click='goback'>后退</button>
        <button @click='goHome'>定向</button>
      </div>
      
      
      
      
      
      
    </div>
    <transition  name="fade" mode="out-in">
      <router-view/>
    
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goforward(){
     this.$router.go(1);
    },goback(){
     this.$router.go(-1);
    },goHome(){
     this.$router.push('/test');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:all .5s ease .5s;
}
.fade-leave-active{
  transition:all .5s ease;
}
</style>
