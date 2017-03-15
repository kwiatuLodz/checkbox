/**
 * Custom checkbox / radio
 */
(function($) {
	$.fn.checkbox = function() {
		
		$(this).click(function(e) {
			
			var that = $(this);
			
			if(that.hasClass('disabled')) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
			
			if(!that.find('.point').length) {
				that.find('.check-content').append('<span class="point" />');
				setTimeout(function() {
					that.find('.point').remove();
				}, 800);
			}
		});
	};
})(jQuery);
