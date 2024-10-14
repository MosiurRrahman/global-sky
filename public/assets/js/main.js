(function ($) {
	"use strict";
	document.querySelector('.sidebar-button').addEventListener('click', () =>
		document.querySelector('.main-menu').classList.toggle('show-menu'));

	$('.sidebar-button').on("click", function () {
		$(this).toggleClass('active');
	});

	jQuery('.dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul').slideToggle();
		jQuery(this).parent().siblings().children('ul').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});

	// Serch Btn
	$(".search-btn").on("click", function (e) {

		let parent = $(this).parent();

		parent.find(".search-input, .lang-card").toggleClass("active");

		e.stopPropagation();

	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".search-input, .search-btn").length) {
			$(".search-input").removeClass("active");
		}
	});
	$(".serch-close").on("click", function (e) {
		$(".search-input").removeClass("active");
	});

	var swiper = new Swiper(".banner-section-swiper", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		effect: "fade",
		loop: true,
		fadeEffect: {
			crossFade: true, // Enable cross-fade transition
		},
		// autoplay: {
		// 	delay: 2000, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 1,
			}
		}

	});

	var swiper = new Swiper(".offer-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		// autoplay: {
		// 	delay: 2000, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 2,
			}
		}

	});
	var swiper = new Swiper(".visa-card-swiper", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: "fade", // Use the fade effect
		fadeEffect: {
			crossFade: true, // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 1,
			},
		}

	});
	var swiper = new Swiper(".testimonial-swipe", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			}
		}

	});
	var swiper = new Swiper(".provide-visa-swiper", {
		slidesPerView: 1,
		speed: 1400,
		spaceBetween: 15,
		loop: true,
		centeredSlides: true,

		autoplay: {
			delay: 2100, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-3",
			prevEl: ".prev-3",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			}
		}

	});
	var swiper = new Swiper(".destination-swiper", {
		slidesPerView: 1,
		speed: 1400,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2100, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-3",
			prevEl: ".prev-3",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			}
		}

	});

	$('select').niceSelect();


	$('.services-list li').on('click', function () {
		$(this).toggleClass('selected');
	});

	//wow js 
	jQuery(window).on('load', function () {
		new WOW().init();
		window.wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
			offset: 80
		})
		window.wow.init();
	});
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	//Quantity Increment
	$(".quantity__minus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());
		if (value > 1) {
			value--;
		}
		input.val(value.toString().padStart(2, "0"));
	});
	$(".quantity__plus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());
		value++;
		input.val(value.toString().padStart(2, "0"));
	});
	//Quantity Increment Guest
	$(".guest-quantity__minus").on("click", function (e) {
		let type = $(this).data('type');
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());

		if (type == 'adult') {
			if (value > 1) {
				value--;
				$("#adult-qty").text(value.toString())
				//    $("#adullt_select_qty").val(value.toString());
			}
		} else if (type == 'child') {
			if (value > 0) {
				value--;
				$("#child-qty").text(value.toString())
				// $("#child_seelct_qty").val(value.toString());
			}
		}
		input.val(value == 0 ? value : value.toString());
	});

	$(".guest-quantity__plus").on("click", function (e) {
		e.preventDefault();
		let type = $(this).data('type');
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val());
		value++;
		if (type == 'adult') {
			$("#adult-qty").text(value.toString())
			//   $("#adullt_select_qty").val(value.toString());
		} else if (type == 'child') {
			$("#child-qty").text(value.toString())
			// $("#child_seelct_qty").val(value.toString());
		}
		input.val(value.toString());
	});
	// star-rating
	$('.star-icon').each(function () {
		let self = $(this);
		$(this).on('mouseenter', function () {
			$(this).prevAll().addBack().css("color", "#FBB03B");
		});

		$(this).on('mouseout', function () {
			if (!$(this).parent().attr("data-rating")) {
				$(this).prevAll().addBack().css("color", "#787878");
			} else {
				$(this).siblings().addBack().each(function (index) {
					index + 1 <= $(this).parent().attr("data-rating") ?
						$(this).css("color", "#FBB03B") : $(this).css("color", "#787878");
				});
			}
		});
		$(this).on('click', function () {
			$(this).parent().attr("data-rating", $(this).prevAll().length + 1);
		});

	});


	$(function () {
		// Check if the 'inOut' input exists and initialize daterangepicker
		if ($('input[name="inOut"]').length > 0) {
			$('input[name="inOut"]').daterangepicker({
				singleDatePicker: true,
				showDropdowns: true,
				minYear: 2023,
				maxYear: 2025,
				locale: {
					format: 'DD-MMM-YYYY'
				}
			}, function (start, end, label) {
				var years = moment().diff(start, 'years');
				// You can use the 'years' variable here if needed
			});
		} else {
			console.error("Input with name 'inOut' not found.");
		}
	
		// Check if the 'daterange' input exists and initialize daterangepicker
		if ($('input[name="daterange"]').length > 0) {
			$('input[name="daterange"]').daterangepicker({
				opens: 'left',
				minYear: 2024,
				maxYear: 2026,
				locale: {
					format: 'DD-MMM'
				}
			}, function (start, end, label) {
				console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
			});
		} else {
			console.error("Input with name 'daterange' not found.");
		}
	});
	

	var startedFromIndexPage = false;

	$(document).on("click", '.StartSlideShowFirstImage', function () {

		startedFromIndexPage = true;
		$('a[data-fancybox="images"]').first().trigger('click');
		$.fancybox.getInstance().SlideShow.toggle();
	})

	$('[data-fancybox="images"]').fancybox({
		fullScreen: {
			autoStart: true,
		},
		buttons: ['slideShow', 'share', 'close'],
		onSlideShowChange: function (instance, current, active) {
			console.info('SlideShow active? ' + active);
			if (active && !startedFromIndexPage) {
				instance.next();
			}
			startedFromIndexPage = false;
		}
	});

	$('.select-input').on("click", function () {
		$('.custom-select-wrap').toggleClass('active');
	});
	//Destination-dropdown
	$(document).on("click", '.destination-dropdown-icon', function (e) {
		e.stopPropagation();
		$(this).next(".destination-wrap").toggleClass("active");
		$(this).parents('.destination-column').siblings().children('.destination-dropdown-card').children('.destination-wrap').removeClass('active');
	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".destination-wrap").length) {
			$(".destination-wrap").removeClass("active");
		}
	});

	$('.searchbox-input').each(function () {
		var $container = $(this);
		$container.find('.option-list li').on("click", function () {
			var destinationText = $(this).find('.destination h6, h6').text();
			$container.find('.select-input input').val(destinationText);
			$container.find('.custom-select-wrap').removeClass('active');
		});
		$(document).on("click", function (event) {
			if (!$(event.target).closest($container).length) {
				$container.find('.custom-select-wrap').removeClass('active');
			}
		});
		$container.find('.custom-select-search-area input').on('input', function () {
			var searchText = $(this).val().toLowerCase();
			$container.find('.option-list li').each(function () {
				var destinationText = $(this).find('.destination h6').text().toLowerCase();
				if (destinationText.includes(searchText)) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		});
	});


	// multistep form start

	$(document).ready(function () {
		var currentStep = 0;
		var $msformFieldsets = $("#msform fieldset");
		var $progressbarLi = $("#progressbar li");
		function updateStep(step) {
			$msformFieldsets.removeClass("active");
			$msformFieldsets.eq(step).addClass("active");
			$progressbarLi.removeClass("processing");
			$progressbarLi.removeClass("active");
			$progressbarLi.eq(step).addClass("processing");
			$progressbarLi.slice(0, step).addClass("active");
		}
		// Initially, make the first fieldset and the first progress bar item active
		$msformFieldsets.eq(0).addClass("active");
		$progressbarLi.eq(0).addClass("processing");
		$(".next").click(function (e) {
			e.preventDefault();
			if (currentStep < $msformFieldsets.length - 1) {
				currentStep++;
				updateStep(currentStep);
			}
		});
		$(".prev").click(function (e) {
			e.preventDefault();
			if (currentStep > 0) {
				currentStep--;
				updateStep(currentStep);
			}
		});
	});

	// Check if the dropzone and template elements exist before initializing Dropzone
	const dropzoneElement = document.querySelector(".dropzone-1");
	const dropzoneElement2 = document.querySelector(".dropzone-2");
	const templateElement = document.querySelector(".my-template");
	if (dropzoneElement && templateElement) {
		const dropzone1 = new Dropzone(".dropzone-1", {
			url: '#', // You can set the correct URL here
			dictDefaultMessage: '',
			previewTemplate: templateElement.innerHTML
		});
	}
	if (dropzoneElement2 && templateElement) {
		const dropzone2 = new Dropzone(".dropzone-2", {
			url: '#', // You can set the correct URL here
			dictDefaultMessage: '',
			previewTemplate: templateElement.innerHTML
		});
	}


	var modal = document.getElementById("imageModal");

	// Get the images and the modal content elements
	var images = document.getElementsByClassName("popup-image");
	var modalImg = document.getElementById("modalImage");
	var captionText = document.getElementById("caption");

	// Loop through images to add click event
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = function () {
			modal.style.display = "flex";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}
}(jQuery));