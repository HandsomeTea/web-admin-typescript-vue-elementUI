import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './stateModel';
import user from './user';

Vue.use(Vuex);

const state: RootState = {
    loginStatus: false,
    language: (window.navigator.language || 'zh').toLowerCase().split('-')[0],
    menuHidden: false
};
const store: StoreOptions<RootState> = {
    modules: {
        user
    },
    state,
    mutations: {
        _toogleSideShrink(state: RootState) {
            state.menuHidden = !state.menuHidden;
        },
        _login(state: RootState) {
            state.loginStatus = true;
        },
        _logout(state: RootState) {
            state.loginStatus = false;
        },
        _setLanguage(state: RootState, language: string) {
            if (state.language !== language) {
                state.language = language;
            }
        }
    },
    actions: {
        toogleSideShrink({ commit }) {
            commit('_toogleSideShrink');
        },
        login({ commit }) {
            commit('_login');
        },
        logout({ commit }) {
            commit('_logout');
        },
        setLanguage({ commit }, language: string) {
            commit('_setLanguage', language);
        }
    },
    getters: {}
};

export default new Vuex.Store<RootState>(store);
