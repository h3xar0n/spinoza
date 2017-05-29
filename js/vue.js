var emotions = [{ name: 'Desire',
                  link: '/desire',
                  index: 1 },
                { name: 'Joy',
                  link: '/joy',
                  index: 2 },
                { name: 'Sadness',
                  link: '/sadness',
                  index: 3 },
                { name: 'Glossary',
                  link: '/glossary',
                  index: 4 }]

var i = 0;

var example = new Vue({
  el: '#emotions-index',
  data: { i, emotions }
})

var chosen = new Vue({
  el: '#chosen',
  data: { i, emotions }
})

const User = {
  template: 
    `<h1> {{ $route.params.id }} </h1>`
}

const router = new VueRouter({
  routes: [
    { path: '/emotion/:id', 
      component: User 
    }
  ]
})

const app = new Vue({ router }).$mount('#app')