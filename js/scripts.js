var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getMainNavParams() {
  topCoord = $("#navHeight").offset().top;
  $("#navHeight").height($("#resp_nav"));
  if($(document).scrollTop() >= topCoord) {
    $("#resp_nav").addClass("fixed");
  } else {
    $("#resp_nav").removeClass("fixed");
  }
}

$(window).load(function() {
  if($(".scroll_y").length > 0) {
    $(".scroll_y").mCustomScrollbar();
  }
  index = 0;
  $('.good_slider .video_slide').each(function() {
    index++;
    $(this).attr("data-fancybox", "video_"+index);
  });
  index = 0;
  $('.good_miniature_slider .video_miniature_slide').each(function() {
    index++;
    $(this).attr("data-fancybox", "video_miniature_"+index);
  });
});

$(window).resize(function() {
  getMainNavParams();
});

$(document).scroll(function() {
  getMainNavParams();
});

$(document).ready(function() {

  getMainNavParams();

  $(".dr").each(function() {
    drContent = $(this).find(".dr_content");
    if($(this).hasClass("active")) {      
      drContent.slideDown(300);
    } else {
      drContent.slideUp(300);
    }
  });

  $(".dr_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr");
    sl = parent.find(".dr_content");
    $(".dr").each(function() {
      if($(this) != parent && $(this).hasClass("active")) {
        $(this).removeClass("active");
        sl2 = $(this).find(".dr_content").slideUp(300);
      }
    });
    if(sl.is(":hidden")) {
      parent.addClass("active");
      sl.slideDown(300);
    } else {
      parent.removeClass("active");
      sl.slideUp(300);
    }
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
        $(".dr_content").slideUp(300);
        $(".dr").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    hide_element = $(".dr");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        hide_element.removeClass("active");
        hide_element.find(".dr_content").slideUp(300);
      }
  });

  if( $(".slider_1").length > 0 ) {
      $(".slider_1").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          appendDots: $(".slider_1_dots"),
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/prev_arrow.svg"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/next_arrow.svg"></button>',
          // fade: true,
          // responsive: [
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 2
          //       }
          //     },
          //     {
          //       breakpoint: 540,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
      });
  }

  // --------------

  $(".scroll_sidebar_wrapp").each(function() {
    dr = $(this).find(".scroll_sidebar");
    if($(this).hasClass("active")) {
      dr.css({"display" : "block"});
    } else {
      dr.css({"display" : "none"});
    }
  });

  $(".scroll_sidebar_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".scroll_sidebar_wrapp");
    dr = parent.find(".scroll_sidebar");
    if(parent.hasClass("active")) {
      dr.slideUp(700);
      parent.removeClass("active");
    } else {
      dr.slideDown(700);
      parent.addClass("active");
    }
  });

  // --------------

  if( $(".good_slider").length > 0 ) {

    // $('.good_slider').on('init', function(){
    //   index = 0;
    //   $('.good_slider .video_slide').each(function() {
    //     index++;
    //     $(this).attr("data-fancybox", "video_"+index);
    //     console.log(index);
    //   });
    // });
    // $('.good_miniature_slider').on('init', function(){
    //   index = 0;
    //   $('.good_miniature_slider .video_slide').each(function() {
    //     index++;
    //     $(this).attr("data-fancybox", "video_miniature_"+index);
    //     console.log(index);
    //   });
    // });

    $(".good_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.good_miniature_slider'
    });

    $(".good_miniature_slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 2,
      asNavFor: '.good_slider',
      prevArrow: '<button class="slick-prev small_arrow prev_small" aria-label="Previous" type="button"><img src="img/prev_small.svg"></button>',
      nextArrow: '<button class="slick-next small_arrow next_small" aria-label="Next" type="button"><img src="img/next_small.svg"></button>',
      // fade: true,
      // responsive: [
      //     {
      //       breakpoint: 900,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2
      //       }
      //     },
      //     {
      //       breakpoint: 540,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
    });
  }

  // ------------

  $(".dr_2").each(function() {
    drContent = $(this).find(".dr_content_2");
    if($(this).hasClass("active")) {      
      drContent.slideDown(300);
    } else {
      drContent.slideUp(300);
    }
  });

  $(".dr_title_2").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr_2");
    sl = parent.find(".dr_content_2");
    if(sl.is(":hidden")) {
      parent.addClass("active");
      sl.slideDown(300);
    } else {
      parent.removeClass("active");
      sl.slideUp(300);
    }
  });



});