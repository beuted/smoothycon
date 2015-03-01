$(document).ready(function() {
	$("div[class$='-icon'],div[class*='-icon ']").parent()

	.click(function(e) {
		e.preventDefault();
		if ($(this).children().hasClass('open')) {
			$(this).children().addClass('close').removeClass('open');
		} else {
			$(this).children().removeClass('close').addClass('open');
		}
	})

	.hover(function(e) {
		$(this).children().addClass('hover');
	}, function(e) {
		$(this).children().removeClass('hover');
	});
});
