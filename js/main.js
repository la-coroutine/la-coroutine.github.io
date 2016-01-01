$(document).ready(function(){
  $('.l-navbar ul').localScroll({
    hash: true,
    duration: 1200
  });

  $('.m-home--banners--menu').localScroll({
    hash: true,
    duration: 1200
  });

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('.m-home--banners').parallax("50%", 0.1);
  $('.m-home--space').parallax("50%", 0.1);
  $('.m-home--coworking').parallax("50%", 0.6);
  $('.m-home--coworking .bg').parallax("50%", 0.9);
  $('.m-home--third-place').parallax("50%", 0.1);
  $('.m-home--third-place .bg').parallax("57%", 0.6);

  $('.l-navbar ul a').click(function(){
    $('.l-navbar li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  $('.m-home--banners--video').videoBG({
    webm: 'assets/header.webm',
    poster: 'img/video_coco.jpg',
    scale: true,
    zIndex: 0
  });
});
