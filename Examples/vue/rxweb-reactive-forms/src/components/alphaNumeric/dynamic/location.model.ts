import {  alphaNumeric,prop, } from   "@rxweb/reactive-forms"   

export class Location {

	@prop()
	areaName: string;

	@prop()
	flatAddress: string;

	@prop()
	postalAddress: string;

	@prop()
	cityCode: string;

	@prop()
	colonyName: string;

}
