<template>
  <body>
    <div class="container">
      <div class="text-center">
        <h1>Cultura</h1>
      </div>
      <br>
       <b-pagination
        align="center"
        v-model="actual"
        :total-rows="total"
        :per-page="porPagina"
        prev-text="Anterior"
        next-text="Siguiente"
      >
      </b-pagination>
      <div v-for="i in porPagina" :key=i>
        <municipio :id=i-1+(actual-1)*porPagina></municipio>
      </div>
      <b-pagination
        align="center"
        v-model="actual"
        :total-rows="total"
        :per-page="porPagina"
        prev-text="Anterior"
        next-text="Siguiente"
      >
      </b-pagination>
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
