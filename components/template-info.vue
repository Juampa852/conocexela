<template>
  <div v-if="id<municipios.length" id="divcultura" class="container">
    <div class="container">
      <hr>
      <!--<div class="row"><button type="button" class="btn btn-primary">Volver</button></div>-->
      <h2 align="center">
        {{ municipios[id].nombre }}
      </h2>
      <hr><br>
    </div>
    <div class="text-center">
      <div v-for="(tradicion, index) in municipios[id].tradiciones" :key="index">
        <div v-if="index % 2 === 0">
          <div class="row roww" data-aos="zoom-in-left" data-aos-duration="4000000">
            <!-- Conteido texto -->
            <div class="col-12 col-md-6">
              <h3 class="text-center">
                {{ tradicion.nombre }}
              </h3>
              <p v-for="(parrafo,index1) in tradicion.contenido" :key="index1" align="justify">
                {{ parrafo }}
              </p>
            </div>
            <!-- VIDEO DERECHA -->
            <div v-if="tradicion.video" class="col-12 col-md-6">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src="tradicion.media" allowfullscreen />
              </div>
            </div>
            <!-- SLIDER  DERECHA-->
            <div v-else class="col-12 col-md-6">
              <parallax-container class="horizontal-card centered-card">
                <parallax-element class="background-image" :parallax-strength="-10" :type="'depth'">
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
                </parallax-element>
              </parallax-container>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row roww" data-aos="zoom-in-right" data-aos-duration="4000000">
            <!-- VIDEO IZQUIERDA -->
            <div v-if="tradicion.video" class="col-12 col-md-6">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src="tradicion.media" allowfullscreen />
              </div>
            </div>
            <!-- SLIDER  izquierda-->
            <div v-else class="col-12 col-md-6">
              <parallax-container class="horizontal-card centered-card">
                <parallax-element class="background-image" :parallax-strength="-10" :type="'depth'">
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
                </parallax-element>
              </parallax-container>
            </div>
            <!-- Conteido texto -->
            <div class="col-12 col-md-6">
              <h3 class="text-center">
                {{ tradicion.nombre }}
              </h3>
              <p v-for="(parrafo,index3) in tradicion.contenido" :key="index3" align="justify">
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
import JSONcultura from './Cultura/cultura-muni.json'
export default {
  props: {
    // eslint-disable-next-line
    id: Number
  },
  data() {
    return {
      municipios: JSONcultura.municipios
    }
  }
}
</script>
<style>
  h2, h3, p {
    color:white
  }
  hr, .hrcolor {
   height: 1px;
   border: 0;
   color: #FFF;
   background-color:#FFF;
}
.roww{
  background-color:rgba(0,0,0,0.5);
}
</style>
