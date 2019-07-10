<template>
  <body>
    <div id="divlugares" class="container">
      <br />
      <!-- CICLO PARA MOSTRAR TODOS LOS LUGARES -->
      <div v-for="i in perPage" :key="i">
        <!-- ALINEADO A LA IZQUIERDA -->
        <div v-if="i % 2 === 1">
          <div class="row " data-aos="zoom-in-left" data-aos-duration="4000000" style="background: rgba(0,0,0,0.5);">
            <!-- TEXTO -->
            <div class="col-12 col-md-6">
              <h2 class="text-center">{{ ((numero-1)*perPage) + i }}. {{ lugares[(numero*perPage)-perPage-1+i].nombre }}</h2>
              <p align="justify">{{ lugares[(numero*perPage)-perPage-1+i].descripcion }}</p>
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
                  v-for="imagen in lugares[(numero*perPage)-perPage-1+i].imagenes"
                  :key="imagen"
                  :img-src="imagen"
                  class="imagen"
                />
              </b-carousel>
              </parallax-element>
              </parallax-container>
            </div>
            <!-- UBICACIÓN -->
            <div id="ubicacion" class="col-12">
              <b-button v-b-toggle="'collapse-'+i" variant="outline-danger" pill class="offset-3 offset-sm-4 offset-md-2 llegar">Ver Ubicación</b-button>
              <b-collapse :id="'collapse-'+i" class="mt-2 col-12">
                <b-card>
                  <gmap-map :center="lugares[(numero*perPage)-perPage-1+i].coordenada" :map-type-id="mapTypeId" :zoom="18">
                    <gmap-marker
                      :position="lugares[(numero*perPage)-perPage-1+i].coordenada"
                    />
                  </gmap-map>
                </b-card>
              </b-collapse>
            </div>
          </div>
          <br />
          <br />
        </div>
        <!-- ALINEADO A LA DERECHA -->
        <div v-else>
          <div class="row" data-aos="flip-up" data-aos-duration="4000000" style="background: rgba(0,0,0,0.5);">
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
                  v-for="imagen in lugares[(numero*perPage)-perPage-1+i].imagenes"
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
              <h2 class="text-center">{{ ((numero-1)*perPage) + i }}. {{ lugares[(numero*perPage)-perPage-1+i].nombre }}</h2>
              <p align="justify">{{ lugares[(numero*perPage)-perPage-1+i].descripcion }}</p>
            </div>
            <!-- UBICACIÓN -->
            <div id="ubicacion" class="col-12">
              <b-button v-b-toggle="'collapse-'+i" variant="outline-danger" pill class="offset-3 offset-sm-4 offset-md-8 llegar">Ver Ubicación</b-button>
              <b-collapse :id="'collapse-'+i" class="mt-2 col-12">
                <b-card>
                  <gmap-map :center="lugares[(numero*perPage)-perPage-1+i].coordenada" :map-type-id="mapTypeId" :zoom="18">
                    <gmap-marker
                      :position="lugares[(numero*perPage)-perPage-1+i].coordenada"
                    />
                  </gmap-map>
                </b-card>
              </b-collapse>
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
  props: {
    numero: Number
  },
  data() {
    return {
      lugares: JSONlugares,
      perPage: 5,
      mapTypeId: 'terrain'
    }
  }
}
</script>

<style>
#divlugares {
  /* background-color: #f4f6f8; */
}

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

a.llegar, a.llegar:visited{
  border-style: solid;
  color: #f70a0a;
  border-color: #f70a0a;
  outline-color: #f70a0a;
}

a.llegar:hover {
  background-color: #f70a0a;
  color: #ffffff;
  border-style: solid;
  border-color: #ffffff
}

.vue-map-container {
  height: 300px;
  width: 100%;
}

body{
  background-image: url(/fondo10.jpg);
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment: fixed;
}
</style>
