import {  requiredTrue, } from   "@rxweb/reactive-form-validators"   

export class User {

	@requiredTrue() 
	isAgree: boolean;
	
	
	//If you want to apply conditional expression of type 'string'
	@requiredTrue({conditionalExpression:'x => x.isAgree == true' }) 
	checkMeOut: boolean;
	
	
	//If you want to apply conditional expression of type 'function'
	@requiredTrue({conditionalExpression:(x,y) => x.isAgree == true }) 
	isChecked: boolean;
	
	
}
