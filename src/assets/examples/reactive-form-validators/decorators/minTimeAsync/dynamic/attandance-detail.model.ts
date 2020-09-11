import {  minTimeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@prop()
	openingTime: string;

	@prop()
	requiredHours: string;

	@prop()
	totalOutTime: string;

	@prop()
	exitTime: string;

	@prop()
	netInTime: string;

}
