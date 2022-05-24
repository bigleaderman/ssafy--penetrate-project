<template>
  <div id="review-list">
    <div id="article-list">
      <table class="table" style="width:100%">
        <th class="row table-secondary" style="color:white">
          <td class="col col-2">번호</td>
          <td class="col col-8">제목</td>
          <td class="col col-2">작성자</td>
          <!-- <td class="table-date">날짜</td> -->
        </th>
        <tr v-for="review in paginatedData" :key="review.pk" >
          <router-link 
          :to="{ name: 'reviewDetail' , params : {'reviewPk' : review.pk}}"
          class="row"
          style="color:white">  
          <td class="col col-2"> {{ review.pk }} </td>
          <td class="col col-8"> {{ review.title }} <span id="small-text">{{ review.comment_count }}</span></td>
          <td class="col col-2"> {{ review.user.username }} </td>
            <!-- <td class="table-date">{{ review.created_at }}</td> -->
          </router-link> 
        </tr>

      </table>
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
th {
  color: white;
}
tr {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
table {

  width: 100%;
  padding: 25px;
}

#review-list {
  width: 70%;
  margin: auto;
}
#article-list{
  width: 100%;
  margin: auto;
}
.button {
  background-color: white;
}
.padding {
  display: flex;
  justify-content: center;
}
.background-image {
  width: 100%;
  opacity: 40%;
}

</style>