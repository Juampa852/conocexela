<template>
  <section>
    <body>
    <div class="Field">
      <!--Carousel-->
      <b-carousel
        id="carousel-1"
        class="Field__carousel"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-width="1024;"
        img-height="500;"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/_DSC0840.JPG">
          <h1>Nuestra gente y sus tradiciones...</h1>
        </b-carousel-slide>

        <b-carousel-slide
          class="Field__slide"
          img-src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
        >
          <h1>¡Arquitectura única!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/CerroelBaul.jpg">
          <h1>¡Paisajes siniguales!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/xela.jpg">
          <h1>¡Vida Nocturna!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/catedral.jpeg">
          <h1>¡Centro de Fe!</h1>
        </b-carousel-slide>
        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/comidas.jpg">
          <h1>¡Encántate por las Shecas!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/dulces.jpg">
          <h1>¡Endúlzate la vida con sus dulces!</h1>
        </b-carousel-slide>
        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Eloteslocos.jpg">
          <h1>¡Alócate por los elotes!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/fuentes.jpg">
          <h1>¡Relájate con sus aguas termales!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Lagunachicabal.jpg">
          <h1>¡Vive el misticismo del Volcán-Laguna!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/parque.jpg">
          <h1>¡Llénate de paz en las tardes quetzaltecas!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/procesion.jpg">
          <h1>Encuéntrate de nuevo...</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/volcano.jpg">
          <h1>Valles y vistas increíbles...</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Quetzaltenango.jpg">
          <h1>Por si te quedas con hambre...</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Santa.jpg">
          <h1>Los vigilantes de Quetzaltenango...</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/siembra.jpg">
          <h1>Campos fértiles y bondadosos...</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/teatro.jpg">
          <h1>¡La Cuna de la Cultura Hispanoamericana!</h1>
        </b-carousel-slide>

        <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/volcan2.jpg">
          <h1>La cima del vigilante dormido eternamente...</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Comidas -->
    <div id="comidas" class="comidas">
      <div class="container">
        <h1 class="text-center p-5">Comidas Típicas</h1>
        <div class="row Content_Field">
          <div v-for="(comida, index) in comidas" :key="index" class="col-12 col-md-12">
            <div v-if="index % 2 === 1">
              <div class="Content_Field" data-aos="zoom-in-left" data-aos-duration="4000000">
                <div class="card-body">
                  <p class="card-text" align="Justify">{{ comida.descripcion }}</p>
                </div>
                <div class="card imagen-container">
                <div v-for="(imagen,index) in comida.imagenes" :key="index">
                  <img :src="imagen" class="card-img-top imagen" />
                </div>
              </div>
              </div>
            </div>
            <div v-else>
              <div class="Content_Field_right" data-aos="fade-down-left" data-aos-duration="4000000">
                <div class="card-body">
                  <p class="card-text" align="Justify">{{ comida.descripcion }}</p>
                </div>
                <div class="card imagen-container-red">
                <div v-for="(imagen,index) in comida.imagenes" :key="index">
                  <img :src="imagen" class="card-img-top imagen" />
                </div>
              </div>
            </div>
              </div>
            <br />
          </div>
        </div>
      </div>
    </div>
    </body>
  </section>
</template>

<script>
import JSONcomidas from './comidas.json'
export default {
  data() {
    return {
      comidas: JSONcomidas,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
b-carousel {
  height: 250px;
}
.Field .Field__slide {
  height: 85vh;
  width: 100%;
}
.Field__carousel {
  height: 85vh !important;
  width: 100% !important;
}
.Field__carousel-small {
  height: 85% !important;
  width: 100% !important;
}
.imagen {
  width: 45%;
  height: 100%;
  min-width: 250px;
}
.imagen-container {
  text-align: center !important;
  background-color: #ebe9f7;
  background: linear-gradient(#ebe9f7, #ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff;
}
.imagen-container-red {
  text-align: center !important;
  background-color: #f7e9eb;
  background: linear-gradient(#f7e9eb, #ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff;
}
.Content_Field {
  border-color: #1d05ad;
  background-color: #ebe9f7;
  background: linear-gradient(#ebe9f7, #ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff;
}
.Content_Field_right {
  border-color: #b51029;
  background-color: #f7e9eb;
  background: linear-gradient(#f7e9eb, #ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff;
}
</style>
