import {  latLong, } from   "@rxweb/reactive-form-validators"   

export class Country {

	@latLong({messageKey:'latLongMessageKey' }) 
	fourthCountry: string;
	
	
}
