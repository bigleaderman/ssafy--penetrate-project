<template>
  <div>
    <form @submit.prevent="onSubmit" class="comment-list-form">
      <label for="comment">comment: </label>
      <input type="text" id="comment" v-model="content" required>
      <button>Comment</button>
    </form>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['selectedReview']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ reviewPk: this.selectedReview.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>

</style>