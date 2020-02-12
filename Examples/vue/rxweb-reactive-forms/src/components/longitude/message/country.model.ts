import {  longitude, } from   "@rxweb/reactive-forms"   

export class Country {

	@longitude({message:'{{0}} is not a longitude' }) 
	firstCountryLongitude: string;
	
	
}
