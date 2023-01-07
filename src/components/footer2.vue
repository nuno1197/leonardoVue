<template>
  <v-footer color="white">
    
    <v-row 
    justify="center" 
    > 

    <PopupCreditos /> 
    <PopupSaberMais /> 
    <PopupTermos /> 
    <PopupPrivacidade /> 
    <Popup />

    <v-col 
    cols="12" 
    > 
      <div class="text-center"> 
          <small class="grey--text change-font text-none">© Leonardo, {{this.year}}</small> 
      </div>
    </v-col>
    </v-row>
  
  
  </v-footer>
</template>

<script>
import PopupTermos from './adminPopupTermos.vue'; 
import PopupCreditos from './adminPopupCreditos.vue'; 
import PopupSaberMais from './adminPopupSaberMais.vue'; 
import PopupPrivacidade from './adminPopupPrivacidade.vue';  
import Popup from './adminPopupHelp.vue'
//import DropdownMenu from './DropdownMenu';

export default {
  components: {PopupTermos,PopupCreditos,PopupSaberMais,PopupPrivacidade, Popup},
  data() {
    return {
      year: 2021,
    };
  }, 
  created() {
    this.year = new Date().getFullYear()
  }
}
</script>

<style lang="stylus" scoped>
.change-font {
    font-family: "Arial";
}
</style>