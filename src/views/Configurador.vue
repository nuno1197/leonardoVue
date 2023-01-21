<template>
    <div id="configurador">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-form ref="form" method="post" enctype="multipart/form-data">
            <h1 class="title">Configurador de skin</h1>
            <v-container>
                <v-row align-content="center" fill-height>
                    <v-col cols="6" md="5">
                        Cor dos Botões
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor do Header
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor do Footer
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor da Navbar
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor de Fundo
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor da Letra
                        <color-picker v-model="selectedColor"></color-picker>
                    </v-col>
                </v-row>
            </v-container>
            <v-btn class="primary" @click="submitForm">Submit</v-btn>
            <!-- <v-btn class="secondary" @click="resetForm">Reset</v-btn> -->
        </v-form>
        </div>
  </template>

<script>
import Header from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
import ColorPicker from '../components/colorPicker.vue'

export default {
    data() { 
    return {
        colorCode: this.$store.getters.skinColor
    }
    },
    components:{
            'appHeader': Header,
            'navDraw':NavDraw,
            'colorPicker': ColorPicker
    }, 
    methods: {
    submitForm() {
    },
    resetForm() {
      this.selectedColor = ''
    }
  }
}
</script>

<style scoped>
    #configurador *{
        box-sizing: border-box;
    }
    #configurador{
        margin: 200px auto;
        max-width: 800px;
        margin-bottom: 80px;
    }
    label {
        color: white;
        padding: 8px;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 15px;
    }
    #bttAdd{
        background-color: "colorCode";
    }

    color-picker {
        background-color: "colorCode";
    }
</style>