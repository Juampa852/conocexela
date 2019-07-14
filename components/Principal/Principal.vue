<template>
  <body>
    <div class="Field">
      <!--Carousel-->
      <!-- Carousel en modo pantallas grandes (TV o Laptop) -->
      <div v-if="!mobile">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          class="Field__carousel"
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
            <h2>Nuestra gente y sus tradiciones...</h2>
          </b-carousel-slide>

          <b-carousel-slide
            class="Field__slide"
            img-src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
          >
            <h2>¡Arquitectura única!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/CerroelBaul.jpg">
            <h2>¡Paisajes siniguales!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/xela.jpg">
            <h2>¡Vida Nocturna!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/catedral.jpeg">
            <h2>¡Centro de Fe!</h2>
          </b-carousel-slide>
          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/comidas.jpg">
            <h2>¡Encántate por las Shecas!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/dulces.jpg">
            <h2>¡Endúlzate la vida con sus dulces!</h2>
          </b-carousel-slide>
          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Eloteslocos.jpg">
            <h2>¡Alócate por los elotes!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/fuentes.jpg">
            <h2>¡Relájate con sus aguas termales!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Lagunachicabal.jpg">
            <h2>¡Vive el misticismo del Volcán-Laguna!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/parque.jpg">
            <h2>¡Llénate de paz en las tardes quetzaltecas!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/procesion.jpg">
            <h2>Encuéntrate de nuevo...</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/volcano.jpg">
            <h2>Valles y vistas increíbles...</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Quetzaltenango.jpg">
            <h2>Por si te quedas con hambre...</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/Santa.jpg">
            <h2>Los vigilantes de Quetzaltenango...</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/siembra.jpg">
            <h2>Campos fértiles y bondadosos...</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/teatro.jpg">
            <h2>¡La Cuna de la Cultura Hispanoamericana!</h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field__slide" img-src="/main_images/Slider/volcan2.jpg">
            <h2>La cima del vigilante dormido eternamente...</h2>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- Carousel en modo pantallas pequeñas (celulares) -->
      <div v-else class="Field_small">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          class="Field__carousel-small"
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
          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/_DSC0840.JPG">
            <h2 class="small-h2">
              Nuestra gente y sus tradiciones...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide
            class="Field_slide_small"
            img-src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
          >
            <h2 class="small-h2">
              ¡Arquitectura única!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/CerroelBaul.jpg">
            <h2 class="small-h2">
              ¡Paisajes siniguales!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/xela.jpg">
            <h2 class="small-h2">
              ¡Vida Nocturna!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/catedral.jpeg">
            <h2 class="small-h2">
              ¡Centro de Fe!
            </h2>
          </b-carousel-slide>
          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/comidas.jpg">
            <h2 class="small-h2">
              ¡Encántate por las Shecas!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/dulces.jpg">
            <h2 class="small-h2">
              ¡Endúlzate la vida con sus dulces!
            </h2>
          </b-carousel-slide>
          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/Eloteslocos.jpg">
            <h2 class="small-h2">
              ¡Alócate por los elotes!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/fuentes.jpg">
            <h2 class="small-h2">
              ¡Relájate con sus aguas termales!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/Lagunachicabal.jpg">
            <h2 class="small-h2">
              ¡Vive el misticismo del Volcán-Laguna!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/parque.jpg">
            <h2 class="small-h2">
              ¡Llénate de paz en las tardes quetzaltecas!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/procesion.jpg">
            <h2 class="small-h2">
              Encuéntrate de nuevo...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/volcano.jpg">
            <h2 class="small-h2">
              Valles y vistas increíbles...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/Quetzaltenango.jpg">
            <h2 class="small-h2">
              Por si te quedas con hambre...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/Santa.jpg">
            <h2 class="small-h2">
              Los vigilantes de Quetzaltenango...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/siembra.jpg">
            <h2 class="small-h2">
              Campos fértiles y bondadosos...
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/teatro.jpg">
            <h2 class="small-h2">
              ¡La Cuna de la Cultura Hispanoamericana!
            </h2>
          </b-carousel-slide>

          <b-carousel-slide class="Field_slide_small" img-src="/main_images/Slider/volcan2.jpg">
            <h2 class="small-h2">
              La cima del vigilante dormido eternamente...
            </h2>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <!-- Comidas -->
    <div id="comidas" class="comidas">
      <div class="container">
        <h1 class="text-center p-5">
          ConoceXela - Encántate por la ciudad de Quetzaltenango
        </h1>
        <div class="row Content_Field">
          <div v-for="(comida, index) in comidas" :key="index" class="col-12 col-md-12">
            <div v-if="index % 2 === 1">
              <div class="Content_Field_1" data-aos="zoom-in-left" data-aos-duration="4000000">
                <div class="card-body">
                  <p class="card-text" align="Justify">
                    {{ comida.descripcion }}
                  </p>
                </div>
                <div class="card imagen-container-blue">
                  <div v-for="(imagen,index1) in comida.imagenes" :key="index1">
                    <parallax-container class="horizontal-card centered-card">
                      <parallax-element class="background-image" :parallax-strength="-10" :type="'depth'">
                        <img :src="imagen" class="card-img-top imagen">
                      </parallax-element>
                    </parallax-container>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="Content_Field_2" data-aos="zoom-in-right" data-aos-duration="4000000">
                <div class="card-body">
                  <p class="card-text" align="Justify">
                    {{ comida.descripcion }}
                  </p>
                </div>
                <div class="card imagen-container-red">
                  <div v-for="(imagen,index2) in comida.imagenes" :key="index2">
                    <parallax-container class="horizontal-card centered-card">
                      <parallax-element class="background-image" :parallax-strength="-10" :type="'depth'">
                        <img :src="imagen" class="card-img-top imagen">
                      </parallax-element>
                    </parallax-container>
                  </div>
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import JSONcomidas from './principal.json'
export default {
  data() {
    return {
      comidas: JSONcomidas,
      slide: 0,
      sliding: null,
      mobile: null
    }
  },
  beforeMount() {
    this.isMobile()
    // window.addEventListener('resize', this.handleResize)
  },
  /* beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }, */
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    isMobile() {
      if (screen.width < 1000) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    }
    /* handleResize(event) {
      this.isMobile()
      location.reload(true)
      // alert('Resize')
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
b-carousel {
  height: 250px;
}
.card-body{
    color: black;
    font-weight: 900;
}
h1{
  color: white;
}
h2 {
  color: white;
}
.small-h2 {
  font-size: 1.25rem !important;
}
.carousel-h2 {
  font-size: 2.5rem !important;
}
.Field .Field__slide {
  height: 85vh;
  width: 100%;
}
.Field__carousel {
  height: 85vh !important;
  width: 100% !important;
}

.Field_small .Field_slide_small {
  height: 25vh;
  width: 100%;
}
.Field__carousel-small {
  height: 25vh !important;
  width: 100% !important;
}
.imagen {
  width: 45%;
  height: 100%;
  min-width: 250px;
}
.imagen-container-red {
  text-align: center !important;
  background-color: rgb(0,0,0,0);
}
.imagen-container-blue {
  text-align: center !important;
  background-color: rgb(0,0,0,0);
}
.Content_Field {
  border-color: #1d05ad;
  background-color: #ebe9f7;
  background-color: rgb(0,0,0,0);
}
.Content_Field_1 {
  background-color: #f7e9eb;
  background-color: rgba(246, 246, 248, 0.6);
  box-shadow: inset 0 0 30px 1px #8b83f1c0;
  border-radius: 15px;
}
.Content_Field_2 {
  background-color: #f7e9eb;
  background-color: rgba(246, 246, 248, 0.6);
  box-shadow: inset 0 0 30px 1px #f19999a8;
  border-radius: 15px;
}
  body{
    background-image: url(/fondo8.jpg);
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment: fixed;
  }
</style>
