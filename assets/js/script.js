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
          767:{
              items:2,
          },
          992:{
              items:3,
              
          }
      }
  })


});

