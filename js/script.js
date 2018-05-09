$(document).ready(function() {
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
	slider.noUiSlider.on('update', function( values, handle ) {
		valuesDivs[handle].innerHTML = Math.round(values[handle]) + ' Р.';
	});
	/* noUiSlider end */
	$('.car_sld').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		items:1,
		navText: ['<img src="img/arrow_left.png" alt="">','<img src="img/arrow_left.png" alt="">']
	});
    
    $('.mob_car_class').click(function() {
       $('.mob_car_class_wrap').slideToggle(400);
    });
    var myMap;
    ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
    function init () {
        myMap = new ymaps.Map("map", {
          center: [55.76, 37.64], // Координаты центра карты
          zoom: 10 // Zoom
        });
    }
    $('a[href^="#"]').click(function () { 
         var elementClick = $(this).attr("href");
         var destination = $(elementClick).offset().top;
           $('body').animate( { scrollTop: destination }, 1100 );
         return false;
    });
    $('#mob_menu').click(function() {
        $(".mob_nav").addClass('active');
    });
    $('.mob_nav').click(function(e) {
        e.stopPropagation();
        $('.mob_nav').removeClass('active');
    });
    $('.mob_nav_ul').click(function(e) {
       e.stopPropagation(); 
    });
    $('.mob_nav_ul a').click(function() {
        $('.mob_nav').removeClass('active');
    });
    $('.callAutoBtn').click(function() {
        $('#ordAuto').fadeIn(400);
    });
    $('#ordAuto').click(function() {
        $('#ordAuto').fadeOut(400);
    });
    $('.modal').click(function(e) {
        e.stopPropagation();
    });
});