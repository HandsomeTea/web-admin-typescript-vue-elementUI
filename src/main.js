import Vue from 'vue';
import view from './views/index.vue';
import router from './router';
import store from './store';

new Vue({
    router,
    store,
    render: h => h(view),
}).$mount('#app');
