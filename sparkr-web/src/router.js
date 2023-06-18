import { createRouter, createWebHistory } from 'vue-router'
import GetStarted from './pages/GetStarted'
import DashPage from './pages/DashPage.vue'
import CreatePage from './pages/CreatePage.vue'
import ProjectPage from './pages/ProjectPage.vue'


const routes = [
  { path: '/', component: GetStarted },
  { path: '/dash', component: DashPage },
  { path: '/create', component: CreatePage },
  { path: '/project', component: ProjectPage },



]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
