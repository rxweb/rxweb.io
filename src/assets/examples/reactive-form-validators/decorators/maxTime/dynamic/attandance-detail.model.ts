import {  maxTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	closingTime: string;

	@prop()
	entryTime: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
