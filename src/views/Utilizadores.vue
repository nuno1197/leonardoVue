<template>
    <div id="users">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <v-table
            :headers="headers"
            :items="users"
            :items-per-page="15"
            :sort-by="['_id']"
            :search="search"
            multi-sort 
        >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>TESTE</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="`TESTE`"
                  single-line
                  hide-details
                  class="mr-5"
                ></v-text-field>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">    
                        <v-btn v-bind="attrs" v-on="{on}"  color="#2A3F54" class="white--text mr-4">
                            <v-icon>mdi-account-plus</v-icon>
                        </v-btn>                    
                        </template>
                    <span>TESTE</span>
                    </v-tooltip>
            </v-toolbar>
        </template>
        <template v-slot:header._id="{ header }">
            <label> TESTE</label>
        </template>
        <template v-slot:header.name="{ header }">
            <label> TESTE</label>
        </template>
        <template v-slot:header.email="{ header }">
            <label> TESTE </label>
        </template>
        <template v-slot:header.type="{ header }">
            <label> TESTE</label>
        </template>
        <template v-slot:header.options="{ header }">
            <label> TESTE </label>
        </template>
        
        </v-table>
    </div>
</template>

<script>
import Header from '../components/header.vue'
import NavDraw from '../components/navDraw.vue'
//import UserForm from '../components/userForm.vue'
export default {
    data(){
        return{
            headers:[
                {
                    text: `ID`,
                    align: 'start',
                    value: '_id'
                },
                {
                    text:`Nome`,
                    value: 'name'
                },
                {
                    text:`Email`,
                    value: 'email'
                },
                {
                    text:`Número`,
                    value: 'studentNumber'
                },
                {
                    text:`Tipo`,
                    value: 'type'
                },
                {
                    text:`Opções`,
                    value:'options',
                    sortable: false
                }
            ],
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
        'appHeader': Header,
        'navDraw':NavDraw,
        //'userForm':UserForm,
    },
}
</script>
<style scoped>
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
