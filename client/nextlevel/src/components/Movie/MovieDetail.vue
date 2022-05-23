<template>
  <div id="detail">
    <div id="please-row" class="row" style="height:100%"> <!--가장큰행 (1: contentbox, 2:moviebox)-->
      <div id="please-row-2" class="col col-12 col-xxl-5 order-xxl-2" stlye="height:100%"> 
        <div id="moviebox">
          <iframe class="embed-responsive-item" width="100%" height="100%" :src="getMovieVideo" allow="autoplay;" allowfullscreen></iframe>
        </div>
      </div>

      <div id="please-row-2" class="col col-12  col-xxl-7">  <!--반응형 만들시 조정필요!-->
        <div id="contentbox" :style="{'background-image':`url('http://image.tmdb.org/t/p/w500${moviedetail.backdrop_path}')`}">
          <div id="contents" class="row">
            <div class="movie-title col col-6 col-xxl-12">
              <h1>{{moviedetail.title}}</h1>
              <span> {{ moviedetail.release_date }} </span>
              <hr>
              <h4>평점 : {{moviedetail.vote_average}}</h4>
            </div>
            <div class="movie-content col col-6 col-xxl-12">
              <br>
              <h6>{{ moviedetail.overview }}</h6>
            </div>
            <div class="review-form">
              <button>좋아요</button>
              <button>리뷰쓰러가기</button> 
            </div>
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
  },
}
</script>

<style>
@media (max-width : 1440px) {
  #please-row{
    height: 100% !important;
  }
  #please-row-2{
    padding: 15px 15px 7.5px;
  }
}

#detail{
  height: 100% !important;
  padding: 1%;

}
#contentbox{
  height: 100%;
  padding: 1% 0% 1%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#contents{
  background-color: rgba(40, 40, 40, 0.614);
  height: 100%;
  padding: 1% 5%;
  color: white;
  
}
#moviebox{
  height: 100%;
}
.modal-div{
  padding: 5px;
}
.movie-content {
  padding: 20px 0px;
  color: white;
}

</style>