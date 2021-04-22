<template lang="pug">
  section.Podio
    router-link(:to="{name:'Home'}") Ir al INICIO
    h1 Podio de los finalistas
    section.podio
      ol
        li(
          v-for="finalista,key in finalistas"
          :key="key"
        ) {{finalista.name}} en la posición {{finalista.pos}}
    section.historial
      h2 Historial del podio
      table
        tr
          th Jugador
          th Repeticiones en el podio
        tr(
          v-for="_historial, key in historial"
          :key="key"
        )
          td {{_historial.name}}
          td {{_historial.repeat}}
</template>

<script>
import firestore from "@/services/firestore";

export default {
  data: function() {
    return {
      juego: this.$store.getters.getJuego,
      finalistas: [],
      historial: []
    };
  },
  beforeMount: async function() {
    let finalistas = this.juego.conductores.filter(value => value.position < 4);

    finalistas.sort((a, b) => {
      if (a.position > b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      return 0;
    });

    this.finalistas = finalistas.map(value => {
      return { name: value.jugador.nombre, pos: value.position };
    });
    try {
      //Guardar podio
      await firestore
        .doc(this.juego.id.toString())
        .set({ finalistas: this.finalistas });

      //Obtener podio
      let historial = await firestore.get();
      let _data = [];
      historial.forEach(value => _data.push(value.data().finalistas));
      //filtrar historial
      let _list = [];
      _data.forEach(value => {
        value.map(v => v.name).forEach(_v => _list.push(_v));
      });
      let setData = new Set(_list);
      setData.forEach(value => {
        const num = _list.filter(el => el === value).length;
        this.historial.push({ name: value, repeat: num });
      });
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="stylus">
.Podio 
  display flex
  flex-direction column
  align-items center

  li
    margin 10px

  .historial
    td, th
      padding 5px
      background-color #46df7e30
    th
      background-color #46df7e70
</style>