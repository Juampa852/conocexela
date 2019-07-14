<template>
  <header style="height: 97px">
    <b-navbar toggleable="lg" fixed="top" style="background-color: #142572">
      <b-navbar-brand href="https://www.munixela.gob.gt/" target="_blank">
        <div style="width: 105px; height:100%">
          <img src="/logo.png" style="padding: 0; margin-left: 30%; margin-top: 0px;" width="65%">
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse id="nav_collapse" is-nav>
        <div style="width: 100%; height:100%; text-align: center">
          <a href="/">
            <img
              src="/nombre3.png"
              style="padding: 0;  margin-top: 1px;"
              width="25%"
              alt="Responsive image"
            >
          </a>
        </div>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            Inicio
          </b-nav-item>
          <b-nav-item href="/lugares">
            Lugares
          </b-nav-item>
          <b-nav-item href="/cultura">
            Cultura
          </b-nav-item>
          <b-nav-item href="/comida">
            Comida
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style>
/*seccion para intentar cambiar el color del toggle*/
.b-navbar-default .b-navbar-toggle {
  border-color: transparent !important; /* Removes border color */
  /*float: left; /* Move navbar toggle to left */
  color: white !important;
}
.b-navbar-default .b-navbar-toggle .icon-bar {
  background-color: #f00; /* Changes regular toggle color */
}
.b-navbar-default .b-navbar-toggle .icon-bar:hover {
  background-color: #fff; /* Changes toggle color on hover */
}
/*fin de la seccion de intento*/

.nav-link {
  color: white !important;
  overflow: hidden;
  cursor: pointer;
}
.nav-link:hover {
  background-color: #5faef3 !important;
  border-radius: 12px;
}

.nav-link:focus {
  background-color: #5faef3 !important;
  border-radius: 12px;
}

</style>
