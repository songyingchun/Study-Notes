import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/dashboard/page1'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [{
                path: 'static',
                component: Page1,
                props: {
                    foo: 'bar' // 给组件传静态值
                }
            }, {
                path: 'page1/:foo',
                name: 'page1',
                component: Page1,
                props: true
            }, {
                path: 'page2/:msg',
                name: 'page2',
                component: Page2
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})