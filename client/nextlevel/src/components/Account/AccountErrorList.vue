<template>
  <div class="account-error-list">
    <p v-for="(errors, field) in authError" :key="field">
      {{ field }}
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">
          <p>잘못된 정보가 호출되었습니다.</p>
        </li>
      </ul>
    </p>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AccountErrorList",
  computed: {
    ...mapGetters(["authError"]),
  },
};
</script>

<style>
.account-error-list {
  color: red;
}
</style>
