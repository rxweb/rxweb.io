import {  compose,RxwebValidators } from "@rxweb/reactive-form-validators"

export class User {

	@compose({validators:[RxwebValidators.alpha()],message:"Input can only contain alphabets"}) 
	firstName: string;

}