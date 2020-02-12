import {  cusip, } from   "@rxweb/reactive-forms"   

export class CompanyInfo {

	@cusip({message:'{{0}} is not a valid cusip Code' }) 
	appleIncCusipCode: string;
	
	
}
