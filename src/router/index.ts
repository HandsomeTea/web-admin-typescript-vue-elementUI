import Vue from 'vue';
import VueRouter, { RouteConfig, Route, NavigationGuardNext } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
    path: '/',
    redirect: '/index',
    component: () => import(/* webpackChunkName: 'layout' */ '../views/layout/index.vue'),
    children: [{
        path: '/index',
        component: () => import(/* webpackChunkName: 'home' */ '../views/home/index.vue')
    }]
}, {
    path: '/login',
    component: () => import(/* webpackChunkName: 'layout' */ '../views/login.vue')
}];

const route = new VueRouter({
    mode: process?.env?.NODE_ENV === 'development' ? 'hash' : 'history',
    routes
});

/**
 * 全局导航守卫
 */

/* 前置导航守卫 */
route.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
    // do something before next route
    next();
});

/* 后置导航守卫 */
route.afterEach((/*to: Route, from: Route*/) => {
    // do something after route
});

export default route;
