// Common
;(function() {
  "use strict"; // use strict to start
  var $window = $(window);
  // Preloader
  $window.on('load', function() {
    $("#loader").fadeOut("slow", function() {
      $("#preloader").delay(300).fadeOut("slow");
    });
  });
  /* WOW init */
  new WOW().init();
  $(document).ready(function() {
    /* menu scrolling */
    $('.nav').onePageNav({
      //currentClass: 'current',
      filter: ':not(.external)'
    });
    $('.go-down a, .next').on('click', function(e) {
      e.preventDefault();
      var element_id = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(element_id).offset().top - 10
      }, 500);
    });
    /* Closes the Responsive Menu on Menu Item Click */
    $('.navbar-collapse ul li a').on('click', function() {
      $('.navbar-toggle:visible').click();
    });
    /* height 100% */
    $(".full-height").height($window.height());
    $window.on('resize', function() {
      $(".full-height").height($window.height());
    });
    /* add sticky */
    $window.on('scroll', function() {
      var wSize = $window.width();
      if (wSize > 767 && $(this).scrollTop() > 1) {
        $('.header nav').removeClass("navbar-expanded");
      } else {
        $('.header nav').addClass("navbar-expanded");
      }
    });
    /* Owl Carousel */
    // $("#owl-slider").owlCarousel({nav:!0,loop:!0,autoplay:!0,margin:0,dots:!1,responsiveClass:!0,navText:["<a><span></span></a>","<a><span></span></a>"],responsive:{0:{items:1,dots:!1},600:{items:1,dots:!1},1e3:{items:1}}});
    /* testimonial */
    $("#testimonial-list").owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      navigation: true,
      pagination: false,
      itemsDesktop: [1000, 3], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // betweem 900px and 601px
      itemsTablet: [600, 2], //2 items between 600 and 0
      itemsMobile: [479, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    /* typist init */
    if (typeof Typist == "function") {
      new Typist(document.querySelector(".typist-text"), {
        letterInterval: 60,
        textInterval: 3000
      });
    }
    /* Fun facts */
    function animateFacts(fact) {
      if ($.fn.visible && $(fact).visible() && !$(fact).hasClass('animated')) {
        $(fact).animateNumber({
          number: parseInt($(fact).data('target'), 10)
        }, 2000);
        $(fact).addClass('animated');
      }
    }
    function initFunFacts() {
      var funFacts = $('.fun-box').find('.value');
      funFacts.each(function() {
        animateFacts(this);
      });
    }
    initFunFacts();
    $window.on("scroll", function() {
      initFunFacts();
    });
    /* magnific popup init */
    if (false)
      $(".portfolio-gallery").each(function() { // the containers for all your galleries
        $(this).find(".popup-gallery").magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      });
    $('.portfolio-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-fade',
      removalDelay: 300,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>' + item.el.attr('data-desc') + '</small>';
        }
      }
    });
    /* Back to top */
    $('body').append('<a id="go-top" data-scroll class="go-top-hide" href="#"><i class="fa fa-cloud-upload"></i></a>');
    var scrollBack = $('#go-top, .navbar-brand');
    $window.on('scroll', function() {
      if ($(this).scrollTop() > 250) {
        scrollBack
          .addClass('go-top-show')
          .removeClass('go-top-hide');
      } else {
        scrollBack
          .addClass('go-top-hide')
          .removeClass('go-top-show');
      }
    });
    scrollBack.on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 400);
    });
  });
  // C2R
  $(".click-phone").click(function() {
    $(this).replaceWith("740 570 8485");
    $.get("mail/emailphone.php?mode=phone");
  });
  $(".click-email").click(function() {
    $(this).replaceWith("praveen" + decodeURIComponent("%40") + "praveen.science");
    $.get("mail/emailphone.php?mode=email");
  });
  // Timeline Show more
  $(".more").hide();
  $(".more-trigger").click(function(e) {
    e.preventDefault();
    $(this).fadeOut(400, function() {
      $(this).nextAll(".more").fadeIn();
    });
  });
  // Console
  console.log("%cHey Developer! Welcome to my website! I am Saujanya. Nice to meet you!", "background: #f90; color: #333; line-height: 25px; padding: 5px 10px;");
})(jQuery);