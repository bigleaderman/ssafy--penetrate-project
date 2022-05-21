<template>
  <div id="detail">
    <div id="please-row" class="row" style="height:100%"> <!--가장큰행 (1: contentbox, 2:moviebox)-->
      <div class="col col-12 col-xxl-5 order-xxl-2"> 
        <div id="moviebox">
          <iframe class="embed-responsive-item" width="100%" height="100%" :src="getMovieVideo" allow="autoplay;" allowfullscreen></iframe>
        </div>
      </div>

      <div id="please-row-2" class="col col-12  col-xxl-7">  <!--반응형 만들시 조정필요!-->
        <div id="contentbox" :style="{'background-image':`url('http://image.tmdb.org/t/p/w500${moviedetail.backdrop_path}')`}">
          <div id="contents">
            <div class="movie-title">
              <h1>{{moviedetail.title}}</h1>
              <span> {{ moviedetail.release_date }} </span>
              <hr>
            </div>
            <div class="movie-content">
              <h4>평점 : {{moviedetail.vote_average}}</h4>
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
    height: 50%;
  }
  #please-row-2{
    padding: 20px 20px;
  }
}

#detail{
  z-index: 20;
  height: 100%;
  padding: 3%;

}
#contentbox{
  height: 100%;
  padding: 5% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#contents{
  background-color: rgba(40, 40, 40, 0.614);
  height: 98%;
  padding: 3% 10%;
  color: white;
  
}
#moviebox{
  margin: 5px;
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