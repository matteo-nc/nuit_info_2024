import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// import { createApp } from 'vue'
// import { createMemoryHistory, createRouter } from 'vue-router'
// import './assets/style.css'
// import App from './App.vue'
// import Home from "./components/Home.vue";
// import Game from "./components/Game.vue";
// import Credits from "./components/Credits.vue";
//
// const routes = [
//     {
//         path: '/',
//         component: Home,
//         props: {msg: "Hello"}
//     },
//
//     {
//         path: '/test',
//         component: Game
//     },
//
//     {
//         path: '/credits',
//         component: Credits
//     }
// ]
//
// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// })
//
// createApp(App)
//     .use(router)
//     .mount('#app')
