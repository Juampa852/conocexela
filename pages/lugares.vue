<template>
  <section>
    <Header />
    <PaginaPrincipal />
    <Footer />
  </section>
</template>

<script>
import PaginaPrincipal from '~/components/Lugares/lugares.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
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
