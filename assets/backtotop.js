$(document).ready(function(){

	// hide #back-top first
	$("#scrlTop").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scrlTop').fadeIn();
			} else {
				$('#scrlTop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#scrlTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 200);
			return false;
		});
	});

});