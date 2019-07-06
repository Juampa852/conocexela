<template>
  <section>
    <div class="Field">
      <!--Carousel-->
      <b-carousel
        id="carousel-1"
        class="Field__carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width=1024;
        img-height=500;
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">

        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/_DSC0840.JPG">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          class="Field__slide"
          img-src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg">
          <h1>Hello world 2!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/catedral.jpeg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/CerroelBaul.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>
        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/comidas.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/dulces.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>
        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Eloteslocos.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/fuentes.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Lagunachicabal.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/parque.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/procesion.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

          <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Quetzaltenango.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Santa.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/siembra.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/teatro.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/volcan2.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/volcano.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!--Content-->
    <div id="main" class="Content">
      <div class=Content_Field>
        <figure>
          <img
            class="image"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field_right>
        <figure>
          <img
            class="image_right"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field>
        <figure>
          <img
            class="image"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field_right>
        <figure>
          <img
            class="image_right"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field>
        <figure>
          <img
            class="image"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field_right>
        <figure>
          <img
            class="image_right"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field>
        <figure>
          <img
            class="image"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field_right>
        <figure>
          <img
            class="image_right"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
      <div class=Content_Field>
        <figure>
          <img
            class="image"
            src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Quetzaltenango, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente "Xelajú" o simplemente "Xela" (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de 2333 msnm.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
<style>
.Field .Field__slide{
  height: 90vh;
}
.Field__carousel {
  height: 90vh;
}
.Content {
  padding: 7vh;
}
.Content_Field {
  height:33vh;
  float:none;
  border-left-style: solid;
  border-color: #1d05ad;
  background-color: #ebe9f7;
  background: linear-gradient( #ebe9f7,#ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff
}
.Content_Field_right {
  height:33vh;
  float:none;
  border-right-style: solid;
  border-color: #b51029;
  background-color: #f7e9eb;
  background: linear-gradient(#f7e9eb,#ffffff);
  box-shadow: inset 0 0 15px 10px #ffffff
}
.image {
  float:left;
  padding: 1vh;
}
.image_right {
  float:right;
  padding: 1vh;
}
.paragraph {
  margin: 0%;
  padding: 9vh 20vh 9vh 20vh;
}
</style>
