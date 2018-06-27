

/*global define, console*/

/**
 * App module.
 *
 * @module app
 * @requires {@link views/init}
 * @namespace app
 */

define({
    name: 'app',
    requires: [
        'views/init'
    ],
    def: function appInit() {
        'use strict';

        /**
         * Initializes the app.
         *
         * @memberof app
         * @public
         */
        function init() {
            console.log('app::init');
        }

        return {
            init: init
        };
    }
});
