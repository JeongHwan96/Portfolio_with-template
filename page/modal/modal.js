    //팝업 열기
    function openModal(modalname) {
        document.get
        $("." + modalname).fadeIn(300);
    }

    // 팝업 닫기
    $('.popup .close').click(function () {
        $(this).parent().fadeOut(300);
    });

    //팝업 위치
    $(".popup").css({

        "top": (($(window).height() - $('.popup').outerHeight()) / 2 + $(window).scrollTop()) + "px",

        "left": (($(window).width() - $('.popup').outerWidth()) / 2 + $(window).scrollLeft()) + "px",

        "position": "absolute"

    }).show();