<template>
      <v-app-bar app v-bind:color="colorCode" id="teste">
        <v-list-item two-line dense dark color="white" class="px-0">
            <template v-slot:prepend>
                <v-avatar size="80" min-width="55px" tile class="ava" v-on:click="about = true">
                    <v-img src="src/assets/logo_original.png" contain/>
                </v-avatar>
            </template>
            <v-list-item-title><h3 color>Leonardo</h3></v-list-item-title>
            <v-list-item-subtitle>Sistema de aferição de conhecimento multidisciplinar</v-list-item-subtitle>
        </v-list-item>
        <v-dialog @keydown.esc="about = false" v-model="about" scrollable width="500">
          <v-card>
            <v-toolbar v-bind:color="colorCode" dark>
              <h2 class="white--text" :style="{ marginLeft: '15px' }">Saber Mais</h2>
            </v-toolbar>

            <v-divider class="mx-4" horizontal></v-divider>

            <v-card-text class="grey--text change-font mt-6" style="white-space: pre-line">
              Texto saber mais
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-tooltip bottom>
                <template #activator="{ on }">
                  <v-btn @click="dialog=false" v-bind="on">
                    <v-icon size="30">mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Sair</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="spacer"></div>
        <div :style="{ position: 'absolute', right: '0'}">
        <a>
          <select id="selectBox" @change="getSkincode" style=" border: none; color: white;" >
            <option value="#">Mudar Skin</option>
            <option value="#">-----------</option>
            <option value="#2A3F54">Original</option>       
            <option value="#000000">Dark Mode</option>
            <option value="#088F8F">Blue Green Mode</option>
            <option value="#097969">Leaf Mode</option>
            <option value="#6082B6">Ocean Mode</option>
          </select>
        </a>


        <v-tooltip >
            <template v-slot:activator="{ on }"  >
                <v-btn v-bind:title="tooltip1" text small class="" @click="setLocale('pt')" v-bind="on" color="white" >
                PT
            </v-btn>
            </template>
            <span>PT</span>
        </v-tooltip>
        <v-tooltip placement="bottom">
            <template v-slot:activator="{ on }">
            <v-btn v-bind:title="tooltip2" text small class="white--text change-font" @click="setLocale('es')" v-bind="on" color="white">
                ES
            </v-btn>
            </template>
            <span>ES</span>
        </v-tooltip>
        <v-tooltip placement="bottom">
            <template v-slot:activator="{ on }">
            <v-btn v-bind:title="tooltip3" text small class="white--text change-font" @click="setLocale('en')" v-bind="on" color="white">
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
            about: false,
            tooltip1: 'Língua Portuguesa',
            tooltip2: 'Idioma Español',
            tooltip3: 'English Language',
            colorCode: this.$store.getters.skinColor
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
        },
        getSkincode(){
          //obter o selectbox
          var selectBox = document.getElementById("selectBox");
          //obter valor selecionado
          var selectedValue = selectBox.options[selectBox.selectedIndex].value;
          //guardar variavel na sessão
          this.$store.commit('toggleSkinColor', selectedValue)
          //atualizar a página para aplicar cor
          location.reload()
        
        }

    },
    computed: {
        skinColor: {
        get () { return this.$store.getters.skinColor },
        set (v) { return this.$store.commit('toggleSkinColor', v) }
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
.white--text{
  color: white;
}

.v-toolbar__content, .v-toolbar__extension{
    position: relative;
}

#selectBox{
  background-color: v-bind(colorCode);
}
</style>
