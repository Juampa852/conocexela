<template>
  <footer class="page-footer font-small stylish-color-dark pt-4">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Content -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <!-- TODO -->
              <a href="/cultura">Cultura</a>
            </li>
            <li>
              <a href="/lugares">Lugares</a>
            </li>
            <li>
              <a href="/comida">Comida</a>
            </li>
          </ul>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Content -->
          <nav id="social_div">
            <a href="http://www.facebook.com" target="_blank">
              <img class="social_img" src="/social_icons/fb.png">
            </a>
            <a href="http://www.twitter.com" target="_blank">
              <img class="social_img" src="/social_icons/tw.png">
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <img class="social_img" src="/social_icons/ig.png">
            </a>
          </nav>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
      </div>
      <!-- Grid row -->
    </div>
  </footer>
</template>

<style>
.page-footer {
  height: 100%;
  width: 100%;
  background-color: #142572;
}
.font-small {
  font-size: 0.9rem;
}
.pt-4 {
  padding-top: 1.5rem !important;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.mt-3 {
  color: #ffff;
}
.mb-4 {
  color: #ffff;
}
p {
  color: #ffff;
}
a {
  color: #ffff !important;
}
.social_img {
  width: 12%;
  height: 12%;
  margin: 1%;
}
#social_div {
  padding-top: 12%;
}
</style>
