import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import RestaurantView from './views/RestaurantView.vue';
import NotFoundView from './views/NotFoundView.vue';
import SuccessView from './views/SuccessView.vue';
import StreetView from './views/StreetView.vue';
import ItalianaView from './views/ItalianaView.vue';
import CineseView from './views/CineseView.vue';
import MessicanaView from './views/MessicanaView.vue';
import VeganaView from './views/VeganaView.vue';
import GiapponeseView from './views/GiapponeseView.vue';
import CeliacaView from './views/CeliacaView.vue';
import IndianaView from './views/IndianaView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/',
            name: 'streetfood',
            component: StreetView
        },
        {
            path: '/',
            name: 'messicana',
            component: MessicanaView
        },
        {
            path: '/',
            name: 'celiaca',
            component: CeliacaView
        },
        {
            path: '/',
            name: 'indiana',
            component: IndianaView
        },
        {
            path: '/',
            name: 'giapponese',
            component: GiapponeseView
        },
        {
            path: '/',
            name: 'vegana',
            component: VeganaView
        },
        {
            path: '/',
            name: 'cinese',
            component: CineseView
        },
        {
            path: '/',
            name: 'italiana',
            component: ItalianaView
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