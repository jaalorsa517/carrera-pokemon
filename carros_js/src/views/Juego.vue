<template lang="pug">
  section.juego
    modal(
      v-show="showModal"
      @close="showModal = false"
      @throw="onThrow"
    )
      template(v-slot:header)
        h3 Jugador {{getJugador.nombre}}
    h1 Carreras de autos
    .juego-container
      .pista
        .carril(
          v-for="carril,index in getConductores"
          :key="index"
        )
          img.carro(
            :src="getPokemons[index].img" 
            :alt="getPokemons[index].name"
            :style="stylesCarro"
            ref="carro"
            )
      button(@click="showModal=true") Iniciar
    h2 Registros
    .info-container(ref="log")
</template>

<script lang="js">
import getNumberRandom from "@/utils/random";
import Juego from "@/models/Juego";
import Pista from "@/models/Pista";
import Carro from "@/models/Carro";
import Conductor from "@/models/Conductor";
import Jugador from "@/models/Jugador";
import Carril from "@/models/Carril";
import modal from "@/components/Modal.vue"


export default {
  components:{
    modal
  },
  data: function() {
    return {
      juego: undefined,
      currentJugador: 0,
      showModal:false,
      stylesCarro:[
        {"margin-left":"0"},
        {"margin-left":"0"},
        {"margin-left":"0"},
        {"margin-left":"0"},
        {"margin-left":"0"},
      ]
    };
  },
  computed: {
    getPokemons: function() { return this.$store.state.pokemons},
    getConductores: function() {
      return this.juego.conductores
    },
    getJugador: function() {
      return this.getConductores[this.currentJugador].jugador
    },
    getCarro: function() {
      return this.getConductores[this.currentJugador].carro
    }
  },
  methods:{
    onThrow: function(){
      this.getCarro.avanzar(this.getConductores[this.currentJugador].tirarDado() * 100)
      let log = document.createElement("p")
      log.appendChild(document.createTextNode(`Jugador ${this.getJugador.nombre} avanzó al kilómetro ${this.getCarro.distancia/1000}`))
      this.$refs.log.appendChild(log)
      this.stylesCarro[this.currentJugador]["margin-left"] = `${this.getCarro.distancia * 100 / this.getCarro.carril}`
      this.currentJugador < this.getConductores.length-1 ? this.currentJugador++ : this.currentJugador = 0
    }
  },
  created: function() {
    //Crear jugadores humanos

    const players = this.$store.state.players;
    let jugadores = [];
    for (let i= 0; i < players.length; i++) {
      jugadores.push(new Jugador(i, players[i].name, "humano"));
    }
    //Crear jugadores maquina
    for (let i = jugadores.length ; i < 5; i++) {
      jugadores.push(new Jugador(i, this.getPokemons[i].name, "maquina"));
    }

    //Pistas
    const tracks = this.$store.getters.getTrack;
    let aux = [];
    switch (tracks) {
      case "Corta":
        //Id = 1, Nombre pista = Corta, longitud 1Km
        aux = [1, "Corta", 1];
        break;
      case "Larga":
        //Id = 2, Nombre pista = Larga, longitud 10Km
        aux = [2, "Larga", 10];
        break;
    }

    const pistas = [new Pista(aux[0], aux[1], aux[2])];

    //Crear carriles, carros y conductores
    let conductores = [];

    for (let i = 0; i < jugadores.length; i++) {
      let carril = new Carril(pistas[0].limite);
      let carro = new Carro(carril);
      conductores.push(new Conductor(jugadores[i], carro));
    }

    let idGame = getNumberRandom(10000000, 1000000);
    let juego = new Juego(idGame);
    juego.pistas = pistas;
    juego.conductores = conductores;
    this.juego = juego;
  },
};
</script>

<style lang="stylus">
.juego
  .juego-container
    width  95vw
    height auto
    position relative
  .pista
    width 100%
    height auto
    position relative
  .carril
    width 100%
    margin 15px 0
    display flex
    background-color green
  .carro
    width 10%
    height 10%

  .info-container
    width  95vw
    height 25vh
    overflow auto
</style>
