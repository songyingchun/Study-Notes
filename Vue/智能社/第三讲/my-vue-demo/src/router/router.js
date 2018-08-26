import Vue from 'vue';
import VueRouter from 'vue-router';
import home from 'views/home';
import list from 'views/list';

import nav from 'components/nav';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/list',
        component: list
    },
    {
        path: '/nav',
        component: nav
    }
];

const router = new VueRouter({
    routes 
});

export default router;