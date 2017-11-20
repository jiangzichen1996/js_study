<template>
    <div id="app">
        <router-link :to="{name:'Test1',params:{num:12} }">测试子路由1</router-link>
        <router-link to="/test/test2">测试子路由2</router-link>
        <img src="../assets/logo.png">
        <h1>{{msg}}</h1>

        <div>
        </div>
        <router-view></router-view>
    </div>


</template>


<script>
export default {
  data: () => {
    return {
      msg: "I'm chenchen"
    };
  }
};
</script>

<style scoped>

</style>
