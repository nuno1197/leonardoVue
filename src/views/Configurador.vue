<template>
    <body :style="{ 'background-color': bgCode }">
    <div id="configurador">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-form ref="form" method="post" enctype="multipart/form-data">
            <h1 class="title">Configurador de skin</h1>
            <v-container>
                <v-row align-content="center" fill-height>
                    <v-col cols="6" md="5">
                        Cor dos Botões das Tabelas
                        <color-picker v-bind:colorButtons="colorButtons" v-on:update:colorButtons="colorButtons = $event"></color-picker>
                    </v-col>
                    <v-col cols="6" md="5">
                        Cor do Header
                        <color-picker v-bind:colorHeader="colorHeader" v-on:update:colorHeader="colorHeader = $event"></color-picker>
                    </v-col>
                    <!--<v-col cols="6" md="5">
                        Cor do Footer do Login
                        <color-picker v-bind:colorFooter="colorFooter" v-on:update:colorFooter="colorFooter = $event"></color-picker>
                    </v-col>-->
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
            <va-spacer class="spacer" />
            <v-btn class="primary" style="margin-left: 20px; background-color: #B0D7E1;" @click="chillSkin">Ocean Mode</v-btn>
            <v-btn class="primary" style="margin-left: 20px; background-color: #444C5C; color: white;"  @click="warmSkin">Warm Mode</v-btn>
            <v-btn class="primary" style="margin-left: 20px; background-color: #F6A961; color: white;"  @click="fireSkin">Fire Mode</v-btn>
            <!-- <v-btn class="secondary" @click="resetForm">Reset</v-btn> -->
        </v-form>
        </div>
    </body>
  </template>

<script>
import Header from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
import ColorPicker from '../components/colorPicker.vue'


export default {
    data() { 
    return {
        colorButtons: 'white',
        colorHeader: 'white',
        colorNavbar: 'white',
        //colorFooter: 'white',
        colorBackground: 'white',
        colorLetter:'white',
        colorCode: this.$store.getters.skinColor,
        navCode:this.$store.getters.topnavColor,
        bttCode:this.$store.getters.bttColor,
        navBarCode:this.$store.getters.navBarColor,
        //footerCode:this.$store.getters.footerColor
        bgCode:this.$store.getters.backgroundColor,
        letterCode:this.$store.getters.letterColor,
    }
    },
    components:{
            'appHeader': Header,
            'navDraw':NavDraw,
            'colorPicker': ColorPicker
    },
    watch: {
        colorButtons: function (newValue) {
            this.$store.commit('toggleBttColor', newValue);
            //console.log("bttcode",this.bttCode,"aqui",newValue);

        },
        colorHeader: function(newValue){
            this.$store.commit('toggleTopNavColor', newValue)
            //console.log(this.navCode);
                
        },
        colorNavbar: function(newValue){
            this.$store.commit('toggleNavBarColor', newValue)
            //console.log(this.newValue)   
        },
        /*colorFooter: function (newValue) {
            this.$store.commit('toggleFooterColor', newValue)
            console.log(this.footerCode)

        }*/
        colorBackground: function(newValue){
            this.$store.commit('toggleBackgroundColor', newValue)
            //console.log(this.newValue)   
        },
        colorLetter: function(newValue){
            this.$store.commit('toggleLetterColor', newValue)
            
            
            //console.log(this.newValue)   
        },
    },
    computed:{
        bgCode: {
        get () { return this.$store.getters.backgroundColor },
        set (v) { return this.$store.commit('toggleBackgroundColor', v) }
        }


    },
    methods: {
    submitForm() {
        this.$store.commit('toggleBttColor', '#2A3F54');
        this.$store.commit('toggleTopNavColor', '#2A3F54')
        this.$store.commit('toggleNavBarColor', '#2A3F54')
        this.$store.commit('toggleBackgroundColor', '#FFFFFF')
        this.$store.commit('toggleLetterColor', '#000000')
        //atualizar a página para aplicar cor
       // location.reload()
    },
    chillSkin(){

        this.$store.commit('toggleBttColor', '#F1802D');
        this.$store.commit('toggleTopNavColor', '#123740')
        this.$store.commit('toggleNavBarColor', '#549AAB')
        this.$store.commit('toggleBackgroundColor', '#B0D7E1')
        this.$store.commit('toggleLetterColor', '#F1802D')

    },
    warmSkin(){

    this.$store.commit('toggleBttColor', '#E1B16A');
    this.$store.commit('toggleTopNavColor', '#444C5C')
    this.$store.commit('toggleNavBarColor', '#CE5A57')
    this.$store.commit('toggleBackgroundColor', '#78A5A3')
    this.$store.commit('toggleLetterColor', '#E1B16A')

    },
    fireSkin(){

    this.$store.commit('toggleBttColor', '#583168');
    this.$store.commit('toggleTopNavColor', '#F6A961')
    this.$store.commit('toggleNavBarColor', '#E66A5E')
    this.$store.commit('toggleBackgroundColor', '#BB405C')
    this.$store.commit('toggleLetterColor', '#583168')

    },
    resetForm() {
      this.selectedColor = ''
    }
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
        background-color: "colorCode";
    }

    color-picker {
        background-color: "colorCode";
    }
.v-application__wrap {
    background-color: v-bind(bgCode);
  }
</style>