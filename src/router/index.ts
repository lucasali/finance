import HomeView from '@/views/HomeView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: () => import('../views/AccountsView.vue'),
        },
        {
            path: '/create-account',
            name: 'create-account',
            component: () => import('../views/CreateAccountView.vue'),
        },
    ],
});

export default router;
