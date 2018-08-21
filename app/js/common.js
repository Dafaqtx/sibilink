$(function() {

	$(document).ready(function() {
		$('.js-reviews-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: 'reviews__dots flex flex__align-center',
			prevArrow: '<div class="reviews__arrow reviews__arrow--prev"><svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.98047 21.9988L22.6374 2.12773C23.1209 1.63902 23.1209 0.855242 22.6374 0.366532C22.154 -0.122177 21.3786 -0.122177 20.8952 0.366532L0.362582 21.1229C-0.120861 21.6116 -0.120861 22.3953 0.362582 22.8841L20.8952 43.6312C21.1324 43.8709 21.4516 44 21.7618 44C22.0719 44 22.3911 43.8801 22.6283 43.6312C23.1117 43.1425 23.1117 42.3587 22.6283 41.87L2.98047 21.9988Z" fill="#0F6FEF"/></svg></div>',
			
			nextArrow: '<div class="reviews__arrow reviews__arrow--next"><svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0195 22.0012L0.362581 41.8723C-0.120861 42.361 -0.120861 43.1448 0.362581 43.6335C0.846024 44.1222 1.62135 44.1222 2.1048 43.6335L22.6374 22.8771C23.1209 22.3884 23.1209 21.6047 22.6374 21.1159L2.1048 0.368835C1.86764 0.129091 1.54838 0 1.23825 0C0.928116 0 0.608861 0.11987 0.3717 0.368835C-0.111742 0.857545 -0.111742 1.64132 0.3717 2.13003L20.0195 22.0012Z" fill="#0F6FEF"/></svg></div>'
		});
	})

});
