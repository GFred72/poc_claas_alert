import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/Home'),
    },
    {
        path: '/alert/creer',
        name: 'creerAlerte',
        component: require('./components/CreaAlert')
    },
    {
        path: '/alert/affect/ta',
        name: 'affecterTa',
        component: require('./components/AffectTaAlerte')
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router