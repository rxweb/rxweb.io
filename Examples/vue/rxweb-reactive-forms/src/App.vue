<template>
  <div id="app">
    <div id="nav">
        <!-- <RequiredCompleteComponent msg="Required Validation Decorator"/> -->
       <!-- <router-link to="/">Home</router-link>
           <router-link to="/about">About</router-link>
       <router-link to="/required">Required</router-link>
          <router-link to="/alpha">Alpha</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ReactiveFormConfig } from '@rxweb/reactive-forms'
import RequiredCompleteComponent from './components/required/complete/required-complete.vue'
import AlphaCompleteComponent from './components/alpha/complete/alpha-complete.vue'

export default {
   name: 'app',
  components: {
    RequiredCompleteComponent,
    AlphaCompleteComponent
  }
  
}
 ReactiveFormConfig.set(
 {  "validationMessage": {
      "alpha": "Only alphabets are allowed.",
      "alphaNumeric": "Only Alpha Numerics are allowed.",
      "compare": "Both field are not matched",
      "contains": "input not contain string",
      "creditCard": "Invalid creditcard no.",
      "digit": "only digits are allowed",
      "email": "Invalid email format",
      "greaterThanEqualTo": "value should be greater than equal to field",
      "greaterThan": "value should be greater than field",
      "hexColor": "Invalid Hex Color format",
      "json": "Invalid Json format",
      "lessThanEqualTo": "value should be less than equal to field",
      "lessThan": "value should be less than field",
      "lowerCase": "Only lower case are allowed.",
      "maxLength": "Maximum Length is not matched",
      "maxDate": "Maximum Date is not matched",
      "minDate": "Minimum Date is not matched",
      "maxNumber": "Maximum number is not matched.",
      "minLength": "Minimum length is not matched",
      "minNumber": "Number should less than equal to minimum number.",
      "password": "Invalid Password",
      "range": "Input value not in range",
      "required": "This field is required",
     
      "time": "Please enter proper time format",
      "upperCase": "Only upper case are allowed.",
      "url": "Please enter proper url format",
      "pattern": "Please add input as per pattern",
      "leapYear": "Please enter a valid leap year",
      "factor": "Enter valid factors.",
      "odd": "Enter a valid odd number.",
      "even": "Enter a valid even number.",
      "numeric": "Enter a valid numeric digit.",
      "different": "Do not enter same inputs.",
      "choice": "Please select valid inputs.",
      "allOf": "You must select all options.",
      "oneOf": "Select minimum one option.",
      "noneOf": "You cannot select any option.",
      "mac": "Enter valid MAC address.",
      "ascii": "Please enter a valid ascii code",
      "dataUri": "Please enter a valid data Uri",
      "port": "Please enter a valid port number",
      "latLong": "Please enter a valid latLong",
      "fileSize": "Please enter a valid size",
      "endsWith": "Input must ends with a pre defined value",
      "startsWith": "Input must starts with a pre defined value",
      "primeNumber": "Please enter a valid prime number",
      "latitude": "Please enter a valid latitude",
      "longitude": "Please enter a valid longitude",
      "extension": "Enter a valid extension.",
      "file": "Enter valid file count",
      "image": "Enter valid file height and width",
      "unique": "Enter unique value in the input",
    
      "compose": "Enter a valid input",
      "rule": "Enter a valid input based on customRules.",
      "cusip": "Enter a valid cusip code only.",
      "date": "Please enter a valid date input",
      "async": "Please enter valid input.",
      "grid": "Input should be a proper GRid number",
      "notEmpty": "You cannot keep this field empty.",
      "maxTime": "Maximum time is not matched",
      "minTime": "Minimum time is not matched",
      "blacklist": "",
      "ltrim": "",
      "rtrim": "",
      "stripLow": "",
      "toBoolean": "",
      "toDate": "",
      "toDouble": "",
      "toFloat": "",
      "toInt": "",
      "toString": "",
      "trim": "",
      "whitelist": "",
      "alphaMessageKey": "The input must only be in alphabets",
      "alphaNumericMessageKey": "The input enterred must only be in alpha-numerics",
      "asciiMessageKey": "The input enterred must be in the proper ascii format.",
      "compareMessageKey": "The input enterred must be same as the input in the above field",
      "containsMessageKey": "The input enterred must contain the substring mentioned in config parameter",
      "creditCardMessageKey": "The input enterred must be a card number.",
      "cusipMessageKey": "The input enterred must be a valid cusip code.",
      "dataUriMessageKey": "The input enterred must be a valid data uri.",
      "dateMessageKey": "The input enterred must be in a proper date format.",
      "differentMessageKey": "The input enterred must be different from the input in the above field",
      "digitMessageKey": "The input enterred must be a digit.",
      "emailMessageKey": "The input enterred must be in a proper email format",
      "endsWithMessageKey": "The input enterred must endsWith the substring mentioned in config parameter",
      "evenMessageKey": "The input enterred must be a proper even number",
      "extensionMessageKey": "Uploaded file must be in a proper extension",
      "factorMessageKey": "The input enterred must be a proper factor",
      "fileMessageKey": "Uploaded files must be in the range mentioned in the config parameter",
      "fileSizeMessageKey": "Uploaded files must be of the proper size",
      "greaterThanMessageKey": "The input enterred must be greater than value passed in config parameter.",
      "greaterThanEqualToMessageKey": "The input enterred must be greater than or equal to value passed in config parameter.",
      "gridMessageKey": "The input enterred must be a proper Global Release Identifier",
      "hexColorMessageKey": "The input enterred must be a valid hexcolor",
      "imageMessageKey": "Uploaded files must be of the proper configuration based on config values",
      "ipMessageKey": "The input enterred must be a proper IP",
      "jsonMessageKey": "The input enterred must be in a proper json format",
      "latitudeMessageKey": "The input enterred must be a proper latitude value",
      "latLongMessageKey": "The input enterred must be a proper latitude and longitude value",
      "leapYearMessageKey": "The input enterred must be a proper leap year",
      "lessThanMessageKey": "The input enterred must be less than the field mentioned in config parameter",
      "lessThanEqualToMessageKey": "The input enterred must be less than or equal to the field mentioned in config parameter",
      "longitudeMessageKey": "The input enterred must be a proper longitude value",
      "lowerCaseMessageKey": "The input enterred must be in lowercase only",
      "macMessageKey": "The input enterred must be a proper mac address",
      "maxDateMessageKey": "The input date enterred must be less than the value mentioned in config",
      "minDateMessageKey": "The input date enterred must be greater than the value mentioned in config",
      "maxLengthMessageKey": "The input enterred can have maximum 20 characters",
      "minLengthMessageKey": "The input enterred must have minimum 6 characters",
      "maxNumberMessageKey": "The input enterred must be less than or equal to the config value",
      "minNumberMessageKey": "The input enterred must be greater than or equal to the config value",
      "notEmptyMessageKey": "You must enter input in this field",
      "numericMessageKey": "The input enterred must be according to the config parameters",
      "oddMessageKey": "The input enterred must be a proper odd number",
      "passwordMessageKey": "The input enterred must be a valid password",
      "patternMessageKey": "The input enterred must be according to the regex passed in config parameter",
      "portMessageKey": "The input enterred must be a valid port number",
      "primeNumberMessageKey": "The input enterred must be a valid prime number",
      "rangeMessageKey": "The input enterred must be in a proper range",
      "requiredMessageKey": "You can not leave this field empty",
      "requiredTrueMessageKey": "The input value Should be true",
      "startsWithMessageKey": "The input enterred must startsWith the substring mentioned in config parameter",
      "timeMessageKey": "The input enterred must be a valid time format",
      "upperCaseMessageKey": "The input enterred must be in upper case only",
      "urlMessageKey": "The input enterred must be in a valid url format only",
      "maxTimeMessageKey": "The input time enterred must be less than the value mentioned in config",
      "minTimeMessageKey": "The input time enterred must be greater than the value mentioned in config"
    }
 }
   );
</script>

