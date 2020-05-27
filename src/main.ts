import 'babel-polyfill';
import Vue from 'vue';
import store from './store';
import router from './router';
import i18n from './lang';
import view from './views/index.vue';
import eleUITools from './ui-frame/elementui/UI-tool';
import './ui-frame';
import './assets';
Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.config.errorHandler = async (error, vm, info) => {
    eleUITools.error(`${error}`);
};
Vue.config.warnHandler = (msg, vm, trace) => {
    console.error(msg);
};

new Vue({
    router,
    store,
    i18n,
    render: h => h(view),
    watch: {
        $route(to/*, from*/) {
            if (to.meta.title) {
                document.title = `elementUI — ${to.meta.title}`;
            }
        },
        lang() {
            if (i18n.locale !== this.lang) {
                i18n.locale = this.lang;
            }
        }
    },
    computed: {
        lang() {
            return store.state.language;
        }
    },
}).$mount('#app');
