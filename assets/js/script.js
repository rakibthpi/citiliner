$(document).ready(function(){
  $('.nav-button').click(function(){
    $('body').toggleClass('nav-open');
  });
  // $('nav-button').click(function(){
  //   $('.menu_bar_area ul').slideToggle('');
  // });
  $('.nav-button').click(function(){
    $('.menu_bar_area ul').slideToggle(500);

    return false;
  });

   $('.blogpost_slider_area').owlCarousel({
      loop:true,
      margin:20,
      autoplay:true,
      responsiveClass:true,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          992:{
              items:2,
              
          }
      }
  })

   $('.porject_single_item_area').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    loop:true,
    nav:true,
    dots:false,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
});


});

