import {  requiredTrue, } from   "@rxweb/reactive-form-validators"   

export class User {

	@requiredTrue({messageKey:'requiredTrueMessageKey' }) 
	isBlocked: string;
	
	
}
