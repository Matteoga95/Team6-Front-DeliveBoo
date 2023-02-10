import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import RestaurantView from './views/RestaurantView.vue';
import NotFoundView from './views/NotFoundView.vue';
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
            path: '/restaurant/:slug',
            name: 'restaurant',
            component: RestaurantView
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