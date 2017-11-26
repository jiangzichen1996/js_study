<template>
    <div>
        <movie-header >
             <h2 class='title'  slot="title">movie</h2>
        </movie-header>
        <router-view></router-view>
        <movie-footer></movie-footer>
    </div>
</template>
<script>
import movieFooter from "@/components/common/footer";
import movieHeader from "@/components/common/header";
import Axios from "axios";

export default {
  components: {
    movieFooter,
    movieHeader
  }
};
</script>
<style scoped>

</style>
