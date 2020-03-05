$(document).ready(function(){
    $('.slider-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      initialSlide: 1
    });
  });


$('.slider-wrapper').append('<div class="progress-container"></div>');

$('.progress-container').append('<div class="bar-container"></div>');

$('.bar-container').append('<div class="progress-bar"></div>');

$('.bar-container').append('<div class="progress" ></div>');

$('.progress-container').append('<span class="progress-text"> </span>')

$('.slider-container').on('init', function(event, slick, currentSlide){
    var i = (currentSlide ? currentSlide:0 ) + 1;
    $('.progress-text').text(`${i} / ${slick.slideCount}`);
    $('.progress').width(`${(i/slick.slideCount) * 100}%`);  
});


$('.slider-container').on('beforeChange', function(event, slick, currentSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.progress-text').text(`${i} / ${slick.slideCount}`);
    $('.progress').width(`${(i/slick.slideCount) * 100}%`);    
});
