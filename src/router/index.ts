import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [{
    path: '/',
    redirect: '/index',
    component: () => import(/* webpackChunkName: 'layout' */ '../views/layout/index.vue'),
    children: [
        {
            path: '/index',
            component: () => import(/* webpackChunkName: 'home' */ '../views/home/index.vue')
        }
    ]
}, {
    path: '/login',
    component: () => import(/* webpackChunkName: 'layout' */ '../views/login.vue')
}];

const route = new VueRouter({
    routes
});

/** 全局导航守卫 */
/* 前置导航守卫 */
route.beforeEach((to: Route, from: Route, next) => {
    // do something before next route
    next();
});

/* 后置导航守卫 */
route.afterEach((/*to: Route, from: Route*/) => {
    // do something after route
});

export default route;
