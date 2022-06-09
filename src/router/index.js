import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/Home.vue';
import QuiSuisJe from '../views/QuiSuisJe.vue';
import Contact from "../views/Contact.vue";
import Prestations from "../views/Prestations.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/qui-suis-je',
        name: 'QuiSuisJe',
        component: QuiSuisJe
    },
    {
        path: '/prestations',
        name: 'Prestations',
        component: Prestations
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        window.scrollTo(0,0)
    }
})

export default router