;$(function(){
	
	AOS.init({
        once: false,
        startEvent: 'load',
        disable: function() {
            var maxWidth = 1100;
            return window.innerWidth < maxWidth;
        }
    });
	
	setTimeout(function(){
        $("#m_spot .bg").addClass("on");
    }, 10);

	setTimeout(function(){
        $("#bt_fix").addClass("on");
    }, 700);

	setTimeout(function(){
		$("#hd_pop").removeClass("off");
        $("#hd_pop").addClass("on");
    }, 10);
	
	var isVisible = false;
	var isVisible2 = false;
	$(window).on('scroll',function() {
		if (checkVisible($('.section02'))&&!isVisible2) {
			$("#popup2").removeClass("on");
			isVisible2=false;
		}

		if (checkVisible($('.section03'))&&!isVisible) {
			$("#popup").addClass("on");
			isVisible=true;
		}
	});

	function checkVisible( elm, eval ) {
		eval = eval || "object visible";
		var viewportHeight = $(window).height(), // Viewport Height
			scrolltop = $(window).scrollTop(), // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();   
		
		if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		if (eval == "above") return ((y < (viewportHeight + scrolltop)));
	}

	$('.pop_top > a').click(function(){
		$('#popup').removeClass("on");
		return false;
	});

	$('.close > a').click(function(){
		$('#popup2').removeClass("on");
		return false;
	});

	$('#quick_wrap .contact > a').click(function(){
		$('#popup').addClass("on");
		return false;
	});
	$('#quick_wrap .event > a').click(function(){
		$('#popup2').addClass("on");
		return false;
	});


});