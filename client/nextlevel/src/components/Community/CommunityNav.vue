<template>
  <div>
    <div id=community-nav-div>
    </div>
    <div id="community-nav">
      <div id="good" class="yes-active" @click="setCategory(0)"><h4>핫게시판</h4></div>
      <div id="good" class="no-active" @click="setCategory(1)"><h4>영화리뷰</h4></div>
      <div id="good" class="no-active" @click="setCategory(2)"><h4>영화정보</h4></div>
      <div id="good" class="no-active" @click="setCategory(3)"><h4>자유게시판</h4></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name : 'CommunityNav',
  methods : {
    ...mapActions(['setCategory'])
  }
}
</script>

<style>
#community-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 10px auto;
  height: 50px;
  background-color: rgb(53, 50, 50, 0.8);
  border-radius: 15px;
}
#btn {
  color: white;
  padding-bottom: 0px;
}

.no-active{
  border-bottom: 3px solid rgb(152, 111, 0);
  height: 35px;
}
.yes-active{
  color: white;
  border-bottom : 3px solid rgb(255, 187, 0);
  height: 35px;
}

#community-nav-div {
  width: 100vw;
  height: 150px;
  background-image: url("@/assets/backgroundnav.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}
</style>