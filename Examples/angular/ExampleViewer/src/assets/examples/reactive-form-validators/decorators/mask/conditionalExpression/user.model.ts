import {  mask,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	firstName: string;

	//If you want to apply conditional expression of type 'string'
	@mask({mask:'9999'  ,conditionalExpression:'x => x.firstName == "Bharat"' }) 
	zipcode: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@mask({mask:'999-999'  ,conditionalExpression:(x,y)=> x.firstName == "Bharat" }) 
	postalCode: string;
	
	
}
