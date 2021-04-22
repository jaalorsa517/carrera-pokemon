<template lang="pug">
section.Home
  h1 Carrera Pokemon
  p Bienvenido a este juego donde competiran pokemon por el primer lugar de la carrera
  .msg(v-show="msg !== ''") {{msg}}
  form
    .numbers-players.containers
      label(for="name") ¿Cuántos jugadores son?
      input(
        type="number" 
        name="jugadores" 
        min="1" 
        :max="maxPlayer"
        v-model="numPlayers"
        )
    .names-players.containers(v-for="player in players")
      label(for="nombre") Nombre
      input(v-model="player.name" name="nombre")

    .track.containers
      label() Pista
      v-select(
        :options="optionsSelect"
        v-model="track"
      )
    input.submit(
      type="submit" 
      value="Iniciar"
      @click.prevent="onClick"
      )
</template>

<script lang="ts">
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

export default Vue.extend({
  name: "Home",
  components: {},
  data: function() {
    return {
      numPlayers: 1,
      track: "",
      optionsSelect: ["Corta: 1Km", "Larga: 10Km"],
      players: [{ name: "" }],
      msg:""
    };
  },
  computed: {
    maxPlayer: function() {
      return this.$store.getters.getMaxPlayers;
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
      if (!this.players.some(value => value.name === "") && this.track !== "") {
        this.$store.commit("setPlayers", this.players);
        this.$store.commit(
          "setTrack",
          this.track.substring(0, this.track.indexOf(":"))
        );
        this.$router.replace({ name: "Juego" });
      }
      else{
        this.msg="No pueden haber campos vacíos."
        setTimeout(()=>this.msg="",2000)
      }
    }
  },
  beforeMount: function() {
    this.$store.dispatch("actionPokemons");
  }
});
</script>

<style lang="stylus">
.Home
  display flex
  flex-direction column
  align-items center
  p
    font-size 1.3rem
  
  .msg
    width 100%
    margin-bottom 10px
    padding 10px
    background-color #46df7e70

  label
    margin-right 10px

  .containers
    margin-bottom 15px
  
  .track
    display flex
    width 200px

  .submit
    font-size 1.3rem
</style>
