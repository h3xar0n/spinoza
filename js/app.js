var onChange = function(content) {
  console.log(content);
  main.title = content.title;
  main.subtitle = content.subtitle;
  main.descriptions = content.descriptions;
  main.reflections = content.reflections;
  main.relatedItems = content.relatedItems;
  main.references = content.references;
}

var main = new Vue({
  el: '#app',
  data: {
    contents:    material,
    title:       'Ethics',
    subtitle:    'an exposition of major concepts',
    descriptions: [
      // What does the app do?
      'In Part V of Spinoza\'s Ethics, he describes the power of our minds to remedy the emotions.',
      // What is the problem with emotions?
      'This app begins with the first remedy, the actual knowledge of the emotions.',
      // How is knowledge of an emotion a remedy?
      'For more complex emotions such as pity and hatred, the app provides strategies from seperating the basic feeling from the confused idea of an external cause.',
      // Reiterate how emotions are confused, and how if we were free, we would hardly choose to be sad
      'III. In the fact, that, in respect to time, the emotions referred to things, which we distinctly understand, surpass those referred to what we conceive in a confused and fragmentary manner (V. vii.).',
      'IV. In the number of causes whereby those modifications, are fostered, which have regard to the common properties of things or to God (V. ix. xi.).',
      'V. Lastly, in the order wherein the mind can arrange and associate, one with another, its own emotions (V. x. note and xii. xiii. xiv.).',
      'But, in order that this power of the mind over the emotions may be better understood, it should be specially observed that the emotions are called by us strong, when we compare the emotion of one man with the emotion of another, and see that one man is more troubled than another by the same emotion; or when we are comparing the various emotions of the same man one with another, and find that he is more affected or stirred by one emotion than by another. For the strength of every emotion is defined by a comparison of our own power with the power of an external cause. Now the power of the mind is defined by knowledge only, and its infirmity or passion is defined by the privation of knowledge only: it therefore follows, that that mind is most passive, whose greatest part is made up of inadequate ideas, so that it may be characterized more readily by its passive states than by its activities: on the other hand, that mind is most active, whose greatest part is made up of adequate ideas, so that, although it may contain as many inadequate ideas as the former mind, it may yet be more easily characterized by ideas attributable to human virtue, than by ideas which tell of human infirmity. Again, it must be observed, that spiritual unhealthiness; and misfortunes can generally be traced to excessive love for something which is subject to many variations, and which we can never become masters of. For no one is solicitous or anxious about anything, unless he loves it; neither do wrongs, suspicions, enmities, &c. arise, except in regard to things whereof no one can be really master.',
      'We may thus readily conceive the power which clear and distinct knowledge, and especially that third kind of knowledge (II. xlvii. note), founded on the actual knowledge of God, possesses over the emotions: if it does not absolutely destroy them, in so far as they are passions (V. iii. and iv. note); at any rate, it causes them to occupy a very small part of the mind (V. xiv.). Further, it begets a love towards a thing immutable and eternal (V. xv.), whereof we may really enter into possession (II. xlv.); neither can it be defiled with those faults which are inherent in ordinary love; but it may grow from strength to strength, and may engross the greater part of the mind, and deeply penetrate it.'
    ],
    reflections: ['Test'],
    relatedItems: ['desire'],
    references: [
      { name: 'Test 1',
        link: 'www.google.com' },
      { name: 'Test 2',
        link: 'www.gmail.com' }
    ]
  },
  methods: {
    onChange
  }
});


