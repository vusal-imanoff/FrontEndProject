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
      modal.style.display = "none";}
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

$(document).ready(function () {
  $("#open_menu").click(function () {
    $(".header_menu").css('opacity', '1')
    $(".header_menu").css('visibility', 'visible')
    $(".header_menu").css('width', '100%')
  });

  $("#close_menu").click(function (event) {
    event.preventDefault();
    $(".header_menu").css('opacity', '0')
    $(".header_menu").css('visibility', 'hidden')
    $(".header_menu").css('width', '0')
  });
  $("#category_icon").click(function (event) {
    event.preventDefault();
    $(".header_menu").css('opacity', '1')
    $(".header_menu").css('visibility', 'visible')
    $(".header_menu").css('width', '100%')
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
        breakpoint: 480,
        settings: {
          autoplay:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
        }
      }
    ]
  });
  





