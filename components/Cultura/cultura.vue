<template lang="html">
  <body>
    <div class="container">
      <div class="mt-5 mr-5 pt-5 row ">
        <!--Menu vertical-->
        <div class="col-3" data-spy="scroll" data-target="#mainNav">
          <nav id="mainNav">
            <ul class="nav flex-column nav-stacked">
              <li class="nav-item">
                <a class="nav-link active" href="#divAlmolonga">Almolonga</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#divCantel">Cantel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#divCoatepeque">Coatepeque</a>
              </li>
            </ul>
          </nav>
        </div>

        <!--Informacion-->
        <div class="col-9" data-spy="scroll" data-target="#mainNav">
          <div id="divAlmolonga">
            <h1 class="text-center">
              Almolonga
            </h1>
            <div class="row">
              <!-- Texto-Imagen -->
              <div class="col-12 col-md-6">
                <h2 class="text-center">
                  Historia
                </h2>
                <p align="justify">
                  El nombre de Almolonga significa lugar donde mana el agua, en
                  lengua náhuatl. El municipio de Almolonga tiene una población de
                  11,001 habitantes. Alrededor del 20% de la población es rural y
                  el 80% habita en el área urbana
                </p>
              </div>
              <img
                src="imagenes-municipios/almolonga2.jpg"
                width="300"
                height="200"
                alt=""
                class="img-fluid ml-5"
              >

              <!-- Imagen-Texto -->
              <img
                src="imagenes-municipios/traje1.jpg"
                width="300"
                height="200"
                alt=""
                class="img-fluid mr-5"
              >
              <div class="col-12 col-md-6 mt-5">
                <h2 class="text-center">
                  Traje Tipico
                </h2>
                <p align="justify">
                  Resaltan los colores y disposición de bandas geométricas en las
                  que se alternan composiciones de colores con diseños oblicuos
                  que forman puntas de flechas o relámpagos.
                </p>
              </div>
            </div>
          </div>

          <div id="divCantel">
            <h1 class="text-center mt-5">
              Cantel
            </h1>
            <div class="row">
              <!-- Texto-Imagen -->
              <div class="col-12 col-md-6">
                <h2 class="text-center">
                  Historia
                </h2>
                <p align="justify" class="mb-3">
                  Fue originalmente fundado como el poblado de «Nuestra Señora de
                  la Asunción de Cantel» debido a que hubo una aparición de una
                  imagen de la Virgen de la Asunción en un tronco en el lugar; por
                  su parte, «Cantel» proviene de los términos náhuatl «can» y
                  «t’el», que significan «serpiente» y «cueva». Celebra su fiesta
                  titular el 15 de agosto en honor a su patrona la Virgen de la
                  Asunción
                </p>
              </div>
              <img
                src="imagenes-municipios/cantel1.jpg"
                width="300"
                height="200"
                alt=""
                class="img-fluid ml-5"
              >
              <br><br>
              <!-- Imagen-Texto -->
              <img
                src="imagenes-municipios/cantel.jpg"
                width="300"
                height="50"
                alt=""
                class="img-fluid mr-5"
              >
              <div class="col-12 col-md-6 mt-5">
                <h2 class="text-center">
                  Economia
                </h2>
                <p align="justify">
                  Cantel es una empresa con más de 100 años de experiencia en la
                  industria textil. La compañía fue fundada en éste municipio y
                  fue la primera fábrica de textiles en Guatemala. Cantel se
                  estableció en una zona con una mano de obra poseedora de un
                  conocimiento milenario en tejidos e hilados y desde entonces
                  hemos logrado estar presentes en los hogares guatemaltecos
                  ofreciendo productos textiles de la más alta calidad.
                </p>
              </div>
              <br>
            </div>
          </div>

          <div id="divCoatepeque">
            <h1 class="text-center mt-5">
              Coatepeque
            </h1>
            <div class="row">
              <!-- Texto-Imagen -->
              <div class="col-12 col-md-6">
                <h2 class="text-center">
                  Historia
                </h2>
                <p align="justify" class="mb-3">
                  Coatepeque (del náhuatl, significa «en el cerro de la
                  serpiente»). Tardó aproximadamente ochenta años en evolucionar
                  de ejido a comunidad, y luego a villorrio (poblado pequeño);
                  para finalmente alcanzar la categoría de villa, se mantuvo como
                  villa durante mucho tiempo hasta que fue reconocido como
                  municipio el 6 de noviembre de 1951.
                </p>
              </div>
              <img
                src="imagenes-municipios/coatepeque1.jpg"
                width="300"
                height="200"
                alt=""
                class="img-fluid ml-5"
              >
              <br><br>
              <!-- Imagen-Texto -->
              <img
                src="imagenes-municipios/feriacoatepeque.jpg"
                width="275"
                height="150"
                alt=""
                class="img-fluid mr-5 mt-3"
              >
              <div class="col-12 col-md-6 mt-5">
                <h2 class="text-center">
                  Feria Titular
                </h2>
                <p align="justify">
                  Se celebra el 15 de marzo de cada año, conocida como la feria de
                  verano y es una de las más grandes de la región debido a que hay
                  muchos eventos como desfiles, juegos mecánicos y eventos
                  deportivos. La segunda feria titular es el 25 de julio de cada
                  año, en honor a su patrono, Santiago Apóstol.
                </p>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
#mainNav {
  position: fixed;
  top: 100px;
}
template {
  position: relative;
}
b-carousel {
  height: 200px;
}
.borde {
  border: 1px #000;
}
.fondo {
  background: blue;
}
.imagen {
  width: 90%;
  height: 200px;
}
body{
  background-image: url(/fondo1.jpg);
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment: fixed;
}
</style>
