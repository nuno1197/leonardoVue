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
                <v-avatar  min-width="55px" tile class="ava" v-on:click="about = true">
                    <v-img src="src/assets/logo_original.png" contain/>
                </v-avatar>
            </template>
            <v-list-item-title><h2 color>Leonardo</h2></v-list-item-title>
            <v-list-item-subtitle>Sistema de aferição de conhecimento multidisciplinar</v-list-item-subtitle>
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
            <v-btn text small class="white--text change-font" @click="setLocale('pt')" v-on="{on}">PT</v-btn>
            </template>
            <span>PT</span>
        </v-tooltip>

        <v-tooltip bottom> 
            <template v-slot:activator="{ on }">
            <v-btn text small class="white--text change-font" @click="setLocale('es')" v-on="{on}">ES</v-btn>
            </template>
            <span>ES</span>
        </v-tooltip>
        
        <v-tooltip bottom> 
            <template v-slot:activator="{ on }">
            <v-btn text small class="white--text change-font" @click="setLocale('en')" v-on="{on}">UK</v-btn>
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
                                <v-icon size="large">mdi-account-circle</v-icon>
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
                        <v-list-item-title>UserName</v-list-item-title>
                        <v-list-item-subtitle>Admin</v-list-item-subtitle>
                </v-list-item>
            
    </v-app-bar>
    
</template>

<script>
export default {
    data() {
        return{
            help: '',
            userPic: '',
            about:false
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
