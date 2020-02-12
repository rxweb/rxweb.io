import {  longitude,prop, } from   "@rxweb/reactive-forms"   

export class Country {

	@prop()
	continent: string;

	@prop()
	thirdCountryLongitude: string;

	@prop()
	firstCountryLongitude: string;

	@prop()
	fourthCountryLongitude: string;

}
