import 'babel-polyfill';
import Vue from 'vue';
import view from './views/index.vue';
import store from './store';
import router from './router';

new Vue({
    router,
    store,
    render: h => h(view),
}).$mount('#app');
