import {  maxTimeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	closingTime: string;

	@prop()
	breakHours: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
