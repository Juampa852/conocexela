<template>
  <section>
    <Header />
    <div class="text-center">
      <br>
      <h1>Lugares Turísticos</h1>
      <br />
      <hr />
    </div>
    <b-pagination
      v-model="currentPage"
      align="center"
      :total-rows="rows"
      :per-page="perPage"
      prev-text="Anterior"
      next-text="Siguiente"
    ></b-pagination>
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
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'
import Lugares from '~/components/Lugares/lugares.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
Vue.use(VueMouseParallax)
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
