<template>
  <section>
    <Header />
    <PaginaPrincipal />
    <Footer />
  </section>
</template>

<script>
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'
import PaginaPrincipal from '~/components/Lugares/lugares.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
Vue.use(VueMouseParallax)
export default {
  components: {
    PaginaPrincipal,
    Header,
    Footer
  }
}
</script>
