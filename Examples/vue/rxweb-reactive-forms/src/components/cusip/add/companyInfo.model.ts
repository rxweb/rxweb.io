import {  cusip, } from   "@rxweb/reactive-forms"   

export class CompanyInfo {

	@cusip() 
	oracleCorporationCusipCode: string;
	
	
}
