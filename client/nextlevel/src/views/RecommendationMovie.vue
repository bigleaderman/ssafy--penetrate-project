<template>
  <div>
    <h1 class="py-5 text-center">
      <span class="yellow">{{ currentUser.username }}님</span>만을 위한 추천
      영화입니다!
    </h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecommendationMovie",
  methods: {
    ...mapActions(["fetchCurrentUser"]),
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
</style>