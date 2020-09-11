import {  alphaNumericAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@prop()
	areaName: string;

	@prop()
	flatAddress: string;

	@prop()
	spanishcityName: string;

	@prop()
	postalAddress: string;

	@prop()
	colonyName: string;

}
