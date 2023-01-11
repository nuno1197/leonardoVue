<template>
    <div id="users">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <div class=".col-6 .col-md-4 center" style="margin-top: 150px;">
            <EasyDataTable table-class-name="customize-table" header-text-direction="center" body-text-direction="center"
                :headers="headers"
                :items="items"
            >
                <template v-slot:item.opcoes="{ item }">
                    <v-icon>notranslate mr-2 v-icon--link mdi mdi-eye theme--light</v-icon> 
                </template>
            </EasyDataTable>
        </div>
    </div>
</template>

<script lang="ts">
import AppHeader from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
//import UserForm from '../components/userForm.vue'

export default {
    data(){
        return{
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
            page:1
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
    },
}
</script>

<script lang="ts" setup>


import type { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "Username", value: "username" },
  { text: "Nome", value: "nome"},
  { text: "Email", value: "email"},
  { text: "Número de aluno", value: "numero"},
  { text: "Tipo", value: "tipo"},
  { text: "Opções", value: "opcoes"}
];

const items: Item[] = [
  { username: "leo2", nome: "Leonardo", email:"leo@leo.com", numero:"a99999", tipo:"Admin", opcoes:""}
];


</script>
<style scoped>

   .customize-table{
    --easy-table-border: 0px solid #445269;
    --easy-table-header-background-color: #4b779e;
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
</style>
