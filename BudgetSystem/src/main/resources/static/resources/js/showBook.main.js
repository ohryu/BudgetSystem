jQuery(document).ready(function($){
    
    // jQuery sticky Menu
    
	$(".mainmenu-area").sticky({topSpacing:0});
    
    $('.product-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:20,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:5,
            }
        }
    });  
    
    
    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });    
    
    // jQuery Scroll effect
//    $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
//        var $anchor = $(this);
//        var headerH = $('.header-area').outerHeight();
//        $('html, body').stop().animate({
//            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
//        }, 1200, 'easeInOutExpo');
//
//        event.preventDefault();
//    });    
//    
//    // Bootstrap ScrollPSY
//    $('body').scrollspy({ 
//        target: '.navbar-collapse',
//        offset: 95
//    })      
});

