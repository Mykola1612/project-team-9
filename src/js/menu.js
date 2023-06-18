$(document).ready(function () {
    $(".reviews_slider").slick({
      
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 25,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        Infinite: false,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 10000,
        waitForAnimate:false,
        centerMode: true,
        variableWidth: true,
        slidesPerRow: 1,
        arrows: false,
        fade:false,
    });
});