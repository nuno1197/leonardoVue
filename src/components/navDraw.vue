<template>
  <v-card>
    <v-navigation-drawer
      app
      clipped
      v-model="drawerState"
      color="#2A3F54"
      class="navBar"
    >
    <v-list dense dar>
      <v-list-item>
          <template v-slot:prepend>
                <v-avatar v-on:click="about = true">
                    <v-icon>mdi-home</v-icon>
                </v-avatar>
            </template>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-group 
        active-class="yellow--text"
        :value="false"
        no-action
      >
        <template v-slot:activator="{on}" >
          <v-list-item-title active-class="yellow--text" >
            Informação base  
          </v-list-item-title>
        </template>
        <v-list-item active-class="yellow--text" >
          <v-list-item-title active-class="yellow--text">Responsáveis</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title active-class="yellow--text">Professores</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title active-class="yellow--text">Alunos</v-list-item-title>
        </v-list-item>
        <v-list-item   active-class="yellow--text">
          <v-list-item-title active-class="yellow--text">Domínios</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title active-class="yellow--text">Questões</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title active-class="yellow--text">Testes</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group
          active-class="yellow--text"
          prepend-icon="mdi-wrench"
          :value="false"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title active-class="yellow--text">Produção</v-list-item-title>
          </template>
          <v-list-item active-class="yellow--text">
            <v-list-item-title >Domínios</v-list-item-title>
          </v-list-item>
          <v-list-item active-class="yellow--text">
            <v-list-item-title >Questões</v-list-item-title>
          </v-list-item>
          <v-list-item active-class="yellow--text">
            <v-list-item-title >Testes</v-list-item-title>
          </v-list-item>
      </v-list-group>
      <v-list-group
        active-class="yellow--text"
        :prepend-icon="['mdi-check-bold']"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Verificação</v-list-item-title>
        </template>
        <!-- ROTA DA IMPORTAÇÃO  -->
        <v-list-item active-class="yellow--text">
          <v-list-item-title>Importação de questões</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="yellow--text">
          <v-list-item-title>Verificação de questões</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="yellow--text">
          <v-list-item-title>Verificação de erros</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="yellow--text">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group
        active-class="yellow--text"
        prepend-icon="mdi-school"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Avaliação</v-list-item-title>
        </template>
        <v-list-item active-class="yellow--text" >
          <v-list-item-title >Realização de Testes</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title >Sessões de Quiz</v-list-item-title>
        </v-list-item>
          <v-list-item >
          <v-list-item-title >Resultados</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        prepend-icon="mdi-wechat"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Opiniões</v-list-item-title>
        </template>
        <v-list-item >
          <v-list-item-title >Inquérito de Sistema</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title >Análise de Inquéritos</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title >Estudo de Propriedades</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title >Sentimentos Expressos</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        active-class="yellow--text"
        prepend-icon="mdi-trophy-variant"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Gamificação</v-list-item-title>
        </template>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Domínios</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title >Alunos</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        active-class="yellow--text"
        prepend-icon="mdi-chart-bar"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Dashboards</v-list-item-title>
        </template>
        <v-list-item >
          <v-list-item-title >Alunos</v-list-item-title>
        </v-list-item>
        <v-list-item   active-class="yellow--text">
          <v-list-item-title >Respostas</v-list-item-title>
        </v-list-item>
        <v-list-item  >
          <v-list-item-title >Acessos</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        prepend-icon="mdi-account-multiple"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Utilizadores</v-list-item-title>
        </template>
        <v-list-item active-class="yellow--text">
          <v-list-item-title >Gestão</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Pedidos de Acesso</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Importação</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Atividade Corrente</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Historial de Acesso</v-list-item-title>
        </v-list-item>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Logs</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
    active-class="yellow--text"
    :prepend-icon="prependIcon"
    :value="false"
    no-action
  >
    <template v-slot:activator>
      <v-list-item-title active-class="yellow--text">Eventos</v-list-item-title>
    </template>
    <v-list-item>
      <v-list-item-title>Gestão</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Agenda</v-list-item-title>
    </v-list-item>
  </v-list-group>

      <v-list-group 
        active-class="yellow--text"
        prepend-icon="mdi-cog"
        :value="false"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title active-class="yellow--text">Definições</v-list-item-title>
        </template>
        <v-list-item  active-class="yellow--text">
          <v-list-item-title >Configuração geral</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item  >
        <template v-slot:prepend>
            <v-avatar v-on:click="about = true">
                <v-icon>mdi-help</v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>Ajuda</v-list-item-title>
      </v-list-item>

      <v-list-item   active-class="yellow--text">
        <template v-slot:prepend>
            <v-avatar v-on:click="about = true">
                <v-icon>mdi-text-box-multiple</v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>Documentação</v-list-item-title>
      </v-list-item>

      <v-list-item link @click="about = true" active-class="yellow--text">
        <template v-slot:prepend>
            <v-avatar v-on:click="about = true">
                <v-icon>mdi-information-outline</v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>Acerca de</v-list-item-title>
      </v-list-item>

      <v-dialog @keydown.esc="about = false" v-model="about" scrollable width="500">
            <v-card>
              <v-toolbar color="#2A3F54" dark>
                <h2>Acerca de</h2>
              </v-toolbar>

              <v-divider
              class="mx-4"
              horizontal
            ></v-divider>
              <v-card-text class="change-font mt-6" style="white-space: pre-line"
                >Acerca de</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-tooltip bottom> 
                  <template v-slot:activator="{ on }">
                      <v-btn depressed color="white" @click="about=false" v-on="{on}">
                        <v-icon large>mdi-exit-to-app</v-icon>
                      </v-btn>
                    </template>
                    <span>Voltar</span>
                  </v-tooltip>

              </v-card-actions>
            </v-card>
      </v-dialog>
      <v-list-item link @click="credits = true">
        <template v-slot:prepend>
            <v-avatar v-on:click="about = true">
                <v-icon>mdi-account-group</v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>Créditos</v-list-item-title>
      </v-list-item>
      <v-dialog @keydown.esc="credits = false"  v-model="credits" scrollable width="500">
        <v-card>
          <v-toolbar color="#2A3F54" dark>
            <h2>Créditos</h2>
          </v-toolbar>
          
          <v-divider
          class="mx-4"
          horizontal
          ></v-divider>
          
          <v-card-text class="change-font mt-6" style="white-space: pre-line"
            >Créditos</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-tooltip bottom> 
              <template v-slot:activator="{ on }">
                  <v-btn depressed color="white" @click="credits=false" v-on="{on}">
                    <v-icon large>mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Voltar</span>
              </v-tooltip>

          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-list-item link @click="terms = true">
        <template v-slot:prepend>
            <v-avatar v-on:click="about = true">
                <v-icon>mdi-book-multiple</v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>Termos de Utilização</v-list-item-title>
      </v-list-item>
      <v-dialog @keydown.esc="terms = false" v-model="terms" scrollable  width="500">
        <v-card>
          <v-toolbar color="#2A3F54" dark>
            <h2>Termos de Utilização</h2>
          </v-toolbar>

          <v-divider
          class="mx-4"
          horizontal
        ></v-divider>

          <v-card-text class="change-font mt-6" style="white-space: pre-line"
            >Termos de Utilização</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-tooltip bottom> 
              <template v-slot:activator="{ on }">
                  <v-btn depressed color="white" @click="terms=false" v-on="{on}">
                    <v-icon large>mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Voltar</span>
              </v-tooltip>
            </v-card-actions>
              </v-card>
          </v-dialog>

        <v-list-item link @click="priv = true">
          <template v-slot:prepend>
                <v-avatar v-on:click="about = true">
                    <v-icon>mdi-lock</v-icon>
                </v-avatar>
            </template>
              <v-list-item-title>Privacidade</v-list-item-title>
            </v-list-item>
            <v-dialog @keydown.esc="priv = false" v-model="priv" scrollable width="500"> 
              <v-card>
                <v-toolbar color="#2A3F54" dark>
                  <h2>Privacidade</h2>
                </v-toolbar>
                <v-divider
                class="mx-4"
                horizontal
              ></v-divider>

                <v-card-text class="change-font mt-6" style="white-space: pre-line"
                  >Privacidade</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  
                  <v-tooltip bottom> 
                    <template v-slot:activator="{ on }">
                        <v-btn depressed color="white" @click="priv=false" v-on="{on}">
                          <v-icon large>mdi-exit-to-app</v-icon>
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

export default {
  data() {
    return {
      priv: false,
      terms: false,
      credits: false,
      about: false,
    };
  },
  computed: {
    prependIcon() {
      return ['mdi-clock']
    },
    drawerState: {
        get () { return this.$store.getters.drawerState },
        set (v) { return this.$store.commit('toggleDrawerState', v) }
        }
  }
};
</script>

<style scoped>
header {
  background: #2a3f54;
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