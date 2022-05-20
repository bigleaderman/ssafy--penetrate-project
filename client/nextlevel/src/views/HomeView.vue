<template>
  <div class="home">
    <!-- 시작박스 -->
    <div class="row">
      <!-- 메인캐러셀시작 -->
      <div id="temp1">
        <h1>메인캐러샐</h1>
      </div>
    </div>
    <!-- 메인캐러셀끝 -->
    
    <div class="row sub-div">  <!-- 서브 캐러셀 -->
      <sub-carousel></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel></sub-carousel>
    </div>  <!-- 부분캐러셀끝 -->
    
    <div>
      <!-- 모달 -->
      
    </div>
  </div>
  <!-- 시작박스끝 -->
</template>

<script>
import SubCarousel from '@/components/Movie/SubCarousel.vue'
import { mapActions } from 'vuex' 

export default {
  name: "HomeView",
  components: {
    SubCarousel,
  },

  methods : {
    ...mapActions(['getmovies']),
  },

  created(){
    this.getmovies()
  }
};
</script>

<style scoped>
#temp1 {
  background-color: rgb(79, 35, 35);
  border: 1px solid rgb(205, 158, 153);
  height: 200px;
  margin: 10px 0px;
}

.sub-div {
  margin: 60px 0px;
  height: 300px !important;
}
</style>