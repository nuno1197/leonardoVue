<template>
    <div id="users" :style="{ 'background-color': bgCode }">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-toolbar :style="{ 'background-color': bgCode }" style="padding-top:100px;">
            <v-toolbar-title>Utilizadores</v-toolbar-title>
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
            ></v-text-field>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">    
                <v-btn id="bttAdd" v-bind="attrs" v-on="on" class="white--text mr-4" color="white" >
                    <v-icon>mdi-account-plus</v-icon>
                </v-btn>                    
                </template>
            <span>Criar utilizador</span>
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
            bgCode:this.$store.getters.backgroundColor,
            navCode:this.$store.getters.topNavColor,
            search:'',
            dialog: false,
            ajuda:'users',
            value:'',
            users:[],
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
    components:{
        'appHeader': AppHeader,
        'navDraw':NavDraw,
        //'userForm':UserForm,
    }
}
</script>

<script lang="ts" setup>


import { ref } from "vue";
import type { Header, Item, SortType } from "vue3-easy-data-table";
const searchValue = ref("");

const sortBy = ["username","nome","email","numero","tipo"];
const sortType: SortType[] =  ["desc", "asc"];

const headers: Header[] = [
  { text: "Username", value: "username", sortable: true},
  { text: "Nome", value: "nome", sortable: true},
  { text: "Email", value: "email", sortable: true},
  { text: "Número de aluno", value: "numero", sortable: true},
  { text: "Tipo", value: "tipo", sortable: true},
  { text: "Opções", value: "opcoes"}
];

const items: Item[] = [
  { username: "leo2", nome: "Leonardo", email:"leo@leo.com", numero:"a99999", tipo:"Admin", opcoes:""},
  { username: "teste", nome: "Leonarda", email:"led@leo.com", numero:"a11111", tipo:"Aluno", opcoes:""},
  { username: "d", nome: "ups", email:"ups@leo.com", numero:"a22222", tipo:"User", opcoes:""},
  { username: "aasd", nome: "asd", email:"asd@leo.com", numero:"a33333", tipo:"Admin", opcoes:""},
  { username: "r", nome: "gsd", email:"r@leo.com", numero:"a4444", tipo:"Admin", opcoes:""}
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
  #users *{
            box-sizing: border-box;
  }
  #users{
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
