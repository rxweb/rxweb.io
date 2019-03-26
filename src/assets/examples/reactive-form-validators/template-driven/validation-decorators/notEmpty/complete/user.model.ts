import {  notEmpty, } from   "@rxweb/reactive-form-validators"   

export class User {

	@notEmpty() 
	firstName: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@notEmpty({conditionalExpression:(x,y) => x.firstName == "Bharat"  }) 
	middleName: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@notEmpty({conditionalExpression:'x => x.firstName == "Bharat"' }) 
	lastName: string;
	
	
	@notEmpty({message:'Username cannot be blank.' }) 
	userName: string;
	
	
}
