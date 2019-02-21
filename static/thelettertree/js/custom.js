$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > window.innerHeight-100) {
			$(".navbar").removeClass("bg-transparent")
			$(".navbar").addClass("bg-primary");
		}
		if ($(this).scrollTop() < window.innerHeight-100) {
			$(".navbar").removeClass("bg-primary")
			$(".navbar").addClass("bg-transparent")
		}
	});
});