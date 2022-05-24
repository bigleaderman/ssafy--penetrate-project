<template>
 
  <div id="community-nav">
    <div id="good" @click="setCategory(0)"><h4>핫게시판</h4></div>
    <div id="good" @click="setCategory(1)"><h4>영화리뷰</h4></div>
    <div id="good" @click="setCategory(2)"><h4>영화정보</h4></div>
    <div id="good" @click="setCategory(3)"><h4>자유게시판</h4></div>
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
  width: 65%;
  margin: 120px auto;
  height: 50px;
  background-color: rgb(53, 50, 50, 0.8);
  border-radius: 15px;
}
#btn {
  color: white;
}

#good{
  border-bottom: 3px solid rgb(255, 187, 0);
}
</style>