import Vue from "vue";
import Vuex from "vuex";
import getPokemons from "@/services/Pokemon";

Vue.use(Vuex);

let juego: any = undefined;

export default new Vuex.Store({
  state: {
    maxPlayers: 5,
    players: [],
    track: "",
    pokemons: [],
    juego: juego
  },
  getters: {
    getMaxPlayers: state => state.maxPlayers,
    getPlayers: state => state.players,
    getTrack: state => state.track,
    getJuego: state => state.juego
  },
  mutations: {
    setPlayers(state, payload) {
      state.players = payload;
    },
    setTrack(state, payload) {
      state.track = payload;
    },
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setJuego(state, payload) {
      state.juego = payload;
    }
  },
  actions: {
    async actionPokemons(context) {
      let payload = await getPokemons(5);
      context.commit("setPokemons", payload);
    }
  },
  modules: {}
});
