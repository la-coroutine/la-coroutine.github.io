$(document).ready(function(){
    $('#navbar ul').localScroll({
        hash:true,
        duration:1200
    });
    $('#home #menu').localScroll({
        hash:true,
        duration:1200
    });

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#home').parallax("50%", 0.1);
    $('#espace').parallax("50%", 0.1);
    $('#coworking').parallax("50%", 0.6);
    $('#coworking .bg').parallax("50%", 0.9);
    $('#tierslieu').parallax("50%", 0.1);
    $('#tierslieu .bg').parallax("57%", 0.6);

    $('#navbar ul a').click(function(){
        $('#navbar li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $('#video-home').videoBG({
        webm:'assets/header.webm',
        poster:'img/video_coco.jpg',
        scale:true,
        zIndex:0
    });
});
