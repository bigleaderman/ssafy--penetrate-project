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
      <a class="navbar-brand" href="{% url 'movies:index' %}">
        <img src="@/assets/logo.png" alt="" width="200px" />
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
            <li class="nav-item">
              <!-- active 클래스! -->
              <a
                class="nav-link active"
                aria-current="page"
                href="{% url 'movies:index' %}"
                >Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="{% url 'movies:recommendations' %}"
                >영화추천
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="{% url 'movies:recommendations' %}"
                >리뷰
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="{% url 'movies:recommendations' %}"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="{% url 'movies:recommendations' %}"
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
export default {};
</script>

<style>
#myNav {
  font-size: 22px;
  background-color: rgb(40, 40, 40) !important;
}
</style>