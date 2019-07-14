<template>
  <footer class="page-footer-cx font-small-cx stylish-color-dark pt-4-cx">
    <!-- Footer Links -->
    <div class="container text-center text-md-center">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div id="logo-div-cx" class="col-md-4 mx-auto">
          <!-- Content -->
          <a href="/">
            <img id="page-logo-cx" class="animated bounce page-logo-cx" src="/nombre3.png" alt="ConoceXela">
          </a>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto text-md-right">
          <!-- Links -->
          <h6 id="contacto" class="text-uppercase-cx font-weight-bold-cx">
            Contacto
          </h6>
          <div class="container text-center">
            <h6 class="font-small-sub-cx mb-4 footer-text">
              E-mail:
            </h6>
            <h6 class="font-small-cx mb-4 footer-text">
              conoce.xela19@gmail.com
            </h6>
            <h6 class="font-small-sub-cx mb-4 footer-text">
              Teléfono:
            </h6>
            <h6 class="font-small-cx mb-4 footer-text">
              +502 4196-6767
            </h6>
            <h6 class="font-small2-cx mb-4 footer-text">
              Hecho con <span style="color: #e25555;">&hearts;</span> en Xela, por DevTeam
            </h6>
          </div>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 my-auto mx-auto">
          <!-- Content -->
          <nav>
            <a href="http://www.facebook.com" target="_blank">
              <img class="social-img-cx" src="/social_icons/fb.png" alt="Facebook">
            </a>
            <a href="http://www.twitter.com" target="_blank">
              <img class="social-img-cx" src="/social_icons/tw.png" alt="Twitter">
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <img class="social-img-cx" src="/social_icons/ig.png" alt="Instagram">
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.page-footer-cx {
  height: 100%;
  width: 100%;
  background-color: #142572;
  padding-bottom: 1%;
}
.font-small-cx {
  font-size: 0.9rem;
}
.font-small2-cx {
  font-size: 0.75rem;
}
.font-small-sub-cx {
  font-size: 0.9rem;
  text-decoration: underline white;
}
.pt-4-cx {
  padding-top: 1.5rem !important;
}
.list-unstyled-cx {
  padding-left: 0;
  list-style: none;
}
.font-weight-bold-cx {
  font-weight: 700 !important;
}
.text-uppercase-cx {
  text-transform: uppercase !important;
}
.mt-3-cx {
  color: #ffff;
}
.mb-4 {
  color: #ffff;
}
.footer-text {
  margin: 1.5px !important;
}
.social-img-cx {
  width: 14%;
  height: 14%;
  margin: 1%;
}
#page-logo-cx {
  width: 75%;
  height: 75%;
}
#logo-div-cx {
  display: flex;
  justify-content: center;
  align-items: center;
}
#link-table-cx {
  width: 100%;
  text-align: center;
}
#contacto {
  text-align: center;
  color: #ffff;
  /*border:1px solid black;*/
}
.page-logo-cx {
  animation-iteration-count: 0;
}
.page-logo-cx:hover {
  animation-delay: 5s;
  animation-iteration-count: infinite;
}
</style>
