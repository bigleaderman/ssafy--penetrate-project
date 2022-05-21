<template>
  <div id="detail" class="container-fluid" :style="{'background-image':`url('http://image.tmdb.org/t/p/w500${moviedetail.backdrop_path}')`}">
    <div id="detail2" >
      <div class="row">
        <div id="youtube" class="modal-div col col-xs-12 col-md-6">
          
        </div>
        <div id="contents" class="col col-xs-12 col-md-6">
          <h1>{{ moviedetail.title }}</h1>
        </div>
      </div>
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
  height: auto;
  padding: 20px;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#detail2{
  z-index: 40;
  height: 1200px ;
  padding: 3%;
  background-color: rgba(0, 0, 0, 0.667);
}
.modal-div{
  background-color:rgb(110, 65, 65);
  height: 600px;
}
</style>