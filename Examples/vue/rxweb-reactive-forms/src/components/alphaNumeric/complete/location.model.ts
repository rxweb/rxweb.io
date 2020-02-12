import {  alphaNumeric, } from   "@rxweb/reactive-forms"   

export class Location {

	@alphaNumeric() 
	areaName: string;
	
	
	@alphaNumeric({allowWhiteSpace:true }) 
	flatAddress: string;
	
	
	//Shows custom message
	@alphaNumeric({message:'Please enter only alphanumerics, special characters are not allowed.' }) 
	postalAddress: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@alphaNumeric({conditionalExpression:(x,y) => x.areaName == "Delhi"  }) 
	countryCode: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@alphaNumeric({conditionalExpression:'x => x.areaName =="Delhi"' }) 
	cityCode: string;
	
	
	@alphaNumeric({messageKey:'alphaNumericMessageKey' }) 
	colonyName: string;
	
	
}
