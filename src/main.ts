import 'babel-polyfill';
import Vue from 'vue';
import store from './store';
import router from './router';
import view from './views/index.vue';
import './ui-frame';
import {
    Message
} from 'element-ui';
import lang from './lang';
Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.config.errorHandler = (error, vm, info) => {
    Message.error(store.state.language && lang[store.state.language] && lang[store.state.language][error] || error);
};
Vue.config.warnHandler = (msg, vm, trace) => {
    console.error(msg);
};

new Vue({
    router,
    store,
    render: h => h(view),
}).$mount('#app');
