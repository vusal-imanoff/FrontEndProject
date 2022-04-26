var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

$(document).ready(function () {
  $("#myModal").click(function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

var modal_menu = document.getElementById("myModal_menu");
var btn_menu = document.getElementById("myBtn_menu");
var span_menu = document.getElementsByClassName("close_menu")[0];

btn_menu.onclick = function () {
  modal_menu.style.display = "block";
  console.log('salam');
}
span_menu.onclick = function () {
  modal_menu.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal_menu) {
    modal_menu.style.display = "none";
  }
}

$(document).ready(function () {
  $(".four_left").click(function () {
    $(".four_left_categories").slideToggle()
  });
});

$(document).ready(function () {
  $(".four_top_span").click(function () {
    $(".four_left_categories").slideToggle()
  });
});
$(document).ready(function () {
  $(".fresh_mobile").click(function () {
    $(".fruit_dropdown_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".beverages_mobile").click(function () {
    $(".beverages_dropdown_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".lang_down_span").click(function () {
    $(".lang_down").slideToggle()
  });
});
$(document).ready(function () {
  $(".currency_down_span").click(function () {
    $(".currency_down").slideToggle()
  });
});
$(document).ready(function () {
  $(".home_menu").click(function () {
    $(".home_down_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_menu").click(function () {
    $(".shop_down_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_one").click(function () {
    $(".shop_down_mobile_one").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_two").click(function () {
    $(".shop_down_mobile_two").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_three").click(function () {
    $(".shop_down_mobile_three").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_four").click(function () {
    $(".shop_down_mobile_four").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_five").click(function () {
    $(".shop_down_mobile_five").slideToggle()
  });
});
$(document).ready(function () {
  $("#search_menu").click(function (event) {
    event.preventDefault();
    $(".footer_search").toggleClass('d-none')
  });
});

//shop.css

$(document).ready(function () {
  $(".icon_beverages").click(function (event) {
    event.preventDefault();
    $(".icon_beverages").addClass('d-none');
    $(".icon_beverages_minus").removeClass('d-none');
  });

  $(".icon_beverages_minus").click(function (event) {
    event.preventDefault();
    $(".icon_beverages").removeClass('d-none');
    $(".icon_beverages_minus").addClass('d-none');
  });

  $(".icon_beverages_minus").click(function (event) {
    event.preventDefault();
    $(".ul_beverages").slideToggle();
  });

  $(".icon_beverages").click(function (event) {
    event.preventDefault();
    $(".ul_beverages").slideToggle();
  });

  $(".icon_breads").click(function (event) {
    event.preventDefault();
    $(".ul_breads").slideToggle();
  });

  $(".icon_breads").click(function (event) {
    event.preventDefault();
    $(".icon_breads").addClass('d-none');
    $(".icon_breads_minus").removeClass('d-none');
  });

  $(".icon_breads_minus").click(function (event) {
    event.preventDefault();
    $(".icon_breads").removeClass('d-none');
    $(".icon_breads_minus").addClass('d-none');
  });

  $(".icon_breads_minus").click(function (event) {
    event.preventDefault();
    $(".ul_breads").slideToggle();
  });

  $(".icon_breakfast").click(function (event) {
    event.preventDefault();
    $(".ul_breakfast").slideToggle();
  });

  $(".icon_breakfast").click(function (event) {
    event.preventDefault();
    $(".icon_breakfast").addClass('d-none');
    $(".icon_breakfast_minus").removeClass('d-none');
  });

  $(".icon_breakfast_minus").click(function (event) {
    event.preventDefault();
    $(".icon_breakfast").removeClass('d-none');
    $(".icon_breakfast_minus").addClass('d-none');
  });

  $(".icon_breakfast_minus").click(function (event) {
    event.preventDefault();
    $(".ul_breakfast").slideToggle();
  });


  $(".icon_fruits").click(function (event) {
    event.preventDefault();
    $(".ul_fruits").slideToggle();
  });
  $(".icon_fruits").click(function (event) {
    event.preventDefault();
    $(".icon_fruits").addClass('d-none');
    $(".icon_fruits_minus").removeClass('d-none');
  });

  $(".icon_fruits_minus").click(function (event) {
    event.preventDefault();
    $(".icon_fruits").removeClass('d-none');
    $(".icon_fruits_minus").addClass('d-none');
  });

  $(".icon_fruits_minus").click(function (event) {
    event.preventDefault();
    $(".ul_fruits").slideToggle();
  });
  $(".icon_meats").click(function (event) {
    event.preventDefault();
    $(".ul_meats").slideToggle();
  });
  $(".icon_meats").click(function (event) {
    event.preventDefault();
    $(".icon_meats").addClass('d-none');
    $(".icon_meats_minus").removeClass('d-none');
  });

  $(".icon_meats_minus").click(function (event) {
    event.preventDefault();
    $(".icon_meats").removeClass('d-none');
    $(".icon_meats_minus").addClass('d-none');
  });

  $(".icon_meats_minus").click(function (event) {
    event.preventDefault();
    $(".ul_meats").slideToggle();
  });

});


$(document).ready(function () {
  $("#open_menu").click(function () {
    $(".header_menu").css('display','block')
    $(".header_menu").addClass('animate__fadeInLeft')
    $(".header_menu").removeClass('animate__fadeOutLeft')

  });

  $("#close_menu").click(function (event) {
    event.preventDefault();
    $(".header_menu").addClass('animate__fadeOutLeft')
    $(".header_menu").removeClass('animate__fadeInLeft')


  });
  $("#category_icon").click(function (event) {
    event.preventDefault();
    $(".header_menu").css('display','block')
    $(".header_menu").addClass('animate__fadeInLeft')
    $(".header_menu").removeClass('animate__fadeOutLeft')
  });

});

$('.sliderall').slick({
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});
$('.product_bottom').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});




