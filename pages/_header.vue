<template>
  <div id="divheaderlogo">
    <a href="https://www.munixela.gob.gt" target="_blank">
      <img
        src="/logo.png"
        style="padding: 0; margin-left: 5%; margin-top: 1px;"
        width="5%"
        height="95%"
        alt="Responsive image"
      >
    </a>
    <a href="/">
      <img
        src="/nombre3.png"
        style="padding: 0; margin-left:25%; margin-top: 1px;"
        width="20%"
        height="85%"
        alt="Responsive image"
      >
    </a>
    <div id="divheadernavbar">
      <nav class="navbar navbar-expand-lg navbar-light navbar-inverse navbar-fixed-top">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">
              Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Cultura</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Lugares</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Comida</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
#divheaderlogo {
  width: 100%;
  height: 65px;
  background-color: #142572;
}

#divheadernavbar {
  float: right;
  margin-top: 17px;
  margin-right: 2%;
  padding-bottom: 0;
}

.nav-link:hover {
  background-color: #5faef3;
  border-radius: 12px;
}

.nav-link:focus {
  background-color: #5faef3;
  border-radius: 12px;
}
</style>
