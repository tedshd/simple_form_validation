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
        function url(validateInput, errorMsg) {
            var filter = /^(https?|http):\/\/[^\s$.?#].[^\s]*$/gm,
                result = validateInput.match(filter);
            if (result === null) {
                return errorMsg || 'URL format error';
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

        function peopleId(validateInput, errorMsg) {
            if (validateInput.length !== 10) {
                return errorMsg || 'inconsistent length';
            }

            if (!/(^[A-Za-z][12][\d]{8}$)|([A-Za-z][A-Da-d][\d]{8}$)/.test(validateInput)) {
                return errorMsg || 'inconsistent id';
            }

            var enCode = 'ABCDEFGHJKLMNPQRSTUVXYWZIO',
                enCodeMatch = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'],
                tmp = validateInput.split(''),
                en = tmp[0].toUpperCase();

            if (enCode.indexOf(en) === -1) {
                return errorMsg || 'inconsistent id';
            }

            var enMatch = enCodeMatch[enCode.indexOf(en)].split('');

            tmp.shift();

            var matchArr = enMatch.concat(tmp);

            for (var i = 0; i < matchArr.length; i++) {
                matchArr[i] = parseInt(matchArr[i], 10);
            }

            var val = matchArr[0] + 9*matchArr[1] + 8*matchArr[2] + 7*matchArr[3] + 6*matchArr[4] + 5*matchArr[5] + 4*matchArr[6] + 3*matchArr[7] + 2*matchArr[8]+ 1*matchArr[9] + matchArr[10];

            if (val%10) {
                return errorMsg || 'inconsistent id';
            } else {
                return 'pass';
            }
        }

        function mobilePhone(validateInput, errorMsg) {
            var filterPhone = /^09[0-9]{8}$/,
                resultPhone = validateInput.match(filterPhone);
            if (resultPhone === null) {
                return errorMsg || 'mobilePhone not match';
            } else {
                return 'pass';
            }
        }

        function telephone(country, validateInput, errorMsg) {
            if (!country) {
                console.error('validateForm telephone: country not set');
                return;
            }
            var resultPhone = true;
            switch (country) {
                case 'tw':
                    var filterPhone1 = /^0[0-9]{9}$/,
                        filterPhone2 = /^0[0-9]{10}$/;
                    if (validateInput.match(filterPhone1) === null &&
                        validateInput.match(filterPhone2) === null) {
                        resultPhone = false;
                    }
                    break;
                default:
                    console.error('validateForm telephone: country not match');
                    break;
            }
            if (!resultPhone) {
                return errorMsg || 'telephone not match';
            } else {
                return 'pass';
            }
        }

        this.required = required;
        this.email = email;
        this.url = url;
        this.stringLength = stringLength;
        this.engNum = engNum;
        this.num = num;
        this.allBlank = allBlank;
        this.peopleId = peopleId;
        this.mobilePhone = mobilePhone;
        this.telephone = telephone;
    }

    window.validateForm = validateForm;
})();
