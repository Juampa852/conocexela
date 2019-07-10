<template>
<body>
  <div id="divlugares" class="container">
    <div class="text-center">
      <br>
      <h1>Lugares Turísticos</h1>
    </div>
    <hr />
    <br />
    <!-- CICLO PARA MOSTRAR TODOS LOS LUGARES -->
    <div v-for="(lugar, index) in lugares" :key="index">
      <!-- ALINEADO A LA IZQUIERDA -->
      <div v-if="index % 2 === 1">
        <div class="row row" style="background: rgba(0, 0, 0, 0.5);">
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">{{ index }}. {{ lugar.nombre }}</h2>
            <p align="justify">{{ lugar.descripcion }}</p>
          </div>
          <!-- SLIDER  -->
          <div class="col-12 col-md-6">
            <parallax-container class="horizontal-card centered-card">
              <parallax-element class="background-image" :parallaxStrength="-10" :type="'translation'">
                <b-carousel
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  indicators
                  controls
                  img-width
                  img-height="300px"
                >
                  <b-carousel-slide
                    v-for="imagen in lugar.imagenes"
                    :key="imagen"
                    :img-src="imagen"
                    class="imagen"
                  />
                </b-carousel>
              </parallax-element>
            </parallax-container>
          </div>
        </div>
        <br />
        <br />
      </div>
      <!-- ALINEADO A LA DERECHA -->
      <div v-else>
        <div class="row" style="background: rgba(0, 0, 0, 0.5);">
          <!-- SLIDER  -->
          <div class="col-12 col-md-6">
            <parallax-container class="horizontal-card centered-card">
              <parallax-element class="background-image" :parallaxStrength="-10" :type="'translation'">
                <b-carousel
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  indicators
                  controls
                  img-width
                  img-height="300px"
                >
                  <b-carousel-slide
                    v-for="imagen in lugar.imagenes"
                    :key="imagen"
                    :img-src="imagen"
                    class="imagen"
                  />
                </b-carousel>
              </parallax-element>
            </parallax-container>
          </div>
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">{{ index }}. {{ lugar.nombre }}</h2>
            <p align="justify">{{ lugar.descripcion }}</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
    <br />
    <hr />
    <br />
  </div>
</body>
</template>

<script>
import JSONlugares from './lugares.json'

export default {
  data() {
    return {
      lugares: JSONlugares
    }
  }
}
</script>

<style>
h1, h2, p{
  color: white;
}

hr, .hrcolor {
   height: 0.5px;
   border: 0;
   color: #666;
   background-color:rgb(51, 48, 18);
}

b-carousel {
  height: 300px;
}

.imagen {
  width: 100%;
  height: 300px;
}

body{
  background-image: url(/fondo10.jpg);
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment: fixed;
}
</style>
