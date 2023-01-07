<template>
    <v-footer color="white">
      <v-row justify="center"> 
        <PopupCreditos /> 
        <PopupTermos />
        <PopupSaberMais />
        <PopupPrivacidade />
        <Popup />
        <v-col cols="12"> 
          <div class="text-center"> 
            <small class="grey--text change-font text-none">© Leonardo</small> 
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
import Popup from './adminPopupHelp.vue';



export default {
  components: {PopupCreditos,PopupTermos,PopupSaberMais,PopupPrivacidade,Popup},
};
</script>

<style lang="stylus" scoped>
.change-font {
  font-family: "Arial";
}
</style>
