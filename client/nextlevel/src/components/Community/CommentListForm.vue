<template>
  <div>
    <form @submit.prevent="onSubmit" class="comment-list-form">
      <input style="width:50%; height:70px" type="text" id="comment" v-model="content" required>
      <button class="btn-warning" style="height:70px">Comment</button>
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