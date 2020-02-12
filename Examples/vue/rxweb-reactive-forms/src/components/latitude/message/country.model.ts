import {  latitude, } from   "@rxweb/reactive-forms"   

export class Country {

	@latitude({message:'{{0}} is not a latitude' }) 
	firstCountryLatitude: string;
	
	
}
