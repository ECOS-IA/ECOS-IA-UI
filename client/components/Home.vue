<template>

  <div>
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-xl-3 hidden-md-down" id="history">
          <div class="row">
            <h1>Page d'accueil</h1>
          </div>
          <div class="row">
            <section v-for="alert in alerts" :key="alert.id">
              <div class="alerts" v-onclick="displayAlert(alert)">
                <p>Alert détecté le {{ alert.time }} - zone {{ alert.zone }}</p>
              </div>
            </section>
          </div>
        </div>
        <div class="col-xl-9 no-float" id="alert">
          <h1 v-if="newalert.id">ALERT ZONE {{ newalert.zone }}</h1>
          <div v-if="alert">{{ alert.zone }}</div>
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
        alert : {}
      }
    },
    methods: {
      displayAlert (alert) {
        this.alert = alert
      }
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

  .alerts {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
  }

</style>