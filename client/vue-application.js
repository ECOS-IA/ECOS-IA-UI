const Accueil = window.httpVueLoader('./components/Home.vue')

const routes = [
  { path: '/', component: Accueil}
]

const router = new VueRouter({
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    alerts: [],
    newalert: {}
  },
  async mounted () {
    const alerts = await axios.get(`http://localhost:4000/allAlerts`)
    this.alerts = alerts.data
    this.newalert = {}
    
    // nouvelle alerte
    setInterval(async () => {
      const alerts = await axios.get(`http://localhost:4000/`)
      if (this.alerts.slice(-1)[0]["id"] != alerts.data[0]["id"]) {
        this.newalert = alerts.data[0]
        this.alerts.push(alerts.data[0])
      }
    }, 5000)

    // enregistrement dans l'historique
    if (this.newalert != {}) {
      setInterval(async () => {
        this.newalert = {}
      }, 5000)
    }
  },
  methods: {
   
  }
})
