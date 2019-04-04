import {  latitude, } from   "@rxweb/reactive-form-validators"   

export class Country {

	@latitude({messageKey:'latitudeMessageKey' }) 
	fourthCountryLatitude: string;
	
	
}
