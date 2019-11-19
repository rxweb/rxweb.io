import { NumericCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/complete/numeric-complete.component";
import { NumericCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/complete/numeric-complete.component";
import { NumericCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/complete/numeric-complete.component";
import { NumericCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/complete/numeric-complete.component";
import { NumericAcceptValueComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/acceptValue/numeric-accept-value.component";
import { NumericAcceptValueTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/acceptValue/numeric-accept-value.component";
import { NumericAcceptValueTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/acceptValue/numeric-accept-value.component";
import { NumericAcceptValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/acceptValue/numeric-accept-value.component";
import { NumericIsFormatComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/isFormat/numeric-is-format.component";
import { NumericIsFormatTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/isFormat/numeric-is-format.component";
import { NumericIsFormatTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/isFormat/numeric-is-format.component";
import { NumericIsFormatValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/isFormat/numeric-is-format.component";
import { NumericAllowDecimalComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/allowDecimal/numeric-allow-decimal.component";
import { NumericAllowDecimalTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/allowDecimal/numeric-allow-decimal.component";
import { NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/allowDecimal/numeric-allow-decimal.component";
import { NumericAllowDecimalValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/allowDecimal/numeric-allow-decimal.component";
import { NumericConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/conditionalExpression/numeric-conditional-expression.component";
import { NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/conditionalExpression/numeric-conditional-expression.component";
import { NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/conditionalExpression/numeric-conditional-expression.component";
import { NumericConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/conditionalExpression/numeric-conditional-expression.component";
import { NumericMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/message/numeric-message.component";
import { NumericMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/message/numeric-message.component";
import { NumericMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/message/numeric-message.component";
import { NumericMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/message/numeric-message.component";
import { NumericMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/messageKey/numeric-message-key.component";
import { NumericMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/messageKey/numeric-message-key.component";
import { NumericMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/messageKey/numeric-message-key.component";
import { NumericMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/messageKey/numeric-message-key.component";
import { NumericDigitsInfoComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/digitsInfo/numeric-digits-info.component";
import { NumericDigitsInfoTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/digitsInfo/numeric-digits-info.component";
import { NumericDigitsInfoTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/digitsInfo/numeric-digits-info.component";
import { NumericDigitsInfoValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/digitsInfo/numeric-digits-info.component";
import { NumericDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/dynamic/numeric-dynamic.component";
import { NumericDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/dynamic/numeric-dynamic.component";
import { NumericAddComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/add/numeric-add.component";
import { NumericAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/numeric/add/numeric-add.component";
import { NumericAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/numeric/add/numeric-add.component";
import { NumericAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/numeric/add/numeric-add.component";
import { NumericEditComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/edit/numeric-edit.component";
import { NumericDecimalSeperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/numeric/decimalSeperator/numeric-decimal-seperator.component";

export const NUMERIC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : NumericCompleteComponent,
						acceptValue : NumericAcceptValueComponent,
						isFormat : NumericIsFormatComponent,
						allowDecimal : NumericAllowDecimalComponent,
						conditionalExpression : NumericConditionalExpressionComponent,
						message : NumericMessageComponent,
						messageKey : NumericMessageKeyComponent,
						digitsInfo : NumericDigitsInfoComponent,
						dynamic : NumericDynamicComponent,
						add : NumericAddComponent,
						edit : NumericEditComponent,
						decimalSeperator:NumericDecimalSeperatorComponent
			  },
	template_driven_validation_directives:{
						complete : NumericCompleteTemplateDrivenValidationDirectivesComponent,
						acceptValue : NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
						isFormat : NumericIsFormatTemplateDrivenValidationDirectivesComponent,
						allowDecimal : NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : NumericMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
						digitsInfo : NumericDigitsInfoTemplateDrivenValidationDirectivesComponent,
						add : NumericAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : NumericCompleteTemplateDrivenValidationDecoratorsComponent,
						acceptValue : NumericAcceptValueTemplateDrivenValidationDecoratorsComponent,
						isFormat : NumericIsFormatTemplateDrivenValidationDecoratorsComponent,
						allowDecimal : NumericAllowDecimalTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : NumericConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : NumericMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : NumericMessageKeyTemplateDrivenValidationDecoratorsComponent,
						digitsInfo : NumericDigitsInfoTemplateDrivenValidationDecoratorsComponent,
						add : NumericAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : NumericCompleteValidatorComponent,
						acceptValue : NumericAcceptValueValidatorComponent,
						isFormat : NumericIsFormatValidatorComponent,
						allowDecimal : NumericAllowDecimalValidatorComponent,
						conditionalExpression : NumericConditionalExpressionValidatorComponent,
						message : NumericMessageValidatorComponent,
						messageKey : NumericMessageKeyValidatorComponent,
						digitsInfo : NumericDigitsInfoValidatorComponent,
						dynamic : NumericDynamicValidatorComponent,
						add : NumericAddValidatorComponent,
			  },
}