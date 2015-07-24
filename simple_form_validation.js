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
                filterCh = /[\u4E00-\u9FA5]/, // check chinese
                resultEng = validateInput.match(filterEng),
                resultNum = validateInput.match(filterNum),
                resultCh = validateInput.match(filterCh);
            if (resultEng === null || resultNum === null || resultCh) {
                return errorMsg || 'String not match';
            } else {
                return 'pass';
            }
        }
        
        function num(validateInput, errorMsg) {
            var filterNum = /[0-9]/,
                resultNum = validateInput.match(filterNum);
            if (resultNum === null) {
                return errorMsg || 'String not match';
            } else {
                return 'pass';
            }
        }

        function allBlank(validateInput, errorMsg) {
            var filterAllBlank = /[\S]/,
                resultAllBlank = validateInput.match(filterAllBlank);
            if (resultAllBlank === null) {
                return errorMsg || 'all blank';
            } else {
                return 'pass';
            }
        }

        this.required = required;
        this.email = email;
        this.stringLength = stringLength;
        this.engNum = engNum;
        this.num = num;
        this.allBlank = allBlank;
    }

    window.validateForm = validateForm;
})();
