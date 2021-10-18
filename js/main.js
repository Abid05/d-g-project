$(document).ready(function(){

  // testimonial-active
  $('.testimonial-active').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       autoplay: true,
       arrows: false,
       autoplaySpeed: 2000,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }
      ]
     });
    //  sponsor-active
     $('.sponsor-active').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      centerPadding: '0px',
      autoplaySpeed: 2000,
      arrows:false, 
    });

    // image-active
    $('.image-active').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      centerPadding: '0px',
      autoplaySpeed: 2000,
      arrows:false, 
    });
  });