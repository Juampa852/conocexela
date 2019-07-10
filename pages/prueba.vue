<template>
  <parallax-container class="horizontal-card centered-card">

    <parallax-element class="background-image" :parallaxStrength="-10" :type="'depth'">
        <img src="/imagenes-comidas/atol-de-elote-2.jpg" alt="">
    </parallax-element>
  </parallax-container>
</template>

<script>
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'
Vue.use(VueMouseParallax)
export default {
}
</script>
