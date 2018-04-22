// ----- Hamburger menu -----

// the menu can be opened in mobile view by clicking on the Hamburger menu icon,
// and it can be closed by clicking on the icon OR anywhere else within the main area

const main = $('main');
const hamburgerMenu = $('.nav');


$('.hamburger-menu').mousedown(function(e) {
  hamburgerMenu.toggleClass('open');
  e.stopPropagation();
});

main.mousedown(function(e) {
  hamburgerMenu.removeClass('open');
});
