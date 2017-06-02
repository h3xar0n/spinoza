var material = [
      { title: 'Desire', 
        subtitle: 'cupiditas',
        descriptions: ['Desire is our very essence insofar as our essence is concieved as determined to any action.', 
          'Sometimes people do things which conduce to their perseverance and other times people do things which fail to so conduce. In both types of case, though, people desire to persevere. When I do something that fails to help me to persevere, it is because the ideas on which I based my action were confused; that is, I thought I knew what would help me to persevere, but I was wrong. When I do something that does help me to persevere, though (unless I have simply been lucky in acting from an inadequate idea), it is because I acted on clear and distinct ideas or, in other words, genuine knowledge about what would help me to persevere.']
      }, 
      { title: 'Joy',
        subtitle: 'laetitia',
        descriptions: ['Joy is our transition from a state of less perfection to a state of greater perfection',
          'Joy is the passive transition of the mind to a state of greater perfection. When it relates to part of the body, it is pleasure (titillatio), and when it relates to the whole body, it is cheerfulness (hilaritas). Pleasure can be excessive insofar as it prevents other parts of the body from their actions, but cheerfulness cannot be excessive since it involves an increase in perfection throughout the whole body.'] 
      },
      { title: 'Love',
        subtitle: 'amor',
        descriptions: [''] },
      { title: 'Sausages'}
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
    }
  }
})

var main = new Vue({
  el: '#content',
  data: {
    title:       'Ethics',
    subtitle:    'in the Programattic Order',
    descriptions: ['',
                          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                          'test test test'],
    example: 1
  }
});


// jQuery for Menu

$(document).ready(function(){

  // Menu Toggle
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Icon Toggle
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
  $('.menu-item a').on('click', function(){
    i = $(this).attr('id');
    console.log(i);
    var title = $(this).html();
    $('#focus-title').html(title);
  });

});