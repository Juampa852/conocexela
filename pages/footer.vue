<template>
  <footer class="page-footer font-small stylish-color-dark pt-4">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div id="logo-div" class="col-md-4 mx-auto">
          <!-- Content -->
          <a href="/">
            <img id="page-logo" src="/nombre3.png" alt="ConoceXela">
          </a>
        </div>
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Links -->
          <table id="link-table">
            <th id="link-table-head" colspan="2">
              <h5 class="font-weight-bold text-uppercase">Links</h5>
            </th>
            <tr class="link-table-row">
              <td>
                <!-- TODO -->
                <a href="/">Inicio</a>
              </td>
              <td>
                <a href="/cultura">Cultura</a>
              </td>
            </tr>
            <tr class="link-table-row">
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
          <nav id="social_nav">
            <a href="http://www.facebook.com" target="_blank">
              <img class="social_img" src="/social_icons/fb.png" alt="Facebook">
            </a>
            <a href="http://www.twitter.com" target="_blank">
              <img class="social_img" src="/social_icons/tw.png" alt="Twitter">
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <img class="social_img" src="/social_icons/ig.png" alt="Instagram">
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.page-footer {
  height: 100%;
  width: 100%;
  background-color: #142572;
  padding-bottom: 1%;
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
a {
  color: #ffff !important;
}
.social_img {
  width: 12%;
  height: 12%;
  margin: 1%;
}
#social_nav {
  padding-top: 3%;
}
#page-logo {
  width: 75%;
  height: 75%;
}
#logo-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#link-table {
  width: 100%;
  text-align: center;
}
.link-table-row {
  height: 100%;
}
#link-table-head {
  text-align: center;
  color: #ffff;
  /*border:1px solid black;*/
}
</style>
