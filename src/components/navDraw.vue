<template>
  <v-card>
    <v-navigation-drawer
      app
      clipped
      v-model="drawerState"
      v-bind:color="navBarCode"
      class="navBar"
    >
    <v-list dense dar>
      <v-list-item v-on:click="goToHome" prepend-icon="mdi-home" style="color: #fff;" title="Início"></v-list-item>

      <v-list-group 
        active-class="yellow--text"
        :value="infoBase"
        no-action
      >

      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" prepend-icon="mdi-database" style="color: #fff;" >Informação Base</v-list-item>
      </template>
      <v-list-item v-on:click="goToResponsaveis" v-bind="props" style="color: #fff;" title="Responsáveis"></v-list-item>
      <v-list-item v-on:click="goToProfessores" v-bind="props" style="color: #fff;" title="Professores"></v-list-item>
      <v-list-item v-on:click="goToAlunos" v-bind="props" style="color: #fff;" title="Alunos"></v-list-item>
      <v-list-item v-on:click="goToDominios" v-bind="props" style="color: #fff;" title="Domínios"></v-list-item>
      <v-list-item v-on:click="goToQuestoes" v-bind="props" style="color: #fff;" title="Questões"></v-list-item>
      <v-list-item v-on:click="goToGestaoTestes" v-bind="props" style="color: #fff;" title="Testes"></v-list-item>

      </v-list-group>
      <v-list-group
          active-class="yellow--text"
          :value="producao"
          no-action
        >


      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" prepend-icon="mdi-wrench" style="color: #fff;" title="Produção"></v-list-item>
      </template>
      <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Domínios"></v-list-item>
      <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Questões"></v-list-item>
      <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Testes"></v-list-item>

      </v-list-group>
      <v-list-group
        active-class="yellow--text"
        :value="verificacao"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-check-bold" style="color: #fff;" title="Verificação"></v-list-item>
        </template>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Importação de questões"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Verificação de questões"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Verificação de erros"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Dashboard"></v-list-item>
      </v-list-group>
      <v-list-group
        active-class="yellow--text"
        :value="avaliacao"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-school" style="color: #fff;" title="Avaliação"></v-list-item>
        </template>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Realização de Testes"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Sessões de Quiz"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Resultados"></v-list-item>
      </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        :value="opinioes"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-wechat" style="color: #fff;" title="Opiniões"></v-list-item>
        </template>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Inquérito de Sistema"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Análise de Inquéritos"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Estudo de Propriedades"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Sentimentos Expressos"></v-list-item>
      </v-list-group>

      <v-list-group
        active-class="yellow--text"
        :value="gamificacao"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-trophy-variant" style="color: #fff;" title="Gamificação"></v-list-item>
        </template>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Domínios"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Alunos"></v-list-item>
      </v-list-group>

      <v-list-group
        active-class="yellow--text"
        :value="dashboards"
        no-action
      >

        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-chart-bar" style="color: #fff;" title="Dashboards"></v-list-item>
        </template>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Alunos"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Respostas"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Acessos"></v-list-item>
      </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        :value="utilizadores"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-multiple" style="color: #fff;" title="Utilizadores"></v-list-item>
        </template>
        <v-list-item v-on:click="goToGestaoUsers" v-bind="props" style="color: #fff;" title="Gestão"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Pedidos de Acesso"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Importação"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Atividade Corrente"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Historial de Acesso"></v-list-item>
        <v-list-item v-on:click="" v-bind="props" style="color: #fff;" title="Logs"></v-list-item>
      </v-list-group>

      <v-list-group
        active-class="yellow--text"
        :value="eventos"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-clock" style="color: #fff;" title="Eventos"></v-list-item>
        </template>
        <v-list-item v-bind="props" style="color: #fff;" title="Gestão"></v-list-item>
        <v-list-item v-bind="props" style="color: #fff;" title="Agenda"></v-list-item>
      </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        :value="definicoes"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cog" style="color: #fff;" title="Definições"></v-list-item>
        </template>
        <v-list-item v-bind="props" style="color: #fff;" title="Configuração geral"></v-list-item>
        <v-list-item v-on:click="configurator = true" v-bind="props" style="color: #fff;" title="Configuração de skin"></v-list-item>
          <v-dialog @keydown.esc="configurator = false"  v-model="configurator"  width="800">
            <v-card>
                <v-toolbar v-bind:color="navCode" dark>
                <h2 class="white--text" :style="{ marginLeft: '15px' }">Configurador de skin</h2>
                </v-toolbar>
                <v-divider
                class="mx-4"
                horizontal
            ></v-divider>
                <v-form ref="form" method="post" enctype="multipart/form-data">
                    <v-container>
                        <v-row align-content="center" fill-height>
                            <v-col cols="6" md="5">
                                Cor dos Botões das Tabelas
                                <color-picker v-bind:colorButtons="colorButtons" v-on:update:colorButtons="colorButtons = $event"></color-picker>
                            </v-col>
                            <v-col cols="6" md="5">
                                Cor do Header
                                <color-picker v-bind:colorHeader="colorHeader" v-on:update:colorHeader="colorHeader = $event"></color-picker>
                            </v-col>
                            <v-col cols="6" md="5">
                                Cor da Navbar
                                <color-picker v-bind:colorNavbar="colorNavbar" v-on:update:colorNavbar="colorNavbar = $event"></color-picker>
                            </v-col>
                            <v-col cols="6" md="5">
                                Cor de Fundo
                                <color-picker v-bind:colorBackground="colorBackground" v-on:update:colorBackground="colorBackground = $event"></color-picker>
                            </v-col>
                            <v-col cols="6" md="5">
                                Cor da Letra
                                <color-picker v-bind:colorLetter="colorLetter" v-on:update:colorLetter="colorLetter = $event"></color-picker>
                            </v-col>
                            
                        </v-row>
                        <v-row>
                          <v-col cols="1" md="8">
                            <v-btn @click="submitForm">
                              <v-icon class="primary" >mdi-undo</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="1" md="1">
                            <v-btn  @click="chillSkin">
                              <v-icon class="primary">mdi-waves</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="1" md="1">
                            <v-btn  @click="warmSkin">
                              <v-icon class="primary">mdi-heat-wave</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="1" md="1">
                            <v-btn @click="fireSkin">
                              <v-icon class="primary" >mdi-fire</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                        
                    </v-container>
                </v-form>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom> 
                      <template v-slot:activator="{ on }">
                          <v-btn depressed color="lightgray" @click="applyReload" v-on="{on}">
                          <v-icon size="30">mdi-exit-to-app</v-icon>
                          </v-btn>
                      </template>
                      <span>Voltar</span>
                  </v-tooltip>
                </v-card-actions>
            </v-card>
        </v-dialog>
      </v-list-group>

      <v-list-item v-on:click="help = true" prepend-icon="mdi-help" style="color: #fff;" title="Ajuda"></v-list-item>
      <v-dialog @keydown.esc="help = false" v-model="help" scrollable width="500">
            <v-card>
              <v-toolbar v-bind:color="navCode" dark>
                <h2 class="white--text" :style="{ marginLeft: '15px' }">Ajuda</h2>
              </v-toolbar>
              <v-divider
              class="mx-4"
              horizontal
            ></v-divider>
              <v-card-text class="change-font mt-6 grey--text" style="white-space: pre-line"
                >Texto Ajuda</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-tooltip bottom> 
                  <template v-slot:activator="{ on }">
                      <v-btn depressed color="lightgray" @click="help=false" v-on="{on}">
                        <v-icon size="30">mdi-exit-to-app</v-icon>
                      </v-btn>
                    </template>
                    <span>Voltar</span>
                  </v-tooltip>
              </v-card-actions>
            </v-card>
      </v-dialog>


      <v-list-item v-on:click="about = true" prepend-icon="mdi-text-box-multiple" style="color: #fff;" title="Documentação"></v-list-item>
      


      <v-list-item v-on:click="about = true" prepend-icon="mdi-information-outline" style="color: #fff;" title="Acerca de"></v-list-item>
      <v-dialog @keydown.esc="about = false" v-model="about" scrollable width="500">
            <v-card>
              <v-toolbar v-bind:color="navCode" dark>
                <h2 class="white--text" :style="{ marginLeft: '15px' }">Acerca de</h2>
              </v-toolbar>
              <v-divider
              class="mx-4"
              horizontal
            ></v-divider>
              <v-card-text class="change-font mt-6 grey--text" style="white-space: pre-line"
                >Texto Acerca de</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-tooltip bottom> 
                  <template v-slot:activator="{ on }">
                      <v-btn depressed color="lightgray" @click="about=false" v-on="{on}">
                        <v-icon size="30">mdi-exit-to-app</v-icon>
                      </v-btn>
                    </template>
                    <span>Voltar</span>
                  </v-tooltip>
              </v-card-actions>
            </v-card>
      </v-dialog>

      <v-list-item v-on:click="credits = true" prepend-icon="mdi-account-group" style="color: #fff;" title="Créditos"></v-list-item>
      <v-dialog @keydown.esc="credits = false"  v-model="credits" scrollable width="500">
        <v-card>
          <v-toolbar v-bind:color="navCode" dark>
            <h2 class="white--text" :style="{ marginLeft: '15px' }">Créditos</h2>
          </v-toolbar>
          <v-divider
          class="mx-4"
          horizontal
          ></v-divider>
          <v-card-text class="change-font mt-6 grey--text" style="white-space: pre-line"
            >Texto Créditos</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom> 
              <template v-slot:activator="{ on }">
                  <v-btn depressed color="lightgray" @click="credits=false" v-on="{on}">
                    <v-icon size="30">mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Voltar</span>
              </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-list-item v-on:click="terms = true" prepend-icon="mdi-book-multiple" style="color: #fff;" title="Termos de utilização"></v-list-item>
      <v-dialog @keydown.esc="terms = false" v-model="terms" scrollable  width="500">
        <v-card>
          <v-toolbar v-bind:color="navCode" dark>
            <h2 class="white--text" :style="{ marginLeft: '15px' }">Termos de Utilização</h2>
          </v-toolbar>
          <v-divider
            class="mx-4"
            horizontal
          ></v-divider>
          <v-card-text class="change-font mt-6 grey--text" style="white-space: pre-line"
            >Texto Termos de Utilização</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom> 
              <template v-slot:activator="{ on }">
                <v-btn depressed color="lightgray" @click="terms=false" v-on="{on}">
                  <v-icon size="30">mdi-exit-to-app</v-icon>
                </v-btn>
              </template>
              <span>Voltar</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-list-item v-on:click="priv = true" prepend-icon="mdi-lock" style="color: #fff;">Privacidade</v-list-item>
      <v-dialog @keydown.esc="priv = false" v-model="priv" scrollable width="500"> 
        <v-card>
          <v-toolbar v-bind:color="navCode" dark>
            <h2 class="white--text" :style="{ marginLeft: '15px' }">Privacidade</h2>
          </v-toolbar>
          <v-divider
            class="mx-4"
            horizontal
          ></v-divider>
          <v-card-text class="change-font mt-6 grey--text" style="white-space: pre-line"> Texto Privacidade</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>    
                <v-tooltip bottom> 
                  <template v-slot:activator="{ on }">
                    <v-btn depressed color="lightgray" @click="priv=false" v-on="{on}">
                      <v-icon size="30">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </template>
                  <span>Voltar</span>
                </v-tooltip>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import ColorPicker from '../components/colorPicker.vue'

export default {
    data() {
        return {
            priv: false,
            terms: false,
            credits: false,
            about: false,
            help: false,
            configurator: false,
            colorButtons: 'white',
            colorHeader: 'white',
            colorNavbar: 'white',
            //colorFooter: 'white',
            colorBackground: 'white',
            colorLetter:'white',
            colorCode: this.$store.getters.skinColor,
            navCode:this.$store.getters.topnavColor,
            bttCode:this.$store.getters.bttColor,
            navBarCode:this.$store.getters.navBarColor,
            //footerCode:this.$store.getters.footerColor
            bgCode:this.$store.getters.backgroundColor,
            letterCode:this.$store.getters.letterColor,
        };
    },
    methods: {
        goToHome() {
            this.$router.push({ path: "../home" });
        },
        goToResponsaveis() {
            this.$router.push({ path: "../responsaveis" });
        },
        goToAlunos() {
            this.$router.push({ path: "../alunos" });
        },
        goToProfessores() {
            this.$router.push({ path: "../professores" });
        },
        goToDominios() {
            this.$router.push({ path: "../dominios" });Configurador
        },
        goToQuestoes() {
            this.$router.push({ path: "../questoes" });
        },
        goToGestaoTestes() {
            this.$router.push({ path: "../gestaotestes" });
        },
        goToGestaoUsers() {
            this.$router.push({ path: "../users" });
        },
        goToConfigurador() {
            this.$router.push({ path: "../configurador" });
        },
    },
    computed: {
        drawerState: {
            get() { return this.$store.getters.drawerState; },
            set(v) { return this.$store.commit("toggleDrawerState", v); }
        },
        navBarCode: {
            get() { return this.$store.getters.navBarColor; },
            set(v) { return this.$store.commit("toggleNavBarColor", v); }
        },
        bgCode: {
            get () { return this.$store.getters.backgroundColor },
            set (v) { return this.$store.commit('toggleBackgroundColor', v) }
        }
    },
    components:{
      'colorPicker': ColorPicker
    },
    watch: {
        colorButtons: function (newValue) {
            this.$store.commit('toggleBttColor', newValue);
            //console.log("bttcode",this.bttCode,"aqui",newValue);

        },
        colorHeader: function(newValue){
            this.$store.commit('toggleTopNavColor', newValue)
            //console.log(this.navCode);
                
        },
        colorNavbar: function(newValue){
            this.$store.commit('toggleNavBarColor', newValue)
            //console.log(this.newValue)   
        },
        /*colorFooter: function (newValue) {
            this.$store.commit('toggleFooterColor', newValue)
            console.log(this.footerCode)

        }*/
        colorBackground: function(newValue){
            this.$store.commit('toggleBackgroundColor', newValue)
            //console.log(this.newValue)   
        },
        colorLetter: function(newValue){
            this.$store.commit('toggleLetterColor', newValue)
            
            
            //console.log(this.newValue)   
        },
    },
    methods: {
    submitForm() {
        this.$store.commit('toggleBttColor', '#2A3F54');
        this.$store.commit('toggleTopNavColor', '#2A3F54')
        this.$store.commit('toggleNavBarColor', '#2A3F54')
        this.$store.commit('toggleBackgroundColor', '#FFFFFF')
        this.$store.commit('toggleLetterColor', '#000000')
        //atualizar a página para aplicar cor
       // location.reload()
    },
    chillSkin(){

        this.$store.commit('toggleBttColor', '#F1802D');
        this.$store.commit('toggleTopNavColor', '#123740')
        this.$store.commit('toggleNavBarColor', '#549AAB')
        this.$store.commit('toggleBackgroundColor', '#B0D7E1')
        this.$store.commit('toggleLetterColor', '#F1802D')

    },
    warmSkin(){

    this.$store.commit('toggleBttColor', '#E1B16A');
    this.$store.commit('toggleTopNavColor', '#444C5C')
    this.$store.commit('toggleNavBarColor', '#CE5A57')
    this.$store.commit('toggleBackgroundColor', '#78A5A3')
    this.$store.commit('toggleLetterColor', '#E1B16A')

    },
    fireSkin(){

    this.$store.commit('toggleBttColor', '#583168');
    this.$store.commit('toggleTopNavColor', '#F6A961')
    this.$store.commit('toggleNavBarColor', '#E66A5E')
    this.$store.commit('toggleBackgroundColor', '#BB405C')
    this.$store.commit('toggleLetterColor', '#583168')

    },
    resetForm() {
      this.selectedColor = ''
    },
    applyReload(){
      this.configurator=false;
      location.reload();
      

    }
  }
};
</script>

<style scoped>
.white--text{
  color: white;
}
.grey--text{
  color: grey;
}
header {
  padding: 10px;
}

h1 {
  color: white;
  text-align: center;
}
.navBar {
  text-align: left;
}
.ava {
  margin-top: 50px;
}
</style>