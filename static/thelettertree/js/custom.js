$(function () {

	// change colour of nav bar as your scroll down
	$(window).scroll(function () {
		if ($(this).scrollTop() > window.innerHeight - 350) {
			$(".navbar").removeClass("bg-transparent")
			$(".navbar").addClass("bg-primary");
			$(".navbar").addClass("border-bottom");
		} else {
			$(".navbar").removeClass("bg-primary")
			$(".navbar").removeClass("border-bottom")
			$(".navbar").addClass("bg-transparent")
		}
		var parallax = (Math.min(50+($(document).scrollTop()/$("#titlePage").height()*50), 100)) + "%";
		$("#titlePage").css("background-position-y", parallax);
	});

	// scrollspy
	$('body').scrollspy({ target: "#navbar-scroll", offset: $(".navbar").outerHeight()})

	// open up the photoswipe gallery when you click on an image
	$("#gallery img").click(function () {
		var pswpElement = $(".pswp")[0];
		var pageYScroll = window.pageYOffset || document.documentElement.scrollTop
		var items = [];

		$("#gallery img").each(function (i) {
			thumbnailWidth = this.naturalWidth;
			thumbnailHeight = this.naturalHeight;
			imageName = this.src.split("/").pop();
			largeSrc = images[imageName].large.file;
			var img = {};
			img.msrc = this.src;
			img.src = largeSrc;
			img.w = images[imageName].large.width;
			img.h = images[imageName].large.height;
			img.thumbnail = { "x": this.x, "y": this.y + pageYScroll, "w": this.width };
			items.push(img);
		});

		var options = {
			"index": $(this).parent().index(),
			"showHideOpacity": true,
			"bgOpacity": 0.6,
			"history": false,
			"barsSize": { "top": 64, "bottom": "auto" },
			"shareEl": false,
			"fullscreenEl": false,
			"zoomEl": false,
			getThumbBoundsFn: function (index) {
				return items[index].thumbnail;
			}
		};

		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	});

	// close nav menu on mobile after clicking link
	$('.navbar a').on('click', function () {
		$('.navbar-collapse').removeClass('show');
	})

	// scroll the page when you click on an A tag
	$("a").click(
		function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$("html, body").animate({
					scrollTop: $(hash).offset().top-$(".navbar").outerHeight()
				},
					800
				);
			}
		}
	);

	// var myPath = $("#path2362")[0];
    // var segment = new Segment(myPath);
	// segment.draw("0%", "100%", 5);






});