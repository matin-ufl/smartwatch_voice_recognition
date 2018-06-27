

/*global define*/
/*jslint plusplus: true */

/**
 * String helper module.
 *
 * @module helpers/string
 * @namespace helpers/string
 * @memberof helpers
 */

define({
    name: 'helpers/string',
    def: function helpersString() {
        'use strict';

        /**
         * Returns the input as a string padded on the left to the specified
         * length. By default input is padded with zeros and length
         * is set to 2.
         *
         * @memberof helpers/string
         * @public
         * @param {mixed} input
         * @param {number} length Pad length (default: 2).
         * @param {string} padString Pad string (default: '0').
         * @returns {string}
         */
        function pad(input, length, padString) {
            input = String(input);
            length = length || 2;
            padString = padString || '0';

            while (input.length < length) {
                input = padString + input;
            }

            return input;
        }

        return {
            pad: pad
        };
    }
});
