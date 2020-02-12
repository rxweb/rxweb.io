import {  latitude, } from   "@rxweb/reactive-forms"   

export class Country {

	@latitude({messageKey:'latitudeMessageKey' }) 
	fourthCountryLatitude: string;
	
	
}
