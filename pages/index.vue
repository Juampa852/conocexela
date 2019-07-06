<template>
  <section>
    <Header />
    <PaginaPrincipal />
    <Footer />
  </section>
</template>

<script>
import PaginaPrincipal from '~/components/Principal/PaginaPrincipal.vue'
import Header from '~/pages/header.vue'
import Footer from '~/pages/footer.vue'
export default {
  components: {
    PaginaPrincipal,
    Header,
    Footer
  }
}
</script>
<style>
</style>
