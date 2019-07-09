<template>
<body>
  <div id="divlugares" class="container">
    <div class="text-center">
      <h1>Lugares Turísticos</h1>
    </div>
    <br />
    <hr />
    <br />
    <!-- CICLO PARA MOSTRAR TODOS LOS LUGARES -->
    <div v-for="(lugar, index) in lugares" :key="index">
      <!-- ALINEADO A LA IZQUIERDA -->
      <div v-if="index % 2 === 1">
        <div class="row">
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">{{ index }}. {{ lugar.nombre }}</h2>
            <p align="justify">{{ lugar.descripcion }}</p>
            <a class="btn btn-primary btn-sm float-left" :href="lugar.direccion" target=_blank>Como llegar aquí </a>
          </div>
          <!-- SLIDER  -->
          <div class="col-12 col-md-6">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              controlwidths
              img-
              img-height="300px"
            >
              <b-carousel-slide
                v-for="imagen in lugar.imagenes"
                :key="imagen"
                :img-src="imagen"
                class="imagen"
              />
            </b-carousel>
          </div>
        </div>
        <br />
        <br />
      </div>
      <!-- ALINEADO A LA DERECHA -->
      <div v-else>
        <div class="row">
          <!-- SLIDER  -->
          <div class="col-12 col-md-6">
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
          </div>
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">{{ index }}. {{ lugar.nombre }}</h2>
            <p align="justify">{{ lugar.descripcion }}</p>
            <a class="btn btn-primary btn-sm float-right" :href="lugar.direccion" target=_blank> Como llegar aquí </a>
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
b-carousel {
  height: 300px;
}

.imagen {
  width: 100%;
  height: 300px;
}
</style>
