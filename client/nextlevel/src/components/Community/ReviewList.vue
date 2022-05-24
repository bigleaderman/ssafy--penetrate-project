<template>
  <div id="review-list">
    <div v-for="review in paginatedData" :key="review.pk" >
      <router-link :to="{ name: 'reviewDetail' , params : {'reviewPk' : review.pk} } ">
        <div>
          {{ review.title}}
        </div>
      </router-link> 
      <hr>
    </div>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
    <div>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="k in pageCount" :key="k"><a class="page-link" href="#">{{k}}</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name : 'reviewList',
  data() {
    return {
      pageNum : 0
    }
  },
  props : {
    reviews : {
      type : Array,
    },
    pageSize : {
      type : Number,
      required : false,
      default : 10,
    }
  },
  methods : {
    ...mapActions(['fetchReview']),
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }
  },
  computed : {
    pageCount() {
      let lstLength = this.reviews.length
      let lstSize = this.pageSize
      let page = Math.floor((lstLength - 1) / lstSize) + 1
      return page
    },
    paginatedData(){
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize

      return this.reviews.slice(start,end)
    }
  }

}
</script>

<style>
#review-list {
  color: white !important;
}
.button {
  background-color: white;
}

</style>