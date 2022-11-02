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
    const res = await axios.get('/alerts')
    // const res = await axios.get('/alertstest')
    this.alerts = res.data
  },
  methods: {
   
  }
})
