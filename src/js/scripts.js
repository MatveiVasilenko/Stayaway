

// $('#exampleModalCenter').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

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
  prevArrow: '<svg class="arrow arrow__left tes" width="29px" height="56px"><use xlink:href="#arrowLeft"></use></svg>',
  nextArrow: '<svg class="arrow arrow__right tes" width="29px" height="56px"><use xlink:href="#arrowRight"></use></svg>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        // arrows:false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        autoplay: true,



      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,

        
      }
    }

  ]
});

});