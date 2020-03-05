$(document).ready(function(){
    $('.slider-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });


$('.slider-wrapper').append('<div class="progress-container"></div>');

$('.progress-container').append('<div class="progress-bar"></div>');

$('.progress-container').append('<div class="progress" ></div>');

$('.progress-container').append('<span class="progress-text"> </span>')



$('.slider-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.progress-text').text(`${currentSlide} / ${slick.slideCount}`);
    $('.progress').width(`${(currentSlide/slick.slideCount) * 100}%`);    
});
