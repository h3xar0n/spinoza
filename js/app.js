var main = new Vue({
  el: '#content',
  data: {
    title:       'Ethics',
    subtitle:    'in the Programattic Order',
    descriptions: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'test test test'],
    reflections: ['Reflections about the concept are listed here'],
    relatedItems: ['Related concepts are listed here'],
    references: ['Textual references are listed here']
  }
});

var material = [
  { title: 'Desire', 
    subtitle: 'cupiditas',
    descriptions: ['Desire is the actual essence of man, in so far as it is conceived, as determined to a particular activity by some given modification of itself.', 
      'Sometimes people do things which conduce to their perseverance and other times people do things which fail to so conduce. In both types of case, though, people desire to persevere. When I do something that fails to help me to persevere, it is because the ideas on which I based my action were confused; that is, I thought I knew what would help me to persevere, but I was wrong. When I do something that does help me to persevere, though (unless I have simply been lucky in acting from an inadequate idea), it is because I acted on clear and distinct ideas or, in other words, genuine knowledge about what would help me to persevere.']
  }, 
  { title: 'Joy',
    subtitle: 'laetitia',
    descriptions: ['Joy is the transition of a man from a less to a greater perfection',
      'Joy is the passive transition of the mind to a state of greater perfection. When it relates to part of the body, it is pleasure (titillatio), and when it relates to the whole body, it is cheerfulness (hilaritas). Pleasure can be excessive insofar as it prevents other parts of the body from their actions, but cheerfulness cannot be excessive since it involves an increase in perfection throughout the whole body.'] 
  },
  { title: 'Love',
    subtitle: 'amor',
    descriptions: ['Love is joy, accompanied by the idea of an external cause.',
      'This definition explains sufficiently clearly the essence of love ; the definition given by those authors who say that love is the lover\'s wish to unite himself to the loved object expresses a property, but not the essence of love ; and, as such authors have not sufficiently discerned love\'s essence, they have been unable to acquire a true conception of its properties, accordingly their definition is on all hands admitted to be very obscure.']
  },
  { title: 'Sorrow',
    subtitle: 'tristitia',
    descriptions: ['Sorrow is the transition of a man from a greater to a less perfection.',
      'Sorrow is the passive transition of the mind to a state of greater perfection. When it relates to part of the body, it is pain (dolor), and when it relates to the whole body, it is melancholy (melancholia). Pain can be excessive insofar as it prevents excessive pleasure and thus enables more other parts of the body to act, but melancholy is always bad since it involves an prevents action throughout the body.']
  },
  { title: 'Hatred',
    subtitle: 'odium',
    descriptions: ['Hatred is sorrow, accompanied by the idea of an external cause.']
  }
];

var menu = new Vue({
  el: '#menu',
  data: {
    contents: material
  },
  methods: {
    onChange: function(content) {
      console.log(content);
      main.title = content.title;
      main.subtitle = content.subtitle;
      main.descriptions = content.descriptions;
      main.reflections = content.reflections;
      main.relatedItems = content.relatedItems;
      main.references = content.references;
    }
  }
})