import {  alpha,prop, } from   "@rxweb/reactive-forms"   

export class AddressInfo {

	@prop()
	countryName: string;

	@prop()
	cityName: string;

	@prop()
	stateName: string;

	@prop()
	stateCode: string;

	@prop()
	cityCode: string;

}
