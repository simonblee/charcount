( function ( $ ){
	
	$.fn.charcount = function ( options ) {

		return this.each( function () {  
			var counter,
				mkp = '<span class="charcount"></span>',
				$this = $(this);

			// Overwrite defaults
			defaults = {
				tmpl: '{count}/{max}',
				max: $this.attr('maxlength'),
				appendTo: null
			};
			options = $.extend( {}, defaults, options );
			$this.attr('maxlength', options.max ); // In-case not set, use browser maxchar limiter

			// Create markup
			counter = options.appendTo ? $(mkp).appendTo( options.appendTo ) : $(mkp).insertAfter( $this );

			// Bind the keyup event 
			$this.on('keyup.charcount', function (){
				var count = $this.val().length, 
					remaining = parseInt( options.max ) - count;
				if( remaining <= 0 ){
					$this.val( $this.val().substr( 0, options.max ) );
				}

				// Apply to template
				counter.text( options.tmpl.replace( '{count}', count ).replace( '{max}', options.max ).replace( '{remaining}', remaining ) );
			}).trigger('keyup.charcount');
		});
	};

})( jQuery );