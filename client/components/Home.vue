<template>

  <div>
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">

        <div class="col-xl-3" id="history">
          <div class="row" id="historyTitle">
            <div class="col-xl-12 d-flex justify-content-center" >
              <h1>Historique</h1>
            </div>
          </div>
          <div class="row" id="listOfAlerts">
            <div class="col-xl-10 ml-auto mr-auto">
              <section v-for="alert in alerts.slice().reverse()" :key="alert.id">
                <button class="button" @click="displayAlert(alert)">
                  <p>{{ alert.time }} - zone {{ alert.zone }}</p>
                </button>
              </section>
            </div>
          </div>
        </div>

        <div class="col-xl-9" id="alert">
          <div class="container-fluid h-100 d-flex align-items-center justify-content-center">
            <div class="row">

              <div v-if="newalert.id" class="newAlert">
                <h1 v-if="newalert.id">ALERT ZONE {{ newalert.zone }}</h1>
              </div>

              <div v-else-if="historyAlert.id" class="savedAlert">
                <p>Alerte détecté le {{ historyAlert.time }} en zone {{ historyAlert.zone }}</p>
                <button @click="quit()" >
                  <div class="close">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <svg viewBox="0 0 36 36" class="circle">
                      <path
                        stroke-dasharray="100, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </button>
              </div>

            </div>
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

  #historyTitle {
    margin-top: 25px;
  }

  #listOfAlerts {
    margin-top: 50px;
  }

  .button {
    height: 45px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    padding: 10px 15px;
    margin: 5px 0;
  }

  .button:hover {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    /* color: #fff; */
    transform: translateY(-7px);
  }

  #alert {
    background: url("../images/background.jpg");
    background-size: cover;
  }

  .newAlert, .savedAlert{
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    outline: none;
    padding: 50px;
  }

  .newAlert {
    background-color: #ff4949;
  }

  .savedAlert {
    background-color: #fff;
  }

  .savedAlert button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .close {
    width: 60px;
    height: 60px;
    position: relative;
    background: #455a64;
    border-radius: 50%;
    box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.5);
    transition: 0.25s ease-in-out;
    cursor: pointer;
    -webkit-animation: fade-in 0.5s ease-out 0.25s both;
            animation: fade-in 0.5s ease-out 0.25s both;
  }
  @-webkit-keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  .close .circle path {
    stroke: white;
    fill: none;
    stroke-width: 1px;
    stroke-linecap: round;
    -webkit-animation: progress 0.5s ease-out 0.25s both;
            animation: progress 0.5s ease-out 0.25s both;
  }
  @-webkit-keyframes progress {
    from {
      stroke-dasharray: 0 100;
    }
  }
  @keyframes progress {
    from {
      stroke-dasharray: 0 100;
    }
  }
  .close span {
    display: block;
    width: 13px;
    height: 2px;
    background: white;
    box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: absolute;
    transition: 0.25s ease-in-out;
    -webkit-animation: slide-in 0.5s ease-in-out 0.25s both;
            animation: slide-in 0.5s ease-in-out 0.25s both;
  }
  @-webkit-keyframes slide-in {
    from {
      width: 0;
    }
  }
  @keyframes slide-in {
    from {
      width: 0;
    }
  }
  .close span:nth-child(1) {
    top: 19px;
    left: 20px;
    transform: rotate(45deg);
    transform-origin: top left;
  }
  .close span:nth-child(2) {
    top: 19px;
    right: 20px;
    transform: rotate(-45deg);
    transform-origin: top right;
  }
  .close span:nth-child(3) {
    bottom: 19px;
    left: 20px;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
  .close span:nth-child(4) {
    bottom: 19px;
    right: 20px;
    transform: rotate(45deg);
    transform-origin: bottom right;
  }
  .close:hover {
    background: #37474f;
  }
  .close:hover span {
    width: 15px;
  }

 

</style>