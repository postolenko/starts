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

function getScrollBtnParams() {
  if($(document).scrollTop() > $(window).height()) {
    $(".to_top_btn").addClass("visible");
  } else {
    $(".to_top_btn").removeClass("visible");
  }
}

function getSidebarParams() {
  if(bodyWidth <= 1024 && !$(".scroll_sidebar_wrapp").hasClass("resp")) {
    $(".scroll_sidebar").css({
      "display" : "none"
    });
    $(".scroll_sidebar_wrapp").removeClass("active");
    $(".scroll_sidebar_wrapp").addClass("resp");
  } else {
    $(".scroll_sidebar_wrapp").removeClass("resp");
  }
}

function getFixedHeaderParams() {
  if($(document).scrollTop() > $(".res_header").height()) {
    $(".res_header").addClass("scroll");
  } else {
    $(".res_header").removeClass("scroll");
  }
}

$(window).load(function() {
  if($(".scroll_y").length > 0) {
    $(".scroll_y").mCustomScrollbar();
  }
  if($(".resp_catalog_scroll").length > 0) {
    $(".resp_catalog_scroll").mCustomScrollbar();
  }

  if($(".testimonial_scroll").length > 0) {
    $(".testimonial_scroll").mCustomScrollbar({
      axis:"x",
      callbacks:{
          onInit: function(){
            $(".testimonial_scroll .mCSB_dragger_bar").prepend("<span class='scroll_blue'></span>");
            leftCoord = $(".testimonial_scroll .mCSB_draggerContainer").offset().left;
            leftSpanCoord = $(".testimonial_scroll .scroll_blue").offset().left;
            width = leftSpanCoord - leftCoord;
            $(".testimonial_scroll .scroll_blue").css({
              "width" : width + "px"
            });
          },
          whileScrolling: function(){
            $(".scroll_blue").css({
              "width" : "auto"
            });
            leftCoord = $(".testimonial_scroll .mCSB_draggerContainer").offset().left;
            leftSpanCoord = $(".testimonial_scroll .scroll_blue").offset().left;
            width = leftSpanCoord - leftCoord;            
            $(".testimonial_scroll .scroll_blue").css({
              "width" : width + "px"
            });
          }
      }
    });
  }

  if($(".scrollbox_2").length > 0) {
    $(".scrollbox_2").mCustomScrollbar();
  }

  if($(".scroll_table_wrapp").length > 0) {
    $(".scroll_table_wrapp").mCustomScrollbar();
  }

  if($(".tabs_wrapp").length > 0) {
    $(".tabs_wrapp").mCustomScrollbar({
      axis:"x",
      callbacks:{
          onInit: function(){
            $(".tabs_wrapp .mCSB_dragger_bar").prepend("<span class='scroll_blue'></span>");
            leftCoord = $(".tabs_wrapp .mCSB_draggerContainer").offset().left;
            leftSpanCoord = $(".tabs_wrapp .scroll_blue").offset().left;
            width = leftSpanCoord - leftCoord;
            $(".tabs_wrapp .scroll_blue").css({
              "width" : width + "px"
            });
          },
          whileScrolling: function(){
            $(".scroll_blue").css({
              "width" : "auto"
            });
            leftCoord = $(".tabs_wrapp .mCSB_draggerContainer").offset().left;
            leftSpanCoord = $(".tabs_wrapp .scroll_blue").offset().left;
            width = leftSpanCoord - leftCoord;            
            $(".tabs_wrapp .scroll_blue").css({
              "width" : width + "px"
            });
          }
      }
    });
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

  getSidebarParams();

});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getMainNavParams();
  getScrollBtnParams();
  getSidebarParams();
  getFixedHeaderParams();

  // ----------------

  $(".scroll_blue").css({
    "width" : "auto"
  });
  leftCoord = $(".testimonial_scroll .mCSB_draggerContainer").offset().left;
  leftSpanCoord = $(".testimonial_scroll .scroll_blue").offset().left;
  width = leftSpanCoord - leftCoord;            
  $(".testimonial_scroll .scroll_blue").css({
    "width" : width + "px"
  });
  leftCoord = $(".tabs_wrapp .mCSB_draggerContainer").offset().left;
  leftSpanCoord = $(".tabs_wrapp .scroll_blue").offset().left;
  width = leftSpanCoord - leftCoord;            
  $(".tabs_wrapp .scroll_blue").css({
    "width" : width + "px"
  });

});

$(document).scroll(function() {
  getMainNavParams();
  getScrollBtnParams();
  getFixedHeaderParams();
});

$(document).ready(function() {

  getMainNavParams();
  getScrollBtnParams();
  getFixedHeaderParams();

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
          autoplaySpeed: 2000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          appendDots: $(".slider_1_dots"),
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/prev_arrow.svg"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/next_arrow.svg"></button>',
          responsive: [
              {
                breakpoint: 740,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  dots: false
                }
              }
            ]
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
      autoplaySpeed: 2000,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1,
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

  // -------------

  // $('.testimonials').on('init reInit',function(event,slick){
  //   var amount = slick.slideCount;
  //   $('#range').attr('max',amount);
  // })

  // $('.testimonials').on('afterChange',function(e,slick,currentSlide){
  //   $('#range').val(currentSlide+1);
  // })

  // $('#range').on('input change',function(){
  //   $('.testimonials').slick('slickGoTo',this.value-1);
  //   // handleInputChange(e)
  // });

    // $(".testimonials").not(".slick-initialized").slick({
    //     dots: false,
    //     arrows: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 4000,
    //     // speed: 1200,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true
    // });

    // ---------------

    $(".to_top_btn").on("click", function(e) {
      e.preventDefault();
      $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // ----------------

    $(".checkout_list p").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".checkout_dr");
      val = $(this).text();
      parent.find(".checkout_val p").text(val);
      parent.find("input[type='hidden']").val(val);
      parent.removeClass("active");
      parent.find("p").removeClass("active");
      $(this).addClass("active");
    });

    // ---------------

  if( $(".goods_slider_2").length > 0 ) {
    $(".goods_slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.miniatures_2'
    });

    $(".miniatures_2").not(".slick-initialized").slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      asNavFor: '.goods_slider_2',
      prevArrow: '<button class="slick-prev small_arrow_2 prev_small" aria-label="Previous" type="button"><img src="img/slick_left_2.svg"></button>',
      nextArrow: '<button class="slick-next small_arrow_2 next_small" aria-label="Next" type="button"><img src="img/slick_right_2.svg"></button>',
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

  $(".main_nav li").on("mouseover", function() {
    leftCoord = $(".leftCoord").offset().left;
    dr = $(this).find(".products_dr");
    dr.offset({left: leftCoord});
    dr.width($(".leftCoord").width());
  });

  $(".main_nav li").on("mousealive", function() {
    dr = $(this).find(".products_dr");
    dr.offset({left: 0});
  });

  // --------------

  $(".count_box button").click(function(e) {
    e.preventDefault();
    parentBlock = $(this).closest(".count_box");
    countInput = parentBlock.find(".count_num_input input");
    countVal = countInput.val();
    if(countVal == "") {
        countVal = 1;
    }
    if( $(this).hasClass("minus_btn") && countVal > 1 ) {
        countVal--;
    } else if( $(this).hasClass("plus_btn")) {
        countVal++;
    }
    countInput.val(countVal);
  });

  // ---------------

  $(".del_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".table_row");
    parent.remove();
  });

  // ---------------

  $(".eye").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".password_input");
    parent.toggleClass("visible");
    $(this).toggleClass("visible");
  });

  $(".pass_input").on("change", function() {
    parent = $(this).closest(".password_input");
    parent.find(".pass_input").val($(this).val());
  });

  // ---------------

  $(".respmenubtn").click(function(e) {
    e.preventDefault();
    if( $("#resp_nav").is(":hidden") ) {
        $("#resp_nav").fadeIn(300);
    } else {
        $("#resp_nav").fadeOut(300);
    }
  });

  $(".close_btn").click(function(e) {
    e.preventDefault();
    $("#resp_nav").fadeOut(300);
  });
  
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 767) {
          $("#resp_nav").fadeOut(300);
          $(".respmenubtn").removeClass("active");
      }
  });

  // ----------------

  if( $(".products_cols_2").length > 0 ) {
    $(".products_cols_2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 5,
        appendDots: $(".catalog_dots")
    });
  }

  $(".rasp_catalog_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".resp_catalog_wrapp");
    parent.toggleClass("active");
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27 &&
        $(".resp_catalog_wrapp").hasClass("active") &&
        bodyWidth <= 900) {
        $(".resp_catalog_wrapp").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    hide_element = $(".resp_catalog_wrapp");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        hide_element.removeClass("active");
      }
  });

  // --------------

  $(".rate_pill").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".rate_it_wrapp");
    parent.addClass("active");
  });

});