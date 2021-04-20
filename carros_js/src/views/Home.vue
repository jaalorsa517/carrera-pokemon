<template lang="pug">
section.Home
  h1 Carrera Pokemon
  p Bienvenido a este juego donde competiran pokemon por el primer lugar de la carrera
  form
    .numbers-players
      label(for="name") ¿Cuántos jugadores son?
      input(
        type="number" 
        name="jugadores" 
        min="1" 
        :max="maxPlayer"
        v-model="numPlayers"
        )
    .names-players(v-for="player in players")
      label(for="nombre") Nombre
      input(v-model="player.name" name="nombre")
    input(
      type="submit" 
      value="Iniciar"
      @click.prevent="onClick"
      )
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  data: function() {
    return {
      numPlayers: 1,
      players: [{ name: "" }]
    };
  },
  computed: {
    maxPlayer: function() {
      return this.$store.getters.getMaxPlayers;
    },
    getArrayPlayers: function() {
      return new Array(this.numPlayers);
    }
  },
  watch: {
    numPlayers: function(newValue, oldValue) {
      if (newValue > oldValue) {
        this.players.push({ name: "" });
      } else {
        this.players.pop();
      }
    }
  },
  methods: {
    onClick: function() {
      if (!this.players.some(value => value.name === ""))
        this.$router.replace({ name: "Juego" });
    }
  }
});
</script>
