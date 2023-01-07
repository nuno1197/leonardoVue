<template>
    <v-app>
        <v-app-bar app color="#2A3F54">
            <ul two-line class="px-0" 
                dense
                dark
                color="#2A3F54">
                    <v-avatar min-width="55px" tile class="ava" @click="about = true">
                        <v-img src="@/assets/logo_original.png"/>
                    </v-avatar>
                <li>
                    <h2>Titulo do Projeto</h2>
                    <h3>Admin do Sistema</h3>
                </li>
            </ul>
                <v-dialog @keydown.esc="about = false" v-model="about" scrollable width="500">
                    <v-card>
                        <v-toolbar color="#2A3F54" dark>
                            <h2>Saber Mais</h2>
                        </v-toolbar>
                        <v-divider
                        class="mx-4"
                        horizontal
                    ></v-divider>

                        <v-card-text class="change-font" style="white-space: pre-line"
                        >Saber mais </v-card-text
                        >
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        
                        <v-tooltip bottom> 
                            <template v-slot:activator="{ on }">
                                <v-btn depressed color="white" @click="about=false" v-on="on">
                                <v-icon large>mdi-exit-to-app</v-icon>
                                </v-btn>
                            </template>
                            <span>Sair</span>
                            </v-tooltip>

                        </v-card-actions>
                    </v-card>
                </v-dialog>
            <div class="spacer"></div>
            <v-tooltip bottom> 
                <template v-slot:activator="{ on }">
                <v-btn text small class="white--text change-font" @click="setLocale('pt')" v-on="on">PT</v-btn>
                </template>
                <span>PT</span>
            </v-tooltip>

            <v-tooltip bottom> 
                <template v-slot:activator="{ on }">
                <v-btn text small class="white--text change-font" @click="setLocale('es')" v-on="on">ES</v-btn>
                </template>
                <span>ES</span>
            </v-tooltip>
            
            <v-tooltip bottom> 
                <template v-slot:activator="{ on }">
                <v-btn text small class="white--text change-font" @click="setLocale('en')" v-on="on">UK</v-btn>
                </template>
                <span>EN</span>
            </v-tooltip>
        </v-app-bar>
    </v-app>
</template>

<script>
export default {
    data() {
        return{
            help:'',
            about: ''
        }
    },
    props:{
        ajuda:{
            type: String
        }
    },
    methods:{
        getUrl: function(){
            var components = this.$route.path.split('/')
            components.shift()
            components.shift()
            if (components.length > 1)
                components = components.join('/')
            return components
        },
        setLocale(locale){ 
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
        }
    },
    created(){
        if(this.ajuda == 'login'){
            this.help = 'Esta é a ajuda do login'
        }
        else if(this.ajuda == 'registo'){
            this.help = 'Esta é a ajuda da página de registo'
        }
    }
}
</script>

<style scoped>
.v-toolbar__content, .v-toolbar__extension{
    position: relative;
}
</style>
