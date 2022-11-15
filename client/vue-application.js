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
    alerts: []
  },
  async mounted () {
    const alerts = await axios.get(`http://localhost:4000/allAlerts`)
    this.alerts = alerts.data
    setInterval(async () => {
      const alerts = await axios.get(`http://localhost:4000/`)
      if (this.alerts.slice(-1)[0]["id"] != alerts.data[0]["id"]) {
        this.alerts.push(alerts.data[0])
      }
       
    }, 5000)
  },
  methods: {
   
  }
})
