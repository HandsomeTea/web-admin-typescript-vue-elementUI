import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {

    },
    state: {
        loginStatus: false,
        language: 'zh'
    },
    mutations: {
        _login(state) {
            state.loginStatus = true;
        },
        _logout(state) {
            state.loginStatus = false;
        },
        _setLanguage(state, language) {
            if (state.language !== language) {
                state.language = language;
            }
        }
    },
    actions: {
        login({ commit }) {
            commit('_login');
        },
        logout({ commit }) {
            commit('_logout');
        },
        setLanguage({ commit }, language) {
            commit('_logout', language);
        }
    },
    getters: {

    }
});
// store.dispatch('login')

// computed: {
//     isHideMenu() {
//         return this.$store.state.sideShrink;
//     }
// }
