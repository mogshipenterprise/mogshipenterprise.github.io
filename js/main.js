$(document).ready(function(){
	var siteHeader = document.querySelector("header");
	if (siteHeader) {
		var toggleHeaderState = function() {
			if (window.scrollY > 40) {
				siteHeader.classList.add("is-scrolled");
			} else {
				siteHeader.classList.remove("is-scrolled");
			}
		};

		toggleHeaderState();
		window.addEventListener("scroll", toggleHeaderState);
	}

	if ($("#portfolio-contant-active").length) {
		$("#portfolio-contant-active").mixItUp();
	}

	if ($(".counter").length) {
		$(".counter").counterUp({
	        delay: 10,
	        time: 1000
	    });
	}

	var scrollTopButton = document.getElementById("scrollTopButton");
	if (scrollTopButton) {
		var toggleScrollButton = function() {
			if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
				scrollTopButton.classList.add("is-visible");
			} else {
				scrollTopButton.classList.remove("is-visible");
			}
		};

		toggleScrollButton();
		window.addEventListener("scroll", toggleScrollButton);
		scrollTopButton.addEventListener("click", function() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	$('a[href^="#"]').on("click", function(event) {
		var targetId = $(this).attr("href");
		if (targetId.length > 1 && $(targetId).length) {
			event.preventDefault();
			$("html, body").animate({
				scrollTop: $(targetId).offset().top - 80
			}, 500);
		}
	});

});


