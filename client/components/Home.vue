<template>

  <div>
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-xl-3 hidden-md-down" id="history">
          <div class="row">
            <h1>Historique</h1>
          </div>
          <div class="row">
            <section v-for="alert in alerts" :key="alert.id">
              <button class="alerts" @click="displayAlert(alert)">
                <p>Alerte détecté le {{ alert.time }} - zone {{ alert.zone }}</p>
              </button>
            </section>
          </div>
        </div>
        <div class="col-xl-9 no-float" id="alert">
          <div v-if="newalert.id">
            <h1 v-if="newalert.id">ALERT ZONE {{ newalert.zone }}</h1>
          </div>
          <div v-else-if="historyAlert.id">
            <p>Alerte détecté le {{ historyAlert.time }} en zone {{ historyAlert.zone }}</p>
            <button @click="quit()">OK</button>
          </div>
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
        historyAlert : {}
      }
    },
    methods: {
      displayAlert (alert) {
        this.historyAlert = alert
      },
      quit() {
        this.historyAlert = {}
      }
    }
  }

</script>
<style>

  #history {
    background-color: white;
    height: 100%;
    overflow-y: scroll;
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