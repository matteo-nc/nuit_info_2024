import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Game from "../views/Game.vue";
import Credits from "../views/Credits.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/test',
      name: 'Test',
      component: Game,
    },
    {
      path: '/credits',
      name: 'Crédits',
      component: Credits,
    },
    {
      path: '/video',
      name: 'Podcast',
      component: Video,
    },
  ],
})

export default router
