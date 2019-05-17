import {  minTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@minTime({operator:'>'  ,value:'08:30' }) 
	requiredHours: string;
	
	
	@prop()
	openingTime: string;

	//If you want to apply conditional expression of type 'function'
	@minTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,fieldName:'netInTime' }) 
	totalInTime: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@minTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,fieldName:'openingTime' }) 
	entryTime: string;
	
	
	@minTime({allowSeconds:true  ,value:'00:10:00' }) 
	totalOutTime: string;
	
	
	@minTime({message:'You can enter only time format data greater than config value'  ,value:'07:00' }) 
	exitTime: string;
	
	
	@prop()
	netInTime: string;

}
