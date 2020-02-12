import {  upperCase,prop, } from   "@rxweb/reactive-forms"   

export class Location {

	@prop()
	countryName: string;

	@prop()
	cityName: string;

	@prop()
	colonyName: string;

	@prop()
	streetName: string;

}
