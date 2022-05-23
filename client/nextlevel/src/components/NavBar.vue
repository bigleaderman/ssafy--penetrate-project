<template>
  <nav
    id="myNav"
    class="
      navbar navbar-fixed-top navbar-expand-md navbar-dark
      bg-dark
      sticky-top
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:8080/">
        <span>NEXTLEVEL</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" id="navbarSupportedContent">
        <div class="d-flex justify-content-end">
          <ul class="navbar-nav mb-lg-0">
            <li v-if="isLoggedIn" class="nav-item mx-3">
              <!-- active 클래스! -->
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'home' }"
                >Home</router-link
              >
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <a
                class="nav-link active"
                href="http://localhost:8080/recommendation"
                >영화추천
              </a>
            </li>
            <li v-if="isLoggedIn" class="nav-item mx-3">
              <a
                class="nav-link active"
                href="http://localhost:8080/communities"
                >리뷰
              </a>
            </li>
            <li v-if="isLoggedIn" class="nav-item mx-3">
              <a class="nav-link active" href="http://localhost:8080/logout"
                >Logout</a
              >
            </li>
            <li v-if="!isLoggedIn" class="nav-item mx-3">
              <a class="nav-link active" href="http://localhost:8080/login"
                >Login</a
              >
            </li>
            <li v-if="!isLoggedIn" class="nav-item mx-3">
              <a class="nav-link active" href="http://localhost:8080/signup"
                >회원가입</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isLoggedIn", "currentUser"]),
    username() {
      return this.currentUser.username ? this.currentUser.username : "guest";
    },
  },
};
</script>

<style>
#myNav {
  font-size: 18px;
  background-color: rgb(0, 0, 0) !important;
}
</style>