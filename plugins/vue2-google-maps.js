import Vue from 'vue'
import * as VueGoogleMaps from '../node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnDVxMe8iddvwNzhCWeQL5E7hFYaQYOG0',
    libraries: 'places'
  }
})
