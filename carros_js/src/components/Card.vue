<template lang="pug">
  .card-container
    img.image-pokemon(
      v-lazy="imgPoke" 
      :alt="name")
    h3.name-pokemon {{name}}
    p.type-pokemon(v-for="type, index in types" :key="index") {{type}}
</template>

<script>
export default {
  props: ["imgPoke", "name", "types"]
};
</script>

<style lang="stylus">

.card-container
  padding 10px
  margin 10px

.image-pokemon
  height auto
  width 150px

</style>
