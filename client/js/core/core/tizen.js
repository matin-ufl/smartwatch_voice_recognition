

/*global define*/

/**
 * Tizen module.
 * Module returns tizen global object.
 * @namespace core/tizen
 * @memberof core
 *
 * @example
 * //Define `foo` module which require `core/tizen` module:
 * define({
 *     name: 'foo',
 *     requires: ['core/tizen'],
 *     def: function (tizen) {
 *          var systeminfo = tizen.systeminfo;
 *     }
 * });
 */

define({
    name: 'core/tizen',
    requires: ['core/window'],
    def: function coreTizen(win) {
        'use strict';

        return win.tizen;
    }
});
