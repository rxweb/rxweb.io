import {  latitude,prop, } from   "@rxweb/reactive-forms"   

export class Country {

	@prop()
	continent: string;

	@prop()
	thirdCountryLatitude: string;

	@prop()
	firstCountryLatitude: string;

	@prop()
	fourthCountryLatitude: string;

}
