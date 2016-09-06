$(document).ready(function(){
  $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top });
  $('.scrollspy').scrollSpy();
  $('ul.tabs').tabs();
});
