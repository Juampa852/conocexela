<template>
  <body>
    <div id="comidas" class="comidas">
      <div class="container">
        <h1 class="text-center p-5">
          Comidas Típicas
          <hr>
        </h1>
        <div class="row">
          <div v-for="(comida, index) in comidas" :key="index" class="col-sm-6 col-lg-4">
            <div class="card">
              <parallax-container class="horizontal-card centered-card">
                <parallax-element class="background-image" :parallax-strength="10" :type="'rotation'">
                  <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    controls
                    img-width="250px"
                    img-height="250px"
                  >
                    <b-carousel-slide v-for="imagen in comida.imagenes" :key="imagen" :img-src="imagen" class="card-img-top imagen" />
                  </b-carousel>
                </parallax-element>
              </parallax-container>
              <div class="card-body">
                <h4 class="card-title">
                  {{ comida.nombre }}
                </h4>
                <p class="card-text" Align="Justify">
                  {{ comida.descripcion }}
                </p>
                <div>
                  <b-button v-b-toggle="'collapse-'+index" variant="outline-danger" pill class="ingredientes offset-md-2">
                    Ver ingredientes
                  </b-button>
                  <b-collapse :id="'collapse-'+index">
                    <br>
                    <h5>Ingredientes</h5>
                    <ul>
                      <li v-for="ingrediente in comida.ingredientes" :key="ingrediente">
                        {{ ingrediente }}
                      </li>
                    </ul>
                  </b-collapse>
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
import JSONcomidas from './comidas.json'

export default {
  data() {
    return {
      comidas: JSONcomidas
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  b-carousel {
    height: 250px;
  }
  hr, .hrcolor {
   height: 0.5px;
   border: 0;
   color: #666;
   background-color:rgb(51, 48, 18);
}
  .card{
    color: white;
    background-color: rgb(0,0,0,0.6);
  }
  h1{
    color: white;
  }
  .imagen {
    width: 100%;
    height: 250px;
  }
  body{
    background-image: url(/fondo5.jpg);
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment: fixed;
  }
</style>
