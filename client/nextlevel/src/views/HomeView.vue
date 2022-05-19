<template>
  <div class="home"> <!-- 시작박스 -->
    <div class="row"> <!-- 메인캐러셀시작 -->
      <div id="temp1">
        <h1>메인캐러샐</h1>
      </div>
    </div>  <!-- 메인캐러셀끝 -->
    <div class="row"> <!-- 부분캐러셀 -->
      <div id="temp1">
        <h1>카테고리 1</h1>
      </div>
    </div>
    <div class="row">
      <div id="temp1">
        <h1>카테고리 2</h1>
      </div>
    </div>
    <div class="row">
      <div id="temp1">
        <h1>메인캐러샐</h1>
      </div>
    </div> <!-- 부분캐러셀끝 -->
    <div> <!-- 모달 -->
      <p>모달!</p>
    </div>
  </div> <!-- 시작박스끝 -->
</template>

<script>


export default {
  name: 'HomeView',
  created(){

  },
  components: {
  },
}
</script>
<style scoped>
  #temp1 {
    background-color: rgb(79, 35, 35);
    border: 1px solid rgb(205, 158, 153);
    height: 200px;
    margin: 10px 0px ;
  }
  
</style>