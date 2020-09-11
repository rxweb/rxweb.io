import {  minLengthAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Contact {

	@prop()
	countryName: string;

	@prop()
	mobileNo: string;

	@prop()
	landLineNo: string;

	@prop()
	stateName: string;

}
