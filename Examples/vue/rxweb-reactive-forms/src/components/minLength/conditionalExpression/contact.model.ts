import {  minLength,prop, } from   "@rxweb/reactive-forms"   

export class Contact {

	@prop()
	countryName: string;

	//If you want to apply conditional expression of type 'string'
	@minLength({value:3  ,conditionalExpression:'x => x.countryName == "India"' }) 
	stateCode: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@minLength({value:3  ,conditionalExpression:(x,y)=> x.countryName == "India" }) 
	countryCode: string;
	
	
}
