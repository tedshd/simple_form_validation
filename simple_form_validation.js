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
            var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                result = validateInput.match(filter);
            if (result === null) {
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
        function engNum(validateInput, errorMsg) {
            var filterEng = /[a-zA-Z]/,
                filterNum = /[0-9]/,
                resultEng = validateInput.match(filterEng),
                resultNum = validateInput.match(filterNum);
            if (resultEng === null || resultNum === null) {
                return errorMsg || 'String not match';
            } else {
                return 'pass';
            }
        }

        this.required = required;
        this.email = email;
        this.stringLength = stringLength;
        this.engNum = engNum;
    }

    window.validateForm = validateForm;
})();