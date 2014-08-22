simple_form_validation
======================

simple form validation provide validate format and return result

### Intro

It only validate input value.

### Usage

#### Method

* required(validateInput, errorMsg)
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

* email(validateInput, errorMsg)
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

* stringLength(validateInput, min, max, errorMsgMin, errorMsgMax)
    * validateInput(string): input DOM value
    * min(number): number want limit min
    * max(number): number want limit max
    * errorMsgMin(string): custom error message want show
    * errorMsgMax(string): custom error message want show


### Sample

```javascript
var validateForm = new validateForm;
```