import { createApp } from 'vue'
import App from './views/Login.vue'
//import VueMaterial from 'vue-material'
import '@mdi/font/css/materialdesignicons.css'

import router from './router'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})




const app = createApp(App)



app.use(vuetify).mount('#app')
