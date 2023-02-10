import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import RestaurantView from './views/RestaurantView.vue';
import NotFoundView from './views/NotFoundView.vue';
import SuccessView from './views/SuccessView.vue';
import StreetView from './views/Tipologies/StreetView.vue';
import ItalianaView from './views/Tipologies/ItalianaView.vue';
import CineseView from './views/Tipologies/CineseView.vue';
import MessicanaView from './views/Tipologies/MessicanaView.vue';
import VeganaView from './views/Tipologies/VeganaView.vue';
import GiapponeseView from './views/Tipologies/GiapponeseView.vue';
import CeliacaView from './views/Tipologies/CeliacaView.vue';
import IndianaView from './views/Tipologies/IndianaView.vue';

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
            path: '/street',
            name: 'streetfood',
            component: StreetView
        },
        {
            path: '/messicana',
            name: 'messicana',
            component: MessicanaView
        },
        {
            path: '/celiaca',
            name: 'celiaca',
            component: CeliacaView
        },
        {
            path: '/indiana',
            name: 'indiana',
            component: IndianaView
        },
        {
            path: '/giapponese',
            name: 'giapponese',
            component: GiapponeseView
        },
        {
            path: '/vegana',
            name: 'vegana',
            component: VeganaView
        },
        {
            path: '/cinese',
            name: 'cinese',
            component: CineseView
        },
        {
            path: '/italiana',
            name: 'italiana',
            component: ItalianaView
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