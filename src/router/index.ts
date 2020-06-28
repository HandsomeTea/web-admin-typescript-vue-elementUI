import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        redirect: '/index',
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: '/index',
                component: () => import('../views/home/index.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    }
];

const route = new VueRouter({
    routes
});

/** 全局导航守卫 */
/* 前置导航守卫 */
route.beforeEach((to, from, next) => {
    // do something before next route
    next();
});

/* 后置导航守卫 */
route.afterEach((/*to, from*/) => {
    // do something after route
});

export default route;
