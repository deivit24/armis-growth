// Navbar Brand Fade In
var navBrand = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: 'nav',
  triggerHook: 0.05
})
  .setClassToggle('.navbar-brand', 'brand-fadein')
  .addIndicators()
  .addTo(navBrand);

// Nav fixed Top
var nav = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: 'nav',
  triggerHook: 0.09
})
  .setClassToggle('nav', 'sticky-top')
  .addIndicators()
  .addTo(nav);
