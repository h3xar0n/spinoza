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

var example = new Vue({
  el: '#emotions-index',
  data: { emotions }
})