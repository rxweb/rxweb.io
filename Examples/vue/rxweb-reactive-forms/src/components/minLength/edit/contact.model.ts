import {  minLength, } from   "@rxweb/reactive-forms"   

export class Contact {

	@minLength({value:3 }) 
	countryName: string;
	
	
}
