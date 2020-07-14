import {  mask,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	firstName: string;

	@mask({mask:'(999)-999 9999' }) 
	phoneNumber: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@mask({mask:'999-999'  ,conditionalExpression:(x,y)=> x.firstName == "Bharat" }) 
	postalCode: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@mask({mask:'9999'  ,conditionalExpression:'x => x.firstName == "Bharat"' }) 
	zipcode: string;
	
	
	//Shows custom message
	@mask({mask:'999-9999999'  ,message:'Enter a valid Contact Number' }) 
	contactNumber: string;
	
	
	//Digit Options
	@mask({mask:'999-9999999'  ,minLength:10 }) 
	residentalContactNumber: string;
	
	
	//Shows custom message based on message key
	@mask({mask:'9999999999'  ,messageKey:'maskMessageKey' }) 
	alternateContactNumber: string;
	
	
}
