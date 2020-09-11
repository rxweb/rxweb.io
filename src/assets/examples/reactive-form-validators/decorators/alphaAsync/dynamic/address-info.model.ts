import {  alphaAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AddressInfo {

	@prop()
	countryName: string;

	@prop()
	cityName: string;

	@prop()
	spanishcityName: string;

	@prop()
	stateName: string;

	@prop()
	stateCode: string;

	@prop()
	cityCode: string;

}
