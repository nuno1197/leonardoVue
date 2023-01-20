import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import HomeView from '../views/Home.vue'
import UsersView from '../views/Utilizadores.vue'
import ResponsaveisView from '../views/Responsaveis.vue'
import AlunosView from '../views/Alunos.vue'
import ProfessoresView from '../views/Professores.vue'
import DominiosView from '../views/Dominios.vue'
import QuestoesView from '../views/Questoes.vue'
import GestaoTestesView from '../views/GestaoTestes.vue'
import ConfiguradorView from '../views/Configurador.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/responsaveis',
      name: 'responsaveis',
      component: ResponsaveisView
    },
    {
      path: '/alunos',
      name: 'alunos',
      component: AlunosView
    } ,
    {
      path: '/professores',
      name: 'professores',
      component: ProfessoresView
    },
    {
      path: '/dominios',
      name: 'dominios',
      component: DominiosView
    },
    {
      path: '/questoes',
      name: 'questoes',
      component: QuestoesView
    },
    {
      path: '/gestaotestes',
      name: 'gestaotestes',
      component: GestaoTestesView
    },
    {
      path: '/configurador',
      name: 'configurador',
      component: ConfiguradorView
    }
    
  ]
})

export default router
