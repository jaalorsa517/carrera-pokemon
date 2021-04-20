<template lang="pug">
section.Home
  h1 Carrera Pokemon
  p Bienvenido a este juego donde competiran pokemon por el primer lugar de la carrera
  form
    label(for="name") ¿Cuántos jugadores son?
    input(type="number" name="jugadores" min="0" :max="maxPlayer")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  computed: {
    maxPlayer: function() {
      return this.$store.getters.getMaxPlayers;
    }
  }
});
</script>
