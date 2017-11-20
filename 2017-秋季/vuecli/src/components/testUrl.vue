<template>
    <div>
        <h1>测试Url传参{{aa}}</h1>
        用户姓名:{{$route.params.userName}}
        用户账号:{{$route.params.userId}}
                <router-view></router-view>

        
    </div>
</template>
<script>
    export default{
        data: ()=>{
            return {
                aa:123
            }
        },beforeRouteEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
            
        }

    }

</script>

<style scoped>

</style>
