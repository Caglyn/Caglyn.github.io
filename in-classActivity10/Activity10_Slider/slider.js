$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        pager: true,
		pagerType: 'short',
        pause: 3000,
    });
});
