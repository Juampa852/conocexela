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
      <div v-for="i in perPage" :key="i">
        <!-- ALINEADO A LA IZQUIERDA -->
        <div v-if="i % 2 === 1">
          <div class="row" data-aos="zoom-in-left" data-aos-duration="4000000">
            <!-- TEXTO -->
            <div class="col-12 col-md-6">
              <h2 class="text-center">{{ ((numero-1)*perPage) + i }}. {{ lugares[(numero*perPage)-perPage-1+i].nombre }}</h2>
              <p align="justify">{{ lugares[(numero*perPage)-perPage-1+i].descripcion }}</p>
            </div>
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
                  v-for="imagen in lugares[(numero*perPage)-perPage-1+i].imagenes"
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
          <div class="row" data-aos="slide-right" data-aos-duration="4000000">
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
                  v-for="imagen in lugares[(numero*perPage)-perPage-1+i].imagenes"
                  :key="imagen"
                  :img-src="imagen"
                  class="imagen"
                />
              </b-carousel>
            </div>
            <!-- TEXTO -->
            <div class="col-12 col-md-6">
              <h2 class="text-center">{{ ((numero-1)*perPage) + i }}. {{ lugares[(numero*perPage)-perPage-1+i].nombre }}</h2>
              <p align="justify">{{ lugares[(numero*perPage)-perPage-1+i].descripcion }}</p>
            </div>
          </div>
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">{{ index }}. {{ lugar.nombre }}</h2>
            <p align="justify">{{ lugar.descripcion }}</p>
            <a class="btn btn-primary btn-sm float-right" :href="lugar.direccion" target=_blank> Como llegar aquí </a>
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
  props: {
    numero: Number
  },
  data() {
    return {
      lugares: JSONlugares,
      perPage: 5
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
