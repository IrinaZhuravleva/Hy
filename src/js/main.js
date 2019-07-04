$(document).ready(function(){

  var link_active = $('.blockmenu__link');
  var menu = $('.blockmenu');
  var menuBtn = $('.menu-btn');
 
  menuBtn.click(function(){
    menu.toggleClass('blockmenu_active');
    menuBtn.toggleClass('menu-btn_active');

  });

  link_active.click(function(){ 
    menu.toggleClass('blockmenu_active');
    menuBtn.removeClass('menu-btn_active');
  });


  //Анимация чисел
  var percent_number_step = $.animateNumber.numberStepFactories.append(' %')

  $('#fun-level-1').animateNumber(
    {
      number: 20,
      // 'font-size': '48px',
      numberStep: percent_number_step
    },
    {
      easing: 'swing',
      duration: 1000
    }
  );

  $('#fun-level-2').animateNumber(
    {
      number: 40,
      numberStep: percent_number_step
    },
    {
      easing: 'swing',
      duration: 1000
    }
  );

  $('#fun-level-3').animateNumber(
    {
      number: 15,
      numberStep: percent_number_step
    },
    {
      easing: 'swing',
      duration: 1000
    }
  );


//скроллинг
  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
});


//анимация блоков при скролле
$(window).scroll(function (){
    $('.mov').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        // if (imagePos < topOfWindow+900) {
        if (imagePos < topOfWindow+1440) {
            $(this).addClass('slideInUp');
        }
    });
});


$(window).scroll(function(){
  let scroll = $(window).scrollTop();

  $('.leaf-top-left').css({
    // top: 0 - scroll/40 + "%", //вверх
    top: 30 - scroll/20 + "%",
    left: -50 - scroll/20 + "%",
  })

  $('.leaf-bottom-left').css({ 
    top: 30 + scroll/20 + "%", //вниз
    left: -50 - scroll/40 + "%",
  })

  $('.leaf-top-right').css({
    top: 30 - scroll/20 + "%",
    // left: -20 + scroll/10 + "%",

  })

  $('.leaf-bottom-center').css({
    top: 50 + scroll/50 + "%",
    // left: -50 + scroll/20 + "%",
    // left: 0 + scroll/20 + "%",
  })

  $('.leaf-bottom-right').css({
    top: 60 + scroll/50 + "%",
    left: 50 + scroll/60 + "%",
  })

  //
  $('.spike-bottom').css({
    // top: -10 + scroll/60 + "%",
    // left: 30 - scroll/60 + "%",
    // width: 10 + scroll/30 + "%",
    // height: 10 + scroll/30 + "%",


  })
  
  // $('.spike-bottom-right').css({
  //   top: -20 + scroll/60 + "%",
  // //   // top: 0 + scroll/60 + "%",
  //   left: 50 + scroll/60 + "%",
  //   // left: -50 + scroll/60 + "%",



  //   // width: 290 + scroll/10 + "%",
  //   // height: 600 + scroll/40 + "%",
  //   width: 10 + scroll/40 + "%",
  //   height: 10 + scroll/40 + "%",
   
  // })

  $('.petal-bottom-center').css({
    top: -50 + scroll/30 + "%",
    // left: -50 + scroll/20 + "%",
  })

  // $('.petal-bottom-right').css({
  //   top: -50 + scroll/60 + "%",
  //   // left: 50 + scroll/60 + "%",
  // })

  $('.petal-bottom-right').css({
    top: -40 + scroll/60 + "%",
    // left: 50 + scroll/60 + "%",
  })

  $('.petal-bottom-left').css({
    top: -70 + scroll/30 + "%",
    // left: -50 + scroll/20 + "%",
  })

  // $('.petal-bottom-right').css({
  //   top: -50 + scroll/60 + "%",
  //   // left: 50 + scroll/60 + "%",
  // })

});


// var scene = document.getElementById('scene');
  // var scene = $('#scene');
  // var parallaxInstance = new Parallax(scene);

// Вызов библиотеки wow.js
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       100,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

// if ('IntersectionObserver' in window) {
//   const targets = Array.from(document.querySelectorAll('cover-l'));
//   targets.forEach(t => t.addAttribute('data-observe', ''));
//   const callback = (entries, observer) => {
//     entries.forEach(entry => {
//       entry.target.setAttribute('data-visible', entry.isIntersecting);
//     });
//   };

//   const observer = new IntersectionObserver(callback);
//   targets.forEach(t => observer.observe(t));
// }
