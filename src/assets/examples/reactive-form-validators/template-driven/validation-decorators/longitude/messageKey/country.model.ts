import {  longitude, } from   "@rxweb/reactive-form-validators"   

export class Country {

	@longitude({messageKey:'longitudeMessageKey' }) 
	fourthCountryLongitude: string;
	
	
}
