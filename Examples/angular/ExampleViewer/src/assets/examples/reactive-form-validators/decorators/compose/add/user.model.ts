import {  compose,RxwebValidators } from   "@rxweb/reactive-form-validators"   

export class User {

	@compose({validators:[RxwebValidators.required(), RxwebValidators.alpha()] }) 
    firstName:string;
	
}
