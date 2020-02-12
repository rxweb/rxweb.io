import {  latLong, } from   "@rxweb/reactive-forms"   

export class Country {

	@latLong({messageKey:'latLongMessageKey' }) 
	fourthCountry: string;
	
	
}
