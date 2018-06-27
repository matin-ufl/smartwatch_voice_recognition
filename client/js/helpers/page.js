

/*global define*/
/*jslint plusplus: true */

/**
 * Page helper module.
 *
 * @module helpers/page
 * @namespace helpers/page
 * @memberof helpers
 */

define({
    name: 'helpers/page',
    def: function helpersPage() {
        'use strict';

        /**
         * Checks if the page is active.
         * Returns true when the given page is active, false otherwise.
         *
         * @memberof helpers/page
         * @public
         * @param {HTMLElement} page
         * @returns {boolean}
         */
        function isPageActive(page) {
            return page.classList.contains('ui-page-active');
        }

        return {
            isPageActive: isPageActive
        };
    }
});
