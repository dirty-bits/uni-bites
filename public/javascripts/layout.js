jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var navbar = $('.navigation');
    var button = $('.specialButton');

    if (scrollPos > 500) {
      navbar.addClass('alt-color');
      button.addClass('alt-border')
    } else {
      navbar.removeClass('alt-color');
      button.removeClass('alt-border');
    }
  });
});
