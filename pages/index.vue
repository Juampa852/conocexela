<template>
  <section>
    <Header />
    <Principal />
    <Footer />
  </section>
</template>

<script>
import Principal from '~/components/Principal/Principal.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
export default {
  components: {
    Principal,
    Header,
    Footer
  }
}
</script>
<style>
</style>
