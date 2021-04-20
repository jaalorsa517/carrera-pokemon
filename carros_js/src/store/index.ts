import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxPlayers: 5
  },
  getters: {
    getMaxPlayers: state => state.maxPlayers
  },
  mutations: {},
  actions: {},
  modules: {}
});
