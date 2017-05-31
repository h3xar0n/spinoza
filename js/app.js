var material = [
      { title: 'Desire', 
        subtitle: 'What what',
        descriptions: ['Lol I\'m loco', 'What the fuck']
        }, 
      { title: 'Hatred' },
      { title: 'Joy' },
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
    descriptions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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