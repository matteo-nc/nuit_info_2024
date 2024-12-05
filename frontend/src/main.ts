import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";
import Credits from "./components/Credits.vue";

const routes = [
    {
        path: '/',
        component: Home,
        props: {msg: "Hello"}
    },

    {
        path: '/test',
        component: Game
    },

    {
        path: '/credits',
        component: Credits
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
