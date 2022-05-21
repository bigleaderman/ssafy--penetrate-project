<template>
  <!-- Footer -->
  <footer id="footer">
    <section>
      <div class="text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="d-flex flex-row mb-3">
          <!-- Grid column -->
          <div md="3" lg="4" xl="3" class="mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">NextLevel</h6>
            <p>맞춤형 영화를 제공하는 영화 추천 서비스입니다.</p>
            <p>현재 상영 중인 유명작부터, 명작, 개인추천까지!</p>
            <p>지금 홈페이지를 통해 만나보세요.</p>
          </div>
          <div md="2" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">SITE MAP</h6>
            <p>
              <a href="#!" class="text-reset">Home</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Recommendations</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Review</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Log-in/Sign-up</a>
            </p>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div md="3" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Used Skills</h6>
            <p>Python</p>
            <p>Django</p>
            <p>HTML/CSS/JavaScript</p>
            <p>Vue</p>
          </div>

          <div md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Member</h6>
            <p>SSAFY Gumi 3</p>
            <p><i class="fas fa-envelope me-3"></i>ChaeRi Kim</p>
            <p><i class="fas fa-envelope me-3"></i>DongWook Lee</p>
            <p><i class="fas fa-envelope me-3"></i>GeonNyeong Heo</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2022 Copyright:
      <a class="text-reset fw-bold">NextLevel</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style>
#footer {
  color: rgb(123, 123, 123);
}
</style>