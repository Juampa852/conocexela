<template>
  <div id="divcultura" class="container">
    <div class="container">
      <div class="row"><button type="button" class="btn btn-primary">Volver</button></div>
      <h1 align="center">
        {{ municipios[id].nombre }}
      </h1>
      <hr><br>
    </div>
    <div class="text-center">
      <div v-for="(tradicion, index) in municipios[id].tradiciones" :key="index">
        <div v-if="index % 2 === 0">
          <div class="row">
            <!-- Conteido texto -->
            <div class="col-12 col-md-6">
              <h2 class="text-center">
                {{ tradicion.nombre }}
              </h2>
              <p v-for="(parrafo,index) in tradicion.contenido" :key="index" align="justify">
                {{ parrafo }}
              </p>
            </div>
            <!-- VIDEO DERECHA -->
            <div class="col-12 col-md-6" v-if="tradicion.video">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src=tradicion.media allowfullscreen></iframe>
              </div>
            </div>
            <!-- SLIDER  DERECHA-->
            <div v-else class="col-12 col-md-6">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="300"
                img-height="300"
              >
                <b-carousel-slide
                  v-for="imagen in tradicion.media"
                  :key="imagen"
                  :img-src="imagen"
                />
              </b-carousel>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row">
            <!-- VIDEO IZQUIERDA -->
            <div class="col-12 col-md-6" v-if="tradicion.video">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src=tradicion.media allowfullscreen></iframe>
              </div>
            </div>
            <!-- SLIDER  izquierda-->
            <div v-else class="col-12 col-md-6">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 0px #000"
                fade
                indicators
                img-width="300"
                img-height="300"
              >
                <b-carousel-slide
                  v-for="imagen in tradicion.media"
                  :key="imagen"
                  :img-src="imagen"
                />
              </b-carousel>
            </div>
            <!-- Conteido texto -->
            <div class="col-12 col-md-6">
              <h2 class="text-center">
                {{ tradicion.nombre }}
              </h2>
              <p v-for="(parrafo,index) in tradicion.contenido" :key="index" align="justify">
                {{ parrafo }}
              </p>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import JSONcultura from './cultura-muni.json'
export default {
  props: {
    id: Number
  },
  data() {
    return {
      municipios: JSONcultura.municipios
    }
  }
}
</script>
