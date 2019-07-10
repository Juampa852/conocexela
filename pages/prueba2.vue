<template>
<div class="parallax-title">
 <!-- <table id="divv">
    <tr>
      <td>
        <img
        class="image_right"
        src="/main_images/Principal/domingo.jpeg"
        width="300vh"
        height="200vh"
      />
      </td>
      <td>
        <p class="paragraph" align="justify">
        <strong>Domingo Bethancourt Mazariegos</strong> nacido en Quetzaltenango el 20 de dicimebre de 1906, fue un marimbista y compositor guatemalteco. Sus obras para marimba se encuentran entre las más
        <strong>populares de Centro América</strong>, dentro de ella la composición de
        <strong>Ferrocarril de los Altos</strong>, canción dedicada para el entonces primer ferrocarril de
        <strong>Centro América</strong>. Ha tenido una notable
        influencia en el desarrollo del repertorio ligero guatemalteco y de la
        <strong>identidad regional de Quetzaltenango y de toda la República de Guatemala.</strong>
      </p>
      </td>
    </tr>
  </table>
    <div class="col-12 col-md-2 divv">
      <img
        class="image_right"
        src="/main_images/Principal/domingo.jpeg"
        width="300vh"
        height="200vh"
      />
    </div>
    <div class="col-12 col-md-10 divv">
      <p class="paragraph" align="justify">
        <strong>Domingo Bethancourt Mazariegos</strong> nacido en Quetzaltenango el 20 de dicimebre de 1906, fue un marimbista y compositor guatemalteco. Sus obras para marimba se encuentran entre las más
        <strong>populares de Centro América</strong>, dentro de ella la composición de
        <strong>Ferrocarril de los Altos</strong>, canción dedicada para el entonces primer ferrocarril de
        <strong>Centro América</strong>. Ha tenido una notable
        influencia en el desarrollo del repertorio ligero guatemalteco y de la
        <strong>identidad regional de Quetzaltenango y de toda la República de Guatemala.</strong>
      </p>
    </div>-->
    <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
      <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
    </parallax>
  <!--</div>-->
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  }
}
</script>

<style>
.divv{
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
}

.parallax-container {
  position: relative;
}
.parallax-title {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
