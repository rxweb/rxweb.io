import {  cusip, } from   "@rxweb/reactive-forms"   

export class CompanyInfo {

	@cusip({messageKey:'cusipMessageKey' }) 
	amazonCorporationCusipCode: string;
	
	
}
