$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".coffeeBean__img").animate({ left: "14%", opacity: 1 }, 1500);
    $(".coffeeBean__text").animate({ right: "8.4%", opacity: 1 }, 1500);
    // $('.showDetail').animate({left:'930px',opacity:1},2000);
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 2000) {
    $(".explore").animate({ left: "900px", opacity: 1 }, 2000);
    $(".ReserveMagazineTxT").animate({ left: "900px", opacity: 1 }, 1000);
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 2500) {
    $(".storeTxt1").animate({ left: "1060px", opacity: 1 }, 1500);
    $(".storeTxt2").animate({ left: "1060px", opacity: 1 }, 2000);
    $(".StoreShowDetail").animate({ left: "1064px", opacity: 1 }, 2500);
  }
});
// $(window).on('scroll',function() {
//     if($(window).scrollTop()<600) {
//         $('.Bean').animate( {left:'0px',opacity:0});
//         $('.BeanTxt').animate({left:'0px',opacity:0});
//         $('.showDetail').animate({left:'0px',opacity:0});
//     }

// });
