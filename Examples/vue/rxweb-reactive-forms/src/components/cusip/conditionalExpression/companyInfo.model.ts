import {  cusip,prop, } from   "@rxweb/reactive-forms"   

export class CompanyInfo {

	@prop()
	companyName: string;

	//If you want to apply conditional expression of type 'string'
	@cusip({conditionalExpression:'x => x.companyName =="Microsoft"' }) 
	microsoftCorporationCusipCode: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@cusip({conditionalExpression:(x,y) => x.companyName == "Google"  }) 
	googleIncCusipCode: string;
	
	
}
