$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  $(".custom-navigation .prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
 });

 $(".custom-navigation .next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
 });
});


// animation

  new WOW().init();