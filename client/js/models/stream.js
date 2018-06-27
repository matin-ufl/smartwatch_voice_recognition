

/*global define, window, navigator*/
/*jslint plusplus: true*/

/**
 * Stream model module.
 *
 * @module models/stream
 * @requires {@link core/event}
 * @namespace models/stream
 * @memberof models
 */

define({
    name: 'models/stream',
    requires: [
        'core/event'
    ],
    def: function modelsStream(e) {
        'use strict';

        /**
         * Max number attempts of obtaining access to the audio.
         *
         * @private
         * @const {number}
         */
        var INIT_MAX_ATTEMPTS = 3,

            /**
             * Get user media attempt timeout.
             *
             * @private
             * @const {number}
             */
            INIT_ATTEMPT_TIMEOUT = 500,

            /**
             * Get user media attempts counter.
             *
             * @private
             * @type {number}
             */
            initAttemtps = 0;

        /**
         * Performs action when the device provides permission
         * to use audio input device as a microphone.
         *
         * @private
         * @param {LocalMediaStream} stream
         * @fires models.stream.ready
         */
        function onUserMediaSuccess(stream) {
            initAttemtps = 0;
            e.fire('ready', {stream: stream});
        }

        /**
         * Performs action when the device does not provide permission
         * to use audio input device as a microphone.
         *
         * @private
         * @fires models.stream.cannot.access.audio
         */
        function onUserMediaError() {
            initAttemtps += 1;
            if (initAttemtps >= INIT_MAX_ATTEMPTS) {
                initAttemtps = 0;
                e.fire('cannot.access.audio');
                return;
            }
            // Application tries to obtain audio stream up to 3 times
            // because other application may not release it yet
            window.setTimeout(
                function retry() {
                    getUserMedia(onUserMediaSuccess, onUserMediaError);
                },
                INIT_ATTEMPT_TIMEOUT
            );
        }

        /**
         * Gets media stream.
         *
         * @memberof models/stream
         * @public
         */
        function getUserMedia() {
            navigator.webkitGetUserMedia(
                {
                    video: false,
                    audio: true
                },
                onUserMediaSuccess,
                onUserMediaError
            );
        }

        return {
            getStream: getUserMedia
        };
    }

});
