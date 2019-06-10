import {  compose,RxwebValidators } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms";

export class User {

	@compose({validators:[RxwebValidators.required(), RxwebValidators.alpha()] }) 
    firstName: string;


	//If you want to apply conditional expression of type 'function'
	@compose({validators:[RxwebValidators.digit()]  ,conditionalExpression:(x,y) => x.firstName == "Bharat" }) 
	age: number;

	//If you want to apply conditional expression of type 'string'
	@compose({validators:[RxwebValidators.alpha()]  ,conditionalExpression:'x => x.firstName =="Bharat"' }) 
	city: string;

	@compose({validators:[RxwebValidators.alpha()]  ,message:'You can only enter alphabets.' }) 
    countryName: string;
    
    @compose({validators:[uniqueCountryCode()]}) 
	countryCode: string;

}
function uniqueCountryCode() {
    return (control: AbstractControl) => {
        if (control.value != "IND")
            return null;
        else
            return {
                uniqueCountryCode: {message:"Country Code Should be Unique"}
            }
    }
}