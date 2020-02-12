import {  minTime,prop, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	openingTime: string;

	@prop()
	requiredHours: string;

	@prop()
	entryTime: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
