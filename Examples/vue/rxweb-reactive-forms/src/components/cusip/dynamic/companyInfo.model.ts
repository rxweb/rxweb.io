import {  cusip,prop, } from   "@rxweb/reactive-forms"   

export class CompanyInfo {

	@prop()
	companyName: string;

	@prop()
	oracleCorporationCusipCode: string;

	@prop()
	microsoftCorporationCusipCode: string;

	@prop()
	appleIncCusipCode: string;

	@prop()
	amazonCorporationCusipCode: string;

}
