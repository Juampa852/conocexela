<template>
  <body>
    <div id="comidas" class="comidas">
      <div class="container">
        <h1 class="text-center p-5">
          Comidas Típicas
        </h1>
        <div class="row">
          <div v-for="(comida, index) in comidas" :key="index" class="col-sm-6 col-lg-4">
            <div class="card">
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

              <div class="card-body">
                <h5 class="card-title">
                  {{ comida.nombre }}
                </h5>
                <p class="card-text" Align="Justify">
                  {{ comida.descripcion }}
                </p>
                <div>
                  <b-button v-b-toggle="'collapse-'+index" variant="outline-danger" pill class="ingredientes offset-md-2"> Ver ingredientes
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

  .imagen {
    width: 100%;
    height: 250px;
  }
  body {
    background-color: #dfdfdf;
  }
</style>
