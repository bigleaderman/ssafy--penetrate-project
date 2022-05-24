<template>
  <div
    id="modalbox"
    :style="{
      'background-image': `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}')`,
    }"
  >
    <div class="row">
      <div class="col col-12 col-sm-6" style="margin: 0px 0px 0px 3%">
        <h1>{{ moviedetail.title }}</h1>
        <span>개봉일자 : {{ moviedetail.released_date }}</span
        ><br />
        <span>평점 : {{ moviedetail.vote_average }}</span
        ><br />
        <span>장르 : {{ moviedetail.genres }}</span
        ><br />
        <span>감독 : {{ moviedetail.director }}</span
        ><br />
        <hr />
        <p>{{ moviedetail.overview }}</p>
        <br />
        <button class="mybutton" @click.prevent="videoSwitch">
          예고편보기
        </button>
        <video-modal
          v-if="isVideo"
          :video="getMovieVideo"
          @close="videoSwitch"
        ></video-modal>
      </div>
    </div>
  </div>

  <!--가장큰행 (1: contentbox, 2:moviebox)-->
</template>

<script>
// 'background-image': `url('http://image.tmdb.org/t/p/original${moviedetail.backdrop_path}')`,
import { mapGetters } from "vuex";
import VideoModal from "@/components/Movie/VideoModal.vue";

export default {
  name: "movie-detail",
  components: {
    VideoModal,
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
};
</script>

<style>
#modalbox {
  height: 100%;
  padding: 8% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
#youtube {
  padding: 5%;
}

@media (max-width: 1440px) {
  .test {
    color: white;
  }
}
</style>