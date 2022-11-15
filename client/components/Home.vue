<template>

  <div>
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-lg-3 hidden-md-down" id="history">
          <div class="row">
            <h1>Page d'accueil</h1>
          </div>
          <div class="row">
            <section v-for="alert in alerts" :key="alert.id">
              <p>Alert détecté le {{ alert.time }} - zone {{ alert.zone }}</p>
            </section>
          </div>
        </div>
        <div class="col-lg-9 no-float" id="alert">
          <h1 v-if="newalert.id">ALERT ZONE {{ newalert.zone }}</h1>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

module.exports = {
    props: {
      alerts: { type: Array, default: [] },
      newalert: { type: Object }
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

  #history {
    background-color: white;
    height: 100%;
  }

  #alert {
    background-color: grey;
    height: 100%;
  }

</style>