import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import  AlphaCompleteComponent  from '../components/alpha/complete/alpha-complete.vue';
import  AlphaConditionalExpressionComponent  from '../components/alpha/conditionalExpression/alpha-conditional-expression.vue';
import  AlphaAllowWhiteSpaceComponent  from '../components/alpha/allowWhiteSpace/alpha-allow-white-space.vue';
import  AlphaMessageComponent  from '../components/alpha/message/alpha-message.vue';
import  AlphaMessageKeyComponent  from '../components/alpha/messageKey/alpha-message-key.vue';
import  AlphaDynamicComponent  from '../components/alpha/dynamic/alpha-dynamic.vue';
import  AlphaAddComponent  from '../components/alpha/add/alpha-add.vue';
import  AlphaEditComponent  from '../components/alpha/edit/alpha-edit.vue';
import  AlphaNumericCompleteComponent  from '../components/alphaNumeric/complete/alpha-numeric-complete.vue';
import  AlphaNumericAllowWhiteSpaceComponent  from '../components/alphaNumeric/allowWhiteSpace/alpha-numeric-allow-white-space.vue';
import  AlphaNumericMessageComponent  from '../components/alphaNumeric/message/alpha-numeric-message.vue';
import  AlphaNumericConditionalExpressionComponent  from '../components/alphaNumeric/conditionalExpression/alpha-numeric-conditional-expression.vue';
import  AlphaNumericMessageKeyComponent  from '../components/alphaNumeric/messageKey/alpha-numeric-message-key.vue';
import  AlphaNumericDynamicComponent  from '../components/alphaNumeric/dynamic/alpha-numeric-dynamic.vue';
import  AlphaNumericAddComponent  from '../components/alphaNumeric/add/alpha-numeric-add.vue';
import  AlphaNumericEditComponent  from '../components/alphaNumeric/edit/alpha-numeric-edit.vue';
import  CompareCompleteComponent  from '../components/compare/complete/compare-complete.vue';
import  CompareFieldNameComponent  from '../components/compare/fieldName/compare-field-name.vue';
import  CompareMessageComponent  from '../components/compare/message/compare-message.vue';
import  CompareMessageKeyComponent  from '../components/compare/messageKey/compare-message-key.vue';
import  CompareDynamicComponent  from '../components/compare/dynamic/compare-dynamic.vue';
import  CompareAddComponent  from '../components/compare/add/compare-add.vue';
import  CompareEditComponent  from '../components/compare/edit/compare-edit.vue';
import  ContainsCompleteComponent  from '../components/contains/complete/contains-complete.vue';
import  ContainsValueComponent  from '../components/contains/value/contains-value.vue';
import  ContainsConditionalExpressionComponent  from '../components/contains/conditionalExpression/contains-conditional-expression.vue';
import  ContainsMessageComponent  from '../components/contains/message/contains-message.vue';
import  ContainsMessageKeyComponent  from '../components/contains/messageKey/contains-message-key.vue';
import  ContainsDynamicComponent  from '../components/contains/dynamic/contains-dynamic.vue';
import  ContainsAddComponent  from '../components/contains/add/contains-add.vue';
import  ContainsEditComponent  from '../components/contains/edit/contains-edit.vue';
import  CreditCardCompleteComponent  from '../components/creditCard/complete/credit-card-complete.vue';
import  CreditCardFieldNameComponent  from '../components/creditCard/fieldName/credit-card-field-name.vue';
import  CreditCardConditionalExpressionComponent  from '../components/creditCard/conditionalExpression/credit-card-conditional-expression.vue';
import  CreditCardMessageComponent  from '../components/creditCard/message/credit-card-message.vue';
import  CreditCardMessageKeyComponent  from '../components/creditCard/messageKey/credit-card-message-key.vue';
import  CreditCardDynamicComponent  from '../components/creditCard/dynamic/credit-card-dynamic.vue';
import  CreditCardAddComponent  from '../components/creditCard/add/credit-card-add.vue';
import  CreditCardEditComponent  from '../components/creditCard/edit/credit-card-edit.vue';
import  DigitCompleteComponent  from '../components/digit/complete/digit-complete.vue';
import  DigitConditionalExpressionComponent  from '../components/digit/conditionalExpression/digit-conditional-expression.vue';
import  DigitMessageComponent  from '../components/digit/message/digit-message.vue';
import  DigitMessageKeyComponent  from '../components/digit/messageKey/digit-message-key.vue';
import  DigitDynamicComponent  from '../components/digit/dynamic/digit-dynamic.vue';
import  DigitAddComponent  from '../components/digit/add/digit-add.vue';
import  DigitEditComponent  from '../components/digit/edit/digit-edit.vue';
import  EmailCompleteComponent  from '../components/email/complete/email-complete.vue';
import  EmailConditionalExpressionComponent  from '../components/email/conditionalExpression/email-conditional-expression.vue';
import  EmailMessageComponent  from '../components/email/message/email-message.vue';
import  EmailMessageKeyComponent  from '../components/email/messageKey/email-message-key.vue';
import  EmailDynamicComponent  from '../components/email/dynamic/email-dynamic.vue';
import  EmailAddComponent  from '../components/email/add/email-add.vue';
import  EmailEditComponent  from '../components/email/edit/email-edit.vue';
import  GreaterThanEqualToCompleteComponent  from '../components/greaterThanEqualTo/complete/greater-than-equal-to-complete.vue';
import  GreaterThanEqualToFieldNameComponent  from '../components/greaterThanEqualTo/fieldName/greater-than-equal-to-field-name.vue';
import  GreaterThanEqualToValueComponent  from '../components/greaterThanEqualTo/value/greater-than-equal-to-value.vue';
import  GreaterThanEqualToConditionalExpressionComponent  from '../components/greaterThanEqualTo/conditionalExpression/greater-than-equal-to-conditional-expression.vue';
import  GreaterThanEqualToMessageComponent  from '../components/greaterThanEqualTo/message/greater-than-equal-to-message.vue';
import  GreaterThanEqualToMessageKeyComponent  from '../components/greaterThanEqualTo/messageKey/greater-than-equal-to-message-key.vue';
import  GreaterThanEqualToDynamicComponent  from '../components/greaterThanEqualTo/dynamic/greater-than-equal-to-dynamic.vue';
import  GreaterThanEqualToAddComponent  from '../components/greaterThanEqualTo/add/greater-than-equal-to-add.vue';
import  GreaterThanEqualToEditComponent  from '../components/greaterThanEqualTo/edit/greater-than-equal-to-edit.vue';
import  GreaterThanCompleteComponent  from '../components/greaterThan/complete/greater-than-complete.vue';
import  GreaterThanFieldNameComponent  from '../components/greaterThan/fieldName/greater-than-field-name.vue';
import  GreaterThanValueComponent  from '../components/greaterThan/value/greater-than-value.vue';
import  GreaterThanConditionalExpressionComponent  from '../components/greaterThan/conditionalExpression/greater-than-conditional-expression.vue';
import  GreaterThanMessageComponent  from '../components/greaterThan/message/greater-than-message.vue';
import  GreaterThanMessageKeyComponent  from '../components/greaterThan/messageKey/greater-than-message-key.vue';
import  GreaterThanDynamicComponent  from '../components/greaterThan/dynamic/greater-than-dynamic.vue';
import  GreaterThanAddComponent  from '../components/greaterThan/add/greater-than-add.vue';
import  GreaterThanEditComponent  from '../components/greaterThan/edit/greater-than-edit.vue';
import  LessThanEqualToCompleteComponent  from '../components/lessThanEqualTo/complete/less-than-equal-to-complete.vue';
import  LessThanEqualToFieldNameComponent  from '../components/lessThanEqualTo/fieldName/less-than-equal-to-field-name.vue';
import  LessThanEqualToValueComponent  from '../components/lessThanEqualTo/value/less-than-equal-to-value.vue';
import  LessThanEqualToConditionalExpressionComponent  from '../components/lessThanEqualTo/conditionalExpression/less-than-equal-to-conditional-expression.vue';
import  LessThanEqualToMessageComponent  from '../components/lessThanEqualTo/message/less-than-equal-to-message.vue';
import  LessThanEqualToMessageKeyComponent  from '../components/lessThanEqualTo/messageKey/less-than-equal-to-message-key.vue';
import  LessThanEqualToDynamicComponent  from '../components/lessThanEqualTo/dynamic/less-than-equal-to-dynamic.vue';
import  LessThanEqualToAddComponent  from '../components/lessThanEqualTo/add/less-than-equal-to-add.vue';
import  LessThanEqualToEditComponent  from '../components/lessThanEqualTo/edit/less-than-equal-to-edit.vue';
import  LessThanCompleteComponent  from '../components/lessThan/complete/less-than-complete.vue';
import  LessThanFieldNameComponent  from '../components/lessThan/fieldName/less-than-field-name.vue';
import  LessThanValueComponent  from '../components/lessThan/value/less-than-value.vue';
import  LessThanConditionalExpressionComponent  from '../components/lessThan/conditionalExpression/less-than-conditional-expression.vue';
import  LessThanMessageComponent  from '../components/lessThan/message/less-than-message.vue';
import  LessThanMessageKeyComponent  from '../components/lessThan/messageKey/less-than-message-key.vue';
import  LessThanDynamicComponent  from '../components/lessThan/dynamic/less-than-dynamic.vue';
import  LessThanAddComponent  from '../components/lessThan/add/less-than-add.vue';
import  LessThanEditComponent  from '../components/lessThan/edit/less-than-edit.vue';
import  HexColorCompleteComponent  from '../components/hexColor/complete/hex-color-complete.vue';
import  HexColorConditionalExpressionComponent  from '../components/hexColor/conditionalExpression/hex-color-conditional-expression.vue';
import  HexColorMessageComponent  from '../components/hexColor/message/hex-color-message.vue';
import  HexColorMessageKeyComponent  from '../components/hexColor/messageKey/hex-color-message-key.vue';
import  HexColorDynamicComponent  from '../components/hexColor/dynamic/hex-color-dynamic.vue';
import  HexColorAddComponent  from '../components/hexColor/add/hex-color-add.vue';
import  HexColorEditComponent  from '../components/hexColor/edit/hex-color-edit.vue';
import  JsonCompleteComponent  from '../components/json/complete/json-complete.vue';
import  JsonMessageComponent  from '../components/json/message/json-message.vue';
import  JsonConditionalExpressionComponent  from '../components/json/conditionalExpression/json-conditional-expression.vue';
import  JsonMessageKeyComponent  from '../components/json/messageKey/json-message-key.vue';
import  JsonDynamicComponent  from '../components/json/dynamic/json-dynamic.vue';
import  JsonAddComponent  from '../components/json/add/json-add.vue';
import  JsonEditComponent  from '../components/json/edit/json-edit.vue';
import  LowerCaseCompleteComponent  from '../components/lowerCase/complete/lower-case-complete.vue';
import  LowerCaseConditionalExpressionComponent  from '../components/lowerCase/conditionalExpression/lower-case-conditional-expression.vue';
import  LowerCaseMessageComponent  from '../components/lowerCase/message/lower-case-message.vue';
import  LowerCaseMessageKeyComponent  from '../components/lowerCase/messageKey/lower-case-message-key.vue';
import  LowerCaseDynamicComponent  from '../components/lowerCase/dynamic/lower-case-dynamic.vue';
import  LowerCaseAddComponent  from '../components/lowerCase/add/lower-case-add.vue';
import  LowerCaseEditComponent  from '../components/lowerCase/edit/lower-case-edit.vue';
import  UpperCaseCompleteComponent  from '../components/upperCase/complete/upper-case-complete.vue';
import  UpperCaseConditionalExpressionComponent  from '../components/upperCase/conditionalExpression/upper-case-conditional-expression.vue';
import  UpperCaseMessageComponent  from '../components/upperCase/message/upper-case-message.vue';
import  UpperCaseMessageKeyComponent  from '../components/upperCase/messageKey/upper-case-message-key.vue';
import  UpperCaseDynamicComponent  from '../components/upperCase/dynamic/upper-case-dynamic.vue';
import  UpperCaseAddComponent  from '../components/upperCase/add/upper-case-add.vue';
import  UpperCaseEditComponent  from '../components/upperCase/edit/upper-case-edit.vue';
import  MaxLengthCompleteComponent  from '../components/maxLength/complete/max-length-complete.vue';
import  MaxLengthValueComponent  from '../components/maxLength/value/max-length-value.vue';
import  MaxLengthConditionalExpressionComponent  from '../components/maxLength/conditionalExpression/max-length-conditional-expression.vue';
import  MaxLengthMessageComponent  from '../components/maxLength/message/max-length-message.vue';
import  MaxLengthMessageKeyComponent  from '../components/maxLength/messageKey/max-length-message-key.vue';
import  MaxLengthDynamicComponent  from '../components/maxLength/dynamic/max-length-dynamic.vue';
import  MaxLengthAddComponent  from '../components/maxLength/add/max-length-add.vue';
import  MaxLengthEditComponent  from '../components/maxLength/edit/max-length-edit.vue';
import  MinLengthCompleteComponent  from '../components/minLength/complete/min-length-complete.vue';
import  MinLengthValueComponent  from '../components/minLength/value/min-length-value.vue';
import  MinLengthMessageComponent  from '../components/minLength/message/min-length-message.vue';
import  MinLengthConditionalExpressionComponent  from '../components/minLength/conditionalExpression/min-length-conditional-expression.vue';
import  MinLengthMessageKeyComponent  from '../components/minLength/messageKey/min-length-message-key.vue';
import  MinLengthDynamicComponent  from '../components/minLength/dynamic/min-length-dynamic.vue';
import  MinLengthAddComponent  from '../components/minLength/add/min-length-add.vue';
import  MinLengthEditComponent  from '../components/minLength/edit/min-length-edit.vue';
import  MaxNumberCompleteComponent  from '../components/maxNumber/complete/max-number-complete.vue';
import  MaxNumberValueComponent  from '../components/maxNumber/value/max-number-value.vue';
import  MaxNumberConditionalExpressionComponent  from '../components/maxNumber/conditionalExpression/max-number-conditional-expression.vue';
import  MaxNumberMessageComponent  from '../components/maxNumber/message/max-number-message.vue';
import  MaxNumberMessageKeyComponent  from '../components/maxNumber/messageKey/max-number-message-key.vue';
import  MaxNumberDynamicComponent  from '../components/maxNumber/dynamic/max-number-dynamic.vue';
import  MaxNumberAddComponent  from '../components/maxNumber/add/max-number-add.vue';
import  MaxNumberEditComponent  from '../components/maxNumber/edit/max-number-edit.vue';
import  MinNumberCompleteComponent  from '../components/minNumber/complete/min-number-complete.vue';
import  MinNumberValueComponent  from '../components/minNumber/value/min-number-value.vue';
import  MinNumberMessageComponent  from '../components/minNumber/message/min-number-message.vue';
import  MinNumberConditionalExpressionComponent  from '../components/minNumber/conditionalExpression/min-number-conditional-expression.vue';
import  MinNumberMessageKeyComponent  from '../components/minNumber/messageKey/min-number-message-key.vue';
import  MinNumberDynamicComponent  from '../components/minNumber/dynamic/min-number-dynamic.vue';
import  MinNumberAddComponent  from '../components/minNumber/add/min-number-add.vue';
import  MinNumberEditComponent  from '../components/minNumber/edit/min-number-edit.vue';
import  PatternCompleteComponent  from '../components/pattern/complete/pattern-complete.vue';
import  PatternExpressionComponent  from '../components/pattern/expression/pattern-expression.vue';
import  PatternMessageComponent  from '../components/pattern/message/pattern-message.vue';
import  PatternConditionalExpressionComponent  from '../components/pattern/conditionalExpression/pattern-conditional-expression.vue';
import  PatternMessageKeyComponent  from '../components/pattern/messageKey/pattern-message-key.vue';
import  PatternDynamicComponent  from '../components/pattern/dynamic/pattern-dynamic.vue';
import  PatternAddComponent  from '../components/pattern/add/pattern-add.vue';
import  PatternEditComponent  from '../components/pattern/edit/pattern-edit.vue';
import  PasswordCompleteComponent  from '../components/password/complete/password-complete.vue';
import  PasswordValidationComponent  from '../components/password/validation/password-validation.vue';
import  PasswordMessageComponent  from '../components/password/message/password-message.vue';
import  PasswordMessageKeyComponent  from '../components/password/messageKey/password-message-key.vue';
import  PasswordDynamicComponent  from '../components/password/dynamic/password-dynamic.vue';
import  PasswordAddComponent  from '../components/password/add/password-add.vue';
import  PasswordEditComponent  from '../components/password/edit/password-edit.vue';
import  RangeCompleteComponent  from '../components/range/complete/range-complete.vue';
import  RangeMinimumNumberComponent  from '../components/range/minimumNumber/range-minimum-number.vue';
import  RangeMaximumNumberComponent  from '../components/range/maximumNumber/range-maximum-number.vue';
import  RangeConditionalExpressionComponent  from '../components/range/conditionalExpression/range-conditional-expression.vue';
import  RangeMessageComponent  from '../components/range/message/range-message.vue';
import  RangeMessageKeyComponent  from '../components/range/messageKey/range-message-key.vue';
import  RangeDynamicComponent  from '../components/range/dynamic/range-dynamic.vue';
import  RangeAddComponent  from '../components/range/add/range-add.vue';
import  RangeEditComponent  from '../components/range/edit/range-edit.vue';
import  RequiredCompleteComponent  from '../components/required/complete/required-complete.vue';
import  RequiredConditionalExpressionComponent  from '../components/required/conditionalExpression/required-conditional-expression.vue';
import  RequiredMessageComponent  from '../components/required/message/required-message.vue';
import  RequiredMessageKeyComponent  from '../components/required/messageKey/required-message-key.vue';
import  RequiredDynamicComponent  from '../components/required/dynamic/required-dynamic.vue';
import  RequiredAddComponent  from '../components/required/add/required-add.vue';
import  RequiredEditComponent  from '../components/required/edit/required-edit.vue';
import  NotEmptyCompleteComponent  from '../components/notEmpty/complete/not-empty-complete.vue';
import  NotEmptyConditionalExpressionComponent  from '../components/notEmpty/conditionalExpression/not-empty-conditional-expression.vue';
import  NotEmptyMessageComponent  from '../components/notEmpty/message/not-empty-message.vue';
import  NotEmptyMessageKeyComponent  from '../components/notEmpty/messageKey/not-empty-message-key.vue';
import  NotEmptyDynamicComponent  from '../components/notEmpty/dynamic/not-empty-dynamic.vue';
import  NotEmptyAddComponent  from '../components/notEmpty/add/not-empty-add.vue';
import  NotEmptyEditComponent  from '../components/notEmpty/edit/not-empty-edit.vue';
import  UrlCompleteComponent  from '../components/url/complete/url-complete.vue';
import  UrlConditionalExpressionComponent  from '../components/url/conditionalExpression/url-conditional-expression.vue';
import  UrlMessageComponent  from '../components/url/message/url-message.vue';
import  UrlMessageKeyComponent  from '../components/url/messageKey/url-message-key.vue';
import  UrlDynamicComponent  from '../components/url/dynamic/url-dynamic.vue';
import  UrlAddComponent  from '../components/url/add/url-add.vue';
import  UrlEditComponent  from '../components/url/edit/url-edit.vue';
import  TimeCompleteComponent  from '../components/time/complete/time-complete.vue';
import  TimeConditionalExpressionComponent  from '../components/time/conditionalExpression/time-conditional-expression.vue';
import  TimeAllowSecondsComponent  from '../components/time/allowSeconds/time-allow-seconds.vue';
import  TimeMessageComponent  from '../components/time/message/time-message.vue';
import  TimeMessageKeyComponent  from '../components/time/messageKey/time-message-key.vue';
import  TimeDynamicComponent  from '../components/time/dynamic/time-dynamic.vue';
import  TimeAddComponent  from '../components/time/add/time-add.vue';
import  TimeEditComponent  from '../components/time/edit/time-edit.vue';
import  MaxTimeCompleteComponent  from '../components/maxTime/complete/max-time-complete.vue';
import  MaxTimeValueComponent  from '../components/maxTime/value/max-time-value.vue';
import  MaxTimeOperatorComponent  from '../components/maxTime/operator/max-time-operator.vue';
import  MaxTimeConditionalExpressionComponent  from '../components/maxTime/conditionalExpression/max-time-conditional-expression.vue';
import  MaxTimeAllowSecondsComponent  from '../components/maxTime/allowSeconds/max-time-allow-seconds.vue';
import  MaxTimeMessageComponent  from '../components/maxTime/message/max-time-message.vue';
import  MaxTimeFieldNameComponent  from '../components/maxTime/fieldName/max-time-field-name.vue';
import  MaxTimeMessageKeyComponent  from '../components/maxTime/messageKey/max-time-message-key.vue';
import  MaxTimeDynamicComponent  from '../components/maxTime/dynamic/max-time-dynamic.vue';
import  MaxTimeAddComponent  from '../components/maxTime/add/max-time-add.vue';
import  MaxTimeEditComponent  from '../components/maxTime/edit/max-time-edit.vue';
import  MinTimeCompleteComponent  from '../components/minTime/complete/min-time-complete.vue';
import  MinTimeValueComponent  from '../components/minTime/value/min-time-value.vue';
import  MinTimeOperatorComponent  from '../components/minTime/operator/min-time-operator.vue';
import  MinTimeConditionalExpressionComponent  from '../components/minTime/conditionalExpression/min-time-conditional-expression.vue';
import  MinTimeFieldNameComponent  from '../components/minTime/fieldName/min-time-field-name.vue';
import  MinTimeAllowSecondsComponent  from '../components/minTime/allowSeconds/min-time-allow-seconds.vue';
import  MinTimeMessageComponent  from '../components/minTime/message/min-time-message.vue';
import  MinTimeMessageKeyComponent  from '../components/minTime/messageKey/min-time-message-key.vue';
import  MinTimeDynamicComponent  from '../components/minTime/dynamic/min-time-dynamic.vue';
import  MinTimeAddComponent  from '../components/minTime/add/min-time-add.vue';
import  MinTimeEditComponent  from '../components/minTime/edit/min-time-edit.vue';
import  MaxDateCompleteComponent  from '../components/maxDate/complete/max-date-complete.vue';
import  MaxDateValueComponent  from '../components/maxDate/value/max-date-value.vue';
import  MaxDateConditionalExpressionComponent  from '../components/maxDate/conditionalExpression/max-date-conditional-expression.vue';
import  MaxDateMessageComponent  from '../components/maxDate/message/max-date-message.vue';
import  MaxDateFieldNameComponent  from '../components/maxDate/fieldName/max-date-field-name.vue';
import  MaxDateOperatorComponent  from '../components/maxDate/operator/max-date-operator.vue';
import  MaxDateMessageKeyComponent  from '../components/maxDate/messageKey/max-date-message-key.vue';
import  MaxDateDynamicComponent  from '../components/maxDate/dynamic/max-date-dynamic.vue';
import  MaxDateAddComponent  from '../components/maxDate/add/max-date-add.vue';
import  MaxDateEditComponent  from '../components/maxDate/edit/max-date-edit.vue';
import  MinDateCompleteComponent  from '../components/minDate/complete/min-date-complete.vue';
import  MinDateValueComponent  from '../components/minDate/value/min-date-value.vue';
import  MinDateConditionalExpressionComponent  from '../components/minDate/conditionalExpression/min-date-conditional-expression.vue';
import  MinDateMessageComponent  from '../components/minDate/message/min-date-message.vue';
import  MinDateFieldNameComponent  from '../components/minDate/fieldName/min-date-field-name.vue';
import  MinDateOperatorComponent  from '../components/minDate/operator/min-date-operator.vue';
import  MinDateMessageKeyComponent  from '../components/minDate/messageKey/min-date-message-key.vue';
import  MinDateDynamicComponent  from '../components/minDate/dynamic/min-date-dynamic.vue';
import  MinDateAddComponent  from '../components/minDate/add/min-date-add.vue';
import  MinDateEditComponent  from '../components/minDate/edit/min-date-edit.vue';
import  LeapYearCompleteComponent  from '../components/leapYear/complete/leap-year-complete.vue';
import  LeapYearConditionalExpressionComponent  from '../components/leapYear/conditionalExpression/leap-year-conditional-expression.vue';
import  LeapYearMessageComponent  from '../components/leapYear/message/leap-year-message.vue';
import  LeapYearMessageKeyComponent  from '../components/leapYear/messageKey/leap-year-message-key.vue';
import  LeapYearDynamicComponent  from '../components/leapYear/dynamic/leap-year-dynamic.vue';
import  LeapYearAddComponent  from '../components/leapYear/add/leap-year-add.vue';
import  LeapYearEditComponent  from '../components/leapYear/edit/leap-year-edit.vue';
import  FactorCompleteComponent  from '../components/factor/complete/factor-complete.vue';
import  FactorFieldNameComponent  from '../components/factor/fieldName/factor-field-name.vue';
import  FactorConditionalExpressionComponent  from '../components/factor/conditionalExpression/factor-conditional-expression.vue';
import  FactorDividendComponent  from '../components/factor/dividend/factor-dividend.vue';
import  FactorMessageComponent  from '../components/factor/message/factor-message.vue';
import  FactorMessageKeyComponent  from '../components/factor/messageKey/factor-message-key.vue';
import  FactorDynamicComponent  from '../components/factor/dynamic/factor-dynamic.vue';
import  FactorAddComponent  from '../components/factor/add/factor-add.vue';
import  FactorEditComponent  from '../components/factor/edit/factor-edit.vue';
import  OddCompleteComponent  from '../components/odd/complete/odd-complete.vue';
import  OddConditionalExpressionComponent  from '../components/odd/conditionalExpression/odd-conditional-expression.vue';
import  OddMessageComponent  from '../components/odd/message/odd-message.vue';
import  OddMessageKeyComponent  from '../components/odd/messageKey/odd-message-key.vue';
import  OddDynamicComponent  from '../components/odd/dynamic/odd-dynamic.vue';
import  OddAddComponent  from '../components/odd/add/odd-add.vue';
import  OddEditComponent  from '../components/odd/edit/odd-edit.vue';
import  EvenCompleteComponent  from '../components/even/complete/even-complete.vue';
import  EvenConditionalExpressionComponent  from '../components/even/conditionalExpression/even-conditional-expression.vue';
import  EvenMessageComponent  from '../components/even/message/even-message.vue';
import  EvenMessageKeyComponent  from '../components/even/messageKey/even-message-key.vue';
import  EvenDynamicComponent  from '../components/even/dynamic/even-dynamic.vue';
import  EvenAddComponent  from '../components/even/add/even-add.vue';
import  EvenEditComponent  from '../components/even/edit/even-edit.vue';
import  NumericCompleteComponent  from '../components/numeric/complete/numeric-complete.vue';
import  NumericAcceptValueComponent  from '../components/numeric/acceptValue/numeric-accept-value.vue';
import  NumericIsFormatComponent  from '../components/numeric/isFormat/numeric-is-format.vue';
import  NumericAllowDecimalComponent  from '../components/numeric/allowDecimal/numeric-allow-decimal.vue';
import  NumericConditionalExpressionComponent  from '../components/numeric/conditionalExpression/numeric-conditional-expression.vue';
import  NumericMessageComponent  from '../components/numeric/message/numeric-message.vue';
import  NumericMessageKeyComponent  from '../components/numeric/messageKey/numeric-message-key.vue';
import  NumericDynamicComponent  from '../components/numeric/dynamic/numeric-dynamic.vue';
import  NumericAddComponent  from '../components/numeric/add/numeric-add.vue';
import  NumericEditComponent  from '../components/numeric/edit/numeric-edit.vue';
import  DifferentCompleteComponent  from '../components/different/complete/different-complete.vue';
import  DifferentFieldNameComponent  from '../components/different/fieldName/different-field-name.vue';
import  DifferentMessageComponent  from '../components/different/message/different-message.vue';
import  DifferentMessageKeyComponent  from '../components/different/messageKey/different-message-key.vue';
import  DifferentDynamicComponent  from '../components/different/dynamic/different-dynamic.vue';
import  DifferentAddComponent  from '../components/different/add/different-add.vue';
import  DifferentEditComponent  from '../components/different/edit/different-edit.vue';
import  MacCompleteComponent  from '../components/mac/complete/mac-complete.vue';
import  MacConditionalExpressionComponent  from '../components/mac/conditionalExpression/mac-conditional-expression.vue';
import  MacMessageComponent  from '../components/mac/message/mac-message.vue';
import  MacMessageKeyComponent  from '../components/mac/messageKey/mac-message-key.vue';
import  MacDynamicComponent  from '../components/mac/dynamic/mac-dynamic.vue';
import  MacAddComponent  from '../components/mac/add/mac-add.vue';
import  MacEditComponent  from '../components/mac/edit/mac-edit.vue';
import  AsciiCompleteComponent  from '../components/ascii/complete/ascii-complete.vue';
import  AsciiConditionalExpressionComponent  from '../components/ascii/conditionalExpression/ascii-conditional-expression.vue';
import  AsciiMessageComponent  from '../components/ascii/message/ascii-message.vue';
import  AsciiMessageKeyComponent  from '../components/ascii/messageKey/ascii-message-key.vue';
import  AsciiDynamicComponent  from '../components/ascii/dynamic/ascii-dynamic.vue';
import  AsciiAddComponent  from '../components/ascii/add/ascii-add.vue';
import  AsciiEditComponent  from '../components/ascii/edit/ascii-edit.vue';
import  DataUriCompleteComponent  from '../components/dataUri/complete/data-uri-complete.vue';
import  DataUriConditionalExpressionComponent  from '../components/dataUri/conditionalExpression/data-uri-conditional-expression.vue';
import  DataUriMessageComponent  from '../components/dataUri/message/data-uri-message.vue';
import  DataUriMessageKeyComponent  from '../components/dataUri/messageKey/data-uri-message-key.vue';
import  DataUriDynamicComponent  from '../components/dataUri/dynamic/data-uri-dynamic.vue';
import  DataUriAddComponent  from '../components/dataUri/add/data-uri-add.vue';
import  DataUriEditComponent  from '../components/dataUri/edit/data-uri-edit.vue';
import  PortCompleteComponent  from '../components/port/complete/port-complete.vue';
import  PortConditionalExpressionComponent  from '../components/port/conditionalExpression/port-conditional-expression.vue';
import  PortMessageComponent  from '../components/port/message/port-message.vue';
import  PortMessageKeyComponent  from '../components/port/messageKey/port-message-key.vue';
import  PortDynamicComponent  from '../components/port/dynamic/port-dynamic.vue';
import  PortAddComponent  from '../components/port/add/port-add.vue';
import  PortEditComponent  from '../components/port/edit/port-edit.vue';
import  LatLongCompleteComponent  from '../components/latLong/complete/lat-long-complete.vue';
import  LatLongConditionalExpressionComponent  from '../components/latLong/conditionalExpression/lat-long-conditional-expression.vue';
import  LatLongMessageComponent  from '../components/latLong/message/lat-long-message.vue';
import  LatLongMessageKeyComponent  from '../components/latLong/messageKey/lat-long-message-key.vue';
import  LatLongDynamicComponent  from '../components/latLong/dynamic/lat-long-dynamic.vue';
import  LatLongAddComponent  from '../components/latLong/add/lat-long-add.vue';
import  LatLongEditComponent  from '../components/latLong/edit/lat-long-edit.vue';
import  FileSizeCompleteComponent  from '../components/fileSize/complete/file-size-complete.vue';
import  FileSizeMaxSizeComponent  from '../components/fileSize/maxSize/file-size-max-size.vue';
import  FileSizeMinSizeComponent  from '../components/fileSize/minSize/file-size-min-size.vue';
import  FileSizeConditionalExpressionComponent  from '../components/fileSize/conditionalExpression/file-size-conditional-expression.vue';
import  FileSizeMessageComponent  from '../components/fileSize/message/file-size-message.vue';
import  FileSizeMessageKeyComponent  from '../components/fileSize/messageKey/file-size-message-key.vue';
import  FileSizeDynamicComponent  from '../components/fileSize/dynamic/file-size-dynamic.vue';
import  FileSizeAddComponent  from '../components/fileSize/add/file-size-add.vue';
import  FileSizeEditComponent  from '../components/fileSize/edit/file-size-edit.vue';
import  EndsWithCompleteComponent  from '../components/endsWith/complete/ends-with-complete.vue';
import  EndsWithValueComponent  from '../components/endsWith/value/ends-with-value.vue';
import  EndsWithConditionalExpressionComponent  from '../components/endsWith/conditionalExpression/ends-with-conditional-expression.vue';
import  EndsWithMessageComponent  from '../components/endsWith/message/ends-with-message.vue';
import  EndsWithMessageKeyComponent  from '../components/endsWith/messageKey/ends-with-message-key.vue';
import  EndsWithDynamicComponent  from '../components/endsWith/dynamic/ends-with-dynamic.vue';
import  EndsWithAddComponent  from '../components/endsWith/add/ends-with-add.vue';
import  EndsWithEditComponent  from '../components/endsWith/edit/ends-with-edit.vue';
import  StartsWithCompleteComponent  from '../components/startsWith/complete/starts-with-complete.vue';
import  StartsWithValueComponent  from '../components/startsWith/value/starts-with-value.vue';
import  StartsWithConditionalExpressionComponent  from '../components/startsWith/conditionalExpression/starts-with-conditional-expression.vue';
import  StartsWithMessageComponent  from '../components/startsWith/message/starts-with-message.vue';
import  StartsWithMessageKeyComponent  from '../components/startsWith/messageKey/starts-with-message-key.vue';
import  StartsWithDynamicComponent  from '../components/startsWith/dynamic/starts-with-dynamic.vue';
import  StartsWithAddComponent  from '../components/startsWith/add/starts-with-add.vue';
import  StartsWithEditComponent  from '../components/startsWith/edit/starts-with-edit.vue';
import  PrimeNumberCompleteComponent  from '../components/primeNumber/complete/prime-number-complete.vue';
import  PrimeNumberConditionalExpressionComponent  from '../components/primeNumber/conditionalExpression/prime-number-conditional-expression.vue';
import  PrimeNumberMessageComponent  from '../components/primeNumber/message/prime-number-message.vue';
import  PrimeNumberMessageKeyComponent  from '../components/primeNumber/messageKey/prime-number-message-key.vue';
import  PrimeNumberDynamicComponent  from '../components/primeNumber/dynamic/prime-number-dynamic.vue';
import  PrimeNumberAddComponent  from '../components/primeNumber/add/prime-number-add.vue';
import  PrimeNumberEditComponent  from '../components/primeNumber/edit/prime-number-edit.vue';
import  LatitudeCompleteComponent  from '../components/latitude/complete/latitude-complete.vue';
import  LatitudeConditionalExpressionComponent  from '../components/latitude/conditionalExpression/latitude-conditional-expression.vue';
import  LatitudeMessageComponent  from '../components/latitude/message/latitude-message.vue';
import  LatitudeMessageKeyComponent  from '../components/latitude/messageKey/latitude-message-key.vue';
import  LatitudeDynamicComponent  from '../components/latitude/dynamic/latitude-dynamic.vue';
import  LatitudeAddComponent  from '../components/latitude/add/latitude-add.vue';
import  LatitudeEditComponent  from '../components/latitude/edit/latitude-edit.vue';
import  LongitudeCompleteComponent  from '../components/longitude/complete/longitude-complete.vue';
import  LongitudeConditionalExpressionComponent  from '../components/longitude/conditionalExpression/longitude-conditional-expression.vue';
import  LongitudeMessageComponent  from '../components/longitude/message/longitude-message.vue';
import  LongitudeMessageKeyComponent  from '../components/longitude/messageKey/longitude-message-key.vue';
import  LongitudeDynamicComponent  from '../components/longitude/dynamic/longitude-dynamic.vue';
import  LongitudeAddComponent  from '../components/longitude/add/longitude-add.vue';
import  LongitudeEditComponent  from '../components/longitude/edit/longitude-edit.vue';
import  ExtensionCompleteComponent  from '../components/extension/complete/extension-complete.vue';
import  ExtensionExtensionsComponent  from '../components/extension/extensions/extension-extensions.vue';
import  ExtensionConditionalExpressionComponent  from '../components/extension/conditionalExpression/extension-conditional-expression.vue';
import  ExtensionMessageComponent  from '../components/extension/message/extension-message.vue';
import  ExtensionMessageKeyComponent  from '../components/extension/messageKey/extension-message-key.vue';
import  ExtensionDynamicComponent  from '../components/extension/dynamic/extension-dynamic.vue';
import  ExtensionAddComponent  from '../components/extension/add/extension-add.vue';
import  ExtensionEditComponent  from '../components/extension/edit/extension-edit.vue';
import  FileCompleteComponent  from '../components/file/complete/file-complete.vue';
import  FileMaxFilesComponent  from '../components/file/maxFiles/file-max-files.vue';
import  FileMinFilesComponent  from '../components/file/minFiles/file-min-files.vue';
import  FileConditionalExpressionComponent  from '../components/file/conditionalExpression/file-conditional-expression.vue';
import  FileMessageComponent  from '../components/file/message/file-message.vue';
import  FileMessageKeyComponent  from '../components/file/messageKey/file-message-key.vue';
import  FileDynamicComponent  from '../components/file/dynamic/file-dynamic.vue';
import  FileAddComponent  from '../components/file/add/file-add.vue';
import  FileEditComponent  from '../components/file/edit/file-edit.vue';
import  ImageCompleteComponent  from '../components/image/complete/image-complete.vue';
import  ImageMaxHeightComponent  from '../components/image/maxHeight/image-max-height.vue';
import  ImageMaxWidthComponent  from '../components/image/maxWidth/image-max-width.vue';
import  ImageMinHeightComponent  from '../components/image/minHeight/image-min-height.vue';
import  ImageMinWidthComponent  from '../components/image/minWidth/image-min-width.vue';
import  ImageConditionalExpressionComponent  from '../components/image/conditionalExpression/image-conditional-expression.vue';
import  ImageMessageComponent  from '../components/image/message/image-message.vue';
import  ImageMessageKeyComponent  from '../components/image/messageKey/image-message-key.vue';
import  ImageDynamicComponent  from '../components/image/dynamic/image-dynamic.vue';
import  ImageAddComponent  from '../components/image/add/image-add.vue';
import  ImageEditComponent  from '../components/image/edit/image-edit.vue';
import  CusipCompleteComponent  from '../components/cusip/complete/cusip-complete.vue';
import  CusipConditionalExpressionComponent  from '../components/cusip/conditionalExpression/cusip-conditional-expression.vue';
import  CusipMessageComponent  from '../components/cusip/message/cusip-message.vue';
import  CusipMessageKeyComponent  from '../components/cusip/messageKey/cusip-message-key.vue';
import  CusipDynamicComponent  from '../components/cusip/dynamic/cusip-dynamic.vue';
import  CusipAddComponent  from '../components/cusip/add/cusip-add.vue';
import  CusipEditComponent  from '../components/cusip/edit/cusip-edit.vue';
import  DateCompleteComponent  from '../components/date/complete/date-complete.vue';
import  DateConditionalExpressionComponent  from '../components/date/conditionalExpression/date-conditional-expression.vue';
import  DateMessageComponent  from '../components/date/message/date-message.vue';
import  DateMessageKeyComponent  from '../components/date/messageKey/date-message-key.vue';
import  DateDynamicComponent  from '../components/date/dynamic/date-dynamic.vue';
import  DateAddComponent  from '../components/date/add/date-add.vue';
import  DateEditComponent  from '../components/date/edit/date-edit.vue';
import  BlacklistAddComponent  from '../components/blacklist/add/blacklist-add.vue';
import  WhitelistAddComponent  from '../components/whitelist/add/whitelist-add.vue';
import  LtrimAddComponent  from '../components/ltrim/add/ltrim-add.vue';
import  RtrimAddComponent  from '../components/rtrim/add/rtrim-add.vue';
import  TrimAddComponent  from '../components/trim/add/trim-add.vue';
import  StripLowAddComponent  from '../components/stripLow/add/strip-low-add.vue';
import  ToBooleanCompleteComponent  from '../components/toBoolean/complete/to-boolean-complete.vue';
import  ToBooleanStrictComponent  from '../components/toBoolean/strict/to-boolean-strict.vue';
import  ToDateAddComponent  from '../components/toDate/add/to-date-add.vue';
import  ToDoubleAddComponent  from '../components/toDouble/add/to-double-add.vue';
import  ToFloatAddComponent  from '../components/toFloat/add/to-float-add.vue';
import  ToIntCompleteComponent  from '../components/toInt/complete/to-int-complete.vue';
import  ToIntRadixComponent  from '../components/toInt/radix/to-int-radix.vue';
import  ToStringAddComponent  from '../components/toString/add/to-string-add.vue';
import  GridCompleteComponent  from '../components/grid/complete/grid-complete.vue';
import  GridConditionalExpressionComponent  from '../components/grid/conditionalExpression/grid-conditional-expression.vue';
import  GridMessageComponent  from '../components/grid/message/grid-message.vue';
import  GridMessageKeyComponent  from '../components/grid/messageKey/grid-message-key.vue';
import  GridDynamicComponent  from '../components/grid/dynamic/grid-dynamic.vue';
import  GridAddComponent  from '../components/grid/add/grid-add.vue';
import  GridEditComponent  from '../components/grid/edit/grid-edit.vue';

Vue.use(VueRouter);

const routes = [

{
   path: '/alpha-complete',
    name: 'alpha-complete',
    component: AlphaCompleteComponent
},


{
   path: '/alpha-conditional-expression',
    name: 'alpha-conditional-expression',
    component: AlphaConditionalExpressionComponent
},


{
   path: '/alpha-allow-white-space',
    name: 'alpha-allow-white-space',
    component: AlphaAllowWhiteSpaceComponent
},


{
   path: '/alpha-message',
    name: 'alpha-message',
    component: AlphaMessageComponent
},


{
   path: '/alpha-message-key',
    name: 'alpha-message-key',
    component: AlphaMessageKeyComponent
},


{
   path: '/alpha-dynamic',
    name: 'alpha-dynamic',
    component: AlphaDynamicComponent
},


{
   path: '/alpha-add',
    name: 'alpha-add',
    component: AlphaAddComponent
},


{
   path: '/alpha-edit',
    name: 'alpha-edit',
    component: AlphaEditComponent
},


{
   path: '/alpha-numeric-complete',
    name: 'alpha-numeric-complete',
    component: AlphaNumericCompleteComponent
},


{
   path: '/alpha-numeric-allow-white-space',
    name: 'alpha-numeric-allow-white-space',
    component: AlphaNumericAllowWhiteSpaceComponent
},


{
   path: '/alpha-numeric-message',
    name: 'alpha-numeric-message',
    component: AlphaNumericMessageComponent
},


{
   path: '/alpha-numeric-conditional-expression',
    name: 'alpha-numeric-conditional-expression',
    component: AlphaNumericConditionalExpressionComponent
},


{
   path: '/alpha-numeric-message-key',
    name: 'alpha-numeric-message-key',
    component: AlphaNumericMessageKeyComponent
},


{
   path: '/alpha-numeric-dynamic',
    name: 'alpha-numeric-dynamic',
    component: AlphaNumericDynamicComponent
},


{
   path: '/alpha-numeric-add',
    name: 'alpha-numeric-add',
    component: AlphaNumericAddComponent
},


{
   path: '/alpha-numeric-edit',
    name: 'alpha-numeric-edit',
    component: AlphaNumericEditComponent
},


{
   path: '/compare-complete',
    name: 'compare-complete',
    component: CompareCompleteComponent
},


{
   path: '/compare-field-name',
    name: 'compare-field-name',
    component: CompareFieldNameComponent
},


{
   path: '/compare-message',
    name: 'compare-message',
    component: CompareMessageComponent
},


{
   path: '/compare-message-key',
    name: 'compare-message-key',
    component: CompareMessageKeyComponent
},


{
   path: '/compare-dynamic',
    name: 'compare-dynamic',
    component: CompareDynamicComponent
},


{
   path: '/compare-add',
    name: 'compare-add',
    component: CompareAddComponent
},


{
   path: '/compare-edit',
    name: 'compare-edit',
    component: CompareEditComponent
},


{
   path: '/contains-complete',
    name: 'contains-complete',
    component: ContainsCompleteComponent
},


{
   path: '/contains-value',
    name: 'contains-value',
    component: ContainsValueComponent
},


{
   path: '/contains-conditional-expression',
    name: 'contains-conditional-expression',
    component: ContainsConditionalExpressionComponent
},


{
   path: '/contains-message',
    name: 'contains-message',
    component: ContainsMessageComponent
},


{
   path: '/contains-message-key',
    name: 'contains-message-key',
    component: ContainsMessageKeyComponent
},


{
   path: '/contains-dynamic',
    name: 'contains-dynamic',
    component: ContainsDynamicComponent
},


{
   path: '/contains-add',
    name: 'contains-add',
    component: ContainsAddComponent
},


{
   path: '/contains-edit',
    name: 'contains-edit',
    component: ContainsEditComponent
},


{
   path: '/credit-card-complete',
    name: 'credit-card-complete',
    component: CreditCardCompleteComponent
},


{
   path: '/credit-card-field-name',
    name: 'credit-card-field-name',
    component: CreditCardFieldNameComponent
},


{
   path: '/credit-card-conditional-expression',
    name: 'credit-card-conditional-expression',
    component: CreditCardConditionalExpressionComponent
},


{
   path: '/credit-card-message',
    name: 'credit-card-message',
    component: CreditCardMessageComponent
},


{
   path: '/credit-card-message-key',
    name: 'credit-card-message-key',
    component: CreditCardMessageKeyComponent
},


{
   path: '/credit-card-dynamic',
    name: 'credit-card-dynamic',
    component: CreditCardDynamicComponent
},


{
   path: '/credit-card-add',
    name: 'credit-card-add',
    component: CreditCardAddComponent
},


{
   path: '/credit-card-edit',
    name: 'credit-card-edit',
    component: CreditCardEditComponent
},


{
   path: '/digit-complete',
    name: 'digit-complete',
    component: DigitCompleteComponent
},


{
   path: '/digit-conditional-expression',
    name: 'digit-conditional-expression',
    component: DigitConditionalExpressionComponent
},


{
   path: '/digit-message',
    name: 'digit-message',
    component: DigitMessageComponent
},


{
   path: '/digit-message-key',
    name: 'digit-message-key',
    component: DigitMessageKeyComponent
},


{
   path: '/digit-dynamic',
    name: 'digit-dynamic',
    component: DigitDynamicComponent
},


{
   path: '/digit-add',
    name: 'digit-add',
    component: DigitAddComponent
},


{
   path: '/digit-edit',
    name: 'digit-edit',
    component: DigitEditComponent
},


{
   path: '/email-complete',
    name: 'email-complete',
    component: EmailCompleteComponent
},


{
   path: '/email-conditional-expression',
    name: 'email-conditional-expression',
    component: EmailConditionalExpressionComponent
},


{
   path: '/email-message',
    name: 'email-message',
    component: EmailMessageComponent
},


{
   path: '/email-message-key',
    name: 'email-message-key',
    component: EmailMessageKeyComponent
},


{
   path: '/email-dynamic',
    name: 'email-dynamic',
    component: EmailDynamicComponent
},


{
   path: '/email-add',
    name: 'email-add',
    component: EmailAddComponent
},


{
   path: '/email-edit',
    name: 'email-edit',
    component: EmailEditComponent
},


{
   path: '/greater-than-equal-to-complete',
    name: 'greater-than-equal-to-complete',
    component: GreaterThanEqualToCompleteComponent
},


{
   path: '/greater-than-equal-to-field-name',
    name: 'greater-than-equal-to-field-name',
    component: GreaterThanEqualToFieldNameComponent
},


{
   path: '/greater-than-equal-to-value',
    name: 'greater-than-equal-to-value',
    component: GreaterThanEqualToValueComponent
},


{
   path: '/greater-than-equal-to-conditional-expression',
    name: 'greater-than-equal-to-conditional-expression',
    component: GreaterThanEqualToConditionalExpressionComponent
},


{
   path: '/greater-than-equal-to-message',
    name: 'greater-than-equal-to-message',
    component: GreaterThanEqualToMessageComponent
},


{
   path: '/greater-than-equal-to-message-key',
    name: 'greater-than-equal-to-message-key',
    component: GreaterThanEqualToMessageKeyComponent
},


{
   path: '/greater-than-equal-to-dynamic',
    name: 'greater-than-equal-to-dynamic',
    component: GreaterThanEqualToDynamicComponent
},


{
   path: '/greater-than-equal-to-add',
    name: 'greater-than-equal-to-add',
    component: GreaterThanEqualToAddComponent
},


{
   path: '/greater-than-equal-to-edit',
    name: 'greater-than-equal-to-edit',
    component: GreaterThanEqualToEditComponent
},


{
   path: '/greater-than-complete',
    name: 'greater-than-complete',
    component: GreaterThanCompleteComponent
},


{
   path: '/greater-than-field-name',
    name: 'greater-than-field-name',
    component: GreaterThanFieldNameComponent
},


{
   path: '/greater-than-value',
    name: 'greater-than-value',
    component: GreaterThanValueComponent
},


{
   path: '/greater-than-conditional-expression',
    name: 'greater-than-conditional-expression',
    component: GreaterThanConditionalExpressionComponent
},


{
   path: '/greater-than-message',
    name: 'greater-than-message',
    component: GreaterThanMessageComponent
},


{
   path: '/greater-than-message-key',
    name: 'greater-than-message-key',
    component: GreaterThanMessageKeyComponent
},


{
   path: '/greater-than-dynamic',
    name: 'greater-than-dynamic',
    component: GreaterThanDynamicComponent
},


{
   path: '/greater-than-add',
    name: 'greater-than-add',
    component: GreaterThanAddComponent
},


{
   path: '/greater-than-edit',
    name: 'greater-than-edit',
    component: GreaterThanEditComponent
},


{
   path: '/less-than-equal-to-complete',
    name: 'less-than-equal-to-complete',
    component: LessThanEqualToCompleteComponent
},


{
   path: '/less-than-equal-to-field-name',
    name: 'less-than-equal-to-field-name',
    component: LessThanEqualToFieldNameComponent
},


{
   path: '/less-than-equal-to-value',
    name: 'less-than-equal-to-value',
    component: LessThanEqualToValueComponent
},


{
   path: '/less-than-equal-to-conditional-expression',
    name: 'less-than-equal-to-conditional-expression',
    component: LessThanEqualToConditionalExpressionComponent
},


{
   path: '/less-than-equal-to-message',
    name: 'less-than-equal-to-message',
    component: LessThanEqualToMessageComponent
},


{
   path: '/less-than-equal-to-message-key',
    name: 'less-than-equal-to-message-key',
    component: LessThanEqualToMessageKeyComponent
},


{
   path: '/less-than-equal-to-dynamic',
    name: 'less-than-equal-to-dynamic',
    component: LessThanEqualToDynamicComponent
},


{
   path: '/less-than-equal-to-add',
    name: 'less-than-equal-to-add',
    component: LessThanEqualToAddComponent
},


{
   path: '/less-than-equal-to-edit',
    name: 'less-than-equal-to-edit',
    component: LessThanEqualToEditComponent
},


{
   path: '/less-than-complete',
    name: 'less-than-complete',
    component: LessThanCompleteComponent
},


{
   path: '/less-than-field-name',
    name: 'less-than-field-name',
    component: LessThanFieldNameComponent
},


{
   path: '/less-than-value',
    name: 'less-than-value',
    component: LessThanValueComponent
},


{
   path: '/less-than-conditional-expression',
    name: 'less-than-conditional-expression',
    component: LessThanConditionalExpressionComponent
},


{
   path: '/less-than-message',
    name: 'less-than-message',
    component: LessThanMessageComponent
},


{
   path: '/less-than-message-key',
    name: 'less-than-message-key',
    component: LessThanMessageKeyComponent
},


{
   path: '/less-than-dynamic',
    name: 'less-than-dynamic',
    component: LessThanDynamicComponent
},


{
   path: '/less-than-add',
    name: 'less-than-add',
    component: LessThanAddComponent
},


{
   path: '/less-than-edit',
    name: 'less-than-edit',
    component: LessThanEditComponent
},


{
   path: '/hex-color-complete',
    name: 'hex-color-complete',
    component: HexColorCompleteComponent
},


{
   path: '/hex-color-conditional-expression',
    name: 'hex-color-conditional-expression',
    component: HexColorConditionalExpressionComponent
},


{
   path: '/hex-color-message',
    name: 'hex-color-message',
    component: HexColorMessageComponent
},


{
   path: '/hex-color-message-key',
    name: 'hex-color-message-key',
    component: HexColorMessageKeyComponent
},


{
   path: '/hex-color-dynamic',
    name: 'hex-color-dynamic',
    component: HexColorDynamicComponent
},


{
   path: '/hex-color-add',
    name: 'hex-color-add',
    component: HexColorAddComponent
},


{
   path: '/hex-color-edit',
    name: 'hex-color-edit',
    component: HexColorEditComponent
},


{
   path: '/json-complete',
    name: 'json-complete',
    component: JsonCompleteComponent
},


{
   path: '/json-message',
    name: 'json-message',
    component: JsonMessageComponent
},


{
   path: '/json-conditional-expression',
    name: 'json-conditional-expression',
    component: JsonConditionalExpressionComponent
},


{
   path: '/json-message-key',
    name: 'json-message-key',
    component: JsonMessageKeyComponent
},


{
   path: '/json-dynamic',
    name: 'json-dynamic',
    component: JsonDynamicComponent
},


{
   path: '/json-add',
    name: 'json-add',
    component: JsonAddComponent
},


{
   path: '/json-edit',
    name: 'json-edit',
    component: JsonEditComponent
},


{
   path: '/lower-case-complete',
    name: 'lower-case-complete',
    component: LowerCaseCompleteComponent
},


{
   path: '/lower-case-conditional-expression',
    name: 'lower-case-conditional-expression',
    component: LowerCaseConditionalExpressionComponent
},


{
   path: '/lower-case-message',
    name: 'lower-case-message',
    component: LowerCaseMessageComponent
},


{
   path: '/lower-case-message-key',
    name: 'lower-case-message-key',
    component: LowerCaseMessageKeyComponent
},


{
   path: '/lower-case-dynamic',
    name: 'lower-case-dynamic',
    component: LowerCaseDynamicComponent
},


{
   path: '/lower-case-add',
    name: 'lower-case-add',
    component: LowerCaseAddComponent
},


{
   path: '/lower-case-edit',
    name: 'lower-case-edit',
    component: LowerCaseEditComponent
},


{
   path: '/upper-case-complete',
    name: 'upper-case-complete',
    component: UpperCaseCompleteComponent
},


{
   path: '/upper-case-conditional-expression',
    name: 'upper-case-conditional-expression',
    component: UpperCaseConditionalExpressionComponent
},


{
   path: '/upper-case-message',
    name: 'upper-case-message',
    component: UpperCaseMessageComponent
},


{
   path: '/upper-case-message-key',
    name: 'upper-case-message-key',
    component: UpperCaseMessageKeyComponent
},


{
   path: '/upper-case-dynamic',
    name: 'upper-case-dynamic',
    component: UpperCaseDynamicComponent
},


{
   path: '/upper-case-add',
    name: 'upper-case-add',
    component: UpperCaseAddComponent
},


{
   path: '/upper-case-edit',
    name: 'upper-case-edit',
    component: UpperCaseEditComponent
},


{
   path: '/max-length-complete',
    name: 'max-length-complete',
    component: MaxLengthCompleteComponent
},


{
   path: '/max-length-value',
    name: 'max-length-value',
    component: MaxLengthValueComponent
},


{
   path: '/max-length-conditional-expression',
    name: 'max-length-conditional-expression',
    component: MaxLengthConditionalExpressionComponent
},


{
   path: '/max-length-message',
    name: 'max-length-message',
    component: MaxLengthMessageComponent
},


{
   path: '/max-length-message-key',
    name: 'max-length-message-key',
    component: MaxLengthMessageKeyComponent
},


{
   path: '/max-length-dynamic',
    name: 'max-length-dynamic',
    component: MaxLengthDynamicComponent
},


{
   path: '/max-length-add',
    name: 'max-length-add',
    component: MaxLengthAddComponent
},


{
   path: '/max-length-edit',
    name: 'max-length-edit',
    component: MaxLengthEditComponent
},


{
   path: '/min-length-complete',
    name: 'min-length-complete',
    component: MinLengthCompleteComponent
},


{
   path: '/min-length-value',
    name: 'min-length-value',
    component: MinLengthValueComponent
},


{
   path: '/min-length-message',
    name: 'min-length-message',
    component: MinLengthMessageComponent
},


{
   path: '/min-length-conditional-expression',
    name: 'min-length-conditional-expression',
    component: MinLengthConditionalExpressionComponent
},


{
   path: '/min-length-message-key',
    name: 'min-length-message-key',
    component: MinLengthMessageKeyComponent
},


{
   path: '/min-length-dynamic',
    name: 'min-length-dynamic',
    component: MinLengthDynamicComponent
},


{
   path: '/min-length-add',
    name: 'min-length-add',
    component: MinLengthAddComponent
},


{
   path: '/min-length-edit',
    name: 'min-length-edit',
    component: MinLengthEditComponent
},


{
   path: '/max-number-complete',
    name: 'max-number-complete',
    component: MaxNumberCompleteComponent
},


{
   path: '/max-number-value',
    name: 'max-number-value',
    component: MaxNumberValueComponent
},


{
   path: '/max-number-conditional-expression',
    name: 'max-number-conditional-expression',
    component: MaxNumberConditionalExpressionComponent
},


{
   path: '/max-number-message',
    name: 'max-number-message',
    component: MaxNumberMessageComponent
},


{
   path: '/max-number-message-key',
    name: 'max-number-message-key',
    component: MaxNumberMessageKeyComponent
},


{
   path: '/max-number-dynamic',
    name: 'max-number-dynamic',
    component: MaxNumberDynamicComponent
},


{
   path: '/max-number-add',
    name: 'max-number-add',
    component: MaxNumberAddComponent
},


{
   path: '/max-number-edit',
    name: 'max-number-edit',
    component: MaxNumberEditComponent
},


{
   path: '/min-number-complete',
    name: 'min-number-complete',
    component: MinNumberCompleteComponent
},


{
   path: '/min-number-value',
    name: 'min-number-value',
    component: MinNumberValueComponent
},


{
   path: '/min-number-message',
    name: 'min-number-message',
    component: MinNumberMessageComponent
},


{
   path: '/min-number-conditional-expression',
    name: 'min-number-conditional-expression',
    component: MinNumberConditionalExpressionComponent
},


{
   path: '/min-number-message-key',
    name: 'min-number-message-key',
    component: MinNumberMessageKeyComponent
},


{
   path: '/min-number-dynamic',
    name: 'min-number-dynamic',
    component: MinNumberDynamicComponent
},


{
   path: '/min-number-add',
    name: 'min-number-add',
    component: MinNumberAddComponent
},


{
   path: '/min-number-edit',
    name: 'min-number-edit',
    component: MinNumberEditComponent
},


{
   path: '/pattern-complete',
    name: 'pattern-complete',
    component: PatternCompleteComponent
},


{
   path: '/pattern-expression',
    name: 'pattern-expression',
    component: PatternExpressionComponent
},


{
   path: '/pattern-message',
    name: 'pattern-message',
    component: PatternMessageComponent
},


{
   path: '/pattern-conditional-expression',
    name: 'pattern-conditional-expression',
    component: PatternConditionalExpressionComponent
},


{
   path: '/pattern-message-key',
    name: 'pattern-message-key',
    component: PatternMessageKeyComponent
},


{
   path: '/pattern-dynamic',
    name: 'pattern-dynamic',
    component: PatternDynamicComponent
},


{
   path: '/pattern-add',
    name: 'pattern-add',
    component: PatternAddComponent
},


{
   path: '/pattern-edit',
    name: 'pattern-edit',
    component: PatternEditComponent
},


{
   path: '/password-complete',
    name: 'password-complete',
    component: PasswordCompleteComponent
},


{
   path: '/password-validation',
    name: 'password-validation',
    component: PasswordValidationComponent
},


{
   path: '/password-message',
    name: 'password-message',
    component: PasswordMessageComponent
},


{
   path: '/password-message-key',
    name: 'password-message-key',
    component: PasswordMessageKeyComponent
},


{
   path: '/password-dynamic',
    name: 'password-dynamic',
    component: PasswordDynamicComponent
},


{
   path: '/password-add',
    name: 'password-add',
    component: PasswordAddComponent
},


{
   path: '/password-edit',
    name: 'password-edit',
    component: PasswordEditComponent
},


{
   path: '/range-complete',
    name: 'range-complete',
    component: RangeCompleteComponent
},


{
   path: '/range-minimum-number',
    name: 'range-minimum-number',
    component: RangeMinimumNumberComponent
},


{
   path: '/range-maximum-number',
    name: 'range-maximum-number',
    component: RangeMaximumNumberComponent
},


{
   path: '/range-conditional-expression',
    name: 'range-conditional-expression',
    component: RangeConditionalExpressionComponent
},


{
   path: '/range-message',
    name: 'range-message',
    component: RangeMessageComponent
},


{
   path: '/range-message-key',
    name: 'range-message-key',
    component: RangeMessageKeyComponent
},


{
   path: '/range-dynamic',
    name: 'range-dynamic',
    component: RangeDynamicComponent
},


{
   path: '/range-add',
    name: 'range-add',
    component: RangeAddComponent
},


{
   path: '/range-edit',
    name: 'range-edit',
    component: RangeEditComponent
},


{
   path: '/required-complete',
    name: 'required-complete',
    component: RequiredCompleteComponent
},


{
   path: '/required-conditional-expression',
    name: 'required-conditional-expression',
    component: RequiredConditionalExpressionComponent
},


{
   path: '/required-message',
    name: 'required-message',
    component: RequiredMessageComponent
},


{
   path: '/required-message-key',
    name: 'required-message-key',
    component: RequiredMessageKeyComponent
},


{
   path: '/required-dynamic',
    name: 'required-dynamic',
    component: RequiredDynamicComponent
},


{
   path: '/required-add',
    name: 'required-add',
    component: RequiredAddComponent
},


{
   path: '/required-edit',
    name: 'required-edit',
    component: RequiredEditComponent
},


{
   path: '/not-empty-complete',
    name: 'not-empty-complete',
    component: NotEmptyCompleteComponent
},


{
   path: '/not-empty-conditional-expression',
    name: 'not-empty-conditional-expression',
    component: NotEmptyConditionalExpressionComponent
},


{
   path: '/not-empty-message',
    name: 'not-empty-message',
    component: NotEmptyMessageComponent
},


{
   path: '/not-empty-message-key',
    name: 'not-empty-message-key',
    component: NotEmptyMessageKeyComponent
},


{
   path: '/not-empty-dynamic',
    name: 'not-empty-dynamic',
    component: NotEmptyDynamicComponent
},


{
   path: '/not-empty-add',
    name: 'not-empty-add',
    component: NotEmptyAddComponent
},


{
   path: '/not-empty-edit',
    name: 'not-empty-edit',
    component: NotEmptyEditComponent
},


{
   path: '/url-complete',
    name: 'url-complete',
    component: UrlCompleteComponent
},


{
   path: '/url-conditional-expression',
    name: 'url-conditional-expression',
    component: UrlConditionalExpressionComponent
},


{
   path: '/url-message',
    name: 'url-message',
    component: UrlMessageComponent
},


{
   path: '/url-message-key',
    name: 'url-message-key',
    component: UrlMessageKeyComponent
},


{
   path: '/url-dynamic',
    name: 'url-dynamic',
    component: UrlDynamicComponent
},


{
   path: '/url-add',
    name: 'url-add',
    component: UrlAddComponent
},


{
   path: '/url-edit',
    name: 'url-edit',
    component: UrlEditComponent
},


{
   path: '/time-complete',
    name: 'time-complete',
    component: TimeCompleteComponent
},


{
   path: '/time-conditional-expression',
    name: 'time-conditional-expression',
    component: TimeConditionalExpressionComponent
},


{
   path: '/time-allow-seconds',
    name: 'time-allow-seconds',
    component: TimeAllowSecondsComponent
},


{
   path: '/time-message',
    name: 'time-message',
    component: TimeMessageComponent
},


{
   path: '/time-message-key',
    name: 'time-message-key',
    component: TimeMessageKeyComponent
},


{
   path: '/time-dynamic',
    name: 'time-dynamic',
    component: TimeDynamicComponent
},


{
   path: '/time-add',
    name: 'time-add',
    component: TimeAddComponent
},


{
   path: '/time-edit',
    name: 'time-edit',
    component: TimeEditComponent
},


{
   path: '/max-time-complete',
    name: 'max-time-complete',
    component: MaxTimeCompleteComponent
},


{
   path: '/max-time-value',
    name: 'max-time-value',
    component: MaxTimeValueComponent
},


{
   path: '/max-time-operator',
    name: 'max-time-operator',
    component: MaxTimeOperatorComponent
},


{
   path: '/max-time-conditional-expression',
    name: 'max-time-conditional-expression',
    component: MaxTimeConditionalExpressionComponent
},


{
   path: '/max-time-allow-seconds',
    name: 'max-time-allow-seconds',
    component: MaxTimeAllowSecondsComponent
},


{
   path: '/max-time-message',
    name: 'max-time-message',
    component: MaxTimeMessageComponent
},


{
   path: '/max-time-field-name',
    name: 'max-time-field-name',
    component: MaxTimeFieldNameComponent
},


{
   path: '/max-time-message-key',
    name: 'max-time-message-key',
    component: MaxTimeMessageKeyComponent
},


{
   path: '/max-time-dynamic',
    name: 'max-time-dynamic',
    component: MaxTimeDynamicComponent
},


{
   path: '/max-time-add',
    name: 'max-time-add',
    component: MaxTimeAddComponent
},


{
   path: '/max-time-edit',
    name: 'max-time-edit',
    component: MaxTimeEditComponent
},


{
   path: '/min-time-complete',
    name: 'min-time-complete',
    component: MinTimeCompleteComponent
},


{
   path: '/min-time-value',
    name: 'min-time-value',
    component: MinTimeValueComponent
},


{
   path: '/min-time-operator',
    name: 'min-time-operator',
    component: MinTimeOperatorComponent
},


{
   path: '/min-time-conditional-expression',
    name: 'min-time-conditional-expression',
    component: MinTimeConditionalExpressionComponent
},


{
   path: '/min-time-field-name',
    name: 'min-time-field-name',
    component: MinTimeFieldNameComponent
},


{
   path: '/min-time-allow-seconds',
    name: 'min-time-allow-seconds',
    component: MinTimeAllowSecondsComponent
},


{
   path: '/min-time-message',
    name: 'min-time-message',
    component: MinTimeMessageComponent
},


{
   path: '/min-time-message-key',
    name: 'min-time-message-key',
    component: MinTimeMessageKeyComponent
},


{
   path: '/min-time-dynamic',
    name: 'min-time-dynamic',
    component: MinTimeDynamicComponent
},


{
   path: '/min-time-add',
    name: 'min-time-add',
    component: MinTimeAddComponent
},


{
   path: '/min-time-edit',
    name: 'min-time-edit',
    component: MinTimeEditComponent
},


{
   path: '/max-date-complete',
    name: 'max-date-complete',
    component: MaxDateCompleteComponent
},


{
   path: '/max-date-value',
    name: 'max-date-value',
    component: MaxDateValueComponent
},


{
   path: '/max-date-conditional-expression',
    name: 'max-date-conditional-expression',
    component: MaxDateConditionalExpressionComponent
},


{
   path: '/max-date-message',
    name: 'max-date-message',
    component: MaxDateMessageComponent
},


{
   path: '/max-date-field-name',
    name: 'max-date-field-name',
    component: MaxDateFieldNameComponent
},


{
   path: '/max-date-operator',
    name: 'max-date-operator',
    component: MaxDateOperatorComponent
},


{
   path: '/max-date-message-key',
    name: 'max-date-message-key',
    component: MaxDateMessageKeyComponent
},


{
   path: '/max-date-dynamic',
    name: 'max-date-dynamic',
    component: MaxDateDynamicComponent
},


{
   path: '/max-date-add',
    name: 'max-date-add',
    component: MaxDateAddComponent
},


{
   path: '/max-date-edit',
    name: 'max-date-edit',
    component: MaxDateEditComponent
},


{
   path: '/min-date-complete',
    name: 'min-date-complete',
    component: MinDateCompleteComponent
},


{
   path: '/min-date-value',
    name: 'min-date-value',
    component: MinDateValueComponent
},


{
   path: '/min-date-conditional-expression',
    name: 'min-date-conditional-expression',
    component: MinDateConditionalExpressionComponent
},


{
   path: '/min-date-message',
    name: 'min-date-message',
    component: MinDateMessageComponent
},


{
   path: '/min-date-field-name',
    name: 'min-date-field-name',
    component: MinDateFieldNameComponent
},


{
   path: '/min-date-operator',
    name: 'min-date-operator',
    component: MinDateOperatorComponent
},


{
   path: '/min-date-message-key',
    name: 'min-date-message-key',
    component: MinDateMessageKeyComponent
},


{
   path: '/min-date-dynamic',
    name: 'min-date-dynamic',
    component: MinDateDynamicComponent
},


{
   path: '/min-date-add',
    name: 'min-date-add',
    component: MinDateAddComponent
},


{
   path: '/min-date-edit',
    name: 'min-date-edit',
    component: MinDateEditComponent
},


{
   path: '/leap-year-complete',
    name: 'leap-year-complete',
    component: LeapYearCompleteComponent
},


{
   path: '/leap-year-conditional-expression',
    name: 'leap-year-conditional-expression',
    component: LeapYearConditionalExpressionComponent
},


{
   path: '/leap-year-message',
    name: 'leap-year-message',
    component: LeapYearMessageComponent
},


{
   path: '/leap-year-message-key',
    name: 'leap-year-message-key',
    component: LeapYearMessageKeyComponent
},


{
   path: '/leap-year-dynamic',
    name: 'leap-year-dynamic',
    component: LeapYearDynamicComponent
},


{
   path: '/leap-year-add',
    name: 'leap-year-add',
    component: LeapYearAddComponent
},


{
   path: '/leap-year-edit',
    name: 'leap-year-edit',
    component: LeapYearEditComponent
},


{
   path: '/factor-complete',
    name: 'factor-complete',
    component: FactorCompleteComponent
},


{
   path: '/factor-field-name',
    name: 'factor-field-name',
    component: FactorFieldNameComponent
},


{
   path: '/factor-conditional-expression',
    name: 'factor-conditional-expression',
    component: FactorConditionalExpressionComponent
},


{
   path: '/factor-dividend',
    name: 'factor-dividend',
    component: FactorDividendComponent
},


{
   path: '/factor-message',
    name: 'factor-message',
    component: FactorMessageComponent
},


{
   path: '/factor-message-key',
    name: 'factor-message-key',
    component: FactorMessageKeyComponent
},


{
   path: '/factor-dynamic',
    name: 'factor-dynamic',
    component: FactorDynamicComponent
},


{
   path: '/factor-add',
    name: 'factor-add',
    component: FactorAddComponent
},


{
   path: '/factor-edit',
    name: 'factor-edit',
    component: FactorEditComponent
},


{
   path: '/odd-complete',
    name: 'odd-complete',
    component: OddCompleteComponent
},


{
   path: '/odd-conditional-expression',
    name: 'odd-conditional-expression',
    component: OddConditionalExpressionComponent
},


{
   path: '/odd-message',
    name: 'odd-message',
    component: OddMessageComponent
},


{
   path: '/odd-message-key',
    name: 'odd-message-key',
    component: OddMessageKeyComponent
},


{
   path: '/odd-dynamic',
    name: 'odd-dynamic',
    component: OddDynamicComponent
},


{
   path: '/odd-add',
    name: 'odd-add',
    component: OddAddComponent
},


{
   path: '/odd-edit',
    name: 'odd-edit',
    component: OddEditComponent
},


{
   path: '/even-complete',
    name: 'even-complete',
    component: EvenCompleteComponent
},


{
   path: '/even-conditional-expression',
    name: 'even-conditional-expression',
    component: EvenConditionalExpressionComponent
},


{
   path: '/even-message',
    name: 'even-message',
    component: EvenMessageComponent
},


{
   path: '/even-message-key',
    name: 'even-message-key',
    component: EvenMessageKeyComponent
},


{
   path: '/even-dynamic',
    name: 'even-dynamic',
    component: EvenDynamicComponent
},


{
   path: '/even-add',
    name: 'even-add',
    component: EvenAddComponent
},


{
   path: '/even-edit',
    name: 'even-edit',
    component: EvenEditComponent
},


{
   path: '/numeric-complete',
    name: 'numeric-complete',
    component: NumericCompleteComponent
},


{
   path: '/numeric-accept-value',
    name: 'numeric-accept-value',
    component: NumericAcceptValueComponent
},


{
   path: '/numeric-is-format',
    name: 'numeric-is-format',
    component: NumericIsFormatComponent
},


{
   path: '/numeric-allow-decimal',
    name: 'numeric-allow-decimal',
    component: NumericAllowDecimalComponent
},


{
   path: '/numeric-conditional-expression',
    name: 'numeric-conditional-expression',
    component: NumericConditionalExpressionComponent
},


{
   path: '/numeric-message',
    name: 'numeric-message',
    component: NumericMessageComponent
},


{
   path: '/numeric-message-key',
    name: 'numeric-message-key',
    component: NumericMessageKeyComponent
},


{
   path: '/numeric-dynamic',
    name: 'numeric-dynamic',
    component: NumericDynamicComponent
},


{
   path: '/numeric-add',
    name: 'numeric-add',
    component: NumericAddComponent
},


{
   path: '/numeric-edit',
    name: 'numeric-edit',
    component: NumericEditComponent
},


{
   path: '/different-complete',
    name: 'different-complete',
    component: DifferentCompleteComponent
},


{
   path: '/different-field-name',
    name: 'different-field-name',
    component: DifferentFieldNameComponent
},


{
   path: '/different-message',
    name: 'different-message',
    component: DifferentMessageComponent
},


{
   path: '/different-message-key',
    name: 'different-message-key',
    component: DifferentMessageKeyComponent
},


{
   path: '/different-dynamic',
    name: 'different-dynamic',
    component: DifferentDynamicComponent
},


{
   path: '/different-add',
    name: 'different-add',
    component: DifferentAddComponent
},


{
   path: '/different-edit',
    name: 'different-edit',
    component: DifferentEditComponent
},


{
   path: '/mac-complete',
    name: 'mac-complete',
    component: MacCompleteComponent
},


{
   path: '/mac-conditional-expression',
    name: 'mac-conditional-expression',
    component: MacConditionalExpressionComponent
},


{
   path: '/mac-message',
    name: 'mac-message',
    component: MacMessageComponent
},


{
   path: '/mac-message-key',
    name: 'mac-message-key',
    component: MacMessageKeyComponent
},


{
   path: '/mac-dynamic',
    name: 'mac-dynamic',
    component: MacDynamicComponent
},


{
   path: '/mac-add',
    name: 'mac-add',
    component: MacAddComponent
},


{
   path: '/mac-edit',
    name: 'mac-edit',
    component: MacEditComponent
},


{
   path: '/ascii-complete',
    name: 'ascii-complete',
    component: AsciiCompleteComponent
},


{
   path: '/ascii-conditional-expression',
    name: 'ascii-conditional-expression',
    component: AsciiConditionalExpressionComponent
},


{
   path: '/ascii-message',
    name: 'ascii-message',
    component: AsciiMessageComponent
},


{
   path: '/ascii-message-key',
    name: 'ascii-message-key',
    component: AsciiMessageKeyComponent
},


{
   path: '/ascii-dynamic',
    name: 'ascii-dynamic',
    component: AsciiDynamicComponent
},


{
   path: '/ascii-add',
    name: 'ascii-add',
    component: AsciiAddComponent
},


{
   path: '/ascii-edit',
    name: 'ascii-edit',
    component: AsciiEditComponent
},


{
   path: '/data-uri-complete',
    name: 'data-uri-complete',
    component: DataUriCompleteComponent
},


{
   path: '/data-uri-conditional-expression',
    name: 'data-uri-conditional-expression',
    component: DataUriConditionalExpressionComponent
},


{
   path: '/data-uri-message',
    name: 'data-uri-message',
    component: DataUriMessageComponent
},


{
   path: '/data-uri-message-key',
    name: 'data-uri-message-key',
    component: DataUriMessageKeyComponent
},


{
   path: '/data-uri-dynamic',
    name: 'data-uri-dynamic',
    component: DataUriDynamicComponent
},


{
   path: '/data-uri-add',
    name: 'data-uri-add',
    component: DataUriAddComponent
},


{
   path: '/data-uri-edit',
    name: 'data-uri-edit',
    component: DataUriEditComponent
},


{
   path: '/port-complete',
    name: 'port-complete',
    component: PortCompleteComponent
},


{
   path: '/port-conditional-expression',
    name: 'port-conditional-expression',
    component: PortConditionalExpressionComponent
},


{
   path: '/port-message',
    name: 'port-message',
    component: PortMessageComponent
},


{
   path: '/port-message-key',
    name: 'port-message-key',
    component: PortMessageKeyComponent
},


{
   path: '/port-dynamic',
    name: 'port-dynamic',
    component: PortDynamicComponent
},


{
   path: '/port-add',
    name: 'port-add',
    component: PortAddComponent
},


{
   path: '/port-edit',
    name: 'port-edit',
    component: PortEditComponent
},


{
   path: '/lat-long-complete',
    name: 'lat-long-complete',
    component: LatLongCompleteComponent
},


{
   path: '/lat-long-conditional-expression',
    name: 'lat-long-conditional-expression',
    component: LatLongConditionalExpressionComponent
},


{
   path: '/lat-long-message',
    name: 'lat-long-message',
    component: LatLongMessageComponent
},


{
   path: '/lat-long-message-key',
    name: 'lat-long-message-key',
    component: LatLongMessageKeyComponent
},


{
   path: '/lat-long-dynamic',
    name: 'lat-long-dynamic',
    component: LatLongDynamicComponent
},


{
   path: '/lat-long-add',
    name: 'lat-long-add',
    component: LatLongAddComponent
},


{
   path: '/lat-long-edit',
    name: 'lat-long-edit',
    component: LatLongEditComponent
},


{
   path: '/file-size-complete',
    name: 'file-size-complete',
    component: FileSizeCompleteComponent
},


{
   path: '/file-size-max-size',
    name: 'file-size-max-size',
    component: FileSizeMaxSizeComponent
},


{
   path: '/file-size-min-size',
    name: 'file-size-min-size',
    component: FileSizeMinSizeComponent
},


{
   path: '/file-size-conditional-expression',
    name: 'file-size-conditional-expression',
    component: FileSizeConditionalExpressionComponent
},


{
   path: '/file-size-message',
    name: 'file-size-message',
    component: FileSizeMessageComponent
},


{
   path: '/file-size-message-key',
    name: 'file-size-message-key',
    component: FileSizeMessageKeyComponent
},


{
   path: '/file-size-dynamic',
    name: 'file-size-dynamic',
    component: FileSizeDynamicComponent
},


{
   path: '/file-size-add',
    name: 'file-size-add',
    component: FileSizeAddComponent
},


{
   path: '/file-size-edit',
    name: 'file-size-edit',
    component: FileSizeEditComponent
},


{
   path: '/ends-with-complete',
    name: 'ends-with-complete',
    component: EndsWithCompleteComponent
},


{
   path: '/ends-with-value',
    name: 'ends-with-value',
    component: EndsWithValueComponent
},


{
   path: '/ends-with-conditional-expression',
    name: 'ends-with-conditional-expression',
    component: EndsWithConditionalExpressionComponent
},


{
   path: '/ends-with-message',
    name: 'ends-with-message',
    component: EndsWithMessageComponent
},


{
   path: '/ends-with-message-key',
    name: 'ends-with-message-key',
    component: EndsWithMessageKeyComponent
},


{
   path: '/ends-with-dynamic',
    name: 'ends-with-dynamic',
    component: EndsWithDynamicComponent
},


{
   path: '/ends-with-add',
    name: 'ends-with-add',
    component: EndsWithAddComponent
},


{
   path: '/ends-with-edit',
    name: 'ends-with-edit',
    component: EndsWithEditComponent
},


{
   path: '/starts-with-complete',
    name: 'starts-with-complete',
    component: StartsWithCompleteComponent
},


{
   path: '/starts-with-value',
    name: 'starts-with-value',
    component: StartsWithValueComponent
},


{
   path: '/starts-with-conditional-expression',
    name: 'starts-with-conditional-expression',
    component: StartsWithConditionalExpressionComponent
},


{
   path: '/starts-with-message',
    name: 'starts-with-message',
    component: StartsWithMessageComponent
},


{
   path: '/starts-with-message-key',
    name: 'starts-with-message-key',
    component: StartsWithMessageKeyComponent
},


{
   path: '/starts-with-dynamic',
    name: 'starts-with-dynamic',
    component: StartsWithDynamicComponent
},


{
   path: '/starts-with-add',
    name: 'starts-with-add',
    component: StartsWithAddComponent
},


{
   path: '/starts-with-edit',
    name: 'starts-with-edit',
    component: StartsWithEditComponent
},


{
   path: '/prime-number-complete',
    name: 'prime-number-complete',
    component: PrimeNumberCompleteComponent
},


{
   path: '/prime-number-conditional-expression',
    name: 'prime-number-conditional-expression',
    component: PrimeNumberConditionalExpressionComponent
},


{
   path: '/prime-number-message',
    name: 'prime-number-message',
    component: PrimeNumberMessageComponent
},


{
   path: '/prime-number-message-key',
    name: 'prime-number-message-key',
    component: PrimeNumberMessageKeyComponent
},


{
   path: '/prime-number-dynamic',
    name: 'prime-number-dynamic',
    component: PrimeNumberDynamicComponent
},


{
   path: '/prime-number-add',
    name: 'prime-number-add',
    component: PrimeNumberAddComponent
},


{
   path: '/prime-number-edit',
    name: 'prime-number-edit',
    component: PrimeNumberEditComponent
},


{
   path: '/latitude-complete',
    name: 'latitude-complete',
    component: LatitudeCompleteComponent
},


{
   path: '/latitude-conditional-expression',
    name: 'latitude-conditional-expression',
    component: LatitudeConditionalExpressionComponent
},


{
   path: '/latitude-message',
    name: 'latitude-message',
    component: LatitudeMessageComponent
},


{
   path: '/latitude-message-key',
    name: 'latitude-message-key',
    component: LatitudeMessageKeyComponent
},


{
   path: '/latitude-dynamic',
    name: 'latitude-dynamic',
    component: LatitudeDynamicComponent
},


{
   path: '/latitude-add',
    name: 'latitude-add',
    component: LatitudeAddComponent
},


{
   path: '/latitude-edit',
    name: 'latitude-edit',
    component: LatitudeEditComponent
},


{
   path: '/longitude-complete',
    name: 'longitude-complete',
    component: LongitudeCompleteComponent
},


{
   path: '/longitude-conditional-expression',
    name: 'longitude-conditional-expression',
    component: LongitudeConditionalExpressionComponent
},


{
   path: '/longitude-message',
    name: 'longitude-message',
    component: LongitudeMessageComponent
},


{
   path: '/longitude-message-key',
    name: 'longitude-message-key',
    component: LongitudeMessageKeyComponent
},


{
   path: '/longitude-dynamic',
    name: 'longitude-dynamic',
    component: LongitudeDynamicComponent
},


{
   path: '/longitude-add',
    name: 'longitude-add',
    component: LongitudeAddComponent
},


{
   path: '/longitude-edit',
    name: 'longitude-edit',
    component: LongitudeEditComponent
},


{
   path: '/extension-complete',
    name: 'extension-complete',
    component: ExtensionCompleteComponent
},


{
   path: '/extension-extensions',
    name: 'extension-extensions',
    component: ExtensionExtensionsComponent
},


{
   path: '/extension-conditional-expression',
    name: 'extension-conditional-expression',
    component: ExtensionConditionalExpressionComponent
},


{
   path: '/extension-message',
    name: 'extension-message',
    component: ExtensionMessageComponent
},


{
   path: '/extension-message-key',
    name: 'extension-message-key',
    component: ExtensionMessageKeyComponent
},


{
   path: '/extension-dynamic',
    name: 'extension-dynamic',
    component: ExtensionDynamicComponent
},


{
   path: '/extension-add',
    name: 'extension-add',
    component: ExtensionAddComponent
},


{
   path: '/extension-edit',
    name: 'extension-edit',
    component: ExtensionEditComponent
},


{
   path: '/file-complete',
    name: 'file-complete',
    component: FileCompleteComponent
},


{
   path: '/file-max-files',
    name: 'file-max-files',
    component: FileMaxFilesComponent
},


{
   path: '/file-min-files',
    name: 'file-min-files',
    component: FileMinFilesComponent
},


{
   path: '/file-conditional-expression',
    name: 'file-conditional-expression',
    component: FileConditionalExpressionComponent
},


{
   path: '/file-message',
    name: 'file-message',
    component: FileMessageComponent
},


{
   path: '/file-message-key',
    name: 'file-message-key',
    component: FileMessageKeyComponent
},


{
   path: '/file-dynamic',
    name: 'file-dynamic',
    component: FileDynamicComponent
},


{
   path: '/file-add',
    name: 'file-add',
    component: FileAddComponent
},


{
   path: '/file-edit',
    name: 'file-edit',
    component: FileEditComponent
},


{
   path: '/image-complete',
    name: 'image-complete',
    component: ImageCompleteComponent
},


{
   path: '/image-max-height',
    name: 'image-max-height',
    component: ImageMaxHeightComponent
},


{
   path: '/image-max-width',
    name: 'image-max-width',
    component: ImageMaxWidthComponent
},


{
   path: '/image-min-height',
    name: 'image-min-height',
    component: ImageMinHeightComponent
},


{
   path: '/image-min-width',
    name: 'image-min-width',
    component: ImageMinWidthComponent
},


{
   path: '/image-conditional-expression',
    name: 'image-conditional-expression',
    component: ImageConditionalExpressionComponent
},


{
   path: '/image-message',
    name: 'image-message',
    component: ImageMessageComponent
},


{
   path: '/image-message-key',
    name: 'image-message-key',
    component: ImageMessageKeyComponent
},


{
   path: '/image-dynamic',
    name: 'image-dynamic',
    component: ImageDynamicComponent
},


{
   path: '/image-add',
    name: 'image-add',
    component: ImageAddComponent
},


{
   path: '/image-edit',
    name: 'image-edit',
    component: ImageEditComponent
},


{
   path: '/cusip-complete',
    name: 'cusip-complete',
    component: CusipCompleteComponent
},


{
   path: '/cusip-conditional-expression',
    name: 'cusip-conditional-expression',
    component: CusipConditionalExpressionComponent
},


{
   path: '/cusip-message',
    name: 'cusip-message',
    component: CusipMessageComponent
},


{
   path: '/cusip-message-key',
    name: 'cusip-message-key',
    component: CusipMessageKeyComponent
},


{
   path: '/cusip-dynamic',
    name: 'cusip-dynamic',
    component: CusipDynamicComponent
},


{
   path: '/cusip-add',
    name: 'cusip-add',
    component: CusipAddComponent
},


{
   path: '/cusip-edit',
    name: 'cusip-edit',
    component: CusipEditComponent
},


{
   path: '/date-complete',
    name: 'date-complete',
    component: DateCompleteComponent
},


{
   path: '/date-conditional-expression',
    name: 'date-conditional-expression',
    component: DateConditionalExpressionComponent
},


{
   path: '/date-message',
    name: 'date-message',
    component: DateMessageComponent
},


{
   path: '/date-message-key',
    name: 'date-message-key',
    component: DateMessageKeyComponent
},


{
   path: '/date-dynamic',
    name: 'date-dynamic',
    component: DateDynamicComponent
},


{
   path: '/date-add',
    name: 'date-add',
    component: DateAddComponent
},


{
   path: '/date-edit',
    name: 'date-edit',
    component: DateEditComponent
},


{
   path: '/blacklist-add',
    name: 'blacklist-add',
    component: BlacklistAddComponent
},


{
   path: '/whitelist-add',
    name: 'whitelist-add',
    component: WhitelistAddComponent
},


{
   path: '/ltrim-add',
    name: 'ltrim-add',
    component: LtrimAddComponent
},


{
   path: '/rtrim-add',
    name: 'rtrim-add',
    component: RtrimAddComponent
},


{
   path: '/trim-add',
    name: 'trim-add',
    component: TrimAddComponent
},


{
   path: '/strip-low-add',
    name: 'strip-low-add',
    component: StripLowAddComponent
},


{
   path: '/to-boolean-complete',
    name: 'to-boolean-complete',
    component: ToBooleanCompleteComponent
},


{
   path: '/to-boolean-strict',
    name: 'to-boolean-strict',
    component: ToBooleanStrictComponent
},


{
   path: '/to-date-add',
    name: 'to-date-add',
    component: ToDateAddComponent
},


{
   path: '/to-double-add',
    name: 'to-double-add',
    component: ToDoubleAddComponent
},


{
   path: '/to-float-add',
    name: 'to-float-add',
    component: ToFloatAddComponent
},


{
   path: '/to-int-complete',
    name: 'to-int-complete',
    component: ToIntCompleteComponent
},


{
   path: '/to-int-radix',
    name: 'to-int-radix',
    component: ToIntRadixComponent
},


{
   path: '/to-string-add',
    name: 'to-string-add',
    component: ToStringAddComponent
},


{
   path: '/grid-complete',
    name: 'grid-complete',
    component: GridCompleteComponent
},


{
   path: '/grid-conditional-expression',
    name: 'grid-conditional-expression',
    component: GridConditionalExpressionComponent
},


{
   path: '/grid-message',
    name: 'grid-message',
    component: GridMessageComponent
},


{
   path: '/grid-message-key',
    name: 'grid-message-key',
    component: GridMessageKeyComponent
},


{
   path: '/grid-dynamic',
    name: 'grid-dynamic',
    component: GridDynamicComponent
},


{
   path: '/grid-add',
    name: 'grid-add',
    component: GridAddComponent
},


{
   path: '/grid-edit',
    name: 'grid-edit',
    component: GridEditComponent
},

];

const router = new VueRouter({
  routes,
});

export default router;
