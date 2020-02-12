import {  maxTime,prop, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	closingTime: string;

	@prop()
	breakHours: string;

	@prop()
	entryTime: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
