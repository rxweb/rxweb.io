import {  latLong,prop, } from   "@rxweb/reactive-forms"   

export class Country {

	@prop()
	continent: string;

	@prop()
	thirdCountry: string;

	@prop()
	firstCountry: string;

	@prop()
	fourthCountry: string;

}
