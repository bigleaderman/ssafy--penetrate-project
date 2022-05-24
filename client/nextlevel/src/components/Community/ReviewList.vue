<template>
  <div id="review-list">
    <div id="article-list">
      <div v-for="review in paginatedData" :key="review.pk" >
        <router-link :to="{ name: 'reviewDetail' , params : {'reviewPk' : review.pk} } ">
          <div>
            {{ review.title}}
          </div>
        </router-link> 
        <hr>
      </div>
    </div>
    <div class="padding">
      <ul class="pagination">
        <li class="page-item"><a class="btn btn-outline-warning" @click.prevent="prevPage" 
        :class="{ 'disabled' : pageNum === 0}">이전</a></li>
        <li class="page-item" v-for="k in pageCount" :key="k"><a 
        class="btn btn-outline-warning" 
        @click.prevent="seletectPage(k)"
        :class="{ 'active' : k === pageNum + 1 }"
        >{{k}}</a></li>
        <li class="page-item"><a class="btn btn-outline-warning" @click.prevent="nextPage">다음</a></li>
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
      default : 20,
    }
  },
  methods : {
    ...mapActions(['fetchReview']),
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    seletectPage (k) {
      this.pageNum = k-1;
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
  width: 100%;
  margin: auto;
  background-color: rgb(15, 15, 15) ;
}
#article-list{
  width: 90%;
  margin: auto;
}
.button {
  background-color: white;
}
.padding {
  display: flex;
  justify-content: center;
}
</style>