new WOW().init();

$(document).ready(function(){
  // $('.testimonial').slick({
  // 	autoplay: true,
  // 	autoplaySpeed: 5000,
  // 	// dots: true,
  // 	infinite: true,
  // 	speed: 600,
 	// slidesToShow: 1,
 	// prevArrow: '<img class="slick-prev" src="img/arrowLeft.png" alt="">',
 	// nextArrow: '<img class="slick-next" src="img/arrowRight.png" alt="">',
  // 	// adaptiveHeight: true
  // 	responsive: [
	 //    {
	 //      breakpoint: 768,
	 //      settings: {        
		//     infinite: true,
		//     dots: true,
		//    arrows: false
	 //      }
  //   }]
  // });

$('.team').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
  // prevArrow: '<img class="slick-prev" src="img/arrowLeft.png" alt="">',
 	// nextArrow: '<img class="slick-next" src="img/arrowRight.png" alt="">'


});


// $('.carousel').carousel({
//   interval: 10000
// });
});