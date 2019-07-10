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
        <b-card v-if="i % 2 === 1" no-body bg-variant="light" data-aos="zoom-in-left" data-aos-duration="4000000">
          <b-row>
            <!-- TEXTO -->
            <b-col xs="12" md="6">
              <b-card-body :title="lugares[(numero*perPage)-perPage-1+i].nombre" align="center">
                <b-card-text align="justify">
                  {{ lugares[(numero*perPage)-perPage-1+i].descripcion }}
                </b-card-text>
              </b-card-body>
            </b-col>
            <!-- SLIDER -->
            <b-col xs="12" md="6">
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
            </b-col>
            <!-- UBICACIÓN -->
            <b-col xs="12">
              <b-button v-b-toggle="'collapse'" variant="outline-danger" pill class="offset-4 offset-md-2 llegar">Ver Ubicación</b-button>
              <b-collapse id="collapse" class="mt-2 col-12">
                <b-card>
                  <gmap-map :center="lugares[(numero*perPage)-perPage-1+i].coordenada" :map-type-id="mapTypeId" :zoom="18">
                    <gmap-marker
                      :position="lugares[(numero*perPage)-perPage-1+i].coordenada"
                      @click="center = item.position"
                    />
                  </gmap-map>
                </b-card>
              </b-collapse>
            </b-col>
          </b-row>
        </b-card>
        <!-- ALINEADO A LA DERECHA -->
        <b-card v-else no-body bg-variant="light" data-aos="slide-right" data-aos-duration="4000000">
          <b-row>
            <!-- SLIDER -->
            <b-col xs="12" md="6">
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
            </b-col>
            <!-- TEXTO -->
            <b-col xs="12" md="6">
              <b-card-body :title="lugares[(numero*perPage)-perPage-1+i].nombre" align="center">
                <b-card-text align="justify">
                  {{ lugares[(numero*perPage)-perPage-1+i].descripcion }}
                </b-card-text>
              </b-card-body>
            </b-col>
            <!-- UBICACIÓN -->
            <b-col xs="12">
              <b-button v-b-toggle="'collapse'" variant="outline-danger" pill class="offset-4 offset-md-8 llegar">Ver Ubicación</b-button>
              <b-collapse id="collapse" class="mt-2 col-12">
                <b-card>
                  <gmap-map :center="lugares[(numero*perPage)-perPage-1+i].coordenada" :map-type-id="mapTypeId" :zoom="18">
                    <gmap-marker
                      :position="lugares[(numero*perPage)-perPage-1+i].coordenada"
                      @click="center = item.position"
                    />
                  </gmap-map>
                </b-card>
              </b-collapse>
            </b-col>
          </b-row>
          <br />
          <br />
        </b-card>
      </div>
      <br />
      <hr />
      <br />
    </div>
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
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ]
    }
  }
}
</script>

<style>
#divlugares {
  /* background-color: #f4f6f8; */
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
</style>
