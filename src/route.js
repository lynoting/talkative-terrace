import Vue from 'vue'
import VueRouter from "vue-router"
import AshOnTheScarf from "./components/AshOnTheScarf.vue"
import BakedNorBoiled from "./components/BakedNorBoiled.vue"
import HomePage from "./components/HomePage.vue"
import AppleIsNotDefined from "./components/AppleIsNotDefined.vue"
import Menu from "./components/Menu.vue"


Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: Menu },
    { path: '/baked-nor-boiled', component: BakedNorBoiled },
    { path: '/ash-on-the-scarf', component: AshOnTheScarf },
    { path: '/apple-is-not-defined', component: AppleIsNotDefined },
    
]

const router = new VueRouter({
    routes: routes
})

export default router