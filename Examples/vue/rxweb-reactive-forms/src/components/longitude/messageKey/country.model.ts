import {  longitude, } from   "@rxweb/reactive-forms"   

export class Country {

	@longitude({messageKey:'longitudeMessageKey' }) 
	fourthCountryLongitude: string;
	
	
}
