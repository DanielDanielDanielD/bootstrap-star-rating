/*!
* Star Rating Hebrew Translations
*
* This file must be loaded after 'star-rating.js'. Patterns in braces '{}', or
* any HTML markup tags in the messages must not be converted or translated.
*
* NOTE: this file must be saved in UTF-8 encoding.
*
* @see http://github.com/kartik-v/bootstrap-star-rating
* @author Daniel Coryat <awq8002@gmail.com>
*/
(function ($) {
    "use strict";
    $.fn.ratingLocales['he'] = {
        defaultCaption: '{rating} כוכבים',
        starCaptions: {
            0.5: 'חצי כוכב',
            1: 'כוכב אחד',
            1.5: 'כוכב וחצי',
            2: 'שני כוכבים',
            2.5: 'שני כוכבים וחצי',
            3: 'שלושה כוכבים',
            3.5: 'שלושה כוכבים וחצי',
            4: 'ארבעה כוכבים',
            4.5: 'ארבעה וחצי כוכבים',
            5: 'חמישה כוכבים'
        },
        clearButtonTitle: 'הסר כוכבים',
        clearCaption: 'לא מדורג'
    };
})(window.jQuery);
