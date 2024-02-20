export const photos = () => {

	$('.panel--grid__item').on('click', function(e) {

		$(this).toggleClass('is-expanded');

	});

}