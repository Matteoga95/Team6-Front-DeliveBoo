import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import MenuView from './views/MenuView.vue';
import NotFoundView from './views/NotFoundView.vue';
import SearchView from './views/SearchView.vue';
import SuccessView from './views/SuccessView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuView
        },
        {
            path: '/success',
            name: 'success',
            component: SuccessView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },

    ]
})

export { router }