/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-22 09:28:36
 * @version $Id$
 */

(function () {
    function validateForm() {
        function required(validateInput, errorMsg) {
            if (validateInput === null || validateInput === '') {
                return errorMsg || 'This option must be filled out';
            } else {
                return 'pass';
            }
        }
        function email(validateInput, errorMsg) {
            var atpos = validateInput.indexOf('@'),
                dotpos = validateInput.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= validateInput.length) {
                return errorMsg || 'Not a valid e-mail address';
            } else {
                return 'pass';
            }
        }
        function stringLength(validateInput, min, max, errorMsgMin, errorMsgMax) {
            if (min < 0) {
                min = 0;
            }
            if (validateInput.length > max || validateInput.length < min) {
                if (validateInput.length > max) {
                    return errorMsgMax || 'String over ' + max;
                }
                if (validateInput.length < min) {
                    return errorMsgMin || 'String less ' + min;
                }
            } else {
                return 'pass';
            }
        }

        this.required = required;
        this.email = email;
        this.stringLength = stringLength;
    }

    window.validateForm = validateForm;
})();