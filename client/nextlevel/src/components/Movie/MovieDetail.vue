<template>
  <div id="modalbox" 
    :style="{
    'background-image': `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}')`,
  }">
    <div class="row">
      <div class="col col-12 col-lg-6" style="margin:0px 0px 0px 3%">
        <h1>{{moviedetail.title}}</h1>
        <span>개봉일자 : {{moviedetail.released_date}}</span><br>
        <span>평점 : {{moviedetail.vote_average}}</span>
        <hr>
        <p>{{moviedetail.overview}}</p><br>
        <button class="mybutton" @click.prevent="videoSwitch">예고편보기
        </button>
        <video-modal v-if="isVideo" :video="getMovieVideo" @close="videoSwitch"></video-modal>
        <div class="review">
          <h1>한줄리뷰</h1>
          <div class="review-form">
            <movie-review-form :moviePk="moviedetail.pk"></movie-review-form>
          </div>
          <div class="review-list">
            <movie-review-list :reviews="moviedetail.scores"></movie-review-list>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!--가장큰행 (1: contentbox, 2:moviebox)-->

</template>

<script>
import { mapGetters } from "vuex"
import  VideoModal  from "@/components/Movie/VideoModal.vue"
import MovieReviewForm from '@/components/Movie/MovieReviewForm.vue'
import MovieReviewList from '@/components/Movie/MovieReviewList.vue'

export default {
  name: "movie-detail",
  components : {
    VideoModal,
    MovieReviewForm,
    MovieReviewList,
  },
  computed: {
    ...mapGetters(["moviedetail", "getMovieVideo"]),
  },
  data(){
    return {
      isVideo : false
    }
  },
  methods : {
    videoSwitch(){
      this.isVideo = !this.isVideo
    }
  }
};
</script>

<style>
#modalbox{
  height: 100%;
  padding: 4% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
#youtube {
  padding: 5%;
}


@media (max-width : 1440px) {

  .test {
  color: white;
  }
}

</style>