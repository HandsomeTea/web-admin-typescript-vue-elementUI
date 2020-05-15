import Vue from 'vue';
import VueRouter from 'vue-router';

import '../views/home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    // redirect: '/login',
    component: () =>
        import('../views/home.vue')
}];

export default new VueRouter({
    routes
});
