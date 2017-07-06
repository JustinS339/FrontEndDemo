jQuery(document).ready(function($) {

	jQuery(window).scroll(function () {   
		var scroll = jQuery(document).scrollTop();
		if (scroll > 0) {
			$("#navbar").addClass("active");
		}
		else {
			$("#navbar").removeClass("active");
		}
	});

});