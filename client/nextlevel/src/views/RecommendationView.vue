<template>
  <div>
    <h1>영화 추천</h1>
    <recommendation-form></recommendation-form>
  </div>
</template>

<script>
import RecommendationForm from "@/components/Recommendation/RecommendationForm.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecommendationView",
  components: {
    RecommendationForm,
  },

  methods: {
    ...mapActions(["getMovies", "deleteMovie", "fetchCurrentUser"]),
  },
  created() {
    this.getMovies();
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
</style>