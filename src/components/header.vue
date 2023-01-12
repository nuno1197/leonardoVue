<template>
    <v-app-bar app color="#2A3F54" height="100" clipped-left>
        <v-app-bar-nav-icon 
            @click="drawerState = !drawerState"
            color="#FFF"
            ></v-app-bar-nav-icon>
        <v-list
            nav
            dense
            dark
            color="#2A3F54"
            style="background-color:inherit"
        >
        <v-list-item two-line dense dark color="#2A3F54" class="px-0">
            <template v-slot:prepend>
                <v-avatar  size="80" min-width="55px" tile class="ava" v-on:click="about = true">
                    <v-img src="src/assets/logo_original.png" contain/>
                </v-avatar>
            </template>
            <v-list-item-title class="white--text"><h2 color>Leonardo</h2></v-list-item-title>
            <v-list-item-subtitle class="white--text">Sistema de aferição de conhecimento multidisciplinar</v-list-item-subtitle>
        </v-list-item>
            <v-dialog @keydown.esc="about = false" v-model="about" scrollable width="500">
                <v-card>
                    <v-toolbar color="#2A3F54" dark>
                        <h2>Saber mais</h2>
                    </v-toolbar>
                    <v-divider
                    class="mx-4"
                    horizontal
                ></v-divider>

                    <v-card-text class="change-font" style="white-space: pre-line"
                    >Saber mais</v-card-text
                    >
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on }">
                            <v-btn depressed color="white" @click="about=false" v-on="{ on }">
                            <v-icon large>mdi-exit-to-app</v-icon>
                            </v-btn>
                        </template>
                        <span>Sair</span>
                    </v-tooltip>

                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-list>
        <div class="spacer"></div>
        <v-tooltip bottom> 
            <template v-slot:activator="{ on }">
            <v-btn v-bind:title="tooltip1" text small class="white--text change-font" @click="setLocale('pt')" v-on="{on}">PT</v-btn>
            </template>
            <span>PT</span>
        </v-tooltip>

        <v-tooltip bottom> 
            <template v-slot:activator="{ on }">
            <v-btn v-bind:title="tooltip2" text small class="white--text change-font" @click="setLocale('es')" v-on="{on}">ES</v-btn>
            </template>
            <span>ES</span>
        </v-tooltip>
        
        <v-tooltip bottom> 
            <template v-slot:activator="{ on }">
            <v-btn v-bind:title="tooltip3" text small class="white--text change-font" @click="setLocale('en')" v-on="{on}">UK</v-btn>
            </template>
            <span>EN</span>
        </v-tooltip>
        <v-menu>
            <template v-slot:activator="{ on: menu }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                        <v-btn
                        fab
                        v-on="{ ...tooltip, ...menu }"
                        >
                            <v-avatar>
                                <v-icon v-bind:title="tooltip4" size="40" class="white--text">mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <span>
                        Teste
                    </span>
                </v-tooltip>
            </template>
            <v-list>
                <v-list-item >
                    <v-list-item-title>Teste</v-list-item-title>
                </v-list-item>
                <v-list-item text>
                    <v-list-item-title>Teste</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
                <v-list-item disabled dark>
                        <v-list-item-title class="white--text">UserName</v-list-item-title>
                        <v-list-item-subtitle class="white--text">Admin</v-list-item-subtitle>
                </v-list-item>
            
    </v-app-bar>
    
</template>

<script>
export default {
    data() {
        return{
            help: '',
            userPic: '',
            about:false,
            tooltip1: 'Língua Portuguesa',
            tooltip2: 'Idioma Español',
            tooltip3: 'English Language',
            tooltip4: 'Opções de perfil de Utilização',
        }
    },
    props:{
        ajuda:{
            type:String
        }
    },
    computed: {
        drawerState: {
        get () { return this.$store.getters.drawerState },
        set (v) { return this.$store.commit('toggleDrawerState', v) }
        }
    }
};
</script>

<style scoped>
.white--text{
    color: white;
}
.v-toolbar__content, .v-toolbar__extension{
    position: relative;
}
.spacer{
    flex-grow: 1;
}
h1{
    color:white;
    text-align:center;
}
</style>
