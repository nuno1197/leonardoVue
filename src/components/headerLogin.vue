<template>
      <v-app-bar app color="#2A3F54" >
        <v-list-item two-line dense dark color="white" class="px-0">
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
              <h2>Saber Mais</h2>
            </v-toolbar>
            <v-divider class="mx-4" horizontal></v-divider>
            <v-card-text class="change-font" style="white-space: pre-line">
              Saber mais
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-tooltip placement="bottom">
                <template v-slot:activator="{ on }">
                  <v-btn
                    depressed
                    background-color="lightgray"
                    @click="about = false"
                    v-bind="on"
                  >
                    <v-icon large>mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Sair</span>
              </v-tooltip>
            </v-card-actions>image.png
          </v-card>
        </v-dialog>
        <div class="spacer"></div>
        <div style="margin-left:800px">

        <v-select :items="items" label="Standard"></v-select>

        <v-tooltip >
            <template v-slot:activator="{ on }"  >
                <v-btn text small class="" @click="setLocale('pt')" v-bind="on" color="white">
                PT
            </v-btn>
            </template>
            <span>PT</span>
        </v-tooltip>
        <v-tooltip placement="bottom">
            <template v-slot:activator="{ on }">
            <v-btn text small class="white--text change-font" @click="setLocale('es')" v-bind="on" color="white">
                ES
            </v-btn>
            </template>
            <span>ES</span>
        </v-tooltip>
        <v-tooltip placement="bottom">
            <template v-slot:activator="{ on }">
            <v-btn text small class="white--text change-font" @click="setLocale('en')" v-bind="on" color="white">
                UK
            </v-btn>
            </template>
            <span>EN</span>
        </v-tooltip>
    </div>
    </v-app-bar>
</template>


<script>
export default {
    data() {
        return{
            help:'',
            about: false
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
