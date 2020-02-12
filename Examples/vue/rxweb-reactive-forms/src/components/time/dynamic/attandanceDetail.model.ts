import {  time,prop, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	entryTime: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
