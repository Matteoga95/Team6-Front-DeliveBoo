import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import RestaurantView from './views/RestaurantView.vue';
import NotFoundView from './views/NotFoundView.vue';
import SuccessView from './views/SuccessView.vue';
import CheckoutView from './views/CheckoutView.vue'

const router = createRouter({
    scrollBehavior(to, from) {
        return { top: 0 }
    },
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
            component: RestaurantView,
            props: true
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
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutView
        }

    ]
})

export { router }