<template>
    <div id="questoes" :style="{ 'background-color': bgCode }">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-toolbar :style="{ 'background-color': bgCode }" style="padding-top:100px;">
            <v-toolbar-title :style="{ 'color': letterCode }" style="font-weight: bold;">Questões</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-text-field class="mb-3 mr-3"
                v-model="searchValue" 
                clearable 
                label="Pesquisa"
                variant="underlined"
                append-inner-icon="mdi-magnify"
                hide-details
                :style="{ 'color': letterCode }"
            ></v-text-field>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">    
                <v-btn id="bttAdd" v-bind="attrs" v-on="on" class="white--text mr-4" color="white">
                    <v-icon>mdi-text-box-plus</v-icon>
                </v-btn>                    
                </template>
            <span>Criar Questão</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">    
                <v-btn id="bttAdd" v-bind="attrs" v-on="on" class="white--text mr-4" color="white" >
                    <v-icon>mdi-printer</v-icon>
                </v-btn>                    
                </template>
            <span>Imprimir</span>
            </v-tooltip>
        </v-toolbar>
        <v-row dense align-self="center" justify="center">
            <v-col cols="12" sm="12">
                <EasyDataTable table-class-name="customize-table" header-text-direction="center" body-text-direction="center"
                    :headers="headers"
                    :items="items"
                    alternating
                    :search-value="searchValue"
                    :sort-by="sortBy"
                    :sort-type="sortType"

                >
                <template #item-opcoes="item">
                    <div class="operation-wrapper">
                        <v-icon @click="" v-bind:title="tooltip1">mdi-eye</v-icon>
                        <v-icon @click="" v-bind:title="tooltip2">mdi-pencil</v-icon>
                        <v-icon @click="" v-bind:title="tooltip3">mdi-delete</v-icon>
                    </div>
                </template>
                </EasyDataTable>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import AppHeader from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
//import UserForm from '../components/userForm.vue'

export default {
    data(){
        return{
            colorCode: this.$store.getters.skinColor,
            bttCode:this.$store.getters.bttColor,
            navCode:this.$store.getters.topnavColor,
            bgCode:this.$store.getters.backgroundColor,
            letterCode:this.$store.getters.letterColor,
            search:'',
            dialog: false,
            ajuda:'questoes',
            value:'',
            alunos:[],
            errors:[],
            editedIndex: -1,
            editedItem: {
                _id: '',
                name: '',
                email: '',
                tip: ''
            },
            userPic:'',
            picDialog:false,
            cv:'',
            cvDialog:false,
            noCVDialog:false,
            noFoto: false,
            pageCount:0,
            currentPage:0,
            deleteDialog:false,
            tempValue:{},
            page:1,
            tooltip1: 'Ver',
            tooltip2: 'Editar',
            tooltip3: 'Remover',
        }
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
    },
    computed: {
        navBarCode: {
            get() { return this.$store.getters.navBarColor; },
            set(v) { return this.$store.commit("toggleNavBarColor", v); }
        },
        bgCode: {
            get () { return this.$store.getters.backgroundColor },
            set (v) { return this.$store.commit('toggleBackgroundColor', v) }
        },
    },
    components:{
        'appHeader': AppHeader,
        'navDraw':NavDraw,
        //'userForm':UserForm,
    },
}
</script>

<script lang="ts" setup>


import { ref } from "vue";
import type { Header, Item, SortType } from "vue3-easy-data-table";
const searchValue = ref("");

const sortBy = ["username","nome","email","tipo"];
const sortType: SortType[] =  ["desc", "asc"];

const headers: Header[] = [
  { text: "Identificador", value: "identificador", sortable: true},
  { text: "Domínio", value: "dominio", sortable: true},
  { text: "Subdomínio", value: "subdominio", sortable: true},
  { text: "Autor", value: "autor", sortable: true},
  { text: "Data Criação", value: "datacriacao", sortable: true},
  { text: "Opções", value: "opcoes"}
];

const items: Item[] = [
    {identificador: "PT1",dominio:"Lingua Portuguesa",subdominio:"Fernando Pessoa",autor:"Prof1",datacriacao:"01/01/2000"},
    {identificador: "PT2",dominio:"Lingua Portuguesa",subdominio:"Fernando Pessoa",autor:"Prof1",datacriacao:"01/01/2000"},
    {identificador: "PT3",dominio:"Lingua Portuguesa",subdominio:"Fernando Pessoa",autor:"Prof1",datacriacao:"01/01/2000"},
];


</script>
<style scoped>
    .operation-wrapper .operation-icon {
    width: 20px;
    cursor: pointer;
    }
   .customize-table{
    --easy-table-border: 0px solid #445269;
    --easy-table-header-background-color: v-bind(navCode);
    --easy-table-header-font-color: #fff;
    --easy-table-header-height: 50px;
    --easy-table-header-font-size: 15px;

    --easy-table-header-item-padding: 0px 16px;
    --easy-table-body-item-padding: 0px 45px;

    --easy-table-body-row-font-size: 14px Arial;
    --easy-table-body-row-font-color: #73879c;


    --easy-table-body-row-height: 50px;
    }
  .v-data-table :deep() th{
        background-color:#4b779e;
    }
    .v-data-table :deep() tr{
        color: #73879C;
        font-size: 13px;
    }
    .v-data-table :deep() tr:nth-child(even){
        background-color: rgb(245, 245, 245);
    }
  #questoes *{
            box-sizing: border-box;
  }
  #questoes{
            margin: 20px auto;
            max-width: 1100px;
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
        background-color: v-bind(bttCode);
    }
</style>
