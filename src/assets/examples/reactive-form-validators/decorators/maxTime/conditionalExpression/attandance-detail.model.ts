import {  maxTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	//If you want to apply conditional expression of type 'string'
	@maxTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,value:'11:00' }) 
	entryTime: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@maxTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,value:'12:00' }) 
	totalInTime: string;
	
	
}
