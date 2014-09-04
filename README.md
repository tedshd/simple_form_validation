simple_form_validation
======================

simple form validation provide validate format and return result

### Intro

It only validate input value.

### Feature

* Simple

* Only provide value validate and return result

* Developer can handle logic in their form validate

### Usage

#### Method

* required(validateInput, errorMsg)

    Check required input
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

* email(validateInput, errorMsg)

    Check email format
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

* stringLength(validateInput, min, max, errorMsgMin, errorMsgMax)

    Check string length limit
    * validateInput(string): input DOM value
    * min(number): number want limit min
    * max(number): number want limit max
    * errorMsgMin(string): custom error message want show
    * errorMsgMax(string): custom error message want show

* engNum(validateInput, errorMsg)

    Must include english string and number
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

* allBlank(validateInput, errorMsg)

    Check input all whitespace
    * validateInput(string): input DOM value
    * errorMsg(string): custom error message want show

### Sample

Use jQuery as sample.

HTML

```html
<form id="form" action="">
    <label class="material-design-label" for="email">E-mail</label>
    <input class="validate-option" id="email" type="text">
    <button type="submit">Submit</button>
</form>
```

JavaScript

```javascript
var validateForm = new validateForm;
$('#form').on('submit', function(e) {
    e.preventDefault();
    alert(validateForm.email($('#form input').val(), 'Email Error'));
});
```
