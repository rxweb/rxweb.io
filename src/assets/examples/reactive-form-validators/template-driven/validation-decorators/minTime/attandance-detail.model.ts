import {  minTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	requiredHours: string;

	@prop()
	openingTime: string;

	@prop()
	entryTime: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
