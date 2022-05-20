<template>
  <div id="detail" class="container-fluid" :style="{'background-image':`url('http://image.tmdb.org/t/p/w500${moviedetail.backdrop_path}')`}">
    <div id="detail2" >
      <h1>{{ moviedetail.title }}</h1>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name : "movie-detail",
  computed : {
    ...mapGetters(['moviedetail'])
  }
}
</script>

<style>
#detail{
  z-index: 30;
  width: 100%;
  height: 1000px;
  padding: 2.5%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#detail2{
  z-index: 40;
}

</style>