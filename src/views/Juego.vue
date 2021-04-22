<template lang="pug">
  section.juego
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
            :style="stylesCarro[index]"
            ref="carro"
            )
      button(@click="onThrow") Lanzar Dado
    h2 Registros
    .info-container(ref="log")
</template>

<script>
import getNumberRandom from "@/utils/random";
import Juego from "@/models/Juego";
import Pista from "@/models/Pista";
import Carro from "@/models/Carro";
import Conductor from "@/models/Conductor";
import Jugador from "@/models/Jugador";
import Carril from "@/models/Carril";

export default {
  data: function() {
    return {
      juego: undefined,
      currentJugador: 0,
      position: 1,
      resultDado: 0,
      showModal: false,
      stylesCarro: [
        { "margin-left": "0" },
        { "margin-left": "0" },
        { "margin-left": "0" },
        { "margin-left": "0" },
        { "margin-left": "0" }
      ]
    };
  },
  computed: {
    getPokemons: function() {
      return this.$store.state.pokemons;
    },
    getConductores: function() {
      return this.juego.conductores;
    },
    getConductor: function() {
      return this.getConductores[this.currentJugador];
    },
    getJugador: function() {
      return this.getConductor.jugador;
    },
    getCarro: function() {
      return this.getConductor.carro;
    },
    getAvance: function() {
      return (
        (this.getCarro.distancia * 100) / (this.getCarro.carril.longitud * 1000)
      );
    },
    msgLog: function() {
      if (this.getConductor.position === 0) {
        return `Jugador ${this.getJugador.nombre} avanzó ${this.resultDado} metros`;
      } else {
        return `Jugador ${this.getJugador.nombre} terminó la carrera`;
      }
    }
  },
  watch: {
    position: function(newValue) {
      if (newValue > 5) {
        this.$store.commit("setJuego", this.juego);
        this.$router.replace({ name: "Podio" });
      }
    }
  },
  methods: {
    /**
     * Método que se encarga del movimiento de los carros
     */
    onThrow: function() {
      if (this.getConductor.position === 0) {
        this.resultDado = this.getConductor.tirarDado() * 100;
        this.getCarro.avanzar(this.resultDado);
        this.newP();

        if (
          (this.getCarro.distancia / 1000 >= this.getCarro.carril.longitud) |
          (this.getAvance + this.getCarro.distancia >=
            this.getCarro.carril.longitud * 1000)
        ) {
          this.stylesCarro[this.currentJugador]["margin-left"] = `90%`;

          if (this.position <= 5) {
            this.getConductor.position = this.position;
            this.position++;
          }
        } else {
          this.stylesCarro[this.currentJugador][
            "margin-left"
          ] = `${this.getAvance}%`;
        }
      } else {
        this.newP();
      }

      if (this.currentJugador < this.getConductores.length - 1) {
        this.currentJugador++;
      } else {
        this.currentJugador = 0;
      }
    },
    newP: function() {
      //Crear un nuevo parrafo y se agrega al final del log
      let log = document.createElement("p");
      log.appendChild(document.createTextNode(this.msgLog));
      this.$refs.log.insertAdjacentElement("afterbegin", log);
      // this.$refs.log.appendChild(log);
    }
  },
  /**
   * Hook que inicializa todo el juego. Acá se instancia todas las clases de los modelos
   */
  created: function() {
    //Crear jugadores humanos

    const players = this.$store.state.players;
    let jugadores = [];
    for (let i = 0; i < players.length; i++) {
      jugadores.push(new Jugador(i, players[i].name.toUpperCase(), "humano"));
    }
    //Crear jugadores maquina
    for (let i = jugadores.length; i < 5; i++) {
      jugadores.push(
        new Jugador(i, this.getPokemons[i].name.toUpperCase(), "maquina")
      );
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
      pistas[0].addCarril(carril);
      let carro = new Carro(carril);
      conductores.push(new Conductor(jugadores[i], carro));
    }

    let idGame = getNumberRandom(10000000, 1000000);
    let juego = new Juego(idGame);
    juego.pistas = pistas;
    juego.conductores = conductores;
    this.juego = juego;
  }
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
    width  50px
    height 50px

  .info-container
    width  95vw
    height 25vh
    overflow auto
</style>
