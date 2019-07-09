<template>
  <section>
    <Header />
    <Lugares :numero="currentPage" />
    <b-pagination
      v-model="currentPage"
      align="center"
      :total-rows="rows"
      :per-page="perPage"
      prev-text="Anterior"
      next-text="Siguiente"
    ></b-pagination>
    <Footer />
  </section>
</template>

<script>
import Lugares from '~/components/Lugares/lugares.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
export default {
  components: {
    Lugares,
    Header,
    Footer
  },
  data() {
    return {
      rows: 3,
      perPage: 1,
      currentPage: 1
    }
  }
}
</script>
<style>
</style>
