<template>
  <footer class="page-footer-cx font-small-cx stylish-color-dark pt-4-cx">
    <!-- Footer Links -->
    <div class="container text-center">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div id="logo-div-cx" class="col-md-4 mx-auto">
          <!-- Content -->
          <a href="/">
            <img id="page-logo-cx" src="/nombre3.png" alt="ConoceXela">
          </a>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Links -->
          <table id="link-table-cx">
            <th id="link-table-cx-head" colspan="2">
              <h5 class="font-weight-bold-cx text-uppercase-cx">Links</h5>
            </th>
            <tr class="link-table-cx-row">
              <td>
                <!-- TODO -->
                <a href="/">Inicio</a>
              </td>
              <td>
                <a href="/cultura">Cultura</a>
              </td>
            </tr>
            <tr class="link-table-cx-row">
              <td>
                <a href="/lugares">Lugares</a>
              </td>
              <td>
                <a href="/comida">Comida</a>
              </td>
            </tr>
          </table>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Content -->
          <nav id="social-nav-cx">
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
a {
  color: #ffff !important;
}
.social-img-cx {
  width: 12%;
  height: 12%;
  margin: 1%;
}
#social-nav-cx {
  padding-top: 3%;
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
.link-table-cx-row {
  height: 100%;
}
#link-table-cx-head {
  text-align: center;
  color: #ffff;
  /*border:1px solid black;*/
}
</style>
