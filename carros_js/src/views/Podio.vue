<template lang="pug">
    section.Podio
        h1 Podio de los finalistas
</template>

<script>
import firestore from "@/services/firestore";

export default {
  data: function() {
    return {
      juego: this.$store.getters.getJuego
    };
  },
  mounted: function() {
      console.log(this.juego)
  }
};
</script>
