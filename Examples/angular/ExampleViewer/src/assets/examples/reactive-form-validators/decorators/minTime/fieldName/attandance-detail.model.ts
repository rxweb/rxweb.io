import {  minTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	netInTime: string;

	//If you want to apply conditional expression of type 'string'
	@minTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,fieldName:'openingTime' }) 
	entryTime: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@minTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,fieldName:'netInTime' }) 
	totalInTime: string;
	
	
}
