(function ($) {

    $.fn.charcount = function (options) {

        return this.each(function () {
            var DEFAULT_COUNTER_MARKUP = '<span class="counter" />',
                $counter,
                $this = $(this);

            // Overwrite defaults
            defaults = {
                template: '{count}/{max}',
                max: $this.attr('maxlength'),
                $counter: null
            };
            options = $.extend({}, defaults, options);
            $this.attr('maxlength', options.max); // In-case not set, use browser maxchar limiter
            
            // Create the counter if it is not provided
            if (! options.$counter) {
                options.$counter = $(DEFAULT_COUNTER_MARKUP).appendTo($this);
            }

            // Bind the keyup event
            $this.on('keyup.charcount', function () {
                var count = $this.val().length,
                    remaining = parseInt(options.max, 10) - count;

                if (remaining <= 0) {
                    $this.val($this.val().substr(0, options.max));
                }

                // Apply to template
                options.$counter.text(
                    options.template.replace('{count}', count)
                                    .replace('{max}', options.max)
                                    .replace('{remaining}', remaining)
                );
            }).trigger('keyup.charcount');
        });
    };

})(jQuery);
