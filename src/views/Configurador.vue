<template>
    <div id="configurador">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-card height="180%" width="180%">
            <v-form ref="form" method="post" enctype="multipart/form-data">
            <v-container>
                <v-row>
                <v-col md="5">
                    Cor dos Botões
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                <v-col md="5">
                    Cor do Header
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                <v-col md="5">
                    Cor do Footer
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                <v-col md="5">
                    Cor da Navbar
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                <v-col md="5">
                    Cor de Fundo
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                <v-col md="5">
                    Cor da Letra
                    <color-picker v-model="selectedColor"></color-picker>
                </v-col>
                </v-row>
            </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
import ColorPicker from '../components/colorPicker.vue'

export default {
    data() { return {}},
    components:{
            'appHeader': Header,
            'navDraw':NavDraw,
            'colorPicker': ColorPicker
    },
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
        background-color: v-bind(colorCode);
    }

    color-picker {
        background-color: v-bind(colorCode);
    }
</style>