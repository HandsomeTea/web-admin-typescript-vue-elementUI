import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './stateModel';
import user from './user'

Vue.use(Vuex);

const state: RootState = {
    loginStatus: false,
    language: 'zh'
};
const store: StoreOptions<RootState> = {
    modules: {
        user,
    },
    state,
    mutations: {
        _login(state) {
            state.loginStatus = true;
        },
        _logout(state) {
            state.loginStatus = false;
        },
        _setLanguage(state: RootState, language: string) {
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
        setLanguage({ commit }, language: string) {
            commit('_setLanguage', language);
        }
    },
    getters: {

    }
}
export default new Vuex.Store<RootState>(store);
