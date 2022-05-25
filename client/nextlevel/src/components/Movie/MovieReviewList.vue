<template>
  <div>
    <h5 class="mb-3">사용자 평</h5>
    <hooper
      :vertical="true"
      style="height: 150px"
      id="review-hooper"
      :itemsToShow="7"
      :centerMode="true"
    >
      <slide id="review-content" v-for="review in reviews" :key="review.pk">
        <p>
          <span>ㆍ</span>
          <span class="star-rating-checkedlabel" v-if="review.number === 5"
            >★★★★★</span
          >
          <span class="star-rating-checkedlabel" v-if="review.number === 4"
            >★★★★</span
          >
          <span class="star-rating-checkedlabel" v-if="review.number === 3"
            >★★★</span
          >
          <span class="star-rating-checkedlabel" v-if="review.number === 2"
            >★★</span
          >
          <span class="star-rating-checkedlabel" v-if="review.number === 1"
            >★</span
          >
          / {{ review.content }}
          <span v-if="currentUser.username === review.user.username">
            <button @click="reviewDelete({review, moviePk})">delete</button>
          </span>
        </p>
        
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "MovieReivewList",
  props: {
    reviews: {
      type: Array,
    },
    moviePk: Number,
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  methods:{
    ...mapActions(['DeleteReview']),
    reviewDelete(review){
      console.log(review)
      console.log(review.review.pk)
      console.log(this.moviePk)
      this.DeleteReview ({
        moviePk: this.moviePk,
        scorePk : review.review.pk,
        score: review.review,
      })
      }
    }
    
  }
</script>

<style>
#hooper-review {
  padding: 0px 0px 0px 30px;
}
.star-rating {
  flex-direction: row-reverse;
  font-size: 1.5rem;
  line-height: 1.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}

.star-rating-checkedlabel {
  -webkit-text-fill-color: gold;
}
</style>