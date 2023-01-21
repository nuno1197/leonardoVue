<template>

<v-app>
  <div>
    <loginHeader :ajuda='ajuda'></loginHeader>
    <v-row class="pt-12" justify="center" >
      <v-col cols="12" sm="4" offset-sm="0">
        <v-img class="center" src="src/assets/leonardo_logo.png" max-height="500px" max-width="500px" @click="popup = true"/>
        <div class="text">
          <v-badge
            color="green"
            x-large
            content="2"
          >
            <h1>Leonardo</h1>
          </v-badge>
          <h5>Sistema de Aferição de Conhecimento Multidisciplinar</h5>
        </div>
      </v-col>
      <v-col cols="12" sm="4" align-self="end"> 
        <v-form ref="form" method="login">
          <v-text-field
            color="blue"
            outlined
            label="User"
            prepend-inner-icon="mdi-account"
            v-model="id"
            @keydown.enter="postLogin"
            required            
          ></v-text-field>
          <v-text-field
            color="blue"
            outlined
            prepend-inner-icon="mdi-lock"
            label="Password"
            type='password'
            v-model="password"
            @keydown.enter="postLogin"
            required            
          ></v-text-field>
          <v-btn 
            depressed 
            block
            x-large
            color="#26B99A" 
            class="white--text" 
            @keydown.enter="postLogin" 
            @click="postLogin">ENTRAR</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>

    <!-- Daqui para cima -->
    <div style="text-align:center">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn text v-on="{ ...tooltip}" class="mr-5" style="background-color:lightgray" @click="dialogPW = true">
            <v-icon>mdi-lock-reset</v-icon>
          </v-btn >
        </template>
        <span>teste</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn text v-on="{ ...tooltip}" style="background-color:lightgray" @click="dialogPedido = true">
            <v-icon>mdi-text-box-check</v-icon>
          </v-btn >
        </template>
        <span>TESTE</span>
      </v-tooltip>
    </div>
    <v-dialog
      v-model="dialogPW"
      scrollable 
      width="500"
      persistent
    >
    <v-card>
    <v-toolbar v-bind:color="colorCode"  dark>
      <h1 class="white--text" :style="{ marginLeft: '15px' }">Login</h1>
    </v-toolbar>
    <v-row>
      <v-col style="margin-left:1cm;margin-right:1cm;max-width:20px; margin-top:20px" >
        <v-icon x-large color="blue" dark>mdi-message-text</v-icon>
      </v-col>
      <v-col>
        <v-card-text>
          <h3 class="grey--text">Pedido de recuperação de credenciais enviado ao sistema.</h3>
        </v-card-text>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn @click="dialogPW = false" to="/login" v-on="{ ...tooltip}">
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <span>
          Fechar
        </span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</v-dialog>
<v-dialog
  v-model="dialogPedido"
  scrollable 
  width="900"
  persistent
>
  <v-card height="100%" width="100%">
    <v-toolbar v-bind:color="colorCode"  dark>
      <h1 class="white--text" :style="{ marginLeft: '15px' }">Página de registo</h1>
    </v-toolbar>
    <v-card-actions>
      <v-row
            class="fill-width"
            align="center"
            justify="center"
          >
      <div style="width:800px">
        <v-form ref="form" method="post" enctype="multipart/form-data">
          <v-container>
            <v-row>
              <v-col md="3">
                <v-text-field
                  label="Username"
                  v-model="pedido.username"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-col md="3">
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="pedido.pw"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Nome"
                  v-model="pedido.nome"
                  :rules="[rules.required]"                    
              />
              </v-col>
            </v-row>
            <v-row>
              <v-col md="2" class="mt-n10">
                <v-text-field
                  label="Nº Aluno"
                  v-model="pedido.studentNumber"
                  :rules="[rules.required]"                    
              />
              </v-col>
              <v-col md="4" class="mt-n10">
                <v-text-field
                  label="Email"
                  v-model="pedido.email"
                  :rules="[rules.required, rules.email]"
                  required                    
              />
              </v-col>
              <v-col md="3" class="mt-n10">
                <v-text-field
                  label="Universidade"
                  :rules="[rules.required]"
                  v-model="pedido.universidade"             
              />
              </v-col>
              <v-col md="3" class="mt-n10">
                <v-text-field
                  label="Departamento"
                  :rules="[rules.required]"
                  v-model="pedido.departamento"                      
              />
              </v-col>
            </v-row>
            <v-container fluid class="mt-n5">
              <v-row>
                <label>Tipo</label>
                <h5 style="color:red">*</h5>
              </v-row>
              <v-row class="mt-n3">
                <v-col cols="3">
                  <v-radio v-model="pedido.tipo" :label="'Admin'" :value="'Admin'" :rules="[rules.required]"></v-radio>
                </v-col>
                <v-col cols="3">
                  <v-radio v-model="pedido.tipo" :label="'Teacher'" :value="'Teacher'" :rules="[rules.required]"></v-radio>
                </v-col>
                <v-col cols="3">
                  <v-radio v-model="pedido.tipo" :label="'Student'" :value="'Student'" :rules="[rules.required]"></v-radio>
                </v-col>
                <v-col cols="3">
                  <v-radio v-model="pedido.tipo" :label="'Leitor'" :value="'Leitor'" :rules="[rules.required]"></v-radio>
                </v-col>
              </v-row>
            </v-container>
            <v-row align="center">
              <v-col md="5" class="mt-n1">
                <label>Adicionar fotografia:</label>
                <v-file-input v-model="pedido.foto" show-size label="File input" />
              </v-col>
              <v-col md="5" class="mt-n1">
                <label>CV:</label>
                <v-file-input show-size type="file" label="File input" v-model="pedido.curriculo"></v-file-input>
              </v-col>
              
            </v-row>
            <v-col md="8" class="mt-n10">
              <v-text-field
                label="Observações"
                v-model="pedido.comments"                     
              />
            </v-col>
            <br>
            <v-col class="mt-n10" align="center">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn  @click.prevent="reset" v-on="{...tooltip}">
                    <v-icon size="30">mdi-history</v-icon>
                  </v-btn>
                </template>
                <span>
                  Repôr
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template #activator="{ on: tooltip }">
                  <v-btn @click="post();" v-on="{ ...tooltip}" :disabled="disableButton">
                    <v-icon size="30">mdi-check</v-icon>
                  </v-btn>
                </template>
                <span>
                  TESTE
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn  @click="dialogPedido = false" v-bind="{ ...tooltip }">
                    <v-icon size="30">mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>
                  Fechar
                </span>
              </v-tooltip>
            </v-col>
          </v-container>
        </v-form>
      </div>
      </v-row>
    </v-card-actions>
    </v-card>
</v-dialog>
    <appFooter></appFooter>
  </div>
</v-app>
</template>
<script>

import axios from 'axios'
import loginHeader from '../components/headerLogin.vue'
import footer2 from '../components/footer2.vue'
export default {  
  data(){
    return {
      tooltip1: 'Recuperar Palavra-Passe',
      tooltip2: 'Registo',
      id : "",
      password : "",
      dialog: false,
      ajuda:'login',
      popup:false,
      dialogPW:false,
      dialogPedido:false,
      pedido:{
        username:"",
        nome:"",
        studentNumber:"",
        pw:"",
        email:"",
        tipo:"",
        universidade:"",
        departamento:"",
        foto:{},
        curriculo:{},
        comments:""
      },
      valid:true,
      failureDialog:false,
      rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(pattern.test(value)){
              this.valid = true
            }else{
              this.valid = false
            }
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
      colorCode: this.$store.getters.skinColor,
      topNavColor: this.$store.getters.topNavCode,
    }
  },
  created(){
    this.pedido.username=''
    this.pedido.nome=''
    this.pedido.pw=''
    this.pedido.email=''
    this.pedido.tipo = false
    this.pedido.universidade=''
    this.pedido.departamento=''
    this.pedido.foto={}
    this.pedido.curriculo={}
    this.pedido.comments=''
  },
  methods:{
    postLogin: function () {
      let formData = new FormData()
        formData.append('id',this.id)
        formData.append('password',this.password)
      axios.post(`${process.env.VUE_APP_BACKEND}/login`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization:`Bearer: ${this.$store.state.jwt}`,
            'Access-Control-Allow-Origin': "*"     
        }
      }).then(data => {
          if (data.data.error){
            this.$refs.form.reset()
            this.dialog = !this.dialog
          }
          else if(data.data.token!=undefined){ // &&data.data.users
            this.$store.commit("guardaTokenUtilizador", data.data.token)
            this.$store.commit("guardaNomeUtilizador", data.data.user)
            this.$store.commit('set_user',  data.data.user) 
            
            console.log('-----USER')
            console.log(data.data.user)
            this.$router.push( {path:`/`})
          }
      }).catch(e => {
          console.log(e);
})
    },
    post: function() {
        let formData = new FormData()
            formData.append('username',this.pedido.username)
            formData.append('name',this.pedido.nome)
            formData.append('password',this.pedido.pw)
            formData.append('email',this.pedido.email)
            formData.append('tipo',this.pedido.tipo)
            formData.append('universidade',this.pedido.universidade)
            formData.append('departamento',this.pedido.departamento)
            formData.append('foto',this.pedido.foto)
            formData.append('curriculo',this.pedido.curriculo)
            formData.append('obs',this.pedido.comments)
            formData.append('studentNumber',this.pedido.studentNumber)

        axios.post(`${process.env.VUE_APP_BACKEND}/users/pedidos/registar`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': "*"    
          }
        }).then(data => {
          if(data.data.message){
              this.failureDialog = true
            }
          else{
            this.dialogPedido = false
            this.$refs.form.reset()
            this.$router.push( {path:`/login`})
          }
        }).catch(e => {
            this.errors.push(e)
        })
    },
    reset () {
      this.$refs.form.reset()
      this.pedido.username=''
      this.pedido.nome=''
      this.pedido.pw=''
      this.pedido.email=''
      this.pedido.tipo = false
      this.pedido.universidade=''
      this.pedido.departamento=''
      this.pedido.foto={}
      this.pedido.curriculo={}
      this.pedido.comments=''
    }
  },
  computed:{
    disableButton (){
        if(this.pedido.username){
            if (this.valid && this.pedido.username.length > 0 && this.pedido.nome.length > 0 && this.pedido.pw.length > 0 && this.pedido.email.length > 0  && this.pedido.tipo)
                return false
            else
                return true
        }
        else{
            return true
        }
    } 
  },
    isSelected: function() {
        return this.selected === this.pedido.tipo
    },
  components:{
    'loginHeader': loginHeader,
    'appFooter': footer2
  }
}
</script>
<style scoped>
.white--text{
  color: white;
}
.grey--text{
  color: grey;
}
  #login *{
            box-sizing: border-box;
  }
  #form{
            margin: 20px auto;
            max-width: 500px;
  }
  #links{
            margin: 20px auto;
            max-width: 1000px;
            justify-content: centerd;
  }

  .text{
    text-align: center;
  }
  .centered {
      text-align: center;
      width: 100%;
  }

  .center {
    margin-top: 2cm;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .centered_tab {
      float:none; /*to make sure there is no active float*/
      display: inline-block;
  }
  #checkboxes input{
            display: inline-block;
            margin-right: 10px;
  }
  #checkboxes label{
            display: inline-block;
  }
</style>
