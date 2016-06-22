$('#slider-screens').carousel({
    interval: 0
});
$(document).ready(function(){

    $("nav, .up").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 69;
        $('body,html').animate({scrollTop: top}, 650);
        if ($(window).width() < 768) {
            top = $(id).offset().top - 0;
            $('body,html').animate({scrollTop: top}, 100);
        }

    });


    if ($(window).width() < 768) {
        if ($('.menu-wrap').children().hasClass('in')){
            $('.menu-wrap').css({'height': '78px'});
        } else {
            $('.menu-wrap').css({'height': 'auto'});
        }
    }
    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {
        $(this).carousel('next');
    });


});
$(document).on('click', function(e) {
    if(!$(e.target).is('nav'))
    {
        $('.navbar-collapse.collapse').removeClass('in');

    } else {
        $('.navbar-collapse.collapse').addClass('in');

    }
    return false;
});

$(document).scroll(function(){

    if($(this).scrollTop() > 204) {
        $('.navbar-collapse').css({'top': '0', 'width':'100%', 'left':'0'});
        if ($(window).width() < 768) {
            $('.up').css({'display': 'flex'});
        }


    } else {
        var top = 204 - $(this).scrollTop();
        $('.navbar-collapse').css({'top': top +'px'});
        $('.up').css({'display': 'none'});


    }

    var secondAnimation = function() {
        $('.media:eq(0)').delay(300).animate({
                opacity: 1
            }, 'slow'
        );

        $('.media:eq(1)').delay(300).animate({
                opacity: 1
            }, 'slow'
        );

        $('.media:eq(2)').delay(600).animate({
                opacity: 1
            }, 'slow'
        );

        $('.media:eq(3)').delay(600).animate({
                opacity: 1
            }, 'slow'
        );
        $('.media:eq(4)').delay(900).animate({
                opacity: 1
            }, 'slow'
        );
        $('.media:eq(5)').delay(900).animate({
                opacity: 1
            }, 'slow'
        );

    };

    if ($(window).width() > 768){
        if($(window).scrollTop() > 300){
            secondAnimation();
        }
    }
});


$('.nav>li>a').on('click', function(){
    $('.nav>li>a').removeClass('active');
    $(this).addClass('active');
});
