<template>
  <section>
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
        img-width=1024;
        img-height=500;
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">

        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/_DSC0840.JPG">
          <h1>Nuestra gente y sus tradiciones...</h1>
        </b-carousel-slide>

        <b-carousel-slide
          class="Field__slide"
          img-src="https://aprende.guatemala.com/wp-content/uploads/2017/08/Xela.jpg">
          <h1>¡Arquitectura única!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/CerroelBaul.jpg">
          <h1>¡Paisajes siniguales!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/catedral.jpeg">
          <h1>¡Centro de Fe!</h1>
        </b-carousel-slide>
        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/comidas.jpg">
          <h1>¡Encántate por las Shecas!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/dulces.jpg">
          <h1>¡Endúlzate la vida con sus dulces!</h1>
        </b-carousel-slide>
        <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Eloteslocos.jpg">
          <h1>¡Alócate por los elotes!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/fuentes.jpg">
          <h1>¡Relájate con sus aguas termales!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Lagunachicabal.jpg">
          <h1>¡Vive el misticismo del Volcán-Laguna!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/parque.jpg">
          <h1>¡Llénate de paz en las tardes quetzaltecas!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/procesion.jpg">
          <h1>Encuéntrate de nuevo...</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/volcano.jpg">
          <h1>Valles y vistas increíbles...</h1>
        </b-carousel-slide>

          <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Quetzaltenango.jpg">
          <h1>Por si te quedas con hambre...</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/Santa.jpg">
          <h1>Los vigilantes de Quetzaltenango...</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/siembra.jpg">
          <h1>Campos fértiles y bondadosos...</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/teatro.jpg">
          <h1>¡La Cuna de la Cultura Hispanoamericana!</h1>
        </b-carousel-slide>

         <b-carousel-slide
          class="Field__slide"
          img-src="/main_images/Slider/volcan2.jpg">
          <h1>La cima del vigilante dormido eternamente...</h1>
        </b-carousel-slide>

      </b-carousel>
    </div>
    <!--Content-->
    <div id="main" class="Content">
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/asdf"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          <strong>Quetzaltenango</strong>, es una ciudad guatemalteca ubicada en el departamento del mismo nombre, también llamada popularmente <strong>"Xelajú"</strong> o simplemente <strong>"Xela"</strong> (shela).
          Así mismo, es la segunda ciudad más importante de Guatemala, a 206 km al noroeste de la Ciudad de Guatemala. La ciudad se encuentra ubicada en un valle montañoso
          en el altiplano occidental de Guatemala con una altitud media sobre el nivel del mar de <strong> 2333 msnm</strong>.
        </p>
      </div>
      <div class=Content_Field_right data-aos="fade-down-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image_right"
            src="/main_images/Principal/templo.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Es la cabecera del departamento de Quetzaltenango, que tiene <strong>1953 km²</strong>, equivalentes al 1,8 % del territorio nacional. Quetzaltenango limita al norte con el
          departamento de Huehuetenango, al este con los departamentos de Totonicapán y Sololá, al sur con los departamentos de Retalhuleu y Suchitepéquez y al oeste
          con el departamento de San Marcos. Sus principales idiomas son el <strong>castellano, mam y k’iche’</strong>.
        </p>
      </div>
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/conquista.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Después de librar una dura batalla los españoles en el área sur de Guatemala, se dirigieron río arriba internándose en la Sierra Madre y llegaron hacia el
          valle fértil de Quetzaltenango, en el centro del reino k'iche'. Los españoles se acercaron a la ciudad de Xelajú. Después de una dura batalla el príncipe
          quiché <strong>Tecún Umán</strong> murió en la batalla cerca de Olintepeque, al norte de Quetzaltenango. Para entonces el <strong>15 de mayo de 1524</strong> se fundó la ciudad.
        </p>
      </div>
      <div class=Content_Field_right data-aos="fade-down-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image_right"
            src="/main_images/Principal/domingo.jpeg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          <strong>Domingo Bethancourt Mazariegos</strong> nacido en Quetzaltenango el 20 de dicimebre de 1906, fue un marimbista y compositor guatemalteco. Sus obras para marimba se encuentran entre las más
          <strong>populares de Centro América</strong>, dentro de ella la composición de <strong>Ferrocarril de los Altos</strong>, canción dedicada para el entonces primer ferrocarril de <strong>Centro América</strong>. Ha tenido una notable
          influencia en el desarrollo del repertorio ligero guatemalteco y de la <strong>identidad regional de Quetzaltenango y de toda la República de Guatemala.</strong>
        </p>
      </div>
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/arco.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          El <strong>2 de febrero de 1838</strong>, en la ciudad de Quetzaltenango, un grupo secesionista liberal fundó el independiente <strong>Sexto Estado de Los Altos</strong> el cual pretendió independizarse
          de Guatemala. Este estado estaba constituido por los modernos departamentos de Quetzaltenango, Huehuetenango, San Marcos, Totonicapán y Sololá y era donde se aglutinaban
          los más importantes criollos miembros del <strong>Partido Liberal de Guatemala</strong> y los enemigos liberales del régimen conservador.
        </p>
      </div>
      <div class=Content_Field_right data-aos="fade-down-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image_right"
            src="/main_images/Principal/pacop.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          <strong>Paco Pérez</strong>, huehueteco de nacimiento pero creador del popular vals <strong>Luna de Xelajú</strong>, canción representativa de Quetzaltenango, establecida como el <strong> himno oficial</strong> de
          la ciudad de Quetzaltenango y el <strong>segundo himno nacional de Guatemala</strong>, con la cual la ciudad se ha dado a conocer a nivel mundial gracias al cover de esta canción por varios artistas de talla mundial.
        </p>
      </div>
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/efrain.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          <strong>Efraín Enrique Recinos Valenzuela</strong>, nacido en Quetzaltenango el 15 de mayo de 1928. Fue un ingeniero, urbanista, pintor, escultor, muralista, escenógrafo, inventor  hasta el día de su fallecimiento, con aún
          proyectos arquitectónicos en desarrollo, una de sus obras más especiales es el conjunto del <strong>Centro Cultural Miguel Ángel Asturias</strong>, encargándose de su diseño y construcción y cabe resaltar que su intención
          con esta construcción fue apegarse al <strong>paisaje de volcanes y cielo azul</strong> de Guatemala.
        </p>
      </div>
      <div class=Content_Field_right data-aos="fade-down-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image_right"
            src="/main_images/Principal/xelaju.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
         Actualmente la ciudad de Quetzaltenango, es <strong>la segunda ciudad en importancia en Guatemala</strong>, destacada por la gran cantidad de escuelas, colegios, centros hospitalarios y universidades,
         siendo hoy día <strong>centro cultural</strong> del occidente del país. Así mismo en la ciudad hay gran cantidad de escuelas de español, a las que asisten personas de muchos países del mundo, principalmente
         de México y E.U.A.
        </p>
      </div>
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/jacobo.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
         <strong>Juan Jacobo Árbenz Guzmán</strong>, nacido en Quetzaltenango el 14 de septiembre de 1913, reconocido como <strong>"el soldado del pueblo"</strong> fue un militar y político guatemalteco, ministro de la Defensa Nacional y presidente de Guatemala (1951-1954). Perteneció
         al grupo de militares que protagonizaron la <strong>Revolución de 1944.</strong> Árbenz basó su gobierno en objetivos fundamentales sobresaliendo el convertir a Guatemala en un país económicamente independiente y en un país moderno
         y capitalista. El 27 de junio de 1954 fue <strong>derrocado</strong> por un golpe de Estado dirigido por el Gobierno de Estados Unidos, con el patrocinio de la UFC y ejecutado por la CIA.
        </p>
      </div>
      <div class=Content_Field_right data-aos="fade-down-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image_right"
            src="/main_images/Principal/complejo.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          Se imparten excursiones <strong>ecológicas y turismo de aventura</strong> pero también la ciudad tiene hoy día vida nocturna, concentrada en parte de su centro histórico, en donde se puede degustar
          de comida y bebida nacional e internacional, en sus diversos restaurantes, bares y centros nocturnos En muchos municipios de este departamento se encuentran tiendas artesanales
          con una gran diversidad de artículos artesanales.
        </p>
      </div>
      <div class=Content_Field data-aos="zoom-in-left" data-aos-duration="4000000">
        <figure>
          <img
            class="image"
            src="/main_images/Principal/rr.jpg"
            width="300vh"
            height="200vh"
          />
        </figure>
        <p class="paragraph" align="justify">
          <strong>Rodolfo Robles Valverde</strong>, nacido en  Quetzaltenango el  14 de enero de 1878 fue un renombrado filántropo, médico y científico guatemalteco que descubrió la <strong> oncocercosis.</strong> El Dr. Rodolfo Robles Valverde
          es uno de los verdaderos genios de la medicina guatemalteca, es recordado por el descubrimiento de la causada <strong>“ceguera de la costa”</strong>, ocasionada por las filarias de la onchoerca volvulus, enfermedad hasta
          entonces solo reconocida en África, la que ahora justamente se le conoce como la <strong>enfermedad de Robles</strong> en su honor.
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
  height: 100vh;
}
.Field__carousel {
  height: 100vh;
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
