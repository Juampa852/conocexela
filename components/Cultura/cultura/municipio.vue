<template>
  <body>
    <div id="cultura" class="container">
      <div class="text-center p-5">
        <h1>Cultura</h1>
        <hr>
      </div>
      <b-pagination
        v-model="actual"
        align="center"
        :total-rows="total"
        :per-page="porPagina"
        prev-text="Anterior"
        next-text="Siguiente"
      />
      <div v-for="i in porPagina" :key="i">
        <municipio :id="i-1+(actual-1)*porPagina" />
      </div>
      <b-pagination
        v-model="actual"
        align="center"
        :total-rows="total"
        :per-page="porPagina"
        prev-text="Anterior"
        next-text="Siguiente"
      />
    </div>
  </body>
</template>
<script>
import municipio from '~/components/template-info.vue'
export default {
  components: { municipio },
  data() {
    return {
      actual: 1,
      porPagina: 2,
      total: 5
    }
  }
}
</script>
<style>
  h1{
    color: white
  }

  body{
    background-image: url(/fondo.jpg);
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment: fixed;
  }
</style>
