<template>
  <div id="community-contents" style="padding:20px">
    <form  @submit.prevent="onSubmit" style="width : 90%; margin:auto">
      <div style="width:100%">
        <div>
          <select name="kind" v-model="newReview.kind" style="width:20%; margin : auto">
            <option value="0"> 분류선택</option>
            <option value="1"> 영화리뷰</option>
            <option value="2"> 영화정보</option>
            <option value="3"> 자유게시판</option>
          </select>
        </div>
        <input
          v-model="newReview.title"
          type="text"
          id="title"
          required
          style="width:60%; margin:0px 10px auto"
          />
      </div>
      <div>
      </div>
      <div>
        <label for="content">내용: </label>
        <textarea
          v-model="newReview.content"
          type="text"
          id="content"
          required
        ></textarea>
      </div>
      <div>
        <button>{{action}}</button>
      </div>
    </form>
  </div>

</template>

<script>
import {mapActions}  from 'vuex'
export default {
  name : 'ReviewForm',
  props : {
    review : Object,
    action : String,
  },
  data(){
    return{ 
      newReview : {
        title : this.review.title,
        kind : this.review.kind,
        content : this.review.content,
      }
    }
  },
methods : {
  ...mapActions(['createReview','updateReview']),
  onSubmit () {
    if(this.action==='create'){
      this.createReview(this.newReview)
    } else if (this.action ==='update') {
      const payload = {
        pk : this.review.pk,
        ...this.newReview,
      }
      this.updateReview(payload)
    }
  }
}

}
</script>

<style>

</style>