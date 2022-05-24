<template>
  <div
    id="modalbox"
    :style="{
    'background-image': `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}')`,
  }">
    <div id="first" v-if="isVideo">
      <video-modal :video="getMovieVideo" @close="videoSwitch"></video-modal>
    </div>

    <button id="myButton" @click="deleteMovie"><h1>X</h1></button>

    <div id="second" class="row">
      <div class="col col-12 col-lg-6" style="margin:2% 0px 0px 3%">
        <h1>{{moviedetail.title}}</h1>
        <span>개봉일자 : {{moviedetail.released_date}}</span><br>
        <span>평점 : {{moviedetail.vote_average}}</span>
        <hr>
        <p>{{moviedetail.overview}}</p><br>
        <button class="mybutton" @click.prevent="videoSwitch">예고편보기</button>
        <div class="review">
          <h1>한줄리뷰</h1>
          <div class="review-form">
            <movie-review-form :moviePk="moviedetail.pk"></movie-review-form>
          </div>
          <div class="review-list">
            <movie-review-list
              :reviews="moviedetail.scores"
            ></movie-review-list>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--가장큰행 (1: contentbox, 2:moviebox)-->
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import  VideoModal  from "@/components/Movie/VideoModal.vue"
import MovieReviewForm from '@/components/Movie/MovieReviewForm.vue'
import MovieReviewList from '@/components/Movie/MovieReviewList.vue'

export default {
  name: "movie-detail",
  components: {
    VideoModal,
    MovieReviewForm,
    MovieReviewList,
  },
  computed: {
    ...mapGetters(["moviedetail", "getMovieVideo"]),
  },
  data() {
    return {
      isVideo: false,
    };
  },
  methods: {
    videoSwitch() {
      this.isVideo = !this.isVideo;
    },
  },
  methods : {
    ...mapActions(["deleteMovie"]),
    videoSwitch(){
      this.isVideo = !this.isVideo
    }
  }
};
</script>

<style>
#modalbox {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
#first {
  height: 100%;
  position: relative;
  z-index: 3;
}

#second {
  position : relative;

}
#myButton {
  position: relative;
  right: 0%;
}
</style>