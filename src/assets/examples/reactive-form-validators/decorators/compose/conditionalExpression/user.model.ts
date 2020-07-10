import {  compose, RxwebValidators, } from "@rxweb/reactive-form-validators"

export class User {

	@compose({validators:[RxwebValidators.required(), RxwebValidators.alpha()] }) 
	firstName: string;

	//If you want to apply conditional expression of type 'string'
	@compose({validators:[RxwebValidators.alpha()]  ,conditionalExpression:'x => x.firstName =="Bharat"' }) 
	city: string;

	//If you want to apply conditional expression of type 'function'
	@compose({validators:[RxwebValidators.digit()]  ,conditionalExpression:(x,y) => x.firstName == "Bharat" }) 
	age: number;

}
