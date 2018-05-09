$(document).ready(function () {
    /* noUiSlider start*/
    var slider = document.getElementById('price_slider');
    noUiSlider.create(slider, {
        start: [0, 80000],
        connect: true,
        range: {
            'min': 600,
            'max': 80000
        }
    });


    var valuesDivs = [
        document.getElementById('price_car_from'),
        document.getElementById('price_car_to')
    ];

    slider.noUiSlider.on('update', function (values, handle) {
        valuesDivs[handle].innerHTML = Math.round(values[handle]) + ' Р.';
    });

    /* noUiSlider end */

    $('.car_sld').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        navText: ['<img src="img/arrow_left.png" alt="">', '<img src="img/arrow_left.png" alt="">']
    });


    $('.mob_car_class').click(function () {
        $('.mob_car_class_wrap').slideToggle(400);
    });

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 1100);
    });

    $('#mob_menu').click(function () {
        $(".mob_nav").addClass('active');
    });

    $('.mob_nav').click(function (e) {
        e.stopPropagation();
        $('.mob_nav').removeClass('active');
    });

    $('.mob_nav_ul').click(function (e) {
        e.stopPropagation();
    });

    $('.mob_nav_ul a').click(function () {
        $('.mob_nav').removeClass('active');
    });

    $('.call_auto_btn, .car_order').click(function () {
        $('#ordAuto').fadeIn(400);
    });

    $('#ordAuto').click(function () {
        $('#ordAuto').fadeOut(400);
    });

    $('.modal').click(function (e) {
        e.stopPropagation();
    });

    $('.wrap_all_car').on('click', '.car_more', function(e) {
        e.stopPropagation();
        if ($('.wrap_more_info').length > 0) {
            $('.wrap_more_info').remove();
        }
        var $that = $(this);
        var template = $('#more_info_template').clone().html();
        $that.parent().parent().after(template);
        $('.more_small_owl').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            responsive : {
                768 : {
                    margin: 10,
                    items: 3
                },
                1190 :{
                    margin: 15,
                    items: 4
                }
            },
            navText: ['<img src="./img/back.svg" alt="">','<img src="./img/back.svg" alt="">']
        });
        $('.wrap_more_info').slideDown(400);
    });

    $('.wrap_all_car').on('click', '.wrap_more_info', function(e) {
        e.stopPropagation();
    });
    
    $('body').click(function() {
        $('.wrap_more_info').slideUp(350, function(){
            $('.wrap_more_info').remove();
        });
    });
    $('.wrap_all_car').on('click', '.small_img_item', function() {
        var smallSrc = $(this).children('.small_img').attr('src');
        $('.more_img').attr('src', smallSrc);
    });

});