<template>
  <div id="detail" class="container-fluid">
    <div class="row" style="height:100%"> <!--가장큰행 (1: contentbox, 2:moviebox)-->
      <div id="contentbox" class="col-md-6 col-xl-7" :style="{'background-image':`url('http://image.tmdb.org/t/p/w500${moviedetail.backdrop_path}')`}">  <!--반응형 만들시 조정필요!-->
        <div class="row" style="height:100%"> <!--두번째 행(1:contents) -->
          <div id="contents" class="col-lg-12">  
            <div class="movie-title">
              <h1>{{moviedetail.title}}</h1>
              <span> {{ moviedetail.release_date }} </span>
              <hr>
            </div>
            <div class="movie-content">
              <h4>평점 : {{moviedetail.vote_average}}</h4>
              <br>
              <h4>{{ moviedetail.overview }}</h4>
            </div>
            <div class="review-form">
              <button>좋아요</button>
              <button>리뷰쓰러가기</button> 
            </div>
          </div>
        </div>  <!--두번째 행(1:contents) -->
      </div>
      <div class="col-md-6 col-xl-5 modal-div"> 
        <div class="row" style="height:100%">
          <div id="moviebox" class="embed-responsive">
            <iframe class="embed-responsive-item" width="100%" height="100%" :src="getMovieVideo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div><!--가장큰행 (1: contentbox, 2:moviebox)-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name : "movie-detail",
  computed : {
    ...mapGetters(['moviedetail', 'getMovieVideo'])
  }
}
</script>

<style>
#detail{
  z-index: 20;
  height: 100%;
  padding: 20px;
  margin: 0;

}
#contentbox{
  padding: 2% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#contents{
  background-color: rgba(40, 40, 40, 0.614);
  height: 98%;
  padding: 2%;
  color: white;
  
}
#moviebox{
  margin: auto;
  padding: 2%;
  height: 100%;
}
.modal-div{
  height: 100%;
}
.movie-content {
  padding: 20px 0px;
  color: white;
}

</style>