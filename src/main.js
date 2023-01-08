import { createApp } from 'vue'
import App from './App.vue'
//import VueMaterial from 'vue-material'
import '@mdi/font/css/materialdesignicons.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import router from './router'
import store from './store'
//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

const vuetify = createVuetify({
  components,
  directives,
  labs
})




const app = createApp(App)


app.use(router)
app.use(store)
app.use(vuetify)
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
