<template>
    <v-app-bar app v-bind:color="colorCode" height="100" clipped-left>
        <v-app-bar-nav-icon 
            @click="drawerState = !drawerState"
            color="#FFF"
            ></v-app-bar-nav-icon>
        <v-list
            nav
            dense
            dark
            v-bind:color="colorCode"
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
                    <v-toolbar v-bind:color="colorCode" dark>
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
        <v-menu ref="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on: menu }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                        <v-btn
                        fab
                        v-on="{ ...tooltip, ...menu }"
                        @click="toggleMenu"
                        >
                            <v-avatar>
                                <v-icon v-bind:title="tooltip4" size="40" class="white--text">mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-btn>
                        <div v-if="showMenu" role="menu" class="v-menu__content theme--light v-menu__content--fixed menuable__content__active" >
                            <div class="v-list v-sheet theme--light">
                                <a class="v-list-item v-list-item--link theme--light" tabindex="0" role="menuitem" id="list-item-2625">
                                <div class="v-list-item__title">Consultar perfil de utilização</div>
                                </a>
                                <div tabindex="0" text="" role="menuitem" id="list-item-2627" class="v-list-item v-list-item--link theme--light">
                                <div class="v-list-item__title">Sair</div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <span>
                        Teste
                    </span>
                </v-tooltip>
            </template>
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
            showMenu: false,
            colorCode: this.$store.getters.skinColor,
            menuStyle: {
                top: '50px',
                left: '1200px',
                transformOrigin: 'left top',
                zIndex: '999999',
                minWidth: '56px',
                borderRadius: '20px',
            },
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
        },
        skinColor: {
        get () { return this.$store.getters.skinColor },
        set (v) { return this.$store.commit('toggleSkinColor', v) }
        }
    },
    methods: {
        toggleMenu() {
        this.showMenu = !this.showMenu;
        this.$nextTick(() => {
            if (this.showMenu) {
                document.body.appendChild(this.$refs.menu);
            }
        });
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

#selectBox{
  background-color: v-bind(colorCode);
}


</style>
