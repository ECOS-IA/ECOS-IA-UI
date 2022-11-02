<template>

  <div>
    <h1>Page d'accueil</h1>
    <section v-for="alert in alerts" :key="alert.id">
      <p>Alert détecté le {{ alert.time }} - zone {{ alert.zone }}</p>
    </section>
  </div>

</template>
<script>

module.exports = {
    props: {
      alerts: { type: Array, default: [] }
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }

</script>
<style>



</style>