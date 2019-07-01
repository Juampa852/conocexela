<template>
  <div id="divlugares" class="container">
    <div class="text-center">
      <h1>Lugares Turísticos</h1>
    </div>
    <br><hr><br>
    <!-- CICLO PARA MOSTRAR TODOS LOS LUGARES -->
    <div v-for="(lugar, index) in lugares" :key="index">
      <!-- ALINEADO A LA IZQUIERDA -->
      <div v-if="index % 2 === 1">
        <div class="row">
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">
              {{ index }}. {{ lugar.nombre }}
            </h2>
            <p align="justify">
              {{ lugar.descripcion }}
            </p>
          </div>
          <!-- SLIDER  -->
          <div class="col-12 col-md-6">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="300"
              img-height="300"
            >
              <b-carousel-slide
                v-for="imagen in lugar.imagenes"
                :key="imagen"
                :img-src="imagen"
              />
            </b-carousel>
          </div>
        </div>
        <br><br>
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
              img-width="300"
              img-height="300"
            >
              <b-carousel-slide
                v-for="imagen in lugar.imagenes"
                :key="imagen"
                :img-src="imagen"
              />
            </b-carousel>
          </div>
          <!-- TEXTO -->
          <div class="col-12 col-md-6">
            <h2 class="text-center">
              {{ index }}. {{ lugar.nombre }}
            </h2>
            <p align="justify">
              {{ lugar.descripcion }}
            </p>
          </div>
        </div>
        <br><br>
      </div>
    </div>
    <div class="row">
      <!-- <b-pagination
        v-model="paginaActual"
        Align="fill"
        :total-rows="rows"
        :per-page="porPagina"
        first-text="Primera"
        prev-text="Anterior"
        next-text="Siguiente"
        last-text="Última"
        aria-controls="mis-lugares"
        size="lg"
      /> -->
      <b-pagination
        v-model="paginaActual"
        Align="center"
        :total-rows="rows"
        :per-page="porPagina"
        aria-controls="mis-lugares"
        size="lg"
      />
    </div>
    <br><hr><br>
  </div>
</template>

<script>
import JSONlugares from './lugares.json'

export default {
  data() {
    return {
      porPagina: 5,
      paginaActual: 1,
      lugares: JSONlugares
    }
  },
  computed: {
    rows() {
      return 15
    }
  }
}
</script>

<style>
</style>
