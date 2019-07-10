<template>
  <section>
    <Header />
    <Principal />
    <Footer />
  </section>
</template>

<script>
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'
import Principal from '~/components/Principal/Principal.vue'
import Header from '~/assets/header'
import Footer from '~/assets/footer.vue'
Vue.use(VueMouseParallax)
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
