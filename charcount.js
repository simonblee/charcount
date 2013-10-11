(function ($) {

    $.fn.charcount = function (options) {

        return this.each(function () {
            var $counter,
                $this = $(this);

            // Overwrite defaults
            defaults = {
                template: '{count}/{max}',
                max: $this.attr('maxlength'),
                $element: null
            };
            options = $.extend({}, defaults, options);
            $this.attr('maxlength', options.max); // In-case not set, use browser maxchar limiter

            $counter = options.$element;

            // Bind the keyup event
            $this.on('keyup.charcount', function () {
                var count = $this.val().length,
                    remaining = parseInt(options.max, 10) - count;

                if (remaining <= 0) {
                    $this.val($this.val().substr(0, options.max));
                }

                // Apply to template
                $counter.text(
                    options.template.replace('{count}', count)
                                    .replace('{max}', options.max)
                                    .replace('{remaining}', remaining)
                );
            }).trigger('keyup.charcount');
        });
    };

})(jQuery);
