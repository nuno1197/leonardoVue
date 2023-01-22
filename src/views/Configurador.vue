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
                        <color-picker v-bind:colorButtons="colorButtons" v-on:update:colorButtons="colorButtons = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor do Header
                        <color-picker v-bind:colorHeader="colorHeader" v-on:update:colorHeader="colorHeader = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor do Footer
                        <color-picker v-bind:colorFooter="colorFooter" v-on:update:colorFooter="colorFooter = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor da Navbar
                        <color-picker v-bind:colorNavbar="colorNavbar" v-on:update:colorNavbar="colorNavbar = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor de Fundo
                        <color-picker v-bind:colorBackground="colorBackground" v-on:update:colorBackground="colorBackground = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor da Letra
                        <color-picker v-bind:colorLetter="colorLetter" v-on:update:colorLetter="colorLetter = $event"></color-picker>
                    </v-col>
                </v-row>
            </v-container>
            <v-btn class="primary" @click="submitForm">Voltar ao Original</v-btn>
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
        colorCode: this.$store.getters.skinColor,
        colorButtons: 'white',
        colorHeader: 'white',
        navCode:this.$store.getters.topNavColor,
        bttColor:this.$store.getters.bttColor
    }
    },
    components:{
            'appHeader': Header,
            'navDraw':NavDraw,
            'colorPicker': ColorPicker
    },
    watch: {
        colorButtons: function (newValue) {
            console.log("colorButtons", newValue)
        },
        colorHeader: function(newValue){
            this.$store.commit('toggleTopNavColor', newValue)
            console.log(this.navCode);
                
           
        }

    },
    methods: {
    submitForm() {
        //atualizar a página para aplicar cor
        location.reload()
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