<template>
    <div id="users">
        <appHeader :ajuda='ajuda'></appHeader>
        <navDraw></navDraw>
        <div class=".col-6 .col-md-4">
            <EasyDataTable
                :headers="headers"
                :items="items"
            />
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
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];

const items: Item[] = [
  { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
  { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
  { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
  { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
];


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
