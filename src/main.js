import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GitHubFetch from './components/GitHubFetch.vue'
import SingleRepository from './components/SingleRepository.vue'
import HomePage from './components/HomePage.vue'
import './assets/tailwind.css'
import('@/assets/main.css')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage   
    },
    {
      path: '/repositories',
      name: 'GitHubFetch',
      component: GitHubFetch
    },
    {
      path: '/data/:id',
      name: 'SingleRepository',
      component: SingleRepository
    }
  ]
})

createApp(App).use(router).mount('#app')
