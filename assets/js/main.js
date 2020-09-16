jQuery(function($) {
  // object-fit-images
  objectFitImages();

  // wow.js
  new WOW().init();

  // smooth scrolling
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
